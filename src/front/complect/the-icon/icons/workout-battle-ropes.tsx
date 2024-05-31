import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.99436 4.49756C8.99436 5.32599 8.32239 5.99756 7.49349 5.99756C6.66458 5.99756 5.99261 5.32599 5.99261 4.49756C5.99261 3.66913 6.66458 2.99756 7.49349 2.99756C8.32239 2.99756 8.99436 3.66913 8.99436 4.49756Z',
  d2: 'M20.0004 8.99756C19.4166 8.99756 18.8667 8.72701 18.5164 8.2673L17.489 6.91916C17.3529 6.74053 17.2848 6.65122 17.2186 6.581C16.6489 5.97722 15.7389 5.82381 14.9975 6.20657',
  d3: 'M21.0014 16.9976C19.7153 16.9976 18.4907 16.445 17.6362 15.4792L16.9576 14.7121C15.9758 13.6023 14.6693 12.855 13.2447 12.5635M10.8686 12.4266C10.5585 12.4266 10.4035 12.4266 10.2598 12.4057C9.01961 12.2259 8.31409 10.8076 7.49359 9.99756',
  d4: 'M12.9985 6.9751L9.90415 8.38642L7.84358 8.25655M6.35849 21.0024V16.3641L6.17286 16.0302L5.18898 15.1211M5.18898 15.1211L3.37562 13.6774C3.13731 13.4877 2.99847 13.1997 2.99847 12.8951V12.8762L4.61351 8.57195L4.68982 8.46795C4.89608 8.18685 5.23385 8.03348 5.58123 8.06317L7.84358 8.25655M5.18898 15.1211L7.84358 8.25655',
  d5: 'M8.99982 4.5C8.99982 5.32843 8.32824 6 7.49982 6C6.67139 6 5.99982 5.32843 5.99982 4.5C5.99982 3.67157 6.67139 3 7.49982 3C8.32824 3 8.99982 3.67157 8.99982 4.5Z',
  d6: 'M3.29447 12.0061L4.3086 9.36989C4.56864 8.69389 4.69867 8.35589 4.99449 8.18011C5.29031 8.00433 5.6689 8.04012 6.42607 8.11169L7.84879 8.24618L5.18949 15.1849L3.88329 14.1266C3.36531 13.7069 3.10632 13.4971 3.02554 13.2061C2.94476 12.9152 3.06133 12.6122 3.29447 12.0061Z',
  d7: 'M13 7L10.5225 8.11603C10.2355 8.27881 10.092 8.3602 9.93152 8.39418C9.77108 8.42815 9.60455 8.41241 9.27151 8.38093L7.84879 8.24644M6.37797 21V17.0339C6.37797 16.5981 6.37797 16.3802 6.28478 16.1887C6.19158 15.9971 6.01655 15.8553 5.66649 15.5717L5.18949 15.1852M7.84879 8.24644L6.42607 8.11195C5.6689 8.04038 5.29031 8.00459 4.99449 8.18037C4.69867 8.35615 4.56864 8.69415 4.3086 9.37015L3.29447 12.0064C3.06133 12.6125 2.94476 12.9155 3.02554 13.2064C3.10632 13.4973 3.36531 13.7072 3.88329 14.1268L5.18949 15.1852M7.84879 8.24644L5.18949 15.1852',
  d8: 'M19.9998 9C19.4163 9 18.8668 8.72945 18.5167 8.26974L17.4899 6.9216C17.3538 6.74297 17.2858 6.65366 17.2196 6.58344C16.6502 5.97966 15.7408 5.82625 14.9998 6.20901',
  d9: 'M21 17C19.7146 17 18.4907 16.4474 17.6367 15.4816L16.9585 14.7145C15.9773 13.6047 14.6715 12.8574 13.2478 12.5659M10.873 12.429C10.5631 12.429 10.4082 12.429 10.2646 12.4081C9.02513 12.2283 8.32002 10.81 7.5 10',
  d10: 'M12.9998 7L10.5223 8.11603C10.2353 8.27881 10.0918 8.3602 9.93134 8.39418C9.77089 8.42815 9.60437 8.41241 9.27133 8.38093L7.84861 8.24644M6.37779 21V17.0339C6.37779 16.5981 6.37779 16.3802 6.28459 16.1887C6.1914 15.9971 6.01637 15.8553 5.66631 15.5717L5.1893 15.1852M7.84861 8.24644L6.42588 8.11195C5.66872 8.04038 5.29013 8.00459 4.99431 8.18037C4.69848 8.35615 4.56846 8.69415 4.30841 9.37015L3.29429 12.0064C3.06115 12.6125 2.94457 12.9155 3.02536 13.2064C3.10614 13.4973 3.36513 13.7072 3.8831 14.1268L5.1893 15.1852M7.84861 8.24644L5.1893 15.1852',
  d11: 'M5.24982 4.375C5.24982 3.13236 6.25718 2.125 7.49982 2.125C8.74246 2.125 9.74982 3.13236 9.74982 4.375C9.74982 5.61764 8.74246 6.625 7.49982 6.625C6.25718 6.625 5.24982 5.61764 5.24982 4.375Z',
  d12: 'M11.8286 6.30723C12.3322 6.0804 12.9243 6.30473 13.1511 6.80828C13.3779 7.31184 13.1536 7.90393 12.6501 8.13076L10.9572 8.89562C10.7326 9.02396 10.457 9.18143 10.1387 9.24883C9.82263 9.31576 9.50637 9.28488 9.24571 9.25943L8.51078 9.18982L6.38322 14.7411C6.65028 14.9553 6.99221 15.2333 7.184 15.6275C7.38278 16.036 7.38023 16.4852 7.37834 16.8195L7.37799 20.8763C7.37799 21.4286 6.93027 21.8763 6.37799 21.8763C5.8257 21.8763 5.37799 21.4286 5.37799 20.8763L5.37184 16.5052L3.22165 14.7541C2.99062 14.567 2.75838 14.3789 2.57912 14.1975C2.37538 13.9913 2.16531 13.7223 2.06201 13.3503C1.95789 12.9753 2.00099 12.6358 2.07365 12.3525C2.1366 12.107 2.24263 11.8316 2.34607 11.5629L3.3916 8.84502C3.50731 8.54403 3.62437 8.2395 3.75605 7.99293C3.90844 7.7076 4.12464 7.41037 4.48368 7.19703C4.83765 6.9867 5.20009 6.93566 5.51927 6.92991C5.80279 6.9248 6.13585 6.95634 6.47645 6.98859L9.73988 7.28159L11.8286 6.30723Z',
  d13: 'M16.4924 7.14448C16.2313 6.86754 15.8065 6.79303 15.4592 6.97245C14.9685 7.22592 14.3652 7.03363 14.1117 6.54294C13.8583 6.05226 14.0506 5.449 14.5413 5.19553C15.6758 4.60945 17.07 4.84176 17.9475 5.77236C18.0511 5.88214 18.15 6.01215 18.2605 6.15746C18.2689 6.16845 18.2773 6.17952 18.2858 6.19068L19.3126 7.53882C19.4714 7.74734 19.7252 7.87498 20.0002 7.87498C20.5525 7.87498 21.0002 8.3227 21.0002 8.87498C21.0002 9.42727 20.5525 9.87498 20.0002 9.87498C19.1081 9.87498 18.263 9.46153 17.7215 8.75063L16.6947 7.40249C16.5436 7.204 16.5135 7.16684 16.4924 7.14448Z',
  d14: 'M6.78858 9.17224C7.1767 8.77933 7.80985 8.77545 8.20276 9.16358C8.45334 9.4111 8.68353 9.69313 8.88289 9.94104C8.91074 9.97566 8.93804 10.0097 8.9649 10.0432C9.14169 10.2636 9.29943 10.4602 9.46579 10.6436C9.8572 11.0753 10.1434 11.2551 10.4082 11.2935C10.9548 11.3728 11.3336 11.8802 11.2543 12.4267C11.175 12.9733 10.6676 13.3521 10.121 13.2728C9.14631 13.1313 8.46025 12.5121 7.98422 11.9871C7.77379 11.7551 7.57452 11.5064 7.40087 11.2898C7.37476 11.2572 7.34923 11.2254 7.32433 11.1944C7.12212 10.9429 6.95667 10.7439 6.79724 10.5864C6.40433 10.1983 6.40045 9.56515 6.78858 9.17224ZM12.2681 12.2403C12.3789 11.6992 12.9074 11.3504 13.4484 11.4612C15.0833 11.796 16.582 12.654 17.7076 13.9271L18.3859 14.6942C19.0507 15.4461 20.0022 15.875 21 15.875C21.5523 15.875 22 16.3227 22 16.875C22 17.4273 21.5523 17.875 21 17.875C19.4271 17.875 17.9306 17.1987 16.8875 16.019L16.2093 15.2519C15.3725 14.3054 14.2596 13.6688 13.0472 13.4206C12.5061 13.3098 12.1573 12.7814 12.2681 12.2403Z',
  d15: 'M8.42959 9.40161L7.6077 11.5461C7.72655 11.6917 7.85323 11.8426 7.98422 11.9871C8.46025 12.512 9.14631 13.1313 10.121 13.2727C10.6676 13.352 11.175 12.9732 11.2543 12.4267C11.3336 11.8801 10.9548 11.3727 10.4082 11.2934C10.1434 11.255 9.8572 11.0752 9.46579 10.6436C9.29943 10.4601 9.14169 10.2635 8.9649 10.0431L8.88289 9.94099C8.74533 9.76993 8.59309 9.58262 8.42959 9.40161ZM13.4484 11.4612C12.9074 11.3504 12.3789 11.6992 12.2681 12.2402C12.1573 12.7813 12.5061 13.3097 13.0472 13.4205C14.2596 13.6688 15.3725 14.3054 16.2093 15.2518L16.8875 16.0189C17.9306 17.1987 19.4271 17.875 21 17.875C21.5523 17.875 22 17.4272 22 16.875C22 16.3227 21.5523 15.875 21 15.875C20.0022 15.875 19.0507 15.446 18.3859 14.6942L17.7076 13.9271C16.582 12.654 15.0833 11.796 13.4484 11.4612Z',
  d16: 'M9.00012 4.5C9.00012 5.32843 8.32855 6 7.50012 6C6.67169 6 6.00012 5.32843 6.00012 4.5C6.00012 3.67157 6.67169 3 7.50012 3C8.32855 3 9.00012 3.67157 9.00012 4.5Z',
  d17: 'M13 7L9.99985 8.5L7.83445 8.28346M6.49985 21V16.5L3 13L4.99985 8L7.83445 8.28346M7.83445 8.28346L5.18934 15.1852',
  d18: 'M20.0001 9C19.4166 9 18.8671 8.72945 18.517 8.26974L17.4902 6.9216C17.3541 6.74297 17.2861 6.65366 17.2199 6.58344C16.6505 5.97966 15.7411 5.82625 15.0001 6.20901',
  d19: 'M21 17C19.7147 17 18.4907 16.4474 17.6367 15.4816L16.9585 14.7145C15.9773 13.6047 14.6715 12.8574 13.2478 12.5659M11.5 12.4081H10L7.5 10',
  d20: 'M5.75 5C5.75 3.75736 6.75736 2.75 8 2.75C9.24264 2.75 10.25 3.75736 10.25 5C10.25 6.24264 9.24264 7.25 8 7.25C6.75736 7.25 5.75 6.24264 5.75 5Z',
  d21: 'M17.1746 7.59797C16.8364 7.23932 16.2904 7.14509 15.8447 7.37534L15.1562 6.04265C16.1924 5.5074 17.4654 5.71998 18.2659 6.56888L18.2659 6.56888C18.3599 6.6686 18.4508 6.78802 18.5649 6.93791C18.5722 6.94753 18.5797 6.95728 18.5872 6.96716L17.9905 7.42159L18.5872 6.96716L19.614 8.3153C19.8206 8.58661 20.1483 8.74999 20.5005 8.74999V10.25C19.6855 10.25 18.9143 9.87226 18.4207 9.22415L19.0173 8.76973L18.4206 9.22415L17.3939 7.87602C17.3939 7.87602 17.3939 7.87602 17.3939 7.87602C17.2465 7.68249 17.207 7.6323 17.1746 7.59797',
  d22: 'M13.1646 6.8291L10.3586 8.23206L5.5745 7.75365C5.242 7.7204 4.9276 7.91114 4.80351 8.2214L2.80366 13.2214C2.69224 13.5 2.75755 13.8181 2.96968 14.0302L6.24987 17.3106V21.25H7.74987V16.9999C7.74987 16.801 7.67086 16.6103 7.53021 16.4696L6.56271 15.5021L8.05909 11.5976L9.98047 13.4484C10.1202 13.583 10.3067 13.6583 10.5008 13.6583H12.0008V12.1583H10.8032L8.64208 10.0765L8.82981 9.58666L10.4252 9.74621C10.5663 9.76031 10.7085 9.73415 10.8353 9.67076L13.8354 8.17076L13.1646 6.8291Z',
  d23: 'M13.5981 13.8008C14.8634 14.0599 16.0245 14.7241 16.8974 15.7114L17.5756 16.4785C18.5714 17.6048 19.749 18.2501 21.25 18.2501V16.7501C20.1803 16.7501 19.4114 16.2903 18.6994 15.4849L18.0211 14.7178C16.9316 13.4856 15.4812 12.6552 13.899 12.3313L13.5981 13.8008Z',
} as const;

export const IconWorkoutBattleRopesStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-battle-ropes-stroke-rounded IconWorkoutBattleRopesStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWorkoutBattleRopesDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-battle-ropes-duotone-rounded IconWorkoutBattleRopesDuotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
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

export const IconWorkoutBattleRopesTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-battle-ropes-twotone-rounded IconWorkoutBattleRopesTwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutBattleRopesSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-battle-ropes-solid-rounded IconWorkoutBattleRopesSolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutBattleRopesBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-battle-ropes-bulk-rounded IconWorkoutBattleRopesBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutBattleRopesStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-battle-ropes-stroke-sharp IconWorkoutBattleRopesStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutBattleRopesSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-battle-ropes-solid-sharp IconWorkoutBattleRopesSolidSharp"
    >
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
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWorkoutBattleRopes: TheIconSelfPack = {
  name: 'WorkoutBattleRopes',
  StrokeRounded: IconWorkoutBattleRopesStrokeRounded,
  DuotoneRounded: IconWorkoutBattleRopesDuotoneRounded,
  TwotoneRounded: IconWorkoutBattleRopesTwotoneRounded,
  SolidRounded: IconWorkoutBattleRopesSolidRounded,
  BulkRounded: IconWorkoutBattleRopesBulkRounded,
  StrokeSharp: IconWorkoutBattleRopesStrokeSharp,
  SolidSharp: IconWorkoutBattleRopesSolidSharp,
};