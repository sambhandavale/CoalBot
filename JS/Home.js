document.querySelector(".button").addEventListener("click", function() {
     document.querySelector("section").classList.add("search-bar");
     var searchInput = document.getElementById('search-input');
     searchInput.style.visibility = 'visible';
     var result = document.getElementsByClassName('autocomplete-results')[0];
     result.style.visibility = 'visible';
     var menu = document.getElementsByClassName('menu-bar')[0];
     menu.style.width = "280px";
  });

const autocompleteData = [
    { name: "search", link: "./search.html" },
    { name: "chatbot", link: "./Chatbot.html" },
    { name: "about", link: "./About.html" },
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

