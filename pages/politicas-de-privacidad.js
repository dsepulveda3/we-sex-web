import React, {useState} from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import {Container} from 'reactstrap';
import Layout from '../components/general/Layout';

const TOS = styled.p`
    margin-bottom: 1rem;
    color: black;
`;
const TOSSubItem = styled(TOS)`
    margin-left: 1rem;
`;
const TOSTitle = styled(TOS)`
    font-weight: bold;
`;

export default function PoliticasDePrivacidad() {
  
  return (
    <>
      <Head>
        <title>Políticas de Privacidad | WeSex</title>
        <meta name="description" content={""} />
        <meta name="keywords" content={""} />
      </Head>
      <Layout>
        <div className="sec-title">
            <Container>
                <h1>Políticas de Privacidad</h1>
            </Container>
        </div>
        <Container>
            <TOSTitle>PRIVACY NOTICE:</TOSTitle>
            <TOSTitle>TERMINOS Y CONDICIONES DE LA PLATAFORMA WESEX</TOSTitle>
            <TOS>
                Gracias por elegir ser parte de nuestra comunidad en WeSex. Estamos comprometidos a proteger su información personal y su derecho a la privacidad. Si tiene alguna pregunta o inquietud sobre este aviso de privacidad o nuestras prácticas con respecto a su información personal, comuníquese con nosotros a contacto@we.sex. 
            </TOS>
            <TOS>
                1. DESCRIPCIÓN: WESEX presta servicios a los usuarios, según los siguientes términos y condiciones (los “Términos y Condiciones”). 
            </TOS>
            <TOSSubItem>
                Al registrarse y/o utilizar cualquier servicio actual o futuro de WESEX se estará sujeto a las condiciones aplicables al presente Servicio. 
                <br/><br/>Cualquier Usuario que ingrese a la plataforma WESEX quedará obligado por estos Términos y Condiciones, junto con todas los demás principios que rigen la plataforma WESEX. El desconocimiento del contenido de los Términos y Condiciones no justifica el incumplimiento de los mismos, y mucho menos, faculta a los Usuarios para tomar medidas particulares o legales que desconozcan lo planteado en estos Términos y Condiciones. 
                <br/><br/>Con su registro y utilización de la plataforma, los Usuarios están manifestando su aceptación, expresa e inequívoca de los Términos y Condiciones. Respecto de menores de edad que quieran hacer uso de la “App”, y siempre que sean mayores de 18 años, deberán contar con autorización expresa de sus padres o representantes legales previa realización del registro. En dicho caso los padres o representantes legales deben revisar y aceptar las condiciones de este acuerdo y, al usar la App, el Usuario confirma que los padres o representantes legales también han repasado y aceptado este acuerdo. Nos reservamos el derecho a limitar, a nuestra total discreción, la disponibilidad de algunos contenidos de la aplicación a usuarios menores de 18 años. 
                <br/><br/>WESEX se reserva el derecho a suspender, cerrar o eliminar cuentas y/o editar contenido a su entera discreción. 
                <br/><br/>Las opiniones, consejos y artículos sobre cuestiones médicas o de salud humana tienen efecto de información general, no pretendiendo diagnosticar ni tratar ningún tipo de dolencia o enfermedad, debiendo los Usuarios consultar un médico habilitado para cualquier cuestión médica personal. 
                <br/><br/>Cualquier potencial Usuario que no acepte los presentes Términos y Condiciones deberá abstenerse de utilizar la plataforma WESEX. 
            </TOSSubItem>
            <TOS>
                2. GLOSARIO
            </TOS>
            <TOSSubItem>
                <bold>“App”</bold>, hace referencia a la aplicación WESEX disponible para dispositivos móviles. 
                <bold>“Sitio Web”</bold> hace referencia al sitio web www.we.sex
                <bold>“Usuario”</bold> hace referencia a todas las personas humanas que accedan a nuestra app y por consiguiente hayan aceptado los presentes Términos y Condiciones, y las obligaciones derivadas. 
                <bold>“Plataforma” </bold>hace referencia tanto a la App como al sitio web y cualquier otro medio por el cual WESEX ofrezca contenido y/o servicios. 
                <bold>“Material”</bold> hace referencia a todo el contenido de la Plataforma, incluyendo, pero sin limitarse a los textos, gráficas, imágenes, logotipos, íconos, software y cualquier otro contenido existente en la Plataforma. 
                <bold>“Cuenta”</bold> hace referencia al perfil creado voluntariamente por el Usuario para poder hacer uso de la Plataforma. 
                <bold>“Datos”</bold> hace referencia a toda la información personal suministrada voluntariamente por el usuario al momento de registrar su Cuenta en la Plataforma. 
                <bold>“UGC”</bold> hace referencia a cualquier contenido creado y subido por el Usuario a la Plataforma (en adelante “UGC”). 
            </TOSSubItem>
            <TOS>
                3. MARCAS Y DERECHOS DE AUTOR 
            </TOS>
            <TOSSubItem>
                WESEX, sus diseños y otras marcas indicadas en la Plataforma son marcas comerciales de WESEX. Cualquier otro gráfico, logotipo, diseño, ícono y nombre de servicio de WESEX son marcas comerciales o imágenes comerciales de WESEX. Las marcas comerciales e imagen comercial WESEX no podrán ser utilizadas en relación con cualquier producto o servicio que no sea de WESEX o no cuente con autorización expresa y por escrito para hacerlo. 
                <br/>Asimismo, el contenido de la Plataforma, incluyendo, pero sin limitarse a los textos, gráficas, imágenes, logotipos, íconos,ilustraciones, software y cualquier otro material, -al cual en adelante se hará referencia como el “Material”, está protegido bajo las leyes aplicables de propiedad industrial y propiedad intelectual. Todo el Material es de propiedad de WESEX. Queda prohibido modificar, copiar, reutilizar, extraer, explotar, reproducir, comunicar al público, hacer segundas publicaciones, cargar o descargar archivos, enviar, transmitir, usar, tratar o distribuir de cualquier forma la totalidad o parte de los contenidos incluidos en la Plataforma. El uso no autorizado del Material puede constituir una violación de las leyes sobre derechos de autor, leyes de propiedad industrial u otras leyes. Ningún Usuario podrá vender o modificar el Material de manera alguna, ni ejecutar o anunciar públicamente el Material, ni distribuirlo para propósitos comerciales. Tampoco se permitirá copiar o adaptar el código HTML que WESEX crea para generar su página web o plataforma, ya que el mismo está protegido por los derechos de autor. Todo uso no autorizado se presumirá como indebido y podrá ser sancionado por la ley. 
            </TOSSubItem>
            <TOS>4. CREACIÓN DE CUENTAS Y PROTECCIÓN DE DATOS</TOS>
            <TOSSubItem>
                A fin de utilizar la Plataforma los Usuarios deberán indefectiblemente crear una cuenta de usuario (la “Cuenta”) donde se le solicitarán ciertos datos tales como: nombre, fecha de nacimiento, sexo, dirección, teléfono, correo electrónico, entre otros (los “Datos”). Determinados datos serán de carga obligatoria y otros de carga voluntaria. Los Usuarios garantizan la veracidad, exactitud, vigencia, autenticidad y actualización de sus Datos. En ningún caso WESEX se responsabiliza por la certeza de los Datos de los Usuarios. 
                <br/>Si los Usuarios cuentan con perfiles creados en redes sociales, podrán crear su Cuenta con la utilización de las credenciales allí incluidas. WESEX se reserva el derecho de solicitar datos adicionales a los aportados por las credenciales de las redes sociales. 
                <br/>WESEX podrá requerir alguna información o documentación adicional a los efectos de comprobar o corroborar los Datos, pudiendo suspender temporal o definitivamente a aquellos Usuarios cuyos Datos no hayan podido ser confirmados. 
                <br/>Para acceder a su Cuenta personal, el Usuario deberá ingresar su correo electrónico y una contraseña la cual deberá mantener siempre de manera confidencial. Si el Usuario olvida su contraseña, podrá restablecerla haciendo clic en “Olvidé mi contraseña”. 
                <br/>La Cuenta es única e intransferible. De detectarse el incumplimiento a lo antes previsto, WESEX se reserva el derecho de cancelar, suspender o inhabilitar las cuentas, sin perjuicio de otras medidas legales que pueda tomar. WESEX no puede garantizar la identidad de los Usuarios. El Usuario es responsable de todas las interacciones realizadas en su Cuenta, debiendo notificar a WESEX inmediatamente, de forma fehaciente, cualquier uso no autorizado de la misma, así como cualquier sustracción, divulgación o pérdida de sus datos de acceso a la Plataforma. 
                <br/>WESEX vela por la protección de los datos de los Usuarios. Sin embargo, no será responsable del uso fraudulento que puedan hacer terceros de la Cuenta del Usuario. WESEX se reserva el derecho de rechazar cualquier solicitud de registro o de cancelar una registración previamente aceptada, sin que esté obligada a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a indemnización o resarcimiento. 
                <br/><br/>Toda información personal que el participante provea en forma voluntaria estará protegida por las normas de confidencialidad y privacidad. Los únicos datos personales a los que el Organizador tendrá acceso serán aquéllos que el participante facilite voluntariamente. 
                <br/><br/>En cumplimiento de la normativa vigente, el Organizador deja constancia que ha adoptado las medidas necesarias para mantener el nivel de seguridad requerido atendiendo a los datos personales tratados. Asimismo está dotado de los medios precisos a su alcance para evitar en la medida de lo posible los accesos no autorizados, sustracciones y modificaciones ilícitas y la pérdida de los datos. No obstante, el participante debe quedar informado y advertido a través de este aviso de que tales medios no son infalibles e inexpugnables y por tanto el Organizador no puede hacerse responsable de tales prácticas. 
                <br/><br/>Se deja constancia que el titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto, conforme a lo establecido en el artículo 14, inciso 3 de la Ley nº 25.326. 
                <br/><br/>La Dirección Nacional de Protección de Datos Personales, Órgano de Control de la Ley Nº 25.236, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales. 
            </TOSSubItem>
            <TOS>5. PUBLICIDAD</TOS>
            <TOSSubItem>
                WESEX cuenta con un servicio de publicidad a través de banners, correos electrónicos y otros medios. Los enlaces que dirigen a otros sitios web de propiedad de terceros se suministran para conveniencia únicamente del Usuario y WESEX no respalda, recomienda o asume responsabilidad alguna sobre el contenido de estos. 
                <br/>El Usuario puede solicitar no recibir más correos electrónicos u otras notificaciones relativas a publicidad mediante la configuración del perfil de su cuenta. 
                <br/>Se pone en conocimiento del Usuario de la posible existencia de “cookies”, que podrían instalarse en su dispositivo cuando visita la Plataforma y que resultan necesarias a los fines de utilizar los servicios y contenidos de la misma. Las ”cookies” son pequeños archivos de texto enviados a través de Internet a su navegador y que quedan almacenados en su dispositivo. Las cookies hacen que sea más simple para el usuario conectarse, navegar y utilizar la Plataforma en futuras visitas. Usted puede borrar las “cookies” instaladas en su computador en cualquier momento e impedir que su navegador instale nuevas “cookies” configurando su navegador. 
            </TOSSubItem>
            <TOS>6. CONCURSOS, EVENTOS Y PROMOCIONES</TOS>
            <TOSSubItem>
                Los concursos, sorteos, eventos y promociones que se implementen a través de la Plataforma estarán sujetas a las reglas y condiciones que en cada oportunidad se establezcan, de manera anticipada por WESEX. Los términos y condiciones de promociones, incentivos y/o actividades especiales con una vigencia limitada se publicarán en debida forma en la Plataforma y se entienden como parte de estos Términos y Condiciones. 
            </TOSSubItem>
            <TOS>7. INTERACCIONES DE LOS USUARIOS</TOS>
            <TOSSubItem>
                WESEX únicamente pone a disposición de los Usuarios un espacio virtual de interacción que les permite ponerse en comunicación mediante internet entre los Usuarios. 
                <br/>Asimismo el Usuario podrá interactuar en los Artículos generados por WESEX, comentándolos, marcándolos como “me gusta”, guardándolos o compartiéndolos (ya sea dentro o fuera de la Plataforma). 
                <br/>Los Usuarios también podrán generar “Debates” dentro de la sección creada a tal fin, pudiendo además comentar los debates propios o de terceros, marcarlos
                <br/>como “me gusta”, guardarlos o compartirlos (ya sea dentro o fuera de la Plataforma) 
                <br/>En todos los casos el Usuario deberá estar debidamente registrado y logueado al momento de realizar la interacción. WESEX no se hace responsable por la información, imágenes y todo otro contenido que intercambien los Usuarios entre sí por medio de la Plataforma o fuera de ella. 
                <br/>El nombre completo, nombre de usuario, edad y sexo del Usuario será visible para el resto de los Usuarios desde el momento que decida realizar alguna de las interacciones mencionadas en este acápite. 
                <br/><br/>En cada Artículo, Debate, Chat o cualquier otro espacio de interacción dentro de la Plataforma existirá la posibilidad de reportar un comentario o contenido inapropiado. Los moderadores de WESEX se encargarán de revisar el comentario o contenido denunciado con la mayor celeridad posible y tomarán las medidas necesarias en caso de considerarlo abusivo o contrario a los presentes términos y condiciones, usos y costumbres y/o leyes aplicables. 
                <br/><br/>Los Usuarios se comprometen a no molestar, acosar, insultar o realizar cualquier tipo de actos ofensivos de bullying y/o discriminación a otros Usuarios o al público en general. 
                <br/><br/>Los Usuarios no pueden usar la Plataforma con el fin de transmitir, distribuir, almacenar o destruir material en violación de cualquier ley aplicable o regulación, de manera que se infrinjan las leyes sobre derechos de autor, propiedad industrial, secretos comerciales o cualquier otro derecho de propiedad intelectual de terceros o de manera que viole la privacidad, publicidad u otros derechos personales de terceros, o en forma que sea difamatoria, obscena, amenazante o abusiva. Esto sin perjuicio de normas particulares sobre la materia que sean imperativas en cada uno de los ordenamientos jurídicos correspondientes a los territorios en los cuales WESEX prestará su servicio. 
            </TOSSubItem>
            <TOS>8. CONTENIDO GENERADO POR LOS USUARIOS (UGC)</TOS>
            <TOSSubItem>
                El Usuario tendrá la posibilidad de crear y subir contenido a la Plataforma (en adelante “UGC”), como ser comentarios, debates, fotos, videos, etc. Al aceptar estos Términos y Condiciones y subir UGC, el Usuario otorga a WESEX el derecho, libre de regalías, mundial, no exclusivo y transferible para usarlo irrestrictamente por sí o por medio de terceros, tanto dentro de la Plataforma como en cualquier sitio web de terceros, redes sociales, material impreso, publicaciones digitales, en línea o en formato papel o cualquier otro medio creado o a crearse. 
                <br/>Dicha cesión autorizará a WESEX a proceder a la difusión pública y/o distribución y/o comercialización del UGC, así como su nombre, datos personales e imágenes, sin que ello otorgue al Usuario derecho al cobro de suma alguna por ningún concepto. Además, el Usuario acuerda y acepta que el Organizador tendrá derecho a incluir el UGC en futuras obras de derecho de
                <br/>autor, a su única discreción, y de realizar ediciones, traducciones y modificaciones a las mismas, así como usarlas para fines promocionales. El Usuario se compromete a indemnizar y mantener indemne a WESEX respecto de toda acción, reclamo, gasto y/o daño que resulte directa o indirectamente de cualquier reclamo respecto al UGC. 
                <br/>WESEX podrá asimismo ceder o licenciar el UGC total o parcialmente, pudiendo, actualizarlo, traducirlo, completarlo, usándolo para el mismo u otros fines para el cual fue creada. Podrá copiarlo y reproducirlo en cualquier medio conocido o que se desarrolle en el futuro. Los derechos cedidos son por todo el tiempo de duración legal de la obra y comprende el ámbito de la República Argentina, así como cualquier país del extranjero. WESEX manifiesta resguardar la personalidad creadora del Usuario respecto al UGC, haciendo sus mejores esfuerzos para su identificación, la integridad e intangibilidad del mismo. 
                <br/>El Usuario declara y garantiza que no existe impedimento legal y/o convencional y/o contractual y/o de cualquier otra especie que impida y/o limite la presente cesión, con la extensión y alcances con que se otorga la misma. Asimismo, El Usuario manifiesta y garantiza que no ha firmado contrato alguno que pueda impedir el cumplimiento de las obligaciones asumidas y de los consiguientes derechos que corresponden a WESEX como consecuencia de la presente cesión. 
                <br/><br/>El solo hecho de completar el registro en la Plataforma implica la aceptación de estas condiciones. 
            </TOSSubItem>
            <TOS>9. SEGURIDAD</TOS>
            <TOSSubItem>
                Está prohibido a los usuarios violar o intentar violar la seguridad de la Plataforma. Específicamente, a modo de ejemplo y sin que implique limitación, no se podrá (i) acceder a información que no esté dirigida o autorizada al Usuario específico o acceder a servidores o cuentas a los cuales el Usuario no está autorizado a acceder; (ii) intentar probar la vulnerabilidad de un sistema o red sin la debida autorización o violar las medidas de seguridad o autenticación; (iii) intentar interferir con los servicios prestados a un Usuario, servidor o red, incluyendo pero sin limitarse al envío de virus a través de la Plataforma o sobre carga de tráfico para denegación del servicio; (iv) enviar correo electrónico no solicitado, incluyendo promociones y/o publicidad de productos o servicios. La violación de cualquier sistema o red de seguridad puede resultar en responsabilidades civiles y penales. WESEX investigará la ocurrencia de hechos que puedan constituir violaciones a lo anterior y cooperará con cualquier autoridad competente en la persecución de los Usuarios que estén envueltos en tales violaciones; (v) suplantar la identidad de otros usuarios o de personas naturales o jurídicas de cualquier índole; (vi) proporcionar información de identidad incorrecta, incompleta o falsa. 
                <br/><br/>La Plataforma puede ser usada únicamente para propósitos legales. Se prohíbe su uso en cualquiera de las siguientes formas:
                <br/>Incluir en la Plataforma cualquier derecho de franquicia, esquema de pirámide, membresía a un club o grupo, representación de ventas, agencia comercial o cualquier oportunidad de negocios que requiera un pago anticipado o pagos periódicos, solicitando el reclutamiento de otros miembros. 
                <br/><br/>Borrar o revisar cualquier material incluido en la Plataforma por cualquier otra persona o entidad, sin la debida autorización. 
                <br/><br/>Usar cualquier elemento, diseño, software o rutina para interferir o intentar interferir con el funcionamiento adecuado de la Plataforma o cualquier actividad que sea llevada a cabo en la Plataforma. 
                <br/>Intentar descifrar, compilar o desensamblar cualquier software comprendido en la Plataforma o que de cualquier manera haga parte de este. 
                <br/><br/>Como ya se mencionó, está terminantemente prohibido incluir en la Plataforma información falsa, inexacta, incompleta, incorrecta o engañosa.
            </TOSSubItem>
            <TOS>10. TERMINACIÓN </TOS>
            <TOSSubItem>
                WESEX se reserva el derecho, a su exclusiva discreción, de suspender o cancelar la registración del Usuario, y por lo tanto, negarle acceso a esta Plataforma, ante el incumplimiento de estos Términos y Condiciones por parte de los Usuarios o ante la imposibilidad de verificar o autenticar cualquier información que estos hayan presentado en el registro para acceder al Portal. Sin perjuicio, de conservar determinada información para efectos únicamente estadísticos y sin que ello implique bajo ningún entendido la preservación de datos personales, ya que se garantiza que tal información se conservará en términos de absoluto anonimato.
            </TOSSubItem>
            <TOS>11. INFORMACIÓN ADICIONAL</TOS>
            <TOSSubItem>
                WESEX no garantiza que la plataforma opere libre de errores o que su servidor se encuentre libre de virus de computadores u otros mecanismos dañinos. Si el uso de la plataforma o del material resulta en la necesidad de solicitar servicio de reparación o mantenimiento a sus equipos o información o de reemplazar sus equipos o información, WESEX no es responsable por los costos que ello implique. 
                <br/><br/>La plataforma y el material se ponen a disposición de los usuarios en el estado en que se encuentren. No se otorga garantía alguna sobre la exactitud, confiabilidad u oportunidad del material, los servicios, los textos, el software, las gráficas y los enlaces o vínculos. 
                <br/><br/>En ningún caso, WESEX, sus proveedores o cualquier persona mencionada en la plataforma, será responsable por daños de cualquier naturaleza, resultantes del uso o la imposibilidad de usarlos. 
            </TOSSubItem>
            <TOS>12. EXONERACIÓN DE RESPONSABILIDAD MÉDICA</TOS>
            <TOSSubItem>
                Más allá que todo el contenido de la Plataforma está generado y/o auditado por profesionales de la salud debidamente registrados, WESEX no es un proveedor de cuidados médicos y la Plataforma no pretende sustituir el asesoramiento o diagnóstico médico, ni tratar o supervisar ninguna enfermedad ni trastorno médico. Es obligación de los Usuarios consultar con un médico autorizado u otro proveedor de servicios de salud autorizado antes de tomar cualquier decisión o emprender alguna acción que pueda afectar a su salud y seguridad o a la de terceros. Nunca haga caso omiso al asesoramiento médico profesional, ni aplace su búsqueda de atención médica debido a algo que haya leído en la Plataforma. Siempre consulte con un profesional sanitario si tiene preguntas o dudas sobre su salud o estado o si experimenta cambios en su salud o estado. Si  cree que tiene una emergencia médica, llame al teléfono de emergencias o acuda al servicio de urgencias más cercano de forma inmediata. 
                <br/>No asumimos responsabilidad alguna por errores u omisiones, imprecisiones técnicas involuntarias o errores tipográficos en los materiales dispuestos, ni por la violación de cualquier norma ética o moral aplicable en su comunidad en relación a la educación sexual y los materiales relacionados.
            </TOSSubItem>
            <TOS>13. LEY APLICABLE</TOS>
                <TOSSubItem>
                    Al visitar la Plataforma, el Usuario acepta que las leyes de Argentina, independientemente de los principios de conflicto de leyes, regirán estos Términos y Condiciones, así como cualquier controversia, de cualquier tipo, que pudiera surgir entre el Usuario y WESEX. 
                </TOSSubItem>
            <TOS>14. OTRAS POLÍTICAS</TOS>
                <TOSSubItem>
                    Es obligación del Usuario revisar nuestras otras políticas publicadas en el Sitio Web. Estas políticas también regirán su interacción con WESEX. Nos reservamos el derecho a hacer cambios a nuestra Plataforma, políticas y a estos Términos y Condiciones en cualquier momento. En caso de que alguna de estas condiciones resulte inválida, nula o por cualquier razón inaplicable, tal condición se considerará separable y no afectará la validez y aplicabilidad de ninguna de las demás condiciones.
                </TOSSubItem>
        </Container>
      </Layout>
    </>
  )
}
