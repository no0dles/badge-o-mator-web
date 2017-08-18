<template>
  <div class="badge-viewer">
    <h2>Badges</h2>
    <div class="badges">
      <div v-for="url in badgeUrls" class="badge" v-on:click="copy(url)">
        <img alt="Badge" :src="url">
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'badge-viewer',
    computed: {
      ...mapGetters([
        'badgeUrls',
      ]),
    },
    methods: {
      copy() {
        this.$popup({
          message: 'copied',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: '#fff',
        });
      },
    },
  };
</script>

<style scoped>
  .badge-viewer {
    display: flex;
    flex-direction: column;
  }

  .badges {
    display: flex;
    flex-direction: column;
  }

  .badge {
    display: flex;
    align-content: center;
    margin-left: 8px;
    margin-bottom: 16px;
    cursor: pointer;
  }


  button {
    border: 0;
    background: #333;
    color: #fff;
    margin-left: 16px;
    cursor: pointer;
    outline: none;
  }

</style>
