import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const divTopics = document.createElement('div');
  const divTab1 = document.createElement('div');
  const divTab2 = document.createElement('div');
  const divTab3 = document.createElement('div');

  divTopics.classList.add('topics');
  divTab1.classList.add('tab');
  divTab2.classList.add('tab');
  divTab3.classList.add('tab');

  divTopics.appendChild(divTab1);
  divTopics.appendChild(divTab2);
  divTopics.appendChild(divTab3);

  divTab1.textContent = topics.topics[0];
  divTab2.textContent = topics.topics[1];
  divTab3.textContent = topics.topics[2];
  
  return divTopics
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
  .then(response => {
    const tabs = document.querySelector('.tabs-container');
    const data = response.data;
    const component = Tabs(data);
    tabs.appendChild(component);
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  })
}

export { Tabs, tabsAppender }
