import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.09881 19.5C4.7987 19.3721 3.82475 18.9816 3.17157 18.3284C2 17.1569 2 15.2712 2 11.5V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H11.5M6.5 18C6.29454 19.0019 5.37769 21.1665 6.31569 21.8651C6.806 22.2218 7.58729 21.8408 9.14987 21.0789C10.2465 20.5441 11.3562 19.9309 12.5546 19.655C12.9931 19.5551 13.4395 19.5125 14 19.5C17.7712 19.5 19.6569 19.5 20.8284 18.3284C21.947 17.2098 21.9976 15.4403 21.9999 12',
  d2: 'M8 14H14M8 9H11',
  d3: 'M15.2 3.2L20.8 8.8M22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6C14 8.20914 15.7909 10 18 10C20.2091 10 22 8.20914 22 6Z',
  d4: 'M15.3514 3.00242C14.5226 3.7353 14 4.80662 14 6C14 8.20914 15.7909 10 18 10C19.8891 10 21.4723 8.69049 21.8914 6.92971C22 7.97265 22 9.2932 22 11V11.5C22 15.2712 22 17.1569 20.8284 18.3284C19.6569 19.5 17.7712 19.5 14 19.5C13.4395 19.5125 12.9931 19.5551 12.5546 19.655C11.5464 19.8871 10.601 20.358 9.67331 20.82C9.4983 20.9072 9.32392 20.994 9.14987 21.0789C7.58729 21.8408 6.806 22.2218 6.31569 21.8651C5.7338 21.4317 5.86573 20.4342 6.09881 19.5C4.7987 19.3721 3.82475 18.9816 3.17157 18.3284C2 17.1569 2 15.2712 2 11.5V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C14.4803 3 14.9299 3 15.3514 3.00242Z',
  d5: 'M12.2328 2.51392C12.1444 2.375 11.8981 2.375 11.4057 2.375H9.725C5.67092 2.375 3.64388 2.375 2.38444 3.63907C1.125 4.90313 1.125 6.93761 1.125 11.0066V11.5461C1.125 15.615 1.125 17.6495 2.38444 18.9136C2.96538 19.4966 3.78236 19.8857 4.83865 20.0808C5.16308 20.1408 5.32529 20.1707 5.39574 20.2724C5.4662 20.3742 5.43726 20.5362 5.3794 20.8601C5.23931 21.6444 5.26144 22.3535 5.76437 22.7295C6.29145 23.1143 7.13133 22.7032 8.81111 21.8812C8.99731 21.79 9.18387 21.6968 9.37109 21.6032L9.37148 21.603L9.37381 21.6018C10.3711 21.1033 11.3874 20.5953 12.4712 20.3449C12.9426 20.2371 13.4225 20.1911 14.025 20.1776C18.0791 20.1776 20.1061 20.1776 21.3656 18.9136C22.625 17.6495 22.625 15.615 22.625 11.5461C22.625 11.3326 22.625 11.2259 22.6089 11.1787C22.5508 11.0089 22.3943 10.9331 22.2251 10.9929C22.1781 11.0095 22.086 11.0823 21.9017 11.2279C20.7945 12.1028 19.3957 12.625 17.875 12.625C14.2851 12.625 11.375 9.71485 11.375 6.125C11.375 5.14255 11.593 4.211 11.9832 3.37609C12.2085 2.89392 12.3212 2.65284 12.2328 2.51392ZM7.875 8.375C7.46079 8.375 7.125 8.71079 7.125 9.125C7.125 9.53921 7.46079 9.875 7.875 9.875H9.875C10.2892 9.875 10.625 9.53921 10.625 9.125C10.625 8.71079 10.2892 8.375 9.875 8.375H7.875ZM7.875 13.375C7.46079 13.375 7.125 13.7108 7.125 14.125C7.125 14.5392 7.46079 14.875 7.875 14.875H13.875C14.2892 14.875 14.625 14.5392 14.625 14.125C14.625 13.7108 14.2892 13.375 13.875 13.375H7.875Z',
  d6: 'M12.875 6.125C12.875 3.36358 15.1136 1.125 17.875 1.125C20.6364 1.125 22.875 3.36358 22.875 6.125C22.875 8.88642 20.6364 11.125 17.875 11.125C15.1136 11.125 12.875 8.88642 12.875 6.125ZM15.1674 4.83158C14.98 5.22322 14.875 5.66185 14.875 6.125C14.875 7.78185 16.2181 9.125 17.875 9.125C18.3381 9.125 18.7768 9.02005 19.1684 8.83263L15.1674 4.83158ZM16.5816 3.41737L20.5826 7.41842C20.77 7.02678 20.875 6.58815 20.875 6.125C20.875 4.46815 19.5319 3.125 17.875 3.125C17.4119 3.125 16.9732 3.22995 16.5816 3.41737Z',
  d7: 'M11.4057 2.375C11.8981 2.375 12.1444 2.375 12.2328 2.51392C12.3212 2.65284 12.2085 2.89392 11.9832 3.37609C11.593 4.211 11.375 5.14255 11.375 6.125C11.375 9.71485 14.2851 12.625 17.875 12.625C19.3957 12.625 20.7945 12.1028 21.9017 11.2279C22.086 11.0823 22.1781 11.0095 22.2251 10.9929C22.3943 10.9331 22.5508 11.0089 22.6089 11.1787C22.625 11.2259 22.625 11.3326 22.625 11.5461C22.625 15.615 22.625 17.6495 21.3656 18.9136C20.1061 20.1776 18.0791 20.1776 14.025 20.1776C13.4225 20.1911 12.9426 20.2371 12.4712 20.3449C11.3874 20.5953 10.3711 21.1033 9.37381 21.6018L9.37148 21.603C9.18412 21.6967 8.99744 21.79 8.81111 21.8812C7.13133 22.7032 6.29145 23.1143 5.76437 22.7295C5.26144 22.3535 5.23931 21.6444 5.3794 20.8601C5.43726 20.5362 5.4662 20.3742 5.39574 20.2724C5.32529 20.1707 5.16308 20.1408 4.83865 20.0808C3.78236 19.8857 2.96538 19.4966 2.38444 18.9136C1.125 17.6495 1.125 15.615 1.125 11.5461V11.0066C1.125 6.93761 1.125 4.90313 2.38444 3.63907C3.64388 2.375 5.67092 2.375 9.725 2.375H11.4057Z',
  d8: 'M7.125 9.125C7.125 8.71079 7.46079 8.375 7.875 8.375H9.875C10.2892 8.375 10.625 8.71079 10.625 9.125C10.625 9.53921 10.2892 9.875 9.875 9.875H7.875C7.46079 9.875 7.125 9.53921 7.125 9.125ZM7.125 14.125C7.125 13.7108 7.46079 13.375 7.875 13.375H13.875C14.2892 13.375 14.625 13.7108 14.625 14.125C14.625 14.5392 14.2892 14.875 13.875 14.875H7.875C7.46079 14.875 7.125 14.5392 7.125 14.125Z',
  d9: 'M7.99951 12.5005H13.9995M7.99951 7.50049H10.9995',
  d10: 'M15.1995 3.20049L20.7995 8.80049M21.9995 6.00049C21.9995 3.79135 20.2086 2.00049 17.9995 2.00049C15.7904 2.00049 13.9995 3.79135 13.9995 6.00049C13.9995 8.20963 15.7904 10.0005 17.9995 10.0005C20.2086 10.0005 21.9995 8.20963 21.9995 6.00049Z',
  d11: 'M11.9886 2.00049H2.00049V17.9587H6.00255V21.9895C6.00255 21.9979 6.0123 22.0026 6.01885 21.9973L11.014 17.9587H21.9988V11.9677',
  d12: 'M12 6C12 4.0669 12.9142 2.34732 14.3338 1.25L1.25 1.25V18.75H5.25V22.75L11.2631 18.75L22.75 18.75V9.66619C21.6527 11.0858 19.9331 12 18 12C14.6863 12 12 9.31371 12 6ZM7 11.75V13.25H13V11.75H7ZM7 8.25H10V6.75H7V8.25Z',
  d13: 'M13.25 6C13.25 3.37665 15.3766 1.25 18 1.25C20.6234 1.25 22.75 3.37665 22.75 6C22.75 8.62335 20.6234 10.75 18 10.75C15.3766 10.75 13.25 8.62335 13.25 6ZM15.4278 4.77126C15.2497 5.14331 15.15 5.56001 15.15 6C15.15 7.57401 16.426 8.85 18 8.85C18.44 8.85 18.8567 8.7503 19.2287 8.57225L15.4278 4.77126ZM16.7713 3.42775L20.5722 7.22874C20.7503 6.85669 20.85 6.43999 20.85 6C20.85 4.42599 19.574 3.15 18 3.15C17.56 3.15 17.1433 3.2497 16.7713 3.42775Z',
} as const;

export const IconCommentBlock01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-01-stroke-rounded IconCommentBlock01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCommentBlock01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-01-duotone-rounded IconCommentBlock01DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconCommentBlock01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-01-twotone-rounded IconCommentBlock01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCommentBlock01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-01-solid-rounded IconCommentBlock01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCommentBlock01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-01-bulk-rounded IconCommentBlock01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCommentBlock01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-01-stroke-sharp IconCommentBlock01StrokeSharp"
    >
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCommentBlock01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comment-block-01-solid-sharp IconCommentBlock01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCommentBlock01: TheIconSelfPack = {
  name: 'CommentBlock01',
  StrokeRounded: IconCommentBlock01StrokeRounded,
  DuotoneRounded: IconCommentBlock01DuotoneRounded,
  TwotoneRounded: IconCommentBlock01TwotoneRounded,
  SolidRounded: IconCommentBlock01SolidRounded,
  BulkRounded: IconCommentBlock01BulkRounded,
  StrokeSharp: IconCommentBlock01StrokeSharp,
  SolidSharp: IconCommentBlock01SolidSharp,
};