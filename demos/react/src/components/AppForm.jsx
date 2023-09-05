import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { run } from '@zootools/email-spell-checker';

function AppForm() {
  const [email, setEmail] = useState('');
  const [suggestedEmail, setSuggestedEmail] = useState({});
  // For closing the modal independent from any other checks,
  // useful when you want to close it before running a debounced function that messes with the modal
  // TLDR; if `forceCloseModal` is true, even if `suggestedEmail` is available, the modal won't be visible.
  const [forceCloseModal, setForceCloseModal] = useState(false);

  // runs useBounce and sets `bounchedEmail` every time `email` changes
  let debouncedEmail = useDebounce(email, 400);

  useEffect(() => {
    // Get suggested email
    const suggested = run({
      email: debouncedEmail,
    });

    // If we have a result,
    if (suggested) {
      // Set it to `suggestedEmail`
      setSuggestedEmail(suggested);
    } else {
      // If not, force close the modal
      setForceCloseModal(true);
      setTimeout(() => {
        // 500ms later (after animation finishes) clear suggested email
        setSuggestedEmail({});
      }, 500);
    }
  }, [debouncedEmail]);

  // Sets `email` to `val`
  const handleEmailChange = val => {
    setEmail(val);
  };

  // Sets `email` to the suggested one
  const handleFixEmail = () => {
    // Force close modal
    setForceCloseModal(true);

    // Set a timeout for updating email
    setTimeout(() => {
      setEmail(suggestedEmail.full);
    }, 500);

    // Set a delayed timeout for enabling the modal again after the email gets set
    // The reason we delay this is because the `debouncedEmail` variable gets set twice due to the previous timeout,
    // and this forces it to become visible again, so we force close it until debouncedEmail is done updating
    setTimeout(() => {
      setForceCloseModal(false);
    }, 900);
  };

  // Clears `suggestedEmail`
  const handleClearSuggestedEmail = e => {
    e.preventDefault();

    // Force close modal,
    setForceCloseModal(true);
    setTimeout(() => {
      // after animation finishes, clear `suggestedEmail` and remove force disable on modal
      setSuggestedEmail({});
      setForceCloseModal(false);
    }, 500);
  };

  return (
    <form id="signup-form">
      <label>Username*</label>
      <input id="username-input" className="input" />
      <label>Email*</label>
      <div id="email-container">
        <i id="email-icon" className="fa-regular fa-envelope fa-lg"></i>
        <input
          id="email-input"
          className="input"
          onChange={e => handleEmailChange(e.target.value)}
          value={email}
        />
      </div>
      <div
        id="email-warning-container"
        className={`${suggestedEmail.full && !forceCloseModal ? 'view' : null}`}
      >
        <button id="warning-dismiss" onClick={handleClearSuggestedEmail}>
          X
        </button>
        <span id="warning" onClick={handleFixEmail}>
          <span id="warning-text">Did you mean</span>
          <span id="warning-email">{suggestedEmail.full}?</span>
        </span>
      </div>
      <label>Password*</label>
      <input id="password-input" className="input" />
    </form>
  );
}

export default AppForm;
