var path = require("path");
var fs = require("fs");

let root = {
    isFile:false,
    name:"d10",
    children:[
        {
            isFile:false,
            name:"d20",
            children:[
                {
                    isFile:false,
                    name:"d40",
                    children:[]
                },
                {
                    isFile:true,
                    name:"f1.txt",
                    newName:"xyz"
                }
            ]
        },
        {
            isFile:false,
            name:"d30",
            children:[
                {
                    isFile:false,
                    name:"d50",
                    children:[]
                },
                {
                    isFile:true,
                    name:"f2.txt",
                    newName:"abc"
                }
            ]
        }
    ]
}

function treefyFolder(src,dest){


}