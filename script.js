const quotes = [
  { quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
  { quote: "To be, or not to be, that is the question.", author: "William Shakespeare" },
  { quote: "I have a dream...", author: "Martin Luther King Jr." },
  { quote: "It’s not what you look at that matters, it’s what you see.", author: "Henry David Thoreau" },
  { quote: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", author: "Stephen Hawking" },
  { quote: "History is written by the victors.", author: "Winston Churchill" },
  { quote: "Imagination is more important than knowledge.", author: "Albert Einstein" },
  { quote: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
  { quote: "There is nothing to fear but fear itself.", author: "Franklin D. Roosevelt" },
  { quote: "True patriotism is resistance to a government that does wrong.", author: "Thomas Jefferson" },
  { quote: "The only way to deal with this life meaningfully is to find one's passion and follow it.", author: "Albert Einstein" },
  { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { quote: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr." },
  { quote: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde" },
  { quote: "To improve is to change; to be perfect is to change often.", author: "Winston Churchill" },
  { quote: "Give me liberty, or give me death!", author: "Patrick Henry" },
  { quote: "An eye for an eye makes the whole world blind.", author: "Mahatma Gandhi" },
  { quote: "Those who cannot remember the past are condemned to repeat it.", author: "George Santayana" },
  { quote: "What doesn't kill us makes us stronger.", author: "Friedrich Nietzsche" },
  { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { quote: "The unexamined life is not worth living.", author: "Socrates" },
  { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "I think, therefore I am.", author: "René Descartes" },
  { quote: "I would rather die on my feet than live on my knees.", author: "Emiliano Zapata" },
  { quote: "Nothing in life is to be feared, it is only to be understood.", author: "Marie Curie" },
  { quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
  { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { quote: "Imagination is the only weapon in the war against reality.", author: "Lewis Carroll" },
  { quote: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke" },
  { quote: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
  { quote: "To know what you know and what you do not know, that is true knowledge.", author: "Confucius" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { quote: "A friend to all is a friend to none.", author: "Aristotle" },
  { quote: "We do not remember days, we remember moments.", author: "Cesare Pavese" },
  { quote: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
  { quote: "The mind is everything. What you think you become.", author: "Buddha" },
  { quote: "There are no shortcuts to any place worth going.", author: "Beverly Sills" },
  { quote: "Peace begins with a smile.", author: "Mother Teresa" },
  { quote: "Those who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" },
  { quote: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" }
];

const get_random_quote_index = () => {
  return Math.floor(Math.random() * (quotes.length))
};

const refresh = () => {
  let new_random_quote = Math.floor(Math.random() * (quotes.length))
  document.getElementById('quote').textContent = `"${quotes[new_random_quote]['quote']}`;
  document.getElementById('author').textContent = quotes[new_random_quote]['author'];
}

let random_quote = quotes[get_random_quote_index()];
document.getElementById('quote').textContent = `"${random_quote['quote']}`;
document.getElementById('author').textContent = random_quote['author'];
const btn = document.getElementById('btn');


btn.addEventListener('click', refresh);

