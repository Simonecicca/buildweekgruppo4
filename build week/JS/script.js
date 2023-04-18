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
    let questionsPlaceHolder = document.querySelector('div .question')

    while(visitedIndex.indexOf(randomNumber) != -1){
        randomNumber = Math.floor(Math.random()*10);
    }

    if(visitedIndex.length == domandeObj.length){
        return 'domande finite'
    }else{
        questionsPlaceHolder.textContent = domandeObj[randomNumber].question
    }


    visitedIndex.push(randomNumber);
} 



