/**
 * Created by huhai on 2016/7/14.
 */
define(['jquery',
    'backbone',
    'underscore',
    'text!../templates/item-solo.html',
    '../collections/collection',

], function ($, Backbone,_, itemSoloTemplate,appCollection) {

    var item=Backbone.View.extend({
        className:"item-solo",
        template: _.template(itemSoloTemplate),
        initialize:function(){
            this.listenTo(this.model,"change",this.render)

        },
        events:{
            "click .delete-icon":"doDelete",
            'click .add-new-resource':"addNew",
            'click .add-button':"addItem",
            'click .close-button':"closePrompt"

        },
        doDelete:function(e){
            //获取即将删除的索引值
            var deleteIndex=parseInt($(e.target).attr("deleteIndex"));
            var modelData=this.model.toJSON();
            var resources=modelData.resources;
            var deleteEnd= _.without(resources,resources[deleteIndex]);
            this.model.save({resources:deleteEnd})
        },
        addNew:function(e){
            //隐藏所有其它的prompt
            $(".add-resource-prompt").hide();
            $(e.target).next(".add-resource-prompt").removeClass("hide").show();
        },
        closePrompt:function(e){
            $(e.target).parents(".add-resource-prompt").hide()
        },
        addItem:function(e){
            var _this=this;
            var parent=$(e.target).parents(".add-resource-prompt");
            var value=parent.find("#input-resources").val();
            if(value.length==0) return;

            //解析数据
            //可能有中文的逗号输入，提前处理为逗号
            value=value.replace(/，/g,',');
            var getArray= _.compact(value.split(","));
            var modelResources=this.model.get("resources");

            //合并2个array(合并加去重)
            var endArray= _.uniq(_.union(getArray,modelResources));
            this.model.save({resources:endArray},{
                success:function(){
                    parent.hide()
                }
            })


        },
        render:function(){
                var modelData=this.model.toJSON();
                var html= this.template(modelData);
                this.$el.html(html);
                return this;

            }


    })
    return item;
});