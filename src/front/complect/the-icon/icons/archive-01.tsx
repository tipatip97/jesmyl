import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 7C2 5.59987 2 4.8998 2.27248 4.36502C2.51217 3.89462 2.89462 3.51217 3.36502 3.27248C3.8998 3 4.59987 3 6 3C7.40013 3 8.1002 3 8.63498 3.27248C9.10538 3.51217 9.48783 3.89462 9.72752 4.36502C10 4.8998 10 5.59987 10 7V17C10 18.4001 10 19.1002 9.72752 19.635C9.48783 20.1054 9.10538 20.4878 8.63498 20.7275C8.1002 21 7.40013 21 6 21C4.59987 21 3.8998 21 3.36502 20.7275C2.89462 20.4878 2.51217 20.1054 2.27248 19.635C2 19.1002 2 18.4001 2 17V7Z',
  d2: 'M6 17H6.00898',
  d3: 'M2 7H10',
  d4: 'M11.4486 8.26843C11.0937 6.93838 10.9163 6.27336 11.0385 5.69599C11.146 5.18812 11.4108 4.72747 11.7951 4.38005C12.2319 3.98508 12.8942 3.80689 14.2187 3.4505C15.5432 3.09412 16.2055 2.91593 16.7804 3.03865C17.2862 3.1466 17.7449 3.41256 18.0909 3.79841C18.4842 4.23706 18.6617 4.90209 19.0166 6.23213L21.5514 15.7316C21.9063 17.0616 22.0837 17.7266 21.9615 18.304C21.854 18.8119 21.5892 19.2725 21.2049 19.62C20.7681 20.0149 20.1058 20.1931 18.7813 20.5495C17.4568 20.9059 16.7945 21.0841 16.2196 20.9614C15.7138 20.8534 15.2551 20.5874 14.9091 20.2016C14.5158 19.7629 14.3383 19.0979 13.9834 17.7679L11.4486 8.26843Z',
  d5: 'M17.7812 16.6953L17.7899 16.693',
  d6: 'M12 8.00019L18.5001 6',
  d7: 'M21.553 15.7304L19.0182 6.231L18.9376 5.92969L11.4502 8.2673L13.985 17.7667C14.3399 19.0968 14.5174 19.7618 14.9107 20.2005C15.2567 20.5863 15.7154 20.8523 16.2212 20.9602C16.7961 21.0829 17.4584 20.9048 18.7829 20.5484C20.1074 20.192 20.7697 20.0138 21.2065 19.6188C21.5907 19.2714 21.8556 18.8107 21.9631 18.3029C22.0853 17.7255 21.9079 17.0604 21.553 15.7304Z',
  d8: 'M8.63596 3.27248C8.10118 3 7.40111 3 6.00098 3C4.60085 3 3.90078 3 3.366 3.27248C2.8956 3.51217 2.51315 3.89462 2.27346 4.36502C2.00098 4.8998 2.00098 5.59987 2.00098 7H10.001C10.001 5.59987 10.001 4.8998 9.7285 4.36502C9.48881 3.89462 9.10636 3.51217 8.63596 3.27248Z',
  d9: 'M2.00098 7C2.00098 5.59987 2.00098 4.8998 2.27346 4.36502C2.51315 3.89462 2.8956 3.51217 3.366 3.27248C3.90078 3 4.60085 3 6.00098 3C7.40111 3 8.10118 3 8.63596 3.27248C9.10636 3.51217 9.48881 3.89462 9.7285 4.36502C10.001 4.8998 10.001 5.59987 10.001 7V17C10.001 18.4001 10.001 19.1002 9.7285 19.635C9.48881 20.1054 9.10636 20.4878 8.63596 20.7275C8.10118 21 7.40111 21 6.00098 21C4.60085 21 3.90078 21 3.366 20.7275C2.8956 20.4878 2.51315 20.1054 2.27346 19.635C2.00098 19.1002 2.00098 18.4001 2.00098 17V7Z',
  d10: 'M6.00098 17H6.00996',
  d11: 'M2.00098 7H10.001',
  d12: 'M17.7822 16.6953L17.7909 16.693',
  d13: 'M11.4496 8.26843C11.0947 6.93838 10.9173 6.27336 11.0395 5.69599C11.147 5.18812 11.4118 4.72747 11.7961 4.38005C12.2329 3.98508 12.8952 3.80689 14.2197 3.4505C15.5442 3.09412 16.2065 2.91593 16.7814 3.03865C17.2872 3.1466 17.7459 3.41256 18.0919 3.79841C18.4852 4.23706 18.6627 4.90209 19.0176 6.23213L21.5524 15.7316C21.9073 17.0616 22.0847 17.7266 21.9625 18.304C21.855 18.8119 21.5902 19.2725 21.2059 19.62C20.7691 20.0149 20.1068 20.1931 18.7823 20.5495C17.4578 20.9059 16.7955 21.0841 16.2206 20.9614C15.7148 20.8534 15.2561 20.5874 14.9101 20.2016C14.5168 19.7629 14.3393 19.0979 13.9844 17.7679L11.4496 8.26843Z',
  d14: 'M12.001 8.00019L18.5011 6',
  d15: 'M6.03143 2.25C6.7048 2.24999 7.25551 2.24998 7.70307 2.28655C8.16633 2.3244 8.58473 2.40514 8.97547 2.60423C9.587 2.91582 10.0842 3.413 10.3958 4.02453C10.5949 4.41527 10.6756 4.83367 10.7134 5.29693C10.75 5.74448 10.75 6.29518 10.75 6.96853V6.96856V17.0314V17.0315C10.75 17.7048 10.75 18.2555 10.7134 18.7031C10.6756 19.1663 10.5949 19.5847 10.3958 19.9755C10.0842 20.587 9.587 21.0842 8.97547 21.3958C8.58473 21.5949 8.16633 21.6756 7.70307 21.7134C7.25551 21.75 6.70481 21.75 6.03144 21.75H5.96856C5.29519 21.75 4.74449 21.75 4.29693 21.7134C3.83367 21.6756 3.41527 21.5949 3.02453 21.3958C2.413 21.0842 1.91582 20.587 1.60423 19.9755C1.40514 19.5847 1.3244 19.1663 1.28655 18.7031C1.24998 18.2555 1.24999 17.7048 1.25 17.0314V17.0314V6.96858V6.96857C1.24999 6.2952 1.24998 5.74449 1.28655 5.29693C1.3244 4.83367 1.40514 4.41527 1.60423 4.02453C1.91582 3.413 2.413 2.91582 3.02453 2.60423C3.41527 2.40514 3.83367 2.3244 4.29693 2.28655C4.74449 2.24998 5.2952 2.24999 5.96857 2.25H5.96858H6.03142H6.03143ZM5 17C5 16.4477 5.44571 16 5.99553 16H6.00447C6.55429 16 7 16.4477 7 17C7 17.5523 6.55429 18 6.00447 18H5.99553C5.44571 18 5 17.5523 5 17ZM4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H8C8.55228 8 9 7.55229 9 7C9 6.44772 8.55228 6 8 6L4 6Z',
  d16: 'M15.6456 2.32715C16.0946 2.24499 16.5135 2.21478 16.937 2.30516C17.5983 2.44631 18.1976 2.79397 18.6493 3.29771C18.9383 3.61998 19.1213 3.99851 19.2747 4.42946C19.4229 4.84571 19.5626 5.3692 19.7332 6.00857L22.2841 15.5684L22.2841 15.5685L22.2841 15.5685C22.4547 16.2078 22.5944 16.7313 22.6733 17.1661C22.755 17.6164 22.7849 18.0357 22.6952 18.4593C22.5551 19.1215 22.2097 19.7226 21.7079 20.1763C21.3867 20.4667 21.0091 20.6508 20.5794 20.8051C20.1646 20.954 19.6432 21.0943 19.0069 21.2655L19.0069 21.2655L19.0066 21.2655L19.0065 21.2656L18.9459 21.2819L18.9456 21.2819L18.9454 21.282C18.3091 21.4532 17.7877 21.5935 17.3544 21.6728C16.9054 21.755 16.4864 21.7852 16.063 21.6948C15.4017 21.5537 14.8024 21.206 14.3507 20.7023C14.0617 20.38 13.8787 20.0015 13.7253 19.5705C13.5771 19.1543 13.4374 18.6308 13.2668 17.9914L13.2668 17.9914L10.7159 8.43159C10.5453 7.79221 10.4056 7.26874 10.3267 6.83388C10.245 6.38359 10.2151 5.96423 10.3047 5.54067C10.4449 4.87851 10.7903 4.27739 11.2921 3.82372C11.6133 3.53327 11.9908 3.34917 12.4206 3.1949C12.8354 3.046 13.357 2.90567 13.9934 2.73442L13.9935 2.73442L13.9935 2.73442L13.9935 2.73442L14.0542 2.71808L14.0542 2.71808L14.0542 2.71808L14.0542 2.71807C14.6907 2.54682 15.2122 2.40647 15.6456 2.32715ZM17.8311 6.20616C17.9935 6.73402 17.6973 7.29361 17.1694 7.45604L13.9194 8.45613C13.3915 8.61856 12.8319 8.32232 12.6695 7.79446C12.5071 7.26661 12.8033 6.70702 13.3312 6.54459L16.5812 5.54449C17.1091 5.38206 17.6687 5.6783 17.8311 6.20616ZM17.5185 15.7316C16.9874 15.874 16.6728 16.4218 16.8157 16.9552C16.9587 17.4887 17.5051 17.8058 18.0361 17.6635L18.0448 17.6612C18.5759 17.5189 18.8905 16.9711 18.7476 16.4376C18.6046 15.9041 18.0582 15.587 17.5271 15.7293L17.5185 15.7316Z',
  d17: 'M15.6456 2.32715C16.0946 2.24499 16.5135 2.21478 16.937 2.30516C17.5983 2.44631 18.1976 2.79397 18.6493 3.29771C18.9383 3.61998 19.1213 3.99851 19.2747 4.42946C19.4229 4.84571 19.5626 5.3692 19.7332 6.00857L22.2841 15.5684L22.2841 15.5685C22.4547 16.2078 22.5944 16.7313 22.6733 17.1661C22.755 17.6164 22.7849 18.0357 22.6952 18.4593C22.5551 19.1215 22.2097 19.7226 21.7079 20.1763C21.3867 20.4667 21.0091 20.6508 20.5794 20.8051C20.1646 20.954 19.6431 21.0943 19.0066 21.2655L19.0065 21.2656L18.9459 21.2819L18.9456 21.2819C18.3092 21.4532 17.7877 21.5935 17.3544 21.6728C16.9054 21.755 16.4864 21.7852 16.063 21.6948C15.4017 21.5537 14.8024 21.206 14.3507 20.7023C14.0617 20.38 13.8787 20.0015 13.7253 19.5705C13.5771 19.1543 13.4374 18.6308 13.2668 17.9914L13.2668 17.9914L10.7159 8.43159C10.5453 7.79221 10.4056 7.26874 10.3267 6.83388C10.245 6.38359 10.2151 5.96423 10.3047 5.54067C10.4449 4.87851 10.7903 4.27739 11.2921 3.82372C11.6133 3.53327 11.9908 3.34917 12.4206 3.1949C12.8354 3.04599 13.357 2.90566 13.9935 2.73442L13.9935 2.73442L14.0542 2.71808L14.0542 2.71808C14.6906 2.54682 15.2122 2.40647 15.6456 2.32715Z',
  d18: 'M17.8311 6.20616C17.9935 6.73402 17.6973 7.29361 17.1694 7.45604L13.9194 8.45613C13.3915 8.61856 12.8319 8.32232 12.6695 7.79446C12.5071 7.26661 12.8033 6.70702 13.3312 6.54459L16.5812 5.54449C17.1091 5.38206 17.6687 5.6783 17.8311 6.20616Z',
  d19: 'M16.8157 16.9552C16.6728 16.4218 16.9874 15.874 17.5185 15.7316L17.5271 15.7293C18.0582 15.587 18.6046 15.9041 18.7476 16.4376C18.8905 16.9711 18.5759 17.5189 18.0448 17.6612L18.0361 17.6635C17.5051 17.8058 16.9587 17.4887 16.8157 16.9552Z',
  d20: 'M10.0001 21V3H2.00008L2 21H10.0001Z',
  d21: 'M21.0003 19.7957L18.2959 2L10.3867 3.20195L13.091 20.9976L21.0003 19.7957Z',
  d22: 'M18.9717 6.44897L11.0625 7.65092',
  d23: 'M16.5 16.5L16.5087 16.4977',
  d24: 'M1.75008 3.5C1.75008 3.08578 2.08587 2.75 2.50008 2.75H10.5001C10.9143 2.75 11.2501 3.08579 11.2501 3.5V6.75H1.75006L1.75008 3.5ZM1.75006 8.25H11.2501V21.5C11.2501 21.9142 10.9143 22.25 10.5001 22.25H2.5C2.30109 22.25 2.11032 22.171 1.96967 22.0303C1.82902 21.8897 1.75 21.6989 1.75 21.5L1.75006 8.25ZM6.5 16.5C5.94772 16.5 5.5 16.9477 5.5 17.5C5.5 18.0523 5.94772 18.5 6.5 18.5H6.50898C7.06127 18.5 7.50898 18.0523 7.50898 17.5C7.50898 16.9477 7.06127 16.5 6.50898 16.5H6.5Z',
  d25: 'M20.1004 6.09176L12.5 7.33534V2.69828L18.6833 1.75862C19.0928 1.69638 19.4752 1.97791 19.5374 2.38742L20.1004 6.09176ZM12.8496 21.6104L12.5 19.3101V8.85528L20.3257 7.57483L22.2418 20.1831C22.304 20.5926 22.0225 20.975 21.613 21.0373L13.7037 22.2392C13.5071 22.2691 13.3066 22.2197 13.1464 22.1017C12.9862 21.9838 12.8794 21.8071 12.8496 21.6104ZM16.7433 16.0342C16.2098 16.1771 15.8932 16.7254 16.0362 17.2589C16.1791 17.7924 16.7274 18.1089 17.2609 17.966L17.2696 17.9637C17.803 17.8207 18.1196 17.2724 17.9767 16.7389C17.8337 16.2055 17.2854 15.8889 16.7519 16.0318L16.7433 16.0342Z',
} as const;

export const IconArchive01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-01-stroke-rounded IconArchive01StrokeRounded"
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

export const IconArchive01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-01-duotone-rounded IconArchive01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
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
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArchive01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-01-twotone-rounded IconArchive01TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArchive01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-01-solid-rounded IconArchive01SolidRounded"
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

export const IconArchive01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-01-bulk-rounded IconArchive01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArchive01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-01-stroke-sharp IconArchive01StrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
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
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArchive01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="archive-01-solid-sharp IconArchive01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArchive01: TheIconSelfPack = {
  name: 'Archive01',
  StrokeRounded: IconArchive01StrokeRounded,
  DuotoneRounded: IconArchive01DuotoneRounded,
  TwotoneRounded: IconArchive01TwotoneRounded,
  SolidRounded: IconArchive01SolidRounded,
  BulkRounded: IconArchive01BulkRounded,
  StrokeSharp: IconArchive01StrokeSharp,
  SolidSharp: IconArchive01SolidSharp,
};