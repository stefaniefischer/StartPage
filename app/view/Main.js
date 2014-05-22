Ext.define ("StartPage.view.Main", {
    extend: "Ext.Container",

    //with this Alias you can refer with xtype to this class (xtype: "mainpage")
    alias: "widget.mainpage",

    initialize: function(){
    	this.callParent(arguments);

    	var addActivityBtn = {
    		xtype: "button",
    		iconCls: "activityIcon",
    	};

    	var addActTestIconBtn = {
			xtype: "button",
			iconCls: 'actTestIcon',
		};
		
		var addPeakFlowIconBtn = {
			xtype: "button",
			iconCls: 'peakFlowIcon',
            handler: this.onNewPeakFlowTap,
            scope: this
		};

		var addMedicationIconBtn = {
			xtype: "button",
			iconCls: 'medicationIcon',
		};

		var addSymptomsIconBtn = {
			xtype: "button",
			iconCls: 'symptomsIcon',
		};



    	var bottomToolbar = {
    		xtype: "toolbar",
    		docked: "bottom",
    		

    		items: [
    			//{xtype: "spacer"}, 
    			addPeakFlowIconBtn,
    			addActivityBtn,
    			addMedicationIconBtn,
    			addSymptomsIconBtn,
    			addActTestIconBtn,
    			{xtype: "spacer"}
    		]

    	};

    	var topToolbar ={
    		xtype: "toolbar",
    		docked: "top",
            cls: "top-toolbar",
    		title: lang.START
    	};

    	var dayDateList = {
    		xtype: "startpagecontent",
    		store: Ext.getStore("DayData")
    	}


    	this.add([topToolbar, dayDateList, bottomToolbar]);
    },

    onNewPeakFlowTap: function(){
        console.log("bla newPeakFlow");
        this.fireEvent("newPeakFlow", this);
    }, 

    config:{
		layout:{
			type: 'fit'
		}
	}
});
