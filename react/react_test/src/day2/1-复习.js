/* 
    create-react-app
    可以全局安装  npm i create-react-app -g
       create-react-app 项目名
       修改配置文件  npm run eject  (前提是git仓库的工作区是干净的)
       修改 config/webpack.comfig.js  参照sass增加less
       安装 less 和 less-loader 两个依赖

    不想安装脚手架 
    npx create-react-app 项目名

    起服务  npm run start  

    react的组件都是函数或者类，Vue的组件都是实例(对象)
    react的组件的名字 需要首字母大写
    react jsx语法  可以在js中直接写HTML结构
        变量都是放在 {} 里边的； 这个{} 等同于Vue的{{}}
        react行内属性 也是使用 {}
        元素类名 不能写class  需要写成className，类名不会自动合并
        元素的行内样式必须是一个 对象 的形式
        react中的循环一般用 map 
        react中判断使用的是 三元运算符

        React.createElement('tagname',{props},...children)
    在render里面，可以用this.props去获取属性

*/