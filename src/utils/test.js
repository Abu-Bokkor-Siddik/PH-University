const adminPaths =[
    {
        name:'Dashboard',
        path:'admin/dashboard',
        element:'admin',
    },
    {
        name:'User Management',
        Children:[
            {
                name:'Create Admin',
                path:'admin/create-admin',
                element:"<CreateAdmin></CreateAdmin>",
            },
            {
                name:'Create Faculty',
                path:'admin/create-faculty',
                element:"<CreateFaculty></CreateFaculty>",
            },
            {
                name:'Create Student',
                path:'admin/create-student',
                element:"<CreateStudent></CreateStudent>",
            },
        ]
        
    }
    
]
// for side ber 
const newArray =adminPaths.reduce((acc,item)=>{
    if (item.path&&item.name) {
     acc.push({
         key:item.path,
         label:item.element,
     })
    }
 
    if (item.Children) {
     acc.push({
        key:item.name,
        label:item.name,
        children:item.Children.map(child=>({
            key:child.name,
            label:"navlink",
        }))
     })
    }
    return acc;
 },[])

console.log(newArray)



// for router 
// const adminRoutes =adminPaths.reduce((acc,item)=>{
//     if (item.path&&item.element) {
//      acc.push({
//          path:item.path,
//          element:item.element,
//      })
//     }
 
//     if (item.Children) {
//      item.Children.forEach((child)=>{
//          acc.push({
//              path:child.path,
//              element:child.element,
//          })
//      })
//     }
//     return acc;
//  },[])
// console.log(adminRoutes)