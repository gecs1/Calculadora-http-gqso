const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('olá mundo')
})

app.get('/soma/:a/:b', (req, res) => {
    const { a, b } = req.params;

<<<<<<< HEAD
    if(isNaN(a)){
        return res.status(400).send('Número inválido')
    }else if(isNaN(b)){
        return res.status(400).send('Número inválido')
    }

    let result = Number(a) + Number(b);
=======
    console.log(a, b)

    let result = a + b;
>>>>>>> bf0a35ac9b6d086476712e32ab36a73fc6f6a7ab

    res.json({
        result
    })
})

app.listen(port, () => {
    console.log('server running on port', port)
<<<<<<< HEAD
})
=======
})
>>>>>>> bf0a35ac9b6d086476712e32ab36a73fc6f6a7ab
