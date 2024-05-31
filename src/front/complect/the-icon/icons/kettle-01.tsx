import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 7L4.83809 7.49321C3.33351 7.83646 2.58121 8.00809 2.21219 8.64897C1.84317 9.28985 2.00392 10.1455 2.32541 11.8569L2.77129 14.2305C3.19487 16.4852 4.34422 17.2445 6 18',
  d2: 'M7.14058 7.78149L6.11202 18.5819C5.9597 20.1813 5.88354 20.9809 6.41933 21.4905C6.95512 22 7.87218 22 9.70631 22H16.2937C18.1278 22 19.0449 22 19.5807 21.4905C20.1165 20.9809 20.0403 20.1813 19.888 18.5819L18.8594 7.78149C18.5414 4.44177 16.0794 3 13 3C9.92061 3 7.45864 4.44177 7.14058 7.78149Z',
  d3: 'M8 7H20.9781C21.8375 7 22.1357 7.22852 21.9445 8.24057C21.6209 9.95337 20.6421 11.351 19.3558 12',
  d4: 'M12 17C12 14 14 15 14 12',
  d5: 'M13 3V2',
  d6: 'M7.14058 7.78149L6.11202 18.5819C5.9597 20.1813 5.88354 20.9809 6.41933 21.4905C6.95512 22 7.87218 22 9.70631 22H16.2937C18.1278 22 19.0449 22 19.5807 21.4905C20.1165 20.9809 20.0403 20.1813 19.888 18.5819L18.8594 7.78149C18.8334 7.50838 18.7931 7.24797 18.7392 7H7.26078C7.20694 7.24797 7.16659 7.50839 7.14058 7.78149Z',
  d7: 'M5.31053 8.71838L6.34405 8.4826L5.55564 16.7612C5.29724 16.5973 5.07971 16.4262 4.89255 16.2326C4.50641 15.8332 4.18709 15.2701 4.00411 14.296L3.55823 11.9225C3.39289 11.0424 3.28692 10.4693 3.2576 10.0345C3.22964 9.61973 3.28484 9.47454 3.32881 9.39819C3.36231 9.34 3.42039 9.2562 3.71503 9.14043C4.05075 9.00852 4.52765 8.89698 5.31053 8.71838ZM3.45461 17.6227C4.00862 18.1958 4.66907 18.5945 5.34908 18.9303C5.28229 19.6331 5.22795 20.2443 5.25893 20.7413C5.2945 21.3119 5.44761 21.8513 5.90233 22.2837C6.34061 22.7005 6.89331 22.8588 7.48555 22.9306C8.05636 22.9998 8.78196 22.9998 9.65803 22.9998H16.3417C17.2177 22.9998 17.9433 22.9998 18.5141 22.9306C19.1064 22.8588 19.6591 22.7005 20.0974 22.2837C20.5521 21.8513 20.7052 21.3119 20.7408 20.7413C20.7734 20.2181 20.7115 19.5685 20.64 18.8186L20.0709 12.8431C21.4116 11.9525 22.3479 10.4188 22.6771 8.67621C22.7731 8.16796 22.8564 7.41139 22.3631 6.83836C22.1103 6.54465 21.7911 6.40286 21.5159 6.33261C21.2511 6.26498 20.9747 6.25 20.7281 6.25H7.75C7.6635 6.25 7.57957 6.26098 7.49951 6.28163C7.34977 6.24292 7.18878 6.23849 7.02759 6.27527L4.86568 6.76848L4.79947 6.78358C4.10413 6.94213 3.47683 7.08517 2.98361 7.27897C2.4337 7.49505 1.93112 7.81749 1.5956 8.40019C1.27054 8.96472 1.2216 9.56781 1.26213 10.169C1.30041 10.7367 1.43026 11.4277 1.58181 12.2343L1.59262 12.2918L2.0385 14.6653C2.27909 15.9461 2.74624 16.8899 3.45461 17.6227ZM20.7119 8.30494C20.56 9.10914 20.2447 9.8033 19.8331 10.3461L19.6335 8.25H20.7218C20.7188 8.26753 20.7155 8.28584 20.7119 8.30494ZM15 12.25C15 11.6977 14.5523 11.25 14 11.25C13.4477 11.25 13 11.6977 13 12.25C13 12.8866 12.8946 13.2248 12.7931 13.4278C12.6868 13.6402 12.5484 13.7874 12.2929 14.0429L12.2706 14.0652C12.0268 14.3087 11.6788 14.6564 11.4181 15.1778C11.1446 15.7248 11 16.3866 11 17.25C11 17.8023 11.4477 18.25 12 18.25C12.5523 18.25 13 17.8023 13 17.25C13 16.6134 13.1054 16.2752 13.2069 16.0722C13.3132 15.8598 13.4516 15.7126 13.7071 15.4571L13.7294 15.4348C13.9732 15.1913 14.3212 14.8436 14.5819 14.3222C14.8554 13.7752 15 13.1134 15 12.25Z',
  d8: 'M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2V2.5C12 2.51648 12.0004 2.53287 12.0012 2.54916C9.43041 2.80805 7.169 4.10757 6.38572 6.87459C6.23529 7.406 6.54414 7.95873 7.07554 8.10916C7.60694 8.25958 8.15968 7.95074 8.3101 7.41934C8.86162 5.47105 10.5557 4.5 12.9991 4.5C15.4424 4.5 17.1365 5.47104 17.688 7.41934C17.8385 7.95074 18.3912 8.25958 18.9226 8.10916C19.454 7.95873 19.7628 7.406 19.6124 6.87459C18.8293 4.10824 16.5688 2.80868 13.9988 2.54935C13.9996 2.533 14 2.51655 14 2.5V2Z',
  d9: 'M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2V2.5C12 2.51648 12.0004 2.53287 12.0012 2.54916C9.43041 2.80805 7.169 4.10757 6.38572 6.87459C6.25634 7.33166 6.46672 7.80451 6.86624 8.02357C7.03876 8.16507 7.25946 8.25 7.5 8.25H20.7218C20.7188 8.26753 20.7155 8.28584 20.7119 8.30494C20.4346 9.77277 19.613 10.874 18.6554 11.3572C18.1623 11.606 17.9642 12.2074 18.213 12.7004C18.4618 13.1935 19.0632 13.3916 19.5562 13.1428C21.1711 12.3281 22.3073 10.634 22.6771 8.67621C22.7731 8.16796 22.8564 7.41139 22.3631 6.83836C22.1103 6.54465 21.7911 6.40286 21.5159 6.33261C21.2511 6.26498 20.9747 6.25 20.7281 6.25H19.3013C18.3826 3.91449 16.3476 2.79025 13.9988 2.54988C13.9996 2.53336 14 2.51673 14 2.5V2ZM12.9991 4.5C11.1069 4.5 9.66402 5.08237 8.85322 6.25H17.0555C16.2712 5.08386 14.889 4.5 12.9991 4.5Z',
  d10: 'M20.7408 20.7411C20.7734 20.218 20.7115 19.5683 20.64 18.8184L19.535 7.14792C19.4942 6.71764 19.4739 6.5025 19.3308 6.37235C19.1877 6.24219 18.9716 6.24219 18.5394 6.24219H7.51175C7.08129 6.24219 6.86606 6.24219 6.72318 6.37161C6.58029 6.50104 6.55907 6.71522 6.51662 7.14358L5.35971 18.8184C5.28824 19.5683 5.22632 20.218 5.25893 20.7411C5.2945 21.3117 5.44761 21.8511 5.90233 22.2835C6.34061 22.7003 6.89331 22.8587 7.48555 22.9305C8.05636 22.9996 8.78196 22.9996 9.65803 22.9996H16.3417C17.2177 22.9996 17.9433 22.9996 18.5141 22.9305C19.1064 22.8587 19.6591 22.7003 20.0974 22.2835C20.5521 21.8511 20.7052 21.3117 20.7408 20.7411ZM15 12.25C15 11.6977 14.5523 11.25 14 11.25C13.4477 11.25 13 11.6977 13 12.25C13 12.8866 12.8946 13.2248 12.7931 13.4278C12.6868 13.6402 12.5484 13.7874 12.2929 14.0429L12.2706 14.0652L12.2706 14.0652C12.0268 14.3087 11.6788 14.6564 11.4181 15.1778C11.1446 15.7248 11 16.3866 11 17.25C11 17.8023 11.4477 18.25 12 18.25C12.5523 18.25 13 17.8023 13 17.25C13 16.6134 13.1054 16.2752 13.2069 16.0722C13.3132 15.8598 13.4516 15.7126 13.7071 15.4571L13.7294 15.4348C13.9732 15.1913 14.3212 14.8436 14.5819 14.3222C14.8554 13.7752 15 13.1134 15 12.25Z',
  d11: 'M8.22496 7.0278C8.3478 7.56625 8.01088 8.10233 7.47243 8.22517L5.31053 8.71838C4.52765 8.89698 4.05075 9.00852 3.71503 9.14043C3.42039 9.2562 3.36231 9.34 3.32881 9.39819C3.28484 9.47454 3.22964 9.61973 3.2576 10.0345C3.28692 10.4693 3.39289 11.0424 3.55823 11.9225L4.00411 14.296C4.18709 15.2701 4.50641 15.8332 4.89255 16.2326C5.3017 16.6559 5.856 16.9713 6.66512 17.3404C7.16757 17.5697 7.38904 18.1629 7.15978 18.6653C6.93053 19.1678 6.33736 19.3892 5.83491 19.16C4.98824 18.7737 4.13998 18.3317 3.45461 17.6227C2.74624 16.8899 2.27909 15.9461 2.0385 14.6653L1.59262 12.2918C1.589 12.2726 1.5854 12.2534 1.58181 12.2343C1.43026 11.4277 1.30041 10.7367 1.26213 10.169C1.2216 9.56781 1.27054 8.96472 1.5956 8.40019C1.93112 7.81749 2.4337 7.49505 2.98361 7.27897C3.47683 7.08517 4.10413 6.94213 4.79947 6.78358C4.82147 6.77856 4.84354 6.77353 4.86568 6.76848L7.02759 6.27527C7.56604 6.15243 8.10212 6.48935 8.22496 7.0278Z',
  d12: 'M5.99858 9H2V15L5 18',
  d13: 'M5.66413 9.99053L4.99609 22.0001H18.9974L18.3302 9.99097C18.1435 6.62983 15.3635 4.00002 11.9972 4C8.631 3.99998 5.85109 6.62953 5.66413 9.99053Z',
  d14: 'M5.99902 9H21.999C21.999 14 18.3548 14 18.3548 14',
  d15: 'M11 18.5C11 14.9 13 16.1 13 12.5',
  d16: 'M12 4V2',
  d17: 'M1.00098 8.625C1.00098 8.07272 1.44869 7.625 2.00098 7.625H5.99956V9.625H3.00098V14.2108L5.70808 16.9179L4.29387 18.3321L1.29387 15.3321C1.10633 15.1446 1.00098 14.8902 1.00098 14.625V8.625Z',
  d18: 'M20.9396 9.625H18V7.625H22C22.5523 7.625 23 8.07272 23 8.625C23 11.4042 21.9656 12.9863 20.7436 13.8246C20.1605 14.2246 19.5808 14.4228 19.1481 14.5217C18.9306 14.5714 18.7459 14.5971 18.6099 14.6105C18.5417 14.6171 18.4853 14.6208 18.4424 14.6227C18.421 14.6237 18.4029 14.6243 18.3884 14.6246L18.3693 14.6249L18.3619 14.625L18.3587 14.625L18.3572 14.625C18.3565 14.625 18.3558 14.625 18.3558 13.625C18.3558 12.625 18.3551 12.625 18.3545 12.625L18.3533 12.625L18.3511 12.625L18.3476 12.625L18.3441 12.6251C18.3434 12.6251 18.3458 12.6251 18.351 12.6248C18.3616 12.6243 18.3834 12.6231 18.4148 12.62C18.4781 12.6138 18.5781 12.6004 18.7023 12.572C18.9529 12.5147 19.2842 12.4004 19.6122 12.1754C20.1129 11.8319 20.7442 11.136 20.9396 9.625Z',
  d19: 'M5.06738 8.38402L5.08664 8.38811C5.07812 8.41376 5.07092 8.44007 5.06512 8.46698C4.98761 8.82662 4.93727 9.19634 4.91627 9.57387L4.24823 21.5834C4.23678 21.7892 4.31055 21.9907 4.45221 22.1405C4.59387 22.2902 4.79093 22.3751 4.99707 22.3751H18.9983C19.2045 22.3751 19.4015 22.2902 19.5432 22.1405C19.6848 21.9907 19.7586 21.7893 19.7472 21.5835L19.08 9.57437C19.059 9.19667 19.0087 8.82678 18.9311 8.46698C18.9255 8.44066 18.9184 8.41491 18.9102 8.3898L18.9374 8.38402C18.2446 5.21842 15.3896 2.87502 12.0024 2.875C8.61529 2.87498 5.76016 5.21837 5.06738 8.38402ZM12.0024 4.77817C9.87674 4.77816 8.0373 6.04753 7.24928 7.875H16.7555C15.9675 6.04756 14.1281 4.77819 12.0024 4.77817ZM12.001 12.125C12.001 12.9329 11.8887 13.3944 11.7654 13.6904C11.642 13.9865 11.4834 14.1841 11.2328 14.4848L11.2157 14.5053C10.968 14.8024 10.6363 15.2001 10.3904 15.7904C10.1387 16.3944 10.001 17.1329 10.001 18.125H12.001C12.001 17.3171 12.1132 16.8556 12.2366 16.5596C12.3599 16.2635 12.5186 16.0659 12.7692 15.7652L12.7863 15.7447C13.034 15.4476 13.3656 15.0499 13.6116 14.4596C13.8632 13.8556 14.001 13.1171 14.001 12.125H12.001Z',
  d20: 'M13.001 1.625V3.625H11.001V1.625H13.001Z',
} as const;

export const IconKettle01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettle-01-stroke-rounded IconKettle01StrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKettle01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettle-01-duotone-rounded IconKettle01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKettle01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettle-01-twotone-rounded IconKettle01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKettle01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettle-01-solid-rounded IconKettle01SolidRounded"
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

export const IconKettle01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettle-01-bulk-rounded IconKettle01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKettle01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettle-01-stroke-sharp IconKettle01StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
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
    </TheIconWrapper>
  );
};

export const IconKettle01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettle-01-solid-sharp IconKettle01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKettle01: TheIconSelfPack = {
  name: 'Kettle01',
  StrokeRounded: IconKettle01StrokeRounded,
  DuotoneRounded: IconKettle01DuotoneRounded,
  TwotoneRounded: IconKettle01TwotoneRounded,
  SolidRounded: IconKettle01SolidRounded,
  BulkRounded: IconKettle01BulkRounded,
  StrokeSharp: IconKettle01StrokeSharp,
  SolidSharp: IconKettle01SolidSharp,
};