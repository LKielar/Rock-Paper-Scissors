const userChoiceDisplay = document.querySelector('.choice');
const computerChoiceDisplay = document.querySelector('.comp-choice');
const userResult = document.querySelector('.user-result');
const compResult = document.querySelector('.comp-result');
const buttons = document.querySelectorAll('.button');
const tryAgain = document.querySelectorAll('.tryagain');
const draw = document.querySelector('.draw');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const plusUser = document.querySelector('.one');
const plusComp = document.querySelector('.two');
const choicesArr = ['Rock', 'Paper', 'Scissors'];
let userChoice;
let userScore = 0;
let compScore = 0;

buttons.forEach((el) =>
	el.addEventListener('click', (e) => {
		userChoice = e.target.dataset.name;
		userChoiceDisplay.innerHTML = userChoice;
		draw.style.display = 'none';
		plusUser.style.display = 'none';
		plusComp.style.display = 'none';
		computerChoice();
		getResults();
		winner();
	})
);
const computerChoice = () => {
	const randomChoice = Math.floor(Math.random(choicesArr) * 3);
	if (randomChoice === 0) {
		computerChoiceDisplay.innerHTML = choicesArr[0];
	} else if (randomChoice === 1) {
		computerChoiceDisplay.innerHTML = choicesArr[1];
	} else {
		computerChoiceDisplay.innerHTML = choicesArr[2];
	}
};

const getResults = () => {
	let x = userChoiceDisplay.textContent;
	let y = computerChoiceDisplay.textContent;
	switch (x + y) {
		case 'RockScissors':
		case 'ScissorsPaper':
		case 'PaperRock':
			plusUser.style.display = 'block';
			userResult.innerHTML = ++userScore;
			break;
		case 'RockPaper':
		case 'PaperScissors':
		case 'ScissorsRock':
			plusComp.style.display = 'block';
			compResult.innerHTML = ++compScore;
			break;
		case 'RockRock':
		case 'PaperPaper':
		case 'ScissorsScissors':
			draw.style.display = 'block';
	}
};
const again = () => {
	win.style.display = 'none';
	lose.style.display = 'none';
	plusUser.style.display = 'none';
	plusComp.style.display = 'none';
	userResult.textContent = 0;
	compResult.textContent = 0;
	userScore = 0;
	compScore = 0;
	userChoiceDisplay.textContent = '';
	computerChoiceDisplay.textContent = '';
	buttons.forEach((el) => {
		el.disabled = false;
	});
};
const winner = () => {
	if (userScore === 10) {
		win.style.display = 'flex';
		userResult.style.color = 'green';
	} else if (compScore === 10) {
		lose.style.display = 'flex';
		compResult.style.color = 'red';
	}
	if (userScore === 10 || compScore === 10) {
		buttons.forEach((el) => {
			el.disabled = true;
		});
	}
};
tryAgain.forEach((el) => el.addEventListener('click', again));
