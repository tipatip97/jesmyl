import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 13C15.2 13.9167 16.08 16 18 17M18 17C19.92 16 20.8 13.9167 21 13M18 17V22M20.5 19H15.5',
  d2: 'M12.5 22L10.7273 22C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273L3 12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22282 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3013 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818L20 9.5',
  d3: 'M3 12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M12.5 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2H13.8182C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V14.5C20 17.7875 20 19.4312 19.092 20.5376C18.9258 20.7401 18.7401 20.9258 18.5376 21.092C17.4312 22 15.7875 22 12.5 22Z',
  d5: 'M14.537 11.773C15.0766 11.6552 15.6095 11.9972 15.7272 12.5368C15.8757 13.2174 16.5031 14.6966 17.7502 15.5803C18.9973 14.6966 19.6247 13.2174 19.7732 12.5368C19.8909 11.9972 20.4238 11.6552 20.9634 11.773C21.503 11.8907 21.845 12.4235 21.7272 12.9631C21.5123 13.9482 20.655 16.0596 18.7502 17.3198V17.75H20.2502C20.8025 17.75 21.2502 18.1977 21.2502 18.75C21.2502 19.3023 20.8025 19.75 20.2502 19.75H18.7502V21.75C18.7502 22.3023 18.3025 22.75 17.7502 22.75C17.1979 22.75 16.7502 22.3023 16.7502 21.75V19.75H15.2502C14.6979 19.75 14.2502 19.3023 14.2502 18.75C14.2502 18.1977 14.6979 17.75 15.2502 17.75H16.7502V17.3198C14.8454 16.0596 13.9881 13.9482 13.7732 12.9631C13.6555 12.4235 13.9975 11.8907 14.537 11.773Z',
  d6: 'M10.6839 22.75C9.09005 22.7501 7.83489 22.7501 6.83912 22.6463C5.82238 22.5403 4.98632 22.3192 4.2711 21.8153C3.8893 21.5463 3.54882 21.2262 3.26073 20.864C2.71584 20.179 2.47549 19.3734 2.3611 18.4012C2.24998 17.4568 2.24999 16.2693 2.25 14.7754V12.1543C2.25 10.6959 2.25 9.56438 2.31024 8.65102C2.37131 7.72522 2.49655 6.97179 2.77169 6.27748C3.60981 4.16259 5.37464 2.5114 7.58994 1.73373C8.96882 1.24969 10.6607 1.24982 13.6261 1.25004L13.9888 1.25002C15.624 1.24968 16.643 1.24947 17.4836 1.54458C18.8327 2.01816 19.9143 3.02627 20.4293 4.32588C20.6039 4.76661 20.6789 5.23452 20.7149 5.77945C20.75 6.31198 20.75 6.96761 20.75 7.79187V8.99905C20.75 9.55186 20.3019 10 19.7491 10C19.1969 10 18.7491 9.55295 18.7481 9.00084L18.7463 8C18.7275 5.98374 18.6096 4.86713 17.8712 4.12873C16.9925 3.25005 15.5783 3.25005 12.7499 3.25005H12.4555C11.9509 3.25005 11.6985 3.25005 11.3592 3.43819C11.0199 3.62634 10.949 3.73982 10.8072 3.96679C10.5596 4.36319 10.4166 4.83157 10.4166 5.33338C10.4166 5.48051 10.423 5.63869 10.4313 5.81629L10.4344 5.88216C10.4416 6.03706 10.4496 6.20563 10.4531 6.37374C10.4609 6.75384 10.4489 7.19738 10.3342 7.62552C10.1108 8.4595 9.45935 9.1109 8.62538 9.33437C8.19723 9.44909 7.75369 9.46109 7.3736 9.4532C7.20546 9.44971 7.03687 9.44178 6.88195 9.4345L6.81614 9.43142C6.63854 9.42319 6.48036 9.41671 6.33323 9.41671C5.85217 9.41671 5.40182 9.5482 5.01616 9.77721C4.78124 9.9167 4.66378 9.98644 4.46739 10.3315C4.271 10.6765 4.271 10.9343 4.271 11.4501V14.7501C4.271 17.5785 4.271 18.9927 5.14968 19.8714C6.02836 20.7501 7.44257 20.7501 10.271 20.7501L12.0008 20.7501C12.5526 20.7501 13 21.1974 13 21.7493C13 22.3007 12.5533 22.7479 12.0019 22.7485L10.6839 22.75Z',
  d7: 'M15 12.5L18 16.5M18 16.5L21 12.5M18 16.5V22.5M21 18.5H15',
  d8: 'M10 1.5V8.5H3',
  d9: 'M19.9677 10.4837V1.51194C19.9677 1.50643 19.9633 1.50195 19.9577 1.50195L9.95655 1.50225L3 8.48658V21.4881C3 21.4936 3.00448 21.498 3.01 21.498H12.9804',
  d10: 'M16.9501 17.0832L14.1501 13.3499L15.7501 12.1499L17.9501 15.0832L20.1501 12.1499L21.7501 13.3499L18.9501 17.0832V17.7499H20.9501V19.7499H18.9501V22.7499H16.9501V19.7499H14.9501V17.7499H16.9501V17.0832Z',
  d11: 'M19.7761 1.25C20.3138 1.25 20.7498 1.68754 20.7498 2.22727V10.0682H18.8024V3.20455L11.0129 3.20455L11.0129 10.0455H4.19712L4.19712 20.7955H12.9603V22.75H3.22344C2.68569 22.75 2.24976 22.3125 2.24976 21.7727V8.66338L9.63592 1.25H19.7761Z',
} as const;

export const IconFileYenStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-yen-stroke-rounded IconFileYenStrokeRounded"
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

export const IconFileYenDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-yen-duotone-rounded IconFileYenDuotoneRounded"
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

export const IconFileYenTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-yen-twotone-rounded IconFileYenTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFileYenSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-yen-solid-rounded IconFileYenSolidRounded"
    >
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

export const IconFileYenBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-yen-bulk-rounded IconFileYenBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileYenStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-yen-stroke-sharp IconFileYenStrokeSharp"
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileYenSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-yen-solid-sharp IconFileYenSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfFileYen: TheIconSelfPack = {
  name: 'FileYen',
  StrokeRounded: IconFileYenStrokeRounded,
  DuotoneRounded: IconFileYenDuotoneRounded,
  TwotoneRounded: IconFileYenTwotoneRounded,
  SolidRounded: IconFileYenSolidRounded,
  BulkRounded: IconFileYenBulkRounded,
  StrokeSharp: IconFileYenStrokeSharp,
  SolidSharp: IconFileYenSolidSharp,
};