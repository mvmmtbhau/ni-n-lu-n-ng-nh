const express = require('express');
const cors = require('cors');
const postsRouter = require('./app/routes/PostRoute');
const ApiError = require('./app/api/ApiError');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/posts', postsRouter);

// Middleware
// handle 404 response
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
// define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contact book application.' })
});

module.exports = app;