import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 10C11.1153 13.01 12.1055 17.1528 12.752 20.086C12.8835 20.6824 12.9492 20.9806 13.0872 20.9991C13.2252 21.0177 13.3662 20.7339 13.6482 20.1662C14.9939 17.4579 17.7827 15.062 20 17.1079',
  d2: 'M8.42501 9.18192C7.97315 9.49947 7.86428 10.1232 8.18183 10.5751C10.1653 13.3974 11.1239 17.3453 11.7755 20.3013L11.7849 20.3441C11.8422 20.6044 11.9011 20.872 11.9678 21.0735C12.0023 21.1778 12.0633 21.3435 12.1729 21.5018C12.289 21.6695 12.5365 21.9341 12.9537 21.9903C13.3907 22.0491 13.7065 21.8384 13.8572 21.7047C14.0017 21.5764 14.1013 21.4287 14.1603 21.3348C14.2754 21.1517 14.4005 20.8998 14.5242 20.6508L14.5438 20.6113C15.1609 19.3691 16.0811 18.2671 17.0096 17.713C17.4646 17.4416 17.8741 17.329 18.2264 17.3413C18.5599 17.3529 18.9268 17.4784 19.3219 17.843C19.7278 18.2175 20.3604 18.192 20.7349 17.7862C21.1095 17.3803 21.084 16.7476 20.6781 16.3731C19.9645 15.7146 19.1513 15.3724 18.2963 15.3425C17.46 15.3133 16.6725 15.5852 15.9848 15.9956C14.9942 16.5867 14.1153 17.5194 13.4295 18.5505C12.7719 15.7503 11.7459 12.1681 9.81816 9.4251C9.50061 8.97324 8.87687 8.86436 8.42501 9.18192Z',
  d3: 'M9 5C9 3.34315 7.65685 2 6 2C4.34315 2 3 3.34315 3 5C3 6.65685 4.34315 8 6 8C7.65685 8 9 6.65685 9 5Z',
  d4: 'M9 10C11.1153 13.01 12.4407 18.066 13.0872 20.9991C14.4328 18.2908 17.7827 15.062 20 17.1079',
  d5: 'M8.50467 10.5748C10.4896 13.3992 11.7834 18.2648 12.4335 21.2142C12.5247 21.6283 12.8673 21.9398 13.2882 21.9915C13.7092 22.0431 14.1169 21.8237 14.3056 21.4439C14.9178 20.2117 15.9897 18.8691 17.1096 18.0921C17.6672 17.7052 18.1705 17.5045 18.5848 17.4678C18.9602 17.4346 19.3044 17.5287 19.6447 17.8427L21.001 16.3728C20.2326 15.6638 19.3266 15.3943 18.4083 15.4756C17.5287 15.5536 16.6947 15.9457 15.9695 16.4488C15.19 16.9896 14.4599 17.7115 13.8376 18.4933C13.0832 15.5948 11.8779 11.8963 10.141 9.4248L8.50467 10.5748Z',
};

export const IconBounceLeftStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-left-stroke-rounded IconBounceLeftStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="2" 
        cy="2" 
        r="2" 
        transform="matrix(1 0 0 1 8 3)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconBounceLeftDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-left-duotone-rounded IconBounceLeftDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="2" 
        cy="2" 
        r="2" 
        transform="matrix(1 0 0 1 8 3)" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="2" 
        cy="2" 
        r="2" 
        transform="matrix(1 0 0 1 8 3)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconBounceLeftTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-left-twotone-rounded IconBounceLeftTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="2" 
        cy="2" 
        r="2" 
        transform="matrix(1 0 0 1 8 3)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconBounceLeftSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-left-solid-rounded IconBounceLeftSolidRounded"
    >
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBounceLeftBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-left-bulk-rounded IconBounceLeftBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBounceLeftStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-left-stroke-sharp IconBounceLeftStrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="2" 
        cy="2" 
        r="2" 
        transform="matrix(1 0 0 1 8 3)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconBounceLeftSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-left-solid-sharp IconBounceLeftSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBounceLeft: TheIconSelfPack = {
  name: 'BounceLeft',
  StrokeRounded: IconBounceLeftStrokeRounded,
  DuotoneRounded: IconBounceLeftDuotoneRounded,
  TwotoneRounded: IconBounceLeftTwotoneRounded,
  SolidRounded: IconBounceLeftSolidRounded,
  BulkRounded: IconBounceLeftBulkRounded,
  StrokeSharp: IconBounceLeftStrokeSharp,
  SolidSharp: IconBounceLeftSolidSharp,
};