const mainDiv = document.getElementById("mainDiv");
const getDetails = document.getElementById("getDetails");

getDetails.addEventListener("click", async () => {
  //!using the dog api to fetch the data from server.
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  const output = document.getElementById("api1");
  output.innerHTML = `<img src="${data.message}"height="480px" alt=" Random Dog Images" caption="Random Dog Image">`;
});