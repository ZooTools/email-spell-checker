import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { run } from '@zootools/email-spell-checker';

function AppForm() {
  const [email, setEmail] = useState('');
  const [suggestedEmail, setSuggestedEmail] = useState({});
  const [forceCloseModal, setForceCloseModal] = useState(false);

  let debouncedEmail = useDebounce(email, 400);

  useEffect(() => {
    const suggested = run({
      email: debouncedEmail,
    });

    if (suggested) {
      setSuggestedEmail(suggested);
    } else {
      setForceCloseModal(true);
      setTimeout(() => {
        setSuggestedEmail({});
      }, 500);
    }
  }, [debouncedEmail]);

  const handleEmailChange = val => {
    setEmail(val);
  };

  const handleFixEmail = () => {
    setForceCloseModal(true);

    setTimeout(() => {
      setEmail(suggestedEmail.full);
    }, 500);

    setTimeout(() => {
      setForceCloseModal(false);
    }, 900);
  };

  const handleClearSuggestedEmail = e => {
    e.preventDefault();

    setForceCloseModal(true);
    setTimeout(() => {
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
