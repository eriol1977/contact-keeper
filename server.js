const express = require('express');

const app = express();

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
