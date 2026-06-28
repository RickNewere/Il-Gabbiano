
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware per servire file statici dalla root
app.use(express.static(__dirname));

// Route di base - serve l'index.html dalla root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Avvio del server
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
    console.log(`Apri il browser su: http://localhost:${PORT}`);
});

