<template>
  <div>
    <div class="site-body container">
      <div class="site-carousel-container">
        <div class="site-category">
          <ul class="category-list">
            <li v-for="(item1,i) in categoryList" :key="i" class="category-item">
              <a href="javascript:void(0)">{{item1.title}}
                <span class="arrow"></span>
              </a>
              <div class="category-item-child">
                <div class="flex-box">
                  <ul v-for="(item2,index) in Math.ceil(item1.list.length/6)" :key="index">
                    <li v-for="(item3,i) in item1.list.slice(index*6,(index+1)*6)" :key="i" class="child-item">
                      <img v-lazy="item3.imgUrl" alt="">
                      <span>{{item3.text}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="carousel-wrapper" @mouseenter="stopCarousel" @mouseleave="beginCarousel">
          <div ref="carouselItem" class="carousel-item" v-for="(item,i) in carouselList" :key="i">
            <a href="javascript:void(0)">
              <img v-lazy="item" alt="">
            </a>
          </div>
          <div class="control-left-arrow" @click="switchCarousel(--carouselIndex)">
            <div class="arrow-left"></div>
          </div>
          <div class="control-right-arrow" @click="switchCarousel(++carouselIndex)">
            <div class="arrow-right"></div>
          </div>
          <div class="control-dots">
            <ul>
              <li ref="dots" @click="switchCarousel(i)" v-for="(item,i) in carouselList.length" :key="i"></li>
            </ul>
          </div>
        </div>
      </div>
      <!--轮播图底部广告start-->
      <div class="site-sub">
        <div class="sub-channel-list sub-item">
          <ul>
            <li>
              <p class="iconfont icon-history"></p>
              <p>小米秒杀</p>
            </li>
            <li>
              <p class="iconfont icon-liwu"></p>
              <p>企业团购</p>
            </li>
            <li>
              <p class="iconfont icon-fma"></p>
              <p>F码通道</p>
            </li>
            <li>
              <p class="iconfont icon-mifenqia"></p>
              <p>米粉卡</p>
            </li>
            <li>
              <p class="iconfont icon-yijiuhuanxin"></p>
              <p>以旧换新</p>
            </li>
            <li>
              <p class="iconfont icon-huafeichongzhi-copy"></p>
              <p>话费充值</p>
            </li>
          </ul>
        </div>
        <div class="promo-list sub-item">
          <img src="https://i1.mifile.cn/a4/xmad_1564584687704_fIYFd.jpg" alt="">
        </div>
        <div class="promo-list sub-item">
          <img src="https://i1.mifile.cn/a4/xmad_15632000838536_bfVMh.jpg" alt="">
        </div>
        <div class="promo-list sub-item">
          <img src="https://i1.mifile.cn/a4/xmad_15604776623629_bRHhl.jpg" alt="">
        </div>
      </div>
      <!--轮播图底部广告end-->
      <!--闪购部分start-->
      <div class="flash-purchase">
        <div class="title-box box-hd clearfix">
          <h2 class="title">小米闪购</h2>
          <div class="carousel-control">
            <a href="javascript:void(0)" @click="prevFlashPurchase" class="control-prev"></a>
            <a href="javascript:void(0)" @click="nextFlashPurchase" class="control-next has"></a>
          </div>
        </div>
        <div class="flex-box">
          <div class="flash-purchase-countdown item">
            <div class="flash-round">
              20:00场
            </div>
            <div class="flash-img">
              <img src="https://i1.mifile.cn/f/i/2018/mihome/flashpurchase.png" alt="">
            </div>
            <div class="flash-sub-desc">距离结束还有</div>
            <div class="countdown-box">
              <div ref="hour" class="time-box">01</div>
              <div class="time-colon">:</div>
              <div ref="minute" class="time-box">33</div>
              <div class="time-colon">:</div>
              <div ref="second" class="time-box">24</div>
            </div>
          </div>
          <div class="carousel-wrapper">
            <ul class="goods-list">
              <li v-for="(item,index) in flashPurchase" :key="index" class="item"
                  :style="{borderTop:`1px solid ${flashPurchaseColors[Math.floor(Math.random()*flashPurchaseColors.length)]}`}">
                <div class="goods-img">
                  <img v-lazy="item.imgUrl" alt="">
                </div>
                <p class="title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
                <p class="price">
                  <span>{{item.newPrice}}元</span>
                  <del>{{item.oldPrice}}</del>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="banner-box">
          <img src="https://i1.mifile.cn/a4/xmad_15645848093783_hFAUp.jpg" alt="">
        </div>
      </div>
      <!--闪购部分end-->
    </div>
    <div class="home-main">
      <div class="container">
        <!--商品列表start-->
        <div v-for="(item,i) in bannerItems" :key="i" class="home-brick-box">
          <!--板块标题部分start-->
          <div class="box-hd">
            <div class="clearfix">
              <h2 class="title">{{item.title}}</h2>
              <div class="more">
                <div v-if="Object.prototype.toString.call(item.more) == '[object String]'" class="more-link">
                  <a href="">{{item.more}}</a>
                </div>

                <ul v-if="Object.prototype.toString.call(item.more) == '[object Array]'" class="more-tabs clearfix">
                  <li @mouseenter="tabBrick(item.id,index)" v-for="(item1,index) in item.more" :key="index"
                      class="tab-item"
                      :class="{active:tabObj[item.id] == index}">
                    {{item1}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--板块标题部分end-->
          <!--板块商品列表部分start-->
          <div class="box-brick">
            <ul class="brick-promo-list">
              <li v-for="(item,i) in item.brickItemArr" :key="i" class="brick-item">
                <img v-lazy="item" alt="">
              </li>
            </ul>
            <ul v-show="tabObj[item.id] == index" v-for="(outerItem,index) in item.brickListArr" :key="index"
                class="brick-list">
              <template v-for="(item,i) in outerItem.itemArr">
                <li :key="i" class="brick-item">
                  <template v-if="outerItem.itemArr.length - 1 - i > 0 && i >= 7">
                    <ul class="more">
                      <template v-for="(item,j) in outerItem.itemArr.slice(i)">
                        <li v-if="item.figure" :key="j" class="flex-box brick-item">
                          <div class="figure-img flex-right">
                            <img v-lazy="item.figure" alt="">
                          </div>
                          <div class="flex-left">
                            <div class="title">{{item.title}}</div>
                            <div class="price">
                              {{item.price.now}}元
                              <del>{{item.price.old}}</del>
                            </div>
                          </div>
                        </li>
                        <li v-else class="figure-more brick-item">
                          <a href="">
                            <div class="left">
                              {{item.text}}
                              <p class="sub">{{item.sub}}</p>
                            </div>
                            <span class="iconfont icon-youjiantou"></span>
                          </a>
                        </li>
                      </template>
                    </ul>
                  </template>
                  <template v-else-if="i <= 7">
                    <div class="figure-img">
                      <img v-lazy="item.figure" alt="">
                    </div>
                    <div class="title">{{item.title}}</div>
                    <div class="desc">{{item.desc}}</div>
                    <div class="price">
                      <span class="now-price">{{item.price ? item.price.now : ''}}元</span>
                      <del class="old-price">{{item.price ? item.price.old : ''}}</del>
                    </div>
                    <div class="flag" :class="item.flag.style"
                         v-if="Object.prototype.toString.call(item.flag) == '[object Object]'">
                      {{item.flag.text}}
                    </div>
                    <template v-if="item.review">
                      <div class="review-box" v-if="item.review.text.trim() != ''">
                        <p class="review">{{item.review.text}}</p>
                        <p class="author">{{item.review.author}}</p>
                      </div>
                    </template>
                  </template>
                </li>
              </template>
            </ul>
          </div>
          <!--板块商品列表end-->
          <!--板块底部广告部分start-->
          <div class="home-banner-box">
            <img v-lazy="item.imgUrl" alt="">
          </div>
          <!--板块底部广告部分end-->
          <div>
          </div>
          <!---->
        </div>
        <!--商品列表end-->
        <!--推荐商品列表start-->
        <div class="recommend-box">
          <div class="box-hd">
            <h2 class="title">为您推荐</h2>
            <div class="control-area">
              <a class="control-prev" @click="switchRecommend('prev')" href="javascript:void(0)"></a>
              <a class="control-next has" @click="switchRecommend('next')" href="javascript:void(0)"></a>
            </div>
          </div>
          <div class="recommend-wrapper">
            <ul ref="recommedWrapper" class="recommend-carousel">
              <li class="recommend-carousel-item" v-for="(item,i) in recommendList" :key="i">
                <div class="img-box">
                  <img v-lazy="item.imgUrl" width="100%" alt="">
                </div>
                <p class="name">{{item.name}}</p>
                <p class="price">{{item.price}}</p>
                <p class="tips">{{item.tips}}</p>
                <p class="notice">{{item.notice}}</p>
              </li>
            </ul>
          </div>
        </div>
        <!--推荐商品列表end-->
        <!--内容列表start-->
        <div class="content-box">
          <div class="box-hd">
            <h2 class="title">内容</h2>
          </div>
          <div class="content-wrapper">
            <div v-for="(outerItem,i) in contentList" :key="i" class="content-list">
              <div class="title">{{outerItem.title}}</div>
              <ul ref="contentCarousel" class="content-carousel clearfix"
                  :style="{width:`${296 * outerItem.carouselArr.length}px`}">
                <li v-for="(item,i) in outerItem.carouselArr" :key="i" class="content-item">
                  <p class="name">{{item.name}}</p>
                  <p class="desc">{{item.desc}}</p>
                  <p class="price">{{item.price}}</p>
                  <div class="img-box">
                    <img :src="item.figure" alt="">
                  </div>
                </li>
              </ul>
              <div class="left-arrow"
                   @click="switchContentItem(i,parseInt($refs.contentIndicator[i].querySelector('li.active').dataset.index)-1)"></div>
              <div class="right-arrow"
                   @click="switchContentItem(i,parseInt($refs.contentIndicator[i].querySelector('li.active').dataset.index)+1)"></div>
              <ul ref="contentIndicator" class="indicator-area">
                <li v-for="(item,index) in outerItem.carouselArr.length" :key="index" :data-index="index"
                    @click="switchContentItem(i,index)"
                    :class="{active: contentIndicator[i] == index}">
                  <span class="dot"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--内容列表end-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SiteBody',
    props: {homeData:Object},
    data () {
      return {
        carouselIndex: 0,//轮播图项索引
        carouseTimer: null,//轮播图定时器
        categoryList: [],//左侧分类
        carouselList: [],//轮播图
        flashPurchase: [],//闪购商品
        recommendList: [],//推荐商品列表
        contentList: [],//内容列表
        flashPurchaseColors: ['#ffac13', '#e53935', '#83c44e', '#2196f3', '#00c0a5'],
        bannerItems: [],//所有banner的数据
        tabObj: {},
        contentIndicator: [],
      }
    },
    watch:{
      //监视父组件通过异步请求的数据
      homeData:function (val) {
        this.categoryList = val.category
        this.carouselList = val.carouselImg
        this.flashPurchase = val.flashPurchase
        this.bannerItems = val.bannerItems
        this.recommendList = val.recommendList
        this.contentList = val.contentList
        if (Object.keys(val).length  !== 0) {
          this.bannerItems.forEach(item => {
            // this.tabObj[item.id] = 0如果需要监听对象属性的变化需要用到this.$set
            this.$set(this.tabObj, item.id, 0)
          })
          this.contentList.forEach((item, i) => {
            this.$set(this.contentIndicator, i, 0)
          })
          this.$nextTick(() => {
            //默认显示
            this.switchCarousel(this.carouselIndex++)
            //开启自动轮播图
            this.autoCarousel()
            this.setBrickItemStyle()
          })
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        //开始闪购倒计时
        this.countDown()
      })
    },
    methods: {
      //点击轮播图指示器切换图片
      switchCarousel (index) {
        this.$nextTick(() => {
          let length = this.carouselList.length - 1
          if (index > length || Math.abs(index) > length) {
            index = this.carouselIndex = 0
          }
          if (index < 0) {
            index = length + index + 1
          }
          //获取所有的轮播图
          let items = this.$refs.carouselItem

          //获取所有的轮播图指示器
          let dots = this.$refs.dots
          //移除所有轮播图身上的状态类
          Array.from(items).forEach(item => {
            item.classList.remove('active')
          })
          //移除所有指示器的状态类
          ;[...dots].forEach(item => {
            item.classList.remove('active')
          })
          //给当前轮播图添加状态类
          dots[index].classList.add('active')
          items[index].classList.add('active')
          this.carouselIndex = index
        })
      },
      //自动轮播
      autoCarousel () {
        this.carouseTimer = setInterval(() => {
          this.switchCarousel(++this.carouselIndex)
        }, 3000)
      },
      //停止轮播
      stopCarousel () {
        clearInterval(this.carouseTimer)
      },
      //开始自动轮播
      beginCarousel () {
        this.autoCarousel()
      },
      //闪购倒计时
      countDown () {
        setInterval(() => {
          let hour = this.$refs.hour
          let minute = this.$refs.minute
          let second = this.$refs.second
          let h = parseInt(hour.innerText)
          let m = parseInt(minute.innerText)
          let s = parseInt(second.innerText)
          s--
          if (s <= 10) {
            s = s < 0 ? 60 : s
            second.innerText = s.toString().padStart(2, '0')
          } else {
            second.innerText = s
          }
          if (s === 0) {
            m--
            if (m <= 10) {
              m = m < 0 ? 60 : m
              minute.innerText = m.toString().padStart(2, '0')
            } else {
              minute.innerText = m
            }
          }

        }, 1000)
      },
      //切换到上一批闪购商品
      prevFlashPurchase () {
        let list = document.querySelector('.flash-purchase .goods-list')
        let items = document.querySelectorAll('.flash-purchase .goods-list .item')
        let controlPrev = document.querySelector('.flash-purchase .box-hd .control-prev')
        let controlNext = document.querySelector('.flash-purchase .box-hd .control-next')
        if (list.scrollLeft <= 0) {
          return
        }
        controlPrev.classList.add('has')
        controlNext.classList.add('has')
        let step = list.scrollWidth / items.length * 4
        let count = 20
        let timer = setInterval(() => {
          if (count - step > -20) {
            list.scrollLeft -= step - count
            if (list.scrollLeft <= count) {
              controlPrev.classList.remove('has')
            }
            clearInterval(timer)
          }
          list.scrollLeft -= 20
          count += 20
        }, 10)

      },
      //切换到下一批闪购商品
      nextFlashPurchase () {
        let list = document.querySelector('.flash-purchase .goods-list')
        let items = document.querySelectorAll('.flash-purchase .goods-list .item')
        let controlPrev = document.querySelector('.flash-purchase .box-hd .control-prev')
        let controlNext = document.querySelector('.flash-purchase .box-hd .control-next')
        let step = list.scrollWidth / items.length * 4
        // list.style.marginLeft = `-${step}px`
        if (list.scrollLeft >= list.scrollWidth - step) {
          return
        }
        let count = 20
        controlPrev.classList.add('has')
        controlNext.classList.add('has')
        let timer = setInterval(() => {
          if (count - step > -20) {
            list.scrollLeft += step - count
            if (list.scrollWidth - list.scrollLeft <= step + count) {
              controlNext.classList.remove('has')
            }
            clearInterval(timer)
          }
          list.scrollLeft += 20
          count += 20
        }, 10)
      },
      //切换tab brick商品
      tabBrick (id, index) {
        this.$set(this.tabObj, id, index)
      },
      //设置brick浏览更多的样式
      setBrickItemStyle () {
        ;[...document.querySelectorAll('.brick-list')].forEach(item => {
          let lis = item.querySelectorAll('li')
          lis.forEach(item => {
            item.querySelector('.more') ? item.querySelector('.more').parentElement.classList.add('no-transition') : ''
            if (item.childElementCount < 1) {
              item.parentElement.removeChild(item)
            }
          })
        })
        let recBox = this.$refs.recommedWrapper
        let recItems = this.$refs.recommedWrapper.querySelectorAll('li')
        let recItemWid = 0
        ;[...recItems].forEach(item => {
          recItemWid += item.offsetWidth + 14
        })
        recBox.style.width = recItemWid + 'px'
      },
      //  切换recommend推荐商品列表
      switchRecommend (direction) {
        //获取
        let recBox = this.$refs.recommedWrapper
        let left = parseInt(recBox.style.marginLeft || 0)
        let recItemWid = (this.$refs.recommedWrapper.querySelector('li').offsetWidth + 14) * 5
        //如果点击的上一页
        if (direction == 'prev') {
          if (left >= 0) return
          recBox.style.marginLeft = -(Math.abs(left) - recItemWid) + 'px'
          document.querySelector('.recommend-box .control-prev').classList.add('has')
          document.querySelector('.recommend-box .control-next').classList.add('has')
          if (Math.abs(left) <= recItemWid) document.querySelector('.recommend-box .control-prev').classList.remove('has')
        }
        //如果点击的是下一页
        if (direction == 'next') {
          let totalWid = parseInt(recBox.offsetWidth) - recItemWid
          if (Math.abs(left) >= totalWid) return
          recBox.style.marginLeft = -(recItemWid + Math.abs(left)) + 'px'
          document.querySelector('.recommend-box .control-prev').classList.add('has')
          document.querySelector('.recommend-box .control-next').classList.add('has')
          if (recBox.offsetWidth - Math.abs(parseInt(recBox.style.marginLeft)) <= recItemWid) {
            document.querySelector('.recommend-box .control-next').classList.remove('has')
          }
        }
      },
      //切换内容
      switchContentItem (i, index) {
        let carouseler = this.$refs.contentCarousel[i]
        let indicator = carouseler.parentElement.querySelectorAll('.indicator-area li')
        if (index >= indicator.length) {
          carouseler.parentElement.querySelector('.right-arrow').style.cursor = 'no-drop'
          return this.$set(this.contentIndicator, i, indicator.length - 1)
        } else if (index < 0) {
          carouseler.parentElement.querySelector('.left-arrow').style.cursor = 'no-drop'
          return this.$set(this.contentIndicator, i, 0)
        }
        carouseler.parentElement.querySelector('.left-arrow').style.cursor = 'pointer'
        carouseler.parentElement.querySelector('.right-arrow').style.cursor = 'pointer'
        //更新指示器数组以更新视图
        this.$set(this.contentIndicator, i, index)
        let step = carouseler.querySelector('.content-item').offsetWidth
        carouseler.style.marginLeft = `-${step * index}px`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .site-body {
    .site-carousel-container {
      position: relative;
      width: 100%;
      height: 460px;

      .site-category {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        width: 234px;
        height: 100%;
        color: white;
        background: rgba(0, 0, 0, 0.6);

        .category-list {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          box-sizing: border-box;
          padding: 16px 0;

          .category-item {
            flex: 1;

            &:hover a {
              background-color: #ff6700;
            }

            a {
              position: relative;
              display: flex;
              align-items: center;
              padding-left: 10px;
              width: 100%;
              height: 100%;
              color: white;
              font-size: 15px;
              box-sizing: border-box;

              .arrow {
                position: absolute;
                top: 50%;
                right: 20px;
                width: 8px;
                height: 8px;
                border-right: 2px solid #ddd;
                border-top: 2px solid #ddd;
                transform: translateY(-50%) rotate(45deg);
              }
            }


            &:hover .category-item-child {
              display: block;
            }

            .category-item-child {
              display: none;
              position: absolute;
              top: 0;
              left: 234px;
              height: 460px;
              background-color: white;
              color: #333;
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);

              .flex-box {
                display: flex;
                width: 100%;
                height: 100%;
                padding: 24px;

                ul {
                  flex: 1;

                  li {
                    width: 237px;
                    height: 76px;

                    &:hover {
                      cursor: pointer;
                      color: #ff6700;
                    }

                    img {
                      width: 40px;
                      height: 40px;
                      margin-right: 5px;
                    }
                  }
                }
              }
            }
          }
        }
      }

      /*轮播图start*/
      .carousel-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .carousel-item {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: all .5s;

          &.active {
            opacity: 1;
            z-index: 10;
          }

          a {
            display: block;

            img {
              max-width: 100%;
              height: auto;
            }
          }
        }

        .control-dots {
          position: absolute;
          bottom: 20px;
          right: 30px;
          z-index: 999;

          ul {
            display: flex;

            li {
              flex: 1;
              width: 6px;
              height: 6px;
              margin: 0 5px;
              border: 2px solid rgba(255, 255, 255, 0.3);
              border-radius: 50%;
              background-color: rgba(0, 0, 0, 0.4);

              &.active {
                background-color: rgba(255, 255, 255, 0.4);
                border-color: rgba(0, 0, 0, 0.4);
              }

              &:hover {
                cursor: pointer;
              }
            }
          }
        }

        /*轮播图左右箭头start*/
        .control-left-arrow,
        .control-right-arrow {
          position: absolute;
          top: 50%;
          width: 41px;
          height: 69px;
          transform: translateY(-50%);
          z-index: 12;
        }

        .control-left-arrow {
          left: 234px;

          &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, .4);
          }

          .arrow-left {
            transform: translate(-5px, -50%) rotate(-135deg)
          }
        }

        .arrow-left,
        .arrow-right {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          border-right: 2px solid #ccc;
          border-top: 2px solid #ccc;
        }

        .control-right-arrow {
          right: 0;

          &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, .4);
          }

          .arrow-right {
            transform: translate(-15px, -50%) rotate(45deg);
          }
        }

        /*轮播图左右箭头end*/
      }
    }

    .site-sub {
      display: flex;
      margin-top: 14px;

      .sub-item {
        flex: 1;
        margin-right: 12px;

        &:last-child {
          margin-right: 0;
        }
      }

      .sub-channel-list {
        background-color: #5f5750;

        ul {
          display: flex;
          width: 100%;
          height: 100%;
          flex-wrap: wrap;
          align-items: center;
          text-align: center;

          li {
            position: relative;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-top: 15px;
            width: 33.33%;
            height: 50%;
            box-sizing: border-box;
            color: rgba(255, 255, 255, 0.7);

            &:before {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 64px;
              height: 1px;
              background-color: #665e57;
            }

            &:after {
              content: '';
              position: absolute;
              top: 50%;
              right: 0;
              transform: translateY(-50%);
              height: 64px;
              width: 1px;
              background-color: #665e57;
            }

            p {
              flex: 1;

              &.iconfont {
                font-size: 20px;
              }
            }
          }
        }
      }

      .promo-list {
        img {
          max-width: 100%;
          height: auto;
        }
      }
    }

    /*小米闪购部分start*/
    .flash-purchase {
      margin-top: 20px;
      width: 100%;

      .banner-box {
        margin-top: 30px;

        img {
          max-width: 100%;
          height: auto;
        }
      }

      .title-box {
        height: 58px;
        line-height: 58px;

        .title {
          float: left;
          font-size: 22px;
          font-weight: 200;
        }

        .carousel-control {
          float: right;

          .control-prev,
          .control-next {
            position: relative;
            display: inline-block;
            width: 36px;
            height: 24px;
            border: 1px solid #ccc;
            background-color: white;
          }

          .control-prev {
            border-right: 0;

            &.has:before {
              border-color: #666;
            }

            &:before {
              content: '';
              position: absolute;
              top: 50%;
              left: 13px;
              width: 10px;
              height: 10px;
              border-top: 2px solid #ccc;
              border-right: 2px solid #ccc;
              transform: translateY(-50%) rotate(225deg);
            }
          }

          .control-next {
            &.has:before {
              border-color: #666;
            }

            &:before {
              content: '';
              position: absolute;
              top: 50%;
              left: 9px;
              width: 10px;
              height: 10px;
              border-top: 2px solid #ccc;
              border-right: 2px solid #ccc;
              transform: translateY(-50%) rotate(45deg);
            }
          }
        }
      }

      /*闪购倒计时*/
      .flex-box {
        display: flex;
        flex-direction: row;

        .item {
          flex-shrink: 0;
          width: 234px;
          height: 340px;
          padding-top: 40px;
          margin-right: 12px;
          background: rgba(0, 0, 0, 0.02);
        }

        .flash-purchase-countdown {
          background: #f1eded;
          text-align: center;
          border-top: 1px solid #e53935;

          .flash-round {
            color: #ef3a3b;
            font-size: 21px;
            padding-top: 15px;
          }

          .flash-img {
            margin: 20px;
          }

          .flash-sub-desc {
            color: rgba(0, 0, 0, 0.54);
            font-size: 15px;
          }

          .countdown-box {
            display: flex;
            margin-top: 38px;
            justify-content: center;
            font-size: 21px;

            .time-box {
              width: 46px;
              height: 46px;
              line-height: 46px;
              color: white;
              background-color: #404040;
            }

            .time-colon {
              line-height: 46px;
              margin: 0 3px;
            }
          }
        }

        .carousel-wrapper {
          overflow: hidden;

          .goods-list {
            display: flex;
            flex-direction: row;
            text-align: center;
            overflow-y: scroll;
            transition: all .5s;

            &::-webkit-scrollbar {
              width: 0px
            }

            .goods-img img {
              width: 160px;
              height: 160px;
            }

            .title {
              margin: 10px 20px 3px;
              font-size: 14px;
              font-weight: 400;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }

            .desc {
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 12px;
              color: #b0b0b0;
            }

            .price {
              margin-top: 16px;

              span {
                color: #ff6709;
              }

              del {
                margin-left: 10px;
                color: #b0b0b0;
              }
            }
          }
        }
      }
    }

    /*小米闪购部分end*/
  }

  /*页面主体部分start*/
  .home-main {
    margin-top: 40px;
    padding-bottom: 80px;
    background: #f5f5f5;

    .home-brick-box {
      display: flex;
      flex-direction: column;
      height: 882px;

      .home-banner-box {
        height: 120px;
        margin: 40px 0;

        &:hover {
          cursor: pointer;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      }

      .box-hd {
        height: 58px;
        line-height: 58px;

        .title {
          float: left;
          font-size: 22px;
          font-weight: 200;
        }

        .more {
          float: right;
          font-size: 16px;

          .more-link {

          }

          .more-tabs {

            li.tab-item {
              float: left;
              line-height: 26px;
              margin-top: 10px;
              margin-left: 22px;

              &:hover {
                cursor: pointer;
              }

              &.active {
                color: #ff6700;
                border-bottom: 1px solid #ff6700;
              }
            }
          }
        }
      }

      .box-brick {
        flex: auto;
        display: grid;
        grid-template-columns: 1fr 4fr;
        gap: 10px;

        img {
          max-width: 100%;
          height: auto;
        }

        .brick-item:hover {
          cursor: pointer;
          transform: translate3d(0, -2px, 0);
          box-shadow: 0 15px 30px rgba(0, 0, 0, .2);
        }

        .no-transition:hover {
          transform: none;
          box-shadow: none;
          transition: none;
        }

        .brick-promo-list {
          display: grid;
          gap: 10px;

          li.brick-item {
          }
        }

        .brick-list {
          position: relative;
          display: grid;
          height: 100%;
          grid-template-columns: repeat(4, minmax(auto, 234px));
          gap: 10px;

          li.brick-item {
            position: relative;
            text-align: center;
            background-color: white;
            transition: all .2s;

            .figure-img {
              margin: 20px 0;

              img {
                width: 160px;
                height: 160px;
              }
            }

            .title {
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              font-size: 14px;
              font-weight: 400;
              color: #333;
            }

            .desc {
              height: 20px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              font-size: 12px;
              color: #b0b0b0;
            }

            .price {
              margin-top: 10px;
              font-size: 13px;

              .now-price {
                color: #ff6700;
              }

              .old-price {
                margin-left: 6px;
                color: #ccc;
              }
            }

            .flag {
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              padding: 1px 12px;
              color: white;

              &.flag-new {
                background-color: #83c44e;
                z-index: 5;
              }

              &.flag-saleoff {
                background-color: #e53935;
              }
            }

            .more {
              display: flex;
              flex-direction: column;
              height: 100%;
              background-color: #f5f5f5;

              li {
                flex: 1;

                &.flex-box {
                  margin-bottom: 10px;
                  display: flex;
                  flex-direction: row-reverse;
                  align-items: center;
                  background-color: white;

                  .flex-left {
                    flex: 1;
                  }

                  .flex-right {
                    flex: 1;
                  }

                  .price {
                    color: #ff6700;
                  }
                }

                img {
                  width: 80px;
                  height: 80px;
                }
              }

              .figure-more {

                a {
                  position: relative;
                  display: flex;
                  flex: 1;
                  height: 100%;
                  align-items: center;
                  background-color: white;
                  font-size: 18px;

                  .icon-youjiantou {
                    flex: 1;
                    font-size: 42px;
                    color: #ff6700;
                  }

                  .left {
                    flex: 1;

                    .sub {
                      font-size: 12px;
                      color: #ccc;
                    }
                  }
                }
              }
            }

            .review-box {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 0;
              opacity: 0;
              color: white;
              padding: 8px 30px;
              box-sizing: border-box;
              background-color: #ff6700;
              overflow: hidden;
              transition: all .5s;

              .author {
                color: rgba(255, 255, 255, 0.6);
              }
            }

            &:hover .review-box {
              opacity: 1;
              height: 76px;
            }
          }
        }
      }
    }

    /*推荐商品部分start*/
    .recommend-box {
      width: 100%;

      .box-hd {
        display: flex;
        justify-content: space-between;

        .title {
          font-size: 22px;
          font-weight: 200;
        }

        .control-area {

          .control-prev,
          .control-next {
            position: relative;
            display: inline-block;
            width: 36px;
            height: 24px;
            background-color: transparent;
            border: 1px solid #e0e0e0;

            &.has {
              &:after {
                border-color: #666;
              }
            }
          }

          .control-prev {
            border-right: none;
          }

          .control-prev:after {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            top: 7px;
            left: 14px;
            border-top: 2px solid #ddd;
            border-right: 2px solid #ddd;
            transform: rotate(-135deg);
          }

          .control-next:after {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            top: 7px;
            right: 14px;
            border-top: 2px solid #ddd;
            border-right: 2px solid #ddd;
            transform: rotate(45deg);
          }
        }

      }

      .recommend-wrapper {
        height: 320px;
        width: 100%;
        overflow: hidden;

        .recommend-carousel {
          display: flex;
          height: 100%;
          flex-wrap: nowrap;
          transition: margin-left .3s ease-in;

          li.recommend-carousel-item {
            flex: none;
            width: 234px;
            margin-right: 14px;
            height: 300px;
            text-align: center;
            box-sizing: border-box;
            background-color: white;
            transition: all .2s;

            &:hover {
              transform: translate3d(0, -2px, 0);
              box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .1);
            }

            .img-box {
              padding-top: 40px;

              img {
                width: 140px;
                height: 140px;
              }
            }

            p {
              margin: 10px 0;
              font-size: 12px;

              &.name {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 14px;
              }

              &.price {
                color: #ff6700;
              }

              &.tips {
                color: #757575;
              }
            }
          }
        }
      }
    }

    /*推荐商品部分end*/
    /*内容模块start*/
    .content-box {

      .content-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .content-list {
          position: relative;
          width: 296px;
          padding-top: 45px;
          text-align: center;
          background-color: white;
          box-sizing: border-box;
          overflow: hidden;
          &:hover{
            cursor: pointer;
          }
          &:hover .left-arrow,
          &:hover .right-arrow {
            opacity: .3;
            z-index: 5;
          }

          .title {
            font-size: 16px;
            color: rgb(255, 172, 19);
            margin-bottom: 14px;
          }

          .content-carousel {
            transition: margin-left .3s;

            .content-item {
              float: left;
              width: 296px;
              height: 340px;

              .img-box {
                img {
                  width: 216px;
                  height: 154px;
                }
              }

              p {
                padding: 2px 18px;
              }

              .name {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 20px;
              }

              .desc {
                font-size: 10px;
                color: #aaa;
              }

              .price {
                margin: 35px 0 18px;
                font-size: 14px;
              }
            }
          }

          .left-arrow,
          .right-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 48px;
            z-index: -999;
            opacity: 0;
            transition: all .3s;
            background-color: rgba(0, 0, 0, .5);
            &:hover{
              opacity: 1;
            }
            &:before{
              content: '';
              position: absolute;
              top: 50%;
              width: 10px;
              height: 10px;
              border-top: 2px solid white;
              border-right: 2px solid white;
            }
          }

          .left-arrow {
            left: 0;
            &:before{
              left: 63%;
              transform: translate(-50%,-50%) rotate(-135deg);
            }
          }

          .right-arrow {
            right: 0;
            &:before{
              right: 10%;
              transform: translate(-50%,-50%) rotate(45deg);
            }
          }

          .indicator-area {
            position: absolute;
            left: 0;
            bottom: 10px;
            width: 100%;
            height: 30px;
            text-align: center;

            li {
              display: inline-block;
              width: 10px;
              height: 10px;
              padding: 10px;
              margin: 0 2px;

              span {
                display: inline-block;
                width: 5px;
                height: 5px;
                border-radius: 10px;
                background-color: #aaa;
                border: 2px solid white;
                transition: all .3s;
              }

              &.active span {
                background-color: transparent;
                border-color: #ff6700;
              }
            }
          }
        }
      }

    }

    /*内容模块end*/
  }

  /*页面主体部分end*/
</style>
