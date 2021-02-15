import react from 'react';
import './App.css';
import Questions from './questions';

function App() {
  return (
    <div className='container'>
      <div className='row justify-center'>
        <div className='faq-wrap'>
          <div className='row'>
            <div className='title'>
              <h1>
                frequently asked questions
              </h1>
            </div>
            <Questions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
