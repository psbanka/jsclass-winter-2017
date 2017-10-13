import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

/* globals beforeEach describe it expect */

describe('integration testing', () => {
  let called
  let wrapper
  let checkboxState = false

  beforeEach(() => {
    wrapper = shallow(
      <SearchBar
        searchText=''
        onSearchChange={() => console.log('hello')}
        inStockOnlyCheck={checkboxState}
        onInStockOnlyCheckChange={() => {
          called = 1
        }}
      />
    )
  })

  it('when the checkbox is checked, onInStockOnlyCheckChange is called', () => {
    wrapper.find('#instock').simulate('change')
    expect(called).toBe(1)
  })

  it('properly checks the checkbox if inStockOnlyCheck is true', () => {
    wrapper = shallow(
      <SearchBar
        searchText=''
        onSearchChange={() => console.log('hello')}
        inStockOnlyCheck={true}
        onInStockOnlyCheckChange={() => {
          called = 1
        }}
      />
    )
    expect(wrapper.find('#instock').props().checked).toBe(true)
  })
})
