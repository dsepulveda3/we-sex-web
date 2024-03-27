import React, { useState, useEffect } from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import styled from '@emotion/styled';
import { create_couple } from '../../../requests/premiumService';
import Dudas from '../dudas';
import { toast } from 'react-toastify';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useRouter } from 'next/router';  
import { geocodeAddress } from '../../../utils/geocodeAddress';
import { getPlaceSuggestions } from '../../../utils/getPlaceSuggestions';
import Dropdown from './universals/Dropdown.js';

const Background = styled.div`

    background-color: var(--violet);
    // background-image: url("/img/cta-bg.webp");
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    // min-height: 72vh;
    margin-top: .1rem;
    position: relative;
    text-align: center;
    padding-top: 8rem;
    padding-bottom: 15rem;
    padding-left: 0; /* Remove left padding */
    padding-right: 0; /* Remove right padding */
    overflow-x: hidden; /* Hide horizontal overflow */
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
        padding-top: 0rem;
    }

    @media(mix-width: 540px){
        
    }
`;

const Content = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center
`;

const ContainerInfo = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
    
    @media (max-width: 540px) {
        flex-direction: column;
        padding: 2rem;
      }
`;

const Title = styled.h1`
    font-size: 3.5rem;
    font-family: "Karla", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
    color: white;
    span {
        font-family: "Averia Libre", sans-serif;
        background-color: white; /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: var(--violet); /* Set the text color to white */
        }
    
    @media(max-width: 540px){
        font-size: 4rem;
        padding-top: 4rem;
        padding-bottom: 1rem;
    }
`;

const Text = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    color: white;
    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    @media(max-width: 540px){
        font-size: 1.8rem;
    }
    @media(min-width: 540px){
        
    }
`;
const SubTitle = styled.h2`
    margin-top: 1rem;
    margin-bottom: 4rem;
    font-size: 2.7rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
    color: white;
    span {
        // color: var(--green);
        // font-weight: bold;
        // font-family: "Averia Libre", sans-serif;
        // text-decoration: underline;
        // text-decoration-color: var(--green);
        // text-underline-offset: 1rem; /* ajusta la separación */
        // text-decoration-thickness: 0.3rem; /* ajusta el grosor */
        font-weight: bold;
    font-family: "Averia Libre", sans-serif;
    background-color: var(--green); /* Set the background color to green */
    padding: 0.5rem 1rem; /* Add padding to make the background visible */
    color: white; /* Set the text color to white */
    }
    
    @media(max-width: 540px){
        font-size: 2.2rem;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }
`;

const AppImage = styled.img`
    margin-top: 0rem;
    margin-left: 2rem;
    width: 45%;
    height: 45%;
    @media(max-width: 540px){
        margin-top: 3rem;
        margin-left: 0rem;
        margin-right: 3rem;
        width: 30%;
        height: 30%;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }

    
`;

const Botones = styled.div`
    margin-top: 5rem;
    @media(min-width: 540px){
        display: flex;
    }
`;



const Boton = styled.a`
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    border: none;
    transition: all .5s ease;
    &:hover {
        
        color: white;
        cursor: pointer;
    }
    @media(max-width: 540px){
        margin: 1rem auto;
        display:block;
        min-width: 80%;    
    }
`;

const BotonArs = styled(Boton)`
    /* Add disabled styles */
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
    color: white;
    background-color: var(--green);
    text-align: center;
    font-size: 2rem;
    
    
    @media(max-width: 540px){
        margin-top: 3rem;
        font-size: 1.5rem;
    }
    @media(min-width: 540px){
        
    }
`;


const ContentImage = styled.div`
    margin-right: -20%;
    margin-left: -15%;
    @media(max-width: 540px){
        margin-top:0!important;
    }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid white;
  ::placeholder {
    color: ${(props) => (props.hasError ? '#FF9800' : 'initial')};
  }
  margin-bottom: 2rem;
`;

const NickNameInstruction = styled.div`
    font-size: 1.3rem;
    // font-weight: bold;
    font-style: italic;
    color:  white;
    margin-bottom: 2rem;
    margin-left: 0.5rem;
    margin-top: 0.1rem;
`;

const PhonenumberLabel = styled.div`
    font-size: 1.5rem;
    // font-weight: bold;
    font-style: italic;
    color:  white;
    margin-left: 0.5rem;
    margin-top: 0.1rem;
`;

const AdressLabel = styled.div`
    font-size: 1.5rem;
    // font-weight: bold;
    font-style: italic;
    color:  white;
    margin-left: 0.5rem;
    margin-top: 0.1rem;
    margin-bottom: 0.5rem;
    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
`;

const InputPhoneNumber = styled.input`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  border: 1px solid white;
  ::placeholder {
    color: ${(props) => (props.hasError ? '#FF9800' : 'initial')};
  }
  margin-bottom: 2rem;
