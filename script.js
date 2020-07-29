const quotes = [{
        name: "stephen King",
        quote: "get busy living or get busy dying",
    },
    {
        name: "kunta kinte",
        quote: "i don hknow whgat else to type but i cant leave the space empty",
    },
    {
        name: "aliyu murtala",
        quote: "computer science graduate who develops softwares",
    },
    {
        name: "new name",
        quote: "listen to my sermon and change your thinking",
    },
    {
        name: "abrahm licoln",
        quote: "schopol na scam you hear me",
    },
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}