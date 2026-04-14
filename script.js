function validateForm() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    } else {
        return true;
    }
}

const login = document.getElementById("forms");
login.addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});
