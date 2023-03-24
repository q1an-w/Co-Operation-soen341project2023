import * as React from "react";
import { Table } from "react-bootstrap";
import { Icon } from "@fluentui/react/lib/Icon";
import "./css/Candidate.css";
import axios from "axios";

export default class CandidateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true,
      selectedJob: null,
      firstName: "Alta",
      newFirstName: "",
      lastName: "Sheikh",
      newLastName: "",
      email: "farewells@gmail.com",
      newEmail: "",
      DOBY: "2002",
      DOBM: "08",
      DOBD: "29",
      newDOBY: "",
      newDOBM: "",
      newDOBD: "",
      field: "Software Engineering",
      newField: "",
      jobType: "",
      newJobType: "",
      description: "*enter CV here*",
      newDescription: "",
      show1: 'none',
      show2: 'none',
      show3: 'none',
      show4: 'none',
      show5: 'none',
      show6: 'none'

    };
  }

test(){

    let loginInfo = {
        email: "altacandidate@gmail.com",
        password: "abc123",
        usertype: "student",
    };
    console.log(loginInfo);
    axios.get("https://sawongdomain.com/profiles", loginInfo)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}

// First Name
showEditBox1(){
    this.setState({show1: 'block'});
}

hideEditBox1(){
    this.setState({show1: 'none'});
}

readTextBox1 = (userInput1) => {
    this.setState({newFirstName: userInput1.target.value});
    console.log(userInput1.target.value);
    console.log(this.state.newFirstName);
}

saveFirstName(){
    this.setState({firstName: this.state.newFirstName});
    console.log("New name is: ", this.state.firstName);
    //this.setState({show1: 'none'});
}

// Last Name
showEditBox2(){
    this.setState({show2: 'block'});
}

hideEditBox2(){
    this.setState({show2: 'none'});
}

readTextBox2 = (userInput2) => {
    this.setState({newLastName: userInput2.target.value});
    console.log(userInput2.target.value);
    console.log(this.state.newLastName);
}

saveLastName(){
    this.setState({lastName: this.state.newLastName});
    console.log("New last name is: ", this.state.lastName);
    //this.setState({show2: 'none'});
}

// Email
showEditBox3(){
    this.setState({show3: 'block'});
}

hideEditBox3(){
    this.setState({show3: 'none'});
}

readTextBox3 = (userInput3) => {
    this.setState({newEmail: userInput3.target.value});
    console.log(userInput3.target.value);
    console.log(this.state.newEmail);
}

saveEmail(){
    this.setState({email: this.state.newEmail});
    //this.setState({show3: 'none'});
}

// Date of Birth
showEditBox4(){
    this.setState({show4: 'block'});
}

hideEditBox4(){
    this.setState({show4: 'none'});
}

readTextBox4 = (userInput4) => {
    this.setState({newDOBY: userInput4.target.value});
}
readTextBox5 = (userInput5) => {
    this.setState({newDOBM: userInput5.target.value});
}
readTextBox6 = (userInput6) => {
    this.setState({newDOBD: userInput6.target.value});
}

saveDOB(){
    this.setState({DOBY: this.state.newDOBY});
    this.setState({DOBM: this.state.newDOBM});
    this.setState({DOBD: this.state.newDOBD});
    //this.setState({show4: 'none'});
}

// Field of Study
showEditBox5(){
    this.setState({show5: 'block'});
}

hideEditBox5(){
    this.setState({show5: 'none'});
}

readTextBox7 = (userInput7) => {
    this.setState({newField: userInput7.target.value});
    console.log(userInput7.target.value);
    console.log(this.state.newField);
}

saveField(){
    this.setState({field: this.state.newField});
    //this.setState({show5: 'none'});
}

// Descriptioon
showEditBox6(){
    this.setState({show6: 'block'});
}

hideEditBox6(){
    this.setState({show6: 'none'});
}

readTextBox8 = (userInput8) => {
    this.setState({newDescription: userInput8.target.value});
}

saveDescription(){
    this.setState({description: this.state.newDescription});
    //this.setState({show6: 'none'});
}

showEditBoxes(){
    this.showEditBox1();
    this.showEditBox2();
    this.showEditBox3();
    this.showEditBox4();
    this.showEditBox5();
    this.showEditBox6();
}

hideEditBoxes(){
    this.hideEditBox1();
    this.hideEditBox2();
    this.hideEditBox3();
    this.hideEditBox4();
    this.hideEditBox5();
    this.hideEditBox6();
}

