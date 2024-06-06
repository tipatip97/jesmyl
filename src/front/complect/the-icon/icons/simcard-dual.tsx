import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 13.8868C2 10.2256 2 8.39501 3.07857 7.23516C3.11842 7.19231 3.15919 7.15037 3.20085 7.10939C4.32848 6 6.10821 6 9.66768 6C10.5112 6 10.9176 6.003 11.3044 6.15149C11.6769 6.29448 11.9889 6.56191 12.6129 7.09679L14.3209 8.56074C15.1466 9.26848 15.5594 9.62236 15.7797 10.1061C16 10.5899 16 11.1427 16 12.2482V14.8C16 17.7998 16 19.2997 15.2573 20.3511C15.0174 20.6907 14.7271 20.9894 14.3969 21.2361C13.3747 22 11.9165 22 9 22C6.08354 22 4.62531 22 3.60306 21.2361C3.27291 20.9894 2.98258 20.6907 2.74271 20.3511C2 19.2997 2 17.7998 2 14.8V13.8868Z',
  d2: 'M15.9779 16C18.4869 16 19.7414 16 20.6209 15.3316C20.9049 15.1157 21.1547 14.8544 21.361 14.5572C22 13.6372 22 12.3248 22 9.7V7.46718C22 6.49983 22 6.01616 21.8105 5.59286C21.621 5.16956 21.2658 4.85992 20.5554 4.24065L19.0861 2.95969C18.5492 2.49168 18.2808 2.25767 17.9604 2.13256C17.6276 2.00263 17.278 2 16.5523 2C13.4901 2 11.959 2 10.9889 2.97071C10.953 3.00658 10.918 3.04327 10.8837 3.08076C10.2922 3.72771 10.0777 4.61316 10 6',
  d3: 'M9.75138 5.25002C10.502 5.24975 11.0475 5.24956 11.5732 5.45135C12.069 5.64169 12.4752 5.99027 13.0158 6.45427L13.101 6.52739L14.809 7.99134L14.9189 8.08544C15.6374 8.70033 16.172 9.15788 16.4623 9.79535C16.7513 10.4301 16.7508 11.1398 16.7501 12.1014L16.75 12.2482V14.8434C16.75 16.3065 16.75 17.4641 16.653 18.3848C16.5537 19.3274 16.3459 20.1099 15.8699 20.7839C15.585 21.1872 15.2396 21.5427 14.8459 21.8369C14.1848 22.3309 13.4152 22.547 12.4919 22.6499C11.5934 22.7501 10.4652 22.75 9.04557 22.75H9.04555H8.95445H8.95443C7.53483 22.75 6.40661 22.7501 5.50814 22.6499C4.58475 22.547 3.81518 22.3309 3.1541 21.8369C2.76037 21.5427 2.41498 21.1872 2.13012 20.7839C1.65407 20.1099 1.44626 19.3274 1.34697 18.3848C1.24998 17.4641 1.24999 16.3065 1.25 14.8434V14.8434V13.8334V13.8334C1.24999 12.0481 1.24998 10.636 1.39081 9.5284C1.53539 8.39143 1.83942 7.46638 2.52935 6.72446C2.57675 6.67348 2.62527 6.62358 2.67486 6.57479C3.39954 5.86184 4.3075 5.54538 5.42233 5.39541C6.50315 5.25001 7.87948 5.25002 9.61175 5.25004L9.66768 5.25004L9.75138 5.25002Z',
  d4: 'M12.1103 4.05646C12.8541 4.34254 13.439 4.84692 13.9139 5.2565L13.9922 5.32397L15.8937 6.95695L15.9966 7.04495C16.6286 7.58515 17.396 8.24093 17.8269 9.18922C18.2542 10.1293 18.2518 11.1408 18.2499 11.9851L18.2496 12.1237L18.2495 14.9438C18.2495 15.3474 18.2496 15.7362 18.2471 16.1092C18.245 16.415 18.244 16.5679 18.3429 16.658C18.4418 16.7481 18.5874 16.7334 18.8788 16.7042C18.9178 16.7003 18.9564 16.6962 18.9945 16.6919C19.7998 16.6004 20.4842 16.4068 21.0743 15.9574C21.4218 15.6928 21.726 15.3735 21.9766 15.012C22.3986 14.4032 22.5796 13.7005 22.6657 12.8679C22.7496 12.0564 22.7495 11.038 22.7495 9.75895L22.7496 7.3412C22.7504 6.50801 22.7509 5.86813 22.4945 5.29434C22.2362 4.71623 21.7604 4.30137 21.1493 3.76867L19.4984 2.32658C19.0405 1.92598 18.6775 1.60836 18.2327 1.43434C17.76 1.24943 17.2699 1.24969 16.635 1.25003L16.4959 1.25006C15.0123 1.25004 13.8216 1.25002 12.8839 1.37857C11.9108 1.51198 11.1033 1.79584 10.4579 2.44294C10.4142 2.48676 10.3715 2.53157 10.3297 2.57733C10.2107 2.70772 10.1047 2.84435 10.0103 2.98733C9.81557 3.28217 9.71819 3.42959 9.79683 3.58502C9.87547 3.74045 10.0793 3.75071 10.4869 3.77122C11.0289 3.7985 11.6259 3.87014 12.1103 4.05646Z',
  d5: 'M2.03323 6.07604L2.00879 21.8846C2.0087 21.9396 2.05358 21.9843 2.10898 21.9843H15.9925C16.048 21.9843 16.0929 21.9395 16.0927 21.8844L16.0517 9.98354L11.4222 5.97656H2.13342C2.07815 5.97656 2.03332 6.02108 2.03323 6.07604Z',
  d6: 'M10.04 5.26571V2.08694C10.04 2.03191 10.0849 1.9873 10.1402 1.9873H18.027L22.0131 5.46391V15.876C22.0131 15.931 21.9682 15.9756 21.9129 15.9756H16.7406',
  d7: 'M1.25 6C1.25 5.58579 1.58579 5.25 2 5.25H11.7852L16.75 9.66324V22C16.75 22.4142 16.4142 22.75 16 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V6Z',
  d8: 'M10 1.25C9.58579 1.25 9.25 1.58579 9.25 2V4H12.2604L18 9.10191V16.75H22C22.4142 16.75 22.75 16.4142 22.75 16V5.15967L18.2818 1.25H10Z',
};

export const IconSimcardDualStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-dual-stroke-rounded IconSimcardDualStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSimcardDualDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-dual-duotone-rounded IconSimcardDualDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSimcardDualTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-dual-twotone-rounded IconSimcardDualTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSimcardDualSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-dual-solid-rounded IconSimcardDualSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSimcardDualBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-dual-bulk-rounded IconSimcardDualBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSimcardDualStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-dual-stroke-sharp IconSimcardDualStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSimcardDualSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-dual-solid-sharp IconSimcardDualSolidSharp"
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

export const iconPackOfSimcardDual: TheIconSelfPack = {
  name: 'SimcardDual',
  StrokeRounded: IconSimcardDualStrokeRounded,
  DuotoneRounded: IconSimcardDualDuotoneRounded,
  TwotoneRounded: IconSimcardDualTwotoneRounded,
  SolidRounded: IconSimcardDualSolidRounded,
  BulkRounded: IconSimcardDualBulkRounded,
  StrokeSharp: IconSimcardDualStrokeSharp,
  SolidSharp: IconSimcardDualSolidSharp,
};