({
    savehelperMethod : function(component) {
        // for showing error on first button click without interaction
        let detail = component.find("info");
        for(let i=0;i<detail.length;i++){
            if(!detail[i].get('v.validity').valid){
                detail[i].reportValidity();
            }
        }

        // Get the current table items from the component
        let items = component.get("v.tableItems");
        let information = component.find("info");
        // Get the name, email, phone, and company values from the component inputs
        let name = information[0].get("v.value"); 
        let email = information[1].get("v.value"); 
        let phone = information[2].get("v.value"); 
        let company = information[3].get("v.value"); 
        
        // Check that all the required values are present
        if (name && email && phone && company) {

            // If all the required values are present, add a new item to the items array with an ID
            // that is one more than the current length of the array
            items.push({ id: items.length+1, infoName: name, infoEmail: email, infoPhone: phone, infoCompany: company });
        }
        // Set the table items to the updated items array
        component.set("v.tableItems", items);

        // for clearing the fields
        information[0].set("v.value", "");
        information[1].set("v.value", "");
        information[2].set("v.value", "");
        information[3].set("v.value", "");

    },

    // addHelperMethod : function(component) {
    //     let getValue1 = component.find("firstValue");
    //     let getValue2 = component.find("secondValue");
    //     console.log(component.find("Email").get('v.value'))
    //     console.log(parseInt(getValue1.get('v.value', 10)) + parseInt(getValue2.get('v.value'), 10));
    // },
    // subtractHelperMethod: function(component){
    //     let getValue1 = component.find("firstValue");
    //     let getValue2 = component.find("secondValue");
    //     console.log(parseInt(getValue1.get('v.value', 10)) - parseInt(getValue2.get('v.value'), 10));
    // },
    // multiplyHelperMethod: function(component){
    //     let getValue1 = component.find("firstValue");
    //     let getValue2 = component.find("secondValue");
    //     console.log(parseInt(getValue1.get('v.value', 10)) * parseInt(getValue2.get('v.value'), 10));
    // },
    // divideHelperMethod: function(component){
    //     let getValue1 = component.find("firstValue");
    //     let getValue2 = component.find("secondValue");
    //     console.log(parseInt(getValue1.get('v.value', 10)) / parseInt(getValue2.get('v.value'), 10));
    // }
})