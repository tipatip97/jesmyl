import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.25 5.5C20.8358 5.5 20.5 5.16421 20.5 4.75C20.5 4.33579 20.8358 4 21.25 4C21.6642 4 22 4.33579 22 4.75C22 5.16421 21.6642 5.5 21.25 5.5ZM21.25 5.5V9.25C21.25 9.94778 21.25 10.2967 21.1639 10.5806C20.97 11.2198 20.4698 11.72 19.8306 11.9139C19.5467 12 19.1978 12 18.5 12',
  d2: 'M2.75 18.5C3.16421 18.5 3.5 18.8358 3.5 19.25C3.5 19.6642 3.16421 20 2.75 20C2.33579 20 2 19.6642 2 19.25C2 18.8358 2.33579 18.5 2.75 18.5ZM2.75 18.5L2.75 14.75C2.75 14.0522 2.75 13.7033 2.83612 13.4194C3.03002 12.7802 3.53023 12.28 4.16943 12.0861C4.45333 12 4.80222 12 5.5 12',
  d3: 'M5.5 2.75C5.5 3.16421 5.16421 3.5 4.75 3.5C4.33579 3.5 4 3.16421 4 2.75C4 2.33579 4.33579 2 4.75 2C5.16421 2 5.5 2.33579 5.5 2.75ZM5.5 2.75L9.25 2.75C9.94778 2.75 10.2967 2.75 10.5806 2.83612C11.2198 3.03002 11.72 3.53023 11.9139 4.16943C12 4.45333 12 4.80222 12 5.5',
  d4: 'M18.5 21.25C18.5 20.8358 18.8358 20.5 19.25 20.5C19.6642 20.5 20 20.8358 20 21.25C20 21.6642 19.6642 22 19.25 22C18.8358 22 18.5 21.6642 18.5 21.25ZM18.5 21.25L14.75 21.25C14.0522 21.25 13.7033 21.25 13.4194 21.1639C12.7802 20.97 12.28 20.4698 12.0861 19.8306C12 19.5467 12 19.1978 12 18.5',
  d5: 'M5.54883 11.9512C5.54883 8.88704 5.54883 7.35498 6.50073 6.40307C7.45263 5.45117 8.9847 5.45117 12.0488 5.45117C15.113 5.45117 16.645 5.45117 17.5969 6.40307C18.5488 7.35498 18.5488 8.88704 18.5488 11.9512C18.5488 15.0153 18.5488 16.5474 17.5969 17.4993C16.645 18.4512 15.113 18.4512 12.0488 18.4512C8.9847 18.4512 7.45263 18.4512 6.50073 17.4993C5.54883 16.5474 5.54883 15.0153 5.54883 11.9512Z',
  d6: 'M12.499 14.5L11.0384 9.97891C10.9465 9.69466 10.6648 9.5 10.3452 9.5C10.0256 9.5 9.74382 9.69466 9.65199 9.97891L8.19133 14.5M14.9989 9.5V14.5M8.72979 13H11.9606',
  d7: 'M5.54688 11.9531C5.54688 8.889 5.54688 7.35693 6.49878 6.40503C7.45068 5.45312 8.98275 5.45312 12.0469 5.45312C15.111 5.45312 16.6431 5.45312 17.595 6.40503C18.5469 7.35693 18.5469 8.889 18.5469 11.9531C18.5469 15.0173 18.5469 16.5493 17.595 17.5012C16.6431 18.4531 15.111 18.4531 12.0469 18.4531C8.98275 18.4531 7.45068 18.4531 6.49878 17.5012C5.54688 16.5493 5.54688 15.0173 5.54688 11.9531Z',
  d8: 'M19.75 4.75C19.75 3.92157 20.4216 3.25 21.25 3.25C22.0784 3.25 22.75 3.92157 22.75 4.75C22.75 5.30521 22.4484 5.78997 22 6.04933V9.25C22 9.28716 22 9.3238 22.0001 9.35994C22.0005 9.94935 22.0008 10.4052 21.8816 10.7983C21.615 11.6772 20.9272 12.365 20.0483 12.6316C19.6552 12.7508 19.1994 12.7505 18.6099 12.7501C18.5738 12.75 18.5372 12.75 18.5 12.75V11.25C19.2523 11.25 19.4623 11.2419 19.6129 11.1962C20.0124 11.075 20.325 10.7624 20.4462 10.3629C20.4919 10.2123 20.5 10.0023 20.5 9.25V6.04933C20.0516 5.78997 19.75 5.30521 19.75 4.75Z',
  d9: 'M5.39005 11.2501C5.4262 11.2501 5.46284 11.2501 5.5 11.2501V12.7501C4.74765 12.7501 4.53774 12.7582 4.38714 12.8039C3.98764 12.9251 3.67501 13.2377 3.55383 13.6372C3.50814 13.7878 3.5 13.9978 3.5 14.7501L3.5 17.9508C3.94835 18.2101 4.25 18.6949 4.25 19.2501C4.25 20.0785 3.57843 20.7501 2.75 20.7501C1.92157 20.7501 1.25 20.0785 1.25 19.2501C1.25 18.6949 1.55165 18.2101 2 17.9508V14.7501C2 14.7129 1.99997 14.6763 1.99995 14.6402C1.99951 14.0508 1.99917 13.5949 2.11841 13.2018C2.38503 12.3229 3.07281 11.6351 3.95172 11.3685C4.34481 11.2493 4.80065 11.2496 5.39005 11.2501Z',
  d10: 'M3.25 2.75C3.25 1.92157 3.92157 1.25 4.75 1.25C5.30521 1.25 5.78997 1.55165 6.04933 2H9.25C9.28716 2 9.3238 1.99997 9.35995 1.99995C9.94935 1.99951 10.4052 1.99917 10.7983 2.11841C11.6772 2.38503 12.365 3.07281 12.6316 3.95172C12.7508 4.34481 12.7505 4.80065 12.7501 5.39006C12.75 5.4262 12.75 5.46284 12.75 5.5H11.25C11.25 4.74765 11.2419 4.53774 11.1962 4.38714C11.075 3.98764 10.7624 3.67501 10.3629 3.55382C10.2123 3.50814 10.0023 3.5 9.25 3.5L6.04933 3.5C5.78997 3.94835 5.30521 4.25 4.75 4.25C3.92157 4.25 3.25 3.57843 3.25 2.75Z',
  d11: 'M11.2501 18.6099C11.2501 18.5738 11.2501 18.5372 11.2501 18.5H12.7501C12.7501 19.2523 12.7582 19.4623 12.8039 19.6129C12.9251 20.0124 13.2377 20.325 13.6372 20.4462C13.7878 20.4919 13.9978 20.5 14.7501 20.5L17.9508 20.5C18.2101 20.0516 18.6949 19.75 19.2501 19.75C20.0785 19.75 20.7501 20.4216 20.7501 21.25C20.7501 22.0784 20.0785 22.75 19.2501 22.75C18.6949 22.75 18.2101 22.4484 17.9508 22L14.7501 22C14.7129 22 14.6763 22 14.6402 22.0001C14.0508 22.0005 13.5949 22.0008 13.2018 21.8816C12.3229 21.615 11.6351 20.9272 11.3685 20.0483C11.2493 19.6552 11.2496 19.1994 11.2501 18.6099Z',
  d12: 'M15.7129 4.82685C14.7779 4.70114 13.4766 4.70115 11.9915 4.70117H11.9915H11.9915C10.5065 4.70115 9.31583 4.70114 8.38081 4.82685C7.41262 4.95702 6.60698 5.23422 5.96845 5.87275C5.32992 6.51127 5.05272 7.31692 4.92255 8.2851C4.79684 9.22013 4.79686 10.5214 4.79688 12.0065V12.0065V12.0065C4.79686 13.4916 4.79684 14.6822 4.92255 15.6172C5.05272 16.5854 5.32992 17.3911 5.96845 18.0296C6.60698 18.6681 7.41262 18.9453 8.38081 19.0755C9.31583 19.2012 10.6171 19.2012 12.1022 19.2012H12.1022C13.5873 19.2012 14.7779 19.2012 15.7129 19.0755C16.6811 18.9453 17.4868 18.6681 18.1253 18.0296C18.7638 17.3911 19.041 16.5854 19.1712 15.6172C19.2969 14.6822 19.2969 13.4916 19.2969 12.0065V12.0065C19.2969 10.5214 19.2969 9.22013 19.1712 8.2851C19.041 7.31692 18.7638 6.51127 18.1253 5.87275C17.4868 5.23422 16.6811 4.95702 15.7129 4.82685ZM8.93859 9.74834C9.13964 9.12604 9.73138 8.75 10.3455 8.75C10.9595 8.75 11.5513 9.12604 11.7523 9.74834L13.213 14.2694C13.3403 14.6636 13.124 15.0863 12.7299 15.2137C12.3357 15.341 11.913 15.1247 11.7856 14.7306L11.4688 13.75H9.22209L8.90529 14.7306C8.77794 15.1247 8.35519 15.341 7.96104 15.2137C7.56688 15.0863 7.35059 14.6636 7.47793 14.2694L8.93859 9.74834ZM10.9845 12.2496L10.3458 10.2725L9.70703 12.2496H10.9845ZM14.9992 8.75C15.4134 8.75 15.7492 9.08579 15.7492 9.5V14.5C15.7492 14.9142 15.4134 15.25 14.9992 15.25C14.5849 15.25 14.2492 14.9142 14.2492 14.5V9.5C14.2492 9.08579 14.5849 8.75 14.9992 8.75Z',
  d13: 'M11.9915 4.70312C13.4766 4.70311 14.7779 4.70309 15.7129 4.8288C16.6811 4.95897 17.4868 5.23617 18.1253 5.8747C18.7638 6.51323 19.041 7.31887 19.1712 8.28706C19.2969 9.22208 19.2969 10.5234 19.2969 12.0085V12.0085C19.2969 13.4935 19.2969 14.6842 19.1712 15.6192C19.041 16.5874 18.7638 17.393 18.1253 18.0316C17.4868 18.6701 16.6811 18.9473 15.7129 19.0775C14.7779 19.2032 13.5873 19.2031 12.1022 19.2031H12.1022C10.6171 19.2031 9.31583 19.2032 8.38081 19.0775C7.41262 18.9473 6.60698 18.6701 5.96845 18.0316C5.32992 17.393 5.05272 16.5874 4.92255 15.6192C4.79684 14.6842 4.79686 13.4935 4.79688 12.0085V12.0085C4.79686 10.5234 4.79684 9.22208 4.92255 8.28706C5.05272 7.31887 5.32992 6.51323 5.96845 5.8747C6.60698 5.23617 7.41262 4.95897 8.38081 4.8288C9.31583 4.70309 10.5065 4.70311 11.9915 4.70312H11.9915Z',
  d14: 'M11.2559 19.2012C11.2656 19.5213 11.293 19.7975 11.3691 20.0482C11.6357 20.9271 12.3235 21.6149 13.2024 21.8815C13.5955 22.0008 14.0513 22.0004 14.6407 22L17.9513 21.9999C18.2107 22.4483 18.6955 22.7499 19.2507 22.7499C20.0791 22.7499 20.7507 22.0784 20.7507 21.2499C20.7507 20.4215 20.0791 19.7499 19.2507 19.7499C18.6955 19.7499 18.2107 20.0516 17.9513 20.4999L14.7507 20.4999C13.9983 20.4999 13.7884 20.4918 13.6378 20.4461C13.2383 20.3249 12.9257 20.0123 12.8045 19.6128C12.7782 19.5261 12.7643 19.4198 12.7573 19.2017C12.5461 19.2021 12.3283 19.2021 12.1038 19.2021C11.8137 19.2021 11.5306 19.2021 11.2559 19.2012Z',
  d15: 'M4.79849 11.2559C4.47849 11.2656 4.20235 11.293 3.95172 11.3691C3.07281 11.6357 2.38503 12.3235 2.11841 13.2024C1.99917 13.5955 1.99951 14.0513 1.99995 14.6407L2 17.9513C1.55165 18.2107 1.25 18.6954 1.25 19.2507C1.25 20.0791 1.92157 20.7507 2.75 20.7507C3.57843 20.7507 4.25 20.0791 4.25 19.2507C4.25 18.6955 3.94835 18.2107 3.5 17.9513L3.5 14.7507C3.5 13.9983 3.50814 13.7884 3.55383 13.6378C3.67501 13.2383 3.98764 12.9257 4.38714 12.8045C4.47386 12.7782 4.58024 12.7643 4.79851 12.7573C4.79785 12.5163 4.79785 12.2667 4.79785 12.0081C4.79785 11.7515 4.79785 11.5005 4.79849 11.2559Z',
  d16: 'M4.75 1.25C3.92157 1.25 3.25 1.92157 3.25 2.75C3.25 3.57843 3.92157 4.25 4.75 4.25C5.30521 4.25 5.78997 3.94835 6.04933 3.5L9.25 3.5C10.0023 3.5 10.2123 3.50814 10.3629 3.55382C10.7624 3.67501 11.075 3.98764 11.1962 4.38714C11.2183 4.46012 11.2316 4.54702 11.2395 4.70281C11.4816 4.70214 11.7325 4.70215 11.9925 4.70215C12.2478 4.70215 12.4977 4.70214 12.7413 4.70278C12.729 4.42292 12.6999 4.17701 12.6316 3.95172C12.365 3.07281 11.6772 2.38503 10.7983 2.11841C10.4052 1.99917 9.94935 1.99951 9.35995 1.99995L6.04933 2C5.78997 1.55165 5.30521 1.25 4.75 1.25Z',
  d17: 'M10.3455 8.75C9.73138 8.75 9.13964 9.12604 8.93859 9.74834L7.47793 14.2694C7.35059 14.6636 7.56688 15.0863 7.96104 15.2137C8.35519 15.341 8.77794 15.1247 8.90529 14.7306L9.22209 13.75H11.4688L11.7856 14.7306C11.913 15.1247 12.3357 15.341 12.7299 15.2137C13.124 15.0863 13.3403 14.6636 13.213 14.2694L11.7523 9.74834C11.5513 9.12604 10.9595 8.75 10.3455 8.75ZM10.3458 10.2725L10.9845 12.2496H9.70703L10.3458 10.2725Z',
  d18: 'M15.7492 9.5C15.7492 9.08579 15.4134 8.75 14.9992 8.75C14.5849 8.75 14.2492 9.08579 14.2492 9.5V14.5C14.2492 14.9142 14.5849 15.25 14.9992 15.25C15.4134 15.25 15.7492 14.9142 15.7492 14.5V9.5Z',
  d19: 'M21.2497 3.25C20.4213 3.25 19.7497 3.92157 19.7497 4.75C19.7497 5.30521 20.0514 5.78997 20.4997 6.04933V9.25C20.4997 10.0023 20.4916 10.2123 20.4459 10.3629C20.3247 10.7624 20.0121 11.075 19.6126 11.1962C19.5396 11.2183 19.4527 11.2316 19.2969 11.2395C19.2976 11.4891 19.2976 11.7454 19.2976 12.0075C19.2976 12.2606 19.2976 12.5051 19.2969 12.7413C19.5768 12.729 19.8227 12.6999 20.048 12.6316C20.9269 12.365 21.6147 11.6772 21.8813 10.7983C22.0005 10.4052 22.0002 9.94935 21.9998 9.35994L21.9997 6.04933C22.4481 5.78997 22.7497 5.30521 22.7497 4.75C22.7497 3.92157 22.0781 3.25 21.2497 3.25Z',
  d20: 'M21.25 5.5C20.8358 5.5 20.5 5.16421 20.5 4.75C20.5 4.33579 20.8358 4 21.25 4C21.6642 4 22 4.33579 22 4.75C22 5.16421 21.6642 5.5 21.25 5.5ZM21.25 5.5V12H18.5',
  d21: 'M2.75 18.5C3.16421 18.5 3.5 18.8358 3.5 19.25C3.5 19.6642 3.16421 20 2.75 20C2.33579 20 2 19.6642 2 19.25C2 18.8358 2.33579 18.5 2.75 18.5ZM2.75 18.5V12H5.5',
  d22: 'M5.5 2.75C5.5 3.16421 5.16421 3.5 4.75 3.5C4.33579 3.5 4 3.16421 4 2.75C4 2.33579 4.33579 2 4.75 2C5.16421 2 5.5 2.33579 5.5 2.75ZM5.5 2.75H12V5.5',
  d23: 'M18.5 21.25C18.5 20.8358 18.8358 20.5 19.25 20.5C19.6642 20.5 20 20.8358 20 21.25C20 21.6642 19.6642 22 19.25 22C18.8358 22 18.5 21.6642 18.5 21.25ZM18.5 21.25H12V18.5',
  d24: 'M18.5 5.66699H5.5V18.667H18.5V5.66699Z',
  d25: 'M14.5013 8.75293V15.3923M9.01782 13.0059L10.4386 9.01636L11.8844 13.0059M9.01782 13.0059L8.29492 15.2238M9.01782 13.0059H11.8844M11.8844 13.0059L12.6322 15.2238',
  d26: 'M19.75 4.75C19.75 3.92157 20.4216 3.25 21.25 3.25C22.0784 3.25 22.75 3.92157 22.75 4.75C22.75 5.30521 22.4484 5.78997 22 6.04933V12C22 12.4142 21.6642 12.75 21.25 12.75H18.5V11.25H20.5V6.04933C20.0516 5.78997 19.75 5.30521 19.75 4.75Z',
  d27: 'M2 12C2 11.5858 2.33579 11.25 2.75 11.25L5.5 11.25V12.75L3.5 12.75L3.5 17.9507C3.94835 18.21 4.25 18.6948 4.25 19.25C4.25 20.0784 3.57843 20.75 2.75 20.75C1.92157 20.75 1.25 20.0784 1.25 19.25C1.25 18.6948 1.55165 18.21 2 17.9507V12Z',
  d28: 'M3.25 2.75C3.25 1.92157 3.92157 1.25 4.75 1.25C5.30521 1.25 5.78997 1.55165 6.04933 2H12C12.1989 2 12.3897 2.07902 12.5303 2.21967C12.671 2.36032 12.75 2.55109 12.75 2.75V5.5H11.25V3.5L6.04933 3.5C5.78997 3.94835 5.30521 4.25 4.75 4.25C3.92157 4.25 3.25 3.57843 3.25 2.75Z',
  d29: 'M11.25 21.25L11.25 18.5H12.75L12.75 20.5L17.9507 20.5C18.21 20.0516 18.6948 19.75 19.25 19.75C20.0784 19.75 20.75 20.4216 20.75 21.25C20.75 22.0784 20.0784 22.75 19.25 22.75C18.6948 22.75 18.21 22.4484 17.9507 22L12 22C11.5858 22 11.25 21.6642 11.25 21.25Z',
  d30: 'M19.25 4.75H4.75V19.25H19.25V4.75ZM11.1781 8.75H9.67815L7.54688 14.9662L8.96579 15.4527L9.54958 13.75H11.3067L11.8905 15.4527L13.3094 14.9662L11.1781 8.75ZM10.4281 11.1875L10.7924 12.25H10.0639L10.4281 11.1875ZM15.2496 15.25V8.75H13.7496V15.25H15.2496Z',
} as const;

export const IconAiNetworkStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-network-stroke-rounded IconAiNetworkStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiNetworkDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-network-duotone-rounded IconAiNetworkDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiNetworkTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-network-twotone-rounded IconAiNetworkTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiNetworkSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-network-solid-rounded IconAiNetworkSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiNetworkBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-network-bulk-rounded IconAiNetworkBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiNetworkStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-network-stroke-sharp IconAiNetworkStrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconAiNetworkSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-network-solid-sharp IconAiNetworkSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiNetwork: TheIconSelfPack = {
  name: 'AiNetwork',
  StrokeRounded: IconAiNetworkStrokeRounded,
  DuotoneRounded: IconAiNetworkDuotoneRounded,
  TwotoneRounded: IconAiNetworkTwotoneRounded,
  SolidRounded: IconAiNetworkSolidRounded,
  BulkRounded: IconAiNetworkBulkRounded,
  StrokeSharp: IconAiNetworkStrokeSharp,
  SolidSharp: IconAiNetworkSolidSharp,
};