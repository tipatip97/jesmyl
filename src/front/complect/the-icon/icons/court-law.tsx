import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z',
  d2: 'M11.25 13.25C12.4368 14.4368 14 15.6429 14 15.6429L16.1429 13.5C16.1429 13.5 14.9368 11.9368 13.75 10.75C12.5632 9.56319 11 8.35714 11 8.35714L8.85714 10.5C8.85714 10.5 10.0632 12.0632 11.25 13.25ZM11.25 13.25L7.5 17M16.5 13.1429L13.6429 16M11.3571 8L8.5 10.8571',
  d3: 'M2.25617 8.74938C1.82186 9.76763 1.99837 10.9162 2.35139 13.2135L2.65243 15.1724C3.15287 18.4289 3.40309 20.0572 4.571 21.0286C5.73891 22 7.44633 22 10.8612 22H13.1388C16.5537 22 18.2611 22 19.429 21.0286C20.5969 20.0572 20.8471 18.4289 21.3476 15.1724L21.6486 13.2135C22.0016 10.9162 22.1781 9.76763 21.7438 8.74938C21.3095 7.73112 20.346 7.03443 18.4189 5.64106L16.979 4.6C14.5817 2.86667 13.3831 2 12 2C10.6169 2 9.41829 2.86667 7.02099 4.6L5.58114 5.64106C3.65403 7.03443 2.69047 7.73112 2.25617 8.74938ZM13.75 10.75C12.5632 9.56319 11 8.35714 11 8.35714L8.85714 10.5C8.85714 10.5 10.0632 12.0632 11.25 13.25C12.4368 14.4368 14 15.6429 14 15.6429L16.1429 13.5C16.1429 13.5 14.9368 11.9368 13.75 10.75Z',
  d4: 'M12 1.25C11.1339 1.25 10.3597 1.52688 9.52381 1.99594C8.7139 2.45043 7.78586 3.12145 6.61887 3.96524L5.10984 5.05632C4.1733 5.73346 3.42528 6.27429 2.86109 6.77487C2.27855 7.29173 1.84274 7.807 1.5663 8.45513C1.28925 9.10469 1.22225 9.77045 1.25941 10.5381C1.29528 11.2789 1.43264 12.1727 1.60393 13.2872L1.91918 15.3387C2.16256 16.9225 2.35635 18.1836 2.64105 19.1662C2.93544 20.1821 3.35016 20.9887 4.0914 21.6052C4.82957 22.2192 5.7089 22.4926 6.78306 22.6231C7.828 22.75 9.14615 22.75 10.8111 22.75H13.1889C14.8539 22.75 16.172 22.75 17.2169 22.6231C18.2911 22.4926 19.1704 22.2192 19.9086 21.6052C20.6499 20.9887 21.0646 20.1821 21.359 19.1662C21.6437 18.1837 21.8374 16.9225 22.0808 15.3387L22.3961 13.2871C22.5674 12.1726 22.7047 11.2789 22.7406 10.5381C22.7778 9.77045 22.7108 9.10469 22.4337 8.45513C22.1573 7.807 21.7215 7.29173 21.1389 6.77487C20.5747 6.2743 19.8267 5.73347 18.8902 5.05633L17.3811 3.96525L17.3811 3.96524L17.3811 3.96522C16.2141 3.12144 15.2861 2.45043 14.4762 1.99594C13.6403 1.52688 12.8661 1.25 12 1.25ZM14.1732 16.5303C13.8803 16.8232 13.4054 16.8232 13.1125 16.5303C12.9021 16.3199 12.8428 16.0155 12.9348 15.7522C12.8292 15.6661 12.7132 15.5705 12.5896 15.4673C12.2496 15.1837 11.8476 14.8387 11.444 14.4702L8.45711 17.4571C8.06658 17.8476 7.43342 17.8476 7.04289 17.4571C6.65237 17.0666 6.65237 16.4334 7.04289 16.0429L10.0298 13.056C9.66126 12.6524 9.31631 12.2504 9.03265 11.9104C8.92947 11.7868 8.83394 11.6708 8.74782 11.5652C8.48449 11.6572 8.18011 11.5979 7.96967 11.3875C7.67678 11.0946 7.67678 10.6197 7.96967 10.3268L10.8268 7.46967C11.1197 7.17678 11.5946 7.17678 11.8875 7.46967C12.0979 7.68011 12.1572 7.98449 12.0652 8.24782C12.1708 8.33394 12.2868 8.42947 12.4104 8.53265C12.9571 8.98874 13.664 9.60332 14.2803 10.2197C14.8967 10.836 15.5113 11.5429 15.9673 12.0896C16.0705 12.2132 16.1661 12.3292 16.2522 12.4348C16.5155 12.3428 16.8199 12.4021 17.0303 12.6125C17.3232 12.9054 17.3232 13.3803 17.0303 13.6732L14.1732 16.5303Z',
  d5: 'M9.52381 1.99594C10.3597 1.52688 11.1339 1.25 12 1.25C12.8661 1.25 13.6403 1.52688 14.4762 1.99594C15.2861 2.45043 16.2141 3.12145 17.3811 3.96524L17.3811 3.96525L18.8902 5.05633C19.8267 5.73347 20.5747 6.2743 21.1389 6.77487C21.7215 7.29173 22.1573 7.807 22.4337 8.45513C22.7108 9.10469 22.7778 9.77045 22.7406 10.5381C22.7047 11.2789 22.5674 12.1726 22.3961 13.2871L22.0808 15.3387C21.8374 16.9225 21.6437 18.1837 21.359 19.1662C21.0646 20.1821 20.6499 20.9887 19.9086 21.6052C19.1704 22.2192 18.2911 22.4926 17.2169 22.6231C16.172 22.75 14.8539 22.75 13.1889 22.75H10.8111C9.14615 22.75 7.828 22.75 6.78306 22.6231C5.7089 22.4926 4.82957 22.2192 4.0914 21.6052C3.35016 20.9887 2.93544 20.1821 2.64105 19.1662C2.35635 18.1836 2.16256 16.9225 1.91918 15.3387L1.60393 13.2872C1.43264 12.1727 1.29528 11.2789 1.25941 10.5381C1.22225 9.77045 1.28925 9.10469 1.5663 8.45513C1.84274 7.807 2.27855 7.29173 2.86109 6.77487C3.42528 6.27429 4.1733 5.73346 5.10984 5.05632L6.61887 3.96524C7.78586 3.12145 8.7139 2.45043 9.52381 1.99594Z',
  d6: 'M13.1125 16.5303C13.4054 16.8232 13.8803 16.8232 14.1732 16.5303L17.0303 13.6732C17.3232 13.3803 17.3232 12.9054 17.0303 12.6125C16.8199 12.4021 16.5155 12.3428 16.2522 12.4348C16.1661 12.3292 16.0705 12.2132 15.9673 12.0896C15.5113 11.5429 14.8967 10.836 14.2803 10.2197C13.664 9.60332 12.9571 8.98874 12.4104 8.53265C12.2868 8.42947 12.1708 8.33394 12.0652 8.24782C12.1572 7.98449 12.0979 7.68011 11.8875 7.46967C11.5946 7.17678 11.1197 7.17678 10.8268 7.46967L7.96967 10.3268C7.67678 10.6197 7.67678 11.0946 7.96967 11.3875C8.18011 11.5979 8.48449 11.6572 8.74782 11.5652C8.83394 11.6708 8.92947 11.7868 9.03265 11.9104C9.31631 12.2504 9.66126 12.6524 10.0298 13.056L7.04289 16.0429C6.65237 16.4334 6.65237 17.0666 7.04289 17.4571C7.43342 17.8476 8.06658 17.8476 8.45711 17.4571L11.444 14.4702C11.8476 14.8387 12.2496 15.1837 12.5896 15.4673C12.7132 15.5705 12.8292 15.6661 12.9348 15.7522C12.8428 16.0155 12.9021 16.3199 13.1125 16.5303Z',
  d7: 'M19.4997 22L21.9997 9L11.9997 2L1.99805 9L4.49965 22H19.4997Z',
  d8: 'M11.498 14.5005L7.99805 18.0005M11.9982 10.0001L15.9986 14.0005L13.4984 16.5007L9.49805 12.5003L11.9982 10.0001Z',
  d9: 'M12.4308 1.38558C12.1726 1.20482 11.8289 1.20481 11.5707 1.38554L1.569 8.38554C1.32669 8.55513 1.20668 8.85129 1.26256 9.14172L3.76417 22.1417C3.83212 22.4948 4.14109 22.75 4.50066 22.75H19.5007C19.8603 22.75 20.1693 22.4948 20.2372 22.1416L22.7372 9.14164C22.7931 8.85125 22.6731 8.55515 22.4308 8.38558L12.4308 1.38558ZM11.4689 9.46967C11.7618 9.17678 12.2366 9.17678 12.5295 9.46967L16.5299 13.47C16.8228 13.7629 16.8228 14.2378 16.5299 14.5307L14.0297 17.0309C13.7368 17.3237 13.2619 17.3237 12.969 17.0309L11.676 15.7378L8.70621 18.7077L7.29199 17.2935L10.2618 14.3236L8.96869 13.0305C8.6758 12.7376 8.6758 12.2627 8.96869 11.9698L11.4689 9.46967Z',
};

export const IconCourtLawStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="court-law-stroke-rounded IconCourtLawStrokeRounded"
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

export const IconCourtLawDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="court-law-duotone-rounded IconCourtLawDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconCourtLawTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="court-law-twotone-rounded IconCourtLawTwotoneRounded"
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

export const IconCourtLawSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="court-law-solid-rounded IconCourtLawSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCourtLawBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="court-law-bulk-rounded IconCourtLawBulkRounded"
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

export const IconCourtLawStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="court-law-stroke-sharp IconCourtLawStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCourtLawSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="court-law-solid-sharp IconCourtLawSolidSharp"
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

export const iconPackOfCourtLaw: TheIconSelfPack = {
  name: 'CourtLaw',
  StrokeRounded: IconCourtLawStrokeRounded,
  DuotoneRounded: IconCourtLawDuotoneRounded,
  TwotoneRounded: IconCourtLawTwotoneRounded,
  SolidRounded: IconCourtLawSolidRounded,
  BulkRounded: IconCourtLawBulkRounded,
  StrokeSharp: IconCourtLawStrokeSharp,
  SolidSharp: IconCourtLawSolidSharp,
};