console.log('Hello, world!');

function rollDice() {
    const diceQuantity = document.getElementById("dice-quantity").value;
    const diceResult = document.getElementById("dice-result");
    const values = [];

    for (let i = 0; i < diceQuantity; i++) {
        const value = Math.floor(Math.random() * 20) + 1;
        values.push(value);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
}