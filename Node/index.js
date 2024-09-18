const express = require('express');
const cors = require('cors'); // Allow request response
const mysql = require('mysql'); // Manupulation
const app = express();
const port = 3009;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'healthybuy'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

app.post('/plans', (req, res) => {
    const { duration, title, veg_price, nonveg_price } = req.body;
    const query = 'INSERT INTO plans (duration, title, veg_price, nonveg_price) VALUES (?, ?, ?, ?)';

    db.query(query, [duration, title, veg_price, nonveg_price], (err, result) => {
        if (err) {
            console.error('Error inserting record:', err);
            res.status(500).send('Error inserting record');
        } else {
            res.status(201).send(`Record inserted with ID: ${result.insertId}`);
        }
    });
});

app.get('/plans', (req, res) => {
    const query = 'SELECT * FROM plans';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving records:', err);
            res.status(500).send('Error retrieving records');
        } else {
            res.status(200).json(results);
        }
    });
});

app.get('/plans/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM plans WHERE id = ?';

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error retrieving record:', err);
            res.status(500).send('Error retrieving record');
        } else {
            res.status(200).json(results[0]);
        }
    });
});

app.put('/plans/:id', (req, res) => {
    const { id } = req.params;
    const { duration, title, veg_price, nonveg_price } = req.body;
    const query = 'UPDATE plans SET duration = ?, title = ?, veg_price = ?, nonveg_price = ? WHERE id = ?';

    db.query(query, [duration, title, veg_price, nonveg_price, id], (err, result) => {
        if (err) {
            console.error('Error updating record:', err);
            res.status(500).send('Error updating record');
        } else {
            res.status(200).send(`Record with ID: ${id} updated`);
        }
    });
});

app.delete('/plans/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM plans WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting record:', err);
            res.status(500).send('Error deleting record');
        } else {
            res.status(200).send(`Record with ID: ${id} deleted`);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
