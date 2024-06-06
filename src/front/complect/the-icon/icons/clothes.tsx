import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.0032 2.55556L14.5016 2C14.0013 3 13.0006 3.5 12 3.5C10.9994 3.5 9.99871 3 9.49839 2L6.99678 2.55556M17.0032 2.55556L17.4345 2.65134C18.442 2.87509 19.3482 3.4731 19.7132 4.43787C20.3752 6.18796 20.9185 8.98395 20.9962 12.9991C21.0053 13.4665 21.0098 13.7002 20.8627 13.8501C20.7156 14 20.4788 14 20.0052 14H17.966M17.0032 2.55556C17.0032 4.86557 17.2187 8.87061 17.966 14M17.966 14C18.1099 14.9879 18.3937 16.6177 18.6283 17.9295C18.8053 18.9196 18.8938 19.4146 18.5583 20.0311C18.2227 20.6476 17.8839 20.7899 17.2062 21.0744C16.0771 21.5484 14.3775 22 12 22C9.62254 22 7.92293 21.5484 6.79378 21.0744C6.11609 20.7899 5.77725 20.6476 5.44171 20.0311C5.10617 19.4146 5.19469 18.9196 5.37173 17.9295C5.60631 16.6177 5.89007 14.9879 6.034 14M6.99678 2.55556L6.56545 2.65134C5.55795 2.87509 4.6518 3.4731 4.28683 4.43787C3.62477 6.18796 3.08153 8.98395 3.00375 12.9991C2.9947 13.4665 2.99017 13.7002 3.13728 13.8501C3.28438 14 3.5212 14 3.99484 14H6.034M6.99678 2.55556C6.99678 4.86557 6.78127 8.87061 6.034 14',
  d2: 'M14.031 3C13.884 6.47826 14.1192 13.7478 18 15M9.96919 3C10.1162 6.47826 9.88048 13.7478 6 15',
  d3: 'M14.0716 2.62355C13.5301 3.20782 12.7653 3.49995 12.0004 3.49995C11.9292 3.50101 10.6163 3.16706 9.96871 2.99995C10.1157 6.47822 9.88001 13.7478 5.99952 15L5.87008 15.0495C5.72283 15.9475 5.53555 17.0156 5.37213 17.9295C5.19509 18.9195 5.10658 19.4145 5.44211 20.0311C5.77765 20.6476 6.1165 20.7898 6.79418 21.0743C7.92333 21.5484 9.62295 22 12.0004 22C14.3779 22 16.0775 21.5484 17.2066 21.0743C17.8843 20.7898 18.2232 20.6476 18.5587 20.0311C18.8942 19.4145 18.8057 18.9195 18.6287 17.9295L17.9995 15C14.1187 13.7478 13.8835 6.47822 14.0305 2.99995L14.0716 2.62355Z',
  d4: 'M17.9999 13.9991H20.0052C20.4788 13.9991 20.7156 13.9991 20.8627 13.8492C21.0098 13.6993 21.0053 13.4656 20.9962 12.9982C20.9185 8.98304 20.3752 6.18705 19.7132 4.43695C19.3482 3.47219 18.442 2.87417 17.4345 2.65043L17.0032 2.55542C17.0032 4.8653 17.2527 8.87013 17.9999 13.9991Z',
  d5: 'M3.99484 13.9991L6.03352 14C6.78077 8.8707 6.99629 4.86575 6.9963 2.5557L6.56545 2.65043C5.55795 2.87417 4.6518 3.47219 4.28683 4.43695C3.62477 6.18705 3.08153 8.98304 3.00375 12.9982C2.9947 13.4656 2.99017 13.6993 3.13728 13.8492C3.28438 13.9991 3.5212 13.9991 3.99484 13.9991Z',
  d6: 'M10.1692 1.66448C10.0152 1.3568 9.6717 1.19332 9.33584 1.2679L6.4029 1.91925C5.23265 2.17914 4.06654 2.90072 3.5854 4.17256C2.88283 6.02972 2.33271 8.91808 2.25394 12.9846L2.25326 13.0194C2.24925 13.2221 2.24485 13.4439 2.26725 13.6323C2.29385 13.856 2.36782 14.1369 2.60206 14.3755C2.83762 14.6155 3.11938 14.6939 3.34189 14.7244C3.53069 14.7503 3.75419 14.7502 3.96003 14.7501H3.96004H3.96005L3.99489 14.7501H5.15867C5.00894 15.674 4.80826 16.8202 4.63349 17.7976L4.61407 17.9058C4.45344 18.7986 4.32017 19.5393 4.783 20.3897C4.99569 20.7805 5.23645 21.0653 5.55894 21.2914C5.83742 21.4867 6.15812 21.6212 6.46291 21.749L6.46298 21.749L6.46301 21.749L6.50353 21.766C7.72636 22.2793 9.52483 22.7501 12.0001 22.7501C14.4753 22.7501 16.2737 22.2793 17.4966 21.766L17.5371 21.749L17.5371 21.749C17.8419 21.6212 18.1627 21.4867 18.4412 21.2914C18.7636 21.0653 19.0044 20.7805 19.2171 20.3897C19.6799 19.5393 19.5467 18.7986 19.386 17.9058L19.3666 17.7976C19.1918 16.8202 18.9912 15.674 18.8414 14.7501H20.0052L20.0401 14.7501C20.2459 14.7502 20.4694 14.7503 20.6582 14.7244C20.8807 14.6939 21.1625 14.6155 21.398 14.3755C21.6323 14.1369 21.7063 13.856 21.7328 13.6323C21.7552 13.444 21.7509 13.2222 21.7468 13.0194V13.0194V13.0193L21.7462 12.9846C21.6674 8.91808 21.1173 6.02972 20.4147 4.17256C19.9336 2.90072 18.7675 2.17914 17.5972 1.91925L17.1659 1.82346L14.6643 1.2679C14.3284 1.19332 13.9849 1.3568 13.8309 1.66448C13.4754 2.37517 12.7585 2.75007 12.0001 2.75007C11.2416 2.75007 10.5247 2.37517 10.1692 1.66448ZM7.03659 13.4751C6.97178 13.542 6.86519 13.4853 6.87801 13.3931C7.4776 9.08035 7.69981 5.60204 7.73992 3.31295C7.74151 3.22186 7.80518 3.14439 7.89412 3.12463L9.05674 2.86644C9.10817 2.85502 9.1614 2.87521 9.1938 2.91675C9.21125 2.93912 9.22142 2.96564 9.22258 2.99398C9.29276 4.70965 9.26349 7.3777 8.76219 9.67496C8.40523 11.3108 7.84436 12.6422 7.03659 13.4751ZM14.778 2.98371C14.7787 2.96233 14.779 2.95135 14.7942 2.93193C14.8267 2.89026 14.892 2.85504 14.9436 2.8665L16.106 3.12463C16.1949 3.14439 16.2586 3.22186 16.2602 3.31295C16.3003 5.60206 16.5225 9.08041 17.1221 13.3932C17.1349 13.4854 17.0283 13.5421 16.9635 13.4753C16.1557 12.6424 15.5948 11.3109 15.2379 9.67499C14.7366 7.37748 14.7075 4.70887 14.7777 2.99319C14.7779 2.9898 14.778 2.98665 14.778 2.98371Z',
  d7: 'M9.33584 1.2679C9.6717 1.19332 10.0152 1.3568 10.1692 1.66448C10.5247 2.37517 11.2416 2.75007 12.0001 2.75007C12.7585 2.75007 13.4754 2.37517 13.8309 1.66448C13.9849 1.3568 14.3284 1.19332 14.6643 1.2679L17.1659 1.82346L17.5972 1.91925C18.7675 2.17914 19.9336 2.90072 20.4147 4.17256C21.1173 6.02973 21.6674 8.91808 21.7462 12.9846L21.7468 13.0193V13.0194C21.7509 13.2222 21.7552 13.444 21.7328 13.6323C21.7063 13.856 21.6323 14.1369 21.398 14.3755C21.1625 14.6155 20.8807 14.6939 20.6582 14.7244C20.4694 14.7503 20.2459 14.7502 20.0401 14.7501L20.0052 14.7501H18.8414C18.9912 15.674 19.1918 16.8202 19.3666 17.7976L19.386 17.9058C19.5467 18.7986 19.6799 19.5393 19.2171 20.3897C19.0044 20.7805 18.7636 21.0653 18.4412 21.2914C18.1627 21.4867 17.8419 21.6212 17.5371 21.749L17.5371 21.749L17.4966 21.766C16.2737 22.2793 14.4753 22.7501 12.0001 22.7501C9.52483 22.7501 7.72636 22.2793 6.50353 21.766L6.46301 21.749L6.46298 21.749C6.15817 21.6212 5.83744 21.4867 5.55894 21.2914C5.23645 21.0653 4.99569 20.7805 4.783 20.3897C4.32017 19.5393 4.45344 18.7986 4.61407 17.9058L4.63349 17.7976C4.80826 16.8202 5.00894 15.674 5.15867 14.7501H3.99489L3.96005 14.7501H3.96004C3.75419 14.7502 3.53069 14.7503 3.34189 14.7244C3.11938 14.6939 2.83762 14.6155 2.60206 14.3755C2.36782 14.1369 2.29385 13.856 2.26725 13.6323C2.24485 13.4439 2.24925 13.2221 2.25326 13.0194L2.25394 12.9846C2.33271 8.91808 2.88283 6.02973 3.5854 4.17256C4.06654 2.90072 5.23265 2.17914 6.4029 1.91925L9.33584 1.2679Z',
  d8: 'M6.87801 13.3931C6.86519 13.4853 6.97178 13.542 7.03659 13.4751C7.84436 12.6422 8.40523 11.3108 8.76219 9.67496C9.26349 7.3777 9.29276 4.70965 9.22258 2.99398C9.22142 2.96564 9.21125 2.93912 9.1938 2.91675C9.1614 2.87521 9.10817 2.85502 9.05674 2.86644L7.89412 3.12463C7.80518 3.14439 7.74151 3.22186 7.73992 3.31295C7.69981 5.60204 7.4776 9.08036 6.87801 13.3931ZM14.7942 2.93193C14.7769 2.95403 14.7789 2.96519 14.7777 2.99319C14.7075 4.70887 14.7366 7.37748 15.2379 9.67499C15.5948 11.3109 16.1557 12.6424 16.9635 13.4753C17.0283 13.5421 17.1349 13.4854 17.1221 13.3932C16.5225 9.08041 16.3003 5.60206 16.2602 3.31295C16.2586 3.22186 16.1949 3.14439 16.106 3.12463L14.9436 2.8665C14.892 2.85504 14.8267 2.89026 14.7942 2.93193Z',
  d9: 'M14.0284 2.5C14.0284 9 14.0284 15 17.5376 15M10.018 2.5C10.018 9 10.018 15 6.50879 15',
  d10: 'M17.0316 2.89531L20.0429 3.98938L21.0639 13.8975C21.07 13.9564 21.0236 14.0077 20.9642 14.0077H17.6124M17.0316 2.89531L17.6124 14.0077M17.0316 2.89531L14.5312 1.99943C14.2841 2.48129 13.6509 3.437 12.0079 3.48231C10.4899 3.52417 9.76503 2.48596 9.51917 1.99707L7.01062 2.90363M17.6124 14.0077L18.0595 21.8911C18.0627 21.9485 18.017 21.9968 17.9594 21.9968H6.11463C6.0572 21.9968 6.01151 21.9488 6.0145 21.8916L6.42784 13.9862M7.01062 2.90363L4.00838 3.99843L3.06101 13.8767C3.05538 13.9354 3.10167 13.9862 3.16082 13.9862H6.42784M7.01062 2.90363L6.42784 13.9862',
  d11: 'M20.7443 4.10864C20.7157 3.82191 20.5252 3.57697 20.2544 3.47846L14.1281 1.25L13.8291 1.8477C13.4735 2.55838 12.7566 2.93328 11.9982 2.93328C11.2398 2.93328 10.5229 2.55838 10.1673 1.8477L9.86829 1.25001L3.74168 3.47846C3.47077 3.577 3.28032 3.82209 3.25174 4.10894L2.25565 14.1089C2.23465 14.3197 2.30378 14.5296 2.44596 14.6866C2.58814 14.8437 2.79011 14.9333 3.00196 14.9333H5.62555L5.2441 21.9604C5.23322 22.1659 5.30727 22.3668 5.44889 22.5161C5.59051 22.6654 5.78726 22.75 5.99305 22.75H18.0034C18.2091 22.75 18.4059 22.6654 18.5475 22.5161C18.6891 22.3668 18.7632 22.1659 18.7523 21.9604L18.3709 14.9333H20.9982C21.2101 14.9333 21.4121 14.8436 21.5543 14.6865C21.6965 14.5294 21.7656 14.3195 21.7445 14.1086L20.7443 4.10864ZM7.72688 3.62529L9.18824 3.09375C9.42185 3.39466 9.6969 3.64401 9.99847 3.84267C9.98749 9.47525 9.81541 14.4699 7.11914 15.1131L7.72688 3.62529ZM14.8102 3.09376L16.2716 3.62534L16.8793 15.1131C14.183 14.4699 14.011 9.47524 14 3.84266C14.3015 3.64401 14.5766 3.39466 14.8102 3.09376Z',
};

export const IconClothesStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clothes-stroke-rounded IconClothesStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconClothesDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clothes-duotone-rounded IconClothesDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
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
    </TheIconWrapper>
  );
};

export const IconClothesTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clothes-twotone-rounded IconClothesTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconClothesSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clothes-solid-rounded IconClothesSolidRounded"
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

export const IconClothesBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clothes-bulk-rounded IconClothesBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconClothesStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clothes-stroke-sharp IconClothesStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconClothesSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clothes-solid-sharp IconClothesSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfClothes: TheIconSelfPack = {
  name: 'Clothes',
  StrokeRounded: IconClothesStrokeRounded,
  DuotoneRounded: IconClothesDuotoneRounded,
  TwotoneRounded: IconClothesTwotoneRounded,
  SolidRounded: IconClothesSolidRounded,
  BulkRounded: IconClothesBulkRounded,
  StrokeSharp: IconClothesStrokeSharp,
  SolidSharp: IconClothesSolidSharp,
};