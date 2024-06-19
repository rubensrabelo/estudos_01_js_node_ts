import inquirer from 'inquirer';

import { IAnswers } from './interface/answers.interface';
import { questions } from 'questions';


class Init {
  constructor() {
    inquirer.prompt(questions).then((anwers: IAnswers) => {
      console.log(anwers);
    });
  }
}

new Init();
