import { defaultStyleString } from './style';

export type Message = {
  msg: string;
  style?: string;
};

type MessageFormat = {
  msgList: string;
  styleList: string[];
};

export function toMessageFormat(messageList: Message[]) {
  return messageList.reduce<MessageFormat>(
    function (prev, curr) {
      return {
        msgList: prev.msgList + `%c${curr.msg}`,
        styleList: [...prev.styleList, curr.style || defaultStyleString],
      };
    },
    { msgList: '', styleList: [] },
  );
}
