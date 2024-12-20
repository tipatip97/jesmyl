import { MyLib } from 'front/utils';
import { SokiStatistic } from 'shared/api';
import { Visitor } from './Visitor';

export const Visits = ({ statistic }: { statistic: SokiStatistic }) => {
  return (
    <div className="margin-big-gap-b margin-gap-l color--3">
      <div className="margin-gap-v color--7">
        {MyLib.entries(statistic.pastVisits)
          .map(([dateStr, val]) => [new Date(dateStr).getTime(), val])
          .sort((a, b) => a[0] - b[0])
          .map(([ts, val]) => {
            return (
              <div key={ts}>
                {new Date(ts).toLocaleDateString()}
                {' - '}
                {val}
              </div>
            );
          })}
      </div>
      {statistic.visits.map((visitor, visitori) => {
        return (
          <Visitor
            key={visitori}
            visitor={visitor}
          />
        );
      })}
    </div>
  );
};
