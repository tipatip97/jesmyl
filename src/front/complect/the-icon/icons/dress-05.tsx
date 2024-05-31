import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.26869 7.96595C5.55098 8.65784 5.19212 9.00379 4.75494 8.99997C3.73206 8.99102 1.92649 7.00413 2.00231 5.986C2.033 5.57393 2.39927 5.26497 3.13182 4.64705L5.32917 2.79353C5.979 2.24539 6.87323 2.22352 7.68526 2.06696C8.00922 2.0045 8.1712 1.97327 8.31518 2.02893C8.77941 2.20837 9.16219 3.05277 9.4391 3.43412C10.604 5.03836 11.1864 5.84049 12.0003 5.84049C12.8141 5.84049 13.3966 5.03836 14.5615 3.43412C14.8384 3.05277 15.2211 2.20837 15.6854 2.02893C15.8294 1.97327 15.9913 2.0045 16.3153 2.06696C17.1591 2.22965 17.9924 2.22083 18.6714 2.79353L20.8687 4.64705C21.6013 5.26497 21.9676 5.57393 21.9982 5.986C22.0741 7.00413 20.2685 8.99102 19.2456 8.99997C18.8084 9.00379 18.4496 8.65784 17.7319 7.96595',
  d2: 'M6 7C7.5 9 6.95594 11.1815 6.59802 13.2178C6.22004 15.3682 5.58295 16.6762 5.21963 18.4412C4.97017 19.6531 4.84545 20.2591 5.33363 20.7716C6.71183 22.2184 16.9342 22.5901 18.6664 20.7716C19.1546 20.2591 19.0298 19.6531 18.7804 18.4412C18.4171 16.6762 17.78 15.3682 17.402 13.2178C17.0441 11.1815 16.5 9 18 7',
  d3: 'M20.8687 4.64705L18.6714 2.79353C17.9924 2.22083 17.1591 2.22965 16.3153 2.06696C15.9913 2.0045 15.8294 1.97327 15.6854 2.02893C15.2211 2.20837 14.8384 3.05277 14.5615 3.43412C13.3966 5.03836 12.8141 5.84049 12.0003 5.84049C11.1864 5.84049 10.604 5.03836 9.4391 3.43412C9.16219 3.05277 8.77941 2.20837 8.31518 2.02893C8.1712 1.97327 8.00922 2.0045 7.68526 2.06696C6.87323 2.22352 5.979 2.24539 5.32917 2.79353L3.13182 4.64705C2.39927 5.26497 2.033 5.57393 2.00231 5.986C1.92649 7.00413 3.73206 8.99102 4.75494 8.99997C4.99979 9.00211 5.22006 8.89454 5.49257 8.67794C5.7347 8.48548 5.85576 8.38926 6.36941 8.55979C6.88306 8.73033 6.88461 8.73621 6.88772 8.74798C7.46737 10.9439 5.98208 17.1495 5 20.5C11 23.3 16.8333 21.6667 19 20.5C17.2517 13.2153 17.0712 9.89855 17.3253 8.63008C17.3646 8.43398 17.2664 8.92422 17.813 8.73923C18.3596 8.55424 18.3219 8.5211 18.337 8.53436C18.6931 8.84695 18.9516 9.00254 19.2456 8.99997C20.2685 8.99102 22.0741 7.00413 21.9982 5.986C21.9676 5.57393 21.6013 5.26497 20.8687 4.64705Z',
  d4: 'M18.149 9.34763C18.0526 9.27659 17.9531 9.19485 17.8502 9.10488C17.6253 10.2092 17.836 11.3849 18.0683 12.6816C18.249 13.7097 18.564 14.9448 18.8133 15.7529C19.0351 16.4672 19.3585 17.5298 19.5277 18.3516L19.5277 18.3517C19.6415 18.9042 19.7484 19.4227 19.75 19.8659C19.7519 20.3882 19.6113 20.867 19.2094 21.2888C18.875 21.6399 18.3981 21.882 17.9064 22.0588C17.4006 22.2406 16.8053 22.379 16.1661 22.4825C14.8865 22.6899 13.3568 22.7697 11.8554 22.746C10.3531 22.7223 8.85072 22.5945 7.62327 22.3761C7.01063 22.267 6.44924 22.1324 5.98355 21.9695C5.54296 21.8154 5.0906 21.6038 4.79056 21.2888C4.38871 20.867 4.2481 20.3882 4.25001 19.8659C4.25163 19.4227 4.35847 18.9042 4.47233 18.3517C4.64151 17.5298 4.86187 16.7994 5.08367 16.0852C5.08367 16.0852 5.75098 13.7097 5.93169 12.6816C6.164 11.3851 6.37466 10.2095 6.14986 9.10529C6.04715 9.1951 5.9478 9.27669 5.85154 9.34762C5.55105 9.56907 5.19425 9.75384 4.74838 9.74995C4.27955 9.74584 3.82852 9.52855 3.47294 9.29664C3.09758 9.05184 2.73091 8.7262 2.41231 8.37666C2.09365 8.02706 1.80344 7.63199 1.59382 7.23628C1.39522 6.86136 1.21981 6.39448 1.25438 5.9303C1.28725 5.48886 1.50641 5.15638 1.74852 4.88965L4.84559 2.22025C5.29924 1.83759 5.81574 1.659 6.27809 1.55253L8.00235 1.25651C8.1659 1.2422 8.36847 1.24545 8.58558 1.32937C8.84574 1.42993 9.04625 1.60211 9.18983 1.75231C9.33784 1.90715 9.46528 2.08132 9.57053 2.23845C9.70249 2.45361 9.98232 2.90582 10.046 2.99345C10.6428 3.81533 11.0421 4.36201 11.387 4.71401C11.718 5.05177 11.8852 5.09049 12.0003 5.09049C12.1154 5.09049 12.2826 5.05177 12.6135 4.71401C12.9584 4.36201 13.3578 3.81533 13.9546 2.99345C14.0862 2.81227 14.3264 2.41463 14.43 2.23845C14.5353 2.08132 14.6627 1.90715 14.8107 1.75231C14.9543 1.60211 15.1548 1.42994 15.415 1.32937C15.6321 1.24545 15.8346 1.2422 15.9982 1.25651L17.7198 1.54479C18.1852 1.64952 18.6905 1.82848 19.155 2.22025L22.252 4.88965C22.4941 5.15638 22.7133 5.48886 22.7462 5.9303C22.7807 6.39448 22.6053 6.86136 22.4067 7.23628C22.1971 7.63199 21.9069 8.02706 21.5882 8.37666C21.2696 8.7262 20.903 9.05184 20.5276 9.29665C20.172 9.52855 19.721 9.74584 19.2522 9.74995C18.8063 9.75384 18.4495 9.56907 18.149 9.34763Z',
  d5: 'M12.0007 5.09049C11.8856 5.09049 11.7184 5.05177 11.3875 4.71401C11.0426 4.36201 10.6432 3.81533 10.0464 2.99345C9.98276 2.90582 9.70292 2.45361 9.57096 2.23845C9.46571 2.08132 9.33828 1.90715 9.19026 1.75231C9.04668 1.60211 8.84617 1.42993 8.58602 1.32937C8.3689 1.24545 8.16633 1.2422 8.00278 1.25651L6.27852 1.55253C5.81618 1.659 5.29967 1.83759 4.84602 2.22025L3.41406 3.45447C5.82337 6.20003 6.82937 8.92842 5.93212 12.6816C5.75141 13.7097 5.0841 16.0852 5.0841 16.0852C4.8623 16.7994 4.64194 17.5298 4.47276 18.3517C4.35891 18.9042 4.25207 19.4227 4.25044 19.8659C4.24854 20.3882 4.38914 20.867 4.79099 21.2888C5.09103 21.6038 5.5434 21.8154 5.98398 21.9695C6.44967 22.1324 7.01107 22.267 7.6237 22.3761C8.85116 22.5945 10.4865 22.7223 11.9888 22.746C13.4911 22.7223 15.1502 22.5946 16.3777 22.3761C16.9903 22.267 17.5517 22.1324 18.0174 21.9695C18.458 21.8154 18.9103 21.6038 19.2104 21.2889C19.6122 20.867 19.7528 20.3882 19.7509 19.8659C19.7493 19.4227 19.6425 18.9042 19.5286 18.3517C19.3594 17.5298 19.1391 16.7994 18.9173 16.0852C18.9173 16.0852 18.25 13.7097 18.0693 12.6816C17.172 8.92842 18.178 6.20003 20.5873 3.45448L19.1554 2.22026C18.7017 1.83759 18.1852 1.659 17.7229 1.55254L15.9986 1.25651C15.835 1.24221 15.6325 1.24546 15.4154 1.32938C15.1552 1.42994 14.9547 1.60212 14.8111 1.75232C14.6631 1.90715 14.5357 2.08132 14.4304 2.23846C14.2985 2.45361 14.0186 2.90583 13.955 2.99346C13.3582 3.81534 12.9588 4.36202 12.6139 4.71402C12.283 5.05177 12.1158 5.09049 12.0007 5.09049Z',
  d6: 'M17.4406 7.96102L19.4801 9.50956C19.4846 9.51297 19.491 9.512 19.4943 9.50741L21.9981 6.01052C22.001 6.00653 22.0005 6.00107 21.9971 5.99759L18.5066 2.47601C18.5051 2.47449 18.5031 2.4735 18.501 2.47317L15.5092 1.99915C15.5063 1.99869 15.5034 1.99952 15.5011 2.00143L12.0072 4.99357L8.52491 2.00146C8.52266 1.99954 8.51969 1.9987 8.51677 1.99918L5.50765 2.49386C5.5056 2.4942 5.5037 2.49517 5.50222 2.49664L2.00296 5.97683C1.99948 5.98029 1.99901 5.98576 2.00185 5.98977L4.49029 9.50561C4.49356 9.51024 4.50001 9.51123 4.50451 9.50779L6.45599 8.01899',
  d7: 'M17.9826 6.49777C16.5832 8.34965 16.8656 11.1492 17.7096 14.7556C18.122 16.991 18.7349 19.2579 18.9897 20.7097C16.2876 22.062 9.55151 22.7656 4.98975 20.7097C5.34085 18.6526 5.96958 16.3301 6.43929 14.1085C7.05326 11.2045 7.46248 8.47926 5.98978 6.49121',
  d8: 'M8.37691 1.26021C8.59587 1.22372 8.81976 1.2861 8.9883 1.43056L12.0002 4.0122L15.0121 1.43056C15.1807 1.2861 15.4045 1.22372 15.6235 1.26021L18.6235 1.76021C18.7773 1.78584 18.9192 1.85872 19.0296 1.96875L22.5278 5.45475C22.7875 5.71345 22.8221 6.12188 22.6097 6.42058L20.1115 9.93458C19.9943 10.0994 19.8155 10.2099 19.6157 10.2411C19.4159 10.2722 19.212 10.2213 19.0502 10.1L17.794 9.15783C17.7681 9.3979 17.7555 9.64347 17.7541 9.89359C17.7483 10.9261 17.9302 11.9694 18.1028 12.9594L18.1382 13.1629L19.8613 21.1341L19.2982 21.3796C17.183 22.302 14.5762 22.75 11.999 22.75C9.42171 22.75 6.81468 22.302 4.69875 21.3796L4.13537 21.134L5.86158 13.1628L5.89697 12.9594L5.89698 12.9594C6.06957 11.9694 6.25146 10.9261 6.24561 9.89359C6.24419 9.64363 6.23167 9.39822 6.20581 9.15831L4.95021 10.1C4.78843 10.2213 4.58451 10.2722 4.38469 10.2411C4.18488 10.2099 4.00612 10.0994 3.88894 9.93458L1.3907 6.42058C1.17834 6.12188 1.21296 5.71345 1.47256 5.45475L4.97081 1.96875C5.08122 1.85872 5.22316 1.78584 5.37691 1.76021L8.37691 1.26021Z',
} as const;

export const IconDress05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-05-stroke-rounded IconDress05StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDress05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-05-duotone-rounded IconDress05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconDress05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-05-twotone-rounded IconDress05TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconDress05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-05-solid-rounded IconDress05SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDress05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-05-bulk-rounded IconDress05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDress05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-05-stroke-sharp IconDress05StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDress05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-05-solid-sharp IconDress05SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDress05: TheIconSelfPack = {
  name: 'Dress05',
  StrokeRounded: IconDress05StrokeRounded,
  DuotoneRounded: IconDress05DuotoneRounded,
  TwotoneRounded: IconDress05TwotoneRounded,
  SolidRounded: IconDress05SolidRounded,
  BulkRounded: IconDress05BulkRounded,
  StrokeSharp: IconDress05StrokeSharp,
  SolidSharp: IconDress05SolidSharp,
};