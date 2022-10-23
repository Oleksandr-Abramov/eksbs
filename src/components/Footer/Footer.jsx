import { Form } from 'components/Form/Form';
import s from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <address className={s.addressContainer}>
          <a className={s.adressLink} href="tel:+380674076156">
            +38(067)407-61-56
          </a>
          <a className={s.adressLink} href="mailto:solianyk.petr@gmail.com">
            solianyk.petr@gmail.com
          </a>
          <a
            href="https://goo.gl/maps/XiCA1go1gFuSMis39"
            className={s.adressLink}
          >
            м. Київ, вул. Княжий Затон, 21, оф. 7
          </a>
          <a
            href="https://www.facebook.com/eksbs"
            target="_blank"
            rel="noopener noreferrer"
            className={s.linkFacebook}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 320 512"
              className={s.iconFacebook}
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
            facebook
          </a>
        </address>
        <div className={s.formContainer}>
          {/* <p className={s.formTitle}>
            Зацікавились? Зв'яжіться з нами, ми обов'язково вам зателефонуємо.
          </p> */}
          <Form />
        </div>
      </div>
    </footer>
  );
};
