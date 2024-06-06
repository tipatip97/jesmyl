import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 12C19 11.1716 19.6716 10.5 20.5 10.5C21.3284 10.5 22 11.1716 22 12C22 12.8284 21.3284 13.5 20.5 13.5C19.6716 13.5 19 12.8284 19 12Z',
  d2: 'M2 12C2 11.1716 2.67157 10.5 3.5 10.5C4.32843 10.5 5 11.1716 5 12C5 12.8284 4.32843 13.5 3.5 13.5C2.67157 13.5 2 12.8284 2 12Z',
  d3: 'M13.7071 10.2929C13.4142 10 12.9428 10 12 10C11.0572 10 10.5858 10 10.2929 10.2929M13.7071 10.2929C14 10.5858 14 11.0572 14 12C14 12.9428 14 13.4142 13.7071 13.7071M13.7071 10.2929C13.7071 10.2929 13.7071 10.2929 13.7071 10.2929ZM10.2929 10.2929C10 10.5858 10 11.0572 10 12C10 12.9428 10 13.4142 10.2929 13.7071M10.2929 10.2929C10.2929 10.2929 10.2929 10.2929 10.2929 10.2929ZM10.2929 13.7071C10.5858 14 11.0572 14 12 14C12.9428 14 13.4142 14 13.7071 13.7071M10.2929 13.7071C10.2929 13.7071 10.2929 13.7071 10.2929 13.7071ZM13.7071 13.7071C13.7071 13.7071 13.7071 13.7071 13.7071 13.7071Z',
  d4: 'M20.7071 2.29289C20.4142 2 19.9428 2 19 2C18.0572 2 17.5858 2 17.2929 2.29289M20.7071 2.29289C21 2.58579 21 3.05719 21 4C21 4.94281 21 5.41421 20.7071 5.70711M20.7071 2.29289C20.7071 2.29289 20.7071 2.29289 20.7071 2.29289ZM17.2929 2.29289C17 2.58579 17 3.05719 17 4C17 4.94281 17 5.41421 17.2929 5.70711M17.2929 2.29289C17.2929 2.29289 17.2929 2.29289 17.2929 2.29289ZM17.2929 5.70711C17.5858 6 18.0572 6 19 6C19.9428 6 20.4142 6 20.7071 5.70711M17.2929 5.70711C17.2929 5.70711 17.2929 5.70711 17.2929 5.70711ZM20.7071 5.70711C20.7071 5.70711 20.7071 5.70711 20.7071 5.70711Z',
  d5: 'M6.70711 18.2929C6.41421 18 5.94281 18 5 18C4.05719 18 3.58579 18 3.29289 18.2929M6.70711 18.2929C7 18.5858 7 19.0572 7 20C7 20.9428 7 21.4142 6.70711 21.7071M6.70711 18.2929C6.70711 18.2929 6.70711 18.2929 6.70711 18.2929ZM3.29289 18.2929C3 18.5858 3 19.0572 3 20C3 20.9428 3 21.4142 3.29289 21.7071M3.29289 18.2929C3.29289 18.2929 3.29289 18.2929 3.29289 18.2929ZM3.29289 21.7071C3.58579 22 4.05719 22 5 22C5.94281 22 6.41421 22 6.70711 21.7071M3.29289 21.7071C3.29289 21.7071 3.29289 21.7071 3.29289 21.7071ZM6.70711 21.7071C6.70711 21.7071 6.70711 21.7071 6.70711 21.7071Z',
  d6: 'M5 12H10',
  d7: 'M14 12H19',
  d8: 'M12 10C12 8 12.8333 4 17 4',
  d9: 'M12 14C12 16 11.1667 20 7 20',
  d10: 'M21 4C21 4.94281 21 5.41421 20.7071 5.70711C20.4142 6 19.9428 6 19 6C18.0572 6 17.5858 6 17.2929 5.70711C17.2929 5.70711 17.2929 5.70711 17.2929 5.70711C17 5.41421 17 4.94281 17 4C17 3.05719 17 2.58579 17.2929 2.29289C17.2929 2.29289 17.2929 2.29289 17.2929 2.29289C17.5858 2 18.0572 2 19 2C19.9428 2 20.4142 2 20.7071 2.29289C20.7071 2.29289 20.7071 2.29289 20.7071 2.29289C21 2.58579 21 3.05719 21 4Z',
  d11: 'M7 20C7 20.9428 7 21.4142 6.70711 21.7071C6.41421 22 5.94281 22 5 22C4.05719 22 3.58579 22 3.29289 21.7071C3.29289 21.7071 3.29289 21.7071 3.29289 21.7071C3 21.4142 3 20.9428 3 20C3 19.0572 3 18.5858 3.29289 18.2929C3.29289 18.2929 3.29289 18.2929 3.29289 18.2929C3.58579 18 4.05719 18 5 18C5.94281 18 6.41421 18 6.70711 18.2929C6.70711 18.2929 6.70711 18.2929 6.70711 18.2929C7 18.5858 7 19.0572 7 20Z',
  d12: 'M14 12C14 12.9428 14 13.4142 13.7071 13.7071C13.4142 14 12.9428 14 12 14C11.0572 14 10.5858 14 10.2929 13.7071C10.2929 13.7071 10.2929 13.7071 10.2929 13.7071C10 13.4142 10 12.9428 10 12C10 11.0572 10 10.5858 10.2929 10.2929C10.2929 10.2929 10.2929 10.2929 10.2929 10.2929C10.5858 10 11.0572 10 12 10C12.9428 10 13.4142 10 13.7071 10.2929C13.7071 10.2929 13.7071 10.2929 13.7071 10.2929C14 10.5858 14 11.0572 14 12Z',
  d13: 'M22.75 12C22.75 13.2426 21.7426 14.25 20.5 14.25C19.2574 14.25 18.25 13.2426 18.25 12C18.25 10.7574 19.2574 9.75 20.5 9.75C21.7426 9.75 22.75 10.7574 22.75 12Z',
  d14: 'M5.75 12C5.75 13.2426 4.74264 14.25 3.5 14.25C2.25736 14.25 1.25 13.2426 1.25 12C1.25 10.7574 2.25736 9.75 3.5 9.75C4.74264 9.75 5.75 10.7574 5.75 12Z',
  d15: 'M11.9553 9.25L12 9.25001L12.0448 9.25C12.4776 9.24995 12.8744 9.24991 13.1972 9.29331C13.5527 9.3411 13.9284 9.45355 14.2374 9.76257C14.5465 10.0716 14.6589 10.4473 14.7067 10.8028C14.7501 11.1256 14.7501 11.5224 14.75 11.9553V11.9553L14.75 12L14.75 12.0448V12.0448C14.7501 12.4776 14.7501 12.8744 14.7067 13.1972C14.6589 13.5527 14.5465 13.9284 14.2374 14.2374C13.9284 14.5465 13.5527 14.6589 13.1972 14.7067C12.8744 14.7501 12.4776 14.7501 12.0448 14.75H12.0447L12 14.75L11.9553 14.75H11.9552C11.5224 14.7501 11.1256 14.7501 10.8028 14.7067C10.4473 14.6589 10.0716 14.5465 9.76257 14.2374C9.45355 13.9284 9.3411 13.5527 9.29331 13.1972C9.24991 12.8744 9.24995 12.4776 9.25 12.0448L9.25001 12L9.25 11.9553C9.24995 11.5224 9.24991 11.1256 9.29331 10.8028C9.3411 10.4473 9.45355 10.0716 9.76257 9.76257C10.0716 9.45355 10.4473 9.3411 10.8028 9.29331C11.1256 9.24991 11.5224 9.24995 11.9553 9.25Z',
  d16: 'M18.9553 1.25L19 1.25001L19.0448 1.25C19.4776 1.24995 19.8744 1.24991 20.1972 1.29331C20.5527 1.3411 20.9284 1.45355 21.2374 1.76257C21.5465 2.07159 21.6589 2.44732 21.7067 2.8028C21.7501 3.12561 21.7501 3.52244 21.75 3.95525V3.95526L21.75 4.00001L21.75 4.04475V4.04476C21.7501 4.47758 21.7501 4.87441 21.7067 5.19721C21.6589 5.5527 21.5465 5.92842 21.2374 6.23744C20.9284 6.54647 20.5527 6.65891 20.1972 6.70671C19.8744 6.75011 19.4776 6.75006 19.0448 6.75001H19.0447L19 6.75001L18.9553 6.75001H18.9552C18.5224 6.75006 18.1256 6.75011 17.8028 6.70671C17.4473 6.65891 17.0716 6.54647 16.7626 6.23744C16.4535 5.92842 16.3411 5.55269 16.2933 5.19721C16.2499 4.8744 16.25 4.47757 16.25 4.04475L16.25 4.00001L16.25 3.95526C16.25 3.52244 16.2499 3.12561 16.2933 2.8028C16.3411 2.44732 16.4535 2.07159 16.7626 1.76257C17.0716 1.45355 17.4473 1.3411 17.8028 1.29331C18.1256 1.24991 18.5224 1.24995 18.9553 1.25Z',
  d17: 'M4.95526 17.25L5.00001 17.25L5.04476 17.25C5.47757 17.25 5.8744 17.2499 6.19721 17.2933C6.5527 17.3411 6.92842 17.4535 7.23744 17.7626C7.54647 18.0716 7.65892 18.4473 7.70671 18.8028C7.75011 19.1256 7.75006 19.5224 7.75001 19.9553V19.9553L7.75001 20L7.75001 20.0448V20.0448C7.75006 20.4776 7.75011 20.8744 7.70671 21.1972C7.65891 21.5527 7.54647 21.9284 7.23744 22.2374C6.92842 22.5465 6.55269 22.6589 6.19721 22.7067C5.8744 22.7501 5.47757 22.7501 5.04475 22.75H5.04474L5.00001 22.75L4.95525 22.75H4.95523C4.52242 22.7501 4.1256 22.7501 3.8028 22.7067C3.44732 22.6589 3.07159 22.5465 2.76257 22.2374C2.45355 21.9284 2.3411 21.5527 2.29331 21.1972C2.24991 20.8744 2.24995 20.4776 2.25 20.0448L2.25001 20L2.25 19.9553C2.24995 19.5224 2.24991 19.1256 2.29331 18.8028C2.3411 18.4473 2.45355 18.0716 2.76257 17.7626C3.07159 17.4535 3.44732 17.3411 3.8028 17.2933C4.12561 17.2499 4.52244 17.25 4.95526 17.25Z',
  d18: 'M4 12C4 11.4477 4.44772 11 5 11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12Z',
  d19: 'M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H14C13.4477 13 13 12.5523 13 12Z',
  d20: 'M13.8013 6.75387C13.1924 7.79765 13 9.10302 13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 8.89698 11.2243 7.20235 12.0737 5.74613C12.9602 4.22653 14.5195 3 17 3C17.5523 3 18 3.44772 18 4C18 4.55228 17.5523 5 17 5C15.3138 5 14.3732 5.77347 13.8013 6.75387Z',
  d21: 'M10.1987 17.2461C10.8076 16.2024 11 14.897 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14C13 15.103 12.7757 16.7976 11.9263 18.2539C11.0398 19.7735 9.48051 21 7 21C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19C8.68616 19 9.62682 18.2265 10.1987 17.2461Z',
  d22: 'M16.2692 3.03906C16.2494 3.31217 16.2495 3.62392 16.2495 3.95698L16.2495 4.04655C16.2495 4.41663 16.2494 4.7604 16.2765 5.05409C15.0341 5.24333 14.2852 5.92527 13.8008 6.75566C13.3413 7.54329 13.119 8.47988 13.0376 9.27754C12.747 9.25171 12.4084 9.25175 12.0443 9.2518H11.9548C11.6189 9.25176 11.3047 9.25172 11.0299 9.27199C11.1149 8.2274 11.3944 6.91155 12.0732 5.74792C12.8693 4.38327 14.208 3.25497 16.2692 3.03906Z',
  d23: 'M9.27204 11.0018H5.51563C5.66533 11.303 5.74951 11.6426 5.74951 12.0018C5.74951 12.361 5.66533 12.7006 5.51562 13.0018H9.27204C9.24943 12.7199 9.24947 12.3949 9.24951 12.0465L9.24951 11.9571C9.24947 11.6087 9.24943 11.2837 9.27204 11.0018Z',
  d24: 'M10.9614 14.7261C10.88 15.5237 10.6577 16.4603 10.1982 17.2479C9.71383 18.0783 8.96489 18.7603 7.72248 18.9495C7.7496 19.2432 7.74956 19.587 7.74952 19.9571V20.0465C7.74956 20.3796 7.74959 20.6914 7.72983 20.9645C9.79102 20.7486 11.1297 19.6203 11.9258 18.2557C12.6046 17.092 12.8841 15.7762 12.9691 14.7316C12.6943 14.7519 12.3802 14.7518 12.0443 14.7518H11.9548C11.5906 14.7518 11.252 14.7519 10.9614 14.7261Z',
  d25: 'M14.727 13.0018H18.4834C18.3337 12.7006 18.2495 12.361 18.2495 12.0018C18.2495 11.6426 18.3337 11.303 18.4834 11.0018H14.727C14.7496 11.2837 14.7496 11.6087 14.7495 11.9571V12.0465C14.7496 12.3949 14.7496 12.7199 14.727 13.0018Z',
  d26: 'M10 14L10 10L14 10.0026L14 14H10Z',
  d27: 'M17 6L17 2L21 2.0026L21 6H17Z',
  d28: 'M3 22L3 18L7 18.0026L7 22H3Z',
  d29: 'M9.46984 9.46999C9.6106 9.32932 9.80149 9.25036 10.0005 9.25049L14.0005 9.25309C14.4145 9.25336 14.75 9.58907 14.75 10.0031L14.75 14.0005C14.75 14.4147 14.4142 14.7505 14 14.7505H10C9.80109 14.7505 9.61032 14.6715 9.46967 14.5308C9.32902 14.3902 9.25 14.1994 9.25 14.0005V10.0005C9.25 9.80149 9.32908 9.61065 9.46984 9.46999Z',
  d30: 'M16.25 1.25L21.75 1.25358L21.75 6.75049H16.25V1.25Z',
  d31: 'M2.25 17.25L7.75 17.2536L7.75 22.7505H2.25V17.25Z',
  d32: 'M22.75 12.0005C22.75 13.2431 21.7426 14.2505 20.5 14.2505C19.2574 14.2505 18.25 13.2431 18.25 12.0005C18.25 10.7578 19.2574 9.75049 20.5 9.75049C21.7426 9.75049 22.75 10.7578 22.75 12.0005Z',
  d33: 'M5.75 12.0005C5.75 13.2431 4.74264 14.2505 3.5 14.2505C2.25736 14.2505 1.25 13.2431 1.25 12.0005C1.25 10.7578 2.25736 9.75049 3.5 9.75049C4.74264 9.75049 5.75 10.7578 5.75 12.0005Z',
  d34: 'M13.8013 6.75436C13.1924 7.79813 13 9.10351 13 10.0005H11C11 8.89747 11.2243 7.20284 12.0737 5.74662C12.9602 4.22702 14.5195 3.00049 17 3.00049V5.00049C15.3138 5.00049 14.3732 5.77395 13.8013 6.75436ZM10 13.0005H5V11.0005H10V13.0005ZM19 13.0005H14V11.0005H19V13.0005ZM10.1987 17.2466C10.8076 16.2028 11 14.8975 11 14.0005H13C13 15.1035 12.7757 16.7981 11.9263 18.2544C11.0398 19.774 9.48051 21.0005 7 21.0005V19.0005C8.68616 19.0005 9.62682 18.227 10.1987 17.2466Z',
} as const;

export const IconAnchorPointStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="anchor-point-stroke-rounded IconAnchorPointStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnchorPointDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="anchor-point-duotone-rounded IconAnchorPointDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d12} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnchorPointTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="anchor-point-twotone-rounded IconAnchorPointTwotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnchorPointSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="anchor-point-solid-rounded IconAnchorPointSolidRounded"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAnchorPointBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="anchor-point-bulk-rounded IconAnchorPointBulkRounded"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAnchorPointStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="anchor-point-stroke-sharp IconAnchorPointStrokeSharp"
    >
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnchorPointSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="anchor-point-solid-sharp IconAnchorPointSolidSharp"
    >
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAnchorPoint: TheIconSelfPack = {
  name: 'AnchorPoint',
  StrokeRounded: IconAnchorPointStrokeRounded,
  DuotoneRounded: IconAnchorPointDuotoneRounded,
  TwotoneRounded: IconAnchorPointTwotoneRounded,
  SolidRounded: IconAnchorPointSolidRounded,
  BulkRounded: IconAnchorPointBulkRounded,
  StrokeSharp: IconAnchorPointStrokeSharp,
  SolidSharp: IconAnchorPointSolidSharp,
};