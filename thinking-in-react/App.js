import React, { Component } from 'react'
import './App.css'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

const compare = (recordA, recordB) => {
  if (recordA.category > recordB.category) {
    return -1
  }
  if (recordB.category > recordA.category) {
    return 1
  }
  // a must be equal to b
  return 0
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      inStockOnlyCheck: false,
      searchText: '',
      data: []
    }

    this.changeInStockOnlyCheck = this.changeInStockOnlyCheck.bind(this)
    this.changeSearchText = this.changeSearchText.bind(this)
  }

  componentWillMount () {
    this.setState({data: [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'}
    ].sort(compare)})
  }

  changeSearchText (e) {
    this.setState({searchText: e.target.value})
  }

  changeInStockOnlyCheck () {
    this.setState({inStockOnlyCheck: !this.state.inStockOnlyCheck})
  }

  render () {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchChange={this.changeSearchText}
          inStockOnlyCheck={this.state.inStockOnlyCheck}
          onInStockOnlyCheckChange={this.changeInStockOnlyCheck}
        />
        <ProductTable
          inStockOnlyCheck={this.state.inStockOnlyCheck}
          searchText={this.state.searchText}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default App
