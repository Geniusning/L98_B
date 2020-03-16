
//获取当天日期
const nowDate = () => {
  var date = new Date()
  const year = date.getFullYear();
  const month = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)
  const day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()
  return year + "-" + month + "-" + day
}
//时间戳转时间
const timestampToTime = (timestamp) => {
  if (timestamp.toString().length > 11) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10) ? '0' + date.getMinutes() + ":" : date.getMinutes() + ':';
    var s = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
  } else {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10) ? '0' + date.getMinutes() + ":" : date.getMinutes() + ':';
    var s = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
  }
}
const getDate = (timestamp) => {
  if (timestamp.toString().length > 11) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    return Y + M + D;
  } else {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    return Y + M + D;
  }
}
//获得上周日日期
const getLastSundayTimeStamp = () => {
  var now = new Date(new Date(new Date().toLocaleDateString()).getTime());
  var nowTime = now.getTime();
  var day = now.getDay();
  var oneDayTime = 24 * 60 * 60 * 1000;
  var SundayTime = nowTime - day * oneDayTime;//显示周日时间戳
  return getDate(SundayTime)
}
//获得本月1号日期
const getThisMonth1 = () => {
  var now = new Date(new Date(new Date().toLocaleDateString()).getTime());
  var nowTime = now.getTime();
  var day = now.getDate() - 1;
  var oneDayTime = 24 * 60 * 60 * 1000;
  var month1 = nowTime - day * oneDayTime;//显示本月1号时间戳
  return getDate(month1)
}
//N天后
/**
 * 计算n天后的日期
 * initDate：开始日期，默认为当天日期， 格式：yyyymmdd/yyyy-mm-dd
 * days:天数
 * flag：返回值， 年与日之间的分隔符， 默认为xxxx年xx月xx日格式
 */

const someDayLater = (initDate, days, flag) => {
  if (!days) {
    return initDate;
  }
  initDate = initDate.replace(/-/g, '');
  flag = flag.trim();
  var date;
  // 是否设置了起始日期
  if (!initDate) { // 没有设置初始化日期，就默认为当前日期
    date = new Date();
  } else {
    var year = initDate.substring(0, 4);
    var month = initDate.substring(4, 6);
    var day = initDate.substring(6, 8);
    date = new Date(year, month - 1, day); // 月份是从0开始的
  }
  date.setDate(date.getDate() + days);

  var yearStr = date.getFullYear();
  var monthStr = ("0" + (date.getMonth() + 1)).slice(-2, 8); // 拼接2位数月份
  var dayStr = ("0" + date.getDate()).slice(-2, 8); // 拼接2位数日期
  var result = "";
  if (!flag) {
    result = yearStr + "年" + monthStr + "月" + dayStr + "日";
  } else {
    result = yearStr + flag + monthStr + flag + dayStr;
  }
  return result;

}

