// Encode the email address to prevent XSS but leave in valid
// characters, following this official spec:
// http://en.wikipedia.org/wiki/Email_address#Syntax
//
// We have to replace all the possible characters.
// that's why we use a regex with a global flag.
function encodeEmail(email: string): string {
  const result = encodeURI(email)
    .replace(/%20/g, ' ')
    .replace(/%25/g, '%')
    .replace(/%5E/g, '^')
    .replace(/%60/g, '`')
    .replace(/%7B/g, '{')
    .replace(/%7C/g, '|')
    .replace(/%7D/g, '}');
  return result;
}

export default encodeEmail;
