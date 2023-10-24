import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { done_task } from "../../../../requests/premiumService";
import { toast } from "react-toastify";

const ContainerNotificarDone = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
`;

const BotonNotificarDone = styled.a`
    background-color: ${(props) => (props.color === "violet" ? "var(--violet)" : "var(--green)")};
    color: white;
    border: none;
    border-radius: 20px;
    padding: 15px 20px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */
`;

const Notificar = ({ message, url, color = "green" }) => {
    const router = useRouter();
    const [query, setQuery] = useState(null);

    useEffect(() => {
        if (router.isReady){
          if (router.query.origin) {
            setQuery(router.query);
          }
        }
    }, [router.isReady]);

    const handleMessage = async () => {
        const { origin, type, index } = query;

        try{
            const response = await done_task({
                coupleName: origin,
                completedTaskType: type,
                completedTaskIndex: index,
            });
            if (response.status === 200) {
                toast.success("Tarea completada, llena la encuesta");
            }
        } catch (error) {
            toast.error("Error al notificar");
        }
        window.open(url, "_blank"); 
    };

    return (
        <ContainerNotificarDone>
            <BotonNotificarDone color={color} onClick={handleMessage}>
                {message} 
            </BotonNotificarDone>
        </ContainerNotificarDone>
    );
};

export default Notificar;