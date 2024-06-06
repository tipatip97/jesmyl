import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.002 6C16.9152 4.58055 16.6769 3.67665 16.023 3.02513C14.9943 2 13.3385 2 10.0269 2C6.71528 2 5.05949 2 4.03072 3.02513C3.00195 4.05025 3.00195 5.70017 3.00195 9V15C3.00195 18.2998 3.00195 19.9497 4.03072 20.9749C5.05949 22 6.71528 22 10.0269 22C13.3385 22 14.9943 22 16.023 20.9749C16.6769 20.3233 16.9152 19.4194 17.002 18',
  d2: 'M10.002 19H10.011',
  d3: 'M18.4724 8.98633L20.7231 11.1928C21.0208 11.5112 21.1112 12.3519 20.8208 12.6418L18.4724 14.9863M10.998 12.0428H20.341',
  d4: 'M2.69043 9.33398V15.334C2.69043 18.6338 2.69043 20.2837 3.7192 21.3089C4.74798 22.334 6.40376 22.334 9.71533 22.334C13.0269 22.334 14.6827 22.334 15.7114 21.3089C16.3653 20.6573 16.6036 19.7534 16.6904 18.334V6.33398C16.6036 4.91453 16.3653 4.01063 15.7114 3.35911C14.6827 2.33398 13.0269 2.33398 9.71533 2.33398C6.40376 2.33398 4.74798 2.33398 3.7192 3.35911C2.69043 4.38423 2.69043 6.03415 2.69043 9.33398Z',
  d5: 'M16.6904 6.33398C16.6036 4.91453 16.3653 4.01063 15.7114 3.35911C14.6827 2.33398 13.0269 2.33398 9.71533 2.33398C6.40376 2.33398 4.74797 2.33398 3.7192 3.35911C2.69043 4.38423 2.69043 6.03415 2.69043 9.33398V15.334C2.69043 18.6338 2.69043 20.2837 3.7192 21.3089C4.74797 22.334 6.40376 22.334 9.71533 22.334C13.0269 22.334 14.6827 22.334 15.7114 21.3089C16.3653 20.6573 16.6036 19.7534 16.6904 18.334',
  d6: 'M9.69043 19.334H9.69943',
  d7: 'M18.1648 9.33398L20.4155 11.5405C20.7132 11.8589 20.8036 12.6996 20.5132 12.9895L18.1648 15.334M10.6904 12.3905H20.0334',
  d8: 'M17 6C16.9132 4.58055 16.6749 3.67665 16.021 3.02513C14.9923 2 13.3365 2 10.0249 2C6.71333 2 5.05754 2 4.02877 3.02513C3 4.05025 3 5.70017 3 9V15C3 18.2998 3 19.9497 4.02877 20.9749C5.05754 22 6.71333 22 10.0249 22C13.3365 22 14.9923 22 16.021 20.9749C16.6749 20.3233 16.9132 19.4194 17 18',
  d9: 'M10 19H10.009',
  d10: 'M18.4748 9L20.7254 11.2065C21.0231 11.5249 21.1135 12.3656 20.8232 12.6555L18.4748 15M10.9971 12.0565H21.0003',
  d11: 'M9.96303 1.25H10.0493H10.0493C11.6565 1.24998 12.9387 1.24997 13.9442 1.38478C14.9825 1.524 15.8374 1.81919 16.5139 2.49386C17.1908 3.16889 17.4873 4.02251 17.6271 5.05927C17.6973 5.58001 17.731 6.17508 17.7472 6.85111C17.7522 7.05584 17.7546 7.1582 17.7173 7.22794C17.7105 7.24065 17.7081 7.24458 17.6999 7.25645C17.655 7.32161 17.5228 7.38577 17.2585 7.51408C16.468 7.8979 16.0989 8.52804 15.9257 9.00777C15.8348 9.25936 15.7894 9.38517 15.7118 9.43966C15.6342 9.49414 15.5199 9.49414 15.2915 9.49414H10.9929C9.61329 9.49414 8.49492 10.6134 8.49492 11.9941C8.49492 13.3749 9.61329 14.4941 10.9929 14.4941H15.2872C15.5166 14.4941 15.6313 14.4941 15.7091 14.5489C15.7868 14.6037 15.832 14.7302 15.9224 14.9831C16.0942 15.464 16.4629 16.0997 17.2585 16.4859C17.5228 16.6142 17.655 16.6784 17.6999 16.7435C17.7081 16.7554 17.7105 16.7594 17.7173 16.7721C17.7546 16.8418 17.7522 16.9442 17.7472 17.1489C17.731 17.8249 17.6973 18.42 17.6271 18.9407C17.4873 19.9775 17.1908 20.8311 16.5139 21.5061C15.8374 22.1808 14.9825 22.476 13.9442 22.6152C12.9387 22.75 11.6565 22.75 10.0492 22.75H9.96299C8.35572 22.75 7.07357 22.75 6.06809 22.6152C5.02977 22.476 4.17489 22.1808 3.49837 21.5061C2.82149 20.8311 2.52499 19.9775 2.38522 18.9407C2.24997 17.9375 2.24998 16.6584 2.25 15.0559V15.0559V8.94405V8.94404C2.24998 7.34161 2.24997 6.06252 2.38522 5.05927C2.52499 4.02251 2.82149 3.16889 3.49837 2.49386C4.17489 1.81919 5.02977 1.524 6.06809 1.38478C7.07357 1.24997 8.35575 1.24998 9.96302 1.25H9.96303ZM9 19C9 18.4477 9.44571 18 9.99553 18H10.0045C10.5543 18 11 18.4477 11 19C11 19.5523 10.5543 20 10.0045 20H9.99553C9.44571 20 9 19.5523 9 19Z',
  d12: 'M11 10.9941C10.4477 10.9941 10 11.4419 10 11.9941C10 12.5464 10.4477 12.9941 11 12.9941L17.25 12.9941L17.25 13.5884C17.2499 13.764 17.2497 13.9797 17.2718 14.1561L17.2722 14.1595C17.288 14.2859 17.3598 14.862 17.9254 15.1363C18.4923 15.4113 18.9924 15.1093 19.1006 15.044L19.1046 15.0416C19.2576 14.9494 19.4285 14.8152 19.5691 14.7049L19.5993 14.6812C19.9752 14.3865 20.4594 14.0046 20.8504 13.6241C21.0455 13.4343 21.2467 13.217 21.4056 12.9861C21.5468 12.7809 21.75 12.4307 21.75 12C21.75 11.5693 21.5468 11.2191 21.4056 11.0139C21.2467 10.783 21.0455 10.5657 20.8504 10.3759C20.4594 9.99545 19.9752 9.61348 19.5993 9.31885L19.5691 9.29512C19.4285 9.18477 19.2577 9.05062 19.1046 8.95841L19.1006 8.95597C18.9924 8.89065 18.4922 8.58872 17.9254 8.86368C17.3598 9.13804 17.288 9.71408 17.2722 9.84053L17.2718 9.84387C17.2497 10.0203 17.2499 10.236 17.25 10.4116L17.25 10.9941L11 10.9941Z',
  d13: 'M10.0493 1.25H9.96303H9.96302C8.35575 1.24998 7.07357 1.24997 6.06809 1.38478C5.02977 1.524 4.17489 1.81919 3.49837 2.49386C2.82149 3.16889 2.52499 4.02251 2.38522 5.05927C2.24997 6.06252 2.24998 7.34161 2.25 8.94404V8.94405V15.0559V15.0559C2.24998 16.6584 2.24997 17.9375 2.38522 18.9407C2.52499 19.9775 2.82149 20.8311 3.49837 21.5061C4.17489 22.1808 5.02977 22.476 6.06809 22.6152C7.07357 22.75 8.35572 22.75 9.96299 22.75H10.0492C11.6565 22.75 12.9387 22.75 13.9442 22.6152C14.9825 22.476 15.8374 22.1808 16.5139 21.5061C17.1908 20.8311 17.4873 19.9775 17.6271 18.9407C17.6973 18.42 17.731 17.8249 17.7472 17.1489C17.7522 16.9442 17.7546 16.8418 17.7173 16.7721C17.7105 16.7594 17.7081 16.7554 17.6999 16.7435C17.655 16.6784 17.5228 16.6142 17.2585 16.4859C16.4629 16.0997 16.0942 15.464 15.9224 14.9831C15.832 14.7302 15.7868 14.6037 15.7091 14.5489C15.6313 14.4941 15.5166 14.4941 15.2872 14.4941H10.9929C9.61329 14.4941 8.49492 13.3749 8.49492 11.9941C8.49492 10.6134 9.61329 9.49414 10.9929 9.49414H15.2915C15.5199 9.49414 15.6342 9.49414 15.7118 9.43966C15.7894 9.38517 15.8348 9.25936 15.9257 9.00777C16.0989 8.52804 16.468 7.8979 17.2585 7.51408C17.5228 7.38577 17.655 7.32161 17.6999 7.25645C17.7081 7.24458 17.7105 7.24065 17.7173 7.22794C17.7546 7.1582 17.7522 7.05584 17.7472 6.85111C17.731 6.17508 17.6973 5.58001 17.6271 5.05927C17.4873 4.02251 17.1908 3.16889 16.5139 2.49386C15.8374 1.81919 14.9825 1.524 13.9442 1.38478C12.9387 1.24997 11.6565 1.24998 10.0493 1.25H10.0493Z',
  d14: 'M9.99553 18C9.44571 18 9 18.4477 9 19C9 19.5523 9.44571 20 9.99553 20H10.0045C10.5543 20 11 19.5523 11 19C11 18.4477 10.5543 18 10.0045 18H9.99553Z',
  d15: 'M5.5 2V1.25H4.75V2H5.5ZM5.5 10L6.12404 10.416L6.25 10.2271V10H5.5ZM20.5 2H21.25C21.25 1.58579 20.9142 1.25 20.5 1.25V2ZM20.5 22V22.75C20.9142 22.75 21.25 22.4142 21.25 22H20.5ZM3.5 22H2.75C2.75 22.4142 3.08579 22.75 3.5 22.75V22ZM3.5 13L2.87596 12.584L2.75 12.7729V13H3.5ZM4.75 2V10H6.25V2H4.75ZM5.5 2.75H20.5V1.25H5.5V2.75ZM19.75 2V22H21.25V2H19.75ZM20.5 21.25H3.5V22.75H20.5V21.25ZM4.25 22V13H2.75V22H4.25ZM4.87596 9.58397L2.87596 12.584L4.12404 13.416L6.12404 10.416L4.87596 9.58397Z',
  d16: 'M16.5 4.99707V8.99326M13 4.99707V8.99326M9.5 4.99707V8.99326',
  d17: 'M20.41 2.01562L5.4958 2.01583V10.0098L3.50593 12.9634L3.50586 21.9128C3.50586 21.968 3.55063 22.0127 3.60586 22.0127L20.41 22.0125C20.4653 22.0125 20.51 21.9678 20.51 21.9126V2.11553C20.51 2.06035 20.4652 2.01562 20.41 2.01562Z',
  d18: 'M1.75 2C1.75 1.58579 2.08579 1.25 2.5 1.25H16.5C16.9142 1.25 17.25 1.58579 17.25 2V7.81816L15.4039 9.75004L9.58594 9.75004V14.25L15.4039 14.25L17.25 16.1819V22C17.25 22.4142 16.9142 22.75 16.5 22.75H2.5C2.08579 22.75 1.75 22.4142 1.75 22V2ZM10.509 18H8.5V20H10.509V18Z',
  d19: 'M18.543 8.29297L22.2502 12.0001L18.543 15.7072L17.1288 14.293L18.4217 13.0001L10.8359 13.0001V11.0001L18.4217 11.0001L17.1288 9.70719L18.543 8.29297Z',
};

export const IconSendToMobileStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="send-to-mobile-stroke-rounded IconSendToMobileStrokeRounded"
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

export const IconSendToMobileDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="send-to-mobile-duotone-rounded IconSendToMobileDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSendToMobileTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="send-to-mobile-twotone-rounded IconSendToMobileTwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSendToMobileSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="send-to-mobile-solid-rounded IconSendToMobileSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSendToMobileBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="send-to-mobile-bulk-rounded IconSendToMobileBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSendToMobileStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="send-to-mobile-stroke-sharp IconSendToMobileStrokeSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSendToMobileSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="send-to-mobile-solid-sharp IconSendToMobileSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSendToMobile: TheIconSelfPack = {
  name: 'SendToMobile',
  StrokeRounded: IconSendToMobileStrokeRounded,
  DuotoneRounded: IconSendToMobileDuotoneRounded,
  TwotoneRounded: IconSendToMobileTwotoneRounded,
  SolidRounded: IconSendToMobileSolidRounded,
  BulkRounded: IconSendToMobileBulkRounded,
  StrokeSharp: IconSendToMobileStrokeSharp,
  SolidSharp: IconSendToMobileSolidSharp,
};