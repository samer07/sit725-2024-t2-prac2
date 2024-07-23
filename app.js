const { error } = require('console');
const express = require('express');
const path = require('path')
const app = express();
const port = 8080;

//Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname,'public')));

//Middleware to parse JSON bodies
app.use(express.json());

//Simple JSON endpoint
app.get('/api/data', (req, res) => {
    res.json({message:'Hello, World!', data:[1,2,3,4,5]});
    
} );

//GET method route
app.get('/' , (req, res) =>{
    res.send('GET request to the homepage');
});

//POST method route
app.post('/', (req, res) =>{
    res.send('POST request to the homepage');
});

//PUT method route
app.put('/', (req, res) => {
    res.send('PUT request to the homepage');
});

app.delete('/', (req, res) => {
    res.send('DELTE request to the homepage');
});

//GET endpoint for addition
app.get('/api/add', (req, res) =>{
    const {a,b} = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)){
        return res.status(400).json({error: 'Invalid numbers provided'});
    }

    const result = numA + numB;
    res.json({result});
});

//GET endpoint for subtraction
app.get('/api/subtract', (req, res) =>{
    const {a,b} = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)){
        return res.status(400).json({error: 'Invalid numbers provided'});
    }

    const result = numA - numB;
    res.json({result});
});

//GET endpoint for multiplication
app.get('/api/multiply', (req, res) =>{
    const {a,b} = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)){
        return res.status(400).json({error: 'Invalid numbers provided'});
    }

    const result = numA * numB;
    res.json({result});
});

//GET endpoint for division
app.get('/api/divide', (req, res) =>{
    const {a,b} = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)){
        return res.status(400).json({error: 'Invalid numbers provided'});
    }

    if (numB == 0){
        return res.status(400).json({error: 'Dividing the number by 0 is not allowed'});
    }

    const result = numA / numB;
    res.json({result});
});

//POST endpoint for addition
app.post('/api/add',(req,res) => {
    const {a,b} = req.body;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)){
        return res.status(400).json({error: 'Invalid numbers provided'});
    }

    const result = numA + numB;
    res.json({result});
});

//POST endpoint for subtraction
app.post('/api/subtract', (req, res) =>{
    const {a,b} = req.body;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)){
        return res.status(400).json({error: 'Invalid numbers provided'});
    }

    const result = numA - numB;
    res.json({result});
});

//POST endpoint for multiplication
app.post('/api/multiply', (req, res) =>{
    const {a,b} = req.body;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)){
        return res.status(400).json({error: 'Invalid numbers provided'});
    }

    const result = numA * numB;
    res.json({result});
});

//POST endpoint for division
app.post('/api/divide', (req, res) =>{
    const {a,b} = req.body;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)){
        return res.status(400).json({error: 'Invalid numbers provided'});
    }

    if (numB == 0){
        return res.status(400).json({error: 'Dividing the number by 0 is not allowed'});
    }

    const result = numA / numB;
    res.json({result});
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
