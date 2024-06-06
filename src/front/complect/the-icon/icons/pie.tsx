import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.7578 10.1693C21.5 10.1693 22 11.1878 22 12.027C22 14.3396 18.5658 14.7345 18 12.5287C17.4968 14.4904 14.5032 14.4904 14 12.5287C13.4968 14.4904 10.5032 14.4904 10 12.5287C9.49677 14.4904 6.50323 14.4904 6 12.5287C5.43417 14.7345 2 14.3396 2 12.027C2 11.1878 2.5 10.1693 3.24224 10.1693C4.18202 6.63181 7.74641 4 12 4C16.2536 4 19.818 6.63181 20.7578 10.1693Z',
  d2: 'M15 7.5L15.5 8.5',
  d3: 'M9 7.5L8.5 8.5',
  d4: 'M12 7V8',
  d5: 'M3.5 14L3.94872 15.0769C4.94302 17.4632 5.44017 18.6564 6.44787 19.3282C7.45556 20 8.74815 20 11.3333 20H12.6667C15.2518 20 16.5444 20 17.5521 19.3282C18.5598 18.6564 19.057 17.4632 20.0513 15.0769L20.5 14',
  d6: 'M10.0006 12.5312C9.4974 14.493 6.50387 14.493 6.00063 12.5312C5.68076 13.7782 4.44425 14.1941 3.42969 13.9022L3.50063 14.0026L3.94935 15.0795C4.94365 17.4658 5.4408 18.659 6.4485 19.3308C7.4562 20.0026 8.74879 20.0026 11.334 20.0026H12.6673C15.2525 20.0026 16.5451 20.0026 17.5528 19.3308C18.5605 18.659 19.0576 17.4658 20.0519 15.0795L20.0519 15.0795L20.5006 14.0026L20.5702 13.9026C19.5559 14.1937 18.3204 13.7777 18.0006 12.5312C17.4974 14.493 14.5039 14.493 14.0006 12.5312C13.4974 14.493 10.5039 14.493 10.0006 12.5312Z',
  d7: 'M2.66302 9.33755C3.91274 5.75747 7.67266 3.25 12 3.25C16.3273 3.25 20.0873 5.75747 21.337 9.33755C21.7682 9.54352 22.0788 9.89723 22.2736 10.2126C22.5824 10.7125 22.75 11.3303 22.75 11.9008C22.75 13.6001 21.4259 14.5647 20.1426 14.7165C19.3713 14.8077 18.5099 14.6175 17.8549 14.0935C17.2923 14.5374 16.5805 14.75 15.9091 14.75C15.2342 14.75 14.5185 14.5352 13.9545 14.0866C13.3906 14.5352 12.6749 14.75 12 14.75C11.3251 14.75 10.6094 14.5352 10.0455 14.0866C9.48148 14.5352 8.76581 14.75 8.09091 14.75C7.4195 14.75 6.70774 14.5374 6.14512 14.0935C5.49012 14.6175 4.62865 14.8077 3.85745 14.7165C2.57406 14.5647 1.25 13.6001 1.25 11.9008C1.25 11.3303 1.41759 10.7125 1.72638 10.2126C1.92119 9.89723 2.23175 9.54352 2.66302 9.33755ZM12 5.16667C8.22676 5.16667 5.17587 7.45026 4.38579 10.3666C4.2769 10.7686 3.91708 11.0536 3.49789 11.0773C3.47775 11.095 3.44334 11.1325 3.39814 11.2056C3.28127 11.3948 3.20455 11.6671 3.20455 11.9008C3.20455 12.4179 3.55855 12.7506 4.09146 12.8136C4.63153 12.8775 5.06264 12.6294 5.18974 12.1435C5.30061 11.7197 5.69016 11.4233 6.13636 11.4233C6.58257 11.4233 6.97212 11.7197 7.08299 12.1435C7.19404 12.5681 7.57843 12.8333 8.09091 12.8333C8.60339 12.8333 8.98777 12.5681 9.09883 12.1435C9.2097 11.7197 9.59925 11.4233 10.0455 11.4233C10.4917 11.4233 10.8812 11.7197 10.9921 12.1435C11.1031 12.5681 11.4875 12.8333 12 12.8333C12.5125 12.8333 12.8969 12.5681 13.0079 12.1435C13.1188 11.7197 13.5083 11.4233 13.9545 11.4233C14.4008 11.4233 14.7903 11.7197 14.9012 12.1435C15.0122 12.5681 15.3966 12.8333 15.9091 12.8333C16.4216 12.8333 16.806 12.5681 16.917 12.1435C17.0279 11.7197 17.4174 11.4233 17.8636 11.4233C18.3098 11.4233 18.6994 11.7197 18.8103 12.1435C18.9374 12.6294 19.3685 12.8775 19.9085 12.8136C20.4415 12.7506 20.7955 12.4179 20.7955 11.9008C20.7955 11.6671 20.7187 11.3948 20.6019 11.2056C20.5567 11.1325 20.5223 11.095 20.5021 11.0773C20.0829 11.0536 19.7231 10.7686 19.6142 10.3666C18.8241 7.45026 15.7732 5.16667 12 5.16667ZM20.4819 11.0632C20.482 11.0628 20.4851 11.064 20.4909 11.0682C20.4847 11.0657 20.4818 11.0636 20.4819 11.0632ZM3.51811 11.0632C3.5182 11.0636 3.51529 11.0657 3.50913 11.0682C3.51494 11.064 3.51802 11.0628 3.51811 11.0632Z',
  d8: 'M5.90609 11.7833C6.28102 11.736 6.63259 11.975 6.72649 12.341C6.87462 12.9185 7.38817 13.2487 8.00001 13.2487C8.61185 13.2487 9.1254 12.9185 9.27353 12.341C9.35862 12.0093 9.65757 11.7774 10 11.7774C10.3424 11.7774 10.6414 12.0093 10.7265 12.341C10.8746 12.9185 11.3882 13.2487 12 13.2487C12.6119 13.2487 13.1254 12.9185 13.2735 12.341C13.3586 12.0093 13.6576 11.7774 14 11.7774C14.3424 11.7774 14.6414 12.0093 14.7265 12.341C14.8746 12.9185 15.3882 13.2487 16 13.2487C16.6119 13.2487 17.1254 12.9185 17.2735 12.341C17.3632 11.9914 17.6892 11.7553 18.0493 11.779C18.4095 11.8028 18.7016 12.0796 18.7447 12.438C18.7666 12.6211 18.872 12.8985 19.0896 13.086C19.2726 13.2437 19.6278 13.4193 20.3422 13.2655C20.6151 13.2068 20.898 13.3045 21.0765 13.519C21.2551 13.7336 21.2997 14.0296 21.1923 14.2872L20.7271 15.4037L20.7271 15.4038C20.244 16.5633 19.858 17.4895 19.4638 18.2059C19.0563 18.9464 18.6081 19.5244 17.9682 19.951C17.3282 20.3776 16.6224 20.569 15.782 20.6604C14.9692 20.7488 13.9658 20.7488 12.7096 20.7487H12.7096H11.2904H11.2904C10.0342 20.7488 9.03084 20.7488 8.21798 20.6604C7.37764 20.569 6.67177 20.3776 6.03185 19.951C5.39193 19.5244 4.94377 18.9464 4.53621 18.2059C4.14198 17.4895 3.75607 16.5633 3.27294 15.4038L3.27293 15.4038L2.8077 14.2872C2.70073 14.0305 2.74462 13.7356 2.92173 13.5212C3.09884 13.3067 3.38008 13.2079 3.65241 13.2644C3.99131 13.3347 4.46228 13.3459 4.80496 13.2206C4.96374 13.1625 5.06397 13.0869 5.1262 13.0038C5.18434 12.9261 5.25001 12.7884 5.25001 12.5274C5.25001 12.1495 5.53117 11.8306 5.90609 11.7833Z',
  d9: 'M12.0002 7C12.5525 7 13.0002 7.44772 13.0002 8V9C13.0002 9.55228 12.5525 10 12.0002 10C11.4479 10 11.0002 9.55228 11.0002 9V8C11.0002 7.44772 11.4479 7 12.0002 7ZM9.44743 7.60557C9.94141 7.85256 10.1416 8.45324 9.89465 8.94721L9.39465 9.94721C9.14766 10.4412 8.54698 10.6414 8.05301 10.3944C7.55903 10.1474 7.3588 9.54676 7.60579 9.05279L8.10579 8.05279C8.35278 7.55881 8.95345 7.35858 9.44743 7.60557ZM14.553 7.60557C15.047 7.35858 15.6477 7.55881 15.8946 8.05279L16.3946 9.05279C16.6416 9.54676 16.4414 10.1474 15.9474 10.3944C15.4535 10.6414 14.8528 10.4412 14.6058 9.94721L14.1058 8.94721C13.8588 8.45324 14.059 7.85256 14.553 7.60557Z',
  d10: 'M12 4C21 4 22 12.027 22 12.027C22 14.3396 18.5658 14.7345 18 12.5287C17.4968 14.4904 14.5032 14.4904 14 12.5287C13.7484 13.5096 12.8742 14 12 14C11.1258 14 10.2516 13.5096 10 12.5287C9.49677 14.4904 6.50323 14.4904 6 12.5287C5.43417 14.7345 2 14.3396 2 12.027C2 12.027 3 4 12 4Z',
  d11: 'M15 7.5L16 9',
  d12: 'M9 7.5L8 9',
  d13: 'M12 7V9',
  d14: 'M3.5 14L6 20H18L20.5 14',
  d15: 'M3.6123 16.2164L5.30899 20.2885C5.42544 20.5679 5.69852 20.75 6.00129 20.75H18.0013C18.3041 20.75 18.5772 20.5679 18.6936 20.2885L20.3904 16.2162C19.6132 16.2934 18.7612 16.1688 17.9896 15.7893C17.3508 16.104 16.6575 16.2501 16.0004 16.2501C15.3397 16.2501 14.6422 16.1024 14.0004 15.7839C13.3586 16.1024 12.6611 16.2501 12.0004 16.2501C11.3397 16.2501 10.6422 16.1024 10.0004 15.7839C9.35857 16.1024 8.66107 16.2501 8.00039 16.2501C7.34332 16.2501 6.64999 16.104 6.0112 15.7893C5.24022 16.1685 4.389 16.2932 3.6123 16.2164Z',
  d16: 'M20.302 14.7168C21.5192 14.5701 22.75 13.6459 22.75 12.027C22.7467 12.0065 22.7408 11.9647 22.7334 11.9129C22.7163 11.7917 22.6915 11.6159 22.6742 11.5317C22.6249 11.2909 22.5448 10.9529 22.4192 10.5497C22.1688 9.7457 21.7339 8.66981 20.9937 7.58956C19.4923 5.39827 16.7702 3.25 12 3.25C7.22983 3.25 4.50775 5.39827 3.0063 7.58956C2.26613 8.66981 1.83122 9.7457 1.5808 10.5497C1.45525 10.9529 1.37505 11.2909 1.32578 11.5317C1.30853 11.616 1.28375 11.7912 1.26662 11.9124C1.25927 11.9644 1.25333 12.0064 1.25 12.027C1.25 13.6459 2.48077 14.5701 3.69802 14.7168C4.49453 14.8129 5.38066 14.5874 6.00735 13.9814C6.55433 14.5004 7.29602 14.75 8 14.75C8.70714 14.75 9.45232 14.4981 10 13.9744C10.5477 14.4981 11.2929 14.75 12 14.75C12.7071 14.75 13.4523 14.4981 14 13.9744C14.5477 14.4981 15.2929 14.75 16 14.75C16.704 14.75 17.4457 14.5004 17.9927 13.9814C18.6193 14.5874 19.5055 14.8129 20.302 14.7168ZM15.625 7.08398L16.625 8.58398L15.3769 9.41603L14.3769 7.91603L15.625 7.08398ZM7.375 8.58398L8.375 7.08398L9.62308 7.91603L8.62308 9.41603L7.375 8.58398ZM11.25 7V9H12.75V7H11.25Z',
};

export const IconPieStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-stroke-rounded IconPieStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPieDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-duotone-rounded IconPieDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPieTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-twotone-rounded IconPieTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPieSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-solid-rounded IconPieSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPieBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-bulk-rounded IconPieBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPieStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-stroke-sharp IconPieStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPieSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-solid-sharp IconPieSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPie: TheIconSelfPack = {
  name: 'Pie',
  StrokeRounded: IconPieStrokeRounded,
  DuotoneRounded: IconPieDuotoneRounded,
  TwotoneRounded: IconPieTwotoneRounded,
  SolidRounded: IconPieSolidRounded,
  BulkRounded: IconPieBulkRounded,
  StrokeSharp: IconPieStrokeSharp,
  SolidSharp: IconPieSolidSharp,
};