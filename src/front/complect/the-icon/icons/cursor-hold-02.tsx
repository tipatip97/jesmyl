import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.38086 2.46562C4.21503 0.490411 18.0114 5.32901 18 7.09558C17.9871 9.09884 12.6121 9.71513 11.1223 10.1331C10.2265 10.3844 9.98651 10.6421 9.77993 11.5815C8.84436 15.8362 8.37464 17.9524 7.3041 17.9997C5.59766 18.0751 0.590865 4.39327 2.38086 2.46562Z',
  d2: 'M17.5 17.95L18.4 16.6M22 17.5C22 19.9853 19.9853 22 17.5 22C15.0147 22 13 19.9853 13 17.5C13 15.0147 15.0147 13 17.5 13C19.9853 13 22 15.0147 22 17.5Z',
  d3: 'M18.4425 6.27536C18.5886 6.46652 18.7522 6.75077 18.75 7.1004C18.7443 7.97857 18.1458 8.58792 17.54 8.98418C16.9196 9.38997 16.1174 9.69253 15.3293 9.92753C14.5313 10.1655 13.6933 10.3496 12.9758 10.4983C12.4741 10.6005 11.5838 10.7826 11.3249 10.8552C10.9012 10.9741 10.7913 11.0567 10.7425 11.1093C10.6902 11.1657 10.6114 11.2923 10.5124 11.7426L10.5104 11.7517C10.0481 13.8541 9.68698 15.4964 9.30157 16.613C9.10919 17.1705 8.88921 17.6642 8.60512 18.0329C8.30691 18.42 7.89112 18.7245 7.33719 18.7489C6.98111 18.7647 6.69083 18.6021 6.50071 18.4609C6.2991 18.3112 6.11291 18.113 5.94368 17.9016C5.60325 17.4763 5.24878 16.8921 4.89868 16.2231C4.19444 14.8772 3.45027 13.076 2.8212 11.2251C2.19243 9.3752 1.66737 7.44262 1.4141 5.83323C1.28785 5.03098 1.22444 4.28056 1.25964 3.64796C1.29271 3.05346 1.4196 2.39857 1.83126 1.95526C2.25571 1.49817 2.91058 1.33595 3.5071 1.27845C4.13915 1.21753 4.89107 1.25834 5.69427 1.36369C7.30601 1.57509 9.24899 2.06371 11.1123 2.66349C12.977 3.26372 14.7968 3.98654 16.1621 4.68051C16.841 5.02559 17.435 5.37727 17.8699 5.71803C18.0863 5.88759 18.2884 6.07373 18.4425 6.27536Z',
  d4: 'M17.5 12.25C14.6005 12.25 12.25 14.6005 12.25 17.5C12.25 20.3995 14.6005 22.75 17.5 22.75C20.3995 22.75 22.75 20.3995 22.75 17.5C22.75 14.6005 20.3995 12.25 17.5 12.25ZM19.2322 17.1564C19.5385 16.6968 19.4143 16.076 18.9548 15.7696C18.4953 15.4633 17.8744 15.5874 17.5681 16.047L16.6681 17.397C16.3617 17.8565 16.4859 18.4774 16.9454 18.7837C17.4049 19.0901 18.0258 18.9659 18.3322 18.5064L19.2322 17.1564Z',
  d5: 'M18 7.33333L2 2L7.33333 18L10 10L18 7.33333Z',
  d6: 'M16.375 17.625L18.875 15.125M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z',
  d7: 'M1.46969 1.46969C1.67056 1.26882 1.96769 1.19867 2.23719 1.28851L18.2372 6.62184C18.5434 6.72393 18.75 7.01053 18.75 7.33335C18.75 7.65618 18.5434 7.94278 18.2372 8.04487L10.5929 10.5929L8.04487 18.2372C7.94278 18.5434 7.65618 18.75 7.33335 18.75C7.01053 18.75 6.72393 18.5434 6.62184 18.2372L1.28851 2.23719C1.19867 1.96769 1.26882 1.67056 1.46969 1.46969Z',
  d8: 'M17 11.25C13.8244 11.25 11.25 13.8244 11.25 17C11.25 20.1756 13.8244 22.75 17 22.75C20.1756 22.75 22.75 20.1756 22.75 17C22.75 13.8244 20.1756 11.25 17 11.25ZM17.0822 18.3322L19.5822 15.8322L18.168 14.418L15.668 16.918L17.0822 18.3322Z',
};

export const IconCursorHold02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-hold-02-stroke-rounded IconCursorHold02StrokeRounded"
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

export const IconCursorHold02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-hold-02-duotone-rounded IconCursorHold02DuotoneRounded"
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

export const IconCursorHold02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-hold-02-twotone-rounded IconCursorHold02TwotoneRounded"
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

export const IconCursorHold02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-hold-02-solid-rounded IconCursorHold02SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorHold02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-hold-02-bulk-rounded IconCursorHold02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorHold02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-hold-02-stroke-sharp IconCursorHold02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorHold02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-hold-02-solid-sharp IconCursorHold02SolidSharp"
    >
      <path 
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

export const iconPackOfCursorHold02: TheIconSelfPack = {
  name: 'CursorHold02',
  StrokeRounded: IconCursorHold02StrokeRounded,
  DuotoneRounded: IconCursorHold02DuotoneRounded,
  TwotoneRounded: IconCursorHold02TwotoneRounded,
  SolidRounded: IconCursorHold02SolidRounded,
  BulkRounded: IconCursorHold02BulkRounded,
  StrokeSharp: IconCursorHold02StrokeSharp,
  SolidSharp: IconCursorHold02SolidSharp,
};