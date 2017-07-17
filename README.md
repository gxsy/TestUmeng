# Test Umeng

TODO
---

- 集成友盟

技术栈
---

 - [React Native](https://facebook.github.io/react-native/)
- [Jest](http://facebook.github.io/jest/)：单元测试框架


ESLint Style: [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)


Join us
---

**iOS 要求**：XCode 8.3.2+


1. 安装 yarn 或者 npm
2. 安装 react-native-cli：``yarn global add react-native-cli``
3. 安装依赖： ``yarn install``
4. 链接原生库：``react-native link``
5. 运行 Demo：``react-native run-ios``


### Workflow

1. 获取上游最新代码：``git pull --rebase``
2. 添加修改功能，**小步提交**，即实现某个小功能就本地小步提交一次。如：
    1. 添加某个库，提交一次。
    2. 完成 UI 设计，提交一次。
    3. 完成功能，提交一次。
    4. 编写测试，提交一次。
    5. 修复 Lint，提交一次。
3. 编写、运行测试 ``npm test``
4. 执行 lint 检测 ``npm run lint``
5. 提交到服务器
6. 来一个 Pull Request

### 提交信息规范

建议提交信息按如下规范：

```
[任务分类] 主要修改组件：修改内容
```

示例 1，``[T] tabs: add icons`` 。其中的 ``T`` 表示这是一个技术卡，``tabs`` 表示修改的是 Tabs，``add icons`` 则表示添加了图标。

示例 2，``[SkillTree] detail: add link data``。其中的 ``SkillTree`` 表示修改的是技能树 Tab 下的内容，``detail`` 则表示修改的是详情页，``add link data`` 则表示是添加了技能的数据


Thanks to
---

- [growth](https://github.com/phodal/growth)
