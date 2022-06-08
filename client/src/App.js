import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import HomePage from './pages/HomePage';
import SingleView from './pages/SingleView';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/recipe/:id' element={<SingleView />} />
				<Route path='/about/' element={<About />} />
				<Route path='/login/' element={< Login/>}/>
				<Route path='/signup/' element={<SignUp/>}/>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
