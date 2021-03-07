// Selecting the IDs from the DOM
const dataElementDiv = document.querySelector("#allCards");
const idDiv = document.querySelector("#card");

const titleDiv = document.querySelector("#title");
const subtitleDiv = document.querySelector("#subtitle");
const textDiv = document.querySelector("#textDiv");

// The API url which loads from a different port
const url = "http://localhost:3000/cards";
fetch(url)
  .then((res) => res.json())

  // The function displayData  will create as many elements as needed
  .then((data) => displayData(data));

displayData = (data) => {
  //   console.log(data);
  data.forEach((el) => {
    const titleEl = document.createElement("div");
    const subtitleEl = document.createElement("div");
    const textEl = document.createElement("div");

    titleEl.innerHTML = el.title;
    subtitleEl.innerHTML = el.subtitle;
    textEl.innerHTML = el.text;

    document.getElementById("title").appendChild(titleEl);
    document.getElementById("subtitle").appendChild(subtitleEl);
    document.getElementById("text").appendChild(textEl);
  });
};
