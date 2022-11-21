import tomato from "../images/tomato.svg";
import beef from "../images/beef.svg";
import onion from "../images/onion.svg";
import lettuce from "../images/lettuce.svg";
import cheese from "../images/cheese.svg";
import mushroom from "../images/mushroom.svg";
import leaf from "../images/leaf.svg";
import breadTop from "../images/bread-top.svg";
import breadBottom from "../images/bread-bottom.svg";
import{useSelector} from "react-redux";
import map from 'lodash/map';

function Simulation() {
    const burger= useSelector((state)=>state.burger.value);

    return ( 
        <div className="Simulation">
            <div className="grid-container">
                <div className="inner-container">
            <img className="sim-imgs" src={breadTop} style={{height:'40px'}} alt="Topbread"></img>
            {map(burger,(fills,idx)=>{
                console.log(burger);
                return(
                <>
                {fills.name === 'Tomato' && <img className="sim-imgs" style={{height:'40px'}} key={idx} src={tomato} alt="Tomato"></img>}
                {fills.name === 'Meat' && <img className="sim-imgs" style={{height:'30px'}} key={idx} src={beef} alt="Meat"></img>}
                {fills.name === 'Onions' && <img className="sim-imgs" style={{height:'30px'}} key={idx} src={onion} alt="Onions"></img>}
                {fills.name === 'Cheese' && <img className="sim-imgs" style={{height:'40px'}} key={idx} src={cheese} alt="Cheese"></img>}
                {fills.name === 'Lettuce' && <img className="sim-imgs" style={{height:'30px'}} key={idx} src={lettuce} alt="Lettuce"></img>}
                {fills.name === 'Mushroom' && <img className="sim-imgs" style={{height:'30px'}} key={idx} src={mushroom} alt="Mushroom"></img>}
                {fills.name === 'Leaf' && <img className="sim-imgs" style={{height:'35px'}} key={idx} src={leaf} alt="Leaf"></img>}
                </>);  
            })}
            <img className="sim-imgs" src={breadBottom} style={{height:'40px'}} alt="Bottombread "></img>
            </div>
            </div>
        </div>
     );
}

export default Simulation;