import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.5 18C3.5 16.5858 3.5 15.8787 3.93934 15.4393C4.37868 15 5.08579 15 6.5 15H7C7.94281 15 8.41421 15 8.70711 15.2929C9 15.5858 9 16.0572 9 17V22H3.5V18Z',
  d2: 'M15 19C15 18.0572 15 17.5858 15.2929 17.2929C15.5858 17 16.0572 17 17 17H17.5C18.9142 17 19.6213 17 20.0607 17.4393C20.5 17.8787 20.5 18.5858 20.5 20V22H15V19Z',
  d3: 'M2 22H22',
  d4: 'M9 16C9 14.5858 9 13.8787 9.43934 13.4393C9.87868 13 10.5858 13 12 13C13.4142 13 14.1213 13 14.5607 13.4393C15 13.8787 15 14.5858 15 16V22H9V16Z',
  d5: 'M12.6911 2.57767L13.395 3.99715C13.491 4.19475 13.7469 4.38428 13.9629 4.42057L15.2388 4.6343C16.0547 4.77141 16.2467 5.36824 15.6587 5.957L14.6668 6.95709C14.4989 7.12646 14.4069 7.4531 14.4589 7.68699L14.7428 8.925C14.9668 9.90492 14.4509 10.284 13.591 9.77185L12.3951 9.05808C12.1791 8.92903 11.8232 8.92903 11.6032 9.05808L10.4073 9.77185C9.5514 10.284 9.03146 9.90089 9.25543 8.925L9.5394 7.68699C9.5914 7.4531 9.49941 7.12646 9.33143 6.95709L8.33954 5.957C7.7556 5.36824 7.94358 4.77141 8.75949 4.6343L10.0353 4.42057C10.2473 4.38428 10.5033 4.19475 10.5993 3.99715L11.3032 2.57767C11.6872 1.80744 12.3111 1.80744 12.6911 2.57767Z',
  d6: 'M7.96403 16.0277C7.77384 16.0021 7.49968 16 7.00001 16H6.50001C5.76463 16 5.3137 16.0021 4.98735 16.046C4.7005 16.0846 4.65261 16.1394 4.64692 16.1459C4.64671 16.1462 4.64656 16.1464 4.64645 16.1465C4.64635 16.1466 4.64617 16.1467 4.64593 16.1469C4.63942 16.1526 4.58457 16.2005 4.54601 16.4874C4.50213 16.8137 4.50001 17.2646 4.50001 18V21H8.00001V17C8.00001 16.5003 7.99788 16.2262 7.97231 16.036C7.97198 16.0335 7.97165 16.0311 7.97131 16.0287C7.96894 16.0284 7.96651 16.028 7.96403 16.0277ZM8.23053 14.0455C8.61373 14.0971 9.05101 14.2226 9.41422 14.5858C9.77744 14.949 9.90296 15.3863 9.95448 15.7695C10.0002 16.1094 10.0001 16.5215 10 16.9456C10 16.9637 10 16.9819 10 17V22C10 22.5523 9.55229 23 9.00001 23H3.50001C2.94772 23 2.50001 22.5523 2.50001 22V18C2.50001 17.9794 2.50001 17.9589 2.5 17.9384C2.49994 17.2843 2.49989 16.6966 2.56384 16.2209C2.63367 15.7015 2.7958 15.1687 3.23224 14.7322C3.66868 14.2958 4.20149 14.1337 4.72085 14.0638C5.19656 13.9999 5.78428 13.9999 6.4384 14C6.45887 14 6.47941 14 6.50001 14H7.00001C7.01816 14 7.0363 14 7.05442 14C7.47849 13.9999 7.89061 13.9998 8.23053 14.0455Z',
  d7: 'M16.9456 16C16.9637 16 16.9819 16 17 16H17.5C17.5206 16 17.5412 16 17.5616 16C18.2157 15.9999 18.8035 15.9999 19.2792 16.0638C19.7985 16.1337 20.3313 16.2958 20.7678 16.7322C21.2042 17.1687 21.3664 17.7015 21.4362 18.2209C21.5001 18.6966 21.5001 19.2843 21.5 19.9384C21.5 19.9589 21.5 19.9794 21.5 20V22C21.5 22.5523 21.0523 23 20.5 23H15C14.4477 23 14 22.5523 14 22V19C14 18.9819 14 18.9637 14 18.9456C13.9999 18.5215 13.9998 18.1094 14.0455 17.7695C14.0971 17.3863 14.2226 16.949 14.5858 16.5858C14.949 16.2226 15.3863 16.0971 15.7695 16.0455C16.1094 15.9998 16.5215 15.9999 16.9456 16ZM16.0287 18.0287C16.0284 18.0311 16.028 18.0335 16.0277 18.036C16.0021 18.2262 16 18.5003 16 19V21H19.5V20C19.5 19.2646 19.4979 18.8137 19.454 18.4874C19.4154 18.2005 19.3606 18.1526 19.3541 18.1469C19.3538 18.1467 19.3537 18.1466 19.3536 18.1465C19.3535 18.1464 19.3533 18.1462 19.3531 18.1459C19.3474 18.1394 19.2995 18.0846 19.0127 18.046C18.6863 18.0021 18.2354 18 17.5 18H17C16.5003 18 16.2262 18.0021 16.036 18.0277C16.0335 18.028 16.0311 18.0284 16.0287 18.0287Z',
  d8: 'M1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22Z',
  d9: 'M12 12L11.9384 12C11.2843 11.9999 10.6966 11.9999 10.2209 12.0638C9.70149 12.1337 9.16868 12.2958 8.73224 12.7322C8.2958 13.1687 8.13367 13.7015 8.06384 14.2209C7.99989 14.6966 7.99994 15.2843 8 15.9384L8.00001 16V22C8.00001 22.5523 8.44772 23 9.00001 23H15C15.5523 23 16 22.5523 16 22V16L16 15.9384C16.0001 15.2843 16.0001 14.6966 15.9362 14.2209C15.8663 13.7015 15.7042 13.1687 15.2678 12.7322C14.8313 12.2958 14.2985 12.1337 13.7792 12.0638C13.3035 11.9999 12.7157 11.9999 12.0616 12L12 12Z',
  d10: 'M11.9982 1.25C12.6701 1.25 13.1201 1.75346 13.3628 2.24519L14.0587 3.64843L14.0645 3.65396C14.0693 3.65832 14.0749 3.66298 14.0811 3.66761C14.0874 3.67225 14.0935 3.67634 14.0992 3.67976L14.1075 3.68442L15.3626 3.89467C15.9028 3.98545 16.4905 4.27498 16.6893 4.89848C16.8877 5.52094 16.5776 6.09734 16.19 6.48594L16.1889 6.48696L15.2132 7.47079C15.2098 7.47785 15.2053 7.48878 15.2014 7.50268C15.197 7.51815 15.1949 7.53139 15.1942 7.54014L15.4735 8.75789C15.5995 9.30931 15.6116 10.0753 15.0171 10.5123C14.4194 10.9516 13.6913 10.7048 13.2061 10.4159L12.0294 9.71353L12.0219 9.71249C12.0155 9.71175 12.0081 9.71129 12.0002 9.71129C11.9922 9.71129 11.9847 9.71175 11.9779 9.71252C11.9734 9.71303 11.9697 9.71362 11.9668 9.71419L10.7917 10.4156C10.3048 10.7069 9.57836 10.9497 8.98149 10.5106C8.38835 10.0742 8.39697 9.31064 8.52396 8.75723L8.80313 7.54014C8.8024 7.53139 8.80033 7.51815 8.79594 7.50268C8.79199 7.48878 8.78753 7.47785 8.78412 7.47079L7.80655 6.48514C7.4213 6.09671 7.11234 5.52107 7.30909 4.89983C7.50675 4.27573 8.09413 3.98552 8.6351 3.89461L9.8859 3.68508L9.89302 3.68099C9.89874 3.67753 9.90495 3.67338 9.91126 3.66866C9.91757 3.66394 9.92329 3.65918 9.92817 3.65471L9.93446 3.64868L10.6308 2.24447L10.6315 2.24307C10.8762 1.75224 11.3273 1.25 11.9982 1.25Z',
  d11: 'M11.9384 12C11.2843 11.9999 10.6966 11.9999 10.2209 12.0638C9.70149 12.1337 9.16868 12.2958 8.73224 12.7322C8.2958 13.1687 8.13367 13.7015 8.06384 14.2209C7.99989 14.6966 7.99994 15.2843 8 15.9384L8.00001 22C8.00001 22.5523 8.44772 23 9.00001 23H15C15.5523 23 16 22.5523 16 22L16 15.9384C16.0001 15.2843 16.0001 14.6966 15.9362 14.2209C15.8663 13.7015 15.7042 13.1687 15.2678 12.7322C14.8313 12.2958 14.2985 12.1337 13.7792 12.0638C13.3035 11.9999 12.7157 11.9999 12.0616 12H11.9384Z',
  d12: 'M9 14.9912H3.5V22.0001H9V14.9912Z',
  d13: 'M20.5 16.9941H15V22.0005H20.5V16.9941Z',
  d14: 'M15 12.9888H9V22.0002H15V12.9888Z',
  d15: 'M2 22.0005H22',
  d16: 'M11.9606 2.01997C11.9806 1.9927 12.0213 1.99269 12.0412 2.01995L13.6899 4.26825L16.5032 5.01125C16.5103 5.01311 16.513 5.02165 16.5084 5.02729L14.6957 7.23599L14.7795 9.9213C14.7806 9.9562 14.7466 9.98146 14.7135 9.9703L12.0009 9.05339L9.29494 9.97037C9.26201 9.98153 9.22804 9.95646 9.22893 9.92166L9.29755 7.23599L7.56682 5.09299C7.54414 5.0649 7.55771 5.02274 7.59251 5.01322L10.3139 4.26825L11.9606 2.01997Z',
  d17: 'M8.25 13C8.25 12.5858 8.58579 12.25 9 12.25H15C15.4142 12.25 15.75 12.5858 15.75 13V22C15.75 22.4142 15.4142 22.75 15 22.75H9C8.58579 22.75 8.25 22.4142 8.25 22V13Z',
  d18: 'M3 14.75C3 14.1977 3.44772 13.75 4 13.75H9V15.75H5V20.75H19V17.75H15V15.75H20C20.5523 15.75 21 16.1977 21 16.75V20.75H22V22.75H2V20.75H3V14.75Z',
  d19: 'M12 1.25C12.2389 1.25 12.4635 1.36383 12.6048 1.5565L14.1193 3.62187L16.6992 4.33267C16.9442 4.40016 17.1383 4.58711 17.215 4.82936C17.2917 5.07162 17.2405 5.33623 17.079 5.53241L15.458 7.50156L15.5308 9.97794C15.538 10.2227 15.4253 10.4556 15.2289 10.6017C15.0324 10.7479 14.777 10.7889 14.5446 10.7117L12 9.866L9.4554 10.7117C9.22304 10.7889 8.96761 10.7479 8.77116 10.6017C8.57471 10.4556 8.46198 10.2227 8.46918 9.97794L8.54205 7.50156L6.92098 5.53241C6.75948 5.33623 6.70829 5.07162 6.78499 4.82936C6.86168 4.58711 7.05582 4.40016 7.3008 4.33267L9.8807 3.62187L11.3952 1.5565C11.5365 1.36383 11.7611 1.25 12 1.25Z',
} as const;

export const IconRankingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ranking-stroke-rounded IconRankingStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconRankingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ranking-duotone-rounded IconRankingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconRankingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ranking-twotone-rounded IconRankingTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRankingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ranking-solid-rounded IconRankingSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRankingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ranking-bulk-rounded IconRankingBulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRankingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ranking-stroke-sharp IconRankingStrokeSharp"
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
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRankingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ranking-solid-sharp IconRankingSolidSharp"
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

export const iconPackOfRanking: TheIconSelfPack = {
  name: 'Ranking',
  StrokeRounded: IconRankingStrokeRounded,
  DuotoneRounded: IconRankingDuotoneRounded,
  TwotoneRounded: IconRankingTwotoneRounded,
  SolidRounded: IconRankingSolidRounded,
  BulkRounded: IconRankingBulkRounded,
  StrokeSharp: IconRankingStrokeSharp,
  SolidSharp: IconRankingSolidSharp,
};