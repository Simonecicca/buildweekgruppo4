
// let bottone1 = document.querySelector('#button1');
// let bottone2 = document.querySelector('#button2');
// let bottone3 = document.querySelector('#button3');
// let bottone4 = document.querySelector('#button4');


async function takeQuestion() {

    let requests = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
        .then(res => res.json());


    let bottoneProceed = document.querySelector('button');

    let visitedIndex = [];

    bottoneProceed.addEventListener('click', function () {
        let indiceVisitato = loadQuestions(requests, visitedIndex);
        load4Answers(requests, indiceVisitato);
    });

    let button1 = document.querySelector('#button1');
    console.log(button1);
    let button2 = document.querySelector('#button2');
    let button3 = document.querySelector('#button3');
    let button4 = document.querySelector('#button4');


    button1.addEventListener('click', function () {
        let indiceVisitato = loadQuestions(requests, visitedIndex);
        load4Answers(requests, indiceVisitato);
    });

    button2.addEventListener('click', function () {
        let indiceVisitato = loadQuestions(requests, visitedIndex);
        load4Answers(requests, indiceVisitato);
    });

    button3.addEventListener('click', function () {
        let indiceVisitato = loadQuestions(requests, visitedIndex);
        load4Answers(requests, indiceVisitato);
    });

    button4.addEventListener('click', function () {
        let indiceVisitato = loadQuestions(requests, visitedIndex);
        load4Answers(requests, indiceVisitato);
    });

}

document.onload = takeQuestion();


//funzione per caricare le domande
function loadQuestions(domandeObj, visitedIndex) {

    let randomNumber = Math.floor(Math.random() * 10);
    let questionsPlaceHolder = document.querySelector('.question')
    console.log(randomNumber);

    while (visitedIndex.indexOf(randomNumber) != -1) {
        randomNumber = Math.floor(Math.random() * 10);
        console.log(randomNumber);
        console.log(domandeObj.results.length);

    }
    visitedIndex.push(randomNumber);
    console.log(visitedIndex);

    console.log(visitedIndex.length);

    if (visitedIndex.length == domandeObj.results.length) {
        questionsPlaceHolder.textContent = 'domande finite'
    } else {
        questionsPlaceHolder.textContent = domandeObj.results[randomNumber].question
    }

    return randomNumber;


}



//funzione per caricare le risposte

function load4Answers(domandeObj, indice) {

    let answers = [];
    let indiceRandom = Math.floor(Math.random() * 4);
    let incorrectAnswer = domandeObj.results[indice].incorrect_answers;
    let correctAnswer = domandeObj.results[indice].correct_answer;


    console.log(incorrectAnswer);
    console.log(correctAnswer);

    for (let answer of incorrectAnswer) {
        answers.push(answer)
    }

    answers.splice(indiceRandom, 0, correctAnswer)

    console.log(answers);

    let bottone1 = document.querySelector('#button1');
    let bottone2 = document.querySelector('#button2');
    let bottone3 = document.querySelector('#button3');
    let bottone4 = document.querySelector('#button4');

    bottone1.textContent = answers[0];
    bottone2.textContent = answers[1];
    bottone3.textContent = answers[2];
    bottone4.textContent = answers[3];

}



//template per pagina 2




let proceedButton = document.querySelector(".button_p");
proceedButton.addEventListener('click', function () {
    document.querySelector("div.button_p");
    showP2();
    hidePage1();
})

function hidePage1() {
    let hideP = document.querySelector(".page1");
    if (hideP.style.display != "none") {
        hideP.style.display = "none";
    } else {
        hideP.style.display = "block";
    }
}


function showP2() {
    let proceedB = document.getElementsByTagName("template")[0];
    let a = proceedB.content.cloneNode(true);
    document.body.appendChild(a);

}























// TIMER

let timer = new Date("Jan 5, 2024 15:37:25").getTime();
let x = setInterval(function () {
    let now = new Date().getTime()
    let interval = timer - now;
    let seconds = Math.floor((interval % (1000 * 61)) / 1000);
    document.querySelector("#timer").innerHTML = "seconds <br>" + seconds + "<br>remaning";

    if (interval < 0) {
        clearInterval(x);
        document.querySelector("#timer").innerHTML = "finish";
    }
}, 1000);
