const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false })); // to access body data (not necessary anymore to require body-parser)

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API...' })
);

// define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// in production, the first value will be used
const PORT = process.env.PORT || 5000;

// params: port and optional callback function
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
