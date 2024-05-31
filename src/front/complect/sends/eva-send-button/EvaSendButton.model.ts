import { ReactNode } from 'react';
import { TheIconType } from '../../the-icon/model';
import { SendButtonContentMakerProps } from '../send-button-content-maker/maker.model';

export interface EvaSendButtonProps<Value> extends SendButtonContentMakerProps<Value> {
  Icon: TheIconType;
  className?: string;
  prefix?: null | ReactNode;
  postfix?: null | ReactNode;
}
