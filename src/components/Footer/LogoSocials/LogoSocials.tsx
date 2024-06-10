import Logo, { LogoStyle } from 'components/Logo';

import scss from './LogoSocials.module.scss';
import { Link } from 'react-router-dom';
import { icons } from 'assets/icons';

const LogoSocials = () => {
    const socials = [
        {
            icon: 'facebook',
            href: 'https://www.facebook.com/goITclub/',
        },
        {
            icon: 'instagram',
            href: 'https://www.instagram.com/goitclub/',
        },
        {
            icon: 'youtube',
            href: 'https://www.youtube.com/c/GoIT',
        },
    ];

    return (
        <div className={scss.logoSocialsWrapper}>
            <Logo style={LogoStyle.Footer} />

            <ul className={scss.socialsList}>
                {socials.map(({ icon, href }) => (
                    <li key={href} className={scss.socialsItem}>
                        <Link
                            to={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={scss.socialLink}
                        >
                            <svg className={scss.socialIcon}>
                                <use href={`${icons}#icon-${icon}`}></use>
                            </svg>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LogoSocials;
