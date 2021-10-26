import cors from 'cors';
import express from 'express';
import bearerToken from 'express-bearer-token';
import http from 'http';
import { initControllers } from './controller';

const PORT_HTTP = 4321;
const BEARER = '72a9e2f8af8e4060bc84861b5bd063ed5d8ba5bccf42a12d32f6f33aacbe170c';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bearerToken());

initControllers(app);

app.use((req, res, next) => {
    if (req.token !== BEARER ) {
        res.json({statusCode: 403, message: 'Unauthorized request'});
    }

    next();
});

function startServer() {
    server.listen(PORT_HTTP, () => console.log('Running on http://localhost:' + PORT_HTTP));
}

startServer();
