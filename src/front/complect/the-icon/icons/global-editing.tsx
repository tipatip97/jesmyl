import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.0775 22C5.46844 21.0621 2 16.9868 2 12.1015C2 6.52261 6.5233 2 12.1031 2C16.9838 2 21.0562 5.46043 22 10.0613',
  d2: 'M18.4332 13.8485C18.7685 13.4851 18.9362 13.3035 19.1143 13.1975C19.5442 12.9418 20.0736 12.9339 20.5107 13.1765C20.6918 13.2771 20.8646 13.4537 21.2103 13.8067C21.5559 14.1598 21.7287 14.3364 21.8272 14.5214C22.0647 14.9679 22.0569 15.5087 21.8066 15.9478C21.7029 16.1298 21.5251 16.3011 21.1694 16.6437L16.9378 20.7194C16.2638 21.3686 15.9268 21.6932 15.5056 21.8577C15.0845 22.0222 14.6214 22.0101 13.6954 21.9859L13.5694 21.9826C13.2875 21.9752 13.1466 21.9715 13.0646 21.8785C12.9827 21.7855 12.9939 21.6419 13.0162 21.3548L13.0284 21.1988C13.0914 20.3906 13.1228 19.9865 13.2807 19.6232C13.4385 19.2599 13.7107 18.965 14.2552 18.375L18.4332 13.8485Z',
  d3: 'M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2',
  d4: 'M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21',
  d5: 'M19.7826 5.7201C21.1697 7.43673 22.0003 9.62157 22.0003 12.0004C22.0003 12.8127 21.9035 13.6024 21.7207 14.3585C21.6143 14.2196 21.456 14.0579 21.2106 13.8072C20.865 13.4541 20.6921 13.2775 20.511 13.177C20.0739 12.9343 19.5446 12.9423 19.1147 13.1979C18.9365 13.3039 18.7688 13.4856 18.4335 13.8489L14.2556 18.3755C13.7111 18.9654 13.4388 19.2604 13.281 19.6236L13.144 21.9358C12.7687 21.9785 12.3871 22.0004 12.0003 22.0004C10.6745 22.0004 9.40898 21.7424 8.25117 21.2739L8.51094 21.0004C9.18506 20.1678 9.06684 19.1986 8.72865 18.2293C8.49767 17.5673 8.36931 17.1994 8.29796 16.8207C8.20871 16.347 8.20871 15.8565 8.20871 14.7522C8.20871 12.7653 7.68877 12.2686 5.08908 12.2686C3.85566 12.2686 2.80512 11.6863 2.0459 11.0396C2.47548 6.53327 5.89568 2.89917 10.2993 2.14453C9.74789 3.31036 9.93928 4.72809 11.0405 5.26259C11.9613 5.70953 12.0553 6.35294 12.1505 7.00386C12.2372 7.597 12.3248 8.19638 13.0397 8.65905C14.0394 9.30599 15.5388 9.14404 17.0382 7.20321C17.8052 6.21045 18.8855 5.826 19.7826 5.7201Z',
  d6: 'M2.0459 10.9824C2.8084 11.6445 3.87636 12.2506 5.13464 12.2506C7.73433 12.2506 8.25427 12.7473 8.25427 14.7342C8.25427 16.7211 8.25427 16.7211 8.77421 18.2112C9.11241 19.1805 9.23062 20.1498 8.5565 20.9824',
  d7: 'M20.1016 5.69899C19.1669 5.76636 17.9697 6.12824 17.1395 7.20277C15.6401 9.14361 14.1406 9.30556 13.141 8.65861C11.6415 7.6882 12.9016 6.11636 11.1417 5.26215C9.99469 4.70542 9.83477 3.19045 10.4732 2',
  d8: 'M3.29549 10.7305C3.27749 10.855 3.26848 10.9173 3.2981 10.9744C3.32772 11.0315 3.38213 11.0591 3.49095 11.1144C3.97458 11.36 4.51335 11.5181 5.08874 11.5181C5.75485 11.5181 6.32888 11.5492 6.81102 11.6396C7.29426 11.7301 7.73816 11.8894 8.09861 12.1845C8.84883 12.7989 8.95837 13.7614 8.95837 14.7517C8.95837 15.7706 8.9604 16.1997 9.01512 16.5656C9.06753 16.9161 9.16946 17.2165 9.43644 17.9817C9.59057 18.4234 9.80455 19.0505 9.79233 19.7265C9.79017 19.8463 9.781 19.9665 9.764 20.0867C9.73483 20.293 9.72025 20.3961 9.76476 20.4605C9.80928 20.5248 9.8975 20.5445 10.074 20.5839C10.3848 20.6534 10.7019 20.7064 11.0243 20.7419C11.5608 20.8012 12 21.233 12 21.7727C12 22.3125 11.561 22.7546 11.0235 22.7062C5.54403 22.2128 1.25 17.6079 1.25 12C1.25 12 1.25 11.9999 1.25 11.9999C1.25 11.9468 1.25038 11.8939 1.25115 11.841C1.33552 6.02218 6.04305 1.32252 11.8649 1.25083C11.9099 1.25028 11.9548 1.25 11.9999 1.25H12C17.6079 1.25 22.2128 5.54403 22.7062 11.0235C22.7546 11.561 22.3125 12 21.7727 12C21.233 12 20.8012 11.5608 20.7419 11.0243C20.5739 9.50183 20.0173 8.09643 19.1735 6.90946C19.091 6.79351 19.0498 6.73553 18.9794 6.71718C18.909 6.69883 18.8478 6.72787 18.7254 6.78594C18.3245 6.97608 17.9437 7.25735 17.6315 7.66148C16.8187 8.71346 15.9471 9.36062 15.063 9.62078C14.1618 9.88596 13.3114 9.72818 12.6319 9.28843C11.6258 8.63728 11.4958 7.72722 11.4107 7.13129C11.3644 6.81991 11.3081 6.52842 11.2244 6.37357C11.1546 6.24455 11.0279 6.09006 10.7127 5.93705C9.92015 5.55237 9.471 4.84887 9.31521 4.09096C9.27621 3.90125 9.25671 3.8064 9.20557 3.762C9.18265 3.7421 9.15963 3.72954 9.1305 3.72103C9.06548 3.70205 8.98641 3.73263 8.82827 3.79379C5.91739 4.91962 3.75535 7.54963 3.29549 10.7305Z',
  d9: 'M19.1832 14.5985C19.5185 14.2351 19.6862 14.0535 19.8643 13.9475C20.2942 13.6918 20.8236 13.6839 21.2607 13.9265C21.4418 14.0271 21.6146 14.2037 21.9603 14.5567C22.3059 14.9098 22.4787 15.0864 22.5772 15.2714C22.8147 15.7179 22.8069 16.2587 22.5566 16.6978C22.4529 16.8798 22.2751 17.0511 21.9194 17.3937L17.6878 21.4694C17.0138 22.1186 16.6768 22.4432 16.2556 22.6077C15.8345 22.7722 15.3714 22.7601 14.4454 22.7359L14.3194 22.7326C14.0375 22.7252 13.8966 22.7215 13.8146 22.6285C13.7327 22.5355 13.7439 22.3919 13.7662 22.1048L13.7784 21.9488C13.8414 21.1406 13.8728 20.7365 14.0307 20.3732C14.1885 20.0099 14.4607 19.715 15.0052 19.125L19.1832 14.5985Z',
  d10: 'M10.1724 1.40483C10.7669 1.30298 11.3775 1.25 11.9999 1.25C15.3801 1.25 18.3963 2.81097 20.3657 5.24849C20.5374 5.46093 20.58 5.74988 20.4769 6.00281C20.3739 6.25574 20.1415 6.43266 19.8703 6.46468C19.1028 6.55526 18.2377 6.87675 17.6315 7.66148C16.8187 8.71346 15.9471 9.36062 15.063 9.62078C14.1618 9.88596 13.3114 9.72818 12.6319 9.28843C11.6258 8.63728 11.4958 7.72722 11.4107 7.13129C11.3644 6.81991 11.3081 6.52842 11.2244 6.37357C11.1546 6.24455 11.0279 6.09006 10.7127 5.93705C9.92015 5.55237 9.471 4.84887 9.31521 4.09096C9.1621 3.34613 9.28442 2.5351 9.62111 1.82335C9.72567 1.60231 9.93142 1.44612 10.1724 1.40483Z',
  d11: 'M1.7638 10.344C2.02294 10.239 2.319 10.2868 2.53187 10.4681C3.21164 11.0471 4.09563 11.5181 5.08874 11.5181C5.75485 11.5181 6.32888 11.5492 6.81102 11.6396C7.29426 11.7301 7.73816 11.8894 8.09861 12.1845C8.84883 12.7989 8.95837 13.7614 8.95837 14.7517C8.95837 15.7706 8.9604 16.1997 9.01512 16.5656C9.06753 16.9161 9.16946 17.2165 9.43644 17.9817C9.59057 18.4234 9.80455 19.0505 9.79233 19.7265C9.77927 20.4492 9.51156 21.1855 8.80931 21.8406C8.59704 22.0386 8.28956 22.0963 8.01992 21.9888C4.05446 20.4075 1.25 16.5321 1.25 11.9999C1.25 11.652 1.26655 11.3077 1.29895 10.9679C1.32548 10.6895 1.50467 10.4491 1.7638 10.344Z',
  d12: 'M11.0243 20.7419C6.62586 20.2565 3.20455 16.5278 3.20455 12C3.20455 7.1424 7.1424 3.20454 12 3.20454C16.5278 3.20454 20.2565 6.62586 20.7419 11.0243C20.8012 11.5608 21.233 12 21.7727 12C22.3125 12 22.7546 11.561 22.7062 11.0235C22.2128 5.54403 17.6079 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.6079 5.54403 22.2128 11.0235 22.7062C11.561 22.7546 12 22.3125 12 21.7727C12 21.233 11.5608 20.8012 11.0243 20.7419Z',
  d13: 'M22 12.0247C22 6.48823 17.5228 2 12 2C6.47715 2 2 6.48823 2 12.0247C2 17.2229 5.94668 21.497 11 22',
  d14: 'M16.5027 21.9978H14.002V19.4978L19.4965 14.0049C19.5004 14.001 19.5067 14.001 19.5106 14.0049L21.9972 16.4907C22.0011 16.4946 22.0011 16.501 21.9972 16.5049L16.5027 21.9978Z',
  d15: 'M12 20.7955C11.1773 20.7955 10.3809 20.6825 9.62565 20.4712C9.88274 19.6083 9.69422 18.7255 9.43468 17.9817C9.16769 17.2165 9.06577 16.9161 9.01335 16.5656C8.95863 16.1996 8.9566 15.7706 8.9566 14.7517C8.9566 13.7614 8.84706 12.7989 8.09684 12.1845C7.73639 11.8894 7.2925 11.7301 6.80925 11.6396C6.32711 11.5492 5.75308 11.5181 5.08697 11.5181C4.41958 11.5181 3.8015 11.3053 3.26187 10.9903C3.65643 7.53795 6.04987 4.69281 9.25614 3.64099C9.26338 3.76072 9.27707 3.87958 9.29742 3.99694C9.43481 4.78918 9.88585 5.5356 10.7127 5.93693C11.0279 6.08995 11.1546 6.24443 11.2244 6.37345C11.3081 6.5283 11.3493 6.71585 11.3956 7.02724C11.4006 7.06067 11.4056 7.09535 11.4107 7.13118C11.4958 7.7271 11.6258 8.63716 12.6319 9.28831C13.3114 9.72806 14.1618 9.88584 15.063 9.62067C15.9471 9.3605 16.8187 8.71334 17.6314 7.66136C18.0137 7.16653 18.4997 6.85578 18.998 6.67113C20.1257 8.14987 20.7955 9.99672 20.7955 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75V20.7955Z',
  d16: 'M18.9697 13.4697C19.2626 13.1768 19.7374 13.1768 20.0303 13.4697L22.5303 15.9697C22.8232 16.2626 22.8232 16.7374 22.5303 17.0303L16.8107 22.75H13.25V19.1893L18.9697 13.4697Z',
};

export const IconGlobalEditingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="global-editing-stroke-rounded IconGlobalEditingStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGlobalEditingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="global-editing-duotone-rounded IconGlobalEditingDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGlobalEditingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="global-editing-twotone-rounded IconGlobalEditingTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGlobalEditingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="global-editing-solid-rounded IconGlobalEditingSolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconGlobalEditingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="global-editing-bulk-rounded IconGlobalEditingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGlobalEditingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="global-editing-stroke-sharp IconGlobalEditingStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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

export const IconGlobalEditingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="global-editing-solid-sharp IconGlobalEditingSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGlobalEditing: TheIconSelfPack = {
  name: 'GlobalEditing',
  StrokeRounded: IconGlobalEditingStrokeRounded,
  DuotoneRounded: IconGlobalEditingDuotoneRounded,
  TwotoneRounded: IconGlobalEditingTwotoneRounded,
  SolidRounded: IconGlobalEditingSolidRounded,
  BulkRounded: IconGlobalEditingBulkRounded,
  StrokeSharp: IconGlobalEditingStrokeSharp,
  SolidSharp: IconGlobalEditingSolidSharp,
};