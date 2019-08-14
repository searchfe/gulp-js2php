## 使用方式

```bash
npm install --save-dev gulp-json2php
```

`gulpfile.js` 配置：

```javascript
const json2php = require('gulp-json2php').json2php;

gulp.src('./handle-map.json')
  .pipe(json2php({funName: 'polyfillMap'}))
  .pipe(gulp.dest('json2php'));
```
