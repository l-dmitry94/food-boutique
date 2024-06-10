import Container from 'components/Container';
import LogoSocials from './LogoSocials';
import FooterInfo from './FooterInfo';
import FooterForm from './FooterForm';
import FooterCopy from './FooterCopy';

import scss from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={scss.footer}>
            <Container>
                <div className={scss.footerWrapper}>
                    <LogoSocials />

                    <div className={scss.infoFormWrapper}>
                        <FooterInfo />
                        <FooterForm />
                    </div>
                </div>

                <FooterCopy />
            </Container>
        </footer>
    );
};

export default Footer;
