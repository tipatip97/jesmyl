import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z',
  d2: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.9918 12C13.3745 12 14.4954 10.8807 14.4954 9.5C14.4954 8.11929 13.3745 7 11.9918 7C10.6092 7 9.48828 8.11929 9.48828 9.5C9.48828 10.8807 10.6092 12 11.9918 12Z',
  d3: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.9916 6.25C10.1958 6.25 8.73808 7.70407 8.73808 9.5C8.73808 11.2959 10.1958 12.75 11.9916 12.75C13.7875 12.75 15.2452 11.2959 15.2452 9.5C15.2452 7.70407 13.7875 6.25 11.9916 6.25ZM17.0409 16.4802C14.3735 13.6002 9.57472 13.7487 6.96382 16.4756L6.77631 16.6631C6.63104 16.8084 6.55172 17.0069 6.55688 17.2123C6.56204 17.4177 6.65122 17.612 6.8036 17.7498C8.17769 18.9923 10.0013 19.75 12.0001 19.75C13.9989 19.75 15.8225 18.9923 17.1966 17.7498C17.349 17.612 17.4382 17.4177 17.4433 17.2123C17.4485 17.0069 17.3692 16.8084 17.2239 16.6631L17.0409 16.4802Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M8.73808 9.5C8.73808 7.70407 10.1958 6.25 11.9916 6.25C13.7875 6.25 15.2452 7.70407 15.2452 9.5C15.2452 11.2959 13.7875 12.75 11.9916 12.75C10.1958 12.75 8.73808 11.2959 8.73808 9.5Z',
  d6: 'M6.96382 16.4756C9.57472 13.7487 14.3735 13.6002 17.0409 16.4802L17.2239 16.6631C17.3692 16.8084 17.4485 17.0069 17.4433 17.2123C17.4382 17.4177 17.349 17.612 17.1966 17.7498C15.8225 18.9923 13.9989 19.75 12.0001 19.75C10.0013 19.75 8.17769 18.9923 6.8036 17.7498C6.65122 17.612 6.56204 17.4177 6.55688 17.2123C6.55172 17.0069 6.63104 16.8084 6.77631 16.6631L6.96382 16.4756Z',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.9915 6.25C10.1956 6.25 8.73797 7.70407 8.73797 9.5C8.73797 11.2959 10.1956 12.75 11.9915 12.75C13.7874 12.75 15.2451 11.2959 15.2451 9.5C15.2451 7.70407 13.7874 6.25 11.9915 6.25ZM12 14.25C9.85416 14.25 7.90474 15.0916 6.48057 16.459C6.33327 16.6004 6.25 16.7958 6.25 17C6.25 17.2042 6.33327 17.3996 6.48057 17.541C7.90474 18.9084 9.85416 19.75 12 19.75C14.1458 19.75 16.0953 18.9084 17.5194 17.541C17.6667 17.3996 17.75 17.2042 17.75 17C17.75 16.7958 17.6667 16.6004 17.5194 16.459C16.0953 15.0916 14.1458 14.25 12 14.25Z',
} as const;

export const IconUserCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-circle-stroke-rounded IconUserCircleStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-circle-duotone-rounded IconUserCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-circle-twotone-rounded IconUserCircleTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-circle-solid-rounded IconUserCircleSolidRounded"
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

export const IconUserCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-circle-bulk-rounded IconUserCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconUserCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-circle-stroke-sharp IconUserCircleStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-circle-solid-sharp IconUserCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserCircle: TheIconSelfPack = {
  name: 'UserCircle',
  StrokeRounded: IconUserCircleStrokeRounded,
  DuotoneRounded: IconUserCircleDuotoneRounded,
  TwotoneRounded: IconUserCircleTwotoneRounded,
  SolidRounded: IconUserCircleSolidRounded,
  BulkRounded: IconUserCircleBulkRounded,
  StrokeSharp: IconUserCircleStrokeSharp,
  SolidSharp: IconUserCircleSolidSharp,
};