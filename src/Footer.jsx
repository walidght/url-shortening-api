import './Footer.css';
import './FooterList.css';
import { ReactComponent as Facebook } from './images/icon-facebook.svg';
import { ReactComponent as Twitter } from './images/icon-twitter.svg';
import { ReactComponent as Pinterest } from './images/icon-pinterest.svg';
import { ReactComponent as Instagram } from './images/icon-instagram.svg';

import FooterList from './FooterList';

const Footer = ({ Logo }) => {
    return (
        <div className="footer">
            <Logo id="footer-logo" />
            <div className="footer-lists">
                <FooterList
                    title="Features"
                    links={[
                        { title: 'Link Shortening', link: '/' },
                        { title: 'Branded Links', link: '/' },
                        { title: 'Analytics', link: '/' },
                    ]}
                />
                <FooterList
                    title="Resources"
                    links={[
                        { title: 'Blog', link: '/' },
                        { title: 'Developers', link: '/' },
                        { title: 'Support', link: '/' },
                    ]}
                />
                <FooterList
                    title="Company"
                    links={[
                        { title: 'About', link: '/' },
                        { title: 'Our Team', link: '/' },
                        { title: 'Careers', link: '/' },
                        { title: 'Contact', link: '/' },
                    ]}
                />
            </div>
            <div className="footer-socials">
                <a href="/">
                    <Facebook className="footer-socials-logo" />
                </a>
                <a href="/">
                    <Twitter className="footer-socials-logo" />
                </a>
                <a href="/">
                    <Pinterest className="footer-socials-logo" />
                </a>
                <a href="/">
                    <Instagram className="footer-socials-logo" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
