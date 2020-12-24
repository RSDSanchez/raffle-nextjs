import Topmenu from '../components/Topmenu/Topmenu';
import Footer from '../components/Footer/Footer';

export default function Defaultlayout({ children }) {
  return (
    <>
      <Topmenu />

      {children}

      <Footer />
    </>
  );
}
