import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.5 10C5.62215 10 5.73571 9.94347 5.96282 9.83041L7.78832 8.92162C8.59611 8.51948 9 8.31841 9 8V4M5.5 10C5.37785 10 5.26429 9.94347 5.03718 9.83041L3.21168 8.92162C2.4039 8.51948 2 8.31841 2 8V4M5.5 10V6M9 4C9 3.68159 8.59611 3.48052 7.78832 3.07838L5.96282 2.16959C5.73571 2.05653 5.62215 2 5.5 2C5.37785 2 5.26429 2.05653 5.03718 2.16959L3.21168 3.07838C2.40389 3.48052 2 3.68159 2 4M9 4C9 4.31841 8.59611 4.51948 7.78832 4.92162L5.96282 5.83041C5.73571 5.94347 5.62215 6 5.5 6M2 4C2 4.31841 2.40389 4.51948 3.21168 4.92162L5.03718 5.83041C5.26429 5.94347 5.37785 6 5.5 6',
  d2: 'M18.5 10C18.6222 10 18.7357 9.94347 18.9628 9.83041L20.7883 8.92162C21.5961 8.51948 22 8.31841 22 8V4M18.5 10C18.3778 10 18.2643 9.94347 18.0372 9.83041L16.2117 8.92162C15.4039 8.51948 15 8.31841 15 8V4M18.5 10V6M22 4C22 3.68159 21.5961 3.48052 20.7883 3.07838L18.9628 2.16959C18.7357 2.05653 18.6222 2 18.5 2C18.3778 2 18.2643 2.05653 18.0372 2.16959L16.2117 3.07838C15.4039 3.48052 15 3.68159 15 4M22 4C22 4.31841 21.5961 4.51948 20.7883 4.92162L18.9628 5.83041C18.7357 5.94347 18.6222 6 18.5 6M15 4C15 4.31841 15.4039 4.51948 16.2117 4.92162L18.0372 5.83041C18.2643 5.94347 18.3778 6 18.5 6',
  d3: 'M11.5 6H12.5',
  d4: 'M2 12V15.5C2 16.9045 2 17.6067 2.33706 18.1111C2.48298 18.3295 2.67048 18.517 2.88886 18.6629C3.39331 19 4.09554 19 5.5 19',
  d5: 'M22 12V15.5C22 16.9045 22 17.6067 21.6629 18.1111C21.517 18.3295 21.3295 18.517 21.1111 18.6629C20.6067 19 19.9045 19 18.5 19',
  d6: 'M12 22C12.1222 22 12.2357 21.9435 12.4628 21.8304L14.2883 20.9216C15.0961 20.5195 15.5 20.3184 15.5 20V16M12 22C11.8778 22 11.7643 21.9435 11.5372 21.8304L9.71168 20.9216C8.9039 20.5195 8.5 20.3184 8.5 20V16M12 22V18M15.5 16C15.5 15.6816 15.0961 15.4805 14.2883 15.0784L12.4628 14.1696C12.2357 14.0565 12.1222 14 12 14C11.8778 14 11.7643 14.0565 11.5372 14.1696L9.71168 15.0784C8.90389 15.4805 8.5 15.6816 8.5 16M15.5 16C15.5 16.3184 15.0961 16.5195 14.2883 16.9216L12.4628 17.8304C12.2357 17.9435 12.1222 18 12 18M8.5 16C8.5 16.3184 8.90389 16.5195 9.71168 16.9216L11.5372 17.8304C11.7643 17.9435 11.8778 18 12 18',
  d7: 'M5.96282 9.83041L7.78832 8.92162C8.59611 8.51948 9 8.31841 9 8V4C9 3.68159 8.59611 3.48052 7.78832 3.07838L7.78832 3.07838L5.96282 2.16959L5.96282 2.16959C5.73571 2.05653 5.62215 2 5.5 2C5.37785 2 5.26429 2.05653 5.03718 2.16959L3.21168 3.07838L3.21168 3.07838C2.40389 3.48052 2 3.68159 2 4C2 4.31841 2.40389 4.51948 3.21168 4.92162L3.21168 4.92162L5.03718 5.83041C5.26429 5.94347 5.37785 6 5.5 6V10C5.62215 10 5.73571 9.94347 5.96282 9.83041Z',
  d8: 'M12.4628 21.8304L14.2883 20.9216C15.0961 20.5195 15.5 20.3184 15.5 20V16C15.5 15.6816 15.0961 15.4805 14.2883 15.0784L14.2883 15.0784L12.4628 14.1696L12.4628 14.1696C12.2357 14.0565 12.1222 14 12 14C11.8778 14 11.7643 14.0565 11.5372 14.1696L9.71168 15.0784L9.71168 15.0784C8.90389 15.4805 8.5 15.6816 8.5 16C8.5 16.3184 8.90389 16.5195 9.71168 16.9216L9.71168 16.9216L11.5372 17.8304C11.7643 17.9435 11.8778 18 12 18V22C12.1222 22 12.2357 21.9435 12.4628 21.8304Z',
  d9: 'M18.9628 9.83041L20.7883 8.92162C21.5961 8.51948 22 8.31841 22 8V4C22 3.68159 21.5961 3.48052 20.7883 3.07838L20.7883 3.07838L18.9628 2.16959L18.9628 2.16959C18.7357 2.05653 18.6222 2 18.5 2C18.3778 2 18.2643 2.05653 18.0372 2.16959L16.2117 3.07838L16.2117 3.07838C15.4039 3.48052 15 3.68159 15 4C15 4.31841 15.4039 4.51948 16.2117 4.92162L16.2117 4.92162L18.0372 5.83041C18.2643 5.94347 18.3778 6 18.5 6V10C18.6222 10 18.7357 9.94347 18.9628 9.83041Z',
  d10: 'M9.75 8V4C9.75 3.4558 9.37777 3.1303 9.12507 2.9547C8.87741 2.78259 8.53242 2.61092 8.16799 2.42958L8.16797 2.42957L8.16797 2.42957L6.24986 1.47434C6.08237 1.38913 5.80889 1.25 5.5 1.25C5.19111 1.25 4.91763 1.38913 4.75014 1.47434L2.83203 2.42958L2.83202 2.42958C2.46759 2.61092 2.12259 2.78259 1.87493 2.9547C1.62223 3.1303 1.25 3.4558 1.25 4V8C1.25 8.5442 1.62224 8.8697 1.87493 9.04531C2.12259 9.21741 2.46758 9.38908 2.83201 9.57042L2.83202 9.57042L4.75014 10.5257C4.91763 10.6109 5.19111 10.75 5.5 10.75C5.80889 10.75 6.08237 10.6109 6.24987 10.5257L8.16796 9.57043C8.5324 9.38909 8.87741 9.21741 9.12507 9.04531C9.37777 8.8697 9.75 8.5442 9.75 8ZM4.75 8.84935L2.75 7.82625V5.5293L4.75 6.5253V8.84935ZM6.25 6.5253L8.25 5.5293V7.82625L6.25 8.84935V6.5253Z',
  d11: 'M22.75 8V4C22.75 3.4558 22.3778 3.1303 22.1251 2.9547C21.8774 2.78259 21.5324 2.61092 21.168 2.42958L21.168 2.42957L21.168 2.42957L19.2499 1.47434C19.0824 1.38913 18.8089 1.25 18.5 1.25C18.1911 1.25 17.9176 1.38913 17.7501 1.47434L15.832 2.42958L15.832 2.42958C15.4676 2.61092 15.1226 2.78259 14.8749 2.9547C14.6222 3.1303 14.25 3.4558 14.25 4V8C14.25 8.5442 14.6222 8.8697 14.8749 9.04531C15.1226 9.21741 15.4676 9.38908 15.832 9.57042L15.832 9.57042L17.7501 10.5257C17.9176 10.6109 18.1911 10.75 18.5 10.75C18.8089 10.75 19.0824 10.6109 19.2499 10.5257L21.168 9.57043C21.5324 9.38909 21.8774 9.21741 22.1251 9.04531C22.3778 8.8697 22.75 8.5442 22.75 8ZM17.75 8.84935L15.75 7.82625V5.5293L17.75 6.5253V8.84935ZM19.25 6.5253L21.25 5.5293V7.82625L19.25 8.84935V6.5253Z',
  d12: 'M16.25 20V16C16.25 15.4558 15.8778 15.1303 15.6251 14.9547C15.3774 14.7826 15.0324 14.6109 14.668 14.4296L14.668 14.4296L14.668 14.4296L12.7499 13.4743C12.5824 13.3891 12.3089 13.25 12 13.25C11.6911 13.25 11.4176 13.3891 11.2501 13.4743L9.33203 14.4296L9.33202 14.4296C8.96759 14.6109 8.62259 14.7826 8.37493 14.9547C8.12223 15.1303 7.75 15.4558 7.75 16V20C7.75 20.5442 8.12224 20.8697 8.37493 21.0453C8.62259 21.2174 8.96758 21.3891 9.33201 21.5704L9.33202 21.5704L11.2501 22.5257C11.4176 22.6109 11.6911 22.75 12 22.75C12.3089 22.75 12.5824 22.6109 12.7499 22.5257L14.668 21.5704C15.0324 21.3891 15.3774 21.2174 15.6251 21.0453C15.8778 20.8697 16.25 20.5442 16.25 20ZM11.25 20.8494L9.25 19.8263V17.5293L11.25 18.5253V20.8494ZM12.75 18.5253L14.75 17.5293V19.8263L12.75 20.8494V18.5253Z',
  d13: 'M10.75 6C10.75 5.58579 11.0858 5.25 11.5 5.25H12.5C12.9142 5.25 13.25 5.58579 13.25 6C13.25 6.41421 12.9142 6.75 12.5 6.75H11.5C11.0858 6.75 10.75 6.41421 10.75 6Z',
  d14: 'M2 11.25C2.41421 11.25 2.75 11.5858 2.75 12V15.5C2.75 16.2178 2.75091 16.6998 2.78828 17.0672C2.82438 17.422 2.8882 17.586 2.96066 17.6945C3.05186 17.8309 3.16905 17.9481 3.30554 18.0393C3.41399 18.1118 3.57796 18.1756 3.93283 18.2117C4.30023 18.2491 4.78216 18.25 5.5 18.25C5.91422 18.25 6.25 18.5858 6.25 19C6.25 19.4142 5.91422 19.75 5.5 19.75L5.46166 19.75C4.79208 19.75 4.23335 19.75 3.78102 19.704C3.30755 19.6559 2.86818 19.5511 2.47218 19.2865C2.17191 19.0859 1.9141 18.8281 1.71346 18.5278C1.44886 18.1318 1.34415 17.6925 1.29598 17.219C1.24997 16.7667 1.24998 16.2079 1.25 15.5384V15.5383V12C1.25 11.5858 1.58579 11.25 2 11.25Z',
  d15: 'M22 11.25C22.4142 11.25 22.75 11.5858 22.75 12V15.5383V15.5384C22.75 16.2079 22.75 16.7667 22.704 17.219C22.6559 17.6925 22.5511 18.1318 22.2865 18.5278C22.0859 18.8281 21.8281 19.0859 21.5278 19.2865C21.1318 19.5511 20.6925 19.6559 20.219 19.704C19.7666 19.75 19.2079 19.75 18.5383 19.75L18.5 19.75C18.0858 19.75 17.75 19.4142 17.75 19C17.75 18.5858 18.0858 18.25 18.5 18.25C19.2178 18.25 19.6998 18.2491 20.0672 18.2117C20.422 18.1756 20.586 18.1118 20.6945 18.0393C20.831 17.9481 20.9481 17.8309 21.0393 17.6945C21.1118 17.586 21.1756 17.422 21.2117 17.0672C21.2491 16.6998 21.25 16.2178 21.25 15.5V12C21.25 11.5858 21.5858 11.25 22 11.25Z',
  d16: 'M5.5 6L8.80294 4.1126M5.5 6L2.19706 4.1126M5.5 6V9.71378M5.5 2L9 4V8L5.5 10L2 8V4L5.5 2Z',
  d17: 'M18.5 6L15.1959 4.11197M18.5 6L21.8041 4.11197M18.5 6V9.7399M18.5 2L22 4V8L18.5 10L15 8V4L18.5 2Z',
  d18: 'M12 18L8.66958 16.0969M12 18L15.3304 16.0969M12 18V21.7384M12 14L15.5 16V20L12 22L8.5 20V16L12 14Z',
  d19: 'M2 12V19H5.5',
  d20: 'M22 12V19H18.5',
  d21: 'M5.8721 1.34882C5.64153 1.21706 5.35847 1.21706 5.1279 1.34882L1.6279 3.34882C1.39421 3.48235 1.25 3.73086 1.25 4V8C1.25 8.26914 1.39421 8.51765 1.6279 8.65118L5.1279 10.6512C5.35847 10.7829 5.64153 10.7829 5.8721 10.6512L9.3721 8.65118C9.60579 8.51765 9.75 8.26914 9.75 8V4C9.75 3.73086 9.60579 3.48235 9.3721 3.34882L5.8721 1.34882ZM4.75 6.43485L2.75 5.29199V7.56437L4.75 8.70722V6.43485ZM8.25 7.56437L6.25 8.70722V6.43485L8.25 5.29199V7.56437Z',
  d22: 'M18.8721 1.34882C18.6415 1.21706 18.3585 1.21706 18.1279 1.34882L14.6279 3.34882C14.3942 3.48235 14.25 3.73086 14.25 4V8C14.25 8.26914 14.3942 8.51765 14.6279 8.65118L18.1279 10.6512C18.3585 10.7829 18.6415 10.7829 18.8721 10.6512L22.3721 8.65118C22.6058 8.51765 22.75 8.26914 22.75 8V4C22.75 3.73086 22.6058 3.48235 22.3721 3.34882L18.8721 1.34882ZM17.75 6.43485L15.75 5.29199V7.56437L17.75 8.70722V6.43485ZM21.25 7.56437L19.25 8.70722V6.43485L21.25 5.29199V7.56437Z',
  d23: 'M12.3721 13.3488C12.1415 13.2171 11.8585 13.2171 11.6279 13.3488L8.1279 15.3488C7.89421 15.4823 7.75 15.7309 7.75 16V20C7.75 20.2691 7.89421 20.5177 8.1279 20.6512L11.6279 22.6512C11.8585 22.7829 12.1415 22.7829 12.3721 22.6512L15.8721 20.6512C16.1058 20.5177 16.25 20.2691 16.25 20V16C16.25 15.7309 16.1058 15.4823 15.8721 15.3488L12.3721 13.3488ZM11.25 18.4348L9.25 17.292V19.5644L11.25 20.7072V18.4348ZM14.75 19.5644L12.75 20.7072V18.4348L14.75 17.292V19.5644Z',
  d24: 'M10.75 5.25H13.25V6.75H10.75V5.25Z',
  d25: 'M2.75 11.25V18.25H6.25V19.75H1.25V11.25H2.75Z',
  d26: 'M22.75 11.25V19.75H17.75V18.25H21.25V11.25H22.75Z',
};

export const IconBlockchain06StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-06-stroke-rounded IconBlockchain06StrokeRounded"
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
        strokeLinejoin="round" 
      />
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain06DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-06-duotone-rounded IconBlockchain06DuotoneRounded"
    >
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
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain06TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-06-twotone-rounded IconBlockchain06TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain06SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-06-solid-rounded IconBlockchain06SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconBlockchain06BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-06-bulk-rounded IconBlockchain06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconBlockchain06StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-06-stroke-sharp IconBlockchain06StrokeSharp"
    >
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
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain06SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-06-solid-sharp IconBlockchain06SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBlockchain06: TheIconSelfPack = {
  name: 'Blockchain06',
  StrokeRounded: IconBlockchain06StrokeRounded,
  DuotoneRounded: IconBlockchain06DuotoneRounded,
  TwotoneRounded: IconBlockchain06TwotoneRounded,
  SolidRounded: IconBlockchain06SolidRounded,
  BulkRounded: IconBlockchain06BulkRounded,
  StrokeSharp: IconBlockchain06StrokeSharp,
  SolidSharp: IconBlockchain06SolidSharp,
};