document.addEventListener('DOMContentLoaded', function () {
  const infiList = document.getElementById('infi-list');
  
  // Function to add list items
  function addListItems(count) {
    for (let i = 0; i < count; i++) {
      const li = document.createElement('li');
      li.textContent = 'List Item';
      infiList.appendChild(li);
    }
  }
  
  // Add 10 list items by default
  addListItems(10);
  
  // Function to check if user has reached the bottom of the page
  function isBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }
  
  // Function to handle scroll event
  function handleScroll() {
    if (isBottom()) {
      // Add 2 more list items
      addListItems(2);
    }
  }
  
  // Event listener for scroll event
  window.addEventListener('scroll', handleScroll);
});

