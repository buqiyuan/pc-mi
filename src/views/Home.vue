<template>
  <div>
    <header-nav :homeData="homeData"></header-nav>
    <site-body :homeData="homeData"></site-body>
    <site-footer :homeData="homeData"></site-footer>
  </div>
</template>

<script>
import headerNav from '../components/HeaderNav'
import siteBody from '../components/SiteBody'
import siteFooter from '../components/SiteFooter'

export default {
  components: { headerNav ,siteBody,siteFooter},
  data () {
    return {
      bottomNav: 'recent',
      homeData: {}
    }
  },
  created () {
    this.axios.get('/index').then(res => {
      if (res.data.status === 200) {
        this.homeData = res.data.data
      } else {
        console.log('数据请求失败！请检查链接及参数是否有误')
      }
    })
  }
}
</script>
