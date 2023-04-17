 async function takeQuestion(){
    let requests = await fetch("http://bit.ly/strive_QUIZZ")
   .then(res => res.json());

   
   
    
    for (let questionQuiz of requests){
        let divQuestion = document.querySelector('#question');
        divQuestion.textContent = questionQuiz.question;
        
    }

    

 }

 takeQuestion();



function loadQuestions(domandeObj){
    
    let randomNumber = Math.floor(Math.random()*10);
    let visitedIndex = [];

    while(visitedIndex.indexOf(randomNumber) != -1){
        randomNumber = Math.floor(Math.random()*11);
    }

    domandeObj[randomNumber].question 


    visitedIndex.push(randomNumber);
} 



