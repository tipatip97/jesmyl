import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 3H11C6.75736 3 4.63604 3 3.31802 4.31802C2 5.63604 2 7.75736 2 12C2 16.2426 2 18.364 3.31802 19.682C4.63604 21 6.75736 21 11 21H13C17.2426 21 19.364 21 20.682 19.682C22 18.364 22 16.2426 22 12C22 7.75736 22 5.63604 20.682 4.31802C19.364 3 17.2426 3 13 3Z',
  d2: 'M6 14L7.75464 10.0877C8.07987 9.36258 8.24249 9 8.5 9C8.75751 9 8.92013 9.36258 9.24536 10.0877L11 14M14 14V12M14 12V10.2C14 9.63431 14 9.35147 14.1757 9.17574C14.3515 9 14.6343 9 15.2 9H16.5C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12M14 12H16.5M16.5 12L17.5 14',
  d3: 'M13.0569 2.25H13.057C15.13 2.24999 16.7623 2.24998 18.0377 2.42144C19.3462 2.59737 20.3907 2.9661 21.2123 3.78769C22.0339 4.60928 22.4026 5.65376 22.5786 6.96234C22.75 8.23769 22.75 9.87002 22.75 11.9431V12.0569C22.75 14.13 22.75 15.7623 22.5786 17.0377C22.4026 18.3462 22.0339 19.3907 21.2123 20.2123C20.3907 21.0339 19.3462 21.4026 18.0377 21.5786C16.7623 21.75 15.13 21.75 13.0569 21.75H10.9431C8.87002 21.75 7.23769 21.75 5.96234 21.5786C4.65376 21.4026 3.60928 21.0339 2.78769 20.2123C1.9661 19.3907 1.59737 18.3462 1.42144 17.0377C1.24998 15.7623 1.24999 14.13 1.25 12.057V12.0569V11.9431V11.943C1.24999 9.87001 1.24998 8.23769 1.42144 6.96234C1.59737 5.65376 1.9661 4.60928 2.78769 3.78769C3.60928 2.9661 4.65376 2.59737 5.96234 2.42144C7.23769 2.24998 8.87001 2.24999 10.943 2.25H10.9431H13.0569ZM15.1628 8.75001C14.9128 8.74994 14.6562 8.74986 14.4419 8.77867C14.1953 8.81182 13.896 8.89498 13.6456 9.14542C13.3951 9.39587 13.312 9.69516 13.2788 9.94172C13.25 10.156 13.2501 10.4126 13.2502 10.6626L13.2502 14.5C13.2502 14.9142 13.586 15.25 14.0002 15.25C14.4144 15.25 14.7502 14.9142 14.7502 14.5V13.85C14.7502 13.5672 14.7502 13.4257 14.8381 13.3379C14.9259 13.25 15.0673 13.25 15.3502 13.25H15.6658C15.8463 13.25 15.9365 13.25 16.009 13.2948C16.0815 13.3396 16.1218 13.4203 16.2025 13.5817L16.8294 14.8354C17.0146 15.2059 17.4651 15.3561 17.8356 15.1708C18.2061 14.9856 18.3562 14.5351 18.171 14.1646L17.8356 13.4938C17.7229 13.2684 17.6665 13.1557 17.6839 13.0579C17.7012 12.9602 17.8154 12.8525 18.0438 12.637C18.4787 12.2268 18.7502 11.6451 18.7502 11C18.7502 9.75737 17.7428 8.75001 16.5002 8.75001L15.1628 8.75001ZM10.3159 14.8069C10.4854 15.1849 10.9292 15.3538 11.3071 15.1843C11.685 15.0148 11.854 14.571 11.6845 14.1931L9.91044 10.2375L9.91042 10.2375C9.76484 9.91269 9.62468 9.60001 9.48317 9.37396C9.35096 9.1628 9.05096 8.75001 8.50019 8.75001C7.94941 8.75001 7.64941 9.1628 7.5172 9.37396C7.37568 9.60002 7.23552 9.9127 7.08994 10.2375L5.31586 14.1931C5.14635 14.571 5.31533 15.0148 5.69327 15.1843C6.07121 15.3538 6.51501 15.1849 6.68451 14.8069L7.95273 11.9793C8.18821 11.4543 8.30595 11.1918 8.50019 11.1918C8.69442 11.1918 8.81216 11.4543 9.04764 11.9793L9.04764 11.9793L10.3159 14.8069ZM16.5 11.75H15.35C15.0672 11.75 14.9257 11.75 14.8379 11.6621C14.75 11.5743 14.75 11.4328 14.75 11.15V10.7C14.75 10.5558 14.75 10.4423 14.7525 10.3449C14.7538 10.2943 14.7943 10.2538 14.8449 10.2525C14.9423 10.25 15.0558 10.25 15.2 10.25H16.5C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75Z',
  d4: 'M13.057 2.25H13.0569H10.9431H10.943C8.87001 2.24999 7.23769 2.24998 5.96234 2.42144C4.65376 2.59737 3.60928 2.9661 2.78769 3.78769C1.9661 4.60928 1.59737 5.65376 1.42144 6.96234C1.24998 8.23769 1.24999 9.87001 1.25 11.943V11.9431V12.0569V12.057C1.24999 14.13 1.24998 15.7623 1.42144 17.0377C1.59737 18.3462 1.9661 19.3907 2.78769 20.2123C3.60928 21.0339 4.65376 21.4026 5.96234 21.5786C7.23769 21.75 8.87002 21.75 10.9431 21.75H13.0569C15.13 21.75 16.7623 21.75 18.0377 21.5786C19.3462 21.4026 20.3907 21.0339 21.2123 20.2123C22.0339 19.3907 22.4026 18.3462 22.5786 17.0377C22.75 15.7623 22.75 14.13 22.75 12.0569V11.9431C22.75 9.87002 22.75 8.23769 22.5786 6.96234C22.4026 5.65376 22.0339 4.60928 21.2123 3.78769C20.3907 2.9661 19.3462 2.59737 18.0377 2.42144C16.7623 2.24998 15.13 2.24999 13.057 2.25Z',
  d5: 'M14.4419 8.77867C14.6562 8.74986 14.9128 8.74994 15.1628 8.75001L16.5002 8.75001C17.7428 8.75001 18.7502 9.75737 18.7502 11C18.7502 11.6451 18.4787 12.2268 18.0438 12.637C17.8154 12.8525 17.7012 12.9602 17.6839 13.0579C17.6665 13.1557 17.7229 13.2684 17.8356 13.4938L18.171 14.1646C18.3562 14.5351 18.2061 14.9856 17.8356 15.1708C17.4651 15.3561 17.0146 15.2059 16.8294 14.8354L16.2025 13.5817C16.1218 13.4203 16.0815 13.3396 16.009 13.2948C15.9365 13.25 15.8463 13.25 15.6658 13.25H15.3502C15.0673 13.25 14.9259 13.25 14.8381 13.3379C14.7502 13.4257 14.7502 13.5672 14.7502 13.85V14.5C14.7502 14.9142 14.4144 15.25 14.0002 15.25C13.586 15.25 13.2502 14.9142 13.2502 14.5L13.2502 10.6626C13.2501 10.4126 13.25 10.156 13.2788 9.94172C13.312 9.69516 13.3951 9.39587 13.6456 9.14542C13.896 8.89498 14.1953 8.81182 14.4419 8.77867ZM15.3502 11.75H16.5002C16.9145 11.75 17.2502 11.4142 17.2502 11C17.2502 10.5858 16.9145 10.25 16.5002 10.25H15.2002C15.056 10.25 14.9426 10.25 14.8452 10.2525C14.7945 10.2538 14.754 10.2943 14.7528 10.3449C14.7503 10.4423 14.7502 10.5558 14.7502 10.7V11.15C14.7502 11.4328 14.7502 11.5743 14.8381 11.6621C14.926 11.75 15.0674 11.75 15.3502 11.75Z',
  d6: 'M11.3071 15.1843C10.9292 15.3538 10.4854 15.1849 10.3159 14.8069L9.04764 11.9793C8.81216 11.4543 8.69442 11.1918 8.50019 11.1918C8.30595 11.1918 8.18821 11.4543 7.95273 11.9793L6.68451 14.8069C6.51501 15.1849 6.07121 15.3538 5.69327 15.1843C5.31533 15.0148 5.14635 14.571 5.31586 14.1931L7.08994 10.2375C7.23552 9.9127 7.37568 9.60002 7.5172 9.37396C7.64941 9.1628 7.94941 8.75001 8.50019 8.75001C9.05096 8.75001 9.35096 9.1628 9.48317 9.37396C9.62468 9.60001 9.76485 9.91269 9.91042 10.2375L11.6845 14.1931C11.854 14.571 11.685 15.0148 11.3071 15.1843Z',
  d7: 'M22 3.5H2V20.5H22V3.5Z',
  d8: 'M5.98926 15.0346L8.41513 9.08016C8.44908 8.99684 8.5672 8.99723 8.6006 9.08077L10.9808 15.0348M14.0001 11.9977H16.5084C17.3526 11.9977 18.0301 11.3004 18.0059 10.4565C17.9825 9.64621 17.319 9.00146 16.5084 9.00146H14.0001V14.9975M15.5037 11.9977L18.0332 15.0304',
  d9: 'M2 2.75C1.58579 2.75 1.25 3.08579 1.25 3.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H22C22.4142 21.25 22.75 20.9142 22.75 20.5V3.5C22.75 3.08579 22.4142 2.75 22 2.75H2ZM9.19321 8.71154C9.07676 8.43205 8.80368 8.25 8.5009 8.25C8.19813 8.25 7.92505 8.43205 7.80859 8.71154L5.30859 14.7115L6.69321 15.2885L8.5009 10.95L10.3086 15.2885L11.6932 14.7115L9.19321 8.71154ZM16.5009 8.25H13.2509V15H14.7509V12.75H15.1496L17.4247 15.4801L18.5771 14.5199L17.0466 12.6834C18.0256 12.4395 18.7509 11.5544 18.7509 10.5C18.7509 9.25736 17.7435 8.25 16.5009 8.25ZM16.5009 11.25H14.7509V9.75H16.5009C16.9151 9.75 17.2509 10.0858 17.2509 10.5C17.2509 10.9142 16.9151 11.25 16.5009 11.25Z',
};

