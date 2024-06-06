import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 6C9.5 6.5 10.5033 6.41228 12 5.17632M12 5.17632C11.7786 4.99352 11.5486 4.78582 11.311 4.55032C9.0053 2.2656 5.86519 2.71292 4.39399 4.55032C3.37784 5.8194 0.777521 8.97857 7.14215 20.2396C7.40566 20.7058 7.9306 21 8.49601 21C9.398 21 10.103 20.2801 10.1323 19.4399C10.1945 17.6579 10.5397 15.6035 12 15.6035C13.4603 15.6035 13.8055 17.6579 13.8677 19.4399C13.897 20.2801 14.602 21 15.504 21C16.0694 21 16.5943 20.7058 16.8578 20.2396C23.2225 8.97857 20.6222 5.8194 19.606 4.55032C18.1348 2.71292 14.9947 2.2656 12.689 4.55032C12.4514 4.78582 12.2214 4.99352 12 5.17632Z',
  d2: 'M10.387 9.38704C9.87099 9.9031 9.87099 12.0969 10.387 12.613C10.9031 13.129 13.0969 13.129 13.613 12.613C14.129 12.0969 14.129 9.9031 13.613 9.38704C13.0969 8.87099 10.9031 8.87099 10.387 9.38704Z',
  d3: 'M10 11H4',
  d4: 'M20 11H14',
  d5: 'M12.689 4.55032C14.9947 2.2656 18.1348 2.71292 19.606 4.55032L19.6199 4.56767C20.6455 5.84817 23.1937 9.02956 16.8578 20.2396C16.5943 20.7058 16.0694 21 15.504 21C14.602 21 13.897 20.2801 13.8677 19.4399C13.8055 17.6579 13.4603 15.6035 12 15.6035C10.5397 15.6035 10.1945 17.6579 10.1323 19.4399C10.103 20.2801 9.39799 21 8.49601 21C7.9306 21 7.40566 20.7058 7.14215 20.2396C0.80634 9.02956 3.35448 5.84817 4.38009 4.56767L4.39399 4.55032C5.86519 2.71292 9.0053 2.2656 11.311 4.55032C11.5486 4.78582 11.7786 4.99352 12 5.17632C12.2214 4.99352 12.4514 4.78582 12.689 4.55032ZM10.387 12.613C9.87099 12.0969 9.87099 9.9031 10.387 9.38704C10.9031 8.87099 13.0969 8.87099 13.613 9.38704C14.129 9.9031 14.129 12.0969 13.613 12.613C13.0969 13.129 10.9031 13.129 10.387 12.613Z',
  d6: 'M9 6C9.5 6.5 10.5033 6.41228 12 5.17632M12 5.17632C11.7786 4.99352 11.5486 4.78582 11.311 4.55032C9.0053 2.2656 5.86519 2.71292 4.39399 4.55032C3.37784 5.8194 0.777522 8.97857 7.14215 20.2396C7.40566 20.7058 7.9306 21 8.49601 21C9.398 21 10.103 20.2801 10.1323 19.4399C10.1945 17.6579 10.5397 15.6035 12 15.6035C13.4603 15.6035 13.8055 17.6579 13.8677 19.4399C13.897 20.2801 14.602 21 15.504 21C16.0694 21 16.5943 20.7058 16.8578 20.2396C23.2225 8.97857 20.6222 5.8194 19.606 4.55032C18.1348 2.71292 14.9947 2.2656 12.689 4.55032C12.4514 4.78582 12.2214 4.99352 12 5.17632Z',
  d7: 'M10 11H4M20 11H14M10.387 9.38704C9.87099 9.9031 9.87099 12.0969 10.387 12.613C10.9031 13.129 13.0969 13.129 13.613 12.613C14.129 12.0969 14.129 9.9031 13.613 9.38704C13.0969 8.87099 10.9031 8.87099 10.387 9.38704Z',
  d8: 'M12.1611 4.01743C14.7694 1.43283 18.4298 1.88121 20.1915 4.0814L20.2109 4.10563C20.4683 4.42687 20.8646 4.92148 21.1864 5.65052C21.5183 6.40224 21.7597 7.37372 21.7497 8.65371C21.7477 8.91446 21.7352 9.18783 21.711 9.47462C21.6903 9.71937 21.68 9.84175 21.5939 9.92088C21.5078 10 21.3808 10 21.1267 10L14.793 10C14.7167 10 14.6517 9.94574 14.6349 9.87138C14.5631 9.5527 14.4287 9.14215 14.1433 8.85671C13.8579 8.57127 13.4473 8.4369 13.1286 8.3651C12.777 8.28588 12.3814 8.25 12 8.25C11.6186 8.25 11.223 8.28588 10.8714 8.3651C10.5527 8.4369 10.1421 8.57127 9.85671 8.85671C9.57127 9.14215 9.4369 9.5527 9.3651 9.87138C9.34835 9.94574 9.28325 10 9.20703 10H2.87326C2.61922 10 2.49221 10 2.40612 9.92088C2.32003 9.84175 2.3097 9.71937 2.28904 9.47462C2.26482 9.18783 2.25235 8.91446 2.2503 8.65371C2.24026 7.37372 2.48169 6.40224 2.81357 5.65052C3.13543 4.92148 3.53175 4.42686 3.78913 4.10563L3.80854 4.0814C5.57023 1.88121 9.23058 1.43283 11.8389 4.01743C11.9282 4.106 12.0718 4.106 12.1611 4.01743ZM3.51562 12C3.15683 12 2.97743 12 2.88747 12.1209C2.7975 12.2419 2.848 12.4101 2.94899 12.7466C3.57805 14.8425 4.68659 17.419 6.48922 20.6084C6.89514 21.3266 7.67976 21.7499 8.49601 21.7499C9.80785 21.7499 10.8386 20.704 10.8818 19.4659C10.9123 18.5927 11.012 17.7347 11.244 17.1171C11.4764 16.4983 11.7349 16.3533 12 16.3533C12.2651 16.3533 12.5236 16.4983 12.756 17.1171C12.988 17.7347 13.0877 18.5927 13.1182 19.4659C13.1614 20.704 14.1921 21.7499 15.504 21.7499C16.3202 21.7499 17.1049 21.3266 17.5108 20.6084C19.3134 17.419 20.4219 14.8425 21.051 12.7466C21.152 12.4101 21.2025 12.2419 21.1125 12.1209C21.0226 12 20.8432 12 20.4844 12H14.793C14.7167 12 14.6517 12.0543 14.6349 12.1286C14.5631 12.4473 14.4287 12.8579 14.1433 13.1433C13.8579 13.4287 13.4473 13.5631 13.1286 13.6349C12.777 13.7141 12.3814 13.75 12 13.75C11.6186 13.75 11.223 13.7141 10.8714 13.6349C10.5527 13.5631 10.1421 13.4287 9.85671 13.1433C9.57127 12.8579 9.4369 12.4473 9.3651 12.1286C9.34835 12.0543 9.28325 12 9.20703 12H3.51562Z',
  d9: 'M20.1915 4.0814C18.4298 1.88121 14.7694 1.43283 12.1611 4.01743C12.1069 4.0712 12.0532 4.1233 12 4.17378C11.9468 4.1233 11.8931 4.0712 11.8389 4.01743C9.23058 1.43283 5.57023 1.88121 3.80854 4.0814L3.78913 4.10563C3.53175 4.42686 3.13544 4.92148 2.81357 5.65052C2.48169 6.40224 2.24026 7.37372 2.2503 8.65371C2.27022 11.1931 3.2793 14.9291 6.48922 20.6084C6.89514 21.3266 7.67976 21.7499 8.49601 21.7499C9.80785 21.7499 10.8386 20.704 10.8818 19.4659C10.9123 18.5927 11.012 17.7347 11.244 17.1171C11.4764 16.4983 11.7349 16.3533 12 16.3533C12.2651 16.3533 12.5236 16.4983 12.756 17.1171C12.988 17.7347 13.0877 18.5927 13.1182 19.4659C13.1614 20.704 14.1921 21.7499 15.504 21.7499C16.3202 21.7499 17.1049 21.3266 17.5108 20.6084C20.7207 14.9291 21.7298 11.1931 21.7497 8.65371C21.7597 7.37372 21.5183 6.40224 21.1864 5.65052C20.8646 4.92148 20.4683 4.42687 20.2109 4.10563L20.1915 4.0814Z',
  d10: 'M21.656 10H14.6625C14.6542 9.95656 14.6453 9.91365 14.6357 9.87138C14.5639 9.5527 14.4296 9.14215 14.1441 8.85671C13.8587 8.57127 13.4481 8.4369 13.1295 8.3651C12.7779 8.28588 12.3822 8.25 12.0008 8.25C11.6195 8.25 11.2238 8.28588 10.8722 8.3651C10.5536 8.4369 10.143 8.57127 9.85756 8.85671C9.57212 9.14215 9.43775 9.5527 9.36595 9.87138C9.35643 9.91365 9.34753 9.95656 9.33925 10H2.3457C2.42324 10.6084 2.55126 11.2729 2.74037 12H9.33925C9.34753 12.0434 9.35643 12.0863 9.36595 12.1286C9.43775 12.4473 9.57212 12.8579 9.85756 13.1433C10.143 13.4287 10.5536 13.5631 10.8722 13.6349C11.2238 13.7141 11.6195 13.75 12.0008 13.75C12.3822 13.75 12.7779 13.7141 13.1295 13.6349C13.4481 13.5631 13.8587 13.4287 14.1441 13.1433C14.4296 12.8579 14.5639 12.4473 14.6357 12.1286C14.6453 12.0863 14.6542 12.0434 14.6625 12H21.2613C21.4504 11.2729 21.5785 10.6084 21.656 10Z',
  d11: 'M10 13H14V9.0001L10 9V13Z',
  d12: 'M10 11H3.5M20.5 11H14',
  d13: 'M12.1611 4.01743C14.7694 1.43283 18.4298 1.88121 20.1915 4.0814L20.2109 4.10563C20.4683 4.42687 20.8646 4.92148 21.1864 5.65052C21.5183 6.40224 21.7597 7.37372 21.7497 8.65371C21.7464 9.06933 21.7167 9.517 21.6551 10H14.75V9.0001C14.75 8.5859 14.4142 8.25011 14 8.2501L10 8.25C9.8011 8.24999 9.61033 8.32901 9.46968 8.46966C9.32902 8.61032 9.25 8.80108 9.25 9V10H2.34488C2.28332 9.517 2.25356 9.06933 2.2503 8.65371C2.24026 7.37372 2.48169 6.40224 2.81357 5.65052C3.13543 4.92148 3.53175 4.42686 3.78913 4.10563L3.80854 4.0814C5.57023 1.88121 9.23058 1.43283 11.8389 4.01743C11.8931 4.0712 11.9468 4.1233 12 4.17378C12.0532 4.1233 12.1069 4.0712 12.1611 4.01743Z',
  d14: 'M2.73959 12C3.31764 14.2223 4.46645 17.0295 6.48922 20.6084C6.89514 21.3266 7.67976 21.7499 8.49601 21.7499C9.80785 21.7499 10.8386 20.704 10.8818 19.4659C10.9123 18.5927 11.012 17.7347 11.244 17.1171C11.4764 16.4983 11.7349 16.3533 12 16.3533C12.2651 16.3533 12.5236 16.4983 12.756 17.1171C12.988 17.7347 13.0877 18.5927 13.1182 19.4659C13.1614 20.704 14.1921 21.7499 15.504 21.7499C16.3202 21.7499 17.1049 21.3266 17.5108 20.6084C19.5336 17.0295 20.6824 14.2223 21.2604 12H14.75V13C14.75 13.4142 14.4142 13.75 14 13.75H10C9.58579 13.75 9.25 13.4142 9.25 13V12H2.73959Z',
};

export const IconDentalBracesStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-braces-stroke-rounded IconDentalBracesStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDentalBracesDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-braces-duotone-rounded IconDentalBracesDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconDentalBracesTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-braces-twotone-rounded IconDentalBracesTwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDentalBracesSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-braces-solid-rounded IconDentalBracesSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDentalBracesBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-braces-bulk-rounded IconDentalBracesBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDentalBracesStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-braces-stroke-sharp IconDentalBracesStrokeSharp"
    >
      <path 
        d={d.d1} 
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDentalBracesSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-braces-solid-sharp IconDentalBracesSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDentalBraces: TheIconSelfPack = {
  name: 'DentalBraces',
  StrokeRounded: IconDentalBracesStrokeRounded,
  DuotoneRounded: IconDentalBracesDuotoneRounded,
  TwotoneRounded: IconDentalBracesTwotoneRounded,
  SolidRounded: IconDentalBracesSolidRounded,
  BulkRounded: IconDentalBracesBulkRounded,
  StrokeSharp: IconDentalBracesStrokeSharp,
  SolidSharp: IconDentalBracesSolidSharp,
};