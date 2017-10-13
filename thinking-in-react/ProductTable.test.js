import React from 'react'
import ReactDOM from 'react-dom'
import ProductTable from './ProductTable'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

/* globals beforeEach describe it expect */

describe('integration testing', () => {
  let called
  let wrapper
  let checkboxState = false

  beforeEach(() => {
    // Note : this component expects category sorted.
    const data = [
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'}
    ]

    wrapper = shallow(
      <ProductTable
        data={data}
        inStockOnlyCheck={false}
        searchText={''}
      />
    )
  })

  it('renders the right number of ProductRows', () => {
    expect(wrapper.find('ProductRow').length).toBe(4)
  })

  it('renders the right number of CategoryRows', () => {
    expect(wrapper.find('CategoryRow').length).toBe(2)
  })

  it('renders the right number of ProductRows when filtering inStockOnly', () => {
    wrapper.setProps({inStockOnlyCheck: true})
    expect(wrapper.find('ProductRow').length).toBe(2)
  })

  it('renders the right number of ProductRows when filtering inStockOnly', () => {
    wrapper.setProps({searchText: 'ball'})
    expect(wrapper.find('ProductRow').length).toBe(2)
  })
})
