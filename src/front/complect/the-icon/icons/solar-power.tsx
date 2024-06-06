import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.98915 15.3273L4.05648 12.3273C4.28468 11.6859 4.39879 11.3652 4.65689 11.1826C4.91498 11 5.25424 11 5.93275 11H18.0672C18.7458 11 19.085 11 19.3431 11.1826C19.6012 11.3652 19.7153 11.6859 19.9435 12.3273L21.0108 15.3273C21.4437 16.5438 21.6601 17.1521 21.3624 17.576C21.0648 18 20.4214 18 19.1346 18H4.86542C3.5786 18 2.93519 18 2.63756 17.576C2.33994 17.1521 2.55634 16.5438 2.98915 15.3273Z',
  d2: 'M9.5 11L8 18M14.5 11L16 18',
  d3: 'M4 14.5H20',
  d4: 'M14.3333 5.5C14.3333 6.78866 13.2887 7.83333 12 7.83333M14.3333 5.5C14.3333 4.21134 13.2887 3.16667 12 3.16667M14.3333 5.5H15.5M12 7.83333C10.7113 7.83333 9.66667 6.78866 9.66667 5.5M12 7.83333V9M9.66667 5.5C9.66667 4.21134 10.7113 3.16667 12 3.16667M9.66667 5.5L8.5 5.5M12 3.16667V2M13.6499 3.85009L14.4749 3.02513M10.3501 7.14992L9.52513 7.97488M13.6499 7.14992L14.4749 7.97488M10.3501 3.85009L9.52513 3.02513',
  d5: 'M15 22C13.9398 20.8271 14 19 14 18M9 22C10.0602 20.8271 10 19 10 18',
  d6: 'M2 22H22',
  d7: 'M8.76665 10.8439C8.81157 10.6323 8.83403 10.5265 8.80314 10.4444C8.78034 10.3838 8.73854 10.3322 8.68399 10.2973C8.61009 10.25 8.50191 10.25 8.28556 10.25H5.89786C5.58857 10.25 5.29731 10.2499 5.05275 10.2776C4.77998 10.3084 4.49305 10.3797 4.22357 10.5703C3.95433 10.7608 3.79144 11.0075 3.67117 11.2542C3.56315 11.4757 3.46536 11.7507 3.3613 12.0433L3.3613 12.0433L3.03874 12.95C2.90899 13.3147 2.84411 13.497 2.93375 13.624C3.0234 13.7511 3.21694 13.7511 3.60403 13.7511H7.65864C7.89105 13.7511 8.00726 13.7511 8.08977 13.6844C8.17227 13.6177 8.19662 13.504 8.24532 13.2768L8.76635 10.8453L8.76665 10.8439ZM2.64366 15.2511C2.43801 15.2511 2.33518 15.2511 2.25696 15.3069C2.17873 15.3628 2.14579 15.4588 2.07992 15.6509C1.95884 16.0038 1.85916 16.3236 1.80367 16.6027C1.71617 17.0428 1.70231 17.5494 2.02355 18.007C2.34535 18.4654 2.82697 18.6234 3.27082 18.689C3.68493 18.7501 4.2142 18.7501 4.81091 18.75H4.81096H6.55791C6.77747 18.75 6.88724 18.75 6.96774 18.6888C7.04823 18.6276 7.07753 18.5218 7.13614 18.3102L7.2713 17.8222L7.66675 15.9768C7.7386 15.6415 7.77452 15.4739 7.68446 15.3625C7.59441 15.2511 7.42296 15.2511 7.08007 15.2511H2.64366ZM8.72278 18.2013C8.68058 18.3536 8.65948 18.4298 8.66805 18.4913C8.68247 18.5951 8.74993 18.6837 8.84603 18.7253C8.90305 18.75 8.9821 18.75 9.14018 18.75H14.7704C14.9967 18.75 15.1098 18.75 15.1862 18.6979C15.2332 18.6659 15.2702 18.6211 15.2927 18.5689C15.3294 18.484 15.3079 18.3729 15.265 18.1507L14.7453 15.7254C14.6966 15.4981 14.6723 15.3845 14.5898 15.3178C14.5073 15.2511 14.3911 15.2511 14.1586 15.2511H9.84136C9.60895 15.2511 9.49274 15.2511 9.41023 15.3178C9.32773 15.3845 9.30338 15.4981 9.25468 15.7254L8.73335 18.1582C8.73025 18.1727 8.72673 18.187 8.72278 18.2013ZM16.8145 18.2637C16.8595 18.4964 16.8819 18.6127 16.9651 18.6814C17.0482 18.75 17.1667 18.75 17.4037 18.75H19.1887H19.1888C19.7855 18.7501 20.3147 18.7501 20.7288 18.689C21.1727 18.6234 21.6543 18.4654 21.9761 18.007C22.2974 17.5494 22.2835 17.0428 22.196 16.6027C22.1405 16.3236 22.0408 16.0038 21.9197 15.6509C21.8539 15.4588 21.8209 15.3628 21.7427 15.3069C21.6645 15.2511 21.5617 15.2511 21.356 15.2511H16.9199C16.577 15.2511 16.4056 15.2511 16.3155 15.3625C16.2255 15.4739 16.2614 15.6415 16.3333 15.9768L16.7334 17.8439L16.7364 17.8589L16.8145 18.2637ZM20.3956 13.7511C20.7827 13.7511 20.9763 13.7511 21.0659 13.624C21.1556 13.497 21.0907 13.3147 20.9609 12.95L20.6384 12.0433C20.5343 11.7507 20.4365 11.4757 20.3285 11.2542C20.2082 11.0075 20.0453 10.7608 19.7761 10.5703C19.5066 10.3797 19.2197 10.3084 18.9469 10.2776C18.7024 10.2499 18.4111 10.25 18.1018 10.25H15.7274C15.5018 10.25 15.3891 10.25 15.3129 10.3016C15.2649 10.3341 15.2274 10.3798 15.2049 10.4331C15.169 10.5179 15.1909 10.6285 15.2346 10.8497L15.7547 13.2768C15.8034 13.504 15.8277 13.6177 15.9102 13.6844C15.9927 13.7511 16.1089 13.7511 16.3414 13.7511H20.3956ZM13.6669 10.6541C13.6364 10.4998 13.6211 10.4227 13.5781 10.3668C13.5503 10.3308 13.5148 10.3016 13.4741 10.2814C13.411 10.25 13.3323 10.25 13.1751 10.25L10.9121 10.25C10.6793 10.25 10.5629 10.25 10.4803 10.3169C10.3977 10.3838 10.3736 10.4977 10.3252 10.7254L10.2337 11.1568L10.2334 11.1582L9.83325 13.0254C9.7614 13.3606 9.72548 13.5283 9.81554 13.6397C9.90559 13.7511 10.077 13.7511 10.4199 13.7511H13.5801C13.923 13.7511 14.0944 13.7511 14.1845 13.6397C14.2745 13.5283 14.2386 13.3606 14.1667 13.0254L13.7666 11.1582L13.7642 11.1466C13.7642 11.1466 13.7642 11.1466 13.7642 11.1466C13.7642 11.1466 13.7642 11.1465 13.7642 11.1465L13.6669 10.6541Z',
  d8: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V2.50852C13.0478 2.58294 13.3284 2.70064 13.5848 2.85457L13.9445 2.4948C14.2374 2.20191 14.7123 2.20191 15.0052 2.4948C15.2981 2.7877 15.2981 3.26257 15.0052 3.55546L14.6454 3.91523C14.7994 4.17162 14.9171 4.45224 14.9915 4.75H15.5C15.9142 4.75 16.25 5.08579 16.25 5.5C16.25 5.91421 15.9142 6.25 15.5 6.25H14.9915C14.9171 6.54777 14.7994 6.82838 14.6454 7.08478L15.0052 7.44455C15.2981 7.73744 15.2981 8.21232 15.0052 8.50521C14.7123 8.7981 14.2374 8.7981 13.9445 8.50521L13.5848 8.14544C13.3284 8.29936 13.0478 8.41707 12.75 8.49148V9C12.75 9.41421 12.4142 9.75 12 9.75C11.5858 9.75 11.25 9.41421 11.25 9V8.49148C10.9522 8.41707 10.6716 8.29936 10.4152 8.14544L10.0555 8.50521C9.76256 8.7981 9.28769 8.7981 8.9948 8.50521C8.7019 8.21232 8.7019 7.73744 8.9948 7.44455L9.35457 7.08478C9.20064 6.82838 9.08294 6.54777 9.00852 6.25H8.5C8.08579 6.25 7.75 5.91421 7.75 5.5C7.75 5.08579 8.08579 4.75 8.5 4.75H9.00852C9.08293 4.45224 9.20064 4.17162 9.35456 3.91523L8.9948 3.55546C8.7019 3.26257 8.7019 2.7877 8.9948 2.4948C9.28769 2.20191 9.76256 2.20191 10.0555 2.4948L10.4152 2.85457C10.6716 2.70064 10.9522 2.58294 11.25 2.50852V2C11.25 1.58579 11.5858 1.25 12 1.25ZM13.1179 4.3787C12.8315 4.09318 12.4364 3.91667 12 3.91667C11.1255 3.91667 10.4167 4.62555 10.4167 5.5C10.4167 6.37445 11.1255 7.08333 12 7.08333C12.8745 7.08333 13.5833 6.37445 13.5833 5.5C13.5833 5.0619 13.4054 4.66536 13.1179 4.3787Z',
  d9: 'M9 22C10.0602 20.8271 10 19 10 18H14C14 19 13.9398 20.8271 15 22H9Z',
  d10: 'M1.25 21.75C1.25 21.1977 1.69772 20.75 2.25 20.75H21.75C22.3023 20.75 22.75 21.1977 22.75 21.75C22.75 22.3023 22.3023 22.75 21.75 22.75H2.25C1.69772 22.75 1.25 22.3023 1.25 21.75Z',
  d11: 'M18.9469 10.2776C18.7024 10.2499 18.4111 10.25 18.1018 10.25L15.1159 10.25L15.2344 10.8489L15.8561 13.7502H21.2457L20.6384 12.0433C20.5343 11.7507 20.4365 11.4757 20.3285 11.2542C20.2082 11.0075 20.0453 10.7608 19.7761 10.5703C19.5066 10.3797 19.2197 10.3084 18.9469 10.2776Z',
  d12: 'M21.7793 15.2502H16.1775L16.7331 17.8431L16.7362 17.8581L16.9083 18.75H15.3806L15.2648 18.1499L14.6434 15.2502H9.35607L8.73311 18.1574C8.73001 18.1718 8.72649 18.1862 8.72254 18.2005L8.57032 18.75H7.01384L7.27105 17.8214L7.82202 15.2502H2.22036C2.03774 15.7643 1.87946 16.2214 1.80367 16.6027C1.71617 17.0428 1.70231 17.5494 2.02355 18.007C2.34535 18.4654 2.82697 18.6234 3.27082 18.689C3.68493 18.7501 4.2142 18.7501 4.81091 18.75H19.1887C19.7854 18.7501 20.3147 18.7501 20.7288 18.689C21.1727 18.6234 21.6543 18.4654 21.9761 18.007C22.2974 17.5494 22.2835 17.0428 22.196 16.6027C22.1202 16.2214 21.9619 15.7643 21.7793 15.2502Z',
  d13: 'M2.22036 15.2502L2.75218 13.7554L2.26426 15.1268C2.24951 15.1683 2.23484 15.2095 2.22036 15.2502Z',
  d14: 'M2.75401 13.7502H8.14345L8.7661 10.8445L8.8923 10.25L5.89786 10.25C5.58857 10.25 5.29731 10.2499 5.05275 10.2776C4.77998 10.3084 4.49305 10.3797 4.22357 10.5703C3.95433 10.7608 3.79144 11.0075 3.67117 11.2542C3.56315 11.4757 3.46536 11.7507 3.3613 12.0433L2.75401 13.7502Z',
  d15: 'M10.4257 10.25L10.2331 11.1574L9.6775 13.7502H14.322L13.7639 11.1457L13.5868 10.25H10.4257Z',
  d16: 'M9.9965 18.75C9.97361 19.7598 9.83085 21.0808 9 22H15C14.1692 21.0808 14.0264 19.7598 14.0035 18.75H9.9965Z',
  d17: 'M5 11V10.25L4.47146 10.25L4.29369 10.7477L5 11ZM2.5 18L1.79369 17.7478C1.71166 17.9774 1.74644 18.2327 1.88694 18.432C2.02744 18.6314 2.2561 18.75 2.5 18.75V18ZM19 11L19.7063 10.7477L19.5285 10.25L19 10.25V11ZM21.5 18V18.75C21.7439 18.75 21.9726 18.6314 22.1131 18.432C22.2536 18.2327 22.2883 17.9774 22.2063 17.7478L21.5 18ZM4.29369 10.7477L1.79369 17.7478L3.20631 18.2523L5.70631 11.2523L4.29369 10.7477ZM18.2937 11.2523L20.7937 18.2523L22.2063 17.7478L19.7063 10.7477L18.2937 11.2523ZM2.5 18.75H21.5V17.25H2.5V18.75ZM5 11.75L19 11.75V10.25L5 10.25V11.75Z',
  d18: 'M14.5 22V18M9.5 22V18',
  d19: 'M8.94678 9.75L4.47147 9.75L3.22147 13.25H8.15133L8.94678 9.75Z',
  d20: 'M2.68576 14.75L1.7937 17.2478C1.71167 17.4774 1.74645 17.7327 1.88694 17.932C2.02744 18.1314 2.25611 18.25 2.5 18.25H7.01496L7.81042 14.75H2.68576Z',
  d21: 'M8.55321 18.25H15.4468L14.6513 14.75H9.34867L8.55321 18.25Z',
  d22: 'M16.985 18.25H21.5C21.7439 18.25 21.9726 18.1314 22.1131 17.932C22.2536 17.7327 22.2883 17.4774 22.2063 17.2478L21.3143 14.75H16.1896L16.985 18.25Z',
  d23: 'M20.7785 13.25L19.5285 9.75L15.0532 9.75L15.8487 13.25H20.7785Z',
  d24: 'M13.515 9.75L10.485 9.75L9.68958 13.25H14.3104L13.515 9.75Z',
  d25: 'M11.25 2.00852C10.9522 2.08294 10.6716 2.20064 10.4152 2.35457L10.0555 1.9948L8.9948 3.05546L9.35456 3.41523C9.20064 3.67162 9.08293 3.95224 9.00852 4.25H8.5V5.75H9.00852C9.08294 6.04777 9.20064 6.32838 9.35457 6.58478L8.9948 6.94455L10.0555 8.00521L10.4152 7.64544C10.6716 7.79936 10.9522 7.91707 11.25 7.99148V8.5H12.75V7.99148C13.0478 7.91707 13.3284 7.79936 13.5848 7.64544L13.9445 8.00521L15.0052 6.94455L14.6454 6.58478C14.7994 6.32838 14.9171 6.04777 14.9915 5.75H15.5V4.25H14.9915C14.9171 3.95224 14.7994 3.67162 14.6454 3.41523L15.0052 3.05546L13.9445 1.9948L13.5848 2.35457C13.3284 2.20064 13.0478 2.08294 12.75 2.00852V1.5H11.25V2.00852ZM12 3.41667C11.1255 3.41667 10.4167 4.12555 10.4167 5C10.4167 5.87445 11.1255 6.58333 12 6.58333C12.8745 6.58333 13.5833 5.87445 13.5833 5C13.5833 4.12555 12.8745 3.41667 12 3.41667Z',
  d26: 'M10 17.5V20.5H2V22.5H22V20.5H14.0562V17.5H10Z',
};

export const IconSolarPowerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-power-stroke-rounded IconSolarPowerStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconSolarPowerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-power-duotone-rounded IconSolarPowerDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconSolarPowerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-power-twotone-rounded IconSolarPowerTwotoneRounded"
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

export const IconSolarPowerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-power-solid-rounded IconSolarPowerSolidRounded"
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
      <path 
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

export const IconSolarPowerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-power-bulk-rounded IconSolarPowerBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPowerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-power-stroke-sharp IconSolarPowerStrokeSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
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
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPowerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-power-solid-sharp IconSolarPowerSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSolarPower: TheIconSelfPack = {
  name: 'SolarPower',
  StrokeRounded: IconSolarPowerStrokeRounded,
  DuotoneRounded: IconSolarPowerDuotoneRounded,
  TwotoneRounded: IconSolarPowerTwotoneRounded,
  SolidRounded: IconSolarPowerSolidRounded,
  BulkRounded: IconSolarPowerBulkRounded,
  StrokeSharp: IconSolarPowerStrokeSharp,
  SolidSharp: IconSolarPowerSolidSharp,
};