from flask import Flask, render_template, request
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn.functional as F

app = Flask(__name__)

# Load both models
tokenizer_A = AutoTokenizer.from_pretrained("./Model A")
model_A = AutoModelForSequenceClassification.from_pretrained("./Model A")
model_A.eval()

tokenizer_B = AutoTokenizer.from_pretrained("./Model B")
model_B = AutoModelForSequenceClassification.from_pretrained("./Model B")
model_B.eval()

def predict_rating(model, tokenizer, text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=128)
    with torch.no_grad():
        outputs = model(**inputs)
        probs = F.softmax(outputs.logits, dim=1)
        pred_class = torch.argmax(probs, dim=1).item()
    return pred_class + 1  # Classes from 1 to 5

@app.route("/", methods=["GET", "POST"])
def index():
    prediction_A = prediction_B = review = None
    agreement = None

    if request.method == "POST":
        review = request.form["review"]

        prediction_A = predict_rating(model_A, tokenizer_A, review)
        prediction_B = predict_rating(model_B, tokenizer_B, review)

        agreement = (prediction_A == prediction_B)

    return render_template(
        "index.html",
        review=review,
        prediction_A=prediction_A,
        prediction_B=prediction_B,
        agreement=agreement
    )

if __name__ == "__main__":
    app.run(debug=True)
