import React from 'react';
import ListCard from './ListCard';

const dummyLists = [
  {
    id: 1,
    listName: 'test1',
  },
  {
    id: 2,
    listName: 'test2'
  },
  {
    id: 3,
    listName: 'test3'
  }
];

const ListRender = (props) => {
  const mapListItems = () => {
    return dummyLists.map(list => {
      return (
        <ListCard 
          listName={list.listName}
        />
      )
    })
  }

  return (
    <div className="lists-container">
      <h1>My Lists</h1>
      {mapListItems()}
    </div>
  );
}

export default ListRender;
