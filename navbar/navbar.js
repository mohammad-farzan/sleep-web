// sidebar toggle

function sideBarToggle(){
  const sideBtn = document.querySelector("#sidebar-btn")
  const sidebar = document.querySelector("#side-bar")
  
  if (sidebar.classList.contains("closed")) {
    sidebar.classList.replace("closed", "opened");
  } else {
    sidebar.classList.replace("opened", "closed");
  }
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !sideBtn.contains(event.target)) {
      sidebar.classList.replace("opened", "closed");
    }
  });
}


// search toggle

function searchToggle(){
  const searchBar = document.querySelector("#search-bar");
  const searchButton = document.querySelector("#search-btn");
  if (searchBar.classList.contains("closed")) {
    searchBar.classList.replace("closed", "opened");
  } else {
    searchBar.classList.replace("opened", "closed");
  }
  document.addEventListener("click", function (event) {
    if (!searchBar.contains(event.target) && !searchButton.contains(event.target)) {
      searchBar.classList.replace("opened", "closed");
    }
  });
}


// Fetch and insert navbar

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

