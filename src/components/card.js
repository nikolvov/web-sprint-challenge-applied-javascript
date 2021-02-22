import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const divCard = document.createElement('div');
  // console.log(divCard)
  const headline = document.createElement('div');
  // console.log(headline)
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const name = document.createElement('span');

  divCard.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  divCard.appendChild(headline);
  divCard.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(name);

  headline.textContent = `${articles.headline}`;
  img.src = articles.authorPhoto;
  name.textContent = `By ${authorName}`;

  divCard.addEventListener('click', () => {
    console.log(headline);
  });

  return divCard
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.

  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
      const cards = document.querySelector('.cards-container');
      console.log(cards)
      const articles = response.data;
      console.log(articles);
      const bootCard = Card(articles.bootstrap);
      const jsCard = Card(articles.javascript);
      const jqCard = Card(articles.jquery);
      const nodeCard = Card(articles.node);
      const techCard = Card(articles.technology);
      cards.appendChild(bootCard);
      cards.appendChild(jsCard);
      cards.appendChild(jqCard);
      cards.appendChild(nodeCard);
      cards.appendChild(techCard);
    })
    .catch(error => {
      console.log(error);
    })

  // axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  //   .then(response => {
  //     const cards = document.querySelector('.cards-container')
  //     response.data.forEach(article => {
  //       const bootCard = Card(artic le)
  //       cards.appendChild(art)
  //     })
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // // axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  // //   .then(response => {
  // //     const cards = document.querySelector('.cards-container')
  // //     const articles = response.data;
  // //     articles.fetch(article => {
  // //       const component = Card(data);
  // //       cards.appendChild(component);
  // //     })
  // //   });
  // // articles.forEach((article) => {
  // //   axios.get(`https://lambda-times-api.herokuapp.com/articles`).then((response) => {
  // //     const cards = document.querySelector('.cards-container')
  // //     const data = response.data;
  // //     const bootCard = Card(data.bootstrap);
  // //     cards.appendChild(arrayCard);
  // //   });
  // // });
  // // axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  // //   .then(response => {
  // //     console.log()
  // //     const cards = document.querySelector('.cards-container')
  // //     const articles = response.data;
  // //     articles.map(article => {
  // //       const component = Card(article);
  // //       cards.appendChild(component);
  // //     })
  // //   });
}
export { Card, cardAppender }
