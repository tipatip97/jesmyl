import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z',
  d2: 'M16 17.5C16 16.6716 14.2091 16 12 16C9.79086 16 8 16.6716 8 17.5C8 18.3284 9.79086 19 12 19C13.6569 19 15 19.6716 15 20.5C15 21.3284 13.6569 22 12 22C10.7151 22 9.61891 21.5961 9.19145 21.0284',
  d3: 'M12 5V16',
  d4: 'M6.79608 11.949C4.78062 13.6542 2.83394 10.7419 2 8.72618C2.88295 8.72618 4.7205 8.1724 6.42898 6.22663C7.175 5.377 7.54801 4.95218 7.75824 5.00428C7.96847 5.05638 8.25712 5.69208 8.83442 6.9635C9.72693 8.92909 11.0673 9.96187 12 10.3376C9.6 14.205 7.53072 13.0233 6.79608 11.949ZM6.79608 11.949C7.09111 11.6994 7.38762 11.3509 7.68232 10.8861',
  d5: 'M17.2039 11.949C19.2194 13.6542 21.1661 10.7419 22 8.72618C21.1171 8.72618 19.2795 8.1724 17.571 6.22663C16.825 5.377 16.452 4.95218 16.2418 5.00428C16.0315 5.05638 15.7429 5.69208 15.1656 6.9635C14.2731 8.92909 12.9327 9.96187 12 10.3376C14.4 14.205 16.4693 13.0233 17.2039 11.949ZM17.2039 11.949C16.9089 11.6994 16.6124 11.3509 16.3177 10.8861',
  d6: 'M8.83442 6.9635C9.72693 8.92909 11.0673 9.96187 12 10.3376C9.6 14.205 7.53072 13.0233 6.79608 11.949C4.78062 13.6542 2.83394 10.7419 2 8.72618C2.88295 8.72618 4.7205 8.1724 6.42898 6.22663C7.175 5.377 7.54801 4.95218 7.75824 5.00428C7.96847 5.05638 8.25712 5.69208 8.83442 6.9635Z',
  d7: 'M15.1656 6.9635C14.2731 8.92909 12.9327 9.96187 12 10.3376C14.4 14.205 16.4693 13.0233 17.2039 11.949C19.2194 13.6542 21.1661 10.7419 22 8.72618C21.1171 8.72618 19.2795 8.1724 17.571 6.22663C16.825 5.377 16.452 4.95218 16.2418 5.00428C16.0315 5.05638 15.7429 5.69208 15.1656 6.9635Z',
  d8: 'M9.75 3.375C9.75 2.13236 10.7574 1.125 12 1.125C13.2426 1.125 14.25 2.13236 14.25 3.375C14.25 4.61764 13.2426 5.625 12 5.625C10.7574 5.625 9.75 4.61764 9.75 3.375Z',
  d9: 'M9.5227 17.2507C9.40925 17.2932 9.31426 17.3353 9.23584 17.375C9.31426 17.4147 9.40925 17.4568 9.5227 17.4993C10.108 17.7188 10.9836 17.875 12 17.875C12.95 17.875 13.8595 18.0654 14.5685 18.4199C15.2177 18.7445 16 19.378 16 20.375C16 21.372 15.2177 22.0055 14.5685 22.3301C13.8595 22.6846 12.95 22.875 12 22.875C11.2578 22.875 10.5487 22.759 9.94196 22.5453C9.35528 22.3386 8.77032 22.0066 8.39259 21.5049C8.06038 21.0637 8.14874 20.4368 8.58994 20.1046C9.03114 19.7724 9.65811 19.8607 9.99031 20.3019C10.04 20.368 10.2169 20.5217 10.6064 20.6589C10.9758 20.789 11.4573 20.875 12 20.875C12.7068 20.875 13.2973 20.7296 13.6741 20.5412C13.8074 20.4746 13.8896 20.4175 13.9396 20.375C13.8896 20.3325 13.8074 20.2754 13.6741 20.2088C13.2973 20.0204 12.7068 19.875 12 19.875C10.8073 19.875 9.6829 19.6954 8.82045 19.372C8.39292 19.2117 7.97747 18.9966 7.65093 18.7071C7.32556 18.4187 7 17.9708 7 17.375C7 16.7792 7.32556 16.3313 7.65093 16.0429C7.97747 15.7534 8.39292 15.5383 8.82045 15.378C9.6829 15.0546 10.8073 14.875 12 14.875C13.1927 14.875 14.3171 15.0546 15.1796 15.378C15.6071 15.5383 16.0225 15.7534 16.3491 16.0429C16.6744 16.3313 17 16.7792 17 17.375C17 17.9273 16.5523 18.375 16 18.375C15.5006 18.375 15.0867 18.009 15.012 17.5305C14.9296 17.461 14.7613 17.3572 14.4773 17.2507C13.892 17.0312 13.0164 16.875 12 16.875C10.9836 16.875 10.108 17.0312 9.5227 17.2507Z',
  d10: 'M12 3.875C12.5523 3.875 13 4.32272 13 4.875V15.875C13 16.4273 12.5523 16.875 12 16.875C11.4477 16.875 11 16.4273 11 15.875V4.875C11 4.32272 11.4477 3.875 12 3.875Z',
  d11: 'M18.1346 5.60708L18.1105 5.57965C17.758 5.17814 17.4619 4.84094 17.227 4.61362C17.1082 4.49864 16.9698 4.3765 16.8195 4.28622C16.684 4.20482 16.4036 4.06678 16.0614 4.15159C15.7377 4.2318 15.545 4.47463 15.4679 4.57645C15.3648 4.71277 15.2684 4.88002 15.1775 5.05281C14.9967 5.39655 14.7731 5.88905 14.4943 6.5032L14.4827 6.52871C13.6651 8.32926 12.4633 9.21769 11.7197 9.51723C11.5144 9.59996 11.356 9.76923 11.2872 9.97967C11.2183 10.1901 11.246 10.4202 11.3627 10.6084C12.6142 12.625 13.9134 13.5455 15.1822 13.6204C15.8427 13.6595 16.4098 13.4647 16.8659 13.1745C16.9419 13.1262 16.9799 13.102 17.0118 13.061C17.0744 12.9805 17.0906 12.8493 17.0496 12.7559C17.0287 12.7084 16.9912 12.6687 16.9162 12.5895C16.6635 12.3223 16.4078 12.0452 16.1945 11.8027C15.9945 11.5753 15.794 11.3364 15.684 11.1629C15.4622 10.8131 15.5659 10.3497 15.9158 10.1279C16.2656 9.90611 16.729 10.0099 16.9508 10.3597C16.9881 10.4186 17.1104 10.5728 17.3208 10.812C17.518 11.0361 17.7604 11.2991 18.006 11.5588C18.1625 11.7242 18.3492 11.9057 18.5358 12.0803C18.9615 12.4786 19.1744 12.6778 19.5586 12.6849C19.9428 12.692 20.1164 12.5412 20.4637 12.2395C20.4928 12.2143 20.5215 12.1888 20.5498 12.163C21.5101 11.2892 22.2573 9.94131 22.693 8.88819C22.7888 8.65679 22.7627 8.39286 22.6235 8.18467C22.4843 7.97647 22.2504 7.85148 22 7.85148C21.3629 7.85148 19.7218 7.41471 18.1346 5.60708Z',
  d12: 'M5.8654 5.60708L5.88948 5.57965C6.24201 5.17814 6.53806 4.84094 6.77299 4.61362C6.89181 4.49864 7.03023 4.3765 7.1805 4.28622C7.31598 4.20482 7.59641 4.06678 7.93864 4.15159C8.26228 4.2318 8.45504 4.47463 8.53206 4.57645C8.63517 4.71277 8.73158 4.88002 8.82246 5.05281C9.00325 5.39655 9.22688 5.88905 9.50574 6.5032L9.51732 6.52871C10.3349 8.32926 11.5367 9.21769 12.2803 9.51723C12.4856 9.59996 12.644 9.76923 12.7128 9.97967C12.7817 10.1901 12.754 10.4202 12.6373 10.6084C11.3858 12.625 10.0866 13.5455 8.81776 13.6204C8.15734 13.6595 7.59019 13.4647 7.13412 13.1745C7.05813 13.1262 7.02013 13.102 6.98822 13.061C6.92563 12.9805 6.90936 12.8493 6.95042 12.7559C6.97134 12.7084 7.00883 12.6687 7.08381 12.5895C7.33646 12.3223 7.59218 12.0452 7.80546 11.8027C8.00554 11.5753 8.20603 11.3364 8.31603 11.1629C8.53783 10.8131 8.43405 10.3497 8.08423 10.1279C7.73441 9.90611 7.27101 10.0099 7.04921 10.3597C7.01186 10.4186 6.88959 10.5728 6.67921 10.812C6.48202 11.0361 6.23956 11.2991 5.99402 11.5588C5.83752 11.7242 5.65077 11.9057 5.46424 12.0803C5.03846 12.4786 4.82557 12.6778 4.44141 12.6849C4.05724 12.692 3.8836 12.5412 3.53633 12.2395C3.50725 12.2143 3.47855 12.1888 3.45022 12.163C2.48986 11.2892 1.74265 9.94131 1.30696 8.88819C1.21123 8.65679 1.23731 8.39286 1.37648 8.18467C1.51566 7.97647 1.74957 7.85148 2 7.85148C2.63707 7.85148 4.27821 7.41471 5.8654 5.60708Z',
  d13: 'M13 4.875C13 4.32272 12.5523 3.875 12 3.875C11.4477 3.875 11 4.32272 11 4.875V14.9181C11.3248 14.8896 11.6596 14.875 12 14.875C12.3404 14.875 12.6752 14.8896 13 14.9181V4.875Z',
  d14: 'M16 18.3937C16 16.8672 14.2091 16 12 16C9.79086 16 8 16.6716 8 17.5C8 18.3284 9.79086 19 12 19C13.6569 19 15 19.6716 15 20.5C15 21.3284 13.6569 22 12 22C10.7151 22 9.19131 21.2887 9.0266 20.3553',
  d15: 'M16.2418 5C15.3493 7.11465 12.9327 10.3335 12 10.7378C16.5 15.7541 21.1661 11.1727 22 9.00414C21.1171 9.00414 17.9502 7.09332 16.2418 5Z',
  d16: 'M7.75824 5C8.65074 7.11465 11.0673 10.3335 12 10.7378C7.5 15.7541 2.83394 11.1727 2 9.00414C2.88295 9.00414 6.04976 7.09332 7.75824 5Z',
  d17: 'M9.75 3.5C9.75 2.25736 10.7574 1.25 12 1.25C13.2426 1.25 14.25 2.25736 14.25 3.5C14.25 4.74264 13.2426 5.75 12 5.75C10.7574 5.75 9.75 4.74264 9.75 3.5Z',
  d18: 'M9.5227 17.1257C9.40925 17.1682 9.31426 17.2103 9.23584 17.25C9.31426 17.2897 9.40925 17.3318 9.5227 17.3743C10.108 17.5938 10.9836 17.75 12 17.75C12.95 17.75 13.8595 17.9404 14.5685 18.2949C15.2177 18.6195 16 19.253 16 20.25C16 21.247 15.2177 21.8805 14.5685 22.2051C13.8595 22.5596 12.95 22.75 12 22.75C11.2578 22.75 10.5487 22.634 9.94196 22.4203C9.35528 22.2136 8.77032 21.8816 8.39259 21.3799L9.99031 20.1769C10.04 20.243 10.2169 20.3967 10.6064 20.5339C10.9758 20.664 11.4573 20.75 12 20.75C12.7068 20.75 13.2973 20.6046 13.6741 20.4162C13.8074 20.3496 13.8896 20.2925 13.9396 20.25C13.8896 20.2075 13.8074 20.1504 13.6741 20.0838C13.2973 19.8954 12.7068 19.75 12 19.75C10.8073 19.75 9.6829 19.5704 8.82045 19.247C8.39292 19.0867 7.97747 18.8716 7.65093 18.5821C7.32556 18.2937 7 17.8458 7 17.25C7 16.6542 7.32556 16.2063 7.65093 15.9179C7.97747 15.6284 8.39292 15.4133 8.82045 15.253C9.43676 15.0219 10.1868 14.8642 11 14.7931V4.75H13V14.7868C13.8092 14.8498 14.5854 15.0003 15.2346 15.2889C15.7014 15.4964 16.1474 15.795 16.479 16.2271C16.821 16.6728 17 17.2078 17 17.8003H15C15 17.6295 14.9551 17.5266 14.8923 17.4447C14.8191 17.3493 14.6793 17.2308 14.4222 17.1165C13.8885 16.8792 13.0542 16.75 12 16.75C10.9836 16.75 10.108 16.9062 9.5227 17.1257Z',
  d19: 'M8.44922 4.70838C8.34694 4.46604 8.12518 4.295 7.86481 4.25762C7.60444 4.22025 7.34352 4.32201 7.1772 4.52579C6.38573 5.49554 5.23163 6.44854 4.15523 7.16191C3.62001 7.51662 3.1195 7.80175 2.71121 7.99493C2.50674 8.09167 2.33506 8.16075 2.20035 8.20426C2.07186 8.24576 2.01064 8.25285 2.00106 8.25396L2 8.25415C1.75291 8.25415 1.52167 8.37585 1.38178 8.57953C1.24189 8.78321 1.21129 9.04272 1.29998 9.27335C1.55273 9.9306 2.0645 10.7052 2.73849 11.4127C3.41773 12.1257 4.30049 12.8115 5.32862 13.2542C6.36273 13.6994 7.55561 13.9025 8.81988 13.6201C9.89109 13.3807 10.9633 12.8041 12 11.8153C13.0367 12.8041 14.1089 13.3807 15.1801 13.6201C16.4444 13.9025 17.6373 13.6994 18.6714 13.2542C19.6995 12.8115 20.5823 12.1257 21.2615 11.4127C21.9355 10.7052 22.4473 9.9306 22.7 9.27335C22.7887 9.04272 22.7581 8.78321 22.6182 8.57953C22.4783 8.37585 22.2471 8.25415 22 8.25415L21.999 8.25396C21.9894 8.25285 21.9282 8.24576 21.7997 8.20426C21.665 8.16075 21.4933 8.09167 21.2888 7.99493C20.8805 7.80175 20.38 7.51662 19.8448 7.16191C18.7684 6.44854 17.6143 5.49554 16.8228 4.52579C16.6565 4.32201 16.3956 4.22025 16.1352 4.25762C15.8748 4.295 15.6531 4.46604 15.5508 4.70838C15.1367 5.68947 14.3472 6.96898 13.534 8.06285C13.1302 8.60613 12.7321 9.08783 12.3867 9.45182C12.2341 9.61266 12.1048 9.73624 12 9.82846C11.8952 9.73624 11.7659 9.61266 11.6133 9.45182C11.2679 9.08783 10.8698 8.60613 10.466 8.06285C9.65279 6.96898 8.8633 5.68947 8.44922 4.70838Z',
} as const;

export const IconCaduceusStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="caduceus-stroke-rounded IconCaduceusStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconCaduceusDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="caduceus-duotone-rounded IconCaduceusDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCaduceusTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="caduceus-twotone-rounded IconCaduceusTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCaduceusSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="caduceus-solid-rounded IconCaduceusSolidRounded"
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCaduceusBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="caduceus-bulk-rounded IconCaduceusBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCaduceusStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="caduceus-stroke-sharp IconCaduceusStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconCaduceusSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="caduceus-solid-sharp IconCaduceusSolidSharp"
    >
      <path 
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

export const iconPackOfCaduceus: TheIconSelfPack = {
  name: 'Caduceus',
  StrokeRounded: IconCaduceusStrokeRounded,
  DuotoneRounded: IconCaduceusDuotoneRounded,
  TwotoneRounded: IconCaduceusTwotoneRounded,
  SolidRounded: IconCaduceusSolidRounded,
  BulkRounded: IconCaduceusBulkRounded,
  StrokeSharp: IconCaduceusStrokeSharp,
  SolidSharp: IconCaduceusSolidSharp,
};