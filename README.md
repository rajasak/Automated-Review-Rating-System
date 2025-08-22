# Automated Review Rating System

An intelligent system that analyzes customer reviews and predicts star
ratings (1--5) using **Natural Language Processing (NLP)** and
**Transformer-based models** like BERT and RoBERTa.

##  Project Overview

-   Input: Customer review text
-   Output: Predicted rating (1 to 5 stars)
-   Models Used: BERT-base, RoBERTa-base
-   Dataset: Amazon Fine Food Reviews (\~1.6 lakh rows)

This project leverages **deep learning (transformers)** to map
linguistic patterns in reviews to corresponding ratings, ensuring robust
sentiment classification.

------------------------------------------------------------------------

##  Environment Setup

-   **Python 3.10+**

-   Required Libraries:

        pandas, numpy, matplotlib, seaborn, spacy, scikit-learn,
        beautifulsoup4, requests, torch, transformers, datasets

-   IDE: **VS Code**



------------------------------------------------------------------------

##  Dataset

-   Source: [Amazon Fine Food
    Reviews](https://www.kaggle.com/datasets/snap/amazon-fine-food-reviews)\
-   Final Balanced Dataset: [Google Drive
    Link](https://drive.google.com/file/d/1PEbxA8R9GeC7tRiIjFuos4IWZJLsj9Q_/view?usp=sharing)\
-   Distribution (after balancing):
    -   1★: 29,893
    -   2★: 16,234
    -   3★: 24,260
    -   4★: 42,517
    -   5★: 50,000

------------------------------------------------------------------------

##  Data Preprocessing

Steps applied:
- Removed duplicates and conflicting reviews
- Dropped unnecessary columns (IDs, timestamps, etc.)
- Cleaned text: lowercasing, removing URLs, emojis, punctuation, special
chars
- Stopword removal (using SpaCy)
- Lemmatization for reducing words to base form
- Filtered reviews (min 3 words, max 200 words)
- Encoded labels: ratings (1--5) → labels (0--4)

------------------------------------------------------------------------

##  Data Visualization

-   **Count plots & Pie charts** for class balance
-   **Histograms & Box plots** for word count distribution
-   Samples of real reviews across all 5 classes

------------------------------------------------------------------------

##  Model Training

### 1. BERT (Bidirectional Encoder Representations from Transformers)

-   Architecture: 12 Transformer layers, 768 hidden size, 12 heads
    (~110M parameters)
-   Tokenization: WordPiece (vocab size ~30k)
-   Training details:
    -   Learning rate: `5e-5` → `1e-5` (best: `4e-5`)
    -   Epochs: `6`
    -   Batch size: `16`
    -   Max length: `64`
    -   Optimizer: `AdamW`
    -   Loss: CrossEntropy

### 2. RoBERTa (Robustly Optimized BERT Pretraining Approach)

-   Architecture: Same as BERT, but uses BPE tokenizer (~50k vocab)
-   Showed better generalization with small learning rates

------------------------------------------------------------------------

##  Results

### Best Performance (BERT-base, no stopword removal + no lemmatization, lr = 4e-5)


-   **Overall Accuracy**: **90.56%**
-   **Macro F1**: 0.8918
-   **Weighted F1**: 0.9053

### Classification Report Highlights

-   **Rating 1**: Precision = 0.9270, Recall = 0.9386, F1 = 0.9328
-   **Rating 2**: Lowest performance (F1 = 0.8255)
-   **Ratings 3--5**: Strong performance (F1 range 0.8648 -- 0.9428)



##  References

-   Dataset: [Amazon Fine Food
    Reviews](https://www.kaggle.com/datasets/snap/amazon-fine-food-reviews)
-   Hugging Face Transformers:
    [Documentation](https://huggingface.co/docs/transformers)

