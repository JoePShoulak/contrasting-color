
const net = new brain.NeuralNetwork();

net.train([

])

const diagramElement = document.getElementById('diagram')

diagramElement.append(brain.utilities.toSVG(net))
