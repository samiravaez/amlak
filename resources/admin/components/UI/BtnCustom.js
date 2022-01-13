const BtnCustom = ({ title, color, type }) => {
    return (
        <button
        type="submit"
            style={{
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: ".5rem",
                paddingBottom: ".5rem",
                border: "none",
                backgroundColor: color,
                borderRadius:".2rem",
                color: "#FFF"
            }}
        >
            {title}
        </button>
    );
};

export default BtnCustom;
