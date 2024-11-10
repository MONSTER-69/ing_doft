import express from 'express';
import cors from 'cors';
import db from './database/db.js';
// import expedienteRoutes from './routes/routes.js';
import generalRoutes from './routes/routes.js'

const app = express();

app.use(cors());
app.use(express.json());
// de api desplegamos todos las demas rutas
app.use('/api', generalRoutes);

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}   


/*app.get('/', (req, res) => {
    res.send('Hello World');
});*/

app.listen(3001, () => {
    console.log('Server running on port 3001');
});

