import React, { Component } from 'react'

export default class ProductRow extends Component {
  render () {
    let color = {color: 'black'}
    if (!this.props.record.stocked) {
      color = {color: 'red'}
    }
    const key = this.props.record.category + this.props.record.name
    return (
      <tr key={key}><td style={color}>{this.props.record.name}</td><td>{this.props.record.price}</td></tr>
    )
  }
}
