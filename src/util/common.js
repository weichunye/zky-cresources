export default {



	//网址验证
	verifyUrl:function (rule, value, callback) {

			var regexp = /((http|ftp|https|file):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/ig;
		        if (!value) {
		          return callback(new Error('网址不能为空'));
		        }
				else{
					var thisurl = value.match(regexp);
					if(!thisurl) {
						  callback(new Error('请输入正确网址'));
						return false
					}else{
						 callback();
					}
				}

	},

	//电话号码验证
	verifyPhone:function (rule, value, callback) {
		var regexp =/^[1][3,4,5,7,8][0-9]{9}$/;
    var phone = /^0\d{2,3}-?\d{7,8}$/
	        if (!value) {
	          return callback(new Error('电话号码不能为空'));
	        }
			else{
				var thisurl = value.match(regexp);
				var thisphone = value.match(phone);
				if(!thisurl&&!thisphone) {
					  callback(new Error('请输入正确电话号'));
					return false
				}else{
					 callback();
				}
			}

	},
   checkEmail:function (rule, value, callback){/*邮箱校验*/
    if (!value) {
      return callback(new Error('邮箱不能为空'));
    }
    if (value) {
      setTimeout(() => {
        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!reg.test(value)) {
          callback(new Error('请输入有效的电子邮箱！'));
        } else {
          callback();
        }
      }, 500);
    }
  },
    getlistData:function(url,params,ele){
		var _this=this;
			_this.axios.post(baseUrl.baseUrl + url, {params:params})
			.then(function(response) {
				_this.ele = response.data;

			})
			.catch(function(error) {
			})
	},
}
