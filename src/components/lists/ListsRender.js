import React from 'react';
import { Link } from 'react-router-dom';
import ListCard from './ListCard';
import Button from '../common/Button';

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
        <h1>My Lists</h1>
        <Link to='/addList'>
          <Button
            title='Create List'
            onClick={() => null}
            type='primary'
          />
        </Link>
      </div>
      {mapListItems()}
    </div>
  );
}

export default ListRender;
