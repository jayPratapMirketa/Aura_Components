({
    // init: function (cmp, event, helper) 
    //     {
    //          cmp.set('v.Columns', 
    //                  [
    //                      {label: 'Name', fieldName: 'infoName', type: 'name'},
    //                      {label: 'Email', fieldName: 'infoEmail', type: 'email'},
    //                      {label: 'Phone', fieldName: 'infoPhone', type: 'tel'},
    //                      {label: 'Company', fieldName: 'infoCompany', type: 'text'},
    //                  ]);
    //     },

    onSave : function(component, event, helper) {
        helper.savehelperMethod(component);
    },
    
    // onAdd : function(component, event, helper) {
    //     helper.addHelperMethod(component);
    // },
    // onSubtract : function(component, event, helper){
    // helper.subtractHelperMethod(component);
    // },
    // onMultiply : function(component, event, helper){
    // helper.multiplyHelperMethod(component);
    // },
    // onDivide : function(component, event, helper){
    // helper.divideHelperMethod(component);
    // }
})