import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 7H6',
  d2: 'M3 17H9',
  d3: 'M18 17L21 17',
  d4: 'M15 7L21 7',
  d5: 'M6 7C6 6.06812 6 5.60218 6.15224 5.23463C6.35523 4.74458 6.74458 4.35523 7.23463 4.15224C7.60218 4 8.06812 4 9 4C9.93188 4 10.3978 4 10.7654 4.15224C11.2554 4.35523 11.6448 4.74458 11.8478 5.23463C12 5.60218 12 6.06812 12 7C12 7.93188 12 8.39782 11.8478 8.76537C11.6448 9.25542 11.2554 9.64477 10.7654 9.84776C10.3978 10 9.93188 10 9 10C8.06812 10 7.60218 10 7.23463 9.84776C6.74458 9.64477 6.35523 9.25542 6.15224 8.76537C6 8.39782 6 7.93188 6 7Z',
  d6: 'M12 17C12 16.0681 12 15.6022 12.1522 15.2346C12.3552 14.7446 12.7446 14.3552 13.2346 14.1522C13.6022 14 14.0681 14 15 14C15.9319 14 16.3978 14 16.7654 14.1522C17.2554 14.3552 17.6448 14.7446 17.8478 15.2346C18 15.6022 18 16.0681 18 17C18 17.9319 18 18.3978 17.8478 18.7654C17.6448 19.2554 17.2554 19.6448 16.7654 19.8478C16.3978 20 15.9319 20 15 20C14.0681 20 13.6022 20 13.2346 19.8478C12.7446 19.6448 12.3552 19.2554 12.1522 18.7654C12 18.3978 12 17.9319 12 17Z',
  d7: 'M2 7C2 6.44772 2.44772 6 3 6H6C6.55228 6 7 6.44772 7 7C7 7.55228 6.55228 8 6 8H3C2.44772 8 2 7.55228 2 7Z',
  d8: 'M2 17C2 16.4477 2.44772 16 3 16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H3C2.44772 18 2 17.5523 2 17Z',
  d9: 'M17 17C17 16.4477 17.4477 16 18 16L21 16C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18L18 18C17.4477 18 17 17.5523 17 17Z',
  d10: 'M14 7C14 6.44772 14.4477 6 15 6L21 6C21.5523 6 22 6.44772 22 7C22 7.55229 21.5523 8 21 8L15 8C14.4477 8 14 7.55228 14 7Z',
  d11: 'M8.97475 3.25H9.02525C9.46971 3.24999 9.84075 3.24999 10.1454 3.27077C10.4625 3.29241 10.762 3.33905 11.0524 3.45933C11.7262 3.73844 12.2616 4.27379 12.5407 4.94762C12.661 5.23801 12.7076 5.53754 12.7292 5.85464C12.75 6.15925 12.75 6.53028 12.75 6.97474V7.02526C12.75 7.46972 12.75 7.84075 12.7292 8.14537C12.7076 8.46247 12.661 8.76199 12.5407 9.05238C12.2616 9.72621 11.7262 10.2616 11.0524 10.5407C10.762 10.661 10.4625 10.7076 10.1454 10.7292C9.84075 10.75 9.46972 10.75 9.02526 10.75H8.97474C8.53028 10.75 8.15925 10.75 7.85464 10.7292C7.53754 10.7076 7.23801 10.661 6.94762 10.5407C6.27379 10.2616 5.73844 9.72621 5.45933 9.05238C5.33905 8.76199 5.29241 8.46247 5.27077 8.14537C5.24999 7.84075 5.24999 7.46971 5.25 7.02525V6.97475C5.24999 6.53029 5.24999 6.15925 5.27077 5.85464C5.29241 5.53754 5.33905 5.23801 5.45933 4.94762C5.73844 4.27379 6.27379 3.73844 6.94762 3.45933C7.23801 3.33905 7.53754 3.29241 7.85464 3.27077C8.15925 3.24999 8.53029 3.24999 8.97475 3.25Z',
  d12: 'M14.9747 13.25H15.0253C15.4697 13.25 15.8408 13.25 16.1454 13.2708C16.4625 13.2924 16.762 13.339 17.0524 13.4593C17.7262 13.7384 18.2616 14.2738 18.5407 14.9476C18.661 15.238 18.7076 15.5375 18.7292 15.8546C18.75 16.1592 18.75 16.5303 18.75 16.9747V17.0253C18.75 17.4697 18.75 17.8408 18.7292 18.1454C18.7076 18.4625 18.661 18.762 18.5407 19.0524C18.2616 19.7262 17.7262 20.2616 17.0524 20.5407C16.762 20.661 16.4625 20.7076 16.1454 20.7292C15.8408 20.75 15.4697 20.75 15.0253 20.75H14.9747C14.5303 20.75 14.1592 20.75 13.8546 20.7292C13.5375 20.7076 13.238 20.661 12.9476 20.5407C12.2738 20.2616 11.7384 19.7262 11.4593 19.0524C11.339 18.762 11.2924 18.4625 11.2708 18.1454C11.25 17.8408 11.25 17.4697 11.25 17.0253V16.9747C11.25 16.5303 11.25 16.1592 11.2708 15.8546C11.2924 15.5375 11.339 15.238 11.4593 14.9476C11.7384 14.2738 12.2738 13.7384 12.9476 13.4593C13.238 13.339 13.5375 13.2924 13.8546 13.2708C14.1592 13.25 14.5303 13.25 14.9747 13.25Z',
  d13: 'M12 4H6V10H12V4Z',
  d14: 'M18 14H12V20H18V14Z',
  d15: 'M6 8H3V6H6V8Z',
  d16: 'M9 18H3V16H9V18Z',
  d17: 'M21 18L18 18L18 16L21 16L21 18Z',
  d18: 'M21 8L15 8L15 6L21 6L21 8Z',
  d19: 'M5.25 3.25H12.75V10.75H5.25V3.25Z',
  d20: 'M11.25 13.25H18.75V20.75H11.25V13.25Z',
};

export const IconFilterHorizontalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-horizontal-stroke-rounded IconFilterHorizontalStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconFilterHorizontalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-horizontal-duotone-rounded IconFilterHorizontalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconFilterHorizontalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-horizontal-twotone-rounded IconFilterHorizontalTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconFilterHorizontalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-horizontal-solid-rounded IconFilterHorizontalSolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconFilterHorizontalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-horizontal-bulk-rounded IconFilterHorizontalBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconFilterHorizontalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-horizontal-stroke-sharp IconFilterHorizontalStrokeSharp"
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilterHorizontalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-horizontal-solid-sharp IconFilterHorizontalSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfFilterHorizontal: TheIconSelfPack = {
  name: 'FilterHorizontal',
  StrokeRounded: IconFilterHorizontalStrokeRounded,
  DuotoneRounded: IconFilterHorizontalDuotoneRounded,
  TwotoneRounded: IconFilterHorizontalTwotoneRounded,
  SolidRounded: IconFilterHorizontalSolidRounded,
  BulkRounded: IconFilterHorizontalBulkRounded,
  StrokeSharp: IconFilterHorizontalStrokeSharp,
  SolidSharp: IconFilterHorizontalSolidSharp,
};