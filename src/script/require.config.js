//配置模块
require.config({ 
    urlArgs: "version=1.0_" +Math.random(),
    //baseUrl:'https://cdnjs.cloudflare.com/ajax/libs/',//公有的路径
    paths:{
        'jqcookie':'./cookie',
        'jquery':'./jquery',
        'lazyload':'./jquery.lazyload'
    }
});


require(["jquery"], function ($) {
    var targetModule = $("#current-page").attr("target-module");
    //mod_index.js    mod_details.js
    if (targetModule) {//判断是否存在目标模块

        require([targetModule], function (targetModule) {//加载目标模块
          //全部统一调用init方法
          //也就是每个模块都暴露一个init方法用于事件监听，页面内容加载等
          targetModule.try();

        });
    }
});