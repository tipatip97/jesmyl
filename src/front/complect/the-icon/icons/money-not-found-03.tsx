import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.7678 13.768C13.3154 14.2204 12.6904 14.5002 12 14.5002C10.6193 14.5002 9.5 13.3809 9.5 12.0002C9.5 11.3098 9.77982 10.6848 10.2322 10.2324',
  d2: 'M19 11.1415C18.6749 11.0944 18.341 11.0586 18 11.0347M6 12.9653C5.65897 12.9415 5.32511 12.9056 5 12.8585',
  d3: 'M18 18.548C18 18.548 17.0738 18.548 16.5455 18.548C14.6865 18.548 12.9891 18.9166 11.697 19.524C10.4048 20.1314 8.70746 20.5 6.84848 20.5C5.81486 20.5 4.83121 20.3861 3.93939 20.1805C3.36611 20.0483 3.07946 19.9822 2.73599 19.7087C2.54009 19.5527 2.29559 19.2439 2.18823 19.0168C2 18.6188 2 18.2328 2 17.4608V6.94737C2 5.98619 3.00851 5.32602 3.93939 5.54061C4.37533 5.64111 4.919 5.80594 5.39394 5.86004',
  d4: 'M22.0001 17.5V6.61397C22.0001 5.12036 21.5818 4.18968 20.0001 3.8274C19.0804 3.61675 18.066 3.5 17.0001 3.5C15.083 3.5 13.3326 3.87764 12.0001 4.5C11.2807 4.83602 10.4238 5.32757 9.50024 5.5',
  d5: 'M2 2L22 22',
  d6: 'M6.84848 20.5C8.70746 20.5 10.4048 20.1314 11.697 19.524C12.9891 18.9166 14.6865 18.548 16.5455 18.548H18L13.4906 14.0093C13.0744 14.3189 12.5586 14.5021 12 14.5021C10.6193 14.5021 9.5 13.3829 9.5 12.0021C9.5 11.4377 9.68704 10.917 10.0025 10.4986L5.39394 5.86004C5.0537 5.82129 4.67819 5.7257 4.33228 5.63765C4.19534 5.60279 4.06303 5.56911 3.93939 5.54061C3.00851 5.32602 2 5.98619 2 6.94737V17.4608C2 18.2328 2 18.6188 2.18823 19.0168C2.29559 19.2439 2.54009 19.5527 2.73599 19.7087C3.07946 19.9822 3.36611 20.0483 3.93939 20.1805C4.83121 20.3861 5.81486 20.5 6.84848 20.5Z',
  d7: 'M13.7678 13.7699C13.3154 14.2223 12.6904 14.5021 12 14.5021C10.6193 14.5021 9.5 13.3829 9.5 12.0021C9.5 11.3118 9.77982 10.6868 10.2322 10.2344',
  d8: 'M19 11.1449C18.6749 11.0979 18.341 11.062 18 11.0381M6 12.9688C5.65897 12.9449 5.32511 12.909 5 12.8619',
  d9: 'M6 12.9648C5.65897 12.941 5.32511 12.9051 5 12.858',
  d10: 'M19 11.1416C18.6749 11.0945 18.341 11.0586 18 11.0348',
  d11: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d12: 'M11.6826 3.82046C13.1298 3.14454 14.9915 2.75 17 2.75C18.1198 2.75 19.1905 2.87257 20.1674 3.09633C21.0845 3.30637 21.7825 3.71217 22.2218 4.38745C22.6428 5.03453 22.75 5.81712 22.75 6.61397V17.386C22.75 17.6691 22.6981 17.9307 22.6052 18.1675C22.5079 18.4156 22.4593 18.5397 22.3005 18.5728C22.1418 18.606 22.0289 18.4931 21.8031 18.2673L15.0701 11.5343C15.0091 11.4733 14.9787 11.4429 14.9589 11.4085C14.9391 11.374 14.9263 11.3258 14.9007 11.2293C14.6257 10.192 13.8087 9.37522 12.7714 9.10008C12.6749 9.07449 12.6267 9.0617 12.5923 9.0419C12.5579 9.0221 12.5274 8.99164 12.4665 8.93072L9.13515 5.59934C8.75033 5.21452 8.55792 5.02211 8.61028 4.84994C8.66264 4.67777 8.94064 4.62288 9.49665 4.5131C10.3157 4.35139 11.0551 4.11355 11.6826 3.82046ZM18.5 9.99219C19.0523 9.99219 19.5 10.4399 19.5 10.9922V11.0012C19.5 11.5535 19.0523 12.0012 18.5 12.0012C17.9477 12.0012 17.5 11.5535 17.5 11.0012V10.9922C17.5 10.4399 17.9477 9.99219 18.5 9.99219Z',
  d13: 'M1.25 6.61397C1.25 5.04678 2.841 4.13772 4.16745 4.44153C4.22347 4.45437 4.27989 4.46683 4.3367 4.47892C4.42782 4.49832 4.47338 4.50802 4.51159 4.52877C4.54979 4.54952 4.58157 4.58129 4.64512 4.64485L9.45452 9.45425C9.64348 9.64321 9.73796 9.73769 9.7486 9.84428C9.75924 9.95086 9.67261 10.0813 9.49935 10.3421C9.18382 10.817 9 11.3871 9 12C9 13.6569 10.3431 15 12 15C12.6129 15 13.183 14.8162 13.6579 14.5007C13.9187 14.3274 14.0491 14.2408 14.1557 14.2514C14.2623 14.262 14.3568 14.3565 14.5457 14.5455L18.0924 18.0922C18.6531 18.6528 18.9334 18.9331 18.8514 19.1206C18.7694 19.3082 18.3565 19.2922 17.5305 19.2602C17.3555 19.2535 17.1786 19.25 17 19.25C15.1744 19.25 13.5352 19.6107 12.3174 20.1795C10.8702 20.8555 9.00849 21.25 7 21.25C5.88016 21.25 4.80949 21.1274 3.83255 20.9037C2.95689 20.7031 2.26524 20.3111 1.81644 19.6488C1.38242 19.0082 1.25 18.2216 1.25 17.386V6.61397ZM6.5 13C6.5 12.4477 6.05228 12 5.5 12C4.94772 12 4.5 12.4477 4.5 13V13.009C4.5 13.5613 4.94772 14.009 5.5 14.009C6.05228 14.009 6.5 13.5613 6.5 13.009V13Z',
  d14: 'M1.25 6.61346C1.25 5.04628 2.841 4.13721 4.16745 4.44103C4.22347 4.45386 4.27989 4.46633 4.3367 4.47842C4.42782 4.49781 4.47338 4.50751 4.51159 4.52826C4.54979 4.54901 4.58157 4.58079 4.64512 4.64434L9.45452 9.45375C9.64348 9.6427 9.73796 9.73718 9.7486 9.84377C9.75924 9.95036 9.67261 10.0808 9.49935 10.3416C9.18382 10.8165 9 11.3865 9 11.9995C9 13.6563 10.3431 14.9995 12 14.9995C12.6129 14.9995 13.183 14.8157 13.6579 14.5001C13.9187 14.3269 14.0491 14.2402 14.1557 14.2509C14.2623 14.2615 14.3568 14.356 14.5457 14.545L18.0924 18.0917C18.6531 18.6523 18.9334 18.9326 18.8514 19.1201C18.7694 19.3077 18.3565 19.2917 17.5305 19.2597C17.3555 19.2529 17.1786 19.2495 17 19.2495C15.1744 19.2495 13.5352 19.6102 12.3174 20.179C10.8702 20.855 9.00849 21.2495 7 21.2495C5.88016 21.2495 4.80949 21.1269 3.83255 20.9032C2.95689 20.7026 2.26524 20.3106 1.81644 19.6483C1.38242 19.0077 1.25 18.2211 1.25 17.3855V6.61346ZM6.5 12.9995C6.5 12.4472 6.05228 11.9995 5.5 11.9995C4.94772 11.9995 4.5 12.4472 4.5 12.9995V13.0085C4.5 13.5608 4.94772 14.0085 5.5 14.0085C6.05228 14.0085 6.5 13.5608 6.5 13.0085V12.9995Z',
  d15: 'M11.6821 3.82046C13.1293 3.14454 14.991 2.75 16.9995 2.75C18.1193 2.75 19.19 2.87257 20.167 3.09633C21.084 3.30637 21.782 3.71217 22.2213 4.38745C22.6423 5.03453 22.7495 5.81712 22.7495 6.61397V17.386C22.7495 17.6691 22.6976 17.9307 22.6047 18.1675C22.5075 18.4156 22.4588 18.5397 22.3001 18.5728C22.1413 18.606 22.0284 18.4931 21.8026 18.2673L15.0696 11.5343C15.0086 11.4733 14.9782 11.4429 14.9584 11.4085C14.9386 11.374 14.9258 11.3258 14.9002 11.2293C14.6252 10.192 13.8082 9.37522 12.7709 9.10008C12.6744 9.07449 12.6262 9.0617 12.5918 9.0419C12.5574 9.0221 12.527 8.99164 12.466 8.93072L9.13466 5.59934C8.74983 5.21452 8.55742 5.02211 8.60978 4.84994C8.66215 4.67776 8.94015 4.62288 9.49615 4.5131C10.3152 4.35139 11.0546 4.11355 11.6821 3.82046ZM18.4995 9.99219C19.0518 9.99219 19.4995 10.4399 19.4995 10.9922V11.0012C19.4995 11.5535 19.0518 12.0012 18.4995 12.0012C17.9472 12.0012 17.4995 11.5535 17.4995 11.0012V10.9922C17.4995 10.4399 17.9472 9.99219 18.4995 9.99219Z',
  d16: 'M11.9998 4.5L12.3171 5.17954L11.9998 4.5ZM21.9998 4.5H22.7498V4.03647L22.3352 3.82918L21.9998 4.5ZM1.99976 4.5L2.2783 3.80364L1.24976 3.39223V4.5H1.99976ZM11.9998 19.5L11.6824 18.8205L11.6824 18.8205L11.9998 19.5ZM1.99976 19.5H1.24976V20.0078L1.72121 20.1964L1.99976 19.5ZM12.3171 5.17954C13.535 4.61073 15.1741 4.25 16.9998 4.25V2.75C14.9913 2.75 13.1296 3.14454 11.6824 3.82046L12.3171 5.17954ZM16.9998 4.25C18.4171 4.25 19.597 4.48636 20.4187 4.72114C20.8291 4.83841 21.1487 4.95484 21.3618 5.04011C21.4684 5.08272 21.5482 5.11748 21.5993 5.14056C21.6248 5.1521 21.6432 5.16071 21.6541 5.16591C21.6596 5.16852 21.6632 5.17027 21.6649 5.17111C21.6658 5.17152 21.6661 5.17172 21.6661 5.17167C21.666 5.17165 21.6658 5.17157 21.6656 5.17142C21.6654 5.17135 21.6652 5.17127 21.665 5.17117C21.6649 5.17112 21.6648 5.17103 21.6647 5.17101C21.6645 5.17091 21.6643 5.17082 21.9998 4.5C22.3352 3.82918 22.335 3.82908 22.3347 3.82897C22.3347 3.82893 22.3344 3.82882 22.3343 3.82874C22.334 3.82858 22.3336 3.8284 22.3332 3.82821C22.3325 3.82783 22.3316 3.82738 22.3305 3.82688C22.3285 3.82587 22.326 3.82463 22.323 3.82316C22.3169 3.82021 22.3089 3.81635 22.299 3.81162C22.2792 3.80218 22.2516 3.78931 22.2166 3.7735C22.1467 3.7419 22.0468 3.69853 21.9189 3.64739C21.6634 3.54516 21.2954 3.41159 20.8308 3.27886C19.9025 3.01364 18.5824 2.75 16.9998 2.75V4.25ZM6.99976 21.25C9.00825 21.25 10.8699 20.8555 12.3171 20.1795L11.6824 18.8205C10.4645 19.3893 8.8254 19.75 6.99976 19.75V21.25ZM12.3171 20.1795C13.535 19.6107 15.1741 19.25 16.9998 19.25V17.75C14.9913 17.75 13.1296 18.1445 11.6824 18.8205L12.3171 20.1795ZM1.72121 20.1964C4.3407 21.2442 5.87858 21.25 6.99976 21.25V19.75C5.98909 19.75 4.65881 19.7558 2.2783 18.8036L1.72121 20.1964ZM2.74976 19.5V4.5H1.24976V19.5H2.74976ZM8.67734 6.15623C10.0334 6.00231 11.2802 5.66381 12.3171 5.17954L11.6824 3.82046C10.8139 4.22609 9.72818 4.52732 8.50817 4.6658L8.67734 6.15623ZM21.2498 4.5V18.818H22.7498V4.5H21.2498ZM16.9998 19.25C17.538 19.25 18.0421 19.2841 18.5056 19.3393L18.683 17.8498C18.1648 17.7881 17.6013 17.75 16.9998 17.75V19.25ZM1.72121 5.19636C3.23757 5.8029 4.39839 6.06363 5.34133 6.17297L5.5141 4.68295C4.71338 4.59011 3.6815 4.36492 2.2783 3.80364L1.72121 5.19636Z',
  d17: 'M22.2179 3.7735L22.751 4.03647V19.2164L15.2376 11.703C15.0964 10.1452 13.8559 8.9047 12.2981 8.76352L8.22909 4.69453C9.55885 4.57292 10.746 4.25835 11.6836 3.82046C13.1308 3.14454 14.9925 2.75 17.001 2.75C18.5836 2.75 19.9037 3.01364 20.832 3.27886C21.2966 3.41159 21.6646 3.54516 21.9201 3.64739C22.048 3.69853 22.1479 3.7419 22.2179 3.7735ZM8.75098 12.0001C8.75098 11.1031 9.11437 10.291 9.70196 9.70294L4.51139 4.51237C3.88472 4.37333 3.15278 4.15295 2.27952 3.80364L1.25098 3.39223V20.0078L1.72243 20.1964C4.34192 21.2442 5.8798 21.25 7.00098 21.25C9.00947 21.25 10.8711 20.8555 12.3184 20.1795C13.5362 19.6107 15.1753 19.25 17.001 19.25C17.9517 19.25 18.7956 19.3564 19.4963 19.4973L14.2982 14.2991C13.7101 14.8867 12.898 15.2501 12.001 15.2501C10.2061 15.2501 8.75098 13.795 8.75098 12.0001ZM6.05344 12.217L6.80161 12.2693L6.69696 13.7656L5.94879 13.7133C5.58955 13.6882 5.23729 13.6503 4.89363 13.6006L4.15137 13.4931L4.36634 12.0086L5.1086 12.1161C5.41516 12.1605 5.73062 12.1944 6.05344 12.217ZM19.1086 10.3991L19.8509 10.5066L19.6359 11.9911L18.8936 11.8836C18.5871 11.8392 18.2716 11.8053 17.9488 11.7827L17.2006 11.7304L17.3053 10.234L18.0534 10.2863C18.4127 10.3115 18.7649 10.3493 19.1086 10.3991Z',
  d18: 'M21.3348 22.75L1.24902 2.66421L2.66324 1.25L22.749 21.3358L21.3348 22.75Z',
};

export const IconMoneyNotFound03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-03-stroke-rounded IconMoneyNotFound03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-03-duotone-rounded IconMoneyNotFound03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
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
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-03-twotone-rounded IconMoneyNotFound03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-03-solid-rounded IconMoneyNotFound03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
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

export const IconMoneyNotFound03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-03-bulk-rounded IconMoneyNotFound03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-03-stroke-sharp IconMoneyNotFound03StrokeSharp"
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
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyNotFound03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-not-found-03-solid-sharp IconMoneyNotFound03SolidSharp"
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

export const iconPackOfMoneyNotFound03: TheIconSelfPack = {
  name: 'MoneyNotFound03',
  StrokeRounded: IconMoneyNotFound03StrokeRounded,
  DuotoneRounded: IconMoneyNotFound03DuotoneRounded,
  TwotoneRounded: IconMoneyNotFound03TwotoneRounded,
  SolidRounded: IconMoneyNotFound03SolidRounded,
  BulkRounded: IconMoneyNotFound03BulkRounded,
  StrokeSharp: IconMoneyNotFound03StrokeSharp,
  SolidSharp: IconMoneyNotFound03SolidSharp,
};