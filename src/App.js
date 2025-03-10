import logo from './logo.svg';
import './styles/fonts.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
