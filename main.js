const quotes = [
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The best way to predict the future is to create it. - Peter Drucker",
    "You miss 100% of the shots you don't take. - Wayne Gretzky"
];

const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuoteBtn');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

newQuoteBtn.addEventListener('click', function() {
 
    quoteDisplay.style.opacity = 0;

    setTimeout(() => {
      
        quoteDisplay.textContent = getRandomQuote();
        
      
        quoteDisplay.style.opacity = 1;
    }, 500); 
});

quoteDisplay.textContent = getRandomQuote();