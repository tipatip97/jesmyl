import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 8.58496V13.5004C20 17.2716 20 19.1573 18.8284 20.3288C18.0203 21.137 16.8723 21.3877 15 21.4654M4 8.58496V13.5004C4 17.2716 4 19.1573 5.17157 20.3288C6.23465 21.3919 7.88563 21.4904 10.9998 21.4995C11.5521 21.5011 12 21.0527 12 20.5004V17.5004',
  d2: 'M22 10.5003L17.6569 6.33572C14.9902 3.77873 13.6569 2.50024 12 2.50024C10.3431 2.50024 9.00981 3.77873 6.34315 6.33572L2 10.5003',
  d3: 'M14.001 9.00024V11.5002M10.001 11.5002V9.00024M8.50553 12.3802C8.46629 11.9053 8.87602 11.5002 9.39552 11.5002H14.6104C15.1299 11.5002 15.5396 11.9053 15.5004 12.3802L15.3931 13.6776C15.316 14.6103 14.9786 15.5092 14.4133 16.2878L14.0628 16.7705C13.7319 17.2263 13.1741 17.5002 12.5768 17.5002H11.4291C10.8318 17.5002 10.2741 17.2263 9.94308 16.7705L9.59262 16.2878C9.02726 15.5092 8.68984 14.6103 8.61276 13.6776L8.50553 12.3802Z',
  d4: 'M20.002 8.58521V13.5007C20.002 17.2719 20.002 19.1576 18.8304 20.3291C18.0223 21.1373 16.8743 21.388 15.002 21.4657M4.00195 8.58521V13.5007C4.00195 17.2719 4.00195 19.1576 5.17352 20.3291C6.2366 21.3922 7.88758 21.4907 11.0018 21.4998C11.5541 21.5014 12.002 21.053 12.002 20.5007V17.5007',
  d5: 'M22.002 10.5005L17.6589 6.33597C14.9922 3.77898 13.6589 2.50049 12.002 2.50049C10.3451 2.50049 9.01176 3.77898 6.3451 6.33597L2.00195 10.5005',
  d6: 'M11.0018 21.5004C7.88758 21.4913 6.2366 21.3928 5.17352 20.3298C4.00195 19.1582 4.00195 17.2726 4.00195 13.5013V8.58323L6.3451 6.33646C9.01176 3.77947 10.3451 2.50098 12.002 2.50098C13.6589 2.50098 14.9922 3.77947 17.6589 6.33646L20.002 8.58323V13.5013C20.002 17.2726 20.002 19.1582 18.8304 20.3298C18.0223 21.1379 16.8743 21.3886 15.002 21.4664L11.0018 21.5004ZM9.39746 11.5005H14.6123C15.1318 11.5005 15.5416 11.9056 15.5023 12.3805L15.3951 13.6779C15.318 14.6106 14.9806 15.5095 14.4152 16.2881L14.0648 16.7708C13.7338 17.2266 13.1761 17.5005 12.5788 17.5005H11.4311C10.8338 17.5005 10.276 17.2266 9.94502 16.7708L9.59457 16.2881C9.02921 15.5095 8.69178 14.6106 8.6147 13.6779L8.50748 12.3805C8.46824 11.9056 8.87796 11.5005 9.39746 11.5005Z',
  d7: 'M14.002 9V11.5M10.002 11.5V9M8.50651 12.38C8.46727 11.9051 8.877 11.5 9.3965 11.5H14.6114C15.1309 11.5 15.5406 11.9051 15.5014 12.38L15.3941 13.6774C15.317 14.6101 14.9796 15.509 14.4143 16.2876L14.0638 16.7703C13.7329 17.2261 13.1751 17.5 12.5778 17.5H11.4301C10.8328 17.5 10.2751 17.2261 9.94406 16.7703L9.5936 16.2876C9.02824 15.509 8.69082 14.6101 8.61374 13.6774L8.50651 12.38Z',
  d8: 'M20 8.58496V13.5005C20 17.2717 20 19.1573 18.8284 20.3289C18.0203 21.1371 16.8723 21.3877 15 21.4655M4 8.58496V13.5005C4 17.2717 4 19.1573 5.17157 20.3289C6.23465 21.392 7.88563 21.4904 10.9998 21.4995',
  d9: 'M22 10.5005L17.6569 6.33597C14.9902 3.77898 13.6569 2.50049 12 2.50049C10.3431 2.50049 9.00981 3.77898 6.34315 6.33597L2 10.5005',
  d10: 'M10.9998 21.4995C12.4598 21.2096 11.811 20.6474 12.0056 17.6846M13.998 9.00049V11.5005M9.99805 11.5005V9.00049M8.5026 12.3805C8.46336 11.9056 8.87309 11.5005 9.39259 11.5005H14.6075C15.127 11.5005 15.5367 11.9056 15.4975 12.3805L15.3902 13.6779C15.3131 14.6106 14.9757 15.5095 14.4104 16.2881L14.0599 16.7708C13.729 17.2266 13.1712 17.5005 12.5739 17.5005H11.4262C10.8289 17.5005 10.2712 17.2266 9.94015 16.7708L9.58969 16.2881C9.02433 15.5095 8.68691 14.6106 8.60983 13.6779L8.5026 12.3805Z',
  d11: 'M20.75 10.3415L21.4809 11.0423C21.7799 11.329 22.2547 11.319 22.5413 11.0201C22.828 10.7211 22.8181 10.2463 22.5191 9.95963L18.1359 5.75669C16.8365 4.51078 15.8068 3.52336 14.8926 2.85454C13.9505 2.16533 13.0488 1.75098 12 1.75098C10.9512 1.75098 10.0495 2.16533 9.10742 2.85454C8.19322 3.52336 7.16347 4.51078 5.86414 5.75668L1.48092 9.95963C1.18194 10.2463 1.17197 10.7211 1.45866 11.0201C1.74534 11.319 2.2201 11.329 2.51908 11.0423L3.25 10.3415L3.25 13.5574C3.24998 15.3952 3.24997 16.8508 3.40314 17.99C3.56076 19.1624 3.89288 20.1114 4.64124 20.8597C5.31931 21.5378 6.16309 21.875 7.19106 22.0494C8.19721 22.2201 9.45057 22.2455 10.9976 22.25L11.2503 22.2479V18.244C10.4951 18.1936 9.78309 17.8261 9.33649 17.211L8.98603 16.7283C8.34243 15.8419 7.95433 14.8127 7.86562 13.7392L7.75839 12.4418C7.68187 11.5158 8.4205 10.8285 9.25129 10.7563V9C9.25129 8.58579 9.58708 8.25 10.0013 8.25C10.4155 8.25 10.7513 8.58579 10.7513 9V10.75H13.2513V9C13.2513 8.58579 13.5871 8.25 14.0013 8.25C14.4155 8.25 14.7513 8.58579 14.7513 9V10.7559C15.5837 10.8263 16.3247 11.5143 16.2481 12.4418L16.1409 13.7392C16.0522 14.8127 15.6641 15.8419 15.0205 16.7283L14.67 17.211C14.2222 17.8276 13.5077 18.1955 12.7503 18.2444V22.2352L15.0064 22.216C15.01 22.216 15.0136 22.2159 15.0172 22.2158C15.0218 22.2157 15.0265 22.2156 15.0311 22.2154C16.9126 22.1372 18.3299 21.8886 19.3588 20.8597C20.1071 20.1114 20.4392 19.1624 20.5969 17.99C20.75 16.8508 20.75 15.3952 20.75 13.5574V13.5574V10.3415Z',
  d12: 'M21.4809 11.0423L20.75 10.3415V13.5574V13.5574C20.75 15.3952 20.75 16.8508 20.5969 17.99C20.4392 19.1624 20.1071 20.1114 19.3588 20.8597C18.3299 21.8886 16.9126 22.1372 15.0311 22.2154C15.0229 22.2157 15.0146 22.2159 15.0064 22.216L10.9976 22.25C9.45057 22.2455 8.19721 22.2201 7.19106 22.0494C6.16309 21.875 5.31931 21.5378 4.64124 20.8597C3.89288 20.1114 3.56076 19.1624 3.40314 17.99C3.24997 16.8508 3.24998 15.3952 3.25 13.5574L3.25 10.3415L2.51908 11.0423C2.2201 11.329 1.74534 11.319 1.45866 11.0201C1.17197 10.7211 1.18194 10.2463 1.48092 9.95963L5.86414 5.75668C7.16347 4.51078 8.19322 3.52336 9.10742 2.85454C10.0495 2.16533 10.9512 1.75098 12 1.75098C13.0488 1.75098 13.9505 2.16533 14.8926 2.85454C15.8068 3.52336 16.8365 4.51078 18.1359 5.75669L22.5191 9.95963C22.8181 10.2463 22.828 10.7211 22.5413 11.0201C22.2547 11.319 21.7799 11.329 21.4809 11.0423Z',
  d13: 'M10.0013 8.25C10.4155 8.25 10.7513 8.58579 10.7513 9V10.75H13.2513V9C13.2513 8.58579 13.5871 8.25 14.0013 8.25C14.4155 8.25 14.7513 8.58579 14.7513 9V10.7559C15.5837 10.8263 16.3247 11.5143 16.2481 12.4418L16.1409 13.7392C16.0522 14.8127 15.6641 15.8419 15.0205 16.7283L14.67 17.211C14.2222 17.8276 13.5077 18.1955 12.7503 18.2444V22.2352L11.2503 22.2479V18.244C10.4951 18.1936 9.78309 17.8261 9.33649 17.211L8.98603 16.7283C8.34243 15.8419 7.95433 14.8127 7.86562 13.7392L7.75839 12.4418C7.68187 11.5158 8.4205 10.8285 9.25129 10.7563V9C9.25129 8.58579 9.58708 8.25 10.0013 8.25Z',
  d14: 'M20 8.5V21.4994H15M4 8.5V21.4994H12V17.5',
  d15: 'M22 10L12 2.5L2 10',
  d16: 'M14.0142 12.0226H15.4861V15.0276L13.5048 17.9901H10.5117L8.49609 15.0276V12.0226H9.97734M14.0142 12.0226V9.01074M14.0142 12.0226H9.97734M9.97734 12.0226L9.9775 9.01074',
  d17: 'M21.85 10.9376L22.75 9.73755L12.0002 1.75024L1.25 9.73794L2.15 10.9379L3.2502 10.1877L3.2501 21.5003C3.2501 21.9145 3.58588 22.2503 4.0001 22.2503H11.25V18.7501H10.0986L7.75024 15.2271L7.75 11.2501H9.25121V9.00024H10.7512V11.2501H13.2512V9.00024H14.7512V11.2501H16.2502V15.2272L13.9014 18.7501H12.75V22.2503H19.7501C20.3024 22.2503 20.7501 21.8025 20.7501 21.2503L20.7502 10.1877L21.85 10.9376Z',
};

export const IconElectricHome01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-01-stroke-rounded IconElectricHome01StrokeRounded"
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

export const IconElectricHome01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-01-duotone-rounded IconElectricHome01DuotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricHome01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-01-twotone-rounded IconElectricHome01TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricHome01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-01-solid-rounded IconElectricHome01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricHome01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-01-bulk-rounded IconElectricHome01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconElectricHome01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-01-stroke-sharp IconElectricHome01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricHome01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-home-01-solid-sharp IconElectricHome01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfElectricHome01: TheIconSelfPack = {
  name: 'ElectricHome01',
  StrokeRounded: IconElectricHome01StrokeRounded,
  DuotoneRounded: IconElectricHome01DuotoneRounded,
  TwotoneRounded: IconElectricHome01TwotoneRounded,
  SolidRounded: IconElectricHome01SolidRounded,
  BulkRounded: IconElectricHome01BulkRounded,
  StrokeSharp: IconElectricHome01StrokeSharp,
  SolidSharp: IconElectricHome01SolidSharp,
};