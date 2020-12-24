import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import FormModal from '../FormModal/FormModal';

const FormButton = ({ raffle }) => {
  const [today, setToday] = useState(Date.now());
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setToday(Date.now());
    }, 1000);
  });

  const formButtonClick = () => {
    setShowFormModal(true);
    console.log(showFormModal);
  };

  const finishDate = new Date(raffle.finish_date);
  const startDate = new Date(raffle.start_date);

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
        <Button variant="dark" className="rounded-0" onClick={formButtonClick}>
          Apuntarme
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
