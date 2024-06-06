import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 8.5H8.70711C8.25435 8.5 7.82014 8.67986 7.5 9M14 8.5H15.2929C15.7456 8.5 16.1799 8.67986 16.5 9',
  d2: 'M7.31313 17.9198C6.89597 16.5535 6.89576 14.4497 7.31168 13.0825C7.57009 12.2331 8.29788 12 9.11765 12H14.8823C15.701 12 16.4284 12.2327 16.6872 13.0807C17.1043 14.4476 17.1043 16.5524 16.6872 17.9193C16.4284 18.7673 15.701 19 14.8823 19H9.11765C8.29936 19 7.57194 18.7675 7.31313 17.9198Z',
  d3: 'M7 13.5L2 12M17 13.5L22 12M7 17.5L3.5 17M17 17.5L20.5 17',
  d4: 'M12 2C6.47715 2 2 6.47715 2 12L7 13.5L7.31168 13.0825C7.57009 12.2331 8.29788 12 9.11765 12H14.8823C15.6165 12 16.2773 12.1871 16.5925 12.8373C16.6679 12.9928 16.74 13.1515 16.8433 13.29L17 13.5L22 12C22 6.47715 17.5228 2 12 2Z',
  d5: 'M14.8825 19.0004H9.11775C8.29947 19.0004 7.57204 18.7678 7.31324 17.9202L7.0001 17.5004L3.5001 17.0004L3.31836 16.9664C5.04252 19.9742 8.28468 22.0004 12.0001 22.0004C15.7178 22.0004 18.9616 19.9717 20.685 16.9609L20.5001 17.0004L17.0001 17.5004L16.6873 17.9197C16.4285 18.7677 15.7011 19.0004 14.8825 19.0004Z',
  d6: 'M1.73674 11.4166C1.50223 11.358 1.38498 11.3287 1.32069 11.2362C1.25639 11.1437 1.26928 11.028 1.29506 10.7966C1.89332 5.42595 6.44822 1.25 11.9785 1.25C17.5087 1.25 22.0636 5.426 22.6619 10.7966C22.6876 11.0281 22.7005 11.1438 22.6362 11.2363C22.5719 11.3288 22.4547 11.3581 22.2202 11.4167L17.8103 12.5192C17.5895 12.5744 17.4791 12.602 17.3925 12.5702C17.3059 12.5385 17.2227 12.4226 17.0563 12.1908C16.8604 11.9181 16.6093 11.7075 16.3186 11.5567C15.8514 11.3144 15.3285 11.2502 14.861 11.2502H9.09628C8.62819 11.2502 8.10473 11.3145 7.63717 11.5573C7.34684 11.708 7.09618 11.9185 6.90054 12.1908C6.7341 12.4225 6.65088 12.5384 6.5643 12.5701C6.47773 12.6019 6.36733 12.5743 6.14654 12.5191L1.73674 11.4166ZM1.35758 13.6712C1.30057 13.3059 1.27207 13.1233 1.39095 13.0147C1.50984 12.9061 1.69633 12.9527 2.06931 13.0459L5.7975 13.978C6.04092 14.0388 6.16264 14.0693 6.22679 14.1582C6.29095 14.2472 6.28099 14.3775 6.26109 14.6383C6.22836 15.0668 6.22038 15.5077 6.23716 15.9423C6.25054 16.2888 6.25722 16.4621 6.15911 16.5555C6.061 16.649 5.89512 16.6344 5.56334 16.6054L2.47941 16.3352C2.30486 16.3199 2.21759 16.3122 2.14939 16.2615C2.08119 16.2108 2.04997 16.1324 1.98753 15.9756C1.696 15.2436 1.48258 14.472 1.35758 13.6712ZM4.2188 17.999C3.67559 17.9502 3.40398 17.9258 3.31101 18.1034C3.21804 18.2809 3.3859 18.482 3.72163 18.8843C5.69357 21.2468 8.66047 22.75 11.9785 22.75C15.2964 22.75 18.2633 21.2468 20.2353 18.8843C20.571 18.4821 20.7388 18.281 20.6459 18.1034C20.5529 17.9259 20.2813 17.9502 19.7381 17.999L17.7487 18.1775C17.5725 18.1934 17.4844 18.2013 17.4212 18.2431C17.358 18.2848 17.3069 18.3802 17.2047 18.5711C16.9951 18.9622 16.689 19.2515 16.3186 19.4436C15.8514 19.686 15.3285 19.7502 14.861 19.7502H9.09628C8.62894 19.7502 8.10616 19.686 7.639 19.4438C7.26854 19.2517 6.96241 18.9624 6.75278 18.5711C6.65054 18.3803 6.59941 18.2849 6.53622 18.2431C6.47303 18.2013 6.38493 18.1934 6.20872 18.1776L4.2188 17.999ZM21.9694 15.9757C21.9069 16.1324 21.8757 16.2108 21.8075 16.2615C21.7393 16.3123 21.652 16.3199 21.4775 16.3352L18.394 16.6054C18.0622 16.6344 17.8963 16.649 17.7982 16.5555C17.7001 16.4621 17.7068 16.2888 17.7201 15.9423C17.7369 15.5078 17.7289 15.0669 17.6961 14.6384C17.6761 14.3776 17.6662 14.2472 17.7303 14.1583C17.7945 14.0693 17.9162 14.0389 18.1597 13.978L21.8876 13.046C22.2606 12.9528 22.4471 12.9062 22.5659 13.0148C22.6848 13.1234 22.6563 13.306 22.5993 13.6713C22.4743 14.4721 22.2609 15.2437 21.9694 15.9757ZM6.94812 8.46967C7.40892 8.00887 8.0339 7.75 8.68556 7.75H9.97845C10.3927 7.75 10.7285 8.08579 10.7285 8.5C10.7285 8.91421 10.3927 9.25 9.97845 9.25H8.68556C8.43172 9.25 8.18828 9.35084 8.00879 9.53033C7.71589 9.82322 7.24102 9.82322 6.94812 9.53033C6.65523 9.23744 6.65523 8.76256 6.94812 8.46967ZM13.2285 8.5C13.2285 8.08579 13.5642 7.75 13.9785 7.75H15.2713C15.923 7.75 16.548 8.00887 17.0088 8.46967C17.3017 8.76256 17.3017 9.23744 17.0088 9.53033C16.7159 9.82322 16.241 9.82322 15.9481 9.53033C15.7686 9.35084 15.5252 9.25 15.2713 9.25H13.9785C13.5642 9.25 13.2285 8.91421 13.2285 8.5ZM8.00784 13.301C8.07844 13.0689 8.1912 12.9598 8.32841 12.8885C8.49428 12.8024 8.74461 12.7502 9.09628 12.7502H14.861C15.2121 12.7502 15.4622 12.8023 15.6281 12.8883C15.7653 12.9595 15.8779 13.0684 15.9485 13.2997C16.322 14.524 16.322 16.4764 15.9485 17.7006C15.8779 17.9319 15.7653 18.0409 15.6281 18.1121C15.4622 18.1981 15.2121 18.2502 14.861 18.2502H9.09628C8.74533 18.2502 8.49526 18.1981 8.32943 18.1121C8.1922 18.041 8.07964 17.9321 8.00908 17.701C7.63551 16.4774 7.63521 14.5259 8.00784 13.301Z',
  d7: 'M1.22656 12C1.22656 6.06294 6.0395 1.25 11.9766 1.25C17.9136 1.25 22.7266 6.06294 22.7266 12C22.7266 17.9371 17.9136 22.75 11.9766 22.75C6.0395 22.75 1.22656 17.9371 1.22656 12Z',
  d8: 'M6.94623 8.46967C7.40703 8.00887 8.032 7.75 8.68367 7.75H9.97656C10.3908 7.75 10.7266 8.08579 10.7266 8.5C10.7266 8.91421 10.3908 9.25 9.97656 9.25H8.68367C8.42983 9.25 8.18638 9.35084 8.00689 9.53033C7.714 9.82322 7.23913 9.82322 6.94623 9.53033C6.65334 9.23744 6.65334 8.76256 6.94623 8.46967ZM13.2266 8.5C13.2266 8.08579 13.5623 7.75 13.9766 7.75H15.2695C15.9211 7.75 16.5461 8.00887 17.0069 8.46967C17.2998 8.76256 17.2998 9.23744 17.0069 9.53033C16.714 9.82322 16.2391 9.82322 15.9462 9.53033C15.7667 9.35084 15.5233 9.25 15.2695 9.25H13.9766C13.5623 9.25 13.2266 8.91421 13.2266 8.5Z',
  d9: 'M1.24931 11.2951C1.23422 11.5281 1.22656 11.7632 1.22656 12.0001C1.22656 12.284 1.23757 12.5653 1.25918 12.8437L6.31336 14.1072C6.20733 14.9302 6.19862 15.8326 6.28735 16.6688L2.12274 16.3039C2.36501 16.8578 2.65261 17.3874 2.98085 17.8878L6.59622 18.2123C6.79162 18.7898 7.16131 19.1969 7.63711 19.4436C8.10427 19.6858 8.62705 19.75 9.09439 19.75H14.8591C15.3266 19.75 15.8495 19.6858 16.3167 19.4435C16.7925 19.1967 17.1621 18.7896 17.3574 18.2123L20.9723 17.8879C21.3005 17.3874 21.5881 16.8579 21.8304 16.304L17.6662 16.6688C17.7549 15.8326 17.7461 14.9303 17.6399 14.1073L22.6939 12.8438C22.7156 12.5654 22.7266 12.284 22.7266 12.0001C22.7266 11.7632 22.7189 11.5282 22.7038 11.2951L17.3042 12.645C17.0989 12.1428 16.7523 11.7824 16.3167 11.5565C15.8495 11.3142 15.3266 11.25 14.8591 11.25H9.09439C8.62629 11.25 8.10284 11.3143 7.63527 11.5571C7.20005 11.7831 6.85397 12.1433 6.64875 12.6449L1.24931 11.2951ZM8.00595 13.3008C8.07655 13.0688 8.1893 12.9596 8.32651 12.8884C8.49239 12.8022 8.74272 12.75 9.09439 12.75H14.8591C15.2102 12.75 15.4603 12.8021 15.6262 12.8881C15.7634 12.9593 15.876 13.0682 15.9466 13.2995C16.3201 14.5238 16.3201 16.4762 15.9466 17.7005C15.876 17.9318 15.7634 18.0407 15.6262 18.1119C15.4603 18.1979 15.2102 18.25 14.8591 18.25H9.09439C8.74344 18.25 8.49337 18.1979 8.32754 18.1119C8.1903 18.0408 8.07775 17.9319 8.00719 17.7008C7.63362 16.4772 7.63332 14.5257 8.00595 13.3008Z',
  d10: 'M16.5 12H7.5V18H16.5V12Z',
  d11: 'M7.5 13.5L2 12M16.5 13.5L22 12M7.5 17L3 16M16.5 17L21 16',
  d12: 'M11.9983 22.75C16.4788 22.75 20.3192 20.0089 21.9338 16.1121L17.2491 17.5535V17.9996C17.2491 18.4138 16.9133 18.7496 16.4991 18.7496H7.49913C7.08492 18.7496 6.74913 18.4138 6.74913 17.9996V17.5535L2.06257 16.1115C3.67702 20.0086 7.51751 22.75 11.9983 22.75ZM22.7463 12.2078C22.7322 12.9504 22.6429 13.6745 22.4855 14.3729L17.2491 15.9841V14.0402L22.7463 12.2078ZM1.33183 10.6533C1.99441 5.35185 6.51733 1.25 11.9983 1.25C17.4794 1.25 22.0025 5.35213 22.6648 10.6538L17.2491 12.459V11.9996C17.2491 11.5854 16.9133 11.2496 16.4991 11.2496L7.49913 11.2496C7.08492 11.2496 6.74913 11.5854 6.74913 11.9996V12.459L1.33183 10.6533ZM1.51093 14.3724C1.35362 13.674 1.26428 12.9498 1.25024 12.2072L6.74913 14.0402V15.9841L1.51093 14.3724ZM8.24913 12.7496V17.2496H15.7491L15.7491 12.7496L8.24913 12.7496ZM8.70643 7.75C8.05477 7.75 7.42979 8.00887 6.96899 8.46967L8.02965 9.53033C8.20915 9.35084 8.45259 9.25 8.70643 9.25H9.99932V7.75H8.70643ZM13.9993 9.25H15.2922C15.5461 9.25 15.7895 9.35084 15.969 9.53033L17.0297 8.46967C16.5689 8.00887 15.9439 7.75 15.2922 7.75H13.9993V9.25Z',
};

export const IconMedicalMaskStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-mask-stroke-rounded IconMedicalMaskStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconMedicalMaskDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-mask-duotone-rounded IconMedicalMaskDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedicalMaskTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-mask-twotone-rounded IconMedicalMaskTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMedicalMaskSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-mask-solid-rounded IconMedicalMaskSolidRounded"
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

export const IconMedicalMaskBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-mask-bulk-rounded IconMedicalMaskBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconMedicalMaskStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-mask-stroke-sharp IconMedicalMaskStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedicalMaskSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-mask-solid-sharp IconMedicalMaskSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMedicalMask: TheIconSelfPack = {
  name: 'MedicalMask',
  StrokeRounded: IconMedicalMaskStrokeRounded,
  DuotoneRounded: IconMedicalMaskDuotoneRounded,
  TwotoneRounded: IconMedicalMaskTwotoneRounded,
  SolidRounded: IconMedicalMaskSolidRounded,
  BulkRounded: IconMedicalMaskBulkRounded,
  StrokeSharp: IconMedicalMaskStrokeSharp,
  SolidSharp: IconMedicalMaskSolidSharp,
};