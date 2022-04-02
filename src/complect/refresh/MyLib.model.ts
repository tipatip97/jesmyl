
export type StringTemplaterArgs<Adds = {}> = {
    ink: (num: number, post: string, pre: string) =>  string,
    switch: () => string;
} & Adds;

