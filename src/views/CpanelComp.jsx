import React, { Component } from "react";

// import emplogo from "../assets/img/personimg.png";
import emplogo from "../assets/img/employee.png";
import payrolllogo from "../assets/img/Payroll.jpg";
import salarylogo from "../assets/img/salarymaster.png";
import "../assets/css/custom_css.css"

class CpanelComp extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            logedInDetails: {},
            userApplications: {},
            hideitems:{}
        };
      //  this.LoginFun = this.LoginFun.bind(this);
      this.getUserData = this.getUserData.bind(this);
     // this.getUserData();
    }
    // LoginFun()
    // {
    //     let path = `/admin/employeeList`;
    //     this.props.history.push(path);
    // }

    componentDidMount()
    {
        this.getUserData(); 
    }

    getUserData(){
        console.log("inn");
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
                 },
                 {
                    "apiKey": "0583e0d9-0b99-4431-8746-fda25700e587",
                    "_id": "5e15afc399451118586c30f1",
                    "appName": "SalaryMaster"
                 }
                 
            ]
            };
       // this.setState({userApplications:data.userApplication});
       // console.log("data=",this.state.userApplications);

        let hideItems = {};
        //let mc = ["emplist","updateProBtn"];
        data.userApplication.map(data=>{
        hideItems[data.appName] = true;
        });
        this.setState({hideitems:hideItems});
    }

    render(){
        var {userApplications} = this.state;
        var Employee,Payroll,Salary;
        var classname="hidden";

    //    let objectLength = Object.keys(userApplications).length;
    //    console.log(userApplications,objectLength);
       
    //     if(objectLength!==0){
    //          userApplications.map(data=>{
    //             console.log(data.appName);
    //             if(data.appName==="Employee"){
    //                 Employee= <div className="item">
    //                     <a href="http://localhost:3001/admin/employeeList">
    //                     <img src={emplogo}  className="item" id="Employee" alt="employeelogo"/>
    //                     Employee
    //                     </a>
    //                 </div>
    //             }
    //             else if(data.appName==="Payroll"){
    //                 Payroll= <div className="item">
    //                     <a href="http://localhost:3001/admin/employeeList">
    //                     <img src={payrolllogo}  className="item" id="Payroll" alt="payrollogo"/>
    //                     Payroll
    //                     </a>
    //                 </div>
    //             }
    //             else if(data.appName==="Salary Master"){
    //                 Salary= <div className="item">
    //                     <a href="http://localhost:3001/admin/employeeList">
    //                     <img src={salarylogo}  className="item" id="Salary Master" alt="salarylogo"/>
    //                     Salary Master
    //                     </a>
    //                 </div>
    //             }
    //          })
    //     }
        
        return(
          
        <div className="App">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <div className="panel-group shad" >
                        <div className="panel panel-default panelstyle">
                        {/* <div className="panel-heading">cPanel</div> */}
                        <div className="panel-body">

                            <div className="panel panel-primary shad2">
                                <div className="panel-heading">Applications</div>
                                <div className="panel-body applyflex">
                                   
                                    {/* {Employee}
                                    {Payroll}
                                    {Salary} */}
                                    <div className={this.state.hideitems.Employee?"item":classname}>
                                        <a href="http://localhost:3001/admin/employeeList">
                                        <img src={emplogo}  className="item" alt="employeelogo"/>
                                        Employee
                                        </a>
                                    </div>
                                    <div className={this.state.hideitems.Payroll?"item":classname}>
                                        <a href="http://localhost:3001/admin/employeeList">
                                        <img src={payrolllogo}  className="item" alt="payrollogo"/>
                                        Payroll
                                        </a>
                                    </div>
                                    <div className={this.state.hideitems.SalaryMaster?"item":classname}>
                                        <a href="http://localhost:3001/admin/employeeList">
                                        <img src={salarylogo}  className="item" alt="salarylogo"/>
                                        Salary Master
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <br></br>

                             <div className="panel panel-primary shad2">
                                <div className="panel-heading">Databases</div>
                                <div className="panel-body applyflex">
                                    <div className="item">
                                        <a href="http://localhost:3001/admin/employeeList">
                                        <img src={emplogo}  className="item" alt="employeelogo"/>
                                        Employee
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="http://localhost:3001/admin/employeeList">
                                        <img src={emplogo}  className="item" alt="employeelogo"/>
                                        Payroll
                                        </a>
                                    </div>
                                </div>
                            </div> 
                            
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
export default CpanelComp;

