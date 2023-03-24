import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Notify from './components/notify/Notify';
import ExplorePage from './pages/explore/ExplorePage';
import ProfilePage from './pages/profile/ProfilePage';
import SearchPage from './pages/search/SearchPage';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./redux/requestAPI/postRequests";
import TimelinePage from "./pages/timeline/Timeline";
import NotFoundPage from "./pages/not-found/NotFoundPage";

function App() {

  const { access_token } = useSelector(state => state.auth?.login)

  const dispatch = useDispatch();

  useEffect(() => {
    getPosts(dispatch)
  }, [dispatch])

  return (
    <Router>
      <Notify />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/explore" element={<ExplorePage />} />
        <Route exact path="/timeline" element={<TimelinePage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/login" element={access_token ? <Navigate to='../home' /> : <LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/explore" element={<ExplorePage />} />
        <Route exact path="/profile/:id" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
