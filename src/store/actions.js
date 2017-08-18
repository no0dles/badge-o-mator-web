import types from './mutation-types';

export default {
  setSize({ commit }, size) {
    commit(types.SET_SIZE, size);
  },
  setColor({ commit }, color) {
    commit(types.SET_COLOR, color.id);
  },
  setText1({ commit }, text) {
    commit(types.SET_TEXT1, text);
  },
  setText2({ commit }, text) {
    commit(types.SET_TEXT2, text);
  },
};
