import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 9C13 10.1046 13.8954 11 15 11C16.1046 11 17 10.1046 17 9C17 7.89543 16.1046 7 15 7C13.8954 7 13 7.89543 13 9Z',
  d2: 'M10 9C10 11.7614 12.2386 14 15 14C17.7614 14 20 11.7614 20 9C20 6.23858 17.7614 4 15 4C12.2386 4 10 6.23858 10 9Z',
  d3: 'M11.5 2L7.53669 16.412M6 22L6.825 19',
  d4: 'M22 12.5L2 18',
  d5: 'M15 14C12.2386 14 10 11.7614 10 9C10 6.23858 12.2386 4 15 4C17.7614 4 20 6.23858 20 9C20 11.7614 17.7614 14 15 14ZM15 11C13.8954 11 13 10.1046 13 9C13 7.89543 13.8954 7 15 7C16.1046 7 17 7.89543 17 9C17 10.1046 16.1046 11 15 11Z',
  d6: 'M15 3.25C18.1756 3.25 20.75 5.82436 20.75 9C20.75 12.1756 18.1756 14.75 15 14.75C11.8244 14.75 9.25 12.1756 9.25 9C9.25 5.82436 11.8244 3.25 15 3.25ZM16.25 9C16.25 8.30964 15.6904 7.75 15 7.75C14.3096 7.75 13.75 8.30964 13.75 9C13.75 9.69036 14.3096 10.25 15 10.25C15.6904 10.25 16.25 9.69036 16.25 9ZM15 6.25C16.5188 6.25 17.75 7.48122 17.75 9C17.75 10.5188 16.5188 11.75 15 11.75C13.4812 11.75 12.25 10.5188 12.25 9C12.25 7.48122 13.4812 6.25 15 6.25Z',
  d7: 'M11.7649 1.03605C11.2324 0.889605 10.682 1.20258 10.5355 1.7351L6.57223 16.1471C6.42579 16.6796 6.73877 17.23 7.27128 17.3765C7.8038 17.5229 8.3542 17.21 8.50064 16.6774L12.464 2.26541C12.6104 1.73289 12.2974 1.18249 11.7649 1.03605ZM7.0899 18.036C6.55739 17.8896 6.00698 18.2026 5.86054 18.7351L5.03554 21.7351C4.8891 22.2676 5.20208 22.818 5.73459 22.9645C6.26711 23.1109 6.81751 22.7979 6.96395 22.2654L7.78895 19.2654C7.9354 18.7329 7.62242 18.1825 7.0899 18.036Z',
  d8: 'M22.964 12.2351C22.8175 11.7026 22.2671 11.3896 21.7346 11.536L1.73459 17.036C1.20208 17.1825 0.889101 17.7329 1.03554 18.2654C1.18198 18.7979 1.73239 19.1109 2.2649 18.9645L22.2649 13.4645C22.7974 13.318 23.1104 12.7676 22.964 12.2351Z',
  d9: 'M20.75 9C20.75 5.82436 18.1756 3.25 15 3.25C11.8244 3.25 9.25 5.82436 9.25 9C9.25 12.1756 11.8244 14.75 15 14.75C18.1756 14.75 20.75 12.1756 20.75 9Z',
  d10: 'M15 7.75C15.6904 7.75 16.25 8.30964 16.25 9C16.25 9.69036 15.6904 10.25 15 10.25C14.3096 10.25 13.75 9.69036 13.75 9C13.75 8.30964 14.3096 7.75 15 7.75ZM17.75 9C17.75 7.48122 16.5188 6.25 15 6.25C13.4812 6.25 12.25 7.48122 12.25 9C12.25 10.5188 13.4812 11.75 15 11.75C16.5188 11.75 17.75 10.5188 17.75 9Z',
  d11: 'M16.2718 8.98498C16.2718 8.29116 15.7094 7.72871 15.0155 7.72871C14.3217 7.72871 13.7593 8.29116 13.7593 8.98498C13.7593 9.6788 14.3217 10.2412 15.0155 10.2412C15.7094 10.2412 16.2718 9.6788 16.2718 8.98498Z',
  d12: 'M15.0142 3.20605C18.2057 3.20605 20.793 5.79332 20.793 8.98488C20.793 12.1764 18.2057 14.7637 15.0142 14.7637C11.8226 14.7637 9.23535 12.1764 9.23535 8.98488C9.23535 5.79332 11.8226 3.20605 15.0142 3.20605ZM15.0155 6.22119C16.5419 6.22119 17.7793 7.45858 17.7793 8.98498C17.7793 10.5114 16.5419 11.7488 15.0155 11.7488C13.4891 11.7488 12.2518 10.5114 12.2518 8.98498C12.2518 7.45858 13.4891 6.22119 15.0155 6.22119Z',
  d13: 'M8.24045 16.634L12.2236 2.14973L10.7701 1.75L6.78689 16.2343L8.24045 16.634ZM6.69606 22.25L7.5252 19.235L6.07164 18.8352L5.2425 21.8503L6.69606 22.25Z',
  d14: 'M2.14973 18.7568L22.25 13.2292L21.8503 11.7756L1.75 17.3032L2.14973 18.7568Z',
};

export const IconSushi02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-02-stroke-rounded IconSushi02StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSushi02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-02-duotone-rounded IconSushi02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSushi02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-02-twotone-rounded IconSushi02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="0.5" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSushi02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-02-solid-rounded IconSushi02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSushi02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-02-bulk-rounded IconSushi02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSushi02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-02-stroke-sharp IconSushi02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSushi02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-02-solid-sharp IconSushi02SolidSharp"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSushi02: TheIconSelfPack = {
  name: 'Sushi02',
  StrokeRounded: IconSushi02StrokeRounded,
  DuotoneRounded: IconSushi02DuotoneRounded,
  TwotoneRounded: IconSushi02TwotoneRounded,
  SolidRounded: IconSushi02SolidRounded,
  BulkRounded: IconSushi02BulkRounded,
  StrokeSharp: IconSushi02StrokeSharp,
  SolidSharp: IconSushi02SolidSharp,
};