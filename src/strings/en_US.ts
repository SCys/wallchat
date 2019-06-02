export default {
    welcome: `Welcome, I'm a wechat message transferring bot.`,
    login: {
        request: `I'm requesting the Wechat QRCode for you, please wait a moment`,
        logined: (name: string) => `Congratulations! ${name} has logined`,
        logouted: (name: string) => `${name} has logouted`,
        retry: `Please scan the QRCode and try again`,
        bye: 'Bye',
    },
    message: {
        redpacket: 'A red packet',
        money: 'Transferred some money to you',
        contactNotFound: 'Contact not found',
        contactFound: (name: string) => `${name} is current contact`,
        contactLocked: (name: string) => `${name} is locked`,
        contactUnlocked: (name: string) => `${name} is unlocked`,

    },
    help: `Command reference:
/start - Start bot
/login - Login Wechat
/logout - Logout Wechat
/groupon - Receive group messages
/groupoff - Stop receiving group messages
/officialon - Receive official account messages
/officialoff - Stop receiving official account messages
/selfon - Receive self messages
/selfoff - Stop receiving self messages
/texton - Just text message (default)
/textoff - Show you rich-type message
/help - Show this help page`,
}