import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.5 9.6L15.3298 8.68465C14.6572 8.15854 14.4545 8.25535 14.4545 9.10274V14.4C14.4545 15.8615 13.6875 16 12.4091 16M7.5 14.4L8.67019 15.3153C9.34278 15.8415 9.54545 15.7447 9.54545 14.8973L9.54545 9.6C9.54545 8.13846 10.3125 8 11.5909 8',
  d2: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM11.5928 9.08189C12.1893 9.08189 12.6728 8.59836 12.6728 8.00189C12.6728 7.40542 12.1893 6.92189 11.5928 6.92189C11.0016 6.92189 10.1754 6.9318 9.52286 7.33514C8.71259 7.83598 8.46736 8.69849 8.46736 9.60189V13.322H7.51667C7.19191 13.3177 6.86752 13.46 6.65124 13.7365C6.28375 14.2063 6.36669 14.8851 6.8365 15.2526L8.00669 16.1679C8.19332 16.3139 8.41291 16.4703 8.64541 16.5761C8.84652 16.6676 9.31817 16.8411 9.82746 16.5978C10.3413 16.3523 10.5004 15.8715 10.5539 15.6538C10.6152 15.4046 10.6274 15.1347 10.6274 14.8991V9.60189C10.6274 9.33163 10.6608 9.20833 10.6792 9.1624C10.7085 9.15032 10.7689 9.13166 10.8844 9.11582C11.0377 9.0948 11.262 9.08189 11.5928 9.08189ZM17.3525 10.2673C17.72 9.79749 17.6371 9.11872 17.1673 8.75123L15.9971 7.83588C15.8104 7.68989 15.5908 7.53345 15.3583 7.42768C15.1572 7.3362 14.6856 7.16272 14.1763 7.40599C13.6624 7.65144 13.5033 8.13227 13.4498 8.34996C13.3885 8.59922 13.3764 8.86911 13.3764 9.10463V14.4019C13.3764 14.6722 13.343 14.7955 13.3245 14.8414C13.2953 14.8535 13.2349 14.8721 13.1193 14.888C13.0812 14.8932 13.0549 14.8979 13.0318 14.9021L13.0318 14.9021C12.962 14.9146 12.9214 14.9219 12.6728 14.9219C12.0764 14.9219 11.5928 15.4054 11.5928 16.0019C11.5928 16.5984 12.0764 17.0819 12.6728 17.0819C13.264 17.0819 13.8283 17.072 14.4809 16.6686C15.2912 16.1678 15.5364 15.3053 15.5364 14.4019V10.6818H16.4871C16.8118 10.6861 17.1362 10.5438 17.3525 10.2673Z',
  d3: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z',
  d4: 'M17.1461 8.77218C17.6029 9.12947 17.6835 9.78939 17.3262 10.2461C17.1159 10.515 16.8005 10.6534 16.4847 10.6492H15.5037V14.3992C15.5037 15.2979 15.2599 16.1475 14.4625 16.6404C13.8182 17.0386 13.0007 17.0492 12.4083 17.0492C11.8284 17.0492 11.3583 16.5791 11.3583 15.9992C11.3583 15.4193 11.8284 14.9492 12.4083 14.9492C12.7397 14.9492 12.9655 14.9363 13.1208 14.915C13.2524 14.897 13.3161 14.875 13.3448 14.8614L13.3485 14.853C13.3688 14.8042 13.4037 14.677 13.4037 14.3992L13.4037 9.10196C13.4037 8.86711 13.4159 8.60013 13.4763 8.35445C13.5292 8.13937 13.6852 7.66989 14.1866 7.43039C14.6835 7.19301 15.1445 7.3619 15.3433 7.45232C15.5725 7.55658 15.7898 7.71126 15.9759 7.85684L17.1461 8.77218Z',
  d5: 'M12.6402 7.99922C12.6402 8.57912 12.1701 9.04922 11.5902 9.04922C11.2588 9.04922 11.0329 9.06214 10.8777 9.08343C10.7461 9.10147 10.6823 9.12346 10.6537 9.13704L10.65 9.14547C10.6297 9.19422 10.5947 9.32139 10.5947 9.59922L10.5947 14.8965C10.5947 15.1313 10.5826 15.3983 10.5222 15.644C10.4693 15.8591 10.3133 16.3285 9.81188 16.568C9.31492 16.8054 8.85396 16.6365 8.65519 16.5461C8.42599 16.4419 8.20864 16.2872 8.02253 16.1416L6.85234 15.2263C6.39558 14.869 6.31494 14.2091 6.67223 13.7523C6.88254 13.4834 7.19798 13.3451 7.51384 13.3493H8.49472L8.49472 9.59922C8.49472 8.70051 8.73853 7.85091 9.536 7.35799C10.1802 6.95979 10.9978 6.94922 11.5902 6.94922C12.1701 6.94922 12.6402 7.41932 12.6402 7.99922Z',
  d6: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d7: 'M12.0127 16.0039H14.4231V8.13422C14.4231 8.04916 14.5217 8.00249 14.5869 8.05665L17.5127 10.4844M12.0127 8.00391H9.60224V15.8736C9.60224 15.9587 9.50373 16.0053 9.43847 15.9512L6.5127 13.5234',
  d8: 'M12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75ZM13.7052 8.00001C13.7052 7.71 13.8724 7.44597 14.1346 7.322C14.3968 7.19802 14.7069 7.2363 14.9311 7.42031L17.9766 9.92031L17.0248 11.0797L15.2052 9.58602V16.7488L12.001 16.75L12.0004 15.25L13.7052 15.2493V8.00001ZM12.0007 8.75001H10.2961V16.0009C10.2961 16.291 10.1289 16.555 9.86671 16.679C9.6045 16.8029 9.29432 16.7646 9.07017 16.5805L6.02472 14.0796L6.97667 12.9204L8.79615 14.4145L8.79615 7.25001H12.0007V8.75001Z',
};

export const IconCircleArrowReload02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-02-stroke-rounded IconCircleArrowReload02StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-02-duotone-rounded IconCircleArrowReload02DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-02-twotone-rounded IconCircleArrowReload02TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
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
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-02-solid-rounded IconCircleArrowReload02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-02-bulk-rounded IconCircleArrowReload02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-02-stroke-sharp IconCircleArrowReload02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-02-solid-sharp IconCircleArrowReload02SolidSharp"
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

export const iconPackOfCircleArrowReload02: TheIconSelfPack = {
  name: 'CircleArrowReload02',
  StrokeRounded: IconCircleArrowReload02StrokeRounded,
  DuotoneRounded: IconCircleArrowReload02DuotoneRounded,
  TwotoneRounded: IconCircleArrowReload02TwotoneRounded,
  SolidRounded: IconCircleArrowReload02SolidRounded,
  BulkRounded: IconCircleArrowReload02BulkRounded,
  StrokeSharp: IconCircleArrowReload02StrokeSharp,
  SolidSharp: IconCircleArrowReload02SolidSharp,
};