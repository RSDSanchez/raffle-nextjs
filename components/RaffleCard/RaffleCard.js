import { useRecoilState } from 'recoil';
import { langState } from '../../atoms/langRecoil';
import styles from './RaffleCard.module.css';
import Link from 'next/link';

const today = Date.now();

const RaffleCard = ({ raffle }) => {
  const [userLang, setUserLang] = useRecoilState(langState);

  const finishDate = new Date(raffle.finish_date);

  return (
    <div>
      <div className={styles.image_container}>
        <Link href={raffle.id}>
          <a>
            <img src={`images/products/${raffle.id}/${raffle.pic_left}`} className={styles.image} />
          </a>
        </Link>
      </div>

      <div className={styles.info_container}>
        <Link href={raffle.id}>
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
