import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './utils/database';
import gatosRoutes from './routes/gatos.routes';
import imagenesRoutes from './routes/imagenes.routes';
import usuariosRoutes from './routes/usuarios.routes';

dotenv.config();

const app = express();

connectDB();

app.use(bodyParser.json());
app.use('/api/gatos', gatosRoutes);
app.use('/api/imagenes', imagenesRoutes);
app.use('/api/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
