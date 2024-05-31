import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M14.5147 11.4939C13.985 12.0258 12.6954 14.0059 11.9501 13.9969C11.2121 13.9178 10.0318 11.9979 9.51097 11.4939M12.0257 6.99829V13.9914M8.01074 17.0018H16.0028',
  d3: 'M14.5079 11.4941C13.9781 12.0261 12.6886 14.0061 11.9433 13.9971C11.2053 13.9181 10.025 11.9981 9.50418 11.4941M12.0189 6.99805V13.9911M8.00391 17.0021H15.996',
  d4: 'M16 16.25C16.4142 16.25 16.75 16.5858 16.75 17C16.75 17.4142 16.4142 17.75 16 17.75V16.25ZM8 17.75C7.58579 17.75 7.25 17.4142 7.25 17C7.25 16.5858 7.58579 16.25 8 16.25L8 17.75ZM11.25 7C11.25 6.58579 11.5858 6.25 12 6.25C12.4142 6.25 12.75 6.58579 12.75 7H11.25ZM13.9622 10.9773C14.2509 10.6802 14.7257 10.6735 15.0227 10.9622C15.3198 11.2509 15.3265 11.7257 15.0378 12.0227L13.9622 10.9773ZM8.96219 12.0227C8.67349 11.7257 8.68023 11.2509 8.97726 10.9622C9.27428 10.6735 9.74911 10.6802 10.0378 10.9773L8.96219 12.0227ZM16 17.75L8 17.75L8 16.25L16 16.25V17.75ZM11.25 14V7H12.75V14H11.25ZM12 13.25C11.9168 13.25 11.8884 13.2767 11.9344 13.2521C11.9745 13.2306 12.0399 13.1868 12.1306 13.1095C12.3127 12.9544 12.5262 12.726 12.7561 12.4548C12.9831 12.1868 13.2051 11.9025 13.4107 11.6407C13.6029 11.396 13.8051 11.1388 13.9622 10.9773L15.0378 12.0227C14.9491 12.114 14.8035 12.2958 14.5903 12.5672C14.3905 12.8216 14.1494 13.1307 13.9005 13.4245C13.6543 13.715 13.3787 14.0168 13.1032 14.2515C12.9652 14.369 12.8096 14.485 12.6422 14.5746C12.4807 14.661 12.2583 14.75 12 14.75V13.25ZM10.0378 10.9773C10.1949 11.1388 10.3971 11.396 10.5893 11.6407C10.7949 11.9025 11.0169 12.1868 11.2439 12.4548C11.4738 12.726 11.6873 12.9544 11.8694 13.1095C11.9601 13.1868 12.0255 13.2306 12.0656 13.2521C12.1116 13.2767 12.0832 13.25 12 13.25V14.75C11.7417 14.75 11.5193 14.661 11.3578 14.5746C11.1904 14.485 11.0348 14.369 10.8968 14.2515C10.6213 14.0168 10.3457 13.715 10.0995 13.4245C9.85056 13.1307 9.60953 12.8216 9.40971 12.5672C9.19651 12.2958 9.05089 12.114 8.96219 12.0227L10.0378 10.9773Z',
  d5: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12 5.5C12.4142 5.5 12.75 5.83579 12.75 6.25L12.75 10.5H13.061C13.3347 10.5 13.6033 10.4999 13.8111 10.5236C13.9739 10.5421 14.4463 10.6038 14.6628 11.0221C14.8795 11.4407 14.6345 11.82 14.5482 11.9486C14.4377 12.1133 14.2689 12.307 14.0969 12.5045L14.0724 12.5326C13.8093 12.8348 13.5032 13.1702 13.2002 13.434C13.0489 13.5658 12.88 13.696 12.7015 13.7968C12.5338 13.8914 12.2885 14 12 14C11.7115 14 11.4662 13.8914 11.2985 13.7968C11.12 13.696 10.9512 13.5658 10.7998 13.434C10.4968 13.1702 10.1907 12.8348 9.92757 12.5326L9.90312 12.5045C9.73106 12.307 9.56231 12.1133 9.4518 11.9486C9.36549 11.82 9.12048 11.4407 9.33716 11.0221C9.55368 10.6038 10.0261 10.5421 10.1889 10.5236C10.3967 10.4999 10.6653 10.5 10.939 10.5H11.25L11.25 6.25C11.25 5.83579 11.5858 5.5 12 5.5ZM16.75 16.25C16.75 16.6642 16.4142 17 16 17H8C7.58579 17 7.25 16.6642 7.25 16.25C7.25 15.8358 7.58579 15.5 8 15.5L16 15.5C16.4142 15.5 16.75 15.8358 16.75 16.25Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d7: 'M8 17H16C16.4142 17 16.75 16.6642 16.75 16.25C16.75 15.8358 16.4142 15.5 16 15.5L8 15.5C7.58579 15.5 7.25 15.8358 7.25 16.25C7.25 16.6642 7.58579 17 8 17Z',
  d8: 'M12.75 6.25C12.75 5.83579 12.4142 5.5 12 5.5C11.5858 5.5 11.25 5.83579 11.25 6.25V10.5H10.939C10.6653 10.5 10.3967 10.4999 10.1889 10.5236C10.0261 10.5421 9.55368 10.6038 9.33716 11.0221C9.12048 11.4407 9.36549 11.82 9.4518 11.9486C9.56231 12.1133 9.73106 12.307 9.90312 12.5045L9.92757 12.5326C10.1907 12.8348 10.4968 13.1702 10.7998 13.434C10.9512 13.5658 11.12 13.696 11.2985 13.7968C11.4662 13.8914 11.7115 14 12 14C12.2885 14 12.5338 13.8914 12.7015 13.7968C12.88 13.696 13.0489 13.5658 13.2002 13.434C13.5032 13.1702 13.8093 12.8348 14.0724 12.5326L14.0969 12.5045C14.2689 12.307 14.4377 12.1133 14.5482 11.9486C14.6345 11.82 14.8795 11.4407 14.6628 11.0221C14.4463 10.6038 13.9739 10.5421 13.8111 10.5236C13.6033 10.4999 13.3347 10.5 13.061 10.5H12.75V6.25Z',
  d9: 'M15.0063 10.0408L12.0063 13.0593L9.00627 10.0413M12.0063 6.0332V12.6785M7.99902 16.0332H15.999',
  d10: 'M11.998 22.7498C6.06099 22.7498 1.24805 17.9368 1.24805 11.9998C1.24805 6.06269 6.06099 1.24976 11.998 1.24976C17.9351 1.24976 22.748 6.06269 22.748 11.9998C22.748 17.9368 17.9351 22.7498 11.998 22.7498ZM7.99805 15.8748V17.3748H15.998V15.8748H7.99805ZM9.52838 10.0944L8.46772 11.1551L11.998 14.6854L15.5284 11.1551L14.4677 10.0944L12.748 11.8141V6.62476H11.248V11.8141L9.52838 10.0944Z',
} as const;

export const IconCircleArrowDown03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-03-stroke-rounded IconCircleArrowDown03StrokeRounded"
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

export const IconCircleArrowDown03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-03-duotone-rounded IconCircleArrowDown03DuotoneRounded"
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

export const IconCircleArrowDown03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-03-twotone-rounded IconCircleArrowDown03TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDown03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-03-solid-rounded IconCircleArrowDown03SolidRounded"
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

export const IconCircleArrowDown03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-03-bulk-rounded IconCircleArrowDown03BulkRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDown03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-03-stroke-sharp IconCircleArrowDown03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDown03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-03-solid-sharp IconCircleArrowDown03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowDown03: TheIconSelfPack = {
  name: 'CircleArrowDown03',
  StrokeRounded: IconCircleArrowDown03StrokeRounded,
  DuotoneRounded: IconCircleArrowDown03DuotoneRounded,
  TwotoneRounded: IconCircleArrowDown03TwotoneRounded,
  SolidRounded: IconCircleArrowDown03SolidRounded,
  BulkRounded: IconCircleArrowDown03BulkRounded,
  StrokeSharp: IconCircleArrowDown03StrokeSharp,
  SolidSharp: IconCircleArrowDown03SolidSharp,
};