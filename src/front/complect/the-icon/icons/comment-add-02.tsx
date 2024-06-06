import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 6H22M18 2L18 10',
  d2: 'M6.09881 19.5C4.7987 19.3721 3.82475 18.9816 3.17157 18.3284C2 17.1569 2 15.2712 2 11.5V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H11.5M6.5 18C6.29454 19.0019 5.37769 21.1665 6.31569 21.8651C6.806 22.2218 7.58729 21.8408 9.14987 21.0789C10.2465 20.5441 11.3562 19.9309 12.5546 19.655C12.9931 19.5551 13.4395 19.5125 14 19.5C17.7712 19.5 19.6569 19.5 20.8284 18.3284C21.947 17.2098 21.9976 15.4403 21.9999 12',
  d3: 'M14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11V11.5C2 15.2712 2 17.1569 3.17157 18.3284C3.82475 18.9816 4.7987 19.3721 6.09881 19.5C5.86573 20.4342 5.7338 21.4317 6.31569 21.8651C6.806 22.2218 7.58729 21.8408 9.14987 21.0789C10.2465 20.5441 11.3562 19.9309 12.5546 19.655C12.9931 19.5551 13.4395 19.5125 14 19.5C17.7712 19.5 19.6569 19.5 20.8284 18.3284C22 17.1569 22 15.2712 22 11.5V11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3Z',
  d4: 'M17.875 1.125C18.4273 1.125 18.875 1.57272 18.875 2.125V5.125H21.875C22.4273 5.125 22.875 5.57272 22.875 6.125C22.875 6.67728 22.4273 7.125 21.875 7.125H18.875V10.125C18.875 10.6773 18.4273 11.125 17.875 11.125C17.3227 11.125 16.875 10.6773 16.875 10.125V7.125H13.875C13.3227 7.125 12.875 6.67728 12.875 6.125C12.875 5.57272 13.3227 5.125 13.875 5.125H16.875V2.125C16.875 1.57272 17.3227 1.125 17.875 1.125Z',
  d5: 'M15.375 2.97414C15.375 2.69244 15.375 2.55159 15.2873 2.46375C15.1996 2.3759 15.059 2.37571 14.7779 2.37533C14.535 2.375 14.2842 2.375 14.025 2.375H9.725C5.67092 2.375 3.64388 2.375 2.38444 3.63907C1.125 4.90313 1.125 6.93761 1.125 11.0066V11.5461C1.125 15.615 1.125 17.6495 2.38444 18.9136C2.96538 19.4966 3.78236 19.8857 4.83865 20.0808C5.16308 20.1408 5.32529 20.1707 5.39574 20.2724C5.4662 20.3742 5.43726 20.5362 5.3794 20.8601C5.23931 21.6444 5.26144 22.3535 5.76437 22.7295C6.29145 23.1143 7.13133 22.7032 8.81111 21.8812C8.99744 21.79 9.18412 21.6967 9.37148 21.603L9.3735 21.602C10.3708 21.1035 11.3874 20.5953 12.4712 20.3449C12.9426 20.2371 13.4225 20.1911 14.025 20.1776C18.0791 20.1776 20.1061 20.1776 21.3656 18.9136C22.625 17.6495 22.625 15.615 22.625 11.5461V11.0066C22.625 10.3776 22.625 9.79728 22.6203 9.26087C22.6178 8.96391 22.6165 8.81543 22.5481 8.73318C22.5335 8.71569 22.5248 8.70707 22.5072 8.69268C22.4244 8.625 22.2413 8.625 21.875 8.625H20.975C20.6922 8.625 20.5507 8.625 20.4629 8.71287C20.375 8.80074 20.375 8.94216 20.375 9.225V10.125C20.375 11.5057 19.2557 12.625 17.875 12.625C16.4943 12.625 15.375 11.5057 15.375 10.125V9.225C15.375 8.94216 15.375 8.80074 15.2871 8.71287C15.1993 8.625 15.0578 8.625 14.775 8.625H13.875C12.4943 8.625 11.375 7.50571 11.375 6.125C11.375 4.74429 12.4943 3.625 13.875 3.625H14.775C15.0578 3.625 15.1993 3.625 15.2871 3.53713C15.375 3.44926 15.375 3.30784 15.375 3.025V2.97414Z',
  d6: 'M13.9989 6.00049H21.9989M17.9989 2.00049V10.0005',
  d7: 'M11.989 2.00049H2.00085V17.9587H6.00291V21.9895C6.00291 21.9979 6.01267 22.0026 6.01921 21.9973L11.0143 17.9587H21.9991V11.9677',
  d8: 'M17.75 4.25V1.25H19.75V4.25H22.75V6.25H19.75V9.25H17.75V6.25H14.75V4.25H17.75Z',
  d9: 'M16.5 1.25L1.25 1.25V18.75H5.25V22.75L11.2631 18.75L22.75 18.75V7.5H21V10.5H16.5V7.5H13.5V3H16.5V1.25Z',
};

export const IconCommentAdd02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-add-02-stroke-rounded IconCommentAdd02StrokeRounded"
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

export const IconCommentAdd02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-add-02-duotone-rounded IconCommentAdd02DuotoneRounded"
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

export const IconCommentAdd02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-add-02-twotone-rounded IconCommentAdd02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCommentAdd02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-add-02-solid-rounded IconCommentAdd02SolidRounded"
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

export const IconCommentAdd02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-add-02-bulk-rounded IconCommentAdd02BulkRounded"
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

export const IconCommentAdd02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-add-02-stroke-sharp IconCommentAdd02StrokeSharp"
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

export const IconCommentAdd02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-add-02-solid-sharp IconCommentAdd02SolidSharp"
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

export const iconPackOfCommentAdd02: TheIconSelfPack = {
  name: 'CommentAdd02',
  StrokeRounded: IconCommentAdd02StrokeRounded,
  DuotoneRounded: IconCommentAdd02DuotoneRounded,
  TwotoneRounded: IconCommentAdd02TwotoneRounded,
  SolidRounded: IconCommentAdd02SolidRounded,
  BulkRounded: IconCommentAdd02BulkRounded,
  StrokeSharp: IconCommentAdd02StrokeSharp,
  SolidSharp: IconCommentAdd02SolidSharp,
};