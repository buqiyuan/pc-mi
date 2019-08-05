<template>
  <div>
    <header class="header">
      <div class="container clearfix">
        <!--顶部导航条start-->
        <div class="top-bar">
          <ul>
            <li v-for="(item,index) in topBar" :key="index">
              <a :href="item.href">{{item.text}}</a>
              <span class="sep">|</span>
            </li>
          </ul>
          <div class="top-bar-cart">
            <a href="">购物车(0)</a>
            <div class="cart-menu">
            <span>
              购物车中还没商品，赶紧去选购吧！
            </span>
            </div>
          </div>
          <div class="top-bar-info">
            <a href="">登陆</a>
            <span class="sep">|</span>
            <a href="">注册</a><span class="sep">|</span>
            <a href="">消息通知</a>
          </div>
        </div>
        <!--顶部导航条end-->
      </div>
    </header>
    <nav>
      <!--头部导航start-->
      <div class="container">
        <div class="nav-bar">
          <div class="logo">
            <a href=""></a>
          </div>
          <ul class="header-bar clearfix">
            <li class="nav-category">
              <a href="">全部商品分类</a>
            </li>
            <li @mouseleave="hideNavMenu" v-for="(item,i) in headerBar" :key="i">
              <a @mouseover="showNavMenu(i)" :href="item.href">{{item.text}}</a>
            </li>
          </ul>
        </div>
        <div class="header-search">
          <form class="search-form">
            <input class="search-input" @focus="searchFocus" @blur="searchBlur" type="search">
            <input class="search-btn" value="" type="submit">
            <span class=" iconfont icon-search"></span>
            <div class="search-hot-words">
              <a>小米9</a>
              <a>小米9 SE</a>
            </div>
          </form>
        </div>
      </div>
      <!--头部导航end-->
      <!--侧边分类菜单start-->
      <div @mouseleave="hideNavMenu" ref="navMenu" class="nav-menu">
        <ul>
          <li v-for="(item,i) in navMenu" :key="i">
            <a :href="item.href">
              <img v-lazy="item.imgUrl" alt="">
              <p class="title">{{item.title}}</p>
              <p class="price">{{item.price}}</p>
              <div class="flags" v-show="item.flags">
                <div class="flag">
                  {{item.flags}}
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!--侧边分类菜单end-->
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        topBar: [],
        headerBar: [],
        navIndex: 0,
        navMenu: []
      }
    },
    created () {
      this.axios.get('/index').then(res => {
        if (res.data.status === 200) {
          this.topBar = res.data.data.topBar
          this.headerBar = res.data.data.headerBar
        } else {
          console.log('数据请求失败！请检查链接及参数是否有误')
        }
      })
    },
    methods: {
      showNavMenu (index) {//显示头部导航下拉列表
        this.navMenu = this.headerBar[index].navMenu
        if (this.navMenu.length > 0) {
          this.$refs.navMenu.style.height = '230px'
        } else {
          this.$refs.navMenu.style.height = '0'
        }
      },
      hideNavMenu (e) {//隐藏头部导航下拉列表
        if (e.relatedTarget.className.indexOf('header-bar') !== -1) return
        this.$refs.navMenu.style.height = '0'
      },
      searchFocus () {//搜索框聚焦
        document.querySelector('.search-form').style.borderColor = '#ff6700'
        document.querySelector('.search-input').style.borderRight = '1px solid #ff6700'
      },
      searchBlur () {//搜索框失去焦点
        document.querySelector('.search-form').style.borderColor = '#ccc'
        document.querySelector('.search-input').style.borderRight = '1px solid #ccc'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    background-color: black;

    a {
      color: #b0b0b0;
    }

    .top-bar {
      height: 40px;
      line-height: 40px;

      ul {
        float: left;

        li {
          float: left;

          .sep {
            margin: 0 5px;
          }

          &:last-of-type .sep {
            display: none;
          }
        }
      }
    }

    /*顶部topbar右边*/
    .top-bar-info {
      float: right;

      .sep {
        margin: 0 5px;
      }
    }

    /*购物车*/
    .top-bar-cart {
      position: relative;
      float: right;
      margin-left: 12px;

      a {
        display: inline-block;
        padding: 0 12px;
        background: #424242;
      }

      &:hover .cart-menu {
        display: block;
      }

      .cart-menu {
        position: absolute;
        top: 40px;
        right: 0;
        z-index: 31;
        width: 316px;
        text-align: center;
        background-color: white;
        padding: 20px 0;
        box-shadow: 0 2px 2px 2px rgba(0, 0, 0, .15);
        display: none;
      }
    }
  }

  nav {
    border-bottom: 1px solid #ccc;
    height: 100px;

    .container {
      height: 100%;
      overflow: hidden;
    }

    .nav-bar {
      position: relative;
      display: inline-block;
      height: 100%;
      padding-top: 21px;

      .logo {
        position: relative;
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6700;

        &:hover a:before {
          left: 100%;
        }

        &:hover a:after {
          left: 50%;
        }

        a {
          position: absolute;
          display: block;
          height: 100%;
          width: 200%;
          right: 0;
          top: 0;
          overflow: hidden;

          &:before,
          &:after {
            content: '';
            position: absolute;
            top: 0;
            width: 55px;
            height: 55px;
            transition: all .2s;
          }
        }

        a:before {
          left: 50%;
          background: url("https://s01.mifile.cn/i/mi-logo.png") no-repeat 50% 50%;
        }

        a:after {
          left: 0;
          background: url("https://s01.mifile.cn/i/mi-home.png") no-repeat 50% 50%;
        }
      }

      .header-bar {
        display: inline-block;
        height: 100%;
        margin-left: 120px;

        li {
          float: left;
          padding: 0 8px;

          a {
            padding: 3px;
            color: #333;
            font-size: 16px;
          }

          a:hover {
            color: #ff6700;
          }
        }
      }
    }

    .nav-menu {
      position: relative;
      z-index: 10000;
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: height .5s;
      background-color: white;
      box-shadow: 0 3px 4px rgba(0, 0, 0, .18);

      ul {
        display: flex;
        width: 100%;

        li {
          flex: 1;
          position: relative;
          padding-top: 30px;
          text-align: center;

          &:after {
            position: absolute;
            left: 0;
            top: 35px;
            z-index: 1;
            width: 1px;
            height: 100px;
            content: "";
            background-color: #e0e0e0;
          }

          a {
            display: inline-block;
            text-align: center;
            margin-top: 10px;

            img {
              width: 160px;
              height: 110px;
              margin: 10px 0;
            }

            .title {
              color: #333;
            }

            .price {
              color: #ff6700;
            }

            .flags {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;

              .flag {
                display: inline-block;
                padding: 2px 24px;
                border: 1px solid #ff6700;
                color: #ff6700;
              }
            }
          }
        }
      }
    }

    .header-search {
      float: right;
      margin-top: 26px;

      .search-form {
        display: flex;
        position: relative;
        width: 296px;
        height: 50px;
        border: 1px solid #ccc;
        box-sizing: border-box;

        input {
          border: none;
          background-color: transparent;
        }

        .search-input {
          flex: 5;
          padding-left: 5px;
          border-right: 1px solid #ccc;
        }

        .search-btn {
          flex: 1;

          &:hover {
            cursor: pointer;
          }
        }

        .icon-search {
          position: absolute;
          top: 50%;
          right: 12px;
          z-index: -99;
          font-size: 20px;
          transform: translateY(-50%);
        }

        .search-hot-words {
          position: absolute;
          top: 14px;
          right: 62px;
          z-index: 2;
          text-align: right;
            a{
              display: inline-block;
              padding: 0 5px;
              color: #999;
              background-color: #eee;
              margin-right: 5px;
              transition: all .2s;
              &:hover{
                color: white;
                background-color: #ff6700;
              }
          }
        }
      }
    }
  }
</style>
