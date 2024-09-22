
const express = require ('express');
const app = express();
const rootRouter  = require('./routes/index');


app.use("api/vi/",rootRouter);


app.listen(3000);
