import React from 'react';
import Link from 'next/link';
import {Row,Col,Container} from 'reactstrap';
import styled from '@emotion/styled';

const MobileNavigation = () => {
    const Fondo = styled.div`
        position: fixed;
        height: 7rem;
        width: 100%;
        bottom:0;
        background-color: var(--lightGrey);
        a {
            color: var(--darkGrey);
            text-align:center;
            margin: auto;
            padding-top: .2rem!important;
            padding-bottom: .2rem!important;
            max-width: 2rem!important;
        }
        img {
            max-height:1.8rem;
            width:100%;
        }
    `;
    return (
        <Fondo className="hide-desktop">
            <Container>
                <Row className="pb-1 pt-1">
                    <Col xs={3} sm={3}>
                        <Link href="/">
                            <a>
                                <img src="/img/bottom-bar-navigator/home.svg"  />
                                Inicio
                            </a>
                        </Link>
                    </Col>
                    <Col xs={3} sm={3}>
                        <Link href="/debates">
                            <a>
                                <img src="/img/bottom-bar-navigator/discussions.svg"  />
                                Debates
                            </a>
                        </Link>
                    </Col>
                    <Col xs={3} sm={3}>
                        <Link href="/articulos">
                            <a>
                                <img src="/img/bottom-bar-navigator/menu.svg"  />
                                Artículos
                            </a>
                        </Link>
                    </Col>
                    <Col xs={3} sm={3}>
                        <Link href="/buscar?autofocus=true">
                            <a>
                                <img src="/img/bottom-bar-navigator/search.svg"  />
                                Buscar
                            </a>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Fondo>
    );
}
 
export default MobileNavigation;