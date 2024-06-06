import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 16H3C2.44772 16 2 16.4477 2 17V17.5C2 18.0523 2.44772 18.5 3 18.5H4C4.55228 18.5 5 18.9477 5 19.5V20C5 20.5523 4.55228 21 4 21H2',
  d2: 'M8.5 16H9.5C10.0523 16 10.5 16.4477 10.5 17V20C10.5 20.5523 10.0523 21 9.5 21H8.5C7.94772 21 7.5 20.5523 7.5 20V17C7.5 16.4477 7.94772 16 8.5 16Z',
  d3: 'M14 16H15C15.5523 16 16 16.4477 16 17V20C16 20.5523 15.5523 21 15 21H14C13.4477 21 13 20.5523 13 20V17C13 16.4477 13.4477 16 14 16Z',
  d4: 'M22 16V21L18.5 16V21',
  d5: 'M17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13C14.7614 13 17 10.7614 17 8Z',
  d6: 'M13.5 8.5L12 8V5.5',
  d7: 'M1.25 17C1.25 16.0335 2.0335 15.25 3 15.25H5C5.41421 15.25 5.75 15.5858 5.75 16C5.75 16.4142 5.41421 16.75 5 16.75H3C2.86193 16.75 2.75 16.8619 2.75 17V17.5C2.75 17.6381 2.86193 17.75 3 17.75H4C4.9665 17.75 5.75 18.5335 5.75 19.5V20C5.75 20.9665 4.9665 21.75 4 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21C1.25 20.5858 1.58579 20.25 2 20.25H4C4.13807 20.25 4.25 20.1381 4.25 20V19.5C4.25 19.3619 4.13807 19.25 4 19.25H3C2.0335 19.25 1.25 18.4665 1.25 17.5V17Z',
  d8: 'M6.75 17C6.75 16.0335 7.5335 15.25 8.5 15.25H9.5C10.4665 15.25 11.25 16.0335 11.25 17V20C11.25 20.9665 10.4665 21.75 9.5 21.75H8.5C7.5335 21.75 6.75 20.9665 6.75 20V17ZM8.5 16.75C8.36193 16.75 8.25 16.8619 8.25 17V20C8.25 20.1381 8.36193 20.25 8.5 20.25H9.5C9.63807 20.25 9.75 20.1381 9.75 20V17C9.75 16.8619 9.63807 16.75 9.5 16.75H8.5Z',
  d9: 'M12.25 17C12.25 16.0335 13.0335 15.25 14 15.25H15C15.9665 15.25 16.75 16.0335 16.75 17V20C16.75 20.9665 15.9665 21.75 15 21.75H14C13.0335 21.75 12.25 20.9665 12.25 20V17ZM14 16.75C13.8619 16.75 13.75 16.8619 13.75 17V20C13.75 20.1381 13.8619 20.25 14 20.25H15C15.1381 20.25 15.25 20.1381 15.25 20V17C15.25 16.8619 15.1381 16.75 15 16.75H14Z',
  d10: 'M18.2745 15.2848C18.5867 15.1863 18.9267 15.3018 19.1144 15.57L21.25 18.6208V16.0001C21.25 15.5858 21.5858 15.2501 22 15.2501C22.4142 15.2501 22.75 15.5858 22.75 16.0001V21.0001C22.75 21.3274 22.5377 21.6169 22.2255 21.7154C21.9133 21.8138 21.5733 21.6983 21.3856 21.4302L19.25 18.3793V21.0001C19.25 21.4143 18.9142 21.7501 18.5 21.7501C18.0858 21.7501 17.75 21.4143 17.75 21.0001V16.0001C17.75 15.6727 17.9623 15.3832 18.2745 15.2848Z',
  d11: 'M12 13.75C8.82436 13.75 6.25 11.1756 6.25 8C6.25 4.82436 8.82436 2.25 12 2.25C15.1756 2.25 17.75 4.82436 17.75 8C17.75 11.1756 15.1756 13.75 12 13.75ZM12.75 5.5C12.75 5.08579 12.4142 4.75 12 4.75C11.5858 4.75 11.25 5.08579 11.25 5.5V8C11.25 8.32282 11.4566 8.60943 11.7628 8.71151L13.2628 9.21151C13.6558 9.3425 14.0805 9.13013 14.2115 8.73717C14.3425 8.34421 14.1301 7.91947 13.7372 7.78849L12.75 7.45943V5.5Z',
  d12: 'M6.25 8C6.25 11.1756 8.82436 13.75 12 13.75C15.1756 13.75 17.75 11.1756 17.75 8C17.75 4.82436 15.1756 2.25 12 2.25C8.82436 2.25 6.25 4.82436 6.25 8Z',
  d13: 'M12 4.75C12.4142 4.75 12.75 5.08579 12.75 5.5V7.45943L13.7372 7.78849C14.1301 7.91947 14.3425 8.34421 14.2115 8.73717C14.0805 9.13013 13.6558 9.3425 13.2628 9.21151L11.7628 8.71151C11.4566 8.60943 11.25 8.32282 11.25 8V5.5C11.25 5.08579 11.5858 4.75 12 4.75Z',
  d14: 'M5 16H2V18.5H5V21H2',
  d15: 'M13 16H16V21H13V16Z',
  d16: 'M7.5 16H10.5V21H7.5V16Z',
  d17: 'M22 16V21H21.5L19 16H18.5V21',
  d18: 'M1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H5.75V16.75H2.75V17.75H5C5.41421 17.75 5.75 18.0858 5.75 18.5V21C5.75 21.4142 5.41421 21.75 5 21.75H1.25V20.25H4.25V19.25H2C1.58579 19.25 1.25 18.9142 1.25 18.5V16Z',
  d19: 'M12.25 16C12.25 15.5858 12.5858 15.25 13 15.25H16C16.4142 15.25 16.75 15.5858 16.75 16V21C16.75 21.4142 16.4142 21.75 16 21.75H13C12.5858 21.75 12.25 21.4142 12.25 21V16ZM13.75 16.75V20.25H15.25V16.75H13.75Z',
  d20: 'M6.75 16C6.75 15.5858 7.08579 15.25 7.5 15.25H10.5C10.9142 15.25 11.25 15.5858 11.25 16V21C11.25 21.4142 10.9142 21.75 10.5 21.75H7.5C7.08579 21.75 6.75 21.4142 6.75 21V16ZM8.25 16.75V20.25H9.75V16.75H8.25Z',
  d21: 'M17.75 15.25H19.4635L21.25 18.8229V15.25H22.75V21.75H21.0365L19.25 18.1771V21.75H17.75V15.25Z',
  d22: 'M12 13.75C8.82436 13.75 6.25 11.1756 6.25 8C6.25 4.82436 8.82436 2.25 12 2.25C15.1756 2.25 17.75 4.82436 17.75 8C17.75 11.1756 15.1756 13.75 12 13.75ZM12.75 7.45943V4.75H11.25V8.54057L13.9743 9.44868L14.4487 8.02566L12.75 7.45943Z',
};

export const IconComingSoon01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-01-stroke-rounded IconComingSoon01StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconComingSoon01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-01-duotone-rounded IconComingSoon01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconComingSoon01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-01-twotone-rounded IconComingSoon01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconComingSoon01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-01-solid-rounded IconComingSoon01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconComingSoon01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-01-bulk-rounded IconComingSoon01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComingSoon01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-01-stroke-sharp IconComingSoon01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconComingSoon01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coming-soon-01-solid-sharp IconComingSoon01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComingSoon01: TheIconSelfPack = {
  name: 'ComingSoon01',
  StrokeRounded: IconComingSoon01StrokeRounded,
  DuotoneRounded: IconComingSoon01DuotoneRounded,
  TwotoneRounded: IconComingSoon01TwotoneRounded,
  SolidRounded: IconComingSoon01SolidRounded,
  BulkRounded: IconComingSoon01BulkRounded,
  StrokeSharp: IconComingSoon01StrokeSharp,
  SolidSharp: IconComingSoon01SolidSharp,
};