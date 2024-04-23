import './App.css';
import {useState} from 'react';
import PageContent from './Content';
import LoginForm from './LoginForm';

function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {loggedIn && <PageContent />}
      {!loggedIn && <LoginForm setLoggedIn={setLoggedIn} />}
    </div>
  );
}

export default App;
