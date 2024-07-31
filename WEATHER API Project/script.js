document.getElementById("btn"), addEventListener("click", function () {
    let in_val = document.getElementById("input").value

    fetch(`https://api.weatherapi.com/v1/current.json?key=32ebcef85cd2418690790919243007&q=${in_val}`)
    .then((res) => {
        return res.json()
    }).then((json) => {
        console.log(json)
        displayData(json);
    })
})

function displayData(data) {

    let img = document.getElementById("img1")
    img.setAttribute("src", data.current.condition.icon)

    let temp = document.getElementById("h1")
    temp.innerHTML = data.current.temp_c + "°c";

    let city_name = document.getElementById("name")
    city_name.innerHTML = data.location.name;

    let wind = document.getElementById("wind")
    wind.innerHTML = data.current.wind_kph + " Km/h";

    let humadity = document.getElementById("humadity")
    humadity.innerHTML = data.current.humidity + " %";

}