`;

const Suscribed = () => {
    const router = useRouter();
    const [memberOne, setMemberOne] = useState('');
    const [memberTwo, setMemberTwo] = useState('');
    const [coupleNickname, setCoupleNickname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberTwo, setPhoneNumberTwo] = useState('');
    const [step, setStep] = useState(1);
    const [originFrom, setOriginFrom] = useState(null);
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);

    


    const isFormValid = 
        memberOne.length >= 3 && 
        memberTwo.length >= 3 && 
        /^[a-zA-Z0-9-_]+$/.test(coupleNickname) && 
        email.length >= 3 && 
        phoneNumber.length >= 3 && 
        phoneNumberTwo.length >= 3;
        memberOne.length >= 3 && 
        memberTwo.length >= 3 && 
        coupleNickname.length >= 3 && 
        email.length >= 3 && 
        phoneNumber.length >= 3 && 
        phoneNumberTwo.length >= 3 &&
        originFrom !== null;


    const optionsDropdown = [
        {
            label: 'Email',
            value: 'Email',
        },
        {
            label: 'Instagram',
            value: 'Instagram',
        },
        {
            label: 'Un amigo',
            value: 'Friend',
        },
        {
            label: 'Masterclass',
            value: 'Masterclass',
        },
        {
            label: 'Sexshop',
            value: 'Sexshop',
        },
        {
            label: 'Sexóloga/Psicóloga',
            value: 'Professional',
        },
        {
            label: 'Otro',
            value: 'Other',
        }
    ];

    
    const handleAttemptSubmit = async () => {
        if (!isFormValid) {
            toast.error('Completa los campos para continuar. Deben tener al menos 3 caracteres en cada campo.');
            return;
        }
    };

    const handleStepOneSubmit = async () => {
        if (!isFormValid) {
            toast.error('Completa los campos para continuar. Deben tener al menos 3 caracteres en cada campo.');
            return;
        }
        try{
            const response = await create_couple({
                coupleName: coupleNickname,
                coupleMemberOne: memberOne,
                coupleMemberTwo: memberTwo,
                email: email,
                phoneNumber: phoneNumber,
                phoneNumberTwo: phoneNumberTwo,
                originedFrom: originFrom.value,
            });
            if (response.status === 201){
                setStep(2);
            } 
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    toast.error('Apodo de pareja ya en uso, intenta con otro.');
                } else  {
                    toast.error('Ocurrió un error, intenta nuevamente.');
                }
            }
        }
    };



    return (
      <section id="hola">
        <Background>
          <ContainerInfo>
            <ContentImage>
                    <AppImage src="../../img/rutina_bomba.png" alt="Salir de la rutina." />
            </ContentImage>

            <Content>
                <Title>
                    <span>¡FELICITACIONES!</span> Ya están suscritos al programa para innovar en pareja.
                </Title>
                <div style={{padding: "5rem", textAlign: "left"}}>
                    <Text><span>Sigue los siguientes pasos para comenzar :).</span></Text>
                    {step === 1 && (
                        <div>
                        <Text>
                            <span>Paso 1:</span> Completen el siguiente formulario:
                        </Text>
                        <div>
                            <Input
                                type="text"
                                placeholder="Miembro 1"
                                value={memberOne}
                                onChange={(e) => setMemberOne(e.target.value)}
                            />
                            <Input
                                type="text"
                                placeholder="Miembro 2"
                                value={memberTwo}
                                onChange={(e) => setMemberTwo(e.target.value)}
                            />
                            <Input
                                type="text"
                                placeholder="Nombre de usuario de la pareja"
                                value={coupleNickname}
                                onChange={(e) => setCoupleNickname(e.target.value)}
                            />
                            <NickNameInstruction>Elijan nombre que los identifique como pareja. Ej: Brad + Angelina = Brangelina (Solo permitidos letras, números y guiones)</NickNameInstruction>
                            <Input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <PhonenumberLabel>Tú número de teléfono</PhonenumberLabel>
                            <PhoneInput
                                international
                                defaultCountry="AR"
                                placeholder="Numero de telefono"
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                inputComponent={InputPhoneNumber}
                            />
                            <PhonenumberLabel>Número de teléfono de tu pareja</PhonenumberLabel>
                            <PhoneInput
                                international
                                defaultCountry="AR"
                                placeholder="Numero de telefono"
                                value={phoneNumberTwo}
                                onChange={setPhoneNumberTwo}
                                inputComponent={InputPhoneNumber}
                            />
                            <PhonenumberLabel>¿Cómo encontraste la app?</PhonenumberLabel>
                            <Dropdown options={optionsDropdown} onSelect={setOriginFrom} />
                            <Text>
                                ¡Revisa tu email una vez presionado continuar!
                            </Text>
                            <div onClick={handleAttemptSubmit}>
                                <BotonArs onClick={handleStepOneSubmit} disabled={!isFormValid}>¡Continuar!</BotonArs>
                            </div>
                        </div>
                        </div>
                        
                    )}
                    {step === 2 && (
                        <div>
                            <Text><span>Paso 2:</span> completen el siguiente formulario, para que los expertos de WeSex puedan personalizar sus desafios !
                            <br/>
                            <br/>
                            <a href={`https://airtable.com/appVSREVOyy0SOY9u/pagDOyoXlPZ7vcdMg/form?prefill_Nombre+de+la+pareja=${coupleNickname}&prefill_Nombre+Miembro=${memberOne}&prefill_Día+Actual=${formattedDate}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>Encuesta de {memberOne}</a>
                            <br/>
                            <a href={`https://airtable.com/appVSREVOyy0SOY9u/pagDOyoXlPZ7vcdMg/form?prefill_Nombre+de+la+pareja=${coupleNickname}&prefill_Nombre+Miembro=${memberTwo}&prefill_Día+Actual=${formattedDate}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>Encuesta de {memberTwo}</a>
                            </Text>

                            <Text><span>Paso 3:</span> Les dejamos el desafío 1 para este fin de semana 😎</Text>
                            <BotonArs href={`/premium-material/desafios-para-parejas/road?origin=${coupleNickname}`} target="_blank">Acceder a los desafios !</BotonArs>
                            <br />
                            <br />
                        </div>
                    )}
                </div>
                {/* <Text>
                    Puedes cancelar tu suscripción cuando lo desees ....
                </Text> */}
            </Content>

          </ContainerInfo>
          <Dudas />
          
        </Background>
      </section>
    );
  };
  
  export default Suscribed;