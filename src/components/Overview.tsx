import Summary from "./Summary";
import Table from "./Table";

const Overview = () => {
    return ( 
        <>
            <div className="summary self-start mt-4 text-2xl font-bold">Summary</div>
            <Summary />
            <Table />
        </>
     );
}
 
export default Overview;