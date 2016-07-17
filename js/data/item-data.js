/**
 * Created by huhai on 2016/7/16.
 */
define(function(){
   var dataArray;
    dataArray=[{
        itemName:"bjstdmngbgr02.thoughtworks.com",
        ip:"192.168.1.2",
        fileLocation:"/var/lib/cruise-agent",
        status:"idle",
        resources:["ubuntu","firefox3","core-duo","chrome","mysql"]
    },
        {
            itemName:"bjstdmngbgr03.thoughtworks.com",
            ip:"192.168.1.3",
            fileLocation:"/var/lib/cruise-agent",
            status:"building",
            resources:["ubuntu","firefox3","mysql","core-duo"]
        },
        {
            itemName:"bjstdmngbgr04.thoughtworks.com",
            ip:"192.168.1.4",
            fileLocation:"/var/lib/cruise-agent",
            status:"building",
            resources:["ubuntu","firefox3","mysql","core-duo"]
        },{
            itemName:"bjstdmngbgr05.thoughtworks.com",
            ip:"192.168.1.5",
            fileLocation:"/var/lib/cruise-agent",
            status:"idle",
            resources:[]
        }]

    return dataArray;
});