const returnDiscountType = (discountTypeNumber) => {
  if (parseInt(discountTypeNumber) === 0) {
    return "现金券"
  } else if (parseInt(discountTypeNumber) === 1) {
    return "实物券"
  } else if (parseInt(discountTypeNumber) === 2) {
    return "折扣券"
  } else if (parseInt(discountTypeNumber) === 3) {
    return "兑换券"
  } else if (parseInt(discountTypeNumber) === 4) {
    return "满减券"
  } else if (parseInt(discountTypeNumber) === 5) {
    return "月卡券"
  } else if (parseInt(discountTypeNumber) === 6) {
    return "次卡券"
  }
}
const returnDiscountContent = (coupon) => {
  if (parseInt(coupon.type) === 0) {
    return "现金券" + coupon.value + "元"
  } else if (parseInt(coupon.type) === 1) {
    return "实物券" + coupon.content
  } else if (parseInt(coupon.type) === 2) {
    return "折扣券" + coupon.value + "折"
  } else if (parseInt(coupon.type) === 3) {
    return "兑换券" + coupon.content
  } else if (parseInt(coupon.type) === 4) {
    return "满减券" + coupon.content
  } else if (parseInt(coupon.type) === 5) {
    return "月卡券" + coupon.content
  } else if (parseInt(coupon.type) === 6) {
    return "次卡券" + coupon.content
  }
}
const returnDiscountContentNoType = (coupon) => {
  if (parseInt(coupon.type) === 0) {
    return coupon.value + "元"
  } else if (parseInt(coupon.type) === 1) {
    return coupon.content
  } else if (parseInt(coupon.type) === 2) {
    return coupon.value + "折"
  } else if (parseInt(coupon.type) === 3) {
    return coupon.content
  } else if (parseInt(coupon.type) === 4) {
    return coupon.content
  } else if (parseInt(coupon.type) === 5) {
    return coupon.content
  } else if (parseInt(coupon.type) === 6) {
    return coupon.content
  }
}
const interface_post = (url, data, storeId) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url + "&storeId=" + storeId,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success: res => {
        // console.log('post_res----------', res)
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.data)
        }
      }
    })

  })
}
const interface_get = (url, storeId) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url + "&storeId=" + storeId,
      success: res => {
        if (res.statusCode === 200) {
          console.log(res)
          resolve(res.data)
        } else {
          wx.showToast({
            title: '暂无数据',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })

  })
}
//获取滚动的高度
const getScrollHeight = (height) => {
  var scrollHeight;
  wx.getSystemInfo({
    success: function (res) {
      // console.log(res);
      var clientHeight = res.windowHeight,
        clientWidth = res.windowWidth,
        rpxR = 750 / clientWidth;
      scrollHeight = clientHeight * rpxR - height;
    }
  });
  return scrollHeight
}
const writePhotosAlbum = (successFun, failFun) => {
  wx.getSetting({
    success(res) {
      if (!res.authSetting['scope.writePhotosAlbum']) {
        wx.authorize({
          scope: 'scope.writePhotosAlbum',
          success: function () {
            successFun && successFun()
          },
          fail: function (res) {
            wx.hideLoading()
            wx.showModal({
              title: '提示',
              content: "小程序需要您的微信授权保存图片，是否重新授权？",
              showCancel: true,
              cancelText: "否",
              confirmText: "是",
              success: function (res2) {
                if (res2.confirm) { //用户点击确定'
                  wx.openSetting({
                    success: (res3) => {
                      if (res3.authSetting['scope.writePhotosAlbum']) {
                        //已授权
                        successFun && successFun()
                      } else {
                        failFun && failFun()
                      }
                    }
                  })
                } else {
                  failFun && failFun()
                }
              }
            });
          }
        })
      } else {
        successFun && successFun()
      }
    }
  })
}
const sortByKey = function (key) {
  return function (obj1, obj2) {
    var v1 = obj1[key]
    var v2 = obj2[key]
    return v2 - v1
  }
}
//数组去重,并把目标type放到数组第一个元素位置
const delSameItem = function (arr, type) {
  var newArr = [];
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i].name]) {
      newArr.push(arr[i]);
      obj[arr[i].name] = true;
    }
  }
  return newArr
};
//比较日期前后
const compareDate = (beginDate, endDate) => {
  console.log(beginDate, endDate)
  let d1 = new Date(beginDate.replace(/\-/g, "\/"))
  let d2 = new Date(endDate.replace(/\-/g, "\/"))
  console.log("d1------------", d1)
  console.log("d2------------", d2)
  if (beginDate != "" && endDate != "" && d1 > d2) {
    return false
  }
  return true
}
//补全0
const prefixZero = (num, n) => {
  var len = num.toString().length;
  while (len < n) {
    num = "0" + num;
    len++;
  }
  return num;
}
const _judgeRole = (role) => {
  if (role == "k98_operation_manager") {
    return "运营主管"
  } else if (role == "k98_operation_behind") {
    return "运营后台"
  } else if (role == "k98_operation_middle") {
    return "运营中台"
  } else if (role == "k98_operation_front") {
    return "运营前台"
  } else if (role == "k98_center_staff") {
    return "本部员工"
  } else if (role == "k98_city_boss") {
    return "城市合伙老板"
  } else if (role == "k98_store_boss") {
    return "门店老板"
  } else if (role == "k98_store_manager") {
    return "店长"
  } else if (role == "k98_store_staff") {
    return "店员"
  } else if (role == "k98_manager") {
    return "系统管理员"
  } else {
    return "运营主管"
  }
};
//压缩上传图片
// const compressUploadImg = (this,showImgUrl,uploadImgUrl)=>{
//   if(typeof showImgUrl =="object"){
//     uploadImgUrl = showImgUrl
//   }
//   let _this = this
//   wx.chooseImage({
//     count: 1,
//     sizeType: ['compressed'],
//     sourceType: ['album', 'camera'],
//     success (res) {
//       // tempFilePath可以作为img标签的src属性显示图片
//       const tempFilePaths = res.tempFilePaths
//       showImgUrl = tempFilePaths[0]

//       //判断机型
//       var phoneModel = ""
//       wx.getSystem
//     }
//   })
// }
module.exports = {
  returnDiscountContent,
  prefixZero,
  nowDate,
  timestampToTime,
  someDayLater,
  interface_post,
  interface_get,
  returnDiscountType,
  writePhotosAlbum,
  getDate,
  getScrollHeight,
  compareDate,
  sortByKey,
  _judgeRole,
  getLastSundayTimeStamp,
  getThisMonth1,
  returnDiscountContentNoType,
  delSameItem
}
