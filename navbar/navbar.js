// Fetch and insert navbar

function searchToggle(){
  const searchBar = document.querySelector("#search-bar");
  const searchButton = document.querySelector("#search-btn");
  if (searchBar.classList.contains("close")) {
    searchBar.classList.replace("close", "open");
  } else {
    searchBar.classList.replace("open", "close");
  }
  document.addEventListener("click", function (event) {
    if (!searchBar.contains(event.target) && !searchButton.contains(event.target)) {
      searchBar.classList.replace("open", "close");
    }
  });
}


async function fetchNav() {
  try {
    const response = await fetch("../navbar/navbar.html");
    const data = await response.text();
    document.querySelector("#replace_with_navbar").innerHTML = data;
  } catch (error) {
    console.error("error:", error);
  }
}

fetchNav();