export const IconAugmentedRealityArStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="augmented-reality-ar-stroke-rounded IconAugmentedRealityArStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAugmentedRealityArDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="augmented-reality-ar-duotone-rounded IconAugmentedRealityArDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAugmentedRealityArTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="augmented-reality-ar-twotone-rounded IconAugmentedRealityArTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAugmentedRealityArSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="augmented-reality-ar-solid-rounded IconAugmentedRealityArSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAugmentedRealityArBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="augmented-reality-ar-bulk-rounded IconAugmentedRealityArBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAugmentedRealityArStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="augmented-reality-ar-stroke-sharp IconAugmentedRealityArStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAugmentedRealityArSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="augmented-reality-ar-solid-sharp IconAugmentedRealityArSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAugmentedRealityAr: TheIconSelfPack = {
  name: 'AugmentedRealityAr',
  StrokeRounded: IconAugmentedRealityArStrokeRounded,
  DuotoneRounded: IconAugmentedRealityArDuotoneRounded,
  TwotoneRounded: IconAugmentedRealityArTwotoneRounded,
  SolidRounded: IconAugmentedRealityArSolidRounded,
  BulkRounded: IconAugmentedRealityArBulkRounded,
  StrokeSharp: IconAugmentedRealityArStrokeSharp,
  SolidSharp: IconAugmentedRealityArSolidSharp,
};