import React from 'react';
import '../Quizzical.css';
import Question, { QuestionProbs } from './Question';
import trivia from '../data/trivia.json'

export default function Quizzical() {


    const checkAnswers = () => {
      fetch('https://opentdb.com/api.php?amount=5')
        .then((res) => res.json())
        .then((data) => setQuestions(data.results))
        .catch((err) => console.warn(err));
    }

    const question = Question({
        text: "In the Star Trek universe, what color is Vulcan blood?",
        answers: [
          "Green",
          "Blue",
          "Red",
          "Purple"
        ],
        correct: 0
    })

    type QuestionRemote = {
      category: string;
      correct_answer: string;
      difficult: string;
      incorrect_answers: string[];
      question: string;
      type: string;
  }

    //const [questions: Question[], setQuestions] = React.useState(questionsStatic);
    const [questions, setQuestions] = React.useState<QuestionRemote[]>([]);

    const questionsStatic: JSX.Element[] = questions.map(item => {
        return Question({
          text: item.question,
          answers: [item.correct_answer, 
            item.incorrect_answers[0], 
            item.incorrect_answers[1], 
            item.incorrect_answers[2]],
          correct: 0  
        })
    })

    React.useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=5')
        .then((res) => res.json())
        .then((data) => setQuestions(data.results))
        .catch((err) => console.warn(err));
    }, []);

    return (

        <div className='container'>
            {questionsStatic}
            <div className='check'>
                <button className='check-answers' onClick={checkAnswers}>Check Answers</button>
            </div>
        </div>
    )
}
