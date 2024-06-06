import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.29469 17C3.53045 7.25 8.86313 2.9375 12 2C15.1369 2.9375 20.4696 7.25 16.7053 17C16.1369 16.6875 14.4 16.0625 12 16.0625C9.6 16.0625 7.86313 16.6875 7.29469 17Z',
  d2: 'M14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9Z',
  d3: 'M17.5 15.5576C18.9421 15.6908 20.7078 16.0822 21.9814 17C21.9814 17 22.5044 12.0642 18 11',
  d4: 'M6.5 15.5576C5.05794 15.6908 3.29216 16.0822 2.01858 17C2.01858 17 1.49555 12.0642 6 11',
  d5: 'M9.5 19C9.5 19 9.91667 21.5 12 22C14.0833 21.5 14.5 19 14.5 19',
  d6: 'M12 1C8.86313 2.0625 3.53045 6.95 7.29469 18C7.86313 17.6458 9.6 16.9375 12 16.9375C14.4 16.9375 16.1369 17.6458 16.7053 18C20.4696 6.95 15.1369 2.0625 12 1ZM12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6Z',
  d7: 'M7.29469 18C3.53045 6.95 8.86313 2.0625 12 1C15.1369 2.0625 20.4696 6.95 16.7053 18C16.1369 17.6458 14.4 16.9375 12 16.9375C9.6 16.9375 7.86313 17.6458 7.29469 18Z',
  d8: 'M14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10C13.1046 10 14 9.10457 14 8Z',
  d9: 'M17.5 16.5576C18.9421 16.6908 20.7078 17.0822 21.9814 18C21.9814 18 22.5044 13.0642 18 12',
  d10: 'M6.5 16.5576C5.05794 16.6908 3.29216 17.0822 2.01858 18C2.01858 18 1.49555 13.0642 6 12',
  d11: 'M9.5 20C9.5 20 9.91667 22.5 12 23C14.0833 22.5 14.5 20 14.5 20',
  d12: 'M9.26289 19.2885C10.9169 18.7371 13.0833 18.7372 14.7372 19.2885C15.0873 19.4052 15.3005 19.7592 15.2399 20.1233L15.2397 20.1245C15.2395 20.5184 14.8758 21.3149 14.6939 21.6639C14.2751 22.4536 13.5064 23.4098 12.1751 23.7293C12.06 23.7569 11.9401 23.7569 11.825 23.7293C10.4938 23.4098 9.72501 22.4536 9.30622 21.6639C9.027 21.2125 8.82591 20.4487 8.76028 20.1233C8.6996 19.7593 8.91278 19.4052 9.26289 19.2885Z',
  d13: 'M21.5242 18.6097C21.7411 18.766 22.0248 18.7951 22.2688 18.686C22.5129 18.5769 22.6804 18.3461 22.7086 18.0803L22.7092 18.0773C22.7756 17.857 22.7463 17.3876 22.7233 17.1801C22.7 16.6558 22.6176 15.9372 22.3763 15.1742C22.1 14.3004 21.6105 13.3639 20.7743 12.6043C20.4634 12.3219 20.308 12.1807 20.1358 12.2464C19.9637 12.312 19.9393 12.5427 19.8906 13.0043C19.7611 14.2306 19.5133 15.5371 19.1297 16.9261C19.0498 17.2155 19.0098 17.3602 19.0695 17.4676C19.1293 17.5749 19.2778 17.6185 19.5748 17.7057C20.2893 17.9155 20.9685 18.2092 21.5242 18.6097Z',
  d14: 'M2.47578 18.6097C2.25891 18.766 1.97524 18.795 1.73119 18.6859C1.48715 18.5769 1.31961 18.3461 1.29145 18.0803L1.29083 18.0772C1.22443 17.8569 1.25368 17.3876 1.27667 17.18C1.30002 16.6558 1.38243 15.9371 1.62372 15.1742C1.90004 14.3004 2.38948 13.3639 3.22562 12.6043C3.5365 12.3219 3.69194 12.1807 3.8641 12.2464C4.03627 12.312 4.06064 12.5427 4.10938 13.0043C4.23888 14.2306 4.48669 15.5371 4.87026 16.926C4.95019 17.2155 4.99016 17.3602 4.93041 17.4676C4.87066 17.5749 4.72214 17.6185 4.42511 17.7057C3.7107 17.9154 3.03153 18.2092 2.47578 18.6097Z',
  d15: 'M11.7594 0.289642C11.9154 0.236786 12.0845 0.236786 12.2406 0.289642C13.9946 0.883737 16.2772 2.50913 17.6223 5.44204C18.9745 8.39058 19.3442 12.5793 17.4152 18.2418C17.3414 18.4585 17.1728 18.6295 16.9573 18.7064C16.7417 18.7833 16.5029 18.7576 16.3087 18.6366C15.8682 18.3621 14.2707 17.6875 12 17.6875C9.72924 17.6875 8.13176 18.3621 7.69129 18.6366C7.49707 18.7576 7.25823 18.7833 7.0427 18.7064C6.82717 18.6295 6.65853 18.4585 6.58474 18.2418C4.65577 12.5793 5.02543 8.39058 6.37769 5.44204C7.72277 2.50913 10.0054 0.883737 11.7594 0.289642ZM14.5 8C14.5 6.61929 13.3807 5.5 12 5.5C10.6193 5.5 9.5 6.61929 9.5 8C9.5 9.38071 10.6193 10.5 12 10.5C13.3807 10.5 14.5 9.38071 14.5 8Z',
  d16: 'M12.2406 0.289642C12.0845 0.236786 11.9154 0.236786 11.7594 0.289642C10.0054 0.883737 7.72277 2.50913 6.37769 5.44204C5.02543 8.39058 4.65577 12.5793 6.58474 18.2418C6.65853 18.4585 6.82717 18.6295 7.0427 18.7064C7.25823 18.7833 7.49707 18.7576 7.69129 18.6366C8.13176 18.3621 9.72924 17.6875 12 17.6875C14.2707 17.6875 15.8682 18.3621 16.3087 18.6366C16.5029 18.7576 16.7417 18.7833 16.9573 18.7064C17.1728 18.6295 17.3414 18.4585 17.4152 18.2418C19.3442 12.5793 18.9745 8.39058 17.6223 5.44204C16.2772 2.50913 13.9946 0.883737 12.2406 0.289642Z',
  d17: 'M12 5.5C13.3807 5.5 14.5 6.61929 14.5 8C14.5 9.38071 13.3807 10.5 12 10.5C10.6193 10.5 9.5 9.38071 9.5 8C9.5 6.61929 10.6193 5.5 12 5.5Z',
  d18: 'M13.9386 8C13.9386 6.89543 13.0464 6 11.9457 6C10.8451 6 9.95288 6.89543 9.95288 8C9.95288 9.10457 10.8451 10 11.9457 10C13.0464 10 13.9386 9.10457 13.9386 8Z',
  d19: 'M8.95581 19C8.95668 22 11.9451 23 11.9451 23C11.9451 23 14.9343 22 14.9343 19',
  d20: 'M7.01338 17.0338C3.95969 6.58824 8.86684 1.96695 11.9658 1C15.0899 2.01525 20.039 6.81956 16.8971 17.0338M7.01338 17.0338H16.8971M7.01338 17.0338H1.99878C1.99878 17.0338 1.96942 12.46 6.13726 11.9556M16.8971 17.0338H22.0011C22.0011 17.0338 22.125 12.7939 17.8702 11.9555',
  d21: 'M12.2415 0.581497L12.0009 0.5L11.7603 0.581497C10.0597 1.15751 7.86326 2.70245 6.50509 5.46751C5.13897 8.24874 4.9042 12.7259 6.50612 18.0419H17.4967C19.0987 12.7259 18.8629 8.24874 17.4967 5.46751C16.1386 2.70245 13.9421 1.15751 12.2415 0.581497ZM12.0001 11.0419C10.4813 11.0419 9.25005 9.81065 9.25005 8.29187C9.25005 6.77309 10.4813 5.54187 12.0001 5.54187C13.5188 5.54187 14.7501 6.77309 14.7501 8.29187C14.7501 9.81065 13.5188 11.0419 12.0001 11.0419Z',
  d22: 'M15.8147 19.042C15.63 20.6103 14.6354 21.9044 13.831 22.5309C13.4285 22.8443 13.0391 23.0631 12.7496 23.2042C12.6042 23.2751 12.0884 23.4647 12 23.5001C11.9116 23.4647 11.3959 23.275 11.2505 23.2042C10.9611 23.0631 10.5717 22.8442 10.1693 22.5308C9.36504 21.9044 8.37039 20.6101 8.1853 19.042H15.8147Z',
  d23: 'M18.7996 18.0417H22.7499V17.2917C22.7499 14.8321 21.5113 12.8456 19.8395 11.9927C19.7546 13.8636 19.417 15.9001 18.7996 18.0417Z',
  d24: 'M4.16224 11.9917C2.48948 12.8441 1.25 14.8312 1.25 17.2917V18.0417H5.20264C4.5851 15.8997 4.24731 13.8629 4.16224 11.9917Z',
};

export const IconStartUp01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-01-stroke-rounded IconStartUp01StrokeRounded"
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

export const IconStartUp01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-01-duotone-rounded IconStartUp01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStartUp01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-01-twotone-rounded IconStartUp01TwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStartUp01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-01-solid-rounded IconStartUp01SolidRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStartUp01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-01-bulk-rounded IconStartUp01BulkRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStartUp01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-01-stroke-sharp IconStartUp01StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStartUp01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="start-up-01-solid-sharp IconStartUp01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStartUp01: TheIconSelfPack = {
  name: 'StartUp01',
  StrokeRounded: IconStartUp01StrokeRounded,
  DuotoneRounded: IconStartUp01DuotoneRounded,
  TwotoneRounded: IconStartUp01TwotoneRounded,
  SolidRounded: IconStartUp01SolidRounded,
  BulkRounded: IconStartUp01BulkRounded,
  StrokeSharp: IconStartUp01StrokeSharp,
  SolidSharp: IconStartUp01SolidSharp,
};