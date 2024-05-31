import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z',
  d2: 'M9.72727 22C8.74951 22 8.54545 21.8081 8.54545 20.8889V14.2222H6.18182C5.20406 14.2222 5 14.0304 5 13.1111V11.4444C5 10.5252 5.20406 10.3333 6.18182 10.3333H8.54545V7.55556C8.54545 4.48731 11.191 2 14.4545 2H17.8182C18.7552 2 18.9817 2.1762 18.9989 3',
  d3: 'M5.55869 10.2083C4.47617 10.2083 4.25024 10.4146 4.25024 11.4028V13.1944C4.25024 14.1826 4.47617 14.3889 5.55869 14.3889H8.17557V21.5556C8.17557 22.5438 8.40149 22.75 9.48401 22.75H12.1009C13.1834 22.75 13.4093 22.5438 13.4093 21.5556V14.3889H16.3477C17.1687 14.3889 17.3803 14.2432 17.6058 13.5226L18.1666 11.7309C18.5529 10.4965 18.3148 10.2083 16.9085 10.2083H13.4093V7.22222C13.4093 6.56255 13.9951 6.02778 14.7178 6.02778H18.4418C19.5243 6.02778 19.7502 5.82154 19.7502 4.83333V2.44444C19.7502 1.45624 19.5243 1.25 18.4418 1.25H14.7178C11.1046 1.25 8.17557 3.92386 8.17557 7.22222V10.2083H5.55869Z',
  d4: 'M4.25 13.1931V11.4015C4.25 10.4133 4.47592 10.207 5.55844 10.207H16.9082C18.3146 10.207 18.5527 10.4952 18.1663 11.7296L17.6056 13.5213C17.38 14.2419 17.1685 14.3876 16.3475 14.3876H5.55844C4.47592 14.3876 4.25 14.1813 4.25 13.1931Z',
  d5: 'M8.17578 21.5556V14.3889V10.2083V7.22222C8.17578 3.92386 11.1048 1.25 14.718 1.25H18.442C19.5245 1.25 19.7505 1.45624 19.7505 2.44444V4.83333C19.7505 5.82154 19.5245 6.02778 18.442 6.02778H14.718C13.9954 6.02778 13.4095 6.56255 13.4095 7.22222V10.2083V14.3889V21.5556C13.4095 22.5438 13.1836 22.75 12.1011 22.75H9.48422C8.4017 22.75 8.17578 22.5438 8.17578 21.5556Z',
  d6: 'M5 14.2222V10.3333H8.54545V2H19V6.44444H13.2727V10.3333H18L16.5 14.2222H13.2727V22H8.54545V14.2222H5Z',
} as const;

export const IconFacebook02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-02-stroke-rounded IconFacebook02StrokeRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFacebook02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-02-duotone-rounded IconFacebook02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFacebook02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-02-twotone-rounded IconFacebook02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconFacebook02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-02-solid-rounded IconFacebook02SolidRounded"
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

export const IconFacebook02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-02-bulk-rounded IconFacebook02BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFacebook02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-02-stroke-sharp IconFacebook02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFacebook02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-02-solid-sharp IconFacebook02SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFacebook02: TheIconSelfPack = {
  name: 'Facebook02',
  StrokeRounded: IconFacebook02StrokeRounded,
  DuotoneRounded: IconFacebook02DuotoneRounded,
  TwotoneRounded: IconFacebook02TwotoneRounded,
  SolidRounded: IconFacebook02SolidRounded,
  BulkRounded: IconFacebook02BulkRounded,
  StrokeSharp: IconFacebook02StrokeSharp,
  SolidSharp: IconFacebook02SolidSharp,
};