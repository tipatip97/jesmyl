import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.77778 16C4.66596 16.6327 4 17.4385 4 18.3158C4 20.3505 7.58172 22 12 22C16.4183 22 20 20.3505 20 18.3158C20 17.4385 19.334 16.6327 18.2222 16',
  d2: 'M12.9981 7H11.0019C8.13196 7 6.19701 10.0691 7.32753 12.828C7.48501 13.2124 7.84633 13.4615 8.24612 13.4615H8.9491C9.18605 13.4615 9.39259 13.6302 9.45006 13.8706L10.3551 17.6567C10.5438 18.4462 11.222 19 12 19C12.778 19 13.4562 18.4462 13.6449 17.6567L14.5499 13.8706C14.6074 13.6302 14.814 13.4615 15.0509 13.4615H15.7539C16.1537 13.4615 16.515 13.2124 16.6725 12.828C17.803 10.0691 15.868 7 12.9981 7Z',
  d3: 'M14.5 4.5C14.5 5.88071 13.3807 7 12 7C10.6193 7 9.5 5.88071 9.5 4.5C9.5 3.11929 10.6193 2 12 2C13.3807 2 14.5 3.11929 14.5 4.5Z',
  d4: 'M12 1.25C10.3431 1.25 9 2.59315 9 4.25C9 5.32282 9.56313 6.26411 10.4099 6.79442C7.47495 7.21056 5.69103 10.4748 6.86508 13.3582C7.12056 13.9857 7.71969 14.4167 8.40809 14.4167H8.9002L9.72805 17.9022C9.98103 18.9673 10.9033 19.75 12 19.75C13.0967 19.75 14.019 18.9673 14.272 17.9022L15.0998 14.4167H15.5919C16.2803 14.4167 16.8794 13.9857 17.1349 13.3582C18.309 10.4748 16.525 7.21056 13.5901 6.79442C14.4369 6.26411 15 5.32282 15 4.25C15 2.59315 13.6569 1.25 12 1.25Z',
  d5: 'M6.64689 15.2556C6.92006 15.7356 6.75239 16.3461 6.27239 16.6193C5.26751 17.1912 5 17.7345 5 18.066C5 18.457 5.38667 19.1297 6.76144 19.7628C8.05051 20.3564 9.90162 20.7502 12 20.7502C14.0984 20.7502 15.9495 20.3564 17.2386 19.7628C18.6133 19.1297 19 18.457 19 18.066C19 17.7345 18.7325 17.1912 17.7276 16.6193C17.2476 16.3461 17.0799 15.7356 17.3531 15.2556C17.6263 14.7756 18.2368 14.6079 18.7168 14.8811C19.9356 15.5747 21 16.6428 21 18.066C21 19.7097 19.5958 20.8791 18.0752 21.5794C16.4688 22.3192 14.3199 22.7502 12 22.7502C9.6801 22.7502 7.53121 22.3192 5.92485 21.5794C4.4042 20.8791 3 19.7097 3 18.066C3 16.6428 4.0644 15.5747 5.28316 14.8811C5.76316 14.6079 6.37372 14.7756 6.64689 15.2556Z',
  d6: 'M5.77778 15.9805C4.66596 16.6123 4 17.4169 4 18.2929C4 20.3247 7.58172 21.9719 12 21.9719C16.4183 21.9719 20 20.3247 20 18.2929C20 17.4169 19.334 16.6123 18.2222 15.9805',
  d7: 'M11.988 7.05633C15.0256 7.05633 17.1376 9.53838 16.9872 12.4985V13.862H14.9195L13.6792 18.9752H10.2957L9.07351 13.862H7.00586V12.0619C7.11904 9.16241 9.07351 7.18447 11.988 7.05633ZM11.988 7.05633C13.5068 7.05633 14.4973 5.79174 14.4973 4.39781C14.4973 3.1923 13.4531 1.97461 11.988 1.97461C10.523 1.97461 9.49268 3.14546 9.49268 4.48031C9.49268 5.81516 10.4693 7.05633 11.988 7.05633Z',
  d8: 'M6.27239 16.6191C5.26751 17.191 5 17.7343 5 18.0658C5 18.4568 5.38667 19.1295 6.76144 19.7626C8.05051 20.3562 9.90162 20.75 12 20.75C14.0984 20.75 15.9495 20.3562 17.2386 19.7626C18.6133 19.1295 19 18.4568 19 18.0658C19 17.7343 18.7325 17.191 17.7276 16.6191L18.7168 14.8809C19.9356 15.5745 21 16.6426 21 18.0658C21 19.7095 19.5958 20.8789 18.0752 21.5792C16.4688 22.319 14.3199 22.75 12 22.75C9.6801 22.75 7.53121 22.319 5.92485 21.5792C4.4042 20.8789 3 19.7095 3 18.0658C3 16.6426 4.0644 15.5745 5.28316 14.8809L6.27239 16.6191Z',
  d9: 'M15.25 4.55C15.25 5.44011 14.9009 6.25343 14.3306 6.84994C16.3499 7.76165 17.75 9.82127 17.75 12.2V14.65H15.505L14.255 19.75H9.74496L8.49496 14.65H6.25V12.2C6.25 9.82127 7.6501 7.76165 9.66936 6.84994C9.09911 6.25343 8.75 5.44011 8.75 4.55C8.75 2.74153 10.1911 1.25 12 1.25C13.8089 1.25 15.25 2.74153 15.25 4.55Z',
} as const;

export const IconLocationUser03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-03-stroke-rounded IconLocationUser03StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUser03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-03-duotone-rounded IconLocationUser03DuotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUser03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-03-twotone-rounded IconLocationUser03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconLocationUser03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-03-solid-rounded IconLocationUser03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconLocationUser03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-03-bulk-rounded IconLocationUser03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconLocationUser03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-03-stroke-sharp IconLocationUser03StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUser03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-03-solid-sharp IconLocationUser03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLocationUser03: TheIconSelfPack = {
  name: 'LocationUser03',
  StrokeRounded: IconLocationUser03StrokeRounded,
  DuotoneRounded: IconLocationUser03DuotoneRounded,
  TwotoneRounded: IconLocationUser03TwotoneRounded,
  SolidRounded: IconLocationUser03SolidRounded,
  BulkRounded: IconLocationUser03BulkRounded,
  StrokeSharp: IconLocationUser03StrokeSharp,
  SolidSharp: IconLocationUser03SolidSharp,
};