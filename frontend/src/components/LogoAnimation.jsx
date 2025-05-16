export const LogoAnimation = ({ props }) => {
    if (!props || !props.section1 || props.section1.length === 0) {
        return <p>No logos available</p>; // Fallback for empty or undefined data
    }

    // Duplicate the content for seamless animation
    const duplicatedLogos = [...props.section1, ...props.section1];

    return (
        <div className="logo-animation-wrapper">
            <ul className="logo-container">
                {duplicatedLogos.map((curElm, index) => (
                    <li key={`${curElm.id}-${index}`} className="img-logo-li">
                        <img src={curElm.img_url} className="img-logos" alt={`Logo ${curElm.id}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
};