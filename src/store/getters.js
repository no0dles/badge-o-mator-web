export default {
  size: state => state.size,
  sizes: state => state.sizes,
  text1: state => state.text1,
  text2: state => state.text2,
  color: state => state.color,
  colors: state => state.colors,
  badgeUrls: state => state.sizes.map(size => `https://batchomator.kube.bertschi.io/api/badge/${size.value}/${state.color}/${state.text1}/${state.text2}`),
};
