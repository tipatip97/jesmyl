import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z',
  d2: 'M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z',
  d3: 'M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16',
  d4: 'M22 12C22 14.837 20.8186 17.398 18.921 19.218C18.6043 18.4167 17.4037 17.7616 16.5924 17.3189C16.454 17.2434 16.3268 17.174 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112C7.67312 17.174 7.54602 17.2434 7.40759 17.3189C6.59628 17.7616 5.39574 18.4167 5.07897 19.218C3.18136 17.398 2 14.837 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.067 6.5 8.5 8.067 8.5 10C8.5 11.933 10.067 13.5 12 13.5Z',
  d5: 'M16.9068 16.635C17.4591 16.9351 18.3255 17.406 18.9182 17.9654C19.2872 18.3138 19.669 18.7999 19.7391 19.4182C19.8149 20.0872 19.5068 20.6913 18.9533 21.1997C18.0243 22.0532 16.8947 22.75 15.4295 22.75H8.57089C7.10575 22.75 5.97614 22.0532 5.04711 21.1997C4.49363 20.6913 4.18554 20.0872 4.26137 19.4182C4.33146 18.7999 4.7132 18.3138 5.08224 17.9654C5.67492 17.406 6.54126 16.9352 7.09358 16.635C7.21655 16.5682 7.32397 16.5098 7.40932 16.4608C10.2209 14.8464 13.7795 14.8464 16.5911 16.4608C16.6764 16.5098 16.7838 16.5681 16.9068 16.635Z',
  d6: 'M7.75021 10C7.75021 7.65279 9.653 5.75 12.0002 5.75C14.3474 5.75 16.2502 7.65279 16.2502 10C16.2502 12.3472 14.3474 14.25 12.0002 14.25C9.653 14.25 7.75021 12.3472 7.75021 10Z',
  d7: 'M12 3.18747C7.13913 3.18747 3.20455 7.07879 3.20455 11.8718C3.20455 13.1249 3.47275 14.3136 3.95472 15.3872C4.17416 15.876 3.95232 16.4485 3.45921 16.6661C2.9661 16.8836 2.38846 16.6637 2.16902 16.1749C1.57794 14.8583 1.25 13.4016 1.25 11.8718C1.25 6.00228 6.06621 1.25 12 1.25C17.9338 1.25 22.75 6.00228 22.75 11.8718C22.75 13.4016 22.4221 14.8583 21.831 16.1749C21.6115 16.6637 21.0339 16.8836 20.5408 16.6661C20.0477 16.4485 19.8258 15.876 20.0453 15.3872C20.5273 14.3136 20.7955 13.1249 20.7955 11.8718C20.7955 7.07879 16.8609 3.18747 12 3.18747Z',
  d8: 'M16.9068 16.635L16.9068 16.635C17.4592 16.9352 18.3255 17.406 18.9182 17.9654C19.2872 18.3138 19.669 18.7999 19.7391 19.4182C19.8149 20.0872 19.5068 20.6913 18.9533 21.1997C18.0243 22.0532 16.8947 22.75 15.4295 22.75H8.57089C7.10575 22.75 5.97614 22.0532 5.04711 21.1997C4.49363 20.6913 4.18554 20.0872 4.26137 19.4182C4.33146 18.7999 4.7132 18.3138 5.08224 17.9654C5.67492 17.406 6.54126 16.9352 7.09358 16.635L7.0936 16.635C7.21657 16.5682 7.32397 16.5098 7.40932 16.4608C10.2209 14.8464 13.7795 14.8464 16.5911 16.4608C16.6764 16.5098 16.7838 16.5681 16.9068 16.635Z',
  d9: 'M7.75 10C7.75 7.65279 9.65279 5.75 12 5.75C14.3472 5.75 16.25 7.65279 16.25 10C16.25 12.3472 14.3472 14.25 12 14.25C9.65279 14.25 7.75 12.3472 7.75 10Z',
  d10: 'M5 22H19C19 18.6863 15.866 16 12 16C8.13401 16 5 18.6863 5 22Z',
  d11: 'M12 3.19722C7.13913 3.19722 3.20455 7.10813 3.20455 11.9252C3.20455 13.1846 3.47275 14.3793 3.95472 15.4583L2.16902 16.25C1.57794 14.9268 1.25 13.4628 1.25 11.9252C1.25 6.02619 6.06621 1.25 12 1.25C17.9338 1.25 22.75 6.02619 22.75 11.9252C22.75 13.4628 22.4221 14.9268 21.831 16.25L20.0453 15.4583C20.5273 14.3793 20.7955 13.1846 20.7955 11.9252C20.7955 7.10813 16.8609 3.19722 12 3.19722Z',
  d12: 'M4.25 22C4.25 18.1678 7.83242 15.25 12 15.25C16.1676 15.25 19.75 18.1678 19.75 22V22.75H4.25V22Z',
} as const;

export const IconUserSharingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-sharing-stroke-rounded IconUserSharingStrokeRounded"
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

export const IconUserSharingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-sharing-duotone-rounded IconUserSharingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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

export const IconUserSharingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-sharing-twotone-rounded IconUserSharingTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSharingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-sharing-solid-rounded IconUserSharingSolidRounded"
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

export const IconUserSharingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-sharing-bulk-rounded IconUserSharingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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

export const IconUserSharingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-sharing-stroke-sharp IconUserSharingStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
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

export const IconUserSharingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-sharing-solid-sharp IconUserSharingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserSharing: TheIconSelfPack = {
  name: 'UserSharing',
  StrokeRounded: IconUserSharingStrokeRounded,
  DuotoneRounded: IconUserSharingDuotoneRounded,
  TwotoneRounded: IconUserSharingTwotoneRounded,
  SolidRounded: IconUserSharingSolidRounded,
  BulkRounded: IconUserSharingBulkRounded,
  StrokeSharp: IconUserSharingStrokeSharp,
  SolidSharp: IconUserSharingSolidSharp,
};