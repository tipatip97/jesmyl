import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 19C2.02342 19.7767 2.11012 20.24 2.43105 20.5607C2.87077 21 3.57849 21 4.99393 21H7.965C8.74255 21 9.13132 21 9.17551 20.8603C9.2197 20.7206 8.88712 20.4868 8.22198 20.0192C5.86888 18.3648 3.99306 15.5091 3.99306 12.2636C3.99306 7.14744 7.57789 3 12 3C16.4221 3 20.0069 7.14744 20.0069 12.2636C20.0069 15.5091 18.1311 18.3648 15.778 20.0192C15.1129 20.4868 14.7803 20.7206 14.8245 20.8603C14.8687 21 15.2574 21 16.035 21H19.0061C20.4215 21 21.1292 21 21.5689 20.5607C21.8899 20.24 21.9766 19.7767 22 19',
  d2: 'M11.9991 3C7.57701 3 3.99219 7.14744 3.99219 12.2636C3.99219 15.5091 5.868 18.3648 8.2211 20.0192L8.22115 20.0192C8.47474 20.1975 8.67998 20.3418 8.83444 20.4599C9.16531 20.7128 9.33075 20.8392 9.36194 20.8498C9.39313 20.8603 9.50232 20.8603 9.72071 20.8603H14.2775C14.4959 20.8603 14.6051 20.8603 14.6363 20.8498C14.6675 20.8392 14.8329 20.7128 15.1638 20.4599C15.3183 20.3418 15.5235 20.1975 15.7771 20.0192C18.1302 18.3648 20.0061 15.5091 20.0061 12.2636C20.0061 7.14744 16.4212 3 11.9991 3Z',
  d3: 'M12 3C7.57789 3 3.99306 7.14744 3.99306 12.2636C3.99306 15.5091 5.86888 18.3648 8.22198 20.0192C8.88712 20.4868 9.2197 20.7206 9.17551 20.8603C9.13132 21 8.74255 21 7.965 21H4.99393C3.57849 21 2.87077 21 2.43105 20.5607C2.11012 20.24 2.02342 19.7767 2 19',
  d4: 'M12 4C8.26205 4 4.99307 7.55791 4.99307 12.2636C4.99307 15.1215 6.65529 17.6953 8.79713 19.2011C9.09893 19.4133 9.41268 19.6338 9.60606 19.7955C9.70247 19.876 9.83862 19.9972 9.94889 20.1496C10.042 20.2782 10.2863 20.6647 10.1289 21.1619C9.97658 21.6436 9.57569 21.8247 9.41444 21.8825C9.23544 21.9466 9.05453 21.9681 8.93228 21.9787C8.68812 22.0001 8.35975 22 8.00929 22H8.00918H4.93233C4.27758 22.0001 3.68947 22.0001 3.21347 21.9362C2.69392 21.8664 2.16092 21.7044 1.72426 21.2681C1.09543 20.6398 1.02344 19.792 1.00046 19.0301C0.983817 18.4781 1.41783 18.0171 1.96987 18.0005C2.5219 17.9838 2.98291 18.4178 2.99955 18.9699C3.01076 19.3416 3.03638 19.5613 3.07277 19.7035C3.10214 19.8183 3.1288 19.8444 3.13696 19.8524L3.13786 19.8532C3.14372 19.8599 3.19247 19.9154 3.47974 19.954C3.80651 19.9979 4.25797 20 4.99394 20H6.5979C4.53627 18.1423 2.99307 15.3859 2.99307 12.2636C2.99307 6.73696 6.89375 2 12 2C17.1063 2 21.0069 6.73696 21.0069 12.2636C21.0069 15.3859 19.4637 18.1423 17.4021 20H19.0061C19.742 20 20.1935 19.9979 20.5203 19.954C20.8075 19.9154 20.8558 19.8605 20.8617 19.8538L20.8631 19.8524C20.8712 19.8444 20.8979 19.8183 20.9272 19.7035C20.9636 19.5613 20.9893 19.3416 21.0005 18.9699C21.0171 18.4178 21.4781 17.9838 22.0302 18.0005C22.5822 18.0171 23.0162 18.4781 22.9996 19.0301C22.9766 19.792 22.9046 20.6398 22.2758 21.2681C21.8391 21.7044 21.3061 21.8664 20.7865 21.9362C20.3106 22.0001 19.7224 22.0001 19.0677 22H15.9908H15.9907C15.6403 22 15.3119 22.0001 15.0677 21.9787C14.9455 21.9681 14.7646 21.9466 14.5856 21.8825C14.4243 21.8247 14.0234 21.6436 13.8711 21.1619C13.7138 20.6647 13.958 20.2782 14.0511 20.1496C14.1614 19.9972 14.2975 19.876 14.394 19.7955C14.5873 19.6338 14.9011 19.4133 15.2029 19.2011C17.3447 17.6953 19.0069 15.1215 19.0069 12.2636C19.0069 7.55791 15.738 4 12 4Z',
  d5: 'M12 4C8.26205 4 4.99307 7.55791 4.99307 12.2636C4.99307 15.1215 6.65529 17.6953 8.79713 19.2011C9.09893 19.4133 9.41268 19.6338 9.60606 19.7955C9.70247 19.876 9.83862 19.9972 9.94889 20.1496C10.042 20.2782 10.2863 20.6647 10.1289 21.1619C9.97658 21.6436 9.57569 21.8247 9.41444 21.8825C9.23544 21.9466 9.05453 21.9681 8.93228 21.9787C8.68812 22.0001 8.35975 22 8.00929 22H8.00918H4.93233C4.27758 22.0001 3.68947 22.0001 3.21347 21.9362C2.69392 21.8664 2.16092 21.7044 1.72426 21.2681C1.09543 20.6398 1.02344 19.792 1.00046 19.0301C0.983817 18.4781 1.41783 18.0171 1.96987 18.0005C2.5219 17.9838 2.98291 18.4178 2.99955 18.9699C3.01076 19.3416 3.03638 19.5613 3.07277 19.7035C3.10214 19.8183 3.1288 19.8444 3.13696 19.8524L3.13786 19.8532C3.14372 19.8599 3.19247 19.9154 3.47974 19.954C3.80651 19.9979 4.25797 20 4.99394 20H6.5979C4.53627 18.1423 2.99307 15.3859 2.99307 12.2636C2.99307 6.73696 6.89375 2 12 2V4Z',
  d6: 'M2.99805 18.9508V20.9183H8.99492C9.00488 20.9183 9.00915 20.9056 9.00081 20.9002C6.66585 19.3793 3.98398 15.5092 3.98398 12.3639C3.81916 9.93407 5.36573 5.42632 8.55885 3.92867C9.54835 3.24962 12.2788 2.20439 15.5545 3.99013C18.7486 5.73142 19.9336 9.52948 19.9336 11.5152C20.1082 12.8838 19.5846 16.438 16.6911 19.3928L15.8367 20.2718L14.9406 20.9813C14.9331 20.9872 14.9374 20.9991 14.9469 20.999L21.0015 20.9411V18.9383',
  d7: 'M12.0006 4C8.26264 4 4.99366 7.55791 4.99366 12.2636C4.99366 13.6359 5.56449 15.2242 6.46869 16.7081C7.36884 18.1855 8.53178 19.448 9.57574 20.1819C9.93249 20.4328 10.0856 20.8858 9.95403 21.3016C9.8225 21.7174 9.43669 22 9.0006 22H2L2.0006 18.9998L4.0006 19.0002L4.0004 20H6.42636C5.82175 19.3215 5.25298 18.5566 4.76075 17.7488C3.74975 16.0895 2.99366 14.1368 2.99366 12.2636C2.99366 6.73696 6.89434 2 12.0006 2C17.1069 2 21.0075 6.73696 21.0075 12.2636C21.0075 14.1368 20.2514 16.0895 19.2404 17.7488C18.7482 18.5566 18.1795 19.3215 17.5748 20H20.0006V19H22.0006V22H15.0006C14.5645 22 14.1787 21.7174 14.0472 21.3016C13.9156 20.8858 14.0687 20.4328 14.4255 20.1819C15.4694 19.448 16.6324 18.1855 17.5325 16.7081C18.4367 15.2242 19.0075 13.6359 19.0075 12.2636C19.0075 7.55791 15.7386 4 12.0006 4Z',
} as const;

export const IconAlphabetGreekStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-greek-stroke-rounded IconAlphabetGreekStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetGreekDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-greek-duotone-rounded IconAlphabetGreekDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetGreekTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-greek-twotone-rounded IconAlphabetGreekTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconAlphabetGreekSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-greek-solid-rounded IconAlphabetGreekSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetGreekBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-greek-bulk-rounded IconAlphabetGreekBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetGreekStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-greek-stroke-sharp IconAlphabetGreekStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetGreekSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-greek-solid-sharp IconAlphabetGreekSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlphabetGreek: TheIconSelfPack = {
  name: 'AlphabetGreek',
  StrokeRounded: IconAlphabetGreekStrokeRounded,
  DuotoneRounded: IconAlphabetGreekDuotoneRounded,
  TwotoneRounded: IconAlphabetGreekTwotoneRounded,
  SolidRounded: IconAlphabetGreekSolidRounded,
  BulkRounded: IconAlphabetGreekBulkRounded,
  StrokeSharp: IconAlphabetGreekStrokeSharp,
  SolidSharp: IconAlphabetGreekSolidSharp,
};