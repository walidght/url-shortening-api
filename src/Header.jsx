import './Header.css';

const Header = ({ Logo }) => {
    return (
        <nav id="nav-container">
            <div className="nav-sub">
                <a href="/" id="nav-logo">
                    <Logo />
                </a>
                <a href="/">Features</a>
                <a href="/">Pricing</a>
                <a href="/">Resources</a>
            </div>
            <div className="nav-sub">
                <a href="/">Login</a>
                <a href="/" id="sign-up">
                    Sign Up
                </a>
            </div>
        </nav>
    );
};

export default Header;
