import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847',
  d3: 'M16.9909 8.03027H13.9625C12.9186 8.03027 12.0853 8.89224 12.0776 9.93606L11.9923 21.4505M9.90625 14.0255H14.9861',
  d4: 'M15.9217 6.75158C15.0461 6.7515 14.2675 6.75144 13.6389 6.83598C12.9557 6.92787 12.2658 7.13975 11.7019 7.70378C11.138 8.26782 10.9262 8.95794 10.8344 9.64139C10.7499 10.2702 10.7499 11.0491 10.75 11.9249L10.75 12.7535H10C9.30964 12.7535 8.75 13.3133 8.75 14.0039C8.75 14.6944 9.30964 15.2543 10 15.2543H10.75V21.2517C10.75 21.726 10.75 21.9631 10.6013 22.11C10.4526 22.2569 10.2173 22.2539 9.7467 22.2479C8.55726 22.2329 7.54575 22.1912 6.68802 22.0758C5.31137 21.8907 4.21911 21.5035 3.36091 20.645C2.50272 19.7866 2.11568 18.694 1.93059 17.3169C1.74998 15.973 1.74999 14.2518 1.75 12.0604V11.946C1.74999 9.75465 1.74998 8.03341 1.93059 6.68958C2.11568 5.31249 2.50272 4.21989 3.36091 3.36142C4.21911 2.50295 5.31137 2.1158 6.68802 1.93065C8.03143 1.74998 9.75214 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93065C18.6886 2.1158 19.7809 2.50295 20.6391 3.36142C21.4973 4.21989 21.8843 5.31249 22.0694 6.68958C22.25 8.03341 22.25 9.75466 22.25 11.946V12.0604C22.25 14.2518 22.25 15.973 22.0694 17.3169C21.8843 18.694 21.4973 19.7866 20.6391 20.645C19.7809 21.5035 18.6886 21.8907 17.312 22.0758C16.4543 22.1912 15.4427 22.2329 14.2533 22.2479C13.7827 22.2539 13.5474 22.2569 13.3987 22.11C13.25 21.9631 13.25 21.726 13.25 21.2517V15.2543H15C15.6904 15.2543 16.25 14.6944 16.25 14.0039C16.25 13.3133 15.6904 12.7535 15 12.7535H13.25V12.0032C13.25 11.0248 13.2527 10.4167 13.3121 9.97461C13.3657 9.57558 13.4449 9.49675 13.4685 9.47331L13.4697 9.47211L13.4709 9.4709C13.4943 9.44734 13.5731 9.36811 13.972 9.31447C14.414 9.25502 15.0219 9.25237 16 9.25237H17C17.6904 9.25237 18.25 8.69255 18.25 8.00198C18.25 7.3114 17.6904 6.75158 17 6.75158L15.9217 6.75158Z',
  d5: 'M12.0572 1.75H11.9428C9.75214 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d6: 'M17 6.75001L15.9217 6.75C15.0461 6.74993 14.2675 6.74986 13.6389 6.83438C12.9557 6.92624 12.2658 7.13806 11.7019 7.70191C11.138 8.26577 10.9262 8.95567 10.8344 9.63891C10.7499 10.2675 10.7499 11.0461 10.75 11.9217L10.75 12.75H10C9.30964 12.75 8.75 13.3097 8.75 14C8.75 14.6904 9.30964 15.25 10 15.25H10.75V22.2488C11.1312 22.25 11.5286 22.25 11.9428 22.25H12.0572C12.4714 22.25 12.8688 22.25 13.25 22.2488V15.25H15C15.6904 15.25 16.25 14.6904 16.25 14C16.25 13.3097 15.6904 12.75 15 12.75H13.25V12C13.25 11.0219 13.2527 10.414 13.3121 9.97202C13.3657 9.57311 13.4449 9.49432 13.4685 9.47088L13.4697 9.46968L13.4709 9.46847C13.4943 9.44492 13.5731 9.36572 13.972 9.31209C14.414 9.25266 15.0219 9.25001 16 9.25001H17C17.6904 9.25001 18.25 8.69036 18.25 8.00001C18.25 7.30965 17.6904 6.75001 17 6.75001Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M17.012 6.95508H12.0325C12.027 6.95508 12.0225 6.9599 12.0225 6.96584L12.0227 12.9968M12.0227 12.9968V21.0001M12.0227 12.9968H10.0103M12.0227 12.9968H14.9964',
  d9: 'M12 7C11.4477 7 11 7.44771 11 8V13H9V15H11V21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V21C21.75 21.4142 21.4142 21.75 21 21.75H13V15H15V13H13V9H17V7H12Z',
} as const;

export const IconFacebook01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-01-stroke-rounded IconFacebook01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFacebook01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-01-duotone-rounded IconFacebook01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFacebook01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-01-twotone-rounded IconFacebook01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconFacebook01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-01-solid-rounded IconFacebook01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFacebook01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-01-bulk-rounded IconFacebook01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFacebook01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-01-stroke-sharp IconFacebook01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFacebook01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="facebook-01-solid-sharp IconFacebook01SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFacebook01: TheIconSelfPack = {
  name: 'Facebook01',
  StrokeRounded: IconFacebook01StrokeRounded,
  DuotoneRounded: IconFacebook01DuotoneRounded,
  TwotoneRounded: IconFacebook01TwotoneRounded,
  SolidRounded: IconFacebook01SolidRounded,
  BulkRounded: IconFacebook01BulkRounded,
  StrokeSharp: IconFacebook01StrokeSharp,
  SolidSharp: IconFacebook01SolidSharp,
};