import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 9.43911C19.6952 5.66379 16.0498 3 11.7568 3C6.36825 3 2 7.281 2 12.5619C2 15.503 3.35496 18.134 5.4865 19.888C6.83589 20.9984 8.24101 20.9851 9.93379 20.9851C11.1114 20.9851 12.7258 21.1962 13.4402 20.03C14.695 17.9818 12.2704 15.1302 13.8559 13.025C14.3237 12.4039 15.0997 12.0593 16.6516 11.3701L21 9.43911ZM21 9.43911L22 8.99503',
  d2: 'M10.0078 17L9.99883 17',
  d3: 'M22 15.9114L17.6345 16.4677C15.8154 16.6995 14.0804 15.6639 13.5 14',
  d4: 'M16 12L16.6046 17.4417C16.7927 19.1343 16.8867 19.9805 17.4562 20.4903C18.0258 21 18.8772 21 20.5802 21H22',
  d5: 'M20.5 16L20.5 21',
  d6: 'M11.7568 3C6.36825 3 2 7.281 2 12.5619C2 15.503 3.35496 18.134 5.4865 19.888C6.83589 20.9984 8.24101 20.9851 9.93379 20.9851C11.1114 20.9851 12.7258 21.1962 13.4402 20.03C14.695 17.9818 12.2704 15.1302 13.8559 13.025C14.3237 12.4039 15.0997 12.0593 16.6516 11.3701L21 9.43911C19.6952 5.66379 16.0498 3 11.7568 3Z',
  d7: 'M9.67577 21.7499C8.06123 21.7509 6.42817 21.7519 4.88494 20.481C2.59016 18.5912 1.125 15.75 1.125 12.5697C1.125 6.85609 5.84337 2.25 11.6318 2.25C15.7765 2.25 19.3756 4.56734 21.084 8.0065L21.4689 7.83543C21.9737 7.61111 22.5646 7.83875 22.7887 8.34389C23.0129 8.84903 22.7854 9.44037 22.2807 9.66469L16.9323 12.0416C16.1394 12.3939 15.6072 12.6316 15.2105 12.8538C14.8297 13.0671 14.6487 13.2268 14.5295 13.3851C14.0433 14.0311 14.1513 14.9919 14.4147 16.2855C14.5271 16.8311 14.658 17.4666 14.6854 18.0853C14.7169 18.7966 14.6196 19.5781 14.1677 20.3162C13.5913 21.2579 12.6654 21.585 11.8793 21.6993C11.6373 21.7345 9.67577 21.7499 9.67577 21.7499ZM9.88729 18.2617C10.5752 18.2617 11.1328 17.7016 11.1328 17.0108C11.1328 16.3199 10.5752 15.7598 9.88729 15.7598H9.87834C9.19045 15.7598 8.63281 16.3199 8.63281 17.0108C8.63281 17.7016 9.19045 18.2617 9.87834 18.2617H9.88729Z',
  d8: 'M15.8533 11.2559C16.3761 11.1977 16.8469 11.5753 16.905 12.0992L17.2858 15.5342C17.322 15.5309 17.3583 15.527 17.3947 15.5223L21.5522 14.9913C22.0739 14.9247 22.5508 15.2946 22.6173 15.8176C22.6837 16.3405 22.3147 16.8185 21.7929 16.8851L21.1964 16.9613V19.8409H21.6726C22.1985 19.8409 22.6249 20.2683 22.6249 20.7955C22.6249 21.3226 22.1985 21.75 21.6726 21.75L20.262 21.75C19.5011 21.75 18.8412 21.7501 18.3069 21.6814C17.7322 21.6076 17.1802 21.4418 16.7102 21.0201C16.2402 20.5985 16.0148 20.0669 15.8781 19.5025C15.751 18.9779 15.6782 18.3206 15.5942 17.5625C15.5921 17.5432 15.5899 17.5238 15.5878 17.5044L15.556 17.2182C14.2429 16.7867 13.1519 15.7888 12.6784 14.4281C12.5052 13.9303 12.7673 13.386 13.264 13.2124C13.7606 13.0388 14.3036 13.3016 14.4768 13.7993C14.6363 14.2577 14.9278 14.6535 15.3048 14.9519L15.012 12.31C14.9539 11.7861 15.3306 11.3141 15.8533 11.2559ZM17.4962 17.4318C17.5802 18.1864 17.6396 18.6827 17.729 19.0521C17.8175 19.4172 17.9081 19.5327 17.9805 19.5976C18.0529 19.6626 18.1774 19.7401 18.5492 19.7879C18.7533 19.8141 18.9936 19.8274 19.2917 19.8341V17.2046L17.6355 17.4161C17.589 17.422 17.5426 17.4273 17.4962 17.4318Z',
  d9: 'M4.88494 20.481C6.42817 21.7519 8.06123 21.7509 9.67577 21.7499C9.67577 21.7499 11.6373 21.7345 11.8793 21.6993C12.6654 21.585 13.5913 21.2579 14.1677 20.3162C14.6196 19.5781 14.7169 18.7966 14.6854 18.0853C14.658 17.4666 14.5271 16.8311 14.4147 16.2855C14.1513 14.9919 14.0433 14.0311 14.5295 13.3851C14.6487 13.2268 14.8297 13.0671 15.2105 12.8538C15.6072 12.6316 16.1394 12.3939 16.9323 12.0416L22.2807 9.66469C22.7854 9.44037 23.0129 8.84903 22.7887 8.34389C22.5646 7.83875 21.9737 7.61111 21.4689 7.83543L21.084 8.0065C19.3756 4.56734 15.7765 2.25 11.6318 2.25C5.84337 2.25 1.125 6.85609 1.125 12.5697C1.125 15.75 2.59016 18.5912 4.88494 20.481Z',
  d10: 'M15.0806 12.9291C15.1211 12.9047 15.1644 12.8797 15.2105 12.8538C15.6017 12.6347 16.1247 12.4006 16.8993 12.0563C16.9015 12.0705 16.9034 12.0848 16.905 12.0992L17.2858 15.5342C17.322 15.5309 17.3584 15.527 17.3948 15.5223L21.5522 14.9914C22.0739 14.9247 22.5508 15.2946 22.6173 15.8176C22.6838 16.3405 22.3147 16.8185 21.793 16.8851L21.1964 16.9613V19.8409H21.6726C22.1985 19.8409 22.6249 20.2683 22.6249 20.7955C22.6249 21.3227 22.1985 21.75 21.6726 21.75L20.2621 21.75C19.5011 21.7501 18.8412 21.7501 18.307 21.6814C17.7323 21.6076 17.1802 21.4418 16.7102 21.0202C16.2402 20.5985 16.0149 20.0669 15.8781 19.5025C15.7511 18.9779 15.6782 18.3206 15.5942 17.5625L15.5878 17.5044L15.5561 17.2182C15.1841 17.096 14.8299 16.9283 14.5025 16.7198C14.4734 16.5703 14.4435 16.425 14.4148 16.2855C14.1807 15.1361 14.0693 14.2494 14.3886 13.6128C14.4239 13.6705 14.4537 13.7328 14.4769 13.7994C14.6363 14.2577 14.9278 14.6535 15.3048 14.9519L15.0806 12.9291ZM17.7291 19.0521C17.6396 18.6827 17.5802 18.1864 17.4962 17.4318C17.5426 17.4273 17.5891 17.422 17.6355 17.4161L19.2917 17.2046V19.8341C18.9936 19.8274 18.7534 19.8141 18.5492 19.7879C18.1775 19.7401 18.0529 19.6626 17.9805 19.5977C17.9081 19.5327 17.8175 19.4172 17.7291 19.0521Z',
  d11: 'M11.1328 17.0108C11.1328 17.7016 10.5752 18.2617 9.88729 18.2617L9.87834 18.2617C9.19045 18.2617 8.63281 17.7016 8.63281 17.0108C8.63281 16.3199 9.19045 15.7598 9.87834 15.7598L9.88729 15.7598C10.5752 15.7598 11.1328 16.3199 11.1328 17.0108Z',
  d12: 'M21 9.43911C19.6952 5.66379 16.0498 3 11.7568 3C6.36825 3 2 7.281 2 12.5619C2 15.503 3.35496 18.134 5.4865 19.888C6.83589 20.9984 7 21 7 21H14L13 13L21 9.43911ZM21 9.43911L22 8.99503',
  d13: 'M22 15.9114L16.5 16.5L13 13',
  d14: 'M16 12L17.5 21H22',
  d15: 'M6.86496 21.6586C6.90532 21.678 7.04562 21.75 7.04562 21.75H15.0645L14.0308 13.459L22.5 9.68048L21.8928 8.30958L21.6097 8.43561C20.0005 4.76173 16.2852 2.25 11.9796 2.25C6.20618 2.25 1.5 6.85259 1.5 12.5619C1.5 15.7397 2.96138 18.5788 5.25023 20.4672C5.93086 21.0287 6.33096 21.3253 6.57137 21.4853C6.69083 21.5648 6.78527 21.6203 6.86496 21.6586ZM10.2419 18.5C11.0645 18.5 11.7313 17.8284 11.7313 17C11.7313 16.1716 11.0645 15.5 10.2419 15.5H10.2285C9.40591 15.5 8.73906 16.1716 8.73906 17C8.73906 17.8284 9.4059 18.5 10.2285 18.5H10.2419Z',
  d16: 'M15.4736 12.1231L16.9494 11.8765L17.5771 15.6527L22.1159 15.1657L22.2751 16.6572L21.4484 16.7459V20.2498H22.196V21.7498H17.0739L16.3111 17.1611L12.6898 13.5304L13.7477 12.4697L15.888 14.6155L15.4736 12.1231ZM19.9523 20.2498L19.9523 16.9064L17.8235 17.1348L18.3413 20.2498H19.9523Z',
} as const;

export const IconCricketHelmetStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-helmet-stroke-rounded IconCricketHelmetStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCricketHelmetDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-helmet-duotone-rounded IconCricketHelmetDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCricketHelmetTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-helmet-twotone-rounded IconCricketHelmetTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCricketHelmetSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-helmet-solid-rounded IconCricketHelmetSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCricketHelmetBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-helmet-bulk-rounded IconCricketHelmetBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCricketHelmetStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-helmet-stroke-sharp IconCricketHelmetStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCricketHelmetSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cricket-helmet-solid-sharp IconCricketHelmetSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfCricketHelmet: TheIconSelfPack = {
  name: 'CricketHelmet',
  StrokeRounded: IconCricketHelmetStrokeRounded,
  DuotoneRounded: IconCricketHelmetDuotoneRounded,
  TwotoneRounded: IconCricketHelmetTwotoneRounded,
  SolidRounded: IconCricketHelmetSolidRounded,
  BulkRounded: IconCricketHelmetBulkRounded,
  StrokeSharp: IconCricketHelmetStrokeSharp,
  SolidSharp: IconCricketHelmetSolidSharp,
};