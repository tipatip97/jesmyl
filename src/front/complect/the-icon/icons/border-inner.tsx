import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.3 2.75143C5.26076 2.94471 4.49591 3.28657 3.89124 3.89124C3.28657 4.49591 2.94471 5.26076 2.75143 6.3M17.7 2.75143C18.7392 2.94471 19.5041 3.28657 20.1088 3.89124C20.7134 4.49591 21.0553 5.26076 21.2486 6.3M13.9 2.50495C13.3156 2.5 12.6839 2.5 12 2.5C11.3161 2.5 10.6844 2.5 10.1 2.50495M21.495 10.1C21.5 10.6844 21.5 11.3161 21.5 12C21.5 12.6839 21.5 13.3156 21.495 13.9001M2.50495 10.1C2.5 10.6844 2.5 11.3161 2.5 12C2.5 12.6839 2.5 13.3156 2.50496 13.9001M2.75143 17.7C2.94471 18.7392 3.28657 19.5041 3.89124 20.1088C4.49591 20.7134 5.26076 21.0553 6.3 21.2486M21.2486 17.7C21.0553 18.7392 20.7134 19.5041 20.1088 20.1088C19.5041 20.7134 18.7392 21.0553 17.7 21.2486M13.9 21.495C13.3156 21.5 12.6839 21.5 12 21.5C11.3162 21.5 10.6845 21.5 10.1002 21.495',
  d2: 'M2.5 12H21.5',
  d3: 'M12 2.5L12 21.5',
  d4: 'M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z',
  d5: 'M2.5 12H21.5M12 2.5L12 21.5',
  d6: 'M11.9972 1.5H12.0028C12.6846 1.5 13.3198 1.5 13.9085 1.50499C14.4607 1.50967 14.9046 1.96117 14.9 2.51343C14.8953 3.0657 14.4438 3.5096 13.8915 3.50492C13.3122 3.50001 12.6849 3.5 12 3.5C11.3151 3.5 10.6878 3.50001 10.1085 3.50492C9.55619 3.5096 9.1047 3.0657 9.10002 2.51343C9.09534 1.96117 9.53924 1.50967 10.0915 1.50499C10.6802 1.5 11.3154 1.5 11.9972 1.5ZM7.28314 2.56858C7.38413 3.11155 7.02582 3.63358 6.48285 3.73457C5.57153 3.90406 5.0166 4.1801 4.59835 4.59835C4.1801 5.0166 3.90406 5.57153 3.73457 6.48285C3.63358 7.02582 3.11155 7.38413 2.56858 7.28314C2.0256 7.18216 1.6673 6.66013 1.76828 6.11715C1.98536 4.94998 2.39304 3.97523 3.18414 3.18414C3.97523 2.39304 4.94998 1.98536 6.11715 1.76828C6.66013 1.6673 7.18216 2.0256 7.28314 2.56858ZM16.7169 2.56858C16.8178 2.0256 17.3399 1.6673 17.8828 1.76828C19.05 1.98536 20.0248 2.39304 20.8159 3.18414C21.607 3.97523 22.0146 4.94998 22.2317 6.11715C22.3327 6.66013 21.9744 7.18216 21.4314 7.28314C20.8884 7.38413 20.3664 7.02582 20.2654 6.48285C20.0959 5.57154 19.8199 5.0166 19.4016 4.59835C18.9834 4.1801 18.4285 3.90406 17.5172 3.73457C16.9742 3.63358 16.6159 3.11155 16.7169 2.56858ZM2.51343 9.10004C3.0657 9.10472 3.5096 9.55621 3.50492 10.1085C3.50001 10.6878 3.5 11.3151 3.5 12C3.5 12.685 3.50001 13.3122 3.50492 13.8916C3.5096 14.4439 3.0657 14.8954 2.51343 14.9C1.96117 14.9047 1.50967 14.4608 1.50499 13.9086C1.5 13.3199 1.5 12.6847 1.5 12.0028V11.9972C1.5 11.3154 1.5 10.6802 1.50499 10.0915C1.50967 9.53926 1.96117 9.09535 2.51343 9.10004ZM21.4866 9.10004C22.0388 9.09535 22.4903 9.53926 22.495 10.0915C22.5 10.6803 22.5 11.3157 22.5 11.9977V12.0023C22.5 12.6844 22.5 13.3197 22.495 13.9086C22.4903 14.4608 22.0388 14.9047 21.4866 14.9C20.9343 14.8954 20.4904 14.4439 20.4951 13.8916C20.5 13.3122 20.5 12.685 20.5 12C20.5 11.3151 20.5 10.6878 20.4951 10.1085C20.4904 9.55621 20.9343 9.10472 21.4866 9.10004ZM2.56858 16.7169C3.11155 16.6159 3.63358 16.9742 3.73457 17.5172C3.90406 18.4285 4.1801 18.9834 4.59835 19.4016C5.0166 19.8199 5.57153 20.0959 6.48285 20.2654C7.02582 20.3664 7.38413 20.8884 7.28314 21.4314C7.18216 21.9744 6.66013 22.3327 6.11715 22.2317C4.94998 22.0146 3.97523 21.607 3.18414 20.8159C2.39304 20.0248 1.98536 19.05 1.76828 17.8828C1.6673 17.3399 2.0256 16.8178 2.56858 16.7169ZM21.4314 16.7169C21.9744 16.8178 22.3327 17.3399 22.2317 17.8828C22.0146 19.05 21.607 20.0248 20.8159 20.8159C20.0248 21.607 19.05 22.0146 17.8828 22.2317C17.3399 22.3327 16.8178 21.9744 16.7169 21.4314C16.6159 20.8884 16.9742 20.3664 17.5172 20.2654C18.4285 20.0959 18.9834 19.8199 19.4016 19.4016C19.8199 18.9834 20.0959 18.4285 20.2654 17.5172C20.3664 16.9742 20.8884 16.6159 21.4314 16.7169ZM9.10019 21.4866C9.10487 20.9343 9.55637 20.4904 10.1086 20.4951C10.688 20.5 11.3151 20.5 12 20.5C12.6849 20.5 13.3122 20.5 13.8915 20.4951C14.4438 20.4904 14.8953 20.9343 14.9 21.4866C14.9046 22.0388 14.4607 22.4903 13.9085 22.495C13.3199 22.5 12.6848 22.5 12.0031 22.5H11.9977C11.3157 22.5 10.6804 22.5 10.0917 22.495C9.53941 22.4903 9.09551 22.0388 9.10019 21.4866Z',
  d7: 'M1.5 12C1.5 11.4477 1.94772 11 2.5 11H21.5C22.0523 11 22.5 11.4477 22.5 12C22.5 12.5523 22.0523 13 21.5 13H2.5C1.94772 13 1.5 12.5523 1.5 12Z',
  d8: 'M12 1.5C12.5523 1.5 13 1.94772 13 2.5L13 21.5C13 22.0523 12.5523 22.5 12 22.5C11.4477 22.5 11 22.0523 11 21.5L11 2.5C11 1.94772 11.4477 1.5 12 1.5Z',
  d9: 'M7.28385 2.56733C7.38483 3.1103 7.02653 3.63234 6.48355 3.73332C5.57224 3.90281 5.0173 4.17885 4.59906 4.5971C4.18081 5.01535 3.90476 5.57029 3.73527 6.4816C3.63429 7.02457 3.11226 7.38288 2.56928 7.28189C2.02631 7.18091 1.66801 6.65888 1.76899 6.1159C1.98606 4.94874 2.39375 3.97398 3.18484 3.18289C3.97593 2.3918 4.95069 1.98411 6.11786 1.76704C6.66083 1.66605 7.18286 2.02436 7.28385 2.56733ZM16.7176 2.56733C16.8185 2.02436 17.3406 1.66605 17.8836 1.76704C19.0507 1.98411 20.0255 2.3918 20.8166 3.18289C21.6077 3.97398 22.0153 4.94874 22.2324 6.1159C22.3334 6.65888 21.9751 7.18091 21.4321 7.28189C20.8892 7.38288 20.3671 7.02457 20.2661 6.4816C20.0967 5.57029 19.8206 5.01535 19.4024 4.5971C18.9841 4.17885 18.4292 3.90281 17.5179 3.73332C16.9749 3.63234 16.6166 3.1103 16.7176 2.56733ZM2.56928 16.7156C3.11226 16.6146 3.63429 16.9729 3.73527 17.5159C3.90476 18.4272 4.18081 18.9822 4.59905 19.4004C5.0173 19.8187 5.57224 20.0947 6.48355 20.2642C7.02653 20.3652 7.38483 20.8872 7.28385 21.4302C7.18286 21.9731 6.66083 22.3315 6.11786 22.2305C4.95069 22.0134 3.97593 21.6057 3.18484 20.8146C2.39375 20.0235 1.98606 19.0488 1.76899 17.8816C1.66801 17.3386 2.02631 16.8166 2.56928 16.7156ZM21.4321 16.7156C21.9751 16.8166 22.3334 17.3386 22.2324 17.8816C22.0153 19.0488 21.6077 20.0235 20.8166 20.8146C20.0255 21.6057 19.0507 22.0134 17.8836 22.2305C17.3406 22.3315 16.8185 21.9731 16.7176 21.4302C16.6166 20.8872 16.9749 20.3652 17.5179 20.2642C18.4292 20.0947 18.9841 19.8187 19.4024 19.4004C19.8206 18.9822 20.0967 18.4272 20.2661 17.5159C20.3671 16.9729 20.8892 16.6146 21.4321 16.7156Z',
  d10: 'M11.9972 1.5H12.0028C12.6846 1.5 13.3198 1.5 13.9085 1.50499C14.4607 1.50967 14.9046 1.96117 14.9 2.51343C14.8953 3.0657 14.4438 3.5096 13.8915 3.50492C13.3122 3.50001 12.6849 3.5 12 3.5C11.3151 3.5 10.6878 3.50001 10.1085 3.50492C9.55619 3.5096 9.1047 3.0657 9.10002 2.51343C9.09534 1.96117 9.53924 1.50967 10.0915 1.50499C10.6802 1.5 11.3154 1.5 11.9972 1.5ZM2.51343 9.10004C3.0657 9.10472 3.5096 9.55621 3.50492 10.1085C3.50001 10.6878 3.5 11.3151 3.5 12C3.5 12.685 3.50001 13.3122 3.50492 13.8916C3.5096 14.4439 3.0657 14.8954 2.51343 14.9C1.96117 14.9047 1.50967 14.4608 1.50499 13.9086C1.5 13.3199 1.5 12.6847 1.5 12.0028V11.9972C1.5 11.3154 1.5 10.6802 1.50499 10.0915C1.50967 9.53926 1.96117 9.09535 2.51343 9.10004ZM21.4866 9.10004C22.0388 9.09535 22.4903 9.53926 22.495 10.0915C22.5 10.6803 22.5 11.3157 22.5 11.9977V12.0023C22.5 12.6844 22.5 13.3197 22.495 13.9086C22.4903 14.4608 22.0388 14.9047 21.4866 14.9C20.9343 14.8954 20.4904 14.4439 20.4951 13.8916C20.5 13.3122 20.5 12.685 20.5 12C20.5 11.3151 20.5 10.6878 20.4951 10.1085C20.4904 9.55621 20.9343 9.10472 21.4866 9.10004ZM9.10019 21.4866C9.10487 20.9343 9.55637 20.4904 10.1086 20.4951C10.688 20.5 11.3151 20.5 12 20.5C12.6849 20.5 13.3122 20.5 13.8915 20.4951C14.4438 20.4904 14.8953 20.9343 14.9 21.4866C14.9046 22.0388 14.4607 22.4903 13.9085 22.495C13.3199 22.5 12.6848 22.5 12.0031 22.5H11.9977C11.3157 22.5 10.6804 22.5 10.0917 22.495C9.53941 22.4903 9.09551 22.0388 9.10019 21.4866Z',
  d11: 'M3 17L3 21H7M21 17V21H17M21 7V3L17 3M3 7L3 3L7 3M3 15L3 9M21 9V15M9 3L15 3M15 21H9',
  d12: 'M3 12H21M12 3L12 21',
  d13: 'M20 4H17V2L21 2C21.2652 2 21.5196 2.10536 21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3V7H20V4ZM15 4L9 4V2L15 2V4ZM4 4L7 4V2L3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3L2 7H4V4ZM20 15V9H22V15H20ZM4 9L4 15H2L2 9H4ZM20 20V17H22V21C22 21.5523 21.5523 22 21 22H17V20H20ZM4 20L4 17H2L2 21C2 21.5523 2.44772 22 3 22H7V20H4ZM9 20H15V22H9V20Z',
  d14: 'M11 11L11 3H13V11H21V13H13V21H11L11 13H3V11H11Z',
};

export const IconBorderInnerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-inner-stroke-rounded IconBorderInnerStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBorderInnerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-inner-duotone-rounded IconBorderInnerDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderInnerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-inner-twotone-rounded IconBorderInnerTwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderInnerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-inner-solid-rounded IconBorderInnerSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconBorderInnerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-inner-bulk-rounded IconBorderInnerBulkRounded"
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

export const IconBorderInnerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-inner-stroke-sharp IconBorderInnerStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderInnerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-inner-solid-sharp IconBorderInnerSolidSharp"
    >
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

export const iconPackOfBorderInner: TheIconSelfPack = {
  name: 'BorderInner',
  StrokeRounded: IconBorderInnerStrokeRounded,
  DuotoneRounded: IconBorderInnerDuotoneRounded,
  TwotoneRounded: IconBorderInnerTwotoneRounded,
  SolidRounded: IconBorderInnerSolidRounded,
  BulkRounded: IconBorderInnerBulkRounded,
  StrokeSharp: IconBorderInnerStrokeSharp,
  SolidSharp: IconBorderInnerSolidSharp,
};