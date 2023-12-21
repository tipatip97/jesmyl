import { ReactNode } from 'react';
import { EvaIconName } from '../../eva-icon/EvaIcon';
import { SendButtonContentMakerProps } from '../send-button-content-maker/maker.model';

export interface EvaSendButtonProps<Value> extends SendButtonContentMakerProps<Value> {
  name: EvaIconName;
  className?: string;
  prefix?: null | ReactNode;
  postfix?: null | ReactNode;
}
