// function naem(Name) {
//     console.log(Name);
// }

// let khan = naem;

// khan('mows');
// naem("love");

// let khan= function( Name ) {
//     console.log(Name);
// }


// let mow = khan;
// mow("naeem");
// khan("love");

// let Name = (n,k) => console.log(n-k);


// Name('4',2);

// let age = prompt("Please send your age?",100);

// console.log(age);


// let Name = ['good','love','love','khn'];


// // Name['mow'] = "khan";
// // console.log(Name);

// Name.forEach((value,index) => {
//     console.log(index);
// });


// let Name = {'good':'love','love':'khn'};

// let mow = [];

// let name = typeof mow;

// console.log(name);

// let Love = (K,L) => {
//     return  {
//         'mow':K,
//         'love':L
//     }

// }

// let mow = Love("Mow","khan");

//  console.log(mow.mow)

// let Collection =  {
//     'age':"14",
//     'value':"23",
// };
// let exist = 'ages' in Collection;
// console.log(exist);
//in use for get key value in object;

// let Name = {
//     'name1':"naeem",
//     'khan':"Khan",
//     SayHi : function() {
//        function good(){
//         return this.khan
//        }
//        return good();   
//     }
// };

// // Name.SayHi =()=> {
// //     console.log(Name.khan);
// // }

// let Mow = Name.SayHi();
// console.log(Mow);

// let name ={ "naem":"khan"};
// let khan ={"mow":"mow"};
// let love ={"khan":"khan"};

// Object.assign(name, khan, love);
// console.log(name);


// function User( name ) {
//     this.name= name;
//     this.ValueReturn= function() {
//         return this.name+"add";
//     }
// }
// let NewUser = new User("car");
// let return_value = NewUser.ValueReturn();
// console.log(NewUser);

// let arr1 = ['naeem','khan','green'];

// let arr = arr1.splice(1,2,'learn','free');

// console.log(arr1);
// console.log(arr);

// delete arr1[1];
// console.log(arr1);

// let arr2 = [
//     { id:1,name:'naeems'},
//     { id:2,name:'naeemt'},
//     { id:3,name:'naeeml'},
//     { id:5,name:'naeemk'},
// ];
// let arr3 = [
//     { id:1,name:'naeems'},
//     { id:2,name:'naeemtf'},
//     { id:3,name:'naeemlf'},
//     { id:5,name:'naeemkf'},
// ];

// let newArr= [];
// let users = arr2.find((item,index,arr2)=>{
//     if(item.id>1) {
//         newArr[index]=item;
//     }
// })
// let removeEmpty = newArr.filter((el)=>{
//  return el != null;
// });
// console.log(removeEmpty);

//  let arrs1 = [
//       '','','naeem'
//  ];
//  var filtered = arrs1.find(el => el === '' ).length;
 
// console.log(filtered);

// //  if(arrs1.filter(el => el.value != '' ).length) {
// //     console.log('not empty');
// //  }else {
// //     console.log('empty');
// //  }


let arr2 = [
    { id:1,name:'naeems'},
    { id:2,name:'naeemt'},
    { id:3,name:'naeeml'},
    { id:5,name:'naeemk'},
];
// let arr3 = [
//     { id:1,name:'naeems'},
//     { id:2,name:'naeemtf'},
//     { id:3,name:'naeemlf'},
//     { id:5,name:'naeemkf'},
// ];

// let arr4= arr2.concat(arr3);
// console.log(arr4);

// arr2.splice(-2,2);
// console.log(arr2);

let arr3= [
    {
        "color": "#49E670",
        "desktop": "on",
        "hoverText": "WhatsApp",
        "icon": "",
        "mobile": "on",
        "name": "WhatsApp",
        "value": ""
    },
    {
        "color": "#1E88E5",
        "desktop": "on",
        "hoverText": "Facebook Messenger",
        "icon": "",
        "mobile": "on",
        "name": "Facebook Messenger",
        "value": ""
    },
    {
        "color": "#1E88E5",
        "desktop": "on",
        "hoverText": "Facebook Messenger",
        "icon": "",
        "mobile": "on",
        "name": "Facebook Messenger",
        "value": ""
    }
];
// console.log(arr3);
let naem =arr34.filter(el => el.value != '' );
if(arr3.filter(el => el.value != '' ).length) {
     console.log('not empty');
    }else {   
    console.log('empty');
}