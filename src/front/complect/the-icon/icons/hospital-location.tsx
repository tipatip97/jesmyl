import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 2C7.80558 2 4 5.61783 4 10.0807C4 12.6325 5.0625 14.6167 7.1875 16.389C8.68532 17.6382 10.4999 19.7131 11.5893 21.3951C12.1118 22.2016 12.8507 22.2016 13.4107 21.3951C14.5553 19.7466 16.3147 17.6382 17.8125 16.389C19.9375 14.6167 21 12.6325 21 10.0807C21 5.61783 17.1944 2 12.5 2Z',
  d2: 'M10.5 7V10M10.5 13V10M14.5 7V10M14.5 13V10M14.5 10H10.5',
  d3: 'M12 1.25C6.92757 1.25 2.75 5.16832 2.75 10.0807C2.75 12.893 3.94277 15.0764 6.20712 16.965C7.64344 18.1629 9.40869 20.18 10.4598 21.8028C10.7996 22.3274 11.3185 22.75 11.9859 22.75C12.6456 22.75 13.1704 22.3361 13.5267 21.8228C14.6504 20.2044 16.3659 18.1551 17.7929 16.965C20.0572 15.0764 21.25 12.893 21.25 10.0807C21.25 5.16832 17.0724 1.25 12 1.25ZM11 7C11 6.44772 10.5523 6 10 6C9.44771 6 9 6.44772 9 7L9 13C9 13.5523 9.44771 14 10 14C10.5523 14 11 13.5523 11 13V11H13V13C13 13.5523 13.4477 14 14 14C14.5523 14 15 13.5523 15 13L15 7C15 6.44772 14.5523 6 14 6C13.4477 6 13 6.44772 13 7L13 9H11L11 7Z',
  d4: 'M2.75 10.0807C2.75 5.16832 6.92757 1.25 12 1.25C17.0724 1.25 21.25 5.16832 21.25 10.0807C21.25 12.893 20.0572 15.0764 17.7929 16.965C16.3659 18.1551 14.6504 20.2044 13.5267 21.8228C13.1704 22.3361 12.6456 22.75 11.9859 22.75C11.3185 22.75 10.7996 22.3274 10.4598 21.8028C9.40869 20.18 7.64344 18.1629 6.20712 16.965C3.94277 15.0764 2.75 12.893 2.75 10.0807Z',
  d5: 'M10 6C10.5523 6 11 6.44772 11 7V9H13V7C13 6.44772 13.4477 6 14 6C14.5523 6 15 6.44772 15 7V13C15 13.5523 14.5523 14 14 14C13.4477 14 13 13.5523 13 13V11H11V13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13V7C9 6.44772 9.44772 6 10 6Z',
  d6: 'M12 2C7.58172 2 4 5.61783 4 10.0807C4 12.6325 5 14.6167 7 16.389C8.40971 17.6382 10.9746 20.3179 12 21.9999C13.0773 20.3514 15.5903 17.6382 17 16.389C19 14.6167 20 12.6325 20 10.0807C20 5.61783 16.4183 2 12 2Z',
  d7: 'M10 7V10M10 13V10M14 7V10M14 13V10M14 10H10',
  d8: 'M12 1.25C7.16043 1.25 3.25 5.21073 3.25 10.0807C3.25 12.8754 4.36442 15.0556 6.50258 16.9503C7.89367 18.183 10.3925 20.804 11.3596 22.3903C11.4936 22.61 11.7309 22.7457 11.9882 22.7498C12.2456 22.7538 12.487 22.6256 12.6278 22.4101C13.6574 20.8346 16.1198 18.1711 17.4974 16.9503C19.6356 15.0556 20.75 12.8754 20.75 10.0807C20.75 5.21073 16.8396 1.25 12 1.25ZM11 7H9V13H11V11H13V13H15V7H13V9H11V7Z',
} as const;

export const IconHospitalLocationStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-location-stroke-rounded IconHospitalLocationStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconHospitalLocationDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-location-duotone-rounded IconHospitalLocationDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalLocationTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-location-twotone-rounded IconHospitalLocationTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconHospitalLocationSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-location-solid-rounded IconHospitalLocationSolidRounded"
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

export const IconHospitalLocationBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-location-bulk-rounded IconHospitalLocationBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconHospitalLocationStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-location-stroke-sharp IconHospitalLocationStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalLocationSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-location-solid-sharp IconHospitalLocationSolidSharp"
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

export const iconPackOfHospitalLocation: TheIconSelfPack = {
  name: 'HospitalLocation',
  StrokeRounded: IconHospitalLocationStrokeRounded,
  DuotoneRounded: IconHospitalLocationDuotoneRounded,
  TwotoneRounded: IconHospitalLocationTwotoneRounded,
  SolidRounded: IconHospitalLocationSolidRounded,
  BulkRounded: IconHospitalLocationBulkRounded,
  StrokeSharp: IconHospitalLocationStrokeSharp,
  SolidSharp: IconHospitalLocationSolidSharp,
};