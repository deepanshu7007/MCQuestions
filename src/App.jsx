import './App.css'

function App() {
  const questions = [
    {
      "question": "What is the capital of France?",
      "answerOptions": [
        { "answerText": "Paris", "isCorrect": true },
        { "answerText": "London", "isCorrect": false },
        { "answerText": "Rome", "isCorrect": false },
        { "answerText": "Berlin", "isCorrect": false }
      ]
    },
    {
      "question": "Who wrote 'Romeo and Juliet'?",
      "answerOptions": [
        { "answerText": "William Shakespeare", "isCorrect": true },
        { "answerText": "Jane Austen", "isCorrect": false },
        { "answerText": "Charles Dickens", "isCorrect": false },
        { "answerText": "Mark Twain", "isCorrect": false }
      ]
    },
    {
      "question": "What is the chemical symbol for water?",
      "answerOptions": [
        { "answerText": "H2O", "isCorrect": true },
        { "answerText": "CO2", "isCorrect": false },
        { "answerText": "NaCl", "isCorrect": false },
        { "answerText": "O2", "isCorrect": false }
      ]
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "answerOptions": [
        { "answerText": "Mars", "isCorrect": true },
        { "answerText": "Jupiter", "isCorrect": false },
        { "answerText": "Saturn", "isCorrect": false },
        { "answerText": "Mercury", "isCorrect": false }
      ]
    },
    {
      "question": "What is the tallest mammal?",
      "answerOptions": [
        { "answerText": "Giraffe", "isCorrect": true },
        { "answerText": "Elephant", "isCorrect": false },
        { "answerText": "Whale", "isCorrect": false },
        { "answerText": "Horse", "isCorrect": false }
      ]
    }
  ];

  return (
    <>
      <div>
        <div className="questions">
          <div>Question 1/{questions.length}</div>
          <span>{questions[0].question}</span>
          
        </div>
        <div className='answers'>
          {questions[0].answerOptions.map((answer) => <button key={answer.isCorrect}>{answer.answerText}</button> )}
        </div>
      </div>
    </>
  )
}

export default App
