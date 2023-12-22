import { CoderResultComponent } from './model';
import { CoderResultValue } from './value';

export const CoderResultLine: CoderResultComponent<unknown[][]> = ({ value }) => {
  return (
    <>
      {value.map((result, resulti) => {
        return (
          <div
            key={resulti}
            className="margin-giant-gap-t"
          >
            {result.map((result, resulti) => (
              <div
                key={resulti}
                className="margin-gap-t"
              >
                <CoderResultValue
                  value={result}
                  scope=""
                />
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};
