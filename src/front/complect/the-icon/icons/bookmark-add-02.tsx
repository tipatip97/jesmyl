import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 2C7.22876 2 5.34315 2 4.17157 3.12874C3 4.25748 3 6.07416 3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C5.26947 22.6514 8.0768 19.9852 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C13.9232 19.9852 16.7305 22.6514 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V13',
  d2: 'M17 10L17 2M13 6H21',
  d3: 'M3 17.9808V9.70753C3 6.07416 3 4.25748 4.17157 3.12874C5.34315 2 7.22876 2 11 2C14.7712 2 16.6569 2 17.8284 3.12874C19 4.25748 19 6.07416 19 9.70753V17.9808C19 20.2867 19 21.4396 18.2272 21.8523C16.7305 22.6514 13.9232 19.9852 12.59 19.1824C11.8168 18.7168 11.4302 18.484 11 18.484C10.5698 18.484 10.1832 18.7168 9.41 19.1824C8.0768 19.9852 5.26947 22.6514 3.77285 21.8523C3 21.4396 3 20.2867 3 17.9808Z',
  d4: 'M16.875 1.125C17.4273 1.125 17.875 1.57272 17.875 2.125L17.875 5.125H20.875C21.4273 5.125 21.875 5.57272 21.875 6.125C21.875 6.67728 21.4273 7.125 20.875 7.125H17.875L17.875 10.125C17.875 10.6773 17.4273 11.125 16.875 11.125C16.3227 11.125 15.875 10.6773 15.875 10.125L15.875 7.125H12.875C12.3227 7.125 11.875 6.67728 11.875 6.125C11.875 5.57272 12.3227 5.125 12.875 5.125H15.875L15.875 2.125C15.875 1.57272 16.3227 1.125 16.875 1.125Z',
  d5: 'M14.375 2.125V3.025C14.375 3.30784 14.375 3.44926 14.2871 3.53713C14.1993 3.625 14.0578 3.625 13.775 3.625H12.875C11.4943 3.625 10.375 4.74429 10.375 6.125C10.375 7.50571 11.4943 8.625 12.875 8.625H13.775C14.0578 8.625 14.1993 8.625 14.2871 8.71287C14.375 8.80074 14.375 8.94216 14.375 9.225V10.125C14.375 11.5057 15.4943 12.625 16.875 12.625C17.8424 12.625 18.6814 12.0756 19.0971 11.2717C19.147 11.1751 19.2442 11.1096 19.353 11.1096C19.5032 11.1096 19.625 11.2314 19.625 11.3817V18.1708C19.6251 19.2684 19.6251 20.1803 19.5197 20.8655C19.4106 21.5745 19.1564 22.2645 18.4554 22.6389C17.8303 22.9727 17.1426 22.9048 16.5596 22.7278C15.9699 22.5488 15.3705 22.2239 14.8217 21.8771C14.2676 21.527 13.6688 21.0868 13.1965 20.7377C12.7337 20.3956 12.3619 20.1208 12.0781 19.9499C11.6785 19.7093 11.4263 19.5585 11.2217 19.4621C11.033 19.3732 10.9413 19.359 10.875 19.359C10.8087 19.359 10.717 19.3732 10.5283 19.4621C10.3238 19.5585 10.0715 19.7093 9.6719 19.9499C9.38808 20.1208 9.01636 20.3956 8.55354 20.7377C8.0812 21.0868 7.48239 21.527 6.92836 21.8771C6.37954 22.2239 5.78014 22.5488 5.19044 22.7278C4.60741 22.9048 3.91976 22.9727 3.29458 22.6389C2.59357 22.2645 2.33938 21.5745 2.23033 20.8655C2.12494 20.1803 2.12497 19.2684 2.125 18.1709L2.12501 9.77443C2.12499 8.00706 2.12497 6.6015 2.27865 5.50025C2.43743 4.36243 2.773 3.43931 3.52622 2.71363C4.27552 1.99172 5.22212 1.67353 6.38958 1.52231C7.527 1.37498 8.98108 1.37499 10.8204 1.375H10.9296C12.0057 1.37499 12.95 1.37499 13.7762 1.40449C14.0519 1.41434 14.1897 1.41926 14.2691 1.48662C14.2868 1.5016 14.2962 1.51135 14.3105 1.52952C14.375 1.61125 14.375 1.7825 14.375 2.125Z',
  d6: 'M19 13V22L11 18L3 22V2.05C3 2.02238 3.02239 2 3.05 2H11',
  d7: 'M17 10V2M13 6H21',
  d8: 'M18.75 6.3125L18.75 9.3125H16.75L16.75 6.3125H13.75V4.3125H16.75L16.75 1.3125H18.75L18.75 4.3125H21.75V6.3125H18.75Z',
  d9: 'M15.25 10.8125V7.8125H12.25V2.8125H15.25V1.25H3C2.80109 1.25 2.61032 1.32902 2.46967 1.46967C2.32902 1.61032 2.25 1.80109 2.25 2V22.75L11 18.375L19.75 22.75V10.8125H15.25Z',
};

export const IconBookmarkAdd02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-02-stroke-rounded IconBookmarkAdd02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkAdd02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-02-duotone-rounded IconBookmarkAdd02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkAdd02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-02-twotone-rounded IconBookmarkAdd02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkAdd02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-02-solid-rounded IconBookmarkAdd02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBookmarkAdd02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-02-bulk-rounded IconBookmarkAdd02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkAdd02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-02-stroke-sharp IconBookmarkAdd02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkAdd02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-02-solid-sharp IconBookmarkAdd02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookmarkAdd02: TheIconSelfPack = {
  name: 'BookmarkAdd02',
  StrokeRounded: IconBookmarkAdd02StrokeRounded,
  DuotoneRounded: IconBookmarkAdd02DuotoneRounded,
  TwotoneRounded: IconBookmarkAdd02TwotoneRounded,
  SolidRounded: IconBookmarkAdd02SolidRounded,
  BulkRounded: IconBookmarkAdd02BulkRounded,
  StrokeSharp: IconBookmarkAdd02StrokeSharp,
  SolidSharp: IconBookmarkAdd02SolidSharp,
};