//Armazenar os inputs em variaveis
let userWeight = document.querySelector("#user-weight");
let userHeight = document.querySelector("#user-height");
let buttonCalculate = document.querySelector("#button-calculate");


//função calcular Imc
let calculateImc = () => {

    //Tratar entrada de dados, convertendo strings para numbers e poder utilizar tanto PONTO quanto VIRGULA
    let height = parseFloat(userHeight.value.toString().replace(",", "."));

    let weight = parseFloat(userWeight.value.toString().replace(",", "."));

    //Calcular Imc
    let valueSquareHeight = height * height;

    let resultado =  weight / valueSquareHeight;

    console.log(resultado);
    

}

buttonCalculate.addEventListener("click", e=>{


    calculateImc();

})


