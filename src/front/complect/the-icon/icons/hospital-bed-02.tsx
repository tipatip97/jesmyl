import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.5903 6L4.40974 6C4.17689 6 4.06046 6 3.95117 6.01655C3.44896 6.0926 2.98753 6.4267 2.66218 6.94983C2.59137 7.06367 2.52679 7.19473 2.39763 7.45684C2.19831 7.86133 2.09864 8.06357 2.05784 8.21806C1.86185 8.96021 2.18187 9.76918 2.74703 9.96023C2.86468 10 3.04435 10 3.40368 10L20.5963 10C20.9557 10 21.1353 10 21.253 9.96023C21.8181 9.76918 22.1382 8.96021 21.9422 8.21806C21.9014 8.06358 21.8017 7.86128 21.6024 7.45684C21.4732 7.19476 21.4086 7.06366 21.3378 6.94983C21.0125 6.4267 20.551 6.0926 20.0488 6.01655C19.9395 6 19.8231 6 19.5903 6Z',
  d2: 'M7.5 17.5L19 10',
  d3: 'M16.5 17.5L5 10',
  d4: 'M8 19C8 20.1046 7.10457 21 6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17C7.10457 17 8 17.8954 8 19Z',
  d5: 'M20 19C20 20.1046 19.1046 21 18 21C16.8954 21 16 20.1046 16 19C16 17.8954 16.8954 17 18 17C19.1046 17 20 17.8954 20 19Z',
  d6: 'M6 6V4.1036C6 3.38598 6.61139 2.85943 7.24254 3.03348L9.24254 3.58501C9.6877 3.70777 10 4.14897 10 4.65513V6',
  d7: 'M19 10L7.5 17.5M5 10L16.5 17.5',
  d8: 'M4.36935 5.25392L19.6307 5.25392C19.8236 5.2538 19.9944 5.2537 20.1611 5.27894C20.9262 5.39481 21.5605 5.89162 21.9747 6.55768C22.0654 6.70354 22.1992 6.97493 22.3125 7.20493C22.475 7.53409 22.6067 7.80089 22.6673 8.0305C22.8068 8.55857 22.7646 9.11006 22.5804 9.57564C22.3995 10.0329 22.0442 10.4884 21.4932 10.6747C21.3326 10.729 21.1733 10.7423 21.0509 10.7481C20.9283 10.754 20.7783 10.7539 20.6125 10.7539L3.38747 10.7539H3.38746C3.22173 10.7539 3.07169 10.754 2.9491 10.7481C2.82668 10.7423 2.66742 10.7289 2.50685 10.6747C1.95585 10.4884 1.60048 10.0329 1.41959 9.57564C1.23541 9.11006 1.19325 8.55857 1.33271 8.0305C1.39335 7.80087 1.57883 7.42503 1.74135 7.09583C1.8546 6.86592 1.93461 6.70351 2.0253 6.55768C2.43954 5.89162 3.07377 5.39481 3.83888 5.27894C4.0056 5.2537 4.17643 5.2538 4.36935 5.25392Z',
  d9: 'M19.8377 9.45775C20.1394 9.92035 20.009 10.5399 19.5464 10.8416L8.04638 18.3416C7.58378 18.6433 6.9642 18.5129 6.66251 18.0503C6.36081 17.5877 6.49125 16.9681 6.95385 16.6664L18.4538 9.16641C18.9164 8.86472 19.536 8.99515 19.8377 9.45775Z',
  d10: 'M4.16251 9.45775C4.4642 8.99515 5.08378 8.86472 5.54638 9.16641L17.0464 16.6664C17.509 16.9681 17.6394 17.5877 17.3377 18.0503C17.036 18.5129 16.4164 18.6433 15.9538 18.3416L4.45385 10.8416C3.99125 10.5399 3.86081 9.92035 4.16251 9.45775Z',
  d11: 'M6 18.0039C5.44772 18.0039 5 18.4516 5 19.0039C5 19.5562 5.44772 20.0039 6 20.0039C6.55228 20.0039 7 19.5562 7 19.0039C7 18.4516 6.55228 18.0039 6 18.0039ZM3 19.0039C3 17.3471 4.34315 16.0039 6 16.0039C7.65685 16.0039 9 17.3471 9 19.0039C9 20.6608 7.65685 22.0039 6 22.0039C4.34315 22.0039 3 20.6608 3 19.0039Z',
  d12: 'M18 18.0039C17.4477 18.0039 17 18.4516 17 19.0039C17 19.5562 17.4477 20.0039 18 20.0039C18.5523 20.0039 19 19.5562 19 19.0039C19 18.4516 18.5523 18.0039 18 18.0039ZM15 19.0039C15 17.3471 16.3431 16.0039 18 16.0039C19.6569 16.0039 21 17.3471 21 19.0039C21 20.6608 19.6569 22.0039 18 22.0039C16.3431 22.0039 15 20.6608 15 19.0039Z',
  d13: 'M7.02258 4.01468C7.01188 4.0322 7 4.06224 7 4.10813V6.00453C7 6.55681 6.55228 7.00453 6 7.00453C5.44772 7.00453 5 6.55681 5 6.00453V4.10813C5 2.86523 6.1159 1.68999 7.50838 2.07399L9.50838 2.62552C10.4423 2.88307 11 3.76341 11 4.65966V6.00453C11 6.55681 10.5523 7.00453 10 7.00453C9.44772 7.00453 9 6.55681 9 6.00453V4.65966C9 4.61158 8.98501 4.57696 8.97199 4.55857C8.96938 4.55488 8.9672 4.55226 8.96557 4.55048L7.02258 4.01468Z',
  d14: 'M7 4.10813C7 4.06224 7.01188 4.0322 7.02258 4.01468L8.96557 4.55048C8.9672 4.55226 8.96938 4.55488 8.97199 4.55857C8.98501 4.57696 9 4.61158 9 4.65966V5.25441H11V4.65966C11 3.76341 10.4423 2.88307 9.50838 2.62552L7.50838 2.07399C6.1159 1.68999 5 2.86523 5 4.10813V5.25441H7V4.10813Z',
  d15: 'M7.9801 10.7539H4.33789C4.3737 10.7854 4.41221 10.8148 4.45335 10.8416L10.169 14.5692L7.42101 16.3614C8.02944 16.6892 8.51171 17.221 8.77627 17.8653L11.9996 15.7631L15.2236 17.8657C15.488 17.2214 15.9702 16.6895 16.5786 16.3616L13.8302 14.5692L19.5459 10.8416C19.587 10.8148 19.6255 10.7854 19.6613 10.7539H16.0191L11.9996 13.3753L7.9801 10.7539Z',
  d16: 'M22 6L2 6L2 9.5L22 9.5V6Z',
  d17: 'M4 6V3.5L8 3.5V6',
  d18: 'M7.5 17L19 9.5',
  d19: 'M16.5 17L5 9.5',
  d20: 'M8 18.5C8 19.6046 7.10457 20.5 6 20.5C4.89543 20.5 4 19.6046 4 18.5C4 17.3954 4.89543 16.5 6 16.5C7.10457 16.5 8 17.3954 8 18.5Z',
  d21: 'M20 18.5C20 19.6046 19.1046 20.5 18 20.5C16.8954 20.5 16 19.6046 16 18.5C16 17.3954 16.8954 16.5 18 16.5C19.1046 16.5 20 17.3954 20 18.5Z',
  d22: 'M1.25 6C1.25 5.58579 1.58579 5.25 2 5.25L22 5.25C22.4142 5.25 22.75 5.58579 22.75 6V9.5C22.75 9.91421 22.4142 10.25 22 10.25L2 10.25C1.58579 10.25 1.25 9.91421 1.25 9.5L1.25 6Z',
  d23: 'M3 3.5C3 2.94772 3.44772 2.5 4 2.5L8 2.5C8.55228 2.5 9 2.94772 9 3.5V6L7 6V4.5H5V6H3L3 3.5Z',
  d24: 'M6.95348 16.1628L18.4531 8.26074L19.5457 9.93596L8.04601 17.8381L6.95348 16.1628Z',
  d25: 'M15.9535 17.8381L4.45312 9.93596L5.54566 8.26074L17.046 16.1628L15.9535 17.8381Z',
  d26: 'M6 17.5C5.44772 17.5 5 17.9477 5 18.5C5 19.0523 5.44772 19.5 6 19.5C6.55228 19.5 7 19.0523 7 18.5C7 17.9477 6.55228 17.5 6 17.5ZM3 18.5C3 16.8431 4.34315 15.5 6 15.5C7.65685 15.5 9 16.8431 9 18.5C9 20.1569 7.65685 21.5 6 21.5C4.34315 21.5 3 20.1569 3 18.5Z',
  d27: 'M18 17.5C17.4477 17.5 17 17.9477 17 18.5C17 19.0523 17.4477 19.5 18 19.5C18.5523 19.5 19 19.0523 19 18.5C19 17.9477 18.5523 17.5 18 17.5ZM15 18.5C15 16.8431 16.3431 15.5 18 15.5C19.6569 15.5 21 16.8431 21 18.5C21 20.1569 19.6569 21.5 18 21.5C16.3431 21.5 15 20.1569 15 18.5Z',
};

export const IconHospitalBed02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-02-stroke-rounded IconHospitalBed02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalBed02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-02-duotone-rounded IconHospitalBed02DuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalBed02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-02-twotone-rounded IconHospitalBed02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalBed02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-02-solid-rounded IconHospitalBed02SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalBed02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-02-bulk-rounded IconHospitalBed02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalBed02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-02-stroke-sharp IconHospitalBed02StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalBed02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-02-solid-sharp IconHospitalBed02SolidSharp"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHospitalBed02: TheIconSelfPack = {
  name: 'HospitalBed02',
  StrokeRounded: IconHospitalBed02StrokeRounded,
  DuotoneRounded: IconHospitalBed02DuotoneRounded,
  TwotoneRounded: IconHospitalBed02TwotoneRounded,
  SolidRounded: IconHospitalBed02SolidRounded,
  BulkRounded: IconHospitalBed02BulkRounded,
  StrokeSharp: IconHospitalBed02StrokeSharp,
  SolidSharp: IconHospitalBed02SolidSharp,
};