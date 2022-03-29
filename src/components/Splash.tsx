import '../Splash.css';

export interface SplashProbs {
    startQuiz: () => void;
}

export default function Splash({startQuiz} : SplashProbs) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quizzical</h1>
          <div>a trivia quiz</div>
          <div>
            <button className='start' onClick={startQuiz}>Start quiz</button>
          </div>
        </header>
      </div>
    )
}