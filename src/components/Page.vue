<template>
  <div class="page">
    <div class="container">
      <!--<size-picker></size-picker>-->
      <color-picker></color-picker>
      <text-input></text-input>
      <badge-viewer></badge-viewer>
    </div>
  </div>
</template>

<script>
  import SizePicker from './SizePicker';
  import BadgeViewer from './BadgeViewer';
  import TextInput from './TextInput';
  import ColorPicker from './ColorPicker';

  export default {
    components: {
      ColorPicker,
      TextInput,
      BadgeViewer,
      SizePicker,
    },
    name: 'page',
  };
</script>
