import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import FormModal from '../FormModal/FormModal';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useRecoilState } from 'recoil';
import { langState, isStore } from '../../atoms/langRecoil';

const FormButton = ({ raffle }) => {
  const [today, setToday] = useState(Date.now());
  const [showFormModal, setShowFormModal] = useState(false);
  const [token, setToken] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [userLang, setUserLang] = useRecoilState(langState);
  const [store, setStore] = useRecoilState(isStore);

  useEffect(() => {
    setInterval(() => {
      setToday(Date.now());
    }, 1000);
  });

  useEffect(() => {
    const result = executeRecaptcha('form');
    setToken(result);
  }, []);

  const formButtonClick = async () => {
    if (!executeRecaptcha) {
      return;
    }

    if (token) {
      setShowFormModal(true);
    }
  };

  const finishDate = store ? new Date(raffle.finish_store_date) : new Date(raffle.finish_date);
  const startDate = store ? new Date(raffle.start_store_date) : new Date(raffle.start_date);

  if (startDate < today && today < finishDate) {
    let distance = finishDate - today;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return (
      <>
        <p>
          {days}d {hours}h {minutes}m {seconds}s
        </p>
        <Button id="form" variant="dark" className="rounded-0" onClick={formButtonClick}>
          {userLang === 'es' ? 'Apuntarme' : 'Sign me up'}
        </Button>
        <FormModal
          showFormModal={showFormModal}
          setShowFormModal={setShowFormModal}
          raffle={raffle}
        />
      </>
    );
  } else if (finishDate > today) {
    let distance = startDate - today;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return (
      <p>
        {days}d {hours}h {minutes}m {seconds}s
      </p>
    );
  } else if (finishDate < today) {
    return (
      <p>
        <strong>Raffle Finished</strong>
      </p>
    );
  }
};

export default FormButton;
