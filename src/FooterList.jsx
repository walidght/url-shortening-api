const FooterList = ({ title, links }) => {
    return (
        <div className="footer-list">
            <h2>{title}</h2>
            {links.map((el) => (
                <a href={el.link}>{el.title}</a>
            ))}
        </div>
    );
};

export default FooterList;
