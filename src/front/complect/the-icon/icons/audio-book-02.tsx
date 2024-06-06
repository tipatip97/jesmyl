import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.99805 4.94629H15.498C16.3264 4.94629 16.998 5.61786 16.998 6.44629V7.94629',
  d2: 'M17.998 19.4928C17.998 20.8771 16.8787 21.9994 15.498 21.9994C14.1173 21.9994 12.998 20.8771 12.998 19.4928C12.998 18.1084 14.1173 16.9862 15.498 16.9862C16.8787 16.9862 17.998 18.1084 17.998 19.4928ZM17.998 19.4928V12.9756C18.3313 13.4769 18.598 15.5825 20.998 15.9835',
  d3: 'M18.0069 2.00098L5.80952 2.001C5.31223 2.001 4.8036 2.07359 4.40163 2.36713C3.12706 3.29785 2.14483 5.3736 4.12838 7.24764C4.68532 7.77384 5.4638 7.96459 6.22905 7.96459H17.7932C18.5873 7.96459 20.0112 8.07764 20.0112 10.4895M3.0061 5.15298L3.03962 17.9993C3.1663 20.3598 4.77003 21.9101 6.97508 21.9101H10.5065',
  d4: 'M12.0144 21.9987H11.0145C7.24382 21.9987 5.35845 21.9987 4.18704 20.9252C3.01562 19.8518 3.01562 18.1241 3.01562 14.6688V6.53418C3.17176 7.30928 3.99712 8.25507 6.51514 8.25507C8.69544 8.25507 12.702 8.27533 16.0352 8.29514C17.9106 8.30628 18.8483 8.31186 19.4308 8.89817C20.0133 9.48448 20.0133 10.4235 20.0133 12.3016V14.6688C20.0133 18.1241 20.0133 19.8518 18.8419 20.9252C18.2326 21.4836 17.4301 21.7515 16.2697 21.8801C17.2792 21.5571 18.0101 20.6106 18.0101 19.4934C18.0101 18.1097 16.8891 16.988 15.5062 16.988C14.1233 16.988 13.0022 18.1097 13.0022 19.4934C13.0022 20.7342 13.9038 21.7643 15.0872 21.9638C14.2297 21.9987 13.2181 21.9987 12.0144 21.9987Z',
  d5: 'M3.0155 5.95605C2.98006 6.11834 2.9733 6.3152 3.0155 6.52455V5.95605Z',
  d6: 'M6.99219 4.9624H15.5056C16.3354 4.9624 17.008 5.63541 17.008 6.46561V7.96882',
  d7: 'M18.0463 2.00146L5.82959 2.00148C5.33151 2.00148 4.82208 2.07423 4.41947 2.3684C3.14289 3.30111 2.1591 5.3813 4.14579 7.25935C4.70361 7.78668 5.48332 7.97784 6.24979 7.97784H17.8322C18.6276 7.97784 20.0537 8.09113 20.0537 10.5082M3.02173 5.16021L3.05531 18.034C3.18219 20.3996 4.78846 21.9532 6.997 21.9532H10.534',
  d8: 'M18.0099 19.4934C18.0099 20.8771 16.8888 21.9988 15.5059 21.9988C14.123 21.9988 13.002 20.8771 13.002 19.4934C13.002 18.1097 14.123 16.9881 15.5059 16.9881C16.8888 16.9881 18.0099 18.1097 18.0099 19.4934ZM18.0099 19.4934V12.9795C18.3437 13.4806 18.6108 15.5851 21.0146 15.9859',
  d9: 'M7.00391 4.9209H15.5028C16.3311 4.9209 17.0026 5.59566 17.0026 6.42804V7.93517',
  d10: 'M18.0033 19.4899C18.0033 20.8772 16.8841 22.0018 15.5036 22.0018C14.1231 22.0018 13.0039 20.8772 13.0039 19.4899C13.0039 18.1026 14.1231 16.978 15.5036 16.978C16.8841 16.978 18.0033 18.1026 18.0033 19.4899ZM18.0033 19.4899V12.959C18.3365 13.4614 18.6032 15.5714 21.0029 15.9733',
  d11: 'M18.003 1.99805L5.80721 1.99807C5.30999 1.99807 4.80142 2.07101 4.3995 2.36594C3.12509 3.3011 2.14298 5.38671 4.12628 7.26967C4.68315 7.79837 5.46154 7.99004 6.22669 7.99004H17.7894C18.5833 7.99004 20.0609 8.03565 20.0609 10.459M3.00415 5.16504L3.03766 18.0725C3.16432 20.4442 4.76785 22.0019 6.97262 22.0019H10.5036',
  d12: 'M2.25293 5C2.25293 2.79086 4.04379 1 6.25293 1H18.2529C18.8052 1 19.2529 1.44772 19.2529 2C19.2529 2.55228 18.8052 3 18.2529 3H6.25293C5.14836 3 4.25293 3.89543 4.25293 5C4.25293 6.10457 5.14836 7 6.25293 7H15.6C15.7886 7 15.8828 7 15.9414 6.94142C16 6.88284 16 6.78856 16 6.6V6.5C16 6.22386 15.7761 6 15.5 6H7C6.44772 6 6 5.55228 6 5C6 4.44772 6.44772 4 7 4H15.5C16.8807 4 18 5.11929 18 6.5V6.85C18 7.0315 18 7.12225 18.0488 7.1786C18.0975 7.23494 18.1979 7.24953 18.3987 7.2787C19.7286 7.47185 20.75 8.61664 20.75 10V11.8117C20.75 12.1954 20.75 12.3873 20.6346 12.4146C20.5193 12.442 20.431 12.2666 20.2545 11.9158C20.2026 11.8124 20.1454 11.7112 20.0801 11.6133C19.469 10.6966 18.3299 10.288 17.2755 10.6073C16.2211 10.9265 15.5 11.8983 15.5 13V14.1C15.5 14.2851 15.5 14.3776 15.4469 14.4351C15.3938 14.4925 15.2959 14.5003 15.1001 14.5158C12.5256 14.7195 10.5 16.8732 10.5 19.5C10.5 20.4693 10.7758 21.3742 11.2532 22.1404C11.4088 22.3901 11.4865 22.5149 11.4674 22.5959C11.4584 22.6344 11.4426 22.6629 11.4147 22.6909C11.356 22.75 11.2185 22.75 10.9436 22.75C9.10585 22.75 7.65019 22.75 6.51098 22.5969C5.33856 22.4392 4.38961 22.1071 3.64124 21.3588C2.89288 20.6104 2.56076 19.6614 2.40314 18.489C2.24997 17.3498 2.24999 15.8942 2.25 14.0564V5H2.25293Z',
  d13: 'M17.7102 12.043C18.132 11.9153 18.5876 12.0787 18.8321 12.4454C18.9328 12.5965 19.0047 12.7639 19.0502 12.8738C19.0782 12.9416 19.1132 13.0307 19.1459 13.1142C19.1655 13.1641 19.1843 13.212 19.2004 13.2521C19.3022 13.5068 19.4141 13.7595 19.5671 13.9982C19.8507 14.441 20.2904 14.868 21.1644 15.0137C21.7092 15.1045 22.0772 15.6197 21.9864 16.1645C21.8956 16.7092 21.3804 17.0773 20.8356 16.9865C20.0795 16.8605 19.4787 16.5948 19 16.2577V19.5001C19 21.4331 17.433 23.0001 15.5 23.0001C13.567 23.0001 12 21.4331 12 19.5001C12 17.5671 13.567 16.0001 15.5 16.0001C16.0368 16.0001 16.5454 16.1209 17 16.3369V13.0001C17 12.5594 17.2885 12.1707 17.7102 12.043ZM17 19.5001C17 18.6717 16.3284 18.0001 15.5 18.0001C14.6716 18.0001 14 18.6717 14 19.5001C14 20.3285 14.6716 21.0001 15.5 21.0001C16.3284 21.0001 17 20.3285 17 19.5001Z',
  d14: 'M17.9772 19.4879C17.9772 20.8677 16.8595 21.9862 15.4808 21.9862C14.1021 21.9862 12.9844 20.8677 12.9844 19.4879C12.9844 18.1081 14.1021 16.9895 15.4808 16.9895C16.8595 16.9895 17.9772 18.1081 17.9772 19.4879ZM17.9772 19.4879V12.9922C18.31 13.4919 18.9758 15.9902 20.9729 15.9902',
  d15: 'M19.9741 1.98633H6.09378C4.85049 1.98633 2.81304 2.87877 2.98726 5.24493M2.98726 5.24493C3.16147 7.61109 5.14364 7.99734 6.09378 7.99734H16.9757M2.98726 5.24493V18.5281C2.872 19.5916 3.30365 21.8082 6.0431 21.9783H10.9703M19.9472 11.0163V7.99734H16.9757M16.9757 7.99734V4.98032C16.9757 4.9748 16.9712 4.97033 16.9657 4.97033H5.96814',
  d16: 'M18.4622 11.793C18.8839 11.6653 19.3396 11.8287 19.584 12.1954C19.6736 12.3298 19.7494 12.4892 19.8013 12.6009C19.8237 12.649 19.8608 12.731 19.8981 12.8131C19.9315 12.887 19.9651 12.961 19.988 13.0107C20.1219 13.3007 20.2733 13.6043 20.459 13.8829C20.8388 14.4526 21.2415 14.7501 21.752 14.7501V16.7501C20.9208 16.7501 20.2637 16.4536 19.752 16.0515V19.2501C19.752 21.1831 18.1849 22.7501 16.252 22.7501C14.319 22.7501 12.752 21.1831 12.752 19.2501C12.752 17.3171 14.319 15.7501 16.252 15.7501C16.7888 15.7501 17.2973 15.8709 17.752 16.0869V12.7501C17.752 12.3094 18.0404 11.9207 18.4622 11.793ZM17.752 19.2501C17.752 18.4217 17.0804 17.7501 16.252 17.7501C15.4235 17.7501 14.752 18.4217 14.752 19.2501C14.752 20.0785 15.4235 20.7501 16.252 20.7501C17.0804 20.7501 17.752 20.0785 17.752 19.2501Z',
  d17: 'M6.14461 1.25C3.99399 1.25 2.25044 2.99968 2.25 5.15831L2.25049 18.841C2.25057 20.9999 3.99422 22.75 6.1451 22.75H13.0387C12.0929 21.8817 11.5 20.6351 11.5 19.2499C11.5 16.6266 13.6266 14.4999 16.25 14.4999C16.3338 14.4999 16.4172 14.5021 16.5 14.5064V12.7499C16.5 11.7584 17.149 10.8838 18.098 10.5965C19.0469 10.3092 20.0721 10.6769 20.6221 11.5019C20.6687 11.5717 20.7115 11.6431 20.75 11.7116V7.11367H17.8272V5.15911C17.8272 4.61937 17.3913 4.18183 16.8536 4.18183H6.14341V6.13639H15.8799V7.11367H6.14461C5.06939 7.11367 4.19773 6.23898 4.19731 5.15992V5.15847C4.19765 4.07927 5.06938 3.20456 6.14461 3.20456H20.75V1.25H6.14461Z',
};

export const IconAudioBook02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-02-stroke-rounded IconAudioBook02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconAudioBook02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-02-duotone-rounded IconAudioBook02DuotoneRounded"
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
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAudioBook02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-02-twotone-rounded IconAudioBook02TwotoneRounded"
    >
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAudioBook02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-02-solid-rounded IconAudioBook02SolidRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAudioBook02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-02-bulk-rounded IconAudioBook02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAudioBook02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-02-stroke-sharp IconAudioBook02StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAudioBook02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audio-book-02-solid-sharp IconAudioBook02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAudioBook02: TheIconSelfPack = {
  name: 'AudioBook02',
  StrokeRounded: IconAudioBook02StrokeRounded,
  DuotoneRounded: IconAudioBook02DuotoneRounded,
  TwotoneRounded: IconAudioBook02TwotoneRounded,
  SolidRounded: IconAudioBook02SolidRounded,
  BulkRounded: IconAudioBook02BulkRounded,
  StrokeSharp: IconAudioBook02StrokeSharp,
  SolidSharp: IconAudioBook02SolidSharp,
};