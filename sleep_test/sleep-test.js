var myQuestions = [
	{
		question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum"
           + "neque at praesentium voluptatem ratione labore. Placeat, doloremque"
           + "debitis. Porro laudantium aliquam, rem et voluptatum reiciendis"
           + "sapiente soluta ad architecto.",
		answers: {
			a: 'good',
			b: 'half good',
			c: 'half bad',
			d: 'very bad'
		},
		percentage: '16'
	},
	{
		question: "how are you ?",
		answers: {
         b: 'half good 2',
			c: 'half bad 2',
			a: 'good 2',
			d: 'very bad 2'
		},
		percentage: '44'
	},
   {
		question: "how is your awareness ?",
		answers: {
			a: 'good 3 ',
			b: 'half good 3',
			c: 'half bad 3',
			d: 'very bad 3'
		},
		percentage: '30'
	},
   {
		question: "how is your health ?",
		answers: {
			a: 'good 4',
			b: 'half good 4',
			c: 'half bad 4',
			d: 'very bad 4'
		},
		percentage: '10'
	},
];
 
 var quizContainer = document.getElementById('quiz');
 var resultsContainer = document.getElementById('results');
 var submitButton = document.getElementById('submit');
 
 generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
 
 function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
 
   function showQuestions(questions,quizContainer) {
      let outPut = []
      let answers;
      for(let i = 0 ; i < questions.length ; i++){
         answers = [];

         for (option in questions[i].answers){
            answers.push(
               '<label>'
                  + '<input type="radio" name="question'+i+'" value="'+option+'">'
                  + questions[i].answers[option]
               + '</label>'
            );
         }
   
         // add this question and its answers to the output
         outPut.push(
            "<div class='item'>"
            +'<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
            +"</div>"
         );
      } 
      quizContainer.innerHTML = outPut.join("")
   }
 
 
   function showResults(questions,quizContainer,resultsContainer){
      let answerContainers = quizContainer.querySelectorAll(".answers")

      let userAnswer = '';
      let calcAnswer = [];
      let result = 0;
      for (let i = 0; i < questions.length; i++) {
         

         userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
         
         switch (userAnswer) {
            case "a":
               calcAnswer.push(questions[i].percentage)
               break;
            case "b":
               calcAnswer.push(questions[i].percentage / 2)
               break;
            case "c":
               calcAnswer.push(questions[i].percentage / 3)
               break;
            case "d":
               calcAnswer.push(questions[i].percentage / 4)
               break;
            default:
               break;

         }

         if(calcAnswer[i] != undefined){
            result += parseInt(calcAnswer[i])
         }

      }
      
      resultsContainer.innerText = "your score is "+ result+"%"
   }
 
   // show questions right away
   showQuestions(questions, quizContainer);
   
   // on submit, show results
   submitButton.onclick = function(){
     showResults(questions, quizContainer, resultsContainer);
   }
 
 }

const owlText = $('.owl-test-carousel');
owlText.owlCarousel({
   margin: 10,
   nav: true,
   navText: [
      "perv",
      "next"
   ],
   dots: false,
   responsive: {
      0: {
         items: 1
      }
   }
})