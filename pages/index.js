import { data } from '../lib/data';
import RaffleCard from '../components/RaffleCard/RaffleCard';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Raffles = () => {
  const [raffles, setRaffles] = useState(data);

  const [today, setToday] = useState(Date.now());

  useEffect(() => {
    setInterval(() => {
      setToday(Date.now());
    }, 300000);
  });

  return (
    <>
      <Container fluid className="margin-top margin-bottom">
        <Row>
          {raffles.map((raffle) => {
            const startDate = new Date(raffle.start_date);

            return (
              <Col xs={6} lg={4} key={raffle.id} className={startDate > today ? 'hide' : ''}>
                <RaffleCard raffle={raffle} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Raffles;

Raffles.Layout = DefaultLayout;
