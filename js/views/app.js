/**
 * Created by huhai on 2016/7/14.
 */
define(['jquery',
    'backbone',
    'underscore',
    'text!../templates/app.html',
    '../collections/collection',
    '../data/item-data',
    '../views/list-solo'

], function ($, Backbone,_, homeTemplate,appCollection,initialData,listSolo) {

    var app=Backbone.View.extend({
        el:".app",

        initialize:function(){
            this.$el.html(_.template(homeTemplate));
            //初始化collection
            var itemsCollection=this.itemsCollection=new appCollection;
            //初始化监听
            this.listenTo(itemsCollection,"add",this.addOne)
            //初始化数据
            this.initialData()




        },
        initialData:function(){
            var _this=this;
            this.itemsCollection.fetch({
                success:function(collection, response){
                    if(response.length==0){
                        //没有从localstorage获取到数据，加载默认数据
                        initialData.map(function(obj){
                            _this.itemsCollection.create(obj)
                        })
                    }
                }
            })
        },
        events:{
            "click .nav li":"doNav",
            "click .categorys div":"doNav"
        },
        doNav:function(e){
            $(e.target).addClass("active").siblings().removeClass("active")

        },
        addOne:function(curModel){
            //将数据渲染出来
            var view =new listSolo({model:curModel});
            var itemHTML=view.render().el;
            this.$(".item_list").append(itemHTML);


    },
        showChange:function(model){
        console.log("检测到变化",model.toJSON())
    }


    })
    return app;
});