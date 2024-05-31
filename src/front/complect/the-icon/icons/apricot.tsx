import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.201 20C11.3469 21.2447 12.852 22 14.5005 22C18.0903 22 21.0005 18.4183 21.0005 14C21.0005 9.58172 18.0903 6 14.5005 6C11.1858 6 8.39983 9.05369 8 13',
  d2: 'M12 21.3869C11.2304 21.7819 10.3859 22 9.5 22C5.91015 22 3 18.4183 3 14C3 9.58172 5.91015 6 9.5 6C10.3859 6 11.2304 6.21813 12 6.61312',
  d3: 'M12 6C12 4.66667 12.6 2 15 2',
  d4: 'M14.5005 22C18.0903 22 21.0005 18.4183 21.0005 14C21.0005 9.58172 18.0903 6 14.5005 6C13.6177 6 12.7725 6.21659 11.9998 6.60894C11.2302 6.21394 10.3859 6 9.5 6C5.91015 6 3 9.58172 3 14C3 18.4183 5.91015 22 9.5 22C10.3859 22 11.232 21.7825 12.0016 21.3875C12.7709 21.7821 13.615 22 14.5005 22Z',
  d5: 'M13.4799 4.10015C13.1308 4.74657 13 5.57046 13 6.125C13 6.67728 12.5523 7.125 12 7.125C11.4477 7.125 11 6.67728 11 6.125C11 5.34621 11.1692 4.1701 11.7201 3.14985C12.2944 2.08628 13.3376 1.125 15 1.125C15.5523 1.125 16 1.57272 16 2.125C16 2.67728 15.5523 3.125 15 3.125C14.2624 3.125 13.8056 3.49706 13.4799 4.10015Z',
  d6: 'M9.5 5.375C5.35792 5.375 2.25 9.44554 2.25 14.125C2.25 18.8045 5.35792 22.875 9.5 22.875C10.3806 22.875 11.2232 22.6859 12.0002 22.3425C12.7751 22.6852 13.6167 22.875 14.5005 22.875C18.6426 22.875 21.7505 18.8045 21.7505 14.125C21.7505 9.44554 18.6426 5.375 14.5005 5.375C13.6132 5.375 12.7696 5.56282 11.9921 5.90398C11.2173 5.56284 10.3776 5.375 9.5 5.375ZM10.9297 8.78266C11.308 8.38029 11.2885 7.74743 10.8861 7.36911C10.4837 6.9908 9.85087 7.0103 9.47256 7.41266C8.12767 8.84306 7.22828 10.8217 7.00517 13.0238C6.9495 13.5733 7.3498 14.0638 7.89928 14.1195C8.44875 14.1752 8.93931 13.7749 8.99498 13.2254C9.17672 11.4317 9.90536 9.87207 10.9297 8.78266Z',
  d7: 'M2.25 14.125C2.25 9.44554 5.35792 5.375 9.5 5.375C10.3776 5.375 11.2173 5.56284 11.9921 5.90398C12.7696 5.56282 13.6132 5.375 14.5005 5.375C18.6426 5.375 21.7505 9.44554 21.7505 14.125C21.7505 18.8045 18.6426 22.875 14.5005 22.875C13.6167 22.875 12.7751 22.6852 12.0002 22.3425C11.2232 22.6859 10.3806 22.875 9.5 22.875C5.35792 22.875 2.25 18.8045 2.25 14.125Z',
  d8: 'M13.0401 5.5493C13.1016 5.08 13.2387 4.54757 13.4803 4.10015C13.806 3.49706 14.2628 3.125 15.0004 3.125C15.5527 3.125 16.0004 2.67728 16.0004 2.125C16.0004 1.57272 15.5527 1.125 15.0004 1.125C13.338 1.125 12.2948 2.08628 11.7205 3.14985C11.2889 3.9491 11.0916 4.844 11.0264 5.56861C11.3578 5.65402 11.6804 5.76656 11.9925 5.90398C12.3299 5.75594 12.6797 5.63678 13.0401 5.5493Z',
  d9: 'M10.8861 7.36911C11.2885 7.74743 11.308 8.38029 10.9297 8.78266C9.90536 9.87207 9.17672 11.4317 8.99498 13.2254C8.93931 13.7749 8.44875 14.1752 7.89928 14.1195C7.3498 14.0638 6.9495 13.5733 7.00517 13.0238C7.22828 10.8217 8.12767 8.84306 9.47256 7.41266C9.85087 7.0103 10.4837 6.9908 10.8861 7.36911Z',
  d10: 'M12.853 5.47265C12.9354 5.01905 13.0717 4.52511 13.2793 4.08032C13.6694 3.24444 14.2159 2.75 15.0003 2.75V1.25C13.3847 1.25 12.4305 2.35203 11.92 3.44596C11.4889 4.36984 11.3062 5.40718 11.2608 6.15592C9.08036 7.45529 7.54899 10.0147 7.25418 12.9244L5.76182 12.7732C6.0661 9.76997 7.57621 6.92725 9.88078 5.2619C9.75439 5.254 9.62711 5.25 9.49902 5.25C5.35694 5.25 2.24902 9.32054 2.24902 14C2.24902 18.6795 5.35694 22.75 9.49902 22.75C9.63692 22.75 9.77387 22.7454 9.90979 22.7362C9.41561 22.3805 8.95905 21.9726 8.54601 21.5239L9.6496 20.508C10.6927 21.6411 12.0289 22.4299 13.525 22.6718C13.8433 22.7233 14.1688 22.75 14.5003 22.75C18.6424 22.75 21.7503 18.6795 21.7503 14C21.7503 9.32054 18.6424 5.25 14.5003 5.25C14.159 5.25 13.8241 5.27779 13.4971 5.3314C13.2788 5.36718 13.064 5.41446 12.853 5.47265Z',
} as const;

export const IconApricotStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apricot-stroke-rounded IconApricotStrokeRounded"
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

export const IconApricotDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apricot-duotone-rounded IconApricotDuotoneRounded"
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

export const IconApricotTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apricot-twotone-rounded IconApricotTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconApricotSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apricot-solid-rounded IconApricotSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconApricotBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apricot-bulk-rounded IconApricotBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconApricotStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apricot-stroke-sharp IconApricotStrokeSharp"
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

export const IconApricotSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apricot-solid-sharp IconApricotSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfApricot: TheIconSelfPack = {
  name: 'Apricot',
  StrokeRounded: IconApricotStrokeRounded,
  DuotoneRounded: IconApricotDuotoneRounded,
  TwotoneRounded: IconApricotTwotoneRounded,
  SolidRounded: IconApricotSolidRounded,
  BulkRounded: IconApricotBulkRounded,
  StrokeSharp: IconApricotStrokeSharp,
  SolidSharp: IconApricotSolidSharp,
};