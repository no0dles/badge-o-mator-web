<template>
  <div class="page">
    <div class="container">
      <color-picker></color-picker>
      <text-input></text-input>
      <badge-viewer></badge-viewer>
    </div>
  </div>
</template>

<script>
  import BadgeViewer from './BadgeViewer';
  import TextInput from './TextInput';
  import ColorPicker from './ColorPicker';

  export default {
    components: {
      ColorPicker,
      TextInput,
      BadgeViewer,
    },
    name: 'page',
  };
</script>

<style scoped>
  .page {
    padding-bottom: 40px;
  }
</style>
