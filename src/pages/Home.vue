<template>
  <div class="page-home">
    <h2>
      Pitools-template-vue <br/>
      <small>项目初始化模板(vue)</small>
    </h2>
    <dl>
      <dt>发布声明</dt>
      <dd v-for="(item, idx) of statements.zh" :key="idx">
        {{ item }}
      </dd>
    </dl>
    <dl>
      <dt>Release statement</dt>
      <dd v-for="(item, idx) of statements.en" :key="idx">
        {{ item }}
      </dd>
    </dl>
    <div class="author" @click="lookData">
      <span>----</span>
      <span>by</span>
      <span>xiaoyimi (筱依米)</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      statements:  {
        zh: [
          '这个项目包来源于官方 Vue 2.6.10 版本。',
          '经过项目管理者筱依米进行配置处理，以便减少搭建配置时间，直接快速开发项目。',
          '1. 新增目录 pages，用于存放页面，区别于组件目录 components',
          '2. 已安装并配置路由 vue-router',
          '3. 已安装请求构造器 axios，并在目录 src/interface 下生成实例 http，且在目录 interface/request/api 下配置好统一 API 管理',
          '4. 已安装 CSS 预处理 node-sass sass-loader',
          '5. 已安装状态管理模式 Vuex，并分模块配置好 getters，mutations，actions，modules 等等',
          '6. 新增目录 interface，与外界目录结构的 api 一致行为；子目录 utils 内含有 date 工具，可获取或处理不同时间等不同格式。',
          '7. 在目录 assets 下新增子目录 image，子目录 image 下有子目录 error，该目录存放了请求状态对应的图片',
          '8. 目录 public 新增子文件 mock，存放于本地可访问 json 数据，开发时可用测试;'
        ],
        en: [
          'This package comes from the official Vue version 2.6.10.',
          'After the configuration processing by xiaoyimi, the project manager, in order to reduce the construction configuration time and develop the project directly and quickly.',
          '1. Add directory pages to store pages, which is different from component directory components',
          '2. Route Vue-router is installed and configured',
          '3. The request constructor Axios has been installed, and the instance HTTP is generated under the directory Src / interface, and the unified API management is configured under the directory interface / request / API',
          '4. CSS preprocessing node sass sass loader is installed',
          '5. The state management mode vuex has been installed, and the getters, mutations, actions, modules and so on are configured by modules',
          '6. Add a directory interface, which is consistent with the API of the external directory structure; the subdirectory utils contains the date tool, which can obtain or process different formats at different times.',
          '7. Add a new subdirectory image under the directory assets. There is a subdirectory error under the subdirectory image. This directory stores the pictures corresponding to the request status',
          '8. The directory public adds a new sub file, mock, which is stored in the local accessible JSON data. It can be tested during development;'
        ]
      }
    }
  },
  methods: {
    lookData () {
      this.api.demo.getDemoData()
      .then(res => {
        console.warn(res.data)
      })
      .catch(err => {
        return err
      })
    }
  }
}
</script>

<style lang="scss">
  .page-home {
    margin: 0 auto;
    width: 80%;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 50px;
    text-align: center;
    small {
      padding-top: 6px;
      font-size: 18px 
    }
  }
  dl {
    margin-bottom: 30px;
    dt {
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: bold
    }
    dd {
      margin: 10px 0;
      padding: 0;
      line-height: 1.6;
      font-size: 16px;
    }
  }
  .author {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 50px;
    height: 30px;
    font-size: 20px;
    span { padding: 0 6px; }
  }
</style>
