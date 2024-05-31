import BrutalItem from '../../../../complect/brutal-item/BrutalItem';
import BrutalScreen from '../../../../complect/brutal-screen/BrutalScreen';
import { IconBookOpen02StrokeRounded } from '@icons/book-open-02';
import { IconCalendar02StrokeRounded } from '@icons/calendar-02';
import { IconCheckmarkBadge01StrokeRounded } from '@icons/checkmark-badge-01';
import { IconStarStrokeRounded } from '@icons/star';
import useCmNav from '../base/useCmNav';
import useSelectedComs from '../base/useSelectedComs';
import { useCols } from '../cols/useCols';
import PhaseCmContainer from '../complect/phase-container/PhaseCmContainer';
import './Lists.scss';

export default function Lists() {
  const { goTo } = useCmNav();
  const cols = useCols();
  const { selectedComws } = useSelectedComs();

  return (
    <PhaseCmContainer
      className="lists-container"
      withoutBackButton
      headTitle="Списки"
      contentClass="flex between column"
      content={
        <>
          <BrutalItem
            icon={<IconStarStrokeRounded />}
            title="Избранное"
            onClick={() => goTo('marks')}
          />
          <BrutalItem
            icon={<IconCalendar02StrokeRounded />}
            title="События"
            onClick={() => goTo('meetings')}
          />
          {selectedComws.length ? (
            <BrutalItem
              icon={<IconCheckmarkBadge01StrokeRounded />}
              title="Выбранное"
              onClick={() => goTo('selected')}
            />
          ) : null}
          <BrutalScreen>
            <div className="title sticky bg-inherit">Тематические:</div>
            {cols?.cats.map(cat => {
              return !cat.wid ? null : (
                <div
                  key={cat.wid}
                  className="item flex"
                  onClick={() => goTo({ place: 'cat', data: { ccatw: cat.wid } })}
                >
                  <IconBookOpen02StrokeRounded className="margin-big-gap" />
                  <div>{cat.name}</div>
                </div>
              );
            })}
          </BrutalScreen>
        </>
      }
    />
  );
}
