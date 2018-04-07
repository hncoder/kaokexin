<template>
    <div class="sections">
      <h1>课程内容</h1>
      <div class="sections-wrapper">
        <ul class="section-list">
          <li v-for="item in sections" :key="item.index" class="section-list-item">
            <div class="item-wrapper">
              <h1 class="title">{{item.title}}</h1>
              <div class="read">
                <p v-if="item.read>=100">已读完</p>
                <p v-else-if="item.read>0">已阅读{{item.read}}%</p>
              </div>
            </div>
            <div class="item-arrow"></div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'sections',
        props: {
          sections: {
            type: Array
          }

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .sections
    background-color: white
    padding: 1px 15px
    & > h1
      margin: 20px auto
      font-size: 18px
      font-weight: bold
      letter-spacing: 1px
    .section-list-item
      display: flex
      height: 60px
      align-items: center
      border-bottom: 1px solid rgba(246,246,246,0.7)
      .title
        letter-spacing: 2px
        margin-bottom: 8px
      .read
        font-size: 14px
        letter-spacing: 1px
</style>
