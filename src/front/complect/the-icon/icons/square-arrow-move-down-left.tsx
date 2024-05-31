import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M9.84166 12.6589C9.16929 13.4488 7.80302 14.4272 8.04622 14.8917M8.04622 14.8917C7.91074 15.3654 9.23356 16.3017 9.84465 17.016M8.04622 14.8917C10.8015 14.9485 12.4873 14.6328 14.1146 13.0977C15.8094 11.4988 16.1249 9.77339 15.9877 7.00537',
  d3: 'M9.82502 12.6451C9.15272 13.4351 7.78642 14.4151 8.02962 14.8751M8.02962 14.8751C7.89412 15.3551 9.21692 16.2851 9.82802 17.0051M8.02962 14.8751C10.7849 14.9351 12.4707 14.6151 14.098 13.0851C15.7928 11.4851 16.1082 9.75512 15.9711 6.99512',
  d4: 'M16.75 7C16.75 6.58579 16.4142 6.25 16 6.25C15.5858 6.25 15.25 6.58579 15.25 7H16.75ZM8 14.0897C7.58579 14.0897 7.25 14.4255 7.25 14.8397C7.25 15.2539 7.58579 15.5897 8 15.5897V14.0897ZM10.6984 14.7655L10.5857 14.024L10.6984 14.7655ZM15.9226 9.75256L16.6626 9.8747L15.9226 9.75256ZM9.30795 17.5352C9.60355 17.8254 10.0784 17.821 10.3686 17.5254C10.6587 17.2298 10.6543 16.7549 10.3587 16.4648L9.30795 17.5352ZM8.25991 15.4555L7.73452 15.9907V15.9907L8.25991 15.4555ZM8.25991 14.2236L7.73452 13.6884L8.25991 14.2236ZM10.3587 13.2143C10.6543 12.9241 10.6587 12.4493 10.3686 12.1537C10.0784 11.8581 9.60355 11.8537 9.30795 12.1438L10.3587 13.2143ZM15.25 7V7.60306H16.75V7H15.25ZM8 15.5897C9.12926 15.5897 10.2504 15.5922 10.8111 15.507L10.5857 14.024C10.1693 14.0873 9.20618 14.0897 8 14.0897V15.5897ZM15.25 7.60306C15.25 8.75337 15.2475 9.23759 15.1826 9.63041L16.6626 9.8747C16.7525 9.32998 16.75 8.69372 16.75 7.60306H15.25ZM10.8111 15.507C13.8038 15.0521 16.1809 12.7929 16.6626 9.8747L15.1826 9.63041C14.8125 11.8731 12.9713 13.6614 10.5857 14.024L10.8111 15.507ZM10.3587 16.4648L8.7853 14.9203L7.73452 15.9907L9.30795 17.5352L10.3587 16.4648ZM8.7853 14.7588L10.3587 13.2143L9.30795 12.1438L7.73452 13.6884L8.7853 14.7588ZM8.7853 14.9203C8.73823 14.8741 8.73823 14.805 8.7853 14.7588L7.73452 13.6884C7.08849 14.3225 7.08849 15.3566 7.73452 15.9907L8.7853 14.9203Z',
  d5: 'M6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.7521 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694ZM9.13282 17.7136C9.52695 18.1005 10.1601 18.0946 10.547 17.7005C10.7381 17.5058 10.8334 17.2528 10.8333 17L10.8332 15.7564L10.8486 15.7541C13.9426 15.2839 16.409 12.9462 16.9093 9.91541C17.0002 9.36465 17.0001 8.72839 17 7.7112L17 7.60306V7C17 6.44771 16.5523 6 16 6C15.4477 6 15 6.44771 15 7V7.60306C15 8.76331 14.9966 9.22219 14.936 9.5897C14.5991 11.6304 12.9772 13.2854 10.8329 13.726L10.8328 12.7125C10.8416 12.4487 10.7465 12.1818 10.547 11.9786C10.1601 11.5844 9.52695 11.5786 9.13282 11.9654L7.55939 13.51C7.18719 13.8753 7.00073 14.3559 7 14.8367L7 14.8397L7 14.8425C7.00075 15.3232 7.18722 15.8038 7.55939 16.1691L9.13282 17.7136Z',
  d6: 'M11.9428 22.25C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.7521 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.7521 1.74999 11.9428 1.75H11.9428H12.0572H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428Z',
  d7: 'M10.547 17.7005C10.1601 18.0946 9.52694 18.1005 9.13281 17.7136L7.55937 16.1691C7.1872 15.8038 7.00074 15.3232 6.99999 14.8425L6.99998 14.8397L6.99999 14.8367C7.00071 14.3559 7.18718 13.8753 7.55937 13.51L9.13281 11.9654C9.52694 11.5786 10.1601 11.5844 10.547 11.9786C10.7465 12.1818 10.8416 12.4487 10.8328 12.7125L10.8329 13.726C12.9772 13.2854 14.5991 11.6304 14.936 9.5897C14.9966 9.22219 15 8.76331 15 7.60306V7C15 6.44771 15.4477 6 16 6C16.5523 6 17 6.44771 17 7V7.60306L17 7.7112C17.0001 8.72839 17.0002 9.36465 16.9093 9.91541C16.409 12.9462 13.9426 15.2839 10.8486 15.7541L10.8332 15.7564L10.8333 17C10.8333 17.2528 10.7381 17.5058 10.547 17.7005Z',
  d8: 'M21 3V21H3V3H21Z',
  d9: 'M8 14.5043H15.8989C15.954 14.5043 16 14.4385 16 14.3832V7.00586',
  d10: 'M10.4909 17.006L8 14.5044L10.4909 12.0029',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM15.2461 13.75V7H16.7461V14.5C16.7461 14.9142 16.4103 15.25 15.9961 15.25H9.80681L11.0265 16.4697L9.96588 17.5304L6.93555 14.5001L9.96588 11.4697L11.0265 12.5304L9.80692 13.75H15.2461Z',
} as const;

export const IconSquareArrowMoveDownLeftStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-left-stroke-rounded IconSquareArrowMoveDownLeftStrokeRounded"
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

export const IconSquareArrowMoveDownLeftDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-left-duotone-rounded IconSquareArrowMoveDownLeftDuotoneRounded"
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

export const IconSquareArrowMoveDownLeftTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-left-twotone-rounded IconSquareArrowMoveDownLeftTwotoneRounded"
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

export const IconSquareArrowMoveDownLeftSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-left-solid-rounded IconSquareArrowMoveDownLeftSolidRounded"
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

export const IconSquareArrowMoveDownLeftBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-left-bulk-rounded IconSquareArrowMoveDownLeftBulkRounded"
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

export const IconSquareArrowMoveDownLeftStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-left-stroke-sharp IconSquareArrowMoveDownLeftStrokeSharp"
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

export const IconSquareArrowMoveDownLeftSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-left-solid-sharp IconSquareArrowMoveDownLeftSolidSharp"
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

export const iconPackOfSquareArrowMoveDownLeft: TheIconSelfPack = {
  name: 'SquareArrowMoveDownLeft',
  StrokeRounded: IconSquareArrowMoveDownLeftStrokeRounded,
  DuotoneRounded: IconSquareArrowMoveDownLeftDuotoneRounded,
  TwotoneRounded: IconSquareArrowMoveDownLeftTwotoneRounded,
  SolidRounded: IconSquareArrowMoveDownLeftSolidRounded,
  BulkRounded: IconSquareArrowMoveDownLeftBulkRounded,
  StrokeSharp: IconSquareArrowMoveDownLeftStrokeSharp,
  SolidSharp: IconSquareArrowMoveDownLeftSolidSharp,
};