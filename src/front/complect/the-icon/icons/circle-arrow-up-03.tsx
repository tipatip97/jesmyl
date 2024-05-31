import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M14.5152 12.5036C13.9844 11.9728 12.6908 9.99529 11.9455 10.0058C11.2077 10.0865 10.0313 12.0088 9.51149 12.5138M12.0354 17.0043L12.0211 10.0112M8 7.00901L15.9921 6.99268',
  d3: 'M9.49211 12.51C10.0218 11.97 11.3114 9.99 12.0567 10C12.7947 10.08 13.9749 12 14.4958 12.51M11.9811 17V10.01M15.996 7H8.00391',
  d4: 'M16 7.75C16.4142 7.75 16.75 7.41421 16.75 7C16.75 6.58579 16.4142 6.25 16 6.25V7.75ZM8 6.25C7.58579 6.25 7.25 6.58579 7.25 7C7.25 7.41421 7.58579 7.75 8 7.75L8 6.25ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM13.9622 13.0227C14.2509 13.3198 14.7257 13.3265 15.0227 13.0378C15.3198 12.7491 15.3265 12.2743 15.0378 11.9773L13.9622 13.0227ZM8.96219 11.9773C8.67349 12.2743 8.68023 12.7491 8.97726 13.0378C9.27428 13.3265 9.74911 13.3198 10.0378 13.0227L8.96219 11.9773ZM16 6.25L8 6.25L8 7.75L16 7.75V6.25ZM11.25 10V17H12.75V10H11.25ZM12 10.75C11.9168 10.75 11.8884 10.7233 11.9344 10.7479C11.9745 10.7694 12.0399 10.8132 12.1306 10.8905C12.3127 11.0456 12.5262 11.274 12.7561 11.5452C12.9831 11.8132 13.2051 12.0975 13.4107 12.3593C13.6029 12.604 13.8051 12.8612 13.9622 13.0227L15.0378 11.9773C14.9491 11.886 14.8035 11.7042 14.5903 11.4328C14.3905 11.1784 14.1494 10.8693 13.9005 10.5755C13.6543 10.285 13.3787 9.98316 13.1032 9.74854C12.9652 9.63096 12.8096 9.51499 12.6422 9.42541C12.4807 9.33902 12.2583 9.25 12 9.25V10.75ZM10.0378 13.0227C10.1949 12.8612 10.3971 12.604 10.5893 12.3593C10.7949 12.0975 11.0169 11.8132 11.2439 11.5452C11.4738 11.274 11.6873 11.0456 11.8694 10.8905C11.9601 10.8132 12.0255 10.7694 12.0656 10.7479C12.1116 10.7233 12.0832 10.75 12 10.75V9.25C11.7417 9.25 11.5193 9.33902 11.3578 9.42541C11.1904 9.51499 11.0348 9.63096 10.8968 9.74854C10.6213 9.98316 10.3457 10.285 10.0995 10.5755C9.85056 10.8693 9.60953 11.1784 9.40971 11.4328C9.19651 11.7042 9.05089 11.886 8.96219 11.9773L10.0378 13.0227Z',
  d5: 'M12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75ZM12 18.5C11.5858 18.5 11.25 18.1642 11.25 17.75L11.25 13.5L10.939 13.5C10.6653 13.5 10.3967 13.5001 10.1889 13.4764C10.0261 13.4579 9.55368 13.3962 9.33716 12.9779C9.12048 12.5593 9.36549 12.18 9.4518 12.0514C9.56231 11.8867 9.73107 11.693 9.90312 11.4955L9.92757 11.4674C10.1907 11.1652 10.4968 10.8298 10.7998 10.566C10.9512 10.4342 11.12 10.304 11.2985 10.2032C11.4662 10.1086 11.7115 10 12 10C12.2885 10 12.5338 10.1086 12.7015 10.2032C12.88 10.304 13.0489 10.4342 13.2002 10.566C13.5032 10.8298 13.8093 11.1652 14.0724 11.4674L14.0969 11.4955C14.2689 11.693 14.4377 11.8867 14.5482 12.0514C14.6345 12.18 14.8795 12.5593 14.6628 12.9779C14.4463 13.3962 13.9739 13.4579 13.8111 13.4764C13.6033 13.5001 13.3347 13.5 13.061 13.5L12.75 13.5L12.75 17.75C12.75 18.1642 12.4142 18.5 12 18.5ZM7.25 7.75C7.25 7.33579 7.58579 7 8 7L16 7C16.4142 7 16.75 7.33579 16.75 7.75C16.75 8.16421 16.4142 8.5 16 8.5L8 8.5C7.58579 8.5 7.25 8.16421 7.25 7.75Z',
  d6: 'M22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12Z',
  d7: 'M16 7L8 7C7.58579 7 7.25 7.33579 7.25 7.75C7.25 8.16421 7.58579 8.5 8 8.5L16 8.5C16.4142 8.5 16.75 8.16421 16.75 7.75C16.75 7.33579 16.4142 7 16 7Z',
  d8: 'M11.25 17.75C11.25 18.1642 11.5858 18.5 12 18.5C12.4142 18.5 12.75 18.1642 12.75 17.75L12.75 13.5L13.061 13.5C13.3347 13.5 13.6033 13.5001 13.8111 13.4764C13.9739 13.4579 14.4463 13.3962 14.6628 12.9779C14.8795 12.5593 14.6345 12.18 14.5482 12.0514C14.4377 11.8867 14.2689 11.693 14.0969 11.4955L14.0724 11.4674C13.8093 11.1652 13.5032 10.8298 13.2002 10.566C13.0489 10.4342 12.88 10.304 12.7015 10.2032C12.5338 10.1086 12.2885 10 12 10C11.7115 10 11.4662 10.1086 11.2985 10.2032C11.12 10.304 10.9512 10.4342 10.7998 10.566C10.4968 10.8298 10.1907 11.1652 9.92757 11.4674L9.90312 11.4955C9.73107 11.693 9.56231 11.8867 9.4518 12.0514C9.36549 12.18 9.12048 12.5593 9.33716 12.9779C9.55368 13.3962 10.0261 13.4579 10.1889 13.4764C10.3967 13.5001 10.6653 13.5 10.939 13.5L11.25 13.5L11.25 17.75Z',
  d9: 'M15.0072 14.4924L12.0072 11.4739L9.00725 14.4919M12.0072 18.5L12.0072 11.6798M8 8.5L16 8.5',
  d10: 'M11.999 1.24902C17.9361 1.24902 22.749 6.06196 22.749 11.999C22.749 17.9361 17.9361 22.749 11.999 22.749C6.06196 22.749 1.24902 17.9361 1.24902 11.999C1.24902 6.06196 6.06196 1.24902 11.999 1.24902ZM15.999 8.12402V6.62402L7.99902 6.62402V8.12402L15.999 8.12402ZM14.4687 13.9044L15.5294 12.8437L11.999 9.31336L8.46869 12.8437L9.52935 13.9044L11.249 12.1847V17.374H12.749V12.1847L14.4687 13.9044Z',
} as const;

