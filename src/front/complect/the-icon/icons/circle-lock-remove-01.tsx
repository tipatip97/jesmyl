import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5 22C6.55227 22 3.5 18.866 3.5 15C3.5 11.134 6.70027 8 10.648 8C13.4128 8 15.811 9.53725 17 11.7866',
  d2: 'M15 9V6.5C15 4.01472 12.9853 2 10.5 2C8.01472 2 6 4.01472 6 6.5V9.5',
  d3: 'M13.5 22L17 18.5M17 18.5L20.5 15M17 18.5L13.5 15M17 18.5L20.5 22',
  d4: 'M4.875 6.625C4.875 3.58743 7.33743 1.125 10.375 1.125C13.4126 1.125 15.875 3.58743 15.875 6.625V9.625C15.875 10.1773 15.4273 10.625 14.875 10.625C14.3227 10.625 13.875 10.1773 13.875 9.625V6.625C13.875 4.692 12.308 3.125 10.375 3.125C8.442 3.125 6.875 4.692 6.875 6.625V9.625C6.875 10.1773 6.42728 10.625 5.875 10.625C5.32272 10.625 4.875 10.1773 4.875 9.625V6.625Z',
  d5: 'M12.6679 14.1679C13.0584 13.7774 13.6916 13.7774 14.0821 14.1679L16.875 16.9608L19.6679 14.1679C20.0584 13.7774 20.6916 13.7774 21.0821 14.1679C21.4726 14.5584 21.4726 15.1916 21.0821 15.5821L18.2892 18.375L21.0821 21.1679C21.4726 21.5584 21.4726 22.1916 21.0821 22.5821C20.6916 22.9726 20.0584 22.9726 19.6679 22.5821L16.875 19.7892L14.0821 22.5821C13.6916 22.9726 13.0584 22.9726 12.6679 22.5821C12.2774 22.1916 12.2774 21.5584 12.6679 21.1679L15.4608 18.375L12.6679 15.5821C12.2774 15.1916 12.2774 14.5584 12.6679 14.1679Z',
  d6: 'M10.375 7.125C6.09479 7.125 2.625 10.5948 2.625 14.875C2.625 19.1552 6.09479 22.625 10.375 22.625C10.5734 22.625 10.6727 22.625 10.7409 22.5868C10.7993 22.5541 10.8337 22.5179 10.8633 22.4579C10.898 22.3878 10.8914 22.2598 10.8783 22.004C10.8433 21.3219 11.0863 20.6282 11.6072 20.1072L12.9152 18.7993C13.1152 18.5993 13.2152 18.4993 13.2152 18.375C13.2152 18.2507 13.1152 18.1507 12.9152 17.9507L11.6072 16.6428C10.6309 15.6665 10.6309 14.0835 11.6072 13.1072C12.5835 12.1309 14.1665 12.1309 15.1428 13.1072L16.4507 14.4152C16.6507 14.6152 16.7507 14.7152 16.875 14.7152C16.9993 14.7152 17.0993 14.6152 17.2993 14.4152L17.8184 13.8961C17.9253 13.7892 17.9787 13.7357 18.0006 13.6641C18.0224 13.5925 18.0087 13.522 17.9811 13.381C17.2848 9.81564 14.1441 7.125 10.375 7.125Z',
  d7: 'M10.375 1.125C7.33743 1.125 4.875 3.58743 4.875 6.625V9.41492C5.45668 8.82901 6.13134 8.33554 6.875 7.95847V6.625C6.875 4.692 8.442 3.125 10.375 3.125C12.308 3.125 13.875 4.692 13.875 6.625V7.95847C14.6187 8.33554 15.2933 8.82901 15.875 9.41492V6.625C15.875 3.58743 13.4126 1.125 10.375 1.125Z',
  d8: 'M4.99992 6.75C4.99992 3.71243 7.46236 1.25 10.4999 1.25C13.5375 1.25 15.9999 3.71243 15.9999 6.75V9.75H13.9999V6.75C13.9999 4.817 12.4329 3.25 10.4999 3.25C8.56693 3.25 6.99992 4.817 6.99992 6.75V9.75H4.99992V6.75Z',
  d9: 'M15.6288 18.5001L12.8359 15.7072L14.2501 14.293L17.043 17.0859L19.8359 14.293L21.2501 15.7072L18.4572 18.5001L21.2501 21.293L19.8359 22.7072L17.043 19.9143L14.2501 22.7072L12.8359 21.293L15.6288 18.5001Z',
  d10: 'M10.4999 7.25C6.21972 7.25 2.74992 10.7198 2.74992 15C2.74992 19.2802 6.21972 22.75 10.4999 22.75C11.0209 22.75 11.5299 22.6986 12.0221 22.6006L10.7148 21.2932L13.5077 18.5003L10.7148 15.7074L14.2503 12.1719L17.0432 14.9648L18.1642 13.8437C17.606 10.1119 14.3872 7.25 10.4999 7.25Z',
};

export const IconCircleLockRemove01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-remove-01-stroke-rounded IconCircleLockRemove01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCircleLockRemove01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-remove-01-duotone-rounded IconCircleLockRemove01DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="10.5" 
        cy="15" 
        r="7" 
        fill="var(--icon-fill)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconCircleLockRemove01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-remove-01-twotone-rounded IconCircleLockRemove01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockRemove01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-remove-01-solid-rounded IconCircleLockRemove01SolidRounded"
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockRemove01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-remove-01-bulk-rounded IconCircleLockRemove01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockRemove01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-remove-01-stroke-sharp IconCircleLockRemove01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconCircleLockRemove01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-remove-01-solid-sharp IconCircleLockRemove01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfCircleLockRemove01: TheIconSelfPack = {
  name: 'CircleLockRemove01',
  StrokeRounded: IconCircleLockRemove01StrokeRounded,
  DuotoneRounded: IconCircleLockRemove01DuotoneRounded,
  TwotoneRounded: IconCircleLockRemove01TwotoneRounded,
  SolidRounded: IconCircleLockRemove01SolidRounded,
  BulkRounded: IconCircleLockRemove01BulkRounded,
  StrokeSharp: IconCircleLockRemove01StrokeSharp,
  SolidSharp: IconCircleLockRemove01SolidSharp,
};