const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

var quotes = [
    {
        'text': 'Nada es verdad. Todo está permitido',
        'author': 'Assassins Creed',
    },
    {
        'text': 'La esperanza es lo que nos hace más fuertes. Es la razón por la que estamos aquí. Es con lo que luchamos cuando todo lo demás se ha perdido',
        'author': 'God of War',
    },
    {
        'text': 'Cuanto más te acerques a la luz, mayor será tu sombra',
        'author': 'Kingdom Hearts',
    },
    {
        'text': 'Los sacrificios los decides tú. Las pérdidas las deciden por ti',
        'author': 'Tomb Raider',
    }
];

app.get('/random-quote', function(req, res) {
    var randomQuote = getRandomQuote();
	res.send(randomQuote);
});

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}