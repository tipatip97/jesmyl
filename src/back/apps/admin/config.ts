import { FilerAppConfig } from "../../complect/filer/Filer.model";
import { sokiAuther } from "../../complect/soki/complect/SokiAuther";

const config: FilerAppConfig = {
    title: 'ADMINO',
    requirements: [
        {
            level: 100,
            name: "userList",
            get: () => {
                return {
                    data: sokiAuther.authList,
                    mtime: sokiAuther.mtime,
                };
            }
        },
    ]
}

export default config;