import './Statistics.css';
import StatCard from './StatCard';
import { ReactComponent as BrandRecognitionIcon } from './images/icon-brand-recognition.svg';
import { ReactComponent as DetailedRecords } from './images/icon-detailed-records.svg';
import { ReactComponent as FullyCustomizable } from './images/icon-fully-customizable.svg';

const Statistics = () => {
    return (
        <div className="statistics">
            <h2 className="statistics-title">Advanced Statistics</h2>
            <p className="statistics-paragraph">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
            </p>
            <div className="statistics-cards">
                <div className="statistics-strip" />
                <StatCard
                    Icon={BrandRecognitionIcon}
                    title="Brand Recognition"
                    paragraph="Boost your brand recognition with each click. Generic links
                    don’t mean a thing. Branded links help instil confidence in your
                    content."
                    align="flex-start"
                />
                <StatCard
                    Icon={DetailedRecords}
                    title="Detailed Records"
                    paragraph="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions"
                    align="center"
                />
                <StatCard
                    Icon={FullyCustomizable}
                    title="Fully Customizable"
                    paragraph="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                    align="flex-end"
                />
            </div>
        </div>
    );
};

export default Statistics;
