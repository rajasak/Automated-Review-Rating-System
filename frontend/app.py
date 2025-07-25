import streamlit as st
import pickle

# ---------------------------
# 1. Load Models and Vectorizers
# ---------------------------
@st.cache_resource
def load_assets():
    with open("balance.pkl", "rb") as f:
        model_A = pickle.load(f)

    with open("vecbalance.pkl", "rb") as f:
        vectorizer_A = pickle.load(f)

    with open("random_forest_model.pkl", "rb") as f:
        model_B = pickle.load(f)

    with open("vectorizer.pkl", "rb") as f:
        vectorizer_B = pickle.load(f)

    return model_A, vectorizer_A, model_B, vectorizer_B

model_A, vectorizer_A, model_B, vectorizer_B = load_assets()

# ---------------------------
# 2. Streamlit UI Layout
# ---------------------------
st.title("AUTOMATED REVIEW SYSTEM")
st.subheader("Compare Predictions from Two Specialized Models")

st.markdown("""
- **Model A**: Trained on Logistic regression
- **Model B**: Trained on Random Forest
""")

# ---------------------------
# 3. User Input
# ---------------------------
review = st.text_area("📝 Enter a product review to predict its rating:", height=150)

if st.button("📊 Predict Rating"):
    if not review.strip():
        st.warning("Please enter a review before predicting.")
    else:
        # Vectorize using each model's respective vectorizer
        vec_review_A = vectorizer_A.transform([review])
        vec_review_B = vectorizer_B.transform([review])

        # Get predictions
        pred_A = model_A.predict(vec_review_A)[0]
        pred_B = model_B.predict(vec_review_B)[0]

        # ---------------------------
        # 4. Display Results
        # ---------------------------
        col1, col2 = st.columns(2)

        with col1:
            st.header("Model A")
            st.success(f"🔸 Predicted Rating: **{pred_A}**")

        with col2:
            st.header("Model B")
            st.info(f"🔹 Predicted Rating: **{pred_B}**")
