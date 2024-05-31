import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.329 5.95241L10.5 8.14663C11.8897 8.14663 12.5845 8.14663 13.1133 8.36021C14.0353 8.73264 14.7191 9.5491 14.9405 10.542C15.0675 11.1113 14.9644 11.8179 14.7583 13.2311L14 17.4011H19.25C20.2165 17.4011 21 18.2067 21 19.2005C21 20.1943 20.2165 21 19.25 21H11.0505C8.20258 21 6.7786 21 5.69477 20.4208C4.78184 19.9329 4.03745 19.1673 3.56312 18.2282C3 17.1134 3 15.6488 3 12.7195C3 11.1625 3 10.384 3.25654 9.68332C3.33566 9.46725 3.43232 9.25841 3.54552 9.05902C3.91257 8.41248 4.50018 7.92155 5.67536 6.93972L9.91166 3.40042C10.5469 2.86973 11.4559 2.86619 12.095 3.39191C12.8631 4.02379 12.9692 5.18442 12.329 5.95241Z',
  d2: 'M10.5 8.14648C11.8897 8.14648 12.5845 8.14648 13.1133 8.36006C14.0353 8.7325 14.7191 9.54896 14.9405 10.5418C15.0675 11.1112 14.9644 11.8178 14.7583 13.231L14 17.4009H19.25C20.2165 17.4009 21 18.2066 21 19.2004C21 20.1942 20.2165 20.9999 19.25 20.9999H11.0505C8.20258 20.9999 6.7786 20.9999 5.69477 20.4206C4.78184 19.9328 4.03745 19.1671 3.56312 18.2281C3 17.1133 3 15.6486 3 12.7193C3 11.3916 3 10.63 3.15908 10',
  d3: 'M9.43084 2.82486C10.3427 2.06304 11.6539 2.05782 12.5715 2.81271C13.6639 3.71129 13.8094 5.34787 12.9052 6.43264L12.0828 7.41927C12.5307 7.44819 13.0228 7.51475 13.3942 7.6648C14.5512 8.13214 15.399 9.15168 15.6726 10.3787C15.76 10.7706 15.7601 11.1762 15.7218 11.6329C15.6842 12.0803 15.6041 12.629 15.504 13.3151L15.504 13.3152L14.8987 16.6511H19.25C20.6503 16.6511 21.75 17.8123 21.75 19.2005C21.75 20.5887 20.6503 21.75 19.25 21.75H11.0155C9.62118 21.75 8.52673 21.75 7.64731 21.6749C6.75087 21.5983 6.00996 21.4396 5.34132 21.0823C4.28997 20.5204 3.43639 19.6407 2.89372 18.5664C2.55001 17.8859 2.39694 17.1319 2.32287 16.2147C2.25004 15.3128 2.25004 14.1892 2.25004 12.7528L2.25004 12.7528C2.24971 11.3349 2.24948 10.2525 2.55231 9.42545C2.64559 9.17068 2.75965 8.92424 2.89334 8.68875C3.32831 7.92256 4.01503 7.34911 5.08426 6.45626L9.43084 2.82486Z',
  d4: 'M12.332 6.28839L10.5029 8.36071C11.8926 8.36071 12.5875 8.36071 13.1162 8.56242C14.0383 8.91416 14.7221 9.68527 14.9435 10.623C15.0704 11.1607 14.9674 11.828 14.7612 13.1627L14.0029 17.101L19.2529 17.101C20.2194 17.101 21.0029 17.8619 21.0029 18.8005C21.0029 19.7391 20.2194 20.5 19.2529 20.5H7.00293C4.79379 20.5 3.00293 18.7091 3.00293 16.5L3.00293 11.0144C3.00293 9.74728 3.60332 8.55508 4.62139 7.80065L9.91459 3.87817C10.5498 3.37697 11.4588 3.37363 12.0979 3.87014C12.8661 4.46692 12.9722 5.56307 12.332 6.28839Z',
  d5: 'M9.4568 3.28176C10.3623 2.57445 11.647 2.57235 12.5551 3.27788C13.6616 4.13751 13.8206 5.7318 12.8914 6.78469L12.1406 7.63527L12.1751 7.63731C12.6208 7.66448 13.0134 7.72159 13.3806 7.86168C14.5281 8.29944 15.3903 9.26406 15.6705 10.4506C15.7606 10.8324 15.7601 11.2253 15.7214 11.6605C15.6836 12.0856 15.6032 12.606 15.5034 13.2519L15.4974 13.2909L14.9082 16.351L19.25 16.351C20.6099 16.351 21.75 17.4271 21.75 18.8005C21.75 20.1739 20.6099 21.25 19.25 21.25H7C4.37665 21.25 2.25 19.1234 2.25 16.5V11.0144C2.25 9.50969 2.96297 8.09396 4.17193 7.19807L9.4568 3.28176Z',
} as const;

export const IconShaka01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-01-stroke-rounded IconShaka01StrokeRounded"
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

export const IconShaka01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-01-duotone-rounded IconShaka01DuotoneRounded"
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

export const IconShaka01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-01-twotone-rounded IconShaka01TwotoneRounded"
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

export const IconShaka01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-01-solid-rounded IconShaka01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShaka01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-01-bulk-rounded IconShaka01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShaka01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-01-stroke-sharp IconShaka01StrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShaka01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-01-solid-sharp IconShaka01SolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShaka01: TheIconSelfPack = {
  name: 'Shaka01',
  StrokeRounded: IconShaka01StrokeRounded,
  DuotoneRounded: IconShaka01DuotoneRounded,
  TwotoneRounded: IconShaka01TwotoneRounded,
  SolidRounded: IconShaka01SolidRounded,
  BulkRounded: IconShaka01BulkRounded,
  StrokeSharp: IconShaka01StrokeSharp,
  SolidSharp: IconShaka01SolidSharp,
};