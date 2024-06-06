import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.5 9L8.5 16C10.5 14.8 12 10.8333 12.5 9L14 16C16 14.4 17.1667 10.6667 17.5 9',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM18.4807 9.19631C18.589 8.65475 18.2378 8.12792 17.6962 8.01961C17.1547 7.9113 16.6279 8.26252 16.5195 8.80408C16.3654 9.5749 16.0103 10.8562 15.4581 12.1265C15.1904 12.7421 14.889 13.3256 14.5595 13.8378L13.4779 8.79066C13.3813 8.33968 12.9887 8.01329 12.5277 8.00057C12.0667 7.98785 11.6567 8.29211 11.5354 8.73708C11.2998 9.60073 10.8219 10.9871 10.1687 12.2894C9.86452 12.896 9.54152 13.4447 9.21099 13.9052L8.49008 8.85877C8.41197 8.31204 7.90544 7.93214 7.35871 8.01024C6.81197 8.08835 6.43207 8.59488 6.51018 9.14161L7.51018 16.1416C7.55756 16.4733 7.76786 16.7592 8.07036 16.9031C8.37285 17.0471 8.72735 17.03 9.01462 16.8577C10.2766 16.1005 11.2577 14.5795 11.9565 13.186C12.0567 12.9862 12.153 12.785 12.2454 12.584L13.0223 16.2097C13.0949 16.5486 13.3379 16.8257 13.6643 16.9421C13.9908 17.0585 14.3542 16.9976 14.6248 16.7811C15.8169 15.8274 16.6882 14.3132 17.2922 12.9239C17.9066 11.5108 18.3015 10.0922 18.4807 9.19631Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M17.6962 8.01961C18.2378 8.12792 18.589 8.65475 18.4807 9.19631C18.3015 10.0922 17.9066 11.5108 17.2922 12.9239C16.6882 14.3132 15.8169 15.8274 14.6248 16.7811C14.3542 16.9976 13.9908 17.0585 13.6643 16.9421C13.3379 16.8257 13.0949 16.5486 13.0223 16.2097L12.2454 12.584C12.153 12.785 12.0567 12.9862 11.9565 13.186C11.2577 14.5795 10.2766 16.1005 9.01462 16.8577C8.72735 17.0301 8.37285 17.0471 8.07036 16.9031C7.76786 16.7592 7.55756 16.4733 7.51018 16.1416L6.51018 9.14161C6.43207 8.59488 6.81197 8.08835 7.35871 8.01024C7.90544 7.93214 8.41197 8.31204 8.49008 8.85877L9.21099 13.9052C9.54152 13.4447 9.86452 12.896 10.1687 12.2894C10.8219 10.9871 11.2998 9.60073 11.5354 8.73708C11.6567 8.29211 12.0667 7.98785 12.5277 8.00057C12.9887 8.01329 13.3813 8.33968 13.4779 8.79066L14.5595 13.8378C14.889 13.3256 15.1904 12.742 15.4581 12.1265C16.0103 10.8562 16.3654 9.5749 16.5195 8.80408C16.6279 8.26252 17.1547 7.9113 17.6962 8.01961Z',
  d5: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM18.4801 9.19606L18.6762 8.21547L16.7151 7.82324L16.519 8.80382C16.3648 9.57465 16.0098 10.8559 15.4575 12.1262C15.1898 12.7418 14.8884 13.3253 14.5589 13.8376L13.4773 8.79041L11.5348 8.73682C11.2992 9.60047 10.8213 10.9868 10.1682 12.2891C9.86393 12.8957 9.54092 13.4445 9.2104 13.9049L8.34806 7.86857L6.36816 8.15141L7.72258 17.6323L9.01403 16.8574C10.276 16.1003 11.2571 14.5792 11.9559 13.1857C12.0561 12.986 12.1525 12.7847 12.2448 12.5838L13.3608 17.7916L14.6242 16.7808C15.8163 15.8271 16.6876 14.3129 17.2916 12.9237C17.906 11.5106 18.3009 10.0919 18.4801 9.19606Z',
};

export const IconWebflowEllipseStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-ellipse-stroke-rounded IconWebflowEllipseStrokeRounded"
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

export const IconWebflowEllipseDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-ellipse-duotone-rounded IconWebflowEllipseDuotoneRounded"
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

export const IconWebflowEllipseTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-ellipse-twotone-rounded IconWebflowEllipseTwotoneRounded"
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

export const IconWebflowEllipseSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-ellipse-solid-rounded IconWebflowEllipseSolidRounded"
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

export const IconWebflowEllipseBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-ellipse-bulk-rounded IconWebflowEllipseBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWebflowEllipseStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-ellipse-stroke-sharp IconWebflowEllipseStrokeSharp"
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
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconWebflowEllipseSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-ellipse-solid-sharp IconWebflowEllipseSolidSharp"
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

export const iconPackOfWebflowEllipse: TheIconSelfPack = {
  name: 'WebflowEllipse',
  StrokeRounded: IconWebflowEllipseStrokeRounded,
  DuotoneRounded: IconWebflowEllipseDuotoneRounded,
  TwotoneRounded: IconWebflowEllipseTwotoneRounded,
  SolidRounded: IconWebflowEllipseSolidRounded,
  BulkRounded: IconWebflowEllipseBulkRounded,
  StrokeSharp: IconWebflowEllipseStrokeSharp,
  SolidSharp: IconWebflowEllipseSolidSharp,
};