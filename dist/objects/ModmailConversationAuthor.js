"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RedditContent = _interopRequireDefault(require("./RedditContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A class representing an author from a modmail conversation
 * <style> #ModmailConversationAuthor {display: none} </style>
 * @example
 *
 * // Get a Modmail Conversation author with a given ID
 * r.getNewModmailConversation('75hxt').getParticipant()
 * @extends RedditContent
 */
var ModmailConversationAuthor = class ModmailParticipant extends _RedditContent.default {
  constructor(options, r, hasFetched) {
    var _this;

    super(options, r, hasFetched);
    _this = this;
    options.recentComments = Object.keys(options.recentComments).map(function (commentId) {
      return _this._r._newObject('Comment', _objectSpread({
        name: commentId
      }, options.recentComments[commentId]));
    });
    options.recentPosts = Object.keys(options.recentPosts).map(function (postId) {
      return _this._r._newObject('Submission', _objectSpread({
        name: postId
      }, options.recentPosts[postId]));
    });
  }
  /**
   * @summary Gets information on a Reddit user for the given modmail.
   * @returns {RedditUser} An unfetched RedditUser object for the requested user
   * @example
   *
   * r.getNewModmailConversation('efy3lax').getParticipant().getUser()
   * // => RedditUser { name: 'not_an_aardvark' }
   * r.getNewModmailConversation('efy3lax').getParticipant().getUser().link_karma.then(console.log)
   * // => 6
   */


  getUser() {
    return this._r.getUser(this.name);
  }

};
var _default = ModmailConversationAuthor;
exports.default = _default;