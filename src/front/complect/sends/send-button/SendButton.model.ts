import { SendButtonContentMakerProps } from "../send-button-content-maker/maker.model";


export interface SendButtonProps<Value> extends SendButtonContentMakerProps<Value> {
  title: string,
  className?: string,
}