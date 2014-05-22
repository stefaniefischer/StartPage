/*
Define an Application instance.

*/


Ext.application({
    name: "StartPage",
    models: ["DayData"],
    stores: ["DayData"],
    controllers: ["BtnHandler"],
    views: ["Main", "StartPageContent", "PeakFlow"], 
    
    requires: ['StartPage.util.LangEN'],

    launch: function(){
        var mainPage = {
            xtype: "mainpage"
        };

        var peakFlow = {
            xtype: "peakflow"
        }

        Ext.Viewport.add([mainPage, peakFlow]);
    }


});