import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 10V9.21749C22 7.27787 22 6.30807 21.4142 5.7055C20.8284 5.10294 19.8856 5.10294 18 5.10294H15.9214C15.004 5.10294 14.9964 5.10116 14.1715 4.68834L10.8399 3.02114C9.44884 2.32504 8.75332 1.97699 8.01238 2.00118C7.27143 2.02537 6.59877 2.41808 5.25345 3.20351L4.02558 3.92037C3.03739 4.49729 2.54329 4.78576 2.27164 5.26564C2 5.74553 2 6.32993 2 7.49873V15.7157C2 17.2514 2 18.0193 2.34226 18.4467C2.57001 18.731 2.88916 18.9222 3.242 18.9856C3.77226 19.0808 4.42148 18.7018 5.71987 17.9437C6.60156 17.429 7.45011 16.8944 8.50487 17.0394C9.38869 17.1608 10.21 17.7185 11 18.1138',
  d2: 'M8 2L8 17',
  d3: 'M15 5V9.5',
  d4: 'M18.3083 21.6835C18.0915 21.8865 17.8017 22 17.5001 22C17.1985 22 16.9087 21.8865 16.6919 21.6835C14.7063 19.813 12.0455 17.7235 13.3431 14.6898C14.0447 13.0496 15.7289 12 17.5001 12C19.2713 12 20.9555 13.0496 21.6571 14.6898C22.9531 17.7196 20.2988 19.8194 18.3083 21.6835Z',
  d5: 'M17.5 16.5H17.509',
  d6: 'M4.02558 3.92037L5.25345 3.20351C6.59128 2.42246 7.26392 2.02976 8 2.00162L8.01238 2.00118C8.75332 1.97699 9.44884 2.32504 10.8399 3.02114L14.1715 4.68834C14.5766 4.89106 14.7846 4.99467 15 5.04761C15.2232 5.10248 15.4545 5.10294 15.9214 5.10294H18C19.8856 5.10294 20.8284 5.10294 21.4142 5.7055C22 6.30807 22 7.27787 22 9.21749V15.4853L21.9284 15.5534C21.8729 15.274 21.7839 14.9864 21.6571 14.6898C20.9555 13.0496 19.2713 12 17.5001 12C15.7289 12 14.0447 13.0496 13.3431 14.6898C12.7754 16.0171 12.9654 17.1637 13.5251 18.1902L11 18.1138C10.8135 18.0205 10.6253 17.9181 10.4349 17.8146C9.81874 17.4795 9.18005 17.1322 8.50487 17.0394C7.49945 16.9012 6.68141 17.3805 5.84342 17.8714C5.8023 17.8955 5.76112 17.9197 5.71987 17.9437C4.42151 18.7018 3.77226 19.0808 3.242 18.9856C2.88916 18.9222 2.57001 18.731 2.34226 18.4467C2 18.0193 2 17.2514 2 15.7157V7.49873C2 6.32993 2 5.74553 2.27164 5.26564C2.54329 4.78576 3.03739 4.49729 4.02558 3.92037Z',
  d7: 'M8.75 17.1838C8.75 17.3864 8.75 17.4877 8.7977 17.5618C8.84539 17.636 8.94451 17.6811 9.14275 17.7714C9.36402 17.8723 9.6448 18.0102 10.0237 18.1986L10.3227 18.3473C10.7359 18.5528 10.9425 18.6555 11.0425 18.5737C11.1425 18.4919 11.0793 18.2563 10.9529 17.7851C10.6351 16.6004 10.6536 15.2596 11.2758 13.805C11.8512 12.4598 12.8427 11.3933 14.0418 10.6923C14.1452 10.6319 14.197 10.6016 14.2235 10.5554C14.25 10.5092 14.25 10.4517 14.25 10.3366V4.07979C14.25 3.89894 14.25 3.80852 14.205 3.73592C14.16 3.66332 14.0791 3.62306 13.9171 3.54254L11.1426 2.16295C10.4736 1.8303 9.92553 1.55778 9.45232 1.3752C9.16028 1.26252 9.01425 1.20618 8.88544 1.29069L8.87522 1.2977C8.75 1.38746 8.75 1.55645 8.75 1.89444L8.75 17.1838Z',
  d8: 'M22.75 11.0975C22.75 11.5503 22.75 11.7767 22.6333 11.8302C22.5166 11.8837 22.3358 11.7277 21.9743 11.4158C20.7405 10.3514 19.1388 9.75 17.5015 9.75C17.0827 9.75 16.6662 9.78934 16.2576 9.86571C16.0155 9.91097 15.8945 9.93359 15.8222 9.87362C15.75 9.81364 15.75 9.69578 15.75 9.46006L15.75 4.33964C15.75 4.24511 15.8268 4.16857 15.9214 4.16857L18.0529 4.16857C18.9506 4.16854 19.7008 4.16851 20.2966 4.25039C20.9275 4.33708 21.4955 4.52797 21.9503 4.99278C22.4028 5.45531 22.5866 6.0292 22.6704 6.66607C22.7501 7.27181 22.75 8.03568 22.75 8.95563V11.0975Z',
  d9: 'M7.25 1.95737C7.25 1.62984 7.25 1.46607 7.13415 1.37599C7.1208 1.36561 7.10282 1.3541 7.08779 1.34634C6.95744 1.27893 6.81999 1.34242 6.54509 1.46938C6.08426 1.68221 5.55431 1.98964 4.90724 2.36503L3.6187 3.11251C3.15062 3.38402 2.75247 3.61497 2.44084 3.84C2.10848 4.07999 1.82705 4.3455 1.61998 4.70898C1.4134 5.07159 1.32728 5.45023 1.28746 5.86053C1.24997 6.2469 1.24999 6.71323 1.25 7.26437V15.5035C1.24999 16.2326 1.24998 16.8354 1.29639 17.3069C1.34327 17.783 1.44676 18.2613 1.75833 18.6479C2.09802 19.0693 2.57688 19.3558 3.11024 19.451C3.60335 19.539 4.0707 19.3911 4.5015 19.1966C4.92742 19.0043 5.49919 18.6726 6.11822 18.3135C6.40134 18.1492 6.6546 18.0023 6.89091 17.8802C7.07195 17.7867 7.16247 17.7399 7.20624 17.668C7.25 17.5962 7.25 17.5016 7.25 17.3124L7.25 1.95737Z',
  d10: 'M17.5005 11.25C15.4459 11.25 13.4801 12.4635 12.654 14.3949C11.881 16.202 12.3099 17.7499 13.1612 19.0367C13.8457 20.0712 14.8445 20.9943 15.708 21.7923L15.708 21.7924C15.8705 21.9425 16.0281 22.0882 16.178 22.2294L16.1797 22.2309C16.5378 22.5663 17.0118 22.75 17.5005 22.75C17.9893 22.75 18.4633 22.5663 18.8214 22.2309C18.9636 22.0978 19.1125 21.9606 19.2658 21.8195L19.2659 21.8194L19.2659 21.8194L19.2659 21.8194C20.1381 21.0163 21.1499 20.0846 21.8415 19.037C22.6917 17.749 23.1191 16.1998 22.3471 14.3949C21.521 12.4635 19.5552 11.25 17.5005 11.25ZM17.4911 14.5C16.3914 14.5 15.5 15.3954 15.5 16.5C15.5 17.6046 16.3914 18.5 17.4911 18.5H17.5089C18.6086 18.5 19.5 17.6046 19.5 16.5C19.5 15.3954 18.6086 14.5 17.5089 14.5H17.4911Z',
  d11: 'M22 10V5H15L8.01175 2.00098L2 5.08297V19L8.01175 17L11 18.2827',
  d12: 'M22 16.5C22 20 17.5 22 17.5 22C17.5 22 13 20 13 16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5Z',
  d13: 'M16.4235 22.2148C16.6484 22.3431 16.837 22.4411 16.9712 22.5078L17.5 22.749L18.0288 22.5078C18.163 22.4411 18.3516 22.3431 18.5765 22.2148C19.0246 21.9592 19.6255 21.578 20.2301 21.0772C21.4142 20.0965 22.75 18.5399 22.75 16.4669C22.75 13.5852 20.3995 11.249 17.5 11.249C14.6005 11.249 12.25 13.5852 12.25 16.4669C12.25 18.5399 13.5858 20.0965 14.7699 21.0772C15.3745 21.578 15.9754 21.9592 16.4235 22.2148ZM17.494 14.499C16.3928 14.499 15.5 15.3945 15.5 16.499C15.5 17.6036 16.3928 18.499 17.494 18.499H17.506C18.6072 18.499 19.5 17.6036 19.5 16.499C19.5 15.3945 18.6072 14.499 17.506 14.499H17.494Z',
  d14: 'M11.4036 19.2724L8.75 18.1333L8.75 1.25L14.25 3.61034V10.5779C12.166 11.7193 10.75 13.925 10.75 16.4669C10.75 17.5224 11.0099 18.4586 11.4036 19.2724Z',
  d15: 'M22.75 12.2439V4.74835C22.75 4.33413 22.4142 3.99835 22 3.99835H15.75V9.97721C16.3084 9.82836 16.8951 9.74902 17.5 9.74902C19.6171 9.74902 21.5111 10.7208 22.75 12.2439Z',
  d16: 'M1.65785 4.16391L7.25 1.29703L7.25 18.044L2.23675 19.7118C2.00807 19.7879 1.75676 19.7495 1.56129 19.6085C1.36582 19.4675 1.25 19.2412 1.25 19.0002V4.83131C1.25 4.54995 1.40747 4.29226 1.65785 4.16391Z',
};

export const IconMapsLocation01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-01-stroke-rounded IconMapsLocation01StrokeRounded"
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

export const IconMapsLocation01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-01-duotone-rounded IconMapsLocation01DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconMapsLocation01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-01-twotone-rounded IconMapsLocation01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconMapsLocation01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-01-solid-rounded IconMapsLocation01SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsLocation01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-01-bulk-rounded IconMapsLocation01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsLocation01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-01-stroke-sharp IconMapsLocation01StrokeSharp"
    >
      <path 
        d={d.d11} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
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
    </TheIconWrapper>
  );
};

export const IconMapsLocation01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-01-solid-sharp IconMapsLocation01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfMapsLocation01: TheIconSelfPack = {
  name: 'MapsLocation01',
  StrokeRounded: IconMapsLocation01StrokeRounded,
  DuotoneRounded: IconMapsLocation01DuotoneRounded,
  TwotoneRounded: IconMapsLocation01TwotoneRounded,
  SolidRounded: IconMapsLocation01SolidRounded,
  BulkRounded: IconMapsLocation01BulkRounded,
  StrokeSharp: IconMapsLocation01StrokeSharp,
  SolidSharp: IconMapsLocation01SolidSharp,
};