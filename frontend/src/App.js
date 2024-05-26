// import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login.jsx';
import MainPage from './components/Main.jsx';
import NotFoundPage from './components/NotFound.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='login' element={<LoginPage />} />
				<Route path='404' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;

//  <div className='App'>
// 		<header className='App-header'>
// 			<img src={logo} className='App-logo' alt='logo' />
// 			<p>
// 				Edit <code>src/App.js</code> and save to reload.
// 			</p>
// 			<a
// 				className='App-link'
// 				href='https://reactjs.org'
// 				target='_blank'
// 				rel='noopener noreferrer'
// 			>
// 				Learn React
// 			</a>
// 		</header>
//  </div>