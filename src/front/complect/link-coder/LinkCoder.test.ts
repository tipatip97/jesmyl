import LinkCoder from './LinkCoder';

describe('LinkCoder', () => {
  it('with initials', () => {
    const hostName = 'https://asd.asd';
    const attrs = {
      name: 'n',
      surname: 's',
      children: 'v',
    };
    interface Attrs {
      name: string;
      surname: string;
      children?: any;
    }

    const linkCoder = new LinkCoder<Attrs>(hostName, 'children', attrs);

    const value: Attrs = {
      name: 'John',
      surname: '**&Edison',
      children: {
        one: '1 4 * {"5"}',
        two: 2,
        three: null,
        '***': {
          v: '',
          b: [123, 888, null],
        },
      },
    };
    const encoded = linkCoder.encode(value);

    expect(value).toStrictEqual(linkCoder.decode(encoded));
  });
});

export {};
