'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingState = exports.EmptyState = exports.PresentState = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _present_state = require('./present_state');

var _present_state2 = _interopRequireDefault(_present_state);

var _empty_state = require('./empty_state');

var _empty_state2 = _interopRequireDefault(_empty_state);

var _loading_state = require('./loading_state');

var _loading_state2 = _interopRequireDefault(_loading_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNotEmpty = _lodash2.default.negate(_lodash2.default.isEmpty);

var LoadingContainer = _react2.default.createClass({
  displayName: 'LoadingContainer',
  render: function render() {
    var emptyChild = (0, _lodash2.default)(_react2.default.Children.toArray(this.props.children)).filter(function (child) {
      return child.type.prototype == _empty_state2.default.prototype;
    }).first();
    var fullChild = (0, _lodash2.default)(_react2.default.Children.toArray(this.props.children)).filter(function (child) {
      return child.type.prototype == _present_state2.default.prototype;
    }).first();
    var loadingChild = (0, _lodash2.default)(_react2.default.Children.toArray(this.props.children)).filter(function (child) {
      return child.type.prototype == _loading_state2.default.prototype;
    }).first();

    var isLoading = (isNotEmpty(loadingChild) || this.props.useLoader) && (this.props.loading || _lodash2.default.isUndefined(this.props.content));

    var isEmpty = undefined;

    if (_lodash2.default.isBoolean(this.props.content)) {
      isEmpty = !this.props.content;
    } else {
      isEmpty = _lodash2.default.isEmpty(this.props.content);
    }

    if (isEmpty) {
      if (isLoading) {
        return loadingChild || _react2.default.createElement(_loading_state2.default, null);
      } else {
        return emptyChild;
      }
    } else if (isLoading) {
      return loadingChild || _react2.default.createElement(_loading_state2.default, null);
    } else {
      return fullChild;
    }
  }
});

LoadingContainer.defaultProps = {
  useLoader: false
};

var PresentState = exports.PresentState = _present_state2.default;
var EmptyState = exports.EmptyState = _empty_state2.default;
var LoadingState = exports.LoadingState = _loading_state2.default;

exports.default = LoadingContainer;