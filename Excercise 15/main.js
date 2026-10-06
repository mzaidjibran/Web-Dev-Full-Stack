import fs from "fs/promises";
import fsn from "fs"
import path from "path";

let basepath = "D:\\MY PROJECTS\\Web Dev Full Stack\\Excercise 15"
let files = await fs.readdir(basepath);

for (const item of files) {

    let ext = item.split(".")[item.split(".").length-1]
    if(ext != "js" && ext != "json" && item.split(".").length>1){

    if (fsn.existsSync(path.join(basepath,ext))){
        fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
    }
    else{
        fs.mkdir(ext)
        fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
    }
  }
}