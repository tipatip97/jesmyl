import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 16.5C11 14.4438 11 13.4158 11.4421 12.65C11.7318 12.1483 12.1483 11.7318 12.65 11.4421C13.4158 11 14.4438 11 16.5 11C18.5562 11 19.5842 11 20.35 11.4421C20.8517 11.7318 21.2682 12.1483 21.5579 12.65C22 13.4158 22 14.4438 22 16.5C22 18.5562 22 19.5842 21.5579 20.35C21.2682 20.8517 20.8517 21.2682 20.35 21.5579C19.5842 22 18.5562 22 16.5 22C14.4438 22 13.4158 22 12.65 21.5579C12.1483 21.2682 11.7318 20.8517 11.4421 20.35C11 19.5842 11 18.5562 11 16.5Z',
  d2: 'M8.51338 15C8.02667 14.9537 7.66602 14.8628 7.35723 14.6845C6.94458 14.4463 6.60191 14.1036 6.36367 13.6909C6 13.0611 6 12.2154 6 10.5241C6 8.83277 6 7.98712 6.36367 7.35723C6.60191 6.94458 6.94458 6.60191 7.35723 6.36367C7.98712 6 8.83277 6 10.5241 6C12.2154 6 13.0611 6 13.6909 6.36367C14.1036 6.60191 14.4463 6.94458 14.6845 7.35723C14.8628 7.66602 14.9537 8.02667 15 8.51338',
  d3: 'M3.41611 9C2.93863 8.85544 2.53522 8.4968 2.28817 8.07057C2 7.57339 2 6.9059 2 5.57093C2 4.23595 2 3.56846 2.28817 3.07128C2.47696 2.74557 2.7485 2.4751 3.07548 2.28705C3.57462 2 4.24473 2 5.58495 2C6.92516 2 7.59527 2 8.09441 2.28705C8.49574 2.51785 8.84255 2.88838 9 3.32758',
  d4: 'M16.5467 10C17.5351 9.99999 18.3441 9.99997 18.9992 10.0593C19.6783 10.1209 20.2896 10.2525 20.85 10.5761C21.5037 10.9535 22.0465 11.4963 22.4239 12.15C22.7475 12.7105 22.8791 13.3217 22.9407 14.0008C23 14.6559 23 15.4649 23 16.4533V16.5467C23 17.5351 23 18.3441 22.9407 18.9992C22.8791 19.6783 22.7475 20.2896 22.4239 20.85C22.0465 21.5037 21.5037 22.0465 20.85 22.4239C20.2896 22.7475 19.6783 22.8791 18.9992 22.9407C18.3441 23 17.5351 23 16.5467 23H16.4533C15.4649 23 14.6559 23 14.0008 22.9407C13.3217 22.8791 12.7105 22.7475 12.15 22.4239C11.4963 22.0465 10.9535 21.5037 10.5761 20.85C10.2525 20.2896 10.1209 19.6783 10.0593 18.9992C9.99997 18.3441 9.99999 17.5351 10 16.5467V16.5466V16.4534V16.4533C9.99999 15.4649 9.99997 14.6559 10.0593 14.0008C10.1209 13.3217 10.2525 12.7105 10.5761 12.15C10.9535 11.4963 11.4963 10.9535 12.15 10.5761C12.7105 10.2525 13.3217 10.1209 14.0008 10.0593C14.6559 9.99997 15.4649 9.99999 16.4533 10H16.4534H16.5466H16.5467Z',
  d5: 'M10.4787 5H10.5695C11.3765 4.99998 12.0489 4.99997 12.5958 5.04954C13.1667 5.10129 13.6984 5.21329 14.1909 5.49764C14.7556 5.82366 15.2245 6.29256 15.5505 6.85723C15.8267 7.33552 15.6628 7.94711 15.1845 8.22325C14.7062 8.4994 14.0946 8.33552 13.8185 7.85723C13.668 7.5966 13.4516 7.38017 13.1909 7.22969C13.0536 7.15038 12.8475 7.08055 12.4153 7.04138C11.9693 7.00096 11.3881 7 10.5241 7C9.66003 7 9.07884 7.00096 8.63289 7.04138C8.20068 7.08055 7.99461 7.15038 7.85723 7.22969C7.5966 7.38017 7.38017 7.5966 7.22969 7.85723C7.15038 7.99461 7.08055 8.20068 7.04138 8.63289C7.00096 9.07884 7 9.66003 7 10.5241C7 11.3881 7.00096 11.9693 7.04138 12.4153C7.08055 12.8475 7.15038 13.0536 7.22969 13.1909C7.38017 13.4516 7.5966 13.668 7.85723 13.8185C8.33552 14.0946 8.4994 14.7062 8.22325 15.1845C7.94711 15.6628 7.33552 15.8267 6.85723 15.5505C6.29256 15.2245 5.82366 14.7556 5.49764 14.1909C5.21329 13.6984 5.10129 13.1667 5.04954 12.5958C4.99997 12.0489 4.99998 11.3765 5 10.5695V10.4787C4.99998 9.67168 4.99997 8.99932 5.04954 8.45236C5.10129 7.88144 5.21329 7.34974 5.49764 6.85723C5.82365 6.29256 6.29256 5.82365 6.85723 5.49764C7.34974 5.21329 7.88144 5.10129 8.45236 5.04954C8.99932 4.99997 9.67168 4.99998 10.4787 5Z',
  d6: 'M5.5415 1H5.6284C6.26144 0.99998 6.80225 0.999963 7.245 1.03993C7.71144 1.08204 8.16611 1.17471 8.59294 1.42018C8.92673 1.61214 9.23653 1.87136 9.48728 2.18485C9.83226 2.61614 9.76229 3.24542 9.331 3.5904C8.89971 3.93538 8.27043 3.86541 7.92545 3.43412C7.83825 3.3251 7.72306 3.22706 7.59588 3.15392C7.52357 3.11234 7.39362 3.06148 7.06517 3.03183C6.72312 3.00095 6.27339 3 5.58495 3C4.89651 3 4.44677 3.00095 4.10472 3.03183C3.77627 3.06148 3.64632 3.11234 3.57402 3.15392C3.39888 3.25464 3.25393 3.39922 3.15335 3.57275C3.11236 3.64347 3.06159 3.77138 3.03191 4.09754C3.00097 4.43761 3 4.88496 3 5.57093C3 6.25689 3.00097 6.70424 3.03191 7.04431C3.06159 7.37048 3.11236 7.49838 3.15335 7.56911C3.22788 7.69769 3.328 7.81323 3.44026 7.90059C3.87611 8.23978 3.95446 8.86808 3.61527 9.30393C3.27607 9.73978 2.64777 9.81813 2.21192 9.47894C1.88879 9.22747 1.62109 8.9138 1.423 8.57205C1.17582 8.14559 1.0825 7.69115 1.04014 7.22554C0.999962 6.78399 0.99998 6.24483 1 5.61462V5.52724C0.99998 4.89703 0.999962 4.35786 1.04014 3.91632C1.0825 3.4507 1.17582 2.99627 1.423 2.56981C1.7 2.09192 2.09811 1.69556 2.57695 1.42018C3.00378 1.17471 3.45845 1.08204 3.9249 1.03993C4.36764 0.999963 4.90845 0.99998 5.5415 1Z',
  d7: 'M22 11V22H11V11H22Z',
  d8: 'M9 3V2H2V9H3',
  d9: 'M15 8V6H6V15H8',
  d10: 'M10.25 10.25H22.75V22.75H10.25V10.25Z',
  d11: 'M1.25 1.25H10.25V3.25H3.25V10.25H1.25V1.25Z',
  d12: 'M5.25 5.25H15.75V8.11364H13.8409V7.15909H7.15909V13.8409H8.11364V15.75H5.25V5.25Z',
};

export const IconMotion02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-02-stroke-rounded IconMotion02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMotion02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-02-duotone-rounded IconMotion02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMotion02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-02-twotone-rounded IconMotion02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMotion02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-02-solid-rounded IconMotion02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconMotion02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-02-bulk-rounded IconMotion02BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMotion02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-02-stroke-sharp IconMotion02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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

export const IconMotion02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motion-02-solid-sharp IconMotion02SolidSharp"
    >
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

export const iconPackOfMotion02: TheIconSelfPack = {
  name: 'Motion02',
  StrokeRounded: IconMotion02StrokeRounded,
  DuotoneRounded: IconMotion02DuotoneRounded,
  TwotoneRounded: IconMotion02TwotoneRounded,
  SolidRounded: IconMotion02SolidRounded,
  BulkRounded: IconMotion02BulkRounded,
  StrokeSharp: IconMotion02StrokeSharp,
  SolidSharp: IconMotion02SolidSharp,
};