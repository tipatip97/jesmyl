import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M14.1746 11.3517C14.8469 10.5618 16.2132 9.58336 15.97 9.11886M15.97 9.11886C16.1055 8.64518 14.7827 7.70887 14.1716 6.99463M15.97 9.11886C13.2147 9.06207 11.5289 9.37785 9.90163 10.9129C8.20681 12.5118 7.89136 14.2372 8.02853 17.0052',
  d3: 'M14.1755 11.3502C14.8479 10.5602 16.2142 9.58024 15.971 9.12024M15.971 9.12024C16.1065 8.65024 14.7836 7.71023 14.1725 6.99023M15.971 9.12024C13.2157 9.06024 11.5299 9.38028 9.90262 10.9103C8.20782 12.5103 7.89232 14.2403 8.02952 17.0103',
  d4: 'M7.25 17C7.25 17.4142 7.58579 17.75 8 17.75C8.41421 17.75 8.75 17.4142 8.75 17H7.25ZM16 9.91027C16.4142 9.91027 16.75 9.57448 16.75 9.16027C16.75 8.74605 16.4142 8.41027 16 8.41027V9.91027ZM13.3016 9.23451L13.4143 9.976L13.3016 9.23451ZM8.07738 14.2474L7.33739 14.1253L8.07738 14.2474ZM14.692 6.46477C14.3965 6.17461 13.9216 6.17901 13.6314 6.47461C13.3413 6.77021 13.3457 7.24506 13.6413 7.53523L14.692 6.46477ZM15.7401 8.54452L16.2655 8.00929V8.00929L15.7401 8.54452ZM15.7401 9.77641L16.2655 10.3116L15.7401 9.77641ZM13.6413 10.7857C13.3457 11.0759 13.3413 11.5507 13.6314 11.8463C13.9216 12.1419 14.3965 12.1463 14.692 11.8562L13.6413 10.7857ZM8.75 17V16.3969H7.25V17H8.75ZM16 8.41027C14.8707 8.41027 13.7496 8.40782 13.1889 8.49303L13.4143 9.976C13.8307 9.91271 14.7938 9.91027 16 9.91027V8.41027ZM8.75 16.3969C8.75 15.2466 8.75252 14.7624 8.81736 14.3696L7.33739 14.1253C7.24748 14.67 7.25 15.3063 7.25 16.3969H8.75ZM13.1889 8.49303C10.1962 8.94786 7.81906 11.2071 7.33739 14.1253L8.81736 14.3696C9.18755 12.1269 11.0287 10.3386 13.4143 9.976L13.1889 8.49303ZM13.6413 7.53523L15.2147 9.07974L16.2655 8.00929L14.692 6.46477L13.6413 7.53523ZM15.2147 9.24119L13.6413 10.7857L14.692 11.8562L16.2655 10.3116L15.2147 9.24119ZM15.2147 9.07974C15.2618 9.12594 15.2618 9.19499 15.2147 9.24119L16.2655 10.3116C16.9115 9.67748 16.9115 8.64345 16.2655 8.00929L15.2147 9.07974Z',
  d5: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM14.8672 6.28637C14.473 5.89948 13.8399 5.90535 13.453 6.29948C13.2619 6.49417 13.1666 6.74717 13.1667 7L13.1668 8.24356L13.1514 8.24586C10.0574 8.71608 7.59098 11.0538 7.09073 14.0846C6.99982 14.6354 6.99988 15.2716 6.99999 16.2888L7 16.3969V17C7 17.5523 7.44771 18 8 18C8.55228 18 9 17.5523 9 17V16.3969C9 15.2367 9.00336 14.7778 9.06403 14.4103C9.40087 12.3696 11.0228 10.7146 13.1671 10.274L13.1672 11.2875C13.1584 11.5513 13.2535 11.8182 13.453 12.0214C13.8399 12.4156 14.473 12.4214 14.8672 12.0346L16.4406 10.49C16.8128 10.1247 16.9993 9.6441 17 9.16329L17 9.16027L17 9.15754C16.9992 8.67676 16.8128 8.19622 16.4406 7.83088L14.8672 6.28637Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M13.453 6.29948C13.8399 5.90535 14.4731 5.89948 14.8672 6.28637L16.4406 7.83088C16.8128 8.19622 16.9993 8.67676 17 9.15754L17 9.16027L17 9.16329C16.9993 9.6441 16.8128 10.1247 16.4406 10.49L14.8672 12.0346C14.4731 12.4214 13.8399 12.4156 13.453 12.0214C13.2535 11.8182 13.1584 11.5513 13.1672 11.2875L13.1671 10.274C11.0228 10.7146 9.40088 12.3696 9.06404 14.4103C9.00338 14.7778 9.00002 15.2367 9.00002 16.3969V17C9.00002 17.5523 8.5523 18 8.00002 18C7.44773 18 7.00001 17.5523 7.00001 17V16.3969L7.00001 16.2888C6.9999 15.2716 6.99983 14.6354 7.09074 14.0846C7.591 11.0538 10.0574 8.71608 13.1514 8.24586L13.1668 8.24356L13.1667 7C13.1667 6.74717 13.2619 6.49417 13.453 6.29948Z',
  d8: 'M21 3V21H3V3H21Z',
  d9: 'M13.5 7L16 9.5L13.5 12',
  d10: 'M8 17V9.62258C8 9.56732 8.04603 9.50146 8.10106 9.50146H16',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM8.75 10.25H14.1885L12.9688 11.4697L14.0294 12.5304L17.0597 9.50006L14.0294 6.46973L12.9688 7.53039L14.1884 8.75H8C7.58579 8.75 7.25 9.08579 7.25 9.5V17H8.75V10.25Z',
} as const;

export const IconSquareArrowMoveRightUpStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-right-up-stroke-rounded IconSquareArrowMoveRightUpStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveRightUpDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-right-up-duotone-rounded IconSquareArrowMoveRightUpDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
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

export const IconSquareArrowMoveRightUpTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-right-up-twotone-rounded IconSquareArrowMoveRightUpTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveRightUpSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-right-up-solid-rounded IconSquareArrowMoveRightUpSolidRounded"
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

export const IconSquareArrowMoveRightUpBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-right-up-bulk-rounded IconSquareArrowMoveRightUpBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveRightUpStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-right-up-stroke-sharp IconSquareArrowMoveRightUpStrokeSharp"
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveRightUpSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-right-up-solid-sharp IconSquareArrowMoveRightUpSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareArrowMoveRightUp: TheIconSelfPack = {
  name: 'SquareArrowMoveRightUp',
  StrokeRounded: IconSquareArrowMoveRightUpStrokeRounded,
  DuotoneRounded: IconSquareArrowMoveRightUpDuotoneRounded,
  TwotoneRounded: IconSquareArrowMoveRightUpTwotoneRounded,
  SolidRounded: IconSquareArrowMoveRightUpSolidRounded,
  BulkRounded: IconSquareArrowMoveRightUpBulkRounded,
  StrokeSharp: IconSquareArrowMoveRightUpStrokeSharp,
  SolidSharp: IconSquareArrowMoveRightUpSolidSharp,
};