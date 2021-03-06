import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {
  handleUsers = () => {
    return this.props.users.map((user, index) => {
      return <li key={index}>{user.userName}</li>
    })
  }

  render() {

    return (
      <div>
        <ul>
          {this.handleUsers()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?
