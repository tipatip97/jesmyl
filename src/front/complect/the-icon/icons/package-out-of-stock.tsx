import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C11.1818 22 10.4002 21.6708 8.83693 21.0123C4.94564 19.3734 3 18.5539 3 17.1754V7.54234M12 22C12.8182 22 13.5998 21.6708 15.1631 21.0123C19.0544 19.3734 21 18.5539 21 17.1754V7.54234M12 22V12.0292M21 7.54234C21 8.15478 20.1984 8.54152 18.5953 9.315L15.6741 10.7244C13.8712 11.5943 12.9697 12.0292 12 12.0292M21 7.54234C21 6.9299 20.1984 6.54316 18.5953 5.76969L17 5M3 7.54234C3 8.15478 3.80157 8.54152 5.40472 9.315L8.32592 10.7244C10.1288 11.5943 11.0303 12.0292 12 12.0292M3 7.54234C3 6.9299 3.80157 6.54317 5.40472 5.76969L7 5M6 13.0263L8 14.0234',
  d2: 'M10 2L12 4M12 4L14 6M12 4L10 6M12 4L14 2',
  d3: 'M21 17.4839C21 18.7742 19.0544 19.5413 15.1631 21.0755C13.5998 21.6918 12.8182 22 12 22C11.1818 22 10.4002 21.6918 8.83693 21.0755C4.94564 19.5413 3 18.7742 3 17.4839L3 8L12 12.0645L21 8V17.4839Z',
  d4: 'M12 22C11.1818 22 10.4002 21.6708 8.83693 21.0123C4.94564 19.3734 3 18.5539 3 17.1754V7.54234M12 22C12.8182 22 13.5998 21.6708 15.1631 21.0123C19.0544 19.3734 21 18.5539 21 17.1754V7.54234M12 22V12.0292M21 7.54234C21 8.15478 20.1984 8.54152 18.5953 9.315L15.6741 10.7244C13.8712 11.5943 12.9697 12.0292 12 12.0292M21 7.54234C21 6.9299 20.1984 6.54316 18.5953 5.76969L17 5M3 7.54234C3 8.15478 3.80157 8.54152 5.40472 9.315L8.32592 10.7244C10.1288 11.5943 11.0303 12.0292 12 12.0292M3 7.54234C3 6.9299 3.80157 6.54317 5.40472 5.76969L7 5',
  d5: 'M6 13.0264L8 14.0234',
  d6: 'M4.35579 7.52856C4.31838 7.55155 4.28741 7.57182 4.26193 7.58941C4.21565 7.62135 4.18851 7.67351 4.1746 7.72799C4.14539 7.84241 4.17534 7.97143 4.27766 8.03037C4.61737 8.22609 5.08791 8.4544 5.73062 8.76449L8.65182 10.1739C10.5195 11.075 11.2418 11.4042 12 11.4042C12.7582 11.4042 13.4806 11.075 15.3482 10.1739L18.2694 8.76449C18.9121 8.4544 19.3826 8.22608 19.7223 8.03037C19.8247 7.97142 19.8546 7.84241 19.8254 7.728C19.8115 7.67352 19.7844 7.62135 19.7381 7.58941C19.7126 7.57182 19.6816 7.55155 19.6442 7.52856C19.3259 7.33298 18.8178 7.10687 18.0067 6.74992L16.4513 6.06539C15.9663 5.85195 15.7629 5.3203 15.9969 4.87792C16.2309 4.43554 16.8137 4.24994 17.2987 4.46338L18.9202 5.17701C19.645 5.49591 20.2839 5.77705 20.7335 6.05323C21.1829 6.32933 21.75 6.78357 21.75 7.52545L21.75 17.3004C21.75 18.4199 20.9311 19.1633 19.9258 19.7648C18.9075 20.3741 17.1986 21.0938 15.3055 21.8912L15.3055 21.8912C13.8861 22.4895 12.9716 22.875 12 22.875C11.0284 22.875 10.1139 22.4895 8.69452 21.8912C6.80139 21.0938 5.0925 20.3741 4.07416 19.7648C3.06888 19.1633 2.25 18.4199 2.25 17.3004L2.25 7.52545C2.25 6.78357 2.81708 6.32932 3.2665 6.05323C3.71606 5.77705 4.42114 5.46681 5.14592 5.14791L6.70132 4.46338C7.1863 4.24994 7.76914 4.43554 8.00313 4.87792C8.23713 5.3203 8.03366 5.85195 7.54868 6.06539L5.99328 6.74992C5.18221 7.10687 4.67415 7.33298 4.35579 7.52856ZM6.33479 12.4813C5.96409 12.2965 5.51376 12.4472 5.32895 12.8179C5.14414 13.1886 5.29484 13.6389 5.66554 13.8237L7.66554 14.8208C8.03624 15.0056 8.48657 14.8549 8.67138 14.4842C8.85619 14.1135 8.70549 13.6632 8.33479 13.4784L6.33479 12.4813Z',
  d7: 'M14.7071 1.41789C15.0976 1.80842 15.0976 2.44158 14.7071 2.83211L13.4142 4.125L14.7071 5.41789C15.0976 5.80842 15.0976 6.44158 14.7071 6.83211C14.3166 7.22263 13.6834 7.22263 13.2929 6.83211L12 5.53921L10.7071 6.83211C10.3166 7.22263 9.68342 7.22263 9.29289 6.83211C8.90237 6.44158 8.90237 5.80842 9.29289 5.41789L10.5858 4.125L9.29289 2.83211C8.90237 2.44158 8.90237 1.80842 9.29289 1.41789C9.68342 1.02737 10.3166 1.02737 10.7071 1.41789L12 2.71079L13.2929 1.41789C13.6834 1.02737 14.3166 1.02737 14.7071 1.41789Z',
  d8: 'M4.26193 7.58935C4.28741 7.57175 4.31838 7.55148 4.35579 7.5285C4.67415 7.33292 5.18221 7.10681 5.99328 6.74986L7.54868 6.06533C8.03366 5.85189 8.23713 5.32024 8.00313 4.87786C7.76914 4.43547 7.1863 4.24988 6.70132 4.46332L5.14592 5.14785C4.42114 5.46675 3.71606 5.77699 3.2665 6.05317C2.81708 6.32926 2.25 6.78351 2.25 7.52539V17.3003C2.25 18.4198 3.06888 19.1632 4.07416 19.7647C5.0925 20.374 6.80139 21.0938 8.69452 21.8911C10.1139 22.4894 11.0284 22.8749 12 22.8749C12.9716 22.8749 13.8861 22.4894 15.3055 21.8911C17.1986 21.0938 18.9075 20.374 19.9258 19.7647C20.9311 19.1632 21.75 18.4198 21.75 17.3003V7.52539C21.75 6.78351 21.1829 6.32927 20.7335 6.05317C20.2839 5.77699 19.645 5.49585 18.9202 5.17695L17.2987 4.46332C16.8137 4.24988 16.2309 4.43547 15.9969 4.87786C15.7629 5.32024 15.9663 5.85189 16.4513 6.06533L18.0067 6.74986C18.8178 7.10681 19.3259 7.33292 19.6442 7.5285C19.6816 7.55149 19.7126 7.57176 19.7381 7.58935C19.7844 7.62129 19.8115 7.67346 19.8254 7.72794C19.8546 7.84235 19.8247 7.97136 19.7223 8.03031C19.3826 8.22602 18.9121 8.45434 18.2694 8.76443L15.3482 10.1738C13.4806 11.0749 12.7582 11.4041 12 11.4041C11.2418 11.4041 10.5195 11.0749 8.65182 10.1738L5.73062 8.76443C5.08791 8.45434 4.61737 8.22602 4.27766 8.03031C4.17534 7.97136 4.14539 7.84235 4.1746 7.72793C4.18851 7.67345 4.21565 7.62129 4.26193 7.58935Z',
  d9: 'M5.32895 12.8179C5.51376 12.4472 5.96409 12.2965 6.33479 12.4813L8.33479 13.4784C8.70549 13.6632 8.85619 14.1135 8.67138 14.4842C8.48657 14.8549 8.03624 15.0056 7.66554 14.8208L5.66554 13.8237C5.29484 13.6389 5.14414 13.1886 5.32895 12.8179Z',
  d10: 'M16.5 6L21 8L12 12L3 8L7.5 6',
  d11: 'M6 13.5L8 14.5',
  d12: 'M3 8V17.9891L11.9713 21.9912C11.9974 22.0029 12.0272 22.0029 12.0533 21.9912L21 18.0066V8.01497M12.0123 12.0375V21.4894',
  d13: 'M2.25 7.50011V17.9874L11.6954 22.1854C11.8893 22.2715 12.1107 22.2715 12.3046 22.1854L21.75 17.9874V7.5C21.75 7.20361 21.5754 6.93483 21.3046 6.81445L16.8046 4.81445L16.1954 6.18517L19.1533 7.49981L12 10.6791L4.84666 7.49981L7.8046 6.18517L7.1954 4.81445L2.6954 6.81445C2.42455 6.93483 2.25 7.20372 2.25 7.50011ZM5.83594 13.5062L8.16512 14.6707V12.9937L5.83594 11.8291V13.5062Z',
  d14: 'M10.9384 4.28033L9.46875 5.75L10.5294 6.81066L11.9991 5.34099L13.4688 6.81066L14.5294 5.75L13.0597 4.28033L14.5294 2.81066L13.4688 1.75L11.9991 3.21967L10.5294 1.75L9.46875 2.81066L10.9384 4.28033Z',
} as const;

