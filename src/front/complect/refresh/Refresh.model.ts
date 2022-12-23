import { IndexAppName } from "../../components/index/Index.model";
import { AppName } from "../../app/App.model";

export type RefreshState = 'ready' | 'inactive' | 'error' | 'loading';

export interface RefreshResponse {
    ok: boolean,
    appName: IndexAppName,
    appLive: number | null,
    appLm: number | null,
    indexLive: number | null,
    indexLm: number | null,
    components: RefreshResponseComponent[],
    val: RefreshResponseValue[];
    props: [] | null,
}

export interface CheckRefreshResponse {
    isDebug: 1 | 0,
    isLive: boolean,
    isLiveMode: boolean,
    isReady: boolean,
    observe: boolean,
    ok: boolean,
}


export interface RefreshResponseComponent {
    app: AppName,
    name: string,
    ext: 'json',
}

export interface RefreshResponseValue extends RefreshResponseComponent {
    content: string,
}