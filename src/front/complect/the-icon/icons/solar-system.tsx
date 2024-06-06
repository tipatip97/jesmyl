import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.422 7.37827C11.6952 7.12609 11.8318 7 12 7C12.1682 7 12.3048 7.12609 12.578 7.37827L13.0438 7.80813C13.1873 7.94051 13.259 8.0067 13.3504 8.03505C13.4419 8.0634 13.5407 8.05006 13.7383 8.0234L14.38 7.93682C14.7564 7.88602 14.9446 7.86062 15.0807 7.95492C15.2167 8.04921 15.2496 8.22783 15.3153 8.58508L15.4272 9.19402C15.4617 9.38155 15.479 9.47531 15.5355 9.54952C15.592 9.62374 15.6802 9.66836 15.8564 9.75759L16.4289 10.0474C16.7648 10.2173 16.9327 10.3023 16.9847 10.4549C17.0366 10.6075 16.9531 10.7704 16.7862 11.0963L16.5016 11.6517C16.4139 11.8227 16.3701 11.9083 16.3701 12C16.3701 12.0917 16.4139 12.1773 16.5016 12.3483L16.7862 12.9037C16.9531 13.2296 17.0366 13.3925 16.9847 13.5451C16.9327 13.6977 16.7648 13.7827 16.4289 13.9526L15.8564 14.2424C15.6802 14.3316 15.592 14.3763 15.5355 14.4505C15.479 14.5247 15.4617 14.6185 15.4272 14.806L15.3153 15.4149C15.2496 15.7722 15.2167 15.9508 15.0807 16.0451C14.9446 16.1394 14.7564 16.114 14.38 16.0632L13.7383 15.9766C13.5407 15.9499 13.4419 15.9366 13.3504 15.965C13.259 15.9933 13.1873 16.0595 13.0438 16.1919L12.578 16.6217C12.3048 16.8739 12.1682 17 12 17C11.8318 17 11.6952 16.8739 11.422 16.6217L10.9562 16.1919C10.8127 16.0595 10.741 15.9933 10.6496 15.965C10.5581 15.9366 10.4593 15.9499 10.2617 15.9766L9.62003 16.0632C9.24358 16.114 9.05536 16.1394 8.91931 16.0451C8.78327 15.9508 8.75042 15.7722 8.68473 15.4149L8.57276 14.806C8.53828 14.6185 8.52104 14.5247 8.46452 14.4505C8.408 14.3763 8.31985 14.3316 8.14355 14.2424L7.57108 13.9526C7.23523 13.7827 7.06731 13.6977 7.01534 13.5451C6.96338 13.3925 7.04686 13.2296 7.21383 12.9037L7.49844 12.3483C7.58608 12.1773 7.62991 12.0917 7.62991 12C7.62991 11.9083 7.58608 11.8227 7.49844 11.6517L7.21383 11.0963C7.04686 10.7704 6.96338 10.6075 7.01534 10.4549C7.06731 10.3023 7.23523 10.2173 7.57108 10.0474L8.14355 9.75759C8.31985 9.66836 8.408 9.62374 8.46452 9.54952C8.52104 9.47531 8.53828 9.38155 8.57276 9.19402L8.68473 8.58508C8.75042 8.22783 8.78327 8.04921 8.91931 7.95492C9.05536 7.86062 9.24358 7.88602 9.62003 7.93682L10.2617 8.0234C10.4593 8.05006 10.5581 8.0634 10.6496 8.03505C10.741 8.0067 10.8127 7.94051 10.9562 7.80813L11.422 7.37827Z',
  d2: 'M6.48311 3.65819C6.11715 3.25395 5.58823 3 5 3C3.89543 3 3 3.89543 3 5C3 5.58823 3.25395 6.11715 3.65819 6.48311M6.48311 3.65819C6.80434 4.01303 7 4.48366 7 5C7 6.10457 6.10457 7 5 7C4.48366 7 4.01303 6.80434 3.65819 6.48311M6.48311 3.65819C8.0644 2.6103 9.96093 2 12 2C17.5228 2 22 6.47715 22 12C22 14.0318 21.394 15.9221 20.353 17.5M3.65819 6.48311C2.6103 8.0644 2 9.96093 2 12C2 17.5228 6.47715 22 12 22C14.0391 22 15.9356 21.3897 17.5169 20.3418M17.5169 20.3418C17.8828 20.7461 18.4118 21 19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 19.5163 17.1957 19.987 17.5169 20.3418Z',
  d3: 'M5 7C6.10457 7 7 6.10457 7 5C7 4.48366 6.80434 4.01303 6.48311 3.65819C6.11715 3.25395 5.58823 3 5 3C3.89543 3 3 3.89543 3 5C3 5.58823 3.25395 6.11715 3.65819 6.48311C4.01303 6.80434 4.48366 7 5 7Z',
  d4: 'M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 19.5163 17.1957 19.987 17.5169 20.3418C17.8828 20.7461 18.4118 21 19 21Z',
  d5: 'M6.48311 3.65819C8.0644 2.6103 9.96093 2 12 2C17.5228 2 22 6.47715 22 12C22 14.0318 21.394 15.9221 20.353 17.5M3.65819 6.48311C2.6103 8.0644 2 9.96093 2 12C2 17.5228 6.47715 22 12 22C14.0391 22 15.9356 21.3897 17.5169 20.3418',
  d6: 'M21.3455 17.3161C22.2394 15.7477 22.75 13.9323 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C10.0676 1.25 8.25213 1.76069 6.68374 2.65463C6.23965 2.38384 5.71737 2.22727 5.15909 2.22727C3.53989 2.22727 2.22727 3.53989 2.22727 5.15909C2.22727 5.71737 2.38384 6.23965 2.65463 6.68374C1.76069 8.25213 1.25 10.0676 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C13.9324 22.75 15.7479 22.2393 17.3163 21.3454C17.7604 21.6162 18.2826 21.7727 18.8409 21.7727C20.4601 21.7727 21.7727 20.4601 21.7727 18.8409C21.7727 18.2824 21.6166 17.7603 21.3455 17.3161ZM8.09144 5.15914C8.09144 4.82371 8.03486 4.50104 7.93086 4.20049C9.14722 3.56435 10.5309 3.20459 12.0005 3.20459C16.8581 3.20459 20.796 7.14245 20.796 12C20.796 13.4696 20.4363 14.8532 19.8002 16.0695C19.4998 15.9656 19.1772 15.9091 18.8414 15.9091C17.2222 15.9091 15.9096 17.2218 15.9096 18.841C15.9096 19.1764 15.9662 19.499 16.0702 19.7996C14.8538 20.4357 13.4702 20.7955 12.0005 20.7955C7.14294 20.7955 3.20508 16.8576 3.20508 12C3.20508 10.5304 3.56484 9.14673 4.20097 7.93037C4.50153 8.03437 4.8242 8.09095 5.15962 8.09095C6.77882 8.09095 8.09144 6.77833 8.09144 5.15914Z',
  d7: 'M12.0001 6.25C12.2976 6.25 12.5246 6.37059 12.6821 6.4818L13.5853 7.28722L14.3093 7.18955C14.471 7.16766 14.6546 7.14279 14.8144 7.14148C15.0029 7.13993 15.2613 7.16749 15.508 7.3385C15.7596 7.5129 15.875 7.74997 15.9365 7.93594C15.9867 8.08766 16.0197 8.26809 16.0475 8.41974L16.1679 9.07461L16.7947 9.39183C16.9383 9.46445 17.1036 9.54799 17.2353 9.63766C17.3906 9.74338 17.5944 9.91872 17.6947 10.2131C17.7963 10.5115 17.7391 10.7769 17.6754 10.9587C17.6226 11.1092 17.5386 11.2729 17.4676 11.4112L17.1691 11.9937L17.4676 12.5888C17.5386 12.7271 17.6226 12.8908 17.6754 13.0413C17.7391 13.2231 17.7963 13.4885 17.6947 13.7869C17.5944 14.0813 17.3906 14.2566 17.2353 14.3623C17.1036 14.452 16.9383 14.5356 16.7947 14.6082L16.1679 14.9254L16.0475 15.5803C16.0197 15.7319 15.9867 15.9123 15.9365 16.0641C15.875 16.25 15.7596 16.4871 15.508 16.6615C15.2613 16.8325 15.0029 16.8601 14.8144 16.8585C14.6546 16.8572 14.471 16.8323 14.3094 16.8105L14.3094 16.8105L13.5853 16.7128L13.0648 17.1931L13.0648 17.1932C12.948 17.3011 12.8128 17.426 12.6821 17.5182C12.5246 17.6294 12.2976 17.75 12.0001 17.75C11.7025 17.75 11.4756 17.6294 11.318 17.5182C11.1873 17.426 11.0521 17.3011 10.9353 17.1932L10.9353 17.1931L10.4148 16.7128L9.69078 16.8105H9.69077C9.52913 16.8323 9.34552 16.8572 9.18575 16.8585C8.99723 16.8601 8.73887 16.8325 8.49214 16.6615C8.24053 16.4871 8.12512 16.25 8.06363 16.0641C8.01346 15.9123 7.98041 15.7319 7.95262 15.5803L7.8322 14.9254L7.20548 14.6082C7.06184 14.5356 6.89656 14.452 6.76482 14.3623C6.6095 14.2566 6.40573 14.0813 6.30546 13.7869C6.20385 13.4885 6.26104 13.2231 6.3248 13.0413C6.37753 12.8908 6.46158 12.7271 6.53253 12.5888L6.83103 11.9937L6.53253 11.4112C6.46158 11.2729 6.37753 11.1092 6.3248 10.9587C6.26104 10.7769 6.20385 10.5115 6.30546 10.2131C6.40573 9.91872 6.6095 9.74338 6.76482 9.63766C6.89657 9.54799 7.06182 9.46445 7.20547 9.39183L7.8322 9.07461L7.95262 8.41974C7.98041 8.26809 8.01346 8.08766 8.06363 7.93594C8.12512 7.74997 8.24053 7.5129 8.49214 7.3385C8.73887 7.16749 8.99723 7.13993 9.18575 7.14148C9.34554 7.14279 9.52914 7.16766 9.6908 7.18955L10.4148 7.28722L11.318 6.4818C11.4756 6.37059 11.7025 6.25 12.0001 6.25Z',
  d8: 'M2.25 5C2.25 3.48122 3.48122 2.25 5 2.25C5.80886 2.25 6.53698 2.60017 7.03912 3.15485C7.48032 3.64221 7.75 4.29049 7.75 5C7.75 6.51878 6.51878 7.75 5 7.75C4.29049 7.75 3.64221 7.48032 3.15485 7.03912C2.60017 6.53698 2.25 5.80886 2.25 5Z',
  d9: 'M16.25 19C16.25 17.4812 17.4812 16.25 19 16.25C20.5188 16.25 21.75 17.4812 21.75 19C21.75 20.5188 20.5188 21.75 19 21.75C18.1911 21.75 17.463 21.3998 16.9609 20.8452C16.5197 20.3578 16.25 19.7095 16.25 19Z',
  d10: 'M7.6706 4.3419C8.94818 3.61789 10.4247 3.20455 12 3.20455C16.8576 3.20455 20.7955 7.1424 20.7955 12C20.7955 13.5753 20.3821 15.0517 19.6582 16.3293C20.3234 16.4926 20.8935 16.8981 21.2697 17.4468C22.2104 15.849 22.75 13.9863 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C10.0137 1.25 8.15092 1.78959 6.55304 2.73034C6.73147 2.8526 6.89464 2.99526 7.03912 3.15485C7.33935 3.48649 7.56015 3.89264 7.6706 4.3419Z',
  d11: 'M2.73034 6.55304C2.8526 6.73147 2.99526 6.89464 3.15485 7.03912C3.48649 7.33935 3.89264 7.56015 4.3419 7.6706C3.61789 8.94818 3.20455 10.4247 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C13.5753 20.7955 15.0518 20.3821 16.3294 19.6581C16.4398 20.1074 16.6607 20.5135 16.9609 20.8452C17.1054 21.0047 17.2685 21.1474 17.447 21.2697C15.8491 22.2104 13.9863 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 10.0137 1.78959 8.15092 2.73034 6.55304Z',
  d12: 'M12 7L13.3892 8.27982L15.2635 8.20615L15.5175 10.0933L17 11.2602L16 12.8716L16.3969 14.7332L14.6108 15.3149L13.7365 17L12 16.2798L10.2635 17L9.38919 15.3149L7.60307 14.7332L8 12.8716L7 11.2602L8.48246 10.0933L8.73648 8.20615L10.6108 8.27982L12 7Z',
  d13: 'M11.4919 6.4484C11.779 6.18387 12.2211 6.18387 12.5082 6.4484L13.6695 7.51823L15.2341 7.45673C15.6206 7.44153 15.9553 7.72276 16.0069 8.10609L16.2203 9.69197L17.4639 10.6709C17.7641 10.9071 17.8387 11.3312 17.6373 11.6557L16.7965 13.0106L17.1305 14.5768C17.2105 14.9522 16.9942 15.3274 16.6292 15.4463L15.1351 15.9329L14.4023 17.3454C14.2229 17.6911 13.8089 17.842 13.4492 17.6928L12 17.0918L10.5509 17.6928C10.1912 17.842 9.77718 17.6911 9.59784 17.3454L8.86495 15.9329L7.37086 15.4463C7.00588 15.3274 6.78956 14.9522 6.86961 14.5768L7.20357 13.0106L6.36278 11.6557C6.16139 11.3312 6.23604 10.9071 6.53615 10.6709L7.77976 9.69197L7.99323 8.10609C8.04483 7.72276 8.37949 7.44153 8.76599 7.45673L10.3306 7.51823L11.4919 6.4484Z',
  d14: 'M7.93033 4.20044C8.03432 4.501 8.09091 4.82366 8.09091 5.15909C8.09091 6.77829 6.77829 8.09091 5.15909 8.09091C4.82366 8.09091 4.501 8.03433 4.20044 7.93033C3.5643 9.14669 3.20455 10.5303 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C13.4697 20.7955 14.8533 20.4357 16.0697 19.7996C15.9657 19.499 15.9091 19.1763 15.9091 18.8409C15.9091 17.2217 17.2217 15.9091 18.8409 15.9091C19.1767 15.9091 19.4993 15.9655 19.7997 16.0694C20.4357 14.8532 20.7955 13.4696 20.7955 12C20.7955 7.1424 16.8576 3.20455 12 3.20455C10.5303 3.20455 9.14669 3.5643 7.93033 4.20044ZM21.3455 17.3161C22.2394 15.7477 22.75 13.9323 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C10.0676 1.25 8.25213 1.76069 6.68374 2.65463C6.23965 2.38384 5.71737 2.22727 5.15909 2.22727C3.53989 2.22727 2.22727 3.53989 2.22727 5.15909C2.22727 5.71737 2.38384 6.23965 2.65463 6.68374C1.76069 8.25213 1.25 10.0676 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C13.9324 22.75 15.7479 22.2393 17.3163 21.3454C17.7604 21.6162 18.2826 21.7727 18.8409 21.7727C20.4601 21.7727 21.7727 20.4601 21.7727 18.8409C21.7727 18.2824 21.6166 17.7603 21.3455 17.3161Z',
};

export const IconSolarSystemStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-stroke-rounded IconSolarSystemStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSolarSystemDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-duotone-rounded IconSolarSystemDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSolarSystemTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-twotone-rounded IconSolarSystemTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconSolarSystemSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-solid-rounded IconSolarSystemSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSolarSystemBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-bulk-rounded IconSolarSystemBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconSolarSystemStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-stroke-sharp IconSolarSystemStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSolarSystemSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-solid-sharp IconSolarSystemSolidSharp"
    >
      <path 
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

export const iconPackOfSolarSystem: TheIconSelfPack = {
  name: 'SolarSystem',
  StrokeRounded: IconSolarSystemStrokeRounded,
  DuotoneRounded: IconSolarSystemDuotoneRounded,
  TwotoneRounded: IconSolarSystemTwotoneRounded,
  SolidRounded: IconSolarSystemSolidRounded,
  BulkRounded: IconSolarSystemBulkRounded,
  StrokeSharp: IconSolarSystemStrokeSharp,
  SolidSharp: IconSolarSystemSolidSharp,
};