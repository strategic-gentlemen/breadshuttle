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
    listName: 'test1',
    items: [1,2,3,4],
    creationDate: '07/20/2019',
    lastEditedBy: 'Justus'
  },
  {
    id: 2,
    listName: 'test2',
    items: [1],
    creationDate: '07/20/2019',
    lastEditedBy: 'Justus'
  },
  {
    id: 3,
    listName: 'test3',
    items: [1,2,3,4,5,6,7],
    creationDate: '07/20/2019',
    lastEditedBy: 'You'
  }
];

const mapListItems = () => {
  return dummyLists.map(list => {
    return (
      <div key={list.id}>
        <ListCard 
          list={list}
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
          addFunction={() => props.push('/add-list')}
        />
        {/* <h1>My Lists</h1>
        <Link to='/addList'>
          <Button
            title='Create List'
            onClick={() => null}
            type='primary'
          />
        </Link> */}
      </div>
      {mapListItems()}
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
