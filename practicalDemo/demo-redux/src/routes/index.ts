export function getRootPermission(){
    return new Promise((resolve)=>{
        resolve({
            code:200, /* 数据模拟只有home，和my模块有权限，其他没有权限 */
            data:[ '/home'  , '/my' ]
        })
    })
}