import React from 'react';
import styled from '@emotion/styled'
import { Navbar, NavbarBrand } from 'reactstrap';


const NavBarWS = () => {
    return (
        <Navbar
            color="light"
            light
        >
            <NavbarBrand target="_blank" href="https://we.sex" style={{margin: "0 auto"}}>
            <img
                alt="Logo WeSex"
                src="/img/wesex-violet.svg"
                style={{
                    height: 50,
                    // width: 60
                }}
            />
            {/* Reactstrap */}
            </NavbarBrand>
        </Navbar>
    );
}
 
export default NavBarWS;