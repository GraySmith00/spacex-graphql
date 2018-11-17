const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const app = express();

// allow cors
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}`);
});
