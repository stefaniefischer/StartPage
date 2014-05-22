Ext.define("StartPage.store.DayData", {
	extend: "Ext.data.Store",
	config: {
		model: 'StartPage.model.DayData',

		data: [{
		            id: 1,
		            date: '27.03.14',
		            picture: '<img src="resources/icons/activities/leisure.png" /> <img src="resources/icons/activities/medication.png" />',
		            puffs: '3',
		            title: 'erster Eintrag'
	            }, {
	                id: 2,
	                date: '13.04.14',
	                picture: '<img src="resources/icons/activities/leisure.png" />',
	                title: 'zweiter Eintrag'
	            }, {
	                id: 3,
	                date: '01.05.14',
	                picture: '<img src="resources/icons/activities/leisure.png" /> <img src="resources/icons/activities/medication.png" /> <img src="resources/icons/activities/work.png" /> <img src="resources/icons/activities/other.png" />',
	                puffs: '1',
	                title: 'dritter Eintrag'
	            }, {
	                id: 4,
	                date: '13.04.14',
	                picture: '&nbsp',
	                puffs: '3',
	                title: 'zweiter Eintrag'
	            }, {
	                id: 5,
	                date: '01.05.14',
	                picture: '&nbsp',
	                puffs: '5',
	                title: 'dritter Eintrag'
	            }, {
	                id: 6,
	                date: '13.04.14',
	                picture: '<img src="resources/icons/activities/leisure.png" />',
	                title: 'zweiter Eintrag'
	            }, {
	                id: 7,
	                date: '01.05.14',
	                picture: '<img src="resources/icons/activities/leisure.png" />',
	                title: 'dritter Eintrag'
	            }, {
	                id: 8,
	                date: '13.04.14',
	                picture: '&nbsp',
	                puffs: '5',
	                title: 'zweiter Eintrag'
	            }, {
	                id: 9,
	                date: '01.05.14',
	                picture: '<img src="resources/icons/activities/leisure.png" />',
	                title: 'dritter Eintrag'
	            }, {
	                id: 10,
	                date: '13.04.14',
	                picture: '&nbsp',
	                puffs: '5',
	                title: 'zweiter Eintrag'
	            }, {
	                id: 11,
	                date: '01.05.14',
	                picture: '&nbsp',
	                title: 'dritter Eintrag'
	            }

	            ]
	}
});