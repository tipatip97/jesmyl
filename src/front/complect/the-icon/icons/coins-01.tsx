import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 15.5C22 16.6046 19.0899 17.5 15.5 17.5C11.9101 17.5 9 16.6046 9 15.5',
  d2: 'M22 11V19.8C22 21.015 19.0899 22 15.5 22C11.9101 22 9 21.015 9 19.8V11',
  d3: 'M6 11C4.10819 10.7698 2.36991 10.1745 2 9M6 16C4.10819 15.7698 2.36991 15.1745 2 14',
  d4: 'M6 21C4.10819 20.7698 2.36991 20.1745 2 19L2 4',
  d5: 'M15 6V4',
  d6: 'M15 4C15 5.10457 12.0899 6 8.5 6C4.91015 6 2 5.10457 2 4V19C2.36991 20.1745 4.10819 20.7698 6 21H10.0512C9.38636 20.6549 9 20.2427 9 19.8V11C9 9.9472 11.6438 9.08439 15 9.00583V4Z',
  d7: 'M15.5 13C19.0899 13 22 12.1046 22 11V19.8C22 21.015 19.0899 22 15.5 22C11.9101 22 9 21.015 9 19.8V11C9 12.1046 11.9101 13 15.5 13Z',
  d8: 'M22 11C22 12.1046 19.0899 13 15.5 13C11.9101 13 9 12.1046 9 11M22 11C22 9.89543 19.0899 9 15.5 9C11.9101 9 9 9.89543 9 11M22 11V19.8C22 21.015 19.0899 22 15.5 22C11.9101 22 9 21.015 9 19.8V11M22 15.5C22 16.6046 19.0899 17.5 15.5 17.5C11.9101 17.5 9 16.6046 9 15.5',
  d9: 'M15 4C15 5.10457 12.0899 6 8.5 6C4.91015 6 2 5.10457 2 4M15 4C15 2.89543 12.0899 2 8.5 2C4.91015 2 2 2.89543 2 4M15 4V6M2 4V19C2.36991 20.1745 4.10819 20.7698 6 21M6 11C4.10819 10.7698 2.36991 10.1745 2 9M6 16C4.10819 15.7698 2.36991 15.1745 2 14',
  d10: 'M3.5767 1.71402C4.88361 1.26163 6.62427 1 8.5 1C10.3757 1 12.1164 1.26163 13.4233 1.71402C14.072 1.93857 14.6685 2.22871 15.1225 2.60032C15.5692 2.9659 16 3.51776 16 4.25V6.00576C16 6.18564 16 6.27558 15.9642 6.34214C15.9359 6.39468 15.8947 6.43592 15.8421 6.46419C15.7756 6.5 15.6837 6.5 15.5 6.5C13.5031 6.5 11.5889 6.77632 10.086 7.29654C9.34635 7.55259 8.56918 7.91433 7.92746 8.43951C7.53926 8.75721 7.07625 9.24386 6.78513 9.90045C6.72098 10.0451 6.68891 10.1175 6.63388 10.15C6.57884 10.1826 6.50741 10.1766 6.36456 10.1645C4.6083 10.0157 3.12662 9.673 2.01286 9.13675C1.79088 9.02987 1.58514 8.91641 1.39569 8.79618C1.21436 8.68112 1.1237 8.62359 1.06185 8.51109C1 8.39858 1 8.27636 1 8.03192V4.25004C1 3.51781 1.43077 2.9659 1.87746 2.60032C2.33153 2.22871 2.928 1.93857 3.5767 1.71402ZM3.14414 4.14807C3.34791 3.98131 3.70334 3.78662 4.23092 3.604C5.27654 3.24205 6.78588 3 8.5 3C10.2141 3 11.7235 3.24205 12.7691 3.604C13.2967 3.78662 13.6521 3.98131 13.8559 4.14807C13.9217 4.20195 13.9217 4.29805 13.8559 4.35193C13.6521 4.51869 13.2967 4.71338 12.7691 4.896C11.7235 5.25795 10.2141 5.5 8.5 5.5C6.78588 5.5 5.27654 5.25795 4.23092 4.896C3.70334 4.71338 3.34791 4.51869 3.14414 4.35193C3.07831 4.29805 3.07831 4.20195 3.14414 4.14807Z',
  d11: 'M6.5 12.0516C6.5 11.8759 6.5 11.7881 6.44759 11.7308C6.39518 11.6735 6.30663 11.6656 6.12952 11.6497C4.29374 11.4854 2.66 11.1131 1.36214 10.4883C1.29931 10.458 1.2679 10.4429 1.24756 10.4379C1.13472 10.4103 1.0284 10.4771 1.00434 10.5907C1 10.6112 1 10.644 1 10.7095V13.8304C1 14.0954 1 14.2278 1.07203 14.347C1.14405 14.4663 1.24658 14.5202 1.45164 14.628C1.61214 14.7123 1.78497 14.7924 1.97047 14.8679C3.0317 15.3003 4.42548 15.5546 6.07777 15.6717C6.27437 15.6856 6.37267 15.6925 6.43633 15.6332C6.5 15.5739 6.5 15.4744 6.5 15.2754V12.0516Z',
  d12: 'M6.5 17.5801C6.5 17.401 6.5 17.3114 6.44597 17.2537C6.39195 17.196 6.3017 17.1901 6.1212 17.1783C4.30971 17.0595 2.69148 16.7814 1.40453 16.2571C1.29425 16.2121 1.23911 16.1897 1.19986 16.1897C1.11611 16.1898 1.04649 16.2366 1.01483 16.3141C1 16.3505 1 16.4073 1 16.521V19C1 19.7494 1.49085 20.2732 1.92253 20.5872C2.3761 20.9172 2.96813 21.1726 3.60972 21.37C4.39924 21.613 5.34972 21.7938 6.39416 21.898C6.75899 21.9344 6.9414 21.9526 7.00865 21.8574C7.07589 21.7623 6.98834 21.5762 6.81325 21.204C6.62477 20.8034 6.5 20.3357 6.5 19.8002V17.5801Z',
  d13: 'M15.5 8C13.6243 8 11.8836 8.26163 10.5767 8.71402C9.928 8.93857 9.33153 9.22871 8.87746 9.60032C8.43077 9.9659 8 10.5178 8 11.25V13.8808C8 14.3335 8 14.5599 8.12455 14.7855C8.24911 15.0111 8.40346 15.1083 8.71216 15.3027C10.2251 16.2552 12.5583 16.7498 15.5001 16.7498C18.4419 16.7498 20.7751 16.2552 22.288 15.3027C22.5966 15.1084 22.7509 15.0112 22.8754 14.7856C23 14.56 23 14.3336 23 13.8808V11.2502C23 10.518 22.5692 9.9659 22.1225 9.60032C21.6685 9.22871 21.072 8.93857 20.4233 8.71402C19.1164 8.26163 17.3757 8 15.5 8ZM11.2309 10.604C10.7033 10.7866 10.3479 10.9813 10.1441 11.1481C10.0783 11.202 10.0783 11.298 10.1441 11.3519C10.3479 11.5187 10.7033 11.7134 11.2309 11.896C12.2765 12.258 13.7859 12.5 15.5 12.5C17.2141 12.5 18.7235 12.258 19.7691 11.896C20.2967 11.7134 20.6521 11.5187 20.8559 11.3519C20.9217 11.298 20.9217 11.202 20.8559 11.1481C20.6521 10.9813 20.2967 10.7866 19.7691 10.604C18.7235 10.242 17.2141 10 15.5 10C13.7859 10 12.2765 10.242 11.2309 10.604Z',
  d14: 'M15.5001 18.2498C18.348 18.2498 20.8565 17.8116 22.6917 16.8045C22.8318 16.7276 22.9019 16.6892 22.9509 16.7182C23 16.7473 23 16.8257 23 16.9825V19.8002C23 20.5351 22.5585 21.0816 22.114 21.4374C21.6598 21.8008 21.0641 22.084 20.4168 22.3031C19.1121 22.7447 17.3738 23.0002 15.5 23.0002C13.6262 23.0002 11.8879 22.7447 10.5832 22.3031C9.93591 22.084 9.34016 21.8008 8.88601 21.4374C8.44147 21.0816 8 20.5351 8 19.8002V16.9824C8 16.8256 8 16.7472 8.04906 16.7181C8.09813 16.6891 8.16817 16.7275 8.30826 16.8044C10.1436 17.8115 12.6521 18.2498 15.5001 18.2498Z',
  d15: 'M7 11C5 11 2.36991 10.1745 2 9M7 16C5 16 2.36991 15.1745 2 14',
  d16: 'M7 21C5 21 2.36991 20.1745 2 19V4',
  d17: 'M15 7V4',
} as const;

