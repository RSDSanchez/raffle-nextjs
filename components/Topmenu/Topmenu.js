import { Navbar, Nav } from 'react-bootstrap';
import styles from './Topmenu.module.css';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { langState } from '../../atoms/langRecoil';

const Topmenu = () => {
  const [userLang, setUserLang] = useRecoilState(langState);

  useEffect(() => {
    if (!localStorage.getItem('lang')) {
      const lang = (navigator.language || navigator.userLanguage).substr(0, 2).toLowerCase();
      localStorage.setItem('lang', lang);
      setUserLang(lang);
    } else {
      const lang = localStorage.getItem('lang');
      setUserLang(lang);
    }
  }, []);

  const clickEsFlag = () => {
    setUserLang('es');
    localStorage.setItem('lang', 'es');
  };

  const clickEnFlag = () => {
    setUserLang('en');
    localStorage.setItem('lang', 'en');
  };

  return (
    <>
      <Navbar className={styles.shadow} expand="lg" bg="white">
        <Navbar.Brand className={styles.center} href="https://4elementos.es/">
          <img className={styles.logo4e} src="images/4elementos-logo.jpg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" className={styles.center}>
            <Nav.Link className={styles.link} href="/">
              Home
            </Nav.Link>
            <Nav.Link className={styles.link} href="https://4elementos.es/es/novedades">
              {userLang === 'es' ? 'Novedades' : 'New In'}
            </Nav.Link>
            <Nav.Link className={styles.link} href="https://4elementos.es/es/7-calzado">
              {userLang === 'es' ? 'Calzado' : 'Footwear'}
            </Nav.Link>
            <Nav.Link className={styles.link} href="https://4elementos.es/es/12-ropa">
              {userLang === 'es' ? 'Ropa' : 'Clothing'}
            </Nav.Link>
            <Nav.Link className={styles.link} href="https://4elementos.es/es/4-complementos">
              {userLang === 'es' ? 'Complementos' : 'Accesories'}
            </Nav.Link>
            <Nav.Link className={styles.link} href="https://4elementos.es/es/3-lanzamientos">
              {userLang === 'es' ? 'Lanzamientos' : 'Releases'}
            </Nav.Link>
            <Nav.Link className={styles.link} href="https://4elementos.es/raffles">
              Raffles
            </Nav.Link>
            <Nav.Link className={styles.link} href="https://preprod.4elementos.es/es/ofertas">
              Promo
            </Nav.Link>
          </Nav>
          <div>
            <a href="#" onClick={clickEsFlag}>
              <img className={styles.flag} src="images/es.jpg" />
            </a>
            <a href="#" onClick={clickEnFlag}>
              <img className={styles.flag} src="images/en.jpg" />
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Topmenu;
