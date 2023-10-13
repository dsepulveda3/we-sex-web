import Head from 'next/head';
import Layout from '../components/general/Layout'
import Axios from '../config/axios';
import SurveysHorizontal from '../components/surveys/surveysHorizontal'
import DebatesHorizontal from '../components/debates/DebatesHorizontal'
import ArticlesHorizontal from '../components/articles/ArticlesHorizontal'

export default function Home({ surveys, articles, discussions }) {
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
        <SurveysHorizontal surveys={surveys} />
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
  const surveys = [
    {
        "title": "Estando soltero/a, tendrías un polvito con tu ex?",
        "createdAt": "2022-10-30T03:00:00.000Z",
        "user": "62a0c39f1cf6cd5fd081a682",
        "category": {
            "_id": "6149ff12bd33944b3264f453",
            "name": "fantasies",
            "order": 3
        },
        "image": "https://wesex-data.s3-sa-east-1.amazonaws.com/articledata/images/fantasias.jpg",
        "subtitle": "Relato erótico por la Dra Bárbara García"
    },
    {
        "_id": "635d3610cb774808619fe684",
        "likes": 30,
        "comments": 6,
        "title": "Le das importancia al cuerpo",
        "image": "https://wesex-data.s3-sa-east-1.amazonaws.com/articledata/images/respuesta-sexual-labios (2).jpg",
        "category": {
            "_id": "5ffd919195fd260210539e79",
            "name": "human-sexual-response",
            "order": 6
        },
        "createdAt": "2022-10-28T03:00:00.000Z",
        "user": "606aa3b98fa9ba6f7ff7d173"
    },
    {
        "_id": "63585e72cb774808618d29cf",
        "likes": 26,
        "comments": 1,
        "title": "¿Estarías dispuesto/a a probar un juego de roles en la intimidad?",
        "subtitle": "La salud oral también es parte de nuestra salud sexual",
        "image": "https://wesex-data.s3-sa-east-1.amazonaws.com/articledata/images/anticonceptivos.jpg",
        "category": {
            "_id": "5ffd919795fd260210539e7b",
            "name": "contraception",
            "order": 8
        },
        "createdAt": "2022-10-23T03:00:00.000Z",
        "user": "62a0c39f1cf6cd5fd081a682"
    },
    {
        "_id": "635057d8cb774808616f35b3",
        "likes": 55,
        "comments": 7,
        "title": "¿Te sientes cómodo/a explorando nuevas posiciones sexuales?",
        "createdAt": "2022-10-16T03:00:00.000Z",
        "user": "62a0c39f1cf6cd5fd081a682",
        "image": "https://wesex-data.s3-sa-east-1.amazonaws.com/articledata/images/respuesta-sexual-labios (1).jpg",
        "category": {
            "_id": "5ffd919195fd260210539e79",
            "name": "human-sexual-response",
            "order": 6
        },
        "subtitle": "El mejor momento de la relación sexual"
    },
    {
        "_id": "6347022dcb7748086147075e",
        "likes": 131,
        "comments": 7,
        "createdAt": "2022-10-12T03:00:00.000Z",
        "user": "62a0c39f1cf6cd5fd081a682",
        "category": {
            "_id": "5ffd919a95fd260210539e7c",
            "name": "techniques",
            "order": 1
        },
        "image": "https://wesex-data.s3-sa-east-1.amazonaws.com/articledata/images/tecnicas (1).jpg",
        "title": "¿Has tenido sexo en un lugar público?",
        "subtitle": "¿Cómo guiar a quien nos realiza un cunny?"
    }
  ];
  const articles = articleResponse.data;
  const discussions = discussionsResponse.data;

  return {
    props: {
      surveys,
      articles,
      discussions,
    },
  }
}
