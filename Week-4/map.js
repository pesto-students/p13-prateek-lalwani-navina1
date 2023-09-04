function calcWordFrequencies() {
    const inputText = prompt("Enter the sentence")
    if (!inputText) {
        alert("No input provided")
        return;
    }
    const words = inputText.split(" ");
    const wordFrequency = {};
    words.map((word) => {
        if (word in wordFrequency) {
            wordFrequency[word]++;
        }
        else {
            wordFrequency[word] = 1;
        }
    })
    console.log("word freequencies:");
    console.log(wordFrequency)
    for (const word in wordFrequency) {
        console.log(`${word} : ${wordFrequency[word]}`);
    }
}
calcWordFrequencies()