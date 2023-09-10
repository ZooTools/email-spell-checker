import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const app = express();
const port = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + '/public'))

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
