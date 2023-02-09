import { FilerAppConfig } from "../../complect/filer/Filer.model";

const config: FilerAppConfig = {
    title: 'Аккорд Мастер',
    requirements: [
        "cols", "meetings", "chords", "chordTracks",
        {
            level: 80,
            name: "mp3Rules",
        },
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