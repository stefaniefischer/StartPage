Ext.define("StartPage.view.StartPageContent",{
	extend: "Ext.dataview.List",

	alias: "widget.startpagecontent",

	config:{
		loadingText: "Loading...",
		emptyText: '</pre><div class="notes-list-empty-text">No notes found.</div><pre>',


		//itemTpl: '</pre><div class="list-item-title">{date}</div><div class="list-item-narrative">{title}</div><pre>',

		itemTpl: '</pre><div class="whole"><div class="date-item">{date}</div><div class="activity-item">{picture}</div><div class="puff-item">{puffs}</div></div><pre>',
	}
});