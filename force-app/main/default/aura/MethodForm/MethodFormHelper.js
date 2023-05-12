({
    savehelperMethod : function(component) {
        // for showing error on first button click without interaction
        let details = component.find('detail');
        for(let i = 0; i < details.length; i++){
           if(!details[i].get('v.validity').valid){
                for(j = i; j < details.length; j++){
                    details[j].reportValidity();
                }
                return;
            }
        }
        // Get the current table items from the component
        let items = component.get("v.tableItems");
       
        //Add a new item to the items array with an ID
        // that is one more than the current length of the array
        items.push({ id: items.length+1, infoName: details[0].get("v.value"), infoEmail: details[1].get("v.value"), infoPhone: details[2].get("v.value"), infoCompany: details[3].get("v.value") });
        
        // Set the table items to the updated items array
        component.set("v.tableItems", items);
    
        // for clearing the fields
        // details[0].set("v.value", "");
        // details[1].set("v.value", "");
        // details[2].set("v.value", "");
        // details[3].set("v.value", "");            
    },

})
