<template>
  <div class="size-picker">
    <div v-for="s in sizes" class="size">
      <input :id="s.value" type="radio" name="size" v-model="size" :value="s.value">
      <label :for="s.value">{{s.label}}</label>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'size-picker',
    computed: {
      ...mapGetters([
        'sizes',
      ]),
      size: {
        get() {
          return this.$store.getters.size;
        },
        set(value) {
          this.$store.dispatch('setSize', value);
        },
      },
    },
  };
</script>

<style scoped>
  .size-picker {
    display: flex;
  }
  .size {
    margin: 0 20px;
  }
</style>
