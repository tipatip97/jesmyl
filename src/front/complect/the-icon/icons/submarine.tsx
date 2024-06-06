import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 12H9.64103C8.665 12 7.68502 12.85 6.87882 13.3085C6.53595 13.5035 6.36451 13.601 6.20707 13.5706C6.04963 13.5401 5.88565 13.35 5.55769 12.9698C4.87109 12.1737 4.12853 12 3 12C2.44772 12 2 12.5223 2 13.1667V17.8333C2 18.4777 2.44772 19 3 19C4.12854 19 4.87109 18.8263 5.55769 18.0302C5.88565 17.65 6.04963 17.4599 6.20707 17.4294C6.36451 17.399 6.53595 17.4965 6.87882 17.6915C7.68502 18.15 8.665 19 9.64102 19H19C20.6569 19 22 17.433 22 15.5C22 13.567 20.6569 12 19 12Z',
  d2: 'M10.5 12L11.0594 10.7635C11.4467 9.90726 11.6404 9.47914 12.0117 9.23957C12.383 9 12.8529 9 13.7927 9H14.2073C15.1471 9 15.617 9 15.9883 9.23957C16.3596 9.47914 16.5533 9.90726 16.9406 10.7635L17.5 12',
  d3: 'M14 9V5C14 4.44772 14.4477 4 15 4H16',
  d4: 'M1.25 13.6667C1.25 12.7208 1.9292 11.75 3 11.75C3.59332 11.75 4.15976 11.7939 4.69012 11.9777C5.23977 12.1682 5.7049 12.4921 6.12562 12.9799C6.22305 13.0929 6.29658 13.1778 6.35515 13.243C6.53251 13.1421 7.59581 12.4802 7.82151 12.3326C8.31696 12.0469 8.94871 11.75 9.64103 11.75H19C21.1754 11.75 22.75 13.7654 22.75 16C22.75 18.2346 21.1754 20.25 19 20.25H9.64102C8.94871 20.25 8.31696 19.9531 7.82151 19.6674C7.59581 19.5198 6.35515 18.757 6.35515 18.757C6.35515 18.757 6.22305 18.9071 6.12562 19.0201C5.7049 19.5079 5.23977 19.8318 4.69012 20.0223C4.15976 20.2061 3.59333 20.25 3 20.25C1.9292 20.25 1.25 19.2792 1.25 18.3333V13.6667Z',
  d5: 'M16 3.75C16.5523 3.75 17 4.19772 17 4.75C17 5.30228 16.5523 5.75 16 5.75H15V8.5081C15.1474 8.51327 15.287 8.52173 15.4171 8.53557C15.7872 8.57497 16.167 8.66464 16.5307 8.89929C16.8944 9.13393 17.1326 9.44296 17.3211 9.76401C17.4916 10.0545 17.6558 10.4175 17.8336 10.8107L18.4114 12.0878C18.639 12.591 18.4156 13.1835 17.9124 13.4111C17.4092 13.6387 16.8168 13.4154 16.5891 12.9122L16.0298 11.6757C15.8273 11.2282 15.7065 10.9641 15.5963 10.7766C15.5012 10.6145 15.4567 10.5864 15.4472 10.5804L15.4456 10.5794C15.4362 10.5732 15.3922 10.5442 15.2054 10.5243C14.9891 10.5013 14.6987 10.5 14.2076 10.5H13.7929C13.3018 10.5 13.0114 10.5013 12.7951 10.5243C12.6083 10.5442 12.5643 10.5732 12.5549 10.5794L12.5533 10.5804C12.5438 10.5864 12.4993 10.6145 12.4042 10.7766C12.294 10.9641 12.1731 11.2282 11.9707 11.6757L11.4114 12.9122C11.1837 13.4154 10.5913 13.6387 10.0881 13.4111C9.58489 13.1835 9.3615 12.591 9.58914 12.0878L10.1669 10.8107C10.3447 10.4175 10.5089 10.0545 10.6794 9.76401C10.8679 9.44296 11.1061 9.13393 11.4698 8.89929C11.8335 8.66464 12.2132 8.57497 12.5834 8.53557C12.7133 8.52174 12.8528 8.51329 13 8.50812V5.75C13 4.64543 13.8954 3.75 15 3.75H16Z',
  d6: 'M17.0002 4.75C17.0002 4.19772 16.5525 3.75 16.0002 3.75H15.0002C13.8956 3.75 13.0002 4.64543 13.0002 5.75V8.50812C12.853 8.51329 12.7135 8.52174 12.5837 8.53557C12.2135 8.57497 11.8337 8.66464 11.47 8.89929C11.1063 9.13393 10.8681 9.44296 10.6796 9.76401C10.5091 10.0545 10.3449 10.4175 10.1671 10.8107L9.74219 11.75H11.9373L11.9709 11.6757C12.1734 11.2282 12.2943 10.9641 12.4044 10.7766C12.4995 10.6145 12.544 10.5864 12.5535 10.5804L12.5551 10.5794C12.5645 10.5732 12.6085 10.5442 12.7953 10.5243C13.0116 10.5013 13.302 10.5 13.7932 10.5H14.2078C14.6989 10.5 14.9893 10.5013 15.2056 10.5243C15.3925 10.5442 15.4364 10.5732 15.4459 10.5794L15.4474 10.5804C15.4569 10.5864 15.5014 10.6145 15.5965 10.7766C15.7067 10.9641 15.8276 11.2282 16.03 11.6757L16.0636 11.75H18.2587L17.8338 10.8107C17.656 10.4175 17.4918 10.0545 17.3213 9.76401C17.1328 9.44296 16.8946 9.13393 16.5309 8.89929C16.1672 8.66464 15.7875 8.57497 15.4173 8.53557C15.2872 8.52173 15.1476 8.51327 15.0002 8.5081V5.75H16.0002C16.5525 5.75 17.0002 5.30228 17.0002 4.75Z',
  d7: 'M10.5049 11.9921L12.0042 8.99512H16.0025L17.5018 11.9921',
  d8: 'M14.0039 8.99495V4H17.0026',
  d9: 'M2.02534 18.9898L2.00879 12.0012C2.00878 11.9957 2.01326 11.9912 2.01878 11.9912H4.01048L6.50679 13.4897L9.00569 11.9912H19.0013C20.9667 11.9912 22.1181 14.0061 22 15.4877C22 17.836 20.319 18.9841 19.0013 18.9841L9.00569 18.9998L6.50679 17.4857L4.01048 18.9998H2.03533C2.02982 18.9998 2.02535 18.9953 2.02534 18.9898Z',
  d10: 'M1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H4.20774L6.5 13.1254L8.79226 11.75H19C21.1754 11.75 22.75 13.7654 22.75 16C22.75 18.2346 21.1754 20.25 19 20.25H8.79226L6.5 18.8746L4.20774 20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V12.5Z',
  d11: 'M14 3.75C13.4477 3.75 13 4.19772 13 4.75V8.75H11.9999C11.6211 8.75 11.2749 8.964 11.1055 9.30279L9.60547 12.3028L11.3943 13.1972L12.6179 10.75H15.3819L16.6055 13.1972L18.3943 12.3028L16.8943 9.30279C16.7249 8.964 16.3787 8.75 15.9999 8.75H15V5.75H17V3.75H14Z',
};

export const IconSubmarineStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="submarine-stroke-rounded IconSubmarineStrokeRounded"
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

export const IconSubmarineDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="submarine-duotone-rounded IconSubmarineDuotoneRounded"
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

export const IconSubmarineTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="submarine-twotone-rounded IconSubmarineTwotoneRounded"
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

export const IconSubmarineSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="submarine-solid-rounded IconSubmarineSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSubmarineBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="submarine-bulk-rounded IconSubmarineBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSubmarineStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="submarine-stroke-sharp IconSubmarineStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSubmarineSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="submarine-solid-sharp IconSubmarineSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSubmarine: TheIconSelfPack = {
  name: 'Submarine',
  StrokeRounded: IconSubmarineStrokeRounded,
  DuotoneRounded: IconSubmarineDuotoneRounded,
  TwotoneRounded: IconSubmarineTwotoneRounded,
  SolidRounded: IconSubmarineSolidRounded,
  BulkRounded: IconSubmarineBulkRounded,
  StrokeSharp: IconSubmarineStrokeSharp,
  SolidSharp: IconSubmarineSolidSharp,
};