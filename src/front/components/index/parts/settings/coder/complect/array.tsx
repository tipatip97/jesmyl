import { CoderResultComponent } from './model';
import { CoderResultValue } from './value';
import { CoderValueExpandable } from './value-expandable';

export const CoderResultArray: CoderResultComponent<unknown[]> = ({ value, name, scope }) => {
  return (
    <CoderValueExpandable
      name={name || 'Array'}
      scope={(scope || '[]') + (value.length ? value[0] + ':' + value.length : '')}
      shortValue={`[ ${value.length} ]`}
      fullValue={value.map((value, valuei) => {
        return (
          <div key={valuei}>
            <CoderResultValue
              name={valuei}
              value={value}
              scope={scope + `[${valuei}]`}
              isObjectParent
            />
          </div>
        );
      })}
      onCopy={value.length ? () => JSON.stringify(value) : null}
    />
  );
};
