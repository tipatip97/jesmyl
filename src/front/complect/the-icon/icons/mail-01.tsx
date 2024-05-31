import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6',
  d2: 'M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z',
  d3: 'M9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756V13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9392 8.41261 21.9097 7.0282 21.5259 6L12 11L2.47411 6C2.09032 7.0282 2.0608 8.4126 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634Z',
  d4: 'M14.6823 2.78681C12.7265 2.73773 11.2735 2.73774 9.3177 2.78681L9.24285 2.78869C7.73349 2.82652 6.49161 2.85765 5.49064 3.03175C4.42828 3.21654 3.53876 3.57641 2.78536 4.33174C2.0359 5.08311 1.67705 5.9586 1.49526 7.00416C1.32465 7.98538 1.29883 9.19623 1.26758 10.6617L1.26597 10.7371C1.24467 11.7351 1.24468 12.265 1.26599 13.2629L1.2676 13.3383C1.29884 14.8038 1.32466 16.0146 1.49527 16.9959C1.67707 18.0414 2.03592 18.9169 2.78537 19.6683C3.53878 20.4236 4.42829 20.7835 5.49066 20.9683C6.49162 21.1424 7.7335 21.1735 9.24286 21.2113L9.31772 21.2132C11.2735 21.2623 12.7265 21.2623 14.6823 21.2132L14.7571 21.2113C16.2665 21.1735 17.5084 21.1423 18.5094 20.9682C19.5717 20.7835 20.4612 20.4236 21.2146 19.6683C21.9641 18.9169 22.323 18.0414 22.5047 16.9958C22.6754 16.0146 22.7012 14.8038 22.7324 13.3383L22.734 13.2629C22.7553 12.2649 22.7553 11.7351 22.734 10.7371L22.7324 10.6618C22.7012 9.19627 22.6753 7.98538 22.5047 7.00416C22.3229 5.9586 21.9641 5.08311 21.2146 4.33174C20.7913 3.90728 20.3249 3.6077 19.809 3.39389C19.7305 3.35104 19.6464 3.31873 19.5587 3.29811C19.2289 3.18184 18.8796 3.09616 18.5093 3.03176C17.5084 2.85765 16.2665 2.82652 14.7571 2.78868L14.6823 2.78681ZM20.6798 8.8503C20.6604 8.44479 20.6507 8.24204 20.5039 8.16109C20.3571 8.08014 20.1765 8.18242 19.8155 8.38697L15.5798 10.787C14.2801 11.5234 13.181 12 11.9998 12C10.8186 12 9.71946 11.5234 8.41985 10.787L4.18445 8.38719C3.82343 8.18263 3.64292 8.08035 3.49608 8.1613C3.34924 8.24225 3.33957 8.44501 3.32023 8.85053C3.29416 9.39704 3.28003 10.0306 3.26403 10.7797C3.24333 11.7492 3.24334 12.2508 3.26405 13.2203C3.29736 14.7803 3.32261 15.8393 3.46432 16.6543C3.59776 17.4218 3.82038 17.8777 4.20122 18.2595C4.5781 18.6374 5.04027 18.8638 5.83355 19.0018C6.67174 19.1476 7.76497 19.1776 9.36791 19.2178C11.2902 19.266 12.7098 19.266 14.6321 19.2178C16.235 19.1776 17.3283 19.1476 18.1665 19.0018C18.9597 18.8638 19.4219 18.6374 19.7988 18.2595C20.1796 17.8777 20.4023 17.4218 20.5357 16.6543C20.6774 15.8393 20.7027 14.7803 20.736 13.2203C20.7567 12.2508 20.7567 11.7492 20.736 10.7797C20.72 10.0305 20.7058 9.39687 20.6798 8.8503Z',
  d5: 'M1.26758 10.6615C1.29883 9.19598 1.32465 7.98513 1.49526 7.00391L3.74387 8.16105C3.64318 8.12549 3.56583 8.1226 3.49608 8.16105C3.34924 8.242 3.33957 8.44476 3.32023 8.85028C3.29416 9.39679 3.28003 10.0304 3.26403 10.7795C3.24333 11.749 3.24334 12.2505 3.26405 13.2201C3.29736 14.7801 3.32261 15.8391 3.46432 16.6541C3.59776 17.4215 3.82038 17.8775 4.20122 18.2593C4.5781 18.6371 5.04027 18.8636 5.83355 19.0016C6.67174 19.1474 7.76497 19.1773 9.36791 19.2176C11.2902 19.2658 12.7098 19.2658 14.6321 19.2175C16.235 19.1773 17.3283 19.1474 18.1665 19.0016C18.9597 18.8636 19.4219 18.6371 19.7988 18.2593C20.1796 17.8775 20.4023 17.4215 20.5357 16.6541C20.6774 15.8391 20.7027 14.78 20.736 13.22C20.7567 12.2505 20.7567 11.749 20.736 10.7795C20.72 10.0303 20.7058 9.39662 20.6798 8.85005C20.6604 8.44455 20.6507 8.24179 20.5039 8.16084C20.434 8.12231 20.3565 8.12529 20.2555 8.16105L22.5047 7.00391C22.6753 7.98512 22.7012 9.19603 22.7324 10.6615L22.734 10.7369C22.7553 11.7348 22.7553 12.2647 22.734 13.2626L22.7324 13.338C22.7012 14.8035 22.6754 16.0144 22.5047 16.9956C22.323 18.0411 21.9641 18.9166 21.2146 19.668C20.4612 20.4233 19.5717 20.7832 18.5094 20.968C17.5084 21.1421 16.2665 21.1732 14.7571 21.2111L14.6823 21.2129C12.7265 21.262 11.2735 21.262 9.31772 21.213L9.24286 21.2111C7.7335 21.1732 6.49162 21.1421 5.49066 20.968C4.42829 20.7832 3.53878 20.4233 2.78537 19.668C2.03592 18.9166 1.67707 18.0412 1.49527 16.9956C1.32466 16.0144 1.29884 14.8035 1.2676 13.338L1.26599 13.2626C1.24468 12.2647 1.24467 11.7348 1.26597 10.7369L1.26758 10.6615Z',
  d6: 'M9.31854 2.78681C11.2743 2.73774 12.7274 2.73773 14.6831 2.78681L14.758 2.78868C16.2673 2.82652 17.5092 2.85765 18.5102 3.03176C18.8805 3.09616 19.2297 3.18184 19.5596 3.29811C19.6472 3.31873 19.7314 3.35104 19.8098 3.39389C20.3257 3.6077 20.7921 3.90728 21.2155 4.33174C21.9649 5.08311 22.3238 5.9586 22.5056 7.00416L20.2563 8.1613C20.1452 8.20067 20.0056 8.27978 19.8164 8.38697L15.5806 10.787C14.281 11.5234 13.1818 12 12.0006 12C10.8194 12 9.7203 11.5234 8.42069 10.787L4.18529 8.38719C3.99576 8.2798 3.85598 8.2006 3.74471 8.1613L1.49609 7.00416C1.67789 5.9586 2.03674 5.08311 2.78619 4.33174C3.5396 3.57641 4.42911 3.21654 5.49148 3.03175C6.49245 2.85765 7.73433 2.82652 9.24369 2.78869L9.31854 2.78681Z',
  d7: 'M2 3.5H22V20.5H2V3.5Z',
  d8: 'M2 7L12 12L22 7',
  d9: 'M1.25 3.72368C1.25 3.18593 1.68754 2.75 2.22727 2.75H21.7727C22.3125 2.75 22.75 3.18593 22.75 3.72368V20.2763C22.75 20.8141 22.3125 21.25 21.7727 21.25H2.22727C1.68754 21.25 1.25 20.8141 1.25 20.2763V3.72368ZM3.20508 19.3026V8.6024L12.0003 13L20.796 8.60217V19.3026H3.20508Z',
} as const;

export const IconMail01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-01-stroke-rounded IconMail01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMail01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-01-duotone-rounded IconMail01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMail01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-01-twotone-rounded IconMail01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMail01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-01-solid-rounded IconMail01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMail01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-01-bulk-rounded IconMail01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMail01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-01-stroke-sharp IconMail01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconMail01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-01-solid-sharp IconMail01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMail01: TheIconSelfPack = {
  name: 'Mail01',
  StrokeRounded: IconMail01StrokeRounded,
  DuotoneRounded: IconMail01DuotoneRounded,
  TwotoneRounded: IconMail01TwotoneRounded,
  SolidRounded: IconMail01SolidRounded,
  BulkRounded: IconMail01BulkRounded,
  StrokeSharp: IconMail01StrokeSharp,
  SolidSharp: IconMail01SolidSharp,
};