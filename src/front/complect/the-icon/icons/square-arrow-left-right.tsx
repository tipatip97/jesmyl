import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M8 9L16 9M8 9C8 8.21775 10 7 10 7M8 9C8 9.78225 10 11 10 11M16 15H8M16 15C16 14.2178 14 13 14 13M16 15C16 15.7822 14 17 14 17',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM15.975 8.22498C16.403 8.22498 16.75 8.57196 16.75 8.99998C16.75 9.428 16.403 9.77498 15.975 9.77498H10.2499V10.7399C10.2513 10.8791 10.2167 11.0203 10.1424 11.1469C9.93585 11.4991 9.50092 11.6057 9.17116 11.3851L8.8953 11.189C8.73576 11.0708 8.51973 10.9033 8.30073 10.7098C8.08568 10.5198 7.84722 10.2868 7.65639 10.0362C7.48939 9.81682 7.2499 9.44657 7.2499 9.00004C7.2499 8.55352 7.48939 8.18327 7.65639 7.96393C7.84722 7.71332 8.08568 7.48029 8.30073 7.29027C8.51973 7.09674 8.73576 6.92924 8.8953 6.81111L9.17134 6.61483C9.50111 6.39427 9.93586 6.50097 10.1424 6.85315C10.2153 6.9775 10.25 7.11585 10.2499 7.25251V8.22498L15.975 8.22498ZM8.025 14.225C7.59698 14.225 7.25 14.572 7.25 15C7.25 15.428 7.59698 15.775 8.025 15.775H13.7501V16.7399C13.7487 16.8791 13.7833 17.0203 13.8576 17.1469C14.0641 17.4991 14.4991 17.6057 14.8288 17.3851L15.1047 17.189C15.2642 17.0708 15.4803 16.9033 15.6993 16.7098C15.9143 16.5198 16.1528 16.2868 16.3436 16.0362C16.5106 15.8168 16.7501 15.4466 16.7501 15C16.7501 14.5535 16.5106 14.1833 16.3436 13.9639C16.1528 13.7133 15.9143 13.4803 15.6993 13.2903C15.4803 13.0967 15.2642 12.9292 15.1047 12.8111L14.8287 12.6148C14.4989 12.3943 14.0641 12.501 13.8576 12.8531C13.7847 12.9775 13.75 13.1158 13.7501 13.2525V14.225H8.025Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M16.7499 8.99998C16.7499 8.57196 16.4029 8.22498 15.9749 8.22498L10.2498 8.22498L10.2498 7.25251C10.2499 7.11585 10.2152 6.9775 10.1423 6.85315C9.93576 6.50097 9.50101 6.39427 9.17124 6.61483L8.8952 6.81111C8.73566 6.92924 8.51963 7.09674 8.30063 7.29027C8.08558 7.48029 7.84712 7.71332 7.65629 7.96393C7.48929 8.18327 7.2498 8.55352 7.2498 9.00004C7.2498 9.44657 7.48929 9.81682 7.65629 10.0362C7.84712 10.2868 8.08558 10.5198 8.30063 10.7098C8.51963 10.9033 8.73566 11.0708 8.8952 11.189L9.17106 11.3851C9.50082 11.6057 9.93576 11.4991 10.1423 11.1469C10.2166 11.0203 10.2512 10.8791 10.2498 10.7399L10.2498 9.77498L15.9749 9.77498C16.4029 9.77498 16.7499 9.428 16.7499 8.99998Z',
  d6: 'M7.2499 15C7.2499 14.572 7.59688 14.225 8.0249 14.225L13.75 14.225L13.75 13.2525C13.7499 13.1158 13.7846 12.9775 13.8575 12.8531C14.064 12.501 14.4988 12.3943 14.8286 12.6148L15.1046 12.8111C15.2641 12.9292 15.4802 13.0967 15.6992 13.2903C15.9142 13.4803 16.1527 13.7133 16.3435 13.9639C16.5105 14.1833 16.75 14.5535 16.75 15C16.75 15.4466 16.5105 15.8168 16.3435 16.0362C16.1527 16.2868 15.9142 16.5198 15.6992 16.7098C15.4802 16.9033 15.2641 17.0708 15.1046 17.189L14.8287 17.3851C14.499 17.6057 14.064 17.4991 13.8575 17.1469C13.7832 17.0203 13.7486 16.8791 13.75 16.7399L13.75 15.775L8.0249 15.775C7.59688 15.775 7.2499 15.428 7.2499 15Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M15.998 9L8.37167 9M7.99805 15L15.5665 15M13.998 17L15.998 15L13.998 13M9.99805 11L7.99805 9L9.99805 7',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM10.5285 10.4696L9.80882 9.74993L15.9982 9.74993V8.24993L9.80882 8.24993L10.5285 7.53026L9.46783 6.4696L6.9375 8.99993L9.46783 11.5303L10.5285 10.4696ZM13.4678 13.5303L14.1875 14.2499L7.99816 14.2499V15.7499L14.1875 15.7499L13.4678 16.4696L14.5285 17.5303L17.0588 14.9999L14.5285 12.4696L13.4678 13.5303Z',
} as const;

export const IconSquareArrowLeftRightStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-right-stroke-rounded IconSquareArrowLeftRightStrokeRounded"
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

export const IconSquareArrowLeftRightDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-right-duotone-rounded IconSquareArrowLeftRightDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowLeftRightTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-right-twotone-rounded IconSquareArrowLeftRightTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowLeftRightSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-right-solid-rounded IconSquareArrowLeftRightSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowLeftRightBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-right-bulk-rounded IconSquareArrowLeftRightBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSquareArrowLeftRightStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-right-stroke-sharp IconSquareArrowLeftRightStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconSquareArrowLeftRightSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-right-solid-sharp IconSquareArrowLeftRightSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareArrowLeftRight: TheIconSelfPack = {
  name: 'SquareArrowLeftRight',
  StrokeRounded: IconSquareArrowLeftRightStrokeRounded,
  DuotoneRounded: IconSquareArrowLeftRightDuotoneRounded,
  TwotoneRounded: IconSquareArrowLeftRightTwotoneRounded,
  SolidRounded: IconSquareArrowLeftRightSolidRounded,
  BulkRounded: IconSquareArrowLeftRightBulkRounded,
  StrokeSharp: IconSquareArrowLeftRightStrokeSharp,
  SolidSharp: IconSquareArrowLeftRightSolidSharp,
};