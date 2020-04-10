// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  //CREATING THE COMPONENTS FOR THE HTML
  const headerContainer = document.querySelector(".header-container");

  const headerDiv       = document.createElement("div");
  const date            = document.createElement("span");
  const title           = document.createElement("h1");
  const temperature     = document.createElement("span");

  //STRUCTURE
  headerDiv.appendChild(date);
  headerDiv.appendChild(title);
  headerDiv.appendChild(temperature);
  headerContainer.appendChild(headerDiv);

  //CREATE THE CLASSES
  headerDiv.classList.add("header");
  date.classList.add("date");
  temperature.classList.add("temp");

  //ADD THE TEXT Content
  date.textContent        = "MARCH 28, 2019";
  title.textContent       = "Lambda Times";
  temperature.textContent = "98°";

  return headerDiv;
}
Header();













//END OF FILE
