

> 使用gulp构建。stylus预处理、 bable es7,es6转es5、使用await、async接口请求封装

# run

```bash
yarn run start
```

# mp tools
编译后输出目录`dist`, 所以小程序开发工具指向的项目路径为 `mp-build/dist`

<br><br>

# 遇到的问题，使用gulp-clean插件清空dist文件报错。
解决方法
### gulp->tasks里新建clean任务

```javascript
var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config').clean;

gulp.task("clean", function(){
    return gulp.src(config.src)
        .pipe(clean());
})
```

### 同时在default任务序列里添加clean任务：
注意！下面这样是错误的：
因为这样写，这些任务是同步的，完全可能出现边编译边删除的情况

```javascript
gulp.task('default', ['clean', 'less', 'images', 'js', 'watch']);
```

所以需要配置一个异步，非常简单，加个回调: 
```javascript
var gulp = require('gulp');

gulp.task('default', ['clean'], function(){
    gulp.start('less', 'images', 'js', 'watch');
});
```




参考内容:
  https://www.cnblogs.com/1wen/p/4586198.html


<br>
<br>

# 组件编写
参考内容:
    https://github.com/TalkingData/iview-weapp

<br>
<br>

# ES7、ES6 转 ES5

<br>
<br>

