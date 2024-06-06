import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z',
  d2: 'M12 10V16M9 13L15 13',
  d3: 'M12 1.25C11.1339 1.25 10.3597 1.52688 9.52381 1.99594C8.7139 2.45043 7.78586 3.12145 6.61887 3.96524L5.10984 5.05632C4.1733 5.73346 3.42528 6.27429 2.86109 6.77487C2.27855 7.29173 1.84274 7.807 1.5663 8.45513C1.28925 9.10469 1.22225 9.77045 1.25941 10.5381C1.29528 11.2789 1.43264 12.1727 1.60393 13.2872L1.91918 15.3387C2.16256 16.9225 2.35635 18.1836 2.64105 19.1662C2.93544 20.1821 3.35016 20.9887 4.0914 21.6052C4.82957 22.2192 5.7089 22.4926 6.78306 22.6231C7.828 22.75 9.14615 22.75 10.8111 22.75H13.1889C14.8539 22.75 16.172 22.75 17.2169 22.6231C18.2911 22.4926 19.1704 22.2192 19.9086 21.6052C20.6499 20.9887 21.0646 20.1821 21.359 19.1662C21.6437 18.1837 21.8374 16.9225 22.0808 15.3387L22.3961 13.2871C22.5674 12.1726 22.7047 11.2789 22.7406 10.5381C22.7778 9.77045 22.7108 9.10469 22.4337 8.45513C22.1573 7.807 21.7215 7.29173 21.1389 6.77487C20.5747 6.2743 19.8267 5.73347 18.8902 5.05633L17.3811 3.96525L17.3811 3.96524L17.3811 3.96522C16.2141 3.12144 15.2861 2.45043 14.4762 1.99594C13.6403 1.52688 12.8661 1.25 12 1.25ZM13 10C13 9.44771 12.5523 9 12 9C11.4477 9 11 9.44771 11 10V12H9C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H13V10Z',
  d4: 'M9.52381 1.99594C10.3597 1.52688 11.1339 1.25 12 1.25C12.8661 1.25 13.6403 1.52688 14.4762 1.99594C15.2861 2.45043 16.2141 3.12145 17.3811 3.96524L17.3811 3.96525L18.8902 5.05633C19.8267 5.73347 20.5747 6.2743 21.1389 6.77487C21.7215 7.29173 22.1573 7.807 22.4337 8.45513C22.7108 9.10469 22.7778 9.77045 22.7406 10.5381C22.7047 11.2789 22.5674 12.1726 22.3961 13.2871L22.0808 15.3387C21.8374 16.9225 21.6437 18.1837 21.359 19.1662C21.0646 20.1821 20.6499 20.9887 19.9086 21.6052C19.1704 22.2192 18.2911 22.4926 17.2169 22.6231C16.172 22.75 14.8539 22.75 13.1889 22.75H10.8111C9.14615 22.75 7.828 22.75 6.78306 22.6231C5.7089 22.4926 4.82957 22.2192 4.0914 21.6052C3.35016 20.9887 2.93544 20.1821 2.64105 19.1662C2.35635 18.1836 2.16256 16.9225 1.91918 15.3387L1.60393 13.2872C1.43264 12.1727 1.29528 11.2789 1.25941 10.5381C1.22225 9.77045 1.28925 9.10469 1.5663 8.45513C1.84274 7.807 2.27855 7.29173 2.86109 6.77487C3.42528 6.27429 4.1733 5.73346 5.10984 5.05632L6.61887 3.96524C7.78586 3.12145 8.7139 2.45043 9.52381 1.99594Z',
  d5: 'M12 9C12.5523 9 13 9.44772 13 10V12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V14H9C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12H11V10C11 9.44772 11.4477 9 12 9Z',
  d6: 'M19.4997 22L21.9997 9L11.9997 2L1.99805 9L4.49965 22H19.4997Z',
  d7: 'M12 10V18M8 14L16 14',
  d8: 'M12.4299 1.38558C12.1716 1.20482 11.8279 1.20481 11.5697 1.38554L1.56803 8.38554C1.32572 8.55513 1.2057 8.85129 1.26159 9.14172L3.76319 22.1417C3.83114 22.4948 4.14012 22.75 4.49968 22.75H19.4997C19.8593 22.75 20.1683 22.4948 20.2362 22.1416L22.7363 9.14164C22.7921 8.85125 22.6721 8.55515 22.4299 8.38558L12.4299 1.38558ZM11 10V13H8V15H11V18H13V15H16V13H13V10H11Z',
};

export const IconClinicStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clinic-stroke-rounded IconClinicStrokeRounded"
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

export const IconClinicDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clinic-duotone-rounded IconClinicDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconClinicTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clinic-twotone-rounded IconClinicTwotoneRounded"
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

export const IconClinicSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clinic-solid-rounded IconClinicSolidRounded"
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

export const IconClinicBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clinic-bulk-rounded IconClinicBulkRounded"
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

export const IconClinicStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clinic-stroke-sharp IconClinicStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconClinicSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clinic-solid-sharp IconClinicSolidSharp"
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

export const iconPackOfClinic: TheIconSelfPack = {
  name: 'Clinic',
  StrokeRounded: IconClinicStrokeRounded,
  DuotoneRounded: IconClinicDuotoneRounded,
  TwotoneRounded: IconClinicTwotoneRounded,
  SolidRounded: IconClinicSolidRounded,
  BulkRounded: IconClinicBulkRounded,
  StrokeSharp: IconClinicStrokeSharp,
  SolidSharp: IconClinicSolidSharp,
};