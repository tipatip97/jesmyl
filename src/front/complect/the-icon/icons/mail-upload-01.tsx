import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 19.4902C12.0328 19.5094 10.5713 19.5004 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C21.9947 10.0172 22 10.5086 22 11',
  d2: 'M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5',
  d3: 'M16 16C16.4915 15.4943 17.7998 13.5 18.5 13.5M21 16C20.5085 15.4943 19.2002 13.5 18.5 13.5M18.5 13.5V21.5',
  d4: 'M9.09883 19.4647C11.0393 19.5118 12.9607 19.5118 14.9012 19.4647C18.0497 19.3883 19.6239 19.3501 20.755 18.2539C21.8862 17.1576 21.9189 15.6777 21.9842 12.7179V12.7178C22.0053 11.7661 22.0053 10.8201 21.9842 9.86838C21.9392 7.82941 21.9097 6.49275 21.5259 5.5L12 10.3276L2.47411 5.5C2.09032 6.49275 2.0608 7.82941 2.01576 9.86836C1.99474 10.8201 1.99475 11.7661 2.01577 12.7178C2.08114 15.6777 2.11383 17.1576 3.24496 18.2539C4.37608 19.3501 5.95033 19.3883 9.09883 19.4647Z',
  d5: 'M15.5798 9.787L19.8155 7.38697C20.1765 7.18242 20.3571 7.08014 20.5039 7.16109C20.6507 7.24203 20.6604 7.4448 20.6798 7.8503C20.7058 8.39687 20.72 9.03051 20.736 9.7797C20.7435 10.1321 20.7483 10.8275 20.7503 10.98C20.7579 11.5399 21.1964 12 21.7563 12C22.2996 12 22.7544 11.5659 22.7496 11.0226C22.7481 10.8559 22.7429 10.1538 22.734 9.73715L22.7324 9.66177C22.7012 8.19628 22.6753 6.98537 22.5047 6.00416C22.3229 4.9586 21.9641 4.08311 21.2146 3.33174C20.7913 2.90728 20.3249 2.6077 19.809 2.39389C19.7305 2.35104 19.6464 2.31873 19.5587 2.29811C19.2289 2.18184 18.8796 2.09616 18.5093 2.03176C17.5084 1.85765 16.2665 1.82652 14.7571 1.78868L14.6823 1.78681C12.7265 1.73773 11.2735 1.73774 9.3177 1.78681L9.24285 1.78869C7.73349 1.82652 6.49161 1.85765 5.49064 2.03175C4.42828 2.21654 3.53876 2.57641 2.78536 3.33174C2.0359 4.08311 1.67705 4.9586 1.49526 6.00416C1.32465 6.98538 1.29883 8.19623 1.26758 9.66175L1.26597 9.73714C1.24467 10.7351 1.24468 11.265 1.26599 12.2629L1.2676 12.3383C1.29884 13.8038 1.32466 15.0146 1.49527 15.9959C1.67707 17.0414 2.03592 17.9169 2.78537 18.6683C3.53878 19.4236 4.42829 19.7835 5.49066 19.9683C6.49162 20.1424 7.7335 20.1735 9.24286 20.2113L9.31772 20.2132C9.99929 20.2303 12.1057 20.2414 13.0021 20.2466C13.5532 20.2498 13.9998 19.8032 13.9998 19.252C13.9998 18.7008 13.5532 18.2538 13.002 18.2506C12.1199 18.2454 10.034 18.2345 9.36791 18.2178C7.76497 18.1776 6.67174 18.1476 5.83355 18.0018C5.04027 17.8638 4.5781 17.6374 4.20122 17.2595C3.82038 16.8777 3.59776 16.4218 3.46432 15.6543C3.32261 14.8393 3.29736 13.7803 3.26405 12.2203C3.24334 11.2508 3.24333 10.7492 3.26403 9.7797C3.28003 9.03061 3.29416 8.39704 3.32023 7.85053C3.33957 7.44501 3.34924 7.24225 3.49608 7.1613C3.64292 7.08035 3.82343 7.18263 4.18445 7.38719L8.41985 9.787C9.71946 10.5234 10.8186 11 11.9998 11C13.181 11 14.2801 10.5234 15.5798 9.787Z',
  d6: 'M19.5059 13.2461C19.5059 12.6938 19.0581 12.2461 18.5059 12.2461C17.9536 12.2461 17.5059 12.6938 17.5059 13.2461L17.5059 17.7461L16.9116 17.7461C16.736 17.746 16.5203 17.7458 16.3439 17.7679L16.3405 17.7683C16.2141 17.7841 15.638 17.8559 15.3637 18.4215C15.0887 18.9883 15.3907 19.4885 15.456 19.5967L15.4584 19.6007C15.5506 19.7537 15.6848 19.9246 15.7951 20.0652L15.8188 20.0954C16.1135 20.4712 16.4954 20.9555 16.8759 21.3465C17.0657 21.5416 17.283 21.7428 17.5139 21.9017C17.7191 22.0429 18.0693 22.2461 18.5 22.2461C18.9307 22.2461 19.2809 22.0429 19.4861 21.9017C19.717 21.7428 19.9343 21.5416 20.1241 21.3465C20.5046 20.9555 20.8865 20.4712 21.1812 20.0954L21.2049 20.0652C21.3152 19.9246 21.4494 19.7537 21.5416 19.6007L21.544 19.5967C21.6093 19.4885 21.9113 18.9883 21.6363 18.4215C21.362 17.8559 20.7859 17.7841 20.6595 17.7683L20.6561 17.7679C20.4797 17.7458 20.264 17.746 20.0884 17.7461L19.5059 17.7461L19.5059 13.2461Z',
  d7: 'M22 11V2.5H2V19.5H14',
  d8: 'M2 6L12 11L22 6',
  d9: 'M19 21.5L19 13.9198M16 16.5L19 13.5L22 16.5',
  d10: 'M1.25 3.22368C1.25 2.68593 1.68754 2.25 2.22727 2.25H21.7727C22.3125 2.25 22.75 2.68593 22.75 3.22368V12H20.796V8.10217L12.0003 12.5L3.20508 8.1024V18.8026H12V20.75H2.22727C1.68754 20.75 1.25 20.3141 1.25 19.7763V3.22368Z',
  d11: 'M19.0001 21.75L19.0001 16.1642L20.293 17.4571L21.7072 16.0429L18.0001 12.3358L14.293 16.0429L15.7072 17.4571L17.0001 16.1642L17.0001 21.75H19.0001Z',
} as const;

export const IconMailUpload01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-01-stroke-rounded IconMailUpload01StrokeRounded"
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

export const IconMailUpload01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-01-duotone-rounded IconMailUpload01DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMailUpload01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-01-twotone-rounded IconMailUpload01TwotoneRounded"
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

export const IconMailUpload01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-01-solid-rounded IconMailUpload01SolidRounded"
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

export const IconMailUpload01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-01-bulk-rounded IconMailUpload01BulkRounded"
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

export const IconMailUpload01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-01-stroke-sharp IconMailUpload01StrokeSharp"
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailUpload01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-upload-01-solid-sharp IconMailUpload01SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMailUpload01: TheIconSelfPack = {
  name: 'MailUpload01',
  StrokeRounded: IconMailUpload01StrokeRounded,
  DuotoneRounded: IconMailUpload01DuotoneRounded,
  TwotoneRounded: IconMailUpload01TwotoneRounded,
  SolidRounded: IconMailUpload01SolidRounded,
  BulkRounded: IconMailUpload01BulkRounded,
  StrokeSharp: IconMailUpload01StrokeSharp,
  SolidSharp: IconMailUpload01SolidSharp,
};