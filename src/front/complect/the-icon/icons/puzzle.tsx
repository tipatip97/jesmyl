import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.828 6.00096C12.9388 5.68791 12.999 5.35099 12.999 5C12.999 3.34315 11.6559 2 9.99904 2C8.34219 2 6.99904 3.34315 6.99904 5C6.99904 5.35099 7.05932 5.68791 7.17008 6.00096C4.88532 6.0093 3.66601 6.09039 2.87772 6.87868C2.08951 7.66689 2.00836 8.88603 2 11.1704C2.31251 11.06 2.64876 11 2.99904 11C4.6559 11 5.99904 12.3431 5.99904 14C5.99904 15.6569 4.6559 17 2.99904 17C2.64876 17 2.31251 16.94 2 16.8296C2.00836 19.114 2.08951 20.3331 2.87772 21.1213C3.66593 21.9095 4.88508 21.9907 7.16941 21.999C7.05908 21.6865 6.99904 21.3503 6.99904 21C6.99904 19.3431 8.34219 18 9.99904 18C11.6559 18 12.999 19.3431 12.999 21C12.999 21.3503 12.939 21.6865 12.8287 21.999C15.113 21.9907 16.3322 21.9095 17.1204 21.1213C17.9086 20.333 17.9897 19.1137 17.9981 16.829C18.3111 16.9397 18.648 17 18.999 17C20.6559 17 21.999 15.6569 21.999 14C21.999 12.3431 20.6559 11 18.999 11C18.648 11 18.3111 11.0603 17.9981 11.171C17.9897 8.88627 17.9086 7.66697 17.1204 6.87868C16.3321 6.09039 15.1128 6.0093 12.828 6.00096Z',
  d2: 'M9.99904 2C8.34219 2 6.99904 3.34315 6.99904 5C6.99904 5.35099 7.05932 5.68791 7.17008 6.00096C4.88532 6.0093 3.66601 6.09039 2.87772 6.87868C2.08951 7.66689 2.00836 8.88603 2 11.1704C2.31251 11.06 2.64876 11 2.99904 11C4.6559 11 5.99904 12.3431 5.99904 14C5.99904 15.6569 4.6559 17 2.99904 17C2.64876 17 2.31251 16.94 2 16.8296C2.00836 19.114 2.08951 20.3331 2.87772 21.1213C3.66593 21.9095 4.88508 21.9907 7.16941 21.999C7.05908 21.6865 6.99904 21.3503 6.99904 21C6.99904 19.3431 8.34219 18 9.99904 18',
  d3: 'M6.24904 5C6.24904 2.92893 7.92797 1.25 9.99904 1.25C12.0701 1.25 13.749 2.92893 13.749 5C13.749 5.08751 13.746 5.17439 13.7401 5.26052C14.4775 5.27565 15.1165 5.31322 15.6639 5.40844C16.4468 5.54462 17.1118 5.80948 17.6507 6.34835C18.1896 6.88722 18.4544 7.55227 18.5906 8.33514C18.6858 8.88251 18.7234 9.52155 18.7385 10.2589C18.8247 10.253 18.9115 10.25 18.999 10.25C21.0701 10.25 22.749 11.9289 22.749 14C22.749 16.0711 21.0701 17.75 18.999 17.75C18.9115 17.75 18.8247 17.747 18.7385 17.7411C18.7234 18.4785 18.6858 19.1175 18.5906 19.6649C18.4544 20.4477 18.1896 21.1128 17.6507 21.6517C17.1119 22.1905 16.4469 22.4553 15.6641 22.5915C14.9031 22.7239 13.9648 22.7449 12.8314 22.749C12.5875 22.7499 12.3584 22.6322 12.2172 22.4333C12.076 22.2344 12.0403 21.9793 12.1215 21.7493C12.2039 21.5159 12.249 21.264 12.249 21C12.249 19.7574 11.2417 18.75 9.99904 18.75C8.7564 18.75 7.74904 19.7574 7.74904 21C7.74904 21.264 7.79421 21.5159 7.87663 21.7493C7.95783 21.9793 7.92212 22.2344 7.7809 22.4333C7.63967 22.6322 7.41057 22.7499 7.16667 22.749C6.03327 22.7449 5.095 22.7239 4.33395 22.5915C3.55118 22.4553 2.88621 22.1905 2.34739 21.6517C1.80857 21.1128 1.54372 20.4479 1.40752 19.6651C1.2751 18.904 1.25415 17.9658 1.25001 16.8324C1.24911 16.5885 1.36688 16.3594 1.56574 16.2181C1.76459 16.0769 2.0197 16.0412 2.24969 16.1224C2.48311 16.2048 2.73499 16.25 2.99904 16.25C4.24168 16.25 5.24904 15.2426 5.24904 14C5.24904 12.7574 4.24168 11.75 2.99904 11.75C2.73499 11.75 2.48311 11.7952 2.24969 11.8776C2.0197 11.9588 1.76459 11.9231 1.56574 11.7819C1.36688 11.6406 1.24911 11.4115 1.25001 11.1676C1.25415 10.0342 1.2751 9.09595 1.40752 8.33491C1.54372 7.55214 1.80857 6.88717 2.34739 6.34835C2.88626 5.80948 3.55131 5.54462 4.33418 5.40844C4.88155 5.31322 5.52059 5.27565 6.25798 5.26052C6.25205 5.17439 6.24904 5.08751 6.24904 5Z',
  d4: 'M6.24904 5C6.24904 2.92893 7.92797 1.25 9.99904 1.25V18.75C8.7564 18.75 7.74904 19.7574 7.74904 21C7.74904 21.264 7.79421 21.5159 7.87663 21.7493C7.95783 21.9793 7.92212 22.2344 7.7809 22.4333C7.63967 22.6322 7.41057 22.7499 7.16667 22.749C6.03327 22.7449 5.095 22.7239 4.33395 22.5915C3.55118 22.4553 2.88621 22.1905 2.34739 21.6517C1.80857 21.1128 1.54372 20.4479 1.40752 19.6651C1.2751 18.904 1.25415 17.9658 1.25001 16.8324C1.24911 16.5885 1.36688 16.3594 1.56574 16.2181C1.76459 16.0769 2.0197 16.0412 2.24969 16.1224C2.48311 16.2048 2.73499 16.25 2.99904 16.25C4.24168 16.25 5.24904 15.2426 5.24904 14C5.24904 12.7574 4.24168 11.75 2.99904 11.75C2.73499 11.75 2.48311 11.7952 2.24969 11.8776C2.0197 11.9588 1.76459 11.9231 1.56574 11.7819C1.36688 11.6406 1.24911 11.4115 1.25001 11.1676C1.25415 10.0342 1.2751 9.09595 1.40752 8.33491C1.54372 7.55214 1.80857 6.88717 2.34739 6.34835C2.88626 5.80948 3.55131 5.54462 4.33418 5.40844C4.88155 5.31322 5.52059 5.27565 6.25798 5.26052C6.25205 5.17439 6.24904 5.08751 6.24904 5Z',
  d5: 'M12.999 5C12.999 5.35099 12.9388 5.68791 12.828 6.00096L17.9981 6.00096V11.171C18.3111 11.0603 18.6481 11 18.999 11C20.6559 11 21.999 12.3431 21.999 14C21.999 15.6569 20.6559 17 18.999 17C18.6481 17 18.3111 16.9397 17.9981 16.829V21.999H12.8287C12.939 21.6865 12.999 21.3503 12.999 21C12.999 19.3431 11.6559 18 9.99904 18C8.34219 18 6.99904 19.3431 6.99904 21C6.99904 21.3503 7.05908 21.6865 7.16941 21.999H2.00024L2 16.8296C2.31251 16.94 2.64876 17 2.99904 17C4.6559 17 5.99904 15.6569 5.99904 14C5.99904 12.3431 4.6559 11 2.99904 11C2.64876 11 2.31251 11.06 2 11.1704L2.00058 6.00096H7.17008C7.05932 5.68791 6.99904 5.35099 6.99904 5C6.99904 3.34315 8.34219 2 9.99904 2C11.6559 2 12.999 3.34315 12.999 5Z',
  d6: 'M6.24953 5.00049C6.24953 2.92942 7.92846 1.25049 9.99953 1.25049C12.0706 1.25049 13.7495 2.92942 13.7495 5.00049C13.7495 5.08476 13.7467 5.16845 13.7412 5.25145L18.7486 5.25144V10.2588C18.8316 10.2533 18.9153 10.2505 18.9995 10.2505C21.0706 10.2505 22.7495 11.9294 22.7495 14.0005C22.7495 16.0716 21.0706 17.7505 18.9995 17.7505C18.9153 17.7505 18.8316 17.7477 18.7486 17.7422V22.7495H11.769L12.1219 21.7498C12.2044 21.5164 12.2495 21.2645 12.2495 21.0005C12.2495 19.7578 11.2422 18.7505 9.99953 18.7505C8.75688 18.7505 7.74953 19.7578 7.74953 21.0005C7.74953 21.2645 7.7947 21.5164 7.87711 21.7498L8.23007 22.7495H1.25076L1.25044 15.7699L2.25018 16.1229C2.4836 16.2053 2.73548 16.2505 2.99953 16.2505C4.24217 16.2505 5.24953 15.2431 5.24953 14.0005C5.24953 12.7578 4.24217 11.7505 2.99953 11.7505C2.73548 11.7505 2.4836 11.7957 2.25018 11.8781L1.25037 12.2311L1.25115 5.25144H6.25782C6.25232 5.16845 6.24953 5.08476 6.24953 5.00049Z',
} as const;

export const IconPuzzleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="puzzle-stroke-rounded IconPuzzleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPuzzleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="puzzle-duotone-rounded IconPuzzleDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPuzzleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="puzzle-twotone-rounded IconPuzzleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPuzzleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="puzzle-solid-rounded IconPuzzleSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPuzzleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="puzzle-bulk-rounded IconPuzzleBulkRounded"
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

export const IconPuzzleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="puzzle-stroke-sharp IconPuzzleStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPuzzleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="puzzle-solid-sharp IconPuzzleSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPuzzle: TheIconSelfPack = {
  name: 'Puzzle',
  StrokeRounded: IconPuzzleStrokeRounded,
  DuotoneRounded: IconPuzzleDuotoneRounded,
  TwotoneRounded: IconPuzzleTwotoneRounded,
  SolidRounded: IconPuzzleSolidRounded,
  BulkRounded: IconPuzzleBulkRounded,
  StrokeSharp: IconPuzzleStrokeSharp,
  SolidSharp: IconPuzzleSolidSharp,
};