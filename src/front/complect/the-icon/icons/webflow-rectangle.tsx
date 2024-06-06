import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M7.5 9L8.5 16C10.5 14.8 12 10.8333 12.5 9L14 16C16 14.4 17.1667 10.6667 17.5 9',
  d3: 'M12.0572 1.75H12.0572C9.86647 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.86647 1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.86645 22.25 12.0572 22.25H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572C22.25 9.86646 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM18.4807 9.19631C18.589 8.65475 18.2378 8.12792 17.6962 8.01961C17.1547 7.9113 16.6279 8.26252 16.5195 8.80408C16.3654 9.5749 16.0103 10.8562 15.4581 12.1265C15.1904 12.7421 14.889 13.3256 14.5595 13.8378L13.4779 8.79066C13.3813 8.33968 12.9887 8.01329 12.5277 8.00057C12.0667 7.98785 11.6567 8.29211 11.5354 8.73708C11.2998 9.60073 10.8219 10.9871 10.1687 12.2894C9.86452 12.896 9.54152 13.4447 9.21099 13.9052L8.49008 8.85877C8.41197 8.31204 7.90544 7.93214 7.35871 8.01024C6.81197 8.08835 6.43207 8.59488 6.51018 9.14161L7.51018 16.1416C7.55756 16.4733 7.76786 16.7592 8.07036 16.9031C8.37285 17.0471 8.72735 17.03 9.01462 16.8577C10.2766 16.1005 11.2577 14.5795 11.9565 13.186C12.0567 12.9862 12.153 12.785 12.2454 12.584L13.0223 16.2097C13.0949 16.5486 13.3379 16.8257 13.6643 16.9421C13.9908 17.0585 14.3542 16.9976 14.6248 16.7811C15.8169 15.8274 16.6882 14.3132 17.2922 12.9239C17.9066 11.5108 18.3015 10.0922 18.4807 9.19631Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.86646 22.25 12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572C9.86646 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572C1.74999 9.86647 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.86647 1.74999 12.0572 1.75Z',
  d5: 'M17.6962 8.01961C18.2378 8.12792 18.589 8.65475 18.4807 9.19631C18.3015 10.0922 17.9066 11.5108 17.2922 12.9239C16.6882 14.3132 15.8169 15.8274 14.6248 16.7811C14.3542 16.9976 13.9908 17.0585 13.6643 16.9421C13.3379 16.8257 13.0949 16.5486 13.0223 16.2097L12.2454 12.584C12.153 12.785 12.0567 12.9862 11.9565 13.186C11.2577 14.5795 10.2766 16.1005 9.01462 16.8577C8.72735 17.0301 8.37285 17.0471 8.07036 16.9031C7.76786 16.7592 7.55756 16.4733 7.51018 16.1416L6.51018 9.14161C6.43207 8.59488 6.81197 8.08835 7.35871 8.01024C7.90544 7.93214 8.41197 8.31204 8.49008 8.85877L9.21099 13.9052C9.54152 13.4447 9.86452 12.896 10.1687 12.2894C10.8219 10.9871 11.2998 9.60073 11.5354 8.73708C11.6567 8.29211 12.0667 7.98785 12.5277 8.00057C12.9887 8.01329 13.3813 8.33968 13.4779 8.79066L14.5595 13.8378C14.889 13.3256 15.1904 12.742 15.4581 12.1265C16.0103 10.8562 16.3654 9.5749 16.5195 8.80408C16.6279 8.26252 17.1547 7.9113 17.6962 8.01961Z',
  d6: 'M21 3H3V21H21V3Z',
  d7: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM18.4801 9.19606L18.6762 8.21547L16.7151 7.82324L16.519 8.80382C16.3648 9.57465 16.0098 10.8559 15.4575 12.1262C15.1898 12.7418 14.8884 13.3253 14.5589 13.8376L13.4773 8.79041L11.5348 8.73682C11.2992 9.60047 10.8213 10.9868 10.1682 12.2891C9.86393 12.8957 9.54092 13.4445 9.2104 13.9049L8.34806 7.86857L6.36816 8.15141L7.72258 17.6323L9.01403 16.8574C10.276 16.1003 11.2571 14.5792 11.9559 13.1857C12.0561 12.986 12.1525 12.7847 12.2448 12.5838L13.3608 17.7916L14.6242 16.7808C15.8163 15.8271 16.6876 14.3129 17.2916 12.9237C17.906 11.5106 18.3009 10.0919 18.4801 9.19606Z',
};

export const IconWebflowRectangleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-rectangle-stroke-rounded IconWebflowRectangleStrokeRounded"
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

export const IconWebflowRectangleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-rectangle-duotone-rounded IconWebflowRectangleDuotoneRounded"
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

export const IconWebflowRectangleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-rectangle-twotone-rounded IconWebflowRectangleTwotoneRounded"
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

export const IconWebflowRectangleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-rectangle-solid-rounded IconWebflowRectangleSolidRounded"
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

export const IconWebflowRectangleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-rectangle-bulk-rounded IconWebflowRectangleBulkRounded"
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

export const IconWebflowRectangleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-rectangle-stroke-sharp IconWebflowRectangleStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconWebflowRectangleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-rectangle-solid-sharp IconWebflowRectangleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWebflowRectangle: TheIconSelfPack = {
  name: 'WebflowRectangle',
  StrokeRounded: IconWebflowRectangleStrokeRounded,
  DuotoneRounded: IconWebflowRectangleDuotoneRounded,
  TwotoneRounded: IconWebflowRectangleTwotoneRounded,
  SolidRounded: IconWebflowRectangleSolidRounded,
  BulkRounded: IconWebflowRectangleBulkRounded,
  StrokeSharp: IconWebflowRectangleStrokeSharp,
  SolidSharp: IconWebflowRectangleSolidSharp,
};