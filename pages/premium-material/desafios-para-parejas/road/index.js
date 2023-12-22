import Road from "../../../../components/premiumMaterial/desafiosParejas/road";
import NotificationButton from "../../../../components/webPush";


const DesafioRoad = ({ coupleName, index }) => {

    return(
        <NotificationButton coupleName={coupleName} index={index} />
    )
};

export default DesafioRoad;

export const getServerSideProps = async (context) => {
    const { coupleName, index } = context.query;

    return {
        props: {
            coupleName,
            index
        }
    }
}
