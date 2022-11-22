import '../Styles/Simulation.css';
import{useSelector} from "react-redux";
import map from 'lodash/map';

function Simulation() {
    const burger= useSelector((state)=>state.burger.value);

    return ( 
        <div className="Simulation">
            <div className="grid-container">
                <div className="inner-container">
                    <img className="sim-imgs" src='images/bread-top.svg' style={{height:'40px'}} alt="Topbread"></img>
                    {map(burger,(fills,idx)=><img className="sim-imgs" style={{height:'30px'}} key={fills.name+idx} src={`images/${fills.name}.svg`} alt={fills.name}></img>)}      
                    <img className="sim-imgs" src='images/bread-bottom.svg' style={{height:'40px'}} alt="Bottombread "></img>
                </div>
            </div>
        </div>
     );
}

export default Simulation;