import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M14.1746 12.6482C14.8469 13.4381 16.2132 14.4165 15.97 14.881M15.97 14.881C16.1055 15.3547 14.7827 16.291 14.1716 17.0052M15.97 14.881C13.2147 14.9378 11.5289 14.622 9.90163 13.0869C8.20681 11.4881 7.89136 9.76265 8.02853 6.99463',
  d3: 'M14.1755 12.6503C14.8479 13.4403 16.2142 14.4202 15.971 14.8802M15.971 14.8802C16.1065 15.3502 14.7836 16.2903 14.1725 17.0103M15.971 14.8802C13.2157 14.9402 11.5299 14.6202 9.90262 13.0902C8.20782 11.4902 7.89232 9.76023 8.02952 6.99023',
  d4: 'M7.25 7C7.25 6.58579 7.58579 6.25 8 6.25C8.41421 6.25 8.75 6.58579 8.75 7H7.25ZM16 14.0897C16.4142 14.0897 16.75 14.4255 16.75 14.8397C16.75 15.2539 16.4142 15.5897 16 15.5897V14.0897ZM13.3016 14.7655L13.4143 14.024L13.3016 14.7655ZM8.07738 9.75256L7.33739 9.8747L8.07738 9.75256ZM14.692 17.5352C14.3965 17.8254 13.9216 17.821 13.6314 17.5254C13.3413 17.2298 13.3457 16.7549 13.6413 16.4648L14.692 17.5352ZM15.7401 15.4555L16.2655 15.9907V15.9907L15.7401 15.4555ZM15.7401 14.2236L16.2655 13.6884L15.7401 14.2236ZM13.6413 13.2143C13.3457 12.9241 13.3413 12.4493 13.6314 12.1537C13.9216 11.8581 14.3965 11.8537 14.692 12.1438L13.6413 13.2143ZM8.75 7V7.60306H7.25V7H8.75ZM16 15.5897C14.8707 15.5897 13.7496 15.5922 13.1889 15.507L13.4143 14.024C13.8307 14.0873 14.7938 14.0897 16 14.0897V15.5897ZM8.75 7.60306C8.75 8.75337 8.75252 9.23759 8.81736 9.63041L7.33739 9.8747C7.24748 9.32998 7.25 8.69372 7.25 7.60306H8.75ZM13.1889 15.507C10.1962 15.0521 7.81906 12.7929 7.33739 9.8747L8.81736 9.63041C9.18755 11.8731 11.0287 13.6614 13.4143 14.024L13.1889 15.507ZM13.6413 16.4648L15.2147 14.9203L16.2655 15.9907L14.692 17.5352L13.6413 16.4648ZM15.2147 14.7588L13.6413 13.2143L14.692 12.1438L16.2655 13.6884L15.2147 14.7588ZM15.2147 14.9203C15.2618 14.8741 15.2618 14.805 15.2147 14.7588L16.2655 13.6884C16.9115 14.3225 16.9115 15.3566 16.2655 15.9907L15.2147 14.9203Z',
  d5: 'M17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.7521 1.74999 11.9428 1.75H11.9428H12.0572H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694ZM14.8672 17.7136C14.473 18.1005 13.8399 18.0946 13.453 17.7005C13.2619 17.5058 13.1666 17.2528 13.1667 17L13.1668 15.7564L13.1514 15.7541C10.0574 15.2839 7.59098 12.9462 7.09073 9.91541C6.99982 9.36465 6.99988 8.72839 6.99999 7.7112L7 7.60306V7C7 6.44771 7.44771 6 8 6C8.55228 6 9 6.44771 9 7V7.60306C9 8.76331 9.00336 9.22219 9.06403 9.5897C9.40087 11.6304 11.0228 13.2854 13.1671 13.726L13.1672 12.7125C13.1584 12.4487 13.2535 12.1818 13.453 11.9786C13.8399 11.5844 14.473 11.5786 14.8672 11.9654L16.4406 13.51C16.8128 13.8753 16.9993 14.3559 17 14.8367L17 14.8397L17 14.8425C16.9992 15.3232 16.8128 15.8038 16.4406 16.1691L14.8672 17.7136Z',
  d6: 'M12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25H12.0572Z',
  d7: 'M13.453 17.7005C13.8399 18.0946 14.4731 18.1005 14.8672 17.7136L16.4406 16.1691C16.8128 15.8038 16.9993 15.3232 17 14.8425L17 14.8397L17 14.8367C16.9993 14.3559 16.8128 13.8753 16.4406 13.51L14.8672 11.9654C14.4731 11.5786 13.8399 11.5844 13.453 11.9786C13.2535 12.1818 13.1584 12.4487 13.1672 12.7125L13.1671 13.726C11.0228 13.2854 9.40088 11.6304 9.06404 9.5897C9.00338 9.22219 9.00002 8.76331 9.00002 7.60306V7C9.00002 6.44771 8.5523 6 8.00002 6C7.44773 6 7.00001 6.44771 7.00001 7V7.60306L7.00001 7.7112C6.9999 8.72839 6.99983 9.36465 7.09074 9.91541C7.591 12.9462 10.0574 15.2839 13.1514 15.7541L13.1668 15.7564L13.1667 17C13.1667 17.2528 13.2619 17.5058 13.453 17.7005Z',
  d8: 'M21 3V21H3V3H21Z',
  d9: 'M13.5 17L16 14.5L13.5 12',
  d10: 'M8 7.00586V14.3832C8 14.4385 8.04603 14.5043 8.10106 14.5043H16',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM7.25 14.5V7H8.75V13.75H14.1884L12.9688 12.5304L14.0294 11.4697L17.0597 14.5001L14.0294 17.5304L12.9688 16.4697L14.1885 15.25H8C7.58579 15.25 7.25 14.9142 7.25 14.5Z',
} as const;

export const IconSquareArrowMoveDownRightStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-right-stroke-rounded IconSquareArrowMoveDownRightStrokeRounded"
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

export const IconSquareArrowMoveDownRightDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-right-duotone-rounded IconSquareArrowMoveDownRightDuotoneRounded"
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

export const IconSquareArrowMoveDownRightTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-right-twotone-rounded IconSquareArrowMoveDownRightTwotoneRounded"
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

export const IconSquareArrowMoveDownRightSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-right-solid-rounded IconSquareArrowMoveDownRightSolidRounded"
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

export const IconSquareArrowMoveDownRightBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-right-bulk-rounded IconSquareArrowMoveDownRightBulkRounded"
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

export const IconSquareArrowMoveDownRightStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-right-stroke-sharp IconSquareArrowMoveDownRightStrokeSharp"
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

export const IconSquareArrowMoveDownRightSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-down-right-solid-sharp IconSquareArrowMoveDownRightSolidSharp"
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

export const iconPackOfSquareArrowMoveDownRight: TheIconSelfPack = {
  name: 'SquareArrowMoveDownRight',
  StrokeRounded: IconSquareArrowMoveDownRightStrokeRounded,
  DuotoneRounded: IconSquareArrowMoveDownRightDuotoneRounded,
  TwotoneRounded: IconSquareArrowMoveDownRightTwotoneRounded,
  SolidRounded: IconSquareArrowMoveDownRightSolidRounded,
  BulkRounded: IconSquareArrowMoveDownRightBulkRounded,
  StrokeSharp: IconSquareArrowMoveDownRightStrokeSharp,
  SolidSharp: IconSquareArrowMoveDownRightSolidSharp,
};