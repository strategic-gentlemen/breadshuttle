import React, { useState } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from '../common/Input';
import SubNav from '../common/SubNav';
import Footer from '../common/Footer';

const AddList = (props) => {
  const [listTitle, titleChange] = useState('');

  return (
    <div className="lists-container">
      <SubNav 
        title="Create New List"
        backButton
        goBack={() => props.push('/')}
      />
      <label htmlFor='title'>Title</label>
      <Input
        id='title'
        onChange={titleChange}
        value={listTitle}
      />
      <Footer
        buttonTitle="Next"
      />
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   testState: state.common.testState,
// });

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      push,
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(AddList);