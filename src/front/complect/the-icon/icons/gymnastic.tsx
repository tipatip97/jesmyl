import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5 10C14.2791 10.0578 14.0631 10.128 13.8528 10.2099M17.5 10C20.0878 10.6767 22 13.0635 22 15.904C22 19.2707 19.3137 22 16 22C15.2987 22 14.6256 21.8778 14 21.6531M10.5 13.4638C10.1784 14.211 10 15.0363 10 15.904C10 16.8324 10.2043 17.7124 10.5697 18.5',
  d2: 'M15.9977 7C17.4153 7 18.2027 10.4981 16.6484 10.9238C16.2777 11.0254 15.7176 11.0254 15.3469 10.9238C13.7946 10.4986 14.5939 7 15.9977 7Z',
  d3: 'M16 7V2',
  d4: 'M6.5 10C3.91216 10.6767 2 13.0635 2 15.904C2 19.2707 4.68629 22 8 22C11.3137 22 14 19.2707 14 15.904C14 13.0635 12.0878 10.6767 9.5 10',
  d5: 'M7.99767 7C9.41527 7 10.2027 10.4981 8.6484 10.9238C8.2777 11.0254 7.71764 11.0254 7.34695 10.9238C5.79459 10.4986 6.59392 7 7.99767 7Z',
  d6: 'M8 7V2',
  d7: 'M14.5 10C14.2791 10.0578 14.0631 10.128 13.8528 10.2099M17.5 10C20.0878 10.6767 22 13.0635 22 15.904C22 19.2707 19.3137 22 16 22C15.2987 22 14.6256 21.8778 14 21.6531M10.5 13.4638C10.1784 14.211 10 15.0363 10 15.904C10 16.8324 10.2043 17.7124 10.5697 18.5M16 7V2M15.9977 7C17.4153 7 18.2027 10.4981 16.6484 10.9238C16.2777 11.0254 15.7176 11.0254 15.3469 10.9238C13.7946 10.4986 14.5939 7 15.9977 7Z',
  d8: 'M7.46747 9.74725C7.60719 10.2816 7.28731 10.828 6.75299 10.9677C4.60389 11.5297 3 13.5199 3 15.9042C3 18.7337 5.25349 21.0002 8 21.0002C10.7465 21.0002 13 18.7337 13 15.9042C13 13.5199 11.3961 11.5297 9.24701 10.9677C8.71269 10.828 8.39281 10.2816 8.53253 9.74725C8.67226 9.21293 9.21868 8.89305 9.75299 9.03278C12.7796 9.82423 15 12.6075 15 15.9042C15 19.8082 11.8809 23.0002 8 23.0002C4.1191 23.0002 1 19.8082 1 15.9042C1 12.6075 3.22043 9.82423 6.24701 9.03278C6.78132 8.89305 7.32774 9.21293 7.46747 9.74725Z',
  d9: 'M9 2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2V6.28637C6.69966 6.46993 6.45993 6.71797 6.28215 6.95777C5.92803 7.43545 5.69534 8.03219 5.58231 8.61073C5.47004 9.18541 5.45703 9.83947 5.642 10.4302C5.8336 11.0421 6.276 11.6673 7.08276 11.8883C7.62639 12.0372 8.36894 12.0372 8.91257 11.8883C9.71823 11.6676 10.1619 11.0441 10.3553 10.4326C10.542 9.84194 10.5308 9.18757 10.4192 8.61203C10.307 8.03278 10.0743 7.43496 9.71833 6.9564C9.53965 6.71619 9.29973 6.46948 9 6.2868V2Z',
  d10: 'M16 1C16.5523 1 17 1.44772 17 2V6.2868C17.2997 6.46948 17.5397 6.71619 17.7183 6.9564C18.0743 7.43496 18.307 8.03278 18.4192 8.61203C18.4603 8.82407 18.4878 9.04681 18.4968 9.27312C21.1365 10.2948 23 12.884 23 15.9042C23 19.8082 19.8809 23.0002 16 23.0002C15.6281 23.0002 15.2623 22.9707 14.9049 22.9138C14.3595 22.8268 13.9878 22.3142 14.0748 21.7688C14.1618 21.2234 14.6744 20.8518 15.2198 20.9387C15.4734 20.9792 15.734 21.0002 16 21.0002C18.7465 21.0002 21 18.7337 21 15.9042C21 13.787 19.7353 11.9805 17.9472 11.2089C17.7033 11.5134 17.365 11.7644 16.9126 11.8883C16.3689 12.0372 15.6264 12.0372 15.0828 11.8883C14.276 11.6673 13.8336 11.0421 13.642 10.4302C13.457 9.83947 13.47 9.18541 13.5823 8.61073C13.6953 8.03219 13.928 7.43545 14.2822 6.95777C14.4599 6.71797 14.6997 6.46993 15 6.28637V2C15 1.44772 15.4477 1 16 1ZM11.2332 14.3605C11.3975 13.8332 11.1031 13.2726 10.5758 13.1084C10.0485 12.9442 9.48792 13.2385 9.32371 13.7658C9.11313 14.442 9 15.1607 9 15.9042C9 16.6477 9.11313 17.3664 9.32371 18.0426C9.48792 18.5699 10.0485 18.8642 10.5758 18.7C11.1031 18.5358 11.3975 17.9752 11.2332 17.4479C11.082 16.9623 11 16.444 11 15.9042C11 15.3644 11.082 14.8461 11.2332 14.3605Z',
  d11: 'M17.5 10C20.0878 10.6767 22 13.0635 22 15.904C22 19.2707 19.3137 22 16 22C15.2987 22 14.6256 21.8778 14 21.6531M10.5 13.4638C10.1784 14.211 10 15.0363 10 15.904C10 16.8324 10.2043 17.7124 10.5697 18.5',
  d12: 'M16.75 1.75V5.93328C17.0702 6.0968 17.3271 6.34934 17.5177 6.60561C17.8469 7.04817 18.0671 7.60918 18.1738 8.15959C18.223 8.41328 18.251 8.68038 18.25 8.94769C20.877 9.88926 22.75 12.4288 22.75 15.404C22.75 19.1737 19.7391 22.25 16 22.25C15.211 22.25 14.4521 22.1124 13.7465 21.859L14.2535 20.4473C14.799 20.6432 15.3865 20.75 16 20.75C18.8883 20.75 21.25 18.3678 21.25 15.404C21.25 13.1132 19.8367 11.1662 17.8606 10.4032C17.64 10.7395 17.3108 11.02 16.8465 11.1472C16.3461 11.2843 15.6492 11.2843 15.1488 11.1472C14.4467 10.9549 14.0546 10.4113 13.8806 9.85548C13.7115 9.3155 13.7208 8.70565 13.8277 8.15867C13.9351 7.60878 14.1554 7.04857 14.483 6.60665C14.6728 6.35067 14.9294 6.09678 15.25 5.93267V1.75H16.75Z',
  d13: 'M10.75 15.404C10.75 14.6399 10.907 13.9154 11.1889 13.2603L9.8111 12.6673C9.44986 13.5066 9.25 14.4327 9.25 15.404C9.25 16.4434 9.47888 17.4309 9.88934 18.3156L11.25 17.6844C10.9297 16.9939 10.75 16.2215 10.75 15.404Z',
  d14: 'M8.75 1.75V5.93328C9.0702 6.0968 9.32712 6.34934 9.51774 6.60561C9.84694 7.04817 10.0671 7.60918 10.1738 8.15959C10.223 8.41328 10.251 8.68038 10.25 8.94769C12.877 9.88926 14.75 12.4288 14.75 15.404C14.75 19.1737 11.7391 22.25 8 22.25C4.2609 22.25 1.25 19.1737 1.25 15.404C1.25 12.4288 3.123 9.88928 5.75001 8.9477C5.74949 8.68 5.77808 8.41256 5.82768 8.15867C5.9351 7.60878 6.15537 7.04857 6.48299 6.60665C6.67275 6.35067 6.92941 6.09678 7.25 5.93267V1.75H8.75ZM6.1369 10.4042C4.16208 11.1679 2.75 13.1142 2.75 15.404C2.75 18.3678 5.11169 20.75 8 20.75C10.8883 20.75 13.25 18.3678 13.25 15.404C13.25 13.1132 11.8367 11.1662 9.86057 10.4032C9.64004 10.7395 9.31076 11.02 8.84653 11.1472C8.34613 11.2843 7.6492 11.2843 7.1488 11.1472C6.68511 11.0202 6.35665 10.74 6.1369 10.4042Z',
};

export const IconGymnasticStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gymnastic-stroke-rounded IconGymnasticStrokeRounded"
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

export const IconGymnasticDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gymnastic-duotone-rounded IconGymnasticDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="8" 
        cy="16" 
        r="6" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconGymnasticTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gymnastic-twotone-rounded IconGymnasticTwotoneRounded"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGymnasticSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gymnastic-solid-rounded IconGymnasticSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGymnasticBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gymnastic-bulk-rounded IconGymnasticBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGymnasticStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gymnastic-stroke-sharp IconGymnasticStrokeSharp"
    >
      <path 
        d={d.d11} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGymnasticSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gymnastic-solid-sharp IconGymnasticSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGymnastic: TheIconSelfPack = {
  name: 'Gymnastic',
  StrokeRounded: IconGymnasticStrokeRounded,
  DuotoneRounded: IconGymnasticDuotoneRounded,
  TwotoneRounded: IconGymnasticTwotoneRounded,
  SolidRounded: IconGymnasticSolidRounded,
  BulkRounded: IconGymnasticBulkRounded,
  StrokeSharp: IconGymnasticStrokeSharp,
  SolidSharp: IconGymnasticSolidSharp,
};