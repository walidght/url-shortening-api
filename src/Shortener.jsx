import { useState } from 'react';
import ShortLink from './ShortLink';
import Input from './Input';
import './Shortener.css';

const Shortener = () => {
    const [urls, setUrls] = useState([]);

    function setClicked(n) {
        let newUrls = urls.map((el) => {
            let curr = { ...el };
            curr.clicked = false;
            return curr;
        });
        newUrls[n].clicked = true;
        setUrls(newUrls);
    }

    let i = 0;

    return (
        <div className="shortener-container">
            <Input urls={urls} setUrls={setUrls} />

            {urls.map((url) => (
                <ShortLink
                    original={url.original}
                    short={url.short}
                    clicked={url.clicked}
                    setClicked={setClicked}
                    index={i++}
                />
            ))}
        </div>
    );
};

export default Shortener;
