import React from 'react'

function StateSelector() {
  return (
    <div>
    <label>Select State</label>
    <select onChange={(eo)=>{
        console.log(eo.target.value);
        let selectedState = eo.target.value;

        //if elseif

        if(eo.target.value =="Andhra Pradesh"){
            console.log("Amaravathi");
        }
        
        else if(selectedState =="Telangana"){
            console.log("Hyderabad");
        }

        else if(selectedState =="Kerala"){
            console.log("Thiruvananthapuram");
        }

        else if(selectedState =="Tamilnadu"){
            console.log("Chennai");
        }
        else if(selectedState =="Madhya Pradesh"){
            console.log("Bhopal");
        }
        else if(selectedState =="Karnataka"){
            console.log("Bangalore");
        }
        else if(selectedState =="Gujarath"){
            console.log("Gandhinagar");
        }
        else if(selectedState =="Maharashtra"){
            console.log("Mumbai");
        }
        else if(selectedState =="Odisha"){
            console.log("Bhubaneswar");
        }else{
            console.log("None of these states");
        }


        //switch case

        switch(selectedState){
            case "Andhra Pradesh":
                console.log("Amaravathi");
                break;
            case "Telangana":
                console.log("Hyderabad");
                break;
            case "Kerala":
                console.log("Thiruvananthapuram");
                break;
            case "Tamilnadu":
                console.log("Chennai");
                break;
            case "Karnataka":
                console.log("Banglore");
                break;
            case "Madhya Pradesh":
                console.log("Bhopal");
                break;
            case "Gujarth":
                console.log("Gandhi Nagar");
                break;
            case "Maharashtra":
                console.log("Mumbai");
                break;
            case "Odisha":
                console.log("Bhuvaneshwar");
                break;
            default:
                console.log("None of the above");
                break;
        }
    }}>
    
        <option>Select State</option>
        <option>Andhra Pradesh</option>
        <option>Telangana</option>
        <option>Kerala</option>
        <option>Tamilnadu</option>
        <option>Madhya Pradesh</option>
        <option>Karnataka</option>
        <option>Gujarath</option>
        <option>Maharashtra</option>
        <option>Odisha</option>
    </select>
    </div>
  )
}

export default StateSelector;