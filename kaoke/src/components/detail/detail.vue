<template>
  <div class="detail">
    <v-header :detail="detail"></v-header>
    <htmlcontent class="description" :htmlText="detail.description"></htmlcontent>
    <sections :sections="detail.sections"></sections>
    <htmlcontent class="notice" :htmlText="detail.notice"></htmlcontent>
    <copyright></copyright>
    <div class="buybar-wrapper">
      <buybar></buybar>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/header'
import htmlcontent from 'components/htmlcontent/htmlcontent'
import sections from 'components/sections/sections'
import buybar from 'components/buybar/buybar'
import copyright from 'components/copyright/copyright'

export default {
  name: 'detail',
  components: {
    'v-header': header,
    htmlcontent,
    sections,
    buybar,
    copyright
  },
  data () {
    return {
      detail: {
        description: '',
        notice: ''
      }
    }
  },
  created () {
    this.$http.get('/api/detail').then(response => {
      console.log(response)
      let data = response.data
      if (data.errno === 0) {
        console.log(data.data)
        this.detail = data.data
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detail
    background-color: rgba(246,246,246,1.0)
    .description
    .notice
      background-color: white
      margin: 10px auto
    .buybar-wrapper
      position: fixed
      width: 100%
      bottom: 0px
</style>
