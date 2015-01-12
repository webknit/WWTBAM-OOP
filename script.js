var WWTBAM = new Object();

WWTBAM.correctAnswer;
WWTBAM.questionBox = document.getElementById('question');
WWTBAM.questionNumber = document.getElementById('question-number');
WWTBAM.answers = document.getElementById('answers');
WWTBAM.restart = document.getElementById('restart');
WWTBAM.bank = document.getElementById('bank');
WWTBAM.fiftyFifty = document.getElementById('fifty-fifty');
WWTBAM.freePass = document.getElementById('free-pass');
WWTBAM.lifeLine = document.getElementById('lifeline');

WWTBAM.Qnum = -1;

WWTBAM.questions = [
     new Question('Complete this phrase. As sick as a...',['Penguin','Parrot','Puffin','Partridge'] ,'Parrot', 0),
     new Question("Which legal document states a person's wishes regarding the disposal of their property after death?",['Will','Shall','Would','Should'] ,'Will', 100),
     new Question('Complete the title of the James Bond film The Man With The Golden...',['Gun','Tooth','Delicious','Eagle'] ,'Gun', 200),
     new Question('Which of these fruits shares its name with something superior or desirable?',['Apricot','Mango','Grapefruit','Plum'] ,'Plum', 300),
     new Question('In which sport do two teams pull at the opposite ends of a rope?',['Ice hockey','Basketball','Tug of war','Polo'] ,'Tug of war', 500),
     new Question('Where would a cowboy wear his chaps?',['On his hands','On his arms','On his legs','On his head'] ,'On his legs', 1000),
     new Question('Which of these zodiac signs is not represented by an animal that grows horns?',['Taurus','Capricorn','Aquarius','Aries'] ,'Aquarius', 2000),
     new Question('Sherpas and Gurkhas are native to which country?',['Russia','Ecuador','Nepal','Morocco'] ,'Nepal', 4000),
     new Question('Prime Minister Tony Blair was born in which country?',['England','Northern Ireland','Scotland','Wales'] ,'Scotland', 8000),
     new Question('Whose autobiography has the title, "A Long Walk to Freedom"?',['Ranulph Fiennes','Mother Teresa','Nelson Mandela','Mikhail Gorbachev'] ,'Nelson Mandela', 16000),
     new Question('Duffel coats are named after a town in which country?',['Belgium','Holland','Germany','Austria'] ,'Belgium', 32000),
     new Question("Complete this stage instruction in Shakespeare's 'The Winter's Tale', 'Exit, pursued by a...'?",['Tiger','Clown','Bear','Dog'] ,'Bear', 64000),
     new Question("The young of which creature is known as a 'squab'?",['Salmon','Horse','Pigeon','Octopus'] ,'Pigeon', 125000),
     new Question('Who is the patron saint of Spain?',['Saint James','Saint John','Saint Benedict','Saint Peter'] ,'Saint John', 150000),
     new Question('Which king was married to Eleanor of Aquitaine?',['Henry I','Henry II','Richard I','Henry V'] ,'Henry II', 1000000)
];


function Question(questionText, answers, answer, score) {
	this.questionText = questionText;
    this.answers = answers;
    this.answer = answer;
    this.score = score;
}

WWTBAM.nextQuestion = function() {

	WWTBAM.Qnum = WWTBAM.Qnum + 1;
	
	var total = WWTBAM.questions.length;
	
	if(WWTBAM.Qnum < total) WWTBAM.askQuestion(WWTBAM.Qnum);
	
	else {
	
		WWTBAM.bank.innerHTML = 'Balance : £1m';
		WWTBAM.questionBox.innerHTML = "You're a millionaire";
		WWTBAM.reset();
	
	}
	
}

WWTBAM.askQuestion = function(counterNum) {

	WWTBAM.questionBox.innerHTML = WWTBAM.questions[counterNum].questionText;
	WWTBAM.questionNumber.innerHTML = 'Question number ' + (counterNum + 1);
	
	WWTBAM.answers.innerHTML = '';
	
	var i = 0;
	while (i < 4) {
    	
    	WWTBAM.answers.innerHTML =  WWTBAM.answers.innerHTML + '<li class="answer-li" data-answer=' + WWTBAM.questions[counterNum].answers[i].replace(/ /g,'') + '>' + WWTBAM.questions[counterNum].answers[i] + '</li>';
    	
    	i++;
    	
	}
	
	WWTBAM.bank.innerHTML = 'Balance : £' + WWTBAM.questions[counterNum].score;
	
	WWTBAM.correctAnswer = WWTBAM.questions[counterNum].answer;
	WWTBAM.correctAnswer = WWTBAM.correctAnswer.replace(/ /g,'').toLowerCase();
	
	// Unsure how this bit is done with JS
	$('#answers li').on('click', WWTBAM.answerQuestion);
	
	WWTBAM.restart.addEventListener('click', WWTBAM.reStart);

}

WWTBAM.answerQuestion = function() {

	// Unsure how this bit is done with JS
	$('.answers li').off();
	
	var UserAnswer = $(this).data('answer').replace(/ /g,'').toLowerCase();
	
	if (UserAnswer == WWTBAM.correctAnswer) {
		
		WWTBAM.nextQuestion();
			
	}
	
	else {
	
		WWTBAM.bank.innerHTML = 'Balance : £0';
		WWTBAM.questionBox.innerHTML = "Sorry you've lost your money";
		WWTBAM.reset();
	
	}

}

WWTBAM.reStart = function() {

	WWTBAM.Qnum = -1;
	
	WWTBAM.answers.style.display = 'block';
	WWTBAM.restart.style.display = 'block';
	WWTBAM.questionNumber.style.display = 'inline-block';
	
	WWTBAM.nextQuestion();
	
	

}


WWTBAM.reset = function() {

	WWTBAM.answers.style.display = 'none';
	WWTBAM.restart.style.display = 'inline-block';
	WWTBAM.questionNumber.style.display = 'none';

}



// Start the quiz
WWTBAM.nextQuestion();