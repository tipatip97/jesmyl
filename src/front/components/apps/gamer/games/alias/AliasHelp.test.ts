import { AliasHelp } from "./AliasHelp";

describe('AliasHelp', () => {
    it('encodeWordNid + decodeWordNid', () => {
        const errs: string[] = [];

        for (let packi = 0; packi < 11; packi++)
            for (let leveli = 0; leveli < 10; leveli++)
                for (let wordi = leveli; wordi < 301; wordi += 7) {
                    const encoded = AliasHelp.encodeWordNid(packi, leveli, wordi);
                    const [decPacki, decLeveli, decWordi] = AliasHelp.decodeWordNid(encoded) || [];
                    if (decPacki !== packi || decLeveli !== leveli || decWordi !== wordi)
                        errs.push(`(${decPacki} ${decLeveli} ${decWordi}) expected ${packi} ${leveli} ${wordi}`);
                }

        console.info(errs);

        expect(errs.length).toBe(0);
    });
});