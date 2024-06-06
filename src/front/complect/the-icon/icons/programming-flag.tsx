import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H15C17.8284 3 19.2426 3 20.1213 3.87868C21 4.75736 21 6.17157 21 9C21 11.8284 21 13.2426 20.1213 14.1213C19.2426 15 17.8284 15 15 15H4V7Z',
  d2: 'M4 21L4 8',
  d3: 'M16 7L17.2265 8.05719C17.7422 8.50163 18 8.72386 18 9C18 9.27614 17.7422 9.49836 17.2265 9.94281L16 11',
  d4: 'M9 7L7.77346 8.05719C7.25782 8.50163 7 8.72386 7 9C7 9.27614 7.25782 9.49836 7.77346 9.94281L9 11',
  d5: 'M13.5 7L11.5 11',
  d6: 'M15.0549 2.25H15.055C16.4225 2.24998 17.5248 2.24997 18.3918 2.36653C19.2919 2.48754 20.0497 2.74644 20.6517 3.34835C21.2536 3.95027 21.5125 4.70814 21.6335 5.60825C21.75 6.47522 21.75 7.68728 21.75 9.05487C21.75 10.4225 21.75 11.5248 21.6335 12.3918C21.5125 13.2919 21.2536 14.0497 20.6517 14.6517C20.0497 15.2536 19.2919 15.5125 18.3918 15.6335C17.5248 15.75 16.4225 15.75 15.0549 15.75H15.0549H15.0549H15.0549H15.0549H5.25L5.25 20.75C5.25 21.3023 4.80229 21.75 4.25 21.75C3.69772 21.75 3.25 21.3023 3.25 20.75V7.74935V6.94797V6.94794C3.24997 6.04949 3.24995 5.30029 3.32991 4.70552C3.41432 4.07773 3.59999 3.51093 4.05546 3.05546C4.51093 2.59999 5.07773 2.41432 5.70552 2.32991C6.30029 2.24995 7.04952 2.24997 7.94797 2.25H7.948H15.0549ZM15.5103 7.56811C15.1966 7.29768 15.1615 6.8241 15.4319 6.51035C15.7023 6.1966 16.1759 6.16148 16.4897 6.43192L17.7162 7.48911L17.7476 7.51613C17.978 7.71469 18.205 7.91027 18.3682 8.09461C18.5487 8.2985 18.75 8.59545 18.75 9.00001C18.75 9.40458 18.5487 9.70153 18.3682 9.90542C18.205 10.0898 17.978 10.2853 17.7476 10.4839L17.7476 10.4839L17.7162 10.5109L16.4897 11.5681C16.1759 11.8385 15.7023 11.8034 15.4319 11.4897C15.1615 11.1759 15.1966 10.7023 15.5103 10.4319L16.7369 9.37472C16.9366 9.2026 17.0685 9.08776 17.1591 9.00001C17.0685 8.91226 16.9366 8.79743 16.7369 8.6253L15.5103 7.56811ZM9.5681 6.51035C9.83853 6.8241 9.80341 7.29768 9.48966 7.56811L8.26312 8.6253C8.06342 8.79743 7.93152 8.91226 7.84087 9.00001C7.93152 9.08776 8.06342 9.2026 8.26312 9.37472L9.48966 10.4319C9.80341 10.7023 9.83853 11.1759 9.5681 11.4897C9.29767 11.8034 8.82409 11.8385 8.51034 11.5681L7.2838 10.5109L7.25243 10.4839C7.02197 10.2853 6.79495 10.0898 6.63178 9.90542C6.4513 9.70153 6.25 9.40458 6.25 9.00001C6.25 8.59545 6.4513 8.2985 6.63178 8.09461C6.79495 7.91027 7.02197 7.71469 7.25243 7.51613L7.2838 7.48911L8.51034 6.43192C8.82409 6.16148 9.29767 6.1966 9.5681 6.51035ZM14.171 7.33545C14.3562 6.96497 14.2061 6.51446 13.8356 6.32922C13.4651 6.14398 13.0146 6.29415 12.8293 6.66463L10.8293 10.6646C10.6441 11.0351 10.7943 11.4856 11.1648 11.6709C11.5352 11.8561 11.9857 11.7059 12.171 11.3355L14.171 7.33545Z',
  d7: 'M15.055 2.25H15.0549H7.948H7.94797C7.04952 2.24997 6.30029 2.24995 5.70552 2.32991C5.07773 2.41432 4.51093 2.59999 4.05546 3.05546C3.59999 3.51093 3.41432 4.07773 3.32991 4.70552C3.24995 5.30029 3.24997 6.04949 3.25 6.94794V6.94797V7.74935V20.75C3.25 21.3023 3.69772 21.75 4.25 21.75C4.80229 21.75 5.25 21.3023 5.25 20.75L5.25 15.75H15.0549H15.0549C16.4225 15.75 17.5248 15.75 18.3918 15.6335C19.2919 15.5125 20.0497 15.2536 20.6517 14.6517C21.2536 14.0497 21.5125 13.2919 21.6335 12.3918C21.75 11.5248 21.75 10.4225 21.75 9.05487C21.75 7.68728 21.75 6.47522 21.6335 5.60825C21.5125 4.70814 21.2536 3.95027 20.6517 3.34835C20.0497 2.74644 19.2919 2.48754 18.3918 2.36653C17.5248 2.24997 16.4225 2.24998 15.055 2.25Z',
  d8: 'M15.4319 6.51035C15.1615 6.8241 15.1966 7.29768 15.5103 7.56811L16.7369 8.6253C16.9366 8.79743 17.0685 8.91226 17.1591 9.00001C17.0685 9.08776 16.9366 9.2026 16.7369 9.37472L15.5103 10.4319C15.1966 10.7023 15.1615 11.1759 15.4319 11.4897C15.7023 11.8034 16.1759 11.8385 16.4897 11.5681L17.7162 10.5109C17.7267 10.5019 17.7371 10.4929 17.7476 10.4839C17.978 10.2853 18.205 10.0898 18.3682 9.90542C18.5487 9.70153 18.75 9.40458 18.75 9.00001C18.75 8.59545 18.5487 8.2985 18.3682 8.09461C18.205 7.91027 17.978 7.71469 17.7476 7.51613C17.7371 7.50713 17.7267 7.49812 17.7162 7.48911L16.4897 6.43192C16.1759 6.16148 15.7023 6.1966 15.4319 6.51035Z',
  d9: 'M9.5681 6.51035C9.83853 6.8241 9.80341 7.29768 9.48966 7.56811L8.26312 8.6253C8.06342 8.79743 7.93152 8.91226 7.84087 9.00001C7.93152 9.08776 8.06342 9.2026 8.26312 9.37472L9.48966 10.4319C9.80341 10.7023 9.83853 11.1759 9.5681 11.4897C9.29767 11.8034 8.82409 11.8385 8.51034 11.5681L7.2838 10.5109C7.27334 10.5019 7.26288 10.4929 7.25243 10.4839C7.02197 10.2853 6.79495 10.0898 6.63178 9.90542C6.4513 9.70153 6.25 9.40458 6.25 9.00001C6.25 8.59545 6.4513 8.2985 6.63178 8.09461C6.79495 7.91027 7.02197 7.71469 7.25243 7.51613C7.26288 7.50713 7.27334 7.49812 7.2838 7.48911L8.51034 6.43192C8.82409 6.16148 9.29767 6.1966 9.5681 6.51035Z',
  d10: 'M13.8356 6.32934C14.2061 6.51459 14.3562 6.96509 14.171 7.33557L12.171 11.3356C11.9857 11.7061 11.5352 11.8562 11.1648 11.671C10.7943 11.4857 10.6441 11.0352 10.8293 10.6648L12.8293 6.66475C13.0146 6.29427 13.4651 6.1441 13.8356 6.32934Z',
  d11: 'M3.5 15H20.5V3H3.5V15ZM3.5 15V21',
  d12: 'M14.9971 7.00027L16.9971 9.00027L14.9971 11.0003M9.00195 7.00195L7.00195 9.00195L9.00195 11.002M13.0019 6.50195L10.9972 11.4986',
  d13: 'M2.75 3C2.75 2.58579 3.08579 2.25 3.5 2.25H20.5C20.9142 2.25 21.25 2.58579 21.25 3V15C21.25 15.4142 20.9142 15.75 20.5 15.75H4.75V21.75H2.75V3ZM12.3038 6.22168L10.3038 11.2217L11.6965 11.7788L13.6965 6.77877L12.3038 6.22168ZM14.4698 7.53055L15.9395 9.00022L14.4698 10.4699L15.5304 11.5306L18.0608 9.00022L15.5304 6.46989L14.4698 7.53055ZM9.53044 7.53055L8.46978 6.46989L5.93945 9.00022L8.46978 11.5306L9.53044 10.4699L8.06077 9.00022L9.53044 7.53055Z',
};

export const IconProgrammingFlagStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="programming-flag-stroke-rounded IconProgrammingFlagStrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconProgrammingFlagDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="programming-flag-duotone-rounded IconProgrammingFlagDuotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconProgrammingFlagTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="programming-flag-twotone-rounded IconProgrammingFlagTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconProgrammingFlagSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="programming-flag-solid-rounded IconProgrammingFlagSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconProgrammingFlagBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="programming-flag-bulk-rounded IconProgrammingFlagBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconProgrammingFlagStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="programming-flag-stroke-sharp IconProgrammingFlagStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconProgrammingFlagSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="programming-flag-solid-sharp IconProgrammingFlagSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfProgrammingFlag: TheIconSelfPack = {
  name: 'ProgrammingFlag',
  StrokeRounded: IconProgrammingFlagStrokeRounded,
  DuotoneRounded: IconProgrammingFlagDuotoneRounded,
  TwotoneRounded: IconProgrammingFlagTwotoneRounded,
  SolidRounded: IconProgrammingFlagSolidRounded,
  BulkRounded: IconProgrammingFlagBulkRounded,
  StrokeSharp: IconProgrammingFlagStrokeSharp,
  SolidSharp: IconProgrammingFlagSolidSharp,
};