import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 22L10.7273 22C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273L3 12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22282 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3013 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818L20 10.5',
  d2: 'M3 12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d3: 'M21 20.4923C20.5216 21.3957 19.6512 22 18.6568 22C17.147 22 15.9231 20.6071 15.9231 18.8889V17.1111C15.9231 15.3929 17.147 14 18.6568 14C19.6512 14 20.5216 14.6043 21 15.5077M15 18H18.9231',
  d4: 'M12.5 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2H13.8182C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V14.5C20 17.7875 20 19.4312 19.092 20.5376C18.9258 20.7401 18.7401 20.9258 18.5376 21.092C17.4312 22 15.7875 22 12.5 22Z',
  d5: 'M10.6839 22.7498C9.09005 22.7498 7.83489 22.7498 6.83912 22.646C5.82238 22.5401 4.98632 22.319 4.2711 21.8151C3.8893 21.5461 3.54882 21.226 3.26073 20.8638C2.71584 20.1787 2.47549 19.3732 2.3611 18.401C2.24998 17.4566 2.24999 16.2691 2.25 14.7752V12.1541C2.25 10.6957 2.25 9.56414 2.31024 8.65078C2.37131 7.72497 2.49655 6.97154 2.77169 6.27724C3.60981 4.16235 5.37464 2.51115 7.58994 1.73349C8.96882 1.24945 10.6607 1.24957 13.6261 1.24979L13.9888 1.24978C15.624 1.24944 16.643 1.24923 17.4836 1.54434C18.8327 2.01792 19.9143 3.02603 20.4293 4.32563C20.6039 4.76637 20.6789 5.23427 20.7149 5.7792C20.75 6.31174 20.75 6.96737 20.75 7.79163V9.99881C20.75 10.5516 20.3019 10.9998 19.7491 10.9998C19.1969 10.9998 18.7491 10.5527 18.7481 10.0006L18.7463 7.99976C18.7275 5.98349 18.6096 4.86689 17.8712 4.12848C16.9925 3.2498 15.5783 3.2498 12.7499 3.2498H12.4555C11.9509 3.2498 11.6985 3.2498 11.3592 3.43795C11.0199 3.6261 10.949 3.73958 10.8072 3.96654C10.5596 4.36294 10.4166 4.83133 10.4166 5.33313C10.4166 5.48026 10.423 5.63844 10.4313 5.81604L10.4344 5.88192C10.4416 6.03681 10.4496 6.20539 10.4531 6.3735C10.4609 6.75359 10.4489 7.19713 10.3342 7.62528C10.1108 8.45925 9.45935 9.11066 8.62538 9.33412C8.19723 9.44884 7.75369 9.46085 7.3736 9.45295C7.20546 9.44946 7.03687 9.44154 6.88195 9.43426L6.81614 9.43118C6.63854 9.42294 6.48036 9.41647 6.33323 9.41647C5.85217 9.41647 5.40182 9.54796 5.01616 9.77696C4.78124 9.91645 4.66378 9.9862 4.46739 10.3312C4.271 10.6763 4.271 10.9341 4.271 11.4498V14.7498C4.271 17.5783 4.271 18.9925 5.14968 19.8712C6.02836 20.7498 7.44257 20.7498 10.271 20.7498L12.0008 20.7498C12.5526 20.7498 13 21.1972 13 21.7491C13 22.3005 12.5533 22.7476 12.0019 22.7483L10.6839 22.7498Z',
  d6: 'M14.6742 16.7526C14.7254 14.6501 16.2636 12.7498 18.4066 12.7498C19.8308 12.7498 21.0115 13.6148 21.6335 14.7896C21.892 15.2777 21.7058 15.8828 21.2177 16.1413C20.7296 16.3997 20.1244 16.2135 19.866 15.7254C19.5312 15.0932 18.9712 14.7498 18.4066 14.7498C17.591 14.7498 16.7246 15.5227 16.6751 16.7498H18.6728C19.2251 16.7498 19.6728 17.1975 19.6728 17.7498C19.6728 18.302 19.2251 18.7498 18.6728 18.7498H16.6751C16.7246 19.9768 17.591 20.7498 18.4066 20.7498C18.9712 20.7498 19.5312 20.4063 19.866 19.7741C20.1244 19.286 20.7296 19.0998 21.2177 19.3582C21.7058 19.6167 21.892 20.2218 21.6335 20.7099C21.0115 21.8847 19.8308 22.7498 18.4066 22.7498C16.2636 22.7498 14.7254 20.8494 14.6742 18.7469C14.1572 18.7083 13.7498 18.2766 13.7498 17.7498C13.7498 17.2229 14.1572 16.7912 14.6742 16.7526Z',
  d7: 'M10 2V9H3',
  d8: 'M21 20.4923C20.5216 21.3957 19.6512 22 18.6568 22C17.147 22 15.9231 20.6071 15.9231 18.8889V17.1111C15.9231 15.3929 17.147 14 18.6568 14C19.6512 14 20.5216 14.6043 21 15.5077M14 18H19',
  d9: 'M19.9677 10.9856V2.0139C19.9677 2.00838 19.9633 2.00391 19.9577 2.00391L9.95655 2.0042L3 8.98853V21.99C3 21.9955 3.00448 22 3.01 22H12.9804',
  d10: 'M19.7758 1.25C20.3136 1.25 20.7495 1.68754 20.7495 2.22727V11.0682H18.8021V3.20455L11.0127 3.20455L11.0127 10.0455H4.19688L4.19688 20.7955H12.96V22.75H3.2232C2.68545 22.75 2.24951 22.3125 2.24951 21.7727V8.66338L9.63567 1.25H19.7758Z',
  d11: 'M14.7912 16.75C14.8437 14.6486 16.3815 12.75 18.5235 12.75C19.9478 12.75 21.1285 13.6151 21.7505 14.7898L19.9829 15.7257C19.6482 15.0934 19.0881 14.75 18.5235 14.75C17.7079 14.75 16.8416 15.5229 16.792 16.75H18.8667V18.75H16.792C16.8416 19.9771 17.7079 20.75 18.5235 20.75C19.0881 20.75 19.6482 20.4066 19.9829 19.7743L21.7505 20.7102C21.1285 21.8849 19.9478 22.75 18.5235 22.75C16.3815 22.75 14.8437 20.8514 14.7912 18.75H13.8667V16.75H14.7912Z',
} as const;

export const IconFileEuroStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-euro-stroke-rounded IconFileEuroStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFileEuroDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-euro-duotone-rounded IconFileEuroDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFileEuroTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-euro-twotone-rounded IconFileEuroTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFileEuroSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-euro-solid-rounded IconFileEuroSolidRounded"
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

export const IconFileEuroBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-euro-bulk-rounded IconFileEuroBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFileEuroStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-euro-stroke-sharp IconFileEuroStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileEuroSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-euro-solid-sharp IconFileEuroSolidSharp"
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

export const iconPackOfFileEuro: TheIconSelfPack = {
  name: 'FileEuro',
  StrokeRounded: IconFileEuroStrokeRounded,
  DuotoneRounded: IconFileEuroDuotoneRounded,
  TwotoneRounded: IconFileEuroTwotoneRounded,
  SolidRounded: IconFileEuroSolidRounded,
  BulkRounded: IconFileEuroBulkRounded,
  StrokeSharp: IconFileEuroStrokeSharp,
  SolidSharp: IconFileEuroSolidSharp,
};