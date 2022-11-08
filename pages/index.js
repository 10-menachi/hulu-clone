import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) {
  return (
    <div className=''>
      <Head>
        <title>Hulu Clone</title>
        <meta name="Hulu Clone" content="Hulu Clone by React JS" />
      </Head>

      {/* header */}

      <Header />

      {/* header */}

      {/* nav */}

      <Nav />

      {/* nav */}

      {/* result */}
      <Results requests={results} />
      {/* result */}
    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3/${
    requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json())

  return {
    props: {
      results: request.results
    }
  }

}