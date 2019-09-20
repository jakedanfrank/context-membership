import React from "react";
import { Form, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";

class AccountForm extends React.Component {
  state = { username: this.props.username, membershipLevel: this.props.membershipLevel, };

  handleChange = (event, { name, value }) => { this.setState({ [name]: value, });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateAccount(this.state);
  };

  render() {
    const { username, membershipLevel, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
        <Form.Button color="black">SAVE</Form.Button>
      </Form>
    )
  }
}

const membershipOptions = [
  { key: "f", text: "Free", value: "Free", },
  { key: "b", text: "Basic", value: "Basic", },
  { key: "s", text: "Student", value: "Student", },
  { key: "p", text: "Premium", value: "Premium", },
  { key: "v", text: "VIP", value: "VIP", },
];

const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <AccountForm
          { ...props }
          username={value.username}
          membershiplevel={value.membershipLevel}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
}

export default ConnectedAccountForm;