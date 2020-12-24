import { Modal, Button } from 'react-bootstrap';

const FormModal = ({ showFormModal, setShowFormModal, raffle }) => {
  const handleClose = () => setShowFormModal(false);

  return (
    <>
      <Modal size="lg" show={showFormModal} onHide={handleClose} className="h-90vh">
        <Modal.Header closeButton>
          <Modal.Title>{`${raffle.name} - ${raffle.id}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="h-90vh">
          <iframe
            className="w-100 h-100 border-0"
            id={`smIframe-${raffle.formID}`}
            src={`https://app3.salesmanago.pl/ms/sid/khalyc1vfryy33u1/${raffle.formID}.htm`}
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;
