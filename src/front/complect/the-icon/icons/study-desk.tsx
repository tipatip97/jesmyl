import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12H2',
  d2: 'M20 17H16C14.1144 17 13.1716 17 12.5858 16.4142C12 15.8284 12 14.8856 12 13V12',
  d3: 'M4 12V22M20 12V22',
  d4: 'M15.0401 2.59903C14.3088 1.90313 13.1232 1.90313 12.3919 2.59903C11.9784 2.99247 11.8198 3.4444 12.2767 3.87914L13.6927 5.22669C14.149 5.66087 14.6219 5.51714 15.0401 5.11912C15.7714 4.42322 15.7714 3.29494 15.0401 2.59903ZM15.0401 2.59903C15.5358 2.27324 16.0932 1.81764 16.7123 2.0763C17.0028 2.19766 17.2022 2.49474 17.6008 3.08889L19.0993 5.3223C19.6639 6.16376 19.9462 6.5845 19.9931 7.06138C20.0401 7.53825 19.8448 8.00129 19.4542 8.92735L18.1584 12',
  d5: 'M4 12V7.5C4 6.37313 4.4506 6 5.5 6C6.5494 6 7 6.37313 7 7.5V12',
  d6: 'M7 12V7.5C7 6.37313 7.4506 6 8.5 6C9.5494 6 10 6.37313 10 7.5V12',
  d7: 'M16 17H20V12H12V13C12 14.8856 12 15.8284 12.5858 16.4142C13.1716 17 14.1144 17 16 17Z',
  d8: 'M4 7.5V12H7H10V7.5C10 6.37313 9.5494 6 8.5 6C7.4506 6 7 6.37313 7 7.5C7 6.37313 6.5494 6 5.5 6C4.4506 6 4 6.37313 4 7.5Z',
  d9: 'M7 7.5V12M7 7.5C7 6.37313 6.5494 6 5.5 6C4.4506 6 4 6.37313 4 7.5V12H7M7 7.5C7 6.37313 7.4506 6 8.5 6C9.5494 6 10 6.37313 10 7.5V12H7',
  d10: 'M2 10.8751C1.44772 10.8751 1 11.3228 1 11.8751C1 12.4274 1.44772 12.8751 2 12.8751H3V21.8751C3 22.4274 3.44772 22.8751 4 22.8751C4.55228 22.8751 5 22.4274 5 21.8751V12.8751H11.25L11.25 12.9271C11.25 13.8256 11.2499 14.5748 11.3299 15.1696C11.4143 15.7974 11.6 16.3642 12.0555 16.8197C12.5109 17.2751 13.0777 17.4608 13.7055 17.5452C14.3003 17.6252 15.0495 17.6252 15.948 17.6251L19 17.6251V21.8751C19 22.4274 19.4477 22.8751 20 22.8751C20.5523 22.8751 21 22.4274 21 21.8751V12.8751H22C22.5523 12.8751 23 12.4274 23 11.8751C23 11.3228 22.5523 10.8751 22 10.8751H2Z',
  d11: 'M16.1315 2.68059L16.107 2.69162C16.5453 3.6291 16.3621 4.77196 15.5574 5.53774C15.2914 5.79082 14.9298 6.04162 14.4835 6.10323C13.9943 6.17077 13.5416 5.99328 13.176 5.64531L11.7599 4.29775C11.3924 3.94807 11.1868 3.49122 11.2674 2.98176C11.3388 2.52977 11.6164 2.17721 11.8751 1.93102C12.7433 1.10484 14.0596 0.981269 15.0619 1.56031C15.2071 1.46941 15.3674 1.37781 15.5288 1.30701C15.9215 1.13469 16.4395 1.0247 17.0017 1.25957C17.3033 1.38555 17.5182 1.59064 17.6932 1.8014C17.854 1.99503 18.022 2.24536 18.2053 2.51871L19.7404 4.80664C20.0073 5.20442 20.2355 5.54449 20.3993 5.84518C20.5738 6.16577 20.703 6.48951 20.7398 6.86319C20.7766 7.23734 20.7128 7.57941 20.6033 7.9267C20.5009 8.2517 20.3427 8.62661 20.1583 9.06393L18.8497 12.1667C18.6887 12.5484 18.2489 12.7273 17.8672 12.5664C17.4855 12.4054 17.3066 11.9655 17.4676 11.5839L18.7634 8.5112C18.9641 8.03541 19.094 7.72555 19.1727 7.47574C19.2468 7.24078 19.2571 7.1129 19.247 7.01017C19.2368 6.90697 19.2014 6.7819 19.0819 6.56254C18.9553 6.33004 18.7667 6.04755 18.4768 5.61547L16.9783 3.38207C16.7702 3.072 16.645 2.88709 16.5393 2.75981C16.4907 2.70125 16.4593 2.67138 16.4409 2.65624C16.4323 2.64917 16.4273 2.64588 16.4253 2.6447L16.4235 2.64364C16.3665 2.61984 16.2962 2.60832 16.1315 2.68059Z',
  d12: 'M3.66383 5.48126C4.19384 4.9723 4.90065 4.87512 5.5 4.87512C5.97974 4.87512 6.52834 4.93739 7 5.22326C7.47166 4.93739 8.02026 4.87512 8.5 4.87512C9.09935 4.87512 9.80616 4.9723 10.3362 5.48126C10.8751 5.99882 11 6.71639 11 7.37512V11.8751C11 12.4274 10.5523 12.8751 10 12.8751H4C3.44772 12.8751 3 12.4274 3 11.8751V7.37512C3 6.71639 3.12487 5.99882 3.66383 5.48126ZM6 7.37512C6 7.09402 5.96379 6.97002 5.94596 6.92647C5.90454 6.9103 5.78232 6.87512 5.5 6.87512C5.21768 6.87512 5.09546 6.9103 5.05404 6.92647C5.03621 6.97002 5 7.09402 5 7.37512V10.8751H6V7.37512ZM8 10.8751V7.37512C8 7.09402 8.03621 6.97002 8.05404 6.92647C8.09546 6.9103 8.21768 6.87512 8.5 6.87512C8.78232 6.87512 8.90454 6.9103 8.94596 6.92647C8.96379 6.97002 9 7.09402 9 7.37512V10.8751H8Z',
  d13: 'M2 10.8751C1.44772 10.8751 1 11.3228 1 11.8751C1 12.4274 1.44772 12.8751 2 12.8751H3V21.8751C3 22.4274 3.44772 22.8751 4 22.8751C4.55228 22.8751 5 22.4274 5 21.8751V12.8751H11.25H19V17.6251V21.8751C19 22.4274 19.4477 22.8751 20 22.8751C20.5523 22.8751 21 22.4274 21 21.8751V12.8751H22C22.5523 12.8751 23 12.4274 23 11.8751C23 11.3228 22.5523 10.8751 22 10.8751H2Z',
  d14: 'M11.25 12.8751C11.25 13.7736 11.2499 14.5748 11.3299 15.1696C11.4143 15.7974 11.6 16.3642 12.0555 16.8197C12.5109 17.2751 13.0777 17.4608 13.7055 17.5452C14.3003 17.6252 15.0495 17.6252 15.948 17.6251L19 17.6251V12.8751H11.25Z',
  d15: 'M20 17H12V12',
  d16: 'M15.182 3.56064C14.4009 2.77959 13.1346 2.77959 12.3536 3.56064L12 3.9142L14.8284 6.74262L15.182 6.38907C15.963 5.60802 15.963 4.34169 15.182 3.56064ZM15.182 3.56064L17 2L21 6.5L18 12',
  d17: 'M7 12V6H10V12',
  d18: 'M4 12V6H7V12',
  d19: 'M3.25 13.25V22.25H4.75V13.25H11.25V17.5C11.25 17.9142 11.5858 18.25 12 18.25H19.25V22.25H20.75V13.25H22V11.75H2V13.25H3.25Z',
  d20: 'M16.5115 1.93093C16.822 1.66442 17.2887 1.69592 17.5606 2.00174L21.5606 6.50174C21.7708 6.73827 21.81 7.08132 21.6584 7.35915L18.6584 12.8591L17.3416 12.1409L20.089 7.104L16.9292 3.54924L16.1946 4.17984C16.7502 5.2201 16.5894 6.5423 15.7123 7.41941L11.8232 3.53032C12.7256 2.62792 14.0992 2.48378 15.1521 3.0979L16.5115 1.93093Z',
  d21: 'M6.25 5.75H10.75V12.5H9.25V7.25H7.75V12.5H6.25V5.75Z',
  d22: 'M3.25 5.75H7.75V12.5H6.25V7.25H4.75V12.5H3.25V5.75Z',
};

export const IconStudyDeskStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-desk-stroke-rounded IconStudyDeskStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStudyDeskDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-desk-duotone-rounded IconStudyDeskDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStudyDeskTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-desk-twotone-rounded IconStudyDeskTwotoneRounded"
    >
      <path 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStudyDeskSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-desk-solid-rounded IconStudyDeskSolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStudyDeskBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-desk-bulk-rounded IconStudyDeskBulkRounded"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStudyDeskStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-desk-stroke-sharp IconStudyDeskStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStudyDeskSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-desk-solid-sharp IconStudyDeskSolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStudyDesk: TheIconSelfPack = {
  name: 'StudyDesk',
  StrokeRounded: IconStudyDeskStrokeRounded,
  DuotoneRounded: IconStudyDeskDuotoneRounded,
  TwotoneRounded: IconStudyDeskTwotoneRounded,
  SolidRounded: IconStudyDeskSolidRounded,
  BulkRounded: IconStudyDeskBulkRounded,
  StrokeSharp: IconStudyDeskStrokeSharp,
  SolidSharp: IconStudyDeskSolidSharp,
};