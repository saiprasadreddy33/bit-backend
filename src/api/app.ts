import express from 'express';
import bodyParser from 'body-parser';
import identifyRoutes from './api/routes/identify.ts';

const app = express();
app.use(bodyParser.json());

app.use(identifyRoutes);

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
