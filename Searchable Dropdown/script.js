document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const dropdownContent = document.getElementById("dropdownContent");
    const dropdownItems = dropdownContent.getElementsByTagName("a");
    // Add event listener to each dropdown item
  for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener("click", function(event) {
      event.preventDefault();
      const selectedName = event.target.textContent;
      console.log("selectedName"+selectedName);
      searchInput.value = selectedName; // Update input with selected name
      dropdownContent.classList.remove("show"); // Hide dropdown after selection
    });
  }
  
    searchInput.addEventListener("input", function() {
      const filter = searchInput.value.toUpperCase();
  
      for (let i = 0; i < dropdownItems.length; i++) {
        const txtValue = dropdownItems[i].textContent || dropdownItems[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          dropdownItems[i].style.display = "";
         
          console.log("txtValue"+txtValue);
          
        } else {
          dropdownItems[i].style.display = "none";
        }
      }
    });
  
    // Show dropdown on focus
    searchInput.addEventListener("focus", function() {
      dropdownContent.classList.add("show");
    });
  
   // Hide dropdown when focus is lost
  searchInput.addEventListener("blur", function() {
    // Delay hiding dropdown to allow click event to fire on dropdown items
    setTimeout(() => {
      dropdownContent.classList.remove("show");
    }, 200);
  });
});
  