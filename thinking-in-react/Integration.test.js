import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

/* globals beforeEach describe it expect */

describe('integration testing', () => {
  let app

  beforeEach(() => {
    app = mount(<App/>)
  })

  it('renders the right number of table rows when unfiltered', () => {
    const productRows = app.find('ProductRow')
    expect(productRows.length).toBe(6)
  })

  it('it has the right number of category rows', () => {
    const categoryRows = app.find('CategoryRow')
    expect(categoryRows.length).toBe(2)
  })

  it('properly colors items that are out of stock', () => {
    const productRows = app.find('ProductRow')
    productRows.forEach((productRow) => {
      // productRow.render().find('tr td:first-child')
      const isStocked = productRow.props().record.stocked
      const domElement = productRow.render().find('tr td:first-child')
      const style = domElement[0].attribs.style
      if (isStocked) {
        expect(style).toEqual('color: black;')
      } else {
        expect(style).toEqual('color: red;')
      }
    })
  })
})
