Ext.define("StartPage.controller.BtnHandler", {
	extend: "Ext.app.Controller",

	config:{
		refs: {
			//look up the views by xtype
			main: "mainpage",
			startPageContent: "startpagecontent",
			peakFlow: "peakflow"
		},
		control: {
			main: {
				//commands fired by the notes list container
				newPeakFlow: "onNewPeakFlowCommand"
			},
			peakFlow:{
				backHomeCommand: "onBackHomeCommand"
			}
		}
	},

	
	slideLeftTransition: { type: 'slide', direction: 'left' },
	slideRightTransition: { type: 'slide', direction: 'right' },
	slideUpTransition: { type: 'slide', direction: 'up' },
	slideDownTransition: { type: 'slide', direction: 'down' },

	onNewPeakFlowCommand: function(){
		console.log("onNewPeakFlowCommand im Controller");
		Ext.Viewport.animateActiveItem(this.getPeakFlow(), this.slideUpTransition);
		console.log("onNewPeakFlowCommand im Controller unter viewport");


	},

	onBackHomeCommand: function(){
		console.log("onBackHomeCommand im Controller");
		Ext.Viewport.animateActiveItem(this.getMain(), this.slideDownTransition);


	},

	launch: function(){
		this.callParent();
		console.log("launch");
	}, 

	init: function(){
		this.callParent();
		console.log("initd");
	}
});