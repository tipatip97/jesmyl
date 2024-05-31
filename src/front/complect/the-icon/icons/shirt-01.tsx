import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 9V16.6841C6 18.4952 6 19.4008 6.58579 19.9635C7.89989 21.2257 15.8558 21.4604 17.4142 19.9635C18 19.4008 18 18.4952 18 16.6841V9',
  d2: 'M5.74073 12L3.04321 9.38915C2.34774 8.71602 2 8.37946 2 7.96123C2 7.543 2.34774 7.20644 3.04321 6.53331L5.04418 4.59664C5.39088 4.26107 5.56423 4.09329 5.77088 3.96968C5.97753 3.84607 6.21011 3.77103 6.67526 3.62096L8.32112 3.08997C8.56177 3.01233 8.68209 2.97351 8.76391 3.02018C8.84573 3.06686 8.87157 3.2013 8.92324 3.47018C9.19358 4.87684 10.4683 5.94185 12 5.94185C13.5317 5.94185 14.8064 4.87684 15.0768 3.47018C15.1284 3.2013 15.1543 3.06686 15.2361 3.02018C15.3179 2.97351 15.4382 3.01233 15.6789 3.08997L17.3247 3.62096C17.7899 3.77103 18.0225 3.84607 18.2291 3.96968C18.4358 4.09329 18.6091 4.26107 18.9558 4.59664L20.9568 6.53331C21.6523 7.20644 22 7.543 22 7.96123C22 8.37946 21.6523 8.71602 20.9568 9.38915L18.2593 12',
  d3: 'M6.67526 3.62096L8.32112 3.08997C8.56177 3.01233 8.68209 2.97351 8.76391 3.02018C8.84573 3.06686 8.87157 3.2013 8.92324 3.47018C9.19358 4.87684 10.4683 5.94185 12 5.94185C13.5317 5.94185 14.8064 4.87684 15.0768 3.47018C15.1284 3.2013 15.1543 3.06686 15.2361 3.02018C15.3179 2.97351 15.4382 3.01233 15.6789 3.08997L17.3247 3.62096C17.7899 3.77103 18.0225 3.84607 18.2291 3.96968C18.4358 4.09329 18.6091 4.26107 18.9558 4.59664L20.9568 6.53331C21.6523 7.20644 22 7.543 22 7.96123C22 8.37946 21.6523 8.71602 20.9568 9.38915L18.2593 12L18 19C16.3333 20.3333 11.6 22.2 6 19L5.74073 12L3.04321 9.38915C2.34774 8.71602 2 8.37946 2 7.96123C2 7.543 2.34774 7.20644 3.04321 6.53331L5.04418 4.59664L5.0442 4.59662C5.39089 4.26107 5.56424 4.09329 5.77088 3.96968C5.97753 3.84607 6.21011 3.77103 6.67526 3.62096Z',
  d4: 'M18.75 16.7375C18.75 17.5975 18.7501 18.3206 18.6695 18.8959C18.5839 19.5079 18.3945 20.0618 17.9338 20.5044C17.6314 20.7948 17.2261 20.999 16.8119 21.1498C16.3875 21.3042 15.8971 21.4225 15.3762 21.5117C14.3338 21.6902 13.1047 21.7631 11.899 21.7481C10.6927 21.733 9.48274 21.6295 8.47694 21.444C7.97467 21.3514 7.50781 21.2355 7.11111 21.0932C6.73067 20.9566 6.34441 20.7715 6.06624 20.5044C5.60553 20.0618 5.41612 19.5079 5.33046 18.8959C5.24994 18.3206 5.24996 17.5975 5.25 16.7374L5.25 12.8216C5.25 12.6961 5.25 12.6334 5.2262 12.5773C5.2024 12.5211 5.15732 12.4775 5.06715 12.3903L2.48894 9.89645C2.16933 9.58718 1.87733 9.30463 1.67181 9.0439C1.4465 8.7581 1.25 8.4079 1.25 7.96122C1.25 7.51455 1.4465 7.16435 1.67181 6.87854C1.87733 6.61782 2.16933 6.33527 2.48895 6.02599L4.57193 4.00991L4.57193 4.00991C4.87072 3.72042 5.10334 3.49504 5.38587 3.32603C5.66742 3.15762 5.97769 3.05769 6.37873 2.92853L8.1132 2.36896L8.11321 2.36896C8.21231 2.33689 8.34302 2.29459 8.46005 2.27202C8.58821 2.24731 8.85936 2.21118 9.13553 2.36872C9.43282 2.5383 9.53328 2.8199 9.56985 2.93532C9.60677 3.05184 9.65977 3.32862 9.65977 3.32862C9.86028 4.37198 10.8175 5.19184 12 5.19184C13.1825 5.19184 14.1397 4.37198 14.3402 3.32863C14.3402 3.32863 14.3932 3.05184 14.4301 2.93532C14.4667 2.8199 14.5672 2.5383 14.8645 2.36872C15.1406 2.21118 15.4118 2.24731 15.54 2.27202C15.657 2.29459 15.7877 2.33689 15.8868 2.36896L17.6213 2.92853C18.0223 3.05769 18.3326 3.15762 18.6141 3.32603C18.8967 3.49504 19.1293 3.72042 19.4281 4.00993L19.4281 4.00994L21.511 6.02597C21.8307 6.33525 22.1227 6.61781 22.3282 6.87854C22.5535 7.16435 22.75 7.51455 22.75 7.96122C22.75 8.4079 22.5535 8.7581 22.3282 9.0439C22.1227 9.30463 21.8307 9.58719 21.511 9.89647L18.9328 12.3903C18.8427 12.4775 18.7976 12.5211 18.7738 12.5773C18.75 12.6334 18.75 12.6961 18.75 12.8216V16.7374V16.7375Z',
  d5: 'M6.17367 11.9995L2.00293 7.90983C1.99933 7.90629 1.99901 7.90067 2.00219 7.89676L5.99796 2.99971L8.99658 2.99995C8.99658 4.49951 10.1635 5.94205 12 5.94205C13.8364 5.94205 14.9966 4.45544 14.9966 2.99951L18.002 2.99971L21.9978 7.89676C22.001 7.90066 22.0007 7.90629 21.9971 7.90982L18.002 11.8268',
  d6: 'M5.99658 8.99951V20.9995H17.9966V8.99951',
  d7: 'M6.00001 2.25C5.77217 2.25 5.55668 2.35357 5.41435 2.53148L1.41435 7.53148C1.17562 7.8299 1.19945 8.2601 1.46968 8.53033L5.25 12.3107V21.75H18.75V12.3107L22.5303 8.53033C22.8006 8.2601 22.8244 7.8299 22.5857 7.53148L18.5857 2.53148C18.4433 2.35357 18.2278 2.25 18 2.25H14.25V3C14.25 4.24264 13.2426 5.25 12 5.25C10.7574 5.25 9.75001 4.24264 9.75001 3V2.25H6.00001Z',
} as const;

export const IconShirt01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shirt-01-stroke-rounded IconShirt01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShirt01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shirt-01-duotone-rounded IconShirt01DuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShirt01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shirt-01-twotone-rounded IconShirt01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShirt01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shirt-01-solid-rounded IconShirt01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShirt01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shirt-01-bulk-rounded IconShirt01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShirt01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shirt-01-stroke-sharp IconShirt01StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShirt01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shirt-01-solid-sharp IconShirt01SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShirt01: TheIconSelfPack = {
  name: 'Shirt01',
  StrokeRounded: IconShirt01StrokeRounded,
  DuotoneRounded: IconShirt01DuotoneRounded,
  TwotoneRounded: IconShirt01TwotoneRounded,
  SolidRounded: IconShirt01SolidRounded,
  BulkRounded: IconShirt01BulkRounded,
  StrokeSharp: IconShirt01StrokeSharp,
  SolidSharp: IconShirt01SolidSharp,
};