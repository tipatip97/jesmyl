import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.5 11.5L7 12.5M10.5 11.5L11 12.5',
  d2: 'M16.5 6.5L17 7.5',
  d3: 'M9 22C12.866 22 16 19.3137 16 16C16 14.5985 15.4394 13.1304 14.5 11.9028C12.5622 9.57474 12.0035 7.80237 12 7C11.9412 8.60728 9.9849 9.47735 9 8C8.0151 9.47735 6.05882 8.60728 6 7C5.99651 7.80237 5.43778 9.57474 3.5 11.9028C2.56057 13.1304 2 14.5985 2 16C2 19.3137 5.13401 22 9 22Z',
  d4: 'M11 5.01625C11.8344 3.62313 12.11 2.56899 12.1124 2C12.1706 3.61599 14.1049 4.49076 15.0787 3.00542C16.0525 4.49076 17.9868 3.61599 18.045 2C18.0484 2.80672 18.6009 4.58869 20.5169 6.9293C21.4457 8.16365 22 9.6397 22 11.0487C22 13.0987 20.8268 14.9099 19.0337 16',
  d5: 'M6.7495 6.97257C6.73457 6.56461 6.39609 6.24352 5.98791 6.2501C5.57973 6.25668 5.25178 6.58851 5.25001 6.99674C5.24761 7.54913 4.81063 9.15586 2.92356 11.4229C2.917 11.4308 2.9106 11.4388 2.90437 11.447C1.88354 12.7811 1.25 14.4054 1.25 16C1.25 19.8322 4.83242 22.75 9 22.75C13.1676 22.75 16.75 19.8322 16.75 16C16.75 14.4054 16.1165 12.7811 15.0956 11.447C15.0894 11.4388 15.083 11.4308 15.0764 11.4229C13.1894 9.15586 12.7524 7.54913 12.75 6.99674C12.7482 6.58851 12.4203 6.25668 12.0121 6.2501C11.6039 6.24352 11.2654 6.56461 11.2505 6.97257C11.2324 7.46736 10.926 7.82542 10.5825 7.95503C10.2805 8.06897 9.91748 8.02413 9.62404 7.58398C9.48494 7.37533 9.25076 7.25 9 7.25C8.74924 7.25 8.51506 7.37533 8.37596 7.58398C8.08252 8.02413 7.71948 8.06897 7.41749 7.95503C7.07398 7.82542 6.76761 7.46736 6.7495 6.97257ZM8.17098 11.8354C8.35623 11.4649 8.20606 11.0144 7.83557 10.8292C7.46509 10.6439 7.01459 10.7941 6.82934 11.1646L6.32934 12.1646C6.1441 12.5351 6.29427 12.9856 6.66475 13.1708C7.03524 13.356 7.48574 13.2059 7.67098 12.8354L8.17098 11.8354ZM11.171 11.1646C10.9857 10.7941 10.5352 10.6439 10.1648 10.8292C9.79427 11.0144 9.6441 11.4649 9.82934 11.8354L10.3293 12.8354C10.5146 13.2059 10.9651 13.356 11.3356 13.1708C11.7061 12.9856 11.8562 12.5351 11.671 12.1646L11.171 11.1646Z',
  d6: 'M11.9893 1.2501C12.3974 1.24352 12.7359 1.56461 12.7509 1.97257C12.769 2.46736 13.0753 2.82542 13.4188 2.95502C13.7208 3.06897 14.0839 3.02413 14.3773 2.58398C14.5164 2.37533 14.7506 2.25 15.0014 2.25C15.2521 2.25 15.4863 2.37533 15.6254 2.58398C15.9188 3.02413 16.2819 3.06897 16.5839 2.95502C16.9274 2.82542 17.2337 2.46736 17.2519 1.97257C17.2668 1.56461 17.6053 1.24352 18.0134 1.2501C18.4216 1.25668 18.7496 1.58851 18.7513 1.99674C18.7537 2.54913 19.1907 4.15586 21.0778 6.42294C21.0844 6.43082 21.0907 6.43884 21.097 6.44698C22.1178 7.78106 22.7514 9.40543 22.7514 11C22.7514 13.565 21.1465 15.7203 18.8354 16.8653C18.4521 17.0552 18.2604 17.1502 18.1173 17.0581C17.9743 16.9661 17.9821 16.7261 17.9976 16.246C18.0003 16.1645 18.0016 16.0825 18.0016 16C18.0016 14.0834 17.2463 12.1985 16.0899 10.6873C16.0733 10.6657 16.0563 10.6443 16.0388 10.6233C15.1569 9.56385 14.6385 8.68804 14.3445 8.04628C14.1974 7.72504 14.1087 7.46728 14.058 7.27852C14.0083 7.09332 14.0022 7.00025 14.0016 6.99131C13.9968 5.9027 13.1223 5.01781 12.0338 5.00026C11.2591 4.98778 10.5786 5.4179 10.2363 6.05914C10.1463 6.22765 9.87066 6.28771 9.68672 6.23616C9.44742 6.1691 9.37356 5.86481 9.5217 5.66527C10.907 3.79916 11.2492 2.4854 11.2514 1.99674C11.2531 1.58851 11.5811 1.25668 11.9893 1.2501ZM15.829 6.83557C15.6438 6.46509 15.7939 6.01459 16.1644 5.82934C16.5349 5.6441 16.9854 5.79427 17.1707 6.16475L17.6707 7.16475C17.8559 7.53524 17.7057 7.98574 17.3352 8.17098C16.9648 8.35623 16.5143 8.20606 16.329 7.83557L15.829 6.83557Z',
  d7: 'M7.5 11.5L6.5 13M10.5 11.5L11.5 13',
  d8: 'M16.5 6.5L17.5 8',
  d9: 'M9.62404 7.40736L9 6.47583L8.37596 7.40736C8.08252 7.84539 7.71948 7.89001 7.41749 7.77661C7.07398 7.64763 6.76761 7.29131 6.7495 6.79891L5.25001 6.82296C5.24761 7.37268 4.81063 8.97164 2.92356 11.2278L2.91372 11.2395L2.90437 11.2517C1.88354 12.5793 1.25 14.1958 1.25 15.7827C1.25 19.5964 4.83242 22.5 9 22.5C13.1676 22.5 16.75 19.5964 16.75 15.7827C16.75 14.1958 16.1165 12.5793 15.0956 11.2517L15.0863 11.2395L15.0764 11.2278C13.1894 8.97164 12.7524 7.37268 12.75 6.82296L11.2505 6.79891C11.2324 7.29131 10.926 7.64763 10.5825 7.77661C10.2805 7.89001 9.91748 7.84539 9.62404 7.40736ZM6.875 10.8904L5.875 12.3831L7.12308 13.2112L8.12308 11.7184L6.875 10.8904ZM9.875 11.7184L10.875 13.2112L12.1231 12.3831L11.1231 10.8904L9.875 11.7184Z',
  d10: 'M15.0008 1.5L15.6249 2.43153C15.9183 2.86956 16.2814 2.91418 16.5834 2.80078C16.9269 2.6718 17.2332 2.31548 17.2513 1.82308L18.7508 1.84713C18.7532 2.39685 19.1902 3.99581 21.0773 6.25192L21.0871 6.26369L21.0965 6.27585C22.1173 7.60347 22.7508 9.21999 22.7508 10.8068C22.7508 13.5999 20.8293 15.9048 18.1637 16.9385C18.221 16.5638 18.2508 16.1782 18.2508 15.7827C18.2508 13.8113 17.4712 11.8837 16.2877 10.3446L16.2597 10.3081L16.2301 10.2728C15.3607 9.23329 14.8547 8.38016 14.571 7.76386C14.3028 7.18103 14.2581 6.86565 14.2518 6.82112C14.251 6.816 14.2508 6.81446 14.2508 6.81651L14.2444 5.35403L10.0065 5.28605L9.8457 5.04596C10.9611 3.42897 11.2489 2.29297 11.2508 1.84713L12.7503 1.82308C12.7684 2.31548 13.0748 2.6718 13.4183 2.80078C13.7203 2.91418 14.0834 2.86956 14.3768 2.43153L15.0008 1.5ZM17.123 5.91458L18.123 7.40732L16.875 8.23535L15.875 6.7426L17.123 5.91458Z',
} as const;

export const IconDimSum02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-02-stroke-rounded IconDimSum02StrokeRounded"
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

export const IconDimSum02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-02-duotone-rounded IconDimSum02DuotoneRounded"
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

export const IconDimSum02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-02-twotone-rounded IconDimSum02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDimSum02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-02-solid-rounded IconDimSum02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDimSum02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-02-bulk-rounded IconDimSum02BulkRounded"
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
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDimSum02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-02-stroke-sharp IconDimSum02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDimSum02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-02-solid-sharp IconDimSum02SolidSharp"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfDimSum02: TheIconSelfPack = {
  name: 'DimSum02',
  StrokeRounded: IconDimSum02StrokeRounded,
  DuotoneRounded: IconDimSum02DuotoneRounded,
  TwotoneRounded: IconDimSum02TwotoneRounded,
  SolidRounded: IconDimSum02SolidRounded,
  BulkRounded: IconDimSum02BulkRounded,
  StrokeSharp: IconDimSum02StrokeSharp,
  SolidSharp: IconDimSum02SolidSharp,
};