import { Executer } from '../../complect/executer/Executer';
import { FilerAppConfig } from '../../complect/filer/Filer.model';

const config: FilerAppConfig = {
  title: 'Свадьбы',
  requirements: {
    guests: {},
  },
  actions: Executer.prepareActionList({
    '/guests': {
      expected: [],
      action: 'putGuest',
      method: 'setOrPush:mi',
      setSystems: ['mi'],
      title: 'Изменения для гостя $guestName;',

      '<remove>': {
        action: 'removeGuest',
        value: ['mi', '===', '{value}'],
        method: 'remove',
        title: 'Гость $guestName; удалён',
      },

      '<add many>': {
        action: 'concatGuestList',
        method: 'concat',
        setItemSystems: ['mi'],
        title: 'Список гостей пополнен',
      },

      '/[mi === {guestMi}]': {
        args: {
          guestMi: '#Number',
        },
        '<answer>': {
          action: 'setGuestAnswer',
          method: 'set_all',
          canBeUnauthorized: true,
          title:
            'Гость <b>$guestName;</b> $will!{{<s>НЕ</s> }}будет присутствовать на свадьбе.$text{{\n\n Заметка: $text}}',
          value: {
            t: '{text}',
            w: '{will}',
          },
          args: {
            will: [0, 1],
            text: '#string',
            guestName: '#String',
          },
        },

        '/g': {
          action: 'setPropositionSentMark',
          method: 'set',
          title: 'Для гостя $guestName; пригласительная ссылка $value!{{не}} отправлена',
        },
      },
    },
  }),
};

export default config;
