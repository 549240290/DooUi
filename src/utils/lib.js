// 生成动态路由
export const generateRouter = function ( menuData = [], routes = [],componentNew ) {
    for(var i = 0;i < menuData.length;i++){
        const menuobj = menuData[i]
        const component = menuData[i].component
        if( component && component !== 'content'){
            componentNew = require('@/views/'+menuData[i].component+'/index')
        }else{
            componentNew = require('@/views/'+menuData[i].component+'/index')
        }
        menuobj['component'] = componentNew
        routes.push(menuobj) 
        generateRouter(menuobj.children)
  }
  return routes
}

