import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 2.09084C10.6655 2.02383 11.3389 2 12 2C12.9247 2 13.8373 2.07762 14.7349 2.1882C17.1758 2.48893 19.0694 4.51965 19.2593 6.91118C19.3909 8.56832 19.5 10.268 19.5 12C19.5 13.732 19.3909 15.4317 19.2593 17.0888C19.0694 19.4803 17.1758 21.511 14.7349 21.8118C13.8373 21.9223 12.9247 22 12 22C11.0752 22 10.1626 21.9223 9.26502 21.8118C6.82417 21.511 4.93047 19.4803 4.74061 17.0888C4.60903 15.4317 4.5 13.732 4.5 12C4.5 11.3283 4.5164 10.6614 4.54415 10',
  d2: 'M12 2L12 11',
  d3: 'M5 11H19',
  d4: 'M9.26502 21.8118C6.82417 21.511 4.93047 19.4803 4.74061 17.0888C4.60903 15.4317 4.51172 12.7319 4.51172 11H19.4884C19.4959 11.3321 19.5 11.6654 19.5 12C19.5 13.7319 19.3909 15.4317 19.2593 17.0888C19.0694 19.4803 17.1758 21.511 14.7349 21.8118C13.8373 21.9223 12.9247 22 12 22C11.0752 22 10.1626 21.9223 9.26502 21.8118Z',
  d5: 'M3 5C3 3.20507 4.45507 1.75 6.25 1.75C8.04493 1.75 9.5 3.20507 9.5 5C9.5 6.79493 8.04493 8.25 6.25 8.25C4.45507 8.25 3 6.79493 3 5Z',
  d6: 'M10.7116 1.34369C11.3985 1.27405 12.0861 1.25 12.75 1.25C13.7007 1.25 14.6287 1.3303 15.5231 1.44126C18.3562 1.7927 20.543 4.15593 20.7633 6.94946C20.8917 8.57698 21 10.2685 21 12C21 13.7315 20.8917 15.423 20.7633 17.0506C20.543 19.8441 18.356 22.2072 15.5231 22.5588C14.6287 22.6696 13.7007 22.75 12.75 22.75C11.7992 22.75 10.8711 22.6696 9.97673 22.5588C7.14387 22.2072 4.95685 19.8441 4.73657 17.0505C4.60823 15.423 4.5 13.7315 4.5 12C4.5 11.3277 4.5163 10.6622 4.54371 10.0045C4.56618 9.46522 5.01857 9.04641 5.55414 9.06904C6.08971 9.09167 6.50565 9.54717 6.48318 10.0864C6.47959 10.1757 6.55098 10.25 6.64031 10.25H11.15C11.4328 10.25 11.5743 10.25 11.6621 10.1621C11.75 10.0743 11.75 9.93284 11.75 9.65V3.85574C11.75 3.55804 11.75 3.4092 11.6528 3.32003C11.5557 3.23087 11.4113 3.2433 11.1224 3.26815C11.0501 3.27437 10.978 3.28111 10.9061 3.28841C10.3727 3.34248 9.89682 2.95097 9.84312 2.41396C9.78942 1.87694 10.1782 1.39777 10.7116 1.34369ZM18.3997 10.25C18.6933 10.25 18.8401 10.25 18.9288 10.1568C19.0175 10.0636 19.0103 9.91803 18.9958 9.62695C18.9537 8.7805 18.8942 7.93975 18.8283 7.1042C18.6799 5.22337 17.191 3.61746 15.2858 3.38111C14.9851 3.34381 14.6849 3.31076 14.3851 3.28363C14.0919 3.2571 13.9453 3.24383 13.8477 3.33305C13.75 3.42226 13.75 3.57236 13.75 3.87256V9.64998C13.75 9.93282 13.75 10.0742 13.8379 10.1621C13.9257 10.25 14.0672 10.25 14.35 10.25H18.3997Z',
  d7: 'M13.0049 2V11',
  d8: 'M6.01 7.5C7.38976 7.5 8.50827 6.38071 8.50827 5C8.50827 3.61929 7.38976 2.5 6.01 2.5C4.63024 2.5 3.51172 3.61929 3.51172 5C3.51172 6.38071 4.63024 7.5 6.01 7.5Z',
  d9: 'M20.5131 11.0002C20.5131 12.7322 20.3915 15.4319 20.26 17.089C20.0702 19.4805 18.1779 21.5112 15.7387 21.812C14.8417 21.9225 13.9297 22.0002 13.0057 22.0002C12.0815 22.0002 11.1695 21.9225 10.2726 21.812C7.83341 21.5112 5.94101 19.4805 5.75128 17.089C5.63665 15.6444 5.43304 12.9082 5.53056 11.0002M20.5131 11.0002C20.5131 9.26818 20.3915 8.56855 20.26 6.91141C20.0702 4.51988 18.1779 2.48916 15.7387 2.18843C14.8417 2.07785 13.9297 2.00023 13.0057 2.00023C12.0815 2.00023 11.8983 1.9903 11.0014 2.10088M20.5131 11.0002H5.53056M5.52606 10.2569C5.52606 10.479 5.5276 10.7292 5.53056 11.0002',
  d10: 'M2.75 4.25C2.75 2.59315 4.09315 1.25 5.75 1.25C7.40685 1.25 8.75 2.59315 8.75 4.25C8.75 5.90685 7.40685 7.25 5.75 7.25C4.09315 7.25 2.75 5.90685 2.75 4.25Z',
  d11: 'M4.86414 8.66283C4.81631 9.43136 4.77923 10.2115 4.76149 11.0006C4.75405 11.332 4.75 11.6651 4.75 12C4.75 13.7315 4.85826 15.423 4.98665 17.0505C5.20698 19.8441 7.39395 22.2072 10.2269 22.5588C11.1212 22.6696 12.0493 22.75 13 22.75C13.9507 22.75 14.8789 22.6696 15.7732 22.5588C18.6062 22.2072 20.793 19.8441 21.0133 17.0506C21.1417 15.423 21.25 13.7315 21.25 12C21.25 11.6651 21.246 11.332 21.2385 11.0006C21.2074 9.61792 21.117 8.263 21.0133 6.94946C20.793 4.15593 18.6062 1.7927 15.7732 1.44126C14.8788 1.3303 13.9507 1.25 13 1.25C12.0493 1.25 11.1212 1.3303 10.2268 1.44126C9.94168 1.47663 9.66308 1.53238 9.39238 1.6069C9.77839 2.13793 10.0511 2.75663 10.175 3.4275C10.2701 3.40842 10.3663 3.39277 10.4637 3.38069C10.977 3.31701 11.4887 3.26571 12 3.23514V10.045H6.73438C6.75455 9.5695 6.78079 9.09593 6.81114 8.62417C6.47088 8.70642 6.11553 8.75 5.75 8.75C5.44677 8.75 5.15055 8.72001 4.86414 8.66283ZM14 10.045V3.2352C14.5109 3.26578 15.0223 3.31705 15.5353 3.38069C17.4405 3.61704 18.9294 5.22295 19.0777 7.10378C19.1545 8.07659 19.2226 9.05659 19.2646 10.045H14Z',
};

