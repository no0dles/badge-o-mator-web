<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <h1>Badge-o-mator</h1>
      </div>
    </div>

    <page></page>
    <vue-up></vue-up>
  </div>
</template>

<script>
  import Page from './components/Page';

  export default {
    components: { Page },
    name: 'app',
  };
</script>

<style>
  html, body {
    background: #fff;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2 {
    margin-left: 8px;
  }

  .header {
    padding-top: 40px;
    padding-bottom: 10px;
    background: rgb(32, 160, 255);
    color: #fff;
    box-shadow: inset rgba(10, 10, 10, 0.1) 0px 2px 3px 0px;
  }

  .container {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 600px;
    width: calc(100% - 32px);
    margin-left: auto;
    margin-right: auto;
  }
</style>
