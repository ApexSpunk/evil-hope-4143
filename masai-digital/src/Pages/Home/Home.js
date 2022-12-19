import Banner from "../../Components/Home/Banner"
import Devices from "../../Components/Home/Devices"
import FinalBottom from "../../Components/Home/FinalBottom"
import GridElements from "../../Components/Home/GridItems"
import Laptop from "../../Components/Home/Laptop"
import "../../Components/Home/middlestyles.css"
import Range from "../../Components/Home/Range"
import SmallComp from "../../Components/Home/SmallComp"
import SubPart_1 from "../../Components/Home/SubPart_1"
import IndividualIntervalsExample from "../../Components/Home/Subpart_2"
import Washing from "../../Components/Home/Washing"

function Main() {
    return (
        <div>
            <SubPart_1 />
            <IndividualIntervalsExample />
            <Laptop />
            <Devices />
            <Washing />
            <GridElements />
            <Banner />
            <Range />
            <SmallComp />
            <FinalBottom />
        </div>
    )
}
export default Main