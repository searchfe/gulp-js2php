import * as gutil from 'gulp-util';
import * as through from 'through2';
import {File} from 'gulp-util';
import replaceExt = require('replace-ext');
import * as fs from 'fs';
import * as path from 'path';

const PluginError = gutil.PluginError;
const PLUGIN_NAME = 'gulp-js2php';

const isFileExisted = async (file: string) => {
  return await new Promise((resolve, reject) => {
      fs.access(file, (err) => {
          if (err) {
              reject({err});
          } else {
              resolve({success: true});
          }
      })
  })
}

const createFolder = (to: string) => {
  const sep = path.sep
  const folders = path.dirname(to).split(sep);
  let p = '';
  while (folders.length) {
      p += folders.shift() + sep;
      if (!fs.existsSync(p)) {
          fs.mkdirSync(p);
      }
  }
};

export function js2php() {
  return through.obj(function(file:File, enc, cb) {
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Stream not supported!'));
      return cb();
    }
  
    if (file.isBuffer()) {
      let contents = file.contents.toString();
      contents = escape(contents)
      let string = "<?php " + "\n"
      + "return " + "\"" + contents + "\";" + "\n"
      + "?>"
      file.contents = Buffer.from(string);
      file.path = replaceExt(file.path, '.php');
    }
    this.push(file);
    cb();
  })
}

export function getUnescapePhp(param: any) {
  return through.obj(function(file:File, enc, cb) {
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Stream not supported!'));
      return cb();
    }
  
    if (file.isBuffer()) {
      const unescape = `${param.path}/unescape.php`;
      isFileExisted(unescape).catch(() => {
        createFolder(unescape);
        const unescapeContents = `<?php
        function unescape($str) { 
          $ret = ''; 
          $len = strlen($str); 
        
          for ($i = 0; $i < $len; $i++) { 
            if ($str[$i] == '%' && $str[$i+1] == 'u') {
              $val = hexdec(substr($str, $i+2, 4)); 
              if ($val < 0x7f) $ret .= chr($val); 
              else if($val < 0x800) $ret .= chr(0xc0|($val>>6)).chr(0x80|($val&0x3f)); 
              else $ret .= chr(0xe0|($val>>12)).chr(0x80|(($val>>6)&0x3f)).chr(0x80|($val&0x3f)); 
              $i += 5; 
            } 
            else if ($str[$i] == '%') { 
              $ret .= urldecode(substr($str, $i, 3)); 
              $i += 2; 
            }
            else {
              $ret .= $str[$i];
            }
          } 
          return $ret; 
        } 
        return unescape;
        ?>`;
        fs.writeFile(unescape, unescapeContents, (res: any) => {
            res ? console.log('res', res) : null;
        });
      });
    }
    cb();
  })
}
