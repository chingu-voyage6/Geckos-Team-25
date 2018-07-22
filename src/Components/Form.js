import React, { Component } from 'react';
import '../css/Form.css';
import RAR3 from './RAR3.png';

class Form extends Component {
  render() {
     const logo = "RAR3.png";
    return (
      <div className="form">
        <img src={RAR3} className="logo"/>
        
        <div className="card1">
          <label> {"Name"} </label>  
          <input type="text" name="name" className={"textarea"} required/> 
        </div>
       <div className="card1">
          <label> {"Email Id"} </label>
          <input type="email" name="email-id" className={"textarea"} required/> 
        </div>
        <div className="card1">
         <label> {"On a scale of 1 to 10, would you recommend us to your friends or family ?"} </label>
         <div className="card2">
          <input type={"radio"} name={"scale"} value={"1" }/> {"1"}
          <input type={"radio"} name={"scale"} value={"2" }/> {"2"}
          <input type={"radio"} name={"scale"} value={"3" }/> {"3"}
          <input type={"radio"} name={"scale"} value={"4" }/> {"4"}
          <input type={"radio"} name={"scale"} value={"5" }/> {"5"}
          <input type={"radio"} name={"scale"} value={"6" }/> {"6"}
          <input type={"radio"} name={"scale"} value={"7" }/> {"7"}
          <input type={"radio"} name={"scale"} value={"8" }/> {"8"}
          <input type={"radio"} name={"scale"} value={"9" }/> {"9"}
          <input type={"radio"} name={"scale"} value={"10" }/> {"10"}
         </div>
        </div>
        <div className="card1">
        <label> {"What went right ??"} </label>
        <div className="card2">
        <input type={"checkbox"} name={"Food Quality"} value={"Food Quality" }/> {"Food Quality"}        
        <input type={"checkbox"} name={"Ambience"} value={"Ambience"}/> {"Ambience"}
        <input type={"checkbox"} name={"Cleanliness"} value={"Cleanliness"}/> {"Cleanliness"}
        <input type={"checkbox"} name={"Polite and helpful Staff"} value={"Polite and helpful Staff"}/> {"Polite and helpful Staff"}
        <input type={"checkbox"} name={"Value for money"} value={"Value for money"}/> {"Value for money"}
        </div>
        </div>
        <div className="card1">
        <label> {"What went wrong ??"} </label>
        <div className="card2">
        <input type={"checkbox"} id="c1" name={"Impolte Staff"} value={"Impolite Staff"}/> {"Impolite Staff"}
        <input type={"checkbox"} id="c1" name={"Subpar Food Quality"} value={"Subpar Food Quality"}/> {"Subpar Food Quality"}
        <input type={"checkbox"} id="c1" name={"Unhygienic"} value={"Unhygienic"}/> {"Unhygienic"}
        <input type={"checkbox"} id="c1" name={"Waste of money"} value={"Waste of money"}/> {"Waste of money"}
        <input type={"checkbox"} id="c1" name={"Rude guests"} value={"Rude guests"}/> {"Rude guests"}
        </div>
        </div>
        <div className="card1">
        <label> {"Additional comments"} </label>
        <div className="card2">
        <input type="textarea" className="textarea"/> 
        </div>
        </div>
        <div className="card2">
        <input type="submit" name="submit" className={"submit"}/> 
        </div>
      </div>
    );
  }
}

export default Form;
