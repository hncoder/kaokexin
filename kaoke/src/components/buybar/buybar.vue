<template>
    <div class="buybar">
      <div class="buybar-item free-item"><div><span>免费试读</span></div></div>
      <div class="buybar-item buy-item"><div><span>特价购买￥19.99</span></div></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'buybar'
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .buybar
    display: flex
    width: 100%
    height: 49px
    border-top: 1px solid rgba(246,246,246,1.0)
    background-color: white
    text-align: center
    letter-spacing: 2px
    .buybar-item
      flex: 1
      display: flex
      height: 100%
      align-items: center
      justify-content: center
    .free-item
      background-color: white
      color: gray
    .buy-item
      background-color: rgba(38,161,65,1.0)
      font-weight: bold
      color: white

</style>
