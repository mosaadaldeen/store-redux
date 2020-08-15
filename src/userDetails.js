import React from "react";
import { connect } from "react-redux";

const UserDetails = (props) => {
  if (!props.activeUser) {
    return <div>Select a user</div>;
  }
  return (
    <div>
      <img src={props.activeUser.image} width="150px" alt="pic" />
      <h2>name: {props.activeUser.name}</h2>
      <h3>age:{props.activeUser.age}</h3>
      <p>description: {props.activeUser.description}</p>
    </div>
  );
};

function mapStateToProps(state) {
  return { activeUser: state.activeUser };
}

export default connect(mapStateToProps)(UserDetails);
