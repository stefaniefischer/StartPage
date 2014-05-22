Ext.define("StartPage.model.DayData", {
	extend: "Ext.data.Model",

	config:{
		idProperty: 'id',

		fields: [
			{ name: 'id', type: 'int'},
			{ name: 'date', type: 'string'},
			{ name: 'picture', type: 'string'},
			{ name: 'puffs', type: 'string'},
			{ name: 'title', type: 'string'}
		]
	}
	
});