const express = require('express');
const app = express();

app.get('/api/', (req, res) => {
    res.send('Hello world')
});

app.get('/api/sports', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Soccer',
        },
        {
            id: 2,
            name: 'Fencing',
        }
    ])
});

app.post('/api/sports', (req, res) => {
    
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

