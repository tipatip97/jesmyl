import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.74061 17.0888C4.93047 19.4803 6.82417 21.511 9.26502 21.8118C10.1626 21.9223 11.0752 22 12 22C12.9247 22 13.8373 21.9223 14.7349 21.8118C17.1758 21.511 19.0694 19.4803 19.2593 17.0888C19.3909 15.4317 19.5 13.732 19.5 12C19.5 10.268 19.3909 8.56832 19.2593 6.91118C19.0694 4.51965 17.1758 2.48893 14.7349 2.1882C13.8373 2.07762 12.9247 2 12 2C11.0752 2 10.1626 2.07762 9.26502 2.1882C6.82417 2.48893 4.93047 4.51965 4.74061 6.91118C4.60903 8.56832 4.5 10.268 4.5 12C4.5 13.732 4.60903 15.4317 4.74061 17.0888Z',
  d2: 'M12 2L12 11',
  d3: 'M12 11L6 4',
  d4: 'M5 11H19',
  d5: 'M9.26502 21.8118C6.82417 21.511 4.93047 19.4803 4.74061 17.0888C4.60903 15.4317 4.5 13.7319 4.5 12C4.5 10.2681 4.60903 8.56832 4.74061 6.91118C4.93047 4.51965 6.82417 2.48893 9.26502 2.1882L12.0038 2.00001V11H19.4884C19.4959 11.3321 19.5 11.6654 19.5 12C19.5 13.7319 19.3909 15.4317 19.2593 17.0888C19.0694 19.4803 17.1758 21.511 14.7349 21.8118C13.8373 21.9223 12.9247 22 12 22C11.0752 22 10.1626 21.9223 9.26502 21.8118Z',
  d6: 'M12 2V11L6 4',
  d7: 'M9.22678 1.44126C10.1212 1.3303 11.0492 1.25 12 1.25C12.9507 1.25 13.8787 1.3303 14.7731 1.44126C17.6062 1.7927 19.793 4.15593 20.0133 6.94946C20.1417 8.57698 20.25 10.2685 20.25 12C20.25 13.7315 20.1417 15.423 20.0133 17.0506C19.793 19.8441 17.606 22.2072 14.7731 22.5588C13.8787 22.6696 12.9507 22.75 12 22.75C11.0492 22.75 10.1211 22.6696 9.22673 22.5588C6.39387 22.2072 4.20685 19.8441 3.98657 17.0505C3.85823 15.423 3.75 13.7315 3.75 12C3.75 10.2685 3.85823 8.577 3.98657 6.94949C4.20684 4.15592 6.39386 1.7927 9.22678 1.44126ZM9.4641 3.38112C9.76483 3.34381 10.065 3.31075 10.3648 3.28363C10.6581 3.2571 10.8047 3.24383 10.9023 3.33305C11 3.42226 11 3.57236 11 3.87256V6.67387C11 7.35378 11 7.69374 10.804 7.76621C10.6081 7.83869 10.3869 7.58057 9.9444 7.06435L7.90263 4.68228C7.70641 4.45335 7.6083 4.33889 7.63309 4.19907C7.65789 4.05926 7.77719 3.99235 8.0158 3.85852C8.45502 3.61219 8.94406 3.44563 9.4641 3.38112ZM13.6351 3.28363C13.3419 3.2571 13.1953 3.24384 13.0976 3.33305C13 3.42227 13 3.57237 13 3.87256V9.64998C13 9.93282 13 10.0742 13.0878 10.1621C13.1757 10.25 13.3171 10.25 13.6 10.25H17.6497C17.9433 10.25 18.0901 10.25 18.1788 10.1568C18.2674 10.0636 18.2602 9.91804 18.2457 9.62695C18.2037 8.7805 18.1441 7.93974 18.0782 7.10418C17.9299 5.22336 16.441 3.61747 14.5357 3.38112C14.235 3.34381 13.9349 3.31076 13.6351 3.28363ZM5.75415 9.62696C5.73969 9.91804 5.73246 10.0636 5.82114 10.1568C5.90983 10.25 6.05662 10.25 6.3502 10.25H8.73626C9.29926 10.25 9.58076 10.25 9.66108 10.0753C9.7414 9.9007 9.55821 9.68697 9.19181 9.25951L6.86709 6.54732C6.58095 6.2135 6.43788 6.04659 6.25449 6.09691C6.0711 6.14723 6.03685 6.34314 5.96836 6.73498C5.94709 6.85663 5.93143 6.9798 5.92162 7.10417C5.85573 7.93974 5.7962 8.7805 5.75415 9.62696Z',
  d8: 'M9.22678 1.44126C10.1212 1.3303 11.0492 1.25 12 1.25C12.9507 1.25 13.8787 1.3303 14.7731 1.44126C17.6062 1.7927 19.793 4.15593 20.0133 6.94946C20.1417 8.57698 20.25 10.2685 20.25 12C20.25 13.7315 20.1417 15.423 20.0133 17.0506C19.793 19.8441 17.606 22.2072 14.7731 22.5588C13.8787 22.6696 12.9507 22.75 12 22.75C11.0492 22.75 10.1211 22.6696 9.22673 22.5588C6.39387 22.2072 4.20685 19.8441 3.98657 17.0505C3.85823 15.423 3.75 13.7315 3.75 12C3.75 10.2685 3.85823 8.577 3.98657 6.94949C4.20684 4.15592 6.39386 1.7927 9.22678 1.44126ZM9.46362 3.38087C9.97681 3.31721 10.4884 3.26592 10.9995 3.23535V8.29747L7.49302 4.2066C8.05193 3.76866 8.72664 3.4723 9.46362 3.38087ZM6.24291 5.82132C6.06789 6.22338 5.95647 6.65585 5.92114 7.10392C5.84558 8.06211 5.77839 9.02714 5.73633 9.99974H9.82441L6.24291 5.82132ZM18.0777 7.10396C18.1533 8.06214 18.2205 9.02715 18.2626 9.99974H12.9995V3.23536C13.5106 3.26593 14.0221 3.31721 14.5353 3.38087C16.4405 3.61722 17.9294 5.22313 18.0777 7.10396Z',
};

export const IconMouseLeftClick03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-03-stroke-rounded IconMouseLeftClick03StrokeRounded"
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

export const IconMouseLeftClick03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-03-duotone-rounded IconMouseLeftClick03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-03-twotone-rounded IconMouseLeftClick03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconMouseLeftClick03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-03-solid-rounded IconMouseLeftClick03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-03-bulk-rounded IconMouseLeftClick03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-03-stroke-sharp IconMouseLeftClick03StrokeSharp"
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

export const IconMouseLeftClick03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-03-solid-sharp IconMouseLeftClick03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouseLeftClick03: TheIconSelfPack = {
  name: 'MouseLeftClick03',
  StrokeRounded: IconMouseLeftClick03StrokeRounded,
  DuotoneRounded: IconMouseLeftClick03DuotoneRounded,
  TwotoneRounded: IconMouseLeftClick03TwotoneRounded,
  SolidRounded: IconMouseLeftClick03SolidRounded,
  BulkRounded: IconMouseLeftClick03BulkRounded,
  StrokeSharp: IconMouseLeftClick03StrokeSharp,
  SolidSharp: IconMouseLeftClick03SolidSharp,
};