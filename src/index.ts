import run from './lib/run';
import { POPULAR_DOMAINS, POPULAR_TLDS, isBrowserContext } from './lib/config';
import attachLibraryToWindow from './lib/helpers/attachLibraryToWindow';

const MailSpellChecker = {
  run,
  POPULAR_DOMAINS,
  POPULAR_TLDS,
};

if (isBrowserContext) {
  attachLibraryToWindow(MailSpellChecker);
}

export { run, POPULAR_DOMAINS, POPULAR_TLDS };
export default MailSpellChecker;
