<template>
  <div class="tinymce-editor">
    <editor v-model="myValue"
            :init="init"
            :disabled="disabled"
            :id="tinymceId"
            @onClick="onClick">
    </editor>
        <div class="editor-custom-btn-container">
      <editorImage color="#1890ff" class="editor-upload-btn" @successCBK="imageSuccessCBK"></editorImage>
    </div>
  </div>
</template>

<script>
  import tinymce from 'tinymce/tinymce'
  import Editor from '@tinymce/tinymce-vue'
  import 'tinymce/themes/modern/theme'
  import 'tinymce/plugins/image'
   import 'tinymce/plugins/media'
  import 'tinymce/plugins/table'
  import 'tinymce/plugins/lists'
  import 'tinymce/plugins/contextmenu'
  import 'tinymce/plugins/wordcount'
  import 'tinymce/plugins/colorpicker'
  import 'tinymce/plugins/textcolor'
  import 'tinymce/plugins/codesample'
  import 'tinymce/plugins/code'
  import 'tinymce/plugins/fullscreen'
  import 'tinymce/plugins/preview'
  import editorImage from './editorImage'
  export default {
    components: {
      Editor,
      editorImage
    },
    props: {
      // 传入一个value，使组件支持v-model绑定
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      plugins: {
        type: [String, Array],
        default: 'lists table textcolor wordcount contextmenu preview codesample code fullscreen'
      },
      toolbar: {
        type: [String, Array],
        default: 'undo redo |  formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists  table | removeformat | codesample code | fullscreen preview'
      }
    },
    data () {
      return {
        // 初始化配置
        init: {
          language_url: '/static/tinymce/langs/zh_CN.js',
          language: 'zh_CN',
          skin_url: '/static/tinymce/skins/lightgray',
          height: 180,
          plugins: this.plugins,
          toolbar: this.toolbar,
          branding: false,
          menubar: false,
          // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
          // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
          images_upload_handler: (blobInfo, success, failure) => {
            const img = 'data:image/jpeg;base64,' + blobInfo.base64()
            success(img)
          }
        },
        myValue: this.value,
        tinymceId: this.id || 'vue-tinymce-' + +new Date(),

      }
    },
    mounted () {
      tinymce.init({})
      console.log("333")
    },
    methods: {
      // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
      // 需要什么事件可以自己增加
      onClick (e) {
        this.$emit('onClick', e, tinymce)
      },
      // 可以添加一些自己的自定义事件，如清空内容
      clear () {
      	console.log("111222333")
        this.myValue = ''
      },
       imageSuccessCBK (arr) {
        const _this = this
        arr.forEach(v => {
          window.tinymce.get(_this.tinymceId).insertContent(`<img class="wscnph" src="${v}" >`)
        })
      }
    },
    watch: {
      value (newValue) {
        this.myValue = newValue
      },
      myValue (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
</script>
<style scoped>
</style>
