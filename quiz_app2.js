var curr = 0;
var trivia = [];

//Content

var img = new Image();

function Trivia(question,answers,correctAnswer,feedback){
	this.question = question;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
	this.feedback = feedback;
};

trivia[0] = new Trivia(
	"Let's start easy. Who was the first Bachelor?",
	["images/juanPablo.png",
	"images/jasonMesnick.png",
	"images/bradWomack.png",
	"images/alexMichel.png"],
	3,
	"The Bachelor debuted in March 2002 with Alex Michel."
	);


trivia[1] = new Trivia(
	"Which Bachelor / Bachelorette couple is still together?",
	["images/jakePavleka_viennaGirardi.png",
	"images/edSwiderski_jillianHarris.png",
	"images/andrewFirestone_jennScheff.png",
	"images/jasonMesnick_mollyMalaney.png"],
	3,
	"Jason and Molly got married and went to South Africa for their honeymoon"
	);

trivia[2] = new Trivia(
	"'As a Bachelor, XXX was about as good as he was an NFL quarterback — not that great.'' To whom does this statement apply?",
	["images/mattGrant.png",
	"images/jessePalmer.png",
	"images/byronVelvick.png",
	"images/benHiggins.png"],
	1,
	"Jesse is notorius for calling the wrong woman's name during the first rose ceremony and merely dating his bachelorette rather than proposing to her."
	);

trivia[3] = new Trivia(
	"Which bachelor dumped his final rose winner on the 'After the Rose' special for his runner up?",
	["images/andyBaldwin.png",
	"images/seanLowe.png",
	"images/bradWomack.png",
	"images/jasonMesnick.png"],
	3,
	"Yup, Jason dumped Melissa Rycroft for the runner up Molly Malaney to whom he is still married. Guess he made the right choice!"

	);

trivia[4] = new Trivia(
	"A mayor in Honolulu, Hawaii declared October 12 'Youth Fitness Day in Honolulu' after this Bachelor",
	["images/benHiggins.png",
	"images/mattGrant.png",
	"images/andyBaldwin.png",
	"images/jessePalmer.png"
	],
	2,
	"Andy Baldwin is a doctor, humanitarian, and triathlete. Dreamy"
	);

trivia[5] = new Trivia(
	"Who was the cutest bachelor in history?",
	["images/jasonMesnick.png",
	"images/benHiggins.png",
	"images/jessePalmer.png",
	"images/seanLowe.png"
	],
	1,
	"Duh. Rhetorical question..."
	);

trivia[6] = new Trivia(
	"Which female contestant on The Bachelor was caught cheating with one of the show producers?",
	["images/becca.png",
	"images/caila.png",
	"images/rozlynPapa.png",
	"images/lace.png"],
	2,
	"Rozlyn was caught cheating then told off Chris Harrison for meddling with her personal life."
	);

trivia[7] = new Trivia(
	"This female contestant has a HUGE mouth. Literally.",
	["images/olivia.png",
	"images/lace.png",
	"images/caila.png",
	"images/emily.png"],
	0,
	"There are countless memes making fun of Olivia's huge mouth."
	);

trivia[8] = new Trivia(
	"Finally, pick a random Juan Pablo meme",
	["https://s-media-cache-ak0.pinimg.com/236x/2a/9b/a9/2a9ba91a91b84975800758f1b5895d03.jpg",
	"images/juandouche.png",
	"http://sd.keepcalm-o-matic.co.uk/i/keep-calm-cause-ees-ok-1.png",
	"http://sd.keepcalm-o-matic.co.uk/i/gets-on-the-bachelor-ess-juan-pablo.png"],
	2,
	""
	);




window.onload = function() {

// Initialize

	var questionArea = document.getElementsByClassName('question')[0];
	var	answerArea = document.getElementsByClassName('answers')[0];
	var	feedbackArea = document.getElementsByClassName('feedback')[0];

	document.getElementById('choice0').addEventListener("click", function(){checkAnswer(0,curr);});
	document.getElementById('choice1').addEventListener("click", function() {checkAnswer(1,curr);});
	document.getElementById('choice2').addEventListener("click", function(){checkAnswer(2,curr);});
	document.getElementById('choice3').addEventListener("click", function(){checkAnswer(3,curr);});
	document.getElementById('nextButton').addEventListener("click", function(){nextQuestion(++curr);});

function clearAll(){

document.getElementsByClassName('question').innerHTML = "";
document.getElementsByClassName('answers').innerHTML = "";
};

function loadNew(current){
	//load the new question
	curr = current;
	console.log("loadNew function. question " + current);
	console.log(trivia);
	document.getElementsByClassName('question')[0].innerHTML = trivia[current].question;
	document.getElementById("choice0").src = trivia[current].answers[0];
	document.getElementById("choice1").src = trivia[current].answers[1];
	document.getElementById("choice2").src = trivia[current].answers[2];
	document.getElementById("choice3").src = trivia[current].answers[3];

};

function checkAnswer(submittedAnswer, current){
	console.log("Checking answer " + submittedAnswer + " against question "+ current)
	if(submittedAnswer == trivia[current].correctAnswer){
		document.getElementsByClassName('feedback')[0].innerHTML = "CORRECT! " + trivia[current].feedback + " Will you please accept this rose?";
		addResult("correct");
		console.log("correct message hit");
	} else{
		document.getElementsByClassName('feedback')[0].innerHTML = "INCORRECT! " + trivia[current].feedback + "Please say your goodbyes and gather your things";
		console.log("incorrect message hit");
	};

	if (current <  trivia.length){
		console.log("Next question function. Question " + current)
		current +=1;
		nextQuestion(current);
	} else {
		console.log("done")
		document.getElementsByClassName('question').innerHTML = "Done";
		document.getElementsByClassName('answers').innerHTML = "";
	}

};

function nextQuestion(current){
    if (current <  trivia.length){
        console.log("Loading question" + current)
        loadNew(current);
    } else {
        console.log('inside');
        document.getElementsByClassName('question')[0].innerHTML = "You've finished!";
        document.getElementById('container').setAttribute("background-image", "url('images/backgroundFadeIn.png'");
    }
};

function addResult(result){
	var createDiv = document.createElement('img');

	if (result == "correct"){
		createDiv.setAttribute("src", "http://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Roses-PNG/Red_Rose_PNG_Art_Picture-255495892.png?m=1399672800");
		document.getElementsByClassName('result')[0].appendChild(createDiv);
	};

}


function beginTrivia(curr){
	console.log("Start! Loading question" + curr)
	clearAll();
	loadNew(curr);

};

beginTrivia(curr);

};
