const ShortLink = ({ original, short, clicked, setClicked, index }) => {
    function copyToClipboard() {
        navigator.clipboard.writeText(short);
        setClicked(index);
    }

    return (
        <div className="short-link-container">
            <p className="short-link-original"> {original}</p>
            <p className="short-link-short">{short}</p>
            <button
                className={
                    clicked
                        ? 'shortner-copy-button shortner-copy-button-clicked'
                        : 'shortner-copy-button'
                }
                onClick={() => copyToClipboard()}
            >
                {clicked ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};

export default ShortLink;
