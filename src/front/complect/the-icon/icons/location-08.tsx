import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.9108 18C19.8247 19.368 20.2113 20.203 19.8865 20.8999C19.8466 20.9854 19.7999 21.0679 19.7469 21.1467C19.1724 22 17.6875 22 14.7178 22H9.28223C6.31251 22 4.82765 22 4.25311 21.1467C4.20005 21.0679 4.15339 20.9854 4.11355 20.8999C3.78869 20.203 4.17527 19.368 5.08915 18',
  d2: 'M15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5Z',
  d3: 'M12 2C16.0588 2 19.5 5.42803 19.5 9.5869C19.5 13.812 16.0028 16.777 12.7725 18.7932C12.5371 18.9287 12.2709 19 12 19C11.7291 19 11.4629 18.9287 11.2275 18.7932C8.00325 16.7573 4.5 13.8266 4.5 9.5869C4.5 5.42803 7.9412 2 12 2Z',
  d4: 'M19.5 9.5869C19.5 5.42803 16.0588 2 12 2C7.9412 2 4.5 5.42803 4.5 9.5869C4.5 13.8266 8.00325 16.7573 11.2275 18.7932C11.4629 18.9287 11.7291 19 12 19C12.2709 19 12.5371 18.9287 12.7725 18.7932C16.0028 16.777 19.5 13.812 19.5 9.5869ZM12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z',
  d5: 'M5.29547 17.4028C5.76345 17.6961 5.90507 18.3132 5.6118 18.7812C5.28546 19.3019 5.11264 19.6549 5.03897 19.9073C4.97411 20.1294 5.00655 20.199 5.01978 20.2274C5.03743 20.2653 5.05841 20.3025 5.08254 20.3383C5.11831 20.3915 5.25254 20.5541 5.9993 20.6519C6.73298 20.748 7.76753 20.7501 9.28217 20.7501H14.7177C16.2324 20.7501 17.2669 20.748 18.0006 20.6519C18.7474 20.5541 18.8816 20.3915 18.9174 20.3383C18.9415 20.3025 18.9625 20.2653 18.9801 20.2274C18.9933 20.199 19.0258 20.1295 18.9609 19.9073C18.8872 19.6549 18.7144 19.3019 18.3881 18.7812C18.0948 18.3132 18.2364 17.6961 18.7044 17.4028C19.1724 17.1095 19.7895 17.2511 20.0828 17.7191C20.433 18.2779 20.7273 18.821 20.8808 19.3468C21.0429 19.9023 21.0629 20.4931 20.7928 21.0725C20.7307 21.2057 20.6583 21.3336 20.5763 21.4554C20.0376 22.2555 19.1421 22.5195 18.2603 22.635C17.3809 22.7502 16.2138 22.7502 14.7926 22.7501H9.20725H9.20724C7.78611 22.7502 6.61895 22.7502 5.73954 22.635C4.85782 22.5195 3.96235 22.2555 3.42357 21.4554C3.34158 21.3336 3.26917 21.2057 3.20712 21.0726C2.93702 20.4931 2.95695 19.9023 3.1191 19.3468C3.27259 18.821 3.56688 18.2779 3.91709 17.7191C4.21037 17.2511 4.82749 17.1095 5.29547 17.4028Z',
  d6: 'M12 1.25C7.52225 1.25 3.75 5.01857 3.75 9.5869C3.75 14.2671 7.60753 17.3945 10.8271 19.4273L10.84 19.4355L10.8533 19.4431C11.2022 19.644 11.5974 19.75 12 19.75C12.4026 19.75 12.7978 19.644 13.1467 19.4431L13.1583 19.4365L13.1696 19.4294C16.4018 17.4121 20.25 14.2513 20.25 9.5869C20.25 5.01857 16.4778 1.25 12 1.25ZM12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6Z',
  d7: 'M3.75 9.5869C3.75 5.01857 7.52225 1.25 12 1.25C16.4778 1.25 20.25 5.01857 20.25 9.5869C20.25 14.2513 16.4018 17.4121 13.1696 19.4294L13.1583 19.4365L13.1467 19.4431C12.7978 19.644 12.4026 19.75 12 19.75C11.5974 19.75 11.2022 19.644 10.8533 19.4431L10.84 19.4355L10.8271 19.4273C7.60753 17.3945 3.75 14.2671 3.75 9.5869Z',
  d8: 'M8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13C10.067 13 8.5 11.433 8.5 9.5Z',
  d9: 'M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z',
  d10: 'M12 2C8.13401 2 5 5.07516 5 8.86856C5 11.0376 5.875 12.7242 7.625 14.2306C8.8585 15.2925 11.1028 17.5702 12 18.9999C12.9426 17.5987 15.1415 15.2925 16.375 14.2306C18.125 12.7242 19 11.0376 19 8.86856C19 5.07516 15.866 2 12 2Z',
  d11: 'M18 17L20 22H4L6 17',
  d12: 'M12 1.25C7.73326 1.25 4.25 4.6476 4.25 8.86856C4.25 11.2888 5.24678 13.173 7.1357 14.799C8.35082 15.8451 10.5276 18.0646 11.3647 19.3986C11.4997 19.6136 11.7343 19.7458 11.9881 19.7498C12.2419 19.7538 12.4806 19.6292 12.6223 19.4185C13.5158 18.0902 15.6629 15.8332 16.8643 14.799C18.7532 13.173 19.75 11.2888 19.75 8.86856C19.75 4.6476 16.2667 1.25 12 1.25ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z',
  d13: 'M3.07153 21.3789L5.07153 16.3789L6.92848 17.1217L5.47704 20.7503H18.523L17.0715 17.1217L18.9285 16.3789L20.9285 21.3789C21.0517 21.687 21.0141 22.0362 20.8281 22.3109C20.642 22.5857 20.3318 22.7503 20 22.7503H4C3.66818 22.7503 3.35797 22.5857 3.17194 22.3109C2.98591 22.0362 2.94829 21.687 3.07153 21.3789Z',
} as const;

export const IconLocation08StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-08-stroke-rounded IconLocation08StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLocation08DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-08-duotone-rounded IconLocation08DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation08TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-08-twotone-rounded IconLocation08TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation08SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-08-solid-rounded IconLocation08SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation08BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-08-bulk-rounded IconLocation08BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation08StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-08-stroke-sharp IconLocation08StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation08SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-08-solid-sharp IconLocation08SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLocation08: TheIconSelfPack = {
  name: 'Location08',
  StrokeRounded: IconLocation08StrokeRounded,
  DuotoneRounded: IconLocation08DuotoneRounded,
  TwotoneRounded: IconLocation08TwotoneRounded,
  SolidRounded: IconLocation08SolidRounded,
  BulkRounded: IconLocation08BulkRounded,
  StrokeSharp: IconLocation08StrokeSharp,
  SolidSharp: IconLocation08SolidSharp,
};