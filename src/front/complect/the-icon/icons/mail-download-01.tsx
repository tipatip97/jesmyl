import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 11C22 10.5086 21.9947 10.0172 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C10.5713 19.5004 12.0328 19.5094 13.5 19.4902',
  d2: 'M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5',
  d3: 'M17 19C17.4915 19.5057 18.7998 21.5 19.5 21.5M22 19C21.5085 19.5057 20.2002 21.5 19.5 21.5M19.5 21.5V13.5',
  d4: 'M9.09883 19.4647C11.0393 19.5118 12.9607 19.5118 14.9012 19.4647C18.0497 19.3883 19.6239 19.3501 20.755 18.2539C21.8862 17.1576 21.9189 15.6777 21.9842 12.7179V12.7178C22.0053 11.7661 22.0053 10.8201 21.9842 9.86838C21.9392 7.82941 21.9097 6.49275 21.5259 5.5L12 10.3276L2.47411 5.5C2.09032 6.49275 2.0608 7.82941 2.01576 9.86836C1.99474 10.8201 1.99475 11.7661 2.01577 12.7178C2.08114 15.6777 2.11383 17.1576 3.24496 18.2539C4.37608 19.3501 5.95033 19.3883 9.09883 19.4647Z',
  d5: 'M15.5798 9.662L19.8155 7.26197C20.1765 7.05742 20.3571 6.95514 20.5039 7.03609C20.6507 7.11703 20.6604 7.3198 20.6798 7.7253C20.7058 8.27187 20.72 8.90551 20.736 9.6547C20.7435 10.0071 20.7483 10.7025 20.7503 10.855C20.7579 11.4149 21.1964 11.875 21.7563 11.875C22.2996 11.875 22.7544 11.4409 22.7496 10.8976C22.7481 10.7309 22.7429 10.0288 22.734 9.61215L22.7324 9.53677C22.7012 8.07128 22.6753 6.86037 22.5047 5.87916C22.3229 4.8336 21.9641 3.95811 21.2146 3.20674C20.7913 2.78228 20.3249 2.4827 19.809 2.26889C19.7305 2.22604 19.6464 2.19373 19.5587 2.17311C19.2289 2.05684 18.8796 1.97116 18.5093 1.90676C17.5084 1.73265 16.2665 1.70152 14.7571 1.66368L14.6823 1.66181C12.7265 1.61273 11.2735 1.61274 9.3177 1.66181L9.24285 1.66369C7.73349 1.70152 6.49161 1.73265 5.49064 1.90675C4.42828 2.09154 3.53876 2.45141 2.78536 3.20674C2.0359 3.95811 1.67705 4.8336 1.49526 5.87916C1.32465 6.86038 1.29883 8.07123 1.26758 9.53675L1.26597 9.61214C1.24467 10.6101 1.24468 11.14 1.26599 12.1379L1.2676 12.2133C1.29884 13.6788 1.32466 14.8896 1.49527 15.8709C1.67707 16.9164 2.03592 17.7919 2.78537 18.5433C3.53878 19.2986 4.42829 19.6585 5.49066 19.8433C6.49162 20.0174 7.7335 20.0485 9.24286 20.0863L9.31772 20.0882C9.99929 20.1053 12.1057 20.1164 13.0021 20.1216C13.5532 20.1248 13.9998 19.6782 13.9998 19.127C13.9998 18.5758 13.5532 18.1288 13.002 18.1256C12.1199 18.1204 10.034 18.1095 9.36791 18.0928C7.76497 18.0526 6.67174 18.0226 5.83355 17.8768C5.04027 17.7388 4.5781 17.5124 4.20122 17.1345C3.82038 16.7527 3.59776 16.2968 3.46432 15.5293C3.32261 14.7143 3.29736 13.6553 3.26405 12.0953C3.24334 11.1258 3.24333 10.6242 3.26403 9.6547C3.28003 8.90561 3.29416 8.27204 3.32023 7.72553C3.33957 7.32001 3.34924 7.11725 3.49608 7.0363C3.64292 6.95535 3.82343 7.05763 4.18445 7.26219L8.41985 9.662C9.71946 10.3984 10.8186 10.875 11.9998 10.875C13.181 10.875 14.2801 10.3984 15.5798 9.662Z',
  d6: 'M20.5059 13.375C20.5059 12.8227 20.0581 12.375 19.5059 12.375C18.9536 12.375 18.5059 12.8227 18.5059 13.375L18.5059 17.875L17.9116 17.875C17.736 17.8749 17.5203 17.8747 17.3439 17.8968L17.3405 17.8972C17.2141 17.913 16.638 17.9848 16.3637 18.5504C16.0887 19.1173 16.3907 19.6174 16.456 19.7256L16.4584 19.7296C16.5506 19.8826 16.6848 20.0535 16.7951 20.1941L16.8188 20.2243C17.1135 20.6002 17.4954 21.0844 17.8759 21.4754C18.0657 21.6705 18.283 21.8717 18.5139 22.0306C18.7191 22.1718 19.0693 22.375 19.5 22.375C19.9307 22.375 20.2809 22.1718 20.4861 22.0306C20.717 21.8717 20.9343 21.6705 21.1241 21.4754C21.5046 21.0844 21.8865 20.6002 22.1812 20.2243L22.2049 20.1941C22.3152 20.0535 22.4494 19.8827 22.5416 19.7296L22.544 19.7256C22.6093 19.6174 22.9113 19.1172 22.6363 18.5504C22.362 17.9848 21.7859 17.913 21.6595 17.8972L21.6561 17.8968C21.4797 17.8747 21.264 17.8749 21.0884 17.875L20.5059 17.875L20.5059 13.375Z',
  d7: 'M22 11V3H2V20H13',
  d8: 'M2 6.5L12 11.5L22 6.5',
  d9: 'M19 13L19 20.4946M16 18L19 21L22 18',
  d10: 'M1.25 3.22368C1.25 2.68593 1.68754 2.25 2.22727 2.25H21.7727C22.3125 2.25 22.75 2.68593 22.75 3.22368V12H20.796V8.10217L12.0003 12.5L3.20508 8.1024V18.8026H12V20.75H2.22727C1.68754 20.75 1.25 20.3141 1.25 19.7763V3.22368Z',
  d11: 'M19.0001 12.3359L19.0001 17.9217L20.293 16.6288L21.7072 18.043L18.0001 21.7502L14.293 18.043L15.7072 16.6288L17.0001 17.9217L17.0001 12.3359H19.0001Z',
} as const;

export const IconMailDownload01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-01-stroke-rounded IconMailDownload01StrokeRounded"
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

export const IconMailDownload01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-01-duotone-rounded IconMailDownload01DuotoneRounded"
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

export const IconMailDownload01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-01-twotone-rounded IconMailDownload01TwotoneRounded"
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

export const IconMailDownload01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-01-solid-rounded IconMailDownload01SolidRounded"
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

export const IconMailDownload01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-01-bulk-rounded IconMailDownload01BulkRounded"
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

export const IconMailDownload01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-01-stroke-sharp IconMailDownload01StrokeSharp"
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

export const IconMailDownload01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-download-01-solid-sharp IconMailDownload01SolidSharp"
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

export const iconPackOfMailDownload01: TheIconSelfPack = {
  name: 'MailDownload01',
  StrokeRounded: IconMailDownload01StrokeRounded,
  DuotoneRounded: IconMailDownload01DuotoneRounded,
  TwotoneRounded: IconMailDownload01TwotoneRounded,
  SolidRounded: IconMailDownload01SolidRounded,
  BulkRounded: IconMailDownload01BulkRounded,
  StrokeSharp: IconMailDownload01StrokeSharp,
  SolidSharp: IconMailDownload01SolidSharp,
};