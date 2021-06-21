import React from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
function Cards()
{
return(<>
    <div className="setting" style={{width:"400px",display:"flex",justifyContent:"spaceBetween",marginLeft:"130px",marginTop:"80px"}}>
    <div>
    <p className="numbers">1</p>
    </div>
    <div>
    <h3 className="cards_head"> Introduction </h3>
    <p className="cards_para">Put your logic to the test with these warmups!</p>
    <One/>
    </div>
    </div>
    
    <div className="setting" style={{width:"400px",display:"flex",justifyContent:"spaceBetween",marginLeft:"130px",marginTop:"60px"}}>
    <div>
    <p className="numbers">2</p>
    </div>
    <div>
    <h3 className="cards_head"> The Rational Detective  </h3>
    <p className="cards_para">Eliminate the impossible and uncover the truth!</p>
    <Two/>
    </div>
    </div>
    
    <div className="setting" style={{width:"400px",display:"flex",justifyContent:"spaceBetween",marginLeft:"130px",marginTop:"60px"}}>
    <div>
    <p className="numbers">3</p>
    </div>
    <div>
    <h3 className="cards_head"> Puzzles and Riddles</h3>
    <p className="cards_para">Even trickier puzzles and the tools you need to solve them.</p>
    <Three/>
    </div>
    </div>

    <div className="setting" style={{width:"400px",display:"flex",justifyContent:"spaceBetween",marginLeft:"130px",marginTop:"60px"}}>
    <div>
    <p className="numbers">4</p>
    </div>
    <div>
    <h3 className="cards_head">Multi-Level Thinking</h3>
    <p className="cards_para">If you know that I know that you know... what then?</p>
    <Four/>
    </div>
    </div>

    <div className="setting" style={{width:"400px",display:"flex",justifyContent:"spaceBetween",marginLeft:"130px",marginTop:"60px"}}>
    <div>
    <p className="numbers">5</p>
    </div>
    <div>
    <h3 className="cards_head">Competitive-Games</h3>
    <p className="cards_para">What will your opponent do? Logic it out!</p>
    <Five/>
    </div>
    </div>

    <div className="setting" style={{width:"400px",display:"flex",justifyContent:"spaceBetween",marginLeft:"130px",marginTop:"60px"}}>
    <div>
    <p className="numbers">6</p>
    </div>
    <div>
    <h3 className="cards_head">Logic Machines</h3>
    <p className="cards_para">Turn logic into arithmetic machines.</p>
    <Six/>
    </div>
    </div>

    <div className="setting" style={{width:"400px",display:"flex",justifyContent:"spaceBetween",marginLeft:"130px",marginTop:"60px"}}>
    <div>
    <p className="numbers">7</p>
    </div>
    <div>
    <h3 className="cards_head">Advanced Knights and Knaves</h3>
    <p className="cards_para">Uncover liars on this island of logic!</p>
    <Seven/>
    </div>
    </div>

</>)

}
export default Cards;