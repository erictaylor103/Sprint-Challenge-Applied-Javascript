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
  //console.log(res.data); // checked to see if data results are being fetched correctly by the axios function

  const articlesData = res.data.articles; //created variable to save all the articles data results so I can use it on my forEach loops in a Parent - Child manner
  //console.log(articlesData);

  //checked to see if each specific article could be retrieved from my articlesData variable in which all the article data results is saved
  //console.log(articles.javascript);
  //console.log(articles.bootstrap);
  //console.log(articles.technology);
  //console.log(articles.jquery);
  //console.log(articles.node);
  const allCards  = document.querySelector(".cards-container"); // created variable to store the MAIN CARDS container by selecting the cards-container class in the HTML

  //CREATE LOOPS - these will select each specific article and append the createCards function to allCards variable that has the ".cards-container" div stored

  articlesData.javascript.forEach(card =>{
    allCards.appendChild(createCards(card.headline, card.authorPhoto, card.authorName));
  });

  articlesData.bootstrap.forEach(card =>{
    allCards.appendChild(createCards(card.headline, card.authorPhoto, card.authorName));
  });

  articlesData.technology.forEach(card =>{
    allCards.appendChild(createCards(card.headline, card.authorPhoto, card.authorName));
  });

  articlesData.jquery.forEach(card =>{
    allCards.appendChild(createCards(card.headline, card.authorPhoto, card.authorName));
  });

  articlesData.node.forEach(card =>{
    allCards.appendChild(createCards(card.headline, card.authorPhoto, card.authorName));
  });

})//end .then
.catch(error =>{
  console.log(error);
})

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

  //CREATE/ADD THE CLASSES
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDivContainer.classList.add("img-container");

  //SET TEXT CONTENT and SRC
  headlineDiv.textContent = headline;
  authorImage.setAttribute("src", authorPhoto);
  authorNameSpan.textContent = "By: " + authorName;



  return cardDiv;

}

//END OF FILE
