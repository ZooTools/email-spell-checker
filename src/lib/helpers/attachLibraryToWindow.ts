import { MailSpellChecker } from '../types';

// Attaching mailSpellChecker to window object
// so people using <script src="" /> can access it
function attachLibraryToWindow(MailSpellChecker: MailSpellChecker): void {
  if (typeof window !== 'undefined') {
    (function (window) {
      window.mailSpellChecker = MailSpellChecker;
    })(window);
  }
}

export default attachLibraryToWindow;
