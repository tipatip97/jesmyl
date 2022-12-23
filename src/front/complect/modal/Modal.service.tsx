import { ReactNode } from "react";
import { ModalConfig } from "./Modal.model";

class ModalService {
  configs: ModalConfig[] = [];
  private _error: string = "";
  setter?: Function;
  promise?: Promise<any>;
  resolves: ((val: any) => void)[] = [];

  setConfigSetter(setter: (config: ModalConfig) => void) {
    this.setter = setter;
  }

  refresh() {
    this.setError("");
    this.setter && this.setter(this.configs[0]);
  }

  setError(message: string) {
    this._error = message;
  }

  get error() {
    return this._error;
  }

  open(
    config:
      | Partial<ModalConfig>
      | ((res: (is: boolean) => void) => Partial<ModalConfig>)
  ) {
    if (typeof config === "function") return new Promise(config);
    const defaults = {
      getInput: (index: number = 0) => {
        return config.inputs?.filter(input => !Array.isArray(input))[index];
      },
    };
    this.configs.push(Object.assign(defaults, config) as ModalConfig);
    this.refresh();
    return new Promise((res) => this.resolves.push(res));
  }

  close(value: any) {
    this.resolves[0] && this.resolves[0](value);
    this.configs.shift();
    this.resolves.shift();
    this.refresh();
  }

  current(): ModalConfig | undefined {
    return this.configs[0];
  }

  confirm(
    description: ReactNode,
    title = "Подтвердить",
    okButton = "да",
    cancelButton = "нет"
  ) {
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
        },
      ],
    });
  }

  alert(description: ReactNode, title = "Подтвердить") {
    return this.open({
      title,
      description,
    });
  }
}

const modalService = new ModalService();
export default modalService;
