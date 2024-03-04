import React, {useState} from 'react';
import Link from 'next/link'
import styled from '@emotion/styled';
import {Container,Row,Col } from 'reactstrap';
import Layout from '../components/general/Layout';
import Head from 'next/head';
import Image from 'next/image';
import HeadInfo from '../components/general/HeadInfo';
import Header from '../components/general/Header';
import Footer from '../components/general/Footer';
import Categories from '../components/articles/Categories';
import DiscussionClosed from '../components/debates/DiscussionClosed';
import Comment from '../components/general/Comment';
import WriteComment from '../components/general/WriteComment';
import { articles, articlesCategories, comments } from '../data';
import { downloadAppAlert } from '../helpers';



const ArticleTitle = styled.div`
    margin-top:.1rem;
    padding: 1rem;
    background-color: var(--violet);
    text-align:center;
    a {
        display: inline-block;
        background-color: var(--green);
        width: fit-content;
        border-radius: 2rem;
        padding: .3rem 2rem;
        margin: .5rem auto;
        transition: all .5s ease;
        margin-left:.8rem;
        font-size: 2rem;
    }
    a:hover {
        padding: .3rem 2.5rem;
    }
    @media(max-width: 540px){
        /* padding: .5rem; */
        a {
            margin-left: 0;
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

const CommentsTitleP = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    color: var(--violet);
    margin-top:2rem!important;
`;


const Debate = styled(Col)`
    margin-bottom: 3rem;
    color:var(--violet);
    margin-top:1rem;
    img {
        max-width: 6rem;
        width: 15%;
        margin-right: 1rem; 
    }
    p { 
        margin-top: 1rem;
    }
    h1 {
        font-weight: bold;
        font-size: 2rem;
        max-width: 70rem; 
    }
    @media(min-width: 540px){
        p {
            max-width: 90%;
        }
    
    }
    @media(min-width: 991px){
        .d-title {
            display: flex;
            /* align-items: flex-start; */
            align-items: center;
        }
    }
    @media(max-width: 540px){
        margin-top:0;
        img {
            margin: 0!important;
            width: 25%;
        }
        h1 {
            font-size: 1.7rem;
            font-weight: bold;
        }
        p { 
            /* font-size: 1rem; */
        }
    }
`;

const DiscussionTitle = styled.div`
    h1 {
        font-size: 4rem!important;
    }
`;

const DiscussionDetail = () => {
    return (
        <>
            <Head>
                <title>{"DebateEj | WeSex - La app para hablar y aprender de sexo"}</title>
                <meta name="description" content={""} />
                <meta name="keywords" content={""} />
            </Head>
            <Layout>
                
                <ArticleTitle>
                    <span className="hide-mobile">Debate de la categoría</span> 
                    <Link legacyBehavior href="/debates?categoria=habitos-sexuales">
                        <a>Hábitos sexuales</a>
                    </Link>
                </ArticleTitle>
                <Container className="py-4">
                    <Row>
                        <Debate lg={8}>
                            <DiscussionTitle className="d-title">
                                <img className="hide-desktop" src="/img/icons/quote.svg" alt="Quote symbol" />
                                <h1>Este es un debate de ejemplo que estaria bueno visualizar</h1>
                            </DiscussionTitle>
                            <p>Esta es la segunda parte, que seria mas descriptiva del debate, aunque puede ser opcional pero por lo general la gente escribe algo.</p>                
                            <Published>
                                Publicado el 15 de septiembre por 
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
                                <button>
                                    <img src="/img/icons/share.svg" alt="Likes" />
                                </button>
                                <button
                                    onClick={() => downloadAppAlert()}
                                >
                                    <img src="/img/icons/bookmark-outlined.svg" alt="Likes" />
                                </button>
                            </Links>
                            <p className="green-line w-30 ldes-cmob"></p>
                            {comments?.length > 0 ? (
                                <>
                                    <CommentsTitleP>Opina la comunidad:</CommentsTitleP>
                                    {
                                        comments.map(comment => (
                                            <Comment comment={comment} key={comment.id} />
                                        ))
                                    }
                                </>
                            ) : (
                                <>
                                    <CommentsTitleP>Todavía no hay comentarios en este artículo, ¡descarga la App para comentar!</CommentsTitleP>
                                </>
                            )}
                            <WriteComment />
                        </Debate>


                        <Col lg={4}>
                            <h5 className="mb-4" style={{color: "black", fontWeight: "bold"}}>Debates tendencia</h5>
                            <DiscussionClosed />
                            <DiscussionClosed />
                            <DiscussionClosed />
                            <DiscussionClosed />

                        </Col>
                    </Row>
                </Container>
       
            </Layout>
        </>
    );
}
 
export default DiscussionDetail;