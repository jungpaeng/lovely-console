import { defaultStyleString, removeBrace } from './style';

export type Message = {
  msg: string;
  style?: string | Record<string, string | number>;
};

type MessageFormat = {
  msgList: string;
  styleList: string[];
};

export function toMessageFormat(messageList: Message[]) {
  return messageList.reduce<MessageFormat>(
    function (prev, curr) {
      const style =
        typeof curr.style === 'object' ? removeBrace(JSON.stringify(curr.style)) : curr.style;

      return {
        msgList: prev.msgList + `%c${curr.msg}`,
        styleList: [...prev.styleList, style || defaultStyleString],
      };
    },
    { msgList: '', styleList: [] },
  );
}