export const IconCircleArrowUp03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-03-stroke-rounded IconCircleArrowUp03StrokeRounded"
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

export const IconCircleArrowUp03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-03-duotone-rounded IconCircleArrowUp03DuotoneRounded"
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

export const IconCircleArrowUp03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-03-twotone-rounded IconCircleArrowUp03TwotoneRounded"
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

export const IconCircleArrowUp03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-03-solid-rounded IconCircleArrowUp03SolidRounded"
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

export const IconCircleArrowUp03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-03-bulk-rounded IconCircleArrowUp03BulkRounded"
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

export const IconCircleArrowUp03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-03-stroke-sharp IconCircleArrowUp03StrokeSharp"
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

export const IconCircleArrowUp03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-03-solid-sharp IconCircleArrowUp03SolidSharp"
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

export const iconPackOfCircleArrowUp03: TheIconSelfPack = {
  name: 'CircleArrowUp03',
  StrokeRounded: IconCircleArrowUp03StrokeRounded,
  DuotoneRounded: IconCircleArrowUp03DuotoneRounded,
  TwotoneRounded: IconCircleArrowUp03TwotoneRounded,
  SolidRounded: IconCircleArrowUp03SolidRounded,
  BulkRounded: IconCircleArrowUp03BulkRounded,
  StrokeSharp: IconCircleArrowUp03StrokeSharp,
  SolidSharp: IconCircleArrowUp03SolidSharp,
};