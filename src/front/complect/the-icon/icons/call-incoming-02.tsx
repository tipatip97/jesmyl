import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d2: 'M13.2269 10.7731L20 4M13.2269 10.7731C13.7322 11.2784 16.1154 10.7834 16.8351 10.7731M13.2269 10.7731C12.7216 10.2678 13.2166 7.88456 13.2269 7.16492',
  d3: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424Z',
  d4: 'M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d5: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d6: 'M20.7068 4.70711C21.0973 4.31658 21.0973 3.68342 20.7068 3.29289C20.3163 2.90237 19.6831 2.90237 19.2926 3.29289L15.0308 7.55464L14.2687 6.79248L14.2538 6.77761C14.1982 6.7217 14.0989 6.62198 14.0009 6.54638L13.9977 6.5439C13.927 6.4891 13.5065 6.16348 12.9521 6.35815C12.3952 6.5537 12.2716 7.07546 12.2517 7.15971L12.2506 7.1645C12.2217 7.28454 12.2065 7.4246 12.1978 7.50491L12.1955 7.52625C12.1839 7.63134 12.1692 7.75347 12.153 7.88731C12.1012 8.3173 12.0348 8.86821 12.0104 9.36362C11.9942 9.69257 11.9929 10.0493 12.0364 10.3747C12.0722 10.6426 12.1617 11.0998 12.4894 11.4489C12.4991 11.4595 12.5092 11.4699 12.5195 11.4802C12.5295 11.4902 12.5396 11.5 12.5499 11.5095C12.8992 11.8381 13.3571 11.9278 13.6253 11.9636C13.9507 12.0071 14.3074 12.0058 14.6364 11.9896C15.1318 11.9652 15.6827 11.8988 16.1127 11.847C16.2465 11.8308 16.3687 11.8161 16.4737 11.8045L16.4951 11.8022C16.5754 11.7935 16.7155 11.7783 16.8355 11.7495L16.8403 11.7483C16.9245 11.7284 17.4463 11.6048 17.6419 11.0479C17.8365 10.4935 17.5109 10.073 17.4561 10.0023L17.4536 9.99908C17.378 9.90108 17.2783 9.80181 17.2224 9.74616L17.2075 9.73133L16.445 8.96886L20.7068 4.70711Z',
  d7: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L20.1109 16.4919L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d8: 'M19.9996 3.99902L13.3529 10.6458M17.9996 10.999H12.9996V5.99902',
  d9: 'M3.77685 11.9812L7.99158 8.01246L5.00618 2.00355C5.00336 1.99786 4.99593 1.99629 4.99095 2.00023C2.8245 3.71561 1.79846 5.55375 2.03096 7.16793C2.33413 9.27274 3.52878 12.5921 6.66532 15.8698C7.79383 17.2216 9.78575 19.0186 12.0897 20.2616M12.0897 20.2616C14.5042 21.5642 17.2649 22.8058 19.6019 21.3389C20.1167 21.0158 21.5157 19.7631 21.9997 19.0439C22.003 19.0389 22.0011 19.0324 21.9957 19.0297L16.0058 16.0189L12.0897 20.2616Z',
  d10: 'M5.08213 11.7457C5.94718 13.1708 7.02459 14.5303 8.2473 15.7521C9.46896 16.9746 10.8284 18.0523 12.2531 18.9174L15.831 15.0788L22.7492 19.0189C21.7451 20.8831 19.337 23.2672 16.2776 22.6508C14.8318 22.3591 13.4051 21.8729 11.6798 20.8831C9.94318 19.8868 8.30353 18.6143 6.84677 17.1565C5.38892 15.6997 4.11239 14.056 3.11606 12.3194C2.1262 10.5941 1.64007 9.16735 1.3483 7.72156C0.731986 4.66214 3.11606 2.25408 4.98024 1.25L8.92032 8.16817L5.08213 11.7457Z',
  d11: 'M20.7071 4.70718L15.4142 10.0001H18V12.0001H12V6.00008H14V8.58586L19.2929 3.29297L20.7071 4.70718Z',
};

export const IconCallIncoming02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-incoming-02-stroke-rounded IconCallIncoming02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallIncoming02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-incoming-02-duotone-rounded IconCallIncoming02DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      </g>
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallIncoming02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-incoming-02-twotone-rounded IconCallIncoming02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconCallIncoming02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-incoming-02-solid-rounded IconCallIncoming02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallIncoming02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-incoming-02-bulk-rounded IconCallIncoming02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallIncoming02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-incoming-02-stroke-sharp IconCallIncoming02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallIncoming02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-incoming-02-solid-sharp IconCallIncoming02SolidSharp"
    >
      <path 
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

export const iconPackOfCallIncoming02: TheIconSelfPack = {
  name: 'CallIncoming02',
  StrokeRounded: IconCallIncoming02StrokeRounded,
  DuotoneRounded: IconCallIncoming02DuotoneRounded,
  TwotoneRounded: IconCallIncoming02TwotoneRounded,
  SolidRounded: IconCallIncoming02SolidRounded,
  BulkRounded: IconCallIncoming02BulkRounded,
  StrokeSharp: IconCallIncoming02StrokeSharp,
  SolidSharp: IconCallIncoming02SolidSharp,
};