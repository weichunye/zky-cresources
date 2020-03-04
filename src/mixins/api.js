import {DateAdd} from '@/utils'

export default {
  name: 'myorder',
  data() {
    return {
      serverEndTime: ''
    }
  },
  methods: {
    starServer(row) {
      let paramObj = JSON.parse(row.apiFlavorref)
      if (paramObj != null && paramObj != '') {
        //计算服务结束时间
        this.serverEndTime = DateAdd(row.number, new Date());
        //虚拟云主机
        if (paramObj.detailtemplateId == 1) {
          //云计算平台接口，开通服务
          let param = {
            ...paramObj,
            senancyServer: this.serverEndTime,
            number: '1',
            url: 'http://ecs.cstcloud.cn/yunspbdemo/cloud/serverEstablishNew/',
            cstnetId: '1',
            umtId: '1'
          }
          //this.postHttp(param,row)
        }
        //数据中心
        else if (paramObj.detailtemplateId == 2) {
          //数据中心VDC，创建
          let param = {
            ...paramObj,
            dt_expired: this.serverEndTime,
            url: 'http://ecs.cstcloud.cn/yunspbdemo/cloud/orgEstablishNew/',
            cstnetId: '1',
            umtId: '1'
          }
          //this.postHttp(param,row)
        }
      }
    },
    upServer(row) {
      let paramObj = JSON.parse(row.apiFlavorref)
      if (paramObj != null && paramObj != '') {
      if(paramObj.detailtemplateId == 2){
          this.$http.get('/api/cloud',  {params: {
              url: 'http://ecs.cstcloud.cn/yunspbdemo/cloud/get/getSkipUrl/',
              umtId: '1'
            }
          }).then(({data: res}) => {
            if (res.code != 0) {
              return this.$message.error('处理失败！')
            }
            window.open(res.data)
          })
        } else {
          this.$router.push({path: paramObj.detailtemplateFileName, query: {}})
        }
      } else {
        return this.$message.error('获取信息失败！')
      }
    },
    postHttp(param,row){
      const loading = this.$loading({
        lock: true,
        text: '正在提交中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      this.$http.post('/api/cloud', param).then(({data: res}) => {
        if (res.code == 900) {
          loading.close()
          return this.$message.error(res.msg)
        }
        if (res.code != 0) {
          loading.close()
          return this.$message.error('开通服务失败！')
        }
        //修改订单详情，服务开通状态：0 未开通，1 已开通
        row.cloudStatus = 1
        row.productBegintime = new Date().getTime()
        row.productEndtime = this.serverEndTime
        this.$http.put('/api/order/updateOrderdetail', row).then(({data: res}) => {
          if (res.code != 0) {
            loading.close()
            return this.$message.error(res.msg)
          }
          loading.close()
          this.$message({
            message: '开通服务成功！',
            type: 'success'
          })
          this.getDataList()
        })
      })
    }
  }
}
