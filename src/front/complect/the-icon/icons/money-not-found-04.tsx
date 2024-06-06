import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.5 13L5.5 13.009',
  d2: 'M18.5 10.9922L18.5 11.0012',
  d3: 'M18 18.548C18 18.548 17.0738 18.548 16.5455 18.548C14.6865 18.548 12.9891 18.9166 11.697 19.524C10.4048 20.1314 8.70746 20.5 6.84848 20.5C5.81486 20.5 4.83121 20.3861 3.93939 20.1805C3.36611 20.0483 3.07946 19.9822 2.73599 19.7087C2.54009 19.5527 2.29559 19.2439 2.18823 19.0168C2 18.6188 2 18.2328 2 17.4608V6.94737C2 5.98619 3.00851 5.32602 3.93939 5.54061C4.37533 5.64111 4.919 5.80594 5.39394 5.86004',
  d4: 'M21.9999 17.5V6.61397C21.9999 5.12036 21.5816 4.18968 19.9999 3.8274C19.0802 3.61675 18.0658 3.5 16.9999 3.5C15.0828 3.5 13.3324 3.87764 11.9999 4.5C11.2804 4.83602 10.4235 5.32757 9.5 5.5',
  d5: 'M13.7678 13.768C13.3154 14.2204 12.6904 14.5002 12 14.5002C10.6193 14.5002 9.5 13.3809 9.5 12.0002C9.5 11.3098 9.77982 10.6848 10.2322 10.2324',
  d6: 'M2 2L22 22',
  d7: 'M6.84848 20.5C8.70746 20.5 10.4048 20.1314 11.697 19.524C12.9891 18.9166 14.6865 18.548 16.5455 18.548H18L13.4906 14.0093C13.0744 14.3189 12.5586 14.5021 12 14.5021C10.6193 14.5021 9.5 13.3829 9.5 12.0021C9.5 11.4377 9.68704 10.917 10.0025 10.4986L5.39394 5.86004C5.0537 5.82129 4.67819 5.7257 4.33228 5.63765C4.19534 5.60279 4.06303 5.56911 3.93939 5.54061C3.00851 5.32602 2 5.98619 2 6.94737V17.4608C2 18.2328 2 18.6188 2.18823 19.0168C2.29559 19.2439 2.54009 19.5527 2.73599 19.7087C3.07946 19.9822 3.36611 20.0483 3.93939 20.1805C4.83121 20.3861 5.81486 20.5 6.84848 20.5Z',
  d8: 'M13.7678 13.7699C13.3154 14.2223 12.6904 14.5021 12 14.5021C10.6193 14.5021 9.5 13.3829 9.5 12.0021C9.5 11.3118 9.77982 10.6868 10.2322 10.2344',
  d9: 'M17 2.75C14.9915 2.75 13.1298 3.14454 11.6826 3.82046C11.0551 4.11355 10.3157 4.35139 9.49665 4.5131C8.94064 4.62288 8.66264 4.67777 8.61028 4.84994C8.55792 5.02211 8.75033 5.21452 9.13515 5.59934L12.4665 8.93072C12.5274 8.99164 12.5579 9.0221 12.5923 9.0419C12.6267 9.0617 12.6749 9.07449 12.7714 9.10008C13.8087 9.37522 14.6257 10.192 14.9007 11.2293C14.9263 11.3258 14.9391 11.374 14.9589 11.4085C14.9787 11.4429 15.0091 11.4733 15.0701 11.5343L21.8031 18.2673C22.0289 18.4931 22.1418 18.606 22.3005 18.5728C22.4593 18.5397 22.5079 18.4156 22.6052 18.1675C22.6981 17.9307 22.75 17.6691 22.75 17.386V6.61397C22.75 5.81712 22.6428 5.03453 22.2218 4.38745C21.7825 3.71217 21.0845 3.30637 20.1674 3.09633C19.1905 2.87257 18.1198 2.75 17 2.75ZM19.1076 10.3992C19.5175 10.4586 19.8017 10.839 19.7424 11.249C19.683 11.6589 19.3025 11.9431 18.8926 11.8838C18.586 11.8394 18.2706 11.8054 17.9478 11.7829C17.5346 11.754 17.223 11.3956 17.2519 10.9824C17.2808 10.5692 17.6392 10.2576 18.0524 10.2865C18.4117 10.3116 18.7639 10.3495 19.1076 10.3992Z',
  d10: 'M4.16745 4.44153C2.841 4.13772 1.25 5.04678 1.25 6.61397V17.386C1.25 18.2216 1.38242 19.0082 1.81644 19.6488C2.26524 20.3111 2.95689 20.7031 3.83255 20.9037C4.80949 21.1274 5.88016 21.25 7 21.25C9.00849 21.25 10.8702 20.8555 12.3174 20.1795C13.5352 19.6107 15.1744 19.25 17 19.25C17.1786 19.25 17.3555 19.2535 17.5305 19.2602C18.3565 19.2922 18.7694 19.3082 18.8514 19.1206C18.9334 18.9331 18.6531 18.6528 18.0925 18.0922L14.5457 14.5455C14.3568 14.3565 14.2623 14.262 14.1557 14.2514C14.0491 14.2408 13.9187 14.3274 13.6579 14.5007C13.183 14.8162 12.6129 15 12 15C10.3431 15 9 13.6569 9 12C9 11.3871 9.18382 10.817 9.49935 10.3421C9.67261 10.0813 9.75924 9.95086 9.7486 9.84428C9.73796 9.73769 9.64348 9.64321 9.45452 9.45425L4.64512 4.64485C4.58157 4.5813 4.54979 4.54952 4.51159 4.52877C4.47338 4.50802 4.42782 4.49832 4.3367 4.47892C4.27989 4.46683 4.22347 4.45437 4.16745 4.44153ZM6.05242 12.2171C6.46563 12.246 6.77717 12.6044 6.74827 13.0176C6.71937 13.4308 6.36098 13.7424 5.94777 13.7135C5.58853 13.6883 5.23627 13.6505 4.89261 13.6007C4.48267 13.5414 4.19848 13.1609 4.25784 12.751C4.3172 12.3411 4.69765 12.0569 5.10758 12.1162C5.41415 12.1606 5.7296 12.1946 6.05242 12.2171Z',
  d11: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d12: 'M4.16745 4.44103C2.841 4.13721 1.25 5.04628 1.25 6.61346V17.3855C1.25 18.2211 1.38242 19.0077 1.81644 19.6483C2.26524 20.3106 2.95689 20.7026 3.83255 20.9032C4.80949 21.1269 5.88016 21.2495 7 21.2495C9.00849 21.2495 10.8702 20.855 12.3174 20.179C13.5352 19.6102 15.1744 19.2495 17 19.2495C17.1786 19.2495 17.3555 19.2529 17.5305 19.2597C18.3565 19.2917 18.7694 19.3077 18.8514 19.1201C18.9334 18.9326 18.6531 18.6523 18.0925 18.0917L14.5457 14.545C14.3568 14.356 14.2623 14.2615 14.1557 14.2509C14.0491 14.2402 13.9187 14.3269 13.6579 14.5001C13.183 14.8157 12.6129 14.9995 12 14.9995C10.3431 14.9995 9 13.6563 9 11.9995C9 11.3865 9.18382 10.8165 9.49935 10.3416C9.67261 10.0808 9.75924 9.95036 9.7486 9.84377C9.73796 9.73718 9.64348 9.6427 9.45452 9.45375L4.64512 4.64434C4.58157 4.58079 4.54979 4.54901 4.51159 4.52826C4.47338 4.50751 4.42782 4.49781 4.3367 4.47842C4.27989 4.46633 4.22347 4.45386 4.16745 4.44103ZM6.05242 12.2166C6.46563 12.2455 6.77717 12.6039 6.74827 13.0171C6.71937 13.4303 6.36098 13.7419 5.94777 13.713C5.58853 13.6878 5.23627 13.65 4.89261 13.6002C4.48267 13.5409 4.19848 13.1604 4.25784 12.7505C4.3172 12.3406 4.69765 12.0564 5.10758 12.1157C5.41415 12.1601 5.7296 12.194 6.05242 12.2166Z',
  d13: 'M16.9995 2.75C14.991 2.75 13.1293 3.14454 11.6821 3.82046C11.0546 4.11355 10.3152 4.35139 9.49615 4.5131C8.94015 4.62288 8.66215 4.67777 8.60978 4.84994C8.55742 5.02211 8.74983 5.21452 9.13466 5.59934L12.466 8.93072C12.527 8.99164 12.5574 9.0221 12.5918 9.0419C12.6262 9.0617 12.6744 9.07449 12.7709 9.10008C13.8082 9.37522 14.6252 10.192 14.9002 11.2293C14.9258 11.3258 14.9386 11.374 14.9584 11.4085C14.9782 11.4429 15.0086 11.4733 15.0696 11.5343L21.8026 18.2673C22.0284 18.4931 22.1413 18.606 22.3001 18.5728C22.4588 18.5397 22.5075 18.4156 22.6047 18.1675C22.6976 17.9307 22.7495 17.6691 22.7495 17.386V6.61397C22.7495 5.81712 22.6423 5.03453 22.2213 4.38745C21.782 3.71217 21.084 3.30637 20.167 3.09633C19.19 2.87257 18.1193 2.75 16.9995 2.75ZM19.1071 10.3992C19.517 10.4586 19.8012 10.839 19.7419 11.249C19.6825 11.6589 19.3021 11.9431 18.8921 11.8838C18.5856 11.8394 18.2701 11.8054 17.9473 11.7829C17.5341 11.754 17.2225 11.3956 17.2514 10.9824C17.2803 10.5692 17.6387 10.2576 18.0519 10.2865C18.4112 10.3116 18.7634 10.3495 19.1071 10.3992Z',
  d14: 'M13.7756 13.768C13.3247 14.2204 12.7017 14.5002 12.0135 14.5002C10.6372 14.5002 9.52148 13.3809 9.52148 12.0002C9.52148 11.3098 9.80041 10.6848 10.2513 10.2324',
  d15: 'M18.9909 11.142C18.6668 11.0949 18.334 11.0591 17.9941 11.0352M6.03245 12.9658C5.69251 12.942 5.35972 12.9061 5.03564 12.859',
  d16: 'M2.04492 2L21.981 22',
  d17: 'M5.50672 5.42356C4.03901 5.30494 2.06306 4.51527 2.06306 4.51527C2.06306 4.51527 1.9264 14.5471 2.05085 19.4998C7.36949 21.5609 10.7227 19.9902 12.9931 19.1234C14.4783 18.5053 17.1639 18.3959 18.6676 18.5961M8.61593 5.38852C9.54698 5.29777 10.451 5.12312 11.1151 4.84678C13.3729 3.9072 17.37 2.43963 22.0015 4.53799C22.0015 8.1726 21.9978 15.306 21.9926 18.7883',
  d18: 'M22.7498 4.03647L22.2166 3.7735C22.1467 3.7419 22.0468 3.69853 21.9189 3.64739C21.6634 3.54516 21.2954 3.41159 20.8308 3.27886C19.9025 3.01364 18.5824 2.75 16.9998 2.75C14.9913 2.75 13.1296 3.14454 11.6824 3.82046C10.7452 4.25815 9.55869 4.57264 8.22966 4.69437L22.7498 19.2145V4.03647ZM12.3171 20.1795C13.535 19.6107 15.1741 19.25 16.9998 19.25C17.9516 19.25 18.7964 19.3566 19.4975 19.4977L14.2979 14.2981C13.7097 14.8862 12.8972 15.25 11.9998 15.25C11.6699 15.25 11.3515 15.2009 11.0515 15.1095C9.71916 14.7037 8.74976 13.4651 8.74976 12C8.74976 11.1025 9.11352 10.29 9.70166 9.7019L4.51268 4.51292C3.88545 4.37392 3.15273 4.15341 2.2783 3.80364L1.24976 3.39223V20.0078L1.72121 20.1964C4.3407 21.2442 5.87858 21.25 6.99976 21.25C9.00825 21.25 10.8699 20.8555 12.3171 20.1795ZM6.49976 12V14.009H4.49976V12H6.49976ZM19.4998 12.0012V9.99219H17.4998V12.0012H19.4998Z',
  d19: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
};

export const IconMoneyNotFound04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-04-stroke-rounded IconMoneyNotFound04StrokeRounded"
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

export const IconMoneyNotFound04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-04-duotone-rounded IconMoneyNotFound04DuotoneRounded"
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

export const IconMoneyNotFound04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-04-twotone-rounded IconMoneyNotFound04TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMoneyNotFound04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-04-solid-rounded IconMoneyNotFound04SolidRounded"
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

export const IconMoneyNotFound04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-04-bulk-rounded IconMoneyNotFound04BulkRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-04-stroke-sharp IconMoneyNotFound04StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-04-solid-sharp IconMoneyNotFound04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneyNotFound04: TheIconSelfPack = {
  name: 'MoneyNotFound04',
  StrokeRounded: IconMoneyNotFound04StrokeRounded,
  DuotoneRounded: IconMoneyNotFound04DuotoneRounded,
  TwotoneRounded: IconMoneyNotFound04TwotoneRounded,
  SolidRounded: IconMoneyNotFound04SolidRounded,
  BulkRounded: IconMoneyNotFound04BulkRounded,
  StrokeSharp: IconMoneyNotFound04StrokeSharp,
  SolidSharp: IconMoneyNotFound04SolidSharp,
};