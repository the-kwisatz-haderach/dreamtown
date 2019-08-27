const { app } = require('./server/app');
require('dotenv').config()

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));