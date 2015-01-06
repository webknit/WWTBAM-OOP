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
	 ['Complete this phrase. As sick as a...',['Penguin','Parrot','Puffin','Partridge'] ,'Parrot', 0],
	 ["Which legal document states a person's wishes regarding the disposal of their property after death?",['Will','Shall','Would','Should'] ,'Will', 100],
	 ['Complete the title of the James Bond film The Man With The Golden...',['Gun','Tooth','Delicious','Eagle'] ,'Gun', 200],
	 ['Which of these fruits shares its name with something superior or desirable?',['Apricot','Mango','Grapefruit','Plum'] ,'Plum', 300],
	 ['In which sport do two teams pull at the opposite ends of a rope?',['Ice hockey','Basketball','Tug of war','Polo'] ,'Tug of war', 500],
	 ['Where would a cowboy wear his chaps?',['On his hands','On his arms','On his legs','On his head'] ,'On his legs', 1000],
	 ['Which of these zodiac signs is not represented by an animal that grows horns?',['Taurus','Capricorn','Aquarius','Aries'] ,'Aquarius', 2000],
	 ['Sherpas and Gurkhas are native to which country?',['Russia','Ecuador','Nepal','Morocco'] ,'Nepal', 4000],
	 ['Prime Minister Tony Blair was born in which country?',['England','Northern Ireland','Scotland','Wales'] ,'Scotland', 8000],
	 ['Whose autobiography has the title, "A Long Walk to Freedom"?',['Ranulph Fiennes','Mother Teresa','Nelson Mandela','Mikhail Gorbachev'] ,'Nelson Mandela', 16000],
	 ['Duffel coats are named after a town in which country?',['Belgium','Holland','Germany','Austria'] ,'Belgium', 32000],
	 ["Complete this stage instruction in Shakespeare's 'The Winter's Tale', 'Exit, pursued by a...'?",['Tiger','Clown','Bear','Dog'] ,'Bear', 64000],
	 ["The young of which creature is known as a 'squab'?",['Salmon','Horse','Pigeon','Octopus'] ,'Pigeon', 125000],
	 ['Who is the patron saint of Spain?',['Saint James','Saint John','Saint Benedict','Saint Peter'] ,'Saint John', 150000],
	 ['Which king was married to Eleanor of Aquitaine?',['Henry I','Henry II','Richard I','Henry V'] ,'Henry II', 1000000]
];

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

	WWTBAM.questionBox.innerHTML = WWTBAM.questions[counterNum][0];
	WWTBAM.questionNumber.innerHTML = 'Question number ' + (counterNum + 1);
	
	WWTBAM.answers.innerHTML = '';
	
	var i = 0;
	while (i < 4) {
	
    	WWTBAM.answers.innerHTML =  WWTBAM.answers.innerHTML + '<li class="answer-li" data-answer=' + WWTBAM.questions[counterNum][1][i].replace(/ /g,'') + '>' + WWTBAM.questions[counterNum][1][i] + '</li>';
    	i++;
    	
	}
	
	WWTBAM.bank.innerHTML = 'Balance : £' + WWTBAM.questions[counterNum][3];
	
	WWTBAM.correctAnswer = WWTBAM.questions[counterNum][2];
	WWTBAM.correctAnswer = WWTBAM.correctAnswer.replace(/ /g,'').toLowerCase();
	
	// Unsure how this bit is done with JS
	$('#answers li').on('click', WWTBAM.answerQuestion);
	
	//restart.click(reStart);
	
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