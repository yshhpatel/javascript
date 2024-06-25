document.getElementById("submit").onsubmit = function (event) {
    document.getElementById("err").innerHTML = ""
    event.preventDefault()

    try {
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let password = document.getElementById("ps").value
        let confir_password = document.getElementById("cps").value

        if (name === "") {
            throw new Error("Please enter the required detail.")
        }

        if (email === "") {
            throw new Error("Please enter the required detail.")
        }

        if (password === "") {
            throw new Error("Please enter the required detail.")
        }
        if (confir_password === "") {
            throw new Error("Please enter the required detail.")
        }

        if (password.length < 8) {
            throw new Error("Password should have at least 8 characters")
        }

        if (password !== confir_password) {
            throw new Error("Password does not match.")
        }

    } catch (e) {
        document.getElementById("err").innerHTML = e.message
        document.getElementById("err").style.color = "red"
    }
}