document.getElementById("loading-spinner").style.display = "none";

const loadPlayer = (name) => {
  document.getElementById("loading-spinner").style.display = "block";
  fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${name}`)
    .then((res) => res.json())
    .then((data) => displayPlayers(data.player));
};

const displayPlayers = (data) => {
  document.getElementById("loading-spinner").style.display = "none";
  const playersContainer = document.getElementById("players-container");
  playersContainer.innerHTML = "";
  data.forEach((data) => {
    const { strThumb, strPlayer, strDescriptionEN } = data;
    // console.log(data);
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("col");
    playerDiv.innerHTML = `
    <div class="card">
    <img src="${
      strThumb ? strThumb : "./image/not-found.png"
    }" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${strPlayer}</h5>
      <p class="card-text">${
        strDescriptionEN ? strDescriptionEN.slice(0, 200) : "Not found"
      }</p>
    </div>
  </div>
    `;
    playersContainer.appendChild(playerDiv);
  });
};
const searchPlayer = () => {
  const searchField = document.getElementById("search-field");
  const searchPlayerName = searchField.value;
  loadPlayer(searchPlayerName);
};
