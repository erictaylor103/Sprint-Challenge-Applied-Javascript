// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

topicsDiv = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(res =>{
  const topicsArray = res.data.topics;    //store the data result from the topics folder/link in the topicsArray variable
    topicsArray.forEach(element => {      //loop trough each element in the topicsArray variable
      const newTab = createTab(element);  //create a newTab variable and pass the "createTab" function that will create a new Tab/div
        topicsDiv.appendChild(newTab);    //append the topicsDiv div into the newly created newTab


  });
})

function createTab(topic){                    //create a function "createTab" and pass in the "topic" argument so I can add the textContent of this argument to the "tab"  variable
  const tab = document.createElement("div");  //create a "tab" variable, create a div element and store it inside the "tab" variable

  //CREATE THE TEXT CONTENT FOR THE TAB
  tab.textContent = topic;

  //ADD THE CLASS
  tab.classList.add("tab");

  return tab;

}
