import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 4H6',
  d2: 'M18 4H14',
  d3: 'M9 20C7.6725 19.9645 6.90036 19.8282 6.42177 19.3045C5.77472 18.5965 5.9693 17.5144 6.35847 15.35L6.96989 11.9497C7.21514 10.5857 7.33777 9.90371 7.69445 9.38625C8.0453 8.87725 8.55358 8.47814 9.15294 8.24104C9.76224 8 10.5082 8 12 8C13.4918 8 14.2378 8 14.8471 8.24104C15.4464 8.47814 15.9547 8.87725 16.3056 9.38625C16.6622 9.90371 16.7849 10.5857 17.0301 11.9497L17.6415 15.35C18.0307 17.5144 18.2253 18.5965 17.5782 19.3045C17.1018 19.8258 16.3345 19.9636 15.018 20',
  d4: 'M12 18V22',
  d5: 'M17.6415 15.35L17.0301 11.9497C16.7849 10.5857 16.6622 9.90371 16.3056 9.38625C15.9547 8.87725 15.4464 8.47814 14.8471 8.24104C14.2378 8 13.4918 8 12 8C10.5082 8 9.76224 8 9.15294 8.24104C8.55358 8.47814 8.0453 8.87725 7.69445 9.38625C7.33777 9.90371 7.21514 10.5857 6.96989 11.9497L6.35847 15.35C5.9693 17.5144 5.77472 18.5965 6.42177 19.3045C6.90036 19.8282 7.6725 19.9645 9 20H15.018C16.3345 19.9636 17.1018 19.8258 17.5782 19.3045C18.2253 18.5965 18.0307 17.5144 17.6415 15.35Z',
  d6: 'M12 17C12.5523 17 13 17.4477 13 18V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V18C11 17.4477 11.4477 17 12 17Z',
  d7: 'M12.0262 7.25H11.9738C11.2501 7.25 10.6696 7.24999 10.1953 7.28181C9.7076 7.31453 9.28279 7.38311 8.87703 7.54362C8.1456 7.83297 7.51589 8.32374 7.07691 8.96061C6.83019 9.31855 6.68228 9.7106 6.56469 10.1611C6.4514 10.595 6.35512 11.1306 6.23692 11.788L5.60952 15.2772C5.42408 16.3083 5.26969 17.1668 5.25178 17.8539C5.2328 18.5819 5.36103 19.2556 5.86813 19.8105C6.58958 20.5999 7.69254 20.7153 8.97994 20.7497L8.98996 20.75H9.15C9.43284 20.75 9.57426 20.75 9.66213 20.6621C9.75 20.5743 9.75 20.4328 9.75 20.15V18C9.75 16.7574 10.7574 15.75 12 15.75C13.2426 15.75 14.25 16.7574 14.25 18V20.15C14.25 20.4328 14.25 20.5743 14.3379 20.6621C14.4257 20.75 14.5672 20.75 14.85 20.75H15.0283L15.0387 20.7497C16.3173 20.7144 17.4134 20.5966 18.1318 19.8105C18.6389 19.2556 18.7672 18.5819 18.7482 17.8539C18.7303 17.1668 18.5759 16.3083 18.3904 15.2772L17.7631 11.788C17.6448 11.1306 17.5486 10.595 17.4353 10.1611C17.3177 9.7106 17.1698 9.31855 16.9231 8.96061C16.4841 8.32374 15.8544 7.83297 15.1229 7.54362C14.7172 7.38311 14.2924 7.31453 13.8047 7.28181C13.3303 7.24999 12.7499 7.25 12.0262 7.25Z',
  d8: 'M9.41794 4.75H6C5.44772 4.75 5 4.30228 5 3.75C5 3.19772 5.44772 2.75 6 2.75H9.41794C9.81797 1.72566 10.8145 1 11.9805 1C13.1465 1 14.143 1.72566 14.543 2.75H18C18.5523 2.75 19 3.19772 19 3.75C19 4.30228 18.5523 4.75 18 4.75H14.543C14.143 5.77434 13.1465 6.5 11.9805 6.5C10.8145 6.5 9.81797 5.77434 9.41794 4.75Z',
  d9: 'M5 3.75C5 3.19772 5.44772 2.75 6 2.75H10C10.5523 2.75 11 3.19772 11 3.75C11 4.30228 10.5523 4.75 10 4.75H6C5.44772 4.75 5 4.30228 5 3.75Z',
  d10: 'M13 3.75C13 3.19772 13.4477 2.75 14 2.75H18C18.5523 2.75 19 3.19772 19 3.75C19 4.30228 18.5523 4.75 18 4.75H14C13.4477 4.75 13 4.30228 13 3.75Z',
  d11: 'M9.23047 3.75C9.23047 2.23122 10.4617 1 11.9805 1C13.4993 1 14.7305 2.23122 14.7305 3.75C14.7305 5.26878 13.4993 6.5 11.9805 6.5C10.4617 6.5 9.23047 5.26878 9.23047 3.75Z',
  d12: 'M14.5 19H19L16.5 8.5H7.5L5 19H9.5',
  d13: 'M12 16V22',
  d14: 'M6 5H9.43747C9.8375 6.02434 10.834 6.75 12 6.75C13.166 6.75 14.1625 6.02434 14.5625 5H18V3H14.5625C14.1625 1.97566 13.166 1.25 12 1.25C10.834 1.25 9.8375 1.97566 9.43747 3H6V5Z',
  d15: 'M11 22.75V15.75H13V22.75H11Z',
  d16: 'M7.50001 7.75C7.15271 7.75 6.85084 7.98843 6.7704 8.32628L4.2704 18.8263C4.21725 19.0495 4.26922 19.2848 4.41145 19.4649C4.55369 19.6449 4.77053 19.75 5.00001 19.75H9.5V14.25H14.5V19.75H19C19.2295 19.75 19.4463 19.6449 19.5886 19.4649C19.7308 19.2848 19.7828 19.0495 19.7296 18.8263L17.2296 8.32628C17.1492 7.98843 16.8473 7.75 16.5 7.75H7.50001Z',
};

export const IconScooter03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-03-stroke-rounded IconScooter03StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="4" 
        r="2" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScooter03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-03-duotone-rounded IconScooter03DuotoneRounded"
    >
      <circle 
        cx="12" 
        cy="4" 
        r="2" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScooter03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-03-twotone-rounded IconScooter03TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="4" 
        r="2" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScooter03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-03-solid-rounded IconScooter03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconScooter03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-03-bulk-rounded IconScooter03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.5" 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconScooter03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-03-stroke-sharp IconScooter03StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="4" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScooter03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-03-solid-sharp IconScooter03SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfScooter03: TheIconSelfPack = {
  name: 'Scooter03',
  StrokeRounded: IconScooter03StrokeRounded,
  DuotoneRounded: IconScooter03DuotoneRounded,
  TwotoneRounded: IconScooter03TwotoneRounded,
  SolidRounded: IconScooter03SolidRounded,
  BulkRounded: IconScooter03BulkRounded,
  StrokeSharp: IconScooter03StrokeSharp,
  SolidSharp: IconScooter03SolidSharp,
};