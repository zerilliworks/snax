import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

const isNotEmpty = _.negate(_.isEmpty)

const ErrorState = React.createClass({
  render() {
    if(isNotEmpty(this.props.children)) {
      return this.props.children
    }
    else {
      return (
        <div className={this.props.class}>
          <div className="header">
            {this.props.title}
          </div>
          <p>{this.props.text}</p>
        </div>
      )
    }
  }
})

ErrorState.defaultProps = {
  title: "Couldn't load content",
  text: "The server responded with an error, so this content could not be loaded right now.",
  class: "ui negative message"
}

export default ErrorState
