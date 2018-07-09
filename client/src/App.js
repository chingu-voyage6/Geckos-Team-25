import React, { Component } from 'react';
import './App.css';
import RAR3 from './RAR3.png';

class App extends Component {
  render() {
     const logo = "RAR3.png";
    return (
      <div className="App">
        
        <div className="divihead">
        <img src={RAR3} className="division2"/>
        </div>
        <div className="division1">
          <label> {"Name"} </label>  
          <input type="text" name="name" required/> 
        </div>
       <div className="division1">
          <label> {"Email Id"} </label>
          <input type="email" name="email-id" required/> 
        </div>
        <div className="division1">
         <label> {"On a scale of 1 to 10, would you recommend us to your friends or family ?"} </label>
         <div className="division">
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
        <div className="division1">
        <label> {"What went right ??"} </label>
        <div className="division">
        <input type={"checkbox"} name={"Food Quality"} value={"Food Quality" }/> {"Food Quality"}        
        <input type={"checkbox"} name={"Ambience"} value={"Ambience"}/> {"Ambience"}
        <input type={"checkbox"} name={"Cleanliness"} value={"Cleanliness"}/> {"Cleanliness"}
        <input type={"checkbox"} name={"Polite and helpful Staff"} value={"Polite and helpful Staff"}/> {"Polite and helpful Staff"}
        <input type={"checkbox"} name={"Value for money"} value={"Value for money"}/> {"Value for money"}
        </div>
        </div>
        <div className="division1">
        <label> {"What went wrong ??"} </label>
        <div className="division">
        <input type={"checkbox"} name={"Impolte Staff"} value={"Impolite Staff"}/> {"Impolite Staff"}
        <input type={"checkbox"} name={"Subpar Food Quality"} value={"Subpar Food Quality"}/> {"Subpar Food Quality"}
        <input type={"checkbox"} name={"Unhygienic"} value={"Unhygienic"}/> {"Unhygienic"}
        <input type={"checkbox"} name={"Waste of money"} value={"Waste of money"}/> {"Waste of money"}
        <input type={"checkbox"} name={"Rude guests"} value={"Rude guests"}/> {"Rude guests"}
        </div>
        </div>
        <div className="division1">
        <label> {"Additional comments"} </label>
        <div className="division">
        <input type="textarea" className="area"/> 
        </div>
        </div>
        <div className="division">
        <input type="submit" name="submit" className={"submit"}/> 
        </div>
      </div>
    );
  }
}

export default App;
