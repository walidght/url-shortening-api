import { useEffect, useState } from 'react';
import './Shortener.css';

const Input = ({ urls, setUrls }) => {
    const [url, setUrl] = useState('');
    const [containerClasse, setContainerClasse] = useState('input-container');

    function isShortened(url) {
        return urls.some((elem) => {
            return elem.url === url;
        });
    }

    function parseCookies() {
        const cookie = document.cookie;
        if (cookie === '') return;
        const list = cookie.split('; ').map((elem) => {
            return { ...JSON.parse(elem.split('=')[1]), clicked: false };
        });
        setUrls(list);
        console.log(urls);
    }

    function shortenButton() {
        setContainerClasse(checkContainerClasse());
        if (url === '') return;
        if (isShortened(url)) return;
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.ok) return;
                const linkNum = urls.length + 1;

                document.cookie =
                    `link${linkNum}=` +
                    JSON.stringify({
                        original: data?.result?.original_link,
                        short: data?.result?.full_short_link,
                        url: url,
                    });

                parseCookies();
            })
            .catch((err) => console.log(err));
    }

    function checkContainerClasse() {
        if (url !== '') return 'input-container';
        return 'input-container input-container-error';
    }

    useEffect(() => {
        parseCookies();
    }, []);

    return (
        <div className={containerClasse}>
            <input
                type="text"
                placeholder="Shorten a link here..."
                className="shortener-input-field"
                onChange={(event) => {
                    setUrl(event.target.value);
                    setContainerClasse('input-container');
                }}
            />
            <input
                type="button"
                value="Shorten It!"
                className="input-shorten-button"
                onClick={() => shortenButton()}
            />
        </div>
    );
};

export default Input;
