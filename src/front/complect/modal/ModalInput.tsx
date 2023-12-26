import KeyboardInput from '../keyboard/KeyboardInput';
import mylib from '../my-lib/MyLib';
import { onActionClick } from './Modal';
import { ModalConfig, ModalConfigInput, TheModalInputProps } from './Modal.model';
import modalService from './Modal.service';

export default function ModalInput(topProps: TheModalInputProps) {
  let input: Partial<ModalConfigInput>;

  if (Array.isArray(topProps.config)) [input] = topProps.config;
  else [input] = [topProps.config, ''];
  const isTextArea = input.type === 'textarea';
  const config = modalService.current();
  const asFunc = <Value,>(val?: Value, alt?: any) =>
    typeof val === 'function' ? val(config) : alt !== undefined ? alt : val;

  const props: Record<string, Function | string> = mylib.overlap(isTextArea ? { rows: 3 } : {}, {
    type: asFunc(input.type),
    value: asFunc(input.value),
    style: asFunc(input.style),
    disabled: asFunc(input.disabled),
    hidden: asFunc(input.hidden),
    checked: asFunc(input.checked),
    placeholder: asFunc(input.placeholder),
    min: asFunc(input.min),
    max: asFunc(input.max),
    className: asFunc(input.className) + ' app-modal-body-input-list-item-input',
    onChange: (value: string) => {
      input.value = value;
      if (input.onInput) {
        input.onInput(mylib.overlap({}, props, { input, value: input.value }));
      }
      topProps.forceUpdate();
    },
    onClick: (event: Event) => {
      try {
        const clickConfig: ModalConfig = mylib.overlap({ input, event }, props);

        const onClick = () => {
          if (input.onClick) {
            input.onClick(clickConfig);
            topProps.forceUpdate();
          }
        };

        onActionClick(input, onClick, clickConfig, config as Partial<ModalConfig>);
      } catch (error) {
        throw error;
      }
    },
  });

  return (
    <label
      className="app-modal-body-input-list-item margin-gap-v block pointer"
      hidden={asFunc(input.hidden)}
    >
      {input.title && <span className="app-modal-body-input-list-item-title">{asFunc(input.title)}</span>}
      <KeyboardInput
        {...props}
        value={asFunc(input.value)}
        multiline={isTextArea}
      />
    </label>
  );
}
