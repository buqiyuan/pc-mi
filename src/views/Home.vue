<template>
  <div>
    <header-nav></header-nav>
    <site-body></site-body>
    <site-footer></site-footer>
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
      bottomNav: 'recent'
    }
  }
}
</script>
