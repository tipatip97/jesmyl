import mylib from "../my-lib/MyLib";
import LinkCoder from "./LinkCoder";


describe('LinkCoder', () => {
    it('with initials', () => {
        const hostName = 'https://asd.asd';
        const attrs = {
            name: 'n',
            age: 's',
            children: 'c',
        };
        interface Attrs {
            name: string,
            age: string,
            children: string[],
        }

        const linkCoder = new LinkCoder<Attrs>(hostName, 'children', attrs);

        const value: Attrs = {
            name: 'John',
            age: '67',
            children: ['Bob*', 'Mary', 'VIKTOR'],
        };
        const encoded = linkCoder.encode(value);

        expect(mylib.isEq(value, linkCoder.decode(encoded))).toBe(true);
    });
});

export { };
