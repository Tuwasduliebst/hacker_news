// const ajax = new XMLHttpRequest();
// const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';

// ajax.open('GET', NEWS_URL, false);
// ajax.send();

// const newsFeed = JSON.parse(ajax.response);
// const ul = document.createElement('ul');

// for(let i = 0; i < 10; i++) {
//   const li = document.createElement('li');

//   li.innerHTML = newsFeed[i].title;

//   ul.appendChild(li);
// }

// document.getElementById('root').appendChild(ul);
const ajax = new XMLHttpRequest();
const news_url = "https://api.hnpwa.com/v0/news/1.json";

ajax.open("GET", news_url, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement("ul");

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = "#";
  a.innerHTML = newsFeed[i].title;

  li.appendChild(a);
  ul.appendChild(li);
}

document.getElementById("root").appendChild(ul);
