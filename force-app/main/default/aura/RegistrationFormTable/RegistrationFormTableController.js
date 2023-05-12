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
})
