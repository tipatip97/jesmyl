import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.09881 19.5C4.7987 19.3721 3.82475 18.9816 3.17157 18.3284C2 17.1569 2 15.2712 2 11.5V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H11.5M6.5 18C6.29454 19.0019 5.37769 21.1665 6.31569 21.8651C6.806 22.2218 7.58729 21.8408 9.14987 21.0789C10.2465 20.5441 11.3562 19.9309 12.5546 19.655C12.9931 19.5551 13.4395 19.5125 14 19.5C17.7712 19.5 19.6569 19.5 20.8284 18.3284C21.947 17.2098 21.9976 15.4403 21.9999 12',
  d2: 'M15.2 3.2L20.8 8.8M22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6C14 8.20914 15.7909 10 18 10C20.2091 10 22 8.20914 22 6Z',
  d3: 'M15.3514 3.00242C14.5226 3.7353 14 4.80662 14 6C14 8.20914 15.7909 10 18 10C19.8891 10 21.4723 8.69049 21.8914 6.92971C22 7.97265 22 9.2932 22 11V11.5C22 15.2712 22 17.1569 20.8284 18.3284C19.6569 19.5 17.7712 19.5 14 19.5C13.4395 19.5125 12.9931 19.5551 12.5546 19.655C11.5464 19.8871 10.601 20.358 9.67331 20.82C9.4983 20.9072 9.32392 20.994 9.14987 21.0789C7.58729 21.8408 6.806 22.2218 6.31569 21.8651C5.7338 21.4317 5.86573 20.4342 6.09881 19.5C4.7987 19.3721 3.82475 18.9816 3.17157 18.3284C2 17.1569 2 15.2712 2 11.5V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C14.4803 3 14.9299 3 15.3514 3.00242Z',
  d4: 'M12.875 6.125C12.875 3.36358 15.1136 1.125 17.875 1.125C20.6364 1.125 22.875 3.36358 22.875 6.125C22.875 8.88642 20.6364 11.125 17.875 11.125C15.1136 11.125 12.875 8.88642 12.875 6.125ZM15.1674 4.83158C14.98 5.22322 14.875 5.66185 14.875 6.125C14.875 7.78185 16.2181 9.125 17.875 9.125C18.3381 9.125 18.7768 9.02005 19.1684 8.83263L15.1674 4.83158ZM16.5816 3.41737L20.5826 7.41842C20.77 7.02678 20.875 6.58815 20.875 6.125C20.875 4.46815 19.5319 3.125 17.875 3.125C17.4119 3.125 16.9732 3.22995 16.5816 3.41737Z',
  d5: 'M11.4057 2.375C11.8981 2.375 12.1444 2.375 12.2328 2.51392C12.3212 2.65284 12.2085 2.89392 11.9832 3.37609C11.593 4.211 11.375 5.14255 11.375 6.125C11.375 9.71485 14.2851 12.625 17.875 12.625C19.3957 12.625 20.7945 12.1028 21.9017 11.2279C22.086 11.0823 22.1781 11.0095 22.2251 10.9929C22.3943 10.9331 22.5508 11.0089 22.6089 11.1787C22.625 11.2259 22.625 11.3326 22.625 11.5461C22.625 15.615 22.625 17.6495 21.3656 18.9136C20.1061 20.1776 18.0791 20.1776 14.025 20.1776C13.4225 20.1911 12.9426 20.2371 12.4712 20.3449C11.3874 20.5953 10.3711 21.1033 9.37381 21.6018L9.37148 21.603C9.18412 21.6967 8.99744 21.79 8.81111 21.8812C7.13133 22.7032 6.29145 23.1143 5.76437 22.7295C5.26144 22.3535 5.23931 21.6444 5.3794 20.8601C5.43726 20.5362 5.4662 20.3742 5.39574 20.2724C5.32529 20.1707 5.16308 20.1408 4.83865 20.0808C3.78236 19.8857 2.96538 19.4966 2.38444 18.9136C1.125 17.6495 1.125 15.615 1.125 11.5461V11.0066C1.125 6.93761 1.125 4.90313 2.38444 3.63907C3.64388 2.375 5.67092 2.375 9.725 2.375H11.4057Z',
  d6: 'M2 2L2 1.25L1.25 1.25V2H2ZM22 18V18.75H22.75V18H22ZM2 18H1.25V18.75H2V18ZM6 22H5.25C5.25 22.2883 5.41526 22.5511 5.67511 22.676C5.93496 22.8009 6.24339 22.7658 6.46852 22.5857L6 22ZM6 18H6.75V17.25H6V18ZM11 18L11 17.25H10.7369L10.5315 17.4143L11 18ZM1.25 2V18H2.75V2H1.25ZM2 18.75H6V17.25H2V18.75ZM6.75 22V18H5.25V22H6.75ZM11 18.75L22 18.75V17.25L11 17.25L11 18.75ZM6.46852 22.5857L11.4685 18.5856L10.5315 17.4143L5.53148 21.4143L6.46852 22.5857ZM2 2.75L12 2.75V1.25L2 1.25L2 2.75ZM21.25 12V18H22.75V12H21.25Z',
  d7: 'M14.3338 1.25C12.9142 2.34732 12 4.0669 12 6C12 9.31371 14.6863 12 18 12C19.9331 12 21.6527 11.0858 22.75 9.66619V18.75L11.2631 18.75L5.25 22.75V18.75H1.25V1.25L14.3338 1.25Z',
  d8: 'M13.25 6C13.25 3.37665 15.3766 1.25 18 1.25C20.6234 1.25 22.75 3.37665 22.75 6C22.75 8.62335 20.6234 10.75 18 10.75C15.3766 10.75 13.25 8.62335 13.25 6ZM15.4278 4.77126C15.2497 5.14331 15.15 5.56001 15.15 6C15.15 7.57401 16.426 8.85 18 8.85C18.44 8.85 18.8567 8.7503 19.2287 8.57225L15.4278 4.77126ZM16.7713 3.42775L20.5722 7.22874C20.7503 6.85669 20.85 6.43999 20.85 6C20.85 4.42599 19.574 3.15 18 3.15C17.56 3.15 17.1433 3.2497 16.7713 3.42775Z',
} as const;

export const IconCommentBlock02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-02-stroke-rounded IconCommentBlock02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCommentBlock02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-02-duotone-rounded IconCommentBlock02DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconCommentBlock02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-02-twotone-rounded IconCommentBlock02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCommentBlock02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-02-solid-rounded IconCommentBlock02SolidRounded"
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

export const IconCommentBlock02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-02-bulk-rounded IconCommentBlock02BulkRounded"
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

export const IconCommentBlock02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-02-stroke-sharp IconCommentBlock02StrokeSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
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

export const IconCommentBlock02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-02-solid-sharp IconCommentBlock02SolidSharp"
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

export const iconPackOfCommentBlock02: TheIconSelfPack = {
  name: 'CommentBlock02',
  StrokeRounded: IconCommentBlock02StrokeRounded,
  DuotoneRounded: IconCommentBlock02DuotoneRounded,
  TwotoneRounded: IconCommentBlock02TwotoneRounded,
  SolidRounded: IconCommentBlock02SolidRounded,
  BulkRounded: IconCommentBlock02BulkRounded,
  StrokeSharp: IconCommentBlock02StrokeSharp,
  SolidSharp: IconCommentBlock02SolidSharp,
};