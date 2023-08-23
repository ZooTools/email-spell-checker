import AppForm from './AppForm';
import Navbar from './Navbar';

function MainContainer() {
  return (
    <>
      <Navbar />
      <div id="main-container">
        <AppForm />
        <button id="signup-button">Sign Up</button>
      </div>
    </>
  );
}

export default MainContainer;
