import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.2423 17.5C13.1952 17.8033 13.1528 18.0485 13.1161 18.2442C12.8873 19.4657 11.1552 20.2006 10.228 20.8563C9.67601 21.2466 9.00625 20.782 8.93473 20.1778C8.79838 19.0261 8.54156 16.6864 8.26122 13.2614C8.23604 12.9539 8.08681 12.6761 7.85941 12.5061C5.37096 10.6456 3.59759 8.59915 2.62929 7.44867C2.32955 7.09253 2.23133 6.8319 2.17228 6.3728C1.97006 4.8008 1.86896 4.0148 2.3299 3.5074C2.79085 3 3.60599 3 5.23628 3H16.7677C18.398 3 19.2131 3 19.674 3.5074C19.8976 3.75346 19.9889 4.06504 20.0007 4.5',
  d2: 'M20.8624 7.43922L21.5567 8.13158C22.1441 8.71737 22.1441 9.66711 21.5567 10.2529L17.9192 13.9486C17.6331 14.2339 17.2671 14.4263 16.8693 14.5004L14.6149 14.9884C14.259 15.0655 13.942 14.7503 14.0183 14.3951L14.4981 12.1598C14.5724 11.7631 14.7653 11.3981 15.0515 11.1128L18.7352 7.43921C19.3226 6.85343 20.275 6.85343 20.8624 7.43922Z',
  d3: 'M2.62601 7.44867C3.59527 8.59915 5.37039 10.6456 7.8613 12.5061C8.08893 12.6761 8.2383 12.9539 8.26351 13.2614C8.54413 16.6864 8.8012 19.0261 8.93769 20.1778C9.00928 20.782 9.6797 21.2466 10.2322 20.8563C10.4424 20.7079 10.6938 20.5553 10.9598 20.394C11.8683 19.8428 12.946 19.1891 13.1231 18.2442C13.2651 17.4876 13.4931 15.992 13.7404 13.2614C13.768 12.9567 13.9168 12.6821 14.1426 12.5135C14.2337 12.4455 14.324 12.3772 14.4132 12.3087C14.5262 11.8628 14.6984 11.4446 15.0316 11.1117L18.3427 7.80388C18.6763 7.47055 18.8432 7.30385 19.0168 7.20375C19.2241 7.0842 19.4525 7.01727 19.6834 7.00293C19.7678 6.82048 19.8127 6.62708 19.8454 6.37281C20.0478 4.8008 20.149 4.0148 19.6875 3.5074C19.2262 3 18.4103 3 16.7784 3H5.23558C3.60367 3 2.78773 3 2.32632 3.5074C1.86493 4.0148 1.96613 4.8008 2.16855 6.3728C2.22765 6.8319 2.32597 7.09253 2.62601 7.44867Z',
  d4: 'M13.2495 17.5C13.2023 17.8033 13.1599 18.0485 13.1231 18.2442C12.8941 19.4657 11.1603 20.2006 10.2322 20.8563C9.6797 21.2466 9.00928 20.782 8.93769 20.1778C8.8012 19.0261 8.54413 16.6864 8.26351 13.2614C8.2383 12.9539 8.08893 12.6761 7.8613 12.5061C5.37039 10.6456 3.59527 8.59915 2.62601 7.44867C2.32597 7.09253 2.22765 6.8319 2.16855 6.3728C1.96613 4.8008 1.86493 4.0148 2.32632 3.5074C2.78773 3 3.60367 3 5.23558 3H16.7784C18.4103 3 19.2262 3 19.6875 3.5074C19.9113 3.75346 20.0027 4.06504 20.0146 4.5',
  d5: 'M20.8698 7.43934L21.5627 8.13171C22.1491 8.71749 22.1491 9.66724 21.5627 10.253L17.9317 13.9487C17.6462 14.234 17.2808 14.4264 16.8837 14.5005L14.6334 14.9885C14.278 15.0656 13.9616 14.7504 14.0378 14.3953L14.5168 12.1599C14.5909 11.7632 14.7834 11.3982 15.0691 11.1129L18.7464 7.43934C19.3326 6.85355 20.2834 6.85355 20.8698 7.43934Z',
  d6: 'M20.8624 7.43934L21.5567 8.13171C22.1441 8.71749 22.1441 9.66724 21.5567 10.253L17.9192 13.9487C17.6331 14.234 17.2671 14.4264 16.8693 14.5005L14.6149 14.9885C14.259 15.0656 13.942 14.7504 14.0183 14.3952L14.4981 12.1599C14.5724 11.7632 14.7653 11.3982 15.0515 11.1129L18.7352 7.43934C19.3226 6.85355 20.275 6.85355 20.8624 7.43934Z',
  d7: 'M5.18213 2.25C4.41159 2.24997 3.7574 2.24994 3.2413 2.32026C2.69502 2.3947 2.17269 2.56273 1.7728 3.00266C1.36942 3.44644 1.259 3.98125 1.25053 4.52794C1.24262 5.0385 1.32429 5.67272 1.41951 6.41217L1.42644 6.46603C1.46012 6.7277 1.51062 6.98078 1.61595 7.23417C1.72289 7.49143 1.87013 7.71054 2.05351 7.9283C3.03182 9.09 4.84956 11.1885 7.40839 13.1005C7.45034 13.1318 7.50273 13.206 7.51176 13.3161C7.79286 16.7485 8.0506 19.0959 8.18796 20.2555C8.25434 20.8158 8.56871 21.3055 9.04285 21.5646C9.5353 21.8337 10.1464 21.8198 10.6591 21.4574C10.8463 21.3251 11.0743 21.1867 11.3465 21.0214L11.4259 20.9732C11.7217 20.7934 12.0559 20.588 12.3719 20.3592C12.9733 19.9238 13.68 19.2866 13.8513 18.3729C13.8861 18.1869 13.9231 17.9769 13.962 17.7355C13.9968 17.5198 14.0142 17.4119 13.9626 17.3437C13.911 17.2755 13.7868 17.2612 13.5382 17.2325C13.0878 17.1806 12.6618 17.0033 12.3292 16.6707C11.7608 16.1023 11.7307 15.403 11.7561 15.005C11.8155 14.0709 12.0454 13.0819 12.2779 12.1714C12.4439 11.5212 12.7391 10.7342 13.4012 10.072L17.3293 6.14395C17.6728 5.7994 18.0147 5.43825 18.4396 5.19291C19.0615 4.83386 19.7712 4.69312 20.4618 4.77066C20.6115 4.78747 20.7518 4.67856 20.7494 4.52794C20.741 3.98125 20.6306 3.44644 20.2272 3.00266C19.8273 2.56273 19.3049 2.3947 18.7587 2.32026C18.2426 2.24994 17.5884 2.24997 16.8179 2.25H5.18213Z',
  d8: 'M18.3901 7.20461C18.786 6.80875 18.9839 6.61083 19.1898 6.49195C19.7485 6.16935 20.437 6.16935 20.9957 6.49195C21.2016 6.61083 21.3995 6.80875 21.7954 7.2046C22.1912 7.60046 22.3892 7.79838 22.5081 8.00429C22.8306 8.56304 22.8306 9.25146 22.5081 9.81021C22.3892 10.0161 22.1912 10.214 21.7954 10.6099L17.8673 14.538C17.0826 15.3227 15.8982 15.3546 14.8504 15.5787C14.0311 15.7539 13.6214 15.8415 13.39 15.61C13.1585 15.3786 13.2461 14.9689 13.4213 14.1496C13.6454 13.1018 13.6773 11.9174 14.462 11.1327L18.3901 7.20461Z',
  d9: 'M13.3087 17.0068L13.0081 19.018L9.11708 20.9864C9.05457 21.0185 8.97926 20.9779 8.97177 20.908L8.01574 11.9828L2 6.98276V3.10253C2 3.04726 2.04481 3.00245 2.10009 3.00245L19.9238 3.00244C19.9791 3.00244 20.0239 3.04725 20.0239 3.10252V5.03586',
  d10: 'M19.4559 7.06882L14.0031 12.5105L14.0029 15.0442H16.4798L21.9714 9.57685C22.0106 9.53779 22.0106 9.47434 21.9714 9.43526L19.5974 7.06878C19.5583 7.02979 19.495 7.02981 19.4559 7.06882Z',
  d11: 'M18.9697 6.46967C19.2626 6.17678 19.7374 6.17678 20.0303 6.46967L22.5303 8.96967C22.8232 9.26256 22.8232 9.73744 22.5303 10.0303L16.8107 15.75H13.25V12.1893L18.9697 6.46967Z',
  d12: 'M2 2.25C1.80106 2.25 1.61027 2.32904 1.46961 2.46973C1.32896 2.61041 1.24996 2.80122 1.25 3.00016L1.25094 7.35131L7.28792 12.3829L8.25459 21.0828C8.28167 21.3265 8.42618 21.5416 8.64159 21.6588C8.85699 21.776 9.11608 21.7805 9.33541 21.6708L13.6869 19.4951L14.0076 17.25H11.75V11.568L17.909 5.40901C18.6814 4.63665 19.8756 4.54319 20.75 5.12865V3C20.75 2.58579 20.4142 2.25 20 2.25H2Z',
} as const;

export const IconFilterEditStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-edit-stroke-rounded IconFilterEditStrokeRounded"
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

export const IconFilterEditDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-edit-duotone-rounded IconFilterEditDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconFilterEditTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-edit-twotone-rounded IconFilterEditTwotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilterEditSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-edit-solid-rounded IconFilterEditSolidRounded"
    >
      <path 
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

export const IconFilterEditBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-edit-bulk-rounded IconFilterEditBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFilterEditStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-edit-stroke-sharp IconFilterEditStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilterEditSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-edit-solid-sharp IconFilterEditSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFilterEdit: TheIconSelfPack = {
  name: 'FilterEdit',
  StrokeRounded: IconFilterEditStrokeRounded,
  DuotoneRounded: IconFilterEditDuotoneRounded,
  TwotoneRounded: IconFilterEditTwotoneRounded,
  SolidRounded: IconFilterEditSolidRounded,
  BulkRounded: IconFilterEditBulkRounded,
  StrokeSharp: IconFilterEditStrokeSharp,
  SolidSharp: IconFilterEditSolidSharp,
};