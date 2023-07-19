import React, {useState,useEffect} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {Container,Row,Col } from 'reactstrap';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/general/Layout';
import Categories from '../components/articles/Categories';
import ArticleClosed from '../components/articles/ArticleClosed';
import Comment from '../components/general/Comment';
import WriteComment from '../components/general/WriteComment';
import { articles, articlesCategories, comments } from '../data';
import { downloadAppAlert } from '../helpers';
import { RWebShare } from "react-web-share";


const ArticleTitle = styled.div`
    margin-top:.1rem;
    padding: 1rem;
    background-color: var(--violet);
    text-align:center;
    h1 {
        margin-bottom: .5rem;
    }
    a {
        background-color: var(--green);
        width: fit-content;
        border-radius: 2rem;
        padding: .3rem 1.5rem;
        margin: .5rem auto;
        transition: all .5s ease;
    }
    a:hover {
        padding: .3rem 2rem;
    }
    @media(max-width: 540px){
        h1 {
            font-size: 3.5rem!important;
            margin-bottom: .5rem;
        }
        a {
            font-size: 2rem;
        }
    }
`;

const Published = styled.div`
    color: black;
    /* font-size: 1rem; */
    margin-top: 2rem;
    a {
        margin-left: .7rem;
        /* font-size: 1rem; */
        font-weight: bold;
    }
    @media(max-width: 540px){
        /* font-size: .8rem; */
        a {
            /* font-size: .8rem; */
        }
    }
`;

const Links = styled.div`
    /* font-size:1rem;  */
    margin-top: 1rem;
    margin-bottom: 1.5rem;

    /* max-width: 30rem; */
    @media(max-width: 540px){
        /* max-width: 35rem; */
    }

    button {
        background-color:transparent;
        outline: none;
        border:none;
        /* float: left; */
        width: fit-content;
        max-width: 30%;
        margin-right: .2rem!important;
        color: black;
    }
    img {
        width: 2rem!important;
        margin-right: .8rem!important;
        margin-top: -0.8rem;
    }
`;

const ArticleExample = {
    category: "Respuesta sexual",
    title: "Claves para alcanzar erecciones saludables",
    likes: 32,
    comments: 1,
    id: 111,
    subtitle: "Tips gloriosos",
}

const CommentsTitle = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    color: var(--violet);
    text-align:left;
    font-size:2rem;
    @media(max-width: 540px){
        margin-top:3rem;   
    }
`;

const ArticleText = styled(Col)`
    color: black;
    margin-bottom:3rem;
    @media(max-width: 540px){
        /* font-size:.9rem; */
    }
`;

const ArticleDetail = () => {
    const [currentUrl, setCurrentUrl] = useState();
    useEffect(() => {
        setCurrentUrl(window.location.href);
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <Head>
                <title>{"Articulo | WeSex - La app para hablar y aprender de sexo"}</title>
                <meta name="description" content={""} />
                <meta name="keywords" content={""} />
            </Head>
            <Layout>
                <ArticleTitle>
                    <h1>Consejos para usar la copa menstrual</h1>
                    <Link href={`/articulos?categoria=${"anticoncepcion-y-cuidados"}`}>
                        <a>Anticoncepción y cuidados</a>
                    </Link>
                </ArticleTitle>
                <Container className="py-4">
                    <Row>
                        <ArticleText lg={8} >
                            - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br/>
                            - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br/>
                            - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br/>
                            - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        
                        </ArticleText>
                        <Col lg={4}>
                            <Published>
                                Publicado el 15 de septiembre por<br/>
                                <Link href={`/perfil/${"asanacup"}`}>
                                    <a>@asanacup</a>
                                </Link>
                            </Published>
                            <Links>
                                <button
                                    onClick={() => downloadAppAlert()}
                                >
                                    <img src="/img/icons/heart-outline.svg" alt="Likes" />
                                    5
                                </button>
                                <button
                                    onClick={() => downloadAppAlert()}
                                >
                                    <img src="/img/icons/comments.svg" alt="Comments" />
                                    5
                                </button>
                                <RWebShare
                                    data={{
                                    text: `Mira este artículo en WeSex:\n"Titulo del articulo"\n`,
                                    url: currentUrl,
                                    title: `Titulo del articulo`
                                    }}>
                                        <button>
                                            <img src="/img/icons/share.svg" alt="Likes" />
                                        </button>
                                    </RWebShare>
                                
                                <button
                                    onClick={() => downloadAppAlert()}
                                >
                                    <img src="/img/icons/bookmark-outlined.svg" alt="Likes" />
                                </button>
                            </Links>
                            <div className="hide-mobile">
                                <h5 className="mb-3 mt-5" style={{color: "black", fontWeight: "bold"}}>Podría interesarte</h5>
                                <ArticleClosed article={ArticleExample}  />
                                <ArticleClosed article={ArticleExample}  />
                                <ArticleClosed article={ArticleExample}  />
                                <ArticleClosed article={ArticleExample}  />
                            </div>
                            
                        </Col>
                    </Row>
                    <p className="green-line w-30 ldes-cmob mb-4 mt-4"></p>
                    {comments?.length > 0 ? (
                        <>
                            <CommentsTitle>Opina la comunidad:</CommentsTitle>
                            {
                                comments.map(comment => (
                                    <Comment comment={comment} key={comment.id} />
                                ))
                            }
                        </>
                    ) : (
                        <>
                            <CommentsTitle>Todavía no hay comentarios en este artículo, ¡descarga la App para comentar!</CommentsTitle>
                        </>
                    )}
                    <WriteComment />


                </Container>

            </Layout>
        </>
    );
}
 
export default ArticleDetail;