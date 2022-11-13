import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Notify from "./components/notify/Notify";
import TimelinePage from "./pages/timeline-review/TimelinePage"
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
	return (
		<Router>
			<Notify/>
			<Routes>
				<Route exact path="/home" element={<HomePage/>} />
				<Route exact path="/login" element={<LoginPage/>} />
				<Route exact path="/register" element={<RegisterPage />} />
				<Route exact path="/explore" element={<TimelinePage />} />
				<Route exact path="/profile/:id" element={<ProfilePage />} />
			</Routes>
		</Router>
	);
}


export default App;
