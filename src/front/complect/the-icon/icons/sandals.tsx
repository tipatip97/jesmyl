import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.5 18.3002V5.81444C10.5 4.22713 10.0436 2.92085 8.11708 3.00374C6.50864 3.07294 5.00141 3.89684 3.80452 4.89375C1.66292 6.67753 1.72577 8.75973 2.46872 11.2023L4.85288 19.0408C5.20558 20.2004 6.33546 21 7.62123 21C9.21113 21 10.5 19.7913 10.5 18.3002Z',
  d2: 'M13.5 18.3002V5.81444C13.5 4.22713 13.9564 2.92085 15.8829 3.00374C17.4914 3.07294 18.9986 3.89684 20.1955 4.89375C22.3371 6.67753 22.2742 8.75973 21.5313 11.2023L19.1471 19.0408C18.7944 20.2004 17.6645 21 16.3788 21C14.7889 21 13.5 19.7913 13.5 18.3002Z',
  d3: 'M3 13C3 12 3.7 9.3 6.5 8.5M6.5 8.5C9 9 10 10 10.5 10.5M6.5 8.5V7',
  d4: 'M21 13C21 12 20.3 9.3 17.5 8.5M17.5 8.5C15 9 14 10 13.5 10.5M17.5 8.5V7',
  d5: 'M4.85275 19.0408C5.20544 20.2004 6.33532 21 7.62109 21C9.21099 21 10.4999 19.7913 10.4999 18.3002V10.5C9.69986 8.9 7.49986 8.5 6.49986 8.5C4.09986 9.3 3.07547 11.5 2.86328 12.5L4.85275 19.0408Z',
  d6: 'M19.1491 19.0408C18.7964 20.2004 17.6665 21 16.3807 21C14.7908 21 13.5019 19.7913 13.5019 18.3002V10.5C14.1686 9.83333 15.9019 8.5 17.5019 8.5C18.1673 8.58901 19.8484 9.44033 21.25 12.1335L19.1491 19.0408Z',
  d7: 'M11.2499 5.81437C11.2499 4.98082 11.1367 4.065 10.6483 3.35689C10.1136 2.58158 9.2412 2.2046 8.0848 2.25436C6.24807 2.33338 4.58736 3.2655 3.32447 4.31739C2.12656 5.31515 1.50257 6.44112 1.31335 7.68841C1.12915 8.90255 1.36831 10.1619 1.75113 11.4205C1.82642 11.668 2.21878 11.666 2.3177 11.4269C2.47018 11.0584 2.66817 10.676 2.913 10.3039C3.45553 9.47935 4.25837 8.65806 5.37592 8.12561C5.56418 8.03591 5.65831 7.99107 5.70462 7.9177C5.75094 7.84432 5.75094 7.74755 5.75094 7.554V7C5.75094 6.58579 6.08673 6.25 6.50094 6.25C6.91515 6.25 7.25094 6.58579 7.25094 7V7.4333C7.25094 7.65509 7.25094 7.76599 7.31041 7.84577C7.36988 7.92555 7.48059 7.95855 7.70202 8.02456C9.6263 8.59819 10.5261 9.46502 11.0151 9.9535C11.1062 10.0342 11.2499 9.96949 11.2499 9.84776V5.81437ZM11.2499 12.435C11.2499 12.302 11.2499 12.2355 11.2235 12.1768C11.1971 12.1181 11.1473 12.074 11.0477 11.9858L10.0038 11.0615C9.9924 11.0515 9.98135 11.0411 9.97061 11.0303L9.9534 11.0131C9.53593 10.5953 8.72238 9.78117 6.69643 9.30947C6.61755 9.2911 6.57812 9.28192 6.53412 9.2847C6.49013 9.28748 6.45415 9.30081 6.38218 9.32747C5.36531 9.70427 4.6467 10.3979 4.16609 11.1284C3.62009 11.9583 3.42815 12.7626 3.42815 13.0823C3.42815 13.1013 3.42743 13.1204 3.42598 13.1393L3.2037 16.0556C3.19943 16.1117 3.1973 16.1397 3.20035 16.1674C3.20341 16.1952 3.21158 16.2221 3.22793 16.2758L4.13529 19.259C4.59187 20.7601 6.03289 21.7499 7.62118 21.7499C9.57921 21.7499 11.2499 20.25 11.2499 18.3002V12.435Z',
  d8: 'M12.7501 5.81437C12.7501 4.98082 12.8633 4.065 13.3517 3.35689C13.8864 2.58158 14.7588 2.2046 15.9152 2.25436C17.7519 2.33338 19.4126 3.2655 20.6755 4.31739C21.8734 5.31515 22.4974 6.44112 22.6867 7.68841C22.8708 8.90255 22.6317 10.1619 22.2489 11.4205C22.1736 11.668 21.7812 11.666 21.6823 11.4269C21.5298 11.0584 21.3318 10.676 21.087 10.3039C20.5445 9.47935 19.7416 8.65806 18.6241 8.12561C18.4358 8.03591 18.3417 7.99107 18.2954 7.9177C18.2491 7.84432 18.2491 7.74755 18.2491 7.554V7C18.2491 6.58579 17.9133 6.25 17.4991 6.25C17.0848 6.25 16.7491 6.58579 16.7491 7V7.4333C16.7491 7.65509 16.7491 7.76599 16.6896 7.84577C16.6301 7.92555 16.5194 7.95855 16.298 8.02456C14.3737 8.59819 13.4739 9.46502 12.9849 9.9535C12.8938 10.0342 12.7501 9.96949 12.7501 9.84776V5.81437ZM12.7501 12.435C12.7501 12.302 12.7501 12.2355 12.7765 12.1768C12.8029 12.1181 12.8527 12.074 12.9523 11.9858L13.9962 11.0615C14.0076 11.0515 14.0187 11.0411 14.0294 11.0303L14.0466 11.0131C14.4641 10.5953 15.2776 9.78117 17.3036 9.30947C17.3824 9.2911 17.4219 9.28192 17.4659 9.2847C17.5099 9.28748 17.5459 9.30081 17.6178 9.32747C18.6347 9.70427 19.3533 10.3979 19.8339 11.1284C20.3799 11.9583 20.5718 12.7626 20.5718 13.0823C20.5718 13.1013 20.5726 13.1204 20.574 13.1393L20.7963 16.0556C20.8006 16.1117 20.8027 16.1397 20.7996 16.1674C20.7966 16.1952 20.7884 16.2221 20.7721 16.2758L19.8647 19.259C19.4081 20.7601 17.9671 21.7499 16.3788 21.7499C14.4208 21.7499 12.7501 20.25 12.7501 18.3002V12.435Z',
  d9: 'M10.6483 3.35689C11.1367 4.065 11.2499 4.98082 11.2499 5.81437V18.3002C11.2499 20.25 9.57921 21.7499 7.62118 21.7499C6.03289 21.7499 4.59187 20.7601 4.13529 19.259L1.75113 11.4205C1.36831 10.1619 1.12915 8.90255 1.31335 7.68841C1.50257 6.44112 2.12656 5.31515 3.32447 4.31739C4.58736 3.2655 6.24807 2.33338 8.0848 2.25436C9.2412 2.2046 10.1136 2.58158 10.6483 3.35689Z',
  d10: 'M3.19347 16.1629L2.0249 12.321C2.1657 11.7149 2.45826 10.9919 2.91094 10.3039C3.51235 9.38986 4.43363 8.47985 5.74888 7.96283V7C5.74888 6.58579 6.08466 6.25 6.49888 6.25C6.91309 6.25 7.24888 6.58579 7.24888 7V7.90058C9.48679 8.46587 10.4873 9.42834 11.013 9.9535L11.2498 10.1632V12.1666L10.0017 11.0615C9.99034 11.0515 9.97928 11.0411 9.96855 11.0303L9.95133 11.0131C9.52305 10.5845 8.6779 9.73872 6.53446 9.27351C5.43549 9.63519 4.6686 10.3615 4.16403 11.1284C3.61803 11.9583 3.42609 12.7626 3.42609 13.0823C3.42609 13.1013 3.42536 13.1204 3.42392 13.1393L3.19347 16.1629Z',
  d11: 'M13.3517 3.35689C12.8633 4.065 12.7501 4.98082 12.7501 5.81437V18.3002C12.7501 20.25 14.4208 21.7499 16.3788 21.7499C17.9671 21.7499 19.4081 20.7601 19.8647 19.259L22.2489 11.4205C22.6317 10.1619 22.8708 8.90255 22.6867 7.68841C22.4974 6.44112 21.8734 5.31515 20.6755 4.31739C19.4126 3.2655 17.7519 2.33338 15.9152 2.25436C14.7588 2.2046 13.8864 2.58158 13.3517 3.35689Z',
  d12: 'M21.9739 12.3245C21.8334 11.7177 21.5406 10.9933 21.087 10.3039C20.4856 9.38986 19.5643 8.47985 18.2491 7.96283V7C18.2491 6.58579 17.9133 6.25 17.4991 6.25C17.0848 6.25 16.7491 6.58579 16.7491 7V7.90058C14.5111 8.46587 13.5107 9.42834 12.9849 9.9535L12.75 10.1615V12.1649L13.9962 11.0615C14.0076 11.0515 14.0187 11.0411 14.0294 11.0303L14.0466 11.0131C14.4749 10.5845 15.32 9.73872 17.4635 9.27351C18.5624 9.63519 19.3293 10.3615 19.8339 11.1284C20.3799 11.9583 20.5718 12.7626 20.5718 13.0823C20.5718 13.1013 20.5726 13.1204 20.574 13.1393L20.8049 16.1679L21.9739 12.3245Z',
  d13: 'M3 13C3 12 3.7 9.3 6.5 8.5M6.5 8.5C9 9 10 10 10.5 10.5M6.5 8.5V6.5',
  d14: 'M21 13C21 12 20.3 9.3 17.5 8.5M17.5 8.5C15 9 14 10 13.5 10.5M17.5 8.5V6.5',
  d15: 'M11.2499 5.81437C11.2499 4.98082 11.1367 4.065 10.6483 3.35689C10.1136 2.58158 9.2412 2.2046 8.0848 2.25436C6.24807 2.33338 4.58736 3.2655 3.32447 4.31739C2.12656 5.31515 1.50257 6.44112 1.31335 7.68841C1.13943 8.83483 1.34295 10.0216 1.68846 11.2099C1.83092 11.0322 1.98185 10.8534 2.14012 10.6758C3.08143 9.61974 4.35847 8.52041 5.75 7.96522V6.49988H7.25V7.9082C8.4278 8.23167 9.63097 8.79801 10.6142 9.34426C10.8362 9.46755 11.0489 9.59097 11.2499 9.71192V5.81437Z',
  d16: 'M11.2499 11.4894C10.8825 11.2409 10.4134 10.9486 9.88577 10.6555C8.84576 10.0777 7.62799 9.52465 6.53459 9.27431C5.38724 9.65934 4.20017 10.619 3.25989 11.6739C2.84522 12.1391 2.49601 12.6035 2.23517 13.0119L4.13529 19.259C4.59187 20.7601 6.03289 21.7499 7.62118 21.7499C9.57921 21.7499 11.2499 20.25 11.2499 18.3002V11.4894Z',
  d17: 'M12.75 5.81437C12.75 4.98082 12.8633 4.065 13.3516 3.35689C13.8863 2.58158 14.7588 2.2046 15.9152 2.25436C17.7519 2.33338 19.4126 3.2655 20.6755 4.31739C21.8734 5.31515 22.4974 6.44112 22.6866 7.68841C22.8605 8.83483 22.657 10.0216 22.3115 11.2099C22.169 11.0322 22.0181 10.8534 21.8598 10.6758C20.9185 9.61974 19.6415 8.52041 18.2499 7.96522V6.49988H16.7499V7.9082C15.5721 8.23167 14.369 8.79801 13.3857 9.34426C13.1638 9.46755 12.951 9.59097 12.75 9.71192V5.81437Z',
  d18: 'M12.75 11.4894V18.3002C12.75 20.25 14.4207 21.7499 16.3788 21.7499C17.9671 21.7499 19.4081 20.7601 19.8647 19.259L21.7648 13.0119C21.5039 12.6035 21.1547 12.1391 20.7401 11.6739C19.7998 10.619 18.6127 9.65934 17.4654 9.27431C16.372 9.52465 15.1542 10.0777 14.1142 10.6555C13.5865 10.9486 13.1175 11.2409 12.75 11.4894Z',
} as const;

export const IconSandalsStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sandals-stroke-rounded IconSandalsStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSandalsDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sandals-duotone-rounded IconSandalsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSandalsTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sandals-twotone-rounded IconSandalsTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSandalsSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sandals-solid-rounded IconSandalsSolidRounded"
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

export const IconSandalsBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sandals-bulk-rounded IconSandalsBulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSandalsStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sandals-stroke-sharp IconSandalsStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconSandalsSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sandals-solid-sharp IconSandalsSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSandals: TheIconSelfPack = {
  name: 'Sandals',
  StrokeRounded: IconSandalsStrokeRounded,
  DuotoneRounded: IconSandalsDuotoneRounded,
  TwotoneRounded: IconSandalsTwotoneRounded,
  SolidRounded: IconSandalsSolidRounded,
  BulkRounded: IconSandalsBulkRounded,
  StrokeSharp: IconSandalsStrokeSharp,
  SolidSharp: IconSandalsSolidSharp,
};