function analyzeText() {
    let text = document.getElementById("userInput").value.toLowerCase();

    let negativeWords = ["sad", "depressed", "lonely", "tired", "hopeless", "stress", "anxious"];
    let positiveWords = ["happy", "good", "great", "excited", "calm", "relaxed"];

    let score = 0;

    negativeWords.forEach(word => {
        if (text.includes(word)) {
            score--;
        }
    });

    positiveWords.forEach(word => {
        if (text.includes(word)) {
            score++;
        }
    });

    let result = "";

    if (score > 1) {
        result = " Low Risk (You seem positive)";
    } else if (score >= -1 && score <= 1) {
        result = " Medium Risk (Mixed emotions)";
    } else {
        result = " High Risk (Consider talking to someone)";
    }

    document.getElementById("result").innerText = result;
}