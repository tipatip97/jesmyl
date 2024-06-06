import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 5.82759H7.7M11 5.82759H9.5M7.7 5.82759H9.5M7.7 5.82759V5M9.5 5.82759C9.18351 6.95937 8.52075 8.02923 7.76429 8.96946M5.83571 11C6.44723 10.4377 7.13788 9.74802 7.76429 8.96946M7.76429 8.96946C7.37857 8.51724 6.83857 7.78558 6.68429 7.45455M7.76429 8.96946L8.92143 10.1724',
  d2: 'M13.5 19L14.3333 17M18.5 19L17.6667 17M14.3333 17L16 13L17.6667 17M14.3333 17H17.6667',
  d3: 'M14 10V8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8C2 10.8284 2 12.2426 2.87868 13.1213C3.75736 14 5.17157 14 8 14H10',
  d4: 'M10 16C10 13.1716 10 11.7574 10.8787 10.8787C11.7574 10 13.1716 10 16 10C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22C13.1716 22 11.7574 22 10.8787 21.1213C10 20.2426 10 18.8284 10 16Z',
  d5: 'M4 16.5C4 17.9045 4 18.6067 4.33706 19.1111C4.48298 19.3295 4.67048 19.517 4.88886 19.6629C5.39331 20 6.09554 20 7.5 20',
  d6: 'M20 7.5C20 6.09554 20 5.39331 19.6629 4.88886C19.517 4.67048 19.3295 4.48298 19.1111 4.33706C18.6067 4 17.9045 4 16.5 4',
  d7: 'M7.7 4.25C8.11421 4.25 8.45 4.58579 8.45 5V5.07759H11C11.4142 5.07759 11.75 5.41337 11.75 5.82759C11.75 6.2418 11.4142 6.57759 11 6.57759H10.0441C9.7328 7.41823 9.26895 8.20474 8.7517 8.91411L9.46195 9.65248C9.74911 9.951 9.73989 10.4258 9.44137 10.7129C9.14284 11.0001 8.66806 10.9909 8.38091 10.6924L7.79846 10.0868C7.3042 10.6391 6.79951 11.1326 6.34337 11.5521C6.03847 11.8324 5.56401 11.8126 5.28364 11.5077C5.00327 11.2028 5.02316 10.7283 5.32806 10.4479C5.79695 10.0168 6.30701 9.51464 6.79318 8.95952C6.7031 8.84233 6.61369 8.72245 6.52917 8.60523C6.32723 8.32519 6.11486 8.00819 6.00449 7.77138C5.82951 7.39594 5.99202 6.94973 6.36745 6.77475C6.74289 6.59977 7.1891 6.76227 7.36408 7.13771C7.40799 7.23194 7.54277 7.44628 7.74583 7.72789C7.747 7.72951 7.74817 7.73112 7.74933 7.73274C8.00508 7.35646 8.23192 6.97006 8.41754 6.57759H5C4.58579 6.57759 4.25 6.2418 4.25 5.82759C4.25 5.41337 4.58579 5.07759 5 5.07759H6.95V5C6.95 4.58579 7.28579 4.25 7.7 4.25Z',
  d8: 'M16.0549 9.25H16.0549H16.0549H15.9451H15.9451H15.9451C14.5775 9.24998 13.4752 9.24996 12.6083 9.36652C11.7081 9.48754 10.9503 9.74643 10.3484 10.3484C9.74643 10.9503 9.48754 11.7081 9.36652 12.6083C9.24996 13.4752 9.24998 14.5775 9.25 15.9451V15.9451V15.9451V16.0549V16.0549V16.0549C9.24998 17.4225 9.24996 18.5248 9.36652 19.3918C9.48754 20.2919 9.74643 21.0497 10.3484 21.6517C10.9503 22.2536 11.7081 22.5125 12.6083 22.6335C13.4752 22.75 14.5775 22.75 15.9451 22.75H15.9451H15.9451H16.0549H16.0549H16.0549C17.4225 22.75 18.5248 22.75 19.3918 22.6335C20.2919 22.5125 21.0497 22.2536 21.6517 21.6517C22.2536 21.0497 22.5125 20.2919 22.6335 19.3918C22.75 18.5248 22.75 17.4225 22.75 16.0549V16.0549V16.0549V15.9451V15.9451V15.9451C22.75 14.5775 22.75 13.4752 22.6335 12.6083C22.5125 11.7081 22.2536 10.9503 21.6517 10.3484C21.0497 9.74643 20.2919 9.48754 19.3918 9.36652C18.5248 9.24996 17.4225 9.24998 16.0549 9.25ZM16.6925 12.7115C16.5761 12.4321 16.303 12.25 16.0002 12.25C15.6974 12.25 15.4243 12.4321 15.3079 12.7115L12.8079 18.7115C12.6486 19.0939 12.8294 19.533 13.2117 19.6923C13.5941 19.8516 14.0332 19.6708 14.1925 19.2885L14.8335 17.75H17.1669L17.8079 19.2885C17.9672 19.6708 18.4063 19.8516 18.7887 19.6923C19.171 19.533 19.3518 19.0939 19.1925 18.7115L16.6925 12.7115ZM16.5419 16.25H15.4585L16.0002 14.95L16.5419 16.25Z',
  d9: 'M7.94513 1.25H8.05488C9.42247 1.24998 10.5248 1.24996 11.3918 1.36652C12.2919 1.48754 13.0497 1.74643 13.6517 2.34835C14.2536 2.95027 14.5125 3.70814 14.6335 4.60825C14.75 5.47522 14.75 6.57754 14.75 7.94513V10C14.75 10.4142 14.4142 10.75 14 10.75C13.5858 10.75 13.25 10.4142 13.25 10V8C13.25 6.56459 13.2484 5.56347 13.1469 4.80812C13.0482 4.07435 12.8678 3.68577 12.591 3.40901C12.3142 3.13225 11.9257 2.9518 11.1919 2.85315C10.4365 2.75159 9.43542 2.75 8 2.75C6.56459 2.75 5.56347 2.75159 4.80812 2.85315C4.07435 2.9518 3.68577 3.13225 3.40901 3.40901C3.13225 3.68577 2.9518 4.07435 2.85315 4.80812C2.75159 5.56347 2.75 6.56459 2.75 8C2.75 9.43542 2.75159 10.4365 2.85315 11.1919C2.9518 11.9257 3.13225 12.3142 3.40901 12.591C3.68577 12.8678 4.07435 13.0482 4.80812 13.1469C5.56347 13.2484 6.56459 13.25 8 13.25H10C10.4142 13.25 10.75 13.5858 10.75 14C10.75 14.4142 10.4142 14.75 10 14.75H7.94513C6.57754 14.75 5.47522 14.75 4.60825 14.6335C3.70814 14.5125 2.95027 14.2536 2.34835 13.6517C1.74643 13.0497 1.48754 12.2919 1.36652 11.3918C1.24996 10.5248 1.24998 9.42247 1.25 8.05488V7.94513C1.24998 6.57754 1.24996 5.47522 1.36652 4.60825C1.48754 3.70814 1.74643 2.95027 2.34835 2.34835C2.95027 1.74643 3.70814 1.48754 4.60825 1.36652C5.47522 1.24996 6.57754 1.24998 7.94513 1.25Z',
  d10: 'M4 15.75C4.41421 15.75 4.75 16.0858 4.75 16.5C4.75 17.2178 4.75091 17.6998 4.78828 18.0672C4.82438 18.422 4.8882 18.586 4.96066 18.6945C5.05186 18.831 5.16905 18.9481 5.30554 19.0393C5.41399 19.1118 5.57796 19.1756 5.93283 19.2117C6.30023 19.2491 6.78216 19.25 7.5 19.25C7.91422 19.25 8.25 19.5858 8.25 20C8.25 20.4142 7.91422 20.75 7.5 20.75L7.46166 20.75C6.79208 20.75 6.23335 20.75 5.78102 20.704C5.30755 20.6559 4.86818 20.5511 4.47218 20.2865C4.17191 20.0859 3.9141 19.8281 3.71346 19.5278C3.44886 19.1318 3.34415 18.6925 3.29598 18.219C3.24997 17.7666 3.24998 17.2079 3.25 16.5383C3.25 16.5256 3.25 16.5128 3.25 16.5C3.25 16.0858 3.58579 15.75 4 15.75Z',
  d11: 'M20 8.25C19.5858 8.25 19.25 7.91421 19.25 7.5C19.25 6.78216 19.2491 6.30023 19.2117 5.93283C19.1756 5.57796 19.1118 5.41399 19.0393 5.30554C18.9481 5.16905 18.8309 5.05186 18.6945 4.96066C18.586 4.8882 18.422 4.82438 18.0672 4.78828C17.6998 4.75091 17.2178 4.75 16.5 4.75C16.0858 4.75 15.75 4.41421 15.75 4C15.75 3.58579 16.0858 3.25 16.5 3.25L16.5383 3.25C17.2079 3.24998 17.7666 3.24997 18.219 3.29598C18.6925 3.34415 19.1318 3.44886 19.5278 3.71346C19.8281 3.91409 20.0859 4.17191 20.2865 4.47218C20.5511 4.86818 20.6559 5.30755 20.704 5.78102C20.75 6.23335 20.75 6.79208 20.75 7.46165C20.75 7.4744 20.75 7.48718 20.75 7.5C20.75 7.91421 20.4142 8.25 20 8.25Z',
  d12: 'M16.0549 9.25C17.4225 9.24998 18.5248 9.24996 19.3918 9.36652C20.2919 9.48754 21.0497 9.74643 21.6517 10.3484C22.2536 10.9503 22.5125 11.7081 22.6335 12.6083C22.75 13.4752 22.75 14.5775 22.75 15.9451V15.9451V16.0549V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H16.0549H15.9451H15.9451C14.5775 22.75 13.4752 22.75 12.6083 22.6335C11.7081 22.5125 10.9503 22.2536 10.3484 21.6517C9.74643 21.0497 9.48754 20.2919 9.36652 19.3918C9.24996 18.5248 9.24998 17.4225 9.25 16.0549V16.0549V15.9451V15.9451C9.24998 14.5775 9.24996 13.4752 9.36652 12.6082C9.48754 11.7081 9.74643 10.9503 10.3484 10.3484C10.9503 9.74643 11.7081 9.48754 12.6082 9.36652C13.4752 9.24996 14.5775 9.24998 15.9451 9.25H15.9451H16.0549H16.0549Z',
  d13: 'M16.0002 12.25C16.303 12.25 16.5761 12.4321 16.6925 12.7115L19.1925 18.7115C19.3518 19.0939 19.171 19.533 18.7887 19.6923C18.4063 19.8516 17.9672 19.6708 17.8079 19.2885L17.1669 17.75H14.8335L14.1925 19.2885C14.0332 19.6708 13.5941 19.8516 13.2117 19.6923C12.8294 19.533 12.6486 19.0939 12.8079 18.7115L15.3079 12.7115C15.4243 12.4321 15.6974 12.25 16.0002 12.25ZM15.4585 16.25H16.5419L16.0002 14.95L15.4585 16.25Z',
  d14: 'M8.05488 1.25H7.94513H7.94511C6.57753 1.24998 5.47521 1.24996 4.60825 1.36652C3.70814 1.48754 2.95027 1.74643 2.34835 2.34835C1.74643 2.95027 1.48754 3.70814 1.36652 4.60825C1.24996 5.47521 1.24998 6.57753 1.25 7.94511V7.94513V8.05488V8.05489C1.24998 9.42247 1.24996 10.5248 1.36652 11.3918C1.48754 12.2919 1.74643 13.0497 2.34835 13.6517C2.95027 14.2536 3.70814 14.5125 4.60825 14.6335C5.47522 14.75 6.57754 14.75 7.94512 14.75H7.94513H9.25344C9.25856 14.1972 9.27126 13.6981 9.30277 13.25H8C6.56459 13.25 5.56347 13.2484 4.80812 13.1469C4.07435 13.0482 3.68577 12.8678 3.40901 12.591C3.13225 12.3142 2.9518 11.9257 2.85315 11.1919C2.75159 10.4365 2.75 9.43542 2.75 8C2.75 6.56459 2.75159 5.56347 2.85315 4.80812C2.9518 4.07435 3.13225 3.68577 3.40901 3.40901C3.68577 3.13225 4.07435 2.9518 4.80812 2.85315C5.56347 2.75159 6.56459 2.75 8 2.75C9.43542 2.75 10.4365 2.75159 11.1919 2.85315C11.9257 2.9518 12.3142 3.13225 12.591 3.40901C12.8678 3.68577 13.0482 4.07435 13.1469 4.80812C13.2484 5.56347 13.25 6.56459 13.25 8V9.30277C13.6981 9.27126 14.1972 9.25856 14.75 9.25344V7.94513V7.94512C14.75 6.57754 14.75 5.47522 14.6335 4.60825C14.5125 3.70814 14.2536 2.95027 13.6517 2.34835C13.0497 1.74643 12.2919 1.48754 11.3918 1.36652C10.5248 1.24996 9.42247 1.24998 8.05489 1.25H8.05488Z',
  d15: 'M5 6.32759H7.7M11 6.32759H9.5M7.7 6.32759H9.5M7.7 6.32759V4.5M9.5 6.32759C9.18351 7.45937 8.52075 8.52923 7.76429 9.46946M5.83571 11.5C6.44723 10.9377 7.13788 10.248 7.76429 9.46946M7.76429 9.46946C7.37857 9.01724 6.83857 8.28558 6.68429 7.95455M7.76429 9.46946L8.92143 10.6724',
  d16: 'M13.5 19.5L14.3333 17M18.5 19.5L17.6667 17M14.3333 17L15.5 13.5H16.5L17.6667 17M14.3333 17H17.6667',
  d17: 'M14 10V2H2V14H10',
  d18: 'M22 22V10H14L10 14V22L22 22Z',
  d19: 'M20 7.5L19.9999 4L16.5 4',
  d20: 'M3.99978 16.5L3.99988 20H7.49978',
  d21: 'M6.95 5.57759H5V7.07759H8.41754C8.23192 7.47006 8.00508 7.85646 7.74933 8.23274C7.74817 8.23112 7.747 8.22951 7.74583 8.22789C7.54277 7.94628 7.40799 7.73194 7.36408 7.63771L6.00449 8.27138C6.11486 8.50819 6.32723 8.82519 6.52917 9.10523C6.61369 9.22245 6.7031 9.34233 6.79318 9.45952C6.30701 10.0146 5.79695 10.5168 5.32806 10.9479L6.34337 12.0521C6.79951 11.6326 7.3042 11.1391 7.79846 10.5868L8.38091 11.1924L9.46195 10.1525L8.7517 9.41411C9.26895 8.70474 9.7328 7.91823 10.0441 7.07759H11V5.57759H8.45V4.5H6.95V5.57759Z',
  d22: 'M16.6267 16.25L16.0006 14.3717L15.3745 16.25H16.6267Z',
  d23: 'M2 1.25C1.58579 1.25 1.25 1.58579 1.25 2V14C1.25 14.4142 1.58579 14.75 2 14.75H9.25V22C9.25 22.4142 9.58579 22.75 10 22.75H22C22.1989 22.75 22.3897 22.671 22.5303 22.5303C22.671 22.3897 22.75 22.1989 22.75 22V10C22.75 9.58579 22.4142 9.25 22 9.25H14.75V2C14.75 1.58579 14.4142 1.25 14 1.25H2ZM13.25 9.68934V2.75H2.75V13.25H9.68934L13.25 9.68934ZM14.96 12.75H17.0411L19.2121 19.2628L17.7891 19.7372L17.1267 17.75H14.8745L14.2121 19.7372L12.7891 19.2628L14.96 12.75Z',
  d24: 'M19.2499 4.75H16.5V3.25L19.9999 3.25C20.4141 3.25 20.7499 3.58577 20.7499 3.99998L20.75 7.49998L19.25 7.50002L19.2499 4.75Z',
  d25: 'M3.24992 20L3.24982 16.5L4.74982 16.5L4.7499 19.25H7.49982V20.75H3.99992C3.58571 20.75 3.24993 20.4142 3.24992 20Z',
};

export const IconTranslateStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="translate-stroke-rounded IconTranslateStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconTranslateDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="translate-duotone-rounded IconTranslateDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconTranslateTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="translate-twotone-rounded IconTranslateTwotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconTranslateSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="translate-solid-rounded IconTranslateSolidRounded"
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

export const IconTranslateBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="translate-bulk-rounded IconTranslateBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
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

export const IconTranslateStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="translate-stroke-sharp IconTranslateStrokeSharp"
    >
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
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTranslateSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="translate-solid-sharp IconTranslateSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTranslate: TheIconSelfPack = {
  name: 'Translate',
  StrokeRounded: IconTranslateStrokeRounded,
  DuotoneRounded: IconTranslateDuotoneRounded,
  TwotoneRounded: IconTranslateTwotoneRounded,
  SolidRounded: IconTranslateSolidRounded,
  BulkRounded: IconTranslateBulkRounded,
  StrokeSharp: IconTranslateStrokeSharp,
  SolidSharp: IconTranslateSolidSharp,
};