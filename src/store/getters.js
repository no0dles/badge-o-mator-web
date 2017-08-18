export default {
  size: state => state.size,
  sizes: state => state.sizes,
  text1: state => state.text1,
  text2: state => state.text2,
  color: state => state.color,
  colors: state => state.colors,
  urls: state => state.sizes.map((size) => {
    const url = `https://badgeomator.kube.bertschi.io/api/badge/${size.value}/${state.color}/${encodeURIComponent(state.text1)}/${encodeURIComponent(state.text2)}`;
    return {
      image: url,
      markdown: `[![badgeomator](${url})](https://badgeomator.kube.bertschi.io/)`,
    };
  }),
};
