import '../Quizzical.css';

export interface QuestionProbs {
    text: string;
    answers: Array<string>;
    correct: number;
}

export default function Question({text, answers, correct}: QuestionProbs) {
    return(
        <div className="question">
            <div>{text.replaceAll("&quot;", "*")}</div>
            <div>
                <button className='answer'>{answers[0]}</button>
                <button className='answer'>{answers[1]}</button>
                <button className='answer'>{answers[2]}</button>
                <button className='answer'>{answers[3]}</button>
            </div>
            <div>correctig: {correct}</div>
        </div>
    )
}