import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import Image from 'next/image';
import DiscussionsWithTabs from './DiscussionsWithTabs';
import { useRouter } from 'next/router';
import {
  discussionCategoriesTitle,
  discussionsCategories as images,
} from '../../data.js';
import clienteAxios from '../../config/axios';

const CategoryButton = styled.button`
  background-color: transparent;
  border: none;
  transition: all 0.5s ease;
  max-width: 33%;
  @media (min-width: 540px) {
    /* width: 6.5rem; */
    max-width: 10rem;
  }
  @media (max-width: 540px) {
    margin-bottom: 0.5rem;
  }
  &:hover {
    img {
      transform: rotate(360deg) !important;
    }
  }
  img {
    background-color: var(--green);
    transition: all 0.5s ease;
    border-radius: 5rem;
    padding: 1rem !important;
    width: fit-content;
    height: fit-content;

    @media (min-width: 540px) {
      border-radius: 5rem;
      padding: 1rem !important;
      width: 8rem !important;
      height: 8rem !important;
    }
  }
  p {
    color: white;
    overflow-wrap: break-word;
    text-align: center;
    font-size: 1.6rem;
    /* @media(max-width: 540px){ */
    /* font-size:1.6rem; */
    /* } */
  }
`;

const Title = styled.h3`
  cursor: pointer;
  color: var(--violet);
  background-color: white;
  width: fit-content;
  margin: 0;
  padding: 1rem;
  font-weight: bold;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  font-size: 3.5rem;
  @media (max-width: 540px) {
    margin: 2rem auto 0;
    /* border-top: solid var(--violet) 5px; */
    padding: 1rem 2rem;
  }
`;

const DebatesHome = () => {
  const [discussionCategories, setDiscussionCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getDiscussionCategories();
  }, []);

  async function getDiscussionCategories() {
    await clienteAxios
      .get('/discussions/public-categories')
      .then((response) => {
        setDiscussionCategories(response.data);
      });
  }

  return (
    <>
      <div className='bg-violet mt-1 pb-5'>
        <Container>
          <Title onClick={() => router.push('/debates')}>Debates</Title>

          <Row className='mt-4'>
            <Col lg={7}>
              <h4 className='mb-3 color-green font-weight-bold text-center'>
                Hablá de sexo anónimamente y sin tabú
              </h4>
              <DiscussionsWithTabs />
            </Col>
            <Col lg={5} className='mb-5 mt-5' style={{ textAlign: 'center' }}>
              {/* <p className="mb-4">Categorias</p> */}

              {discussionCategories?.map((category) => (
                <CategoryButton
                  onClick={() =>
                    router.push(
                      `/debates?categoria=${discussionCategoriesTitle[
                        category.name
                      ]
                        .toLowerCase()
                        .replace(' ', '-')}`
                    )
                  }
                  key={category.order}
                >
                  <Image
                    src={`/img/discussions/${images[category.order - 1].img}`}
                    alt={category.name}
                    width='100%'
                    height='100%'
                  />
                  <p>{discussionCategoriesTitle[category.name]}</p>
                </CategoryButton>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DebatesHome;
