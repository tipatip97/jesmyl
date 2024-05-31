import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 19L4 21M18 19L20 21',
  d2: 'M9 15H9.00896M14.991 15H15',
  d3: 'M5 9C9 13 15.5 13 19 9',
  d4: 'M5.27322 7.89427C6.09442 3.71577 7.23046 3 11.4545 3H12.5455C16.7695 3 17.9056 3.71577 18.7268 7.89427L19.2802 10.71C20.0349 14.5503 20.4123 16.4705 19.312 17.7352C18.2118 19 16.1412 19 12 19C7.85879 19 5.78819 19 4.68796 17.7352C3.58773 16.4705 3.9651 14.5503 4.71984 10.71L5.27322 7.89427Z',
  d5: 'M11.4548 3C7.23072 3 6.09469 3.71577 5.27348 7.89427L5.05469 9.00755C9.0387 12.9334 15.4507 12.9355 18.9471 9.01376L18.727 7.89427C17.9058 3.71577 16.7698 3 12.5458 3H11.4548Z',
  d6: 'M6.70711 18.1679C7.09763 18.5584 7.09763 19.1916 6.70711 19.5821L4.70711 21.5821C4.31658 21.9726 3.68342 21.9726 3.29289 21.5821C2.90237 21.1916 2.90237 20.5584 3.29289 20.1679L5.29289 18.1679C5.68342 17.7774 6.31658 17.7774 6.70711 18.1679ZM17.2929 18.1679C17.6834 17.7774 18.3166 17.7774 18.7071 18.1679L20.7071 20.1679C21.0976 20.5584 21.0976 21.1916 20.7071 21.5821C20.3166 21.9726 19.6834 21.9726 19.2929 21.5821L17.2929 19.5821C16.9024 19.1916 16.9024 18.5584 17.2929 18.1679Z',
  d7: 'M11.4696 2.125C9.4397 2.125 7.81414 2.27561 6.63268 3.18141C5.42985 4.10359 4.90635 5.63128 4.50606 7.66806L3.95251 10.4846C3.5988 12.2842 3.31208 13.7429 3.25902 14.9027C3.20373 16.1114 3.39043 17.1794 4.1575 18.0612C4.9181 18.9356 5.96781 19.2955 7.20694 19.4626C8.41219 19.625 9.9757 19.625 11.9258 19.625H12.0741C14.0243 19.625 15.5878 19.625 16.7931 19.4626C18.0322 19.2955 19.0819 18.9356 19.8425 18.0612C20.6096 17.1794 20.7963 16.1114 20.741 14.9027C20.6879 13.7429 20.4012 12.2842 20.0475 10.4846L19.4939 7.66805C19.0937 5.63128 18.5702 4.10359 17.3673 3.18141C16.1859 2.27561 14.5603 2.125 12.5304 2.125H11.4696ZM6.41447 8.04292C6.81257 6.01726 7.24051 5.16579 7.81621 4.72442C8.41327 4.26667 9.39331 4.06934 11.4701 4.06934H12.5308C14.6076 4.06934 15.5876 4.26667 16.1847 4.72442C16.7604 5.16579 17.1883 6.01726 17.5864 8.04292L17.7283 8.76486C17.7623 8.93752 17.7035 9.11643 17.5685 9.22927C14.542 11.7587 9.85411 11.7762 6.4646 9.16539C6.31882 9.0531 6.2526 8.86653 6.28809 8.68597L6.41447 8.04292ZM9 13.875C8.44772 13.875 8 14.3227 8 14.875C8 15.4273 8.44772 15.875 9 15.875H9.00896C9.56124 15.875 10.009 15.4273 10.009 14.875C10.009 14.3227 9.56124 13.875 9.00896 13.875H9ZM14.991 13.875C14.4388 13.875 13.991 14.3227 13.991 14.875C13.991 15.4273 14.4388 15.875 14.991 15.875H15C15.5523 15.875 16 15.4273 16 14.875C16 14.3227 15.5523 13.875 15 13.875H14.991Z',
  d8: 'M4.81272 18.6484L3.29289 20.1683C2.90237 20.5588 2.90237 21.192 3.29289 21.5825C3.68342 21.973 4.31658 21.973 4.70711 21.5825L6.70711 19.5825C6.76114 19.5284 6.80769 19.4698 6.84677 19.4077C6.07851 19.2746 5.3918 19.0496 4.81272 18.6484ZM17.1532 19.4077C17.1923 19.4698 17.2389 19.5284 17.2929 19.5825L19.2929 21.5825C19.6834 21.973 20.3166 21.973 20.7071 21.5825C21.0976 21.192 21.0976 20.5588 20.7071 20.1683L19.1873 18.6484C18.6082 19.0496 17.9215 19.2746 17.1532 19.4077Z',
  d9: 'M6.63268 3.18141C7.81414 2.27561 9.4397 2.125 11.4696 2.125H12.5304C14.5603 2.125 16.1859 2.27561 17.3673 3.18141C18.5702 4.10359 19.0937 5.63128 19.4939 7.66805L20.0475 10.4846C20.4012 12.2842 20.6879 13.7429 20.741 14.9027C20.7963 16.1114 20.6096 17.1794 19.8425 18.0612C19.0819 18.9356 18.0322 19.2955 16.7931 19.4626C15.5878 19.625 14.0243 19.625 12.0741 19.625H11.9258C9.9757 19.625 8.41219 19.625 7.20694 19.4626C5.96781 19.2955 4.9181 18.9356 4.1575 18.0612C3.39043 17.1794 3.20373 16.1114 3.25902 14.9027C3.31208 13.7429 3.5988 12.2842 3.95251 10.4846L4.50606 7.66806C4.90635 5.63128 5.42985 4.10359 6.63268 3.18141Z',
  d10: 'M7.81683 4.72539C7.24113 5.16677 6.81319 6.01824 6.41508 8.0439L6.2887 8.68694C6.25322 8.8675 6.31944 9.05408 6.46522 9.16637C9.85473 11.7771 14.5426 11.7597 17.5691 9.23025C17.7042 9.1174 17.7629 8.93849 17.7289 8.76583L17.5871 8.04389C17.189 6.01824 16.761 5.16677 16.1853 4.72539C15.5883 4.26764 14.6082 4.07031 12.5314 4.07031H11.4707C9.39393 4.07031 8.41389 4.26764 7.81683 4.72539Z',
  d11: 'M8 14.875C8 14.3227 8.44772 13.875 9 13.875H9.00896C9.56125 13.875 10.009 14.3227 10.009 14.875C10.009 15.4273 9.56125 15.875 9.00896 15.875H9C8.44772 15.875 8 15.4273 8 14.875ZM13.991 14.875C13.991 14.3227 14.4388 13.875 14.991 13.875H15C15.5523 13.875 16 14.3227 16 14.875C16 15.4273 15.5523 15.875 15 15.875H14.991C14.4388 15.875 13.991 15.4273 13.991 14.875Z',
  d12: 'M6.5 17L4.5 21M17.5 17L19.5 21',
  d13: 'M9 14H9.00896M14.991 14H15',
  d14: 'M18 3H6L4 17H20.0009L18 3Z',
  d15: 'M19.0009 11H5',
  d16: 'M5.25852 3.14393C5.3113 2.77445 5.62774 2.5 6.00098 2.5H18.001C18.3742 2.5 18.6906 2.77442 18.7434 3.14389L20.7443 17.1439C20.7751 17.3591 20.7109 17.5771 20.5685 17.7414C20.426 17.9056 20.2193 18 20.0019 18H4.00098C3.78356 18 3.57684 17.9057 3.43439 17.7414C3.29194 17.5772 3.22777 17.3592 3.25852 17.1439L5.25852 3.14393ZM6.65145 4L4.86574 16.5H19.1371L17.3506 4H6.65145Z',
  d17: 'M3.60449 20.8556L5.60634 16.8027L7.3952 17.6972L5.39335 21.75L3.60449 20.8556ZM18.6045 21.75L16.6063 17.6972L18.3952 16.8027L20.3933 20.8556L18.6045 21.75Z',
  d18: 'M5.99903 2.25C5.50138 2.25 5.07946 2.61593 5.00908 3.10858L3.00908 17.1086C2.96808 17.3956 3.05364 17.6862 3.24358 17.9052C3.43351 18.1242 3.70914 18.25 3.99903 18.25H19.9999C20.2898 18.25 20.5655 18.1242 20.7554 17.9052C20.9453 17.6862 21.0309 17.3955 20.9899 17.1085L18.989 3.10852C18.9186 2.6159 18.4967 2.25 17.999 2.25H5.99903ZM5.97168 10.5L6.86454 4.25H17.13L18.0233 10.5H5.97168ZM10.008 13.375H7.99902V15.375H10.008V13.375ZM15.999 13.375H13.9901V15.375H15.999V13.375Z',
} as const;

export const IconMetroStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="metro-stroke-rounded IconMetroStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMetroDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="metro-duotone-rounded IconMetroDuotoneRounded"
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
        d={d.d4} 
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
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconMetroTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="metro-twotone-rounded IconMetroTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconMetroSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="metro-solid-rounded IconMetroSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMetroBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="metro-bulk-rounded IconMetroBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMetroStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="metro-stroke-sharp IconMetroStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMetroSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="metro-solid-sharp IconMetroSolidSharp"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMetro: TheIconSelfPack = {
  name: 'Metro',
  StrokeRounded: IconMetroStrokeRounded,
  DuotoneRounded: IconMetroDuotoneRounded,
  TwotoneRounded: IconMetroTwotoneRounded,
  SolidRounded: IconMetroSolidRounded,
  BulkRounded: IconMetroBulkRounded,
  StrokeSharp: IconMetroStrokeSharp,
  SolidSharp: IconMetroSolidSharp,
};