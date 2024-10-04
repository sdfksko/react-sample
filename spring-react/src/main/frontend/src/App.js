import TestPage from './pages/TestPage.js';
import LoginPage from './pages/LoginPage.js';
import JoinPage from './pages/JoinPage.js';
import SearchIdPage from './pages/SearchIdPage.js';
import SearchPasswordPage from './pages/SearchPasswordPage.js';
import SearchAddress from './components/daumapi/SearchAddress';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path="/loginForm" exact={true} element={<LoginPage />} />
    <Route path="/joinForm" exact={true} element={<JoinPage />} />
    <Route path="/sms/search/id" exact={true} element={<SearchIdPage />} />
    <Route path="/search/password" exact={true} element={<SearchPasswordPage />} />
    <Route path="/test" exact={true} element={<TestPage />} />
    <Route path="/daum" exact={true} element={<SearchAddress />} />
    </Routes>
  );
}

export default App;
