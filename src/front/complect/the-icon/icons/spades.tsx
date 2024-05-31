import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.3747 21.3991C15.5506 21.1194 15.3236 20.6714 14.8696 19.7753C14.6285 19.2994 13.2915 16.8919 13.7551 16.4097C13.8763 16.2836 14.304 16.3909 15.1593 16.6054C16.4152 16.9205 18.0294 16.8096 19.4282 15.7714C24.7293 11.8367 15.1828 2 12 2C8.81719 2 -0.729335 11.8367 4.57182 15.7714C5.97058 16.8096 7.58483 16.9205 8.84066 16.6054C9.696 16.3909 10.1237 16.2836 10.2449 16.4097C10.7085 16.8919 9.37152 19.2994 9.13041 19.7753C8.67639 20.6714 8.44938 21.1194 8.6253 21.3991C9.04019 22.0588 14.789 22.3304 15.3747 21.3991Z',
  d2: 'M12 2C8.81719 2 -0.729335 11.8367 4.57182 15.7714C5.97058 16.8096 7.58483 16.9205 8.84066 16.6054C9.696 16.3909 10.1237 16.2836 10.2449 16.4097C10.7085 16.8919 9.37152 19.2994 9.13041 19.7753C8.67639 20.6714 8.44938 21.1194 8.6253 21.3991C8.83558 21.7335 10.416 21.9681 12 21.997',
  d3: 'M10.2147 1.75906C10.8115 1.46174 11.4318 1.25 11.9996 1.25C12.5675 1.25 13.1877 1.46174 13.7845 1.75906C14.3963 2.06388 15.0523 2.49371 15.7101 3.00733C17.0253 4.03428 18.4011 5.43827 19.5041 6.97234C20.5997 8.49603 21.4719 10.2116 21.6944 11.8593C21.9233 13.5542 21.458 15.1985 19.8748 16.3736C18.2639 17.5693 16.4089 17.6922 14.9765 17.3329C14.799 17.2884 14.647 17.2504 14.5163 17.2188C14.7498 17.7688 15.3859 19.1466 15.56 19.4793C15.7683 19.8903 15.9572 20.263 16.0651 20.5685C16.1696 20.864 16.2934 21.3465 16.0092 21.7984C15.8002 22.1307 15.4489 22.301 15.1969 22.3957C14.9148 22.5016 14.5838 22.5747 14.2434 22.6263C13.5584 22.7301 12.7257 22.7631 11.9193 22.7455C11.1111 22.728 10.2973 22.659 9.6458 22.5477C9.32258 22.4924 9.01682 22.423 8.76411 22.3353C8.63812 22.2915 8.50583 22.2366 8.38432 22.1657C8.27359 22.101 8.10862 21.987 7.99005 21.7984C7.70582 21.3465 7.82967 20.864 7.9341 20.5685C8.04205 20.263 8.23095 19.8903 8.43922 19.4793L8.43923 19.4793C8.61331 19.1466 9.2494 17.7688 9.48297 17.2188C9.35222 17.2504 9.20022 17.2884 9.02276 17.3329C7.59031 17.6922 5.73533 17.5693 4.12444 16.3736C2.54123 15.1985 2.07595 13.5542 2.30483 11.8593C2.52732 10.2116 3.39954 8.49603 4.49511 6.97234C5.59814 5.43827 6.97399 4.03428 8.28916 3.00733C8.94692 2.49371 9.60292 2.06388 10.2147 1.75906Z',
  d4: 'M10.2147 1.75906C10.8115 1.46174 11.4318 1.25 11.9996 1.25L11.9193 22.7455C11.1111 22.728 10.2973 22.659 9.6458 22.5477C9.32258 22.4924 9.01682 22.423 8.76411 22.3353C8.63812 22.2915 8.50583 22.2366 8.38432 22.1657C8.27359 22.101 8.10862 21.987 7.99005 21.7984C7.70582 21.3465 7.82967 20.864 7.9341 20.5685C8.04205 20.263 8.23095 19.8903 8.43922 19.4793L8.43923 19.4793C8.61331 19.1466 9.2494 17.7688 9.48297 17.2188C9.35222 17.2504 9.20022 17.2884 9.02276 17.3329C7.59031 17.6922 5.73533 17.5693 4.12444 16.3736C2.54123 15.1985 2.07595 13.5542 2.30483 11.8593C2.52732 10.2116 3.39954 8.49603 4.49511 6.97234C5.59814 5.43827 6.97399 4.03428 8.28916 3.00733C8.94692 2.49371 9.60292 2.06388 10.2147 1.75906Z',
  d5: 'M4.23773 15.7714C5.61518 16.8096 8.34652 16.815 9.58321 16.5L8.10607 22H15.8939L14.4168 16.5C15.6535 16.815 18.3848 16.8096 19.7623 15.7714C24.9826 11.8367 12 2 12 2C12 2 -0.982652 11.8367 4.23773 15.7714Z',
  d6: 'M17.1046 17.4373C16.5317 17.4889 15.9573 17.491 15.437 17.4543L16.8719 22.75H7.12804L8.56296 17.4543C8.04269 17.491 7.46828 17.4889 6.89535 17.4373C5.83457 17.3417 4.64068 17.0648 3.78629 16.4265C3.00399 15.842 2.52734 15.1155 2.34056 14.289C2.15749 13.479 2.26681 12.6367 2.53543 11.8234C3.06704 10.2137 4.2836 8.53695 5.59781 7.05452C6.92526 5.55715 8.41261 4.19201 9.56194 3.20518C10.1379 2.71061 10.6321 2.3085 10.983 2.02943C11.1585 1.88984 12 1.25 12 1.25C12 1.25 12.8415 1.88984 13.017 2.02943C13.3679 2.3085 13.862 2.71061 14.438 3.20518C15.5873 4.19201 17.0747 5.55715 18.4021 7.05452C19.7164 8.53695 20.9329 10.2137 21.4645 11.8234C21.7331 12.6367 21.8425 13.479 21.6594 14.289C21.4726 15.1155 20.996 15.842 20.2137 16.4265C19.3593 17.0648 18.1654 17.3417 17.1046 17.4373Z',
} as const;

export const IconSpadesStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spades-stroke-rounded IconSpadesStrokeRounded"
    >
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

export const IconSpadesDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spades-duotone-rounded IconSpadesDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpadesTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spades-twotone-rounded IconSpadesTwotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpadesSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spades-solid-rounded IconSpadesSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpadesBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spades-bulk-rounded IconSpadesBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpadesStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spades-stroke-sharp IconSpadesStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpadesSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spades-solid-sharp IconSpadesSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSpades: TheIconSelfPack = {
  name: 'Spades',
  StrokeRounded: IconSpadesStrokeRounded,
  DuotoneRounded: IconSpadesDuotoneRounded,
  TwotoneRounded: IconSpadesTwotoneRounded,
  SolidRounded: IconSpadesSolidRounded,
  BulkRounded: IconSpadesBulkRounded,
  StrokeSharp: IconSpadesStrokeSharp,
  SolidSharp: IconSpadesSolidSharp,
};