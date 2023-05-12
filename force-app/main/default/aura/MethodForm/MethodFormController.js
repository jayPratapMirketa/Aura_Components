({
    saveForm: function(component, event, helper) {
        let name = component.find("detail")[0].get("v.value");
        let email = component.find("detail")[1].get("v.value");
        let phone = component.find("detail")[2].get("v.value");
        let company = component.find("detail")[3].get("v.value");

        component.getEvent("saveFormData").setParams({
            "name": name,
            "email": email,
            "phone": phone,
            "company": company
        }).fire();
    }
})
