<template>
    <div class="htmlcontent">
      <div class="html-wrapper" v-html="htmlText"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'htmlcontent',
        props: {
          htmlText: {
            type: String
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .htmlcontent
    padding: 1px 15px 1px 15px
</style>
