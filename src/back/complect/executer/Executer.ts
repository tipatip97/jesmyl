/* eslint-disable eqeqeq */
import {
  ActionBox,
  ActionTimer,
  ExecuteError,
  ExecuteErrorType,
  ExecuteFeedbacks,
  ExecutionArgs,
  ExecutionDict,
  ExecutionReal,
  ExecutionRuleTrackBeat,
  ExecutionSide,
  ExecutionSidesDict,
  ExecutionTrack,
  FixedAccesses,
  LocalSokiAuth,
  RealAccumulatableRule,
  ShortRealRule,
  sokiWhenRejButTs,
} from 'shared/api';
import { ExecuterBasics } from 'shared/executer';
import { makeRegExp, SMyLib, smylib } from 'shared/utils';
import { sequreMD5Passphrase } from 'shared/values';
import { FilerAppConfig, FilerAppConfigActions } from '../filer/Filer.model';

const reportFailError = (rej: (resp: { ok: false; fail?: boolean; message: string }) => void, error: any) =>
  rej({
    ok: false,
    fail: true,
    message: error && (error.stack ?? error.message),
  });

export class Executer extends ExecuterBasics {
  findMap<Item, Ret>(arr: Item[], cb: (item: Item, itemi: number, itema: Item[]) => Ret): Ret | undefined {
    let ret = undefined;
    return arr.some((item, itemi, itema) => {
      const val = cb(item, itemi, itema);
      if (val === undefined) return false;
      else {
        ret = val;
        return true;
      }
    })
      ? ret
      : undefined;
  }

  static prepareTrack = (path: string): ExecutionTrack =>
    path.startsWith('<')
      ? []
      : path
          .slice(1)
          .split('/')
          .map(part =>
            part.startsWith('[') && part.endsWith(']')
              ? (part.slice(1, -1).split(' ') as ExecutionRuleTrackBeat)
              : part,
          )
          .filter(part => part);

