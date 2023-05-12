({
    onSave : function(component, event, helper) {
        let details = component.find('detail');
        let isFormValid = true;
        for(let i = 0; i < details.length; i++){
            if(!details[i].get('v.validity').valid){
                isFormValid = false;
                details[i].reportValidity();
                break;
            }
        }
        if(isFormValid) {
            let savedInfo = {
                "id": component.get("v.tableItems").length + 1,
                "infoName": details[0].get("v.value"),
                "infoEmail": details[1].get("v.value"),
                "infoPhone": details[2].get("v.value"),
                "infoCompany": details[3].get("v.value")
            };
            let saveEvent = component.getEvent("saveEvent");
            saveEvent.setParams({
                "savedInfo": savedInfo
            });
            saveEvent.fire();

            details[0].set("v.value", "");
            details[1].set("v.value", "");
            details[2].set("v.value", "");
            details[3].set("v.value", "");

        }
    }
})
