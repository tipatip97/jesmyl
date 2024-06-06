import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.1667 0.999756L15.7646 2.11753C16.1689 2.87322 16.371 3.25107 16.2374 3.41289C16.1037 3.57471 15.6635 3.44402 14.7831 3.18264C13.9029 2.92131 12.9684 2.78071 12 2.78071C6.75329 2.78071 2.5 6.90822 2.5 11.9998C2.5 13.6789 2.96262 15.2533 3.77093 16.6093M8.83333 22.9998L8.23536 21.882C7.83108 21.1263 7.62894 20.7484 7.7626 20.5866C7.89627 20.4248 8.33649 20.5555 9.21689 20.8169C10.0971 21.0782 11.0316 21.2188 12 21.2188C17.2467 21.2188 21.5 17.0913 21.5 11.9998C21.5 10.3206 21.0374 8.74623 20.2291 7.39023',
  d2: 'M12 21C16.9706 21 21 16.9706 21 12C21 8.76 19.4722 6.65 18.7083 6C17.0604 4.15875 14.6655 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z',
  d3: 'M15.1667 1L15.7646 2.11777C16.1689 2.87347 16.371 3.25131 16.2374 3.41313C16.1037 3.57495 15.6635 3.44426 14.7831 3.18288C13.9029 2.92156 12.9684 2.78095 12 2.78095C6.75329 2.78095 2.5 6.90846 2.5 12C2.5 13.6792 2.96262 15.2535 3.77093 16.6095M8.83333 23L8.23536 21.8822C7.83108 21.1265 7.62894 20.7487 7.7626 20.5869C7.89627 20.425 8.33649 20.5557 9.21689 20.8171C10.0971 21.0784 11.0316 21.219 12 21.219C17.2467 21.219 21.5 17.0915 21.5 12C21.5 10.3208 21.0374 8.74648 20.2291 7.39048',
  d4: 'M15.1667 0.999756L15.7646 2.11753C16.1689 2.87322 16.371 3.25107 16.2374 3.41289C16.1037 3.57471 15.6635 3.44402 14.7831 3.18264C13.9029 2.92131 12.9684 2.78071 12 2.78071C6.75329 2.78071 2.5 6.90822 2.5 11.9998C2.5 13.6789 2.96262 15.2533 3.77093 16.6093',
  d5: 'M8.83343 22.9997L8.23546 21.8819C7.83118 21.1262 7.62904 20.7483 7.7627 20.5865C7.89636 20.4247 8.33659 20.5554 9.21699 20.8168C10.0972 21.0781 11.0317 21.2187 12.0001 21.2187C17.2468 21.2187 21.5001 17.0912 21.5001 11.9997C21.5001 10.3205 21.0375 8.74614 20.2292 7.39014',
  d6: 'M14.6308 0.365971C15.1062 0.110887 15.6977 0.290644 15.952 0.767471L16.5358 1.86194L16.5594 1.90632C16.7362 2.23759 16.9055 2.55495 17.008 2.80978C17.0614 2.94256 17.1276 3.13095 17.147 3.34105C17.1678 3.56676 17.1406 3.9104 16.8891 4.21572C16.6264 4.53474 16.2783 4.61664 16.0651 4.63524C15.8589 4.65322 15.6618 4.6243 15.5173 4.59668C15.2371 4.54313 14.875 4.43526 14.4861 4.3194L14.4861 4.31939L14.439 4.30537C13.6692 4.07612 12.8504 3.95231 12 3.95231C7.38952 3.95231 3.70238 7.58289 3.70238 12C3.70238 13.4616 4.10325 14.8306 4.80538 16.0121C5.08143 16.4766 4.9298 17.0776 4.4667 17.3545C4.0036 17.6314 3.4044 17.4793 3.12834 17.0148C2.25235 15.5408 1.75 13.8268 1.75 12C1.75 6.44635 6.36691 1.99401 12 1.99401C12.5504 1.99401 13.0911 2.03643 13.6188 2.11823L14.1422 1C14.2572 0.735955 14.3752 0.503107 14.6308 0.365971Z',
  d7: 'M19.5333 6.64552C19.9964 6.36863 20.5956 6.52072 20.8717 6.98523C21.7477 8.45924 22.25 10.1732 22.25 12C22.25 17.5537 17.6331 22.006 12 22.006C11.4909 22.006 10.99 21.9697 10.5 21.8995L9.85778 23C9.75316 23.2325 9.62478 23.4969 9.36921 23.634C8.89383 23.8891 8.30229 23.7094 8.04797 23.2325L7.44057 22.0937C7.26381 21.7624 7.09448 21.4451 6.992 21.1902C6.93861 21.0574 6.87238 20.8691 6.85302 20.659C6.83221 20.4332 6.85942 20.0896 7.11085 19.7843C7.37357 19.4652 7.72175 19.3833 7.93494 19.3648C8.14109 19.3468 8.33815 19.3757 8.48267 19.4033C8.76292 19.4569 9.12502 19.5648 9.51398 19.6806L9.56099 19.6946C10.3308 19.9239 11.1496 20.0477 12 20.0477C16.6105 20.0477 20.2976 16.4171 20.2976 12C20.2976 10.5384 19.8968 9.16938 19.1946 7.98794C18.9186 7.52343 19.0702 6.92241 19.5333 6.64552Z',
  d8: 'M19.5335 6.64605C19.9966 6.36916 20.5958 6.52126 20.8719 6.98576C21.7479 8.45977 22.2502 10.1737 22.2502 12.0005C22.2502 17.5542 17.6333 22.0065 12.0002 22.0065C11.4911 22.0065 10.9902 21.9702 10.5002 21.9L9.858 23.0005C9.75338 23.2331 9.62501 23.4974 9.36944 23.6346C8.89405 23.8896 8.30251 23.7099 8.0482 23.2331L7.4408 22.0943C7.26404 21.763 7.0947 21.4456 6.99223 21.1908C6.93883 21.058 6.87261 20.8696 6.85324 20.6595C6.83244 20.4338 6.85965 20.0901 7.11107 19.7848C7.3738 19.4658 7.72198 19.3839 7.93517 19.3653C8.14132 19.3473 8.33837 19.3762 8.48289 19.4039C8.76314 19.4574 9.12525 19.5653 9.5142 19.6812L9.56122 19.6952C10.331 19.9244 11.1498 20.0482 12.0002 20.0482C16.6107 20.0482 20.2978 16.4176 20.2978 12.0005C20.2978 10.539 19.897 9.16991 19.1948 7.98847C18.9188 7.52396 19.0704 6.92294 19.5335 6.64605Z',
  d9: 'M15.001 2L15.6852 4.16422C14.5654 3.65046 13.3171 3.36364 12.001 3.36364C7.16848 3.36364 3.25098 7.23027 3.25098 12C3.25098 13.6678 3.72995 15.2252 4.55953 16.5455M9.00098 22L8.31677 19.8358C9.43652 20.3495 10.6848 20.6364 12.001 20.6364C16.8335 20.6364 20.751 16.7697 20.751 12C20.751 10.3322 20.272 8.77482 19.4424 7.45455',
  d10: 'M15.9686 1.25122L16.6528 3.91544C16.7487 4.28896 16.6213 4.68434 16.3254 4.9316C16.0294 5.17885 15.6177 5.2339 15.2672 5.07308C14.2759 4.61826 13.1696 4.3636 12 4.3636C7.70743 4.3636 4.25 7.7948 4.25 12C4.25 13.4734 4.67255 14.8473 5.40528 16.0134L3.71183 17.0774C2.7854 15.603 2.25 13.8621 2.25 12C2.25 6.66566 6.62759 2.3636 12 2.3636C12.7758 2.3636 13.5313 2.45334 14.256 2.62308L14.0314 1.74871L15.9686 1.25122ZM19.75 12C19.75 10.5265 19.3275 9.15268 18.5947 7.98654L20.2882 6.92248C21.2146 8.39688 21.75 10.1378 21.75 12C21.75 17.3343 17.3724 21.6363 12 21.6363C11.2242 21.6363 10.4687 21.5466 9.74402 21.3768L9.96857 22.2512L8.03143 22.7487L7.34722 20.0845C7.2513 19.711 7.37869 19.3156 7.67463 19.0683C7.97057 18.8211 8.38231 18.766 8.73281 18.9268C9.72411 19.3817 10.8304 19.6363 12 19.6363C16.2926 19.6363 19.75 16.2051 19.75 12Z',
};

export const IconReloadStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reload-stroke-rounded IconReloadStrokeRounded"
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

export const IconReloadDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reload-duotone-rounded IconReloadDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconReloadTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reload-twotone-rounded IconReloadTwotoneRounded"
    >
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

export const IconReloadSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reload-solid-rounded IconReloadSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconReloadBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reload-bulk-rounded IconReloadBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconReloadStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reload-stroke-sharp IconReloadStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconReloadSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reload-solid-sharp IconReloadSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfReload: TheIconSelfPack = {
  name: 'Reload',
  StrokeRounded: IconReloadStrokeRounded,
  DuotoneRounded: IconReloadDuotoneRounded,
  TwotoneRounded: IconReloadTwotoneRounded,
  SolidRounded: IconReloadSolidRounded,
  BulkRounded: IconReloadBulkRounded,
  StrokeSharp: IconReloadStrokeSharp,
  SolidSharp: IconReloadSolidSharp,
};