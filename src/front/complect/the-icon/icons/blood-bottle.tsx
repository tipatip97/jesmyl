import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 5V2',
  d2: 'M17 2H9C6.64298 2 5.46447 2 4.73223 2.73223C4 3.46447 4 4.64298 4 7V22',
  d3: 'M8 11.125C8 8.66719 8 7.43829 8.57782 6.5555C8.82796 6.17334 9.14939 5.84521 9.52376 5.58986C10.3885 5 11.5924 5 14 5C16.4076 5 17.6115 5 18.4762 5.58986C18.8506 5.84521 19.172 6.17334 19.4222 6.5555C20 7.43829 20 8.66719 20 11.125V12.875C20 15.3328 20 16.5617 19.4222 17.4445C19.172 17.8267 18.8506 18.1548 18.4762 18.4101C17.6115 19 16.4076 19 14 19C11.5924 19 10.3885 19 9.52376 18.4101C9.14939 18.1548 8.82796 17.8267 8.57782 17.4445C8 16.5617 8 15.3328 8 12.875V11.125Z',
  d4: 'M8 10.3722C14.8571 6.24278 13.5714 13.0046 20 10.3723',
  d5: 'M11 22C12.6569 22 14 20.6569 14 19',
  d6: 'M20 11.1247C20 10.9071 20 10.699 19.9996 10.5C19.9456 10.5163 17.5389 11.2384 16.0009 10.9997C15.1687 10.8706 14.6143 10.4268 14.0678 9.98935C13.481 9.51964 12.9034 9.05727 12.0009 8.99974C10.364 8.89539 8.00195 10.284 8.00195 10.284L8 12.8747C8 15.3325 8 16.5615 8.57782 17.4442C8.82796 17.8264 9.14939 18.1545 9.52376 18.4099C10.3885 18.9997 11.5924 18.9997 14 18.9997C16.4076 18.9997 17.6115 18.9997 18.4762 18.4099C18.8506 18.1545 19.172 17.8264 19.4222 17.4442C20 16.5615 20 15.3325 20 12.8747V11.1247Z',
  d7: 'M8 10.3722C14.8571 6.2428 13.5714 13.0046 20 10.3723',
  d8: 'M17 2H9C6.64298 2 5.46447 2 4.73223 2.73223C4 3.46447 4 4.64298 4 7V22M14 5V2',
  d9: 'M14.125 1C14.6773 1 15.125 1.44772 15.125 2V5C15.125 5.55228 14.6773 6 14.125 6C13.5727 6 13.125 5.55228 13.125 5V2C13.125 1.44772 13.5727 1 14.125 1Z',
  d10: 'M9.0564 1L17.125 1C17.6773 1 18.125 1.44772 18.125 2C18.125 2.55229 17.6773 3 17.125 3H9.125C7.91822 3 7.11373 3.00213 6.51507 3.08262C5.94518 3.15924 5.71369 3.29 5.56434 3.43934C5.415 3.58869 5.28424 3.82018 5.20762 4.39007C5.12713 4.98873 5.125 5.79322 5.125 7V22C5.125 22.5523 4.67729 23 4.125 23C3.57272 23 3.125 22.5523 3.125 22L3.125 6.9314C3.12496 5.81141 3.12493 4.87127 3.22545 4.12358C3.33189 3.3319 3.56724 2.60802 4.15013 2.02513C4.73302 1.44224 5.4569 1.20689 6.24858 1.10045C6.99626 0.999925 7.93641 0.99996 9.0564 1Z',
  d11: 'M14.073 4.25H14.177C15.2936 4.24998 16.2061 4.24997 16.9407 4.32661C17.7039 4.40623 18.3819 4.57675 18.9847 4.98987C19.4512 5.3095 19.8504 5.71932 20.1604 6.1951C20.5592 6.80724 20.7236 7.4942 20.8006 8.27076C20.8576 8.84496 20.8709 9.52619 20.874 10.3286C20.8756 10.3559 20.8757 10.3832 20.8743 10.4102C20.875 10.6315 20.875 10.8618 20.875 11.1015V12.8982C20.875 14.0458 20.875 14.9789 20.8006 15.7292C20.7236 16.5058 20.5592 17.1928 20.1604 17.8049C19.8504 18.2807 19.4512 18.6905 18.9847 19.0101C18.3819 19.4233 17.7039 19.5938 16.9407 19.6734C16.2061 19.75 15.2936 19.75 14.177 19.75H14.073C12.9564 19.75 12.0439 19.75 11.3093 19.6734C10.5461 19.5938 9.86813 19.4233 9.26526 19.0101C8.79882 18.6905 8.39963 18.2807 8.08965 17.8049C7.69083 17.1928 7.52643 16.5058 7.4494 15.7292C7.37497 14.9789 7.37499 14.0458 7.375 12.8982V11.1002C7.375 10.8591 7.375 10.6275 7.37569 10.405C7.3747 10.3819 7.37478 10.3587 7.37593 10.3357C7.379 9.53019 7.39228 8.84664 7.4494 8.27076C7.52643 7.4942 7.69083 6.80724 8.08965 6.1951C8.39963 5.71932 8.79882 5.3095 9.26526 4.98987C9.86813 4.57675 10.5461 4.40623 11.3093 4.32661C12.0439 4.24997 12.9564 4.24998 14.073 4.25ZM11.999 8.25036C11.2276 8.24049 10.3628 8.43217 9.33691 8.88633C9.34527 8.73593 9.35575 8.5953 9.36888 8.46288C9.43115 7.83513 9.54534 7.49925 9.70371 7.25619C9.87614 6.99152 10.0969 6.7656 10.3524 6.59048C10.5834 6.43218 10.9028 6.31699 11.5089 6.25375C12.1322 6.18872 12.9441 6.1875 14.1254 6.1875C15.3067 6.1875 16.1186 6.18872 16.7419 6.25375C17.3481 6.31699 17.6674 6.43218 17.8984 6.59048C18.154 6.7656 18.3747 6.99152 18.5471 7.25619C18.7055 7.49925 18.8197 7.83513 18.8819 8.46288C18.9231 8.87795 18.9382 9.37359 18.9437 9.9984C17.9315 10.3005 17.2175 10.2934 16.6665 10.1702C16.0164 10.0248 15.5261 9.71182 14.9253 9.3284C14.8478 9.2789 14.7684 9.22823 14.6865 9.17658C13.9926 8.73861 13.1608 8.26523 11.999 8.25036Z',
  d12: 'M14.125 18C14.6773 18 15.125 18.4477 15.125 19C15.125 21.2091 13.3341 23 11.125 23C10.5727 23 10.125 22.5523 10.125 22C10.125 21.4477 10.5727 21 11.125 21C12.2296 21 13.125 20.1046 13.125 19C13.125 18.4477 13.5727 18 14.125 18Z',
  d13: 'M15.0551 19.7477C14.7779 19.7493 14.4857 19.7493 14.178 19.7493H14.074C13.6853 19.7493 13.3213 19.7493 12.9809 19.7461C12.685 20.4808 11.9656 20.9993 11.125 20.9993C10.5727 20.9993 10.125 21.447 10.125 21.9993C10.125 22.5516 10.5727 22.9993 11.125 22.9993C13.0784 22.9993 14.7047 21.5992 15.0551 19.7477Z',
  d14: 'M15.125 2C15.125 1.44772 14.6773 1 14.125 1C13.5727 1 13.125 1.44772 13.125 2V4.25205C13.4235 4.24999 13.7396 4.25 14.074 4.25H14.178C14.5116 4.25 14.8271 4.24999 15.125 4.25203V2Z',
  d15: 'M17 2H4V22',
  d16: 'M8 19H20V5.00036L8 5V19Z',
  d17: 'M3.25 2.25C3.25 1.69772 3.69772 1.25 4.25 1.25H17.25V3.25H5.25V22.75H3.25V2.25Z',
  d18: 'M15 2V5H13V2L15 2Z',
  d19: 'M8.21431 4.25C7.95856 4.24999 7.71329 4.35205 7.53244 4.53373C7.3516 4.71541 7.25 4.96182 7.25 5.21875V18.7812C7.25 19.3163 7.68173 19.75 8.21429 19.75H19.7857C20.3183 19.75 20.75 19.3163 20.75 18.7812V5.2191C20.75 4.68409 20.3183 4.25037 19.7857 4.25035L8.21431 4.25ZM9.17773 6.1875L18.8206 6.18779V10.777C16.6033 11.3756 15.4782 10.6547 14.3935 9.95977C13.1409 9.15718 11.9423 8.38919 9.17773 9.72816V6.1875Z',
  d20: 'M15 18.75C15 20.9591 13.2091 22.75 11 22.75V20.75C12.1046 20.75 13 19.8546 13 18.75H15Z',
};

export const IconBloodBottleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bottle-stroke-rounded IconBloodBottleStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodBottleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bottle-duotone-rounded IconBloodBottleDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodBottleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bottle-twotone-rounded IconBloodBottleTwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodBottleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bottle-solid-rounded IconBloodBottleSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodBottleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bottle-bulk-rounded IconBloodBottleBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodBottleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bottle-stroke-sharp IconBloodBottleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
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
    </TheIconWrapper>
  );
};

export const IconBloodBottleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bottle-solid-sharp IconBloodBottleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBloodBottle: TheIconSelfPack = {
  name: 'BloodBottle',
  StrokeRounded: IconBloodBottleStrokeRounded,
  DuotoneRounded: IconBloodBottleDuotoneRounded,
  TwotoneRounded: IconBloodBottleTwotoneRounded,
  SolidRounded: IconBloodBottleSolidRounded,
  BulkRounded: IconBloodBottleBulkRounded,
  StrokeSharp: IconBloodBottleStrokeSharp,
  SolidSharp: IconBloodBottleSolidSharp,
};