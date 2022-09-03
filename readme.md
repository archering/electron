# electron 学习项目

> 这个工程里面包含多个子项目，下面按照顺序记录多个学习过程，最后会总结一个完整的electron标准开发工程

1，安装electron ，建议采用本地安装

```
    npm install electron --save-dev
```

# 初始化配置 

```
    {
    "name": "my-electron-app",
    "version": "1.0.0",
    "description": "Hello World!",
    "main": "main.js", //可以访问到的主程序入口，如果是放在src下面需要指向， /src/main.jss
    "author": "Jane Doe",
    "license": "MIT",
    "devDependencies": {
        "electron": "19.0.0"
    }
}

```