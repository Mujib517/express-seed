const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const defaultRouter = require('./routes/default.router');
const movieRouter = require('./routes/movie.router');

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

app.use('/', defaultRouter);
app.use('/api/movies', movieRouter);