import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 5.11296C3 4.56029 3 4.28395 3.04289 4.05373C3.23304 3.03312 4.02565 2.23473 5.03889 2.0432C5.26745 2 5.54179 2 6.09048 2H17.9095C18.4582 2 18.7325 2 18.9611 2.0432C19.9743 2.23473 20.767 3.03312 20.9571 4.05373C21 4.28395 21 4.56029 21 5.11296C21 5.6552 21 5.92631 20.9685 6.17771C20.8309 7.27541 20.2512 8.26781 19.3654 8.92208C19.1625 9.07192 18.9272 9.20359 18.4566 9.46692L15.8851 10.9059C13.9861 11.9686 13.0365 12.5 12 12.5C10.9635 12.5 10.0139 11.9686 8.11486 10.9059L5.54338 9.46692C5.0728 9.20359 4.83752 9.07192 4.63465 8.92208C3.74885 8.26781 3.16914 7.27541 3.03152 6.17771C3 5.92631 3 5.6552 3 5.11296Z',
  d2: 'M8 5V6M12 5V8M16 5V6',
  d3: 'M12.7774 13.6499L13.5693 15.2468C13.6773 15.4691 13.9653 15.6823 14.2083 15.7231L15.6436 15.9636C16.5615 16.1178 16.7775 16.7893 16.1161 17.4516L15.0002 18.5767C14.8112 18.7673 14.7077 19.1347 14.7662 19.3979L15.0857 20.7906C15.3377 21.893 14.7572 22.3195 13.7898 21.7433L12.4445 20.9403C12.2015 20.7952 11.801 20.7952 11.5536 20.9403L10.2082 21.7433C9.24533 22.3195 8.66039 21.8885 8.91236 20.7906L9.23183 19.3979C9.29032 19.1347 9.18683 18.7673 8.99785 18.5767L7.88198 17.4516C7.22505 16.7893 7.43653 16.1178 8.35443 15.9636L9.78977 15.7231C10.0282 15.6823 10.3162 15.4691 10.4242 15.2468L11.2161 13.6499C11.6481 12.7834 12.35 12.7834 12.7774 13.6499Z',
  d4: 'M11.9999 12.25C12.7032 12.25 13.1846 12.7774 13.4511 13.3172L14.2398 14.9077C14.2679 14.9414 14.3057 14.9663 14.3449 14.9853L15.7694 15.224C16.3606 15.3233 16.9798 15.6358 17.1881 16.2893C17.3961 16.9417 17.0726 17.5562 16.6482 17.9816L15.5411 19.0979C15.5179 19.1361 15.5003 19.1972 15.5014 19.2419L15.8183 20.6235C15.9583 21.2362 15.9613 22.0446 15.3407 22.5008C14.717 22.9592 13.9459 22.7083 13.4069 22.3873L12.0705 21.5897C12.0301 21.5782 11.9683 21.578 11.9282 21.591L10.5944 22.3872C10.054 22.7104 9.28466 22.9571 8.66174 22.4989C8.04248 22.0433 8.04185 21.2373 8.18284 20.6229L8.4996 19.2419C8.50069 19.1972 8.48306 19.1361 8.45994 19.0979L7.35094 17.9798C6.92919 17.5545 6.60786 16.9419 6.81412 16.2906C7.02127 15.6365 7.64002 15.3234 8.23199 15.2239L9.65236 14.986C9.69241 14.9684 9.72712 14.9397 9.7566 14.9078L10.5464 13.3153C10.815 12.7763 11.2976 12.25 11.9999 12.25Z',
  d5: 'M19.101 1.30629C18.8019 1.24975 18.461 1.24986 17.9869 1.25002C13.996 1.25133 10.0052 1.25133 6.01431 1.25002C5.54018 1.24986 5.19927 1.24975 4.90017 1.30629C3.5803 1.55578 2.55244 2.59449 2.30616 3.91639C2.24332 4.25371 2.24634 4.60211 2.24932 4.94608C2.24996 5.01941 2.25059 5.09254 2.25058 5.16532C2.25054 5.65758 2.25051 5.97257 2.28793 6.27105C2.45095 7.57138 3.13785 8.74852 4.18964 9.52539C4.43095 9.70362 4.70478 9.85683 5.13118 10.0954L5.1312 10.0954L5.17771 10.1214L7.78169 11.5786C8.70366 12.0946 9.44216 12.5078 10.0796 12.7881C10.7393 13.0781 11.3423 13.25 12.0006 13.25C12.6589 13.25 13.2619 13.0781 13.9215 12.7881C14.559 12.5078 15.2975 12.0946 16.2195 11.5786L18.8694 10.0958L18.8694 10.0957C19.2961 9.85699 19.5701 9.70371 19.8115 9.52539C20.8633 8.74852 21.5502 7.57138 21.7132 6.27105C21.7554 5.93512 21.7534 5.59483 21.7514 5.25605C21.751 5.18281 21.7506 5.10965 21.7506 5.03661C21.7508 4.55806 21.7509 4.21617 21.695 3.91639C21.4487 2.59449 20.4209 1.55578 19.101 1.30629ZM8.75 5C8.75 4.58579 8.41421 4.25 8 4.25C7.58579 4.25 7.25 4.58579 7.25 5V6C7.25 6.41421 7.58579 6.75 8 6.75C8.41421 6.75 8.75 6.41421 8.75 6V5ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5V8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8V5ZM16.75 5C16.75 4.58579 16.4142 4.25 16 4.25C15.5858 4.25 15.25 4.58579 15.25 5V6C15.25 6.41421 15.5858 6.75 16 6.75C16.4142 6.75 16.75 6.41421 16.75 6V5Z',
  d6: 'M8 5.00098V7.00098M12 5.00098V8.00098M16 5.00098V7.00098',
  d7: 'M12.0034 12.501L3.0893 7.98504L3 2.45886C3 2.4029 3.03998 2.11346 3.0893 2.11346L20.9001 2.00098C20.9552 2.00063 21 2.04525 21 2.1004V7.98504L12.0034 12.501Z',
  d8: 'M11.9259 13.1697C11.9655 13.1108 12.0522 13.1108 12.0919 13.1697L13.7728 15.6699L16.6637 16.3403C16.7347 16.3567 16.7648 16.4411 16.7203 16.4988L14.8752 18.889L15.0223 21.8936C15.0258 21.9645 14.9563 22.0163 14.8893 21.9929L12.0089 20.9837L9.1751 21.9912C9.10748 22.0153 9.0373 21.9623 9.0418 21.8907L9.23072 18.889L7.2612 16.5005C7.21388 16.4431 7.24356 16.3559 7.31608 16.3394L10.245 15.67L11.9259 13.1697Z',
  d9: 'M12 12.25C12.2469 12.25 12.478 12.3715 12.6179 12.5749L14.2283 14.9156L16.9613 15.7181C17.199 15.7879 17.3869 15.9706 17.4634 16.2062C17.5399 16.4419 17.495 16.7001 17.3436 16.8962L15.6071 19.1442L15.6854 21.9793C15.6922 22.2264 15.5768 22.461 15.3769 22.6065C15.177 22.7519 14.9183 22.7895 14.6852 22.707L12 21.7558L9.31477 22.707C9.08174 22.7895 8.82301 22.7519 8.6231 22.6065C8.4232 22.461 8.30781 22.2264 8.31463 21.9793L8.39291 19.1442L6.65645 16.8962C6.50501 16.7001 6.46016 16.4419 6.53662 16.2062C6.61308 15.9706 6.80099 15.7879 7.0387 15.7181L9.77171 14.9156L11.3821 12.5749C11.5221 12.3715 11.7531 12.25 12 12.25Z',
  d10: 'M3 1.25C2.58579 1.25 2.25 1.58333 2.25 1.99451V8.41069L11.9997 13.25L21.7497 8.4107V1.99451C21.7497 1.58333 21.4139 1.25 20.9997 1.25H3ZM7.25 5V7H8.75V5H7.25ZM11.25 5V8H12.75V5H11.25ZM15.25 5V7H16.75V5H15.25Z',
} as const;

export const IconMedal02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-02-stroke-rounded IconMedal02StrokeRounded"
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

export const IconMedal02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-02-duotone-rounded IconMedal02DuotoneRounded"
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
      />
      <path 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconMedal02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-02-twotone-rounded IconMedal02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconMedal02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-02-solid-rounded IconMedal02SolidRounded"
    >
      <path 
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

export const IconMedal02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-02-bulk-rounded IconMedal02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMedal02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-02-stroke-sharp IconMedal02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-02-solid-sharp IconMedal02SolidSharp"
    >
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

export const iconPackOfMedal02: TheIconSelfPack = {
  name: 'Medal02',
  StrokeRounded: IconMedal02StrokeRounded,
  DuotoneRounded: IconMedal02DuotoneRounded,
  TwotoneRounded: IconMedal02TwotoneRounded,
  SolidRounded: IconMedal02SolidRounded,
  BulkRounded: IconMedal02BulkRounded,
  StrokeSharp: IconMedal02StrokeSharp,
  SolidSharp: IconMedal02SolidSharp,
};