// install core server components
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// link the app 
const app = express();

// middleware 
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 5500;  
let varCommand = " ";

app.post('/expression', (req, res) => {
    readExpression(req.body);
    let responseOut = `We processed this command:', ${varCommand}`;
     res.status(200).send(responseOut);
})
  
function readExpression(req) { 
    let conditionTest = req.data.condition;
    let conditionTrue = req.data.ifTrue;
    let conditionFalse = req.data.ifFalse;

    varCommand = `if ${conditionTest} {
        ${conditionTrue};
    } else ${conditionFalse}`;
     return varCommand
}


app.listen(`${PORT}`, res => {
    console.log(`The server is listening on port ${PORT}`);
});