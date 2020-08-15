import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import selectUser from "./actions/userAction";

const UserList = (props) => {
  return (
    <div>
      <ul>
        {props.users.map((user) => {
          return (
            <li onClick={() => props.selectUser(user)} key={user._id}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { users: state.users };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
