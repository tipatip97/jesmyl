import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.6667 14L7.33333 14C5.14718 14 4.0541 14 3.27927 14.5425C2.99261 14.7433 2.74327 14.9926 2.54254 15.2793C2 16.0541 2 17.1472 2 19.3333C2 20.4264 2 20.9729 2.27127 21.3604C2.37164 21.5037 2.4963 21.6284 2.63963 21.7287C3.02705 22 3.57359 22 4.66667 22L19.3333 22C20.4264 22 20.9729 22 21.3604 21.7287C21.5037 21.6284 21.6284 21.5037 21.7287 21.3604C22 20.9729 22 20.4264 22 19.3333C22 17.1472 22 16.0541 21.4575 15.2793C21.2567 14.9926 21.0074 14.7433 20.7207 14.5425C19.9459 14 18.8528 14 16.6667 14Z',
  d2: 'M20 14L19.593 10.3374C19.311 7.79863 19.1699 6.52923 18.3156 5.76462C17.4614 5 16.1842 5 13.6297 5L10.3703 5C7.81585 5 6.53864 5 5.68436 5.76462C4.83009 6.52923 4.68904 7.79862 4.40695 10.3374L4 14',
  d3: 'M11.5 2H14M16.5 2H14M14 2V5',
  d4: 'M9 17.5L9.99615 18.1641C10.3247 18.3831 10.7107 18.5 11.1056 18.5H12.8944C13.2893 18.5 13.6753 18.3831 14.0038 18.1641L15 17.5',
  d5: 'M8 8H10',
  d6: 'M11.5 1C10.9477 1 10.5 1.44772 10.5 2C10.5 2.55228 10.9477 3 11.5 3H13V4.25H13.6807C14.1547 4.24999 14.5939 4.24999 15 4.25575V3H16.5C17.0523 3 17.5 2.55228 17.5 2C17.5 1.44772 17.0523 1 16.5 1H11.5Z',
  d7: 'M7.29131 13.25H16.7087H16.7087C17.7661 13.25 18.6188 13.25 19.3016 13.322C20.0068 13.3963 20.6166 13.5541 21.1509 13.9282C21.5092 14.1791 21.8209 14.4908 22.0718 14.8491C22.4459 15.3834 22.6037 15.9933 22.6781 16.6984C22.75 17.3812 22.75 18.2339 22.75 19.2913V19.3712C22.75 19.8854 22.75 20.3288 22.712 20.6901C22.6715 21.0736 22.5816 21.45 22.3431 21.7905C22.1926 22.0055 22.0056 22.1925 21.7906 22.3431C21.45 22.5816 21.0736 22.6715 20.6901 22.712C20.3288 22.75 19.8854 22.75 19.3712 22.75L4.62885 22.75C4.11463 22.75 3.67122 22.75 3.30991 22.712C2.92642 22.6715 2.55002 22.5816 2.20946 22.3431C1.99445 22.1925 1.80745 22.0055 1.65691 21.7905C1.41844 21.45 1.32847 21.0736 1.28804 20.6901C1.24996 20.3288 1.24998 19.8854 1.25 19.3712L1.25 19.2913C1.24999 18.2339 1.24998 17.3812 1.32195 16.6984C1.39628 15.9933 1.55408 15.3834 1.92818 14.8491C2.17909 14.4908 2.49076 14.1791 2.84909 13.9282C3.38337 13.5541 3.99325 13.3963 4.69844 13.322C5.38124 13.25 6.23392 13.25 7.29129 13.25H7.29131ZM9.41611 16.876C9.07146 16.6463 8.60581 16.7394 8.37604 17.0841C8.14628 17.4287 8.23941 17.8944 8.58406 18.1241L9.58021 18.7882C10.0319 19.0894 10.5627 19.2501 11.1056 19.2501H12.8945C13.4374 19.2501 13.9682 19.0894 14.42 18.7882L15.4161 18.1241C15.7608 17.8944 15.8539 17.4287 15.6241 17.0841C15.3944 16.7394 14.9287 16.6463 14.5841 16.876L13.5879 17.5401C13.3826 17.677 13.1413 17.7501 12.8945 17.7501H11.1056C10.8589 17.7501 10.6176 17.677 10.4123 17.5401L9.41611 16.876Z',
  d8: 'M13.6807 4.25H10.3186H10.3186C9.08504 4.24998 8.08721 4.24997 7.29406 4.35167C6.46876 4.45749 5.76755 4.68334 5.18386 5.20577C4.60017 5.7282 4.29826 6.40018 4.10195 7.20875C3.91328 7.98583 3.8031 8.97753 3.66689 10.2036L3.52954 11.4397C3.50062 11.7 3.48616 11.8302 3.55859 11.8986C3.63102 11.9671 3.76648 11.9442 4.0374 11.8984L4.0374 11.8984C4.20717 11.8697 4.37534 11.8477 4.54084 11.8302C5.30281 11.7499 6.22208 11.75 7.2234 11.75H16.7759C17.7772 11.75 18.6965 11.7499 19.4584 11.8302C19.624 11.8477 19.7922 11.8697 19.962 11.8984C20.2329 11.9442 20.3684 11.9671 20.4408 11.8986C20.5132 11.8302 20.4988 11.7001 20.4698 11.4398L20.3325 10.2036C20.1963 8.97755 20.0861 7.98584 19.8974 7.20875C19.7011 6.40018 19.3992 5.7282 18.8155 5.20577C18.2318 4.68334 17.5306 4.45749 16.7053 4.35167C15.9122 4.24997 14.9143 4.24998 13.6807 4.25H13.6807ZM8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75H10C10.4142 8.75 10.75 8.41421 10.75 8C10.75 7.58579 10.4142 7.25 10 7.25H8Z',
  d9: 'M10.3186 4.25H13.6807C14.9143 4.24998 15.9122 4.24997 16.7053 4.35167C17.5306 4.45749 18.2318 4.68334 18.8155 5.20577C19.3992 5.7282 19.7011 6.40018 19.8974 7.20875C20.0861 7.98584 20.1963 8.97755 20.3325 10.2036L20.4698 11.4398C20.4988 11.7001 20.5132 11.8302 20.4408 11.8986C20.3684 11.9671 20.2329 11.9442 19.962 11.8984C19.7922 11.8697 19.624 11.8477 19.4584 11.8302C18.6965 11.7499 17.7772 11.75 16.7759 11.75H7.2234C6.22208 11.75 5.30281 11.7499 4.54084 11.8302C4.37534 11.8477 4.20717 11.8697 4.0374 11.8984C3.76648 11.9442 3.63102 11.9671 3.55859 11.8986C3.48616 11.8302 3.50062 11.7 3.52954 11.4397L3.66689 10.2036C3.8031 8.97753 3.91328 7.98583 4.10195 7.20875C4.29826 6.40018 4.60017 5.7282 5.18386 5.20577C5.76755 4.68334 6.46876 4.45749 7.29406 4.35167C8.08722 4.24997 9.08504 4.24998 10.3186 4.25Z',
  d10: 'M7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H10C10.4142 7.25 10.75 7.58579 10.75 8C10.75 8.41421 10.4142 8.75 10 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8Z',
  d11: 'M21 15H3V22H21V15Z',
  d12: 'M19 15L18 6H6L5 15',
  d13: 'M11 2H14M17 2H14M14 2V6',
  d14: 'M9 18.5H15',
  d15: 'M8 9.5H11',
  d16: 'M13 3.25H11V1.25H17V3.25H15V6.25H13V3.25Z',
  d17: 'M3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V15C21.75 14.5858 21.4142 14.25 21 14.25H3ZM9 19.5H15V17.5H9V19.5Z',
  d18: 'M5.32943 5.25H18.672L19.5053 12.75H4.49609L5.32943 5.25ZM8 9.25H11V7.75H8V9.25Z',
} as const;

export const IconCashierStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cashier-stroke-rounded IconCashierStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCashierDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cashier-duotone-rounded IconCashierDuotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCashierTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cashier-twotone-rounded IconCashierTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCashierSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cashier-solid-rounded IconCashierSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconCashierBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cashier-bulk-rounded IconCashierBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconCashierStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cashier-stroke-sharp IconCashierStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCashierSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cashier-solid-sharp IconCashierSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCashier: TheIconSelfPack = {
  name: 'Cashier',
  StrokeRounded: IconCashierStrokeRounded,
  DuotoneRounded: IconCashierDuotoneRounded,
  TwotoneRounded: IconCashierTwotoneRounded,
  SolidRounded: IconCashierSolidRounded,
  BulkRounded: IconCashierBulkRounded,
  StrokeSharp: IconCashierStrokeSharp,
  SolidSharp: IconCashierSolidSharp,
};