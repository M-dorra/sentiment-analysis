async function analyzeSentiment() {
    const text = document.getElementById('textInput').value;
    const response = await fetch('/analyze_sentiment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });
    const data = await response.json();
    document.getElementById('result').innerText = `Sentiment Score: ${data.sentiment_score}`;
}
