from flask import request, jsonify, render_template
from app import app
from app.model import analyze_sentiment

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/analyze_sentiment', methods=['POST'])
def predict_sentiment():
    text = request.json['text']
    score = analyze_sentiment(text)
    return jsonify({'sentiment_score': score})
