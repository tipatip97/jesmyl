import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4258 2.87898C15.732 2.31011 13.9049 2 12 2C10.0951 2 8.26804 2.31011 6.57421 2.87898C5.21758 3.3346 4.53927 3.56241 4.16572 4.30884C3.79218 5.05528 4.08752 5.79951 4.67819 7.28799L8.00604 15.674C9.67961 19.8913 10.5164 22 12 22C13.4836 22 14.3204 19.8913 15.994 15.674L19.3218 7.28799C19.9125 5.79952 20.2078 5.05528 19.8343 4.30884C19.4607 3.56241 18.7824 3.3346 17.4258 2.87898Z',
  d2: 'M19 7.98586C18.6678 7.70091 18.3891 7.35833 18.181 6.97194C17.3084 5.35222 15.2912 4.62976 13.5189 5.30223C12.6175 5.64425 11.6116 5.63498 10.7173 5.2764C8.9589 4.57139 6.92748 5.25652 6.02234 6.85986C5.76847 7.30957 5.41836 7.69694 5 8',
  d3: 'M6 10.3285C6.39004 10.1194 6.84125 10 7.32204 10C8.80104 10 10 11.13 10 12.524C10 13.7496 9.07312 14.7711 7.84398 15',
  d4: 'M14.0078 9L13.9988 9',
  d5: 'M14 14C13.5 14 13 14.5 13 15',
  d6: 'M18.9997 7.98586L19.0378 8.0028L15.9936 15.674C14.3201 19.8913 13.4833 22 11.9997 22C10.5161 22 9.67928 19.8913 8.0057 15.674L4.97168 8.02841L4.99967 8C5.41803 7.69694 5.76813 7.30957 6.02201 6.85986C6.92715 5.25652 8.95856 4.57139 10.7169 5.2764C11.6113 5.63498 12.6172 5.64425 13.5186 5.30223C15.2909 4.62976 17.3081 5.35222 18.1806 6.97194C18.3888 7.35833 18.6674 7.70091 18.9997 7.98586ZM7.32171 10C8.8007 10 9.99967 11.13 9.99967 12.524C9.99967 13.7496 9.07279 14.7711 7.84365 15L5.99967 10.3285C6.38971 10.1194 6.84091 10 7.32171 10Z',
  d7: 'M6.33534 2.168C8.10565 1.57345 10.0133 1.25 11.9999 1.25C13.9865 1.25 15.8942 1.57345 17.6645 2.168L17.7172 2.18569C18.3504 2.39829 18.911 2.58652 19.3534 2.8241C19.8478 3.08961 20.236 3.4359 20.5049 3.9732C20.7888 4.54053 20.7986 5.09791 20.6725 5.67917C20.5583 6.20554 20.3173 6.81269 20.0402 7.51072C19.9884 7.64139 19.8276 7.6892 19.7161 7.60354C19.6225 7.5316 19.5493 7.47104 19.4993 7.4264L19.4938 7.42143L19.4881 7.41657C19.2241 7.19008 19.0044 6.91938 18.8411 6.61623C17.7819 4.6501 15.3603 3.80129 13.2527 4.601C12.5271 4.87631 11.7158 4.86877 10.9962 4.58026C8.90446 3.74158 6.46709 4.54614 5.36907 6.49114C5.1734 6.83775 4.90342 7.13981 4.57801 7.37934C4.47567 7.44387 4.35476 7.51839 4.22038 7.59931C4.12481 7.65685 4.00074 7.61439 3.95959 7.5107C3.68253 6.81268 3.44154 6.20554 3.32734 5.67917C3.20123 5.09791 3.21102 4.54053 3.49494 3.9732C3.76382 3.4359 4.15199 3.08961 4.64639 2.8241C5.08879 2.58653 5.64946 2.39829 6.28266 2.1857L6.33534 2.168Z',
  d8: 'M19.2904 9.23004C19.3188 9.3286 19.2763 9.43587 19.1911 9.6504L16.6656 16.0146C15.8503 18.0692 15.207 19.6903 14.5765 20.7912C13.9536 21.8789 13.1808 22.75 11.9999 22.75C10.8191 22.75 10.0463 21.8789 9.42335 20.7912C8.86922 19.8237 8.30525 18.4545 7.62334 16.7423C7.54608 16.5483 7.50744 16.4513 7.54105 16.3747C7.57466 16.2981 7.68113 16.2574 7.89408 16.1761C9.13958 15.7001 10.0519 14.5378 10.0519 13.1347C10.0519 11.2853 8.47469 9.86078 6.62395 9.86078C6.20925 9.86078 5.81005 9.93137 5.43981 10.0615C5.23623 10.133 5.13445 10.1688 5.06118 10.1354C4.98791 10.102 4.95143 10.0101 4.87848 9.82626L4.78845 9.59939C4.69788 9.37117 4.6526 9.25705 4.68762 9.15291C4.72263 9.04877 4.82929 8.98421 5.0426 8.85509C5.18093 8.77136 5.30219 8.69621 5.40089 8.63375L5.42077 8.62117L5.43982 8.60737C5.94301 8.24287 6.36684 7.77494 6.67529 7.22855C7.38755 5.96688 9.013 5.40117 10.438 5.97252C11.5071 6.40117 12.7076 6.41217 13.7848 6.00344C15.2218 5.45821 16.8346 6.05432 17.5205 7.32764C17.7723 7.79509 18.1081 8.20791 18.506 8.55039C18.6125 8.64498 18.7698 8.77235 18.9696 8.91816C19.1645 9.06037 19.2619 9.13147 19.2904 9.23004ZM15.0068 9C15.0068 9.55229 14.5591 10 14.0068 10H13.9979C13.4456 10 12.9979 9.55228 12.9979 9C12.9979 8.44771 13.4456 8 13.9979 8H14.0068C14.5591 8 15.0068 8.44772 15.0068 9ZM13.999 13.25C13.5051 13.25 13.074 13.4894 12.7812 13.7822C12.4884 14.0749 12.249 14.5061 12.249 15C12.249 15.4142 12.5848 15.75 12.999 15.75C13.4132 15.75 13.749 15.4142 13.749 15C13.749 14.9939 13.7596 14.9251 13.8419 14.8428C13.9241 14.7606 13.9929 14.75 13.999 14.75C14.4132 14.75 14.749 14.4142 14.749 14C14.749 13.5858 14.4132 13.25 13.999 13.25Z',
  d9: 'M5.65625 11.6003C5.62255 11.6184 5.60552 11.6584 5.61963 11.6939L6.84967 14.7936C6.8742 14.8554 6.94322 14.8856 7.0086 14.8735C7.92042 14.7037 8.5519 13.9619 8.5519 13.1347C8.5519 12.1962 7.7312 11.3608 6.62395 11.3608C6.26822 11.3608 5.93858 11.449 5.65625 11.6003Z',
  d10: 'M19.2904 9.2304C19.3188 9.32896 19.2763 9.43623 19.1911 9.65076L16.6656 16.015C15.8503 18.0696 15.207 19.6906 14.5765 20.7916C13.9536 21.8792 13.1808 22.7504 11.9999 22.7504C10.8191 22.7504 10.0463 21.8792 9.42336 20.7916C8.86923 19.8241 8.30526 18.4548 7.62335 16.7427C7.54609 16.5487 7.50745 16.4517 7.54106 16.3751C7.57467 16.2985 7.68114 16.2578 7.89408 16.1764C9.13959 15.7005 10.0519 14.5382 10.0519 13.1351C10.0519 11.2857 8.4747 9.86114 6.62396 9.86114C6.20926 9.86114 5.81006 9.93173 5.43982 10.0618C5.23624 10.1334 5.13446 10.1691 5.06119 10.1358C4.98792 10.1024 4.95144 10.0105 4.87849 9.82662L4.78846 9.59975C4.69789 9.37153 4.65261 9.25741 4.68762 9.15327C4.72264 9.04913 4.8293 8.98457 5.04261 8.85545C5.18094 8.77172 5.3022 8.69657 5.4009 8.63411L5.42078 8.62153L5.43983 8.60773C5.94301 8.24323 6.36685 7.7753 6.6753 7.22891C7.38756 5.96724 9.01301 5.40153 10.438 5.97288C11.5071 6.40153 12.7076 6.41253 13.7848 6.0038C15.2218 5.45857 16.8346 6.05468 17.5205 7.328C17.7724 7.79545 18.1081 8.20827 18.506 8.55075C18.6125 8.64534 18.7698 8.77271 18.9696 8.91852C19.1645 9.06073 19.2619 9.13183 19.2904 9.2304ZM15.0068 9.00036C15.0068 9.55264 14.5591 10.0004 14.0068 10.0004H13.9979C13.4456 10.0004 12.9979 9.55264 12.9979 9.00036C12.9979 8.44807 13.4456 8.00036 13.9979 8.00036H14.0068C14.5591 8.00036 15.0068 8.44808 15.0068 9.00036ZM13.999 13.2504C13.5051 13.2504 13.074 13.4898 12.7812 13.7825C12.4884 14.0753 12.249 14.5064 12.249 15.0004C12.249 15.4146 12.5848 15.7504 12.999 15.7504C13.4132 15.7504 13.749 15.4146 13.749 15.0004C13.749 14.9943 13.7596 14.9254 13.8419 14.8432C13.9241 14.761 13.993 14.7504 13.999 14.7504C14.4132 14.7504 14.749 14.4146 14.749 14.0004C14.749 13.5861 14.4132 13.2504 13.999 13.2504Z',
  d11: 'M5.65626 11.6007C5.62256 11.6187 5.60553 11.6587 5.61964 11.6943L6.84968 14.7939C6.87421 14.8558 6.94323 14.886 7.00861 14.8738C7.92043 14.704 8.55191 13.9623 8.55191 13.1351C8.55191 12.1966 7.73121 11.3611 6.62396 11.3611C6.26823 11.3611 5.93859 11.4493 5.65626 11.6007Z',
  d12: 'M15.0055 9C15.0055 9.55229 14.5578 10 14.0055 10H13.9965C13.4442 10 12.9965 9.55228 12.9965 9C12.9965 8.44771 13.4442 8 13.9965 8H14.0055C14.5578 8 15.0055 8.44772 15.0055 9ZM13.9977 13.25C13.5037 13.25 13.0726 13.4894 12.7798 13.7822C12.4871 14.0749 12.2477 14.5061 12.2477 15C12.2477 15.4142 12.5834 15.75 12.9977 15.75C13.4119 15.75 13.7477 15.4142 13.7477 15C13.7477 14.9939 13.7582 14.9251 13.8405 14.8428C13.9227 14.7606 13.9916 14.75 13.9977 14.75C14.4119 14.75 14.7477 14.4142 14.7477 14C14.7477 13.5858 14.4119 13.25 13.9977 13.25Z',
  d13: 'M5.65488 11.6003C5.62118 11.6184 5.60415 11.6584 5.61826 11.6939L6.8483 14.7936C6.87283 14.8554 6.94185 14.8856 7.00723 14.8735C7.91906 14.7037 8.55053 13.9619 8.55053 13.1347C8.55053 12.1962 7.72983 11.3608 6.62258 11.3608C6.26685 11.3608 5.93721 11.449 5.65488 11.6003Z',
  d14: 'M21 5C18.1904 3.05843 15.1598 2 12 2C8.84018 2 5.80963 3.05843 3 5L12 22L21 5Z',
  d15: 'M6 10.3285C6.39004 10.1194 6.84125 10 7.32204 10C8.80104 10 10 11.13 10 12.524C10 13.5195 9.3884 14.3805 8.5 14.7913',
  d16: 'M14.5 12.5C13.5 12.5 12.5 13.5 12.5 14.5',
  d17: 'M2.5737 4.38299C5.48809 2.36902 8.66471 1.25 12.0001 1.25C15.3354 1.25 18.5121 2.36902 21.4265 4.38299C21.7392 4.59909 21.8408 5.01497 21.6629 5.35092L20.2196 8.07712C20.1138 7.90477 20.0178 7.72165 19.9329 7.52871C18.7716 4.8894 15.9898 3.5804 13.4644 4.75362C12.6136 5.14888 11.6719 5.13866 10.8262 4.72348C8.32323 3.4947 5.51681 4.73865 4.31013 7.35582C4.17387 7.65135 4.01136 7.92258 3.82772 8.16627L2.33724 5.35091C2.15938 5.01497 2.26098 4.59909 2.5737 4.38299Z',
  d18: 'M18.5599 8.1328C18.7899 8.65566 19.0865 9.13366 19.4387 9.55228L12.6629 22.3509C12.5329 22.5964 12.2779 22.75 12.0001 22.75C11.7223 22.75 11.4672 22.5964 11.3372 22.3509L8.76603 17.4942C9.93198 17.0006 10.75 15.8458 10.75 14.5C10.75 12.7051 9.29493 11.25 7.5 11.25C6.84957 11.25 6.24376 11.4411 5.73565 11.7701L4.58107 9.58927C5.02327 9.13279 5.39289 8.58991 5.67231 7.98388C6.58806 5.99772 8.54504 5.27459 10.1652 6.06997C11.4166 6.6843 12.8335 6.7007 14.0964 6.11398C15.7269 5.3565 17.6751 6.12174 18.5599 8.1328ZM14.0078 10C14.5601 10 15.0078 9.55229 15.0078 9C15.0078 8.44772 14.5601 8 14.0078 8H13.9988C13.4465 8 12.9988 8.44771 12.9988 9C12.9988 9.55228 13.4465 10 13.9988 10H14.0078ZM15.5 11.75C14.7561 11.75 14.0749 12.1144 13.5947 12.5947C13.1144 13.0749 12.75 13.7561 12.75 14.5H14.25C14.25 14.2439 14.3856 13.9251 14.6553 13.6553C14.9251 13.3856 15.2439 13.25 15.5 13.25V11.75Z',
  d19: 'M9.25 14.5C9.25 15.271 8.7514 15.9256 8.05906 16.1588L6.44259 13.1055C6.73633 12.8824 7.1027 12.75 7.5 12.75C8.4665 12.75 9.25 13.5335 9.25 14.5Z',
};

export const IconPizza02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-02-stroke-rounded IconPizza02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPizza02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-02-duotone-rounded IconPizza02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPizza02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-02-twotone-rounded IconPizza02TwotoneRounded"
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

export const IconPizza02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-02-solid-rounded IconPizza02SolidRounded"
    >
      <path 
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPizza02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-02-bulk-rounded IconPizza02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPizza02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-02-stroke-sharp IconPizza02StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPizza02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pizza-02-solid-sharp IconPizza02SolidSharp"
    >
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
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPizza02: TheIconSelfPack = {
  name: 'Pizza02',
  StrokeRounded: IconPizza02StrokeRounded,
  DuotoneRounded: IconPizza02DuotoneRounded,
  TwotoneRounded: IconPizza02TwotoneRounded,
  SolidRounded: IconPizza02SolidRounded,
  BulkRounded: IconPizza02BulkRounded,
  StrokeSharp: IconPizza02StrokeSharp,
  SolidSharp: IconPizza02SolidSharp,
};