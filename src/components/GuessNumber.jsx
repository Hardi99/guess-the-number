import { useState } from 'react'
import '../App.css'

function GuessTheNumber() {

    const [guess, setGuess] = useState()
    const [count, setCount] = useState(1)
    const [message, setMessage] = useState('')
    const [message2, setMessage2] = useState('')
    const [attempts, setAttempts] = useState([])
    const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100));

    const handleChange = (event) => {
        setGuess(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setAttempts([...attempts, guess]);
        setCount(count + 1)

        if (guess < secretNumber) {
            setMessage('Trop bas!');
        } else if (guess > secretNumber) {
            setMessage('Trop haut!');
        } else if (!guess) {
            setMessage('Vous devez entrer un chiffre')
        } else {
            setMessage('Bravo ! Vous avez deviné le nombre !');
            setMessage2(`Vous avez essayé ${count} fois en essayant précédemment [${attempts}]`)
        }
    };

    const handleReset = () => {
        setGuess('');
        setMessage('');
        setMessage2('');
        setAttempts([]);
        setCount(1);
        setSecretNumber(Math.floor(Math.random() * 100));
    };

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Guess the number</h1>
                    <input type="number" min={0} max={99} step={1} value={guess} onChange={handleChange} />
                    <button type="submit">Deviner</button>
                    <button type="reset" onClick={handleReset}>Réinitialiser</button>
                </form>
                <p>{message}</p>
                <p>{message2}</p>
            </div>
    )
}

export default GuessTheNumber