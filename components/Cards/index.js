// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">

//   <div class="headline">{Headline of article}</div>

//   <div class="author">
//
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//
//      <span>By {author's name}</span>
//
//   </div>

// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(res =>{
  //console.log(res.data);
})//end .then

function createCards(headline, authorPhoto, authorName){
  //CREATING THE ELEMENTS FOR THE HTML PAGE
  const cardDiv         = document.createElement("div");
  const headlineDiv     = document.createElement("div");
  const authorDiv       = document.createElement("div");
  const imgDivContainer = document.createElement("div");
  const authorImage     = document.createElement("img");
  const authorNameSpan  = document.createElement("span");

  //STRUCTURE
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDivContainer);
  imgDivContainer.appendChild(authorImage);
  authorDiv.appendChild(authorNameSpan);




  console.log(cardDiv);
}
createCards();


























//END OF FILE
