import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 22C7.67798 16.3864 9.95978 9.8784 10.8382 4.98644C10.8643 4.84129 10.8773 4.76868 10.8931 4.71553C11.0101 4.32106 11.3323 4.05162 11.7412 4.00613C11.7963 4 11.8642 4 12 4C12.1358 4 12.2037 4 12.2588 4.00613C12.6677 4.05162 12.9899 4.32106 13.1069 4.71553C13.1227 4.76868 13.1357 4.84129 13.1618 4.98644C14.0402 9.8784 16.322 16.3864 21 22',
  d2: 'M12 4V2',
  d3: 'M8 11H16',
  d4: 'M6 15H18',
  d5: 'M15.5 22C15.2904 20.959 15.1855 20.4386 14.9348 19.9979C14.822 19.7995 14.6881 19.6148 14.5358 19.447C14.1973 19.0744 13.7412 18.8227 12.8289 18.3194C12.48 18.1269 12.3055 18.0306 12.1198 18.0074C12.0402 17.9975 11.9598 17.9975 11.8802 18.0074C11.6945 18.0306 11.52 18.1269 11.1711 18.3194C10.2588 18.8227 9.8027 19.0744 9.46424 19.447C9.31188 19.6148 9.17804 19.7995 9.06518 19.9979C8.81446 20.4386 8.70964 20.959 8.5 22',
  d6: 'M15 22L22 22',
  d7: 'M2 22H9',
  d8: 'M13.1608 4.98641L13.1608 4.98644C13.4882 6.80979 14.0106 8.85764 14.7794 11H9.21875C9.98749 8.85764 10.5099 6.80979 10.8373 4.98644L10.8373 4.98644C10.8633 4.84129 10.8764 4.76868 10.8921 4.71553C11.0092 4.32106 11.3313 4.05162 11.7403 4.00613C11.7954 4 11.8633 4 11.9991 4C12.1348 4 12.2027 4 12.2578 4.00613C12.6668 4.05162 12.9889 4.32106 13.106 4.71553C13.1217 4.76867 13.1348 4.84128 13.1608 4.98641Z',
  d9: 'M8.5 22H3C4.86989 19.7561 6.35692 17.3694 7.52451 15H16.5C17.5 16.8333 19.8 20.8 21 22H15.5C15.5 19.2 14 18.5 12 18C8.5 19 8.33333 21 8.5 22Z',
  d10: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25Z',
  d11: 'M22 21.2477H21.3537C19.7158 19.2381 18.3855 17.1163 17.3164 15.0014H17.3124C16.632 13.6548 16.0575 12.3108 15.577 11.0004H15.5801C14.7754 8.80737 14.2341 6.70829 13.9 4.84736C13.8799 4.73508 13.8541 4.59041 13.8259 4.49556C13.6231 3.81182 13.0503 3.33265 12.3417 3.2538H11.6583C10.9497 3.33265 10.3769 3.81182 10.1741 4.49556C10.1459 4.59043 10.1201 4.73505 10.1 4.84737C9.76595 6.70829 9.22458 8.80737 8.41992 11.0004H8.42144C7.9409 12.3108 7.3664 13.6548 6.68602 15.0014H6.68357C5.61452 17.1163 4.28417 19.2381 2.64627 21.2477H2C1.58579 21.2477 1.25 21.5835 1.25 21.9979C1.25 22.4122 1.58579 22.748 2 22.748H9C9.41421 22.748 9.75 22.4122 9.75 21.9979C9.75 21.7297 9.60932 21.4944 9.39776 21.3617C9.51186 20.8421 9.59125 20.5874 9.71705 20.3662C9.80287 20.2153 9.90436 20.0753 10.0194 19.9486C10.2546 19.6896 10.5765 19.5013 11.5334 18.9732C11.717 18.8718 11.8209 18.815 11.9014 18.7778C11.9263 18.7573 12.0006 18.7286 12.0986 18.7778C12.1791 18.815 12.283 18.8718 12.4666 18.9732C13.4235 19.5013 13.7454 19.6896 13.9806 19.9486C14.0956 20.0753 14.1971 20.2153 14.2829 20.3662C14.4087 20.5874 14.4881 20.8421 14.6022 21.3617C14.3907 21.4944 14.25 21.7297 14.25 21.9979C14.25 22.4122 14.5858 22.748 15 22.748L22 22.748C22.4142 22.748 22.75 22.4122 22.75 21.9979C22.75 21.5835 22.4142 21.2477 22 21.2477ZM8.35834 15.0014C9.00808 13.6499 9.5565 12.3067 10.0151 11.0004H13.9833C14.4419 12.3067 14.9903 13.6499 15.6401 15.0014L8.35834 15.0014Z',
  d12: 'M7.25 11C7.25 10.5858 7.58579 10.25 8 10.25H16C16.4142 10.25 16.75 10.5858 16.75 11C16.75 11.4142 16.4142 11.75 16 11.75H8C7.58579 11.75 7.25 11.4142 7.25 11Z',
  d13: 'M5.25 15.0039C5.25 14.5897 5.58579 14.2539 6 14.2539H18C18.4142 14.2539 18.75 14.5897 18.75 15.0039C18.75 15.4181 18.4142 15.7539 18 15.7539H6C5.58579 15.7539 5.25 15.4181 5.25 15.0039Z',
  d14: 'M22 21.2516H21.3537C19.7158 19.242 18.3855 17.1202 17.3164 15.0053H17.3144C16.6338 13.6587 16.0591 12.3148 15.5784 11.0043H15.5801C14.7754 8.81127 14.2341 6.7122 13.9 4.85127C13.8799 4.73899 13.8541 4.59432 13.8259 4.49947C13.6231 3.81573 13.0503 3.33656 12.3417 3.25771H11.6583C10.9497 3.33656 10.3769 3.81573 10.1741 4.49947C10.1459 4.59433 10.1201 4.73895 10.1 4.85127C9.90381 5.94429 9.63607 7.11947 9.28548 8.34759C9.28417 8.35187 9.2829 8.35617 9.28167 8.3605C9.12896 8.89485 8.96057 9.43919 8.77558 9.99109C8.66322 10.3262 8.54473 10.6641 8.41992 11.0043H8.42C7.93929 12.3148 7.36461 13.6587 6.68404 15.0053H6.68357C5.61452 17.1202 4.28417 19.242 2.64627 21.2516H2C1.58579 21.2516 1.25 21.5874 1.25 22.0018C1.25 22.4161 1.58579 22.752 2 22.752H9C9.41421 22.752 9.75 22.4161 9.75 22.0018C9.75 21.7336 9.60932 21.4983 9.39776 21.3656C9.51186 20.846 9.59125 20.5913 9.71705 20.3701C9.80287 20.2192 9.90436 20.0792 10.0194 19.9525C10.2546 19.6936 10.5765 19.5052 11.5334 18.9771C11.717 18.8757 11.8209 18.8189 11.9014 18.7817C11.9263 18.7612 12.0006 18.7325 12.0986 18.7817C12.1791 18.8189 12.283 18.8757 12.4666 18.9771C13.4235 19.5052 13.7454 19.6936 13.9806 19.9525C14.0956 20.0792 14.1971 20.2192 14.2829 20.3701C14.4087 20.5913 14.4881 20.846 14.6022 21.3656C14.3907 21.4983 14.25 21.7336 14.25 22.0018C14.25 22.4161 14.5858 22.752 15 22.752L22 22.752C22.4142 22.752 22.75 22.4161 22.75 22.0018C22.75 21.5874 22.4142 21.2516 22 21.2516ZM8.35646 15.0053C9.00637 13.6538 9.55497 12.3107 10.0137 11.0043H13.9847C14.4434 12.3107 14.992 13.6538 15.6419 15.0053L8.35646 15.0053Z',
  d15: 'M2 22.7504C1.58579 22.7504 1.25 22.4145 1.25 22.0002C1.25 21.5859 1.58579 21.25 2 21.25H9C9.41421 21.25 9.75 21.5859 9.75 22.0002C9.75 22.4145 9.41421 22.7504 9 22.7504H2Z',
  d16: 'M15 22.7504C14.5858 22.7504 14.25 22.4145 14.25 22.0002C14.25 21.5859 14.5858 21.25 15 21.25H22C22.4142 21.25 22.75 21.5859 22.75 22.0002C22.75 22.4145 22.4142 22.7504 22 22.7504H15Z',
  d17: 'M12.75 3.34976C12.6209 3.30346 12.4845 3.27164 12.3427 3.25586H11.6593C11.5167 3.27172 11.3797 3.30379 11.25 3.35046V2C11.25 1.58579 11.5858 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.34976Z',
  d18: 'M3 22C7.67798 16.3864 10.1216 8.89196 11 4H13C13.8784 8.89196 16.322 16.3864 21 22',
  d19: 'M7 11H17',
  d20: 'M5 15H19',
  d21: 'M23 22L15 22L14 19L12 18L10 19L9 22H1',
  d22: 'M12.75 1.25V3.25H11.25V1.25H12.75Z',
  d23: 'M17 11.75H7V10.25H17V11.75Z',
  d24: 'M19 15.75H5V14.25H19V15.75Z',
  d25: 'M10.2618 3.86744C10.326 3.51008 10.6369 3.25 11 3.25H13C13.3631 3.25 13.674 3.51008 13.7382 3.86744C14.589 8.6054 16.9318 15.8009 21.3542 21.25H23V22.75H14.4594L13.3867 19.5319L12 18.8385L10.6133 19.5319L9.54057 22.75H1V21.25H2.64576C7.06821 15.8009 9.41102 8.6054 10.2618 3.86744ZM4.54605 21.25H8.45943L9.38673 18.4681L12 17.1615L14.6133 18.4681L15.5406 21.25H19.4539C15.4768 15.9224 13.2875 9.35464 12.3783 4.75H11.6217C10.7125 9.35464 8.52322 15.9224 4.54605 21.25Z',
  d26: 'M21.3542 21.25H23V22.75H14.4594L13.3867 19.5319L12 18.8385L10.6133 19.5319L9.54057 22.75H1V21.25H2.64576C4.20963 19.3231 5.51345 17.1778 6.58319 15H17.4168C18.4866 17.1778 19.7904 19.3231 21.3542 21.25Z',
  d27: 'M10.2619 3.86744C10.326 3.51008 10.637 3.25 11.0001 3.25H13.0001C13.3631 3.25 13.6741 3.51008 13.7382 3.86744C14.1037 5.90259 14.7444 8.39117 15.707 11H8.29309C9.25568 8.39117 9.89642 5.90259 10.2619 3.86744Z',
} as const;

export const IconEiffelTowerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eiffel-tower-stroke-rounded IconEiffelTowerStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconEiffelTowerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eiffel-tower-duotone-rounded IconEiffelTowerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
    </TheIconWrapper>
  );
};

export const IconEiffelTowerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eiffel-tower-twotone-rounded IconEiffelTowerTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconEiffelTowerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eiffel-tower-solid-rounded IconEiffelTowerSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEiffelTowerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eiffel-tower-bulk-rounded IconEiffelTowerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEiffelTowerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eiffel-tower-stroke-sharp IconEiffelTowerStrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
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
      />
    </TheIconWrapper>
  );
};

export const IconEiffelTowerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eiffel-tower-solid-sharp IconEiffelTowerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEiffelTower: TheIconSelfPack = {
  name: 'EiffelTower',
  StrokeRounded: IconEiffelTowerStrokeRounded,
  DuotoneRounded: IconEiffelTowerDuotoneRounded,
  TwotoneRounded: IconEiffelTowerTwotoneRounded,
  SolidRounded: IconEiffelTowerSolidRounded,
  BulkRounded: IconEiffelTowerBulkRounded,
  StrokeSharp: IconEiffelTowerStrokeSharp,
  SolidSharp: IconEiffelTowerSolidSharp,
};