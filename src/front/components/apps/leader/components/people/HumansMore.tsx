import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import mylib from '../../../../../complect/my-lib/MyLib';
import { RootState } from '../../../../../shared/store';
import di from '../../Leader.store';
import HumanMaster from './HumanMaster';
import { humanFieldTranslations } from './People.model';
import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';

const humanListSortVariantSelector = (state: RootState) => state.leader.humanListSortVariant;

export const HumansMoreContenter: BottomPopupContenter<{ moreNode?: ReactNode; fieldLabel?: 'mentors' | 'members' }> = (
  _,
  prepare,
  { moreNode, fieldLabel },
) => {
  const dispatch = useDispatch();
  const humanListSortVariant = useSelector(humanListSortVariantSelector);
  const [humanMasterNode, openHumanMaster] = useFullContent((close) => (
    <HumanMaster pushInCcontextAs={fieldLabel} close={close} />
  ));

  return [
    <>{humanMasterNode}</>,
    <>
      {prepare({
        items: [
          {
            title: 'Добавить нового участника',
            icon: 'person-add-outline',
            onClick: () => openHumanMaster(),
          },
          {
            title: 'Сортировать личности',
            icon: 'bar-chart-2-outline',
            onClick: (event) => {
              event.stopPropagation();
              const next = mylib.findNext(mylib.keys(humanFieldTranslations), humanListSortVariant);
              dispatch(di.humanListSortVariant(next));
            },
            rightNode: (
              <div className="abs-action abs-full flex center">{humanFieldTranslations[humanListSortVariant]}</div>
            ),
          },
        ],
      })}
      {mylib.func(moreNode).call()}
    </>,
  ];
};
