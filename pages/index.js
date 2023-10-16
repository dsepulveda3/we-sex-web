import Head from 'next/head';
import Layout from '../components/general/Layout'
import Axios from '../config/axios';
import SurveysHorizontal from '../components/surveys/surveysHorizontal'
import DebatesHorizontal from '../components/debates/DebatesHorizontal'
import ArticlesHorizontal from '../components/articles/ArticlesHorizontal'

export default function Home({ articles, discussions }) {
  return (
    <>
      <Head>
        <title>
          {'Inicio | WeSex - La app para hablar y aprender de sexo'}
        </title>
        <meta name='description' content='Página de inicio de WeSex' />
        <meta name='keywords' content='wesex,www.we.sex,we.sex' />
      </Head>
      <main>
      <Layout type={'nothidden'}>
        <div style={{paddingBottom: '5rem'}}>
        <SurveysHorizontal />
        <ArticlesHorizontal articles={articles} />
        <DebatesHorizontal discussions={discussions} />
        </div>
      </Layout>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const articleResponse = await Axios.get('/articles/public-randomized')
  const discussionsResponse = await Axios.get('/discussions/public-randomized');
  const articles = articleResponse.data;
  const discussions = discussionsResponse.data;

  return {
    props: {
      articles,
      discussions,
    },
  }
}
