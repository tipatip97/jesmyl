import { LocalSokiAuth, SokiAppName } from "../../complect/soki/soki.model";
import { FilerAppConfig } from "../../complect/filer/Filer.model";

export interface Application {
    name: SokiAppName;
    title: string;
    description: string;
    level: number;
    disabled: boolean;
    hidden: boolean;
    params?: string[];
}

const config: FilerAppConfig = {
    title: 'JESMYL',
    requirements: [
        {
            name: "apps",
            prepare: (apps: Application[], auth?: LocalSokiAuth | null) => {
                const authLevel = auth?.level || 0;
                return apps.map((app) => {
                    if ((app.level || 0) <= authLevel) return app;
                    else return null;
                }).filter(app => app);
            }
        },
    ]
}

export default config;