export const IconPackageOutOfStockStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-out-of-stock-stroke-rounded IconPackageOutOfStockStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPackageOutOfStockDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-out-of-stock-duotone-rounded IconPackageOutOfStockDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPackageOutOfStockTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-out-of-stock-twotone-rounded IconPackageOutOfStockTwotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageOutOfStockSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-out-of-stock-solid-rounded IconPackageOutOfStockSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconPackageOutOfStockBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-out-of-stock-bulk-rounded IconPackageOutOfStockBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageOutOfStockStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-out-of-stock-stroke-sharp IconPackageOutOfStockStrokeSharp"
    >
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
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageOutOfStockSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-out-of-stock-solid-sharp IconPackageOutOfStockSolidSharp"
    >
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

export const iconPackOfPackageOutOfStock: TheIconSelfPack = {
  name: 'PackageOutOfStock',
  StrokeRounded: IconPackageOutOfStockStrokeRounded,
  DuotoneRounded: IconPackageOutOfStockDuotoneRounded,
  TwotoneRounded: IconPackageOutOfStockTwotoneRounded,
  SolidRounded: IconPackageOutOfStockSolidRounded,
  BulkRounded: IconPackageOutOfStockBulkRounded,
  StrokeSharp: IconPackageOutOfStockStrokeSharp,
  SolidSharp: IconPackageOutOfStockSolidSharp,
};