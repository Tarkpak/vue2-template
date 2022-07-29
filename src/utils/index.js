export default {
  /**
   *  节流函数
   * @param {*} fn
   * @param {*} delay
   * @returns
   */
  debounce(fn, delay = 1000) {
    var timer
    return function() {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay)
    }
  },
  /**
   * 传入路径数组生成二级树结构目录
   * @param {*} pathList
   * @returns
   */
  genMenuList(pathList) {
    const menuList = []
    let currentParenName = ''
    for (let [index, path] of pathList.entries()) {
      path = path.slice(1, -4)
      if (path.match(/\//g).length > 1) {
        const pathArr = path.split('/')
        if (pathArr.length > 3) {
          if (currentParenName === pathArr[1]) {
            menuList[index - 1].subMenus.push({
              index: path,
              text: pathArr[2]
            })
            currentParenName = ''
          } else {
            currentParenName = pathArr[1]
            const parent = {
              text: pathArr[1],
              index: path.slice(0, 5),
              subMenus: []
            }
            menuList.push(parent)
            parent.subMenus.push({
              index: path,
              text: pathArr[2]
            })
          }
        } else {
          menuList.push({
            index: path,
            text: pathArr[1]
          })
        }
      } else {
        menuList.push({ index: path, text: path.slice(1) })
      }
    }
    return menuList
  }
}
