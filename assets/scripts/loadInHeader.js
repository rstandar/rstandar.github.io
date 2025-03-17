
    // Function to load the header
    fetch("../../assets/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });

    function toggleMenu() {
        const menu = document.getElementById("mobileMenu");
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }

    function closeMenu() {
        document.getElementById("mobileMenu").style.display = "none";
    }
