import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5',
  d2: 'M21.9928 11C22.0047 10.1743 22.0019 10.3514 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C10.0691 19.4878 10.0345 19.5 11 19.5',
  d3: 'M14 14.5L17.5 18M17.5 18L21 21.5M17.5 18L14 21.5M17.5 18L21 14.5',
  d4: 'M9.09883 19.4647C11.0393 19.5118 12.9607 19.5118 14.9012 19.4647C18.0497 19.3883 19.6239 19.3501 20.755 18.2539C21.8862 17.1576 21.9189 15.6777 21.9842 12.7179V12.7178C22.0053 11.7661 22.0053 10.8201 21.9842 9.86838C21.9392 7.82941 21.9097 6.49275 21.5259 5.5L12 10.3276L2.47411 5.5C2.09032 6.49275 2.0608 7.82941 2.01576 9.86836C1.99474 10.8201 1.99475 11.7661 2.01577 12.7178C2.08114 15.6777 2.11383 17.1576 3.24496 18.2539C4.37608 19.3501 5.95033 19.3883 9.09883 19.4647Z',
  d5: 'M9.3177 1.66182C11.2735 1.61273 12.7265 1.61272 14.6823 1.66182L14.7571 1.66369C16.2665 1.70154 17.5084 1.73268 18.5093 1.90684C18.8796 1.97126 19.2289 2.05696 19.5587 2.17327C19.6464 2.1939 19.7305 2.22621 19.809 2.26908C20.3249 2.48295 20.7913 2.78262 21.2146 3.20721C21.9641 3.9588 22.3229 4.83455 22.5047 5.88042C22.6753 6.86192 22.7012 8.07319 22.7324 9.53911L22.734 9.61451C22.7471 10.2279 22.7522 10.6645 22.7492 11.1415C22.7457 11.6935 22.2868 12.1314 21.7351 12.1197C21.1833 12.1079 20.7478 11.6509 20.7509 11.0989C20.7533 10.652 20.7484 10.2387 20.736 9.65708C20.72 8.90766 20.7058 8.27383 20.6798 7.7271C20.6604 7.32148 20.6507 7.11866 20.5039 7.03769C20.3571 6.95672 20.1765 7.05902 19.8155 7.26364L15.5798 9.66437C14.2801 10.401 13.181 10.8777 11.9998 10.8777C10.8186 10.8777 9.71946 10.401 8.41985 9.66437L4.18445 7.26385C3.82343 7.05924 3.64292 6.95693 3.49608 7.0379C3.34924 7.11887 3.33957 7.32169 3.32023 7.72733C3.29416 8.274 3.28003 8.90777 3.26403 9.65707C3.24333 10.6269 3.24334 11.1286 3.26405 12.0984C3.29736 13.6589 3.32261 14.7182 3.46432 15.5334C3.59776 16.3011 3.82038 16.7572 4.20122 17.1391C4.5781 17.5171 5.04027 17.7436 5.83355 17.8816C6.67174 18.0275 7.76497 18.0574 9.36791 18.0977C9.94927 18.1123 10.4846 18.1224 11.0018 18.1282C11.553 18.1344 11.9998 18.5808 11.9998 19.1322C11.9998 19.6835 11.553 20.131 11.0018 20.1249C10.4684 20.1191 9.91661 20.1087 9.31772 20.0937L9.24286 20.0918C7.7335 20.0539 6.49162 20.0228 5.49066 19.8486C4.42829 19.6638 3.53878 19.3038 2.78537 18.5483C2.03592 17.7967 1.67707 16.9209 1.49527 15.8751C1.32466 14.8935 1.29884 13.6823 1.2676 12.2164L1.26599 12.141C1.24468 11.1428 1.24467 10.6127 1.26597 9.6145L1.26758 9.53909C1.29883 8.07314 1.32465 6.86193 1.49526 5.88041C1.67705 4.83455 2.0359 3.9588 2.78536 3.2072C3.53876 2.45165 4.42828 2.09168 5.49064 1.90684C6.49161 1.73268 7.73349 1.70154 9.24285 1.6637L9.3177 1.66182Z',
  d6: 'M21.7071 13.6679C22.0976 14.0584 22.0976 14.6916 21.7071 15.0821L18.9142 17.875L21.7071 20.6679C22.0976 21.0584 22.0976 21.6916 21.7071 22.0821C21.3166 22.4726 20.6834 22.4726 20.2929 22.0821L17.5 19.2892L14.7071 22.0821C14.3166 22.4726 13.6834 22.4726 13.2929 22.0821C12.9024 21.6916 12.9024 21.0584 13.2929 20.6679L16.0858 17.875L13.2929 15.0821C12.9024 14.6916 12.9024 14.0584 13.2929 13.6679C13.6834 13.2774 14.3166 13.2774 14.7071 13.6679L17.5 16.4608L20.2929 13.6679C20.6834 13.2774 21.3166 13.2774 21.7071 13.6679Z',
  d7: 'M22 11V2.5H2V19.5H11',
  d8: 'M2 6L12 11L22 6',
  d9: 'M1.24994 2.72368C1.24994 2.18593 1.68748 1.75 2.22721 1.75H21.7727C22.3124 1.75 22.7499 2.18593 22.7499 2.72368V12.5H20.7959V7.60217L12.0002 12L3.20502 7.6024V18.3026H11.9999V20.25H2.22721C1.68748 20.25 1.24994 19.8141 1.24994 19.2763V2.72368Z',
  d10: 'M16.1288 18.0429L13.3359 20.8358L14.7501 22.25L17.543 19.4571L20.3359 22.25L21.7501 20.8358L18.9572 18.0429L21.7501 15.25L20.3359 13.8358L17.543 16.6287L14.7501 13.8358L13.3359 15.25L16.1288 18.0429Z',
} as const;

export const IconMailRemove01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-01-stroke-rounded IconMailRemove01StrokeRounded"
    >
      <path 
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

export const IconMailRemove01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-01-duotone-rounded IconMailRemove01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMailRemove01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-01-twotone-rounded IconMailRemove01TwotoneRounded"
    >
      <path 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailRemove01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-01-solid-rounded IconMailRemove01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailRemove01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-01-bulk-rounded IconMailRemove01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailRemove01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-01-stroke-sharp IconMailRemove01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailRemove01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-01-solid-sharp IconMailRemove01SolidSharp"
    >
      <path 
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

export const iconPackOfMailRemove01: TheIconSelfPack = {
  name: 'MailRemove01',
  StrokeRounded: IconMailRemove01StrokeRounded,
  DuotoneRounded: IconMailRemove01DuotoneRounded,
  TwotoneRounded: IconMailRemove01TwotoneRounded,
  SolidRounded: IconMailRemove01SolidRounded,
  BulkRounded: IconMailRemove01BulkRounded,
  StrokeSharp: IconMailRemove01StrokeSharp,
  SolidSharp: IconMailRemove01SolidSharp,
};