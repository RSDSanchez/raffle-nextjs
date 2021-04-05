import Head from 'next/head';
import DefaultLayout from '../../layouts/DefaultLayout';
import { useRecoilState } from 'recoil';
import { langState } from '../../atoms/langRecoil';
import { useRouter } from 'next/router';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FormButton from '../../components/FormButton/FormButton';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export async function getStaticProps() {
  const data = await fetch(process.env.DATA_JSON_LOCATION);
  const dataToJSON = await data.json();
  const raffles = dataToJSON.products;

  return {
    props: {
      raffles,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const data = await fetch(process.env.DATA_JSON_LOCATION);
  const dataToJSON = await data.json();
  const raffles = dataToJSON.products;

  const paths = raffles.map((raffle) => `/stores/${raffle.id}`);

  return { paths, fallback: true };
}

const Raffle = ({ raffles }) => {
  const [userLang, setUserLang] = useRecoilState(langState);
  const [description, setDescription] = useState([]);
  const router = useRouter();
  const zapa = router.query.id;

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  const raffleFiltered = raffles.filter((item) => item.id === zapa);
  const raffle = raffleFiltered[0];

  useEffect(() => {
    if (userLang === 'es') {
      setDescription(raffle.description_es);
    } else if (userLang === 'en') {
      if (!raffle.description_en) {
        setDescription(raffle.description_es);
      } else {
        setDescription(raffle.description_en);
      }
    } else {
      setDescription(raffle.description_es);
    }
  });

  return (
    <>
      <Head>
        <title>
          Raffles {raffle.name} {raffle.id}
        </title>
        <meta name="description" content={`${raffle.description_es[0]}`} />
      </Head>
      <Container fluid className="margin-top margin-bottom">
        <Row>
          <Col>
            <Link href="/stores">
              <a className="link p-4">&lt;&lt; Volver</a>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="img-fluid"
              src={`https://4elementos.es/raffles/products/${raffle.id}/${raffle.pic_main}`}
            />
          </Col>
        </Row>
        <Row className="raffle_info">
          <Col>
            <h1 className="raffle_title">{raffle.name}</h1>
            <p className="raffle_id">{raffle.id}</p>
            {description.map((desc) => {
              return (
                <p className="raffle.desc" key={description.indexOf(desc)}>
                  {desc}
                </p>
              );
            })}
            <br />
            <FormButton raffle={raffle} />
          </Col>
        </Row>
        <Row className="margin-top">
          <Col md={6}>
            <img
              className="img-fluid"
              src={`https://4elementos.es/raffles/products/${raffle.id}/${raffle.pic_left}`}
            />
          </Col>
          <Col md={6}>
            <img
              className="img-fluid"
              src={`https://4elementos.es/raffles/products/${raffle.id}/${raffle.pic_right}`}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Raffle;

Raffle.Layout = DefaultLayout;
