


export default class Simplifyed {
    setReals<Top extends Object>(top: Top, keys: (keyof this)[]) {
        keys.forEach((key) => {
            if (top.hasOwnProperty(key)) this[key as keyof this] = (top[key as keyof Top] as never);
        });
    }
}