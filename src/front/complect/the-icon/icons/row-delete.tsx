import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 18.5C21 19.9045 21 20.6067 20.6208 21.1111C20.4567 21.3295 20.2457 21.517 20 21.6629C19.4325 22 18.6425 22 17.0625 22L6.9375 22C5.35748 22 4.56747 22 3.99997 21.6629C3.75429 21.517 3.54335 21.3295 3.37919 21.1111C3 20.6067 3 19.9045 3 18.5C3 17.0955 3 16.3933 3.37919 15.8889C3.54335 15.6705 3.75429 15.483 3.99997 15.3371C4.56747 15 5.35748 15 6.9375 15L17.0625 15C18.6425 15 19.4325 15 20 15.3371C20.2457 15.483 20.4567 15.6705 20.6208 15.8889C21 16.3933 21 17.0955 21 18.5Z',
  d2: 'M12.0625 4L6.9375 4C5.35748 4 4.56747 4 3.99997 4.33706C3.75429 4.48298 3.54335 4.67048 3.37919 4.88886C3 5.39331 3 6.09554 3 7.5C3 8.90446 3 9.60669 3.37919 10.1111C3.54335 10.3295 3.75429 10.517 3.99997 10.6629C4.56747 11 5.35748 11 6.9375 11L17.0625 11C18.6425 11 19.4325 11 20 10.6629',
  d3: 'M21 7.99936L15 2M21 2.00064L15 8',
  d4: 'M3 7.5C3 6.09554 3 5.39331 3.40447 4.88886C3.57957 4.67048 3.80458 4.48298 4.06663 4.33706C4.67197 4 5.51465 4 7.2 4H16.8C18.4854 4 19.328 4 19.9334 4.33706C20.1954 4.48298 20.4204 4.67048 20.5955 4.88886C21 5.39331 21 6.09554 21 7.5C21 8.90446 21 9.60669 20.5955 10.1111C20.4204 10.3295 20.1954 10.517 19.9334 10.6629C19.328 11 18.4854 11 16.8 11H7.2C5.51465 11 4.67197 11 4.06663 10.6629C3.80458 10.517 3.57957 10.3295 3.40447 10.1111C3 9.60669 3 8.90446 3 7.5Z',
  d5: 'M3 18.5C3 17.0955 3 16.3933 3.40447 15.8889C3.57957 15.6705 3.80458 15.483 4.06663 15.3371C4.67197 15 5.51465 15 7.2 15H16.8C18.4854 15 19.328 15 19.9334 15.3371C20.1954 15.483 20.4204 15.6705 20.5955 15.8889C21 16.3933 21 17.0955 21 18.5C21 19.9045 21 20.6067 20.5955 21.1111C20.4204 21.3295 20.1954 21.517 19.9334 21.6629C19.328 22 18.4854 22 16.8 22H7.2C5.51465 22 4.67197 22 4.06663 21.6629C3.80458 21.517 3.57957 21.3295 3.40447 21.1111C3 20.6067 3 19.9045 3 18.5Z',
  d6: 'M16.9729 14.375C17.7328 14.375 18.3537 14.375 18.8535 14.4202C19.3697 14.4669 19.8364 14.5668 20.258 14.8172C20.5839 15.0108 20.8697 15.263 21.0953 15.5632C21.3959 15.9631 21.5173 16.4124 21.5727 16.8967C21.625 17.3537 21.625 17.9165 21.625 18.5827V18.5828V18.6672V18.6673C21.625 19.3335 21.625 19.8963 21.5727 20.3534C21.5173 20.8376 21.3959 21.2869 21.0953 21.6868C20.8697 21.987 20.5839 22.2392 20.258 22.4328C19.8364 22.6832 19.3697 22.7831 18.8535 22.8298C18.3536 22.875 17.7328 22.875 16.9728 22.875H16.9728L6.7772 22.875H6.77715C6.01716 22.875 5.39636 22.875 4.8965 22.8298C4.38027 22.7831 3.91358 22.6832 3.49198 22.4328C3.16608 22.2392 2.88034 21.987 2.65468 21.6868C2.35407 21.2869 2.23268 20.8376 2.17726 20.3534C2.12496 19.8963 2.12498 19.3335 2.125 18.6672V18.6672V18.5828V18.5828C2.12498 17.9165 2.12496 17.3537 2.17727 16.8966C2.23268 16.4124 2.35407 15.9631 2.65469 15.5632C2.88034 15.263 3.16608 15.0108 3.49198 14.8172C3.91358 14.5668 4.38027 14.4669 4.8965 14.4202C5.39636 14.375 6.01717 14.375 6.77717 14.375H6.77718H16.9728H16.9729Z',
  d7: 'M14.1679 1.41793C14.5584 1.02739 15.1915 1.02735 15.5821 1.41786L17.8753 3.71086L20.1679 1.4185C20.5585 1.02799 21.1916 1.02803 21.5821 1.41857C21.9726 1.80912 21.9726 2.44228 21.5821 2.83279L19.2896 5.125L21.5821 7.41721C21.9726 7.80772 21.9726 8.44088 21.5821 8.83143C21.1916 9.22197 20.5585 9.22201 20.1679 8.8315L17.8753 6.53914L15.5821 8.83214C15.1915 9.22265 14.5584 9.22261 14.1679 8.83207C13.7774 8.44152 13.7774 7.80836 14.1679 7.41786L16.461 5.125L14.1679 2.83214C13.7774 2.44164 13.7774 1.80848 14.1679 1.41793Z',
  d8: 'M12.9028 3.66173C12.7851 3.51107 12.7262 3.43573 12.664 3.40537C12.6017 3.375 12.5221 3.375 12.363 3.375H6.77719C6.0172 3.37499 5.39636 3.37498 4.8965 3.42018C4.38028 3.46686 3.91358 3.56682 3.49198 3.81722C3.16608 4.01079 2.88034 4.26302 2.65469 4.56321C2.35407 4.96312 2.23269 5.41241 2.17727 5.89665C2.12496 6.35369 2.12498 6.91652 2.125 7.58275V7.6672C2.12498 8.33342 2.12496 8.89632 2.17727 9.35335C2.23268 9.83759 2.35407 10.2869 2.65469 10.6868C2.88034 10.987 3.16608 11.2392 3.49198 11.4328C3.91358 11.6832 4.38028 11.7831 4.8965 11.8298C5.39636 11.875 6.01717 11.875 6.77715 11.875L16.9728 11.875C17.7328 11.875 18.3536 11.875 18.8535 11.8298C19.3697 11.7831 19.8364 11.6832 20.258 11.4328C20.5665 11.2495 20.7208 11.1579 20.746 11.025C20.7564 10.97 20.7525 10.9201 20.7335 10.8674C20.6876 10.7401 20.4424 10.6429 19.9521 10.4485C19.6445 10.3265 19.3562 10.1411 19.1073 9.89222L18.2996 9.08454C18.0996 8.88457 17.9996 8.78459 17.8753 8.78459C17.7511 8.78459 17.6511 8.88457 17.4511 9.08454L16.6427 9.89286C15.6663 10.8691 14.0834 10.869 13.1071 9.89267C12.1309 8.91631 12.131 7.3334 13.1073 6.35714L13.9153 5.54929C14.1153 5.34928 14.2153 5.24927 14.2153 5.125C14.2153 5.00073 14.1153 4.90072 13.9153 4.70071L13.1073 3.89286C13.0336 3.81911 12.9654 3.74189 12.9028 3.66173Z',
  d9: 'M21 15H3V22H21V15Z',
  d10: 'M3 11H2.25C2.25 11.4142 2.58579 11.75 3 11.75V11ZM20 11.75H20.75V10.25H20V11.75ZM3 4V3.25C2.58579 3.25 2.25 3.58579 2.25 4H3ZM20 10.25H3V11.75H20V10.25ZM2.25 4V11H3.75V4H2.25ZM3 4.75H13V3.25H3V4.75Z',
  d11: 'M20.5308 22.53C20.6715 22.3891 20.7503 22.198 20.75 21.9989L20.7383 14.9989C20.7376 14.5851 20.402 14.2501 19.9883 14.2501L2 14.2501C1.58579 14.2501 1.25 14.5859 1.25 15.0001L1.25 22.0001C1.25 22.199 1.32902 22.3898 1.46967 22.5305C1.61032 22.6711 1.80109 22.7501 2 22.7501L20 22.7501C20.1991 22.7501 20.3901 22.6709 20.5308 22.53Z',
  d12: 'M19.0431 3.54246L16.7509 1.25L15.3366 2.66414L17.6289 4.95675L15.3359 7.25L16.7502 8.66414L19.0431 6.37104L21.3359 8.66414L22.7502 7.25L20.4572 4.95675L22.7496 2.66414L21.3353 1.25L19.0431 3.54246Z',
  d13: 'M20.7481 9.84611L20.75 10.9989C20.7503 11.198 20.6715 11.3891 20.5308 11.53C20.3901 11.6709 20.1991 11.7501 20 11.7501L2 11.7501C1.80109 11.7501 1.61032 11.6711 1.46967 11.5305C1.32902 11.3898 1.25 11.199 1.25 11.0001L1.25 4.00012C1.25 3.58591 1.58579 3.25012 2 3.25012L14.1528 3.25012L15.861 4.95856L13.5679 7.25191L16.7501 10.4337L19.0429 8.14071L20.7481 9.84611Z',
} as const;

export const IconRowDeleteStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="row-delete-stroke-rounded IconRowDeleteStrokeRounded"
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

export const IconRowDeleteDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="row-delete-duotone-rounded IconRowDeleteDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconRowDeleteTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="row-delete-twotone-rounded IconRowDeleteTwotoneRounded"
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

export const IconRowDeleteSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="row-delete-solid-rounded IconRowDeleteSolidRounded"
    >
      <path 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRowDeleteBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="row-delete-bulk-rounded IconRowDeleteBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRowDeleteStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="row-delete-stroke-sharp IconRowDeleteStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
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

export const IconRowDeleteSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="row-delete-solid-sharp IconRowDeleteSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRowDelete: TheIconSelfPack = {
  name: 'RowDelete',
  StrokeRounded: IconRowDeleteStrokeRounded,
  DuotoneRounded: IconRowDeleteDuotoneRounded,
  TwotoneRounded: IconRowDeleteTwotoneRounded,
  SolidRounded: IconRowDeleteSolidRounded,
  BulkRounded: IconRowDeleteBulkRounded,
  StrokeSharp: IconRowDeleteStrokeSharp,
  SolidSharp: IconRowDeleteSolidSharp,
};