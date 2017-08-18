<template>
  <div class="color-picker">
    <h2>Color</h2>
    <div class="colors">
      <div v-for="c in colors" class="color"
           v-on:click="setColor(c)"
           v-bind:class="{'active': isActive(c)}">
        <div class="box"
             v-bind:style="{'background-color': c.backgroundColor1}">
        </div>
        <div class="box"
             v-bind:style="{'background-color': c.backgroundColor2}">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'color-picker',
    methods: {
      ...mapActions([
        'setColor',
      ]),
      isActive(color) {
        return this.$store.getters.color === color.id;
      },
    },
    computed: {
      ...mapGetters([
        'colors',
      ]),
    },
  };
</script>

<style scoped>
  .color-picker {
    display: flex;
    flex-direction: column;
  }

  .colors {
    display: flex;
    flex-wrap: wrap;
  }

  .color {
    display: flex;
    margin-bottom: 20px;
    opacity: 0.3;
    cursor: pointer;

    margin-left: 10px;
    margin-right: 10px;
  }

  .active {
    opacity: 1;
  }

  .box {
    height: 24px;
    width: 36px;
  }
</style>
