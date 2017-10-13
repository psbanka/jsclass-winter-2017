import React, {Component} from 'react'

export default class SearchBar extends Component {
  render () {
    return (
      <div>
        <input
          id='product-filter'
          value={this.props.searchText}
          onChange={this.props.onSearchChange}
          type='test'
          placeholder='search'
        />
        <br/>
        <input
          checked={this.props.inStockOnlyCheck}
          onChange={this.props.onInStockOnlyCheckChange}
          id='instock'
          type='checkbox'
        />
        <label htmlFor='instock'>Only show products in stock</label>
      </div>
    )
  }
}
