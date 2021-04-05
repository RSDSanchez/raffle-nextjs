import { Modal, Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { isStore } from '../../atoms/langRecoil';

const FormModal = ({ showFormModal, setShowFormModal, raffle }) => {
  const handleClose = () => setShowFormModal(false);
  const [store, setStore] = useRecoilState(isStore);

  return (
    <>
      <Modal size="lg" show={showFormModal} onHide={handleClose} className="h-90vh">
        <Modal.Header closeButton>
          <Modal.Title>{`${raffle.name} - ${raffle.id}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="h-90vh">
          <iframe
            className="w-100 h-100 border-0"
            id={store ? `smIframe-${raffle.store_formID}` : `smIframe-${raffle.formID}`}
            src={
              store
                ? `https://app3.salesmanago.pl/ms/sid/khalyc1vfryy33u1/${raffle.store_formID}.htm`
                : `https://app3.salesmanago.pl/ms/sid/khalyc1vfryy33u1/${raffle.formID}.htm`
            }
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
