const BtnOutLine = ({ title, color, type, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            style={{
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: ".5rem",
                paddingBottom: ".5rem",
                border: "none",
                backgroundColor: color,
                borderRadius:".2rem"
            }}
        >
            {title}
        </button>
    );
};

export default BtnOutLine;