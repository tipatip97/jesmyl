import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.5145 2C14.7408 2 15.3539 2 15.9052 2.22836C16.4565 2.45672 16.8901 2.89027 17.7572 3.75736L20.2424 6.24264C21.1095 7.10973 21.5431 7.54328 21.7714 8.09459C21.9998 8.6459 21.9998 9.25903 21.9998 10.4853V13.5147C21.9998 14.741 21.9998 15.3541 21.7714 15.9054C21.5431 16.4567 21.1095 16.8903 20.2425 17.7574L17.7572 20.2426C16.8901 21.1097 16.4565 21.5433 15.9052 21.7716C15.3539 22 14.7408 22 13.5145 22H10.4851C9.25887 22 8.64573 22 8.0944 21.7716C7.54308 21.5433 7.10953 21.1097 6.24244 20.2426L3.75729 17.7573C2.89023 16.8903 2.4567 16.4567 2.22835 15.9054C2 15.3541 2 14.741 2 13.5148V10.4852C2 9.259 2 8.64589 2.22835 8.09458C2.4567 7.54328 2.89023 7.10974 3.75729 6.24265L6.24244 3.75743C7.10953 2.8903 7.54308 2.45674 8.0944 2.22837C8.64573 2 9.25887 2 10.4851 2H13.5145Z',
  d2: 'M13.5145 2C14.7408 2 15.3539 2 15.9052 2.22836C16.4565 2.45672 16.8901 2.89027 17.7572 3.75736L20.2424 6.24264C21.1095 7.10973 21.5431 7.54328 21.7714 8.09459C21.9998 8.6459 21.9998 9.25903 21.9998 10.4853V13.5147C21.9998 14.741 21.9998 15.3541 21.7714 15.9054C21.5431 16.4567 21.1095 16.8903 20.2425 17.7574L17.7572 20.2426C16.8901 21.1097 16.4565 21.5433 15.9052 21.7716C15.3539 22 14.7408 22 13.5145 22H11.9998H10.4851C9.25887 22 8.64573 22 8.0944 21.7716C7.54308 21.5433 7.10953 21.1097 6.24244 20.2426L3.75729 17.7573C2.89023 16.8903 2.4567 16.4567 2.22835 15.9054C2 15.3541 2 14.741 2 13.5148V10.4852C2 9.259 2 8.64589 2.22835 8.09458C2.4567 7.54328 2.89023 7.10974 3.75729 6.24265L6.24244 3.75743C7.10953 2.8903 7.54308 2.45674 8.0944 2.22837C8.64573 2 9.25887 2 10.4851 2H11.9998H13.5145Z',
  d3: 'M11.9998 2H10.4851C9.25887 2 8.64573 2 8.0944 2.22837C7.54308 2.45674 7.10953 2.8903 6.24244 3.75743L3.75729 6.24265C2.89023 7.10974 2.4567 7.54328 2.22835 8.09458C2 8.64589 2 9.259 2 10.4852V13.5148C2 14.741 2 15.3541 2.22835 15.9054C2.4567 16.4567 2.89023 16.8903 3.75729 17.7573L6.24244 20.2426C7.10953 21.1097 7.54308 21.5433 8.0944 21.7716C8.64573 22 9.25887 22 10.4851 22H11.9998',
  d4: 'M10.3426 1.25004H13.6572C14.745 1.24952 15.5009 1.24916 16.1923 1.53554C16.8837 1.82192 17.418 2.35671 18.1868 3.12625L20.8737 5.8132C21.6433 6.58201 22.1781 7.11629 22.4644 7.80767C22.7508 8.49904 22.7505 9.25499 22.7499 10.3428V13.6574C22.7505 14.7452 22.7508 15.5011 22.4644 16.1925C22.1781 16.8839 21.6433 17.4182 20.8737 18.187L18.1868 20.8739C17.418 21.6435 16.8837 22.1783 16.1923 22.4646C15.5009 22.751 14.745 22.7507 13.6572 22.7501H10.3426C9.25483 22.7507 8.49886 22.751 7.80748 22.4646C7.11609 22.1782 6.5818 21.6434 5.813 20.8739L3.12618 18.187C2.35667 17.4182 1.82189 16.8839 1.53553 16.1925C1.24916 15.5011 1.24952 14.7452 1.25004 13.6575V10.3427C1.24952 9.25496 1.24916 8.49903 1.53553 7.80767C1.82189 7.1163 2.35667 6.58202 3.12618 5.81322L5.81299 3.12632C6.5818 2.35675 7.11609 1.82194 7.80748 1.53555C8.49886 1.24916 9.25483 1.24952 10.3426 1.25004Z',
  d5: 'M10.3426 1.25004H13.6572C14.745 1.24952 15.5009 1.24916 16.1923 1.53554C16.8837 1.82192 17.418 2.35671 18.1868 3.12625L19.5303 4.46973L4.46958 19.5304L3.12618 18.187C2.35667 17.4182 1.82189 16.8839 1.53553 16.1925C1.24916 15.5011 1.24952 14.7452 1.25004 13.6575V10.3427C1.24952 9.25496 1.24916 8.49903 1.53553 7.80767C1.82189 7.1163 2.35667 6.58202 3.12618 5.81322L5.81299 3.12632C6.5818 2.35675 7.11609 1.82194 7.80748 1.53555C8.49886 1.24916 9.25483 1.24952 10.3426 1.25004Z',
  d6: 'M20.8729 5.81222C21.6424 6.58103 22.1772 7.11531 22.4636 7.80669C22.75 8.49806 22.7496 9.25402 22.7491 10.3418V13.6564C22.7496 14.7442 22.75 15.5002 22.4636 16.1915C22.1772 16.8829 21.6425 17.4172 20.8729 18.186L20.8729 18.186L18.1859 20.873C17.4171 21.6425 16.8829 22.1773 16.1915 22.4637C15.5001 22.75 14.7442 22.7497 13.6564 22.7492H10.3418C9.254 22.7497 8.49803 22.75 7.80664 22.4636C7.11526 22.1773 6.58097 21.6424 5.81216 20.8729L4.46875 19.5294L19.5294 4.46875L20.8729 5.81222Z',
  d7: 'M16 22H8L2 16V8L8 2H16L22 8V16L16 22Z',
  d8: 'M7.68934 1.25H16.3107L22.75 7.68934V16.3107L16.3107 22.75H7.68934L1.25 16.3107V7.68934L7.68934 1.25Z',
};

export const IconOctagonStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="octagon-stroke-rounded IconOctagonStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconOctagonDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="octagon-duotone-rounded IconOctagonDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconOctagonTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="octagon-twotone-rounded IconOctagonTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOctagonSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="octagon-solid-rounded IconOctagonSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconOctagonBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="octagon-bulk-rounded IconOctagonBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconOctagonStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="octagon-stroke-sharp IconOctagonStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconOctagonSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="octagon-solid-sharp IconOctagonSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfOctagon: TheIconSelfPack = {
  name: 'Octagon',
  StrokeRounded: IconOctagonStrokeRounded,
  DuotoneRounded: IconOctagonDuotoneRounded,
  TwotoneRounded: IconOctagonTwotoneRounded,
  SolidRounded: IconOctagonSolidRounded,
  BulkRounded: IconOctagonBulkRounded,
  StrokeSharp: IconOctagonStrokeSharp,
  SolidSharp: IconOctagonSolidSharp,
};