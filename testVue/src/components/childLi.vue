<template>
  <li v-if='localItem.isChecked'>{{localItem}}</li>
</template>

<script>
  export default {
    name: "child-li",
    data() {
      return {
        localItem: this.item,
      }
    },
    props: ['item'],
    created() {
      console.log('----------create----------', this)
    },
    destoryed() {
      console.log('----------destoryed----------')
    }
  }
</script>

<style scoped>

</style>
