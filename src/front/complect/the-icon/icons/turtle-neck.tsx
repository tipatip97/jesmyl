import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.9618 13.0591L4.56841 20.2197C4.42904 20.6366 4.35936 20.8451 4.18712 20.9399C3.82412 21.1398 2.32946 20.8084 2.07132 20.4251C1.9625 20.2635 1.99464 20.0483 2.05892 19.6178L3.61592 9.19215C3.88106 7.41681 4.29884 6.86652 5.93466 6.12499L9 4.51741V3.01007C9 2.17768 9.17499 2.00517 10.0076 2.00517L13.9924 2C14.825 2 15 2.17251 15 3.0049V4.51224L18.0653 6.12499C19.7012 6.86652 20.1189 7.41682 20.3841 9.19215L21.9411 19.6178C22.0054 20.0483 22.0375 20.2635 21.9287 20.4251C21.6705 20.8084 20.1759 21.1398 19.8129 20.9399C19.6406 20.8451 19.571 20.6366 19.4316 20.2197L17.0382 13.0591',
  d2: 'M6.5 10C6.66613 10.9968 6.87572 11.9958 6.95911 13.0034C7.15045 15.3153 7 17.683 7 20C7 21.6547 7.34533 22 9 22H15C16.6547 22 17 21.6547 17 20C17 17.683 16.8495 15.3153 17.0409 13.0034C17.1243 11.9958 17.3339 10.9968 17.5 10',
  d3: 'M9 5C10.8 6.33333 13.2 6.33333 15 5',
  d4: 'M5.93466 6.12838L9 4.5208C9.83333 5.52315 12.2 6.92542 15 4.51562L18.0653 6.12838C19.7012 6.8699 20.1189 7.4202 20.3841 9.19554L21.9411 19.6212C22.0054 20.0516 22.0375 20.2668 21.9287 20.4284C21.6705 20.8118 20.1759 21.1432 19.8129 20.9433C19.6406 20.8485 19.571 20.64 19.4316 20.2231L17.0382 13.0625C16.8843 14.2094 16.6688 17.5034 17.0382 21.5034H6.9618C7.11573 19.5428 7.33123 15.1097 6.9618 13.0625L4.56841 20.2231C4.42904 20.64 4.35936 20.8485 4.18712 20.9433C3.82412 21.1432 2.32946 20.8118 2.07132 20.4284C1.9625 20.2668 1.99464 20.0516 2.05892 19.6212L3.61592 9.19554C3.88106 7.4202 4.29884 6.8699 5.93466 6.12838Z',
  d5: 'M14.6612 1.30726C14.4479 1.26063 14.2166 1.25 13.9924 1.25L10.0072 1.25517C9.78309 1.25519 9.55195 1.26583 9.33877 1.31243C9.11709 1.36088 8.86944 1.45787 8.66242 1.66397C8.45517 1.87031 8.35708 2.11784 8.30799 2.34019C8.26081 2.5539 8.25 2.78556 8.25 3.01007V4.06335L5.60516 5.4504C4.77335 5.82884 4.12015 6.21379 3.66315 6.81791C3.20227 7.42715 3.01061 8.1671 2.87415 9.08087L1.31237 19.5385C1.28439 19.7253 1.25377 19.9298 1.25035 20.1073C1.24631 20.3166 1.27546 20.5854 1.44923 20.8435C1.63974 21.1264 1.95418 21.2899 2.15229 21.3789C2.38871 21.4852 2.65896 21.57 2.91874 21.6309C3.17884 21.6919 3.45441 21.7349 3.70533 21.7464C3.8306 21.7521 3.96389 21.7507 4.0937 21.7348C4.213 21.7202 4.38368 21.6874 4.54885 21.5964C4.82333 21.4453 4.97264 21.2174 5.06476 21.0277C5.14294 20.8667 5.26943 20.4877 5.26943 20.4877L6.28575 17.4471L6.27866 17.8093L6.27866 17.8093C6.2644 18.5313 6.25 19.2604 6.25 19.9995C6.25 20.4294 6.27144 20.8258 6.34728 21.171C6.42498 21.5247 6.56966 21.8708 6.84917 22.1503C7.12868 22.4298 7.4748 22.5745 7.82851 22.6522C8.17373 22.728 8.5701 22.7495 9 22.7495H15C15.4299 22.7495 15.8263 22.728 16.1715 22.6522C16.5252 22.5745 16.8713 22.4298 17.1508 22.1503C17.4303 21.8708 17.575 21.5247 17.6527 21.171C17.7286 20.8258 17.75 20.4294 17.75 19.9995C17.75 19.2603 17.7356 18.5312 17.7213 17.8093L17.7143 17.4471L18.7306 20.4877C18.791 20.6688 18.8571 20.8667 18.9352 21.0277C19.0274 21.2174 19.1767 21.4453 19.4512 21.5964C19.6163 21.6874 19.787 21.7202 19.9063 21.7348C20.0361 21.7507 20.1694 21.7521 20.2947 21.7464C20.5456 21.7349 20.8212 21.6919 21.0813 21.6309C21.341 21.57 21.6113 21.4852 21.8477 21.3789C22.0458 21.2899 22.3603 21.1264 22.5508 20.8435C22.7245 20.5854 22.7537 20.3166 22.7496 20.1073C22.7462 19.9297 22.7156 19.7253 22.6876 19.5384L21.1258 9.08087C20.9894 8.1671 20.7977 7.42715 20.3369 6.81791C19.8799 6.2139 19.2269 5.82898 18.3953 5.45061L15.75 4.05885V3.0049C15.75 2.78039 15.7392 2.54873 15.692 2.33502C15.6429 2.11267 15.5448 1.86514 15.3376 1.6588C15.1306 1.45269 14.8829 1.35571 14.6612 1.30726ZM14.25 4.16146V3.0049C14.25 2.89674 14.2465 2.81711 14.2413 2.75879C14.1825 2.75356 14.1021 2.75001 13.9928 2.75L10.0086 2.75517C9.89908 2.75517 9.8176 2.75873 9.75869 2.76396C9.75352 2.82228 9.75 2.9019 9.75 3.01007V4.16817C11.1251 5.23989 12.8558 5.24207 14.25 4.16146Z',
  d6: 'M14.6612 1.30726C14.4479 1.26063 14.2166 1.25 13.9924 1.25L10.0072 1.25517C9.78309 1.25519 9.55195 1.26583 9.33877 1.31243C9.11709 1.36088 8.86944 1.45787 8.66242 1.66397C8.45517 1.87031 8.35708 2.11784 8.30799 2.34019C8.26081 2.5539 8.25 2.78556 8.25 3.01007V4.06335L8.65167 3.8527C8.93002 3.70672 9.26986 3.74979 9.503 3.96058C9.58391 4.03374 9.6663 4.10294 9.75 4.16817V3.01007C9.75 2.9019 9.75352 2.82228 9.75869 2.76396C9.8176 2.75873 9.89908 2.75517 10.0086 2.75517L13.9928 2.75C14.1021 2.75001 14.1825 2.75356 14.2413 2.75879C14.2465 2.81711 14.25 2.89674 14.25 3.0049V4.16146C14.3344 4.09607 14.4175 4.02673 14.4992 3.95341C14.7327 3.74404 15.0717 3.70199 15.3492 3.84799L15.75 4.05886V3.0049C15.75 2.78039 15.7392 2.54873 15.692 2.33502C15.6429 2.11267 15.5448 1.86514 15.3376 1.6588C15.1306 1.45269 14.8829 1.35571 14.6612 1.30726Z',
  d7: 'M14.4992 3.95341C14.7327 3.74404 15.0717 3.70199 15.3492 3.84799L18.3953 5.45061C19.2269 5.82898 19.8799 6.2139 20.3369 6.81791C20.7977 7.42715 20.9894 8.1671 21.1258 9.08087L22.6876 19.5384C22.7156 19.7253 22.7462 19.9297 22.7496 20.1073C22.7537 20.3166 22.7245 20.5854 22.5508 20.8435C22.3603 21.1264 22.0458 21.2899 21.8477 21.3789C21.6113 21.4852 21.341 21.57 21.0813 21.6309C20.8212 21.6919 20.5456 21.7349 20.2947 21.7464C20.1694 21.7521 20.0361 21.7507 19.9063 21.7348C19.787 21.7202 19.6163 21.6874 19.4512 21.5964C19.1767 21.4453 19.0274 21.2174 18.9352 21.0277C18.8571 20.8667 18.791 20.6688 18.7306 20.4877L17.7143 17.4471L17.7213 17.8093C17.7356 18.5312 17.75 19.2603 17.75 19.9995C17.75 20.4294 17.7286 20.8258 17.6527 21.171C17.575 21.5247 17.4303 21.8708 17.1508 22.1503C16.8713 22.4298 16.5252 22.5745 16.1715 22.6522C15.8263 22.728 15.4299 22.7495 15 22.7495H9C8.5701 22.7495 8.17373 22.728 7.82851 22.6522C7.4748 22.5745 7.12868 22.4298 6.84917 22.1503C6.56966 21.8708 6.42498 21.5247 6.34728 21.171C6.27144 20.8258 6.25 20.4294 6.25 19.9995C6.25 19.2604 6.2644 18.5313 6.27866 17.8093L6.27866 17.8093L6.28575 17.4471L5.26943 20.4877C5.26943 20.4877 5.14294 20.8667 5.06476 21.0277C4.97264 21.2174 4.82333 21.4453 4.54885 21.5964C4.38368 21.6874 4.213 21.7202 4.0937 21.7348C3.96389 21.7507 3.8306 21.7521 3.70533 21.7464C3.45441 21.7349 3.17884 21.6919 2.91874 21.6309C2.65896 21.57 2.38871 21.4852 2.15229 21.3789C1.95418 21.2899 1.63974 21.1264 1.44923 20.8435C1.27546 20.5854 1.24631 20.3166 1.25035 20.1073C1.25377 19.9298 1.28439 19.7253 1.31237 19.5385L2.87415 9.08087C3.01061 8.1671 3.20227 7.42715 3.66315 6.81791C4.12015 6.21379 4.77335 5.82884 5.60516 5.4504L8.65167 3.8527C8.93002 3.70672 9.26986 3.74979 9.503 3.96058C10.9936 5.30834 12.9843 5.31217 14.4992 3.95341Z',
  d8: 'M6.96147 13.0591L4.5 21L2 20L3.99967 7.5L8.99967 4.51741V2H14.9997V4.51224L19.9997 7.5L22 20L19.5 21L17.0379 13.0591',
  d9: 'M17 10V22H7V10',
  d10: 'M8.99973 1.25C8.58552 1.25 8.24973 1.58579 8.24973 2V4.0915L3.61551 6.85589C3.42474 6.96969 3.29423 7.16219 3.25915 7.38153L1.25947 19.8815C1.20408 20.2277 1.39597 20.5661 1.72151 20.6964L4.22151 21.6964C4.41586 21.7741 4.63385 21.7671 4.8228 21.677C5.01175 21.5869 5.15445 21.422 5.21643 21.2221L6.25 17.8877V22.75H17.75V17.8882L18.7837 21.2221C18.8457 21.422 18.9884 21.587 19.1773 21.677C19.3663 21.7671 19.5843 21.7741 19.7786 21.6964L22.2786 20.6964C22.6042 20.5661 22.796 20.2277 22.7406 19.8815L20.7403 7.38149C20.7052 7.16236 20.5749 6.97002 20.3844 6.85619L15.7497 4.0867V2C15.7497 1.58579 15.4139 1.25 14.9997 1.25H8.99973ZM9.74609 4.60048C11.1379 5.46656 12.864 5.46657 14.2559 4.60051L14.2507 2.75H9.7507L9.74609 4.60048Z',
};

export const IconTurtleNeckStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="turtle-neck-stroke-rounded IconTurtleNeckStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTurtleNeckDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="turtle-neck-duotone-rounded IconTurtleNeckDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTurtleNeckTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="turtle-neck-twotone-rounded IconTurtleNeckTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTurtleNeckSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="turtle-neck-solid-rounded IconTurtleNeckSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTurtleNeckBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="turtle-neck-bulk-rounded IconTurtleNeckBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTurtleNeckStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="turtle-neck-stroke-sharp IconTurtleNeckStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTurtleNeckSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="turtle-neck-solid-sharp IconTurtleNeckSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTurtleNeck: TheIconSelfPack = {
  name: 'TurtleNeck',
  StrokeRounded: IconTurtleNeckStrokeRounded,
  DuotoneRounded: IconTurtleNeckDuotoneRounded,
  TwotoneRounded: IconTurtleNeckTwotoneRounded,
  SolidRounded: IconTurtleNeckSolidRounded,
  BulkRounded: IconTurtleNeckBulkRounded,
  StrokeSharp: IconTurtleNeckStrokeSharp,
  SolidSharp: IconTurtleNeckSolidSharp,
};