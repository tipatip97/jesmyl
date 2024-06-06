import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M2.5 9H21.5',
  d3: 'M6.99981 6H7.00879',
  d4: 'M10.9998 6H11.0088',
  d5: 'M17.1105 12C17.6731 12.8628 18 13.8932 18 15C18 16.1068 17.6731 17.1372 17.1105 18M6.88947 12C6.32692 12.8628 6 13.8932 6 15C6 16.1068 6.32692 17.1372 6.88947 18',
  d6: 'M10 13L14 17M14 13L10 17',
  d7: 'M3.89177 20.1087C5.28301 21.5 7.52218 21.5 12.0005 21.5C16.4789 21.5 18.718 21.5 20.1093 20.1087C21.5005 18.7175 21.5005 16.4783 21.5005 12C21.5005 10.1509 21.403 10.1835 21.305 9H2.50089C2.40296 10.1835 2.50053 10.1509 2.50053 12C2.50053 16.4783 2.50053 18.7175 3.89177 20.1087Z',
  d8: 'M12.0579 1.75H11.9435C9.75283 1.74999 8.03214 1.74998 6.68872 1.93059C5.31207 2.11568 4.21981 2.50272 3.36161 3.36091C2.50342 4.21911 2.11638 5.31137 1.93129 6.68802C1.89188 6.98118 1.86107 7.29229 1.83698 7.62234C1.81576 7.91313 1.80515 8.05853 1.89415 8.15427C1.98315 8.25 2.13164 8.25 2.42863 8.25H21.5728C21.8698 8.25 22.0183 8.25 22.1073 8.15427C22.1963 8.05853 22.1856 7.91313 22.1644 7.62234C22.1403 7.29229 22.1095 6.98118 22.0701 6.68802C21.885 5.31137 21.498 4.21911 20.6398 3.36091C19.7816 2.50272 18.6893 2.11568 17.3127 1.93059C15.9693 1.74998 14.2486 1.74999 12.0579 1.75ZM22.2469 10.3424C22.2452 10.0638 22.2444 9.92444 22.1566 9.83722C22.0689 9.75 21.9289 9.75 21.649 9.75H2.35096C2.07108 9.75 1.93114 9.75 1.84339 9.83722C1.75563 9.92444 1.75478 10.0638 1.75307 10.3424C1.74999 10.8457 1.75 11.3786 1.75 11.9427V11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 11.3787 22.25 10.8458 22.2469 10.3424ZM6 5C6 4.44772 6.44571 4 6.99553 4H7.00447C7.55429 4 8 4.44772 8 5C8 5.55228 7.55429 6 7.00447 6H6.99553C6.44571 6 6 5.55228 6 5ZM10.9955 4C10.4457 4 10 4.44772 10 5C10 5.55228 10.4457 6 10.9955 6H11.0045C11.5543 6 12 5.55228 12 5C12 4.44772 11.5543 4 11.0045 4H10.9955ZM7.2991 12.3718C7.64607 12.5981 7.74395 13.0627 7.51772 13.4097C7.0322 14.1544 6.75 15.0431 6.75 16.0001C6.75 16.9571 7.0322 17.8458 7.51772 18.5905C7.74395 18.9374 7.64607 19.4021 7.2991 19.6283C6.95212 19.8546 6.48744 19.7567 6.26121 19.4097C5.62164 18.4288 5.25 17.2567 5.25 16.0001C5.25 14.7435 5.62164 13.5714 6.26121 12.5905C6.48744 12.2435 6.95212 12.1456 7.2991 12.3718ZM16.7009 12.3718C17.0479 12.1456 17.5126 12.2435 17.7388 12.5905C18.3784 13.5714 18.75 14.7435 18.75 16.0001C18.75 17.2567 18.3784 18.4288 17.7388 19.4097C17.5126 19.7567 17.0479 19.8546 16.7009 19.6283C16.3539 19.4021 16.256 18.9374 16.4823 18.5905C16.9678 17.8458 17.25 16.9571 17.25 16.0001C17.25 15.0431 16.9678 14.1544 16.4823 13.4097C16.256 13.0627 16.3539 12.5981 16.7009 12.3718ZM12 14.9393L10.5303 13.4697C10.2374 13.1768 9.76256 13.1768 9.46967 13.4697C9.17678 13.7626 9.17678 14.2374 9.46967 14.5303L10.9393 16L9.46967 17.4697C9.17678 17.7626 9.17678 18.2374 9.46967 18.5303C9.76256 18.8232 10.2374 18.8232 10.5303 18.5303L12 17.0607L13.4697 18.5303C13.7626 18.8232 14.2374 18.8232 14.5303 18.5303C14.8232 18.2374 14.8232 17.7626 14.5303 17.4697L13.0607 16L14.5303 14.5303C14.8232 14.2374 14.8232 13.7626 14.5303 13.4697C14.2374 13.1768 13.7626 13.1768 13.4697 13.4697L12 14.9393Z',
  d9: 'M22.2469 10.3424C22.2452 10.0638 22.2444 9.92444 22.1566 9.83722C22.0689 9.75 21.9289 9.75 21.649 9.75H2.35096C2.07108 9.75 1.93114 9.75 1.84339 9.83722C1.75563 9.92444 1.75478 10.0638 1.75307 10.3424C1.74999 10.8458 1.75 11.3787 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 11.3787 22.25 10.8458 22.2469 10.3424Z',
  d10: 'M12.0579 1.75H11.9435H11.9435C9.75282 1.74999 8.03214 1.74998 6.68872 1.93059C5.31207 2.11568 4.21981 2.50272 3.36161 3.36091C2.50342 4.21911 2.11638 5.31137 1.93129 6.68802C1.89188 6.98118 1.86107 7.29229 1.83698 7.62234C1.81576 7.91313 1.80515 8.05853 1.89415 8.15427C1.98315 8.25 2.13164 8.25 2.42863 8.25H21.5728C21.8698 8.25 22.0183 8.25 22.1073 8.15427C22.1963 8.05853 22.1856 7.91313 22.1644 7.62234C22.1403 7.29229 22.1095 6.98118 22.0701 6.68802C21.885 5.31137 21.498 4.21911 20.6398 3.36091C19.7816 2.50272 18.6893 2.11568 17.3127 1.93059C15.9693 1.74998 14.2486 1.74999 12.0579 1.75H12.0579ZM6 5C6 4.44772 6.44571 4 6.99553 4H7.00447C7.55429 4 8 4.44772 8 5C8 5.55228 7.55429 6 7.00447 6H6.99553C6.44571 6 6 5.55228 6 5ZM10.9955 4C10.4457 4 10 4.44772 10 5C10 5.55228 10.4457 6 10.9955 6H11.0045C11.5543 6 12 5.55228 12 5C12 4.44772 11.5543 4 11.0045 4H10.9955Z',
  d11: 'M7.2991 12.3718C7.64607 12.5981 7.74395 13.0627 7.51772 13.4097C7.0322 14.1544 6.75 15.0431 6.75 16.0001C6.75 16.9571 7.0322 17.8458 7.51772 18.5905C7.74395 18.9374 7.64607 19.4021 7.2991 19.6283C6.95212 19.8546 6.48744 19.7567 6.26121 19.4097C5.62164 18.4288 5.25 17.2567 5.25 16.0001C5.25 14.7435 5.62164 13.5714 6.26121 12.5905C6.48744 12.2435 6.95212 12.1456 7.2991 12.3718ZM16.7009 12.3718C17.0479 12.1456 17.5126 12.2435 17.7388 12.5905C18.3784 13.5714 18.75 14.7435 18.75 16.0001C18.75 17.2567 18.3784 18.4288 17.7388 19.4097C17.5126 19.7567 17.0479 19.8546 16.7009 19.6283C16.3539 19.4021 16.256 18.9374 16.4823 18.5905C16.9678 17.8458 17.25 16.9571 17.25 16.0001C17.25 15.0431 16.9678 14.1544 16.4823 13.4097C16.256 13.0627 16.3539 12.5981 16.7009 12.3718Z',
  d12: 'M9.46967 13.4697C9.76256 13.1768 10.2374 13.1768 10.5303 13.4697L12 14.9393L13.4697 13.4697C13.7626 13.1768 14.2374 13.1768 14.5303 13.4697C14.8232 13.7626 14.8232 14.2374 14.5303 14.5303L13.0607 16L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L12 17.0607L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L10.9393 16L9.46967 14.5303C9.17678 14.2374 9.17678 13.7626 9.46967 13.4697Z',
  d13: 'M3 3V21L21 21V3H3Z',
  d14: 'M3 9H21',
  d15: 'M6.99982 6H7.0088M10.9998 6H11.0088',
  d16: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V8.25H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM6 4.25H8.00898V6.25H6V4.25ZM10 4.25H12.009V6.25H10V4.25Z',
  d17: 'M21.75 9.75H2.25V21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.1989 21.75 21.3897 21.671 21.5303 21.5303C21.671 21.3897 21.75 21.1989 21.75 21V9.75ZM6.75 15.7505C6.75 14.7935 7.0322 13.9047 7.51772 13.1601L6.26121 12.3408C5.62164 13.3217 5.25 14.4938 5.25 15.7505C5.25 17.0071 5.62164 18.1792 6.26121 19.1601L7.51772 18.3408C7.0322 17.5962 6.75 16.7074 6.75 15.7505ZM16.4823 13.1601C16.9678 13.9047 17.25 14.7935 17.25 15.7505C17.25 16.7074 16.9678 17.5962 16.4823 18.3408L17.7388 19.1601C18.3784 18.1792 18.75 17.0071 18.75 15.7505C18.75 14.4938 18.3784 13.3217 17.7388 12.3408L16.4823 13.1601ZM10.9384 15.7501L9.46875 14.2804L10.5294 13.2197L11.9991 14.6894L13.4688 13.2197L14.5294 14.2804L13.0597 15.7501L14.5294 17.2197L13.4688 18.2804L11.9991 16.8107L10.5294 18.2804L9.46875 17.2197L10.9384 15.7501Z',
};

export const IconVariableStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="variable-stroke-rounded IconVariableStrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVariableDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="variable-duotone-rounded IconVariableDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVariableTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="variable-twotone-rounded IconVariableTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVariableSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="variable-solid-rounded IconVariableSolidRounded"
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

export const IconVariableBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="variable-bulk-rounded IconVariableBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconVariableStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="variable-stroke-sharp IconVariableStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVariableSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="variable-solid-sharp IconVariableSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVariable: TheIconSelfPack = {
  name: 'Variable',
  StrokeRounded: IconVariableStrokeRounded,
  DuotoneRounded: IconVariableDuotoneRounded,
  TwotoneRounded: IconVariableTwotoneRounded,
  SolidRounded: IconVariableSolidRounded,
  BulkRounded: IconVariableBulkRounded,
  StrokeSharp: IconVariableStrokeSharp,
  SolidSharp: IconVariableSolidSharp,
};