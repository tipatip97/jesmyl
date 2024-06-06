import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.6119 5.00008L10.0851 7M12.2988 2.76313C12.713 3.49288 12.4672 4.42601 11.7499 4.84733C11.0326 5.26865 10.1153 5.01862 9.70118 4.28887C9.28703 3.55912 9.53281 2.62599 10.2501 2.20467C10.9674 1.78334 11.8847 2.03337 12.2988 2.76313Z',
  d2: 'M13 21.998C12.031 20.8176 10.5 18 8.5 18C7.20975 18.1059 6.53573 19.3611 5.84827 20.3287M5.84827 20.3287C5.45174 19.961 5.30251 19.4126 5.00406 18.3158L3.26022 11.9074C2.5584 9.32827 2.20749 8.0387 2.80316 7.02278C3.39882 6.00686 4.70843 5.66132 7.32766 4.97025L9.5 4.39708M5.84827 20.3287C6.2448 20.6965 6.80966 20.8103 7.9394 21.0379L12.0813 21.8725C12.9642 22.0504 12.9721 22.0502 13.8426 21.8205L16.6723 21.0739C19.2916 20.3828 20.6012 20.0373 21.1968 19.0214C21.7925 18.0055 21.4416 16.7159 20.7398 14.1368L19.0029 7.75375C18.301 5.17462 17.9501 3.88506 16.9184 3.29851C16.0196 2.78752 14.9098 2.98396 12.907 3.5',
  d3: 'M9.72979 4.33724L7.32766 4.97025C4.70843 5.66132 3.39882 6.00686 2.80316 7.02278C2.20749 8.0387 2.5584 9.32827 3.26022 11.9074L5.00406 18.3158C5.30251 19.4126 5.45174 19.961 5.84827 20.3287L6.34613 19.6063C6.89194 18.8274 7.51707 18.0806 8.49939 18C10.1043 18 11.4072 19.8143 12.36 21.1411C12.5946 21.4677 12.808 21.7648 12.9994 21.998L16.6723 21.0739C19.2916 20.3828 20.6012 20.0373 21.1968 19.0214C21.7925 18.0055 21.4416 16.7159 20.7398 14.1368L19.0029 7.75375C18.301 5.17462 17.9501 3.88506 16.9184 3.29851C16.0196 2.78752 14.9098 2.98396 12.907 3.5L12.4978 3.60783C12.471 4.10532 12.2056 4.57963 11.7499 4.84733C11.0486 5.2592 10.1564 5.0295 9.72979 4.33724Z',
  d4: 'M11.6465 3.14537C11.4359 2.77424 10.981 2.65724 10.6299 2.86343C10.2711 3.07417 10.1386 3.55228 10.3534 3.93075C10.564 4.30188 11.0189 4.41888 11.37 4.21269C11.7288 4.00195 11.8613 3.52384 11.6465 3.14537ZM9.87023 1.57003C10.9538 0.933575 12.3334 1.31663 12.951 2.40501C13.5645 3.48604 13.2055 4.87419 12.1297 5.50609C11.8278 5.68341 11.5029 5.7816 11.1779 5.80744L10.8103 7.20309C10.7048 7.60364 10.2946 7.84283 9.89403 7.73733C9.49348 7.63183 9.25429 7.22159 9.35979 6.82104L9.72967 5.41672C9.45793 5.22901 9.22308 4.97812 9.04884 4.67111C8.43534 3.59008 8.79438 2.20193 9.87023 1.57003Z',
  d5: 'M7.55525 4.33072C7.58997 4.37406 7.61587 4.45509 7.66767 4.61716C7.74094 4.84639 7.83863 5.07111 7.96154 5.28769C8.01743 5.38616 8.07745 5.48104 8.1413 5.5722C8.23671 5.70842 8.28441 5.77653 8.29605 5.84168C8.30768 5.90684 8.28898 5.97783 8.25158 6.11983L8.15085 6.50228C7.86952 7.57043 8.50735 8.66439 9.57549 8.94572C10.6436 9.22705 11.7376 8.58922 12.0189 7.52108L12.1155 7.15448C12.1531 7.01181 12.1719 6.94047 12.2143 6.88938C12.2568 6.83828 12.3324 6.80253 12.4837 6.73102C12.578 6.68644 12.671 6.63729 12.7626 6.58354C14.0247 5.84224 14.6459 4.43972 14.4703 3.08059C14.4251 2.73028 14.4024 2.55513 14.4793 2.45643C14.5561 2.35773 14.7023 2.34026 14.9945 2.3053C15.0878 2.29413 15.1791 2.285 15.2685 2.27805C16.004 2.22091 16.6692 2.30583 17.289 2.6582C18.004 3.06469 18.4368 3.70064 18.7748 4.49787C19.0992 5.263 19.3734 6.271 19.712 7.5154L21.4779 14.0048C21.8165 15.2491 22.0908 16.2571 22.1985 17.0796C22.3106 17.9363 22.2593 18.7037 21.8438 19.4124C21.4293 20.1194 20.7835 20.5439 19.9785 20.8748C19.2031 21.1935 18.1811 21.4632 16.9159 21.797L14.6454 22.3961C14.4602 22.4449 14.3676 22.4694 14.2806 22.4387C14.1937 22.4081 14.1383 22.3331 14.0276 22.1832C13.9265 22.0462 13.8147 21.8916 13.6913 21.721L13.6913 21.721C13.5934 21.5857 13.4884 21.4405 13.3757 21.2861C12.9897 20.7573 12.5345 20.1502 12.0416 19.5766C11.5517 19.0064 11.0045 18.4453 10.429 18.0216C9.86468 17.6061 9.19131 17.2617 8.46373 17.2617H8.4324L8.40119 17.2643C7.89509 17.3066 7.44527 17.537 7.07414 17.8054C6.69865 18.077 6.35377 18.4237 6.04992 18.7743C5.72818 19.1456 5.42737 19.552 5.16836 19.9197C5.04027 20.1015 4.77051 20.0859 4.69008 19.8786C4.5516 19.5216 4.43094 19.0781 4.28998 18.56L2.52196 12.0627C2.18337 10.8184 1.90906 9.81044 1.80141 8.98788C1.6893 8.1312 1.74059 7.3638 2.15611 6.65511C2.57062 5.94815 3.21638 5.52358 4.02138 5.19269C4.79677 4.87397 5.81878 4.60433 7.08393 4.27055C7.22689 4.23288 7.29837 4.21404 7.35357 4.22005C7.44022 4.22948 7.50076 4.2627 7.55525 4.33072ZM6.05922 21.2697C6.03905 21.2992 6.05079 21.3398 6.08391 21.3532C6.18533 21.3944 6.2897 21.4307 6.39683 21.4639C6.76562 21.5782 7.22109 21.67 7.75569 21.7777L11.9926 22.6314C12.1248 22.6581 12.2476 22.683 12.3648 22.7036C12.4437 22.7175 12.497 22.6294 12.45 22.5645L12.4499 22.5644C12.357 22.436 12.2613 22.3037 12.1641 22.1705C11.7844 21.6502 11.3572 21.0817 10.9039 20.5541C10.4475 20.023 9.98483 19.5573 9.53963 19.2295C9.13213 18.9295 8.80303 18.7922 8.55103 18.7663C8.53018 18.7642 8.51976 18.7631 8.49514 18.7646C8.47051 18.7661 8.46153 18.7682 8.44355 18.7723C8.31882 18.8009 8.15584 18.8743 7.95312 19.0209C7.70643 19.1993 7.44684 19.4528 7.1835 19.7567C6.75661 20.2493 6.37843 20.8026 6.05924 21.2696L6.05922 21.2697Z',
  d6: 'M7.55525 4.33072C7.58997 4.37406 7.61587 4.45509 7.66767 4.61716C7.74094 4.84639 7.83863 5.07111 7.96154 5.28769C8.01743 5.38616 8.07745 5.48104 8.1413 5.5722C8.23671 5.70842 8.28441 5.77653 8.29605 5.84168C8.30768 5.90684 8.28898 5.97783 8.25158 6.11983L8.15085 6.50228C7.86952 7.57043 8.50735 8.66439 9.57549 8.94572C10.6436 9.22705 11.7376 8.58922 12.0189 7.52108L12.1155 7.15448C12.1531 7.01181 12.1719 6.94047 12.2143 6.88938C12.2568 6.83828 12.3324 6.80253 12.4837 6.73102C12.578 6.68644 12.671 6.63729 12.7626 6.58354C14.0247 5.84224 14.6459 4.43972 14.4703 3.08059C14.4251 2.73028 14.4024 2.55513 14.4793 2.45643C14.5561 2.35773 14.7023 2.34026 14.9945 2.3053C15.0878 2.29413 15.1791 2.285 15.2685 2.27805C16.004 2.22091 16.6692 2.30583 17.289 2.6582C18.004 3.06469 18.4368 3.70064 18.7748 4.49787C19.0992 5.263 19.3734 6.271 19.712 7.5154L21.4779 14.0048C21.8165 15.2491 22.0908 16.2571 22.1985 17.0796C22.3106 17.9363 22.2593 18.7037 21.8438 19.4124C21.4293 20.1194 20.7835 20.5439 19.9785 20.8748C19.2031 21.1935 18.1811 21.4632 16.9159 21.797L14.6454 22.3961C14.4602 22.4449 14.3676 22.4694 14.2806 22.4387C14.1937 22.4081 14.1383 22.3331 14.0276 22.1832C13.8463 21.9375 13.6305 21.6351 13.3757 21.2861C12.9897 20.7573 12.5345 20.1502 12.0416 19.5766C11.5517 19.0064 11.0045 18.4453 10.429 18.0216C9.35948 17.2341 8.18714 17.0006 7.07414 17.8054C6.69865 18.077 6.35377 18.4237 6.04992 18.7743C5.72818 19.1456 5.42737 19.552 5.16836 19.9197C5.04027 20.1015 4.77051 20.0859 4.69008 19.8786C4.5516 19.5216 4.43094 19.0781 4.28998 18.56L2.52196 12.0627C2.18337 10.8184 1.90906 9.81044 1.80141 8.98788C1.6893 8.1312 1.74059 7.3638 2.15611 6.65511C2.57062 5.94815 3.21638 5.52358 4.02138 5.19269C4.79677 4.87397 5.81878 4.60433 7.08393 4.27055C7.22689 4.23288 7.29837 4.21404 7.35357 4.22005C7.44022 4.22948 7.50076 4.2627 7.55525 4.33072Z',
  d7: 'M6.05923 21.2697C6.03906 21.2992 6.05079 21.3398 6.08391 21.3532C6.18533 21.3944 6.2897 21.4307 6.39683 21.4639C6.76562 21.5782 7.22109 21.67 7.75569 21.7777L11.9926 22.6314C12.1248 22.6581 12.2476 22.683 12.3648 22.7036C12.4437 22.7175 12.497 22.6294 12.45 22.5645C12.3571 22.4361 12.2613 22.3037 12.1641 22.1705C11.7844 21.6502 11.3572 21.0817 10.9039 20.5541C10.4475 20.023 9.98483 19.5573 9.53963 19.2295C9.26365 19.0263 8.86145 18.742 8.49514 18.7646C7.98328 18.7961 7.48504 19.4087 7.1835 19.7567C6.75661 20.2493 6.37842 20.8026 6.05923 21.2697Z',
  d8: 'M6.05875 21.2719C6.03858 21.3014 6.05032 21.3421 6.08343 21.3555C6.18486 21.3967 6.28922 21.433 6.39635 21.4662C6.76514 21.5805 7.22061 21.6723 7.75522 21.78L11.9921 22.6337C12.1243 22.6604 12.2472 22.6853 12.3643 22.7059C12.4432 22.7198 12.4965 22.6317 12.4495 22.5668C12.3566 22.4383 12.2609 22.3059 12.1637 22.1727C11.7839 21.6525 11.3567 21.084 10.9034 20.5564C10.4471 20.0253 9.98436 19.5596 9.53915 19.2318C9.26317 19.0286 8.86098 18.7443 8.49466 18.7669C7.9828 18.7984 7.48457 19.411 7.18302 19.759C6.75613 20.2516 6.37794 20.8049 6.05875 21.2719Z',
  d9: 'M9.61186 5.00008L9.08511 7M11.2988 2.76313C11.713 3.49288 11.4672 4.42601 10.7499 4.84733C10.0326 5.26865 9.11532 5.01862 8.70118 4.28887C8.28703 3.55912 8.53281 2.62599 9.25013 2.20467C9.96744 1.78334 10.8847 2.03337 11.2988 2.76313Z',
  d10: 'M9.29959 4.99536L2 6.99071L4.68939 17.23L12.788 22L21 19.7552L16.5992 3L11.0765 4.50963M12.6953 21.6472L11.0765 15.4841L5.06583 17.1271',
  d11: 'M11.1462 3.12867C10.9356 2.75852 10.4807 2.64183 10.1296 2.84747C9.77083 3.05766 9.63833 3.53451 9.85312 3.91198C10.0637 4.28212 10.5186 4.39882 10.8697 4.19317C11.2285 3.98299 11.361 3.50614 11.1462 3.12867ZM9.36994 1.55749C10.4535 0.922724 11.8331 1.30477 12.4508 2.39027C13.0643 3.46844 12.7052 4.85292 11.6294 5.48315C11.3275 5.66001 11.0026 5.75793 10.6776 5.7837L10.31 7.17566L8.85951 6.79462L9.22938 5.39402C8.95765 5.2068 8.72279 4.95658 8.54856 4.65038C7.93506 3.5722 8.2941 2.18773 9.36994 1.55749Z',
  d12: 'M4.62287 17.9926L12.7214 22.7499L11.01 16.2513L4.62287 17.9926Z',
  d13: 'M7.27918 4.89714L2.30224 6.254C1.90551 6.36216 1.67012 6.76882 1.77461 7.16557L4.24453 16.5445L12.0757 14.4095L14.199 22.4722L21.6978 20.4279C22.0945 20.3197 22.3299 19.913 22.2254 19.5163L17.8246 2.80536C17.7737 2.61223 17.6475 2.44739 17.4742 2.34756C17.3008 2.24773 17.0945 2.22118 16.9014 2.27383L13.9712 3.07269C14.1431 4.42553 13.5218 5.81999 12.2624 6.55777C12.0787 6.66538 11.8888 6.75446 11.695 6.82543L11.2004 8.69841L7.3323 7.68231L7.83067 5.79514C7.69359 5.63263 7.56969 5.45572 7.46137 5.26535C7.39285 5.14492 7.33216 5.02198 7.27918 4.89714Z',
};

export const IconStickyNote01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sticky-note-01-stroke-rounded IconStickyNote01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconStickyNote01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sticky-note-01-duotone-rounded IconStickyNote01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconStickyNote01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sticky-note-01-twotone-rounded IconStickyNote01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconStickyNote01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sticky-note-01-solid-rounded IconStickyNote01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStickyNote01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sticky-note-01-bulk-rounded IconStickyNote01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStickyNote01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sticky-note-01-stroke-sharp IconStickyNote01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStickyNote01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sticky-note-01-solid-sharp IconStickyNote01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfStickyNote01: TheIconSelfPack = {
  name: 'StickyNote01',
  StrokeRounded: IconStickyNote01StrokeRounded,
  DuotoneRounded: IconStickyNote01DuotoneRounded,
  TwotoneRounded: IconStickyNote01TwotoneRounded,
  SolidRounded: IconStickyNote01SolidRounded,
  BulkRounded: IconStickyNote01BulkRounded,
  StrokeSharp: IconStickyNote01StrokeSharp,
  SolidSharp: IconStickyNote01SolidSharp,
};