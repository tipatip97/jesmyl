import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 3.5V2',
  d2: 'M12 3.5C11.0608 3.5 7.52791 7.29323 6.97182 12.2037M12 3.5C12.9392 3.5 16.4721 7.29322 17.0282 12.2037M12 3.5C16.9367 3.5 21.0545 6.93552 22 11.5C20.6123 12.7 18.1073 12.4691 17.0282 12.2037M12 3.5C7.06333 3.5 2.94545 6.93552 2 11.5C3.38792 12.7 5.89285 12.4691 6.97182 12.2037M6.97182 12.2037C8.4559 13.0288 10.1718 13.5 12 13.5C13.8282 13.5 15.5441 13.0288 17.0282 12.2037',
  d3: 'M18.5 15L16 18.5H20L17.5 22',
  d4: 'M12 13.5V20.5C12 21.3284 11.3284 22 10.5 22C9.67157 22 9 21.3284 9 20.5V20',
  d5: 'M6.97168 12.2037C8.45575 13.0288 10.1717 13.5 11.9999 13.5C13.8281 13.5 15.544 13.0288 17.028 12.2037C16.472 7.29322 12.9391 3.5 11.9999 3.5C11.0606 3.5 7.52777 7.29323 6.97168 12.2037Z',
  d6: 'M18.9359 14.3898C19.273 14.6305 19.3511 15.0989 19.1103 15.436L17.4574 17.7501H20C20.2809 17.7501 20.5383 17.9071 20.6669 18.1569C20.7954 18.4067 20.7736 18.7074 20.6103 18.936L18.1103 22.436C17.8695 22.773 17.4011 22.8511 17.0641 22.6104C16.727 22.3696 16.6489 21.9012 16.8897 21.5641L18.5426 19.2501H16C15.7191 19.2501 15.4617 19.093 15.3331 18.8432C15.2046 18.5934 15.2264 18.2927 15.3897 18.0641L17.8897 14.5641C18.1305 14.2271 18.5989 14.149 18.9359 14.3898Z',
  d7: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.5C12.75 3.91421 12.4142 4.25 12 4.25C11.5858 4.25 11.25 3.91421 11.25 3.5V2C11.25 1.58579 11.5858 1.25 12 1.25ZM12.75 13.5V20.5C12.75 21.7426 11.7426 22.75 10.5 22.75C9.25736 22.75 8.25 21.7426 8.25 20.5V20C8.25 19.5858 8.58579 19.25 9 19.25C9.41421 19.25 9.75 19.5858 9.75 20V20.5C9.75 20.9142 10.0858 21.25 10.5 21.25C10.9142 21.25 11.25 20.9142 11.25 20.5V13.5H12.75Z',
  d8: 'M11.1492 3.03062C11.366 2.89964 11.6706 2.75 11.9999 2.75C12.3292 2.75 12.6338 2.89964 12.8506 3.03062C13.0934 3.17732 13.3506 3.37864 13.6102 3.61637C14.1313 4.09371 14.7148 4.76675 15.2764 5.58655C16.3983 7.22423 17.4783 9.5148 17.7733 12.1193C17.8074 12.4201 17.6572 12.712 17.3925 12.8591C15.7993 13.745 13.9583 14.25 11.9999 14.25C10.0415 14.25 8.20043 13.745 6.60723 12.8591C6.34259 12.712 6.19239 12.4201 6.22646 12.1193C6.52141 9.5148 7.60147 7.22423 8.72337 5.58655C9.28497 4.76675 9.86849 4.09371 10.3896 3.61637C10.6491 3.37864 10.9063 3.17732 11.1492 3.03062Z',
  d9: 'M2.84503 11.182C3.33398 11.4624 3.9657 11.6097 4.64911 11.6529C5.25236 11.691 5.84036 11.6444 6.30057 11.5723C6.6743 9.19454 7.68084 7.10858 8.72351 5.58655C8.97386 5.2211 9.22856 4.88482 9.48015 4.58204C6.22963 5.45915 3.6866 7.99113 2.84503 11.182ZM12 2.75C6.71096 2.75 2.28383 6.4321 1.26561 11.3479C1.21045 11.6142 1.30377 11.8895 1.50949 12.0673C2.38267 12.8223 3.5484 13.0863 4.55446 13.1499C5.57412 13.2144 6.54677 13.0806 7.15101 12.9319C7.45587 12.8569 7.68175 12.6 7.71708 12.2881C7.97822 9.98208 8.94262 7.92083 9.96098 6.43428C10.4695 5.69198 10.9801 5.10981 11.4029 4.72246C11.6154 4.52786 11.7926 4.39446 11.9249 4.31454C11.9552 4.29621 11.9802 4.28254 12 4.27241C12.0198 4.28254 12.0448 4.29621 12.0751 4.31454C12.2074 4.39446 12.3847 4.52785 12.5971 4.72246C13.02 5.10981 13.5305 5.69197 14.0391 6.43428C15.0574 7.92083 16.0218 9.98208 16.283 12.2881C16.3183 12.6 16.5442 12.857 16.849 12.9319C17.4533 13.0806 18.426 13.2144 19.4457 13.1499C20.4518 13.0863 21.6175 12.8223 22.4906 12.0673C22.6963 11.8894 22.7896 11.6142 22.7344 11.3479C21.7162 6.4321 17.2891 2.75 12 2.75ZM14.5199 4.58204C17.7704 5.45915 20.3134 7.99115 21.155 11.182C20.6662 11.4624 20.0345 11.6097 19.3511 11.6529C18.7478 11.691 18.1597 11.6444 17.6995 11.5723C17.3257 9.19454 16.3192 7.10857 15.2765 5.58655C15.0262 5.2211 14.7715 4.88482 14.5199 4.58204Z',
  d10: 'M2.84503 11.182C3.33398 11.4624 3.9657 11.6097 4.64911 11.6529C5.25236 11.691 5.84036 11.6444 6.30057 11.5723C6.6743 9.19454 7.68084 7.10858 8.72351 5.58655C8.97386 5.2211 9.22856 4.88482 9.48015 4.58204C6.22963 5.45915 3.6866 7.99113 2.84503 11.182ZM12 2.75C6.71096 2.75 2.28383 6.4321 1.26561 11.3479C1.21045 11.6142 1.30377 11.8895 1.50949 12.0673C2.38267 12.8223 3.5484 13.0863 4.55446 13.1499C5.42406 13.2049 6.25947 13.1157 6.86133 12.996C8.39496 13.7968 10.1448 14.25 12 14.25C13.8552 14.25 15.6051 13.7968 17.1387 12.996C17.7406 13.1157 18.5761 13.2049 19.4457 13.1499C20.4518 13.0863 21.6175 12.8223 22.4906 12.0673C22.6963 11.8894 22.7896 11.6142 22.7344 11.3479C21.7162 6.4321 17.2891 2.75 12 2.75ZM12 4.27241C11.9802 4.28254 11.9552 4.29621 11.9249 4.31454C11.7926 4.39446 11.6154 4.52786 11.4029 4.72246C10.9801 5.10981 10.4695 5.69198 9.96098 6.43428C9.01762 7.81135 8.12056 9.68159 7.78596 11.7827C9.05367 12.4014 10.4841 12.75 12 12.75C13.5159 12.75 14.9464 12.4014 16.2141 11.7827C15.8795 9.68159 14.9824 7.81135 14.0391 6.43428C13.5305 5.69197 13.02 5.10981 12.5971 4.72246C12.3847 4.52785 12.2074 4.39446 12.0751 4.31454C12.0448 4.29621 12.0198 4.28254 12 4.27241ZM17.6995 11.5723C17.3257 9.19454 16.3192 7.10857 15.2765 5.58655C15.0262 5.2211 14.7715 4.88482 14.5199 4.58204C17.7704 5.45915 20.3134 7.99115 21.155 11.182C20.6662 11.4624 20.0345 11.6097 19.3511 11.6529C18.7478 11.691 18.1597 11.6444 17.6995 11.5723Z',
  d11: 'M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V2.97234C11.4558 2.85898 11.7189 2.75 11.9999 2.75C12.281 2.75 12.5441 2.85906 12.75 2.97247V2Z',
  d12: 'M11.25 14.2252C11.4978 14.2416 11.7479 14.25 11.9999 14.25C12.252 14.25 12.5021 14.2416 12.75 14.2252V20.5C12.75 21.7426 11.7426 22.75 10.5 22.75C9.25736 22.75 8.25 21.7426 8.25 20.5V20C8.25 19.5858 8.58579 19.25 9 19.25C9.41421 19.25 9.75 19.5858 9.75 20V20.5C9.75 20.9142 10.0858 21.25 10.5 21.25C10.9142 21.25 11.25 20.9142 11.25 20.5V14.2252Z',
  d13: 'M12 3.5C16.9706 3.5 21 6.97715 21 12.5H3C3 6.97715 7.02944 3.5 12 3.5Z',
  d14: 'M12 3.5C14.2091 3.5 16 6.97715 16 12.5H8C8 6.97715 9.79086 3.5 12 3.5Z',
  d15: 'M12 12.5V20.5C12 21.3284 11.3284 22 10.5 22C9.67157 22 9 21.3284 9 20.5V20',
  d16: 'M12.75 1.25V4.25H11.25V1.25H12.75Z',
  d17: 'M2.25 13.25H21.75V12.5C21.75 6.53266 17.3538 2.75 12 2.75C6.64617 2.75 2.25 6.53266 2.25 12.5V13.25ZM3.77733 11.75C4.11995 7.1113 7.64292 4.25 12 4.25C16.3571 4.25 19.88 7.1113 20.2227 11.75H3.77733Z',
  d18: 'M7.25 12.5C7.25 12.9142 7.58579 13.25 8 13.25H16C16.4142 13.25 16.75 12.9142 16.75 12.5C16.75 9.66904 16.2926 7.30225 15.5087 5.61319C14.7411 3.95929 13.5466 2.75 12 2.75C10.4534 2.75 9.25888 3.95929 8.49127 5.61319C7.70735 7.30225 7.25 9.66904 7.25 12.5Z',
  d19: 'M12.75 12.5V20.5C12.75 21.7426 11.7426 22.75 10.5 22.75C9.25736 22.75 8.25 21.7426 8.25 20.5V20H9.75V20.5C9.75 20.9142 10.0858 21.25 10.5 21.25C10.9142 21.25 11.25 20.9142 11.25 20.5V12.5H12.75Z',
  d20: 'M19.5466 14.5293L17.4578 17.4537H21.4578L17.6747 22.7499L16.4541 21.8781L18.543 18.9537H14.543L18.326 13.6575L19.5466 14.5293Z',
};

export const IconSaveEnergy02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-02-stroke-rounded IconSaveEnergy02StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSaveEnergy02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-02-duotone-rounded IconSaveEnergy02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSaveEnergy02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-02-twotone-rounded IconSaveEnergy02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSaveEnergy02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-02-solid-rounded IconSaveEnergy02SolidRounded"
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSaveEnergy02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-02-bulk-rounded IconSaveEnergy02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconSaveEnergy02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-02-stroke-sharp IconSaveEnergy02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconSaveEnergy02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-02-solid-sharp IconSaveEnergy02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSaveEnergy02: TheIconSelfPack = {
  name: 'SaveEnergy02',
  StrokeRounded: IconSaveEnergy02StrokeRounded,
  DuotoneRounded: IconSaveEnergy02DuotoneRounded,
  TwotoneRounded: IconSaveEnergy02TwotoneRounded,
  SolidRounded: IconSaveEnergy02SolidRounded,
  BulkRounded: IconSaveEnergy02BulkRounded,
  StrokeSharp: IconSaveEnergy02StrokeSharp,
  SolidSharp: IconSaveEnergy02SolidSharp,
};