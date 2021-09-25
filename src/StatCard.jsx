import './StatCard.css';

const StatCard = ({ Icon, align, title, paragraph }) => {
    return (
        <div className="card" style={{ alignSelf: align }}>
            <div className="card-icon">
                <Icon />
            </div>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    );
};

export default StatCard;
