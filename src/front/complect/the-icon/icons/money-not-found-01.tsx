import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.46334 4.5C4.145 4.62804 3.86325 4.78886 3.60746 4.99087C3.40678 5.14935 3.22119 5.32403 3.0528 5.5129C2 6.69377 2 8.46252 2 12C2 15.5375 2 17.3062 3.0528 18.4871C3.22119 18.676 3.40678 18.8506 3.60746 19.0091C4.86213 20 6.74142 20 10.5 20H13.5C16.4923 20 18.2568 20 19.5 19.5',
  d2: 'M8 4.01578C8.7277 4 9.55437 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 14.3126 22 15.8693 21.7058 17',
  d3: 'M18.5098 12H18.5008',
  d4: 'M5.5 12H5.49102',
  d5: 'M13.7438 13.7422C13.2895 14.2094 12.6542 14.4996 11.9512 14.4996C10.5705 14.4996 9.45117 13.3803 9.45117 11.9996C9.45117 11.2966 9.7414 10.6613 10.2086 10.207',
  d6: 'M2 2L22 22',
  d7: 'M13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C3.86325 4.78886 4.145 4.62804 4.46334 4.5L10.1944 10.2171C9.73552 10.6703 9.45117 11.2998 9.45117 11.9957C9.45117 13.3764 10.5705 14.4957 11.9512 14.4957C12.6493 14.4957 13.2806 14.2096 13.7341 13.7482L19.5 19.5C18.2568 20 16.4923 20 13.5 20Z',
  d8: 'M13.7438 13.7383C13.2895 14.2055 12.6542 14.4957 11.9512 14.4957C10.5705 14.4957 9.45117 13.3764 9.45117 11.9957C9.45117 11.2926 9.7414 10.6574 10.2086 10.2031',
  d9: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d10: 'M10.4525 3.25H13.5475C15.3865 3.24999 16.8308 3.24998 17.9694 3.3786C19.1316 3.50988 20.074 3.78362 20.8574 4.40229C21.0919 4.58749 21.3093 4.79205 21.507 5.0138C22.1732 5.76101 22.4707 6.66669 22.6124 7.77785C22.75 8.85727 22.75 10.2232 22.75 11.9473V12.0528C22.75 13.7768 22.75 15.1427 22.6124 16.2222C22.5432 16.765 22.4367 17.2588 22.2683 17.709C22.1532 18.0168 22.0957 18.1707 21.9357 18.2054C21.7757 18.2401 21.6483 18.1128 21.3935 17.858L15.0697 11.5342C15.0088 11.4732 14.9783 11.4428 14.9585 11.4084C14.9387 11.374 14.9259 11.3257 14.9003 11.2292C14.6253 10.1918 13.8084 9.37496 12.7711 9.09995C12.6746 9.07437 12.6263 9.06158 12.5919 9.04177C12.5575 9.02197 12.527 8.9915 12.4661 8.93056L7.78828 4.25274C7.38337 3.84784 7.18092 3.64539 7.25526 3.4613C7.3296 3.27722 7.61232 3.27219 8.17775 3.26213C8.85978 3.24999 9.61522 3.25 10.4525 3.25ZM18.509 11C19.0613 11 19.509 11.4477 19.509 12C19.509 12.5523 19.0613 13 18.509 13H18.5C17.9477 13 17.5 12.5523 17.5 12C17.5 11.4477 17.9477 11 18.5 11H18.509Z',
  d11: 'M2.49298 5.0138C2.69068 4.79205 2.90811 4.58749 3.14263 4.40229C3.27285 4.29945 3.40746 4.20614 3.54675 4.12143C3.70984 4.02225 3.79138 3.97266 3.89439 3.98502C3.99739 3.99739 4.07154 4.07154 4.21984 4.21984L9.45456 9.45456C9.6435 9.6435 9.73797 9.73797 9.74862 9.84455C9.75926 9.95112 9.67265 10.0815 9.49943 10.3423C9.18401 10.8172 9.00025 11.3872 9.00025 12C9.00025 13.6569 10.3434 15 12.0002 15C12.6131 15 13.183 14.8162 13.6579 14.5008C13.9187 14.3276 14.0491 14.241 14.1557 14.2516C14.2623 14.2623 14.3567 14.3567 14.5457 14.5457L19.4801 19.4801C19.757 19.757 19.8954 19.8954 19.8521 20.0616C19.8088 20.2279 19.6345 20.2772 19.2859 20.3759C18.8809 20.4906 18.4434 20.5679 17.9694 20.6214C16.8308 20.75 15.3866 20.75 13.5475 20.75H10.4525C8.61345 20.75 7.16917 20.75 6.03058 20.6214C4.86842 20.4901 3.926 20.2164 3.14263 19.5977C2.90811 19.4125 2.69068 19.208 2.49298 18.9862C1.82681 18.239 1.52932 17.3333 1.38763 16.2222C1.24998 15.1427 1.24999 13.7767 1.25 12.0528V11.9472C1.24999 10.2233 1.24998 8.85727 1.38763 7.77785C1.52932 6.66669 1.82681 5.76101 2.49298 5.0138ZM6.50019 12C6.50019 11.4477 6.05248 11 5.50019 11H5.49121C4.93893 11 4.49121 11.4477 4.49121 12C4.49121 12.5523 4.93893 13 5.49121 13H5.50019C6.05248 13 6.50019 12.5523 6.50019 12Z',
  d12: 'M2.49298 5.01192C2.69068 4.79017 2.90811 4.58561 3.14263 4.40041C3.27285 4.29757 3.40746 4.20426 3.54675 4.11955C3.70984 4.02037 3.79138 3.97078 3.89439 3.98314C3.99739 3.99551 4.07154 4.06966 4.21984 4.21796L9.45456 9.45268C9.6435 9.64162 9.73797 9.73609 9.74862 9.84267C9.75926 9.94924 9.67265 10.0796 9.49943 10.3404C9.18401 10.8154 9.00025 11.3853 9.00025 11.9981C9.00025 13.655 10.3434 14.9981 12.0002 14.9981C12.6131 14.9981 13.183 14.8144 13.6579 14.4989C13.9187 14.3257 14.0491 14.2391 14.1557 14.2497C14.2623 14.2604 14.3567 14.3549 14.5457 14.5438L19.4801 19.4783C19.757 19.7551 19.8954 19.8935 19.8521 20.0597C19.8088 20.226 19.6345 20.2753 19.2859 20.374C18.8809 20.4887 18.4434 20.566 17.9694 20.6195C16.8308 20.7481 15.3866 20.7481 13.5475 20.7481H10.4525C8.61345 20.7481 7.16917 20.7481 6.03058 20.6195C4.86842 20.4882 3.926 20.2145 3.14263 19.5958C2.90811 19.4106 2.69068 19.2061 2.49298 18.9843C1.82681 18.2371 1.52932 17.3314 1.38763 16.2203C1.24998 15.1409 1.24999 13.7749 1.25 12.0509V11.9454C1.24999 10.2214 1.24998 8.85539 1.38763 7.77597C1.52932 6.66481 1.82681 5.75913 2.49298 5.01192ZM6.50019 11.9981C6.50019 11.4458 6.05248 10.9981 5.50019 10.9981H5.49121C4.93893 10.9981 4.49121 11.4458 4.49121 11.9981C4.49121 12.5504 4.93893 12.9981 5.49121 12.9981H5.50019C6.05248 12.9981 6.50019 12.5504 6.50019 11.9981Z',
  d13: 'M10.4524 3.25H13.5474C15.3864 3.24999 16.8307 3.24998 17.9693 3.3786C19.1315 3.50988 20.0739 3.78362 20.8573 4.40229C21.0918 4.58749 21.3092 4.79205 21.5069 5.0138C22.1731 5.76101 22.4706 6.66669 22.6123 7.77785C22.7499 8.85727 22.7499 10.2232 22.7499 11.9473V12.0528C22.7499 13.7768 22.7499 15.1427 22.6123 16.2222C22.543 16.765 22.4366 17.2588 22.2682 17.709C22.1531 18.0168 22.0955 18.1707 21.9355 18.2054C21.7756 18.2401 21.6482 18.1128 21.3934 17.858L15.0696 11.5342C15.0087 11.4732 14.9782 11.4428 14.9584 11.4084C14.9386 11.374 14.9258 11.3257 14.9002 11.2292C14.6252 10.1918 13.8083 9.37496 12.7709 9.09995C12.6745 9.07437 12.6262 9.06158 12.5918 9.04177C12.5574 9.02197 12.5269 8.9915 12.466 8.93056L7.78817 4.25274C7.38326 3.84784 7.18081 3.64539 7.25515 3.4613C7.32949 3.27722 7.61221 3.27219 8.17764 3.26213C8.85966 3.24999 9.61511 3.25 10.4524 3.25ZM18.5089 11C19.0612 11 19.5089 11.4477 19.5089 12C19.5089 12.5523 19.0612 13 18.5089 13H18.4999C17.9476 13 17.4999 12.5523 17.4999 12C17.4999 11.4477 17.9476 11 18.4999 11H18.5089Z',
  d14: 'M18.511 12H18.502',
  d15: 'M5.50117 12H5.49219',
  d16: 'M13.7448 13.7422C13.2905 14.2094 12.6552 14.4996 11.9522 14.4996C10.5715 14.4996 9.45215 13.3803 9.45215 11.9996C9.45215 11.2966 9.74238 10.6613 10.2096 10.207',
  d17: 'M2.00098 2L22.001 22',
  d18: 'M4.01429 3.99623L2.00902 3.99561C2.0035 3.9956 1.99902 4.00008 1.99902 4.00561L1.99913 19.9946C1.99913 20.0001 2.00361 20.0046 2.00913 20.0046H20.0135M7.19147 4.00848L21.991 4.00873C21.9965 4.00873 22.001 4.01321 22.001 4.01873V18.8267',
  d19: 'M1.24829 4C1.24829 3.58579 1.58408 3.25 1.99829 3.25H3.24829L9.72474 9.72645C9.15089 10.3125 8.79712 11.115 8.79712 12C8.79712 13.7949 10.2522 15.25 12.0471 15.25C12.9322 15.25 13.7346 14.8962 14.3207 14.3224L20.7483 20.75H1.99829C1.58408 20.75 1.24829 20.4142 1.24829 20V4ZM12.293 8.75916C13.8919 8.87876 15.1684 10.1552 15.288 11.7541L22.7483 19.2145V4C22.7483 3.58579 22.4125 3.25 21.9983 3.25H6.78382L12.293 8.75916ZM4.00024 11H6.00024V13H4.00024V11ZM18.0002 11H20.0002V13H18.0002V11Z',
  d20: 'M21.3355 22.75L1.24976 2.66421L2.66397 1.25L22.7498 21.3358L21.3355 22.75Z',
} as const;

export const IconMoneyNotFound01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-01-stroke-rounded IconMoneyNotFound01StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconMoneyNotFound01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-01-duotone-rounded IconMoneyNotFound01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
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

export const IconMoneyNotFound01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-01-twotone-rounded IconMoneyNotFound01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconMoneyNotFound01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-01-solid-rounded IconMoneyNotFound01SolidRounded"
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

export const IconMoneyNotFound01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-01-bulk-rounded IconMoneyNotFound01BulkRounded"
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

export const IconMoneyNotFound01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-01-stroke-sharp IconMoneyNotFound01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-01-solid-sharp IconMoneyNotFound01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneyNotFound01: TheIconSelfPack = {
  name: 'MoneyNotFound01',
  StrokeRounded: IconMoneyNotFound01StrokeRounded,
  DuotoneRounded: IconMoneyNotFound01DuotoneRounded,
  TwotoneRounded: IconMoneyNotFound01TwotoneRounded,
  SolidRounded: IconMoneyNotFound01SolidRounded,
  BulkRounded: IconMoneyNotFound01BulkRounded,
  StrokeSharp: IconMoneyNotFound01StrokeSharp,
  SolidSharp: IconMoneyNotFound01SolidSharp,
};