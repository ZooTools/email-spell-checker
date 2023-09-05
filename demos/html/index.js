// Use jsdelivr for browser-ready JS file
import emailSpellChecker from 'https://cdn.jsdelivr.net/npm/@zootools/email-spell-checker/+esm';
const emailInput = document.getElementById('email-input');
const warningContainer = document.getElementById('email-warning-container');
const warningEle = document.getElementById('warning');
const warningText = document.getElementById('warning-text');
const warningEmail = document.getElementById('warning-email');
const warningDismiss = document.getElementById('warning-dismiss');

// Timer for debouncing suggestedEmail updates
let debounceTimer;

// Takes a callback and a time argument, clears `debounceTimer` if exists, and returns the new timer
const debounce = (callback, time) => {
  if (debounceTimer) window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

emailInput.addEventListener('keyup', () => {
  debounce(() => {
    const email = emailInput.value;
    // Get suggested email
    const suggestedEmail = emailSpellChecker.run({
      email,
    });

    // If return value exists
    if (suggestedEmail) {
      // Make the warning container visible,
      warningContainer.classList.add('view');

      // and add warning text
      warningText.innerText = `Did you mean`;
      warningEmail.innerText = `${suggestedEmail.full}?`;
    } else {
      // Else, hide the warning container
      warningContainer.classList.remove('view');
    }
  }, 400);
});

// Hide the modal when the dismiss button is clicked
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
