import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 15C5 11.134 8.02208 8 11.75 8H12.25C15.9779 8 19 11.134 19 15C19 18.866 15.9779 22 12.25 22H11.75C8.02208 22 5 18.866 5 15Z',
  d2: 'M10.5 13.1179C10.5804 12.3326 11.1076 12 11.6576 12H12.3239C12.8738 12 13.401 12.3326 13.4814 13.1179C13.5063 13.3608 13.5063 13.6392 13.4814 13.8821C13.4325 14.3602 12.8543 14.9086 12.8543 14.9086L12 15.5C12 15.5 10.5 16.5 10.5 17.5C10.5 18.0394 10.9373 18 11.4766 18H13.4814',
  d3: 'M13.5601 2L11 7.89783M18 2L15.1786 8.5',
  d4: 'M10.4399 2L12 5.59405M6 2L8.82144 8.5',
  d5: 'M10.5 13.1179C10.5804 12.3326 11.1076 12 11.6576 12H12.3239C12.8738 12 13.401 12.3326 13.4814 13.1179C13.5063 13.3608 13.5063 13.6392 13.4814 13.8821C13.4325 14.3602 12.8543 14.9086 12.8543 14.9086L12.0288 15.4801C11.8234 15.6231 10.5 16.5811 10.5 17.5C10.5 18.0394 10.9373 18 11.4766 18H13.4814',
  d6: 'M13.4154 17.9723H10.6627C10.3226 17.4489 10.7302 16.7004 11.3879 16.0364C12.3355 15.0798 13.7296 14.2726 13.4154 12.9633C13.28 12.3993 12.8592 12.0283 12.1512 12.0283C11.5699 12.0283 11.2993 12.0283 11.0541 12.167C10.8088 12.3058 10.6583 12.5231 10.5559 13.0179',
  d7: 'M11.75 7C7.58239 7 4.25 10.4957 4.25 14.75C4.25 19.0043 7.58239 22.5 11.75 22.5H12.25C16.4176 22.5 19.75 19.0043 19.75 14.75C19.75 10.4957 16.4176 7 12.25 7H11.75ZM11.6572 11.1016C11.2536 11.1016 10.8258 11.2242 10.4782 11.5234C10.124 11.8284 9.90762 12.27 9.85304 12.8033C9.81649 13.1604 10.0764 13.4795 10.4335 13.5161C10.7906 13.5526 11.1097 13.2928 11.1463 12.9356C11.1721 12.6836 11.2594 12.5663 11.3264 12.5086C11.4 12.4452 11.5108 12.4016 11.6572 12.4016H12.3235C12.4699 12.4016 12.5806 12.4452 12.6543 12.5086C12.7212 12.5663 12.8086 12.6836 12.8344 12.9356C12.8547 13.1346 12.8547 13.3686 12.8344 13.5675C12.8296 13.6146 12.7733 13.7478 12.6329 13.9312C12.5736 14.0087 12.5144 14.0758 12.4699 14.1235C12.4571 14.1371 12.4458 14.149 12.4363 14.1587L11.6076 14.7322L11.5996 14.7377L11.5528 14.7704L11.5508 14.7717L11.5488 14.7737C11.3887 14.8886 11.0285 15.1613 10.6861 15.5239C10.3284 15.9026 9.84962 16.5236 9.84962 17.2516C9.84963 17.4703 9.89378 17.7109 10.0401 17.9245C10.191 18.1449 10.3989 18.2614 10.5843 18.3219C10.7581 18.3785 10.9341 18.3933 11.0698 18.3988C11.1726 18.4029 11.2878 18.4024 11.3885 18.4019H11.3885L11.4763 18.4016H13.481C13.84 18.4016 14.131 18.1105 14.131 17.7516C14.131 17.3926 13.84 17.1016 13.481 17.1016H11.4763C11.4325 17.1016 11.393 17.1017 11.3565 17.1019H11.3563C11.2876 17.1022 11.2297 17.1025 11.175 17.1014C11.231 16.9192 11.3804 16.682 11.6312 16.4165C11.9111 16.1201 12.2164 15.8938 12.3245 15.8172L13.265 15.1662C13.3012 15.1312 13.383 15.0511 13.4202 15.0105C13.4856 14.9405 13.5739 14.8406 13.6653 14.7212C13.8263 14.5109 14.0835 14.1308 14.1276 13.6998C14.157 13.4129 14.157 13.0902 14.1276 12.8033C14.0731 12.27 13.8566 11.8284 13.5025 11.5234C13.1549 11.2242 12.7271 11.1016 12.3235 11.1016H11.6572Z',
  d8: 'M5.60208 1.58294C6.1087 1.36304 6.69766 1.59546 6.91756 2.10208L9.73901 8.60208C9.95891 9.1087 9.72649 9.69766 9.21987 9.91756C8.71325 10.1375 8.12429 9.90504 7.90439 9.39843L5.08294 2.89843C4.86304 2.39181 5.09546 1.80285 5.60208 1.58294ZM10.042 1.58294C10.5486 1.36304 11.1376 1.59546 11.3575 2.10208L12.0003 3.58284L12.643 2.10208C12.8629 1.59546 13.4519 1.36304 13.9585 1.58294C14.4651 1.80285 14.6975 2.39181 14.4776 2.89843L12.9185 6.49025C12.9178 6.49186 12.9171 6.49348 12.9164 6.49509L11.9176 8.79626C11.6977 9.30288 11.1087 9.5353 10.6021 9.3154C10.0955 9.09549 9.86304 8.50653 10.0829 7.99991L10.9101 6.0943L9.52288 2.89843C9.30298 2.39181 9.5354 1.80285 10.042 1.58294ZM18.3984 1.58294C18.905 1.80285 19.1375 2.39181 18.9176 2.89843L16.0961 9.39843C15.8762 9.90504 15.2873 10.1375 14.7806 9.91756C14.274 9.69766 14.0416 9.1087 14.2615 8.60208L17.0829 2.10208C17.3028 1.59546 17.8918 1.36304 18.3984 1.58294Z',
  d9: 'M4.25 14.75C4.25 10.4957 7.58239 7 11.75 7H12.25C16.4176 7 19.75 10.4957 19.75 14.75C19.75 19.0043 16.4176 22.5 12.25 22.5H11.75C7.58239 22.5 4.25 19.0043 4.25 14.75Z',
  d10: 'M10.4782 11.5234C10.8258 11.2242 11.2536 11.1016 11.6572 11.1016H12.3235C12.7271 11.1016 13.1549 11.2242 13.5025 11.5234C13.8566 11.8284 14.0731 12.27 14.1276 12.8033C14.157 13.0902 14.157 13.4129 14.1276 13.6998C14.0835 14.1308 13.8263 14.5109 13.6653 14.7212C13.5739 14.8406 13.4856 14.9405 13.4202 15.0105C13.383 15.0511 13.3012 15.1312 13.265 15.1662L12.3245 15.8172C12.2164 15.8938 11.9111 16.1201 11.6312 16.4165C11.3804 16.682 11.231 16.9192 11.175 17.1014C11.2297 17.1025 11.2876 17.1022 11.3563 17.1019H11.3565C11.393 17.1017 11.4325 17.1016 11.4763 17.1016H13.481C13.84 17.1016 14.131 17.3926 14.131 17.7516C14.131 18.1105 13.84 18.4016 13.481 18.4016H11.4763L11.3885 18.4019H11.3885C11.2878 18.4024 11.1726 18.4029 11.0698 18.3988C10.9341 18.3933 10.7581 18.3785 10.5843 18.3219C10.3989 18.2614 10.191 18.1449 10.0401 17.9245C9.89378 17.7109 9.84963 17.4703 9.84962 17.2516C9.84962 16.5236 10.3284 15.9026 10.6861 15.5239C11.0285 15.1613 11.3887 14.8886 11.5488 14.7737L11.5508 14.7717L11.5528 14.7704L11.5996 14.7377L11.6076 14.7322L12.4363 14.1587C12.4458 14.149 12.4571 14.1371 12.4699 14.1235C12.5144 14.0758 12.5736 14.0087 12.6329 13.9312C12.7733 13.7478 12.8296 13.6146 12.8344 13.5675C12.8547 13.3686 12.8547 13.1346 12.8344 12.9356C12.8086 12.6836 12.7212 12.5663 12.6543 12.5086C12.5806 12.4452 12.4699 12.4016 12.3235 12.4016H11.6572C11.5108 12.4016 11.4 12.4452 11.3264 12.5086C11.2594 12.5663 11.1721 12.6836 11.1463 12.9356C11.1097 13.2928 10.7906 13.5526 10.4335 13.5161C10.0764 13.4795 9.81649 13.1604 9.85304 12.8033C9.90762 12.27 10.124 11.8284 10.4782 11.5234Z',
  d11: 'M6.91756 2.10208C6.69766 1.59546 6.1087 1.36304 5.60208 1.58294C5.09546 1.80285 4.86304 2.39181 5.08294 2.89843L7.46549 8.3873C8.00738 7.99664 8.60199 7.67791 9.23672 7.44492L6.91756 2.10208ZM12.6916 7.01315C12.5455 7.00443 12.3983 7 12.25 7H11.75C11.3126 7 10.8843 7.03851 10.4682 7.11237L10.9101 6.0943L9.52288 2.89843C9.30298 2.39181 9.5354 1.80285 10.042 1.58294C10.5486 1.36304 11.1376 1.59546 11.3575 2.10208L12.0003 3.58284L12.643 2.10208C12.8629 1.59546 13.4519 1.36304 13.9585 1.58294C14.4651 1.80285 14.6975 2.39181 14.4776 2.89843L12.9185 6.49025L12.9164 6.49509L12.6916 7.01315ZM16.5349 8.38758C15.993 7.99688 15.3984 7.67811 14.7637 7.44508L17.0829 2.10208C17.3028 1.59546 17.8918 1.36304 18.3984 1.58294C18.905 1.80285 19.1375 2.39181 18.9176 2.89843L16.5349 8.38758Z',
  d12: 'M13.5594 2L11 8M17.9993 2L15.1779 8.5',
  d13: 'M10.4389 2L11.9998 5.5M5.99902 2L8.82046 8.5',
  d14: 'M10.5 13.5005C10.5 12.6721 11.1716 12.0005 12 12.0005C12.8284 12.0005 13.5 12.6721 13.5 13.5005C13.5 13.9103 13.3356 14.2818 13.0692 14.5525C12.2138 15.3109 11 16.5005 10.5 17.0005V18.0005H14.5',
  d15: 'M16.9239 8.38631L19.4238 2.01726L17.5776 1.24805L15.0777 7.6171L16.9239 8.38631Z',
  d16: 'M11.6634 6.8627L10.8638 7.19214L9.01459 2.01726L10.8638 1.25539L11.9589 4.32004L13.1362 1.25172L14.9854 2.01359L12.9254 7.38264L11.6634 6.8627Z',
  d17: 'M8.92274 7.6171L6.42233 1.25172L4.57617 2.02094L7.07658 8.38632L8.92274 7.6171Z',
  d18: 'M12 22.752C16.5563 22.752 20.25 19.0583 20.25 14.502C20.25 9.9456 16.5563 6.25195 12 6.25195C7.44365 6.25195 3.75 9.9456 3.75 14.502C3.75 19.0583 7.44365 22.752 12 22.752ZM11.25 13.002C11.25 12.5877 11.5858 12.252 12 12.252C12.4142 12.252 12.75 12.5877 12.75 13.002C12.75 13.224 12.6545 13.4228 12.4998 13.5612C12.494 13.5664 12.4883 13.5716 12.4826 13.577L9.75 16.1806V18.252H14.5V16.752H11.3249L13.5097 14.6702C13.9633 14.2596 14.25 13.6638 14.25 13.002C14.25 11.7593 13.2426 10.752 12 10.752C10.7574 10.752 9.75 11.7593 9.75 13.002H11.25Z',
} as const;

export const IconMedalSecondPlaceStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-second-place-stroke-rounded IconMedalSecondPlaceStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalSecondPlaceDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-second-place-duotone-rounded IconMedalSecondPlaceDuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalSecondPlaceTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-second-place-twotone-rounded IconMedalSecondPlaceTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalSecondPlaceSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-second-place-solid-rounded IconMedalSecondPlaceSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalSecondPlaceBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-second-place-bulk-rounded IconMedalSecondPlaceBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalSecondPlaceStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-second-place-stroke-sharp IconMedalSecondPlaceStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalSecondPlaceSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-second-place-solid-sharp IconMedalSecondPlaceSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMedalSecondPlace: TheIconSelfPack = {
  name: 'MedalSecondPlace',
  StrokeRounded: IconMedalSecondPlaceStrokeRounded,
  DuotoneRounded: IconMedalSecondPlaceDuotoneRounded,
  TwotoneRounded: IconMedalSecondPlaceTwotoneRounded,
  SolidRounded: IconMedalSecondPlaceSolidRounded,
  BulkRounded: IconMedalSecondPlaceBulkRounded,
  StrokeSharp: IconMedalSecondPlaceStrokeSharp,
  SolidSharp: IconMedalSecondPlaceSolidSharp,
};