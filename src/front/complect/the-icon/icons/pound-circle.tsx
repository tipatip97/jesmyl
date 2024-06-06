import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M15.0691 10.2343C15.0288 9.65438 14.7219 8.24931 13.5421 7.73018C12.0674 7.08127 10.1256 7.89786 9.94389 10.0012C9.85864 10.9881 10.3367 12.0229 11.0314 12.5341C11.6697 13.0039 12.6382 12.9801 13.5421 12.9801H8.52637M11.5563 12.9801C11.3863 13.6696 10.4532 15.6515 8.96629 16.4786H14.3772C14.5866 16.4786 15.1772 16.5332 16.0135 15.9332',
  d3: 'M15.0652 10.2343C15.0249 9.65437 14.718 8.2493 13.5382 7.73017C12.0635 7.08126 10.1217 7.89785 9.93998 10.0012C9.85473 10.9881 10.3328 12.0229 11.0275 12.5341C11.6658 13.0039 12.6343 12.9801 13.5382 12.9801H8.52246M11.5524 12.9801C11.3824 13.6696 10.4493 15.6515 8.96238 16.4786H14.3733C14.5827 16.4786 15.1733 16.5332 16.0096 15.9332',
  d4: 'M15.0496 10.238C15.0093 9.65805 14.7023 8.25297 13.5226 7.73384C12.0479 7.08493 10.106 7.90152 9.92436 10.0049C9.83911 10.9918 10.3172 12.0266 11.0119 12.5378C11.6502 13.0075 12.6187 12.9838 13.5226 12.9838H8.50684M11.5367 12.9838C11.3667 13.6732 10.4337 15.6552 8.94676 16.4823H14.3577C14.5671 16.4823 15.1577 16.5368 15.994 15.9369',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12.4706 8.25C11.4975 8.25 10.6324 9.10195 10.6324 10.25C10.6324 11.3981 11.4975 12.25 12.4706 12.25H13.5C13.9142 12.25 14.25 12.5858 14.25 13C14.25 13.4142 13.9142 13.75 13.5 13.75H12.0844C11.8109 14.3617 11.4826 14.9703 11.0963 15.5131C11.0394 15.593 10.9808 15.6721 10.9206 15.75H14.5242L14.5347 15.7496C14.5478 15.749 14.5711 15.7477 14.6025 15.7445C14.666 15.7382 14.7582 15.7253 14.8636 15.6991C15.0834 15.6446 15.3085 15.5462 15.4719 15.3841C15.766 15.0925 16.2409 15.0944 16.5325 15.3886C16.8242 15.6827 16.8222 16.1575 16.5281 16.4492C16.1033 16.8705 15.5931 17.0637 15.2246 17.155C15.0359 17.2018 14.8708 17.2253 14.7505 17.2372L14.5294 17.25H8.94118C8.59288 17.25 8.29041 17.0102 8.21095 16.6711C8.1315 16.332 8.29596 15.9828 8.60801 15.8281C9.04584 15.611 9.47373 15.2059 9.87428 14.6432C10.0692 14.3694 10.2507 14.068 10.4181 13.75H8.5C8.08579 13.75 7.75 13.4142 7.75 13C7.75 12.5858 8.08579 12.25 8.5 12.25H9.73169C9.35213 11.6778 9.13235 10.985 9.13235 10.25C9.13235 8.36049 10.5847 6.75 12.4706 6.75C14.3564 6.75 15.8088 8.36049 15.8088 10.25C15.8088 10.6642 15.473 11 15.0588 11C14.6446 11 14.3088 10.6642 14.3088 10.25C14.3088 9.10195 13.4436 8.25 12.4706 8.25Z',
  d6: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d7: 'M10.6324 10.25C10.6324 9.10195 11.4975 8.25 12.4706 8.25C13.4436 8.25 14.3088 9.10195 14.3088 10.25C14.3088 10.6642 14.6446 11 15.0588 11C15.473 11 15.8088 10.6642 15.8088 10.25C15.8088 8.36049 14.3564 6.75 12.4706 6.75C10.5847 6.75 9.13235 8.36049 9.13235 10.25C9.13235 10.985 9.35213 11.6778 9.73169 12.25H8.5C8.08579 12.25 7.75 12.5858 7.75 13C7.75 13.4142 8.08579 13.75 8.5 13.75H10.4181C10.2507 14.068 10.0692 14.3694 9.87428 14.6432C9.47373 15.2059 9.04584 15.611 8.60801 15.8281C8.29596 15.9828 8.1315 16.332 8.21095 16.6711C8.29041 17.0102 8.59288 17.25 8.94118 17.25H14.5294L14.7505 17.2372C14.8708 17.2253 15.0359 17.2018 15.2246 17.155C15.5931 17.0637 16.1033 16.8705 16.5281 16.4492C16.8222 16.1575 16.8242 15.6827 16.5325 15.3886C16.2409 15.0944 15.766 15.0925 15.4719 15.3841C15.3085 15.5462 15.0834 15.6446 14.8636 15.6991C14.7582 15.7253 14.666 15.7382 14.6025 15.7445C14.5711 15.7477 14.5478 15.749 14.5347 15.7496L14.5242 15.75H10.9206C10.9808 15.6721 11.0394 15.593 11.0963 15.5131C11.4826 14.9703 11.8109 14.3617 12.0844 13.75H13.5C13.9142 13.75 14.25 13.4142 14.25 13C14.25 12.5858 13.9142 12.25 13.5 12.25H12.4706C11.4975 12.25 10.6324 11.3981 10.6324 10.25Z',
  d8: 'M15.0496 10.244C15.0496 8.36165 13.4524 7.21096 11.8137 7.61024C9.77576 8.20146 9.72528 10.4902 10.1293 11.4126C10.7477 12.6996 11.6772 12.9266 12.2873 12.9904C10.9346 12.7915 11.3967 15.0736 8.9973 16.4639C8.98843 16.469 8.99142 16.4831 9.00168 16.4831H14.5466C15.121 16.4831 15.8259 16.1056 16.0021 15.9245M8.51172 12.9904H13.5326',
  d9: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10.6327 10.25C10.6327 9.10195 11.4978 8.25 12.4709 8.25C13.4439 8.25 14.3091 9.10195 14.3091 10.25H15.8091C15.8091 8.36049 14.3567 6.75 12.4709 6.75C10.585 6.75 9.13266 8.36049 9.13266 10.25C9.13266 10.985 9.35243 11.6778 9.732 12.25H8.5003V13.75H10.4184C10.251 14.068 10.0695 14.3694 9.87458 14.6432C9.47403 15.2059 9.04614 15.611 8.60831 15.8281C8.29626 15.9828 8.1318 16.332 8.21126 16.6711C8.29071 17.0102 8.59318 17.25 8.94148 17.25H14.5297V16.5C14.5297 17.25 14.5305 17.25 14.5307 17.25L14.5318 17.25L14.5343 17.25L14.5402 17.2499L14.5559 17.2497C14.5682 17.2494 14.5838 17.2489 14.6026 17.2481C14.64 17.2464 14.6902 17.2432 14.7508 17.2372C14.8711 17.2253 15.0362 17.2018 15.2249 17.155C15.5934 17.0637 16.1036 16.8705 16.5284 16.4492L15.4722 15.3841C15.3088 15.5462 15.0837 15.6446 14.8639 15.6991C14.7585 15.7253 14.6663 15.7382 14.6028 15.7445C14.5714 15.7477 14.5481 15.749 14.535 15.7496L14.5245 15.75H10.9209C10.9811 15.6721 11.0397 15.593 11.0966 15.5131C11.4829 14.9703 11.8112 14.3617 12.0847 13.75H13.5003V12.25H12.4709C11.4978 12.25 10.6327 11.3981 10.6327 10.25Z',
};

export const IconPoundCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-circle-stroke-rounded IconPoundCircleStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-circle-duotone-rounded IconPoundCircleDuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-circle-twotone-rounded IconPoundCircleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-circle-solid-rounded IconPoundCircleSolidRounded"
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

export const IconPoundCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-circle-bulk-rounded IconPoundCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPoundCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-circle-stroke-sharp IconPoundCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-circle-solid-sharp IconPoundCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPoundCircle: TheIconSelfPack = {
  name: 'PoundCircle',
  StrokeRounded: IconPoundCircleStrokeRounded,
  DuotoneRounded: IconPoundCircleDuotoneRounded,
  TwotoneRounded: IconPoundCircleTwotoneRounded,
  SolidRounded: IconPoundCircleSolidRounded,
  BulkRounded: IconPoundCircleBulkRounded,
  StrokeSharp: IconPoundCircleStrokeSharp,
  SolidSharp: IconPoundCircleSolidSharp,
};