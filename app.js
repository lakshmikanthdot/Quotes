const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiu_url = "https://dummyjson.com/quotes";

async function getQuote(url) {
  const response = fetch("https://dummyjson.com/quotes");
  const data = await response.then((data) => data.json());
  let index = data.quotes[Math.floor(Math.random() * data.quotes.length)];
  quote.innerHTML = index.quote;
  author.innerHTML = index.author;
}
getQuote(apiu_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "  ---- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600 , height =300"
  );
}
