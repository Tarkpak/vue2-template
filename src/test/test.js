const allowNode = ['contentChange', 'word', 'scan', 'monitor', 'fish']
const objlist = {
  scan: '漏洞扫描',
  word: '违规内容',
  tamper: '网站黑链',
  contentChange: '内容变更',
  trojan: '网站挂马',
  monitor: '可用性'
}
const keys = Object.keys(objlist)
const values = Object.values(objlist)
// const dd = values.filter(item => {
// forin
//   return keys.includes()
// })

const allowEventName = allowNode.map(item => objlist[item]).filter(Boolean)
// console.log(allowEventName)

const selected = {}
keys.forEach(key => {
  const eventName = objlist[key]
  if (allowNode.includes(key)) {
    selected[eventName] = true
  } else {
    selected[eventName] = false
  }
})

// console.log(selected)

// 遍历时可以使用 every 或者 some 方法返回 true 终止循环
// forEach 方法里面直接 return 可以跳过当前循环
// const arr = [12, 3, 2, 1, 5, 33, 7, 9, 8]
// arr.some(item => {
//   if (item === 2) return true
//   console.log(item)
// })

const pathList = [
  './axios-example.vue',
  './echarts-example.vue',
  './error.vue',
  './form/role/index.vue',
  './form/user/index.vue',
  './home.vue',
  './login/index.vue',
  './tree-list.vue',
  './vuex-example.vue'
]

console.log(JSON.stringify(genMenuList(pathList)))
/**
 * 传入路径数组生成二级树结构目录
 * @param {*} pathList 路径数组
 * @returns
 */
function genMenuList(pathList) {
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
