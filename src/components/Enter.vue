<template>
  <div class="Enter" v-cloak>
      hi
  </div>
</template>
<script>
    import Swiper from 'swiper';
    import countFunc from '@/mixins/count'

    export default {
        countFunc: [countFunc],
        name: 'Enter',
        components: {
        },
        data() {
            return {
            }
        },
        filters: {

        },
        created() {
        },
        mounted() {

        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  [v-cloak]{
    display:none;
  }

</style>
