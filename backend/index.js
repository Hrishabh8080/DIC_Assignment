
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

app.get('/prime/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number)) {
        return res.status(400).json({ error: 'Invalid number' });
    }
    const result = isPrime(number);
    res.json({ number, isPrime: result });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});