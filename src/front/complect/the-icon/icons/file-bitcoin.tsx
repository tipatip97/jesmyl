import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.002 17.5H19.502M16.002 17.5V15C16.002 14.5286 16.002 14.2929 16.1484 14.1464C16.2948 14 16.5305 14 17.002 14H18.002M16.002 17.5V20C16.002 20.4714 16.002 20.7071 16.1484 20.8536C16.2948 21 16.5305 21 17.002 21H18.002M19.502 17.5C20.3304 17.5 21.002 16.7165 21.002 15.75C21.002 14.7835 20.3304 14 19.502 14H18.002M19.502 17.5C20.3304 17.5 21.002 18.2835 21.002 19.25C21.002 20.2165 20.3304 21 19.502 21H18.002M18.002 21V22M18.002 14V13',
  d2: 'M13 22L10.7273 22C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273L3 12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22282 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3013 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818L20 10',
  d3: 'M3 12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M10.7273 22H13C15.6445 22 16.9668 22 17.9391 21.3928C18.1258 21.2762 18.302 21.1448 18.4661 21H17.002C16.5305 21 16.2948 21 16.1484 20.8536C16.002 20.7071 16.002 20.4714 16.002 20V15C16.002 14.5286 16.002 14.2929 16.1484 14.1464C16.2948 14 16.5305 14 17.002 14H19.502C19.6431 14 19.7797 14.0227 19.9092 14.0653L20 10V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2H13C11.1591 2 9.66667 3.49238 9.66667 5.33333C9.66667 5.52067 9.6759 5.71745 9.68532 5.91793C9.70935 6.42995 9.73452 6.96618 9.60988 7.43136C9.45576 8.00652 9.00652 8.45576 8.43137 8.60988C7.96618 8.73452 7.42995 8.70935 6.91793 8.68531C6.71745 8.6759 6.52067 8.66667 6.33333 8.66667C4.49238 8.66667 3 10.159 3 12V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.83546 22 7.46607 22 10.7273 22Z',
  d5: 'M19.8125 17.4625C19.7123 17.4871 19.6084 17.5 19.502 17.5C19.6069 17.5 19.7093 17.5126 19.8082 17.5365C19.8096 17.512 19.8111 17.4873 19.8125 17.4625Z',
  d6: 'M17.75 11.75C18.3023 11.75 18.75 12.1977 18.75 12.75H19.25C20.7698 12.75 21.75 14.1314 21.75 15.5C21.75 16.1249 21.5457 16.7525 21.1789 17.25C21.5457 17.7475 21.75 18.3751 21.75 19C21.75 20.3686 20.7698 21.75 19.25 21.75H18.75C18.75 22.3023 18.3023 22.75 17.75 22.75C17.1977 22.75 16.75 22.3023 16.75 21.75C16.7371 21.75 16.724 21.75 16.7106 21.75C16.5108 21.7501 16.2728 21.7503 16.0682 21.7228C15.8211 21.6896 15.4794 21.6007 15.1894 21.3107C14.8994 21.0207 14.8105 20.6789 14.7773 20.4319C14.7497 20.2272 14.7499 19.9893 14.75 19.7894C14.75 19.7761 14.75 19.7629 14.75 19.75V14.75C14.75 14.7371 14.75 14.7239 14.75 14.7106C14.7499 14.5107 14.7497 14.2728 14.7773 14.0681C14.8105 13.8211 14.8994 13.4793 15.1894 13.1893C15.4794 12.8993 15.8211 12.8104 16.0682 12.7772C16.2728 12.7497 16.5108 12.7499 16.7107 12.75C16.724 12.75 16.7371 12.75 16.75 12.75C16.75 12.1977 17.1977 11.75 17.75 11.75ZM19.25 16.25C19.3334 16.25 19.4431 16.213 19.5514 16.0866C19.6616 15.9582 19.75 15.7539 19.75 15.5C19.75 15.2461 19.6616 15.0418 19.5514 14.9134C19.4431 14.787 19.3334 14.75 19.25 14.75H16.75V16.25H19.25ZM16.75 18.25H19.25C19.3334 18.25 19.4431 18.287 19.5514 18.4134C19.6616 18.5418 19.75 18.7461 19.75 19C19.75 19.2539 19.6616 19.4582 19.5514 19.5866C19.4431 19.713 19.3334 19.75 19.25 19.75H16.75V18.25Z',
  d7: 'M10.6839 22.75C9.09005 22.7501 7.83489 22.7501 6.83912 22.6463C5.82238 22.5403 4.98632 22.3192 4.2711 21.8153C3.8893 21.5463 3.54882 21.2262 3.26073 20.864C2.71584 20.179 2.47549 19.3734 2.3611 18.4012C2.24998 17.4568 2.24999 16.2693 2.25 14.7754V12.1543C2.25 10.6959 2.25 9.56438 2.31024 8.65102C2.37131 7.72522 2.49655 6.97179 2.77169 6.27748C3.60981 4.16259 5.37464 2.5114 7.58994 1.73373C8.96882 1.24969 10.6607 1.24982 13.6261 1.25004L13.9888 1.25002C15.624 1.24968 16.643 1.24947 17.4836 1.54458C18.8327 2.01816 19.9143 3.02627 20.4293 4.32588C20.6039 4.76661 20.6789 5.23452 20.7149 5.77945C20.75 6.31198 20.75 6.96761 20.75 7.79187V8.99905C20.75 9.55186 20.3019 10 19.7491 10C19.1969 10 18.7491 9.55295 18.7481 9.00084L18.7463 8C18.7275 5.98374 18.6096 4.86713 17.8712 4.12873C16.9925 3.25005 15.5783 3.25005 12.7499 3.25005H12.4555C11.9509 3.25005 11.6985 3.25005 11.3592 3.43819C11.0199 3.62634 10.949 3.73982 10.8072 3.96679C10.5596 4.36319 10.4166 4.83157 10.4166 5.33338C10.4166 5.48051 10.423 5.63869 10.4313 5.81629L10.4344 5.88216C10.4416 6.03706 10.4496 6.20563 10.4531 6.37374C10.4609 6.75384 10.4489 7.19738 10.3342 7.62552C10.1108 8.4595 9.45935 9.1109 8.62538 9.33437C8.19723 9.44909 7.75369 9.46109 7.3736 9.4532C7.20546 9.44971 7.03687 9.44178 6.88195 9.4345L6.81614 9.43142C6.63854 9.42319 6.48036 9.41671 6.33323 9.41671C5.85217 9.41671 5.40182 9.5482 5.01616 9.77721C4.78124 9.9167 4.66378 9.98644 4.46739 10.3315C4.271 10.6765 4.271 10.9343 4.271 11.4501V14.7501C4.271 17.5785 4.271 18.9927 5.14968 19.8714C6.02836 20.7501 7.44257 20.7501 10.271 20.7501L12.0008 20.7501C12.5526 20.7501 13 21.1974 13 21.7493C13 22.3007 12.5533 22.7479 12.0019 22.7485L10.6839 22.75Z',
  d8: 'M16.001 16.4894H19.501M16.001 16.4894V12.9924H18.001M16.001 16.4894V19.9863H18.001M19.501 16.4894C20.3294 16.4894 21.001 15.7066 21.001 14.7409C21.001 13.7752 20.3294 12.9924 19.501 12.9924H18.001M19.501 16.4894C20.3294 16.4894 21.001 17.2722 21.001 18.2379C21.001 19.2035 20.3294 19.9863 19.501 19.9863H18.001M18.001 12.9924V10.9941M18.001 19.9863V21.9846',
  d9: 'M9.99902 2.00195V8.99589H2.99902',
  d10: 'M20.0009 8.99012V2.01194C20.0009 2.00643 19.9965 2.00195 19.9909 2.00195L9.98975 2.00225L3.0332 8.98658V21.9881C3.0332 21.9936 3.03768 21.998 3.0432 21.998H13.0136',
  d11: 'M16.75 12H14.75V21H16.75V22H18.75V21H19.25C20.7698 21 21.75 19.6186 21.75 18.25C21.75 17.6251 21.5456 16.9975 21.1789 16.5C21.5456 16.0025 21.75 15.3749 21.75 14.75C21.75 13.3814 20.7698 12 19.25 12H18.75V11H16.75V12ZM19.25 15.5C19.3334 15.5 19.4431 15.463 19.5514 15.3366C19.6615 15.2082 19.75 15.0039 19.75 14.75C19.75 14.4961 19.6615 14.2918 19.5514 14.1634C19.4431 14.037 19.3334 14 19.25 14H16.75V15.5H19.25ZM16.75 17.5H19.25C19.3334 17.5 19.4431 17.537 19.5514 17.6634C19.6615 17.7918 19.75 17.9961 19.75 18.25C19.75 18.5039 19.6615 18.7082 19.5514 18.8366C19.4431 18.963 19.3334 19 19.25 19H16.75V17.5Z',
  d12: 'M19.7763 1.25C20.3141 1.25 20.75 1.68754 20.75 2.22727V9.06818H18.8026V3.20455L11.0132 3.20455L11.0132 10.0455H4.19737L4.19737 20.7955H12.9605V22.75H3.22368C2.68593 22.75 2.25 22.3125 2.25 21.7727V8.66338L9.63616 1.25H19.7763Z',
} as const;

export const IconFileBitcoinStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bitcoin-stroke-rounded IconFileBitcoinStrokeRounded"
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

export const IconFileBitcoinDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bitcoin-duotone-rounded IconFileBitcoinDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
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

export const IconFileBitcoinTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bitcoin-twotone-rounded IconFileBitcoinTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFileBitcoinSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bitcoin-solid-rounded IconFileBitcoinSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileBitcoinBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bitcoin-bulk-rounded IconFileBitcoinBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileBitcoinStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bitcoin-stroke-sharp IconFileBitcoinStrokeSharp"
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileBitcoinSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bitcoin-solid-sharp IconFileBitcoinSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileBitcoin: TheIconSelfPack = {
  name: 'FileBitcoin',
  StrokeRounded: IconFileBitcoinStrokeRounded,
  DuotoneRounded: IconFileBitcoinDuotoneRounded,
  TwotoneRounded: IconFileBitcoinTwotoneRounded,
  SolidRounded: IconFileBitcoinSolidRounded,
  BulkRounded: IconFileBitcoinBulkRounded,
  StrokeSharp: IconFileBitcoinStrokeSharp,
  SolidSharp: IconFileBitcoinSolidSharp,
};