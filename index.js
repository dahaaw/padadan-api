require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res) => res.json({huhu:'huhu'}));

app.listen(process.env.PORT, () => console.log(`server run in port ${process.env.PORT}`))