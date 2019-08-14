import * as gulp from 'gulp';
import {js2php, getUnescapePhp} from '../src/index';
import * as fs from 'fs';
import * as path from 'path';

gulp.src(['./test/test.js'])
  .pipe(js2php())
  .pipe(gulp.dest('./test/dist'))
  .pipe(getUnescapePhp({path: './test/dist'}))

describe('test gulp-js2php', () => {
    test('测试是否添加成功', () => {
        fs.readFile(path.resolve('./test/dist/unescape.php'), (err: any, file: any) => {
            if (err) {
              expect(file).toBeUndefined();
            }
            if (file) {
                const distContent = file.toString();
                expect(distContent.trim()).toMatch('<?php');
            }
        })
        
    });
});

describe('test getUnescapePhp', () => {
  test('测试是否生成解码的php文件', () => {
      fs.readFile(path.resolve('./test/dist/test.php'), (err: any, file: any) => {
          if (err) {
            expect(file).toBeUndefined();
          }
          if (file) {
              const distContent = file.toString();
              expect(distContent.trim()).toMatch('<?php');
          }
      })
      
  });
});