  static prepareActionList(boxes: ActionBox, fixedAccesses: FixedAccesses = []): FilerAppConfigActions {
    const rules: ExecutionReal[] = [];

    const transform = (composit: ActionBox, topRule: RealAccumulatableRule = {} as never): ExecutionReal | null => {
      for (const key in composit) {
        const box = composit[key as never];
        if (box && (key.startsWith('/') || (key.startsWith('<') && key.endsWith('>')))) {
          const track = key.startsWith('<') ? [] : this.prepareTrack(key);
          const accTrack = topRule.track?.concat(track || []) || track;

          const accSides = () => {
            const accSides = (side?: ExecutionSidesDict) => {
              if (smylib.isFunc(topRule.sides)) return;

              const sides: ExecutionSide[] = topRule.sides || [];
              const accSides = (accSideTrack: ExecutionRuleTrackBeat[], side?: ExecutionSidesDict) => {
                if (!side) return;
                SMyLib.entries(side).forEach(([key, side]: [string, ExecutionSide]) => {
                  const trackedSide = { ...side };
                  const sideTrack = accSideTrack.concat(this.prepareTrack(key));

                  SMyLib.entries(trackedSide).forEach(([key, val]) => {
                    if (key.startsWith('/')) {
                      delete trackedSide[key as never];
                      accSides(sideTrack, { [key]: val as never });
                    }
                  });

                  trackedSide.trackTail = [accTrack.length, sideTrack];
                  sides.push(trackedSide);
                });
              };

              accSides([], side);
              if (sides.length) return sides;
            };

            if (smylib.isFunc(box.side)) {
              const side = box.side;
              return (...props: any[]) => accSides(side(...props));
            } else return accSides(box.side);
          };

          const accRule: RealAccumulatableRule = {
            track: accTrack,
            onSuccess: box.onSuccess,
            onFailure: box.onFailure,
            args: { ...topRule.args, ...box.args },
            expecteds: (box.expected ? topRule.expecteds || [] : topRule.expecteds)?.concat(
              box.expected ? [[accTrack.length, box.expected]] : [],
            ),
            accesses: box.access ? (topRule.accesses || []).concat(box.access) : topRule.accesses,
            sides: accSides(),
            RRej: box.RRej === undefined ? topRule.RRej : box.RRej,
            scopeNode: `${topRule.scopeNode || ''}${
              topRule.scopeNode ? (box.scopeNode ? ` ${box.scopeNode}` : '') : box.scopeNode
            }`,
            $$vars: box.$$var ? { ...topRule.$$vars, [box.$$var]: accTrack.length } : topRule.$$vars,
          };

          if (box.fixAccesses) {
            fixedAccesses.push({
              track: accTrack,
              tail: box.fixAccesses,
            });
          }

          const execRule: ExecutionReal = smylib.clone({
            ...box,
            ...accRule,
            action: box.action!,
            method: box.method!,
            fix: accRule.track?.[0],
            value: box.value,
            canBeUnauthorized: box.canBeUnauthorized,
          });

          SMyLib.entries(execRule).forEach(([argName]) => {
            if (argName.startsWith('/') || argName.startsWith('<')) delete execRule[argName as never];
          });

          if (accRule.accesses) execRule.fixedAccesses = fixedAccesses;

          if (box.C || box.U || box.D) {
            (['C', 'U', 'D'] as const).forEach(crudName => {
              const boxCrudBox = box[crudName];
              if (boxCrudBox) {
                const boxAction: ExecutionReal = {
                  ...execRule,
                  ...boxCrudBox,
                  action: `${execRule.scopeNode}${
                    !box.scopeNode && track[track.length - 1] ? ` ${track[track.length - 1]}` : ''
                  } [${crudName}]`,
                  method: boxCrudBox.method ?? (crudName === 'C' ? 'push' : crudName === 'D' ? 'remove' : 'set'),
                  args: {
                    ...execRule.args,
                    ...boxCrudBox.args,
                  },
                };
                rules.push(boxAction);

                delete (boxAction as any).C;
                delete (boxAction as any).U;
                delete (boxAction as any).D;
              }
            });
          } else {
            if (execRule.action) rules.push(execRule);
          }

          delete execRule.scopeNode;

          const nextRule = transform(box as never, accRule);
          if (nextRule) return nextRule;
        }
      }
      return null;
    };

    transform(boxes);
    const shortRules = this.mapShortRules(rules);

    try {
      return {
        rules,
        shortRules,
        shortRulesMd5: smylib.md5(JSON.stringify(shortRules)),
      };
    } catch (error) {
      return { rules, shortRules, shortRulesMd5: null };
    }
  }

  static mapShortRules(rules: ExecutionReal[]) {
    return rules.map(({ title, shortTitle, level, action, isSequre, args }): ShortRealRule => {
      return {
        title,
        shortTitle,
        level,
        action,
        isSequre,
        args,
      };
    });
  }

  static prepareRuleForDo = (() => {
    const replacedFields: (keyof ExecutionReal)[] = ['value', 'sides'];
    const simpleFields: (keyof ExecutionReal)[] = [
      'action',
      'setInEachValueItem',
      'setEachInParent',
      'fix',
      'method',
      'expecteds',
      'setSystems',
      'setItemSystems',
      'uniqs',
    ];

    return (
      rule: ExecutionReal,
      realRule: ExecutionReal,
      allArgs: ExecutionArgs,
      value: unknown,
      auth?: LocalSokiAuth | null,
    ) => {
      const ret: ExecutionReal = { ...rule };

      simpleFields.forEach(argn => (ret[argn] = realRule[argn]));

      replacedFields.forEach(argn => {
        ret[argn] = this.replaceArgs(realRule[argn], allArgs, auth);
      });

      if (ret.value === undefined) ret.value = value ?? allArgs?.value;

      return ret;
    };
  })();

  static prepareRuleForFeedback(rule: ExecutionReal) {
    const ret = { ...rule, args: { ...rule.args } };

    delete ret.setInEachValueItem;
    delete ret.args.$$vars;

    return ret;
  }

