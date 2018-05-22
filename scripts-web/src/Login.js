/* eslint-disable */
import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
var apiBaseUrl = "http://localhost:8080/user/";

class Login extends Component {
  constructor(props) {
    super(props);
    var localloginComponent = [];
    localloginComponent.push(
      <MuiThemeProvider>
        <div>
          <TextField
            hintText="Enter your Email-Id"
            floatingLabelText="User Email-Id"
            onChange={(event, newValue) =>
              this.setState({ username: newValue })
            }
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })
            }
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={event => this.handleClick(event)}
          />
        </div>
      </MuiThemeProvider>
    );
    this.state = {
      username: "",
      password: "",
      menuValue: 1,
      loginComponent: localloginComponent,
      loginRole: "user"
    };
  }
  componentWillMount() {
    if (this.props.role != undefined) {
      if (this.props.role == "user") {
        var localloginComponent = [];
        localloginComponent.push(
          <MuiThemeProvider>
            <div>
              <TextField
                hintText="Enter your Email-Id"
                floatingLabelText="User Email-Id"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
        );
        this.setState({
          menuValue: 1,
          loginComponent: localloginComponent,
          loginRole: "user"
        });
      } else if (this.props.role == "editor") {
        var localloginComponent = [];
        localloginComponent.push(
          <MuiThemeProvider>
            <div>
              <TextField
                hintText="Enter your Email-Id"
                floatingLabelText="Editor Email-Id"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
        );
        this.setState({
          menuValue: 2,
          loginComponent: localloginComponent,
          loginRole: "editor"
        });
      }
    }
  }
  handleClick(event) {
    var self = this;
    var payload = {
      email_id: this.state.username,
      password: this.state.password,
      role: this.state.loginRole
    };
    axios
      .post(apiBaseUrl + "sign-in", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.success == true ) {
          console.log("Login successfull");
        } else if (response.data.success == false ) {
          console.log("Username password do not match");
          alert(response.data.success);
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  handleMenuChange(value) {
    console.log("menuvalue", value);
    var loginRole;
    if (value == 1) {
      var localloginComponent = [];
      loginRole = "user";
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Email-Id"
              floatingLabelText="User Email-Id"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      );
    } else if (value == 2) {
      var localloginComponent = [];
      loginRole = "editor";
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Email-Id"
              floatingLabelText="Editor Email-Id"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      );
    }
    this.setState({
      menuValue: value,
      loginComponent: localloginComponent,
      loginRole: loginRole
    });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title="Online Book Store" />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div>
            <p>Login as:</p>
            <DropDownMenu
              value={this.state.menuValue}
              onChange={(event, index, value) => this.handleMenuChange(value)}
            >
              <MenuItem value={1} primaryText="User" />
              <MenuItem value={2} primaryText="Editor" />
            </DropDownMenu>
          </div>
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Login;
