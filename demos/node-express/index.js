// eslint-disable-next-line
const emailSpellChecker = require('@zootools/email-spell-checker');
const express = require('express');
const app = express();
const port = process.env.PORT || 3006;
const morgan = require('morgan');

app.use(morgan('combined'));

// To test, open this in your browser http://localhost:3000/gl@gmal.com
app.get('/:email', (req, res) => {
  const { email } = req.params;
  const suggestedEmail = emailSpellChecker.run({
    email,
  });
  if (suggestedEmail) {
    return res.json({
      isMisspelled: true,
      ...suggestedEmail,
    });
  }
  res.send({
    isMisspelled: false,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
