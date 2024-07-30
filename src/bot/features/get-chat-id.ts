import { Composer } from 'grammy'
import type { Context } from '#root/bot/context.js'
import { logHandle } from '#root/bot/helpers/logging.js'

const composer = new Composer<Context>()

const feature = composer.chatType('private')

feature.command('id', logHandle('command-id'), (ctx) => {
  return ctx.reply(`Ваш чат id - ${ctx.chatId}`)
})

export { composer as chatIdFeature }
