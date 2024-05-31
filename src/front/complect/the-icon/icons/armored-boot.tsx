import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.8629 22H9.05441C6.20033 22 4.7733 22 3.88665 21.119C3 20.238 3 18.82 3 15.984V7.11652C3 6.52911 3 6.23541 3.15915 5.85969C3.3183 5.48398 3.45975 5.34712 3.74267 5.07341C4.84945 4.00264 6.92721 2.70559 10.1018 2.18241C11.3888 1.9703 12.0324 1.86425 12.5615 2.31472C13.0907 2.7652 13.0907 3.49507 13.0907 4.9548V10.6189C13.0907 12.017 13.0907 12.716 13.3631 13.3102C13.8866 14.4519 15.079 14.9007 16.1548 15.3996C16.9152 15.7522 17.7114 16.0661 18.4427 16.4775C19.7311 17.2022 20.6341 18.4527 20.9125 19.8976C21.1005 20.8736 21.0814 22 19.8629 22Z',
  d2: 'M3 17C3 17 5.00702 16 5.9505 16.2939C7.07883 16.6454 7.96297 17.6232 9 16.2713C10.1316 14.9447 11.9915 14 14 14',
  d3: 'M19.0586 17C18.0586 17.3333 16.0586 18.8 16.0586 22',
  d4: 'M3.05859 8.5H6.05859',
  d5: 'M3 12H5',
  d6: 'M9.99981 6H10.0088',
  d7: 'M9.99981 10H10.0088',
  d8: 'M13.0907 4.9548V10.6189C13.0907 12.017 13.0907 12.716 13.3631 13.3102C13.4499 13.4994 13.555 13.6695 13.6749 13.824C12.3055 14.207 9.26151 15.361 8.04018 16.9131C7.08759 16.4997 4.74621 15.9208 3.00137 16.9131C3 16.6215 3 16.3123 3 15.984V7.11652C3 6.52911 3 6.23541 3.15915 5.85969C3.3183 5.48398 3.45975 5.34712 3.74266 5.07341C4.84945 4.00264 6.92721 2.70559 10.1018 2.18241C11.3888 1.9703 12.0324 1.86425 12.5615 2.31472C13.0907 2.7652 13.0907 3.49507 13.0907 4.9548Z',
  d9: 'M20.911 19.9013C21.099 20.8773 21.0799 22.0037 19.8614 22.0037H16.0078C16.036 18.9467 18.0566 17.3238 19.0634 16.8945C20.0184 17.6365 20.6799 18.7019 20.911 19.9013Z',
  d10: 'M20.911 19.8974C21.099 20.8733 21.0799 21.9997 19.8614 21.9997H16.0078C16.036 18.9428 18.0566 17.3199 19.0634 16.8906C20.0184 17.6326 20.6799 18.698 20.911 19.8974Z',
  d11: 'M10 6H10.009',
  d12: 'M10 10H10.009',
  d13: 'M11.6338 1.25011C12.1763 1.25471 12.7039 1.38478 13.1796 1.79068C13.675 2.21343 13.876 2.75306 13.9622 3.3034C14.0387 3.79154 14.0386 4.39234 14.0385 5.04718L14.0385 10.6502C14.0385 12.1106 14.0597 12.5327 14.2154 12.8731C14.3671 13.2047 14.6245 13.4652 15.012 13.7127L17.0741 14.7115C17.6175 14.9524 18.2188 15.219 18.7597 15.524C20.2644 16.3723 21.3212 17.8375 21.6472 19.5332C21.7443 20.0387 21.8314 20.764 21.618 21.4102C21.5025 21.7598 21.2881 22.1191 20.9178 22.3827C20.5495 22.6448 20.1144 22.75 19.6664 22.75H9.05958C7.72658 22.75 6.62888 22.75 5.76041 22.6338C4.84968 22.5118 4.04618 22.2462 3.40235 21.605C2.75766 20.9629 2.48981 20.1601 2.36696 19.2501C2.25003 18.3839 2.25006 17.2895 2.2501 15.9628L2.25008 13.35C2.25008 13.0672 2.25008 12.9257 2.33795 12.8379C2.42582 12.75 2.56724 12.75 2.85008 12.75H5.00098C5.41519 12.75 5.75098 12.4142 5.75098 12C5.75098 11.5858 5.41519 11.25 5.00098 11.25H2.85007C2.56723 11.25 2.42581 11.25 2.33794 11.1621C2.25007 11.0743 2.25007 10.9328 2.25007 10.65L2.25006 9.85C2.25006 9.56716 2.25006 9.42574 2.33793 9.33787C2.4258 9.25 2.56722 9.25 2.85006 9.25H6.05957C6.47378 9.25 6.80957 8.91421 6.80957 8.5C6.80957 8.08579 6.47378 7.75 6.05957 7.75H2.84622C2.5671 7.75 2.42755 7.75 2.34006 7.66425C2.33863 7.66285 2.33721 7.66143 2.3358 7.65999C2.25005 7.57251 2.25005 7.43295 2.25005 7.15383C2.24953 6.63966 2.24905 6.17045 2.48249 5.61805C2.71502 5.06782 2.97531 4.81542 3.27126 4.52845C4.49808 3.33877 6.70714 1.98367 9.99078 1.44125C10.5598 1.34714 11.1702 1.24618 11.6338 1.25011ZM12.9574 14.8459C11.5939 15.0968 10.3792 15.8179 9.5829 16.7446C9.27114 17.1466 8.92047 17.4416 8.51019 17.5964C8.08559 17.7566 7.6818 17.7349 7.33323 17.6503C7.01855 17.5738 6.80538 17.4885 6.48667 17.3312C6.46771 17.3219 6.45823 17.3172 6.44993 17.3124C6.44168 17.3077 6.42792 17.2985 6.40051 17.2804C6.1731 17.1294 5.67714 16.9028 5.21312 17.0205C5.05744 17.0459 4.83478 17.1052 4.61926 17.17C4.42319 17.2288 4.32516 17.2583 4.26563 17.3406C4.20611 17.4228 4.20888 17.5275 4.21443 17.7368C4.22744 18.2278 4.25238 18.6367 4.29981 18.9881C4.39309 19.6791 4.55747 19.9997 4.77727 20.2186C4.99792 20.4383 5.32233 20.6032 6.01908 20.6965C6.74325 20.7935 7.70985 20.7955 9.1286 20.7955H14.8624C15.0984 20.7955 15.2163 20.7955 15.2976 20.7323C15.3788 20.6691 15.4098 20.547 15.4717 20.3029C15.7447 19.2262 16.2499 18.3647 16.8131 17.7063C17.0986 17.3726 17.2414 17.2057 17.2093 17.0597C17.1772 16.9138 16.992 16.8289 16.6218 16.659L15.3752 16.0871C14.9414 15.8898 14.4235 15.6542 13.9647 15.3612C13.7933 15.2517 13.6222 15.1298 13.457 14.9924C13.3384 14.8937 13.2791 14.8443 13.2145 14.8274C13.1499 14.8105 13.0858 14.8223 12.9574 14.8459ZM9 6C9 5.44772 9.44772 5 10 5H10.009C10.5613 5 11.009 5.44772 11.009 6C11.009 6.55228 10.5613 7 10.009 7H10C9.44772 7 9 6.55228 9 6ZM10 9C9.44772 9 9 9.44771 9 10C9 10.5523 9.44772 11 10 11H10.009C10.5613 11 11.009 10.5523 11.009 10C11.009 9.44771 10.5613 9 10.009 9H10Z',
  d14: 'M13.1796 1.79068C12.7039 1.38478 12.1763 1.25471 11.6338 1.25011C11.1702 1.24618 10.5598 1.34714 9.99078 1.44125C6.70714 1.98367 4.49808 3.33877 3.27126 4.52845C2.97531 4.81542 2.71502 5.06782 2.48249 5.61805C2.24905 6.17045 2.24953 6.63966 2.25005 7.15383L2.2501 15.9628C2.25006 17.2895 2.25003 18.3839 2.36696 19.2501C2.48981 20.1601 2.75766 20.9629 3.40235 21.605C4.04618 22.2462 4.84968 22.5118 5.76041 22.6338C6.62888 22.75 7.72658 22.75 9.05958 22.75H19.6664C20.1144 22.75 20.5495 22.6448 20.9178 22.3827C21.2881 22.1191 21.5025 21.7598 21.618 21.4102C21.8314 20.764 21.7443 20.0387 21.6472 19.5332C21.3212 17.8375 20.2644 16.3723 18.7597 15.524C18.2188 15.219 17.6175 14.9524 17.0741 14.7115L15.012 13.7127C14.6245 13.4652 14.3671 13.2047 14.2154 12.8731C14.0597 12.5327 14.0385 12.1106 14.0385 10.6502L14.0385 5.04718C14.0386 4.39234 14.0387 3.79154 13.9622 3.3034C13.876 2.75306 13.675 2.21343 13.1796 1.79068ZM9.5829 16.7446C10.3792 15.8179 11.5939 15.0968 12.9574 14.8459C13.0858 14.8223 13.1499 14.8105 13.2145 14.8274C13.2791 14.8443 13.3384 14.8937 13.457 14.9924C13.6222 15.1298 13.7933 15.2517 13.9647 15.3612C14.4235 15.6542 14.9414 15.8898 15.3752 16.0871L16.6218 16.659C16.992 16.8289 17.1772 16.9138 17.2093 17.0597C17.2414 17.2057 17.0986 17.3726 16.8131 17.7063C16.2499 18.3647 15.7447 19.2262 15.4717 20.3029C15.4098 20.547 15.3788 20.6691 15.2976 20.7323C15.2163 20.7955 15.0984 20.7955 14.8624 20.7955H9.1286C7.70985 20.7955 6.74325 20.7935 6.01908 20.6965C5.32233 20.6032 4.99792 20.4383 4.77727 20.2186C4.55747 19.9997 4.39309 19.6791 4.29981 18.9881C4.25238 18.6367 4.22744 18.2278 4.21443 17.7368C4.20888 17.5275 4.20611 17.4228 4.26563 17.3406C4.32516 17.2583 4.42319 17.2288 4.61926 17.17C4.83478 17.1052 5.05744 17.0459 5.21312 17.0205C5.67714 16.9028 6.1726 17.1291 6.40001 17.28C6.42776 17.2984 6.44163 17.3076 6.44993 17.3124C6.45823 17.3172 6.46771 17.3219 6.48667 17.3312C6.80538 17.4885 7.01855 17.5738 7.33323 17.6503C7.6818 17.7349 8.08559 17.7566 8.51019 17.5964C8.92047 17.4416 9.27114 17.1466 9.5829 16.7446Z',
  d15: 'M2.25003 12.75H5.00092C5.41514 12.75 5.75092 12.4142 5.75092 12C5.75092 11.5858 5.41514 11.25 5.00092 11.25H2.25002L2.25003 12.75Z',
  d16: 'M2.25001 9.25H6.05952C6.47373 9.25 6.80952 8.91421 6.80952 8.5C6.80952 8.08579 6.47373 7.75 6.05952 7.75H2.25L2.25001 9.25Z',
  d17: 'M9 6C9 5.44772 9.44772 5 10 5H10.009C10.5613 5 11.009 5.44772 11.009 6C11.009 6.55228 10.5613 7 10.009 7H10C9.44772 7 9 6.55228 9 6Z',
  d18: 'M9 10C9 9.44772 9.44772 9 10 9H10.009C10.5613 9 11.009 9.44772 11.009 10C11.009 10.5523 10.5613 11 10.009 11H10C9.44772 11 9 10.5523 9 10Z',
  d19: 'M21 22H6C4.34315 22 3 20.6568 3 19V5.99976C3 5.99976 6 1.99976 13 1.99976V13.5C13 13.5 17.7114 16.0661 18.4427 16.4775C20 17.4998 21 18 21 22Z',
  d20: 'M3.05859 8.49976H7.05859M3 11.9998H7',
  d21: 'M12.9998 1.25H13.7498V12.9116C11.6117 12.9862 9.65159 14.0091 8.4294 15.4417C8.42097 15.4516 8.41279 15.4617 8.40489 15.472C8.20136 15.7374 8.05664 15.8211 7.9799 15.8501C7.91179 15.8758 7.82959 15.8845 7.68645 15.8498C7.52409 15.8103 7.34092 15.7304 7.07363 15.606L7.02145 15.5817C6.78502 15.4714 6.48965 15.3335 6.17353 15.2351C5.77175 15.1099 5.33187 15.1382 4.97049 15.1973C4.59242 15.2591 4.2092 15.3706 3.87736 15.4848C3.54258 15.6 3.2423 15.7242 3.0266 15.8189C2.91825 15.8665 2.83 15.9073 2.76796 15.9366C2.73692 15.9512 2.71236 15.963 2.69505 15.9714L2.67459 15.9814L2.66859 15.9844L2.66668 15.9854L2.66573 15.9858C2.65729 15.99 2.6487 15.9945 2.64042 15.999C2.53208 16.0582 2.40008 16.135 2.24976 16.228V12.75H5.99976V11.25H2.24976V9.25H6.05835V7.75H2.24976V5.75C2.24976 5.75 2.84639 5.03757 3.05848 4.83396C3.48254 4.42686 4.11809 3.89269 4.98168 3.36126C6.71383 2.29532 9.34853 1.25 12.9998 1.25ZM8.99976 6.00049C8.99976 5.4482 9.44747 5.00049 9.99976 5.00049H10.0087C10.561 5.00049 11.0087 5.4482 11.0087 6.00049C11.0087 6.55277 10.561 7.00049 10.0087 7.00049H9.99976C9.44747 7.00049 8.99976 6.55277 8.99976 6.00049ZM9.99976 9.00049C9.44747 9.00049 8.99976 9.4482 8.99976 10.0005C8.99976 10.5528 9.44747 11.0005 9.99976 11.0005H10.0087C10.561 11.0005 11.0087 10.5528 11.0087 10.0005C11.0087 9.4482 10.561 9.00049 10.0087 9.00049H9.99976Z',
  d22: 'M14 14.4072H16.2276C17.4041 15.0538 18.7089 15.7857 19.0396 15.9718L19.0408 15.9725C19.1192 16.0235 19.1982 16.0748 19.2773 16.1271C19.0821 16.1897 18.9202 16.2479 18.7985 16.2963C17.5286 16.7312 15.3083 18.458 15.3083 22.0001V22.7502H5.99976C3.92869 22.7502 2.24976 21.0713 2.24976 19.0002V18.0368C2.70538 17.7046 3.10084 17.4579 3.34573 17.323L3.35045 17.3207C3.363 17.3146 3.38249 17.3052 3.40816 17.2931C3.45957 17.2688 3.53549 17.2337 3.63004 17.1922C3.82014 17.1087 4.08058 17.0012 4.36549 16.9031C4.65334 16.8041 4.94878 16.7207 5.21237 16.6776C5.49266 16.6318 5.65747 16.6454 5.72743 16.6672C5.94378 16.7346 6.15406 16.8325 6.41193 16.9526L6.44066 16.9659C6.6889 17.0815 7.00314 17.2274 7.33248 17.3074C7.68105 17.3921 8.08485 17.4137 8.50944 17.2535C8.91972 17.0987 9.27039 16.8038 9.58215 16.4017C10.5769 15.2441 12.2247 14.4072 14 14.4072Z',
  d23: 'M21.7498 22.7502H16.8083V22.0001C16.8083 19.1635 18.5615 17.9563 19.2955 17.7117C19.3103 17.7067 19.3249 17.7014 19.3393 17.6955C19.565 17.6043 20.0382 17.447 20.6512 17.3054C20.7574 17.439 20.8579 17.5834 20.9509 17.7409C21.4998 18.6702 21.7498 19.9612 21.7498 22.0002V22.7502Z',
} as const;

export const IconArmoredBootStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="armored-boot-stroke-rounded IconArmoredBootStrokeRounded"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArmoredBootDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="armored-boot-duotone-rounded IconArmoredBootDuotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArmoredBootTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="armored-boot-twotone-rounded IconArmoredBootTwotoneRounded"
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
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArmoredBootSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="armored-boot-solid-rounded IconArmoredBootSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArmoredBootBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="armored-boot-bulk-rounded IconArmoredBootBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconArmoredBootStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="armored-boot-stroke-sharp IconArmoredBootStrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArmoredBootSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="armored-boot-solid-sharp IconArmoredBootSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfArmoredBoot: TheIconSelfPack = {
  name: 'ArmoredBoot',
  StrokeRounded: IconArmoredBootStrokeRounded,
  DuotoneRounded: IconArmoredBootDuotoneRounded,
  TwotoneRounded: IconArmoredBootTwotoneRounded,
  SolidRounded: IconArmoredBootSolidRounded,
  BulkRounded: IconArmoredBootBulkRounded,
  StrokeSharp: IconArmoredBootStrokeSharp,
  SolidSharp: IconArmoredBootSolidSharp,
};