  static prepareRule(
    rule: ExecutionReal,
    value: unknown,
    contents: Record<string, unknown>,
    realArgs?: ExecutionArgs,
    auth?: LocalSokiAuth | null,
  ) {
    const track = this.replaceArgs(rule.track, realArgs, auth);
    const $$vars: Record<string, unknown> = {};

    if (rule.$$vars)
      SMyLib.entries(rule.$$vars).forEach(([key, trackLen]) => {
        $$vars[key] = smylib.clone(this.tracker(track.slice(0, trackLen), contents, realArgs, null, auth).target);
      });

    const allArgs: ExecutionArgs = {
      ...realArgs,
      $$vars,
    };

    $$vars.$$currentValue = this.tracker(track, contents, realArgs, null, auth).target;

    const ret = {
      track,
      title: rule.title && smylib.stringTemplater(smylib.execIfFunc(rule.title, allArgs), allArgs),
      args: allArgs,
    } as ExecutionReal;

    return this.prepareRuleForDo(ret, rule, allArgs, value, auth);
  }

  static isAccessDenied(
    accesses: string[] | undefined | null,
    fixedAccesses: FixedAccesses,
    contents: Record<string, unknown>,
    realArgs?: Record<string, unknown>,
    auth?: LocalSokiAuth | null,
  ) {
    if (!accesses) return false;
    const templaterFixedArgs: Record<string, boolean> = {};

    const onUnknownArg = (argName: string): boolean => {
      const trackFixed = fixedAccesses?.find(({ tail }) => tail[argName]);
      const track = trackFixed?.track.concat(trackFixed.tail[argName]);

      if (!track) return false;

      const result = !!this.tracker(track, contents, realArgs, null, auth);
      templaterFixedArgs[argName] = result;

      return result;
    };

    return accesses.some(accessFormula => {
      try {
        const body = smylib
          .stringTemplater(accessFormula, templaterFixedArgs, onUnknownArg)
          .replace(makeRegExp('/[^()\\w|&!?]/g'), '');
        const data: { result?: boolean } = {};
        // eslint-disable-next-line no-new-func
        if (body) new Function('data', `data.result = ${body};`)(data);
        return !data.result;
      } catch (e) {
        console.error(e);
        return true;
      }
    });
  }

  private static delayTimeouts: Record<string, TimeOut> = {};

