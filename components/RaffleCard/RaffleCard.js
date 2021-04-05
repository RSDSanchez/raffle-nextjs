import { useRecoilState } from 'recoil';
import { langState, isStore } from '../../atoms/langRecoil';
import styles from './RaffleCard.module.css';
import Link from 'next/link';

const today = Date.now();

const RaffleCard = ({ raffle }) => {
  const [userLang, setUserLang] = useRecoilState(langState);
  const [store, setStore] = useRecoilState(isStore);

  const finishDate = store ? new Date(raffle.finish_store_date) : new Date(raffle.finish_date);

  return (
    <div>
      <div className={styles.image_container}>
        <Link href={store ? `stores/${raffle.id}` : raffle.id}>
          <a>
            <img
              src={`https://4elementos.es/raffles/products/${raffle.id}/${raffle.pic_left}`}
              className={styles.image}
            />
          </a>
        </Link>
      </div>

      <div className={styles.info_container}>
        <Link href={store ? `stores/${raffle.id}` : raffle.id}>
          <a>
            <h2 className={styles.title}>
              {raffle.name} - {raffle.id}{' '}
            </h2>
          </a>
        </Link>

        {today < finishDate ? (
          <p className={styles.release}>
            {userLang === 'es' ? 'Lanzamiento' : 'Release Date:'} {finishDate.toLocaleDateString()}
          </p>
        ) : (
          <p className={styles.release}>
            {userLang === 'es' ? 'Raffle Terminado' : 'Raffle Finished'}
          </p>
        )}
      </div>
    </div>
  );
};

export default RaffleCard;
