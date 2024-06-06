import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 7.67122C3 5.99755 4.47444 4.34363 5.50935 3.38889C6.0714 2.87037 6.9286 2.87037 7.49065 3.38889C8.52556 4.34363 10 5.99755 10 7.67122C10 9.31217 8.67462 11 6.5 11C4.32538 11 3 9.31217 3 7.67122Z',
  d2: 'M8.5 17.6712C8.5 15.9975 9.97444 14.3436 11.0093 13.3889C11.5714 12.8704 12.4286 12.8704 12.9907 13.3889C14.0256 14.3436 15.5 15.9975 15.5 17.6712C15.5 19.3122 14.1746 21 12 21C9.82538 21 8.5 19.3122 8.5 17.6712Z',
  d3: 'M14 7.67122C14 5.99755 15.4744 4.34363 16.5093 3.38889C17.0714 2.87037 17.9286 2.87037 18.4907 3.38889C19.5256 4.34363 21 5.99755 21 7.67122C21 9.31217 19.6746 11 17.5 11C15.3254 11 14 9.31217 14 7.67122Z',
  d4: 'M17.4892 2.45087C17.7771 2.18304 18.2229 2.18304 18.5108 2.45087L18.5122 2.45218L18.5147 2.4545L18.5229 2.46219L18.5516 2.48944C18.5761 2.51278 18.6109 2.54636 18.6546 2.58935C18.7421 2.67527 18.8654 2.79908 19.0126 2.95413C19.3062 3.26334 19.6993 3.70117 20.0942 4.21395C20.4875 4.72459 20.8937 5.32393 21.2044 5.95598C21.5115 6.58095 21.75 7.28776 21.75 8C21.75 9.28885 21.3037 10.2635 20.5457 10.902C19.8099 11.5219 18.8697 11.75 18 11.75C17.1303 11.75 16.1901 11.5219 15.4543 10.902C14.6963 10.2635 14.25 9.28885 14.25 8C14.25 7.28776 14.4885 6.58095 14.7956 5.95598C15.1063 5.32393 15.5125 4.72459 15.9058 4.21395C16.3007 3.70117 16.6938 3.26334 16.9874 2.95413C17.1346 2.79908 17.2579 2.67527 17.3454 2.58935C17.3891 2.54636 17.4239 2.51278 17.4484 2.48944L17.4771 2.46219L17.4853 2.4545L17.4878 2.45218L17.4892 2.45087Z',
  d5: 'M5.48916 2.45087C5.77706 2.18304 6.22294 2.18304 6.51084 2.45087L6.51224 2.45218L6.51473 2.4545L6.52292 2.46219L6.55163 2.48944C6.57607 2.51278 6.6109 2.54636 6.65464 2.58935C6.74206 2.67527 6.86535 2.79908 7.01259 2.95413C7.30624 3.26334 7.6993 3.70117 8.09421 4.21395C8.48746 4.72459 8.89375 5.32393 9.20436 5.95598C9.51149 6.58095 9.75 7.28776 9.75 8C9.75 9.28885 9.3037 10.2635 8.54571 10.902C7.80987 11.5219 6.86965 11.75 6 11.75C5.13035 11.75 4.19013 11.5219 3.45429 10.902C2.6963 10.2635 2.25 9.28885 2.25 8C2.25 7.28776 2.48851 6.58095 2.79564 5.95598C3.10625 5.32393 3.51254 4.72459 3.90579 4.21395C4.3007 3.70117 4.69376 3.26334 4.98741 2.95413C5.13465 2.79908 5.25794 2.67527 5.34536 2.58935C5.3891 2.54636 5.42393 2.51278 5.44837 2.48944L5.47708 2.46219L5.48527 2.4545L5.48776 2.45218L5.48916 2.45087Z',
  d6: 'M12.5108 12.4509C12.2229 12.183 11.7771 12.183 11.4892 12.4509L11.4878 12.4522L11.4853 12.4545L11.4771 12.4622L11.4484 12.4894C11.4239 12.5128 11.3891 12.5464 11.3454 12.5893C11.2579 12.6753 11.1346 12.7991 10.9874 12.9541C10.6938 13.2633 10.3007 13.7012 9.90579 14.214C9.51254 14.7246 9.10625 15.3239 8.79564 15.956C8.48851 16.5809 8.25 17.2878 8.25 18C8.25 19.2888 8.6963 20.2635 9.45429 20.902C10.1901 21.5219 11.1303 21.75 12 21.75C12.8697 21.75 13.8099 21.5219 14.5457 20.902C15.3037 20.2635 15.75 19.2888 15.75 18C15.75 17.2878 15.5115 16.5809 15.2044 15.956C14.8937 15.3239 14.4875 14.7246 14.0942 14.214C13.6993 13.7012 13.3062 13.2633 13.0126 12.9541C12.8654 12.7991 12.7421 12.6753 12.6546 12.5893C12.6109 12.5464 12.5761 12.5128 12.5516 12.4894L12.5229 12.4622L12.5147 12.4545L12.5122 12.4522L12.5108 12.4509Z',
  d7: 'M21 7.5C21 9.433 19.433 11 17.5 11C15.567 11 14 9.433 14 7.5C14 5 17.5 3 17.5 3C17.5 3 21 5 21 7.5Z',
  d8: 'M10 7.5C10 9.433 8.433 11 6.5 11C4.567 11 3 9.433 3 7.5C3 5 6.5 3 6.5 3C6.5 3 10 5 10 7.5Z',
  d9: 'M15.5 17.5C15.5 19.433 13.933 21 12 21C10.067 21 8.5 19.433 8.5 17.5C8.5 15 12 13 12 13C12 13 15.5 15 15.5 17.5Z',
  d10: 'M17.502 2.25C17.502 2.25 18.3 2.72171 18.475 2.84112C18.8236 3.07897 19.2913 3.4253 19.7623 3.85746C20.6652 4.68598 21.752 5.986 21.752 7.55031C21.752 9.86974 19.8492 11.75 17.502 11.75C15.1547 11.75 13.252 9.86974 13.252 7.55031C13.252 5.986 14.3387 4.68598 15.2416 3.85746C15.7126 3.4253 16.1803 3.07897 16.5289 2.84112C16.7039 2.72171 17.502 2.25 17.502 2.25Z',
  d11: 'M6.5 2.25C6.5 2.25 7.29801 2.72171 7.47302 2.84112C7.82162 3.07897 8.28936 3.4253 8.76034 3.85746C9.66328 4.68598 10.75 5.986 10.75 7.55031C10.75 9.86974 8.84721 11.75 6.5 11.75C4.15279 11.75 2.25 9.86974 2.25 7.55031C2.25 5.986 3.33672 4.68598 4.23966 3.85746C4.71064 3.4253 5.17838 3.07897 5.52698 2.84112C5.70199 2.72171 6.5 2.25 6.5 2.25Z',
  d12: 'M12 12.25C12 12.25 12.798 12.7217 12.973 12.8411C13.3216 13.079 13.7894 13.4253 14.2603 13.8575C15.1633 14.686 16.25 15.986 16.25 17.5503C16.25 19.8697 14.3472 21.75 12 21.75C9.65279 21.75 7.75 19.8697 7.75 17.5503C7.75 15.986 8.83672 14.686 9.73966 13.8575C10.2106 13.4253 10.6784 13.079 11.027 12.8411C11.202 12.7217 12 12.25 12 12.25Z',
};

export const IconRainStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-stroke-rounded IconRainStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconRainDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-duotone-rounded IconRainDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRainTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-twotone-rounded IconRainTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRainSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-solid-rounded IconRainSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconRainBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-bulk-rounded IconRainBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconRainStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-stroke-sharp IconRainStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconRainSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rain-solid-sharp IconRainSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfRain: TheIconSelfPack = {
  name: 'Rain',
  StrokeRounded: IconRainStrokeRounded,
  DuotoneRounded: IconRainDuotoneRounded,
  TwotoneRounded: IconRainTwotoneRounded,
  SolidRounded: IconRainSolidRounded,
  BulkRounded: IconRainBulkRounded,
  StrokeSharp: IconRainStrokeSharp,
  SolidSharp: IconRainSolidSharp,
};