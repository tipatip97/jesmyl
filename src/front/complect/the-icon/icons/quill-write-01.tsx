import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.07579 17C4.08939 4.54502 12.9123 1.0121 19.9734 2.22417C20.2585 6.35185 18.2389 7.89748 14.3926 8.61125C15.1353 9.38731 16.4477 10.3639 16.3061 11.5847C16.2054 12.4534 15.6154 12.8797 14.4355 13.7322C11.8497 15.6004 8.85421 16.7785 5.07579 17Z',
  d2: 'M4 22C4 15.5 7.84848 12.1818 10.5 10',
  d3: 'M4.27464 16.2031C3.64694 17.7681 3.25 19.5969 3.25 21.7491C3.25 22.3014 3.69772 22.7491 4.25 22.7491C4.80228 22.7491 5.25 22.3014 5.25 21.7491C5.25 20.2157 5.47847 18.8745 5.86237 17.6915C5.61797 17.7143 5.37044 17.7331 5.11967 17.7478C4.71214 17.7717 4.36034 17.4652 4.32811 17.0583C4.30519 16.7689 4.28741 16.4838 4.27464 16.2031Z',
  d4: 'M20.1003 1.48474C16.4189 0.852811 12.2198 1.44518 9.0485 3.89299C5.98615 6.25667 4.00404 10.2547 4.27464 16.2038C5.68481 12.688 8.25962 10.504 10.1146 8.9776C10.5411 8.62668 11.1713 8.68792 11.5222 9.11439C11.8731 9.54085 11.8119 10.171 11.3854 10.522C9.43178 12.1295 6.98385 14.2362 5.86237 17.6922C9.44251 17.3584 12.3484 16.165 14.8747 14.3399L14.9227 14.3052C15.4715 13.9088 15.9621 13.5544 16.3176 13.1826C16.7189 12.7629 16.979 12.293 17.0511 11.6709C17.1572 10.756 16.7081 10.0029 16.2619 9.45657C16.1428 9.31079 16.0171 9.17145 15.8915 9.03969C17.2645 8.66143 18.426 8.10147 19.2738 7.21655C20.4192 6.02115 20.873 4.36382 20.7216 2.17225C20.6978 1.82724 20.4412 1.54325 20.1003 1.48474Z',
  d5: 'M5.11967 17.7485C5.37044 17.7338 5.61797 17.715 5.86237 17.6922C9.44251 17.3584 12.3484 16.165 14.8747 14.3399L14.9227 14.3052C15.4715 13.9088 15.9621 13.5544 16.3176 13.1826C16.7189 12.7629 16.979 12.293 17.0511 11.6709C17.1572 10.756 16.7081 10.0029 16.2618 9.45657C16.1428 9.31079 16.0171 9.17145 15.8915 9.03969C17.2645 8.66143 18.426 8.10147 19.2738 7.21655C20.4191 6.02115 20.873 4.36382 20.7216 2.17225C20.6978 1.82724 20.4411 1.54325 20.1003 1.48474C16.4188 0.852811 12.2198 1.44518 9.04848 3.89299C5.98613 6.25667 4.00404 10.2547 4.27464 16.2038C4.28741 16.4845 4.30519 16.7696 4.32811 17.059C4.36034 17.4659 4.71214 17.7724 5.11967 17.7485Z',
  d6: 'M4.27464 16.2041C3.64694 17.7691 3.25 19.5979 3.25 21.7501C3.25 22.3023 3.69772 22.7501 4.25 22.7501C4.80228 22.7501 5.25 22.3023 5.25 21.7501C5.25 20.2167 5.47847 18.8755 5.86237 17.6925C6.98385 14.2365 9.4318 12.1298 11.3854 10.5222C11.8119 10.1713 11.8731 9.5411 11.5222 9.11463C11.1713 8.68816 10.5411 8.62692 10.1146 8.97784C8.25964 10.5042 5.68481 12.6883 4.27464 16.2041Z',
  d7: 'M4 21.9656C4 14.4784 11 10.9844 11 10.9844',
  d8: 'M10.4573 4.86058C13.8519 2.4143 17.8492 1.96919 20.0018 1.96973C20.0018 2.79882 19.8449 4.67287 19.0159 6.39696C18.1911 8.11238 16.5969 8.99147 15.0329 9.00028C15.024 9.00033 15.0196 9.01098 15.0258 9.0173L16.9734 11.0087C16.9772 11.0126 16.977 11.0191 16.9731 11.0229C13.8852 14.0525 13.0044 14.3803 11.2442 15.345C9.88796 16.0884 6.08012 17.1036 5.14746 17.1036C4.72152 17.1036 5.21466 13.7447 5.56174 12.0865C6.11186 9.45805 8.33856 6.38743 10.4573 4.86058Z',
  d9: 'M10.3015 4.40005C13.4705 2.023 17.3957 1.25 20.4997 1.25H21.2497V2C21.2497 3.84093 20.8577 5.74075 19.9498 7.20726C19.2812 8.28714 18.3282 9.1319 17.0801 9.51902L18.0313 10.4695C18.1721 10.6101 18.2512 10.8009 18.2512 10.9998C18.2512 11.1988 18.1722 11.3896 18.0315 11.5303C14.1193 15.4426 10.1173 17.5691 6.03264 17.739C6.59144 16.7177 7.27673 15.8507 7.97058 15.1321C8.78723 14.2863 9.6058 13.6576 10.2189 13.2415C10.5247 13.034 10.7773 12.8809 10.9499 12.7814C11.0361 12.7317 11.1022 12.6954 11.1448 12.6726C11.1661 12.6612 11.1815 12.6532 11.1905 12.6485L11.1991 12.6441C11.1991 12.6441 11.1984 12.6444 10.7512 11.75C10.304 10.8556 10.3031 10.856 10.3031 10.856L10.3021 10.8565L10.2997 10.8577L10.2928 10.8612L10.2716 10.8721C10.2542 10.8811 10.2303 10.8936 10.2003 10.9097C10.1404 10.9418 10.0561 10.9881 9.95093 11.0487C9.74073 11.1699 9.44638 11.3488 9.09593 11.5866C8.39656 12.0612 7.46513 12.7762 6.53178 13.7429C5.92891 14.3673 5.32109 15.1015 4.77441 15.9472C5.0251 10.332 7.28098 6.66571 10.3015 4.40005Z',
  d10: 'M2.75098 22.75C2.75098 19.9823 3.62848 17.7199 4.77441 15.9472C4.75908 16.2908 4.75104 16.6416 4.751 16.9999C4.75098 17.1988 4.82999 17.3896 4.97064 17.5303C5.1113 17.6709 5.30207 17.75 5.501 17.75C5.6783 17.75 5.85565 17.7463 6.03264 17.739C5.27594 19.1218 4.75098 20.7873 4.75098 22.75H2.75098Z',
} as const;

export const IconQuillWrite01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-01-stroke-rounded IconQuillWrite01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconQuillWrite01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-01-duotone-rounded IconQuillWrite01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconQuillWrite01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-01-twotone-rounded IconQuillWrite01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconQuillWrite01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-01-solid-rounded IconQuillWrite01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuillWrite01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-01-bulk-rounded IconQuillWrite01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconQuillWrite01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-01-stroke-sharp IconQuillWrite01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconQuillWrite01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-01-solid-sharp IconQuillWrite01SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfQuillWrite01: TheIconSelfPack = {
  name: 'QuillWrite01',
  StrokeRounded: IconQuillWrite01StrokeRounded,
  DuotoneRounded: IconQuillWrite01DuotoneRounded,
  TwotoneRounded: IconQuillWrite01TwotoneRounded,
  SolidRounded: IconQuillWrite01SolidRounded,
  BulkRounded: IconQuillWrite01BulkRounded,
  StrokeSharp: IconQuillWrite01StrokeSharp,
  SolidSharp: IconQuillWrite01SolidSharp,
};