var trivia = [];

//Content

function Trivia(question,answers,correctAnswer,feedback){
	this.question = question;
	this.answers = answers;
	this.correctAswer = correctAnswer;
	this.feedback = feedback;
};

trivia[0] = new Trivia(
	"Which Bachelor / Bachelorette couple is still together?",
	["Jake Pavleka and Vienna Girardi",
	"Jillian Harris and Ed Swiderski",
	"Andrew Firestone and Jenn Scheff",
	"Jason Mesnick and Molly Malaney"],
	3,
	"Jason and Molly got married and went to South Africa for their honeymoon"
	);

trivia[1] = new Trivia(
	"'As a Bachelor, XXX was about as good as he was an NFL quarterback — not that great.'-Mike Fleiss. To whom does this statement apply?",
	["Matt Grant",
	"Jesse Palmer",
	"Byron Velvick",
	"Ben Higgins"],
	1,
	"Jesse is notorius for calling the wrong woman's name during the first rose ceremony and merely dating his bachelorette rather than proposing to her."
	);

trivia[2] = new Trivia(
	"Which bachelor dumped his final rose winner on the 'After the Rose' special for his runner up?",
	["Andy Baldwin",
	"Charlie O'Connell",
	"Travis Stork",
	"Jason Mesnick"],
	3,
	"Yup, Jason dumped Melissa Rycroft for the runner up Molly Malaney to whom he is still married. Guess he made the right choice!"

	);

trivia[3] = new Trivia(
	"What douchey thing did Juan Pablo not do?",
	["Juan told Clare 'I barely know you but I love f***ing you'",
	"Hooked up with both Clare and Nikki in Vietnam",
	"'Gays are more pervert' -Juan Pablo",
	"Nikki tells Juan that she loves him. To which he responds, 'I like you a lot too.'"],
	1,
	"He only hooked up with Clare. (Then proceeded to call her a slut)."
	);



//Designate webpage areas where fillers will be placed

	var questionArea = document.getElementsByClassName('question')[0];
	var	answerArea = document.getElementsByClassName('answers')[0];
	var	feedbackArea = document.getElementsByClassName('feedback')[0];
	var current = 0;
	beginTrivia(current);




//LOAD Questions and Answers
function Trivia(question,answers,correctAnswer,feedback){
	this.question = question;
	this.answers = answers;
	this.correctAswer = correctAnswer;
	this.feedback = feedback;
};

//Create matrix containing all trivia



// reset everything

function clearAll(){

document.getElementsByClassName('question').innerHTML = "";
document.getElementsByClassName('answers').innerHTML = "";
document.getElementsByClassName('feedback').innerHTML = "";
};

function loadNewQuestion(current){
	//load the new question
	document.getElementsByClassName('question').innerHTML = trivia[current].question;
};

//Create buttons for each answer option
function createAnswerButtons(current){
	for(i=0;i<trivia[current].answers.length-1;i++){
		var choice = document.createElement('input');
		choice.setAttribute('class', 'answerChoice');
		choice.setAttribute('type','button')
		var textnode = document.createTextNode(trivia[current].answers[i]);
		choice.appendChild(textnode);

		//Create event listener that will pass chosen answer

		var submittedAnswer;
		choice.addEventListener("click", submittedAnswer = i)

		//add content to answer area
		var answerArea = document.getElementsByClassName('answers');
		if(answerArea != null) answerArea.appendChild(choice);
	}
};


function checkAnswer(submit,questionNumber){
	if(submit == trivia[questionNumber].correctAnswer){
		document.getElementsByClassName('feedback').innerHTML = "CORRECT!" + trivia[questionNumber].feedback;
	} else{
		document.getElementsByClassName('feedback').innerHTML = "INCORRECT!" + trivia[questionNumber].feedback;
	}

	if (questionNumber <  trivia.length-1){
		newCurrent = questionNumber + 1;
		beginTrivia(newCurrent);
	} else {
		document.getElementsByClassName('question').innerHTML = "Done";
		document.getElementsByClassName('answers').innerHTML = "";
	}
}



// load everything
function beginTrivia(current){
	clearAll();
	loadNewQuestion(current);
	createAnswerButtons(current);

	checkAnswer(submittedAnswer,current);

	//wait for answer

};



