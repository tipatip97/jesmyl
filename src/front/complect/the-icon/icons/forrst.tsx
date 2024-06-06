import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.8592 14.2648L16.1025 7.73262C14.288 4.57754 13.3807 3 12 3C10.6193 3 9.71204 4.57754 7.89754 7.73262L4.14082 14.2648C2.41522 17.2653 1.55242 18.7656 2.23293 19.8828C2.91344 21 4.69006 21 8.24328 21H8.5C9.44281 21 9.91421 21 10.2071 20.7071C10.5 20.4142 10.5 19.9428 10.5 19V13.5C10.5 12.9298 10.5023 12.3309 11.1173 12.0761C11.3011 12 11.5341 12 12 12C12.4659 12 12.6989 12 12.8827 12.0761C13.4977 12.3309 13.5 12.9298 13.5 13.5V19C13.5 19.9428 13.5 20.4142 13.7929 20.7071C14.0858 21 14.5572 21 15.5 21H15.7567C19.3099 21 21.0866 21 21.7671 19.8828C22.4476 18.7656 21.5848 17.2653 19.8592 14.2648Z',
  d2: 'M13.5 19L16.5 16',
  d3: 'M13.5 15L15 13.5',
  d4: 'M10.5 17L8 14.5',
  d5: 'M9.52405 3.71682C10.1994 2.86616 10.9642 2.25 12 2.25C13.0358 2.25 13.8006 2.86616 14.4759 3.71682C15.1372 4.54969 15.8403 5.77236 16.7191 7.30051L20.5431 13.9497C21.3773 15.4001 22.0473 16.5651 22.4143 17.508C22.7895 18.4718 22.9318 19.4123 22.4076 20.2729C21.8891 21.1242 20.9876 21.4533 19.9457 21.6027C18.919 21.75 17.5431 21.75 15.821 21.75H15C14.5286 21.75 14.2929 21.75 14.1464 21.6036C14 21.4571 14 21.2214 14 20.75V20.3879C14 19.979 14 19.7746 14.0762 19.5907C14.1523 19.4069 14.2969 19.2624 14.5862 18.9733L17.0305 16.5303C17.3234 16.2374 17.3234 15.7626 17.0305 15.4697C16.7376 15.1768 16.2627 15.1768 15.9698 15.4697L14.6828 16.7566C14.3922 17.0472 14.2469 17.1926 14.1235 17.1414C14 17.0903 14 16.8848 14 16.4738V15.8079C14 15.6852 14 15.6238 14.0229 15.5686C14.0457 15.5135 14.0891 15.4701 14.176 15.3834L15.5305 14.0303C15.8234 13.7374 15.8234 13.2626 15.5305 12.9697C15.2376 12.6768 14.7627 12.6768 14.4698 12.9697L13.9999 13.3851V12.4395C13.9988 11.888 13.968 11.3219 13.1769 11.0761C12.9319 11 12.6212 11 12 11C11.3787 11 11.0681 11 10.8231 11.0761C10.003 11.3309 9.99999 11.9298 9.99999 12.5V14.4735C9.99999 14.8845 9.99999 15.09 9.87653 15.1411C9.75307 15.1923 9.60776 15.047 9.31715 14.7564L8.53046 13.9697C8.23757 13.6768 7.7627 13.6768 7.4698 13.9697C7.17691 14.2626 7.17691 14.7374 7.4698 15.0303L9.41376 16.9731C9.70301 17.2621 9.84763 17.4067 9.92381 17.5905C9.99999 17.7743 9.99999 17.9788 9.99999 18.3877V20.75C9.99999 21.2214 9.99999 21.4571 9.85355 21.6036C9.7071 21.75 9.4714 21.75 8.99999 21.75H8.17892C6.45685 21.75 5.08094 21.75 4.05432 21.6027C3.01238 21.4533 2.11088 21.1242 1.59239 20.2729C1.06816 19.4123 1.21048 18.4718 1.58566 17.508C1.95265 16.5651 2.62273 15.4 3.45689 13.9496L7.28085 7.30052C8.15968 5.77234 8.86281 4.5497 9.52405 3.71682Z',
  d6: 'M9.52405 3.71682C10.1994 2.86616 10.9642 2.25 12 2.25C13.0358 2.25 13.8006 2.86616 14.4759 3.71682C15.1372 4.54969 15.8403 5.77236 16.7191 7.30051L20.5431 13.9497C21.3773 15.4001 22.0473 16.5651 22.4143 17.508C22.7895 18.4718 22.9318 19.4123 22.4076 20.2729C21.8891 21.1242 20.9876 21.4533 19.9457 21.6027C18.919 21.75 17.5431 21.75 15.821 21.75H15.821H8.17892H8.17889C6.45684 21.75 5.08094 21.75 4.05432 21.6027C3.01238 21.4533 2.11088 21.1242 1.59239 20.2729C1.06816 19.4123 1.21048 18.4718 1.58566 17.508C1.95265 16.5651 2.62273 15.4 3.45689 13.9496L7.28085 7.30052C8.15968 5.77234 8.86281 4.5497 9.52405 3.71682Z',
  d7: 'M11.9996 11C11.3783 11 11.0677 11 10.8226 11.0761C10.0026 11.3309 9.99956 11.9298 9.99956 12.5V14.4735C9.99956 14.8845 9.99956 15.09 9.8761 15.1411C9.75264 15.1923 9.60733 15.047 9.31672 14.7564L8.53003 13.9697C8.23714 13.6768 7.76227 13.6768 7.46937 13.9697C7.17648 14.2626 7.17648 14.7374 7.46937 15.0303L9.41333 16.9731C9.70258 17.2621 9.8472 17.4067 9.92338 17.5905C9.99956 17.7743 9.99956 17.9788 9.99956 18.3877V21.75H13.9996V20.3879C13.9996 19.979 13.9996 19.7746 14.0757 19.5907C14.1519 19.4069 14.2965 19.2624 14.5857 18.9733L17.03 16.5303C17.3229 16.2374 17.3229 15.7626 17.03 15.4697C16.7371 15.1768 16.2623 15.1768 15.9694 15.4697L14.6824 16.7566C14.3918 17.0472 14.2465 17.1926 14.123 17.1414C13.9996 17.0903 13.9996 16.8848 13.9996 16.4738V15.8079C13.9996 15.6852 13.9996 15.6238 14.0224 15.5686C14.0453 15.5135 14.0887 15.4701 14.1755 15.3834L15.53 14.0303C15.8229 13.7374 15.8229 13.2626 15.53 12.9697C15.2371 12.6768 14.7623 12.6768 14.4694 12.9697L13.9995 13.3851V12.4395C13.9983 11.888 13.9676 11.3219 13.1765 11.0761C12.9314 11 12.6208 11 11.9996 11Z',
  d8: 'M13.444 18.9482L16.444 15.9482',
  d9: 'M13.444 14.9482L15.444 12.9482',
  d10: 'M10.444 16.9482L7.94397 14.4482',
  d11: 'M10.5054 20.998V12.0134H13.4633V20.998H21.9884C21.996 20.998 22.0009 20.9898 21.9971 20.9831L11.9891 3.0071C11.9852 3.00023 11.9754 3.00024 11.9715 3.00712L2.00286 20.9831C1.99915 20.9898 2.00398 20.998 2.01163 20.998H10.5054Z',
  d12: 'M12.6555 2.63577C12.5232 2.39767 12.2722 2.25 11.9998 2.25C11.7275 2.25 11.4765 2.39767 11.3442 2.63576L1.34408 20.6358C1.21502 20.8681 1.21853 21.1513 1.35329 21.3803C1.48805 21.6094 1.73395 21.75 1.99969 21.75H10.2498V17.7902L7.60313 16.136L8.39813 14.864L10.2498 16.0213V12.75H13.7498V14.1367L15.1286 13.3489L15.8728 14.6512L13.7498 15.8644V17.9319L16.0837 16.376L16.9157 17.6241L13.7498 19.7346V21.75H21.9999C22.2656 21.75 22.5115 21.6094 22.6463 21.3803C22.781 21.1513 22.7845 20.8681 22.6555 20.6358L12.6555 2.63577Z',
};

export const IconForrstStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="forrst-stroke-rounded IconForrstStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconForrstDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="forrst-duotone-rounded IconForrstDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconForrstTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="forrst-twotone-rounded IconForrstTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconForrstSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="forrst-solid-rounded IconForrstSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconForrstBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="forrst-bulk-rounded IconForrstBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconForrstStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="forrst-stroke-sharp IconForrstStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconForrstSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="forrst-solid-sharp IconForrstSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfForrst: TheIconSelfPack = {
  name: 'Forrst',
  StrokeRounded: IconForrstStrokeRounded,
  DuotoneRounded: IconForrstDuotoneRounded,
  TwotoneRounded: IconForrstTwotoneRounded,
  SolidRounded: IconForrstSolidRounded,
  BulkRounded: IconForrstBulkRounded,
  StrokeSharp: IconForrstStrokeSharp,
  SolidSharp: IconForrstSolidSharp,
};