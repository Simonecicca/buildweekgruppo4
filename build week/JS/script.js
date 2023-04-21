


let count = 1;
let countRight = 0;
let countWrong = 0;
let correctAnswer;

async function takeQuestion() {

    let requests = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
        .then(res => res.json());


    let bottoneProceed = document.querySelector('button');

    let visitedIndex = [];

    bottoneProceed.addEventListener('click', function () {
        let indiceVisitato = loadQuestions(requests, visitedIndex);
        let answers = load4Answers(requests, indiceVisitato);
        createButtons(answers, requests, visitedIndex);
        
    });


    // TIMER

let timer = new Date("Jan 5, 2024 15:37:25").getTime();
let x = setInterval(function () {
    let now = new Date().getTime()
    let interval = timer - now;
    let seconds = Math.floor((interval % (1000 * 61)) / 1000);
    document.querySelector("#timer").innerHTML = "seconds <br>" + seconds + "<br>remaning";

    if (interval == 0) {
        clearInterval(x);
        document.querySelector("#timer").innerHTML = "finish";
        
        
        
    }else if(interval == 0){
        createButtons(answers, requests, visitedIndex);
    }
}, 1000);

}
document.onload = takeQuestion();


//bottone per far apparire pagina 2

let proceedButton = document.querySelector(".button_p");
proceedButton.addEventListener('click', function () {
    document.querySelector("div.button_p");
    hidePage1();
    showP2();
    
})

function hidePage1() {
    let hideP = document.querySelector(".page1");
    hideP.classList = 'disappear';
}

function showP2() {
    let page2 = document.querySelector("#page2");
    page2.classList.remove('disappear');
}

//funzione per caricare le domande
function loadQuestions(domandeObj, visitedIndex) {

    let randomNumber = Math.floor(Math.random() * 10);
    let questionsPlaceHolder = document.querySelector('.question')


    while (visitedIndex.indexOf(randomNumber) != -1) {
        randomNumber = Math.floor(Math.random() * 10);
    }
    visitedIndex.push(randomNumber);

    questionsPlaceHolder.textContent = domandeObj.results[randomNumber].question
    
    return randomNumber;
}


//funzione per caricare le risposte

function load4Answers(domandeObj, indice) {

    let answers = [];
    let indiceRandom = Math.floor(Math.random() * 4);
    let incorrectAnswer = domandeObj.results[indice].incorrect_answers;
    correctAnswer = domandeObj.results[indice].correct_answer;

    console.log('giusta:' + correctAnswer);
    console.log('sbagliate:' + incorrectAnswer);
    

    for (let answer of incorrectAnswer) {
        answers.push(answer)
    }

    answers.splice(indiceRandom, 0, correctAnswer)
    return answers;
}

//creazione dei bottoni risposta

function createButtons(answers, requests, visitedIndex) {

    let divBottoni = document.querySelector('#buttons');
    let risposta;

    for (let answer of answers) {
        let button = document.createElement('button');
        button.textContent = answer;
        button.classList = 'answersbuttons';
        button.addEventListener('click', function () {
            if (count < 10){
            risposta = answer;
            console.log('risposta data ' + risposta);
            let indiceVisitato = loadQuestions(requests, visitedIndex);
            checkAnswer(correctAnswer, risposta);
            let answersArr = load4Answers(requests, indiceVisitato);
            removeButtons();
            createButtons(answersArr, requests, visitedIndex);
            questionsCounters(requests.results.length);
            riempiPercentuali();
            
            }else if (count == 10){
            
                checkAnswer(correctAnswer, risposta);
                riempiPercentuali();
                removeButtons();
                let page2 = document.querySelector("#page2");
                page2.classList = 'disappear';
                let page3 = document.querySelector('#page3');
                page3.classList.remove('disappear');
                passedNotPassed(countRight);
        }

        })
        divBottoni.append(button);
    }

}
//funzione per controllare se la risposta è giusta 

function checkAnswer(correctAnswerF, risposta) {

    if (risposta == correctAnswerF) {
        countRight++;
    } else {
        countWrong++;
    }
    console.log('giusta count ' + countRight);
    console.log('sbagliata count ' + countWrong);
}


// funzione per rimuovere i bottoni 

function removeButtons() {
    let divBottoni = document.querySelector('#buttons');
    divBottoni.innerHTML = "";

}



//riempi percentuali

function riempiPercentuali() {
    let percentualeGiuste = (countRight * 10)
    console.log(percentualeGiuste);
    let c = document.querySelector('.percentualenumerocorrette')
    c.textContent = percentualeGiuste + "%";

    let percentualeSbagliate = (countWrong * 10);
    console.log(percentualeSbagliate);
    let s = document.querySelector('.percentualenumerosbagliate')
    s.textContent = percentualeSbagliate + "%";
}


//funzione per contare le domande e giusto sbagliato

function questionsCounters(lunghezzaArrDomande) {

    count++;

    let contatore = document.querySelector('#counter');
    contatore.textContent = `QUESTION ` + count + '/' + lunghezzaArrDomande
}

//funzione per passed/notPassed esame

function passedNotPassed(countRightF){
    if(countRightF < 6){
        let a = document.querySelector(".gratz");
        a.textContent = "Oh no! Restart!"
        
        let b = document.querySelector(".passed");
        b.textContent = "You didn't pass the exam! :( ";
        
        let c = document.querySelector(".certificate");
        c.textContent = " ";
        
    }
    
}

//caricare pagina 4

let rateUs = document.querySelector('.bottonepagina3')

rateUs.addEventListener('click', function () {
    let page3 = document.querySelector('#page3');
    page3.classList = 'disappear';
    let page4 = document.querySelector('#page4')
    page4.classList.remove('disappear');

});






















// const cerchietto = document.getElementById("#cerchio");

// let lable = [];
// let chart = new Chart(cerchietto, {
//     type: 'doughnut',
//     data: {
//         labels: label,
//         datasets: [{
//             backgroundColor: [
//                 '00ffff',
//                 'bf008d'
//             ],
//             borderWidth: 0,

//         }]
//     }
// });
//     [
//             label: 'timer',
//             data: [300, 50, 100],

            
//     ],
//     hoverOffset: 2
// }];












