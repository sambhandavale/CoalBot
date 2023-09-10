var isMenuExpanded = false; // Variable to track the menu state

document.querySelector(".min-max_button").addEventListener("click", function () {
  var menu = document.getElementsByClassName('menu-bar')[0];
  var slide = document.getElementsByClassName('min_max')[0];

  if (isMenuExpanded) {
    // If the menu is currently expanded, contract it
    menu.style.width = "60px";
    slide.style.left = "0px";
    isMenuExpanded = false;
    var words = document.getElementsByClassName('text');
    for (var i = 0; i < words.length; i++) {
    words[i].style.visibility = 'hidden';
    var searchInput = document.getElementById('search-input');
    searchInput.style.visibility = 'hidden';
    var slide = document.getElementsByClassName('min-max_button')[0];
    slide.style.left = "0px";
    }
  } else {
    // If the menu is currently contracted, expand it
    menu.style.alignItems = "start";
    menu.style.padding = "0px 0px 0px 28px";
    menu.style.width = "280px";
    var words = document.getElementsByClassName('text');
    for (var i = 0; i < words.length; i++) {
    words[i].style.visibility = 'visible';
    }
    isMenuExpanded = true;
    var slide = document.getElementsByClassName('min-max_button')[0];
    slide.style.left = "100px";
  }
});


document.querySelector(".button").addEventListener("click", function() {
     var searchInput = document.getElementById('search-input');
     searchInput.style.visibility = 'visible';
     var result = document.getElementsByClassName('autocomplete-results')[0];
     result.style.visibility = 'visible';
     var searchButton = document.querySelector(".button");
     searchButton.style.visibility = 'hidden';
});


const autocompleteData = [
    { name: "Login", link: "#login" },
    { name: "Chatbot", link: "./Chatbot.html" },
    { name: "About", link: "./About.html" },
];

const searchInput = document.getElementById("search-input");
const autocompleteResults = document.getElementById("autocomplete-results");

searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    autocompleteResults.innerHTML = "";

    if (searchTerm.length === 0) {
        autocompleteResults.style.display = "none";
        return;
    }

    const matchingItems = autocompleteData.filter((item) => item.name.toLowerCase().includes(searchTerm));

    if (matchingItems.length === 0) {
        autocompleteResults.style.display = "none";
        return;
    }

    matchingItems.forEach((item) => {
        const autocompleteItem = document.createElement("div");
        autocompleteItem.classList.add("autocomplete-item");
        autocompleteItem.textContent = item.name;

        autocompleteItem.addEventListener("click", function () {
            // Navigate to the link associated with the clicked item
            window.location.href = item.link;
        });

        autocompleteResults.appendChild(autocompleteItem);
    });

    autocompleteResults.style.display = "block";

    // Add an event listener for Enter key press
    this.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const firstMatchingItem = matchingItems[0];
            if (firstMatchingItem && firstMatchingItem.name.toLowerCase() === searchTerm) {
                // Navigate to the link of the first matching item only if the name is complete
                window.location.href = firstMatchingItem.link;
            }
        }
    });
});

// Hide autocomplete results when clicking outside
document.addEventListener("click", function (event) {
    if (!searchInput.contains(event.target) && !autocompleteResults.contains(event.target)) {
        autocompleteResults.style.display = "none";
    }
});
