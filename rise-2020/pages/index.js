import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header/>
      <section className={utilStyles.headingMd}>
        <h1>Home</h1>
        <p>
        This is a website created for members of RISE 2020 for the purpose of keeping up to date with recent and upcoming events.
        This website is to be used solely for our volunteer group and its interests.
        You can connect with us by clicking {' '}
          <a href="https://www.facebook.com/groups/RISE2020WI/">here.</a>
        </p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
 // const data =

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
   // props: ...
  }
}