function validateLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
    const storedEmail = storedUser ? storedUser.email : null;
    const storedPassword = storedUser ? storedUser.password : null;
    console.log("Entered Email:", email);
    console.log("Entered Password:", password);
    console.log("Stored Email:", storedEmail);
    console.log("Stored Password:", storedPassword);

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        alert("Invalid email or password. Please register an account to continue.");
        return false;
    }

    alert("Login successful!");
    window.location.href = "Home.html";
}

function handleOnBlur(x) {
    x.style.borderColor = "green";
}
