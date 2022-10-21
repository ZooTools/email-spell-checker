import checkMail from './lib/check-mail';
import { POPULAR_DOMAINS } from './lib/config';

const MailSpellChecker = {
  run: checkMail,
  POPULAR_DOMAINS,
};

export default MailSpellChecker;
