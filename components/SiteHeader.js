import classes from '../styles/components/SiteHeader.module.scss'
import Link from 'next/link'

export default function SiteHeader() {
    return (
        <header className={classes.header}>
            <Link href={'/'}>
                <a>
                    <img src="/img/logo/logo.svg" alt=""/>
                </a>
            </Link>

            <button className={classes.accountButton}>
                <img src="/icons/user-thin.svg" alt="Profile"/>
            </button>
        </header>
    )
}
