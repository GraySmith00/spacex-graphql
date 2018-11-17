const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const app = express();
const path = require('path');

// allow cors
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}`);
});