export const IconCoins01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-01-stroke-rounded IconCoins01StrokeRounded"
    >
      <ellipse 
        cx="15.5" 
        cy="11" 
        rx="6.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
      <ellipse 
        cx="8.5" 
        cy="4" 
        rx="6.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoins01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-01-duotone-rounded IconCoins01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <ellipse 
        cx="15.5" 
        cy="11" 
        rx="6.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
      <ellipse 
        cx="8.5" 
        cy="4" 
        rx="6.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoins01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-01-twotone-rounded IconCoins01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoins01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-01-solid-rounded IconCoins01SolidRounded"
    >
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
      <path 
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoins01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-01-bulk-rounded IconCoins01BulkRounded"
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      </g>
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
    </TheIconWrapper>
  );
};

export const IconCoins01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-01-stroke-sharp IconCoins01StrokeSharp"
    >
      <ellipse 
        cx="15.5" 
        cy="11" 
        rx="6.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></ellipse>
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
      <ellipse 
        cx="8.5" 
        cy="4" 
        rx="6.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></ellipse>
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoins01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-01-solid-sharp IconCoins01SolidSharp"
    >
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
      <path 
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCoins01: TheIconSelfPack = {
  name: 'Coins01',
  StrokeRounded: IconCoins01StrokeRounded,
  DuotoneRounded: IconCoins01DuotoneRounded,
  TwotoneRounded: IconCoins01TwotoneRounded,
  SolidRounded: IconCoins01SolidRounded,
  BulkRounded: IconCoins01BulkRounded,
  StrokeSharp: IconCoins01StrokeSharp,
  SolidSharp: IconCoins01SolidSharp,
};