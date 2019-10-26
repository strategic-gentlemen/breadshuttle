import React, { useState } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SubNav from '../common/SubNav';
import useToggle from '../../hooks/useToggle';

const sharedWith = [
  {
    id: 0,
    email: 'testEmail@gmail.com',
    permissions: 'read-only'
  },
  {
    id: 1,
    email: 'testEmail2@gmail.com',
    permissions: 'read-only'
  }
]


const ShareList = (props) => {
  const [showItem, toggleShowItem] = useToggle(false);
  const [currentId, setId] = useState(null);

  const handleExpand = (id) => {
    if (currentId === null || id === currentId) {
      toggleShowItem();
    }
    setId(id)
  }

  const getCollaborators = () => {
    return sharedWith.map(user => {
      return (
        <div className="user-card-container" key={user.id}>
          <div className={!showItem ? 'user-card' : 'user-card-expanded'} >
            <div className="email">
              {user.email}
              <i 
                className="fas fa-pen" 
                onClick={() => handleExpand(user.id)}
              />
            </div>
            {showItem && currentId === user.id &&
              <div className="settings">
                <h4>View Only</h4>
                <h4>Remove Collaborator</h4>
              </div>
            }
          </div>
        </div>
      )
    })
  }
  return (
    <div>
      <SubNav
        title="Share List"
        backButton
        goBack={() => props.push(`/edit-list/${props.match.params.id}`)}
      />
      <div className="lists-container">
        <div className="shared-with" >
          <p>Shared with:</p>
          {getCollaborators()}
        </div>
        <div className="add-collaborators">
          Add Collaborators
          <i className="fas fa-plus" />
        </div>
      </div>
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

export default connect(null, mapDispatchToProps)(ShareList);
