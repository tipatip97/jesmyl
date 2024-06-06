import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 21.998C7.53751 21.9856 6.18354 21.8929 5.20307 21.2021C4.87862 20.9735 4.59058 20.7024 4.3477 20.3971C3.5 19.3313 3.5 17.7966 3.5 14.7272V12.1818C3.5 9.21862 3.5 7.73703 3.96894 6.55372C4.72281 4.6514 6.31714 3.15086 8.33836 2.44133C9.59563 1.99997 11.1698 1.99997 14.3182 1.99997C16.1173 1.99997 17.0168 1.99997 17.7352 2.25217C18.8902 2.65762 19.8012 3.51507 20.232 4.60212C20.5 5.27829 20.5 6.12491 20.5 7.81816V14C20.5 17.4377 20.5 19.3085 19.5571 20.5',
  d2: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d3: 'M12.5 19.0991V20.3505C12.5 20.9102 12.5 21.1901 12.6115 21.406C12.7221 21.6201 12.9072 21.7928 13.1367 21.896C13.3681 22 13.6681 22 14.2681 22H15.2319C15.8319 22 16.1319 22 16.3633 21.896C16.5928 21.7928 16.7779 21.6201 16.8885 21.406C17 21.1901 17 20.9102 17 20.3505V19.0991C17 18.304 16.5185 17.5772 15.7562 17.2216C15.1228 16.9261 14.3772 16.9261 13.7438 17.2216C12.9815 17.5772 12.5 18.304 12.5 19.0991Z',
  d4: 'M14 4H15M16 6.5H17M14 8.5H15M16 10.6H17M14 13H15M16 15H17',
  d5: 'M9.06055 8.49792C5.47248 8.49792 3.90429 10.1536 3.5639 10.9896C3.5625 11.3586 3.5625 11.7548 3.5625 12.1818V14.7273C3.5625 17.7966 3.5625 19.3313 4.4102 20.3971C4.65308 20.7025 4.94112 20.9736 5.26557 21.2022C6.39796 22 8.02857 22 11.2898 22H12.5V19.0991C12.5 18.304 12.9815 17.5772 13.7438 17.2216C14.3772 16.9261 15.1228 16.9261 15.7562 17.2216C16.5185 17.5772 17 18.304 17 19.0991V21.9706C17.1254 21.9595 17.2371 21.9442 17.3429 21.9231C18.9296 21.6075 20.17 20.3671 20.4856 18.7804C20.5625 18.394 20.5625 17.9293 20.5625 17V7.81818C20.5625 6.12494 20.5625 5.27832 20.2945 4.60214C19.8637 3.5151 18.9527 2.65765 17.7977 2.2522C17.0793 2 16.1798 2 14.3807 2C13.8461 2 13.357 2 12.907 2.00216C10.6363 2.12886 10.095 5.06667 10.1117 6.55168C10.1526 8.19468 9.36196 8.49792 9.06055 8.49792Z',
  d6: 'M10 22C7.53751 21.9876 6.18354 21.8949 5.20307 21.2041C4.87862 20.9755 4.59058 20.7044 4.3477 20.399C3.5 19.3333 3.5 17.7986 3.5 14.7292V12.1837C3.5 9.22057 3.5 7.73899 3.96894 6.55568C4.72281 4.65335 6.31714 3.15281 8.33836 2.44328C9.59563 2.00193 11.1698 2.00193 14.3182 2.00193C16.1173 2.00193 17.0168 2.00193 17.7352 2.25413C18.8902 2.65957 19.8012 3.51702 20.232 4.60407C20.5 5.28025 20.5 6.12687 20.5 7.82011V14.0019C20.5 17.4396 20.5 19.3105 19.5571 20.5019',
  d7: 'M21.1862 17.4235C21.25 16.4694 21.25 15.3453 21.25 14.0385V7.88451C21.25 7.08482 21.25 6.43682 21.2153 5.90789C21.1795 5.36289 21.1039 4.87689 20.9206 4.41241C20.3918 3.0722 19.2834 2.03723 17.9068 1.5519C17.048 1.24911 15.5759 1.2495 14.0209 1.25005C11.1813 1.24969 9.49465 1.24947 8.11221 1.73688C5.89222 2.51958 4.11848 4.18345 3.27509 6.32095C2.99398 7.03339 2.86944 7.79862 2.80919 8.71608C2.75 9.61734 2.75 10.7309 2.75 12.15V14.7353C2.74998 16.1843 2.74996 17.3578 2.85985 18.2957C2.97396 19.2698 3.21721 20.1082 3.78704 20.8278C4.08223 21.2005 4.43077 21.5295 4.82114 21.8058C5.5659 22.3328 6.42712 22.556 7.43654 22.6617C7.90449 22.7107 8.4293 22.7363 9.01723 22.7497C9.55902 22.7621 10 22.3212 10 21.7789C10 21.2409 9.56556 20.8062 9.02805 20.7936C8.4952 20.7811 8.03902 20.7583 7.6384 20.7163C6.78448 20.6269 6.30055 20.4601 5.94272 20.2069C5.70127 20.036 5.48889 19.8348 5.3111 19.6103C5.05554 19.2876 4.88609 18.8545 4.79386 18.0671C4.69893 17.2568 4.69735 16.1988 4.69735 14.6743L4.69727 11.7722C4.69725 11.505 4.69743 10.866 4.97804 10.3935C5.15098 10.1023 5.37239 9.85905 5.59984 9.73514C5.96635 9.53549 6.38655 9.42205 6.83322 9.42205L7.87358 9.45856C8.25367 9.46646 8.69721 9.45445 9.12536 9.33965C9.95933 9.11604 10.6107 8.46419 10.8342 7.62965C10.9489 7.20122 10.9609 6.75738 10.953 6.37703L10.9166 5.33596C10.9166 4.86795 11.0409 4.46055 11.2583 4.08188C11.385 3.86114 11.6057 3.65912 11.9105 3.48169C12.3726 3.2126 12.926 3.2101 13.2642 3.20858C13.6023 3.20705 13.9591 3.20588 14.2572 3.20588C16.0913 3.20588 16.7584 3.21984 17.2618 3.39731C18.1344 3.70498 18.8001 4.34705 19.1102 5.13295C19.1878 5.32973 19.2427 5.58832 19.2721 6.03657C19.3021 6.49355 19.3026 7.07689 19.3026 7.91772V13.9631C19.3026 15.278 19.3015 16.3107 19.2526 17.1485C19.2212 17.6853 19.5918 18.1789 20.1238 18.2552C20.6565 18.3316 21.1502 17.9609 21.1862 17.4235Z',
  d8: 'M13.4267 16.5419C14.2611 16.1527 15.2389 16.1527 16.0733 16.5419C17.0801 17.0116 17.75 17.9916 17.75 19.0991L17.75 20.377V20.377C17.75 20.6341 17.75 20.871 17.7335 21.0696C17.7155 21.2846 17.6744 21.5187 17.5549 21.7501C17.3629 22.1219 17.0475 22.4107 16.6708 22.5801C16.4411 22.6833 16.2095 22.7191 15.9902 22.735C15.7838 22.75 15.5354 22.75 15.2564 22.75H15.2564H14.2437H14.2436C13.9646 22.75 13.7162 22.75 13.5098 22.735C13.2905 22.7191 13.0589 22.6833 12.8292 22.5801C12.4525 22.4107 12.1371 22.1219 11.9451 21.7501C11.8256 21.5187 11.7845 21.2846 11.7665 21.0696C11.75 20.8711 11.75 20.6341 11.75 20.3771V20.377L11.75 20.3505V19.0991C11.75 17.9916 12.4199 17.0116 13.4267 16.5419Z',
  d9: 'M15.25 5.5C15.25 5.08579 15.5858 4.75 16 4.75H17C17.4142 4.75 17.75 5.08579 17.75 5.5C17.75 5.91421 17.4142 6.25 17 6.25H16C15.5858 6.25 15.25 5.91421 15.25 5.5ZM13.25 7.5C13.25 7.08579 13.5858 6.75 14 6.75H15C15.4142 6.75 15.75 7.08579 15.75 7.5C15.75 7.91421 15.4142 8.25 15 8.25H14C13.5858 8.25 13.25 7.91421 13.25 7.5ZM15.25 9.6C15.25 9.18579 15.5858 8.85 16 8.85H17C17.4142 8.85 17.75 9.18579 17.75 9.6C17.75 10.0142 17.4142 10.35 17 10.35H16C15.5858 10.35 15.25 10.0142 15.25 9.6ZM13.25 12C13.25 11.5858 13.5858 11.25 14 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H14C13.5858 12.75 13.25 12.4142 13.25 12ZM15.25 14C15.25 13.5858 15.5858 13.25 16 13.25H17C17.4142 13.25 17.75 13.5858 17.75 14C17.75 14.4142 17.4142 14.75 17 14.75H16C15.5858 14.75 15.25 14.4142 15.25 14Z',
  d10: 'M12.5 19.2928V22.2265H17V19.2928C17 18.4887 16.5185 17.7537 15.7562 17.3941C15.1228 17.0952 14.3772 17.0952 13.7438 17.3941C12.9815 17.7537 12.5 18.4887 12.5 19.2928Z',
  d11: 'M16 5.53955H18M13 7.56219H15M16 9.68596H18M13 12.1131H15M16 14.1358H18',
  d12: 'M10.0218 22.2264H3.51C3.50448 22.2264 3.5 22.2219 3.5 22.2163V9.07924L10.5 2H20.49C20.4955 2 20.5 2.00453 20.5 2.01011V23.0039M10.5 2.57215V9.07924H4.06829',
  d13: 'M21.25 2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H10.1362L2.75 8.66338V21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H9.51306V20.7955H4.69727V10.0455H11.5131L11.5131 3.20459H19.3025V22.75H21.25V2.22727Z',
  d14: 'M15.8028 16.5419C16.8096 17.0116 17.4795 17.9916 17.4795 19.0991V22.75H11.4795V19.0991C11.4795 17.9916 12.1494 17.0116 13.1562 16.5419C13.9906 16.1527 14.9684 16.1527 15.8028 16.5419Z',
  d15: 'M18 6.5H16V4.5H18V6.5ZM15 8.5H13V6.5H15V8.5ZM18 10.6H16V8.6H18V10.6ZM15 13H13V11H15V13ZM18 15H16V13H18V15Z',
};

export const IconFileZipStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-zip-stroke-rounded IconFileZipStrokeRounded"
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

export const IconFileZipDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-zip-duotone-rounded IconFileZipDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
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

export const IconFileZipTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-zip-twotone-rounded IconFileZipTwotoneRounded"
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

export const IconFileZipSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-zip-solid-rounded IconFileZipSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileZipBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-zip-bulk-rounded IconFileZipBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileZipStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-zip-stroke-sharp IconFileZipStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconFileZipSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-zip-solid-sharp IconFileZipSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileZip: TheIconSelfPack = {
  name: 'FileZip',
  StrokeRounded: IconFileZipStrokeRounded,
  DuotoneRounded: IconFileZipDuotoneRounded,
  TwotoneRounded: IconFileZipTwotoneRounded,
  SolidRounded: IconFileZipSolidRounded,
  BulkRounded: IconFileZipBulkRounded,
  StrokeSharp: IconFileZipStrokeSharp,
  SolidSharp: IconFileZipSolidSharp,
};