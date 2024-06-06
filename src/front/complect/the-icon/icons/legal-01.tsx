import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 11.6273L5.07498 17.4215C4.41411 18.199 3.23201 18.2464 2.51138 17.5241C1.79074 16.8019 1.83795 15.6172 2.61376 14.9549L8.3953 10.019',
  d2: 'M18 10.0667L13.0476 15.03M9.95238 2.00146L5 6.96472M9.33337 2.62183L5.61908 6.34428C5.61908 6.34428 7.47622 8.82591 9.33337 10.6871C11.1905 12.5484 13.6667 14.4096 13.6667 14.4096L17.381 10.6871C17.381 10.6871 15.5238 8.2055 13.6667 6.34428C11.8096 4.48306 9.33337 2.62183 9.33337 2.62183Z',
  d3: 'M20 11.659L22 10.019M20 14.9389L22 16.0322',
  d4: 'M11.002 21.9985H20.9998M12.2267 21.9985C12.7782 21.0111 13.19 19.1214 15.142 19.0155C15.7218 18.9841 16.3117 18.9841 16.8914 19.0155C18.8434 19.1214 19.2572 21.0111 19.8087 21.9985',
  d5: 'M10 11.6014L5.07498 17.381C4.41411 18.1565 3.23201 18.2038 2.51138 17.4833C1.79074 16.763 1.83795 15.5813 2.61376 14.9206L8.3953 9.99719',
  d6: 'M9.33343 2.61926C9.33343 2.61926 11.8097 4.4758 13.6668 6.33234C15.5239 8.18887 17.3811 10.6642 17.3811 10.6642L13.6668 14.3773C13.6668 14.3773 11.1906 12.5208 9.33343 10.6642C7.47628 8.80772 5.61914 6.33234 5.61914 6.33234L9.33343 2.61926Z',
  d7: 'M18 10.0451L13.0476 14.9959M9.95238 2.00012L5 6.95088M9.33337 2.61893L5.61908 6.332C5.61908 6.332 7.47622 8.80738 9.33337 10.6639C11.1905 12.5205 13.6667 14.377 13.6667 14.377L17.381 10.6639C17.381 10.6639 15.5238 8.18853 13.6667 6.332C11.8096 4.47547 9.33337 2.61893 9.33337 2.61893Z',
  d8: 'M12.7842 20.7826L12.1113 21.9933H19.8891L19.2162 20.7826C18.8487 20.1213 18.6649 19.7905 18.388 19.5514C18.1612 19.3554 17.8908 19.2051 17.5946 19.1101C17.2329 18.9943 16.822 18.9943 16.0002 18.9943C15.1784 18.9943 14.7675 18.9943 14.4058 19.1101C14.1096 19.2051 13.8392 19.3554 13.6124 19.5514C13.3355 19.7905 13.1517 20.1212 12.7842 20.7826Z',
  d9: 'M20 11.6331L22 9.99719M20 14.9047L22 15.9952',
  d10: 'M11.001 21.9998H20.9988M12.2257 21.9998C12.7772 21.0128 13.189 19.1237 15.141 19.0178C15.7208 18.9864 16.3107 18.9864 16.8904 19.0178C18.8424 19.1237 19.2562 21.0128 19.8077 21.9998',
  d11: 'M10 11.603L5.07498 17.3845C4.41411 18.1603 3.23201 18.2076 2.51138 17.4869C1.79074 16.7663 1.83795 15.5842 2.61376 14.9233L8.3953 9.99829',
  d12: 'M18 10.0459L13.0476 14.9983M9.95238 1.99829L5 6.95067M9.33337 2.6173L5.61908 6.33159C5.61908 6.33159 7.47622 8.80778 9.33337 10.6649C11.1905 12.5221 13.6667 14.3792 13.6667 14.3792L17.381 10.6649C17.381 10.6649 15.5238 8.18873 13.6667 6.33159C11.8096 4.47445 9.33337 2.6173 9.33337 2.6173Z',
  d13: 'M20 11.6347L22 9.99829M20 14.9074L22 15.9983',
  d14: 'M11.001 22.0017H20.9988M12.2257 22.0017C12.7772 21.0143 13.189 19.1246 15.141 19.0187C15.7208 18.9873 16.3107 18.9873 16.8904 19.0187C18.8424 19.1246 19.2562 21.0143 19.8077 22.0017',
  d15: 'M10.4827 1.46967C10.7756 1.76256 10.7756 2.23744 10.4827 2.53033L10.4661 2.54692C10.6957 2.72778 10.9723 2.94871 11.2785 3.19926C12.138 3.90249 13.2431 4.84899 14.197 5.80297C15.151 6.75695 16.0975 7.86197 16.8007 8.72147C17.0513 9.0277 17.2722 9.30431 17.4531 9.53387L17.4697 9.51729C17.7626 9.22439 18.2374 9.22439 18.5303 9.51729C18.8232 9.81018 18.8232 10.2851 18.5303 10.5779L13.5779 15.5303C13.2851 15.8232 12.8102 15.8232 12.5173 15.5303C12.2244 15.2374 12.2244 14.7626 12.5173 14.4697L12.5339 14.453C12.3044 14.2722 12.0278 14.0512 11.7215 13.8007C10.862 13.0975 9.75702 12.1509 8.80304 11.197C7.84906 10.243 6.90255 9.13797 6.19933 8.27847C5.94878 7.97224 5.72785 7.69562 5.54698 7.46606L5.53033 7.48271C5.23744 7.77561 4.76256 7.77561 4.46967 7.48271C4.17678 7.18982 4.17678 6.71495 4.46967 6.42205L9.42205 1.46967C9.71495 1.17678 10.1898 1.17678 10.4827 1.46967Z',
  d16: 'M5.64592 17.8732C4.70115 18.9823 3.01125 19.0497 1.98105 18.0195C0.95085 16.9893 1.01834 15.2994 2.12741 14.3547L6.08535 10.9831C6.29613 10.8035 6.40153 10.7138 6.52257 10.7214C6.64361 10.729 6.73793 10.8324 6.92655 11.0391C7.24895 11.3925 7.58292 11.7452 7.91916 12.0814C8.25539 12.4177 8.60813 12.7516 8.9615 13.074C9.16824 13.2627 9.27161 13.357 9.27922 13.478C9.28684 13.5991 9.19706 13.7045 9.0175 13.9152L5.64592 17.8732Z',
  d17: 'M15.8881 18.25C15.1754 18.2496 14.6523 18.2494 14.1767 18.4018C13.7881 18.5263 13.4279 18.7254 13.1218 18.9898C12.742 19.318 12.4964 19.7609 12.1819 20.3282L12.0334 20.5957C11.9804 20.6909 11.88 20.75 11.7711 20.75H11C10.4477 20.75 10 21.1977 10 21.75C10 22.2949 10.4358 22.738 10.9779 22.7498L21.0221 22.7498C21.5642 22.738 22 22.2949 22 21.75C22 21.1977 21.5523 20.75 21 20.75H20.2289C20.12 20.75 20.0196 20.6909 19.9667 20.5957L19.8181 20.3282C19.5036 19.7609 19.258 19.318 18.8782 18.9898C18.5721 18.7254 18.2119 18.5263 17.8233 18.4018C17.3477 18.2494 16.8246 18.2496 16.1119 18.25H15.8881Z',
  d18: 'M22.5241 10.3668C22.8739 10.7942 22.8109 11.4243 22.3834 11.774L20.3834 13.4104C19.956 13.7601 19.326 13.6971 18.9762 13.2696C18.6265 12.8422 18.6895 12.2122 19.117 11.8624L21.117 10.2261C21.5444 9.87635 22.1744 9.93935 22.5241 10.3668ZM18.8723 15.4303C19.1368 14.9454 19.7442 14.7668 20.229 15.0312L22.229 16.1221C22.7139 16.3866 22.8925 16.994 22.6281 17.4789C22.3636 17.9637 21.7562 18.1424 21.2713 17.8779L19.2713 16.787C18.7865 16.5226 18.6078 15.9151 18.8723 15.4303Z',
  d19: 'M8 10L2 16L4 18L10 12',
  d20: 'M12.5 22L14 19H18L19.5 22M11 22H21',
  d21: 'M20 11.6364L22 10M20 14.9091L22 16',
  d22: 'M9.83612 2.00391L8.79642 3.05603M8.79642 3.05603C10.1684 4.12383 13.0905 6.7103 13.3086 6.96994C13.5677 7.18868 15.8556 9.82343 16.92 11.198M8.79642 3.05603L5.05375 6.78964M5.05375 6.78964L3.99707 7.84377M5.05375 6.78964C5.63096 7.49521 6.50128 8.55786 7.27354 9.46519C8.25958 10.6237 9.34588 11.7125 10.5021 12.7013C11.4093 13.4771 12.4723 14.352 13.177 14.9314M17.9747 10.161L16.92 11.198M16.92 11.198L13.177 14.9314M13.177 14.9314L12.1203 15.9854',
  d23: 'M13.3292 18.6647C13.4562 18.4106 13.7159 18.2501 14 18.2501H18C18.2841 18.2501 18.5438 18.4106 18.6708 18.6647L19.9635 21.2501H21V22.7501L11 22.7501V21.2501H12.0365L13.3292 18.6647Z',
  d24: 'M22.7497 10.5806L20.7497 12.217L19.7998 11.056L21.7998 9.41968L22.7497 10.5806ZM21.9156 16.6586L19.9156 15.5677L20.6339 14.2508L22.6339 15.3417L21.9156 16.6586Z',
  d25: 'M4.99887 7.68524L4.53033 8.15378L3.46967 7.09311L9.31283 1.25L10.3735 2.31066L9.90499 2.77915C10.1459 2.96838 10.4446 3.20637 10.7785 3.47959C11.638 4.18282 12.7431 5.12932 13.697 6.0833C14.651 7.03728 15.5975 8.1423 16.3007 9.0018C16.5739 9.33562 16.8118 9.63425 17.001 9.8751L17.4697 9.40638L18.5304 10.467L12.6867 16.3107L11.6261 15.25L12.0948 14.7813C11.854 14.5921 11.5554 14.3541 11.2215 14.081C10.362 13.3778 9.25702 12.4313 8.30304 11.4773C7.34906 10.5233 6.40255 9.4183 5.69933 8.5588C5.4261 8.22486 5.1881 7.92614 4.99887 7.68524Z',
  d26: 'M5.94131 10.7782L1.46967 15.2499C1.32902 15.3905 1.25 15.5813 1.25 15.7802C1.25 15.9791 1.32902 16.1699 1.46967 16.3105L3.46967 18.3105C3.76256 18.6034 4.23744 18.6034 4.53033 18.3105L9.00202 13.8389C8.47293 13.3729 7.92672 12.8696 7.41823 12.3611C6.91004 11.8529 6.40703 11.3071 5.94131 10.7782Z',
};

export const IconLegal01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-01-stroke-rounded IconLegal01StrokeRounded"
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

export const IconLegal01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-01-duotone-rounded IconLegal01DuotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLegal01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-01-twotone-rounded IconLegal01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLegal01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-01-solid-rounded IconLegal01SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconLegal01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-01-bulk-rounded IconLegal01BulkRounded"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLegal01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-01-stroke-sharp IconLegal01StrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLegal01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-01-solid-sharp IconLegal01SolidSharp"
    >
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLegal01: TheIconSelfPack = {
  name: 'Legal01',
  StrokeRounded: IconLegal01StrokeRounded,
  DuotoneRounded: IconLegal01DuotoneRounded,
  TwotoneRounded: IconLegal01TwotoneRounded,
  SolidRounded: IconLegal01SolidRounded,
  BulkRounded: IconLegal01BulkRounded,
  StrokeSharp: IconLegal01StrokeSharp,
  SolidSharp: IconLegal01SolidSharp,
};