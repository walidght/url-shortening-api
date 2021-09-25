import './Hero.css';
import { ReactComponent as Image } from './images/illustration-working.svg';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-left">
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                </p>
                <a href="/">Get Started</a>
            </div>
            <div className="hero-right">
                <Image className="hero-image" />
            </div>
        </div>
    );
};

export default Hero;
