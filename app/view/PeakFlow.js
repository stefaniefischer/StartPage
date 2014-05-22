Ext.define("StartPage.view.PeakFlow", {
    extend: "Ext.form.Panel",
    requires: ["Ext.form.FieldSet", "Ext.MessageBox", "Ext.field.Slider"],



    alias: "widget.peakflow",
    config:{
        scrollable:'vertical'
    },
    initialize: function () {

        this.callParent(arguments);

        var cancelButton = {
            xtype: "button",
            cls: "green-button",
            text: "Cancel",
            handler: this.onCancelButtonTap,
            scope: this
        };

        var saveButton = {
            xtype: "button",
            cls: "green-button",
            text: "Save",
        };

        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            cls: "green-toolbar",
            title: "Enter Peak Flow",
            items: [
                cancelButton,
                { xtype: "spacer" },
                saveButton
            ]
        };
/*
        var sliderCaugh = {
            xtype: 'sliderfield',
            name: 'slider_caugh',
            minValue: 0,
            maxValue: 4,
            html: '<table width="100%" align="left"><tr><td width="25%">None</td><td width="50%" align="center">'+lang.SLIDER+'</td><td width="25%" align="right">Severe</td></tr></table>',
            cls: "purple-slider",
            label: "Caugh",
            labelAlign: 'top',
            labelCls: 'sliderLabel'
        };
*/
        var pfTextfield = {
            xtype: 'textfield',
            component: {
                xtype: 'input',
                type: 'tel'
            },
            name: 'pfvalue',
            labelAlign: 'top',
            label: 'Peak Flow Value',
            labelCls: 'pfLabel'
        };

        this.add([
            topToolbar,
            {   
                xtype: "fieldset",
                items: [pfTextfield]
            }
        ]);
    },

     onCancelButtonTap: function(){
        console.log("cancel command in pf view");
        this.fireEvent("backHomeCommand", this);
    },

});