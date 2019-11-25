// var fs = require('fs');

// var copy = function (str1, str2) {
//    fs.mkdir(str2,function (err) {
//        if(err) {
//            throw err;
//        }
//        fs.readdir(str1,function (err, paths) {
//            if(err) {
//                throw err;
//            }
//            paths.forEach(function (file) {
//                fs.stat(str1+'/'+file,function (err,stats){
//                           if(stats.isFile()){
//                                fs.writeFile(str2+'/'+file,function (err,data) {
//                    if(err) {
//                        throw err;
//                    }


//                });
//                           }else {
//                               fs.mkdir(str2+'/'+file,function (err) {
//                                   if(err) {
//                                       throw err;
//                                   }
//                               });
                            
//                           }
//                });
//            });
//        });
//    });
// }
// copy('./main','./main2');


const fs = require('fs');
const path = require('path');
 function copy(src,dit,callback) {
      fs.readdir(src,function (err,paths){
          if(err) {
              throw err;
          }

          fs.exists(dit,function (exist){
              if(exist==false){
                  fs.mkdir(dit);
              }
          });
          paths.forEach(function (file) {
             const pathname = path.join(src,file);
             const distname = path.join(dit,file);
             fs.stat(pathname,function (err,st) {
                 if(st.isFile()){
                     callback && callback(pathname,distname,st.size);
                 }else {
                     copy(pathname,distname,callback);
                 }
             });
          });

      });
}
copy(path.join(__dirname,'src'),path.join(__dirname,'dit'),function(pathname,distname,size) {
     if(size / 1024 /1024 > 300) {
         const rs = fs.createReadStream(pathname);
         const ws = fs.createWriteStream(distname);
         rs.pipe(ws);
     }else {
        fs.writeFileSync(distname,fs.readFileSync(pathname));
     }
});