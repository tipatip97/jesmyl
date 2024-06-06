import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 22V19C20 17.1144 20 16.1716 19.4142 15.5858C18.8284 15 17.8856 15 16 15H14L12 17L10 15H8C6.11438 15 5.17157 15 4.58579 15.5858C4 16.1716 4 17.1144 4 19V22',
  d2: 'M16 15V22',
  d3: 'M8 15V22',
  d4: 'M15.5 9V7C15.5 5.067 13.933 3.5 12 3.5C10.067 3.5 8.5 5.067 8.5 7V9C8.5 10.933 10.067 12.5 12 12.5C13.933 12.5 15.5 10.933 15.5 9Z',
  d5: 'M7.5 7.5H16.5',
  d6: 'M12 2V3.5',
  d7: 'M10 15H8V22H16V15H14L12 17L10 15Z',
  d8: 'M15.5 7.5V7C15.5 5.067 13.933 3.5 12 3.5C10.067 3.5 8.5 5.067 8.5 7V7.5H15.5Z',
  d9: 'M15.5 7.5V9C15.5 10.933 13.933 12.5 12 12.5C10.067 12.5 8.5 10.933 8.5 9V7.5',
  d10: 'M15.5 7.5V7C15.5 5.067 13.933 3.5 12 3.5M8.5 7.5V7C8.5 5.067 10.067 3.5 12 3.5M12 3.5V2M7.5 7.5H16.5',
  d11: 'M8.5 6.25C8.91421 6.25 9.25 6.58579 9.25 7V9C9.25 10.5188 10.4812 11.75 12 11.75C13.5188 11.75 14.75 10.5188 14.75 9V7C14.75 6.58579 15.0858 6.25 15.5 6.25C15.9142 6.25 16.25 6.58579 16.25 7V9C16.25 11.3472 14.3472 13.25 12 13.25C9.65279 13.25 7.75 11.3472 7.75 9V7C7.75 6.58579 8.08579 6.25 8.5 6.25Z',
  d12: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V5C12.75 5.41421 12.4142 5.75 12 5.75C11.5858 5.75 11.25 5.41421 11.25 5V2C11.25 1.58579 11.5858 1.25 12 1.25Z',
  d13: 'M11.25 2.81597C9.34033 3.15598 7.872 4.7714 7.75723 6.75L7.5 6.75C7.08579 6.74999 6.75 7.08578 6.75 7.49999C6.75 7.91421 7.08578 8.25 7.5 8.25H16.5C16.9142 8.25 17.25 7.91421 17.25 7.5C17.25 7.08578 16.9142 6.75 16.5 6.75H16.2428C16.128 4.7714 14.6597 3.15599 12.75 2.81597V2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V2.81597Z',
  d14: 'M7.75 14.25H10C10.1989 14.25 10.3897 14.329 10.5303 14.4697L12 15.9393L13.4697 14.4697C13.6103 14.329 13.8011 14.25 14 14.25H16.25L16.25 22.75H7.75L7.75 14.25ZM6.25 22.7356L6.25 14.2644C6.0826 14.2712 5.92632 14.2812 5.78102 14.296C5.30755 14.3441 4.86818 14.4489 4.47218 14.7135C4.17191 14.9141 3.9141 15.1719 3.71346 15.4722C3.44886 15.8682 3.34415 16.3075 3.29599 16.781C3.24997 17.2334 3.24998 17.8688 3.25 18.5383V18.5384V18.5384C3.24998 19.2079 3.24997 19.7667 3.29599 20.219C3.34415 20.6925 3.44886 21.1318 3.71346 21.5278C3.9141 21.8281 4.17191 22.0859 4.47218 22.2865C4.86818 22.5511 5.30755 22.6559 5.78102 22.704C5.92632 22.7188 6.0826 22.7288 6.25 22.7356ZM17.75 22.7356L17.75 14.2644C17.9174 14.2712 18.0737 14.2812 18.219 14.296C18.6925 14.3441 19.1318 14.4489 19.5278 14.7135C19.8281 14.9141 20.0859 15.1719 20.2865 15.4722C20.5511 15.8682 20.6559 16.3075 20.704 16.781C20.75 17.2334 20.75 17.8687 20.75 18.5383C20.75 19.2079 20.75 19.7666 20.704 20.219C20.6559 20.6925 20.5511 21.1318 20.2865 21.5278C20.0859 21.8281 19.8281 22.0859 19.5278 22.2865C19.1318 22.5511 18.6925 22.6559 18.219 22.704C18.0737 22.7188 17.9174 22.7288 17.75 22.7356Z',
  d15: 'M10 14.25C10.1989 14.25 10.3897 14.329 10.5303 14.4697L12 15.9393L13.4697 14.4697C13.6103 14.329 13.8011 14.25 14 14.25H16.5383H16.5384C17.2079 14.25 17.7667 14.25 18.219 14.296C18.6925 14.3441 19.1318 14.4489 19.5278 14.7135C19.8281 14.9141 20.0859 15.1719 20.2865 15.4722C20.5511 15.8682 20.6559 16.3075 20.704 16.781C20.75 17.2334 20.75 17.8687 20.75 18.5383C20.75 19.2079 20.75 19.7666 20.704 20.219C20.6559 20.6925 20.5511 21.1318 20.2865 21.5278C20.0859 21.8281 19.8281 22.0859 19.5278 22.2865C19.1318 22.5511 18.6925 22.6559 18.219 22.704C17.7667 22.75 17.2079 22.75 16.5384 22.75H16.5383H7.46166H7.46163C6.79206 22.75 6.23335 22.75 5.78102 22.704C5.30755 22.6559 4.86818 22.5511 4.47218 22.2865C4.17191 22.0859 3.9141 21.8281 3.71346 21.5278C3.44886 21.1318 3.34415 20.6925 3.29598 20.219C3.24997 19.7667 3.24998 19.2079 3.25 18.5384V18.5383C3.24998 17.8688 3.24997 17.2334 3.29598 16.781C3.34415 16.3075 3.44886 15.8682 3.71346 15.4722C3.9141 15.1719 4.17191 14.9141 4.47218 14.7135C4.86818 14.4489 5.30755 14.3441 5.78102 14.296C6.23335 14.25 6.79206 14.25 7.46163 14.25H7.46166H10Z',
  d16: 'M6.25 14.2644C6.60373 14.25 7.00715 14.25 7.46163 14.25H7.75V22.75H7.46166C7.00719 22.75 6.60373 22.75 6.25 22.7356V14.2644Z',
  d17: 'M16.25 22.75V14.25H16.5383C16.9928 14.25 17.3963 14.25 17.75 14.2644V22.7356C17.3963 22.75 16.9929 22.75 16.5384 22.75H16.25Z',
  d18: 'M20 22V16.5L14.5 15H14L12 17L10 15H9.5L4 16.5V22',
  d19: 'M16 16V22',
  d20: 'M8 16V22',
  d21: 'M8.75 14.4272L9.39956 14.25H10.3107L12 15.9393L13.6893 14.25H14.6004L15.25 14.4272L15.25 22.75H8.75V14.4272ZM7.25 22.75L7.25 14.8362L3.25 15.9272L3.25 22.75H7.25ZM16.75 22.75V14.8362L20.75 15.9272V22.75L16.75 22.75Z',
  d22: 'M9.25 6.75V9C9.25 10.5188 10.4812 11.75 12 11.75C13.5188 11.75 14.75 10.5188 14.75 9V6.75H16.25V9C16.25 11.3472 14.3472 13.25 12 13.25C9.65279 13.25 7.75 11.3472 7.75 9V6.75H9.25Z',
  d23: 'M6.75 6.75H7.75723C7.872 4.7714 9.34033 3.15598 11.25 2.81597V1.25H12.75V2.81597C14.6597 3.15598 16.128 4.7714 16.2428 6.75H17.25V8.25H6.75V6.75Z',
};

export const IconLaborStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="labor-stroke-rounded IconLaborStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaborDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="labor-duotone-rounded IconLaborDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaborTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="labor-twotone-rounded IconLaborTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaborSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="labor-solid-rounded IconLaborSolidRounded"
    >
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

export const IconLaborBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="labor-bulk-rounded IconLaborBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaborStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="labor-stroke-sharp IconLaborStrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconLaborSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="labor-solid-sharp IconLaborSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLabor: TheIconSelfPack = {
  name: 'Labor',
  StrokeRounded: IconLaborStrokeRounded,
  DuotoneRounded: IconLaborDuotoneRounded,
  TwotoneRounded: IconLaborTwotoneRounded,
  SolidRounded: IconLaborSolidRounded,
  BulkRounded: IconLaborBulkRounded,
  StrokeSharp: IconLaborStrokeSharp,
  SolidSharp: IconLaborSolidSharp,
};