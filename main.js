var fs = require('fs');
// var removeDir = function (url) {
//       if(fs.existsSync(url)){
//            if(fs.statSync(url).isFile()){
//                fs.unlinkSync(url);
//            }else {
//                try{
//                    fs.rmdirSync(url);
//                }catch(err) {
//                   fs.readdirSync(url).forEach(function (file){
//                       removeDir(url+'/'+file);
//                   });
//                   fs.rmdirSync(url);
//                }
//            }
//       }else {
//            fs.mkdirSync(url);
//            fs.readdirSync
//       }
// } 
// removeDir('./main');
// var remove = function (url) {
//     fs.exists(url,function (exist) {            
//               if(exist){
//                   fs.stat(url,function (err,st) {
//                      if(st.isFile()){
//                          fs.unlink(url,function (err) {
//                             if(err){
//                                 throw err;
//                             }
//                          });
//                      }else 
//                             fs.rmdir(url,function (err){
//                               if(err){
//                                   console.log('报错');
//                               }
//                             }); 
//                             fs.readdir(url,function (err, paths) {
//                                 if(paths.length===0){
//                                     fs.rmdir(url,function (err){
//                                         if(err){
//                                             throw err;
//                                         }
//                                     })
//                                 }else{
//                                paths.forEach(function (file){
//                                    console.log(file);
//                                         remove(url+'/'+file);
//                                 });
//                                  fs.rmdir(url+'/'+file,function (err) {
//                                       if(err) {
//                                           throw err;
//                                       }
//                                  }); 
//                              remove(url);
//                                 }
//                             });            
//                      })
                             
//               }else {
//               }
//        })
// }
// remove('./main');
var remove = function (url) {
    if(fs.existsSync(url)){
        if(fs.statSync(url).isFile()){
            fs.unlinkSync(url);
        }else {
            try{
                fs.rmdirSync(url);
            }catch(err){
                  fs.readdirSync(url).forEach(file =>{
                      remove(url+'/'+file);
                  });
                  fs.rmdirSync(url);
            }
        }
    }

}
remove('./main');