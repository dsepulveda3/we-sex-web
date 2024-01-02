// import Head from 'next/head';
// import Layout from '../components/general/Layout'
// import Axios from '../config/axios';
// import SurveysHorizontal from '../components/surveys/surveysHorizontal'
// import DebatesHorizontal from '../components/debates/DebatesHorizontal'
// import ArticlesHorizontal from '../components/articles/ArticlesHorizontal'
// import Suscribe from '../components/general/Suscribe';

// export default function Home({ articles, discussions }) {
//   return (
//     <>
//       <Head>
//         <title>
//           {'Inicio | WeSex - La app para hablar y aprender de sexo'}
//         </title>
//         <meta name='description' content='Página de inicio de WeSex' />
//         <meta name='keywords' content='wesex,www.we.sex,we.sex' />
//       </Head>
//       <main>
//       <Layout type={'nothidden'}>
//         <div style={{paddingBottom: '5rem'}}>
//         <SurveysHorizontal />
//         <ArticlesHorizontal articles={articles} />
//         <DebatesHorizontal discussions={discussions} />
//         <Suscribe />
//         </div>
//       </Layout>
//       </main>
//     </>
//   );
// }

// export const getServerSideProps = async () => {
//   const articleResponse = await Axios.get('/articles/public-randomized')
//   const discussionsResponse = await Axios.get('/discussions/public-randomized');
//   const articles = articleResponse.data;
//   const discussions = discussionsResponse.data;

//   return {
//     props: {
//       articles,
//       discussions,
//     },
//   }
// }

import NotificationButton from "../components/webPush";
import InstallButton from "../components/pwaInstallButton";
import { get_web_push_data } from "../requests/premiumService";
import { useEffect, useState } from "react";


const DesafioRoad = ({ coupleData, index }) => {
    const [isPwa, setIsPwa] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsPwa(true);
        }
    }, []);

    return(
        <>
            {isVisible && <NotificationButton coupleData={coupleData} setShowPopup={setIsVisible} />}
            {!isPwa? <InstallButton /> : null}
        </>
    )
};

export default DesafioRoad;

export const getServerSideProps = async (context) => {
    const coupleName = 'all';
    const response = await get_web_push_data(coupleName);
    return {
        props: {
            coupleData: response.data,
        }
    }
}