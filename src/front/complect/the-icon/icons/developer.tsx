import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.1754 22V21.0117L15.1754 20.9908C15.1805 20.4457 15.6274 20.0051 16.1801 20L16.2551 19.9999C17.6867 19.9885 18.9166 18.9942 19.2087 17.612L19.2193 17.5601L19.7385 15L20.6798 14.5359C21.1836 14.2875 21.4354 14.1633 21.4899 13.9356C21.5444 13.7079 21.3755 13.4857 21.0376 13.0414L19.1301 10.5333C18.9403 10.2837 18.8454 10.1589 18.7945 10.0269C18.7437 9.89486 18.728 9.70775 18.6968 9.33353C18.3533 5.22708 14.8649 2 10.6123 2C6.13198 2 2.5 5.58172 2.5 10C2.5 12.7497 3.90669 15.1753 6.04911 16.6153M6.04911 16.6153V22M6.04911 16.6153C6.66896 17.0319 7.3504 17.366 8.07717 17.6016',
  d2: 'M14 9L14.9199 9.79289C15.3066 10.1262 15.5 10.2929 15.5 10.5C15.5 10.7071 15.3066 10.8738 14.9199 11.2071L14 12',
  d3: 'M7 9L6.08009 9.79289C5.69337 10.1262 5.5 10.2929 5.5 10.5C5.5 10.7071 5.69336 10.8738 6.08009 11.2071L7 12',
  d4: 'M11.5 8L9.5 13',
  d5: 'M10.6123 2C6.13198 2 2.5 5.58172 2.5 10C2.5 12.7497 3.90669 15.1753 6.04911 16.6153V22H15.1754V21.0117L15.1754 20.9908C15.1805 20.4457 15.6274 20.0051 16.1801 20L16.2551 19.9999C17.6867 19.9885 18.9166 18.9942 19.2087 17.612L19.2193 17.5601L19.7385 15L20.6798 14.5359C21.1836 14.2875 21.4354 14.1633 21.4899 13.9356C21.5444 13.7079 21.3755 13.4857 21.0376 13.0414L19.1301 10.5333L19.1301 10.5333C18.9403 10.2837 18.8454 10.1589 18.7945 10.0269C18.7437 9.89486 18.728 9.70775 18.6968 9.33353C18.3533 5.22708 14.8649 2 10.6123 2Z',
  d6: 'M19.9424 17.7671C19.576 19.5006 18.0379 20.7358 16.2609 20.7499C15.9708 20.7659 15.9163 20.9311 15.9253 21.0117C15.9253 21.9718 15.147 22.75 14.187 22.75L8.00424 22.75C7.57142 22.7501 7.17459 22.7501 6.85178 22.7067C6.4963 22.6589 6.12057 22.5465 5.81155 22.2374C5.50253 21.9284 5.39008 21.5527 5.34229 21.1972C5.29889 20.8744 5.29893 20.4776 5.29898 20.0447L5.29898 19.8537C5.29898 19.3947 5.29899 19.1652 5.43736 19.0767C5.57573 18.9882 5.79384 19.089 6.23006 19.2906C6.3777 19.3588 6.52724 19.4237 6.67858 19.4851C7.06236 19.641 7.48661 19.4225 7.61433 19.0285C7.74205 18.6345 7.52458 18.2145 7.14273 18.0539C6.60977 17.8299 6.10363 17.5558 5.6304 17.2378C5.51807 17.1623 5.40757 17.0841 5.29899 17.0037C3.14751 15.4102 1.74988 12.868 1.74988 10C1.74988 5.15769 5.72753 1.25 10.6121 1.25C15.2494 1.25 19.0676 4.77057 19.444 9.27103C19.4493 9.42115 19.4738 9.7398 19.5297 9.81345L21.6582 12.6187C21.8062 12.8131 21.9618 13.0176 22.0661 13.205C22.1861 13.4205 22.3091 13.7348 22.2192 14.1102C22.1296 14.4843 21.8788 14.7091 21.6759 14.8475C21.4984 14.9686 21.2674 15.0824 21.0465 15.1912L20.6644 15.3796C20.5347 15.4436 20.4699 15.4755 20.4274 15.5307C20.3848 15.5859 20.3705 15.6568 20.3417 15.7985L19.9424 17.7671ZM13.5083 9.56811C13.1945 9.29768 13.1594 8.8241 13.4298 8.51035C13.7003 8.1966 14.1738 8.16148 14.4876 8.43192L15.4075 9.22481L15.4353 9.24874L15.4353 9.24876L15.4353 9.24877C15.6041 9.39413 15.7834 9.54856 15.9145 9.69668C16.0627 9.86416 16.2479 10.13 16.2479 10.5C16.2479 10.8701 16.0627 11.1359 15.9145 11.3033C15.7834 11.4515 15.604 11.6059 15.4353 11.7513L15.4075 11.7752L14.4876 12.5681C14.1738 12.8385 13.7003 12.8034 13.4298 12.4897C13.1594 12.1759 13.1945 11.7023 13.5083 11.4319L14.4282 10.639C14.4893 10.5863 14.5421 10.5408 14.5886 10.5C14.5421 10.4592 14.4893 10.4137 14.4282 10.361L13.5083 9.56811ZM7.56602 8.51035C7.83645 8.8241 7.80134 9.29768 7.48758 9.56811L6.56768 10.361C6.5065 10.4137 6.45376 10.4592 6.40724 10.5C6.45376 10.5408 6.5065 10.5863 6.56768 10.639L7.48758 11.4319C7.80134 11.7023 7.83645 12.1759 7.56602 12.4897C7.29559 12.8034 6.82202 12.8385 6.50827 12.5681L5.58836 11.7752L5.56058 11.7513C5.39181 11.6059 5.21249 11.4515 5.08136 11.3033C4.93311 11.1359 4.74792 10.8701 4.74792 10.5C4.74792 10.13 4.93311 9.86416 5.08136 9.69668C5.21248 9.54856 5.39178 9.39413 5.56054 9.24878L5.56056 9.24876L5.56058 9.24874L5.58836 9.22481L6.50827 8.43192C6.82202 8.16148 7.29559 8.1966 7.56602 8.51035ZM12.1945 8.27874C12.3483 7.89415 12.1613 7.45768 11.7767 7.30384C11.3921 7.15001 10.9556 7.33707 10.8018 7.72166L8.80177 12.7217C8.64793 13.1062 8.83499 13.5427 9.21958 13.6966C9.60417 13.8504 10.0406 13.6633 10.1945 13.2787L12.1945 8.27874Z',
  d7: 'M16.2609 20.7499C18.0379 20.7358 19.576 19.5006 19.9424 17.7671L20.3417 15.7985C20.3705 15.6568 20.3848 15.5859 20.4274 15.5307C20.4699 15.4755 20.5347 15.4436 20.6644 15.3796L21.0465 15.1912C21.2674 15.0824 21.4984 14.9686 21.6759 14.8475C21.8788 14.7091 22.1296 14.4843 22.2192 14.1102C22.3091 13.7348 22.1861 13.4205 22.0661 13.205C21.9618 13.0176 21.8062 12.8131 21.6582 12.6187L19.5297 9.81345C19.4738 9.7398 19.4493 9.42115 19.444 9.27103C19.0676 4.77057 15.2494 1.25 10.6121 1.25C5.72753 1.25 1.74988 5.15769 1.74988 10C1.74988 12.868 3.14751 15.4102 5.29899 17.0037C5.40757 17.0841 5.51807 17.1623 5.6304 17.2378C6.10363 17.5558 6.60977 17.8299 7.14273 18.0539C7.52458 18.2145 7.74205 18.6345 7.61433 19.0285C7.48661 19.4225 7.06236 19.641 6.67858 19.4851C6.52724 19.4237 6.3777 19.3588 6.23006 19.2906C5.79384 19.089 5.57573 18.9882 5.43736 19.0767C5.29899 19.1652 5.29898 19.3947 5.29898 19.8537L5.29898 20.0447C5.29893 20.4776 5.29889 20.8744 5.34229 21.1972C5.39008 21.5527 5.50253 21.9284 5.81155 22.2374C6.12057 22.5465 6.4963 22.6589 6.85178 22.7067C7.17459 22.7501 7.57142 22.7501 8.00424 22.75L14.187 22.75C15.147 22.75 15.9253 21.9718 15.9253 21.0117C15.9163 20.9311 15.9708 20.7659 16.2609 20.7499Z',
  d8: 'M13.4298 8.51035C13.1594 8.8241 13.1945 9.29768 13.5083 9.56811L14.4282 10.361C14.4893 10.4137 14.5421 10.4592 14.5886 10.5C14.5421 10.5408 14.4893 10.5863 14.4282 10.639L13.5083 11.4319C13.1945 11.7023 13.1594 12.1759 13.4298 12.4897C13.7003 12.8034 14.1738 12.8385 14.4876 12.5681L15.4075 11.7752C15.4167 11.7673 15.426 11.7593 15.4353 11.7513C15.604 11.6059 15.7834 11.4515 15.9145 11.3033C16.0627 11.1359 16.2479 10.8701 16.2479 10.5C16.2479 10.13 16.0627 9.86416 15.9145 9.69668C15.7834 9.54855 15.604 9.39411 15.4353 9.24874C15.426 9.24074 15.4167 9.23276 15.4075 9.22481C15.4075 9.22481 15.4075 9.22481 15.4075 9.22481L14.4876 8.43192C14.1738 8.16148 13.7003 8.1966 13.4298 8.51035Z',
  d9: 'M7.56602 8.51035C7.83645 8.8241 7.80134 9.29768 7.48758 9.56811L6.56768 10.361C6.5065 10.4137 6.45376 10.4592 6.40724 10.5C6.45376 10.5408 6.5065 10.5863 6.56768 10.639L7.48758 11.4319C7.80134 11.7023 7.83645 12.1759 7.56602 12.4897C7.29559 12.8034 6.82202 12.8385 6.50827 12.5681L5.58836 11.7752C5.57914 11.7673 5.56987 11.7593 5.56058 11.7513C5.39181 11.6059 5.21249 11.4515 5.08136 11.3033C4.93311 11.1359 4.74792 10.8701 4.74792 10.5C4.74792 10.13 4.93311 9.86416 5.08136 9.69668C5.21249 9.54855 5.3918 9.39411 5.56058 9.24874C5.56987 9.24074 5.57914 9.23276 5.58836 9.22481C5.58836 9.22481 5.58836 9.22481 5.58836 9.22481L6.50827 8.43192C6.82202 8.16148 7.29559 8.1966 7.56602 8.51035Z',
  d10: 'M11.7767 7.30384C12.1613 7.45768 12.3483 7.89415 12.1945 8.27874L10.1945 13.2787C10.0406 13.6633 9.60417 13.8504 9.21958 13.6966C8.83499 13.5427 8.64793 13.1062 8.80177 12.7217L10.8018 7.72166C10.9556 7.33707 11.3921 7.15001 11.7767 7.30384Z',
  d11: 'M14 7.99805L16 9.99748L14 11.9969',
  d12: 'M8 7.99805L6 9.99748L8 11.9969',
  d13: 'M12 6.99902L10 12.9973',
  d14: 'M8.12206 17.6349C4.77163 16.3066 2.67745 13.8985 2.5 10.313C2.5 5.7804 6.02332 2 10.6445 2C15.1565 2.08496 18.5903 5.48522 18.7166 9.9414L21.4482 13.9248C21.4826 13.9744 21.5293 14.022 21.4756 14.0497L19.6848 14.9933L19.2339 17.4331C18.8466 19.195 17.7344 20.0586 15.5153 19.9908V22M6.01005 21.9944V16.5553',
  d15: 'M1.75 10C1.75 12.868 3.14832 15.4102 5.30085 17.0037V22C5.30085 22.4142 5.6368 22.75 6.05122 22.75H15.5068C15.9212 22.75 16.2571 22.4142 16.2571 22V20.7499H16.2623L16.2682 20.7499C18.046 20.7358 19.585 19.5006 19.9515 17.7671L20.4175 15.4706L21.8893 14.5765C22.0673 14.4684 22.1923 14.2912 22.2345 14.0873C22.2766 13.8835 22.2321 13.6713 22.1115 13.5015L19.4554 9.7609V9.33353C19.4554 9.31267 19.4546 9.29182 19.4528 9.27103C19.0763 4.77057 15.2561 1.25 10.6166 1.25C5.72961 1.25 1.75 5.15769 1.75 10ZM13.4688 8.53039L14.9384 10.0001L13.4688 11.4697L14.5294 12.5304L17.0597 10.0001L14.5294 7.46973L13.4688 8.53039ZM7.46978 7.46973L8.53044 8.53039L7.06077 10.0001L8.53044 11.4697L7.46978 12.5304L4.93945 10.0001L7.46978 7.46973ZM11.2891 6.7627L9.28906 12.7627L10.7121 13.237L12.7121 7.23704L11.2891 6.7627Z',
} as const;

export const IconDeveloperStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="developer-stroke-rounded IconDeveloperStrokeRounded"
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

export const IconDeveloperDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="developer-duotone-rounded IconDeveloperDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconDeveloperTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="developer-twotone-rounded IconDeveloperTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeveloperSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="developer-solid-rounded IconDeveloperSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeveloperBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="developer-bulk-rounded IconDeveloperBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDeveloperStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="developer-stroke-sharp IconDeveloperStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeveloperSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="developer-solid-sharp IconDeveloperSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDeveloper: TheIconSelfPack = {
  name: 'Developer',
  StrokeRounded: IconDeveloperStrokeRounded,
  DuotoneRounded: IconDeveloperDuotoneRounded,
  TwotoneRounded: IconDeveloperTwotoneRounded,
  SolidRounded: IconDeveloperSolidRounded,
  BulkRounded: IconDeveloperBulkRounded,
  StrokeSharp: IconDeveloperStrokeSharp,
  SolidSharp: IconDeveloperSolidSharp,
};