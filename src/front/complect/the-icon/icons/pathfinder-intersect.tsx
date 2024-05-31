import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.76082 10.3157C9.92442 10.1105 10.1105 9.92442 10.3157 9.76082C11.0862 9.14637 12.1482 9.02577 13.9994 9.0021C14.4721 8.99606 14.7084 8.99303 14.8577 9.14231C15.007 9.29159 15.0039 9.52792 14.9979 10.0006C14.9743 11.8517 14.8538 12.9135 14.2393 13.684C14.0757 13.8892 13.8896 14.0753 13.6845 14.2389C12.914 14.8534 11.8519 14.9742 10.0006 14.9979C9.52793 15.004 9.29161 15.007 9.14232 14.8577C8.99303 14.7084 8.99606 14.4721 9.0021 13.9994C9.02577 12.1482 9.14637 11.0862 9.76082 10.3157Z',
  d2: 'M22 14.5V16.5M16.5 22H14.5M22 12C21.9345 11.1196 21.7782 10.5249 21.4047 10.0579C21.2673 9.88599 21.1109 9.73003 20.9385 9.59294C20.4718 9.22181 19.8778 9.06568 19 9H18.5M22 19C21.9343 19.8778 21.7782 20.4718 21.4071 20.9385C21.27 21.1109 21.114 21.2673 20.9421 21.4047C20.4751 21.7782 19.8804 21.9345 19 22M12 22C11.1222 21.9343 10.5282 21.7782 10.0615 21.4071C9.88914 21.27 9.73274 21.114 9.59527 20.9421C9.22182 20.4751 9.06547 19.8804 9 19L9 18.5',
  d3: 'M2 12C2.06547 12.8804 2.22182 13.4751 2.59527 13.9421C2.73274 14.114 2.88914 14.27 3.06153 14.4071C3.52821 14.7782 4.12216 14.9343 5 15H5.5M2 5C2.06568 4.12216 2.22181 3.52821 2.59294 3.06153C2.73003 2.88914 2.88599 2.73274 3.0579 2.59527C3.52488 2.22182 4.11965 2.06547 5 2M12 2C12.8778 2.06568 13.4718 2.22181 13.9385 2.59294C14.1109 2.73003 14.2673 2.88599 14.4047 3.0579C14.7782 3.52488 14.9345 4.11965 15 5V5.5M2 7.5L2 9.5M9.5 2L7.5 2',
  d4: 'M9.00216 14.3868C9 14.7315 9 15.1016 9 15.5C9 18.3165 9 19.7247 9.76359 20.6822C9.92699 20.8871 10.1129 21.073 10.3178 21.2364C11.2753 22 12.6835 22 15.5 22C18.3165 22 19.7247 22 20.6822 21.2364C20.8871 21.073 21.073 20.8871 21.2364 20.6822C22 19.7247 22 18.3165 22 15.5C22 12.6835 22 11.2753 21.2364 10.3178C21.073 10.1129 20.8871 9.92699 20.6822 9.76359C19.7247 9 18.3165 9 15.5 9C15.1016 9 14.7315 9 14.3867 9.00216C14.6149 9.00983 14.7564 9.04099 14.8577 9.14231C15.007 9.29159 15.0039 9.52792 14.9979 10.0006C14.9743 11.8517 14.8538 12.9135 14.2393 13.684C14.0757 13.8892 13.8896 14.0753 13.6845 14.2389C12.914 14.8534 11.8519 14.9742 10.0006 14.9979C9.52793 15.004 9.29161 15.007 9.14232 14.8577C9.04099 14.7564 9.00983 14.615 9.00216 14.3868Z',
  d5: 'M2.76359 3.31779C2 4.2753 2 5.68353 2 8.5C2 11.3165 2 12.7247 2.76359 13.6822C2.92699 13.8871 3.11289 14.073 3.31779 14.2364C4.2753 15 5.68353 15 8.5 15C8.89831 15 9.26846 15 9.61315 14.9978C9.38502 14.9902 9.24363 14.959 9.14232 14.8577C8.99303 14.7084 8.99606 14.4721 9.0021 13.9994C9.02577 12.1482 9.14637 11.0862 9.76082 10.3157C9.92442 10.1105 10.1105 9.92442 10.3157 9.76082C11.0862 9.14637 12.1482 9.02577 13.9994 9.0021C14.4721 8.99606 14.7084 8.99303 14.8577 9.14231C14.959 9.24364 14.9902 9.38508 14.9978 9.61332C15 9.26858 15 8.89838 15 8.5C15 5.68353 15 4.2753 14.2364 3.31779C14.073 3.11289 13.8871 2.92699 13.6822 2.76359C12.7247 2 11.3165 2 8.5 2C5.68353 2 4.2753 2 3.31779 2.76359C3.11289 2.92699 2.92699 3.11289 2.76359 3.31779Z',
  d6: 'M17.25 8.75C17.25 8.19772 17.6977 7.75 18.25 7.75H18.7874L18.8246 7.75279C19.7668 7.82328 20.6068 8.00035 21.3109 8.56026C21.5419 8.74393 21.7514 8.95292 21.9357 9.18334C22.4998 9.88868 22.677 10.7312 22.7472 11.6758C22.7882 12.2266 22.3749 12.7063 21.8242 12.7472C21.2734 12.7882 20.7937 12.3749 20.7528 11.8242C20.6921 11.0081 20.5566 10.6611 20.3737 10.4324C20.2831 10.3191 20.1799 10.2161 20.066 10.1256C19.8402 9.94599 19.4993 9.81214 18.7117 9.75H18.25C17.6977 9.75 17.25 9.30228 17.25 8.75ZM21.75 13.25C22.3023 13.25 22.75 13.6977 22.75 14.25V16.25C22.75 16.8023 22.3023 17.25 21.75 17.25C21.1977 17.25 20.75 16.8023 20.75 16.25V14.25C20.75 13.6977 21.1977 13.25 21.75 13.25ZM8.75 17.25C9.30228 17.25 9.75 17.6977 9.75 18.25L9.75 18.7119C9.81197 19.5022 9.94614 19.8423 10.1263 20.0676C10.2169 20.1809 10.3201 20.2839 10.434 20.3744C10.6633 20.5567 11.0111 20.6919 11.8246 20.7528C12.3754 20.794 12.7884 21.2739 12.7472 21.8246C12.706 22.3754 12.2261 22.7884 11.6754 22.7472C10.7332 22.6767 9.89316 22.4996 9.1891 21.9397C8.95815 21.7561 8.74856 21.5471 8.56429 21.3167C8.00023 20.6113 7.823 19.7688 7.75275 18.8242L7.75 18.7871L7.75 18.25C7.75 17.6977 8.19771 17.25 8.75 17.25ZM21.8246 17.7528C22.3754 17.794 22.7884 18.2739 22.7472 18.8246C22.6767 19.7668 22.4996 20.6068 21.9397 21.3109C21.7561 21.5419 21.5471 21.7514 21.3167 21.9357C20.6113 22.4998 19.7688 22.677 18.8242 22.7472C18.2734 22.7882 17.7937 22.3749 17.7528 21.8242C17.7118 21.2734 18.1251 20.7937 18.6758 20.7528C19.4919 20.6921 19.8389 20.5566 20.0676 20.3737C20.1809 20.2831 20.2839 20.1799 20.3744 20.066C20.5567 19.8367 20.6919 19.4889 20.7528 18.6754C20.794 18.1246 21.2739 17.7116 21.8246 17.7528ZM13.25 21.75C13.25 21.1977 13.6977 20.75 14.25 20.75H16.25C16.8023 20.75 17.25 21.1977 17.25 21.75C17.25 22.3023 16.8023 22.75 16.25 22.75H14.25C13.6977 22.75 13.25 22.3023 13.25 21.75Z',
  d7: 'M6.24729 2.17589C6.28825 2.72665 5.87497 3.20634 5.32421 3.24729C4.50813 3.30798 4.16112 3.44347 3.9325 3.6263C3.81911 3.71698 3.71618 3.82018 3.62566 3.934C3.44331 4.16331 3.30812 4.51119 3.24726 5.32466C3.20605 5.8754 2.72618 6.28847 2.17544 6.24726C1.62469 6.20605 1.21163 5.72618 1.25283 5.17543C1.32333 4.23322 1.5004 3.39321 2.06031 2.68915C2.24397 2.4582 2.45297 2.2486 2.68339 2.06433C3.38873 1.50028 4.23126 1.32305 5.17589 1.2528C5.72665 1.21184 6.20634 1.62512 6.24729 2.17589ZM11.2528 2.17544C11.294 1.62469 11.7739 1.21163 12.3247 1.25283C13.2669 1.32333 14.1069 1.5004 14.8109 2.06031C15.0419 2.24397 15.2515 2.45297 15.4358 2.68339C15.9998 3.38873 16.177 4.23126 16.2473 5.17589L16.25 5.21292V5.75005C16.25 6.30233 15.8023 6.75005 15.25 6.75005C14.6978 6.75005 14.25 6.30233 14.25 5.75005V5.28815C14.1881 4.49785 14.0539 4.15773 13.8738 3.9325C13.7831 3.81911 13.6799 3.71618 13.5661 3.62566C13.3368 3.44331 12.9889 3.30812 12.1754 3.24726C11.6247 3.20605 11.2116 2.72618 11.2528 2.17544ZM6.75005 2.25005C6.75005 1.69776 7.19776 1.25005 7.75005 1.25005L9.75005 1.25005C10.3023 1.25005 10.75 1.69776 10.75 2.25005C10.75 2.80233 10.3023 3.25005 9.75005 3.25005L7.75005 3.25005C7.19776 3.25005 6.75005 2.80233 6.75005 2.25005ZM1.25005 7.75005C1.25005 7.19776 1.69776 6.75005 2.25005 6.75005C2.80233 6.75005 3.25005 7.19776 3.25005 7.75005L3.25005 9.75005C3.25005 10.3023 2.80233 10.75 2.25005 10.75C1.69776 10.75 1.25005 10.3023 1.25005 9.75005L1.25005 7.75005ZM1.2528 12.3242C1.21184 11.7734 1.62512 11.2938 2.17589 11.2528C2.72665 11.2118 3.20634 11.6251 3.24729 12.1759C3.30798 12.992 3.44347 13.339 3.6263 13.5676C3.71698 13.681 3.82018 13.7839 3.934 13.8744C4.15987 14.0541 4.50079 14.1879 5.28838 14.25H5.75005C6.30233 14.25 6.75005 14.6978 6.75005 15.25C6.75005 15.8023 6.30233 16.25 5.75005 16.25H5.21269L5.17543 16.2473C4.23322 16.1768 3.39321 15.9997 2.68915 15.4398C2.4582 15.2561 2.2486 15.0471 2.06433 14.8167C1.50028 14.1114 1.32305 13.2688 1.2528 12.3242Z',
  d8: 'M14.6743 8.02185C14.9277 8.0536 15.2723 8.14275 15.5649 8.43532C15.8575 8.72789 15.9466 9.07253 15.9784 9.32592C16.0044 9.53333 16.0012 9.77363 15.9985 9.97359L15.9979 10.0135C15.975 11.8101 15.8814 13.2291 15.0213 14.3077C14.811 14.5713 14.5718 14.8106 14.3081 15.0209C13.2296 15.8809 11.8104 15.9749 10.0135 15.9979L9.97365 15.9985C9.77369 16.0012 9.53338 16.0044 9.32597 15.9784C9.07256 15.9467 8.72792 15.8575 8.43534 15.5649C8.14276 15.2724 8.05361 14.9277 8.02185 14.6743C7.99585 14.4669 7.99908 14.2266 8.00178 14.0266L8.0023 13.9868C8.02528 12.19 8.11899 10.7709 8.97911 9.69232C9.18939 9.42863 9.42863 9.1894 9.69231 8.97912C10.7709 8.11899 12.19 8.02528 13.9868 8.0023L14.0266 8.00178L14.0266 8.00177C14.2266 7.99908 14.4669 7.99585 14.6743 8.02185Z',
  d9: 'M14.9982 9.00195H9.00195V14.9998L14.9982 14.9977V9.00195Z',
  d10: 'M22 14V17M17 22L14 22M22 12V9.00001H18M22 19V22H19M12 22H9V18',
  d11: 'M1.99707 12L1.99707 15H5.99709M1.99707 5L1.99707 2L4.99707 2M11.9971 2L14.9971 2V6M1.99707 7L1.99707 10M9.99709 2L6.99709 2',
  d12: 'M8.25195 8.25195H15.7482V15.7475L8.25195 15.7501V8.25195Z',
  d13: 'M18 8.25H22C22.4142 8.25 22.75 8.58579 22.75 9V12H21.25V9.75H18V8.25ZM22.75 14V17H21.25V14H22.75ZM9.75 21.25V18H8.25V22C8.25 22.4142 8.58579 22.75 9 22.75H12V21.25H9.75ZM21.25 21.25V19H22.75V22C22.75 22.4142 22.4142 22.75 22 22.75H19V21.25H21.25ZM17 22.75L14 22.75V21.25L17 21.25V22.75Z',
  d14: 'M6.99709 1.25L9.99709 1.25V2.75L6.99709 2.75L6.99709 1.25ZM1.24707 2C1.24707 1.58579 1.58286 1.25 1.99707 1.25L4.99707 1.25V2.75L2.74707 2.75L2.74707 5H1.24707L1.24707 2ZM14.2471 2.75L11.9971 2.75V1.25L14.9971 1.25C15.4113 1.25 15.7471 1.58579 15.7471 2V6H14.2471V2.75ZM1.24707 10L1.24707 7H2.74707L2.74707 10H1.24707ZM1.24707 15L1.24707 12H2.74707L2.74707 14.25H5.99709V15.75H1.99707C1.79816 15.75 1.60739 15.671 1.46674 15.5303C1.32609 15.3897 1.24707 15.1989 1.24707 15Z',
} as const;

export const IconPathfinderIntersectStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-intersect-stroke-rounded IconPathfinderIntersectStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderIntersectDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-intersect-duotone-rounded IconPathfinderIntersectDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderIntersectTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-intersect-twotone-rounded IconPathfinderIntersectTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderIntersectSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-intersect-solid-rounded IconPathfinderIntersectSolidRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderIntersectBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-intersect-bulk-rounded IconPathfinderIntersectBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderIntersectStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-intersect-stroke-sharp IconPathfinderIntersectStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderIntersectSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-intersect-solid-sharp IconPathfinderIntersectSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfPathfinderIntersect: TheIconSelfPack = {
  name: 'PathfinderIntersect',
  StrokeRounded: IconPathfinderIntersectStrokeRounded,
  DuotoneRounded: IconPathfinderIntersectDuotoneRounded,
  TwotoneRounded: IconPathfinderIntersectTwotoneRounded,
  SolidRounded: IconPathfinderIntersectSolidRounded,
  BulkRounded: IconPathfinderIntersectBulkRounded,
  StrokeSharp: IconPathfinderIntersectStrokeSharp,
  SolidSharp: IconPathfinderIntersectSolidSharp,
};