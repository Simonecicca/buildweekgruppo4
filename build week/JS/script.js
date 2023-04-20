
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
        let answers = load4Answers(requests, indiceVisitato);
        createButtons(answers, requests, visitedIndex);


    });




}


document.onload = takeQuestion();

//caricare pagina 3

let rateUs = document.querySelector('.bottonepagina3')

rateUs.addEventListener('click', function () {
    let page3 = document.querySelector('#page3');
    page3.classList = 'disappear';
    let page4 = document.querySelector('#page4')
    page4.classList.remove('disappear');
});

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
        let page2 = document.querySelector("#page2");
        page2.classList = 'disappear';
        let page3 = document.querySelector('#page3');
        page3.classList.remove('disappear');
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

    return answers;

}

//creazione dei bottoni risposta

function createButtons(answers, requests, visitedIndex) {

    let divBottoni = document.querySelector('#buttons');
    for (let answer of answers) {
        let button = document.createElement('button');
        button.textContent = answer;
        button.classList = 'answersbuttons';
        button.addEventListener('click', function () {
            let indiceVisitato = loadQuestions(requests, visitedIndex);
            let answersArr = load4Answers(requests, indiceVisitato);
            removeButtons()
            createButtons(answersArr, requests, visitedIndex);

        })
        divBottoni.append(button);
    }
    // removeButtons();
}



//template per pagina 2




let proceedButton = document.querySelector(".button_p");
proceedButton.addEventListener('click', function () {
    document.querySelector("div.button_p");
    hidePage1();
    showP2();
})

function hidePage1() {
    let hideP = document.querySelector(".page1");
    // if (hideP.style.display != "none") {
    //     hideP.style.display = "none";
    // } else {
    //     hideP.style.display = "block";
    // }
    hideP.classList = 'disappear';
}


function showP2() {
    // let proceedB = document.getElementsByTagName("template")[0];
    // let clone = proceedB.content.cloneNode(true);
    // document.body.appendChild(clone);
    // return clone;
    let page2 = document.querySelector("#page2");
    page2.classList.remove('disappear');

}

function removeButtons() {

    let bottoni = document.querySelectorAll('.answersbuttons')
    console.log(bottoni);

    for (let bottone of bottoni) {

        bottone.classList = 'disappear';
    }
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
