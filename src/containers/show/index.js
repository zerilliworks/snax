import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

// NOTE: The HidingContainer can only have a single child,
// due to React being unable to render an array of children
// without a wrapper

export default React.createClass({
  render() {
    if(_.isBoolean(this.props.when)) {
      return this.props.when ? this.props.children : null
    }
    if(_.isNumber(this.props.when)) {
      return this.props.when > 0 ? this.props.children : null
    }
    if(_.isEmpty(this.props.when)) {
      return null
    }
    else {
      return this.props.children
    }
  }
})
