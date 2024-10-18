import LoginPage from './pages/loginPages/LoginPage.js';
import JoinPage from './pages/loginPages/JoinPage.js';
import SearchIdPage from './pages/loginPages/SearchIdPage.js';
import SearchPasswordPage from './pages/loginPages/SearchPasswordPage.js';
import BoardIndexPage from './pages/boardPages/BoardIndexPage.js';
import BoardNewPage from './pages/boardPages/BoardNewPage.js';
import BoardShowPage from './pages/boardPages/BoardShowPage.js';
import BoardEditPage from './pages/boardPages/BoardEditPage.js';
import MainPage from './pages/MainPage.js';
import AdminPage from './pages/adminPages/AdminPage.js';
import AdminMemberPage from './pages/adminPages/AdminMemberPage.js';
import SearchAddress from './components/daumapi/SearchAddress';
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Routes>
        <Route path="/loginForm" exact={true} element={<LoginPage />} />
        <Route path="/joinForm" exact={true} element={<JoinPage />} />
        <Route path="/sms/search/id" exact={true} element={<SearchIdPage />} />
        <Route path="/search/password" exact={true} element={<SearchPasswordPage />} />
        <Route path="/board" exact={true} element={<BoardIndexPage />} />
        <Route path="/board/new" exact={true} element={<BoardNewPage />} />
        <Route path="/board/show" exact={true} element={<BoardShowPage />} />
        <Route path="/board/edit" exact={true} element={<BoardEditPage />} />
        <Route path="/" exact={true} element={<MainPage />} />
        <Route path="/admin" exact={true} element={<AdminPage />} />
        <Route path="/admin/members" exact={true} element={<AdminMemberPage />} />
        <Route path="/daum" exact={true} element={<SearchAddress />} />
    </Routes>
  );
}

export default App;
