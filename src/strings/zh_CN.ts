export default {
    welcome: `欢迎使用`,
    login: {
        request: `正在请求WeChat登陆二维码，请稍等`,
        logined: (name: string) => `${name} 已经登陆`,
        logouted: (name: string) => `${name} 已登出`,
        retry: `请扫描二维码`,
        bye: 'Bye',
    },
    message: {
        redpacket: '发送了一个红包',
        money: '向你转了一笔账',
    },
    help: `命令说明:
/start - 启动会话
/login - 请求登录
/logout - 登出WeChat
/groupon - 开启接收群消息
/groupoff - 关闭接收群消息
/officialon - 开启接收公众号消息（不推荐）
/officialoff - 关闭接收公众号消息
/selfon - 开启接收自己的消息
/selfoff - 关闭接收自己的消息
/texton - 启用文本模式
/textoff - 关闭文本模式（需要服务器端支持）
/help - 显示帮助`,
}