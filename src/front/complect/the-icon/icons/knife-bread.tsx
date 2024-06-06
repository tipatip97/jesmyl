import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.4408 15.8962C10.8869 16.3785 11.3594 17.1338 12.0909 17.0175C12.443 16.9615 12.7331 16.6478 13.3134 16.0204L14.9749 14.2239L15.3549 12.1693L17.2551 11.7583L17.6352 9.70371L19.5354 9.29279L20.1175 7.23529L21.1541 6.96268C21.6189 6.84042 21.8514 6.77929 21.9549 6.56164C22.0585 6.34398 21.9735 6.13125 21.8035 5.70579C21.5445 5.05764 21.1283 4.2661 20.5425 3.8879C19.0355 2.70403 16.9949 2.70403 15.4879 3.8879C15.2142 4.10296 14.9317 4.40836 14.3668 5.01917L2.49976 17.8504C1.83341 18.5709 1.83341 19.7391 2.49976 20.4596C3.25522 21.2764 4.51122 21.1502 5.11452 20.1968L7.65899 16.1758C8.03248 15.5856 8.44586 14.7353 9.24298 14.8926C9.57287 14.9578 9.86218 15.2706 10.4408 15.8962Z',
  d2: 'M22 6C21.9689 5.9139 21.9301 5.81713 21.8854 5.70579C21.6254 5.05764 21.2074 4.2661 20.6192 3.8879C19.106 2.70403 17.0569 2.70403 15.5437 3.8879C15.2688 4.10296 14.9852 4.40836 14.4179 5.01917L2.50183 17.8504C1.83272 18.5709 1.83272 19.7391 2.50183 20.4596C3.26041 21.2764 4.52161 21.1502 5.1274 20.1968L7.6824 16.1758C7.94082 15.7691 8.21826 15.2389 8.62768 15',
  d3: 'M15.0246 3.29812C16.7949 1.90741 19.2034 1.90066 20.9799 3.27788C21.3823 3.54636 21.6923 3.92572 21.9265 4.2901C22.1704 4.66954 22.3596 5.07621 22.5 5.42753C22.5729 5.6098 22.6709 5.85469 22.7141 6.04962C22.7689 6.2974 22.7746 6.58454 22.6322 6.88381C22.481 7.20167 22.2322 7.37703 21.9962 7.48257C21.7496 7.59287 21.3515 7.69751 21.0555 7.77032C20.894 7.81005 20.8133 7.82991 20.7551 7.88614C20.6969 7.94236 20.6743 8.02214 20.6292 8.18169L20.2571 9.49695C20.1816 9.76381 19.965 9.96722 19.6939 10.0258L18.6723 10.2468C18.483 10.2877 18.3884 10.3082 18.3252 10.3733C18.262 10.4384 18.2444 10.5336 18.2092 10.7241L17.9926 11.8948C17.9376 12.1922 17.7093 12.4275 17.4137 12.4914L16.3921 12.7123C16.2028 12.7532 16.1081 12.7737 16.0449 12.8388C15.9817 12.904 15.9641 12.9992 15.9289 13.1896L15.7124 14.3603C15.6866 14.4997 15.6218 14.629 15.5255 14.7331L13.1077 17.3C12.8708 17.5053 12.583 17.6987 12.2086 17.7582C11.5248 17.8669 11.0045 17.546 10.6621 17.2432C10.4908 17.0918 10.3407 16.9251 10.217 16.7822C9.91691 16.4578 9.40266 15.8796 9.25151 15.7458C9.05466 15.5895 8.8949 15.6944 8.83963 15.7664C8.70014 15.9154 8.58932 16.0961 8.44663 16.3288L5.74829 20.5978C4.88953 21.9549 3.04917 22.1582 1.94915 20.9688C1.01695 19.9609 1.01695 18.3491 1.94915 17.3412L13.8707 4.45099C14.3835 3.8964 14.7033 3.5505 15.0246 3.29812Z',
  d4: 'M15.0249 3.29812C16.7952 1.90741 19.2037 1.90066 20.9802 3.27788C21.3826 3.54636 21.6926 3.92572 21.9268 4.2901C22.1707 4.66954 22.3599 5.07621 22.5003 5.42753C22.689 5.89918 22.8671 6.39061 22.6325 6.88381C22.4813 7.20167 22.2325 7.37703 21.9965 7.48257C21.7499 7.59287 21.3518 7.69751 21.0558 7.77032C20.7328 7.84977 20.7197 7.86259 20.6295 8.18169L20.2574 9.49695C20.1819 9.76381 19.9653 9.96722 19.6942 10.0258L18.6726 10.2468C18.294 10.3286 18.2799 10.3432 18.2095 10.7241L17.9929 11.8948C17.9379 12.1922 17.7096 12.4275 17.414 12.4914L16.3924 12.7123C16.0138 12.7942 15.9996 12.8088 15.9292 13.1896L15.7126 14.3603C15.6869 14.4997 15.6221 14.629 15.5258 14.7331L13.108 17.3C12.8711 17.5053 12.5833 17.6987 12.2089 17.7582C11.5251 17.8669 11.0048 17.546 10.6623 17.2432C10.4911 17.0918 10.341 16.9251 10.2172 16.7822C8.92737 15.3875 6.22461 12.7186 6.22461 12.7186L13.871 4.45099C14.3838 3.8964 14.7036 3.5505 15.0249 3.29812Z',
  d5: 'M5.1461 20.2041L8.16936 16.5676L9.42691 15.0048L11.4929 16.5453C11.5128 16.5602 11.5316 16.5765 11.5492 16.5942L11.9346 16.9835L14.9442 14.2255L15.3085 12.1691L17.2201 11.7542L17.592 9.70765L19.4847 9.304L20.0625 7.24582L21.9268 6.50506C21.7528 5.68665 21.3246 4.81243 21.0722 4.45297C18.9224 2.10771 16.3374 3.07774 15.2766 4.03454L2.45006 17.9201C1.73907 18.6496 1.77597 19.6848 2.45092 20.4487C3.22188 21.3211 4.39139 21.0911 5.1461 20.2041Z',
  d6: 'M14.9379 3.29775C16.6971 1.90704 19.0904 1.90029 20.8557 3.27752C21.2556 3.546 21.5636 3.92536 21.7963 4.28974C22.0387 4.66918 22.2267 5.07585 22.3662 5.42717L22.75 6.95867L20.615 7.79787L20.0155 9.93022L18.1746 10.3308L17.797 12.3855L15.9087 12.7964L15.5766 14.6031L12.4408 17.548C12.1703 17.802 11.7556 17.8179 11.4668 17.5853L9.54941 16.0417L5.68995 20.6441C4.82439 21.9591 3.0252 22.1441 1.94475 20.9684C1.01842 19.9605 1.01842 18.3488 1.94475 17.3408L13.7913 4.45061C14.3008 3.89603 14.6186 3.55013 14.9379 3.29775Z',
} as const;

export const IconKnifeBreadStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-bread-stroke-rounded IconKnifeBreadStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKnifeBreadDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-bread-duotone-rounded IconKnifeBreadDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKnifeBreadTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-bread-twotone-rounded IconKnifeBreadTwotoneRounded"
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

export const IconKnifeBreadSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-bread-solid-rounded IconKnifeBreadSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnifeBreadBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-bread-bulk-rounded IconKnifeBreadBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnifeBreadStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-bread-stroke-sharp IconKnifeBreadStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnifeBreadSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-bread-solid-sharp IconKnifeBreadSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKnifeBread: TheIconSelfPack = {
  name: 'KnifeBread',
  StrokeRounded: IconKnifeBreadStrokeRounded,
  DuotoneRounded: IconKnifeBreadDuotoneRounded,
  TwotoneRounded: IconKnifeBreadTwotoneRounded,
  SolidRounded: IconKnifeBreadSolidRounded,
  BulkRounded: IconKnifeBreadBulkRounded,
  StrokeSharp: IconKnifeBreadStrokeSharp,
  SolidSharp: IconKnifeBreadSolidSharp,
};