import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.17739 12.9793L3.49456 8.58065C3.81646 7.50568 4.55249 6.61291 5.5315 6.10993L7.12731 5.29006C8.37528 4.6489 9.89325 5.10311 10.6111 6.33247L12.1043 8.88966C12.4728 9.52075 12.6571 9.8363 12.8935 9.99873C13.2261 10.2272 13.6436 10.2803 14.0199 10.142C14.2875 10.0437 14.5404 9.78383 15.0463 9.264C16.2378 8.03972 18.2215 8.24155 19.1562 9.68215L20.3273 11.4872C20.9791 12.4918 21.1687 13.7398 20.8459 14.9007L20.5037 16.1314C20.1952 17.2407 19.4479 18.1659 18.4437 18.6818L12.8309 21.5655C11.504 22.2472 9.91895 22.1195 8.71171 21.2334L3.67752 17.5386C2.27465 16.5089 1.67039 14.6724 2.17739 12.9793Z',
  d2: 'M15.9998 14H16.0088',
  d3: 'M11 15.5L9.5 17',
  d4: 'M9 10.753C8.05719 10.1652 7.58579 9.87123 7.14645 10.0538C6.70711 10.2365 6.4714 10.8243 6 12',
  d5: 'M19.9559 2H18.2338C17.9628 2 17.8273 2 17.7012 2.01974C17.4003 2.06683 17.1242 2.19626 16.9126 2.38941C16.8239 2.47039 16.7487 2.56914 16.5984 2.76663C16.2751 3.19139 16.1134 3.40378 16.0517 3.60076C15.9024 4.07694 16.0828 4.58571 16.5138 4.90401C16.6921 5.03568 16.9627 5.13048 17.5038 5.32008L18.5185 5.67557C19.1652 5.90215 19.4886 6.01543 19.8119 5.99831C19.9487 5.99106 20.0837 5.96679 20.2128 5.92623C20.5177 5.83042 20.7639 5.61473 21.2564 5.18334L21.4013 5.05647C21.5737 4.90543 21.66 4.82991 21.7287 4.74608C21.8585 4.58767 21.9449 4.40513 21.9809 4.21269C22 4.11085 22 4.00405 22 3.79044C22 3.30232 22 3.05826 21.9242 2.86139C21.7799 2.48681 21.4442 2.19275 21.0166 2.06641C20.7918 2 20.5131 2 19.9559 2Z',
  d6: 'M20.054 1.25006C20.5138 1.24959 20.8977 1.2492 21.2296 1.34727C21.8524 1.53126 22.3865 1.97368 22.6247 2.59199C22.7011 2.79041 22.7277 2.98527 22.7395 3.16846C22.7506 3.33958 22.7506 3.60522 22.7506 3.83122C22.7508 4.00387 22.751 4.17831 22.7187 4.35094C22.6583 4.67305 22.5152 4.9705 22.3093 5.2217C22.2001 5.35491 22.0687 5.46982 21.9274 5.59334C21.5185 5.95263 20.8978 6.49743 20.4382 6.64186C20.2483 6.70155 20.0511 6.73685 19.8521 6.74739C19.377 6.77256 18.9178 6.61101 18.3782 6.42113L17.2398 6.02218C16.9834 5.93237 16.7661 5.85623 16.5917 5.78555C16.4125 5.71293 16.2327 5.62847 16.0689 5.50747C15.4059 5.01793 15.0824 4.1871 15.3366 3.37648C15.3997 3.17515 15.5027 3.00208 15.6064 2.84883C15.7068 2.70057 15.8776 2.47615 16.0291 2.27714C16.1525 2.11465 16.2672 1.96367 16.4076 1.83558C16.7349 1.53685 17.1491 1.34724 17.5858 1.27889C17.7711 1.24989 17.9627 1.24999 18.1895 1.25011L20.054 1.25006Z',
  d7: 'M11.2587 5.9547C10.3447 4.38944 8.39536 3.79578 6.78451 4.62337L5.1887 5.44324C4.02421 6.04152 3.15517 7.09976 2.77602 8.36592L1.45884 12.7646C0.86278 14.7551 1.56974 16.9224 3.23369 18.1436L8.26787 21.8384C9.70315 22.8919 11.5926 23.0453 13.1736 22.233L18.7864 19.3494C19.9808 18.7357 20.863 17.639 21.2262 16.3328L21.5684 15.1021C21.9484 13.7356 21.726 12.2656 20.9564 11.0794L19.7853 9.27436C18.5915 7.43439 16.0396 7.16842 14.5088 8.74134C14.2481 9.00924 14.0802 9.18107 13.9452 9.30112C13.5964 9.64427 13.2815 9.37483 13.1676 9.19722C13.0645 9.0463 12.9417 8.83692 12.7519 8.51189L11.2587 5.9547ZM16 13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15H16.009C16.5613 15 17.009 14.5523 17.009 14C17.009 13.4477 16.5613 13 16.009 13H16ZM11.5303 14.9697C11.8232 15.2626 11.8232 15.7374 11.5303 16.0303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L10.4697 14.9697C10.7626 14.6768 11.2374 14.6768 11.5303 14.9697ZM9.39701 10.1168L9.35162 10.0885L9.35161 10.0885C8.91946 9.81893 8.52383 9.57218 8.17922 9.42498C7.79782 9.26207 7.34273 9.16033 6.85877 9.3615C6.40138 9.55162 6.12751 9.92803 5.92702 10.2956C5.73281 10.6517 5.54217 11.1272 5.32085 11.6792L5.30407 11.7211C5.14992 12.1055 5.33662 12.5422 5.72108 12.6963C6.10554 12.8505 6.54217 12.6638 6.69633 12.2793C6.93923 11.6735 7.09744 11.2823 7.24387 11.0139C7.31383 10.8856 7.3655 10.8156 7.40036 10.7777C7.41338 10.7635 7.42259 10.7555 7.42787 10.7513C7.4495 10.7545 7.49933 10.7657 7.59002 10.8044C7.81462 10.9004 8.11044 11.0823 8.60339 11.3896C8.95487 11.6088 9.41747 11.5015 9.63663 11.15C9.85578 10.7985 9.7485 10.3359 9.39701 10.1168Z',
  d8: 'M6.78451 4.62337C8.39536 3.79578 10.3447 4.38944 11.2587 5.9547L12.7519 8.51189C12.9417 8.83692 13.0645 9.0463 13.1676 9.19722C13.2815 9.37483 13.5964 9.64427 13.9452 9.30112C14.0802 9.18107 14.2481 9.00924 14.5088 8.74134C16.0396 7.16842 18.5915 7.43439 19.7853 9.27436L20.9564 11.0794C21.726 12.2656 21.9484 13.7356 21.5684 15.1021L21.2262 16.3328C20.863 17.639 19.9808 18.7357 18.7864 19.3494L13.1736 22.233C11.5926 23.0453 9.70315 22.8919 8.26787 21.8384L3.23369 18.1436C1.56974 16.9224 0.86278 14.7551 1.45884 12.7646L2.77602 8.36592C3.15517 7.09976 4.02421 6.04152 5.1887 5.44324L6.78451 4.62337Z',
  d9: 'M15 14C15 13.4477 15.4477 13 16 13H16.009C16.5613 13 17.009 13.4477 17.009 14C17.009 14.5523 16.5613 15 16.009 15H16C15.4477 15 15 14.5523 15 14Z',
  d10: 'M11.5303 14.9697C11.8232 15.2626 11.8232 15.7374 11.5303 16.0303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L10.4697 14.9697C10.7626 14.6768 11.2374 14.6768 11.5303 14.9697Z',
  d11: 'M9.35162 10.0885C9.36671 10.0979 9.38184 10.1073 9.39701 10.1168C9.7485 10.3359 9.85578 10.7985 9.63663 11.15C9.41747 11.5015 8.95487 11.6088 8.60339 11.3896C8.11044 11.0823 7.81462 10.9004 7.59002 10.8044C7.49933 10.7657 7.4495 10.7545 7.42787 10.7513C7.42259 10.7555 7.41338 10.7635 7.40036 10.7777C7.3655 10.8156 7.31383 10.8856 7.24387 11.0139C7.09744 11.2823 6.93923 11.6735 6.69633 12.2793C6.54217 12.6638 6.10554 12.8505 5.72108 12.6963C5.33662 12.5422 5.14992 12.1055 5.30407 11.7211C5.30969 11.7071 5.31528 11.6931 5.32085 11.6792C5.54217 11.1272 5.73281 10.6517 5.92702 10.2956C6.12751 9.92803 6.40138 9.55162 6.85877 9.3615C7.34273 9.16033 7.79782 9.26207 8.17922 9.42498C8.52383 9.57218 8.91947 9.81893 9.35162 10.0885Z',
  d12: 'M2 15L4.00035 7L9.50035 4.5L13.5003 10.5002C13.7679 10.4019 16.9944 8.52001 17.5003 8.00018L21.0003 14.0002L18.4441 18.682L11 22L2 15Z',
  d13: 'M15.75 14.0689L15.7578 14.0645',
  d14: 'M11.5 14L10 17',
  d15: 'M9 10.7529L7 10L6 11.9999',
  d16: 'M22.0011 2H18L16 3.5L16 5L20.0011 6L22.0011 4.5V2Z',
  d17: 'M10.1244 4.08406C9.92046 3.77811 9.52477 3.66515 9.19003 3.81731L3.69003 6.31731C3.48187 6.41192 3.32825 6.59633 3.27278 6.81815L1.27243 14.8182C1.20039 15.1063 1.30515 15.4098 1.53958 15.5921L10.5396 22.5921C10.7581 22.7621 11.0525 22.7978 11.3054 22.6851L18.7494 19.3671C18.8996 19.3002 19.0236 19.1858 19.1024 19.0415L21.6587 14.3597C21.7846 14.129 21.7806 13.8493 21.6482 13.6224L18.1482 7.62236C18.0301 7.41992 17.8242 7.28432 17.5916 7.25582C17.3589 7.22733 17.1264 7.30922 16.9629 7.47718L13.7467 9.51759L10.1244 4.08406ZM15.3848 15.4358L17.1246 14.4313L16.1246 12.6992L14.3848 13.7037L15.3848 15.4358ZM9.33008 16.6641L10.8301 13.6641L12.1717 14.3349L10.6717 17.3349L9.33008 16.6641ZM9.26513 10.0517L6.63243 9.06055L5.33008 11.6652L6.67171 12.336L7.36936 10.9407L8.73665 11.4555L9.26513 10.0517Z',
  d18: 'M17.55 1.4C17.6798 1.30263 17.8377 1.25 18 1.25H22.0011C22.4153 1.25 22.7511 1.58579 22.7511 2V4.5C22.7511 4.73607 22.64 4.95836 22.4511 5.1L20.4511 6.6C20.2704 6.7355 20.0383 6.78238 19.8193 6.72762L15.8182 5.72762C15.4843 5.64417 15.2501 5.34418 15.25 5.00002L15.25 3.50002C15.25 3.26395 15.3611 3.04165 15.55 2.9L17.55 1.4Z',
} as const;

export const IconAsteroid01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="asteroid-01-stroke-rounded IconAsteroid01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAsteroid01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="asteroid-01-duotone-rounded IconAsteroid01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconAsteroid01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="asteroid-01-twotone-rounded IconAsteroid01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconAsteroid01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="asteroid-01-solid-rounded IconAsteroid01SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAsteroid01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="asteroid-01-bulk-rounded IconAsteroid01BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAsteroid01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="asteroid-01-stroke-sharp IconAsteroid01StrokeSharp"
    >
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAsteroid01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="asteroid-01-solid-sharp IconAsteroid01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfAsteroid01: TheIconSelfPack = {
  name: 'Asteroid01',
  StrokeRounded: IconAsteroid01StrokeRounded,
  DuotoneRounded: IconAsteroid01DuotoneRounded,
  TwotoneRounded: IconAsteroid01TwotoneRounded,
  SolidRounded: IconAsteroid01SolidRounded,
  BulkRounded: IconAsteroid01BulkRounded,
  StrokeSharp: IconAsteroid01StrokeSharp,
  SolidSharp: IconAsteroid01SolidSharp,
};