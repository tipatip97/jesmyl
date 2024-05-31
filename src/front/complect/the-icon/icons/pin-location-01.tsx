import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 11L12 18',
  d2: 'M15.847 16C17.4943 18.113 18.3179 19.1695 17.8865 20.006C17.8466 20.0832 17.7999 20.1578 17.7469 20.229C17.1723 21 15.6875 21 12.7178 21H11.2822C8.31251 21 6.82765 21 6.25311 20.229C6.20005 20.1578 6.15339 20.0832 6.11355 20.006C5.68206 19.1695 6.50571 18.113 8.15301 16',
  d3: 'M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 11L12 18',
  d4: 'M12.002 1.25C9.3786 1.25 7.25195 3.37665 7.25195 6C7.25195 8.19587 8.74198 10.0437 10.7661 10.5876C10.9027 10.6244 11.002 10.7456 11.002 10.8871L11.002 17.75C11.002 18.3023 11.4497 18.75 12.002 18.75C12.5542 18.75 13.002 18.3023 13.002 17.75L13.002 10.8871C13.002 10.7456 13.1012 10.6244 13.2378 10.5876C15.2619 10.0437 16.752 8.19587 16.752 6C16.752 3.37665 14.6253 1.25 12.002 1.25Z',
  d5: 'M8.76898 15.9614C9.20454 16.301 9.28236 16.9293 8.9428 17.3649C8.09782 18.4487 7.53778 19.1715 7.2253 19.724C7.07336 19.9927 7.02045 20.1537 7.00562 20.2413C6.99617 20.2664 6.99304 20.3297 7.05609 20.3815C7.07936 20.4127 7.2173 20.5694 7.98815 20.6606C8.72941 20.7483 9.77152 20.75 11.2834 20.75H12.7189C14.2307 20.75 15.2728 20.7483 16.0141 20.6606C16.7849 20.5694 16.9229 20.4128 16.9462 20.3815C17.0019 20.3342 17.003 20.2683 16.9966 20.2413C16.9818 20.1537 16.9289 19.9927 16.777 19.724C16.4645 19.1715 15.9044 18.4487 15.0595 17.3649C14.7199 16.9293 14.7977 16.301 15.2333 15.9614C15.6688 15.6218 16.2972 15.6996 16.6368 16.1352C17.4164 17.1352 18.1232 18.0417 18.5178 18.7395C18.9162 19.4438 19.2353 20.3247 18.7763 21.2145C18.7108 21.3414 18.6349 21.4624 18.5499 21.5766C17.9986 22.3164 17.1068 22.5452 16.2492 22.6467C15.376 22.7501 14.2141 22.7501 12.7877 22.75H12.7877H11.2145H11.2145C9.78813 22.7501 8.62629 22.7501 7.75306 22.6467C6.89543 22.5452 6.00367 22.3164 5.45239 21.5766C5.36732 21.4624 5.29144 21.3414 5.22595 21.2145C4.76695 20.3247 5.0861 19.4438 5.48442 18.7395C5.87904 18.0417 6.58585 17.1352 7.36549 16.1352C7.70505 15.6996 8.33341 15.6218 8.76898 15.9614Z',
  d6: 'M16 16L18 21H6L8 16',
  d7: 'M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.28031 8.85683 11.1853 11 11.6446L11 18H13L13 11.6446C15.1432 11.1853 16.75 9.28031 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25Z',
  d8: 'M5.07153 20.3784L7.07153 15.3784L8.92848 16.1212L7.47704 19.7498H16.523L15.0715 16.1212L16.9285 15.3784L18.9285 20.3784C19.0517 20.6865 19.0141 21.0357 18.8281 21.3104C18.642 21.5852 18.3318 21.7498 18 21.7498H6C5.66818 21.7498 5.35797 21.5852 5.17194 21.3104C4.98591 21.0357 4.94829 20.6865 5.07153 20.3784Z',
} as const;

export const IconPinLocation01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-01-stroke-rounded IconPinLocation01StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="7" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPinLocation01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-01-duotone-rounded IconPinLocation01DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="7" 
        r="4" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="7" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPinLocation01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-01-twotone-rounded IconPinLocation01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconPinLocation01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-01-solid-rounded IconPinLocation01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPinLocation01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-01-bulk-rounded IconPinLocation01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPinLocation01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-01-stroke-sharp IconPinLocation01StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="7" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPinLocation01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-01-solid-sharp IconPinLocation01SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPinLocation01: TheIconSelfPack = {
  name: 'PinLocation01',
  StrokeRounded: IconPinLocation01StrokeRounded,
  DuotoneRounded: IconPinLocation01DuotoneRounded,
  TwotoneRounded: IconPinLocation01TwotoneRounded,
  SolidRounded: IconPinLocation01SolidRounded,
  BulkRounded: IconPinLocation01BulkRounded,
  StrokeSharp: IconPinLocation01StrokeSharp,
  SolidSharp: IconPinLocation01SolidSharp,
};