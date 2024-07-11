let display = document.getElementById('display');

function appendSymbol(symbol) {
    if (display.innerText === '0') {
        display.innerText = symbol;
    } else {
        display.innerText += symbol;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
        setTimeout(() => {
            display.innerText = '0';
        }, 2000);
    }
}


<div class="buttons">
    <button class="btn" onclick="clearDisplay()">C</button>
    <button class="btn" onclick="deleteLast()">DEL</button>
    <button class="btn" onclick="appendSymbol('/')">/</button>
    <button class="btn" onclick="appendSymbol('*')">*</button>
    <button class="btn" onclick="appendSymbol('7')">7</button>
    <button class="btn" onclick="appendSymbol('8')">8</button>
    <button class="btn" onclick="appendSymbol('9')">9</button>
    <button class="btn" onclick="appendSymbol('-')">-</button>
    <button class="btn" onclick="appendSymbol('4')">4</button>
    <button class="btn" onclick="appendSymbol('5')">5</button>
    <button class="btn" onclick="appendSymbol('6')">6</button>
    <button class="btn" onclick="appendSymbol('+')">+</button>
    <button class="btn" onclick="appendSymbol('1')">1</button>
    <button class="btn" onclick="appendSymbol('2')">2</button>
    <button class="btn" onclick="appendSymbol('3')">3</button>
    <button class="btn equal" onclick="calculateResult()">=</button>
    <button class="btn" onclick="appendSymbol('0')">0</button>
    <button class="btn" onclick="appendSymbol('.')">.</button>
</div>
