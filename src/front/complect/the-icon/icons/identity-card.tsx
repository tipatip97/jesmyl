import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 3.5H10C6.22876 3.5 4.34315 3.5 3.17157 4.67157C2 5.84315 2 7.72876 2 11.5V12.5C2 16.2712 2 18.1569 3.17157 19.3284C4.34315 20.5 6.22876 20.5 10 20.5H14C17.7712 20.5 19.6569 20.5 20.8284 19.3284C22 18.1569 22 16.2712 22 12.5V11.5C22 7.72876 22 5.84315 20.8284 4.67157C19.6569 3.5 17.7712 3.5 14 3.5Z',
  d2: 'M5 16C6.03569 13.4189 9.89616 13.2491 11 16',
  d3: 'M9.75 9.75C9.75 10.7165 8.9665 11.5 8 11.5C7.0335 11.5 6.25 10.7165 6.25 9.75C6.25 8.7835 7.0335 8 8 8C8.9665 8 9.75 8.7835 9.75 9.75Z',
  d4: 'M14 8.5H19M14 12H19M14 15.5H16.5',
  d5: 'M10 3.5H14C17.7712 3.5 19.6569 3.5 20.8284 4.67157C22 5.84315 22 7.72876 22 11.5V12.5C22 16.2712 22 18.1569 20.8284 19.3284C19.6569 20.5 17.7712 20.5 14 20.5H10C6.22876 20.5 4.34315 20.5 3.17157 19.3284C2 18.1569 2 16.2712 2 12.5V11.5C2 7.72876 2 5.84315 3.17157 4.67157C4.34315 3.5 6.22876 3.5 10 3.5ZM8 11.5C8.9665 11.5 9.75 10.7165 9.75 9.75C9.75 8.7835 8.9665 8 8 8C7.0335 8 6.25 8.7835 6.25 9.75C6.25 10.7165 7.0335 11.5 8 11.5Z',
  d6: 'M18.489 2.90314C17.3498 2.74997 15.8942 2.74998 14.0564 2.75H14.0564H9.94358H9.94357C8.10582 2.74998 6.65019 2.74997 5.51098 2.90314C4.33856 3.06076 3.38961 3.39288 2.64124 4.14124C1.89288 4.88961 1.56076 5.83856 1.40314 7.01098C1.24997 8.15019 1.24998 9.60582 1.25 11.4436V11.4436V12.5564V12.5564C1.24998 14.3942 1.24997 15.8498 1.40314 16.989C1.56076 18.1614 1.89288 19.1104 2.64124 19.8588C3.38961 20.6071 4.33856 20.9392 5.51098 21.0969C6.65018 21.25 8.1058 21.25 9.94354 21.25H9.94359H14.0564H14.0565C15.8942 21.25 17.3498 21.25 18.489 21.0969C19.6614 20.9392 20.6104 20.6071 21.3588 19.8588C22.1071 19.1104 22.4392 18.1614 22.5969 16.989C22.75 15.8498 22.75 14.3942 22.75 12.5565V12.5564V11.4436V11.4435C22.75 9.6058 22.75 8.15018 22.5969 7.01098C22.4392 5.83856 22.1071 4.88961 21.3588 4.14124C20.6104 3.39288 19.6614 3.06076 18.489 2.90314ZM11.6961 15.721C10.3232 12.2997 5.5742 12.5554 4.30395 15.721C4.21122 15.9521 4.23923 16.2142 4.37872 16.4204C4.51822 16.6267 4.75099 16.7503 5 16.7503H11C11.249 16.7503 11.4818 16.6267 11.6213 16.4204C11.7608 16.2142 11.7888 15.9521 11.6961 15.721ZM6 9.75C6 8.64543 6.89543 7.75 8 7.75C9.10457 7.75 10 8.64543 10 9.75C10 10.8546 9.10457 11.75 8 11.75C6.89543 11.75 6 10.8546 6 9.75ZM14 7.75C13.5858 7.75 13.25 8.08579 13.25 8.5C13.25 8.91421 13.5858 9.25 14 9.25H19C19.4142 9.25 19.75 8.91421 19.75 8.5C19.75 8.08579 19.4142 7.75 19 7.75H14ZM14 11.25C13.5858 11.25 13.25 11.5858 13.25 12C13.25 12.4142 13.5858 12.75 14 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H14ZM14 14.75C13.5858 14.75 13.25 15.0858 13.25 15.5C13.25 15.9142 13.5858 16.25 14 16.25H16.5C16.9142 16.25 17.25 15.9142 17.25 15.5C17.25 15.0858 16.9142 14.75 16.5 14.75H14Z',
  d7: 'M14.0564 2.75C15.8942 2.74998 17.3498 2.74997 18.489 2.90314C19.6614 3.06076 20.6104 3.39288 21.3588 4.14124C22.1071 4.88961 22.4392 5.83856 22.5969 7.01098C22.75 8.15018 22.75 9.6058 22.75 11.4435V11.4436V12.5564V12.5565C22.75 14.3942 22.75 15.8498 22.5969 16.989C22.4392 18.1614 22.1071 19.1104 21.3588 19.8588C20.6104 20.6071 19.6614 20.9392 18.489 21.0969C17.3498 21.25 15.8942 21.25 14.0565 21.25H14.0564H9.94359H9.94354C8.1058 21.25 6.65018 21.25 5.51098 21.0969C4.33856 20.9392 3.38961 20.6071 2.64124 19.8588C1.89288 19.1104 1.56076 18.1614 1.40314 16.989C1.24997 15.8498 1.24998 14.3942 1.25 12.5564V12.5564V11.4436V11.4436C1.24998 9.60582 1.24997 8.15019 1.40314 7.01098C1.56076 5.83856 1.89288 4.88961 2.64124 4.14124C3.38961 3.39288 4.33856 3.06076 5.51098 2.90314C6.65019 2.74997 8.10582 2.74998 9.94357 2.75H9.94358H14.0564H14.0564Z',
  d8: 'M4.30395 15.721C5.5742 12.5554 10.3232 12.2997 11.6961 15.721C11.7888 15.9521 11.7608 16.2142 11.6213 16.4204C11.4818 16.6267 11.249 16.7503 11 16.7503H5C4.75099 16.7503 4.51822 16.6267 4.37872 16.4204C4.23923 16.2142 4.21122 15.9521 4.30395 15.721Z',
  d9: 'M6 9.75C6 8.64543 6.89543 7.75 8 7.75C9.10457 7.75 10 8.64543 10 9.75C10 10.8546 9.10457 11.75 8 11.75C6.89543 11.75 6 10.8546 6 9.75Z',
  d10: 'M13.25 8.5C13.25 8.08579 13.5858 7.75 14 7.75H19C19.4142 7.75 19.75 8.08579 19.75 8.5C19.75 8.91421 19.4142 9.25 19 9.25H14C13.5858 9.25 13.25 8.91421 13.25 8.5ZM13.25 12C13.25 11.5858 13.5858 11.25 14 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H14C13.5858 12.75 13.25 12.4142 13.25 12ZM13.25 15.5C13.25 15.0858 13.5858 14.75 14 14.75H16.5C16.9142 14.75 17.25 15.0858 17.25 15.5C17.25 15.9142 16.9142 16.25 16.5 16.25H14C13.5858 16.25 13.25 15.9142 13.25 15.5Z',
  d11: 'M22 3.5H2V20.5H22V3.5Z',
  d12: 'M22.75 2.75H1.25V21.25H22.75V2.75ZM11.6958 15.721C10.3229 12.2997 5.57389 12.5554 4.30365 15.721L3.89062 16.7503H12.1088L11.6958 15.721ZM6 9.75C6 8.64543 6.89543 7.75 8 7.75C9.10457 7.75 10 8.64543 10 9.75C10 10.8546 9.10457 11.75 8 11.75C6.89543 11.75 6 10.8546 6 9.75ZM19.75 7.75H13.25V9.25H19.75V7.75ZM19.75 11.25H13.25V12.75H19.75V11.25ZM17.25 14.75H13.25V16.25H17.25V14.75Z',
} as const;

export const IconIdentityCardStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="identity-card-stroke-rounded IconIdentityCardStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIdentityCardDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="identity-card-duotone-rounded IconIdentityCardDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIdentityCardTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="identity-card-twotone-rounded IconIdentityCardTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIdentityCardSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="identity-card-solid-rounded IconIdentityCardSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIdentityCardBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="identity-card-bulk-rounded IconIdentityCardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIdentityCardStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="identity-card-stroke-sharp IconIdentityCardStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconIdentityCardSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="identity-card-solid-sharp IconIdentityCardSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfIdentityCard: TheIconSelfPack = {
  name: 'IdentityCard',
  StrokeRounded: IconIdentityCardStrokeRounded,
  DuotoneRounded: IconIdentityCardDuotoneRounded,
  TwotoneRounded: IconIdentityCardTwotoneRounded,
  SolidRounded: IconIdentityCardSolidRounded,
  BulkRounded: IconIdentityCardBulkRounded,
  StrokeSharp: IconIdentityCardStrokeSharp,
  SolidSharp: IconIdentityCardSolidSharp,
};