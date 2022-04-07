import { ReactNode } from "react";
import EvaIcon from "../../../../complect/Eva";

export const ePhases: [string, ReactNode, (props: any) => ReactNode][] = [
  [
    "a",
    <EvaIcon name="umbrella-outline" alt="Аппликатура" />,
    () => null, //<TheComApplicationsEditor />,
  ],
  [
    "t",
    <EvaIcon name="text-outline" alt="Текст" />,
    ({ coln }) => null, //<TheComEditor coln={coln} />,
  ],
  [
    "c",
    <EvaIcon name="music-outline" alt="Аккорды" />,
    ({ coln }) => null, //<TheComEditor coln={coln} />,
  ],
  [
    "o",
    <EvaIcon name="list-outline" alt="Порядок" />,
    () => null, //<ComOrder />
  ],
  [
    "s",
    <EvaIcon name="recording-outline" alt="Прокрутка" />,
    () => null, //<ComRecords />,
  ],
  [
    "r",
    "//" || "Повторения",
    () =>
      null, //<TheRegionsEditor coln="r"colnGetter="repeats"flashes={["/", "\\", "&nbsp;"]}/>
  ],
  [
    "tr",
    <EvaIcon name="monitor-outline" alt="Настройка трансляции" />,
    ({ coln }) => null, //<TheTranslationSetting />,
  ],
];
