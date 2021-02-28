import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Button, Input, Label, FormGroup, Form } from "reactstrap";
// import PasswordIcon from "../images/password.png";
import axios from "axios";
import UrlEndPointGenerator from "../api_call/UrlEndPointGenerator";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitLogin = () => {
    let dataObject = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("​http://dev.rapptrlabs.com/Tests/scripts/user-login.php", {
        dataObject,
      })
      .then((success) => console.log(success))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <Container>
          <Form>
            <h1>Rapptr Labs</h1>
            <FormGroup>
              <Label>Email</Label>
              <Input
                placeholder="user@rapptrlabs.com​"
                name="email"
                onChange={this.handleChange}
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                placeholder="Must be at least 4 characters​"
                name="password"
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              color="primary"
              className="loginButton"
              onClick={this.submitLogin}
            >
              Login
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);
