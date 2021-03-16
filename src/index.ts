import { Message, toMessageFormat } from './lib';

export default function colorfulConsole(messages: Message[], key?: keyof Console) {
  const messageFormat = toMessageFormat(messages);
  console[key || 'log'](messageFormat.msgList, ...messageFormat.styleList);
}
