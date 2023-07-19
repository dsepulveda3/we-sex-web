import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import styled from '@emotion/styled';

import ArticleClosed from './ArticleClosed';

const Articles = ({ articles, selectedCategory, searchString }) => {
  return (
    <main style={{ marginTop: '1rem', marginBottom: '3rem' }}>
      <Row>
        {articles.map((art) => (
          <Col
            xs={12}
            md={4}
            lg={4}
            xl={3}
            key={art._id}
            style={{ padding: '12px' }}
          >
            <ArticleClosed article={art} key={art._id} />
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default Articles;
