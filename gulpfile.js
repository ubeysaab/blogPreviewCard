// import functions from gulp
const{src,dest,watch,series}  = require("gulp");



// gulpsass gonna return function that we need to invoke it and pass in our sass compiler , and all in "all this gonna return another function"  which we're calling `sass` in this file. we just need to invoke it later on to compile our sass  to css 


const sass = require('gulp-sass')(require('sass'));



function buildStyles(){
    // inside this function we need to
  //  1. take in a source sass file 
  // 2. compile it to css file 
  // 3. pipe it to some kind of destination folder 

  return src("./scss/**/*.scss").pipe(sass()).pipe(dest('./css'))
  //  ! doulbe astriks means any sub folders as well 
}

function wathcher() {
  // this function will actively watch our  source sass file and then when we make changes to that file and save them it's gonna automatically run `buildStyles` function 

  // watch take array of files as an argument, as a second argument it take a function that we wanna run when this files changes 
  watch(['./scss/**/*.scss'], buildStyles)
}


exports.default = series(buildStyles, wathcher)

