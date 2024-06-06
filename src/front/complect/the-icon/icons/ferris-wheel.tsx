import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 22L10.6843 14.3518C11.2346 12.7839 11.5097 12 12 12C12.4903 12 12.7654 12.7839 13.3157 14.3518L16 22',
  d2: 'M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z',
  d3: 'M19 10C17.8954 10 17 9.10457 17 8C17 6.89543 17.8954 6 19 6C20.1046 6 21 6.89543 21 8C21 9.10457 20.1046 10 19 10Z',
  d4: 'M7 16C7 17.1046 6.10457 18 5 18C3.89543 18 3 17.1046 3 16C3 14.8954 3.89543 14 5 14C6.10457 14 7 14.8954 7 16Z',
  d5: 'M7 7.75C7 8.85457 6.10457 9.75 5 9.75C3.89543 9.75 3 8.85457 3 7.75C3 6.64543 3.89543 5.75 5 5.75C6.10457 5.75 7 6.64543 7 7.75Z',
  d6: 'M21 16C21 17.1046 20.1046 18 19 18C17.8954 18 17 17.1046 17 16C17 14.8954 17.8954 14 19 14C20.1046 14 21 14.8954 21 16Z',
  d7: 'M14.4185 17.4926C16.5277 16.5626 18 14.4532 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 14.4535 7.47265 16.5631 9.58225 17.493L10.6847 14.3518C11.235 12.7839 11.5101 12 12.0004 12C12.4907 12 12.7659 12.7839 13.3161 14.3518L14.4185 17.4926Z',
  d8: 'M12 7.5C9.23858 7.5 7 9.73858 7 12.5C7 15.2614 9.23858 17.5 12 17.5C14.7614 17.5 17 15.2614 17 12.5C17 9.73858 14.7614 7.5 12 7.5ZM5 12.5C5 8.63401 8.13401 5.5 12 5.5C15.866 5.5 19 8.63401 19 12.5C19 16.366 15.866 19.5 12 19.5C8.13401 19.5 5 16.366 5 12.5Z',
  d9: 'M12.0003 13.8959C11.8964 14.1703 11.7763 14.5107 11.6281 14.933L8.94385 22.5812C8.76095 23.1023 8.19023 23.3765 7.66911 23.1936C7.14799 23.0107 6.8738 22.44 7.0567 21.9188L9.74099 14.2706C9.74895 14.248 9.75688 14.2254 9.76478 14.2028C10.0194 13.4771 10.2439 12.8372 10.4731 12.3855C10.6712 11.9951 11.1101 11.25 12.0003 11.25C12.8905 11.25 13.3294 11.9951 13.5274 12.3855C13.7566 12.8372 13.9811 13.4771 14.2358 14.2028C14.2437 14.2253 14.2516 14.248 14.2596 14.2706L16.9438 21.9188C17.1267 22.44 16.8526 23.0107 16.3314 23.1936C15.8103 23.3765 15.2396 23.1023 15.0567 22.5812L12.3724 14.933C12.2242 14.5107 12.1041 14.1703 12.0003 13.8959Z',
  d10: 'M9.25 3.5C9.25 1.98122 10.4812 0.75 12 0.75C13.5188 0.75 14.75 1.98122 14.75 3.5C14.75 5.01878 13.5188 6.25 12 6.25C10.4812 6.25 9.25 5.01878 9.25 3.5Z',
  d11: 'M20 5.75C21.5188 5.75 22.75 6.98122 22.75 8.5C22.75 10.0188 21.5188 11.25 20 11.25C18.4812 11.25 17.25 10.0188 17.25 8.5C17.25 6.98122 18.4812 5.75 20 5.75Z',
  d12: 'M1.25 16.5C1.25 14.9812 2.48122 13.75 4 13.75C5.51878 13.75 6.75 14.9812 6.75 16.5C6.75 18.0188 5.51878 19.25 4 19.25C2.48122 19.25 1.25 18.0188 1.25 16.5Z',
  d13: 'M1.25 8.25C1.25 6.73122 2.48122 5.5 4 5.5C5.51878 5.5 6.75 6.73122 6.75 8.25C6.75 9.76878 5.51878 11 4 11C2.48122 11 1.25 9.76878 1.25 8.25Z',
  d14: 'M17.25 16.5C17.25 14.9812 18.4812 13.75 20 13.75C21.5188 13.75 22.75 14.9812 22.75 16.5C22.75 18.0188 21.5188 19.25 20 19.25C18.4812 19.25 17.25 18.0188 17.25 16.5Z',
  d15: 'M8 22L12 13L16 22',
  d16: 'M12 7.25C9.23858 7.25 7 9.48858 7 12.25C7 15.0114 9.23858 17.25 12 17.25C14.7614 17.25 17 15.0114 17 12.25C17 9.48858 14.7614 7.25 12 7.25ZM5 12.25C5 8.38401 8.13401 5.25 12 5.25C15.866 5.25 19 8.38401 19 12.25C19 16.116 15.866 19.25 12 19.25C8.13401 19.25 5 16.116 5 12.25Z',
  d17: 'M12 10.6318L16.9138 21.6878L15.0862 22.5001L12 15.5562L8.9138 22.5001L7.08618 21.6878L12 10.6318Z',
  d18: 'M9.25 4.25C9.25 2.73122 10.4812 1.5 12 1.5C13.5188 1.5 14.75 2.73122 14.75 4.25C14.75 5.76878 13.5188 7 12 7C10.4812 7 9.25 5.76878 9.25 4.25Z',
  d19: 'M19 5.5C20.5188 5.5 21.75 6.73122 21.75 8.25C21.75 9.76878 20.5188 11 19 11C17.4812 11 16.25 9.76878 16.25 8.25C16.25 6.73122 17.4812 5.5 19 5.5Z',
  d20: 'M2.25 16.25C2.25 14.7312 3.48122 13.5 5 13.5C6.51878 13.5 7.75 14.7312 7.75 16.25C7.75 17.7688 6.51878 19 5 19C3.48122 19 2.25 17.7688 2.25 16.25Z',
  d21: 'M2.25 8C2.25 6.48122 3.48122 5.25 5 5.25C6.51878 5.25 7.75 6.48122 7.75 8C7.75 9.51878 6.51878 10.75 5 10.75C3.48122 10.75 2.25 9.51878 2.25 8Z',
  d22: 'M16.25 16.25C16.25 14.7312 17.4812 13.5 19 13.5C20.5188 13.5 21.75 14.7312 21.75 16.25C21.75 17.7688 20.5188 19 19 19C17.4812 19 16.25 17.7688 16.25 16.25Z',
};

export const IconFerrisWheelStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ferris-wheel-stroke-rounded IconFerrisWheelStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconFerrisWheelDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ferris-wheel-duotone-rounded IconFerrisWheelDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconFerrisWheelTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ferris-wheel-twotone-rounded IconFerrisWheelTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconFerrisWheelSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ferris-wheel-solid-rounded IconFerrisWheelSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFerrisWheelBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ferris-wheel-bulk-rounded IconFerrisWheelBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFerrisWheelStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ferris-wheel-stroke-sharp IconFerrisWheelStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFerrisWheelSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ferris-wheel-solid-sharp IconFerrisWheelSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFerrisWheel: TheIconSelfPack = {
  name: 'FerrisWheel',
  StrokeRounded: IconFerrisWheelStrokeRounded,
  DuotoneRounded: IconFerrisWheelDuotoneRounded,
  TwotoneRounded: IconFerrisWheelTwotoneRounded,
  SolidRounded: IconFerrisWheelSolidRounded,
  BulkRounded: IconFerrisWheelBulkRounded,
  StrokeSharp: IconFerrisWheelStrokeSharp,
  SolidSharp: IconFerrisWheelSolidSharp,
};