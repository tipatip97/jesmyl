import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.89092 14.1091C12.1252 16.3433 15.189 16.9019 17.9818 14.1091C20.7746 11.3163 22.0272 6.0182 20.0045 3.99548C17.9818 1.97276 12.6837 3.22541 9.89092 6.0182C7.09812 8.811 7.65668 11.8748 9.89092 14.1091Z',
  d2: 'M3 21C3.41339 20.4523 4.05487 19.8823 5.17764 19.6079C6.07232 19.3892 6.51967 19.2799 6.68616 19.1665C7.02076 18.9388 7.12514 18.7561 7.14451 18.3644C7.15414 18.1695 7.04904 17.8687 6.83883 17.267C6.62862 16.6654 6.52352 16.3646 6.53315 16.1697C6.55252 15.778 6.6569 15.5953 6.9915 15.3675C7.15799 15.2542 7.60534 15.1449 8.50002 14.9262C9.29868 14.731 9.7855 14.3789 10 14',
  d3: 'M3 21C3.41339 20.4523 4.05487 19.8823 5.17764 19.6079C6.07232 19.3892 6.51967 19.2799 6.68616 19.1665C7.02076 18.9388 7.12514 18.7561 7.14451 18.3644C7.15414 18.1695 7.04904 17.8687 6.83883 17.267C6.62862 16.6654 6.52352 16.3646 6.53315 16.1697C6.55252 15.778 6.6569 15.5953 6.9915 15.3675C7.15799 15.2542 7.60534 15.1449 8.50002 14.9262C9.29868 14.731 9.78549 14.3789 10 14',
  d4: 'M15.0806 2.46676C17.0808 2.04168 19.2464 2.17608 20.5349 3.46451C21.8233 4.75293 21.9577 6.9186 21.5326 8.91877C21.0971 10.9679 20.0241 13.1268 18.5122 14.6388C16.995 16.156 15.3333 16.8249 13.6894 16.7426C12.0627 16.6612 10.5719 15.8501 9.36062 14.6388C8.14929 13.4274 7.3382 11.9367 7.25675 10.31C7.17443 8.66608 7.84343 7.00442 9.36062 5.48723C10.8726 3.97529 13.0315 2.90226 15.0806 2.46676Z',
  d5: 'M10.5151 12.9195C11.0516 12.7883 11.5928 13.1169 11.7239 13.6534C11.8551 14.1899 11.5265 14.7311 10.99 14.8623C10.5995 14.9577 9.8091 15.2194 9.05973 15.4865C8.69336 15.6171 8.35228 15.7434 8.09559 15.8428C7.96675 15.8927 7.86459 15.9337 7.79323 15.9638C7.83576 16.1086 7.93242 16.4012 8.04112 16.7123L8.04114 16.7124C8.13922 16.9931 8.22508 17.2388 8.28362 17.4381C8.33904 17.6267 8.40703 17.8886 8.39334 18.1655C8.37999 18.4357 8.33296 18.7578 8.15185 19.0748C7.97277 19.3882 7.72104 19.5937 7.49889 19.7449C7.25971 19.9077 6.94719 19.9997 6.72605 20.0619C6.46474 20.1355 6.09563 20.2257 5.66513 20.331C4.80073 20.5422 4.34582 20.9599 4.0482 21.3541C3.71547 21.7949 3.08839 21.8826 2.64759 21.5498C2.20679 21.2171 2.11918 20.59 2.45191 20.1492C2.98106 19.4482 3.80912 18.7257 5.19026 18.3882C5.64531 18.2769 6.21875 18.115 6.36472 18.0018C6.32218 17.857 6.24536 17.6362 6.13666 17.3251C6.03856 17.0444 5.95269 16.7986 5.89416 16.5994C5.83873 16.4107 5.77074 16.1489 5.78443 15.872C5.79779 15.6018 5.84481 15.2796 6.02592 14.9627C6.205 14.6493 6.45673 14.4438 6.67888 14.2925C6.79336 14.2146 6.94522 14.1508 7.00465 14.1258C7.28208 14.0184 8.00949 13.7376 8.38822 13.6026C9.12904 13.3385 10.0109 13.0427 10.5151 12.9195Z',
  d6: 'M9.9493 15.1791C9.7466 15.0104 9.55018 14.8306 9.36062 14.6411C9.02655 14.307 8.72293 13.9517 8.45665 13.5781C8.43372 13.5863 8.4109 13.5944 8.38822 13.6025C8.00949 13.7375 7.28208 14.0183 7.00465 14.1257C6.94522 14.1506 6.79336 14.2145 6.67888 14.2924C6.45673 14.4436 6.205 14.6491 6.02592 14.9625C5.84481 15.2795 5.79779 15.6016 5.78443 15.8718C5.77074 16.1487 5.83873 16.4106 5.89416 16.5992C5.95269 16.7985 6.03856 17.0442 6.13666 17.325C6.24536 17.6361 6.32218 17.8569 6.36472 18.0017C6.21875 18.1149 5.64531 18.2768 5.19026 18.388C3.80912 18.7256 2.98106 19.4481 2.45191 20.1491C2.11918 20.5899 2.20679 21.217 2.64759 21.5497C3.08839 21.8824 3.71547 21.7948 4.0482 21.354C4.34582 20.9597 4.80073 20.5421 5.66513 20.3308C6.09563 20.2256 6.46474 20.1354 6.72605 20.0618C6.94719 19.9996 7.25971 19.9076 7.49889 19.7448C7.72104 19.5935 7.97277 19.388 8.15185 19.0746C8.33296 18.7577 8.37999 18.4355 8.39334 18.1653C8.40703 17.8884 8.33904 17.6266 8.28362 17.4379C8.22508 17.2387 8.13922 16.993 8.04114 16.7123C7.93243 16.4011 7.83576 16.1085 7.79323 15.9637C7.86459 15.9335 7.96675 15.8925 8.09559 15.8427C8.35228 15.7433 8.69336 15.617 9.05973 15.4864C9.35908 15.3797 9.66497 15.2738 9.9493 15.1791Z',
  d7: 'M15.0816 2.46676C17.0818 2.04168 19.2474 2.17608 20.5359 3.46451C21.8243 4.75293 21.9587 6.9186 21.5336 8.91877C21.0981 10.9679 20.0251 13.1268 18.5131 14.6388C16.9959 16.156 15.3343 16.8249 13.6904 16.7426C12.0637 16.6612 10.5729 15.8501 9.36159 14.6388C8.15027 13.4274 7.33918 11.9367 7.25772 10.31C7.17541 8.66608 7.8444 7.00442 9.36159 5.48723C10.8735 3.97529 13.0324 2.90226 15.0816 2.46676Z',
  d8: 'M8.20104 14.0101C8.87403 13.8423 9.08579 13.5875 9.12674 13.5137L10.8755 14.4841C10.4708 15.2134 9.6712 15.7047 8.68492 15.9507C8.21241 16.0685 7.88468 16.1504 7.65187 16.2172C7.53657 16.2504 7.46355 16.2745 7.41885 16.2915L7.41163 16.2943L7.40156 16.3018L7.40082 16.3111C7.40456 16.3295 7.41351 16.3704 7.4339 16.4412C7.47873 16.5968 7.55076 16.808 7.66342 17.137L7.67145 17.1604L7.67146 17.1605C7.77377 17.4592 7.86244 17.718 7.92271 17.9273C7.98005 18.1264 8.04725 18.3931 8.03372 18.6723C8.02016 18.9522 7.97273 19.2803 7.79209 19.6027C7.61258 19.9232 7.35864 20.1359 7.12912 20.2953C6.88589 20.4642 6.56589 20.5607 6.33499 20.627C6.06392 20.7049 5.70142 20.7953 5.25384 20.9069L5.23368 20.9119C4.51416 21.0913 4.06304 21.4113 3.74945 21.75L2.25 20.4264C2.79351 19.8281 3.57771 19.2636 4.7498 18.9713C5.22232 18.8535 5.55005 18.7716 5.78286 18.7047C5.89816 18.6716 5.97118 18.6475 6.01588 18.6305L6.02309 18.6277L6.03317 18.6202L6.03391 18.6109C6.03017 18.5925 6.02121 18.5516 6.00082 18.4808C5.956 18.3252 5.88397 18.1139 5.77131 17.785L5.76327 17.7615C5.66096 17.4628 5.57229 17.204 5.51201 16.9947C5.45468 16.7956 5.38747 16.5289 5.401 16.2497C5.41457 15.9698 5.462 15.6417 5.64264 15.3192C5.82215 14.9988 6.07609 14.786 6.30561 14.6267C6.54883 14.4578 6.86884 14.3613 7.09974 14.295C7.3708 14.2171 7.73327 14.1267 8.18081 14.0151L8.18083 14.0151L8.20104 14.0101Z',
};

export const IconSpermStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sperm-stroke-rounded IconSpermStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSpermDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sperm-duotone-rounded IconSpermDuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpermTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sperm-twotone-rounded IconSpermTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpermSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sperm-solid-rounded IconSpermSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpermBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sperm-bulk-rounded IconSpermBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpermStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sperm-stroke-sharp IconSpermStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpermSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sperm-solid-sharp IconSpermSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSperm: TheIconSelfPack = {
  name: 'Sperm',
  StrokeRounded: IconSpermStrokeRounded,
  DuotoneRounded: IconSpermDuotoneRounded,
  TwotoneRounded: IconSpermTwotoneRounded,
  SolidRounded: IconSpermSolidRounded,
  BulkRounded: IconSpermBulkRounded,
  StrokeSharp: IconSpermStrokeSharp,
  SolidSharp: IconSpermSolidSharp,
};