import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.25874 15.3167C5.89456 14.6299 5.5845 14 4.5 14C3.4155 14 3.10544 14.6299 2.74126 15.3167C2.40259 15.9554 1.6151 16.9661 2.22461 17.6457C2.54234 18 3.19489 18 4.5 18C5.80511 18 6.45766 18 6.77539 17.6457C7.3849 16.9661 6.59741 15.9554 6.25874 15.3167Z',
  d2: 'M13.7587 18.3167C13.3946 17.6299 13.0845 17 12 17C10.9155 17 10.6054 17.6299 10.2413 18.3167C9.90259 18.9554 9.1151 19.9661 9.72461 20.6457C10.0423 21 10.6949 21 12 21C13.3051 21 13.9577 21 14.2754 20.6457C14.8849 19.9661 14.0974 18.9554 13.7587 18.3167Z',
  d3: 'M21.2587 15.3167C20.8945 14.6299 20.5845 14 19.5 14C18.4155 14 18.1054 14.6299 17.7413 15.3167C17.4026 15.9554 16.6151 16.9661 17.2246 17.6457C17.5423 18 18.1949 18 19.5 18C20.8051 18 21.4577 18 21.7754 17.6457C22.3849 16.9661 21.5974 15.9554 21.2587 15.3167Z',
  d4: 'M9 3H15',
  d5: 'M12 3L12 17',
  d6: 'M4.5 14V11.75C4.5 9.67893 6.17893 8 8.25 8C10.3211 8 12 9.67893 12 11.75C12 9.67893 13.6789 8 15.75 8C17.8211 8 19.5 9.67893 19.5 11.75V14',
  d7: 'M17.8363 13.9796C18.2498 13.5905 18.7894 13.375 19.4997 13.375C20.2101 13.375 20.7496 13.5905 21.1632 13.9796C21.5054 14.3016 21.725 14.7183 21.8859 15.0237C22.0028 15.2276 22.4688 16.0564 22.571 16.3181C22.7672 16.8205 22.928 17.6086 22.3335 18.2715C21.9893 18.6552 21.5186 18.7744 21.0978 18.8253C20.6864 18.8751 20.1124 18.875 19.4997 18.875H19.4997H19.4997C18.8871 18.875 18.313 18.8751 17.9017 18.8253C17.4808 18.7744 17.0102 18.6552 16.666 18.2715C16.0715 17.6086 16.2323 16.8205 16.4285 16.3181C16.5306 16.0564 16.9966 15.2276 17.1136 15.0237C17.2745 14.7183 17.494 14.3016 17.8363 13.9796Z',
  d8: 'M10.3363 16.9796C10.7498 16.5905 11.2894 16.375 11.9997 16.375C12.7101 16.375 13.2496 16.5905 13.6632 16.9796C14.0054 17.3016 14.225 17.7183 14.3859 18.0237C14.5028 18.2276 14.9688 19.0564 15.071 19.3181C15.2672 19.8205 15.428 20.6086 14.8335 21.2715C14.4893 21.6552 14.0186 21.7744 13.5978 21.8253C13.1864 21.8751 12.6124 21.875 11.9997 21.875H11.9997H11.9997C11.3871 21.875 10.813 21.8751 10.4017 21.8253C9.98085 21.7744 9.51015 21.6552 9.166 21.2715C8.57146 20.6086 8.73228 19.8205 8.92847 19.3181C9.03065 19.0564 9.49664 18.2276 9.61358 18.0237C9.77449 17.7183 9.99403 17.3016 10.3363 16.9796Z',
  d9: 'M2.83628 13.9796C3.24984 13.5905 3.78939 13.375 4.49973 13.375C5.21007 13.375 5.74961 13.5905 6.16318 13.9796C6.50543 14.3016 6.72497 14.7183 6.88588 15.0237C7.00282 15.2276 7.46881 16.0564 7.57099 16.3181C7.76718 16.8205 7.928 17.6086 7.33346 18.2715C6.98931 18.6552 6.51861 18.7744 6.09778 18.8253C5.68641 18.8751 5.1124 18.875 4.49975 18.875H4.49973H4.49971C3.88706 18.875 3.31304 18.8751 2.90168 18.8253C2.48085 18.7744 2.01015 18.6552 1.666 18.2715C1.07146 17.6086 1.23228 16.8205 1.42847 16.3181C1.53065 16.0564 1.99664 15.2276 2.11358 15.0237C2.27449 14.7183 2.49403 14.3016 2.83628 13.9796Z',
  d10: 'M8 3.125C8 2.57272 8.44772 2.125 9 2.125H15C15.5523 2.125 16 2.57272 16 3.125C16 3.67728 15.5523 4.125 15 4.125H9C8.44772 4.125 8 3.67728 8 3.125Z',
  d11: 'M12 2.125C12.5523 2.125 13 2.57272 13 3.125L13 17.125C13 17.6773 12.5523 18.125 12 18.125C11.4477 18.125 11 17.6773 11 17.125L11 3.125C11 2.57272 11.4477 2.125 12 2.125Z',
  d12: 'M3.5 11.875C3.5 9.25165 5.62665 7.125 8.25 7.125C9.77427 7.125 11.1308 7.84297 12 8.95917C12.8692 7.84297 14.2257 7.125 15.75 7.125C18.3734 7.125 20.5 9.25165 20.5 11.875V14.125C20.5 14.6773 20.0523 15.125 19.5 15.125C18.9477 15.125 18.5 14.6773 18.5 14.125V11.875C18.5 10.3562 17.2688 9.125 15.75 9.125C14.2312 9.125 13 10.3562 13 11.875C13 12.4273 12.5523 12.875 12 12.875C11.4477 12.875 11 12.4273 11 11.875C11 10.3562 9.76878 9.125 8.25 9.125C6.73122 9.125 5.5 10.3562 5.5 11.875V14.125C5.5 14.6773 5.05228 15.125 4.5 15.125C3.94772 15.125 3.5 14.6773 3.5 14.125V11.875Z',
  d13: 'M11 16.5537C11.2892 16.4367 11.6205 16.3749 12.0007 16.3749C12.3803 16.3749 12.7111 16.4365 13 16.5531V11.876L13 11.8749C13 10.3562 14.2312 9.12494 15.75 9.12494C17.2688 9.12494 18.5 10.3562 18.5 11.8749V13.5537C18.7892 13.4367 19.1205 13.3749 19.5007 13.3749C19.8803 13.3749 20.2111 13.4365 20.5 13.5531V11.8749C20.5 9.25158 18.3734 7.12494 15.75 7.12494C14.7251 7.12494 13.7761 7.44952 13 8.00149V3.12494C13 2.57265 12.5523 2.12494 12 2.12494C11.4477 2.12494 11 2.57265 11 3.12494L11 8.00149C10.2239 7.44951 9.27487 7.12494 8.25 7.12494C5.62665 7.12494 3.5 9.25158 3.5 11.8749V13.5533C3.78899 13.4365 4.11995 13.3749 4.49973 13.3749C4.87975 13.3749 5.21088 13.4366 5.5 13.5535V11.8749C5.5 10.3562 6.73122 9.12494 8.25 9.12494C9.76835 9.12494 10.9993 10.3555 11 11.8736L11 11.8749L11 16.5537Z',
  d14: 'M8.98389 2.99878H14.9839',
  d15: 'M11.9966 2.99878V16.9771',
  d16: 'M4.98779 11.9852V10.7371C4.98779 8.66926 6.55686 6.99292 8.4924 6.99292C10.4279 6.99292 11.997 8.66926 11.997 10.7371C11.997 8.66926 13.5661 6.99292 15.5016 6.99292C17.4372 6.99292 19.0062 8.66926 19.0062 10.7371V11.9852',
  d17: 'M2.00621 15.8624L3.4971 11.9744H6.51734L7.97903 15.8631C8.00356 15.9283 7.95517 15.9979 7.88526 15.9979H2.09974C2.02955 15.9979 1.98114 15.9278 2.00621 15.8624Z',
  d18: 'M16.0209 15.8624L17.5118 11.9744H20.532L21.9937 15.8631C22.0182 15.9283 21.9698 15.9979 21.8999 15.9979H16.1144C16.0442 15.9979 15.9958 15.9278 16.0209 15.8624Z',
  d19: 'M9.04527 20.8654L10.5362 16.9773H13.5564L15.0181 20.866C15.0426 20.9313 14.9942 21.0009 14.9243 21.0009H9.1388C9.06861 21.0009 9.0202 20.9307 9.04527 20.8654Z',
  d20: 'M11 6.79706V4.25H9V2.25H15V4.25H13V6.79706C13.7079 6.2959 14.5636 6 15.5 6C18.0491 6 20 8.19275 20 10.75V12H18V10.75C18 9.16511 16.8168 8 15.5 8C14.1832 8 13 9.16511 13 10.75C13 10.7497 13 10.7503 13 10.75L13 17H11L11 10.75C11 10.7496 11 10.7492 11 10.7488C10.9994 9.16451 9.8165 8 8.5 8C7.18315 8 6 9.16511 6 10.75V12H4V10.75C4 8.19275 5.95086 6 8.5 6C9.43642 6 10.2921 6.2959 11 6.79706Z',
  d21: 'M15.7023 20.7367C15.7886 20.967 15.7566 21.225 15.6164 21.4272C15.4763 21.6294 15.246 21.75 15 21.75H9C8.75402 21.75 8.52367 21.6294 8.38356 21.4272C8.24345 21.225 8.21139 20.967 8.29776 20.7367L9.98025 16.25H14.0198L15.7023 20.7367Z',
  d22: 'M8.70225 15.7367C8.78862 15.967 8.75656 16.225 8.61645 16.4272C8.47634 16.6294 8.24599 16.75 8 16.75H2C1.75402 16.75 1.52367 16.6294 1.38356 16.4272C1.24345 16.225 1.21139 15.967 1.29776 15.7367L2.98025 11.25H7.01975L8.70225 15.7367Z',
  d23: 'M22.7023 15.7367C22.7886 15.967 22.7566 16.225 22.6164 16.4272C22.4763 16.6294 22.246 16.75 22 16.75H16C15.754 16.75 15.5237 16.6294 15.3836 16.4272C15.2434 16.225 15.2114 15.967 15.2978 15.7367L16.9803 11.25H21.0198L22.7023 15.7367Z',
};

export const IconCandelier01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-01-stroke-rounded IconCandelier01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCandelier01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-01-duotone-rounded IconCandelier01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconCandelier01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-01-twotone-rounded IconCandelier01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCandelier01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-01-solid-rounded IconCandelier01SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCandelier01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-01-bulk-rounded IconCandelier01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCandelier01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-01-stroke-sharp IconCandelier01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCandelier01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-01-solid-sharp IconCandelier01SolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCandelier01: TheIconSelfPack = {
  name: 'Candelier01',
  StrokeRounded: IconCandelier01StrokeRounded,
  DuotoneRounded: IconCandelier01DuotoneRounded,
  TwotoneRounded: IconCandelier01TwotoneRounded,
  SolidRounded: IconCandelier01SolidRounded,
  BulkRounded: IconCandelier01BulkRounded,
  StrokeSharp: IconCandelier01StrokeSharp,
  SolidSharp: IconCandelier01SolidSharp,
};