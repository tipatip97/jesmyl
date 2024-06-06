import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 5C17.7712 5 19.6569 5 20.8284 6.2448C22 7.48959 22 9.49306 22 13.5C22 17.5069 22 19.5104 20.8284 20.7552C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7552C2 19.5104 2 17.5069 2 13.5C2 9.49306 2 7.48959 3.17157 6.2448C4.34315 5 6.22876 5 10 5L14 5Z',
  d2: 'M17.3965 11.2504C18.6389 13.4023 17.9016 16.154 15.7496 17.3965C13.5977 18.6389 10.846 17.9016 9.60354 15.7496M17.3965 11.2504C16.154 9.09842 13.4023 8.3611 11.2504 9.60354C9.09842 10.846 8.3611 13.5977 9.60354 15.7496M17.3965 11.2504L9.60354 15.7496',
  d3: 'M17 2L7 5',
  d4: 'M6 9H6.00898',
  d5: 'M20.8284 6.2448C19.6569 5 17.7712 5 14 5H10C6.22876 5 4.34315 5 3.17157 6.2448C2 7.48959 2 9.49306 2 13.5C2 17.5069 2 19.5104 3.17157 20.7552C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7552C22 19.5104 22 17.5069 22 13.5C22 9.49306 22 7.48959 20.8284 6.2448ZM15.7496 17.3965C17.9016 16.154 18.6389 13.4023 17.3965 11.2504C16.154 9.09842 13.4023 8.3611 11.2504 9.60354C9.09842 10.846 8.3611 13.5977 9.60354 15.7496C10.846 17.9016 13.5977 18.6389 15.7496 17.3965Z',
  d6: 'M16.6154 1.32718C17.1252 1.11477 17.7106 1.35584 17.9231 1.86565C18.1355 2.37545 17.8944 2.96092 17.3846 3.17334L13.3237 4.86538C12.9655 5.01461 12.7865 5.08922 12.8026 5.16961C12.8186 5.25 13.0126 5.25 13.4006 5.25H14.0564C15.8942 5.24999 17.3498 5.24997 18.489 5.40314C19.6614 5.56076 20.6104 5.89288 21.3588 6.64124C22.1071 7.38961 22.4392 8.33856 22.5969 9.51098C22.75 10.6502 22.75 12.1058 22.75 13.9435V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0565 22.75H9.94359C8.10585 22.75 6.65018 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564V14.0564V13.9436V13.9436C1.24999 12.1058 1.24997 10.6502 1.40314 9.51098C1.56076 8.33856 1.89288 7.38961 2.64124 6.64124C3.38961 5.89288 4.33856 5.56076 5.51098 5.40314C5.96316 5.34234 6.46518 5.30568 7.02117 5.28357H7.02118C7.07596 5.28139 7.10337 5.2803 7.12943 5.27455C7.1555 5.26879 7.18046 5.2584 7.23036 5.23761L16.6154 1.32718ZM11.2674 9.19727C13.8976 7.6787 17.2609 8.57989 18.7795 11.2101C20.0059 13.3344 19.6541 15.9367 18.0878 17.6594C17.7144 18.0702 17.272 18.4311 16.7654 18.7236C14.1352 20.2422 10.7719 19.341 9.2533 16.7107C8.02746 14.5875 8.37839 11.9866 9.94279 10.264C10.3166 9.85207 10.7598 9.49032 11.2674 9.19727ZM5.45487 10.4997C4.91572 10.4874 4.48242 10.0445 4.48242 9.5C4.48242 8.94772 4.92814 8.5 5.47795 8.5H5.48689C5.49583 8.5 5.50475 8.50012 5.51363 8.50035C6.05588 8.51192 6.49189 8.9551 6.49189 9.50012C6.49189 10.0524 6.04418 10.5001 5.49189 10.5001H5.48291C5.47353 10.5001 5.46418 10.5 5.45487 10.4997ZM12.2658 10.9303C12.2122 10.9613 12.1598 10.9934 12.1084 11.0267C11.0826 11.693 10.5137 12.8189 10.5172 13.9736C10.5182 14.3107 10.5187 14.4793 10.6686 14.5655C10.8185 14.6517 10.982 14.5574 11.309 14.3686L15.7251 11.8189C15.8256 11.7609 15.9107 11.7117 15.9803 11.6665C16.1361 11.5651 16.2141 11.4832 16.2143 11.3638C16.2145 11.1909 16.0688 11.1062 15.7773 10.9368C14.7286 10.3271 13.3917 10.2803 12.2658 10.9303ZM12.3074 16.1016C12.2069 16.1597 12.1218 16.2088 12.0522 16.254C11.8963 16.3554 11.8184 16.4374 11.8182 16.5567C11.8179 16.7296 11.9637 16.8143 12.2551 16.9838C13.3038 17.5935 14.6408 17.6402 15.7666 16.9902C15.8202 16.9593 15.8727 16.9271 15.924 16.8938C16.9499 16.2275 17.5188 15.1017 17.5153 13.9469C17.5143 13.6098 17.5137 13.4412 17.3639 13.355C17.214 13.2688 17.0505 13.3632 16.7235 13.552L12.3074 16.1016Z',
  d7: 'M15.7251 11.8189C16.0521 11.6301 16.2156 11.5357 16.2158 11.3628C16.2161 11.1899 16.0704 11.1052 15.7789 10.9357C14.7302 10.326 13.3932 10.2793 12.2674 10.9293C11.1415 11.5793 10.5135 12.7605 10.5172 13.9736C10.5182 14.3107 10.5187 14.4793 10.6686 14.5655C10.8185 14.6517 10.982 14.5574 11.309 14.3686L15.7251 11.8189Z',
  d8: 'M17.5168 13.9459C17.5158 13.6088 17.5153 13.4402 17.3654 13.354C17.2156 13.2678 17.0521 13.3622 16.7251 13.551L12.309 16.1006C11.982 16.2894 11.8185 16.3838 11.8182 16.5567C11.8179 16.7296 11.9637 16.8143 12.2551 16.9838C13.3038 17.5935 14.6408 17.6402 15.7666 16.9902C16.8925 16.3402 17.5205 15.159 17.5168 13.9459Z',
  d9: 'M16.6154 1.32718C17.1252 1.11477 17.7106 1.35584 17.9231 1.86565C18.1355 2.37545 17.8944 2.96092 17.3846 3.17334L13.3237 4.86538C12.9655 5.01461 12.7865 5.08922 12.8026 5.16961C12.8186 5.25 13.0126 5.25 13.4006 5.25H14.0564C15.8942 5.24999 17.3498 5.24997 18.489 5.40314C19.6614 5.56076 20.6104 5.89288 21.3588 6.64124C22.1071 7.38961 22.4392 8.33856 22.5969 9.51098C22.75 10.6502 22.75 12.1058 22.75 13.9435V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0565 22.75H9.94359C8.10585 22.75 6.65018 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24999 15.8942 1.25 14.0564V13.9436C1.24999 12.1058 1.24997 10.6502 1.40314 9.51098C1.56076 8.33856 1.89288 7.38961 2.64124 6.64124C3.38961 5.89288 4.33856 5.56076 5.51098 5.40314C5.96316 5.34234 6.46518 5.30568 7.02117 5.28357C7.07596 5.28139 7.10336 5.2803 7.12943 5.27455C7.1555 5.26879 7.18046 5.2584 7.23036 5.23761L16.6154 1.32718ZM11.2674 9.19727C13.8976 7.6787 17.2609 8.57989 18.7795 11.2101C20.2981 13.8404 19.3969 17.2037 16.7666 18.7223C14.1364 20.2408 10.7731 19.3396 9.25452 16.7094C7.73595 14.0791 8.63714 10.7158 11.2674 9.19727ZM5.48291 8.50012C4.93063 8.50012 4.48291 8.94784 4.48291 9.50012C4.48291 10.0524 4.93063 10.5001 5.48291 10.5001H5.49189C6.04418 10.5001 6.49189 10.0524 6.49189 9.50012C6.49189 8.94784 6.04418 8.50012 5.49189 8.50012H5.48291Z',
  d10: 'M18.7802 11.2115C17.2617 8.58123 13.8984 7.68004 11.2681 9.19862C8.63787 10.7172 7.73668 14.0805 9.25526 16.7107C10.7738 19.341 14.1371 20.2422 16.7674 18.7236C19.3976 17.205 20.2988 13.8417 18.7802 11.2115ZM16.2162 11.3638C16.216 11.5367 16.0525 11.6311 15.7255 11.8199L11.3094 14.3696C10.9824 14.5584 10.8189 14.6528 10.669 14.5665C10.5191 14.4803 10.5186 14.3117 10.5176 13.9746C10.5139 12.7615 11.1419 11.5803 12.2678 10.9303C13.3936 10.2803 14.7306 10.3271 15.7793 10.9368C16.0708 11.1062 16.2165 11.1909 16.2162 11.3638ZM17.3658 13.355C17.5157 13.4412 17.5162 13.6098 17.5172 13.9469C17.5209 15.16 16.8929 16.3412 15.767 16.9912C14.6412 17.6412 13.3042 17.5945 12.2555 16.9848C11.9641 16.8153 11.8183 16.7306 11.8186 16.5577C11.8189 16.3848 11.9824 16.2904 12.3094 16.1016L16.7255 13.552C17.0525 13.3632 17.216 13.2688 17.3658 13.355Z',
  d11: 'M5.4799 8.5C4.93009 8.5 4.48438 8.94772 4.48438 9.5C4.48438 10.0523 4.93009 10.5 5.4799 10.5H5.48885C6.03866 10.5 6.48438 10.0523 6.48438 9.5C6.48438 8.94772 6.03866 8.5 5.48885 8.5H5.4799Z',
  d12: 'M22 5H2V22H22V5Z',
  d13: 'M7.21484 5.68674L17.2148 2.68674L16.7838 1.25L6.78382 4.25L7.21484 5.68674Z',
  d14: 'M1.25 5C1.25 4.58579 1.58579 4.25 2 4.25H22C22.4142 4.25 22.75 4.58579 22.75 5V22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V5ZM16.3071 11.0135C15.1506 9.70522 13.1963 9.34628 11.6255 10.2532C10.0547 11.1601 9.38842 13.032 9.94316 14.6877L16.3071 11.0135ZM17.0571 12.3125L10.6932 15.9868C11.8497 17.295 13.804 17.654 15.3747 16.7471C16.9455 15.8402 17.6118 13.9683 17.0571 12.3125ZM10.8755 8.95414C13.3862 7.5046 16.5966 8.36482 18.0461 10.8755C19.4956 13.3862 18.6354 16.5966 16.1247 18.0461C13.6141 19.4956 10.4037 18.6354 8.95414 16.1247C7.5046 13.6141 8.36482 10.4037 10.8755 8.95414ZM7.00898 8H5V10H7.00898V8Z',
};

export const IconRadio01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-01-stroke-rounded IconRadio01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinecap="round" 
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

export const IconRadio01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-01-duotone-rounded IconRadio01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinecap="round" 
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

export const IconRadio01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-01-twotone-rounded IconRadio01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconRadio01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-01-solid-rounded IconRadio01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRadio01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-01-bulk-rounded IconRadio01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
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
      </g>
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
    </TheIconWrapper>
  );
};

export const IconRadio01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-01-stroke-sharp IconRadio01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadio01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-01-solid-sharp IconRadio01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfRadio01: TheIconSelfPack = {
  name: 'Radio01',
  StrokeRounded: IconRadio01StrokeRounded,
  DuotoneRounded: IconRadio01DuotoneRounded,
  TwotoneRounded: IconRadio01TwotoneRounded,
  SolidRounded: IconRadio01SolidRounded,
  BulkRounded: IconRadio01BulkRounded,
  StrokeSharp: IconRadio01StrokeSharp,
  SolidSharp: IconRadio01SolidSharp,
};