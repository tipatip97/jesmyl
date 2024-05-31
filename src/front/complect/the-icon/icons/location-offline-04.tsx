import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 18C16.5648 19.4833 14.6122 20.7255 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 8.83373 3.75496 7.02961 5 5.5',
  d2: 'M7.5 3.22795C8.83379 2.44855 10.3757 2 12 2C16.8706 2 21 6.03298 21 10.9258C21 12.6174 20.514 14.1373 19.7199 15.5',
  d3: 'M2 2L22 22',
  d4: 'M12 22C12.325 22 12.6445 21.9162 12.927 21.7567C14.6122 20.7255 16.5648 19.4833 18 18L5.23828 5.23828L5 5.5C3.75496 7.02961 3 8.83373 3 10.9258C3 15.9137 7.2039 19.3616 11.073 21.7567C11.3555 21.9162 11.675 22 12 22Z',
  d5: 'M2.25 10.9258C2.25 13.6482 3.40187 15.9241 5.01689 17.8025C6.62496 19.6728 8.71834 21.1811 10.6782 22.3944L10.6911 22.4024L10.7043 22.4098C11.0996 22.6329 11.546 22.75 12 22.75C12.454 22.75 12.9004 22.6329 13.2957 22.4098L13.3072 22.4033L13.3185 22.3964C14.9088 21.4233 16.5819 20.2478 18.0139 18.842C18.2079 18.6515 18.305 18.5563 18.3055 18.4312C18.3061 18.3061 18.2077 18.2077 18.0108 18.0108L5.09071 5.09071C4.87547 4.87547 4.76785 4.76785 4.63207 4.77687C4.49628 4.78589 4.40761 4.90186 4.23028 5.1338C2.99294 6.75212 2.25 8.75952 2.25 10.9258Z',
  d6: 'M21.75 10.9258C21.75 5.60954 17.2755 1.25 12 1.25C10.2366 1.25 8.56262 1.73712 7.11539 2.58426C6.83548 2.74811 6.69553 2.83003 6.67673 2.97621C6.65793 3.12239 6.77751 3.24197 7.01667 3.48113L19.4826 15.9471C19.7251 16.1896 19.8464 16.3109 19.993 16.2916C20.1397 16.2723 20.2225 16.129 20.3882 15.8424C21.2256 14.3937 21.75 12.7582 21.75 10.9258Z',
  d7: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d8: 'M2.25 10.9268C2.25 13.6492 3.40187 15.9251 5.01689 17.8035C6.62496 19.6738 8.71834 21.1821 10.6782 22.3954L10.6911 22.4034L10.7043 22.4108C11.0996 22.6339 11.546 22.751 12 22.751C12.454 22.751 12.9004 22.6339 13.2957 22.4108L13.3072 22.4043L13.3185 22.3974C14.9088 21.4243 16.5819 20.2488 18.0139 18.843C18.2079 18.6525 18.305 18.5572 18.3055 18.4322C18.3061 18.3071 18.2077 18.2087 18.0108 18.0118L5.09071 5.0917C4.87547 4.87647 4.76785 4.76885 4.63207 4.77787C4.49628 4.78688 4.40761 4.90285 4.23028 5.13479C2.99294 6.75312 2.25 8.76052 2.25 10.9268Z',
  d9: 'M6.97479 3.79281C8.34824 2.67152 10.0965 2 12 2C16.4183 2 20 5.61783 20 10.0807C20 12.0235 19.4203 13.6373 18.261 15.0791M16.6805 16.6795C15.2371 18.022 13 20.4696 12 21.9999C10.9746 20.3179 8.40971 17.6382 7 16.389C5 14.6167 4 12.6325 4 10.0807C4 8.356 4.5349 6.75754 5.44628 5.4453',
  d10: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d11: 'M3.25195 10.0807C3.25195 12.8754 4.36638 15.0556 6.50454 16.9503C7.89562 18.183 10.3945 20.804 11.3616 22.3903C11.4955 22.61 11.7329 22.7457 11.9902 22.7498C12.2475 22.7538 12.489 22.6256 12.6298 22.4101C13.5913 20.9388 15.8024 18.5186 17.2126 17.2106L4.90978 4.9078C3.86647 6.36248 3.25195 8.15013 3.25195 10.0807Z',
  d12: 'M20.752 10.0807C20.752 5.21073 16.8415 1.25 12.002 1.25C9.97974 1.25 8.11975 1.94154 6.63949 3.10199L18.9528 15.4153C20.1399 13.8853 20.752 12.1518 20.752 10.0807Z',
} as const;

export const IconLocationOffline04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-04-stroke-rounded IconLocationOffline04StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-04-duotone-rounded IconLocationOffline04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-04-twotone-rounded IconLocationOffline04TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-04-solid-rounded IconLocationOffline04SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-04-bulk-rounded IconLocationOffline04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
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

export const IconLocationOffline04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-04-stroke-sharp IconLocationOffline04StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-04-solid-sharp IconLocationOffline04SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLocationOffline04: TheIconSelfPack = {
  name: 'LocationOffline04',
  StrokeRounded: IconLocationOffline04StrokeRounded,
  DuotoneRounded: IconLocationOffline04DuotoneRounded,
  TwotoneRounded: IconLocationOffline04TwotoneRounded,
  SolidRounded: IconLocationOffline04SolidRounded,
  BulkRounded: IconLocationOffline04BulkRounded,
  StrokeSharp: IconLocationOffline04StrokeSharp,
  SolidSharp: IconLocationOffline04SolidSharp,
};