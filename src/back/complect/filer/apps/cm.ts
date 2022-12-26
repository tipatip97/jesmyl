import { FilerAppConfig } from "../Filer.model";

const config: FilerAppConfig = {
    title: 'Аккорд Мастер',
    requirements: [
        "cols", "meetings", "chords",
        {
            level: 50,
            name: "eeStorage",
        },
        {
            level: 100,
            name: "execs",
        }
    ]
}

export default config;