var fs = require("fs");
var path = require("path");
var s=1;

module.exports.view = function(){
    let src = arguments[0];
    let mode = arguments[1];
    
    if(mode =="-t"){
        viewAsTree(src,"src",1);
    }
    else if(mode =="-f"){
        viewAsFlatFile(src);
    }
    else{
        console.log("Invalid Parameter");
    }
   

}

function viewAsTree(src,val,space){
    let ans = fs.lstatSync(src).isDirectory();
    if(ans == false){
        console.log(val);
    }
    else{
        console.log(val);
        let children = fs.readdirSync(src);
        s++;
        for(let i=0;i<children.length;i++){
            let v = path.join(src,children[i]);
            let a="";
            for(let k=0;k<space;k++){
                a+="-";
            }
            a+=children[i];
            viewAsTree(v,a,s);
        }
    }
}

function viewAsFlatFile(src){
    let ans = fs.lstatSync(src).isDirectory();
    if(ans == false){
        console.log(src);
    }
    else{
        console.log(src);
        let children = fs.readdirSync(src);
        s++;
        for(let i=0;i<children.length;i++){
            let v = path.join(src,children[i]);
            viewAsFlatFile(v);
        }
    }
}
