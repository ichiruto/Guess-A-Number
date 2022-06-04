const form = document.getElementById('formulario');
form.addEventListener('submit',handleSubmit);

let p = document.getElementById ('status');
let attemp = document.getElementById ('attemp');
let result = document.getElementById ('result');

const Guess = {
    max:10,
    attempsNumber:0,
    numberDrawn: function randomValue(){
        return Math.round(Math.random()*this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attemp,value){
    attemp.innerHTML = 'Tentativas: ' + value
};

function handleSubmit(e){
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick){
        alert("Digite um valor")
        return;
    };

    updateAttempt(attemp, ++Guess.attempsNumber)

    if(numberDrawn == kick) {
        playAgain();
        p.innerHTML = "Parabéns meu consagrado,você é um telepata";
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color= '#fff';
        clear();
    }else if(numberDrawn > kick){
        p.innerHTML = "O número é maior";
        p.style.color = '#fff';
        result.style.backgroundColor = '#de4251'
        result.style.transition = '0.4s';
    }else if(numberDrawn < kick){
        p.innerHTML = "O número é menor";
        p.style.color = '#fff';
        result.style.backgroundColor = '#de4251'
        result.style.transition = '0.4s';
    }
}

function playAgain() {
    document.getElementById('btnRestart').style.display='flex';
}

function restart() {
    document.location.reload(true)
}

function clear() {
    document.getElementById('kick').value ='';
}
