({
    init: function (cmp) 
        {
             cmp.set('v.Columns', 
                     [
                         {label: 'Name', fieldName: 'infoName', type: 'name'},
                         {label: 'Email', fieldName: 'infoEmail', type: 'email'},
                         {label: 'Phone', fieldName: 'infoPhone', type: 'tel'},
                         {label: 'Company', fieldName: 'infoCompany', type: 'text'},
                     ]);
        },
        
        // handleOnSave: function(component, event, helper) {
        //     let details = event.getParam('details');
        //     let items = component.get("v.tableItems");
        //     items.push({ id: items.length+1, infoName: details[0].get("v.value"), infoEmail: details[1].get("v.value"), infoPhone: details[2].get("v.value"), infoCompany: details[3].get("v.value") });
        //     component.set("v.tableItems", items);
        // },
    
        // handleSaveEvent: function(component, event, helper) {
        //     let saveEvent = component.getEvent("saveEvent");
        //     saveEvent.setParams({
        //         details: details
        //     });
        //     saveEvent.fire();
        // }

})
