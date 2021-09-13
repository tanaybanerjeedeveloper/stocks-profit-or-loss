const initaialPriceBlock = document.querySelector('#initial-price');
const currentPriceBlock = document.querySelector('#current-price');
const quantityBlock = document.querySelector('#quantity');
const btn = document.querySelector('#btn');
const outputBlock = document.querySelector('#output-block');

const submitHandler = () => {
  calculateProfitAndLoss(
    Number(initaialPriceBlock.value),
    Number(currentPriceBlock.value),
    Number(quantityBlock.value)
  );
};

const calculateProfitAndLoss = (initial, current, quantity) => {
  if (
    Number.isNaN(initial) === true ||
    Number.isNaN(current) === true ||
    Number.isNaN(quantity) === true
  ) {
    showOutput(`Invalid input`);
  } else if (initial === 0 || current === 0 || quantity === 0) {
    showOutput(`Please fill all the fields`);
  } else {
    if (initial < current) {
      const profit = (current - initial) * quantity;
      const profitPercentage = (profit / initial) * 100;
      showOutput(
        `profit: ${profit} and profit%: ${profitPercentage.toFixed(2)}`
      );
    } else if (initial > current) {
      const loss = (initial - current) * quantity;
      const lossPercentage = (loss / initial) * 100;
      showOutput(`loss: ${loss} and loss%: ${lossPercentage.toFixed(2)}`);
    } else {
      showOutput('no pain no gain');
    }
  }
};

const showOutput = (msg) => {
  outputBlock.innerText = msg;
};

btn.addEventListener('click', submitHandler);
