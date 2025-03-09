// index.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware per servire file statici (se necessario)
app.use(express.static('assets'));

// Route di base
app.get('/', (req, res) => {
    res.send('Hello, World! L'app sta girando.');
});

// Avvio del server
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
