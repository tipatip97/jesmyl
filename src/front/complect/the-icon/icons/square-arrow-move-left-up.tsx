import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M9.82506 11.3517C9.15268 10.5618 7.78642 9.58336 8.02962 9.11886M8.02962 9.11886C7.89414 8.64518 9.21696 7.70887 9.82805 6.99463M8.02962 9.11886C10.7849 9.06207 12.4707 9.37785 14.098 10.9129C15.7928 12.5118 16.1083 14.2372 15.9711 17.0052',
  d3: 'M16.75 17C16.75 17.4142 16.4142 17.75 16 17.75C15.5858 17.75 15.25 17.4142 15.25 17H16.75ZM8 9.91027C7.58579 9.91027 7.25 9.57448 7.25 9.16027C7.25 8.74605 7.58579 8.41027 8 8.41027V9.91027ZM10.6984 9.23451L10.5857 9.976L10.6984 9.23451ZM15.9226 14.2474L16.6626 14.1253L15.9226 14.2474ZM9.30795 6.46477C9.60355 6.17461 10.0784 6.17901 10.3686 6.47461C10.6587 6.77021 10.6543 7.24506 10.3587 7.53523L9.30795 6.46477ZM8.25991 8.54452L7.73452 8.00929V8.00929L8.25991 8.54452ZM8.25991 9.77641L7.73452 10.3116L8.25991 9.77641ZM10.3587 10.7857C10.6543 11.0759 10.6587 11.5507 10.3686 11.8463C10.0784 12.1419 9.60355 12.1463 9.30795 11.8562L10.3587 10.7857ZM15.25 17V16.3969H16.75V17H15.25ZM8 8.41027C9.12926 8.41027 10.2504 8.40782 10.8111 8.49303L10.5857 9.976C10.1693 9.91271 9.20618 9.91027 8 9.91027V8.41027ZM15.25 16.3969C15.25 15.2466 15.2475 14.7624 15.1826 14.3696L16.6626 14.1253C16.7525 14.67 16.75 15.3063 16.75 16.3969H15.25ZM10.8111 8.49303C13.8038 8.94786 16.1809 11.2071 16.6626 14.1253L15.1826 14.3696C14.8125 12.1269 12.9713 10.3386 10.5857 9.976L10.8111 8.49303ZM10.3587 7.53523L8.7853 9.07974L7.73452 8.00929L9.30795 6.46477L10.3587 7.53523ZM8.7853 9.24119L10.3587 10.7857L9.30795 11.8562L7.73452 10.3116L8.7853 9.24119ZM8.7853 9.07974C8.73823 9.12594 8.73823 9.19499 8.7853 9.24119L7.73452 10.3116C7.08849 9.67748 7.08849 8.64345 7.73452 8.00929L8.7853 9.07974Z',
  d4: 'M6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.7521 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059ZM9.13282 6.28637C9.52695 5.89948 10.1601 5.90535 10.547 6.29948C10.7381 6.49417 10.8334 6.74717 10.8333 7L10.8332 8.24356L10.8486 8.24586C13.9426 8.71608 16.409 11.0538 16.9093 14.0846C17.0002 14.6354 17.0001 15.2716 17 16.2888L17 16.3969V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V16.3969C15 15.2367 14.9966 14.7778 14.936 14.4103C14.5991 12.3696 12.9772 10.7146 10.8329 10.274L10.8328 11.2875C10.8416 11.5513 10.7465 11.8182 10.547 12.0214C10.1601 12.4156 9.52695 12.4214 9.13282 12.0346L7.55939 10.49C7.18719 10.1247 7.00073 9.6441 7 9.16329L7 9.16027L7 9.15754C7.00075 8.67676 7.18722 8.19622 7.55939 7.83088L9.13282 6.28637Z',
  d5: 'M11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.7521 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428Z',
  d6: 'M10.547 6.29948C10.1601 5.90535 9.52694 5.89948 9.13281 6.28637L7.55937 7.83088C7.1872 8.19622 7.00074 8.67676 6.99999 9.15754L6.99998 9.16027L6.99999 9.16329C7.00071 9.6441 7.18718 10.1247 7.55937 10.49L9.13281 12.0346C9.52694 12.4214 10.1601 12.4156 10.547 12.0214C10.7465 11.8182 10.8416 11.5513 10.8328 11.2875L10.8329 10.274C12.9772 10.7146 14.5991 12.3696 14.936 14.4103C14.9966 14.7778 15 15.2367 15 16.3969V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V16.3969L17 16.2888C17.0001 15.2716 17.0002 14.6354 16.9093 14.0846C16.409 11.0538 13.9426 8.71608 10.8486 8.24586L10.8332 8.24356L10.8333 7C10.8333 6.74717 10.7381 6.49417 10.547 6.29948Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M10.4961 7L7.99609 9.5L10.4961 12',
  d9: 'M8 9.50151H15.8989C15.954 9.50151 16 9.56736 16 9.62263V17',
  d10: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM9.96588 6.46973L11.0265 7.53039L9.80692 8.75H15.9961C16.4103 8.75 16.7461 9.08579 16.7461 9.5V17H15.2461V10.25H9.80681L11.0265 11.4697L9.96588 12.5304L6.93555 9.50006L9.96588 6.46973Z',
};

export const IconSquareArrowMoveLeftUpStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-up-stroke-rounded IconSquareArrowMoveLeftUpStrokeRounded"
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

export const IconSquareArrowMoveLeftUpDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-up-duotone-rounded IconSquareArrowMoveLeftUpDuotoneRounded"
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
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveLeftUpTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-up-twotone-rounded IconSquareArrowMoveLeftUpTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveLeftUpSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-up-solid-rounded IconSquareArrowMoveLeftUpSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveLeftUpBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-up-bulk-rounded IconSquareArrowMoveLeftUpBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveLeftUpStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-up-stroke-sharp IconSquareArrowMoveLeftUpStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveLeftUpSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-up-solid-sharp IconSquareArrowMoveLeftUpSolidSharp"
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

export const iconPackOfSquareArrowMoveLeftUp: TheIconSelfPack = {
  name: 'SquareArrowMoveLeftUp',
  StrokeRounded: IconSquareArrowMoveLeftUpStrokeRounded,
  DuotoneRounded: IconSquareArrowMoveLeftUpDuotoneRounded,
  TwotoneRounded: IconSquareArrowMoveLeftUpTwotoneRounded,
  SolidRounded: IconSquareArrowMoveLeftUpSolidRounded,
  BulkRounded: IconSquareArrowMoveLeftUpBulkRounded,
  StrokeSharp: IconSquareArrowMoveLeftUpStrokeSharp,
  SolidSharp: IconSquareArrowMoveLeftUpSolidSharp,
};