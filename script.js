const quotes = [
    { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { content: "Get busy living or get busy dying.", author: "Stephen King" },
    { content: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { content: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { content: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { content: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { content: "The mind is everything. What you think you become.", author: "Buddha" }
];

function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').textContent = quote.content;
    document.getElementById('author').textContent = `- ${quote.author}`;
}

document.getElementById('newQuote').addEventListener('click', getQuote);

// Load a quote on start
getQuote();