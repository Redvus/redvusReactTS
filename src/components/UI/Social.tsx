
const Social = ({ className = '' }) => {
    return (
        <div className={`social ${className}`}>
            {/* <a href="https://github.com/Redvus" target='_blank'>
                <i className="fab fa-github"></i>
            </a> */}
            <a href="mailto:info@redvus.ru">
                <i className="fas fa-envelope-open"></i>
            </a>
            <a href="https://vk.com/redvus" target='_blank'>
                <i className="fab fa-vk"></i>
            </a>
            <a href="https://max.ru/u/f9LHodD0cOLqhh_j4elONEk_-jE0-9bIm-RGijd94m1h5e5Hlb16aAP57Kg" target='_blank'>
                <i className="fab fa-telegram"></i>
            </a>
        </div>
    );
};

export default Social;