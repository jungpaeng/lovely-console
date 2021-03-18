import { Message, removeBrace, toMessageFormat } from './lib';

export function lovelyConsole(messages: Message[], key?: keyof Console) {
  const messageFormat = toMessageFormat(messages);
  console[key || 'log'](messageFormat.msgList, ...messageFormat.styleList);
}

export function makeStyledConsole(style: string | Record<string, string | number>) {
  const styledFormat = typeof style === 'object' ? removeBrace(JSON.stringify(style)) : style;

  return function (message: string, key?: keyof Console) {
    console[key || 'log'](`%c${message}`, styledFormat);
  };
}
