import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 17.5C14 18.8333 10 18.8333 6 17.5M18 10.5C14 9.16667 10 9.16667 6 10.5',
  d2: 'M16 6.5L13.4948 3.68167C12.7977 2.89736 12.4491 2.5052 12 2.5052C11.5509 2.5052 11.2023 2.89736 10.5052 3.68167L8 6.5',
  d3: 'M18 2L6 2',
  d4: 'M9.1114 21.7682C11.0371 22.0773 12.9629 22.0773 14.8886 21.7682C17.517 21.3464 18 20.4678 18 18.2919V9.70813C18 7.53225 17.517 6.65357 14.8886 6.23178C12.9629 5.92274 11.0371 5.92274 9.1114 6.23178C6.48303 6.65357 6 7.53225 6 9.70813V18.2919C6 20.4678 6.48303 21.3464 9.1114 21.7682Z',
  d5: 'M13.4948 3.68167L16 6.5C12.6883 5.55176 9.28681 6.1049 8 6.5L10.5052 3.68167C11.2023 2.89736 11.5509 2.5052 12 2.5052C12.4491 2.5052 12.7977 2.89736 13.4948 3.68167Z',
  d6: 'M6.03346 17.5111C10.0031 18.8269 13.9727 18.8296 17.9422 17.5192C17.9767 17.5078 18 17.4756 18 17.4393V18.2919C18 20.4678 17.517 21.3464 14.8886 21.7682C12.9629 22.0773 11.0371 22.0773 9.1114 21.7682C6.48303 21.3464 6 20.4678 6 18.2919V17.4648C6 17.4858 6.01353 17.5045 6.03346 17.5111Z',
  d7: 'M6.03504 10.4884C10.011 9.17078 13.9869 9.17055 17.9628 10.4876C17.985 10.495 18 10.5157 18 10.5391V9.70813C18 7.53225 17.517 6.65357 14.8886 6.23178C12.9629 5.92274 11.0371 5.92274 9.1114 6.23178C6.48303 6.65357 6 7.53225 6 9.70813V10.5368C6 10.5148 6.01417 10.4953 6.03504 10.4884Z',
  d8: 'M16.6642 7.2474C16.2514 7.61432 15.6194 7.57714 15.2525 7.16435L12.7473 4.34602C12.3788 3.93149 12.1708 3.70099 12.0062 3.56089C12.004 3.55907 12.0019 3.55729 11.9999 3.55556C11.9978 3.55729 11.9957 3.55907 11.9936 3.56089C11.8289 3.70099 11.6209 3.93149 11.2525 4.34602L8.74728 7.16435C8.38036 7.57714 7.74829 7.61432 7.3355 7.2474C6.92272 6.88048 6.88554 6.24841 7.25246 5.83563L9.75764 3.0173C9.77066 3.00265 9.78366 2.98801 9.79664 2.9734C10.1113 2.61933 10.413 2.27979 10.6974 2.03772C11.0154 1.76715 11.4388 1.50519 11.9999 1.50519C12.5609 1.50519 12.9843 1.76715 13.3023 2.03772C13.5868 2.27979 13.8885 2.61933 14.2031 2.9734C14.2161 2.98801 14.2291 3.00264 14.2421 3.0173L16.7473 5.83563C17.1142 6.24841 17.077 6.88048 16.6642 7.2474Z',
  d9: 'M18.9999 2C18.9999 1.44772 18.5522 1 17.9999 1L5.99988 1C5.44759 1 4.99988 1.44772 4.99988 2C4.99988 2.55228 5.44759 3 5.99988 3L17.9999 3C18.5522 3 18.9999 2.55228 18.9999 2Z',
  d10: 'M15.0469 5.24441C13.0162 4.91853 10.9835 4.91853 8.95283 5.24441C7.59267 5.46269 6.49375 5.8335 5.7987 6.67563C5.10592 7.515 4.99988 8.60433 4.99988 9.70813C4.99988 9.75068 4.99988 9.77196 5.00254 9.78811C5.02022 9.8954 5.12039 9.96891 5.22805 9.9536C5.24425 9.95129 5.26455 9.94491 5.30514 9.93215L5.7686 9.78644C9.92052 8.40384 14.0849 8.40452 18.2368 9.78849C18.2463 9.79166 18.2557 9.79502 18.2651 9.79856L18.6552 9.94621C18.721 9.97111 18.7539 9.98356 18.7803 9.98616C18.8775 9.99574 18.9675 9.93361 18.993 9.83923C18.9999 9.81364 18.9999 9.77847 18.9999 9.70813C18.9999 8.60433 18.8938 7.515 18.2011 6.67563C17.506 5.8335 16.4071 5.46269 15.0469 5.24441Z',
  d11: 'M18.9999 11.9568C18.9999 11.8231 18.9999 11.7563 18.9644 11.705C18.929 11.6537 18.8665 11.63 18.7415 11.5827L17.7483 11.2068C13.907 9.9295 10.0781 9.93107 6.23679 11.2115L6.22458 11.2155L5.27991 11.5125C5.1449 11.5549 5.0774 11.5761 5.03864 11.629C4.99988 11.6818 4.99988 11.7525 4.99988 11.8941V16.0253C4.99988 16.1568 4.99988 16.2226 5.03444 16.2735C5.069 16.3244 5.13017 16.3486 5.25249 16.3971L6.25641 16.795C10.0813 18.0657 13.894 18.0683 17.7189 16.803L18.7721 16.3004C18.8828 16.2476 18.9382 16.2212 18.969 16.1723C18.9999 16.1234 18.9999 16.062 18.9999 15.9394V11.9568Z',
  d12: 'M18.9999 18.2919C18.9999 18.1851 18.9999 18.1318 18.9852 18.0956C18.953 18.0161 18.8736 17.966 18.7879 17.9711C18.7489 17.9735 18.7008 17.9964 18.6044 18.0424L18.3226 18.1769C18.2947 18.1902 18.2661 18.2017 18.2368 18.2115C14.0828 19.5962 9.9164 19.5962 5.76245 18.2115C5.74926 18.2071 5.7362 18.2024 5.72328 18.1972L5.3544 18.051C5.28256 18.0226 5.24664 18.0083 5.21779 18.0057C5.12288 17.9972 5.03513 18.0568 5.0081 18.1482C4.99988 18.176 4.99988 18.2146 4.99988 18.2919C4.99988 19.3957 5.10592 20.485 5.7987 21.3244C6.49375 22.1665 7.59267 22.5373 8.95283 22.7556C10.9835 23.0815 13.0162 23.0815 15.0469 22.7556C16.4071 22.5373 17.506 22.1665 18.2011 21.3244C18.8938 20.485 18.9999 19.3957 18.9999 18.2919Z',
  d13: 'M15.0469 5.24441C13.0162 4.91853 10.9835 4.91853 8.95283 5.24441C7.59267 5.46269 6.49375 5.8335 5.7987 6.67563C5.10592 7.515 4.99988 8.60433 4.99988 9.70813C4.99988 9.75068 4.99988 9.77196 5.00254 9.78811C5.02022 9.8954 5.12039 9.96891 5.22805 9.9536C5.24425 9.95129 5.26455 9.94491 5.30514 9.93215L5.7686 9.78644C9.92052 8.40384 14.0849 8.40452 18.2368 9.78849C18.2463 9.79166 18.2557 9.79501 18.2651 9.79856L18.6552 9.94621C18.721 9.97111 18.7539 9.98356 18.7803 9.98616C18.8775 9.99574 18.9675 9.93361 18.993 9.83923C18.9999 9.81364 18.9999 9.77847 18.9999 9.70813C18.9999 8.60433 18.8938 7.515 18.2011 6.67563C17.506 5.8335 16.4071 5.46269 15.0469 5.24441Z',
  d14: 'M16 6.5L12 2L8 6.5',
  d15: 'M12 22C14.2334 22 16.3029 21.445 18 20.5V7.5C16.3029 6.55496 14.2334 6 12 6C9.76659 6 7.69709 6.55496 6 7.5V20.5C7.69709 21.445 9.76659 22 12 22Z',
  d16: 'M12 5.25C9.64377 5.25 7.44798 5.83523 5.63511 6.84475L5.25 7.0592V9.61966C9.74801 8.46 14.252 8.46011 18.75 9.62001V7.0592L18.3649 6.84475C16.552 5.83523 14.3562 5.25 12 5.25Z',
  d17: 'M18.75 11.1719C14.2476 9.94282 9.75235 9.9427 5.25 11.1715V16.8285C9.75235 18.0573 14.2476 18.0572 18.75 16.8281V11.1719Z',
  d18: 'M18.75 18.38C14.252 19.5399 9.74801 19.54 5.25 18.3803V20.9408L5.63511 21.1553C7.44798 22.1648 9.64377 22.75 12 22.75C14.3562 22.75 16.552 22.1648 18.3649 21.1553L18.75 20.9408V18.38Z',
  d19: 'M10.3273 2.75H5.99747V1.25H17.9975V2.75H13.6676L16.558 6.00173L15.4369 6.99827L11.9975 3.1289L8.55803 6.99827L7.43692 6.00173L10.3273 2.75Z',
};

export const IconBoxingBagStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxing-bag-stroke-rounded IconBoxingBagStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBoxingBagDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxing-bag-duotone-rounded IconBoxingBagDuotoneRounded"
    >
      <path 
        d={d.d5} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBoxingBagTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxing-bag-twotone-rounded IconBoxingBagTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBoxingBagSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxing-bag-solid-rounded IconBoxingBagSolidRounded"
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBoxingBagBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxing-bag-bulk-rounded IconBoxingBagBulkRounded"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBoxingBagStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxing-bag-stroke-sharp IconBoxingBagStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
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
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBoxingBagSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxing-bag-solid-sharp IconBoxingBagSolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfBoxingBag: TheIconSelfPack = {
  name: 'BoxingBag',
  StrokeRounded: IconBoxingBagStrokeRounded,
  DuotoneRounded: IconBoxingBagDuotoneRounded,
  TwotoneRounded: IconBoxingBagTwotoneRounded,
  SolidRounded: IconBoxingBagSolidRounded,
  BulkRounded: IconBoxingBagBulkRounded,
  StrokeSharp: IconBoxingBagStrokeSharp,
  SolidSharp: IconBoxingBagSolidSharp,
};