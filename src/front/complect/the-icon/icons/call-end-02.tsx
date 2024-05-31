import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.7133 4.59374C18.1939 4.98463 19.2229 5.47922 20.1589 6.08481C21.5432 6.98045 22.1367 8.59437 21.9737 10.1517C21.9049 10.8099 21.3744 11.1246 20.7592 10.9544L19.3705 10.57C18.2697 10.2653 17.7193 10.1129 17.3837 9.70995C17.0481 9.30697 17.0086 8.751 16.9296 7.63907L16.7133 4.59374ZM16.7133 4.59374C13.7164 3.80255 10.2871 3.80163 7.28669 4.59374M7.28669 4.59374C5.80606 4.98463 4.77711 5.47923 3.84113 6.08481C2.45683 6.98045 1.86334 8.59438 2.02628 10.1517C2.09514 10.8099 2.62563 11.1246 3.24078 10.9544L4.62954 10.57C5.73032 10.2653 6.28071 10.1129 6.61631 9.70995C6.95191 9.30697 6.9914 8.751 7.07038 7.63907L7.28669 4.59374Z',
  d2: 'M9.5 17.5C9.99153 18.0057 11.2998 20 12 20M14.5 17.5C14.0085 18.0057 12.7002 20 12 20M12 20V12',
  d3: 'M16.7133 4.59375C18.1939 4.98464 19.2229 5.47923 20.1589 6.08482C21.5432 6.98046 22.1367 8.59438 21.9737 10.1517C21.9049 10.8099 21.3744 11.1247 20.7592 10.9544L19.3705 10.57C18.2697 10.2653 17.7193 10.1129 17.3837 9.70996C17.0481 9.30698 17.0086 8.75101 16.9296 7.63908L16.7133 4.59375Z',
  d4: 'M7.28669 4.59375C5.80606 4.98464 4.77711 5.47924 3.84113 6.08482C2.45683 6.98046 1.86334 8.59439 2.02628 10.1517C2.09514 10.8099 2.62563 11.1247 3.24078 10.9544L4.62954 10.57C5.73032 10.2653 6.28071 10.1129 6.61631 9.70996C6.95191 9.30698 6.9914 8.75101 7.07038 7.63908L7.28669 4.59375Z',
  d5: 'M7.09551 3.74359C10.2215 2.91833 13.7827 2.91928 16.905 3.74358C18.4637 4.15507 19.5653 4.68232 20.5665 5.33011C22.2308 6.40686 22.9065 8.32123 22.7199 10.1048C22.6651 10.6282 22.4121 11.0911 21.976 11.3703C21.5476 11.6447 21.0341 11.6836 20.5594 11.5522L19.1331 11.1574C18.6148 11.014 18.1682 10.8904 17.8124 10.7484C17.4317 10.5965 17.0849 10.3979 16.8076 10.0649C16.5291 9.73042 16.3988 9.35436 16.3236 8.95386C16.2538 8.58269 16.2216 8.12897 16.1846 7.60715L16.0697 5.98927C16.0542 5.77078 16.0464 5.66153 15.9781 5.58511C15.9098 5.5087 15.8045 5.48919 15.5939 5.45017C13.2546 5.0168 10.7478 5.01643 8.40662 5.45016C8.196 5.48918 8.09069 5.50869 8.0224 5.58511C7.95412 5.66153 7.94636 5.77077 7.93084 5.98926L7.81592 7.60717C7.77888 8.12898 7.74668 8.58269 7.67694 8.95386C7.60169 9.35436 7.47144 9.73042 7.19289 10.0649C6.91561 10.3979 6.56887 10.5965 6.18808 10.7484C5.83234 10.8904 5.38577 11.0139 4.86744 11.1574L3.44112 11.5522C2.96646 11.6836 2.45292 11.6447 2.0245 11.3703C1.58838 11.0911 1.33538 10.6282 1.28061 10.1048C1.09401 8.32123 1.76976 6.40685 3.43398 5.33011C4.4352 4.68232 5.53686 4.15507 7.09551 3.74359Z',
  d6: 'M13.0061 11.875C13.0061 11.3227 12.5584 10.875 12.0061 10.875C11.4538 10.875 11.0061 11.3227 11.0061 11.875L11.0061 16.375L10.4118 16.375C10.2362 16.3749 10.0206 16.3747 9.84412 16.3968L9.84077 16.3972C9.71432 16.413 9.13828 16.4848 8.86392 17.0504C8.58896 17.6173 8.8909 18.1174 8.95622 18.2256L8.95865 18.2296C9.05087 18.3826 9.18501 18.5535 9.29536 18.6941L9.31909 18.7243C9.61372 19.1002 9.99569 19.5844 10.3761 19.9754C10.566 20.1705 10.7832 20.3717 11.0141 20.5306C11.2194 20.6718 11.5696 20.875 12.0002 20.875C12.4309 20.875 12.7811 20.6718 12.9864 20.5306C13.2173 20.3717 13.4345 20.1705 13.6244 19.9754C14.0048 19.5844 14.3868 19.1002 14.6814 18.7243L14.7051 18.6941C14.8155 18.5535 14.9496 18.3827 15.0418 18.2296L15.0443 18.2256C15.1096 18.1174 15.4115 17.6172 15.1366 17.0504C14.8622 16.4848 14.2862 16.413 14.1597 16.3972L14.1564 16.3968C13.9799 16.3747 13.7643 16.3749 13.5886 16.375L13.0061 16.375L13.0061 11.875Z',
  d7: 'M7.09527 3.74359C10.2212 2.91833 13.7824 2.91928 16.9048 3.74358C18.4634 4.15507 19.5651 4.68232 20.5663 5.33011C22.2305 6.40686 22.9063 8.32123 22.7197 10.1048C22.6649 10.6282 22.4119 11.0911 21.9758 11.3703C21.5474 11.6447 21.0338 11.6836 20.5592 11.5522L19.1329 11.1574C18.6145 11.014 18.168 10.8904 17.8122 10.7484C17.4314 10.5965 17.0847 10.3979 16.8074 10.0649C16.5288 9.73042 16.3986 9.35436 16.3233 8.95386C16.2536 8.58269 16.2214 8.12897 16.1844 7.60715L16.0694 5.98927C16.0539 5.77078 16.0462 5.66153 15.9779 5.58511C15.9096 5.5087 15.8043 5.48919 15.5937 5.45017C13.2543 5.0168 10.7475 5.01643 8.40638 5.45016C8.19576 5.48918 8.09044 5.50869 8.02216 5.58511C7.95387 5.66153 7.94611 5.77077 7.93059 5.98926L7.81567 7.60717C7.77864 8.12898 7.74643 8.58269 7.67669 8.95386C7.60144 9.35436 7.4712 9.73042 7.19264 10.0649C6.91537 10.3979 6.56862 10.5965 6.18783 10.7484C5.83209 10.8904 5.38552 11.0139 4.8672 11.1574L4.86717 11.1574L3.44087 11.5522C2.96622 11.6836 2.45268 11.6447 2.02425 11.3703C1.58814 11.0911 1.33514 10.6282 1.28037 10.1048C1.09377 8.32123 1.76952 6.40685 3.43373 5.33011C4.43496 4.68232 5.53662 4.15507 7.09527 3.74359Z',
  d8: 'M8.9939 17.0041L11.9957 19.9981L14.9974 17.0041M11.9957 12.0142V19.5475',
  d9: 'M7.25503 4.53466L7.10099 9.04591L2.04993 11.0434C2.04362 11.0459 2.03669 11.0414 2.03625 11.0346C1.88708 8.75789 2.15926 7.15739 3.28898 6.34457C4.76505 5.28257 7.50621 4.13595 11.2998 4.04816C12.7717 3.91496 14.7327 4.04993 16.7966 4.67169M16.7966 4.67169C18.9595 5.32328 21.5391 6.08431 21.9401 8.32222C22.0284 8.8152 22.0361 10.3755 21.8614 11.0838C21.8602 11.0887 21.8551 11.0914 21.8504 11.0898L16.7966 9.04591V4.67169Z',
  d10: 'M1.43692 11.8088L1.33479 10.8274C1.17197 9.26291 1.00525 6.72033 3.22641 5.27191C4.25075 4.60443 5.37825 4.06092 6.97394 3.63687C8.57804 3.21059 10.2909 2.9994 11.9996 3C13.7084 2.99941 15.4214 3.21082 17.0254 3.63708C18.6211 4.06114 19.7484 4.60451 20.7727 5.27198C22.9939 6.7204 22.8274 9.26312 22.6646 10.8276L22.5624 11.8091L16.0828 9.26097V5.50556C14.7739 5.20642 13.3888 5.05593 11.9999 5.05643C10.611 5.05592 9.22544 5.20627 7.91657 5.50536V9.26099L1.43692 11.8088Z',
  d11: 'M12.0001 21L15.7072 17.2929L14.293 15.8787L13.0001 17.1716V11.5858H11.0001L11.0001 17.1716L9.70718 15.8787L8.29297 17.2929L12.0001 21Z',
} as const;

export const IconCallEnd02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-end-02-stroke-rounded IconCallEnd02StrokeRounded"
    >
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallEnd02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-end-02-duotone-rounded IconCallEnd02DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      </g>
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallEnd02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-end-02-twotone-rounded IconCallEnd02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconCallEnd02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-end-02-solid-rounded IconCallEnd02SolidRounded"
    >
      <path 
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

export const IconCallEnd02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-end-02-bulk-rounded IconCallEnd02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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

export const IconCallEnd02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-end-02-stroke-sharp IconCallEnd02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallEnd02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-end-02-solid-sharp IconCallEnd02SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCallEnd02: TheIconSelfPack = {
  name: 'CallEnd02',
  StrokeRounded: IconCallEnd02StrokeRounded,
  DuotoneRounded: IconCallEnd02DuotoneRounded,
  TwotoneRounded: IconCallEnd02TwotoneRounded,
  SolidRounded: IconCallEnd02SolidRounded,
  BulkRounded: IconCallEnd02BulkRounded,
  StrokeSharp: IconCallEnd02StrokeSharp,
  SolidSharp: IconCallEnd02SolidSharp,
};