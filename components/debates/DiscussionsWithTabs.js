import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import DiscussionClosed from './DiscussionClosed';
import clienteAxios from '../../config/axios';

const Grid = styled(Row)`
  border: white solid;
  border-radius: 1rem;
  padding: 1.5rem;
`;

const Category = styled(Col)`
  border-top: white solid;
  border-left: white solid;
  border-right: white solid;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  /* margin: 0 0.5rem; */
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: var(--violet);
  }
  @media (max-width: 540px) {
    margin: 0;
    /* font-size: 1rem; */
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
  }
`;

const DiscussionsWithTabs = () => {
  const [selected, setSelected] = useState('trending');
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    if (selected === 'trending') {
      getTrendingDiscussions();
    } else if (selected === 'last') {
      getRecentDiscussions();
    } else {
      getRandomDiscussions();
    }
  }, [selected]);

  async function getTrendingDiscussions() {
    await clienteAxios.get('/discussions/trending-public').then((response) => {
      setDiscussions(response.data);
    });
  }

  async function getRecentDiscussions() {
    await clienteAxios.get('/discussions/recent-public').then((response) => {
      setDiscussions(response.data);
    });
  }

  async function getRandomDiscussions() {
    await clienteAxios.get('/discussions/random').then((response) => {
      setDiscussions(response.data);
    });
  }

  return (
    <>
      <Row
        style={{ marginLeft: '1rem', marginRight: '1rem', textAlign: 'center' }}
      >
        <Category
          onClick={() => setSelected('trending')}
          xs={4}
          md={4}
          lg={4}
          className={selected === 'trending' ? 'd-selected-category' : null}
        >
          Tendencia
        </Category>
        <Category
          onClick={() => setSelected('last')}
          xs={4}
          md={4}
          lg={4}
          className={selected === 'last' ? 'd-selected-category' : null}
        >
          Últimos
        </Category>
        <Category
          onClick={() => setSelected('random')}
          xs={4}
          md={4}
          lg={4}
          className={selected === 'random' ? 'd-selected-category' : null}
        >
          Random
        </Category>
      </Row>
      <Grid>
        {discussions.length === 0 ? (
          <Col>No hay comentarios en tendencia</Col>
        ) : (
          discussions.slice(0, 4).map((d) => {
            return (
              <Col sm={6} key={d._id}>
                <DiscussionClosed discussion={d} />
              </Col>
            );
          })
        )}
      </Grid>
    </>
  );
};

export default DiscussionsWithTabs;
