import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 17C12.2269 17 12.4378 16.894 12.8595 16.682L16.2497 14.978C17.7499 14.224 18.5 13.847 18.5 13.25V5.75M12 17C11.7731 17 11.5623 16.894 11.1405 16.682L7.75027 14.978C6.25009 14.224 5.5 13.847 5.5 13.25V5.75M12 17V9.5M18.5 5.75C18.5 5.15298 17.7499 4.77597 16.2497 4.02196L12.8595 2.31799C12.4377 2.106 12.2269 2 12 2C11.7731 2 11.5623 2.106 11.1405 2.31799L7.75027 4.02196C6.25009 4.77597 5.5 5.15298 5.5 5.75M18.5 5.75C18.5 6.34702 17.7499 6.72403 16.2497 7.47804L12.8595 9.18201C12.4377 9.394 12.2269 9.5 12 9.5M5.5 5.75C5.5 6.34702 6.25009 6.72403 7.75027 7.47804L11.1405 9.18201C11.5623 9.394 11.7731 9.5 12 9.5',
  d2: 'M10 20.75C10 20.0596 10.5596 19.5 11.25 19.5H12.75C13.4404 19.5 14 20.0596 14 20.75M10 20.75C10 21.4404 10.5596 22 11.25 22H12.75C13.4404 22 14 21.4404 14 20.75M10 20.75H5M14 20.75H19',
  d3: 'M12.8595 16.682L16.2497 14.978C17.7499 14.224 18.5 13.847 18.5 13.25V5.75C18.5 5.15298 17.7499 4.77597 16.2497 4.02196L16.2497 4.02196L12.8595 2.31799C12.4377 2.106 12.2269 2 12 2C11.7731 2 11.5623 2.106 11.1405 2.31799L7.75027 4.02196C6.25009 4.77597 5.5 5.15298 5.5 5.75C5.5 6.34702 6.25009 6.72403 7.75027 7.47804L11.1405 9.18201C11.5623 9.394 11.7731 9.5 12 9.5V17C12.2269 17 12.4378 16.894 12.8595 16.682Z',
  d4: 'M12.75 22H11.25C10.5596 22 10 21.4404 10 20.75C10 20.0596 10.5596 19.5 11.25 19.5H12.75C13.4404 19.5 14 20.0596 14 20.75C14 21.4404 13.4404 22 12.75 22Z',
  d5: 'M10.8874 1.60551C11.2199 1.43689 11.5883 1.25 12 1.25C12.4117 1.25 12.7801 1.43689 13.1126 1.60551L16.6401 3.37877C17.3444 3.7327 17.9477 4.03588 18.3682 4.33089C18.7956 4.63075 19.25 5.06982 19.25 5.75C19.25 6.43018 18.7956 6.86925 18.3682 7.16911C17.9477 7.46412 17.3444 7.76731 16.6401 8.12123L13.1126 9.8945C12.7801 10.0631 12.4117 10.25 12 10.25C11.5883 10.25 11.2199 10.0631 10.8874 9.89449L7.35986 8.12123C6.65559 7.7673 6.05228 7.46411 5.63181 7.16911C5.20441 6.86925 4.75 6.43018 4.75 5.75C4.75 5.06982 5.20441 4.63075 5.63181 4.33089C6.05228 4.03588 6.6556 3.7327 7.35987 3.37877L10.8874 1.60551Z',
  d6: 'M5.5 5C5.91421 5 6.25 5.33579 6.25 5.75V13.2285C6.54688 13.5195 7.31415 13.9194 8.08708 14.3079L11.25 15.8977V9.5C11.25 9.08579 11.5858 8.75 12 8.75C12.4142 8.75 12.75 9.08579 12.75 9.5V15.8977L15.9129 14.3079C16.6858 13.9194 17.3516 13.6211 17.75 13.2285V5.75C17.75 5.33579 18.0858 5 18.5 5C18.9142 5 19.25 5.33579 19.25 5.75V13.25C19.25 13.9302 18.7956 14.3692 18.3682 14.6691C17.9477 14.9641 17.3444 15.2673 16.6402 15.6212L16.6401 15.6212L13.1126 17.3945C12.7801 17.5631 12.4117 17.75 12 17.75C11.5883 17.75 11.2199 17.5631 10.8874 17.3945L7.35984 15.6212C6.65558 15.2673 6.05228 14.9641 5.63181 14.6691C5.20441 14.3692 4.75 13.9302 4.75 13.25V5.75C4.75 5.33579 5.08579 5 5.5 5Z',
  d7: 'M9.39538 20C9.69207 19.267 10.4107 18.75 11.25 18.75H12.75C13.5893 18.75 14.3079 19.267 14.6046 20H19C19.4142 20 19.75 20.3358 19.75 20.75C19.75 21.1642 19.4142 21.5 19 21.5H14.6046C14.3079 22.233 13.5893 22.75 12.75 22.75H11.25C10.4107 22.75 9.69207 22.233 9.39538 21.5H5C4.58579 21.5 4.25 21.1642 4.25 20.75C4.25 20.3358 4.58579 20 5 20H9.39538Z',
  d8: 'M12 9.5V16.6508M12 9.5L5.84505 5.94907M12 9.5L18.155 5.94907M12 2L18.5 5.75V13.25L12 17L5.5 13.25V5.75L12 2Z',
  d9: 'M10 20.75H5M14 20.75H19M10 22H14V19.5H10V22Z',
  d10: 'M12.3748 1.35036C12.1428 1.21655 11.8572 1.21655 11.6252 1.35036L5.12521 5.10036C4.89304 5.2343 4.75 5.48197 4.75 5.75V13.25C4.75 13.518 4.89304 13.7657 5.12521 13.8996L11.6252 17.6496C11.8572 17.7835 12.1428 17.7835 12.3748 17.6496L18.8748 13.8996C19.107 13.7657 19.25 13.518 19.25 13.25V5.75C19.25 5.48197 19.107 5.2343 18.8748 5.10036L12.3748 1.35036ZM11.25 9.93344L6.25 7.04883V12.8171L11.25 15.7017V9.93344ZM17.75 12.8171L12.75 15.7017V9.93344L17.75 7.04883V12.8171Z',
  d11: 'M9.25 18.75H14.75V20H19.75V21.5H14.75V22.75H9.25V21.5H4.25V20H9.25V18.75ZM10.75 20.25V21.25H13.25V20.25H10.75Z',
};

export const IconBlockchain05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-05-stroke-rounded IconBlockchain05StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-05-duotone-rounded IconBlockchain05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-05-twotone-rounded IconBlockchain05TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-05-solid-rounded IconBlockchain05SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconBlockchain05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-05-bulk-rounded IconBlockchain05BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-05-stroke-sharp IconBlockchain05StrokeSharp"
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
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-05-solid-sharp IconBlockchain05SolidSharp"
    >
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

export const iconPackOfBlockchain05: TheIconSelfPack = {
  name: 'Blockchain05',
  StrokeRounded: IconBlockchain05StrokeRounded,
  DuotoneRounded: IconBlockchain05DuotoneRounded,
  TwotoneRounded: IconBlockchain05TwotoneRounded,
  SolidRounded: IconBlockchain05SolidRounded,
  BulkRounded: IconBlockchain05BulkRounded,
  StrokeSharp: IconBlockchain05StrokeSharp,
  SolidSharp: IconBlockchain05SolidSharp,
};