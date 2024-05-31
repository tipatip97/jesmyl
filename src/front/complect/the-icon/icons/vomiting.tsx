import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.40041 18.5C2.9039 16.752 2 14.4815 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.4815 21.0961 16.752 19.5996 18.5',
  d2: 'M7.5 8C7.97606 8.31737 8.84109 8.70974 8.9506 9.34118C8.95696 9.37783 8.96126 9.41481 8.9635 9.45195C8.98931 9.88051 8.64102 10.2537 7.94444 11M16.5 8C16.0239 8.31738 15.1589 8.70974 15.0494 9.34118C15.043 9.37783 15.0387 9.41481 15.0365 9.45195C15.0107 9.88051 15.359 10.2537 16.0556 11',
  d3: 'M7 19C7.47273 16.7178 9.53167 15 12 15C14.4683 15 16.5273 16.7178 17 19',
  d4: 'M12 19L12 21',
  d5: 'M8.46546 16.5C8.46546 18.4882 8.85751 20.7325 7 22',
  d6: 'M15.534 16.5C15.534 18.4808 15.1447 20.7344 17 22',
  d7: 'M7.87744 21.1134C8.55897 20.0662 8.52033 18.7137 8.48259 17.3924C8.474 17.0917 8.46546 16.7926 8.46546 16.4991C9.49965 15.3325 12.3612 13.6991 15.534 16.4991C15.534 16.7901 15.5256 17.0868 15.5172 17.3855C15.4798 18.7062 15.4414 20.0638 16.1232 21.1131C19.5891 19.5425 22 16.0528 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.053 4.41122 19.5429 7.87744 21.1134Z',
  d8: 'M7 19C7.47273 16.7178 9.53167 15 12 15C14.4683 15 16.5273 16.7178 17 19M8.46546 16.5C8.46546 18.4882 8.85751 20.7325 7 22M15.534 16.5C15.534 18.4808 15.1447 20.7344 17 22',
  d9: 'M1.25 12.0002C1.25 6.06312 6.06294 1.25018 12 1.25018C17.9371 1.25018 22.75 6.06312 22.75 12.0002C22.75 14.7549 21.7139 17.2675 20.0101 19.1698C19.7069 19.5083 19.5553 19.6776 19.4138 19.6717C19.3604 19.6695 19.3337 19.6623 19.2864 19.6374C19.1612 19.5714 19.0937 19.2458 18.9588 18.5945C18.292 15.3753 15.4075 13.0002 11.9996 13.0002C8.59169 13.0002 5.70797 15.3754 5.04117 18.5945L5.04117 18.5945C4.90627 19.2458 4.83882 19.5714 4.71357 19.6374C4.66625 19.6623 4.63961 19.6695 4.58617 19.6717C4.44474 19.6776 4.29313 19.5083 3.9899 19.1698C2.28612 17.2675 1.25 14.7549 1.25 12.0002ZM7.91415 7.37604C7.56951 7.14627 7.10385 7.2394 6.87409 7.58405C6.64432 7.9287 6.73745 8.39435 7.0821 8.62411C7.18652 8.69372 7.4078 8.82749 7.51987 8.89514C7.66531 8.9838 7.79644 9.06721 7.91141 9.15329C8.16911 9.34621 8.20671 9.45182 8.20976 9.46941L8.20911 9.47199C8.20362 9.49406 8.18479 9.56965 8.11195 9.672C7.97676 9.86194 7.7571 10.0996 7.39428 10.4883C7.11165 10.7912 7.12802 11.2657 7.43083 11.5484C7.73365 11.831 8.20824 11.8146 8.49086 11.5118L8.52223 11.4782C8.84355 11.134 9.13388 10.823 9.33404 10.5418C9.55104 10.2369 9.73789 9.86564 9.71027 9.40694C9.70636 9.34196 9.69882 9.27724 9.68769 9.21309C9.58124 8.59925 9.13156 8.19296 8.81036 7.9525C8.63588 7.82188 8.45464 7.70823 8.30058 7.61432C8.2546 7.5863 8.21236 7.56079 8.17316 7.53711L8.17313 7.53709C8.07015 7.47489 7.98812 7.42535 7.91415 7.37604ZM16.9142 8.62411C17.2588 8.39435 17.3519 7.9287 17.1222 7.58405C16.8924 7.2394 16.4267 7.14627 16.0821 7.37604C16.0081 7.42534 15.9261 7.47488 15.8232 7.53706L15.8231 7.53709L15.8231 7.5371L15.8229 7.53723C15.7837 7.56088 15.7416 7.58634 15.6957 7.61432C15.5416 7.70823 15.3604 7.82188 15.1859 7.9525C14.8647 8.19296 14.415 8.59925 14.3086 9.21309C14.2974 9.27725 14.2899 9.34196 14.286 9.40694C14.2584 9.86564 14.4452 10.2369 14.6622 10.5418C14.8624 10.823 15.1527 11.134 15.474 11.4782L15.5054 11.5118C15.788 11.8146 16.2626 11.831 16.5654 11.5484C16.8682 11.2657 16.8846 10.7912 16.602 10.4883C16.2391 10.0996 16.0195 9.86194 15.8843 9.672C15.8083 9.5652 15.7865 9.46941 15.7865 9.46941C15.7895 9.45181 15.8271 9.34621 16.0848 9.15329C16.1998 9.06721 16.3309 8.9838 16.4764 8.89514C16.5885 8.82749 16.8097 8.69373 16.9142 8.62411Z',
  d10: 'M9.21559 16.7321C9.21837 16.9134 9.22379 17.1044 9.2294 17.3019C9.25045 18.043 9.27408 18.8751 9.17039 19.6232C9.01741 20.7269 8.57794 21.83 7.42094 22.6195C7.07879 22.853 6.61216 22.7649 6.37869 22.4227C6.14522 22.0806 6.23331 21.614 6.57546 21.3805C7.27596 20.9025 7.56922 20.2497 7.68459 19.4173C7.69229 19.3618 7.69915 19.3062 7.70524 19.2504C7.58234 19.5988 7.21786 19.8114 6.84608 19.7344C6.44047 19.6504 6.17977 19.2535 6.26379 18.8479C6.80928 16.2143 9.17747 14.25 11.9982 14.25C14.8189 14.25 17.1871 16.2143 17.7326 18.8479C17.8166 19.2535 17.5559 19.6504 17.1503 19.7344C16.7796 19.8112 16.4162 19.6 16.2922 19.2535C16.2982 19.3074 16.3049 19.3613 16.3123 19.415C16.4282 20.2496 16.7221 20.9038 17.4208 21.3804C17.763 21.6138 17.8512 22.0805 17.6178 22.4226C17.3844 22.7648 16.9177 22.853 16.5756 22.6196C15.419 21.8307 14.9799 20.7252 14.8266 19.6213C14.7224 18.8709 14.7459 18.037 14.7667 17.296C14.7722 17.1003 14.7776 16.9111 14.7803 16.7317C14.0276 16.1197 13.0589 15.75 11.9982 15.75C10.9373 15.75 9.9684 16.1199 9.21559 16.7321ZM11.9982 18.25C12.4124 18.25 12.7482 18.5858 12.7482 19V21C12.7482 21.4142 12.4124 21.75 11.9982 21.75C11.584 21.75 11.2482 21.4142 11.2482 21V19C11.2482 18.5858 11.584 18.25 11.9982 18.25Z',
  d11: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 14.7547 2.28612 17.2674 3.9899 19.1696C4.29313 19.5081 4.44474 19.6774 4.58617 19.6715C4.63961 19.6693 4.66625 19.6622 4.71357 19.6372C4.83882 19.5713 4.90627 19.2456 5.04117 18.5943C5.70797 15.3752 8.59169 13 11.9996 13C15.4075 13 18.292 15.3752 18.9588 18.5943C19.0937 19.2456 19.1612 19.5713 19.2864 19.6372C19.3337 19.6622 19.3604 19.6693 19.4138 19.6715C19.5553 19.6774 19.7069 19.5081 20.0101 19.1696C21.7139 17.2674 22.75 14.7547 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d12: 'M6.87409 7.58405C7.10385 7.23941 7.56951 7.14628 7.91415 7.37604C7.98812 7.42535 8.07015 7.4749 8.17313 7.5371L8.17316 7.53712C8.21236 7.56079 8.2546 7.5863 8.30058 7.61433C8.45464 7.70823 8.63588 7.82188 8.81036 7.9525C9.13156 8.19296 9.58124 8.59926 9.6877 9.2131C9.69882 9.27725 9.70636 9.34196 9.71027 9.40695C9.73789 9.86565 9.55104 10.2369 9.33404 10.5418C9.13388 10.823 8.84355 11.134 8.52224 11.4782L8.52223 11.4782L8.49086 11.5118C8.20824 11.8146 7.73365 11.831 7.43083 11.5484C7.12802 11.2657 7.11165 10.7912 7.39428 10.4883C7.7571 10.0996 7.97676 9.86195 8.11195 9.67201C8.18796 9.5652 8.20515 9.48754 8.20976 9.46942C8.20671 9.45182 8.16911 9.34621 7.91141 9.15329C7.79644 9.06722 7.66531 8.9838 7.51987 8.89514C7.4078 8.82749 7.18652 8.69373 7.0821 8.62412C6.73745 8.39435 6.64432 7.9287 6.87409 7.58405Z',
  d13: 'M17.1222 7.58405C17.3519 7.9287 17.2588 8.39435 16.9142 8.62412C16.8097 8.69373 16.5885 8.82749 16.4764 8.89514C16.3309 8.9838 16.1998 9.06722 16.0848 9.15329C15.8271 9.34621 15.7895 9.45182 15.7865 9.46942C15.7865 9.46942 15.8083 9.5652 15.8843 9.67201C16.0195 9.86195 16.2391 10.0996 16.602 10.4883C16.8846 10.7912 16.8682 11.2657 16.5654 11.5484C16.2626 11.831 15.788 11.8146 15.5054 11.5118L15.474 11.4782C15.1527 11.134 14.8624 10.823 14.6622 10.5418C14.4452 10.2369 14.2584 9.86565 14.286 9.40695C14.2899 9.34197 14.2974 9.27725 14.3086 9.2131C14.415 8.59926 14.8647 8.19296 15.1859 7.9525C15.3604 7.82188 15.5416 7.70823 15.6957 7.61433C15.7417 7.5863 15.7839 7.56078 15.8231 7.53711L15.8231 7.5371C15.9261 7.4749 16.0081 7.42535 16.0821 7.37604C16.4267 7.14628 16.8924 7.23941 17.1222 7.58405Z',
  d14: 'M8 8L9.5 9.45195L8 11M16 8L14.5 9.45195L16 11',
  d15: 'M14.6019 22.433C13.9907 21.5964 13.7094 20.6615 13.5888 19.7933C13.4743 18.969 13.4945 18.0828 13.5142 17.3812C13.0684 17.1391 12.553 17 11.9991 17C11.445 17 10.9296 17.1392 10.4839 17.3813C10.5037 18.0836 10.5245 18.9706 10.4103 19.7948C10.2898 20.6638 10.0082 21.5972 9.39733 22.4328C10.2307 22.64 11.1025 22.75 12 22.75C12.8972 22.75 13.7687 22.6401 14.6019 22.433ZM5.04064 18.5943C5.70744 15.3752 8.59116 13 11.9991 13C15.407 13 18.2907 15.3752 18.9575 18.5943L19.2519 19.9356C21.4016 17.97 22.75 15.1425 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 15.1372 2.59388 17.9606 4.73737 19.9258L5.04064 18.5943ZM7.47793 8.53872L8.43877 9.46877L7.46094 10.4779L8.53819 11.5217L10.5604 9.43478L8.52119 7.46094L7.47793 8.53872ZM16.5212 8.53872L15.4779 7.46094L13.4388 9.43478L15.4609 11.5217L16.5382 10.4779L15.5604 9.46877L16.5212 8.53872Z',
  d16: 'M11.25 21L11.25 19L12.75 19L12.75 21L11.25 21Z',
  d17: 'M14.7816 16.7322C14.7789 16.9118 14.7735 17.1011 14.768 17.2969C14.7472 18.038 14.7237 18.8718 14.8279 19.6223C14.9812 20.7262 15.4203 21.8316 16.5768 22.6206L17.4221 21.3814C16.7234 20.9047 16.4295 20.2506 16.3136 19.416C16.3013 19.3274 16.2912 19.2386 16.2828 19.1495L17.7344 18.8489C17.189 16.2153 14.8208 14.251 12 14.251C9.17931 14.251 6.81112 16.2153 6.26562 18.8489L7.71819 19.1497C7.70984 19.2395 7.69964 19.329 7.68726 19.4183C7.57188 20.2507 7.27863 20.9035 6.57812 21.3815L7.42361 22.6205C8.58061 21.831 9.02008 20.7279 9.17306 19.6242C9.27675 18.8761 9.25312 18.044 9.23207 17.3029C9.22646 17.1052 9.22102 16.9139 9.21824 16.7324C9.97094 16.1206 10.9395 15.751 12 15.751C13.0605 15.751 14.0289 16.1205 14.7816 16.7322Z',
} as const;

export const IconVomitingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vomiting-stroke-rounded IconVomitingStrokeRounded"
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

export const IconVomitingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vomiting-duotone-rounded IconVomitingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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

export const IconVomitingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vomiting-twotone-rounded IconVomitingTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconVomitingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vomiting-solid-rounded IconVomitingSolidRounded"
    >
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

export const IconVomitingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vomiting-bulk-rounded IconVomitingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
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

export const IconVomitingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vomiting-stroke-sharp IconVomitingStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconVomitingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vomiting-solid-sharp IconVomitingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVomiting: TheIconSelfPack = {
  name: 'Vomiting',
  StrokeRounded: IconVomitingStrokeRounded,
  DuotoneRounded: IconVomitingDuotoneRounded,
  TwotoneRounded: IconVomitingTwotoneRounded,
  SolidRounded: IconVomitingSolidRounded,
  BulkRounded: IconVomitingBulkRounded,
  StrokeSharp: IconVomitingStrokeSharp,
  SolidSharp: IconVomitingSolidSharp,
};