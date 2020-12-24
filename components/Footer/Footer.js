import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container className="footer" fluid>
        <Row>
          <Col className="social">
            <ul className="icons">
              <li>
                <a target="_blank" href="https://www.instagram.com/4elementosofficial/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/4elementosofficial/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/4elementosofficial/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="legal">
            <small>
              &copy; 2019 - TDR 4ELEMENTOS SL - <a href="#">Política de Raffles</a> |{' '}
              <a href="#">Política de Privacidad</a> | <a href="#">Aviso Legal</a>
            </small>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
