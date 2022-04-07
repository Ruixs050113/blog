module.exports = {
  "title": "遇事不决 可问春风",
  "description": "我与春风皆过客，你携秋水揽星河，愿有岁月可回首，且以深情共白头",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于我",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": false,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "本人b站",
        "desc": "瞎搞",
        "logo": "/logo.png",
        "link": "https://b23.tv/w9XJXZr"
      },
      {
        "title": "大佬的blog",
        "desc": "vuepress_blog",
        "logo": "https://pan.zealsay.com/blog/logo.png",
        "link": "https://www.zealsay.com"
      },
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "logo": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "zealsay开发指南",
        "desc": "zealsay轻应用脚手架开发指南",
        "logo": "https://pic.zealsay.com/20190909225214850000000.jpg",
        "link": "https://docs.zealsay.com"
      }
    ],
    "valineConfig": {
      "appId": "xxx",// your appId
      "appKey": "xxx", // your appKey
      "avatar": "", //
      "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
      "requiredFields": ['nick', 'mail'], //设置必填项
    },
    "logo": "/logo.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "清澈",
    "authorAvatar": "/R1.png",
    "record": "你的备案号 ", //icp备案
    "startYear": "2020",
    "info": "入了深冬了，北风萧萧，我在风里站了很久，自是等不来了，也罢，路总是要有人先走的，大抵就到这里了",
    "socials":{
      "github" : "https://github.com/Ruixs050113", //github
      "gitlub" : false, //gitlub
      "gitee" : "https://gitee.com/Qingche_qwq", //gitee
      "jianshu" : "https://www.jianshu.com/u/e2d051b6d2e9", //简书
      "zhihu" : "https://www.zhihu.com/people/jiang-feng-mian-47-90", //知乎
      "toutiao" : false, //知乎
      "juejin": "https://juejin.im/user/2796746683716990", //掘金
      "segmentfault" : "https://segmentfault.com/u/zeal_5eecb699bdb08", //思否
      "csdn" : false, //CSDN
      "wechat" : "https://u.wechat.com/EO6W1MeydZ7gLCOBr67pZPM", //微信
      "qq" : "https://qm.qq.com/cgi-bin/qm/qr?k=ZnIw2h6tN-97Tvuyz04vGeVGpIoKSplD&noverify=0", //QQ
      "bilibili" :" https://b23.tv/w9XJXZr",
    },
    "mottos": [{
        "zh": "人生若只如初见，何事秋风悲画扇",
        "en": "If life is only like the first sight, what autumn wind and sorrow paint fan",
      },
      {
        "zh": "醉后不知天在水，满船清梦压星河",
        "en": "After getting drunk, I don't know that the sky is in the water, and the ship is full of dreams to suppress the galaxy",
      },
      {
        "zh": "相寻梦里路，飞雨落花中",
        "en": "Looking for the road in their dreams, flying rain falls in the flowers",
      },
      {
        "zh": "最是人间留不住，朱颜辞镜花辞树",
        "en": "The most is that the human world cannot be retained, zhu Yan resigns the mirror flower and the tree",
      },
      {
        "zh": "锦瑟无端五十弦，一弦一柱思华年",
        "en": "Jinser unprovoked fifty strings, one string and one pillar Sihua Nian",
      },
      {
        "zh": "我本将心向明月，奈何明月照沟渠",
        "en": "I would have turned my heart to the bright moon, but the bright moon shone in the ditch",
      },
      {
        "zh": "明月不暖九旧年事，春风无意问良辰",
        "en": "The bright moon does not warm the nine old years, and the spring wind has no intention of asking for a good day",
      },
    ],
    "covers": [
      '/R5.png',
      '/R6.png',
      '/R7.png',
      '/R8.png',
      '/R25.png',
      '/R13.png',
      '/R19.png'
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}