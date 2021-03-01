import RaffleCard from '../components/RaffleCard/RaffleCard';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Description from '../components/Description/Description';

export async function getStaticProps() {
  const data = await fetch(process.env.DATA_JSON_LOCATION);
  console.log(data);
  const dataToJSON = await data.json();
  console.log(dataToJSON);
  const raffles = dataToJSON.products;

  return {
    props: {
      raffles,
    },
    revalidate: 30,
  };
}

const Raffles = ({ raffles }) => {
  const [today, setToday] = useState(Date.now());

  useEffect(() => {
    setInterval(() => {
      setToday(Date.now());
    }, 300000);
  });

  return (
    <>
      <Container as="header" className="margin-top">
        <Description />
      </Container>
      <Container as="main" fluid className="margin-top margin-bottom">
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
