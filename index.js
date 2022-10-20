/* == DOM ELEMENTS == */
const colorEl = document.getElementById('color');
const guessEl = document.getElementById('guess');

const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');

/* == CONSTANTS == */
const COLORS = {
    BLACK_RGB: { r: 0, g: 0, b: 0 },
    WHITE_RGB: { r: 1, g: 1, b: 1 },
    BLACK: [0],
    WHITE: [1]
};

const trainingData = [
    {
        input: COLORS.BLACK_RGB,
        output: COLORS.WHITE
    },
    {
        input: COLORS.WHITE_RGB,
        output: COLORS.BLACK
    },
];

/* == HELPER FUNCTIONS == */
const colorToCSS = (color) => {
    return `rgba(${[...Object.values(color).map(n => n * 255), 1].join(", ")})`;
}

const runNewColor = (net) => {
    const color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }

    const guess = net.run(color)[0];
    console.log(guess);

    guessEl.style.color = (guess > 0.5) ? '#FFF' : '#000';
    colorEl.style.backgroundColor = colorToCSS(color);
}

/* == MAIN == */
const init = () => {
    const net = new brain.NeuralNetwork();
    net.train(trainingData);
    
    runNewColor(net);
}

init();
