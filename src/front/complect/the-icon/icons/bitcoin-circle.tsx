import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M9 12H13.2M9 12V9.2963C9 8.82489 9 8.58919 9.14645 8.44274C9.29289 8.2963 9.5286 8.2963 10 8.2963H13.2C14.1941 8.2963 15 9.1254 15 10.1481C15 11.1709 14.1941 12 13.2 12M9 12V14.7037C9 15.1751 9 15.4108 9.14645 15.5572C9.29289 15.7037 9.5286 15.7037 10 15.7037H13.2C14.1941 15.7037 15 14.8746 15 13.8518C15 12.8291 14.1941 12 13.2 12M10.4938 8.2963V7M10.4938 17V15.7037M12.8982 8.2963V7M12.8982 17V15.7037',
  d3: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.14645 8.44332C9 8.58977 9 8.82547 9 9.29688V14.7043C9 15.1757 9 15.4114 9.14645 15.5578C9.29289 15.7043 9.5286 15.7043 10 15.7043H13.2C14.1941 15.7043 15 14.8752 15 13.8524C15 12.8297 14.1941 12.0006 13.2 12.0006C14.1941 12.0006 15 11.1715 15 10.1487C15 9.12598 14.1941 8.29688 13.2 8.29688H10C9.5286 8.29688 9.29289 8.29688 9.14645 8.44332Z',
  d4: 'M9 12H13.2M9 12V9.29631C9 8.8249 9 8.5892 9.14645 8.44275C9.29289 8.29631 9.5286 8.29631 10 8.29631H13.2C14.1941 8.29631 15 9.12541 15 10.1482C15 11.1709 14.1941 12 13.2 12M9 12V14.7037C9 15.1751 9 15.4108 9.14645 15.5573C9.29289 15.7037 9.5286 15.7037 10 15.7037H13.2C14.1941 15.7037 15 14.8746 15 13.8519C15 12.8291 14.1941 12 13.2 12M10.4938 8.29631V7.00001M10.4938 17V15.7037M12.8982 8.29631V7.00001M12.8982 17V15.7037',
  d5: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.2438 7C11.2438 6.58579 10.9081 6.25 10.4938 6.25C10.0796 6.25 9.74385 6.58579 9.74385 7V7.54732C9.60783 7.54931 9.47242 7.55503 9.35145 7.57129C9.13212 7.60078 8.85193 7.67661 8.61613 7.91241C8.38033 8.14821 8.3045 8.4284 8.27501 8.64772C8.24984 8.83494 8.24993 9.05674 8.25001 9.26185L8.25002 9.2963V14.7037L8.25001 14.7381C8.24993 14.9433 8.24984 15.1651 8.27501 15.3523C8.3045 15.5716 8.38033 15.8518 8.61613 16.0876C8.85193 16.3234 9.13212 16.3992 9.35145 16.4287C9.47242 16.445 9.60783 16.4507 9.74385 16.4527V17C9.74385 17.4142 10.0796 17.75 10.4938 17.75C10.9081 17.75 11.2438 17.4142 11.2438 17V16.4537H12.1482V17C12.1482 17.4142 12.484 17.75 12.8982 17.75C13.3124 17.75 13.6482 17.4142 13.6482 17V16.4139C14.8561 16.1967 15.75 15.1166 15.75 13.8519C15.75 13.1336 15.4617 12.4749 14.9914 12C15.4617 11.5251 15.75 10.8664 15.75 10.1481C15.75 8.88343 14.8561 7.8033 13.6482 7.58605V7C13.6482 6.58579 13.3124 6.25 12.8982 6.25C12.484 6.25 12.1482 6.58579 12.1482 7V7.5463H11.2438V7ZM9.75117 9.04745C9.82063 9.04633 9.90094 9.0463 10 9.0463H13.2C13.76 9.0463 14.25 9.51939 14.25 10.1481C14.25 10.7769 13.76 11.25 13.2 11.25H9.75002V9.2963C9.75002 9.19722 9.75005 9.1169 9.75117 9.04745ZM9.75002 12.75H13.2C13.76 12.75 14.25 13.2231 14.25 13.8519C14.25 14.4806 13.76 14.9537 13.2 14.9537H10C9.90094 14.9537 9.82063 14.9537 9.75117 14.9525C9.75005 14.8831 9.75002 14.8028 9.75002 14.7037V12.75Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d7: 'M10.4938 6.25C10.9081 6.25 11.2438 6.58579 11.2438 7V7.5463H12.1482V7C12.1482 6.58579 12.484 6.25 12.8982 6.25C13.3124 6.25 13.6482 6.58579 13.6482 7V7.58605C14.8561 7.8033 15.75 8.88343 15.75 10.1481C15.75 10.8664 15.4617 11.5251 14.9914 12C15.4617 12.4749 15.75 13.1336 15.75 13.8519C15.75 15.1166 14.8561 16.1967 13.6482 16.4139V17C13.6482 17.4142 13.3124 17.75 12.8982 17.75C12.484 17.75 12.1482 17.4142 12.1482 17V16.4537H11.2438V17C11.2438 17.4142 10.9081 17.75 10.4938 17.75C10.0796 17.75 9.74385 17.4142 9.74385 17V16.4527C9.60783 16.4507 9.47242 16.445 9.35145 16.4287C9.13212 16.3992 8.85193 16.3234 8.61613 16.0876C8.38033 15.8518 8.3045 15.5716 8.27501 15.3523C8.24984 15.1651 8.24993 14.9433 8.25001 14.7381C8.25001 14.7266 8.25002 14.7151 8.25002 14.7037V9.2963C8.25002 9.28487 8.25001 9.27339 8.25001 9.26185C8.24993 9.05674 8.24984 8.83494 8.27501 8.64772C8.3045 8.4284 8.38033 8.14821 8.61613 7.91241C8.85193 7.67661 9.13212 7.60078 9.35145 7.57129C9.47242 7.55503 9.60783 7.54931 9.74385 7.54732V7C9.74385 6.58579 10.0796 6.25 10.4938 6.25ZM10 9.0463C9.90094 9.0463 9.82063 9.04633 9.75117 9.04745C9.75005 9.1169 9.75002 9.19722 9.75002 9.2963V11.25H13.2C13.76 11.25 14.25 10.7769 14.25 10.1481C14.25 9.51939 13.76 9.0463 13.2 9.0463H10ZM13.2 12.75H9.75002V14.7037C9.75002 14.8028 9.75005 14.8831 9.75117 14.9525C9.82063 14.9537 9.90094 14.9537 10 14.9537H13.2C13.76 14.9537 14.25 14.4806 14.25 13.8519C14.25 13.2231 13.76 12.75 13.2 12.75Z',
  d8: 'M9 12H13.2M9 12V8.29629H13.2C14.1941 8.29629 15 9.1254 15 10.1481C15 11.1709 14.1941 12 13.2 12M9 12V15.7037H13.2C14.1941 15.7037 15 14.8746 15 13.8518C15 12.8291 14.1941 12 13.2 12M10.4938 8.29629V6.5M10.4938 17.5V15.7037M12.8982 8.29629V6.5M12.8982 17.5V15.7037',
  d9: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.25 7.54629H9.74383V6.5H11.2438V7.54629H12.1482V6.5H13.6482V7.58605C14.8561 7.80329 15.75 8.88342 15.75 10.1481C15.75 10.8664 15.4617 11.5251 14.9913 12C15.4617 12.4749 15.75 13.1336 15.75 13.8518C15.75 15.1166 14.8561 16.1967 13.6482 16.4139V17.5H12.1482V16.4537H11.2438V17.5H9.74383V16.4537H8.25V7.54629ZM14.25 10.1481C14.25 10.7769 13.76 11.25 13.2 11.25H9.75V9.04629H13.2C13.76 9.04629 14.25 9.51939 14.25 10.1481ZM13.2 12.75H9.75V14.9537H13.2C13.76 14.9537 14.25 14.4806 14.25 13.8518C14.25 13.2231 13.76 12.75 13.2 12.75Z',
};

export const IconBitcoinCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-circle-stroke-rounded IconBitcoinCircleStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-circle-duotone-rounded IconBitcoinCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-circle-twotone-rounded IconBitcoinCircleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-circle-solid-rounded IconBitcoinCircleSolidRounded"
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

export const IconBitcoinCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-circle-bulk-rounded IconBitcoinCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBitcoinCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-circle-stroke-sharp IconBitcoinCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-circle-solid-sharp IconBitcoinCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinCircle: TheIconSelfPack = {
  name: 'BitcoinCircle',
  StrokeRounded: IconBitcoinCircleStrokeRounded,
  DuotoneRounded: IconBitcoinCircleDuotoneRounded,
  TwotoneRounded: IconBitcoinCircleTwotoneRounded,
  SolidRounded: IconBitcoinCircleSolidRounded,
  BulkRounded: IconBitcoinCircleBulkRounded,
  StrokeSharp: IconBitcoinCircleStrokeSharp,
  SolidSharp: IconBitcoinCircleSolidSharp,
};