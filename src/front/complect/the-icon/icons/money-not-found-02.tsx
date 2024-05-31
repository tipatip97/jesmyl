import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.46334 4.5C4.145 4.62804 3.86325 4.78886 3.60746 4.99087C3.40678 5.14935 3.22119 5.32403 3.0528 5.5129C2 6.69377 2 8.46252 2 12C2 15.5375 2 17.3062 3.0528 18.4871C3.22119 18.676 3.40678 18.8506 3.60746 19.0091C4.86213 20 6.74142 20 10.5 20H13.5C16.4923 20 18.2568 20 19.5 19.5',
  d2: 'M8 4.01578C8.7277 4 9.55437 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 14.3126 22 15.8693 21.7058 17',
  d3: 'M2 2L22 22',
  d4: 'M13.7418 13.7422C13.2876 14.2094 12.6523 14.4996 11.9492 14.4996C10.5685 14.4996 9.44922 13.3803 9.44922 11.9996C9.44922 11.2966 9.73945 10.6613 10.2066 10.207',
  d5: 'M5 12L6 12',
  d6: 'M18 12L19 12',
  d7: 'M13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C3.86325 4.78886 4.145 4.62804 4.46334 4.5L10.1944 10.2171C9.73552 10.6703 9.45117 11.2998 9.45117 11.9957C9.45117 13.3764 10.5705 14.4957 11.9512 14.4957C12.6493 14.4957 13.2806 14.2096 13.7341 13.7482L19.5 19.5C18.2568 20 16.4923 20 13.5 20Z',
  d8: 'M13.7418 13.7383C13.2876 14.2055 12.6523 14.4957 11.9492 14.4957C10.5685 14.4957 9.44922 13.3764 9.44922 11.9957C9.44922 11.2926 9.73945 10.6574 10.2066 10.2031',
  d9: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d10: 'M13.5475 3.25H10.4525C9.61522 3.25 8.85978 3.24999 8.17775 3.26213C7.61232 3.27219 7.3296 3.27722 7.25526 3.4613C7.18092 3.64539 7.38337 3.84784 7.78828 4.25274L12.4661 8.93056C12.527 8.9915 12.5575 9.02197 12.5919 9.04177C12.6263 9.06158 12.6746 9.07437 12.7711 9.09995C13.8084 9.37496 14.6253 10.1918 14.9003 11.2292C14.9259 11.3257 14.9387 11.374 14.9585 11.4084C14.9783 11.4428 15.0088 11.4732 15.0697 11.5342L21.3935 17.858C21.6483 18.1128 21.7757 18.2401 21.9357 18.2054C22.0957 18.1707 22.1532 18.0168 22.2683 17.709C22.4367 17.2588 22.5432 16.765 22.6124 16.2222C22.75 15.1427 22.75 13.7768 22.75 12.0528V11.9473C22.75 10.2232 22.75 8.85727 22.6124 7.77785C22.4707 6.66669 22.1732 5.76101 21.507 5.0138C21.3093 4.79205 21.0919 4.58749 20.8574 4.40229C20.074 3.78362 19.1316 3.50988 17.9694 3.3786C16.8308 3.24998 15.3865 3.24999 13.5475 3.25ZM18 11.25C17.5858 11.25 17.25 11.5858 17.25 12C17.25 12.4142 17.5858 12.75 18 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H18Z',
  d11: 'M3.14263 4.40229C2.90811 4.58749 2.69068 4.79205 2.49298 5.0138C1.82681 5.76101 1.52932 6.66669 1.38763 7.77785C1.24998 8.85727 1.24999 10.2232 1.25 11.9472V12.0527C1.24999 13.7767 1.24998 15.1427 1.38763 16.2222C1.52932 17.3333 1.82681 18.239 2.49298 18.9862C2.69068 19.208 2.90811 19.4125 3.14263 19.5977C3.926 20.2164 4.86842 20.4901 6.03058 20.6214C7.16917 20.75 8.61345 20.75 10.4525 20.75H13.5475C15.3866 20.75 16.8308 20.75 17.9694 20.6214C18.4434 20.5679 18.8809 20.4906 19.2859 20.3759C19.6345 20.2772 19.8088 20.2279 19.8521 20.0616C19.8954 19.8954 19.757 19.757 19.4801 19.4801L14.5457 14.5457C14.3567 14.3567 14.2623 14.2623 14.1557 14.2516C14.0491 14.241 13.9187 14.3276 13.6579 14.5008C13.183 14.8162 12.6131 15 12.0002 15C10.3434 15 9.00025 13.6569 9.00025 12C9.00025 11.3872 9.18401 10.8172 9.49943 10.3423C9.67265 10.0815 9.75926 9.95112 9.74862 9.84455C9.73797 9.73797 9.6435 9.6435 9.45456 9.45456L4.21984 4.21984C4.07154 4.07154 3.99739 3.99739 3.89439 3.98502C3.79138 3.97266 3.70984 4.02225 3.54675 4.12143C3.40746 4.20614 3.27285 4.29945 3.14263 4.40229ZM4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H6C6.41421 11.25 6.75 11.5858 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z',
  d12: 'M3.14263 4.4035C2.90811 4.58871 2.69068 4.79327 2.49298 5.01501C1.82681 5.76223 1.52932 6.66791 1.38763 7.77906C1.24998 8.85848 1.24999 10.2245 1.25 11.9484V12.0539C1.24999 13.7779 1.24998 15.1439 1.38763 16.2234C1.52932 17.3345 1.82681 18.2402 2.49298 18.9874C2.69068 19.2092 2.90811 19.4137 3.14263 19.5989C3.926 20.2176 4.86842 20.4913 6.03058 20.6226C7.16917 20.7512 8.61345 20.7512 10.4525 20.7512H13.5475C15.3866 20.7512 16.8308 20.7512 17.9694 20.6226C18.4434 20.5691 18.8809 20.4918 19.2859 20.3771C19.6345 20.2784 19.8088 20.2291 19.8521 20.0628C19.8954 19.8966 19.757 19.7582 19.4801 19.4814L14.5457 14.5469C14.3567 14.358 14.2623 14.2635 14.1557 14.2528C14.0491 14.2422 13.9187 14.3288 13.6579 14.502C13.183 14.8175 12.6131 15.0012 12.0002 15.0012C10.3434 15.0012 9.00025 13.6581 9.00025 12.0012C9.00025 11.3884 9.18401 10.8185 9.49943 10.3435C9.67265 10.0827 9.75926 9.95234 9.74862 9.84576C9.73797 9.73918 9.6435 9.64471 9.45456 9.45578L4.21984 4.22106C4.07154 4.07276 3.99739 3.99861 3.89439 3.98624C3.79138 3.97387 3.70984 4.02346 3.54675 4.12264C3.40746 4.20735 3.27285 4.30066 3.14263 4.4035ZM4.25 12.0012C4.25 11.587 4.58579 11.2512 5 11.2512H6C6.41421 11.2512 6.75 11.587 6.75 12.0012C6.75 12.4154 6.41421 12.7512 6 12.7512H5C4.58579 12.7512 4.25 12.4154 4.25 12.0012Z',
  d13: 'M13.5474 3.25H10.4524C9.61511 3.25 8.85966 3.24999 8.17764 3.26213C7.61221 3.27219 7.32949 3.27722 7.25515 3.4613C7.18081 3.64539 7.38326 3.84784 7.78816 4.25274L12.466 8.93056C12.5269 8.9915 12.5574 9.02197 12.5918 9.04177C12.6262 9.06158 12.6745 9.07437 12.7709 9.09995C13.8083 9.37496 14.6252 10.1918 14.9002 11.2292C14.9258 11.3257 14.9386 11.374 14.9584 11.4084C14.9782 11.4428 15.0087 11.4732 15.0696 11.5342L21.3934 17.858C21.6482 18.1128 21.7756 18.2401 21.9355 18.2054C22.0955 18.1707 22.1531 18.0168 22.2682 17.709C22.4366 17.2588 22.543 16.765 22.6123 16.2222C22.7499 15.1427 22.7499 13.7768 22.7499 12.0528V11.9473C22.7499 10.2232 22.7499 8.85727 22.6123 7.77785C22.4706 6.66669 22.1731 5.76101 21.5069 5.0138C21.3092 4.79205 21.0918 4.58749 20.8573 4.40229C20.0739 3.78362 19.1315 3.50988 17.9693 3.3786C16.8307 3.24998 15.3864 3.24999 13.5474 3.25ZM17.9999 11.25C17.5857 11.25 17.2499 11.5858 17.2499 12C17.2499 12.4142 17.5857 12.75 17.9999 12.75H18.9999C19.4141 12.75 19.7499 12.4142 19.7499 12C19.7499 11.5858 19.4141 11.25 18.9999 11.25H17.9999Z',
  d14: 'M22 4H22.75C22.75 3.58579 22.4142 3.25 22 3.25V4ZM2 4V3.25C1.58579 3.25 1.25 3.58579 1.25 4H2ZM2 20H1.25C1.25 20.4142 1.58579 20.75 2 20.75V20ZM2.75 20V4H1.25V20H2.75ZM22 3.25H7.18198V4.75H22V3.25ZM22.75 18.818V4H21.25V18.818H22.75ZM4 3.25H2V4.75H4V3.25ZM2 20.75H19.9997V19.25H2V20.75Z',
  d15: 'M5 12L7 12',
  d16: 'M17 12L19 12',
  d17: 'M1.24927 4C1.24927 3.58579 1.58505 3.25 1.99927 3.25H3.24923L9.72668 9.72745C9.15341 10.3135 8.80005 11.1155 8.80005 12C8.80005 13.7949 10.2551 15.25 12.05 15.25C12.9346 15.25 13.7366 14.8966 14.3226 14.3234L20.7492 20.75H1.99927C1.58505 20.75 1.24927 20.4142 1.24927 20V4ZM12.2938 8.759C13.8944 8.87766 15.1724 10.1556 15.291 11.7563L22.7493 19.2145V4C22.7493 3.58579 22.4135 3.25 21.9993 3.25H6.78476L12.2938 8.759ZM3.49927 12.75H6.49927V11.25H3.49927L3.49927 12.75ZM17.4993 12.75H20.4993V11.25H17.4993V12.75Z',
  d18: 'M21.3353 22.75L1.24951 2.66421L2.66373 1.25L22.7495 21.3358L21.3353 22.75Z',
} as const;

export const IconMoneyNotFound02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-02-stroke-rounded IconMoneyNotFound02StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-02-duotone-rounded IconMoneyNotFound02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-02-twotone-rounded IconMoneyNotFound02TwotoneRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-02-solid-rounded IconMoneyNotFound02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMoneyNotFound02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-02-bulk-rounded IconMoneyNotFound02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-02-stroke-sharp IconMoneyNotFound02StrokeSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-02-solid-sharp IconMoneyNotFound02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneyNotFound02: TheIconSelfPack = {
  name: 'MoneyNotFound02',
  StrokeRounded: IconMoneyNotFound02StrokeRounded,
  DuotoneRounded: IconMoneyNotFound02DuotoneRounded,
  TwotoneRounded: IconMoneyNotFound02TwotoneRounded,
  SolidRounded: IconMoneyNotFound02SolidRounded,
  BulkRounded: IconMoneyNotFound02BulkRounded,
  StrokeSharp: IconMoneyNotFound02StrokeSharp,
  SolidSharp: IconMoneyNotFound02SolidSharp,
};