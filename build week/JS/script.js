async function takeQuestion() {
    let requests = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
        .then(res => res.json());


        let bottone = document.querySelector('button');
        let visitedIndex = [];

        bottone.addEventListener('click', function(){
            loadQuestions(requests, visitedIndex);
        });




    // for (let questionQuiz of requests) {
    //     let divQuestion = document.querySelector('#question');
    //     divQuestion.textContent = questionQuiz.question;

    // }

}

takeQuestion();


//funzione per caricare le domande
function loadQuestions(domandeObj, visitedIndex){
            
    let randomNumber = Math.floor(Math.random()*10);
    let questionsPlaceHolder = document.querySelector('.question')
    console.log(randomNumber);

    while(visitedIndex.indexOf(randomNumber) != -1){
        randomNumber = Math.floor(Math.random()*10);
        console.log(randomNumber);
        console.log(domandeObj.results.length);
        
    }
    visitedIndex.push(randomNumber);
    console.log(visitedIndex);
    
    console.log(visitedIndex.length);    

    if(visitedIndex.length == domandeObj.results.length){
        questionsPlaceHolder.textContent = 'domande finite'
    }else{
        questionsPlaceHolder.textContent = domandeObj.results[randomNumber].question     
    }

    
}



//template
function showButton(){
    let fourAnsw = document.querySelector(".multipleChoise");
    let templ;
    
}





















// TIMER

let timer = new Date("Jan 5, 2024 15:37:25").getTime();
let x = setInterval(function(){
    let now = new Date().getTime()
    let interval = timer - now;
    let seconds = Math.floor((interval % (1000 * 61)) / 1000);
    document.querySelector("#timer").innerHTML = seconds;

    if (interval < 0) {
        clearInterval(x);
        document.querySelector("#timer").innerHTML = "finish";
    }
    },1000);
