import { ReactNode } from "react";
import { ModalConfig } from "./Modal.model";


class ModalService {
    configs: Partial<ModalConfig>[] = [];
    private _error: string = '';
    setter?: Function;
    promise?: Promise<any>;
    resolves: ((val: any) => void)[] = [];

    setConfigSetter(setter: (config: ModalConfig) => void) {
        this.setter = setter;
    }

    refresh() {
        this.setError('');
        this.setter && this.setter(this.configs[0]);
    }

    setError(message: string) {
        this._error = message;
    }

    get error() { return this._error; }

    open(config: Partial<ModalConfig> | ((res: (is: boolean) => void) => Partial<ModalConfig>)) {
        if (typeof config === 'function') return new Promise(config);
        this.configs.push(config);
        this.refresh();
        return new Promise((res) => this.resolves.push(res));
    }

    reopen(config: Partial<ModalConfig>, value: any) {
        this.configs[0] = config;
        this.refresh();
        this.resolves[0] && this.resolves[0](value);
        return new Promise((res) => this.resolves[0] = res);
    }

    close(value: any) {
        this.resolves[0](value);
        this.configs.shift();
        this.resolves.shift();
        this.refresh();
    }

    current() {
        return this.configs[0];
    }

    confirm(description: ReactNode, title = 'Подтвердить', okButton = 'да', cancelButton = 'нет') {
        return this.open({
            title,
            description,
            buttons: [
                {
                    title: okButton,
                    value: true,
                },
                {
                    title: cancelButton,
                    value: false,
                }
            ]
        });
    }

    alert(description: ReactNode, title = 'Подтвердить') {
        return this.open({
            title,
            description,
        });
    }
}

const modalService = new ModalService();
export default modalService;
