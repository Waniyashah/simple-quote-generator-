const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "It does not matter how slowly you go as long as you do not stop.",
    "In the middle of difficulty lies opportunity.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "You miss 100% of the shots you don’t take.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The best way to predict your future is to create it.",
    "The only limit to our realization of tomorrow is our doubts of today."
  ];
  
  const quoteElement = document.getElementById("quote") as HTMLParagraphElement;
  const newQuoteButton = document.getElementById("new-quote") as HTMLButtonElement;
  
  // Correct function name
  newQuoteButton.addEventListener("click", generateQuote);
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    // No need for randomQuote.quote, since it's a string
    quoteElement.innerText = randomQuote;
  }
  
  // Generate an initial quote when the page loads
  generateQuote();
  