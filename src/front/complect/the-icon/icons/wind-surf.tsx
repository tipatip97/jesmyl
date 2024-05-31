import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 21L7 22',
  d2: 'M22 19H2C7 20.7143 12.9751 22 17 22C20 22 22 19.7347 22 19Z',
  d3: 'M16.0103 2C18.1781 7 16.2964 16.3438 15 19',
  d4: 'M16.2024 3.91879C15.8029 3.54155 15.0108 3.01128 14.9346 3.00177C14.0744 2.89451 13.9624 3.41804 12.9636 4.88797C11.6984 6.5487 8.80852 10.0524 7.79639 10.911M7.79639 10.911C8.36954 12.6904 9.30761 15.5156 15.0924 16.9358M7.79639 10.911C9.07642 12.6395 13.9337 13.0313 16.2024 13.0111',
  d5: 'M8.00098 21L7.00098 22',
  d6: 'M22.001 19H2.00098C7.00098 20.7143 12.9761 22 17.001 22C20.001 22 22.001 19.7347 22.001 19Z',
  d7: 'M8.05286 11.0508C9.05998 14.2342 10.783 15.8776 15.5009 16.9999L15.7025 17.0773C16.0366 15.9377 16.3575 14.5098 16.5968 12.9571L16.0009 12.9999C15.0095 12.9999 10.0861 12.9999 8.05286 11.0508Z',
  d8: 'M16.0113 2C18.1791 7 16.2974 16.3438 15.001 19',
  d9: 'M16.2029 3.91879C15.8034 3.54155 15.0113 3.01128 14.9351 3.00177C14.0749 2.89451 13.9629 3.41804 12.9641 4.88797C11.6989 6.5487 8.80901 10.0524 7.79688 10.911M7.79688 10.911C8.37002 12.6904 9.30809 15.5156 15.0929 16.9358M7.79688 10.911C9.07691 12.6395 13.9342 13.0313 16.2029 13.0111',
  d10: 'M16.406 3.95663C16.0065 3.57939 15.2144 3.04912 15.1382 3.03962C14.278 2.93235 14.166 3.45588 13.1672 4.92581C11.902 6.58654 9.01213 10.0903 8 10.9488M8 10.9488C8.57315 12.7282 9.51122 15.5534 15.296 16.9737M8 10.9488C9.28003 12.6774 14.1374 13.0691 16.406 13.0489',
  d11: 'M2.00001 18.2498C1.63338 18.2498 1.32049 18.5148 1.26021 18.8765C1.19994 19.2381 1.40995 19.5903 1.75676 19.7092C3.2608 20.2249 4.856 20.7036 6.46405 21.1214L6.29283 21.2926C5.90231 21.6832 5.90231 22.3163 6.29283 22.7069C6.68336 23.0974 7.31652 23.0974 7.70705 22.7069L8.70705 21.7069C8.71908 21.6948 8.73074 21.6826 8.74204 21.6701C11.7529 22.3371 14.6786 22.7498 17 22.7498C18.6925 22.7498 20.0969 22.111 21.0758 21.3746C21.565 21.0067 21.9614 20.6045 22.2428 20.2255C22.3833 20.0363 22.5029 19.8424 22.5901 19.6518C22.6723 19.4724 22.75 19.2439 22.75 18.9998C22.75 18.5855 22.4142 18.2498 22 18.2498H2.00001Z',
  d12: 'M17.4017 4.03001C17.3731 3.8859 17.3026 3.75317 17.1993 3.64867L17.1971 3.64644L17.1927 3.64205L17.1783 3.62768C17.1661 3.61569 17.1491 3.59899 17.1277 3.57831C17.0848 3.537 17.024 3.47945 16.9491 3.4116C16.8005 3.27699 16.5908 3.09656 16.3524 2.9205C16.1186 2.74779 15.8327 2.56093 15.5334 2.43069C15.2578 2.3108 14.8387 2.17973 14.4055 2.30362C14.0359 2.40934 13.7736 2.64288 13.5666 2.87882C13.3736 3.0988 13.1696 3.39202 12.944 3.71631L12.9221 3.74775C11.974 5.11039 10.354 7.28552 8.24312 9.54494C8.02399 9.77948 7.91443 9.89675 7.93144 10.0357C7.94844 10.1747 8.07612 10.2576 8.33147 10.4233C11.2244 12.3015 14.5868 12.2653 15.7806 12.2525C15.8615 12.2516 15.9326 12.2509 15.9927 12.2508L16.9394 12.2352C17.1872 12.2311 17.311 12.2291 17.3946 12.1534C17.4782 12.0778 17.4925 11.9561 17.5209 11.7128C17.818 9.16917 17.872 6.39871 17.4017 4.03001Z',
  d13: 'M17.0994 14.4431C17.1623 14.1164 17.1937 13.953 17.1019 13.8436C17.01 13.7343 16.8417 13.737 16.5052 13.7426L15.9991 13.7509C15.9424 13.7509 15.8711 13.7519 15.7863 13.7531C14.77 13.7677 11.8156 13.8103 8.90173 12.4482C8.23346 12.1358 7.89932 11.9796 7.75051 12.1343C7.60171 12.2891 7.75601 12.5881 8.06462 13.186C8.58198 14.1885 9.26449 15.0257 10.131 15.7084C11.5342 16.8138 13.357 17.464 15.5831 17.8188C15.9559 17.8782 16.3147 17.6513 16.4209 17.2891C16.6631 16.4629 16.8971 15.4951 17.0994 14.4431Z',
  d14: 'M15.6125 1.08253C16.1192 0.862841 16.7081 1.09552 16.9277 1.60223C17.2472 2.33908 17.481 3.14321 17.6473 3.98063C18.2111 6.82005 18.0306 10.2124 17.5842 13.1095C17.3389 14.7012 17.0089 16.1725 16.6612 17.3587C16.4181 18.1881 16.1578 18.9077 15.8987 19.4386C15.6564 19.9349 15.0577 20.1409 14.5614 19.8987C14.065 19.6565 13.8591 19.0577 14.1013 18.5614C14.2909 18.173 14.5143 17.5727 14.7419 16.7961C15.0624 15.703 15.3743 14.3186 15.6075 12.8049C16.0373 10.0157 16.1849 6.88455 15.6856 4.37014C15.5407 3.64031 15.3441 2.97741 15.0928 2.39779C14.8731 1.89108 15.1058 1.30222 15.6125 1.08253Z',
  d15: 'M14.0168 4.01929L14.2416 3.30379L13.7393 3.14592L13.4202 3.56479L14.0168 4.01929ZM8.03436 10.8795L7.54921 10.3075L7.1667 10.632L7.32048 11.1094L8.03436 10.8795ZM9.06252 10.8344C8.72571 10.5933 8.25722 10.6709 8.01611 11.0077C7.77501 11.3445 7.85259 11.813 8.1894 12.0541L9.06252 10.8344ZM13.4202 3.56479C12.8017 4.37657 11.5711 5.86317 10.3634 7.25959C9.1382 8.67622 8.00105 9.92426 7.54921 10.3075L8.51952 11.4514C9.07981 10.9762 10.3013 9.62447 11.4979 8.24082C12.7121 6.83695 13.9666 5.32273 14.6134 4.47378L13.4202 3.56479ZM7.32048 11.1094C7.59883 11.9736 7.95608 13.2855 9.04357 14.5347C10.1401 15.7944 11.9134 16.9274 14.914 17.6641L15.2717 16.2074C12.4875 15.5238 11.0181 14.5185 10.1749 13.5499C9.32266 12.5708 9.04305 11.5648 8.74824 10.6495L7.32048 11.1094ZM13.7919 4.73479L16.2994 5.52279L16.7491 4.09179L14.2416 3.30379L13.7919 4.73479ZM16.1962 12.261C15.2341 12.2696 13.8233 12.1948 12.4474 11.9664C11.0433 11.7332 9.79406 11.3581 9.06252 10.8344L8.1894 12.0541C9.2159 12.7889 10.7562 13.2061 12.2016 13.4461C13.6753 13.6908 15.1739 13.7702 16.2096 13.761L16.1962 12.261Z',
  d16: 'M1.99995 18.0002C1.63332 18.0002 1.32043 18.2653 1.26015 18.6269C1.19988 18.9886 1.40989 19.3408 1.7567 19.4597C3.26081 19.9754 4.85608 20.4541 6.4642 20.872L4.87863 22.4576H7.70706L8.74359 21.4209C11.7539 22.0878 14.679 22.5002 16.9999 22.5002C18.6924 22.5002 20.0968 21.8615 21.0758 21.1251C21.565 20.7572 21.9614 20.355 22.2428 19.976C22.3832 19.7868 22.5028 19.5929 22.5901 19.4023C22.6722 19.2229 22.7499 18.9944 22.7499 18.7502C22.7499 18.336 22.4142 18.0002 21.9999 18.0002H1.99995Z',
  d17: 'M15.689 11.998C14.4539 11.9793 11.0625 11.7851 7.7981 9.76588C10.1919 7.29905 12.3896 4.7509 13.384 3.32168L13.7045 2.86108L15.5727 3.48382C15.4609 3.06431 15.3258 2.66691 15.1649 2.29581L16.9999 1.50024C18.1914 4.24838 18.1643 7.90426 17.7984 11.2381C17.4312 14.5827 16.6193 17.7124 15.8988 19.1887L14.1014 18.3115C14.231 18.046 14.3707 17.695 14.5136 17.2735C12.4815 16.7231 10.9735 16.0317 9.83974 15.0707C8.65413 14.0657 7.93744 12.8173 7.42175 11.2879C10.7162 13.1844 14.0266 13.455 15.4503 13.4936C15.5376 13.0123 15.6181 12.5119 15.689 11.998Z',
} as const;

export const IconWindSurfStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-surf-stroke-rounded IconWindSurfStrokeRounded"
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

export const IconWindSurfDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-surf-duotone-rounded IconWindSurfDuotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
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

export const IconWindSurfTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-surf-twotone-rounded IconWindSurfTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWindSurfSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-surf-solid-rounded IconWindSurfSolidRounded"
    >
      <path 
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWindSurfBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-surf-bulk-rounded IconWindSurfBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWindSurfStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-surf-stroke-sharp IconWindSurfStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWindSurfSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-surf-solid-sharp IconWindSurfSolidSharp"
    >
      <path 
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

export const iconPackOfWindSurf: TheIconSelfPack = {
  name: 'WindSurf',
  StrokeRounded: IconWindSurfStrokeRounded,
  DuotoneRounded: IconWindSurfDuotoneRounded,
  TwotoneRounded: IconWindSurfTwotoneRounded,
  SolidRounded: IconWindSurfSolidRounded,
  BulkRounded: IconWindSurfBulkRounded,
  StrokeSharp: IconWindSurfStrokeSharp,
  SolidSharp: IconWindSurfSolidSharp,
};