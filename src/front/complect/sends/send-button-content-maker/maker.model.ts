import { ReactNode } from 'react';

export type SendButtonContentMakerPropsContent = (
  onClick: (() => void) | und,
  error: string,
  isLoading: boolean,
) => ReactNode;

export interface SendButtonContentMakerProps<Value> {
  onSend?: () => Promise<Value> | void | nil;
  onSuccess?: ((val: Value) => void) | nil;
  onFailure?: (errorMessage: string) => string | void;
  confirm?: ReactNode;
  anchorNodes?: JSX.Element;
  content?: SendButtonContentMakerPropsContent;
  disabled?: boolean;
}
