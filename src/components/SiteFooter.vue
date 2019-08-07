<template>
  <div class="footer-box">
    <footer class="container">
      <div class="footer-service">
        <ul class="service-list">
          <li class="service-item">预约维修服务</li>
          <li class="service-item">7天无理由退货</li>
          <li class="service-item">15天免费换货</li>
          <li class="service-item">满150元包邮</li>
          <li class="service-item">520余家售后网点</li>
        </ul>
      </div>
      <div class="footer-links">
        <dl v-for="(outerItem,i) in footerLinks" :key="i">
          <dt>{{outerItem.dt}}</dt>
          <dd v-for="(item,i) in outerItem.dds" :key="i">
            {{item}}
          </dd>
        </dl>
        <div class="col-contact">
          <div class="phone">400-100-5678</div>
          <p>
            周一至周日 8:00-18:00<br>
            （仅收市话费）
          </p>
          <a class="staff-service" href="">
            人工客服
          </a>
        </div>
      </div>
      <div class="site-info">
        <div class="logo">
          <img src="https://s01.mifile.cn/i/logo-footer.png?v2" alt="">
        </div>
        <div class="info-text">
          <p class="sites">
            小米商城|MIUI|米家|米聊|多看|游戏|路由器|米粉卡|政企服务|小米天猫店|隐私政策|商城用户协议|账号协议|问题反馈|廉正举报|诚信合规|Select Region
          </p>
          <p>
            © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号
            （京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告
            增值电信业务许可证 网络食品经营备案（京）【2018】WLSPJYBAHF-12 食品经营许可证
            违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
          </p>
        </div>
        <div class="info-links">
          <img src="https://i1.mifile.cn/f/i/17/site/truste.png" alt="">
          <img src="https://s01.mifile.cn/i/v-logo-2.png" alt="">
          <img src="https://s01.mifile.cn/i/v-logo-1.png" alt="">
          <img src="https://s01.mifile.cn/i/v-logo-3.png" alt="">
          <img src="https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png" alt="">
        </div>
        <div class="slogan">
          <img src="https://s01.mifile.cn/i/slogan2016.png" alt="">
        </div>
      </div>
    </footer>
    <a href="#" class="back-top">
      <img class="original-img" src="//i1.mifile.cn/f/i/2018/home/totop.png">
      <img class="hover-img" src="//i1.mifile.cn/f/i/2018/home/totop_hover.png">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    props:{homeData:Object},
    data () {
      return {
        footerLinks: []
      }
    },
    watch:{
      //监视父组件通过异步请求的数据
      homeData:function (val) {
        this.footerLinks = val.footerLinks
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer-box {
    padding-bottom: 40px;
    width: 100%;
    background-color: white;

    .footer-service {
      width: 100%;
      padding: 27px 0;
      border-bottom: 1px solid #ddd;

      .service-list {
        display: flex;
        font-size: 16px;
        text-align: center;

        .service-item {
          flex: 1;
          border-right: 1px solid #ddd;
          &:last-of-type{
            border-right: 0;
          }
        }
      }
    }

    .footer-links {
      display: flex;
      padding: 40px 0;
      flex-direction: row;

      dl {
        flex: 1;
        display: flex;
        flex-direction: column;

        dt {
          flex: 2;
          font-size: 14px;
        }

        dd {
          flex: 1;
        }

        &:last-of-type {
          border-right: 1px solid #bbb;
        }
      }

      .col-contact {
        width: 245px;
        height: 112px;
        text-align: center;

        .phone {
          margin: 0 0 5px;
          font-size: 22px;
          line-height: 1;
          color: #ff6700;
        }

        .staff-service {
          display: inline-block;
          margin-top: 20px;
          padding: 5px 14px;
          color: #ff6700;
          border: 1px solid #ff6700;
        }
      }
    }

    .site-info {
      .logo {
        display: inline-block;
        vertical-align: top;
      }

      .info-text {
        width: 75%;
        display: inline-block;
        vertical-align: top;
      }

      .info-links {
        img {
          width: auto;
          height: 28px;
          margin-left: 0px;
          margin-bottom: 15px;
        }
      }

      .slogan {
        width: 100%;
        height: 20px;
        margin-top: 30px;
        text-align: center;
      }
    }

    .back-top {
      position: fixed;
      bottom: 40px;
      right: 0;
      width: 30px;
      height: 30px;
      padding: 20px;
      border-radius: 50%;
      margin: 0 0 0 27px;
      border: 1px solid #ddd;
      background-color: white;
      &:hover{
        cursor: pointer;
      }

      img {
        max-width: 100%;
      }

      .hover-img {
        display: none;
      }

      &:hover .original-img {
        display: none;
      }

      &:hover .hover-img {
        display: block;
      }
    }
  }
</style>
