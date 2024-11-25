import React, { ReactNode, useContext } from 'react';
import { SokiServerEvent } from 'shared/api';
import { indexExer } from '../../components/index/IndexExer';
import { Exer } from '../exer/Exer';
import { ExerStorage } from '../exer/Exer.model';
import { CUD, StrongComponentProps } from './Strong.model';

export const StrongExerContext = React.createContext<Exer<any>>(indexExer);
export const useStrongExerContext = () => useContext(StrongExerContext);

export const useStrongExerContent = <Storage extends ExerStorage>(exer: Exer<Storage>) => {
  return (content: ReactNode) => <StrongExerContext.Provider value={exer}>{content}</StrongExerContext.Provider>;
};

export const strongScopeMakerBuilder =
  <Phase extends string = string>() =>
  (parentScope: string, scopeName: ` ${Phase}${typeof strongScopeKeyValueSeparator}`, value: number | string) => {
    return `${parentScope}${scopeName}${value}`;
  };

export const getObjectFromScope = (scope: string) => {
  const res: Record<string, string> = {};

  scope.split(' ').forEach(part => {
    const [key, value] = part.split('/');

    if (value == null) return;

    res[key] = value;
  });

  return res;
};

export const strongScopeKeyValueSeparator = '/';

export const strongPrepareArgsAndSend = <Storage extends ExerStorage, ValType extends string | number>(
  exer: Exer<Storage>,
  scope: string | undefined,
  fieldName: string,
  cud: CUD,
  value: ValType | undefined,
  onBeforeSend: () => void,
  mapExecArgs: StrongComponentProps<Storage, ValType>['mapExecArgs'],
  fieldKey: unknown,
  fieldValue: unknown,
): Promise<SokiServerEvent | null> | void => {
  let args: Record<string, unknown> = value === undefined ? {} : { value };
  let action = '';

  scope?.split(' ').forEach(scopeItem => {
    const beats = scopeItem.split(strongScopeKeyValueSeparator);
    if (beats.length > 1) {
      args[beats[0]] = isNaN(+beats[1]) ? beats[1] : +beats[1];
      action += ` ${beats[0]}`;
    } else action += ` ${scopeItem}`;
  });

  args =
    fieldKey === undefined && fieldValue === undefined
      ? args
      : fieldKey === undefined
        ? {
            ...args,
            value: fieldValue,
          }
        : fieldValue === undefined
          ? {
              ...args,
              key: fieldKey,
            }
          : {
              ...args,
              key: fieldKey,
              value: fieldValue,
            };

  const send = () => {
    onBeforeSend();

    return exer.send({
      args,
      action: action.trim() + (fieldName ? ` ${fieldName}` : '') + ` [${cud}]`,
    });
  };

  if (mapExecArgs) {
    const mappedArgs = mapExecArgs(args, (value ?? '') as never);
    if (mappedArgs == null) return;
    if (mappedArgs instanceof Promise) {
      return (async () => {
        args = (await mappedArgs)!;
        if (args == null) return null;

        return send();
      })();
    } else args = mappedArgs;
  }

  return send();
};
