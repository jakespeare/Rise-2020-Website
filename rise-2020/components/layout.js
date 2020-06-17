import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = 'RISE 2020 Wisconsin'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/rise-icon.ico" />
                <meta
                    name="description"
                    content="RISE 2020 Wisconsin"
                />

                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/rise-2020-logo.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={siteTitle}
                        />
                        <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
                    </>
                ) : (
                        <>
                            <Link href="https://www.facebook.com/groups/RISE2020WI/">
                                <a>
                                    <img
                                        src="/images/rise-2020-logo.jpg"
                                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                        alt={siteTitle}
                                    />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{siteTitle}</a>
                                </Link>
                            </h2>
                        </>
                    )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to main site</a>
                    </Link>
                </div>
            )}
        </div>
    )
}