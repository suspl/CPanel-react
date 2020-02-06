import React, { Component } from "react";
import "../assets/css/custom_css.css"

class LoginComp extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            items: {},
            LogedInDetails: {},
            errors: {}
        };
        this.LoginFun = this.LoginFun.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        
    }
    LoginFun()
    {
        if (this.validateForm())   //----validation---
        {
            console.log(this.state.items);
            var data = {
                "fedaratedToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE1YWM4Nzk5NDUxMTE4NTg2YzMwZWUiLCJ1c2VyTmFtZSI6IkpheWFiYWwiLCJhcHBJZCI6IjA1ODNlMGQ5LTBiOTktNDQzMS04NzQ2LWZkYTI1NzAwZTU4NyIsImFwcFByb2ZpbGUiOlt7ImF1dGhHcm91cE5hbWUiOiJBZG1pbiIsImF1dGhHcm91cEZ1bmN0aW9ucyI6WyJFTVBDUiJdfSx7ImF1dGhHcm91cE5hbWUiOiJTdXBlckFkbWluIiwiYXV0aEdyb3VwRnVuY3Rpb25zIjpbIkVNUENSIiwiRU1QQ1IiLCJFTVBDUiJdfV0sImlzcyI6ImlwcmlvdGl4IiwiaWF0IjoxNTc5NjcyMjQyLCJleHAiOjE1Nzk3MDEwNDJ9.bWpZqPdc5sVZtQOf7dNvKuTv0xB1MLkqWynkqOS8G5Q",
                "userApplication":[
                    {
                                "apiKey": "0583e0d9-0b99-4431-8746-fda25700e587",
                                "_id": "5e15afc399451118586c30f1",
                                "appName": "Employee"
                    },
                    {
                                "apiKey": "0583e0d9-0b99-4431-8746-fda25700e587",
                                "_id": "5e15afc399451118586c30f1",
                                "appName": "Payroll"
                    }
                ]
                };
            console.log(data.userApplication);
            let path = `/Home`;
            this.props.history.push(path);
        }
    }
    handleInputChange(event)
    {
       // console.log("name-----"+event.target.name,event.target.value);
        let Items = this.state.items;
        Items[event.target.name] = event.target.value;
        this.setState({items:Items});
    }
    validateForm() {
          let errors = {};
          const{items} = this.state;
          let formIsValid = true;
      
          if (!items["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter Email.";
          }
      
          if (typeof items["email"] !== "undefined") {
            if (!items["email"].match(/^((([a-zA-Z0-9]+[-._]*){0,2})[a-zA-Z0-9]+@[a-z0-9][a-z0-9-]*\.[a-z]+[[\.]?[a-z]+]*)$/)) {
                formIsValid = false;
              errors["email"] = "*Please enter valid Email ID.";
            }
          }

          if (!items["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter Password.";
          }

          this.setState({
            errors: errors
          });
          return formIsValid;
    }
    render(){
        return(
            // <div>
            //     <Button bsStyle="info"  fill  onClick={this.LoginFun}>
            //         Login
            //       </Button>
                  
                  
            // </div>
        <div className="App">
        
         <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <div className="panel-group" >
                        <div className="panel panel-default panelstyle2">
                        {/* <div className="panel-heading">Login</div> */}
                        <h3 className="titletxt labelcolor">LogIn</h3>
                            <div className="panel-body">
                                <div className="row">  
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="labelcolor">Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleInputChange} value={this.state.email}/>
                                            <div className="errorMsg">{this.state.errors.email}</div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="row">  
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="labelcolor">Password</label>
                                            <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleInputChange} value={this.state.password}/>
                                            <div className="errorMsg">{this.state.errors.password}</div>
                                        </div>
                                    </div> 
                                </div>
                                

                                {/* <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                    </div>
                                </div> */}

                                <br></br>

                                <div className="row"> 
                                    <div className="col-md-3"></div> 
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <button className="btn btn-block clr" onClick={this.LoginFun}>Submit</button>
                                        </div>
                                    </div> 
                                </div>

                                <p className="forgot-password text-right labelcolor">
                                    Forgot <a href="#">password?</a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        );
    }
}
export default LoginComp;

