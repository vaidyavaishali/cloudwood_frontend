// ConnectedBedroom.js
import React from 'react';
import { connect } from 'react-redux';
import { toggleLight1, toggleLight2, toggleBoth } from './redux/actions/lightsActions';
import Bedroom from './Bedroom';

const mapStateToProps = (state) => ({
  lights: state.bedroom,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLight1: () => dispatch(toggleLight1()),
  toggleLight2: () => dispatch(toggleLight2()),
  toggleBoth: (status) => dispatch(toggleBoth(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bedroom);
