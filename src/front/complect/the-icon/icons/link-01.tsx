import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.14339 10.691L9.35031 10.4841C11.329 8.50532 14.5372 8.50532 16.5159 10.4841C18.4947 12.4628 18.4947 15.671 16.5159 17.6497L13.6497 20.5159C11.671 22.4947 8.46279 22.4947 6.48405 20.5159C4.50532 18.5372 4.50532 15.329 6.48405 13.3503L6.9484 12.886',
  d2: 'M17.0516 11.114L17.5159 10.6497C19.4947 8.67095 19.4947 5.46279 17.5159 3.48405C15.5372 1.50532 12.329 1.50532 10.3503 3.48405L7.48405 6.35031C5.50532 8.32904 5.50532 11.5372 7.48405 13.5159C9.46279 15.4947 12.671 15.4947 14.6497 13.5159L14.8566 13.309',
  d3: 'M6.9484 12.8859L6.48405 13.3503C4.50532 15.329 4.50532 18.5372 6.48405 20.5159C8.46279 22.4947 11.671 22.4947 13.6497 20.5159L16.5159 17.6497C18.2962 15.8694 18.4748 13.0939 17.0516 11.114L14.6497 13.5159C12.671 15.4947 9.46279 15.4947 7.48405 13.5159C7.2856 13.3175 7.10705 13.1066 6.9484 12.8859Z',
  d4: 'M15.8088 11.1912C14.2602 9.64256 11.7729 9.60392 10.1781 11.0753C9.77214 11.4497 9.13949 11.4243 8.765 11.0183C8.39052 10.6124 8.416 9.97975 8.82193 9.60526C11.2024 7.40914 14.9125 7.46636 17.2231 9.77694C19.5923 12.1462 19.5923 15.9875 17.2231 18.3568L14.3568 21.223C11.9875 23.5923 8.14621 23.5923 5.77695 21.223C3.40768 18.8538 3.40768 15.0125 5.77695 12.6432L6.24129 12.1788C6.63182 11.7883 7.26498 11.7883 7.65551 12.1789C8.04603 12.5694 8.04603 13.2025 7.6555 13.5931L7.19116 14.0574C5.60295 15.6456 5.60295 18.2206 7.19116 19.8088C8.77937 21.397 11.3544 21.397 12.9426 19.8088L15.8088 16.9426C17.3971 15.3544 17.3971 12.7794 15.8088 11.1912Z',
  d5: 'M16.8088 4.19116C15.2206 2.60295 12.6456 2.60295 11.0574 4.19116L8.19116 7.05741C6.60295 8.64563 6.60295 11.2206 8.19116 12.8088C9.73975 14.3574 12.2271 14.3961 13.8219 12.9247C14.2279 12.5503 14.8605 12.5757 15.235 12.9817C15.6095 13.3876 15.584 14.0202 15.1781 14.3947C12.7976 16.5909 9.08752 16.5336 6.77695 14.2231C4.40768 11.8538 4.40768 8.01246 6.77695 5.6432L9.6432 2.77695C12.0125 0.407685 15.8538 0.407685 18.2231 2.77695C20.5923 5.14621 20.5923 8.98754 18.2231 11.3568L17.7587 11.8211C17.3682 12.2117 16.735 12.2117 16.3445 11.8211C15.954 11.4306 15.954 10.7975 16.3445 10.4069L16.8088 9.94258C18.3971 8.35437 18.3971 5.77937 16.8088 4.19116Z',
  d6: 'M5.68501 12.7371C3.40809 15.1129 3.43874 18.8848 5.77695 21.223C8.14621 23.5923 11.9875 23.5923 14.3568 21.223L17.2231 18.3568C19.5923 15.9875 19.5923 12.1462 17.2231 9.77694C14.9125 7.46636 11.2024 7.40914 8.82193 9.60526C8.416 9.97975 8.39052 10.6124 8.765 11.0183C9.13949 11.4243 9.77214 11.4497 10.1781 11.0753C11.7729 9.60392 14.2602 9.64256 15.8088 11.1912C17.3971 12.7794 17.3971 15.3544 15.8088 16.9426L12.9426 19.8088C11.3544 21.397 8.77937 21.397 7.19116 19.8088C5.70006 18.3177 5.60888 15.9568 6.91764 14.3594C6.87019 14.3148 6.82329 14.2694 6.77695 14.2231C6.32784 13.7739 5.96386 13.2719 5.68501 12.7371Z',
  d7: 'M16.8088 4.19116C15.2206 2.60295 12.6456 2.60295 11.0574 4.19116L8.19116 7.05741C6.60295 8.64563 6.60295 11.2206 8.19116 12.8088C9.77937 14.3971 12.3544 14.3971 13.9426 12.8088L14.1495 12.6019L15.5637 14.0161L15.3568 14.2231C13.0339 16.546 9.29592 16.5914 6.91764 14.3594C5.60888 15.9568 5.70006 18.3177 7.19116 19.8088C8.77937 21.3971 11.3544 21.3971 12.9426 19.8088L15.8088 16.9426C17.3971 15.3544 17.3971 12.7794 15.8088 11.1912C14.2206 9.60295 11.6456 9.60295 10.0574 11.1912L9.85049 11.3981L8.43628 9.98387L8.6432 9.77695C10.9661 7.45403 14.7041 7.4086 17.0824 9.64064C18.3911 8.04317 18.2999 5.68226 16.8088 4.19116ZM18.315 11.2629C20.5919 8.88711 20.5613 5.11516 18.2231 2.77695C15.8538 0.407685 12.0125 0.407685 9.6432 2.77695L6.77695 5.6432C4.85679 7.56335 4.49282 10.4504 5.68502 12.7371C3.40809 15.1129 3.43873 18.8848 5.77695 21.2231C8.14621 23.5923 11.9875 23.5923 14.3568 21.2231L17.2231 18.3568C19.1432 16.4366 19.5072 13.5496 18.315 11.2629Z',
};

export const IconLink01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-01-stroke-rounded IconLink01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLink01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-01-duotone-rounded IconLink01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLink01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-01-twotone-rounded IconLink01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLink01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-01-solid-rounded IconLink01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLink01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-01-bulk-rounded IconLink01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconLink01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-01-stroke-sharp IconLink01StrokeSharp"
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

export const IconLink01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-01-solid-sharp IconLink01SolidSharp"
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

export const iconPackOfLink01: TheIconSelfPack = {
  name: 'Link01',
  StrokeRounded: IconLink01StrokeRounded,
  DuotoneRounded: IconLink01DuotoneRounded,
  TwotoneRounded: IconLink01TwotoneRounded,
  SolidRounded: IconLink01SolidRounded,
  BulkRounded: IconLink01BulkRounded,
  StrokeSharp: IconLink01StrokeSharp,
  SolidSharp: IconLink01SolidSharp,
};