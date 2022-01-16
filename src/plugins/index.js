import router from "@/router"

/**
 * 插件集合
 * @type {import("vue").Plugin[]}
 */
// const plugins = [
    //第一种
//     // {
//     //     install
//     // }
    //第二种
//     // (app) => {
//     //     app.use
//     // }
// ]

const plugins = [router]  //以后用到什么插件，可以直接追加到后面

/**
 * 批量注册插件
 * @param {import("vue").App} app 
 * @returns 
 */
// export const usePlugins = app => plugins.forEach(plugin => app.use(plugin), app)  //简化之后即为下边操作
export const usePlugins = app => plugins.forEach(app.use, app)