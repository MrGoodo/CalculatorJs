let a = ''; // first number//
let b = ''; // second number//
let sign = ''; //operation sign//
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','*','/', '%', '+/-']

///display//
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = ''; // first number and result//
    b = ''; // second number//
    sign = ''; // sign//
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // not button tap//
    if (!event.target.classList.contains('btn')) return;
    // buttons clearAll ac//
    if (event.target.classList.contains('ac')) return;
    
    out.textContent = '';
    
    // получаю нажатую кнопку//
    const key = event.target.textContent;

    // Если нажата клавиша 0-9 или .//

    if (digit.includes(key)) {
        if (b === '' && sign === ''){
            a += key;
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }
    // если нажата клавиша + = / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }


    // нажата =//
    
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
            a = (+a) + (+b);
            break;
        case "-":
            a = a - b;
            break;
        case "*":
            a = a * b;
            break;
        case "/":
            if (b === '0') {
                out.textContent = 'Error...';
                a = '';
                b = '';
                sign = '';
                return;
            }
            a = a / b;
            break;
        case "%":
            a = (a / 100) * b;
            break;
        case "+/-":
            a = a * (-1);
            break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
}