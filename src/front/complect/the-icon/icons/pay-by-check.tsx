import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 11H6C2.69067 11 2 11.6907 2 15V18C2 21.3093 2.69067 22 6 22H18C21.3093 22 22 21.3093 22 18V15C22 12.7889 21.6917 11.7468 20.5 11.2987',
  d2: 'M12 18L18 18',
  d3: 'M17.2442 3.13291C17.6913 2.64778 17.9149 2.40522 18.1524 2.26374C18.7256 1.92234 19.4315 1.91173 20.0142 2.23573C20.2557 2.37001 20.4862 2.60575 20.947 3.07721C21.4079 3.54868 21.6383 3.78441 21.7696 4.03149C22.0863 4.62767 22.0759 5.34971 21.7422 5.93611C21.6039 6.17913 21.3668 6.40783 20.8926 6.86523L15.2504 12.3075C13.7556 13.7493 12.8297 14.0483 10.7592 13.9941C10.3833 13.9842 10.1954 13.9793 10.0862 13.8551C9.9769 13.731 9.99182 13.5393 10.0216 13.1558C10.1592 11.3881 10.4706 10.4824 11.6737 9.17706L17.2442 3.13291Z',
  d4: 'M10.4329 11.0313C9.16846 11.0175 7.97796 11.0071 7 11H6C2.69067 11 2 11.6907 2 15V18C2 21.3093 2.69067 22 6 22H18C21.3093 22 22 21.3093 22 18V15C22 12.7889 21.6917 11.7468 20.5 11.2987C20.5 11.2284 18.7861 11.1687 16.4803 11.1211L15.2504 12.3075C13.7556 13.7493 12.8297 14.0483 10.7592 13.9941C10.3833 13.9842 10.1954 13.9793 10.0862 13.8551C9.9769 13.731 9.99182 13.5393 10.0216 13.1558C10.089 12.2904 10.198 11.6316 10.4329 11.0313Z',
  d5: 'M12 17L18 17',
  d6: 'M17.7686 1.61937C18.5712 1.14132 19.562 1.12627 20.3785 1.58023C20.7182 1.76905 21.0219 2.08027 21.4082 2.47614L21.4832 2.55295L21.557 2.62833C21.9454 3.02508 22.2486 3.33479 22.4318 3.67962C22.8689 4.50249 22.8548 5.49727 22.3939 6.30706C22.2008 6.64643 21.8887 6.94703 21.4891 7.33186L21.4131 7.40504L15.7709 12.8473C14.9896 13.6009 14.2962 14.1163 13.4787 14.416C12.667 14.7135 11.804 14.7717 10.7395 14.7438L10.7082 14.743C10.5487 14.7389 10.3599 14.7341 10.199 14.7072C10.004 14.6747 9.73692 14.5937 9.52297 14.3506C9.31141 14.1101 9.26355 13.8376 9.25279 13.6444C9.24373 13.4815 9.25855 13.2924 9.27137 13.1286L9.2738 13.0976C9.34474 12.1858 9.46456 11.4286 9.75209 10.7133C10.0424 9.99103 10.4828 9.36237 11.122 8.66878L16.6926 2.62462L16.7653 2.54566C17.1402 2.13826 17.4347 1.8182 17.7686 1.61937Z',
  d7: 'M3.81795 10.4271C4.42823 10.293 5.15644 10.25 6 10.25H7.44928C7.83733 10.25 8.03136 10.25 8.12144 10.3654C8.21152 10.4808 8.16135 10.6814 8.061 11.0826C7.90528 11.7052 7.82853 12.3358 7.77832 12.9813C7.77679 13.0009 7.77565 13.0205 7.7749 13.0401L7.7539 13.5868C7.75209 13.6338 7.7525 13.6808 7.75511 13.7277C7.77486 14.0826 7.87053 14.7433 8.39684 15.3415C8.93058 15.948 9.58468 16.1254 9.95182 16.1867C10.0001 16.1948 10.0488 16.2005 10.0977 16.2038L10.6382 16.2404C10.6588 16.2418 10.6795 16.2428 10.7002 16.2433C11.8239 16.2727 12.9144 16.2204 13.9949 15.8243C15.0931 15.4218 15.9631 14.746 16.8123 13.9269L20.1449 10.7124C20.2669 10.5947 20.328 10.5358 20.4117 10.5179C20.4954 10.4999 20.5676 10.5258 20.7122 10.5777C21.1135 10.7216 21.4717 10.929 21.7713 11.2287C22.1974 11.6548 22.437 12.1992 22.5729 12.818C22.707 13.4282 22.75 14.1564 22.75 15V18C22.75 18.8436 22.707 19.5718 22.5729 20.182C22.437 20.8008 22.1974 21.3452 21.7713 21.7713C21.3452 22.1974 20.8008 22.437 20.182 22.5729C19.5718 22.707 18.8436 22.75 18 22.75H6C5.15644 22.75 4.42823 22.707 3.81795 22.5729C3.19918 22.437 2.65477 22.1974 2.22867 21.7713C1.80257 21.3452 1.56303 20.8008 1.42709 20.182C1.29303 19.5718 1.25 18.8436 1.25 18V15C1.25 14.1564 1.29303 13.4282 1.42709 12.818C1.56303 12.1992 1.80257 11.6548 2.22867 11.2287C2.65477 10.8026 3.19918 10.563 3.81795 10.4271ZM12.25 19C12.25 18.5858 12.5858 18.25 13 18.25L19 18.25C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75L13 19.75C12.5858 19.75 12.25 19.4142 12.25 19Z',
  d8: 'M6 10.25C5.15644 10.25 4.42823 10.293 3.81795 10.4271C3.19918 10.563 2.65477 10.8026 2.22867 11.2287C1.80257 11.6548 1.56303 12.1992 1.42709 12.818C1.29303 13.4282 1.25 14.1564 1.25 15V18C1.25 18.8436 1.29303 19.5718 1.42709 20.182C1.56303 20.8008 1.80257 21.3452 2.22867 21.7713C2.65477 22.1974 3.19918 22.437 3.81795 22.5729C4.42823 22.707 5.15644 22.75 6 22.75H18C18.8436 22.75 19.5718 22.707 20.182 22.5729C20.8008 22.437 21.3452 22.1974 21.7713 21.7713C22.1974 21.3452 22.437 20.8008 22.5729 20.182C22.707 19.5718 22.75 18.8436 22.75 18V15C22.75 14.1564 22.707 13.4282 22.5729 12.818C22.437 12.1992 22.1974 11.6548 21.7713 11.2287C21.4717 10.929 21.1135 10.7216 20.7122 10.5777C20.5676 10.5258 20.4954 10.4999 20.4117 10.5179C20.328 10.5358 20.2669 10.5947 20.1449 10.7124L16.8123 13.9269C15.9631 14.746 15.0931 15.4218 13.9949 15.8243C12.9144 16.2204 11.8239 16.2727 10.7002 16.2433C10.6795 16.2428 10.6588 16.2418 10.6382 16.2404L10.0977 16.2038C10.0488 16.2005 10.0001 16.1948 9.95182 16.1867C9.58468 16.1254 8.93058 15.948 8.39684 15.3415C7.87053 14.7433 7.77486 14.0826 7.75511 13.7277C7.7525 13.6808 7.75209 13.6338 7.7539 13.5868L7.7749 13.0401C7.77565 13.0205 7.77679 13.0009 7.77832 12.9813C7.82853 12.3358 7.90528 11.7052 8.061 11.0826C8.16135 10.6814 8.21152 10.4808 8.12144 10.3654C8.03136 10.25 7.83733 10.25 7.44928 10.25H6Z',
  d9: 'M13 18.25C12.5858 18.25 12.25 18.5858 12.25 19C12.25 19.4142 12.5858 19.75 13 19.75L19 19.75C19.4142 19.75 19.75 19.4142 19.75 19C19.75 18.5858 19.4142 18.25 19 18.25L13 18.25Z',
  d10: 'M5.99747 11.9946H2.99756V20.9985H20.997V11.9946H18.9971',
  d11: 'M14.9971 17.9976H18.997',
  d12: 'M8.98486 11.5057L17.4809 3.0044C17.4848 3.00049 17.4911 3.00049 17.4951 3.00438L20.9994 6.50008C21.0033 6.50398 21.0033 6.51033 20.9994 6.51424L12.5261 14.9692H8.98486V11.5057Z',
  d13: 'M3 11.25H6.75V17.2489L13.4315 17.2522L19.4337 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V12C2.25 11.5858 2.58579 11.25 3 11.25ZM15 18.75L19 18.75V17.25L15 17.25V18.75Z',
  d14: 'M16.9632 2.46967C17.256 2.17692 17.7306 2.17676 18.0235 2.46931L21.53 5.97104C21.6708 6.11166 21.7499 6.30248 21.75 6.50148C21.7501 6.70048 21.671 6.89135 21.5303 7.03206L12.8105 15.7519L8.25 15.7496V11.1829L16.9632 2.46967Z',
};

export const IconPayByCheckStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pay-by-check-stroke-rounded IconPayByCheckStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPayByCheckDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pay-by-check-duotone-rounded IconPayByCheckDuotoneRounded"
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
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconPayByCheckTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pay-by-check-twotone-rounded IconPayByCheckTwotoneRounded"
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
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPayByCheckSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pay-by-check-solid-rounded IconPayByCheckSolidRounded"
    >
      <path 
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

export const IconPayByCheckBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pay-by-check-bulk-rounded IconPayByCheckBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPayByCheckStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pay-by-check-stroke-sharp IconPayByCheckStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPayByCheckSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pay-by-check-solid-sharp IconPayByCheckSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfPayByCheck: TheIconSelfPack = {
  name: 'PayByCheck',
  StrokeRounded: IconPayByCheckStrokeRounded,
  DuotoneRounded: IconPayByCheckDuotoneRounded,
  TwotoneRounded: IconPayByCheckTwotoneRounded,
  SolidRounded: IconPayByCheckSolidRounded,
  BulkRounded: IconPayByCheckBulkRounded,
  StrokeSharp: IconPayByCheckStrokeSharp,
  SolidSharp: IconPayByCheckSolidSharp,
};