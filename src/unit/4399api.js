export const rank = (data) => {

    if (window.h5api){

              window.h5api.submitRankScore(164,data, function(res) {
               /* console.log('月提交结果：', res.data.score, res.data.rank)
                 console.log('月提交返回：', res.code, res.msg) */
              })

              window.h5api.showRankList()

       

    }
}
