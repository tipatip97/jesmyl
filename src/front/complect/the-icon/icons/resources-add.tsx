import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 6C2.5 4.45956 2.5 3.68934 2.84673 3.12353C3.04074 2.80693 3.30693 2.54074 3.62353 2.34673C4.18934 2 4.95956 2 6.5 2C8.04044 2 8.81066 2 9.37647 2.34673C9.69307 2.54074 9.95926 2.80693 10.1533 3.12353C10.5 3.68934 10.5 4.45956 10.5 6C10.5 7.54044 10.5 8.31066 10.1533 8.87647C9.95926 9.19307 9.69307 9.45926 9.37647 9.65327C8.81066 10 8.04044 10 6.5 10C4.95956 10 4.18934 10 3.62353 9.65327C3.30693 9.45926 3.04074 9.19307 2.84673 8.87647C2.5 8.31066 2.5 7.54044 2.5 6Z',
  d2: 'M3.78166 14.7817C4.82852 13.7348 5.35195 13.2114 5.9721 13.0625C6.3191 12.9792 6.6809 12.9792 7.0279 13.0625C7.64805 13.2114 8.17148 13.7348 9.21834 14.7817C10.2652 15.8285 10.7886 16.3519 10.9375 16.9721C11.0208 17.3191 11.0208 17.6809 10.9375 18.0279C10.7886 18.6481 10.2652 19.1715 9.21834 20.2183C8.17148 21.2652 7.64805 21.7886 7.02791 21.9375C6.6809 22.0208 6.3191 22.0208 5.9721 21.9375C5.35195 21.7886 4.82852 21.2652 3.78166 20.2183C2.7348 19.1715 2.21137 18.6481 2.06248 18.0279C1.97917 17.6809 1.97917 17.3191 2.06248 16.9721C2.21137 16.3519 2.7348 15.8285 3.78166 14.7817Z',
  d3: 'M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z',
  d4: 'M18 2V10M22 6L14 6',
  d5: 'M6.53656 1.25C7.2757 1.24999 7.88322 1.24998 8.37471 1.29671C8.88544 1.34527 9.34779 1.44953 9.76834 1.70725C10.1859 1.9631 10.5369 2.31414 10.7928 2.73166C11.0505 3.15221 11.1547 3.61456 11.2033 4.12529C11.25 4.61678 11.25 5.22429 11.25 5.96343V5.96344V6.03656V6.03658C11.25 6.77571 11.25 7.38322 11.2033 7.87471C11.1547 8.38544 11.0505 8.84779 10.7928 9.26834C10.5369 9.68586 10.1859 10.0369 9.76834 10.2928C9.34779 10.5505 8.88544 10.6547 8.37471 10.7033C7.88322 10.75 7.27571 10.75 6.53658 10.75H6.53656H6.46344H6.46343C5.72429 10.75 5.11678 10.75 4.62529 10.7033C4.11456 10.6547 3.65221 10.5505 3.23166 10.2928C2.81414 10.0369 2.4631 9.68586 2.20725 9.26834C1.94953 8.84779 1.84527 8.38544 1.79671 7.87471C1.74998 7.38322 1.74999 6.7757 1.75 6.03656V6.03655V5.96345V5.96344C1.74999 5.2243 1.74998 4.61679 1.79671 4.12529C1.84527 3.61456 1.94953 3.15221 2.20725 2.73166C2.4631 2.31414 2.81414 1.9631 3.23166 1.70725C3.65221 1.44953 4.11456 1.34527 4.62529 1.29671C5.11678 1.24998 5.7243 1.24999 6.46344 1.25H6.46345H6.53655H6.53656Z',
  d6: 'M5.79701 12.3332C6.2591 12.2223 6.74089 12.2223 7.20299 12.3332C7.67004 12.4453 8.05911 12.6917 8.44086 13.0072C8.80771 13.3103 9.2214 13.724 9.72295 14.2256L9.72297 14.2256L9.77437 14.277C10.276 14.7786 10.6897 15.1923 10.9928 15.5591C11.3083 15.9409 11.5547 16.33 11.6668 16.797C11.7777 17.2591 11.7777 17.7409 11.6668 18.203C11.5547 18.67 11.3083 19.0591 10.9928 19.4409C10.6897 19.8077 10.276 20.2214 9.77438 20.723L9.72297 20.7744L9.72294 20.7744C9.22139 21.276 8.80771 21.6897 8.44086 21.9928C8.05912 22.3083 7.67004 22.5547 7.20299 22.6668C6.7409 22.7777 6.2591 22.7777 5.79701 22.6668C5.32996 22.5547 4.94089 22.3083 4.55914 21.9928C4.19229 21.6897 3.7786 21.276 3.27705 20.7744L3.27703 20.7744L3.22562 20.723C2.72404 20.2214 2.31033 19.8077 2.00718 19.4409C1.69173 19.0591 1.44533 18.67 1.3332 18.203C1.22227 17.7409 1.22227 17.2591 1.3332 16.797C1.44533 16.33 1.69173 15.9409 2.00718 15.5591C2.31033 15.1923 2.72404 14.7786 3.22562 14.277L3.22563 14.277L3.25133 14.2513L3.27703 14.2256L3.27703 14.2256C3.77859 13.724 4.19229 13.3103 4.55914 13.0072C4.94088 12.6917 5.32996 12.4453 5.79701 12.3332Z',
  d7: 'M18.0366 13.25C18.7757 13.25 19.3832 13.25 19.8747 13.2967C20.3854 13.3453 20.8478 13.4495 21.2683 13.7072C21.6859 13.9631 22.0369 14.3141 22.2928 14.7317C22.5505 15.1522 22.6547 15.6146 22.7033 16.1253C22.75 16.6168 22.75 17.2243 22.75 17.9634V17.9634V18.0366V18.0366C22.75 18.7757 22.75 19.3832 22.7033 19.8747C22.6547 20.3854 22.5505 20.8478 22.2928 21.2683C22.0369 21.6859 21.6859 22.0369 21.2683 22.2928C20.8478 22.5505 20.3854 22.6547 19.8747 22.7033C19.3832 22.75 18.7757 22.75 18.0366 22.75H18.0366H17.9634H17.9634C17.2243 22.75 16.6168 22.75 16.1253 22.7033C15.6146 22.6547 15.1522 22.5505 14.7317 22.2928C14.3141 22.0369 13.9631 21.6859 13.7072 21.2683C13.4495 20.8478 13.3453 20.3854 13.2967 19.8747C13.25 19.3832 13.25 18.7757 13.25 18.0366V18.0365V17.9635V17.9634C13.25 17.2243 13.25 16.6168 13.2967 16.1253C13.3453 15.6146 13.4495 15.1522 13.7072 14.7317C13.9631 14.3141 14.3141 13.9631 14.7317 13.7072C15.1522 13.4495 15.6146 13.3453 16.1253 13.2967C16.6168 13.25 17.2243 13.25 17.9634 13.25H17.9635H18.0365H18.0366Z',
  d8: 'M17.75 1.25C18.3023 1.25 18.75 1.69772 18.75 2.25V5.25H21.75C22.3023 5.25 22.75 5.69772 22.75 6.25C22.75 6.80228 22.3023 7.25 21.75 7.25H18.75V10.25C18.75 10.8023 18.3023 11.25 17.75 11.25C17.1977 11.25 16.75 10.8023 16.75 10.25V7.25H13.75C13.1977 7.25 12.75 6.80229 12.75 6.25C12.75 5.69772 13.1977 5.25 13.75 5.25L16.75 5.25V2.25C16.75 1.69772 17.1977 1.25 17.75 1.25Z',
  d9: 'M10 2H2V10H10V2Z',
  d10: 'M22 14H14V22H22V14Z',
  d11: 'M10.5 18L6 13.5L1.5 18L6 22.5L10.5 18Z',
  d12: 'M18 1.5V10.5M22.5 6H13.5',
  d13: 'M1.46967 1.46967C1.61032 1.32902 1.80109 1.25 2 1.25H10C10.4142 1.25 10.75 1.58579 10.75 2V10C10.75 10.4142 10.4142 10.75 10 10.75H2C1.58579 10.75 1.25 10.4142 1.25 10V2C1.25 1.80109 1.32902 1.61032 1.46967 1.46967Z',
  d14: 'M13.4697 13.4697C13.6103 13.329 13.8011 13.25 14 13.25H22C22.4142 13.25 22.75 13.5858 22.75 14V22C22.75 22.4142 22.4142 22.75 22 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22V14C13.25 13.8011 13.329 13.6103 13.4697 13.4697Z',
  d15: 'M5.96967 12.4697C6.26256 12.1768 6.73744 12.1768 7.03033 12.4697L11.5303 16.9697C11.8232 17.2626 11.8232 17.7374 11.5303 18.0303L7.03033 22.5303C6.73744 22.8232 6.26256 22.8232 5.96967 22.5303L1.46967 18.0303C1.17678 17.7374 1.17678 17.2626 1.46967 16.9697L5.96967 12.4697Z',
  d16: 'M17 5V1.5H19V5H22.5V7H19V10.5H17V7H13.5V5H17Z',
} as const;

export const IconResourcesAddStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resources-add-stroke-rounded IconResourcesAddStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconResourcesAddDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resources-add-duotone-rounded IconResourcesAddDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconResourcesAddTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resources-add-twotone-rounded IconResourcesAddTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconResourcesAddSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resources-add-solid-rounded IconResourcesAddSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconResourcesAddBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resources-add-bulk-rounded IconResourcesAddBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconResourcesAddStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resources-add-stroke-sharp IconResourcesAddStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
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

export const IconResourcesAddSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="resources-add-solid-sharp IconResourcesAddSolidSharp"
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
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfResourcesAdd: TheIconSelfPack = {
  name: 'ResourcesAdd',
  StrokeRounded: IconResourcesAddStrokeRounded,
  DuotoneRounded: IconResourcesAddDuotoneRounded,
  TwotoneRounded: IconResourcesAddTwotoneRounded,
  SolidRounded: IconResourcesAddSolidRounded,
  BulkRounded: IconResourcesAddBulkRounded,
  StrokeSharp: IconResourcesAddStrokeSharp,
  SolidSharp: IconResourcesAddSolidSharp,
};