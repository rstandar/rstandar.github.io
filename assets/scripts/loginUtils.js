// Fade-in effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("visible");
});

const correctHash = "cce990b4e7175e110e207f42341b5ee7b9c9b199b374c02ff592e15f0d6c6187";


async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
}

async function checkPassword() {
    const userInput = document.getElementById("passwordInput").value;

    if (!userInput) {
        alert("Vänligen skriv in lösenord!");
        return;
    }

    let hashedUserInput = await sha256(userInput);
    console.log(hashedUserInput);

    if (hashedUserInput === correctHash) {
        localStorage.setItem("token", hashedUserInput);
        
        window.location.href = "/loggedInPages/home/"
    } else {
        alert("Incorrect password!");
    }
}

