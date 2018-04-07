<template>
  <div class="header">
    <div class="wrapper">
      <div class="avatar">
        <img :src="detail.avatar" alt="加载中...">
      </div>
      <div class="title">
        <span>{{detail.title}}</span>
      </div>
    </div>
    <div class="tab">
      <div class="tab-item line">
        <span class="tab-item-number">{{detail.purchasedCount}}</span>
        <span>已购</span>
      </div>
      <div class="tab-item">
        <span class="tab-item-number">{{detail.sectionCount}}</span>
        <span>课时</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      image: '',
      content: '<p>测试一下</p><br/><p>测试一下</p>'
    }
  },
  props: {
    detail: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    background-color: white
    .wrapper
      position: relative
      .avatar
        & > img
          width: 100%
          height: auto
      .title
        position: absolute
        bottom: 10px
        padding-left: 15px
        padding-right: 15px
        font-size: 20px
        letter-spacing: 2px
        color: white
    .tab
      display: flex
      align-items: center
      /*justify-content: center*/
      width: 100%
      height: 80px
      .tab-item
        flex: 1
        font-size: 14px
        letter-spacing: 2px
        text-align: center
        color: gray
        .tab-item-number
          font-weight: bold
          font-size: 18px
          color: black
          padding-bottom: 2px
        & > span
          display: block
      .line
        span
          border-right: 1px solid lightgray
</style>