export const IconMouseLeftClick02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-02-stroke-rounded IconMouseLeftClick02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="5.5" 
        cy="5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-02-duotone-rounded IconMouseLeftClick02DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5.5" 
        cy="5" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
      <circle 
        cx="5.5" 
        cy="5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-02-twotone-rounded IconMouseLeftClick02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5.5" 
        cy="5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-02-solid-rounded IconMouseLeftClick02SolidRounded"
    >
      <path 
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

export const IconMouseLeftClick02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-02-bulk-rounded IconMouseLeftClick02BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-02-stroke-sharp IconMouseLeftClick02StrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-02-solid-sharp IconMouseLeftClick02SolidSharp"
    >
      <path 
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

export const iconPackOfMouseLeftClick02: TheIconSelfPack = {
  name: 'MouseLeftClick02',
  StrokeRounded: IconMouseLeftClick02StrokeRounded,
  DuotoneRounded: IconMouseLeftClick02DuotoneRounded,
  TwotoneRounded: IconMouseLeftClick02TwotoneRounded,
  SolidRounded: IconMouseLeftClick02SolidRounded,
  BulkRounded: IconMouseLeftClick02BulkRounded,
  StrokeSharp: IconMouseLeftClick02StrokeSharp,
  SolidSharp: IconMouseLeftClick02SolidSharp,
};