<template>
  <div class="text-input">
    <h2>Text</h2>
    <div class="inputs">
      <input name="text1" v-model="text1" maxlength="15" />
      <input name="text2" v-model="text2" maxlength="15" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'text-input',
    computed: {
      text1: {
        get() {
          return this.$store.getters.text1;
        },
        set(value) {
          this.$store.dispatch('setText1', value);
        },
      },
      text2: {
        get() {
          return this.$store.getters.text2;
        },
        set(value) {
          this.$store.dispatch('setText2', value);
        },
      },
    },
  };
</script>

<style scoped>
  .text-input {
    display: flex;
    flex-direction: column;
  }

  .inputs {
    display: flex;
    flex-wrap: wrap;
  }


  input {
    border: 0;
    background: #333;
    color: white;
    padding: 3px;
    text-align: center;
    font-size: 1.6em;
    outline: none;
    margin: 8px;
    flex-grow: 1;
    text-transform: uppercase;
    font-family: Monaco, monospace;
  }
</style>
