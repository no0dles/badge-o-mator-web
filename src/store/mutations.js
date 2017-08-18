import types from './mutation-types';

export default {
  [types.SET_SIZE](state, size) {
    state.size = size;
  },
  [types.SET_COLOR](state, color) {
    state.color = color;
  },
  [types.SET_TEXT1](state, text) {
    state.text1 = text;
  },
  [types.SET_TEXT2](state, text) {
    state.text2 = text;
  },
};
