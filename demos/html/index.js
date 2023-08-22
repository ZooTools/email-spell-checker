// Use jsdelivr for browser-ready JS file
import emailSpellChecker from 'https://cdn.jsdelivr.net/npm/@zootools/email-spell-checker/+esm';
const emailInput = document.getElementById('email-input');
const warningContainer = document.getElementById('email-warning-container');
const warningEle = document.getElementById('warning');
const warningText = document.getElementById('warning-text');
const warningEmail = document.getElementById('warning-email');
const warningDismiss = document.getElementById('warning-dismiss');

let debounceTimer;

const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

emailInput.addEventListener('keyup', () => {
  debounce(() => {
    const email = emailInput.value;

    const suggestedEmail = emailSpellChecker.run({
      email,
    });

    if (suggestedEmail) {
      warningContainer.classList.add('view');

      warningText.innerText = `Did you mean`;
      warningEmail.innerText = `${suggestedEmail.full}?`;
    } else {
      warningContainer.classList.remove('view');
    }
  }, 400);
});

warningDismiss.addEventListener('click', e => {
  e.preventDefault();

  warningContainer.classList.remove('view');
});

warningEle.addEventListener('click', e => {
  e.preventDefault();
  // Remove question mark at the end of the warning message's email part
  const parsedWarningEmail = warningEmail.innerText.slice(0, -1);
  emailInput.value = parsedWarningEmail;

  warningContainer.classList.remove('view');
});
