import '../styles/SectionTitle.css';

const SectionTitle = ({ text }) => {
    return (
        <h2>
            {text} <span className="highlightBox"></span>
        </h2>
    );
};

export default SectionTitle;
