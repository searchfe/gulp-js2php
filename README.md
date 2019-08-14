## 使用方式

```bash
npm install --save-dev gulp-js2php
```

`gulpfile.js` 配置：

```javascript
const js2php = require('gulp-js2php').js2php;
const getUnescapePhp = require('gulp-js2php').getUnescapePhp;

gulp.src(['./test/test.js'])
  .pipe(js2php())
  .pipe(gulp.dest('./test/dist'))
  .pipe(getUnescapePhp({path: './test/dist'}))

```

> ps: 由于是把js文件转换成php文件，是经过一定的编码，如果再php文件中想要使用转义后的js的内容，需要通过getUnescapePhp生成unescape.php的解码文件，进行解码；
getUnescapePhp中的需要传入产生unescape.php的目录