saveBoxes(){
    if (document.getElementById("fiName").value.trim() != ""){
        this.saveFirstName();
    }

    if (document.getElementById("laName").value.trim() != ""){
        this.saveLastName();
    }

    if (document.getElementById("eMail").value.trim() != ""){
        this.saveEmail();
    }

    if (document.getElementById("doB").value.trim() != ""){
        this.saveDOB();
    }

    if (document.getElementById("headLine").value.trim() != ""){
        this.saveField();
    }

    if (document.getElementById("CV").value.trim() != ""){
        this.saveDescription();
    }


    this.hideEditBoxes();

}

  render() {
    return (
      <div className="candidate-profile-container" style={{backgroundColor: 'grey', maxWidth: 400, textAlign: 'left', padding: 20, marginTop: 30}}>
        <div className="candidate-profile-wrapper">
          <br />

          Candidate Profile
          <br />
          <br />

          {/* First Name */}
          <div>
            {/* <button onClick={() => this.showEditBox1()}>Edit</button> */}
            First Name: {this.state.firstName}
          </div>

          <div style={{display: this.state.show1}}>
              <input type="text" id="fiName" onChange={this.readTextBox1}/>
              {/* <button onClick={() => this.saveFirstName()}>Save</button>
              <button onClick={() => this.hideEditBox1()}>Cancel</button> */}
          </div>

          {/* Last Name */}
          <div>
            {/* <button onClick={() => this.showEditBox2()}>Edit</button> */}
            Last Name: {this.state.lastName}
          </div>

          <div style={{display: this.state.show2}}>
              <input type="text" id= "laName" onChange={this.readTextBox2}/>
              {/* <button onClick={() => this.saveLastName()}>Save</button>
              <button onClick={() => this.hideEditBox2()}>Cancel</button> */}
          </div>

          
          {/* Email */}
          <div>
            {/* <button onClick={() => this.showEditBox3()}>Edit</button> */}
            E-mail: {this.state.email}
          </div>

          <div style={{display: this.state.show3}}>
              <input type="text" id="eMail" onChange={this.readTextBox3}/>
              {/* <button onClick={() => this.saveEmail()}>Save</button>
              <button onClick={() => this.hideEditBox3()}>Cancel</button> */}
          </div>

          {/* Date Of Birth */}
          <div>
            {/* <button onClick={() => this.showEditBox4()}>Edit</button> */}
            Date of Birth (YYYY-MM-DD): {this.state.DOBY + "-" + this.state.DOBM + "-" + this.state.DOBD}
          </div>

          <div style={{display: this.state.show4}}>
              <input type="number" id="doB" onChange={this.readTextBox4}/>
              <input type="number" id="doB" onChange={this.readTextBox5}/>
              <input type="number" id="doB" onChange={this.readTextBox6}/>
              {/* <button onClick={() => this.saveDOB()}>Save</button>
              <button onClick={() => this.hideEditBox4()}>Cancel</button> */}
          </div>
          
          {/* Headline */}
          <div>
            {/* <button onClick={() => this.showEditBox5()}>Edit</button> */}
            Headline: {this.state.field}
          </div>

          <div style={{display: this.state.show5}}>
              <input type="text" id="headLine" onChange={this.readTextBox7}/>
              {/* <button onClick={() => this.saveField()}>Save</button>
              <button onClick={() => this.hideEditBox5()}>Cancel</button> */}
          </div>

          {/* Description */}
          <div>
            Description: {this.state.description}
          </div>

          <div style={{display: this.state.show6}}>
              <textarea type="text" id="CV" onChange={this.readTextBox8}/>
          </div>

          {/* Job Type */}
          {/* <div>
            <button onClick={() => this.showEditBox6()}>Edit</button> 
            Job Type: {this.state.jobType}
          </div>

          <div style={{display: this.state.show6}}>
              <select>
                <option value="empty">  </option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
              </select> 
              <button onClick={() => this.saveJobType()}>Save</button><button onClick={() => this.hideEditBox6()}>Cancel</button>
          </div> */}

          <br />

          <button onClick={() => this.showEditBoxes()}>Edit</button>
          <button onClick={() => this.saveBoxes()}>Save</button>
          <button onClick={() => this.hideEditBoxes()}>Cancel</button>

          <button onClick={() => this.test()}>api get</button>



          <br />

        </div>
      </div>
    );
  }
}
