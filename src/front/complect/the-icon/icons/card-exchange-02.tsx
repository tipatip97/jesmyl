import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 14.0059C22 17.3207 19.3171 20.0018 16 20.0018L16.8571 18.2887',
  d2: 'M2 10.0087C2 6.69376 4.68286 4.0127 8 4.0127L7.14286 5.72584',
  d3: 'M10.9658 5.52418H21.7723M13.4658 10.9944H19.4999C20.8806 10.9944 21.9999 9.87585 21.9999 8.49607V4.49686C21.9999 3.11707 20.8806 1.99854 19.4999 1.99854H13.4658C12.0851 1.99854 10.9658 3.11707 10.9658 4.49686V8.49607C10.9658 9.87585 12.0851 10.9944 13.4658 10.9944Z',
  d4: 'M2 16.5315H12.8065M4.5 22.0017H10.5341C11.9148 22.0017 13.0341 20.8832 13.0341 19.5034V15.5042C13.0341 14.1244 11.9148 13.0059 10.5341 13.0059H4.5C3.11929 13.0059 2 14.1244 2 15.5042V19.5034C2 20.8832 3.11929 22.0017 4.5 22.0017Z',
  d5: 'M22 5.5H11V6.5C11 8.48984 11 9.48475 11.579 10.149C11.6717 10.2552 11.7737 10.3535 11.8841 10.4426C12.5742 11 13.6078 11 15.675 11H17.325C19.3922 11 20.4258 11 21.1159 10.4426C21.2263 10.3535 21.3283 10.2552 21.421 10.149C22 9.48475 22 8.48984 22 6.5V5.5Z',
  d6: 'M13 16.5H2V17.5C2 19.4898 2 20.4848 2.57904 21.149C2.67165 21.2552 2.77373 21.3535 2.8841 21.4426C3.57417 22 4.60778 22 6.675 22H8.325C10.3922 22 11.4258 22 12.1159 21.4426C12.2263 21.3535 12.3283 21.2552 12.421 21.149C13 20.4848 13 19.4898 13 17.5V16.5Z',
  d7: 'M10.9658 5.52369H21.7723M13.4658 10.9939H19.4999C20.8806 10.9939 21.9999 9.87536 21.9999 8.49558V4.49637C21.9999 3.11658 20.8806 1.99805 19.4999 1.99805H13.4658C12.0851 1.99805 10.9658 3.11658 10.9658 4.49637V8.49558C10.9658 9.87536 12.0851 10.9939 13.4658 10.9939Z',
  d8: 'M2 10C2 6.68286 4.68286 4 8 4L7.14286 5.71429',
  d9: 'M22 14C22 17.3171 19.3171 20 16 20L16.8571 18.2857',
  d10: 'M2.01465 10C2.01465 6.68286 4.6935 4 8.00567 4L7.14982 5.71429',
  d11: 'M21.9852 14C21.9852 17.3171 19.3063 20 15.9941 20L16.85 18.2857',
  d12: 'M10.9844 5.5276H21.7747M13.4806 10.9978H19.5057C20.8843 10.9978 22.0019 9.87927 22.0019 8.49949V4.50028C22.0019 3.12049 20.8843 2.00195 19.5057 2.00195H13.4806C12.102 2.00195 10.9844 3.12049 10.9844 4.50028V8.49949C10.9844 9.87927 12.102 10.9978 13.4806 10.9978Z',
  d13: 'M1.99805 16.5276H12.7884M4.49431 21.9978H10.5193C11.898 21.9978 13.0156 20.8793 13.0156 19.4995V15.5003C13.0156 14.1205 11.898 13.002 10.5193 13.002H4.49431C3.11566 13.002 1.99805 14.1205 1.99805 15.5003V19.4995C1.99805 20.8793 3.11566 21.9978 4.49431 21.9978Z',
  d14: 'M17.3708 1.25H15.6292C14.6345 1.24998 13.8233 1.24997 13.1771 1.32463C12.506 1.40216 11.9143 1.5689 11.4129 1.97391C11.2688 2.09029 11.1352 2.21883 11.0137 2.35818C10.5874 2.84718 10.4101 3.42863 10.3281 4.08561C10.3186 4.16192 10.3139 4.20008 10.3185 4.23727C10.3334 4.35568 10.4267 4.46141 10.5424 4.49078C10.5787 4.5 10.6208 4.5 10.7049 4.5L22.2951 4.5C22.3792 4.5 22.4213 4.5 22.4576 4.49078C22.5733 4.46142 22.6667 4.35568 22.6815 4.23727C22.6861 4.20008 22.6814 4.16192 22.6719 4.08561C22.5899 3.42863 22.4126 2.84718 21.9863 2.35818C21.8648 2.21883 21.7312 2.09029 21.5872 1.97391C21.0857 1.5689 20.494 1.40216 19.823 1.32463C19.1767 1.24997 18.3655 1.24998 17.3708 1.25Z',
  d15: 'M22.7498 6.09297C22.7495 5.81462 22.7493 5.67544 22.6614 5.58772C22.5736 5.5 22.4336 5.5 22.1535 5.5L10.8465 5.5C10.5664 5.5 10.4264 5.5 10.3386 5.58772C10.2507 5.67544 10.2505 5.81462 10.2502 6.09297C10.25 6.20969 10.25 6.32916 10.25 6.45139V6.54856C10.25 7.50213 10.25 8.28736 10.3281 8.91439C10.4101 9.57138 10.5874 10.1528 11.0137 10.6418C11.1352 10.7812 11.2688 10.9097 11.4129 11.0261C11.9143 11.4311 12.506 11.5978 13.1771 11.6754C13.8233 11.75 14.6345 11.75 15.6292 11.75H17.3708C18.3655 11.75 19.1767 11.75 19.823 11.6754C20.494 11.5978 21.0857 11.4311 21.5872 11.0261C21.7312 10.9097 21.8648 10.7812 21.9863 10.6418C22.4126 10.1528 22.5899 9.57138 22.6719 8.91439C22.75 8.28735 22.75 7.50215 22.75 6.54857V6.45144C22.75 6.32919 22.75 6.2097 22.7498 6.09297Z',
  d16: 'M5.77448 5.24219L6.5663 6.19395C6.72824 6.38861 6.97748 6.48841 7.22902 6.45932C7.48056 6.43023 7.70044 6.27618 7.81368 6.0497L8.67082 4.33541C8.78707 4.10292 8.77464 3.82681 8.63799 3.6057C8.50133 3.38459 8.25993 3.25 8 3.25C7.21245 3.25 6.45502 3.38478 5.75052 3.63328C3.12763 4.55843 1.25 7.05696 1.25 10C1.25 10.4142 1.58579 10.75 2 10.75C2.41421 10.75 2.75 10.4142 2.75 10C2.75 7.89355 3.98604 6.07881 5.77448 5.24219Z',
  d17: 'M18.2255 18.7578L17.4337 17.806C17.2718 17.6114 17.0225 17.5116 16.771 17.5407C16.5194 17.5698 16.2996 17.7238 16.1863 17.9503L15.3292 19.6646C15.2129 19.8971 15.2254 20.1732 15.362 20.3943C15.4987 20.6154 15.7401 20.75 16 20.75C16.7875 20.75 17.545 20.6152 18.2495 20.3667C20.8724 19.4416 22.75 16.943 22.75 14C22.75 13.5858 22.4142 13.25 22 13.25C21.5858 13.25 21.25 13.5858 21.25 14C21.25 16.1064 20.014 17.9212 18.2255 18.7578Z',
  d18: 'M8.37084 12.25H6.62923C5.63456 12.25 4.82327 12.25 4.17705 12.3246C3.50598 12.4022 2.91429 12.5689 2.41285 12.9739C2.26876 13.0903 2.13517 13.2188 2.0137 13.3582C1.58742 13.8472 1.41006 14.4286 1.32815 15.0856C1.31863 15.1619 1.31387 15.2001 1.31853 15.2373C1.33336 15.3557 1.42673 15.4614 1.54239 15.4908C1.57872 15.5 1.6208 15.5 1.70495 15.5L13.2951 15.5C13.3792 15.5 13.4213 15.5 13.4576 15.4908C13.5733 15.4614 13.6667 15.3557 13.6815 15.2373C13.6861 15.2001 13.6814 15.1619 13.6719 15.0856C13.5899 14.4286 13.4126 13.8472 12.9863 13.3582C12.8648 13.2188 12.7312 13.0903 12.5872 12.9739C12.0857 12.5689 11.494 12.4022 10.823 12.3246C10.1767 12.25 9.36551 12.25 8.37084 12.25Z',
  d19: 'M13.7498 17.093C13.7495 16.8146 13.7493 16.6754 13.6614 16.5877C13.5736 16.5 13.4336 16.5 13.1535 16.5L1.84646 16.5C1.56643 16.5 1.42642 16.5 1.33858 16.5877C1.25074 16.6754 1.25054 16.8146 1.25016 17.093C1.25 17.2097 1.25 17.3292 1.25 17.4514V17.5486C1.24998 18.5021 1.24996 19.2874 1.32815 19.9144C1.41006 20.5714 1.58742 21.1528 2.0137 21.6418C2.13517 21.7812 2.26876 21.9097 2.41285 22.0261C2.91429 22.4311 3.50598 22.5978 4.17705 22.6754C4.82329 22.75 5.63454 22.75 6.62923 22.75H8.37077C9.36547 22.75 10.1767 22.75 10.823 22.6754C11.494 22.5978 12.0857 22.4311 12.5872 22.0261C12.7312 21.9097 12.8648 21.7812 12.9863 21.6418C13.4126 21.1528 13.5899 20.5714 13.6719 19.9144C13.75 19.2874 13.75 18.5022 13.75 17.5486V17.4514C13.75 17.3292 13.75 17.2097 13.7498 17.093Z',
  d20: 'M3.00049 9.99489C3.00049 6.99004 4.49828 4.98682 7.99311 4.98682V6.99004',
  d21: 'M20.9741 14.0015C20.9741 17.0063 19.4763 19.0095 15.9814 19.0095V17.0063',
  d22: 'M11.0142 5.48928V10.4739C11.0142 10.4794 11.0186 10.4839 11.0241 10.4839H21.9884C21.994 10.4839 21.9984 10.4794 21.9984 10.4739V5.48928M11.0142 5.48928V2.0105C11.0142 2.00497 11.0186 2.00049 11.0241 2.00049H21.9884C21.994 2.00049 21.9984 2.00497 21.9984 2.0105V5.48928M11.0142 5.48928H21.9984',
  d23: 'M2.00146 17.0049V21.9895C2.00146 21.995 2.00594 21.9995 2.01145 21.9995H12.9757C12.9813 21.9995 12.9857 21.995 12.9857 21.9895V17.0049M2.00146 17.0049V13.5261C2.00146 13.5206 2.00594 13.5161 2.01145 13.5161H12.9757C12.9813 13.5161 12.9857 13.5206 12.9857 13.5261V17.0049M2.00146 17.0049H12.9857',
  d24: 'M11 1.25C10.5858 1.25 10.25 1.58579 10.25 2V4.75L22.75 4.75V2C22.75 1.58579 22.4142 1.25 22 1.25H11Z',
  d25: 'M22.75 6.25L10.25 6.25V10.5C10.25 10.9142 10.5858 11.25 11 11.25H22C22.4142 11.25 22.75 10.9142 22.75 10.5V6.25Z',
  d26: 'M1.99976 12.75C1.58554 12.75 1.24976 13.0858 1.24976 13.5V16.25L13.7498 16.25V13.5C13.7498 13.0858 13.414 12.75 12.9998 12.75H1.99976Z',
  d27: 'M13.7498 17.75L1.24976 17.75V22C1.24976 22.4142 1.58554 22.75 1.99976 22.75H12.9998C13.414 22.75 13.7498 22.4142 13.7498 22V17.75Z',
  d28: 'M4.7371 6.88534C4.09637 7.57535 3.75 8.61497 3.75 10H2.25C2.25 8.38503 2.65363 6.92465 3.6379 5.86466C4.63152 4.79462 6.10705 4.25 8 4.25H8.75V7H7.25V5.78628C6.06502 5.90668 5.26412 6.31778 4.7371 6.88534Z',
  d29: 'M19.2629 17.1147C19.9036 16.4246 20.25 15.385 20.25 14H21.75C21.75 15.615 21.3464 17.0754 20.3621 18.1353C19.3685 19.2054 17.8929 19.75 16 19.75H15.25V17H16.75V18.2137C17.935 18.0933 18.7359 17.6822 19.2629 17.1147Z',
} as const;

export const IconCardExchange02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-02-stroke-rounded IconCardExchange02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCardExchange02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-02-duotone-rounded IconCardExchange02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
        d={d.d4} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCardExchange02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-02-twotone-rounded IconCardExchange02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconCardExchange02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-02-solid-rounded IconCardExchange02SolidRounded"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCardExchange02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-02-bulk-rounded IconCardExchange02BulkRounded"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCardExchange02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-02-stroke-sharp IconCardExchange02StrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCardExchange02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-02-solid-sharp IconCardExchange02SolidSharp"
    >
      <path 
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
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCardExchange02: TheIconSelfPack = {
  name: 'CardExchange02',
  StrokeRounded: IconCardExchange02StrokeRounded,
  DuotoneRounded: IconCardExchange02DuotoneRounded,
  TwotoneRounded: IconCardExchange02TwotoneRounded,
  SolidRounded: IconCardExchange02SolidRounded,
  BulkRounded: IconCardExchange02BulkRounded,
  StrokeSharp: IconCardExchange02StrokeSharp,
  SolidSharp: IconCardExchange02SolidSharp,
};