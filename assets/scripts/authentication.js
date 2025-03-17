
const correctHash = "cce990b4e7175e110e207f42341b5ee7b9c9b199b374c02ff592e15f0d6c6187";

// Check authentication on page load
if (localStorage.getItem("token") !== correctHash) {
    window.location.href = "/index.html";
   }