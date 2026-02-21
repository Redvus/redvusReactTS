
const Social = ({ className = '' }) => {
    return (
        <div className={`social ${className}`}>
            <a href="https://www.artstation.com/redvus" target='_blank'>
                <i className="fab fa-artstation"></i>
            </a>
            <a href="https://vk.com/redvus" target='_blank'>
                <i className="fab fa-vk"></i>
            </a>
            <a href="mailto:info@redvus.ru">
                <i className="fas fa-envelope-open"></i>
            </a>
        </div>
    );
};

export default Social;