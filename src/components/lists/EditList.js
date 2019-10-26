import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SubNav from '../common/SubNav';
import SearchBar from '../common/SearchBar';
import Footer from '../common/Footer';
import ItemCard from './ItemCard';

const list = 
  {
    title: 'Test List',
    data: [{
        itemName: 'gala apples',
        qty: 3,
        costPerUnit: .99
      },
      {
        itemName: 'bananas',
        qty: 10,
        costPerUnit: .50
      },
      {
        itemName: 'filet mignon',
        qty: 2,
        costPerUnit: 15.00
      }
    ]
  }

const mapListItems = () => {
  return list.data.map(item => {
    return (
      <ItemCard
        itemName={item.itemName}
        qty={item.qty}
        cost={(item.qty * item.costPerUnit).toFixed(2)}
        key={item.itemName}
      />
    )
  })
}
const EditList = (props) => {
  return (
    <div>
      <SubNav 
        title={`${list.title} ${props.match.params.id}`}
        add
        addFunction={() => props.push(`/share-list/${props.match.params.id}`)}
        backButton
        goBack={() => props.push('/')}
      />
      <SearchBar />
      <Footer 
        buttonTitle="See Locations"
        onClick={() => null}
      />
      <div className="items-container">
        {mapListItems()}
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

export default connect(null, mapDispatchToProps)(EditList);