import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 12V18',
  d2: 'M12 18C10.3264 18 8.86971 19.012 8.11766 20.505C7.75846 21.218 8.27389 22 8.95877 22H15.0412C15.7261 22 16.2415 21.218 15.8823 20.505C15.1303 19.012 13.6736 18 12 18Z',
  d3: 'M5 5H3.98471C2.99819 5 2.50493 5 2.20017 5.37053C1.89541 5.74106 1.98478 6.15597 2.16352 6.9858C2.50494 8.57086 3.24548 9.9634 4.2489 11',
  d4: 'M19 5H20.0153C21.0018 5 21.4951 5 21.7998 5.37053C22.1046 5.74106 22.0152 6.15597 21.8365 6.9858C21.4951 8.57086 20.7545 9.9634 19.7511 11',
  d5: 'M12 12C15.866 12 19 8.8831 19 5.03821C19 4.93739 18.9978 4.83707 18.9936 4.73729C18.9509 3.73806 18.9295 3.23845 18.2523 2.61922C17.5751 2 16.8247 2 15.324 2H8.67596C7.17526 2 6.42492 2 5.74772 2.61922C5.07051 3.23844 5.04915 3.73806 5.00642 4.73729C5.00215 4.83707 5 4.93739 5 5.03821C5 8.8831 8.13401 12 12 12Z',
  d6: 'M12 12C15.866 12 19 8.8831 19 5.03821C19 4.93739 18.9978 4.83707 18.9936 4.73729C18.9508 3.73806 18.9295 3.23845 18.2523 2.61922C17.5751 2 16.8247 2 15.324 2H8.67596C7.17526 2 6.42492 2 5.74772 2.61922C5.07051 3.23844 5.04915 3.73806 5.00642 4.73729C5.00215 4.83707 5 4.93739 5 5.03821C5 8.8831 8.13401 12 12 12Z',
  d7: 'M3.02795 6.21714C2.99979 6.04957 3.01996 6.02453 3.18807 6.0136C3.43675 5.99743 3.68655 5.99864 3.93596 5.99985C4.00171 6.00017 4.06744 6.00049 4.13311 6.00049C4.30032 6.00049 4.30854 6.00679 4.33363 6.17578C4.83817 9.57374 7.56916 12.2462 10.9991 12.6865V17.3536C9.4475 17.6799 8.16135 18.7493 7.44694 20.1675C6.84922 21.3541 7.68639 22.75 8.95787 22.75H15.0403C16.3118 22.75 17.149 21.3541 16.5512 20.1675C15.8368 18.7493 14.5507 17.6799 12.9991 17.3536V12.6867C16.4299 12.2471 19.1617 9.57433 19.6663 6.17578C19.6914 6.00679 19.6996 6.00049 19.8668 6.00049C19.9325 6.00049 19.9982 6.00017 20.064 5.99985C20.3134 5.99864 20.5632 5.99743 20.8119 6.0136C20.99 6.02518 20.9926 6.09838 20.9645 6.26053C20.9395 6.40064 20.9047 6.56315 20.8589 6.77572C20.5541 8.19054 19.8974 9.4115 19.0326 10.305C18.6484 10.7018 18.6587 11.3349 19.0556 11.719C19.4524 12.1031 20.0855 12.0928 20.4696 11.696C21.6116 10.5163 22.4359 8.95216 22.814 7.19686C22.8217 7.16126 22.8295 7.12562 22.8372 7.08994C22.9131 6.74154 22.9898 6.38944 22.9991 6.03238C23.0106 5.59071 22.9078 5.14393 22.5721 4.73579C22.2159 4.30264 21.7583 4.13047 21.3238 4.05978C20.9576 4.00021 20.5162 4.00034 20.0773 4.00048L19.8832 4.00048C19.7122 4.00049 19.7041 3.99449 19.6811 3.81992C19.6589 3.6511 19.6274 3.48572 19.5809 3.32621C19.4407 2.84509 19.1802 2.45168 18.7584 2.06598C17.8633 1.24751 16.827 1.24865 15.4964 1.25012H8.50356C7.17295 1.24865 6.13669 1.24751 5.24159 2.06598C4.81978 2.45168 4.55923 2.84509 4.41906 3.32621C4.37259 3.48572 4.3411 3.6511 4.31886 3.81992C4.29586 3.99451 4.28778 4.00049 4.11673 4.00048L3.92268 4.00048C3.48372 4.00034 3.04239 4.00021 2.6762 4.05978C2.24163 4.13047 1.78409 4.30264 1.42782 4.73579C1.09213 5.14393 0.989379 5.59071 1.00085 6.03238C1.00993 6.3819 1.09487 6.7752 1.17296 7.1368C1.53905 8.83336 2.31675 10.4423 3.53037 11.696C3.91449 12.0928 4.54757 12.1031 4.94439 11.719C5.34122 11.3349 5.35151 10.7018 4.96739 10.305C3.88773 9.18961 3.28986 7.72902 3.02795 6.21714Z',
  d8: 'M3.92268 4.00001L3.98469 4.00003H4.99998C5.55226 4.00003 5.99998 4.44774 5.99998 5.00003C5.99998 5.55231 5.55226 6.00002 4.99998 6.00002H3.98469C3.46294 6.00002 3.18912 6.00304 3.00321 6.03242C3.0077 6.08561 3.01736 6.15844 3.03546 6.26006C3.06043 6.40018 3.09529 6.56268 3.14108 6.77526C3.44583 8.19007 4.10251 9.41104 4.96739 10.3045C5.35151 10.7013 5.34122 11.3344 4.94439 11.7185C4.54757 12.1027 3.91449 12.0924 3.53037 11.6955C2.38841 10.5158 1.56401 8.9517 1.18592 7.19639L1.17296 7.13633C1.09487 6.77474 1.00993 6.38143 1.00085 6.03191C0.989379 5.59024 1.09213 5.14347 1.42782 4.73532C1.78409 4.30217 2.24163 4.13001 2.6762 4.05931C3.04239 3.99975 3.48372 3.99988 3.92268 4.00001ZM12 11C12.5523 11 13 11.4477 13 12V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V12C11 11.4477 11.4477 11 12 11ZM20.0153 6.00002C20.537 6.00002 20.8109 6.00304 20.9968 6.03242C20.9923 6.08561 20.9826 6.15844 20.9645 6.26006C20.9396 6.40018 20.9047 6.56268 20.8589 6.77526C20.5542 8.19007 19.8975 9.41104 19.0326 10.3045C18.6485 10.7013 18.6588 11.3344 19.0556 11.7185C19.4524 12.1027 20.0855 12.0924 20.4696 11.6955C21.6116 10.5158 22.436 8.9517 22.8141 7.19639L22.827 7.13634L22.827 7.13631C22.9051 6.77472 22.9901 6.38143 22.9991 6.03191C23.0106 5.59024 22.9078 5.14347 22.5722 4.73532C22.2159 4.30217 21.7584 4.13001 21.3238 4.05931C20.9576 3.99975 20.5163 3.99988 20.0773 4.00001L20.0153 4.00003H19C18.4477 4.00003 18 4.44774 18 5.00003C18 5.55231 18.4477 6.00002 19 6.00002H20.0153Z',
  d9: 'M11.9991 17.25C10.0073 17.25 8.30996 18.4543 7.44694 20.1675C6.84922 21.3541 7.68639 22.75 8.95787 22.75H15.0403C16.3118 22.75 17.149 21.3541 16.5512 20.1675C15.6882 18.4543 13.9908 17.25 11.9991 17.25Z',
  d10: 'M8.50358 1.25012C7.17297 1.24865 6.13672 1.24751 5.24161 2.06598C4.8198 2.45168 4.55925 2.84509 4.41908 3.32621C4.29795 3.74198 4.27864 4.19764 4.25946 4.65011L4.25711 4.7055C4.25238 4.81595 4.25 4.92695 4.25 5.03846C4.25 9.30143 7.72367 12.7502 12 12.7502C16.2763 12.7502 19.75 9.30143 19.75 5.03846C19.75 4.92695 19.7476 4.81595 19.7429 4.7055L19.7405 4.65012C19.7214 4.19765 19.7021 3.74198 19.5809 3.32621C19.4407 2.84509 19.1802 2.45168 18.7584 2.06598C17.8633 1.24751 16.827 1.24865 15.4964 1.25012H8.50358Z',
  d11: 'M15.9996 22H8C8 19.791 9.79087 18 11.9999 18C14.209 18 15.9998 19.7909 15.9996 22Z',
  d12: 'M19 5H22C22 8 20.7545 9.9634 19.7511 11',
  d13: 'M5 5H2C2 8 3.24548 9.9634 4.2489 11',
  d14: 'M12 12C15.866 12 19 8.8831 19 5.03821V2H5V5.03821C5 8.8831 8.13401 12 12 12Z',
  d15: 'M11 18V12H13V18H11Z',
  d16: 'M7.25 22C7.25 19.3768 9.37663 17.25 11.9999 17.25C14.6232 17.25 16.7498 19.3767 16.7496 22.0001L16.7495 22.75H7.25V22Z',
  d17: 'M19.75 5.03821C19.75 9.30118 16.2763 12.75 12 12.75C7.72367 12.75 4.25 9.30118 4.25 5.03821V1.25H19.75V5.03821Z',
  d18: 'M5.25 4H1.25V5C1.25 8.29972 2.6264 10.5034 3.78039 11.6955L5.21741 10.3045C4.47498 9.5375 3.53422 8.13237 3.30306 6H5.25V4Z',
  d19: 'M18.75 4H22.75V5C22.75 8.29972 21.3736 10.5034 20.2196 11.6955L18.7826 10.3045C19.525 9.5375 20.4658 8.13237 20.6969 6H18.75V4Z',
} as const;

export const IconAward01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-01-stroke-rounded IconAward01StrokeRounded"
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

export const IconAward01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-01-duotone-rounded IconAward01DuotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAward01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-01-twotone-rounded IconAward01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAward01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-01-solid-rounded IconAward01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAward01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-01-bulk-rounded IconAward01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAward01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-01-stroke-sharp IconAward01StrokeSharp"
    >
      <path 
        d={d.d1} 
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAward01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-01-solid-sharp IconAward01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAward01: TheIconSelfPack = {
  name: 'Award01',
  StrokeRounded: IconAward01StrokeRounded,
  DuotoneRounded: IconAward01DuotoneRounded,
  TwotoneRounded: IconAward01TwotoneRounded,
  SolidRounded: IconAward01SolidRounded,
  BulkRounded: IconAward01BulkRounded,
  StrokeSharp: IconAward01StrokeSharp,
  SolidSharp: IconAward01SolidSharp,
};