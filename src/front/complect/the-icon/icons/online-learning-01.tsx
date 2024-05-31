import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.5825 7.23786C9.58958 7.768 11.3818 8.87693 12 9.51357C12.6182 8.87693 14.4104 7.768 17.4175 7.23786C18.9409 6.96929 19.7026 6.83501 20.3513 7.3497C21 7.8644 21 8.70019 21 10.3718V16.3791C21 17.9076 21 18.6718 20.5837 19.1489C20.1673 19.626 19.2507 19.7876 17.4175 20.1108C15.7833 20.3989 14.5079 20.8579 13.5847 21.3192C12.6765 21.7731 12.2223 22 12 22C11.7777 22 11.3235 21.7731 10.4153 21.3192C9.4921 20.8579 8.2167 20.3989 6.5825 20.1108C4.74929 19.7876 3.83268 19.626 3.41634 19.1489C3 18.6718 3 17.9076 3 16.3791V10.3718C3 8.70019 3 7.8644 3.6487 7.3497C4.29741 6.83501 5.05911 6.96929 6.5825 7.23786Z',
  d2: 'M12 9L12 22',
  d3: 'M8.5 3.05857C9.51136 2.38797 10.7089 2 11.9926 2C13.2825 2 14.4855 2.39177 15.5 3.06841M13.6222 5.5C13.1421 5.21025 12.5857 5.04459 11.9926 5.04459C11.4058 5.04459 10.855 5.20674 10.3784 5.49078',
  d4: 'M6.65519 6.98513L6.71272 6.99511C8.3968 7.28706 9.74259 7.75573 10.7433 8.24647C10.9822 8.36359 11.1016 8.42216 11.1758 8.53929C11.25 8.65641 11.25 8.7951 11.25 9.07248L11.25 22.6874C11.25 22.7327 11.2023 22.763 11.1598 22.7444C10.8897 22.6262 10.5368 22.4528 10.0981 22.2372L10.0979 22.2371L10.08 22.2283C9.22464 21.808 8.01868 21.3781 6.4523 21.1066L6.41317 21.0998C5.52977 20.9467 4.81369 20.8225 4.26911 20.6752C3.72594 20.5282 3.21055 20.3242 2.85124 19.9193C2.50003 19.5235 2.36713 19.0467 2.3072 18.5465C2.24996 18.0687 2.24998 17.4687 2.25001 16.755L2.25 10.7436C2.24994 9.9728 2.24989 9.304 2.34148 8.76839C2.44242 8.17805 2.66858 7.65466 3.18255 7.25365C3.6739 6.87029 4.20718 6.74658 4.79216 6.75007C5.31813 6.75321 5.94283 6.86157 6.65519 6.98513ZM12.8242 8.53929C12.8984 8.42217 13.0178 8.3636 13.2567 8.24647C14.2574 7.75574 15.6032 7.28707 17.2873 6.99511L17.3448 6.98513C18.0572 6.86157 18.6819 6.75321 19.2079 6.75007C19.7928 6.74658 20.3261 6.87029 20.8175 7.25365C21.3314 7.65466 21.5576 8.17805 21.6585 8.76839C21.7501 9.304 21.7501 9.9728 21.75 10.7436L21.75 16.755C21.75 17.4687 21.7501 18.0687 21.6928 18.5465C21.6329 19.0467 21.5 19.5235 21.1488 19.9193C20.7895 20.3242 20.2741 20.5282 19.7309 20.6752C19.1864 20.8225 18.4703 20.9467 17.587 21.0998L17.5868 21.0998L17.5477 21.1066C15.9813 21.3781 14.7754 21.808 13.92 22.2283L13.9021 22.2371C13.4631 22.4528 13.1104 22.6261 12.8402 22.7444C12.7977 22.763 12.75 22.7327 12.75 22.6874L12.75 9.07249C12.75 8.79511 12.75 8.65642 12.8242 8.53929Z',
  d5: 'M7.94749 2.47514C9.11516 1.70089 10.5036 1.25 11.9927 1.25C13.4891 1.25 14.8838 1.70532 16.055 2.48649C16.5145 2.79294 16.6385 3.41384 16.332 3.8733C16.0256 4.33276 15.4047 4.45679 14.9452 4.15034C14.0875 3.57822 13.0762 3.25 11.9927 3.25C10.9144 3.25 9.90778 3.57505 9.05273 4.14201C8.59244 4.44721 7.97188 4.32149 7.66668 3.86119C7.36147 3.4009 7.4872 2.78035 7.94749 2.47514ZM9.86654 4.88177C10.4917 4.50916 11.2186 4.29459 11.9927 4.29459C12.7753 4.29459 13.5094 4.51383 14.139 4.89384C14.6119 5.17922 14.7638 5.79387 14.4785 6.26671C14.1931 6.73956 13.5784 6.89153 13.1056 6.60616C12.775 6.40667 12.3964 6.29459 11.9927 6.29459C11.5933 6.29459 11.2184 6.40432 10.8905 6.59978C10.4161 6.88253 9.80225 6.72716 9.5195 6.25274C9.23675 5.77832 9.39213 5.16452 9.86654 4.88177Z',
  d6: 'M8.4707 3.05481C9.47663 2.38659 10.6677 2 11.9446 2C13.2275 2 14.4241 2.39038 15.4331 3.06462M13.5654 5.48757C13.0879 5.19885 12.5345 5.03378 11.9446 5.03378C11.3609 5.03378 10.8131 5.19535 10.339 5.47838',
  d7: 'M11.9671 9.44842L12.0106 22.0038M12.0106 22.0038L20.9673 19.4708V6.96636C20.9673 6.96075 20.9615 6.95673 20.9557 6.95835L11.8844 9.50166L2.97652 6.9125C2.97073 6.91081 2.96484 6.91484 2.96484 6.92049V19.4855L12.0106 22.0038Z',
  d8: 'M3.20175 5.95734C2.97583 5.89424 2.73341 5.94047 2.54657 6.08228C2.35974 6.22409 2.25 6.44514 2.25 6.67969V19.7498L11.25 22.2498V8.20513L3.20175 5.95734Z',
  d9: 'M12.75 8.20513V22.2498L21.75 19.7498V6.6797C21.75 6.44514 21.6403 6.22409 21.4534 6.08229C21.2666 5.94048 21.0242 5.89425 20.7983 5.95734L12.75 8.20513Z',
  d10: 'M8.04688 2.9335C9.17547 2.18516 10.5162 1.75 11.9539 1.75C13.3987 1.75 14.7455 2.18943 15.8775 2.94447L15.0452 4.19235C14.1482 3.59411 13.0891 3.25 11.9539 3.25C10.8243 3.25 9.76993 3.59078 8.87581 4.18365L8.04688 2.9335ZM9.95577 5.34652C10.5438 4.99605 11.2266 4.79459 11.9539 4.79459C12.6891 4.79459 13.3788 5.00043 13.9711 5.35788L13.196 6.64212C12.8281 6.42007 12.405 6.29459 11.9539 6.29459C11.5077 6.29459 11.0888 6.41742 10.7237 6.63503L9.95577 5.34652Z',
} as const;

export const IconOnlineLearning01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-01-stroke-rounded IconOnlineLearning01StrokeRounded"
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

export const IconOnlineLearning01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-01-duotone-rounded IconOnlineLearning01DuotoneRounded"
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

export const IconOnlineLearning01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-01-twotone-rounded IconOnlineLearning01TwotoneRounded"
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

export const IconOnlineLearning01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-01-solid-rounded IconOnlineLearning01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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

export const IconOnlineLearning01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-01-bulk-rounded IconOnlineLearning01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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

export const IconOnlineLearning01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-01-stroke-sharp IconOnlineLearning01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOnlineLearning01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="online-learning-01-solid-sharp IconOnlineLearning01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfOnlineLearning01: TheIconSelfPack = {
  name: 'OnlineLearning01',
  StrokeRounded: IconOnlineLearning01StrokeRounded,
  DuotoneRounded: IconOnlineLearning01DuotoneRounded,
  TwotoneRounded: IconOnlineLearning01TwotoneRounded,
  SolidRounded: IconOnlineLearning01SolidRounded,
  BulkRounded: IconOnlineLearning01BulkRounded,
  StrokeSharp: IconOnlineLearning01StrokeSharp,
  SolidSharp: IconOnlineLearning01SolidSharp,
};