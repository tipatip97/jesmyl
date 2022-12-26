export const setPolyfills = () => {
    if (!Array.prototype.flat) {
        // eslint-disable-next-line no-extend-native
        Array.prototype.flat = function <Item>(depth?: number) {
            // eslint-disable-next-line strict
            'use strict';
            if (depth === undefined) depth = 1;
            var flatten: (arr: Item[], depth: number) => Item[] = function (arr: Item[], depth: number) {
                if (depth < 1) return arr.slice();
                return arr.reduce((acc: Item[], val: Item) => {
                    return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
                }, []);
            };
            return flatten(this, depth);
        };
    }
    if (!Array.prototype.at)
        // eslint-disable-next-line no-extend-native
        Array.prototype.at = function (pos) { return this.slice(pos, pos + 1)[0] }
};