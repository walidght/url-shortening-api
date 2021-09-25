import './App.css';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Shortener from './Shortener';
import { ReactComponent as Logo } from './images/logo.svg';
import Footer from './Footer';
import Boost from './Boost';
import Statistics from './Statistics';

function App() {
    return (
        <div className="App">
            <header>
                <Header Logo={Logo} />
            </header>
            <main>
                <Hero />
                <Shortener />
                <Statistics />
                <Boost />
            </main>
            <footer>
                <Footer Logo={Logo} />
            </footer>
        </div>
    );
}

export default App;
