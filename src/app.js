import express from 'express';
const app = express();

/*
health check endpoint to verify that the server is running
*/
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
export default app;