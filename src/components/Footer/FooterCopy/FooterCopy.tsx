import scss from './FooterCopy.module.scss';

const FooterCopy = () => {
    return (
        <div className={scss.copy}>
            <p className={scss.copyText}>Food Boutique. All rights reserved.</p>

            <ul className={scss.copyList}>
                <li className={scss.copyItem}>Privacy Policy</li>
                <li className={scss.copyItem}>Terms of Service</li>
            </ul>
        </div>
    );
};

export default FooterCopy;
