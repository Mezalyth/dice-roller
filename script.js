console.log('Hello, world!');

function rollDice() {
    const diceQuantity = document.getElementById("dice-quantity").value;
    const diceResult = document.getElementById("dice-result");
    const values = [];

    // Clear existing results per roll
    diceResult.innerHTML = '';

    for (let i = 0; i < diceQuantity; i++) {
        const value = Math.floor(Math.random() * 20) + 1;
        values.push(value);

        const resultSpan = document.createElement('span');
        resultSpan.textContent = value;

        if (value === 20) {
            resultSpan.classList.add('crit');
        }

        diceResult.appendChild(resultSpan);

        if (i < diceQuantity - 1) {
            diceResult.appendChild(document.createTextNode(', '));
        }
    }

}

function rollDic12() {
    const diceQuantity = document.getElementById("dice-quantity").value;
    const diceResult = document.getElementById("dice-result");
    const values = [];

    // Clear existing results per roll
    diceResult.innerHTML = '';

    for (let i = 0; i < diceQuantity; i++) {
        const value = Math.floor(Math.random() * 12) + 1;
        values.push(value);

        const resultSpan = document.createElement('span');
        resultSpan.textContent = value;

        if (value === 12) {
            resultSpan.classList.add('crit');
        }

        diceResult.appendChild(resultSpan);

        if (i < diceQuantity - 1) {
            diceResult.appendChild(document.createTextNode(', '));
        }
    }

}