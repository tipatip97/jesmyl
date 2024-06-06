import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.4 7.5L15.3153 8.67019C15.8415 9.34278 15.7447 9.54545 14.8973 9.54545L9.6 9.54545C8.13846 9.54545 8 10.3125 8 11.5909M9.6 16.5L8.68465 15.3298C8.15854 14.6572 8.25535 14.4545 9.10274 14.4545H14.4C15.8615 14.4545 16 13.6875 16 12.4091',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13.7523 6.67223C14.2091 6.31494 14.869 6.39558 15.2263 6.85234L16.1416 8.02253C16.2872 8.20864 16.4419 8.42599 16.5461 8.65519C16.6365 8.85396 16.8054 9.31492 16.568 9.81188C16.3285 10.3133 15.8591 10.4693 15.644 10.5222C15.3983 10.5826 15.1313 10.5947 14.8965 10.5947H9.59922C9.32139 10.5947 9.19422 10.6297 9.14547 10.65L9.13705 10.6537C9.12346 10.6823 9.10147 10.7461 9.08343 10.8777C9.06214 11.0329 9.04922 11.2588 9.04922 11.5902C9.04922 12.1701 8.57912 12.6402 7.99922 12.6402C7.41932 12.6402 6.94922 12.1701 6.94922 11.5902C6.94922 10.9978 6.95979 10.1802 7.35799 9.53599C7.85091 8.73853 8.70051 8.49472 9.59922 8.49472H13.3493V7.5138C13.3451 7.19795 13.4834 6.88253 13.7523 6.67223ZM14.9492 12.6402C14.9492 12.0603 15.4193 11.5902 15.9992 11.5902C16.5791 11.5902 17.0492 12.0603 17.0492 12.6402C17.0492 13.2326 17.0386 13.8182 16.6404 14.4625C16.1475 15.2599 15.2979 15.5037 14.3992 15.5037H10.6492V16.4846C10.6534 16.8005 10.515 17.1159 10.2461 17.3262C9.78938 17.6835 9.12947 17.6029 8.77218 17.1461L7.85684 15.9759C7.71126 15.7898 7.55658 15.5725 7.45232 15.3433C7.3619 15.1445 7.19301 14.6835 7.43039 14.1866C7.66989 13.6852 8.13937 13.5292 8.35445 13.4763C8.60013 13.4159 8.86711 13.4037 9.10196 13.4037L14.3992 13.4037C14.677 13.4037 14.8042 13.3688 14.853 13.3485L14.8614 13.3448C14.875 13.3161 14.897 13.2524 14.915 13.1208C14.9194 13.0886 14.9235 13.0634 14.9271 13.0407L14.9271 13.0406C14.9411 12.9535 14.9492 12.9029 14.9492 12.6402Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M15.2649 6.82075C14.8906 6.34225 14.1992 6.25777 13.7207 6.63207C13.4391 6.85233 13.2942 7.1827 13.2985 7.51339V8.44394L9.59844 8.44394C8.69192 8.44394 7.82079 8.69011 7.31468 9.50893C6.9079 10.167 6.89844 10.999 6.89844 11.5894C6.89844 12.1969 7.39092 12.6894 7.99844 12.6894C8.60595 12.6894 9.09844 12.1969 9.09844 11.5894C9.09844 11.2589 9.11134 11.0357 9.13218 10.8837C9.14655 10.7789 9.16312 10.721 9.17432 10.6913C9.22297 10.6736 9.34452 10.6439 9.59844 10.6439H14.8957C15.1317 10.6439 15.4035 10.6318 15.6551 10.5699C15.8746 10.516 16.363 10.3548 16.6124 9.83265C16.8596 9.31515 16.683 8.83638 16.5909 8.63371C16.4841 8.39901 16.3265 8.17793 16.1802 7.99094L15.2649 6.82075Z',
  d5: 'M15.9984 11.3075C15.3909 11.3075 14.8984 11.8 14.8984 12.4075C14.8984 12.738 14.8855 12.9612 14.8647 13.1132C14.8503 13.218 14.8338 13.2759 14.8226 13.3056C14.7739 13.3233 14.6524 13.353 14.3984 13.353L9.10118 13.353C8.86521 13.353 8.59338 13.3651 8.34173 13.427C8.12231 13.4809 7.63391 13.6421 7.38449 14.1643C7.13729 14.6818 7.31383 15.1605 7.40602 15.3632C7.51279 15.5979 7.67041 15.819 7.81667 16.006L8.73202 17.1762C9.10632 17.6547 9.79766 17.7391 10.2762 17.3648C10.5578 17.1446 10.7027 16.8142 10.6984 16.4835V15.553H14.3984C15.305 15.553 16.1761 15.3068 16.6822 14.488C17.089 13.8299 17.0984 12.9979 17.0984 12.4075C17.0984 11.8 16.606 11.3075 15.9984 11.3075Z',
  d6: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d7: 'M8.0127 12.0039V9.59345H15.8824C15.9674 9.59345 16.0141 9.49494 15.96 9.42968L13.5322 6.50391M16.0127 12.0039V14.4144H8.14301C8.05795 14.4144 8.01128 14.5129 8.06544 14.5781L10.4932 17.5039',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM16.5805 9.06987L14.0796 6.02441L12.9204 6.97636L14.4145 8.79584H7.25001V12.0004H8.75001V10.2958H16.0009C16.291 10.2958 16.555 10.1286 16.679 9.8664C16.8029 9.60419 16.7646 9.29401 16.5805 9.06987ZM15.25 12.0001L15.2493 13.7049H8.00001C7.71 13.7049 7.44597 13.8721 7.322 14.1343C7.19802 14.3965 7.2363 14.7066 7.42031 14.9308L9.92031 17.9763L11.0797 17.0245L9.58602 15.2049H16.7488L16.75 12.0007L15.25 12.0001Z',
};

export const IconCircleArrowReload01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-01-stroke-rounded IconCircleArrowReload01StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-01-duotone-rounded IconCircleArrowReload01DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-01-twotone-rounded IconCircleArrowReload01TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-01-solid-rounded IconCircleArrowReload01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-01-bulk-rounded IconCircleArrowReload01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-01-stroke-sharp IconCircleArrowReload01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowReload01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-reload-01-solid-sharp IconCircleArrowReload01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowReload01: TheIconSelfPack = {
  name: 'CircleArrowReload01',
  StrokeRounded: IconCircleArrowReload01StrokeRounded,
  DuotoneRounded: IconCircleArrowReload01DuotoneRounded,
  TwotoneRounded: IconCircleArrowReload01TwotoneRounded,
  SolidRounded: IconCircleArrowReload01SolidRounded,
  BulkRounded: IconCircleArrowReload01BulkRounded,
  StrokeSharp: IconCircleArrowReload01StrokeSharp,
  SolidSharp: IconCircleArrowReload01SolidSharp,
};