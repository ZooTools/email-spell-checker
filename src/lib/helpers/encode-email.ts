// Encode the email address to prevent XSS but leave in valid
// characters, following this official spec:
// http://en.wikipedia.org/wiki/Email_address#Syntax
function encodeEmail(email: string): string {
  const result = encodeURI(email)
    .replace('%20', ' ')
    .replace('%25', '%')
    .replace('%5E', '^')
    .replace('%60', '`')
    .replace('%7B', '{')
    .replace('%7C', '|')
    .replace('%7D', '}');
  return result;
}

export default encodeEmail;
