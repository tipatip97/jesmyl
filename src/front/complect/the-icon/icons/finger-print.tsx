import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.42857 3.36201C11.3996 0.664089 17.136 2.12432 19.2301 6.41803M10.8571 21.9236C15.5839 22.5822 20 18.8952 20 14.2103V10.3333M7.42857 20.6058C5.35602 19.1977 4 16.8583 4 14.2103V9.75757C4 8.57285 4.27144 7.44988 4.75704 6.44444',
  d2: 'M16 13.8C16 16.1196 14.2091 18 12 18C9.79086 18 8 16.1196 8 13.8V10.2C8 9.55584 8.13811 8.94555 8.38493 8.4M12 6C14.2091 6 16 7.8804 16 10.2',
  d3: 'M12 10.5L12 13.5',
  d4: 'M4 14.2103V9.75757C4 8.57285 4.27144 7.44988 4.75704 6.44444C5.08996 5.6 6.67678 4.03764 7.42857 3.36201C11.3996 0.664089 17.136 2.12432 19.2301 6.41803C19.2735 6.5446 19.3241 6.67353 19.3784 6.81165C19.6455 7.49149 20 8.394 20 10.3333V14.2103C20 18.8952 15.5839 22.5822 10.8571 21.9236C9.36093 21.8924 7.94801 21.0321 7.42857 20.6058C5.35602 19.1977 4 16.8583 4 14.2103ZM8 13.3262V10.6545C8 9.94371 8.13572 9.26993 8.37852 8.66667C8.54498 8.16 9.33839 7.22258 9.71429 6.8172C11.6998 5.19845 14.568 6.07459 15.6151 8.65082C15.6367 8.72676 15.6621 8.80412 15.6892 8.88699C15.8227 9.2949 16 9.8364 16 11V13.3262C16 16.1371 13.792 18.3493 11.4286 17.9542C10.6805 17.9354 9.974 17.4193 9.71429 17.1635C8.67801 16.3186 8 14.915 8 13.3262Z',
  d5: 'M7.00919 2.74958C11.3463 -0.212497 17.6007 1.37059 19.9031 6.1162C20.1385 6.60133 19.9381 7.18641 19.4555 7.42301C18.9729 7.65961 18.3908 7.45814 18.1555 6.97302C16.3861 3.32613 11.4862 2.05504 8.10192 4.36633C7.65779 4.66966 7.05313 4.55363 6.75138 4.10717C6.44963 3.66072 6.56506 3.0529 7.00919 2.74958ZM11.0278 6.13607C11.0278 5.59632 11.4631 5.15877 12 5.15877C14.7289 5.15877 16.8611 7.47952 16.8611 10.2407C16.8611 10.7805 16.4258 11.218 15.8889 11.218C15.3519 11.218 14.9167 10.7805 14.9167 10.2407C14.9167 8.46806 13.5667 7.11337 12 7.11337C11.4631 7.11337 11.0278 6.67582 11.0278 6.13607ZM5.38107 5.69039C5.86457 5.92513 6.06722 6.50943 5.8337 6.99546C5.42361 7.84898 5.19444 8.8015 5.19444 9.80834V14.16C5.19444 16.4036 6.33599 18.3959 8.10192 19.602C8.54606 19.9053 8.66148 20.5131 8.35973 20.9596C8.05798 21.4061 7.45333 21.5221 7.00919 21.2188C4.74516 19.6725 3.25 17.0921 3.25 14.16V9.80834C3.25 8.49953 3.54863 7.25709 4.08278 6.14538C4.3163 5.65935 4.89757 5.45565 5.38107 5.69039ZM8.8861 7.59118C9.37531 7.81366 9.59246 8.39268 9.37113 8.88444C9.18745 9.29256 9.08333 9.7518 9.08333 10.2407V13.759C9.08333 15.5317 10.4333 16.8864 12 16.8864C13.5667 16.8864 14.9167 15.5317 14.9167 13.759C14.9167 13.2193 15.3519 12.7817 15.8889 12.7817C16.4258 12.7817 16.8611 13.2193 16.8611 13.759C16.8611 16.5202 14.7289 18.841 12 18.841C9.27113 18.841 7.13889 16.5202 7.13889 13.759V10.2407C7.13889 9.4706 7.30332 8.73697 7.59957 8.07874C7.8209 7.58698 8.3969 7.36869 8.8861 7.59118ZM19.7778 9.39374C20.3147 9.39374 20.75 9.83129 20.75 10.371V14.16C20.75 19.3655 15.9012 23.387 10.7547 22.6662C10.2229 22.5917 9.85187 22.098 9.92597 21.5634C10.0001 21.0288 10.4912 20.6558 11.023 20.7303C15.0675 21.2967 18.8056 18.1116 18.8056 14.16V10.371C18.8056 9.83129 19.2408 9.39374 19.7778 9.39374ZM12 9.55662C12.5369 9.55662 12.9722 9.99417 12.9722 10.5339V13.4658C12.9722 14.0056 12.5369 14.4431 12 14.4431C11.4631 14.4431 11.0278 14.0056 11.0278 13.4658V10.5339C11.0278 9.99417 11.4631 9.55662 12 9.55662Z',
  d6: 'M7.00919 2.74958C11.3463 -0.212497 17.6007 1.37059 19.9031 6.1162C20.1385 6.60133 19.9381 7.18641 19.4555 7.42301C18.9729 7.65961 18.3908 7.45814 18.1555 6.97302C16.3861 3.32613 11.4862 2.05504 8.10192 4.36633C7.65779 4.66966 7.05313 4.55363 6.75138 4.10717C6.44963 3.66072 6.56506 3.0529 7.00919 2.74958ZM5.38107 5.69039C5.86457 5.92513 6.06722 6.50943 5.8337 6.99546C5.42361 7.84898 5.19444 8.8015 5.19444 9.80834V14.16C5.19444 16.4036 6.33599 18.3959 8.10192 19.602C8.54606 19.9053 8.66148 20.5131 8.35973 20.9596C8.05798 21.4061 7.45333 21.5221 7.00919 21.2188C4.74516 19.6725 3.25 17.0921 3.25 14.16V9.80834C3.25 8.49953 3.54863 7.25709 4.08278 6.14538C4.3163 5.65935 4.89757 5.45565 5.38107 5.69039ZM19.7778 9.39374C20.3147 9.39374 20.75 9.83129 20.75 10.371V14.16C20.75 19.3655 15.9012 23.387 10.7547 22.6662C10.2229 22.5917 9.85187 22.098 9.92597 21.5634C10.0001 21.0288 10.4912 20.6558 11.023 20.7303C15.0675 21.2967 18.8056 18.1116 18.8056 14.16V10.371C18.8056 9.83129 19.2408 9.39374 19.7778 9.39374ZM12 9.55662C12.5369 9.55662 12.9722 9.99417 12.9722 10.5339V13.4658C12.9722 14.0056 12.5369 14.4431 12 14.4431C11.4631 14.4431 11.0278 14.0056 11.0278 13.4658V10.5339C11.0278 9.99417 11.4631 9.55662 12 9.55662Z',
  d7: 'M11.0276 6.13746C11.0276 5.59771 11.4628 5.16016 11.9998 5.16016C14.7287 5.16016 16.8609 7.48091 16.8609 10.2421C16.8609 10.7819 16.4256 11.2194 15.8887 11.2194C15.3517 11.2194 14.9164 10.7819 14.9164 10.2421C14.9164 8.46945 13.5665 7.11476 11.9998 7.11476C11.4628 7.11476 11.0276 6.67721 11.0276 6.13746ZM8.88589 7.59257C9.37509 7.81506 9.59225 8.39407 9.37092 8.88583C9.18723 9.29395 9.08312 9.75319 9.08312 10.2421V13.7604C9.08312 15.5331 10.4331 16.8878 11.9998 16.8878C13.5665 16.8878 14.9164 15.5331 14.9164 13.7604C14.9164 13.2207 15.3517 12.7831 15.8887 12.7831C16.4256 12.7831 16.8609 13.2207 16.8609 13.7604C16.8609 16.5216 14.7287 18.8424 11.9998 18.8424C9.27091 18.8424 7.13867 16.5216 7.13867 13.7604V10.2421C7.13867 9.47199 7.3031 8.73836 7.59935 8.08014C7.82068 7.58837 8.39668 7.37008 8.88589 7.59257Z',
  d8: 'M7.00919 2.74958C11.3463 -0.212497 17.6007 1.37059 19.9031 6.1162L18.1555 6.97302C16.3861 3.32613 11.4862 2.05504 8.10192 4.36633L7.00919 2.74958Z',
  d9: 'M3.25 9.80834C3.25 8.49953 3.54863 7.25709 4.08278 6.14538L5.8337 6.99546C5.42361 7.84898 5.19444 8.8015 5.19444 9.80834V14.16C5.19444 16.4036 6.33599 18.3959 8.10192 19.602L7.00919 21.2188C4.74516 19.6725 3.25 17.0921 3.25 14.16V9.80834Z',
  d10: 'M18.8056 14.16V10.371H20.75V14.16C20.75 19.3655 15.9012 23.387 10.7547 22.6662L11.023 20.7303C15.0675 21.2967 18.8056 18.1116 18.8056 14.16Z',
  d11: 'M14.9164 10.2411C14.9164 8.46847 13.5665 7.11378 11.9998 7.11378V5.15918C14.7287 5.15918 16.8609 7.47994 16.8609 10.2411H14.9164Z',
  d12: 'M7.13867 10.2411C7.13867 9.47101 7.3031 8.73738 7.59935 8.07916L9.37092 8.88485C9.18723 9.29297 9.08312 9.75221 9.08312 10.2411V13.7594C9.08312 15.5321 10.4331 16.8868 11.9998 16.8868C13.5665 16.8868 14.9164 15.5321 14.9164 13.7594H16.8609C16.8609 16.5206 14.7287 18.8414 11.9998 18.8414C9.27091 18.8414 7.13867 16.5206 7.13867 13.7594V10.2411Z',
  d13: 'M11.0273 10.5342V13.4661H12.9718V10.5342H11.0273Z',
};

export const IconFingerPrintStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-stroke-rounded IconFingerPrintStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFingerPrintDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-duotone-rounded IconFingerPrintDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-twotone-rounded IconFingerPrintTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFingerPrintSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-solid-rounded IconFingerPrintSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-bulk-rounded IconFingerPrintBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-stroke-sharp IconFingerPrintStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconFingerPrintSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-solid-sharp IconFingerPrintSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFingerPrint: TheIconSelfPack = {
  name: 'FingerPrint',
  StrokeRounded: IconFingerPrintStrokeRounded,
  DuotoneRounded: IconFingerPrintDuotoneRounded,
  TwotoneRounded: IconFingerPrintTwotoneRounded,
  SolidRounded: IconFingerPrintSolidRounded,
  BulkRounded: IconFingerPrintBulkRounded,
  StrokeSharp: IconFingerPrintStrokeSharp,
  SolidSharp: IconFingerPrintSolidSharp,
};