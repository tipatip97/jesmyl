import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.0923 16C8.78292 16.6819 8.0701 16.986 7.43887 17.3162L3.79262 19.2233C2.32845 19.9891 3.05949 22 4.62985 22C8.12204 22 10.8836 20.3064 14.0404 19C14.835 18.6711 15.2201 18.7415 16 19.0912',
  d2: 'M9 19.0912C9.77995 18.7415 10.165 18.6711 10.9596 19C14.1164 20.3064 16.878 22 20.3702 22C21.9405 22 22.6715 19.9891 21.2074 19.2233L17.5611 17.3162C16.9299 16.986 16.2171 16.6819 15.9077 16',
  d3: 'M10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4Z',
  d4: 'M12 8C8.68629 8 6 10.6863 6 14C9.31371 14 12 11.3137 12 8Z',
  d5: 'M12 8C15.3137 8 18 10.6863 18 14C14.6863 14 12 11.3137 12 8Z',
  d6: 'M3.79262 19.2245L7.43887 17.3174C8.0701 16.9872 8.78292 16.6831 9.0923 16.0012C10.2231 15.5625 13.1693 14.9482 15.9077 16.0012C16.2171 16.6831 16.9299 16.9872 17.5611 17.3174L21.2074 19.2245C22.6716 19.9903 21.9405 22.0012 20.3702 22.0012C17.4561 22.0012 15.0507 20.8219 12.5 19.6724C9.94926 20.8219 7.54393 22.0012 4.62985 22.0012C3.05949 22.0012 2.32845 19.9903 3.79262 19.2245Z',
  d7: 'M9.0923 16C8.78292 16.6819 8.0701 16.986 7.43887 17.3162L3.79262 19.2233C2.32845 19.9891 3.05949 22 4.62985 22C8.12204 22 10.8836 20.3064 14.0404 19C14.835 18.6711 15.2201 18.7415 16 19.0912M15.9077 16C16.2171 16.6819 16.9299 16.986 17.5611 17.3162L21.2074 19.2233C22.6716 19.9891 21.9405 22 20.3702 22C16.878 22 14.1164 20.3064 10.9596 19C10.165 18.6711 9.77995 18.7415 9 19.0912',
  d8: 'M12 8C8.68629 8 6 10.6863 6 14C9.31371 14 12 11.3137 12 8ZM12 8C15.3137 8 18 10.6863 18 14C14.6863 14 12 11.3137 12 8Z',
  d9: 'M14.75 4C14.75 2.48122 13.5188 1.25 12 1.25C10.4812 1.25 9.25 2.48122 9.25 4C9.25 5.51878 10.4812 6.75 12 6.75C13.5188 6.75 14.75 5.51878 14.75 4Z',
  d10: 'M12 7.25C15.7279 7.25 18.75 10.2721 18.75 14C18.75 14.4142 18.4142 14.75 18 14.75C15.3878 14.75 13.1222 13.2662 12 11.0954C10.8778 13.2662 8.6122 14.75 6 14.75C5.58579 14.75 5.25 14.4142 5.25 14C5.25 10.2721 8.27208 7.25 12 7.25Z',
  d11: 'M3.44436 18.5591L7.09061 16.652C7.51434 16.4304 7.84418 16.1512 8.05613 15.9339C8.20257 15.7837 8.27579 15.7086 8.32511 15.6774C8.37442 15.6461 8.4541 15.6185 8.61346 15.5634C9.78682 15.1578 10.8361 14.4869 11.6897 13.623C11.8402 13.4707 11.9155 13.3945 11.999 13.3945C12.0826 13.3945 12.1578 13.4707 12.3083 13.623C13.162 14.4869 14.2112 15.1578 15.3846 15.5634C15.5439 15.6185 15.6236 15.6461 15.6729 15.6774C15.7223 15.7086 15.7955 15.7837 15.9419 15.9339C16.1539 16.1512 16.4837 16.4304 16.9074 16.652L20.5537 18.5591C21.6361 19.1253 21.9391 20.214 21.6382 21.1327C21.3481 22.0181 20.5001 22.7504 19.3689 22.7504C17.497 22.7504 15.8375 22.2953 14.268 21.6901C13.6871 21.4661 12.8602 21.1047 12.1626 20.7932C12.082 20.7572 12.0417 20.7391 11.999 20.7391C11.9564 20.7391 11.9161 20.7572 11.8354 20.7932C11.1379 21.1047 10.3109 21.4661 9.73007 21.6901C8.16052 22.2953 6.50105 22.7504 4.62919 22.7504C3.49796 22.7504 2.64991 22.0181 2.3599 21.1327C2.05894 20.214 2.36197 19.1253 3.44436 18.5591Z',
  d12: 'M8.5923 16C8.28292 16.6819 7.5701 16.986 6.93887 17.3162L3.29262 19.2233C1.82845 19.9891 2.55949 22 4.12985 22C7.62204 22 11.3432 19.3064 14.5 18L16 19',
  d13: 'M8 19L10 18C13.1568 19.3064 16.378 22 19.8702 22C21.4405 22 22.1715 19.9891 20.7074 19.2233L17.0611 17.3162C16.4299 16.986 15.7171 16.6819 15.4077 16',
  d14: 'M14.7494 4C14.7494 2.48122 13.5182 1.25 11.9994 1.25C10.4806 1.25 9.24939 2.48122 9.24939 4C9.24939 5.51878 10.4806 6.75 11.9994 6.75C13.5182 6.75 14.7494 5.51878 14.7494 4Z',
  d15: 'M5.24939 14C5.24939 10.2721 8.27147 7.25 11.9994 7.25C15.7273 7.25 18.7494 10.2721 18.7494 14V14.75H17.9994C15.3872 14.75 13.1216 13.2662 11.9994 11.0954C10.8772 13.2662 8.61159 14.75 5.99939 14.75H5.24939V14Z',
  d16: 'M7.32015 15.8917C7.13316 16.224 6.8931 16.494 6.59128 16.6518L2.94503 18.5589C1.86264 19.1251 1.55961 20.2138 1.86057 21.1325C2.15059 22.0179 2.99863 22.7502 4.12986 22.7502C6.05203 22.7502 7.9828 22.013 9.76253 21.1676C10.4854 20.8242 11.2029 20.4529 11.8938 20.0955L12.2055 19.9343C12.3558 20.0169 12.507 20.1004 12.6594 20.1847C13.2395 20.5052 13.8371 20.8354 14.4679 21.1579C16.1283 22.0068 17.9389 22.7502 19.8702 22.7502C21.0014 22.7502 21.8494 22.0179 22.1395 21.1325C22.4404 20.2138 22.1374 19.1251 21.055 18.5589L17.4086 16.6518C17.1068 16.4939 16.8667 16.2238 16.6797 15.8915C14.8268 15.5835 13.1899 14.6388 12.0007 13.2914C10.8111 14.6392 9.17366 15.584 7.32015 15.8917Z',
} as const;

export const IconYoga01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-01-stroke-rounded IconYoga01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconYoga01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-01-duotone-rounded IconYoga01DuotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconYoga01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-01-twotone-rounded IconYoga01TwotoneRounded"
    >
      <path 
        d={d.d7} 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYoga01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-01-solid-rounded IconYoga01SolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconYoga01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-01-bulk-rounded IconYoga01BulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconYoga01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-01-stroke-sharp IconYoga01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
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

export const IconYoga01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-01-solid-sharp IconYoga01SolidSharp"
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
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfYoga01: TheIconSelfPack = {
  name: 'Yoga01',
  StrokeRounded: IconYoga01StrokeRounded,
  DuotoneRounded: IconYoga01DuotoneRounded,
  TwotoneRounded: IconYoga01TwotoneRounded,
  SolidRounded: IconYoga01SolidRounded,
  BulkRounded: IconYoga01BulkRounded,
  StrokeSharp: IconYoga01StrokeSharp,
  SolidSharp: IconYoga01SolidSharp,
};