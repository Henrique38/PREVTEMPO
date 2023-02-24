

let chave = "22b01c0a01cd2d68800df57c5e070d91"

function colocanatela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = "Temperatura  " + Math.floor (dados.main.temp) + "°c"
    document.querySelector(".temp2").innerHTML = "Minima  " + Math.floor(dados.main.temp_min) + "°c"
    document.querySelector(".temp3").innerHTML = "Máxima  " + Math.floor(dados.main.temp_max) + "°c"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarcidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave +
        "&lang=pt_br" +
        "&units=metric")
        .then(resposta => resposta.json())

    colocanatela(dados)
}

function cliqueinobotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarcidade(cidade)
}
