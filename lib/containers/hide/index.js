'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: The HidingContainer can only have a single child,
// due to React being unable to render an array of children
// without a wrapper

exports.default = _react2.default.createClass({
  displayName: 'hide',
  render: function render() {
    if (_lodash2.default.isBoolean(this.props.when)) {
      return this.props.when ? null : this.props.children;
    }
    if (_lodash2.default.isNumber(this.props.when)) {
      return this.props.when > 0 ? null : this.props.children;
    }
    if (_lodash2.default.isEmpty(this.props.when)) {
      return this.props.children;
    } else {
      return null;
    }
  }
});