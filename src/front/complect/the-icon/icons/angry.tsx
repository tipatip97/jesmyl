import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 17C8.91212 15.7856 10.3643 15 12 15C13.6357 15 15.0879 15.7856 16 17',
  d2: 'M7 9.01067C7 9.01067 8.40944 8.88341 9.19588 9.50798M9.19588 9.50798L8.93275 10.3427C8.82896 10.6719 9.10031 11 9.4764 11C9.87165 11 10.1327 10.6434 9.92918 10.3348C9.74877 10.0612 9.50309 9.75196 9.19588 9.50798ZM17 9.01067C17 9.01067 15.5906 8.88341 14.8041 9.50798M14.8041 9.50798L15.0672 10.3427C15.171 10.6719 14.8997 11 14.5236 11C14.1283 11 13.8673 10.6434 14.0708 10.3348C14.2512 10.0612 14.4969 9.75196 14.8041 9.50798Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM7.54964 17.5997C7.88084 17.8484 8.35099 17.7816 8.59974 17.4504C9.37631 16.4164 10.6103 15.75 12 15.75C13.3898 15.75 14.6238 16.4164 15.4003 17.4504C15.6491 17.7816 16.1192 17.8484 16.4505 17.5997C16.7817 17.3509 16.8485 16.8808 16.5997 16.5495C15.5521 15.1546 13.8816 14.25 12 14.25C10.1185 14.25 8.44802 15.1546 7.40035 16.5495C7.1516 16.8808 7.21843 17.3509 7.54964 17.5997ZM6.25308 9.07688C6.21584 8.66435 6.52044 8.29969 6.93298 8.26245C7.19098 8.23915 7.61848 8.251 7.87965 8.27781C8.37374 8.32852 9.09859 8.47171 9.66236 8.91944C10.0532 9.22987 10.3496 9.60859 10.5553 9.92066C10.8349 10.3446 10.7983 10.8447 10.5422 11.2114C10.3008 11.557 9.89751 11.7488 9.47644 11.7488C8.69425 11.7488 7.93235 11.0205 8.2175 10.116L8.29196 9.87975C8.12123 9.82694 7.92804 9.79065 7.72649 9.76997C7.53699 9.75052 7.36647 9.74739 7.24383 9.74923C7.183 9.75015 7.06674 9.75647 7.06674 9.75647C6.65451 9.79329 6.29031 9.48917 6.25308 9.07688ZM17.7471 9.07688C17.7843 8.66435 17.4797 8.29969 17.0672 8.26245C16.8092 8.23915 16.3817 8.251 16.1205 8.27781C15.6264 8.32852 14.9016 8.47171 14.3378 8.91944C13.9469 9.22987 13.6506 9.60859 13.4448 9.92066C13.1653 10.3446 13.2018 10.8447 13.458 11.2114C13.6994 11.557 14.1027 11.7488 14.5237 11.7488C15.3059 11.7488 16.0678 11.0205 15.7827 10.116L15.7082 9.87975C15.8789 9.82694 16.0721 9.79065 16.2737 9.76997C16.4632 9.75052 16.6337 9.74739 16.7563 9.74923C16.8172 9.75015 16.9334 9.75647 16.9334 9.75647C17.3457 9.79329 17.7099 9.48917 17.7471 9.07688Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M7.54964 17.5997C7.88084 17.8484 8.35099 17.7816 8.59974 17.4504C9.37631 16.4164 10.6103 15.75 12 15.75C13.3898 15.75 14.6238 16.4164 15.4003 17.4504C15.6491 17.7816 16.1192 17.8484 16.4505 17.5997C16.7817 17.3509 16.8485 16.8808 16.5997 16.5495C15.5521 15.1546 13.8816 14.25 12 14.25C10.1185 14.25 8.44802 15.1546 7.40035 16.5495C7.1516 16.8808 7.21843 17.3509 7.54964 17.5997Z',
  d6: 'M17.0672 8.26245C17.4797 8.29969 17.7843 8.66435 17.7471 9.07688C17.7099 9.48917 17.3457 9.79329 16.9334 9.75647C16.9334 9.75647 16.8172 9.75015 16.7563 9.74923C16.6337 9.74739 16.4632 9.75052 16.2737 9.76997C16.0721 9.79065 15.8789 9.82694 15.7082 9.87975L15.7827 10.116C16.0678 11.0205 15.3059 11.7488 14.5237 11.7488C14.1027 11.7488 13.6994 11.557 13.458 11.2114C13.2018 10.8447 13.1653 10.3446 13.4448 9.92066C13.6506 9.60859 13.9469 9.22987 14.3378 8.91944C14.9016 8.47171 15.6264 8.32852 16.1205 8.27781C16.3817 8.251 16.8092 8.23915 17.0672 8.26245Z',
  d7: 'M6.93298 8.26245C6.52044 8.29969 6.21584 8.66435 6.25308 9.07688C6.29031 9.48917 6.65451 9.79329 7.06674 9.75647C7.06674 9.75647 7.183 9.75015 7.24383 9.74923C7.36647 9.74739 7.53699 9.75052 7.72649 9.76997C7.92804 9.79065 8.12123 9.82694 8.29196 9.87975L8.2175 10.116C7.93235 11.0205 8.69425 11.7488 9.47644 11.7488C9.89751 11.7488 10.3008 11.557 10.5422 11.2114C10.7983 10.8447 10.8349 10.3446 10.5553 9.92066C10.3496 9.60859 10.0532 9.22987 9.66236 8.91944C9.09859 8.47171 8.37374 8.32852 7.87965 8.27781C7.61848 8.251 7.19098 8.23915 6.93298 8.26245Z',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12.0001 15.7498C13.3899 15.7498 14.6238 16.4162 15.4004 17.4502L16.5998 16.5494C15.5521 15.1545 13.8816 14.2498 12.0001 14.2498C10.1185 14.2498 8.44806 15.1545 7.40039 16.5494L8.59978 17.4502C9.37635 16.4162 10.6103 15.7498 12.0001 15.7498ZM7.30674 9.74923C7.24672 9.75015 7.13199 9.75647 7.13199 9.75647C7.0873 9.76052 7.04318 9.76044 7 9.75657V8.26245C7.25459 8.23915 7.67643 8.251 7.93414 8.27781C8.42168 8.32852 9.13693 8.47171 9.69323 8.91944C10.0789 9.22987 10.3713 9.60859 10.5744 9.92066C10.8502 10.3446 10.8142 10.8447 10.5614 11.2114C10.3232 11.557 9.92527 11.7488 9.50978 11.7488C8.73795 11.7488 7.98614 11.0205 8.26751 10.116L8.34098 9.87975C8.17252 9.82694 7.98189 9.79065 7.783 9.76997C7.59602 9.75052 7.42775 9.74739 7.30674 9.74923ZM16.6933 9.74923C16.7533 9.75015 16.868 9.75647 16.868 9.75647C16.9127 9.76052 16.9568 9.76044 17 9.75657V8.26245C16.7454 8.23915 16.3236 8.251 16.0659 8.27781C15.5783 8.32852 14.8631 8.47171 14.3068 8.91944C13.9211 9.22987 13.6287 9.60859 13.4256 9.92066C13.1498 10.3446 13.1858 10.8447 13.4386 11.2114C13.6768 11.557 14.0747 11.7488 14.4902 11.7488C15.2621 11.7488 16.0139 11.0205 15.7325 10.116L15.659 9.87975C15.8275 9.82694 16.0181 9.79065 16.217 9.76997C16.404 9.75052 16.5723 9.74739 16.6933 9.74923Z',
} as const;

export const IconAngryStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-stroke-rounded IconAngryStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAngryDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-duotone-rounded IconAngryDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAngryTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-twotone-rounded IconAngryTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconAngrySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-solid-rounded IconAngrySolidRounded"
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

export const IconAngryBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-bulk-rounded IconAngryBulkRounded"
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
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAngryStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-stroke-sharp IconAngryStrokeSharp"
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
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAngrySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-solid-sharp IconAngrySolidSharp"
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

export const iconPackOfAngry: TheIconSelfPack = {
  name: 'Angry',
  StrokeRounded: IconAngryStrokeRounded,
  DuotoneRounded: IconAngryDuotoneRounded,
  TwotoneRounded: IconAngryTwotoneRounded,
  SolidRounded: IconAngrySolidRounded,
  BulkRounded: IconAngryBulkRounded,
  StrokeSharp: IconAngryStrokeSharp,
  SolidSharp: IconAngrySolidSharp,
};