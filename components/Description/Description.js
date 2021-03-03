import { useEffect, useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { langState } from '../../atoms/langRecoil';

const Description = () => {
  const [width, setWidth] = useState();
  const [userLang, setUserLang] = useRecoilState(langState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }
  });

  return (
    <Accordion defaultActiveKey="0" className={width > 798 ? 'collapse show' : 'collapse'}>
      <Card className="text-center">
        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
          <h1 className="raffle_title">Raffles</h1>
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p className="raffle_desc">
              {userLang === 'es'
                ? `No te pierdas los últimos raffles de los productos más exclusivos! En este apartado encontrarás la selección de los artículos más limitados, las colaboraciones más locas y los últimos lanzamientos. Descubre todos los productos de raffle más novedosos, como las Nike Dunk o las Jordan 1 más codiciadas del momento. Apúntate antes que nadie para hacerte con los artículos más limitados de las mejores marcas de streetwear.`
                : `Don't miss the latest raffles of the most exclusive products! In this section you will find the selection of the most limited items, the craziest collaborations and the latest releases. Check out all the latest raffle products, such as the Nike Dunk or the most coveted Jordan 1 of the moment. Sign up before anyone else to get your hands on the most limited items from the best streetwear brands.`}
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Description;
