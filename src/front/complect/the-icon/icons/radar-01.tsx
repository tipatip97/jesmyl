import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.5962 16.5962C14.0578 19.1346 9.94221 19.1346 7.40381 16.5962C4.8654 14.0578 4.8654 9.94221 7.40381 7.40381C8.92815 5.87946 11.0212 5.27051 13 5.57693',
  d2: 'M12 12L16.9497 7.05025C17.9829 6.01707 18.4995 5.50048 18.3867 4.75173C18.2739 4.00298 17.7382 3.7198 16.6667 3.15343C15.2736 2.41699 13.6855 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.5778 21.7031 9.22492 21.1679 8',
  d3: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d4: 'M7.25741 7.22041C8.86744 5.64003 11.0738 5.0135 13.1515 5.32933C13.6976 5.41233 14.0729 5.92224 13.9899 6.46826C13.9069 7.01427 13.397 7.38962 12.851 7.30662C11.3621 7.08031 9.7959 7.53117 8.65842 8.6477C6.77011 10.5012 6.77011 13.4986 8.65842 15.3521C10.5571 17.2158 13.643 17.2158 15.5417 15.3521C15.9358 14.9653 16.569 14.9711 16.9558 15.3653C17.3427 15.7594 17.3368 16.3926 16.9427 16.7794C14.2661 19.4067 9.93402 19.4067 7.25741 16.7794C4.57045 14.1419 4.57045 9.8579 7.25741 7.22041Z',
  d5: 'M1.25098 12C1.25098 6.06294 6.06392 1.25 12.001 1.25C13.8111 1.25 15.5195 1.6982 17.0184 2.4905C17.0401 2.502 17.0619 2.5135 17.0837 2.52501C17.5502 2.77137 18.0235 3.02132 18.3794 3.31816C18.8171 3.68331 19.1142 4.14229 19.2089 4.77084C19.3111 5.44903 19.1009 6.00591 18.7633 6.49253C18.4738 6.90958 18.0412 7.34202 17.5818 7.80125C17.5643 7.81872 17.5468 7.83623 17.5293 7.85378L12.692 12.691C12.3104 13.0727 11.6916 13.0727 11.3099 12.691C10.9283 12.3094 10.9283 11.6906 11.3099 11.309L16.1472 6.47171C16.6781 5.94084 16.9806 5.63307 17.1575 5.3782C17.2943 5.1811 17.2847 5.11817 17.2767 5.06534L17.2762 5.06208C17.2606 4.9589 17.2407 4.91365 17.1274 4.81911C16.9488 4.67014 16.6647 4.51435 16.1049 4.21847C14.8808 3.57137 13.4852 3.20455 12.001 3.20455C7.14338 3.20455 3.20552 7.1424 3.20552 12C3.20552 16.8576 7.14338 20.7955 12.001 20.7955C16.8586 20.7955 20.7964 16.8576 20.7964 12C20.7964 10.7473 20.5351 9.5582 20.065 8.48218C19.8489 7.9876 20.0747 7.41148 20.5693 7.19538C21.0638 6.97929 21.64 7.20505 21.8561 7.69964C22.432 9.01779 22.751 10.4729 22.751 12C22.751 17.9371 17.938 22.75 12.001 22.75C6.06392 22.75 1.25098 17.9371 1.25098 12Z',
  d6: 'M12 12L19.0711 4.92893C17.2614 3.11929 14.7614 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.5778 21.7031 9.22492 21.1679 8',
  d7: 'M6.81865 6.81761C8.53803 5.09823 10.8997 4.41243 13.1282 4.75753L12.8291 6.68905C11.1901 6.43523 9.46074 6.93966 8.20072 8.19968C6.10165 10.2987 6.10165 13.702 8.20072 15.8011C10.2998 17.9001 13.7031 17.9001 15.8021 15.8011L17.1842 17.1832C14.3218 20.0455 9.68102 20.0455 6.81865 17.1832C3.95628 14.3208 3.95628 9.67997 6.81865 6.81761Z',
  d8: 'M12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 10.7473 20.5342 9.5582 20.064 8.48218L21.8551 7.69964C22.431 9.01779 22.75 10.4729 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C14.9683 1.25 17.6571 2.4543 19.6014 4.3986L20.2924 5.08964L12.691 12.691L11.309 11.309L17.4901 5.12787C15.9849 3.92362 14.0771 3.20455 12 3.20455Z',
};

export const IconRadar01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-01-stroke-rounded IconRadar01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadar01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-01-duotone-rounded IconRadar01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadar01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-01-twotone-rounded IconRadar01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadar01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-01-solid-rounded IconRadar01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconRadar01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-01-bulk-rounded IconRadar01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRadar01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-01-stroke-sharp IconRadar01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRadar01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-01-solid-sharp IconRadar01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfRadar01: TheIconSelfPack = {
  name: 'Radar01',
  StrokeRounded: IconRadar01StrokeRounded,
  DuotoneRounded: IconRadar01DuotoneRounded,
  TwotoneRounded: IconRadar01TwotoneRounded,
  SolidRounded: IconRadar01SolidRounded,
  BulkRounded: IconRadar01BulkRounded,
  StrokeSharp: IconRadar01StrokeSharp,
  SolidSharp: IconRadar01SolidSharp,
};