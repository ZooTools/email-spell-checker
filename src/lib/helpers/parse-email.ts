import { EmailsPart } from '../types';
import trim from './trim';

const MINIUM_EMAIL_PARTS = 2;

function parseEmail(emailStr: string): EmailsPart | false {
  const email = trim(emailStr);
  const parts = email.split('@');

  if (parts.length < MINIUM_EMAIL_PARTS) {
    return false;
  }

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === '') {
      return false;
    }
  }

  // FYI, in hello@example.com
  // secondLevelDomain -> example
  // topLevelDomain -> com
  let sld = '';
  let tld = '';

  const domain = parts.pop() as string;
  const domainParts = domain.split('.');
  if (domainParts.length === 0) {
    // The address does not have a top-level domain
    return false;
  } else if (domainParts.length == 1) {
    // The address has only a top-level domain (valid under RFC)
    tld = domainParts[0];
  } else {
    // The address has a domain and a top-level domain
    sld = domainParts[0];
    for (let j = 1; j < domainParts.length; j++) {
      tld += domainParts[j] + '.';
    }
    tld = tld.substring(0, tld.length - 1);
  }

  return {
    topLevelDomain: tld,
    secondLevelDomain: sld,
    domain,
    address: parts.join('@'),
  };
}

export default parseEmail;
