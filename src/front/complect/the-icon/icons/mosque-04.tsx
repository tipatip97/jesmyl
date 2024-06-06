import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 22V14C17 12.1144 17 11.1716 16.4142 10.5858C15.8284 10 14.8856 10 13 10H11C9.11438 10 8.17157 10 7.58579 10.5858C7 11.1716 7 12.1144 7 14V22H17Z',
  d2: 'M7 22V12H3V22H7Z',
  d3: 'M5 12V10',
  d4: 'M19 12V10',
  d5: 'M17 22V12H21V22H17Z',
  d6: 'M2 12H7',
  d7: 'M9.02481 10C5.93952 6 10.6777 4 11.9998 2C13.3221 4 18.0602 6 14.9748 10H9.02481Z',
  d8: 'M22 12H17',
  d9: 'M10 22V19C10 18.0218 10 17.5326 10.1422 17.0874C10.2364 16.7924 10.3757 16.5137 10.5552 16.2613C10.8261 15.8804 11.2174 15.5869 12 15C12.7826 15.5869 13.1739 15.8804 13.4448 16.2613C13.6243 16.5137 13.7636 16.7924 13.8578 17.0874C14 17.5326 14 18.0218 14 19V22',
  d10: 'M17 14V22H14V19C14 18.0218 14 17.5326 13.8578 17.0874C13.7636 16.7924 13.6243 16.5137 13.4448 16.2613C13.1739 15.8804 12.7826 15.5869 12 15C11.2174 15.5869 10.8261 15.8804 10.5552 16.2613C10.3757 16.5137 10.2364 16.7924 10.1422 17.0874C10 17.5326 10 18.0218 10 19V22H7V14C7 12.1144 7 11.1716 7.58579 10.5858C8.17157 10 9.11438 10 11 10H13C14.8856 10 15.8284 10 16.4142 10.5858C17 11.1716 17 12.1144 17 14Z',
  d11: 'M20 13H19H17C16.4477 13 16 12.5523 16 12C16 11.4478 16.4477 11 17 11H18V10C18 9.44775 18.4477 9.00004 19 9.00004C19.5523 9.00004 20 9.44775 20 10V11H21H22C22.5523 11 23 11.4478 23 12C23 12.5523 22.5523 13 22 13V21.7534C22 22.3057 21.5523 22.7534 21 22.7534H17C16.4477 22.7534 16 22.3057 16 21.7534C16 21.2011 16.4477 20.7534 17 20.7534H20V13ZM2 13L2 21.7486C2 22.3009 2.44772 22.7486 3 22.7486H7C7.55228 22.7486 8 22.3009 8 21.7486C8 21.1963 7.55228 20.7486 7 20.7486H4L4 13H5H7C7.55228 13 8 12.5523 8 12C8 11.4478 7.55228 11 7 11H6V10C6 9.44775 5.55228 9.00004 5 9.00004C4.44772 9.00004 4 9.44775 4 10V11H3H2C1.44772 11 1 11.4478 1 12C1 12.5523 1.44772 13 2 13Z',
  d12: 'M12 1.25C12.2517 1.24999 12.4867 1.37633 12.6256 1.58637C12.8942 1.99256 13.3588 2.42652 13.9622 2.97735L14.0114 3.0223C14.5712 3.53308 15.2199 4.12512 15.7342 4.79194C16.2696 5.48607 16.7078 6.32075 16.7471 7.31403C16.7665 7.80302 16.6883 8.30174 16.5046 8.8119C16.4633 8.92656 16.3527 9 16.2308 9H7.76922C7.64736 9 7.53671 8.92655 7.49543 8.8119C7.31175 8.30173 7.23348 7.80302 7.25288 7.31402C7.29228 6.32075 7.73043 5.48606 8.26582 4.79194C8.78013 4.12515 9.42883 3.53313 9.98851 3.02236L10.0378 2.97735C10.6412 2.42652 11.1058 1.99258 11.3743 1.5864C11.5132 1.37636 11.7482 1.25001 12 1.25Z',
  d13: 'M12.4501 14.3998C12.1834 14.1998 11.8167 14.1998 11.5501 14.3998L11.4582 14.4687C10.7642 14.9888 10.2838 15.3488 9.94409 15.8264C9.71971 16.1419 9.54555 16.4902 9.42778 16.859C9.24947 17.4174 9.2497 18.0177 9.25003 18.8849L9.25006 18.9998V22.149C9.25006 22.4319 9.25006 22.5733 9.16219 22.6612C9.07432 22.749 8.9329 22.749 8.65006 22.749H7C6.58579 22.749 6.25 22.4132 6.25 21.999L6.25 13.947C6.24997 13.0485 6.24995 12.2993 6.32992 11.7045C6.40324 11.1592 6.55299 10.6598 6.88965 10.2395C7.02408 10.0717 7.05016 10.0545 7.30399 10.0545L16.696 10.0545C16.9498 10.0545 16.9759 10.0717 17.1104 10.2395C17.447 10.6598 17.5968 11.1592 17.6701 11.7045C17.7501 12.2993 17.75 13.0486 17.75 13.947L17.75 21.999C17.75 22.4132 17.4142 22.749 17 22.749H15.3501C15.0672 22.749 14.9258 22.749 14.8379 22.6612C14.7501 22.5733 14.7501 22.4319 14.7501 22.149V18.9998L14.7501 18.8849V18.8849C14.7504 18.0177 14.7506 17.4174 14.5723 16.859C14.4546 16.4902 14.2804 16.1419 14.056 15.8264C13.7163 15.3488 13.2359 14.9888 12.542 14.4687L12.4501 14.3998ZM12.6501 22.749C12.9329 22.749 13.0743 22.749 13.1622 22.6612C13.2501 22.5733 13.2501 22.4319 13.2501 22.149V18.9998C13.2501 17.973 13.2417 17.6231 13.1434 17.3153C13.0728 17.0941 12.9683 16.8851 12.8336 16.6958C12.7295 16.5493 12.5983 16.4174 12.361 16.2231C12.1918 16.0845 12.1072 16.0153 12.0001 16.0153C11.8929 16.0153 11.8083 16.0845 11.6392 16.2231C11.4019 16.4174 11.2706 16.5493 11.1665 16.6958C11.0319 16.8851 10.9274 17.0941 10.8567 17.3153C10.7584 17.6231 10.7501 17.973 10.7501 18.9998V22.149C10.7501 22.4319 10.7501 22.5733 10.8379 22.6612C10.9258 22.749 11.0672 22.749 11.3501 22.749H12.6501Z',
  d14: 'M17.1104 10.2397C17.447 10.66 17.5968 11.1594 17.6701 11.7048C17.7501 12.2995 17.75 13.0488 17.75 13.9472L17.75 21.9992C17.75 22.4134 17.4142 22.7492 17 22.7492H7C6.58579 22.7492 6.25 22.4134 6.25 21.9992L6.25 13.9472C6.24997 13.0487 6.24995 12.2995 6.32991 11.7048C6.40324 11.1594 6.55299 10.66 6.88965 10.2397C7.02408 10.0719 7.05016 10.0547 7.30399 10.0547H16.696C16.9498 10.0547 16.9759 10.0719 17.1104 10.2397Z',
  d15: 'M19 13H20V20.7534H17.75V21.9993C17.75 22.4135 17.4142 22.7493 17 22.7493H16.9083C16.9385 22.752 16.9691 22.7534 17 22.7534H21C21.5523 22.7534 22 22.3057 22 21.7534V13C22.5523 13 23 12.5523 23 12C23 11.4478 22.5523 11 22 11H21H20V10C20 9.44775 19.5523 9.00004 19 9.00004C18.4477 9.00004 18 9.44775 18 10V11H17.5148C17.5887 11.2236 17.6371 11.4596 17.6701 11.7048C17.7201 12.0766 17.7388 12.5088 17.7458 13H19ZM6.25418 13C6.2612 12.5088 6.27992 12.0766 6.32991 11.7048C6.36288 11.4596 6.4113 11.2236 6.48522 11H6V10C6 9.44775 5.55228 9.00004 5 9.00004C4.44772 9.00004 4 9.44775 4 10V11H3H2C1.44772 11 1 11.4478 1 12C1 12.5523 1.44772 13 2 13L2 21.7486C2 22.3009 2.44772 22.7486 3 22.7486H6.96755C6.56839 22.7316 6.25 22.4026 6.25 21.9993L6.25 20.7486H4L4 13H5H6.25418Z',
  d16: 'M12.4501 14.3998C12.1834 14.1998 11.8167 14.1998 11.5501 14.3998L11.4582 14.4687C10.7642 14.9888 10.2838 15.3488 9.94409 15.8264C9.71971 16.1419 9.54554 16.4902 9.42778 16.859C9.24947 17.4174 9.2497 18.0177 9.25003 18.8849L9.25006 18.9998V22.749H10.7501V18.9998C10.7501 17.973 10.7584 17.6231 10.8567 17.3153C10.9273 17.0941 11.0319 16.8851 11.1665 16.6958C11.3143 16.4879 11.5169 16.309 12.0001 15.9396C12.4832 16.309 12.6858 16.4879 12.8336 16.6958C12.9683 16.8851 13.0728 17.0941 13.1434 17.3153C13.2417 17.6231 13.2501 17.973 13.2501 18.9998V22.749H14.7501V18.9998L14.7501 18.8849C14.7504 18.0177 14.7506 17.4174 14.5723 16.859C14.4546 16.4902 14.2804 16.1419 14.056 15.8264C13.7163 15.3488 13.2359 14.9888 12.542 14.4687L12.4501 14.3998Z',
  d17: 'M17 22V10H7V22H17Z',
  d18: 'M4.5 12V10',
  d19: 'M19.5 12V10',
  d20: 'M1 12H7',
  d21: 'M9.02496 10C5.93967 6 10.6779 4 12 2C13.3223 4 18.0604 6 14.975 10H9.02496Z',
  d22: 'M23 12H17',
  d23: 'M3.01221 22V12H7V22H3.01221Z',
  d24: 'M17 22L17.1092 12H20.9978V22H17Z',
  d25: 'M6.25 10C6.25 9.58579 6.58579 9.25 7 9.25L17 9.25C17.4142 9.25 17.75 9.58579 17.75 10V11.25H18.75V10H20.25V11.25L23 11.25V12.75L21.75 12.75V22.75L14.7501 22.75V19.75L14.7501 19.6351C14.7504 18.7679 14.7506 18.1676 14.5723 17.6093C14.4546 17.2405 14.2804 16.8921 14.056 16.5766C13.7163 16.099 13.2359 15.739 12.542 15.2189L12.4501 15.15C12.1834 14.95 11.8167 14.95 11.5501 15.15L11.4582 15.2189C10.7642 15.739 10.2838 16.099 9.94409 16.5766C9.71971 16.8921 9.54554 17.2405 9.42778 17.6093C9.24947 18.1676 9.2497 18.7679 9.25003 19.6351L9.25006 19.75V22.75H2.25L2.25 12.75H1V11.25H3.75L3.75 10H5.25V11.25H6.25V10ZM10.7501 22.75V19.75C10.7501 18.7232 10.7584 18.3733 10.8567 18.0656C10.9274 17.8443 11.0319 17.6353 11.1665 17.446C11.3143 17.2381 11.5169 17.0593 12.0001 16.6898C12.4832 17.0593 12.6858 17.2381 12.8336 17.446C12.9683 17.6353 13.0728 17.8443 13.1434 18.0656C13.2417 18.3733 13.2501 18.7232 13.2501 19.75V22.75H10.7501ZM6.25 12.75H3.75L3.75 21.25H6.25L6.25 12.75ZM17.75 21.25H20.25V12.75H17.75V21.25Z',
  d26: 'M7.28957 8H16.7105C16.7442 7.76914 16.7561 7.54054 16.7471 7.31403C16.7078 6.32075 16.2696 5.48607 15.7342 4.79194C15.2199 4.12512 14.5712 3.53308 14.0114 3.0223L13.9622 2.97735C13.3588 2.42652 12.8942 1.99256 12.6256 1.58637C12.4867 1.37633 12.2517 1.24999 12 1.25C11.7482 1.25001 11.5132 1.37636 11.3743 1.5864C11.1058 1.99258 10.6412 2.42652 10.0378 2.97735L9.98851 3.02236C9.42883 3.53313 8.78012 4.12515 8.26582 4.79194C7.73043 5.48606 7.29228 6.32075 7.25288 7.31402C7.2439 7.54054 7.25587 7.76914 7.28957 8Z',
};

export const IconMosque04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-04-stroke-rounded IconMosque04StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-04-duotone-rounded IconMosque04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-04-twotone-rounded IconMosque04TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-04-solid-rounded IconMosque04SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-04-bulk-rounded IconMosque04BulkRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.5" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMosque04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-04-stroke-sharp IconMosque04StrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-04-solid-sharp IconMosque04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMosque04: TheIconSelfPack = {
  name: 'Mosque04',
  StrokeRounded: IconMosque04StrokeRounded,
  DuotoneRounded: IconMosque04DuotoneRounded,
  TwotoneRounded: IconMosque04TwotoneRounded,
  SolidRounded: IconMosque04SolidRounded,
  BulkRounded: IconMosque04BulkRounded,
  StrokeSharp: IconMosque04StrokeSharp,
  SolidSharp: IconMosque04SolidSharp,
};