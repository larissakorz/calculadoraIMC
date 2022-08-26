let form = document.getElementById('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();

    validar();

    campo();
});


const validar = () => {

    let nome = document.getElementById("nome").value
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let resposta = document.getElementById("resposta")
    
    if(nome === "" || altura === "" || peso === ""){
        alert("Favor preencher todos os campos")
    }else{
        let imc = peso / (altura * altura)

        if(imc < 18.5){
            resposta.style.textAlign = "center"
            resposta.innerHTML = `<br><br><br>${nome} seu IMC é ${imc.toFixed(1)} e sua classificação é "MAGREZA"`
        }else if(imc <= 24.9){
            resposta.style.textAlign = "center"
            resposta.innerHTML = `<br><br><br>${nome} seu IMC é ${imc.toFixed(1)} e sua classificação é "NORMAL"`
        }else if(imc <= 29.9){
            resposta.style.textAlign = "center"
            resposta.innerHTML = `<br><br><br>${nome} seu IMC é ${imc.toFixed(1)} e sua classificação é "SOBREPESO"`
        }else if(imc >= 29.9 || imc <= 39,9){
            resposta.style.textAlign = "center"
            resposta.innerHTML = `<br><br><br>${nome} seu IMC é ${imc.toFixed(1)} e sua classificação é "OBESIDADE"`
        }else{
            resposta.style.textAlign = "center"
            resposta.innerHTML = `<br><br><br>${nome} seu IMC é ${imc.toFixed(1)} e sua classificação é "OBESIDADE GRAVE"`
        }
    }
}

const campo = () => {
    nome.value   = "";
    altura.value  = "";
    peso.value = "";

    nome.focus();

}





