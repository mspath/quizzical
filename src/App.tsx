import React from 'react';
import Splash from './components/Splash';
import Quizzical from './components/Quizzical';

function App() {

  const [splash, setSplash] = React.useState(true);
  const startQuiz = () => setSplash(false)

  return (
      <>
        {splash ? <Splash startQuiz={startQuiz}/> : <Quizzical />}
      </>
  );
}

export default App;
