import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 2C7.22876 2 5.34315 2 4.17157 3.12874C3 4.25748 3 6.07416 3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C5.26947 22.6514 8.0768 19.9852 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C13.9232 19.9852 16.7305 22.6514 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V12.5',
  d2: 'M3.5 7H10',
  d3: 'M17 10L17 2M13 6H21',
  d4: 'M3.02775 7H18.9723C19 7.77051 19 8.66411 19 9.70753V17.9808C19 20.2867 19 21.4396 18.2272 21.8523C17.0846 22.4624 15.178 21.0527 13.7467 19.9944C13.3032 19.6665 12.9054 19.3723 12.59 19.1824C11.8168 18.7168 11.4302 18.484 11 18.484C10.5698 18.484 10.1832 18.7168 9.41 19.1824C9.09462 19.3723 8.69675 19.6665 8.25325 19.9944C6.82195 21.0527 4.91543 22.4624 3.77285 21.8523C3 21.4396 3 20.2867 3 17.9808V9.70753C3 8.66411 3 7.77051 3.02775 7Z',
  d5: 'M16.875 1.125C17.4273 1.125 17.875 1.57272 17.875 2.125L17.875 5.125H20.875C21.4273 5.125 21.875 5.57272 21.875 6.125C21.875 6.67728 21.4273 7.125 20.875 7.125H17.875L17.875 10.125C17.875 10.6773 17.4273 11.125 16.875 11.125C16.3227 11.125 15.875 10.6773 15.875 10.125L15.875 7.125H12.875C12.3227 7.125 11.875 6.67728 11.875 6.125C11.875 5.57272 12.3227 5.125 12.875 5.125H15.875L15.875 2.125C15.875 1.57272 16.3227 1.125 16.875 1.125Z',
  d6: 'M14.375 2.125V3.025C14.375 3.30784 14.375 3.44926 14.2871 3.53713C14.1993 3.625 14.0578 3.625 13.775 3.625H12.875C11.4943 3.625 10.375 4.74429 10.375 6.125C10.375 6.2591 10.271 6.375 10.1369 6.375H2.83346C2.5289 6.375 2.37662 6.375 2.28714 6.27451C2.19765 6.17401 2.21468 6.02757 2.24874 5.73469C2.258 5.65506 2.26795 5.57691 2.27865 5.50025C2.43743 4.36243 2.773 3.43931 3.52622 2.71363C4.27552 1.99173 5.22212 1.67353 6.38958 1.52231C7.527 1.37498 9.03569 1.37499 10.875 1.375C11.96 1.37499 12.93 1.37499 13.7765 1.40522C14.0518 1.41506 14.1895 1.41997 14.2687 1.48703C14.2867 1.50223 14.2963 1.51213 14.3108 1.53063C14.375 1.61225 14.375 1.78316 14.375 2.125Z',
  d7: 'M11.2748 8.04585C11.7084 8.40744 12.2663 8.625 12.875 8.625H13.775C14.0578 8.625 14.1993 8.625 14.2871 8.71287C14.375 8.80074 14.375 8.94216 14.375 9.225V10.125C14.375 11.5057 15.4943 12.625 16.875 12.625C17.3554 12.625 17.9358 12.4505 18.2821 12.1889C19.1426 11.5388 19.4033 11.2144 19.5141 11.2696C19.625 11.3248 19.625 11.7721 19.625 12.6665V18.1708C19.6251 19.2684 19.6251 20.1803 19.5197 20.8655C19.4106 21.5745 19.1564 22.2645 18.4554 22.6389C17.8303 22.9727 17.1426 22.9048 16.5596 22.7278C15.9699 22.5488 15.3705 22.2239 14.8217 21.8771C14.2676 21.527 13.7244 21.1279 13.252 20.7788C12.7892 20.4367 12.3619 20.1208 12.0781 19.9499C11.6785 19.7093 11.4263 19.5585 11.2217 19.4621C11.033 19.3732 10.9413 19.359 10.875 19.359C10.8087 19.359 10.717 19.3732 10.5283 19.4621C10.3238 19.5585 10.0715 19.7093 9.6719 19.9499C9.38808 20.1208 8.96081 20.4367 8.498 20.7788C8.02566 21.1279 7.48239 21.527 6.92836 21.8771C6.37954 22.2239 5.78014 22.5488 5.19044 22.7278C4.60741 22.9048 3.91976 22.9727 3.29458 22.6389C2.59357 22.2645 2.33938 21.5745 2.23033 20.8655C2.12494 20.1803 2.12497 19.2683 2.125 18.1708L2.12501 9.77443C2.125 9.31398 2.125 8.87806 2.12771 8.4657C2.12954 8.18813 2.13045 8.04934 2.2182 7.96217C2.30594 7.875 2.44555 7.875 2.72477 7.875H10.8376C10.9552 7.875 11.0139 7.875 11.0634 7.89294C11.113 7.91088 11.1669 7.95587 11.2748 8.04585Z',
  d8: 'M3.5 7H11',
  d9: 'M17 10V2M13 6H21',
  d10: 'M19 12V22L11 18L3 22V2.05C3 2.02238 3.02239 2 3.05 2H11',
  d11: 'M19.25 7L19.25 10H17.25L17.25 7H14.25V5H17.25L17.25 2H19.25L19.25 5H22.25V7H19.25Z',
  d12: 'M15.75 1.25H2.5C2.30109 1.25 2.11032 1.32902 1.96967 1.46967C1.82902 1.61032 1.75 1.80109 1.75 2V6.25H12.75V3.5H15.75L15.75 1.25Z',
  d13: 'M12.75 7.75H1.75V22.75L10.5 18.375L19.25 22.75V11.5H15.75V8.5H12.75V7.75Z',
};

export const IconBookmarkAdd01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-01-stroke-rounded IconBookmarkAdd01StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkAdd01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-01-duotone-rounded IconBookmarkAdd01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkAdd01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-01-twotone-rounded IconBookmarkAdd01TwotoneRounded"
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

export const IconBookmarkAdd01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-01-solid-rounded IconBookmarkAdd01SolidRounded"
    >
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkAdd01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-01-bulk-rounded IconBookmarkAdd01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconBookmarkAdd01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-01-stroke-sharp IconBookmarkAdd01StrokeSharp"
    >
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkAdd01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-add-01-solid-sharp IconBookmarkAdd01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookmarkAdd01: TheIconSelfPack = {
  name: 'BookmarkAdd01',
  StrokeRounded: IconBookmarkAdd01StrokeRounded,
  DuotoneRounded: IconBookmarkAdd01DuotoneRounded,
  TwotoneRounded: IconBookmarkAdd01TwotoneRounded,
  SolidRounded: IconBookmarkAdd01SolidRounded,
  BulkRounded: IconBookmarkAdd01BulkRounded,
  StrokeSharp: IconBookmarkAdd01StrokeSharp,
  SolidSharp: IconBookmarkAdd01SolidSharp,
};