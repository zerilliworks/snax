import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

// NOTE: The HidingContainer can only have a single child,
// due to React being unable to render an array of children
// without a wrapper

export default React.createClass({
  render() {
    if(_.isBoolean(this.props.when)) {
      return this.props.when ? null : this.props.children
    }
    if(_.isNumber(this.props.when)) {
      return this.props.when > 0 ? null : this.props.children
    }
    if(_.isEmpty(this.props.when)) {
      return this.props.children
    }
    else {
      return null
    }
  }
})
