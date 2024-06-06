import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M11.5 8H12.5V12.5M6.5 8C6.5 13.2 10.5 15.5 12.5 16V12.5M12.5 12.5C12.9301 12.4462 13.5198 12.2919 14.1482 12M14.1482 12C15.4678 11.3871 16.9581 10.1677 17.5 8M14.1482 12C15.2655 12.3333 17.5 13.6 17.5 16',
  d3: 'M11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03143 1.74998 9.75214 1.74999 11.9428 1.75ZM18.4701 8.24277C18.6041 7.70698 18.2783 7.16404 17.7425 7.03009C17.2067 6.89615 16.6638 7.22191 16.5299 7.7577C16.0805 9.55508 14.8542 10.5697 13.7269 11.0933C13.6501 11.129 13.5744 11.162 13.5 11.1927V8.00024C13.5 7.44795 13.0523 7.00024 12.5 7.00024H11.5C10.9477 7.00024 10.5 7.44795 10.5 8.00024C10.5 8.55252 10.9477 9.00024 11.5 9.00024V14.5566C9.71628 13.6623 7.5 11.6388 7.5 8.00024C7.5 7.44795 7.05228 7.00024 6.5 7.00024C5.94772 7.00024 5.5 7.44795 5.5 8.00024C5.5 13.8284 10.0009 16.4062 12.2575 16.9704C12.5562 17.0451 12.8727 16.9779 13.1154 16.7884C13.3581 16.5989 13.5 16.3082 13.5 16.0002L13.5 13.3081C13.7193 13.2451 13.9487 13.1673 14.1835 13.0736C14.5956 13.2434 15.1145 13.5356 15.5571 13.9529C16.1104 14.4745 16.5 15.1436 16.5 16.0002C16.5 16.5525 16.9477 17.0002 17.5 17.0002C18.0523 17.0002 18.5 16.5525 18.5 16.0002C18.5 14.4569 17.7723 13.2926 16.929 12.4976C16.6884 12.2708 16.4348 12.0701 16.1793 11.8946C17.1672 11.0782 18.0566 9.89713 18.4701 8.24277Z',
  d4: 'M12.0572 1.75H11.9428C9.75214 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d5: 'M17.7425 7.03009C18.2783 7.16404 18.6041 7.70698 18.4701 8.24277C18.0566 9.89713 17.1672 11.0782 16.1793 11.8946C16.4348 12.0701 16.6884 12.2708 16.929 12.4976C17.7723 13.2926 18.5 14.4569 18.5 16.0002C18.5 16.5525 18.0523 17.0002 17.5 17.0002C16.9477 17.0002 16.5 16.5525 16.5 16.0002C16.5 15.1436 16.1104 14.4745 15.5571 13.9529C15.1145 13.5356 14.5956 13.2434 14.1835 13.0736C13.9487 13.1673 13.7193 13.2451 13.5 13.3081V16.0002C13.5 16.3082 13.3581 16.5989 13.1154 16.7884C12.8727 16.9779 12.5562 17.0451 12.2575 16.9704C10.0009 16.4062 5.5 13.8284 5.5 8.00024C5.5 7.44795 5.94772 7.00024 6.5 7.00024C7.05228 7.00024 7.5 7.44795 7.5 8.00024C7.5 11.6388 9.71628 13.6623 11.5 14.5566V9.00024C10.9477 9.00024 10.5 8.55252 10.5 8.00024C10.5 7.44795 10.9477 7.00024 11.5 7.00024H12.5C13.0523 7.00024 13.5 7.44795 13.5 8.00024V11.1927C13.5744 11.162 13.6501 11.129 13.7269 11.0933C14.8542 10.5697 16.0805 9.55508 16.5299 7.7577C16.6638 7.22191 17.2067 6.89615 17.7425 7.03009Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M10.5 8H12.5V12.5M6.5 8C6.5 13.2 10.5 15.5 12.5 16V12.5M12.5 12.5C12.9301 12.4462 13.5198 12.2919 14.1482 12M14.1482 12C15.4678 11.3871 16.9581 10.1677 17.5 8M14.1482 12C15.2655 12.3333 17.5 13.6 17.5 16',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM18.2276 8.18223L18.4095 7.45462L16.9543 7.09082L16.7724 7.81843C16.2999 9.70839 15.0076 10.7742 13.8322 11.3201C13.6302 11.414 13.4342 11.4911 13.25 11.5533V8.00033C13.25 7.58611 12.9142 7.25033 12.5 7.25033H9.75V8.75033H11.75L11.75 14.9491C9.8555 14.1234 7.25 12.0098 7.25 8.00033V7.25033H5.75V8.00033C5.75 13.6715 10.1257 16.1798 12.3181 16.7279C12.5422 16.7839 12.7795 16.7336 12.9616 16.5915C13.1436 16.4494 13.25 16.2313 13.25 16.0003L13.25 13.1172C13.5414 13.0425 13.8567 12.9394 14.1825 12.8043C14.6342 12.9775 15.2265 13.2977 15.7286 13.771C16.3182 14.3269 16.75 15.0578 16.75 16.0003V16.7503H18.25V16.0003C18.25 14.5428 17.5646 13.4404 16.7576 12.6796C16.4365 12.3769 16.091 12.1227 15.7501 11.9142C16.8089 11.1235 17.7918 9.92533 18.2276 8.18223Z',
};

export const IconVkSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vk-square-stroke-rounded IconVkSquareStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconVkSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vk-square-duotone-rounded IconVkSquareDuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconVkSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vk-square-twotone-rounded IconVkSquareTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconVkSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vk-square-solid-rounded IconVkSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVkSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vk-square-bulk-rounded IconVkSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVkSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vk-square-stroke-sharp IconVkSquareStrokeSharp"
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVkSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vk-square-solid-sharp IconVkSquareSolidSharp"
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

export const iconPackOfVkSquare: TheIconSelfPack = {
  name: 'VkSquare',
  StrokeRounded: IconVkSquareStrokeRounded,
  DuotoneRounded: IconVkSquareDuotoneRounded,
  TwotoneRounded: IconVkSquareTwotoneRounded,
  SolidRounded: IconVkSquareSolidRounded,
  BulkRounded: IconVkSquareBulkRounded,
  StrokeSharp: IconVkSquareStrokeSharp,
  SolidSharp: IconVkSquareSolidSharp,
};