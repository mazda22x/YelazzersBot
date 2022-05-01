import { Context, Markup, Telegraf } from 'telegraf';
import { InlineQueryResult } from 'telegraf/src/core/types/typegram';
import { Update } from 'typegram';

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN as string);

bot.start((ctx) => {
  ctx.replyWithSticker('CAACAgIAAxkBAAEEi4ViZAhWwx47H_M9noAnrVuC1cvh-wACGAADlLp1Ji3QPztwlGUlJAQ')
});

bot.on('inline_query', (ctx) => {
  const btn: InlineQueryResult = {
    type: 'article',
    id: '1',
    title: 'Гейское приветствие',
    input_message_content: {
      message_text: 'Здарова педики',
    },
  }
  const sticker: InlineQueryResult = {
    type: 'sticker',
    id: '2',
    sticker_file_id: 'CAACAgIAAxkBAAEEi4ViZAhWwx47H_M9noAnrVuC1cvh-wACGAADlLp1Ji3QPztwlGUlJAQ',
    
  }
  ctx.answerInlineQuery([btn, sticker])
})

bot.command('k', (ctx) => {
  console.log('keyboard send', ctx);
  ctx.reply(
    'Keyboard',
    Markup.inlineKeyboard([
      Markup.button.callback('First option', 'first'),
      Markup.button.callback('Second option', 'second'),
    ])
  );
});

bot.launch();