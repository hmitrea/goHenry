console.log("hi");

const url = "http://localhost:3000/cards";

// Fetching the URL data
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    console.log(res);
  });
