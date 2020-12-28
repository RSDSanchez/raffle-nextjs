import { useEffect, useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Description = () => {
  const [width, setWidth] = useState();

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
              ¡No te pierdas los últimos <strong>raffles de los productos más exclusivos!</strong>{' '}
              En este apartado encontrarás la selección de los artículos más limitados, las
              colaboraciones más locas y los <strong>últimos lanzamientos</strong>. Descubre todos
              los productos de raffle más novedosos, como las <strong>Nike Dunk</strong> o las{' '}
              <strong>Jordan 1</strong> más codiciadas del momento. Apúntate antes que nadie para
              hacerte con los artículos más limitados de las mejores marcas de streetwear.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Description;
