import { useState } from 'react'
import '../App.css'

function GuessTheNumber() {

    const [guess, setGuess] = useState()
    const [count, setCount] = useState(1)
    const [message, setMessage] = useState('')
    const [message2, setMessage2] = useState('')
    const [attempts, setAttempts] = useState([])
    const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100));
    const [hasWon, setHasWon] = useState(false); // État pour suivre si le joueur a gagné

    const handleChange = (event) => {
        setGuess(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!guess) {
            setMessage('Vous devez entrer un chiffre');
            return;
        }

        if (guess < secretNumber) {
            setMessage('Trop petit !');
        } else if (guess > secretNumber) {
            setMessage('Trop grand !');
        } else {
            setMessage('Bravo vous avez deviné le nombre !');
            setMessage2(`Vous avez trouvé en ${count} tentatives en essayant précédemment [${attempts}]`);
            setHasWon(true); // Mettre à jour l'état hasWon lorsque le nombre est trouvé
        }

        setAttempts([...attempts, guess]);
        setCount(count + 1);
    };

    const handleReset = () => {
        setGuess('');
        setMessage('');
        setMessage2('');
        setAttempts([]);
        setCount(1);
        setSecretNumber(Math.floor(Math.random() * 100));
        setHasWon(false); // Réinitialiser hasWon lors de la réinitialisation
    };

    return (
            <div>
                <h1>🔢 Guess the Number 🔢</h1>
                <form onSubmit={handleSubmit}>
                    <p>Veuillez saisir un chiffre</p>
                    <input type="number" min={0} max={99} step={1} value={guess} onChange={handleChange} disabled={hasWon} />
                    <button type="submit" disabled={hasWon}>Deviner</button>
                    <button type="reset" onClick={handleReset} disabled={!hasWon}>Réinitialiser</button>
                </form>
                <p>{message}</p>
                <p>{message2}</p>
            </div>
    )
}

export default GuessTheNumber