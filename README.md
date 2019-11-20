# pitools-template-vue
It is based on the framework of Vue version 2.6.10. After the project manager Shino IMI arranges the configuration and packages, the configuration time is reduced and the project development is directly started.


### 项目包说明

```
1. 在目录 public 下新增子目录 mock，方便获取访问本地 json 数据(本地 mock 数据)
2. 在目录 assets 下新增子目录 css，用于存放 css 文件，并在子目录新建公共样式文件 main.css 
3. 在目录 assets 下新增子目录 image，用于存放图片文件，并在子目录 image 下新增子级目录 error，存放有各种请求状态的处理的图片
4. 已安装 axios 模块。在目录 src 下新增子目录 interface，并在子目录新增子级目录 api (API访问统一出口)，request (封装 axios 的实例)，utils (个人编辑插件)
5. 在目录 src 下新增子目录 pages，用于存放页面组件，有区别于目录 components 存放的组件
6. 已安装 vue-router 模块。在目录 src 下新增子目录 router，并分模块配置路由。
7. 已安装 Vuex 模块。在目录 src 下新增目录 store，并分模块配置仓库 (状态管理模式)。
```

```
已安装模块:
1. axios 模块
2. qs 模块
3. vue-router 模块
4. Vuex 模块
5. vant 模块
6. sass-loader node-sass 模块
```

### Package desciption(Vue 2.6.10)

```
It is based on the framework of Vue version 2.6.10. After the project manager Shino IMI arranges the configuration and packages, the configuration time is reduced and the project development is directly started.
```

```
Description of the package (Vue 2.6.10):

1. Add a new subdirectory mock under the directory public to facilitate access to local JSON data (local mock data)

2. Add the sub directory CSS under the directory assets to store the CSS file, and create the public style file main.css in the sub directory

3. Add a new subdirectory image under the directory assets to store picture files, and add a new subdirectory error under the subdirectory image to store pictures in various request states

4. Axios module installed. Add subdirectory interface under directory SRC, and add subdirectory API (API access unified exit), request (encapsulating Axios instance), utils (personal editing plug-in) in subdirectory

5. Add sub directory pages under directory SRC to store page components, which is different from the components stored in directory components

6. The Vue router module has been installed. Add a new subdirectory router under the directory SRC, and configure the routing by modules.

7. Vuex module installed. Add a new directory store under directory SRC, and configure the warehouse by modules (state management mode).
```

```
Module installed:

1. Axios module
2. QS module
3. Vue router module
4. Vuex module
5. Vant module
6. Sass loader node sass module
```


### 解决输出命令 'console' 报错问题
```
如果你不希望因为输出代码 'console' 而导致发生错误， 请前往目录 node_modules/eslint/conf 下文件 eslint-recommended.js。在module.export 里的字段 map 函数里添加 "no-console": "off".
```


### Solve the problem of error reporting of output command 'console'
```
If you don't want errors caused by the output code 'console', go to the file eslint-recommended.js under the directory 'node_modules/eslint/conf'. Add "no console": "off" to the field map function in module.export
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).