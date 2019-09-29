import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListCard from './ListCard';
import SubNav from '../common/SubNav';
import { actions as commonActions } from '../../modules/common/actions';

const dummyLists = [
  {
    id: 1,
    listName: 'Test List 1',
    items: [1,2,3,4],
    creationDate: '07/20/2019',
    lastEditedBy: 'Justus'
  },
  {
    id: 2,
    listName: 'Test List 2',
    items: [1],
    creationDate: '07/20/2019',
    lastEditedBy: 'Justus'
  },
  {
    id: 3,
    listName: 'Test List 3',
    items: [1,2,3,4,5,6,7],
    creationDate: '07/20/2019',
    lastEditedBy: 'You'
  }
];

const mapListItems = (props) => {
  return dummyLists.map(list => {
    return (
      <div key={list.id}>
        <ListCard 
          list={list}
          edit={() => props.push(`/edit-list/${list.id}`)}
        />
      </div>
    )
  })
}

const ListRender = (props) => {

  return (
    <div className="lists-container">
      <div>
        <SubNav 
          title='My Lists'
          add
          addType="list"
          addFunction={() => props.push('/add-list')}
        />
      </div>
      {mapListItems(props)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  testState: state.common.testState,
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      push,
      testAction: commonActions.test.request
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ListRender);
