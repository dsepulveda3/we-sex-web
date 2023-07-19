import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
} from 'reactstrap';

const Title = styled.p`
  text-align: center;
  color: var(--violet);
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 2.5rem;
  @media (max-width: 540px) {
    font-size: 2.5rem;
  }
`;

const AccordionHeaderPer = styled(AccordionHeader)`
  font-size: 1.8rem !important;
`;
const faqsInfo = [
  {
    id: '1',
    title: '¿Es gratis usar WeSex?',
    content:
      'Si! Queremos que todxs puedan recibir una educación sexual práctica, confiable y gratuita! De una manera fácil y divertida ;)',
  },
  {
    id: '2',
    title: '¿Cómo hago para crear debates si no quiero mostrar mi identidad?',
    content:
      '¡No te preocupes! Sabemos que el sexo aveces puede dar un poco de pudor, por eso creamos la opcion “modo anonimo” para crear debates!',
  },
  {
    id: '3',
    title:
      '¿Qué hago si encuentro mensajes de odio o comentarios inapropiados por parte de algún usuario?',
    content:
      'Manteniendo apretado el comentario podrás reportarlo! Una vez que lo reportes, el equipo de WeSex podrá revisarlo y en caso de ser necesario, eliminarlo. Ante todo, queremos que WeSex sea una comunidad saludable y constructiva.',
  },
  {
    id: '4',
    title: '¿Cómo puedo bloquear a un usuario?',
    content:
      'Si deseas que un usuario no pueda enviarte más mensajes directos a tu casilla de chat, puedes bloquearlo, entrando a su perfil y tocando el botón “(!)” en la esquina superior derecha.',
  },
  {
    id: '5',
    title: '¿Por qué WeSex es una app para el celular?',
    content:
      'Porque queremos brindar educación sexual al alcance de tu mano. Estes donde estes, podes chequear todas tus dudas sexuales en WeSex.',
  },
  {
    id: '6',
    title: '¿Qué es ser un WeSexer?',
    content:
      'Tú eres un WeSexer! Somos Wesexers quienes nos sentimos parte de la comunidad de WeSex. Quienes creemos que el sexo no es tabu. Queremos aprender, compartir y disfrutar de una sexualidad libre. Con más amor, diversidad y empatía.',
  },
];

const Faqs = () => {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  //   https://reactstrap.github.io/?path=/docs/components-accordion--accordion
  return (
    <Container className='mt-5'>
      <Title>Preguntas frecuentes</Title>
      <div>
        <Accordion flush open={open} toggle={toggle}>
          {faqsInfo.map((faq) => (
            <AccordionItem key={faq.id}>
              <AccordionHeaderPer targetId={faq.id}>
                {faq.title}
              </AccordionHeaderPer>
              <AccordionBody accordionId={faq.id}>
                👉 {faq.content}
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default Faqs;
