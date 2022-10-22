// eslint-disable-next-line
import emailSpellChecker from '../../dist/index.js';

const email = 'test@gmal.com';
const suggestedEmail = emailSpellChecker.run({
  email,
});

if (suggestedEmail) {
  // TODO: Handle the suggested email
  // Example: Show a modal to the user with the suggested email
  console.log('suggestedEmail', suggestedEmail);
}
