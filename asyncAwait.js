const datas=[
    {name:"ajay",course:"mca"},
    {name:"raj",course:"bca"}
]

function getData(){
    setTimeout(() => {
        datas.forEach((e,index)=>{
            console.log(e.name,index)
        })
    }, 1000);
}
function setdata(setparam) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            datas.push(setparam)
            // callback()
            res()?console.log("success"):rej()
            
        }, 2000);
    })
    
    // getData()
}
setdata({name:"raj",course:"12th"}).then(getData).catch(err=>{return console.log("not updated")})
// getData()
// function getData() {
//     setTimeout(() => {
//         let out=""
//         datas.forEach((data,index)=>{
//             console.log(data.name,index)
//         })
//     }, 1000);
// }
// function addData(setd){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//         // datas.push({name:"mohan",course:"BBA"})
//         datas.push(setd);
//         let status=false;
//         if(!status){
//             res();
//         }else{
//             rej("not executed")
//         }
//         }, 2000);
//     }) 
// }
// // addData({name:"mohan",course:"BBA"}).then(getData).catch(err=>console.log("Server Error"))
// async function start() {
//     await addData({name:"mohan",course:"BBA"}).catch(err=>console.log("error"))
//     getData()
// }
// start()