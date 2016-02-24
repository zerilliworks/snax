import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import PresentStateComponent from './present_state'
import EmptyStateComponent from './empty_state'
import LoadingStateComponent from './loading_state'

const isNotEmpty = _.negate(_.isEmpty)

const LoadingContainer = React.createClass({
  render() {
    const emptyChild = _(React.Children.toArray(this.props.children))
      .filter(child => child.type.prototype == EmptyStateComponent.prototype)
      .first()
    const fullChild = _(React.Children.toArray(this.props.children))
      .filter(child => child.type.prototype == PresentStateComponent.prototype)
      .first()
    const loadingChild = _(React.Children.toArray(this.props.children))
      .filter(child => child.type.prototype == LoadingStateComponent.prototype)
      .first()

    const isLoading = (isNotEmpty(loadingChild) || this.props.useLoader) && (this.props.loading || _.isUndefined(this.props.content))

    let isEmpty

    if(_.isBoolean(this.props.content)) {
      isEmpty = !this.props.content
    }
    else {
      isEmpty = _.isEmpty(this.props.content)
    }

    if(isEmpty) {
      if(isLoading) {
        return loadingChild || <LoadingStateComponent />
      }
      else {
        return emptyChild
      }
    }
    else if(isLoading) {
      return loadingChild || <LoadingStateComponent />
    }
    else {
      return fullChild
    }
  }
})

LoadingContainer.defaultProps = {
  useLoader: false
}

export const PresentState = PresentStateComponent
export const EmptyState = EmptyStateComponent
export const LoadingState = LoadingStateComponent

export default LoadingContainer