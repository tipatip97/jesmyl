import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.5 11.5L19.5011 7.5C19.5011 6.67157 18.8295 6 18.0011 6C17.1727 6 16.5011 6.67157 16.5011 7.5M10.5011 5.5C10.5011 4.67157 9.82952 4 9.0011 4C8.17267 4 7.5011 4.67157 7.5011 5.5V13.4634L5.8797 11.8369C5.16877 11.1237 3.99772 11.1888 3.36965 11.9763C2.88907 12.5789 2.8758 13.4314 3.33738 14.0487L6.34137 18.0667C7.02311 18.9785 7.36398 19.4344 7.77419 19.7888C8.40001 20.3294 9.14995 20.7056 9.95658 20.8834C10.455 20.9933 10.9885 20.9996 12 21M10.5011 5.5V3.5C10.5011 2.67157 11.1727 2 12.0011 2C12.8295 2 13.5011 2.67157 13.5011 3.5V5.5M10.5011 5.5V10M13.5011 5.5C13.5011 4.67157 14.1727 4 15.0011 4C15.8295 4 16.5011 4.67157 16.5011 5.5V7.5M13.5011 5.5V10M16.5011 7.5V10',
  d2: 'M15 19.5C15 18.5654 15 18.0981 15.201 17.75C15.3326 17.522 15.522 17.3326 15.75 17.201C16.0981 17 16.5654 17 17.5 17H18.5C19.4346 17 19.9019 17 20.25 17.201C20.478 17.3326 20.6674 17.522 20.799 17.75C21 18.0981 21 18.5654 21 19.5C21 20.4346 21 20.9019 20.799 21.25C20.6674 21.478 20.478 21.6674 20.25 21.799C19.9019 22 19.4346 22 18.5 22H17.5C16.5654 22 16.0981 22 15.75 21.799C15.522 21.6674 15.3326 21.478 15.201 21.25C15 20.9019 15 20.4346 15 19.5Z',
  d3: 'M16.5 15.5C16.5 14.6716 17.1716 14 18 14C18.8284 14 19.5 14.6716 19.5 15.5V17H16.5V15.5Z',
  d4: 'M19.5014 13.8347C19.5014 15.3465 19.5014 16.2914 19.3784 17.0109C19.1399 17 18.8534 17 18.5001 17H17.5001C16.5655 17 16.0982 17 15.7501 17.201C15.5221 17.3326 15.3327 17.522 15.2011 17.75C15.0001 18.0981 15.0001 18.5654 15.0001 19.5C15.0001 20.1769 15.0001 20.6086 15.0764 20.9275C14.3906 21 13.5027 21 12.2041 21C11.0547 21 10.48 21 9.94844 20.8872C9.01798 20.6898 8.1625 20.2403 7.47909 19.5896C7.08865 19.2178 6.76987 18.7483 6.13232 17.8093L5.56871 16.9792C4.73779 15.7554 3.88731 14.5174 3.61273 14.1182C3.55155 14.0292 3.49599 13.9377 3.44527 13.8424C3.07192 13.1407 2.94658 12.2247 3.58134 11.7463C3.60224 11.7305 3.62323 11.7153 3.64426 11.7006C4.26714 11.2649 5.06903 11.5497 5.66206 12.0252L7.50142 13.5V5.5C7.50142 4.67157 8.173 4 9.00142 4C9.82985 4 10.5014 4.67157 10.5014 5.5V3.5C10.5014 2.67157 11.173 2 12.0014 2C12.8298 2 13.5014 2.67157 13.5014 3.5V5.5C13.5014 4.67157 14.173 4 15.0014 4C15.8298 4 16.5014 4.67157 16.5014 5.5V7.5C16.5014 6.67157 17.173 6 18.0014 6C18.8298 6 19.5014 6.67157 19.5014 7.5V13.8347Z',
  d5: 'M18 13.25C16.7574 13.25 15.75 14.2574 15.75 15.5V16.3878C15.6227 16.4278 15.4974 16.4808 15.375 16.5515C15.033 16.7489 14.7489 17.033 14.5514 17.375C14.3741 17.6822 14.308 18.0082 14.2782 18.3374C14.25 18.6487 14.25 19.0925 14.25 19.5322C14.25 19.972 14.25 20.3514 14.2782 20.6627C14.308 20.9919 14.3741 21.3178 14.5514 21.625C14.7489 21.9671 15.033 22.2511 15.375 22.4486C15.6822 22.6259 16.0082 22.692 16.3374 22.7218C16.6486 22.7501 17.028 22.75 17.4678 22.75H18.5322C18.972 22.75 19.3514 22.7501 19.6627 22.7218C19.9918 22.692 20.3178 22.6259 20.625 22.4486C20.967 22.2511 21.2511 21.9671 21.4486 21.625C21.6259 21.3178 21.692 20.9919 21.7218 20.6627C21.75 20.3514 21.75 19.972 21.75 19.5322C21.75 19.0925 21.75 18.6487 21.7218 18.3374C21.692 18.0082 21.6259 17.6822 21.4486 17.375C21.2511 17.033 20.967 16.7489 20.625 16.5515C20.5026 16.4808 20.3773 16.4278 20.25 16.3878V15.5C20.25 14.2574 19.2426 13.25 18 13.25ZM18.75 16.2662V15.5C18.75 15.0858 18.4142 14.75 18 14.75C17.5858 14.75 17.25 15.0858 17.25 15.5V16.2662H18.75Z',
  d6: 'M10.8198 9.81511C10.8198 10.0478 10.628 10.2363 10.3913 10.2363C10.1546 10.2363 9.96276 10.0478 9.96276 9.81511V4.5357C9.96276 3.82567 9.38717 3.25007 8.67714 3.25007C7.96711 3.25007 7.39151 3.82567 7.39151 4.5357V13.7055C7.39151 13.876 7.28696 14.0296 7.12666 14.0948C6.96636 14.1599 6.78193 14.1236 6.65947 14.0029L4.80657 12.1758C4.17496 11.553 3.13496 11.6097 2.57669 12.2977C2.37575 12.5454 2.26662 12.8414 2.25 13.1417C2.26038 13.3772 2.30472 13.6117 2.38314 13.8373C2.42727 13.9326 2.48221 14.0243 2.54799 14.1108L5.79413 18.5905C6.42252 19.4312 6.80903 19.9483 7.28152 20.3564C8.00145 20.9783 8.86434 21.4112 9.79271 21.6159C10.4021 21.7503 11.1661 21.7502 12.2133 21.7501C12.5201 21.7501 12.6736 21.7501 12.7579 21.6777C12.7816 21.6573 12.7962 21.6406 12.8134 21.6145C12.8743 21.5215 12.852 21.3508 12.8075 21.0093C12.7979 20.936 12.7904 20.8654 12.7843 20.7982C12.7499 20.4182 12.7499 19.8905 12.75 19.4862C12.7499 19.0821 12.7499 18.5823 12.7843 18.2021C12.8236 17.7685 12.9214 17.1985 13.2524 16.6251C13.456 16.2725 13.7148 15.9569 14.0175 15.6895C14.1334 15.5871 14.1914 15.5359 14.2175 15.4837C14.2435 15.4315 14.2496 15.3544 14.2618 15.2002C14.4146 13.2693 16.0299 11.7501 18 11.7501C18.6998 11.7501 19.3549 11.9418 19.9155 12.2756C20.0695 12.3672 20.1465 12.4131 20.197 12.3843C20.2476 12.3556 20.2476 12.2697 20.2476 12.0981V10.041C20.2484 10.0274 20.2487 10.0138 20.2487 10.0001V6.55907C20.2487 5.84878 19.6729 5.27297 18.9626 5.27297C18.2523 5.27297 17.6765 5.84878 17.6765 6.55907V9.81511C17.6765 10.0478 17.4846 10.2363 17.248 10.2363C17.0113 10.2363 16.8194 10.0478 16.8194 9.81511V4.5357C16.8194 3.82567 16.2438 3.25007 15.5338 3.25007C14.8238 3.25007 14.2482 3.82567 14.2482 4.5357V9.81511C14.2482 10.0478 14.0563 10.2363 13.8196 10.2363C13.583 10.2363 13.3911 10.0478 13.3911 9.81511L13.3915 2.53591C13.3916 1.82573 12.8159 1.25 12.1057 1.25C11.3955 1.25 10.8198 1.82569 10.8198 2.53583V9.81511Z',
  d7: 'M20 12V7.5C20 6.67157 19.3081 6 18.4546 6C17.6012 6 16.9093 6.67157 16.9093 7.5M10.7279 5.5C10.7279 4.67157 10.036 4 9.18254 4C8.32906 4 7.63718 4.67157 7.63718 5.5V13.4634L5.96676 11.8369C5.23434 11.1237 4.02789 11.1888 3.38083 11.9763C2.88572 12.5789 2.87204 13.4314 3.34758 14.0487L8.5 21H13M10.7279 5.5V3.5C10.7279 2.67157 11.4198 2 12.2732 2C13.1267 2 13.8186 2.67157 13.8186 3.5V5.5M10.7279 5.5V10M13.8186 5.5C13.8186 4.67157 14.5105 4 15.3639 4C16.2174 4 16.9093 4.67157 16.9093 5.5V7.5M13.8186 5.5V10M16.9093 7.5V10',
  d8: 'M15 17H21V22H15V17Z',
  d9: 'M16.5 17V15.5C16.5 14.6716 17.1716 14 18 14C18.8284 14 19.5 14.6716 19.5 15.5V17',
  d10: 'M10.5209 2.53825C10.5209 1.8377 11.1171 1.25 11.8776 1.25C12.6381 1.25 13.2343 1.8377 13.2343 2.53825V9.81967H14.0288V4.77869C14.0288 4.07813 14.6249 3.49044 15.3855 3.49044C16.146 3.49044 16.7421 4.07813 16.7421 4.77869V9.81967H17.5366V7.01913C17.5366 6.31857 18.1328 5.73087 18.8933 5.73087C19.6538 5.73087 20.25 6.31857 20.25 7.01913V12.1825C19.7276 11.9064 19.132 11.75 18.5 11.75C16.6858 11.75 15.1725 13.0383 14.825 14.75H13.25V21.75H7.79511L2.06644 14.1216L2.06196 14.1159C1.63526 13.5691 1.64729 12.8166 2.09192 12.2825C2.67787 11.5786 3.77729 11.5187 4.44282 12.1583L7.01306 14.6284V4.77869C7.01306 4.07813 7.60923 3.49044 8.36975 3.49044C9.13026 3.49044 9.72644 4.07813 9.72644 4.77869V9.81967H10.5209V2.53825Z',
  d11: 'M18.5 13.25C17.2574 13.25 16.25 14.2574 16.25 15.5V16.25H14.75V22.75H22.25V16.25H20.75V15.5C20.75 14.2574 19.7426 13.25 18.5 13.25ZM19.25 15.5V16.25H17.75V15.5C17.75 15.0858 18.0858 14.75 18.5 14.75C18.9142 14.75 19.25 15.0858 19.25 15.5Z',
};

export const IconHoldLocked02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-02-stroke-rounded IconHoldLocked02StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHoldLocked02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-02-duotone-rounded IconHoldLocked02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHoldLocked02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-02-twotone-rounded IconHoldLocked02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconHoldLocked02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-02-solid-rounded IconHoldLocked02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHoldLocked02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-02-bulk-rounded IconHoldLocked02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHoldLocked02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-02-stroke-sharp IconHoldLocked02StrokeSharp"
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

export const IconHoldLocked02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-locked-02-solid-sharp IconHoldLocked02SolidSharp"
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

export const iconPackOfHoldLocked02: TheIconSelfPack = {
  name: 'HoldLocked02',
  StrokeRounded: IconHoldLocked02StrokeRounded,
  DuotoneRounded: IconHoldLocked02DuotoneRounded,
  TwotoneRounded: IconHoldLocked02TwotoneRounded,
  SolidRounded: IconHoldLocked02SolidRounded,
  BulkRounded: IconHoldLocked02BulkRounded,
  StrokeSharp: IconHoldLocked02StrokeSharp,
  SolidSharp: IconHoldLocked02SolidSharp,
};