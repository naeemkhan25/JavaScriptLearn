// function naem(Name) {
//     console.log(Name);
// }

// let khan = naem;

// khan('cars');
// naem("car");

// let khan= function( Name ) {
//     console.log(Name);
// }


// let car = khan;
// car("naeem");
// khan("car");

// let Name = (n,k) => console.log(n-k);


// Name('4',2);

// let age = prompt("Please send your age?",100);

// console.log(age);


// let Name = ['good','car','car','khn'];


// // Name['car'] = "khan";
// // console.log(Name);

// Name.forEach((value,index) => {
//     console.log(index);
// });


// let Name = {'good':'car','car':'khn'};

// let car = [];

// let name = typeof car;

// console.log(name);

// let car = (K,L) => {
//     return  {
//         'car':K,
//         'car':L
//     }

// }

// let car = car("car","khan");

//  console.log(car.car)

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

// let car = Name.SayHi();
// console.log(car);

// let name ={ "naem":"khan"};
// let khan ={"car":"car"};
// let car ={"khan":"khan"};

// Object.assign(name, khan, car);
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


// let arr2 = [
//     { id:1,name:'naeems'},
//     { id:2,name:'naeemt'},
//     { id:3,name:'naeeml'},
//     { id:5,name:'naeemk'},
// ];
// // let arr3 = [
// //     { id:1,name:'naeems'},
// //     { id:2,name:'naeemtf'},
// //     { id:3,name:'naeemlf'},
// //     { id:5,name:'naeemkf'},
// // ];

// // let arr4= arr2.concat(arr3);
// // console.log(arr4);

// // arr2.splice(-2,2);
// // console.log(arr2);

// let arr3= [
//     {
//         "color": "#49E670",
//         "desktop": "on",
//         "hoverText": "WhatsApp",
//         "icon": "",
//         "mobile": "on",
//         "name": "WhatsApp",
//         "value": ""
//     },
//     {
//         "color": "#1E88E5",
//         "desktop": "on",
//         "hoverText": "Facebook Messenger",
//         "icon": "",
//         "mobile": "on",
//         "name": "Facebook Messenger",
//         "value": ""
//     },
//     {
//         "color": "#1E88E5",
//         "desktop": "on",
//         "hoverText": "Facebook Messenger",
//         "icon": "",
//         "mobile": "on",
//         "name": "Facebook Messenger",
//         "value": "naeem"
//     }
// ];
// // // console.log(arr3);
// let naem =arr3.filter(el => el.value != '' );
// console.log(naem);
// if(arr3.filter(el => el.value != '' ).length) {
//      console.log('not empty');
//     }else {   
//     console.log('empty');
// }


// let arr = ['naeem','khan'];
// let [first,last] = "John Smith".split(' ');
// console.log(first);
// let [firstName, title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(title);
// "use strict";
// // car ="naeem";
// // var car;
// console.log(car);

// let name = 10;


// function Names() {
//      let name = 30;
// }
// Names();
// console.log(name);

// let x = 10+12+"naeem";

// console.log(x);

// //string all function
// let name = "naeemkfsklhfsdlkjfsdlhfsd";
// console.log(name.length);


// let ecaping_strig = "WPPOOL is one of the best";

// console.log(ecaping_strig);
// \"software\" \t company in\' \\the \v world
// let extract = ecaping_strig.slice(3,6)
// console.log(extract);

// let newString = "mfs".padStart(4,'n');
// let 

// console.log(ch);
// let splits = ecaping_strig.split(' ');

// console.log(splits);

// let arr = ['naeem','khan','pool']; 
// let are = [10,34,43,21,2];
// // let newA = JSON.stringify(arr);
// console.log(Array.isArray(arr));

// arr.push("plugins");
// // console.log(arr);
// arr.unshift("naeem");
// console.log(arr);
//  arr.splice(2,1,'naeem');
// console.log(arr);

// let newss  = arr.slice(1);
// console.log(arr);
// console.log(newss);
// console.log(arr.sort());
// console.log(are.sort((a,b)=>a-b));


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
        "value": "naeem"
    },
    {
        "color": "#1E88E5",
        "desktop": "on",
        "hoverText": "Facebook Messenger",
        "icon": "",
        "mobile": "on",
        "name": "Facebook Messenger",
        "value": "naeem"
    }
];
// let arr = [];
// let newArss = arr3.filter((Element,index,arr3)=>{
//     return Element.value;
// });

// console.log(newArss);

// let mapss = arr3.map((Element,index,arr)=>{
//    return Element.color;

// });
// console.log(mapss);
// console.log(arr3);

// let defaultDate = new Date();
// console.log(defaultDate);

// let names = [ 'naeem','Khan'];

// // for (let key in name ) {
// //     console.log(name[key]);
// // }
// for ( let x of names ) {
//     console.log(x);
// }


// try catch example 


try {
addEalert("name");
} catch( error) {
    console.log(error.message);
}