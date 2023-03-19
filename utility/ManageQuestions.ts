export interface Question {
	id: number;
	category: string;
	question: string;
	correctAnswer: string;
	wrongAnswers: string[];
}

export const getQuestionList = async (): Promise<Question[]> => {
	console.log('Getting question list...');

	return await (await fetch('https://patrickanywhere.pythonanywhere.com/getQuestionList')).json();
};

export const getRandomQuestion = async (): Promise<Question> => {
	console.log('Getting random question...');

	return await (await fetch('https://patrickanywhere.pythonanywhere.com/getRandomQuestion')).json();
};

export const createQuestion = async (newQuestionData: Question) => {
	console.log(`Creating new question`);

	await fetch('https://patrickanywhere.pythonanywhere.com/createQuestion', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newQuestionData),
	});
};

export const updateQuestion = async (id: number, newQuestionData: Question) => {
	console.log(`Updating question with ID: ${id} ...`);

	await fetch('https://patrickanywhere.pythonanywhere.com/updateQuestion', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id: id, newQuestionData: newQuestionData }),
	});
};

export const deleteQuestion = async (id: number) => {
	console.log(`Deleting question with ID: ${id} ...`);

	await fetch('https://patrickanywhere.pythonanywhere.com/deleteQuestion', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id: id }),
	});
};
