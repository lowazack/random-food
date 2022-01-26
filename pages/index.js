import styles from '../styles/Home.module.scss'
import SearchHero from "../components/SearchHero";
export default function Home() {

    return (
        <div className={styles.home}>
            <SearchHero />
        </div>
    )
}


