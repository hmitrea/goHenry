const url = "http://localhost:3000/cards";
// For the image
const image = document.createElement("img");

let counter = 0;
const increaseCounter = function () {
  return counter++;
};

// Function to get the data
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  // Destrucutring our info
  //   if (data.length === 9) {
  //     increaseCounter();
  //   }

  //   let id = data[counter].id;
  //   let title = data[counter].title;
  //   let subtitle = data[counter].subtitle;
  //   let text = data[counter].text;
  //   let image_url = data[counter].image_url;
  const { id, title, subtitle, text, image_url } = data[0];

  //   image.src = image_url;
  document.getElementById("title").textContent = title;
  document.getElementById("subtitle").textContent = subtitle;
  document.getElementById("text").textContent = text;
}

getData();
