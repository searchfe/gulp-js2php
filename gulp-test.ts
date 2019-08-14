import * as gulp from 'gulp';
import {js2php, getUnescapePhp} from './src/index';

gulp.src(['./test/test.js'])
  .pipe(js2php())
  .pipe(gulp.dest('./test/dist'))
  .pipe(getUnescapePhp({path: './test/dist'}))