  static execute(
    config: FilerAppConfig,
    contents: Record<string, unknown>,
    execs: ExecutionDict[],
    auth?: LocalSokiAuth | null,
    isIgnoreDelay?: boolean,
  ) {
    return new Promise<ExecuteFeedbacks>((resolve, reject) => {
      try {
        const replacedExecs: ExecutionReal[] = [];
        const rules: ExecutionReal[] = [];
        const fixes: string[] = [];
        const level = auth?.level;
        const errors: ExecuteError[] = [];
        const bag: Record<string, unknown> = {};

        for (const exec of execs) {
          const prepRule = config.actions.rules.find(rule => rule.action === exec.action);
          if (!prepRule) {
            errors.push({
              type: ExecuteErrorType.NoRule,
              note: exec.action,
            });
            continue;
          }

          if (typeof prepRule.track[0] === 'string') {
            const onCantRead = config.requirements[prepRule.track[0]]?.onCantRead?.(
              false,
              exec,
              prepRule,
              auth,
              bag,
              contents[prepRule.track[0]],
              sokiWhenRejButTs,
            );
            if (onCantRead != null) {
              errors.push({
                type: ExecuteErrorType.Access,
                note: `Доступ к редактированию ограничен ${smylib.isArr(onCantRead) ? '<333>' : '#' + onCantRead}`,
              });

              break;
            }
          }

          if (prepRule.fixedAccesses) {
            if (
              !prepRule.accesses ||
              this.isAccessDenied(prepRule.accesses, prepRule.fixedAccesses, contents, exec.args, auth)
            ) {
              errors.push({
                type: ExecuteErrorType.Access,
                note: exec.action,
              });

              break;
            }
          }

          if (!exec.args || !prepRule.args) {
            errors.push({
              type: ExecuteErrorType.Args,
              note: exec.action,
            });

            break;
          } else {
            const argErrors = smylib.checkIsCorrectArgs(exec.action, exec.args, prepRule.args);
            if (argErrors?.length) {
              errors.push({
                type: ExecuteErrorType.Args,
                note: argErrors.join(';\n'),
              });

              break;
            }
          }

          const rule = this.prepareRule(prepRule, exec.value, contents, exec.args, auth);

          if (!isIgnoreDelay && prepRule.timer !== undefined) {
            const timer: ActionTimer = this.replaceArgs(prepRule.timer, rule.args, auth);
            if (timer.clearId) {
              clearTimeout(this.delayTimeouts[timer.clearId]);
              delete this.delayTimeouts[timer.clearId];
            }
            const callback = () => this.execute(config, contents, [exec], auth, true).then(resolve).catch(reject);

            if (timer.startId !== undefined) this.delayTimeouts[timer.startId] = setTimeout(callback, timer.startMs);
            else callback();

            return;
          }

          rules.push(prepRule);

          const note = rule.shortTitle || rule.action;

          if (rule.isSequre && smylib.md5(exec.args?.passphrase || '') !== sequreMD5Passphrase) {
            errors.push({
              type: ExecuteErrorType.Sequre,
              note,
            });
            break;
          }

          if (level != null && rule.level && rule.level > level) {
            errors.push({
              type: ExecuteErrorType.Level,
              note,
            });
            break;
          }

          if (smylib.isStr(rule.fix) && !fixes.includes(rule.fix)) fixes.push(rule.fix);

          if (rule.track) {
            const { target, penultimate, lastTrace } = this.checkExpecteds(
              rule.track,
              contents,
              rule.expecteds,
              rule.args,
            );
            this.setInEachValueItem(rule.value, rule.setInEachValueItem, exec.args, auth);
            this.setInEachValueItem(penultimate, rule.setEachInParent, exec.args, auth);

            this.setSystemsValues(target, rule.value, rule.setSystems, rule.setItemSystems);

            this.doIt({
              target,
              penultimate,
              lastTrace,
              auth,
              realArgs: exec.args,
              value: rule.value,
              uniqs: rule.uniqs,
              method: rule.method,
            })
              .then(did => {
                if (did || rule.sides) replacedExecs.push(this.prepareRuleForFeedback(rule));

                if (rule.sides) {
                  this.execSides(rule.track, rule.sides, contents, exec.args, auth, rule)
                    .then(
                      prepRule.onSuccess !== undefined
                        ? () => {
                            try {
                              prepRule.onSuccess!(
                                exec.args as never,
                                this.tracker(rule.track, contents, exec.args).target,
                                auth,
                              );
                            } catch (error) {}
                          }
                        : undefined,
                    )
                    .catch(note => errors.push({ note, type: ExecuteErrorType.Error }));
                  return;
                }

                if (did && prepRule.onSuccess !== undefined) {
                  try {
                    prepRule.onSuccess(exec.args as never, this.tracker(rule.track, contents, exec.args).target, auth);
                  } catch (error) {}
                }
              })
              .catch(note => {
                errors.push({ note, type: ExecuteErrorType.Error });
                try {
                  prepRule.onFailure?.(exec.args as never, this.tracker(rule.track, contents, exec.args).target, auth);
                } catch (error) {}
              });
          }
        }

        setTimeout(() => {
          const errorMessage = SMyLib.entries(
            errors
              .sort((a, b) => (a.type > b.type ? 1 : a.type < b.type ? -1 : 0))
              .reduce<Record<ExecuteErrorType, string[]>>(
                (acc, { type, note }) => ({
                  ...acc,
                  [type]: (acc[type] || []).concat(note),
                }),
                {} as never,
              ),
          )
            .reduce<string[]>((acc, [title, notes]) => acc.concat(`${title}:\n  ${notes.join(', ')}`), [])
            .join('\n');

          resolve({
            fixes,
            replacedExecs,
            errorMessage: errorMessage || undefined,
            rules,
          });
        });
      } catch (error) {
        reportFailError(reject, error);
      }
    });
  }
}
