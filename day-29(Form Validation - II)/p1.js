
document.getElementById("submit").onsubmit = function (event) {
    document.getElementById("err").innerHTML = ""
    event.preventDefault()

    try {
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let password = document.getElementById("ps").value
        let confir_password = document.getElementById("cps").value
        let gender = document.querySelector('input[name="gender"]:checked')

        if (!name.match(/^[a-zA-Z ]{2,30}$/)) {
            throw new Error("Invalid name. Please enter a valid name (2-30 characters).")
        }

        if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            throw new Error("Invalid email. Please enter a valid email address.")
        }

        if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
            throw new Error("Invalid password. Please enter a valid password (at least 8 characters, including uppercase, lowercase, number, and special character).")
        }

        if (password !== confir_password) {
            throw new Error("Passwords do not match.")
        }

        if (!gender) {
            throw new Error("Please select a gender.")
        }

    } catch (e) {
        document.getElementById("err").innerHTML = e.message
        document.getElementById("err").style.color = "red"
    }
}
