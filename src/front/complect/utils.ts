import { makeRegExp } from '../../back/complect/makeRegExp';
import { itNNull } from '../../back/complect/utils';

export const makePseudoElementCorrectContentText = (text: string) =>
  text?.replace(makeRegExp("/'/g"), "\\'").replace(makeRegExp('/\\n/g'), '\\A');

export const getNodePathOnEvent = <ClassName extends string>(
  event: { target: unknown },
  stopClassName: string,
  classesOnWay?: ClassName[],
) => {
  let node = event.target as HTMLElement | null;
  let classesOnWayClone = classesOnWay ? [...classesOnWay] : [];
  const foundClassNames = {} as Record<ClassName, true | und>;

  while (node) {
    if (classesOnWayClone.length) {
      const currNode = node;

      classesOnWayClone = classesOnWayClone
        .map(className => {
          if (currNode.classList.contains(className)) {
            foundClassNames[className] = true;
            return null;
          }
          return className;
        })
        .filter(itNNull);
    }

    if (node.classList.contains(stopClassName)) break;

    node = node.parentElement;
  }

  return { foundClassNames, node };
};
