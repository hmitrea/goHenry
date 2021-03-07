const url = "http://localhost:3000/cards";

fetch(url)
  .then((res) => res.json())
  .then((data) => displayData(data));

displayData = (data) => {
  //   const dataElementDiv = document.querySelector("#cards");
  const titleDiv = document.querySelector("#title");
  const subtitleDiv = document.querySelector("#subtitle");
  const textDiv = document.querySelector("#textDiv");

  data.forEach((el) => {
    console.log(el.title);
    console.log(el.subtitle);
    console.log(el.text);
    console.log("-------------------------");

    const titleEl = document.createElement("div");
    const subtitleEl = document.createElement("div");
    const textEl = document.createElement("div");

    titleEl.innerHTML = el.title;
    subtitleEl.innerHTML = el.subtitle;
    textEl.innerHTML = el.text;

    title.append(titleEl);
    subtitle.append(subtitleEl);
    text.append(textEl);
  });
};
// Function to get the data, commented out and readgin this doc
// https://jack72828383883.medium.com/how-to-use-javascript-fetch-to-display-api-results-in-html-7aa59936ed30
// async function getData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log("The array of data is", data);

//   const { id, title, subtitle, text, image_url } = data[0];

//   //   image.src = image_url;
//   document.getElementById("title").textContent = title;
//   document.getElementById("subtitle").textContent = subtitle;
//   document.getElementById("text").textContent = text;
// }

// getData();
