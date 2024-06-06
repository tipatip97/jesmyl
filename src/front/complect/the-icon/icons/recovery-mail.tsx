import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 8L9.94202 9.73943C11.6572 10.7535 12.3428 10.7535 14.058 9.73943L17 8',
  d2: 'M22 10.0262C21.9346 6.95987 21.9019 5.42671 20.7698 4.29099C19.6378 3.15527 18.0623 3.11571 14.9114 3.03658C12.9693 2.98781 11.0464 2.98781 9.10442 3.03657C5.95344 3.11569 4.37796 3.15525 3.24593 4.29098C2.11391 5.4267 2.0812 6.95986 2.01578 10.0262C1.99474 11.0121 1.99474 11.9922 2.01578 12.9782C2.0812 16.0445 2.11392 17.5777 3.24594 18.7134C4.37796 19.8491 5.95345 19.8887 9.10443 19.9678C9.74025 19.9837 10.374 19.9945 11.0071 20',
  d3: 'M21.6632 15.9994C21.1015 14.8169 19.8962 13.9994 18.5 13.9994C16.567 13.9994 15 15.5664 15 17.4994C15 19.4323 16.567 20.9994 18.5 20.9994C20.0853 20.9994 21.5695 19.9454 22 18.5M21.6632 15.9994V13.5M21.6632 15.9994L19.4277 16.1574',
  d4: 'M3.24496 18.7094C2.11383 17.5739 2.08114 16.0412 2.01577 12.9756C1.99475 11.9899 1.99474 11.0101 2.01576 10.0244C2.08114 6.95885 2.11382 5.42608 3.24495 4.29065C4.37608 3.15521 5.95033 3.11566 9.09882 3.03656C11.0393 2.98781 12.9607 2.98781 14.9012 3.03657C18.0497 3.11568 19.6239 3.15523 20.7551 4.29066C21.8862 5.42609 21.9189 6.95886 21.9842 10.0244C22.0053 11.0101 22.0053 11.9899 21.9842 12.9756C21.9542 14.386 21.931 15.472 21.8046 16.344C21.3272 14.9791 20.0279 14 18.5 14C16.567 14 15 15.567 15 17.5C15 18.446 15.3753 19.3043 15.9851 19.9342C15.6459 19.9447 15.2852 19.9538 14.9012 19.9634C12.9607 20.0122 11.0393 20.0122 9.09883 19.9634C5.95033 19.8843 4.37608 19.8448 3.24496 18.7094Z',
  d5: 'M9.02074 2.28871C10.9738 2.23964 13.024 2.23924 14.9771 2.28832L14.9994 2.28888C16.5139 2.3269 17.7337 2.35753 18.7122 2.52794C19.7417 2.70724 20.5784 3.05111 21.2853 3.76067C21.9892 4.46725 22.3313 5.29194 22.5072 6.30475C22.6746 7.26912 22.7001 8.46615 22.7317 9.949C22.7445 10.5484 22.7496 11.1882 22.747 11.8199C22.4343 11.6173 22.0615 11.4998 21.6612 11.4998C21.0346 11.4998 20.4753 11.788 20.1085 12.239C19.5988 12.0831 19.0579 11.9991 18.498 11.9991C15.4605 11.9991 12.998 14.4615 12.998 17.4991C12.998 18.7067 13.3872 19.8234 14.047 20.7306C12.3801 20.7589 10.6658 20.7524 9.02069 20.7111C7.49588 20.6728 6.26892 20.642 5.28561 20.4707C4.25612 20.2914 3.4194 19.9476 2.71254 19.238C2.00863 18.5314 1.66656 17.7067 1.49068 16.6939C1.32321 15.7296 1.2977 14.5325 1.2661 13.0497H1.26494C1.2437 12.0533 1.24576 10.9455 1.267 9.94917L1.26758 9.92208C1.2989 8.45173 1.32422 7.26323 1.49067 6.30473C1.66655 5.29192 2.00863 4.46723 2.71253 3.76065C3.4194 3.0511 4.25611 2.70722 5.28561 2.52793C6.26893 2.35668 7.49591 2.32587 9.02074 2.28759V2.28871ZM7.38182 7.35427C7.02527 7.14346 6.56533 7.26161 6.35452 7.61817C6.14371 7.97473 6.26186 8.43467 6.61841 8.64548L9.56043 10.3849C10.4313 10.8998 11.1827 11.2499 12.0001 11.2499C12.8175 11.2499 13.569 10.8998 14.4398 10.3849L17.3818 8.64548C17.7384 8.43467 17.8565 7.97473 17.6457 7.61817C17.4349 7.26161 16.975 7.14346 16.6184 7.35427L13.6764 9.0937C12.832 9.59292 12.3831 9.74987 12.0001 9.74987C11.6171 9.74987 11.1682 9.59292 10.3238 9.0937L7.38182 7.35427Z',
  d6: 'M21.6632 12.7498C22.0774 12.7498 22.4132 13.0855 22.4132 13.4998V15.9991C22.4132 16.3928 22.1088 16.7195 21.7161 16.7473L19.4805 16.9053C19.0674 16.9345 18.7087 16.6232 18.6795 16.21C18.6503 15.7968 18.9616 15.4382 19.3748 15.409L20.2156 15.3496C19.7449 14.9735 19.1484 14.7491 18.5 14.7491C16.9812 14.7491 15.75 15.9803 15.75 17.4991C15.75 19.0179 16.9812 20.2491 18.5 20.2491C19.7805 20.2491 20.9529 19.388 21.2812 18.2857C21.3994 17.8887 21.8171 17.6627 22.2141 17.781C22.6111 17.8992 22.837 18.3169 22.7188 18.7138C22.1861 20.5023 20.3901 21.7491 18.5 21.7491C16.1528 21.7491 14.25 19.8463 14.25 17.4991C14.25 15.1519 16.1528 13.2491 18.5 13.2491C19.3966 13.2491 20.228 13.5268 20.9132 14.0003V13.4998C20.9132 13.0855 21.249 12.7498 21.6632 12.7498Z',
  d7: 'M14.9771 2.28832C13.024 2.23924 10.9738 2.23964 9.02074 2.28871V2.28759C7.49591 2.32587 6.26893 2.35668 5.28561 2.52793C4.25611 2.70722 3.4194 3.0511 2.71253 3.76065C2.00863 4.46723 1.66655 5.29192 1.49067 6.30473C1.32422 7.26323 1.2989 8.45173 1.26758 9.92208L1.267 9.94917C1.24576 10.9455 1.2437 12.0533 1.26494 13.0497H1.2661C1.2977 14.5325 1.32321 15.7296 1.49068 16.6939C1.66656 17.7067 2.00863 18.5314 2.71254 19.238C3.4194 19.9476 4.25612 20.2914 5.28561 20.4707C6.26892 20.642 7.49588 20.6728 9.02069 20.7111C10.6658 20.7524 12.3801 20.7589 14.047 20.7306C13.3872 19.8234 12.998 18.7067 12.998 17.4991C12.998 14.4615 15.4605 11.9991 18.498 11.9991C19.0579 11.9991 19.5988 12.0831 20.1085 12.239C20.4753 11.788 21.0346 11.4998 21.6612 11.4998C22.0615 11.4998 22.4343 11.6173 22.747 11.8199C22.7496 11.1882 22.7445 10.5484 22.7317 9.949C22.7001 8.46615 22.6746 7.26912 22.5072 6.30475C22.3313 5.29194 21.9892 4.46725 21.2853 3.76067C20.5784 3.05111 19.7417 2.70724 18.7122 2.52794C17.7337 2.35753 16.5139 2.3269 14.9994 2.28888L14.9771 2.28832Z',
  d8: 'M6.35452 7.61817C6.56533 7.26161 7.02527 7.14346 7.38182 7.35427L10.3238 9.0937C11.1682 9.59292 11.6171 9.74987 12.0001 9.74987C12.3831 9.74987 12.832 9.59292 13.6764 9.0937L16.6184 7.35427C16.975 7.14346 17.4349 7.26161 17.6457 7.61817C17.8565 7.97473 17.7384 8.43467 17.3818 8.64548L14.4398 10.3849C13.569 10.8998 12.8175 11.2499 12.0001 11.2499C11.1827 11.2499 10.4313 10.8998 9.56043 10.3849L6.61841 8.64548C6.26186 8.43467 6.14371 7.97473 6.35452 7.61817Z',
  d9: 'M6 7.5L12 11.5L18 7.5',
  d10: 'M22 10V3H2V20H12',
  d11: 'M21.6632 15.9994C21.1015 14.8169 19.8962 13.9994 18.5 13.9994C16.567 13.9994 15 15.5664 15 17.4994C15 19.4323 16.567 20.9994 18.5 20.9994C21 20.9994 22 19 22 19M21.6632 15.9994V13.5M21.6632 15.9994L19.4277 16.1574',
  d12: 'M1.25 2.25H22.75V11.5H19.4073V12.1229C19.0322 12.042 18.6429 11.9994 18.2441 11.9994C15.2066 11.9994 12.7441 14.4618 12.7441 17.4994C12.7441 18.7154 13.1388 19.8394 13.8071 20.75H1.25V2.25ZM6.41603 6.49997L5.58398 7.74805L12 12.0254L18.416 7.74805L17.584 6.49997L12 10.2226L6.41603 6.49997Z',
  d13: 'M22.1573 12.75V16.6982L18.4765 16.9584L18.3708 15.4621L19.9597 15.3498C19.4891 14.9738 18.8926 14.7494 18.2441 14.7494C16.7254 14.7494 15.4941 15.9806 15.4941 17.4994C15.4941 19.0181 16.7254 20.2494 18.2441 20.2494C19.2746 20.2494 19.9788 19.843 20.4335 19.439C20.6639 19.2342 20.8301 19.0295 20.9369 18.8788C20.99 18.8038 21.0275 18.7435 21.0502 18.7051C21.0615 18.6859 21.069 18.6723 21.0729 18.6652L21.0754 18.6605L21.4089 17.9937L22.7504 18.6647L22.4149 19.3355L21.7441 19C22.4149 19.3355 22.4151 19.3352 22.4149 19.3355L22.4142 19.3369L22.4134 19.3385L22.4115 19.3422L22.4065 19.3519L22.3917 19.3798C22.3797 19.4019 22.3633 19.4313 22.3424 19.4668C22.3006 19.5376 22.2405 19.6335 22.1608 19.746C22.002 19.9702 21.7618 20.2653 21.4298 20.5603C20.7595 21.156 19.7137 21.7494 18.2441 21.7494C15.8969 21.7494 13.9941 19.8465 13.9941 17.4994C13.9941 15.1521 15.8969 13.2494 18.2441 13.2494C19.1408 13.2494 19.9721 13.527 20.6573 14.0006V12.75H22.1573Z',
};

export const IconRecoveryMailStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recovery-mail-stroke-rounded IconRecoveryMailStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconRecoveryMailDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recovery-mail-duotone-rounded IconRecoveryMailDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRecoveryMailTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recovery-mail-twotone-rounded IconRecoveryMailTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconRecoveryMailSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recovery-mail-solid-rounded IconRecoveryMailSolidRounded"
    >
      <path 
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

export const IconRecoveryMailBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recovery-mail-bulk-rounded IconRecoveryMailBulkRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRecoveryMailStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recovery-mail-stroke-sharp IconRecoveryMailStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconRecoveryMailSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recovery-mail-solid-sharp IconRecoveryMailSolidSharp"
    >
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

export const iconPackOfRecoveryMail: TheIconSelfPack = {
  name: 'RecoveryMail',
  StrokeRounded: IconRecoveryMailStrokeRounded,
  DuotoneRounded: IconRecoveryMailDuotoneRounded,
  TwotoneRounded: IconRecoveryMailTwotoneRounded,
  SolidRounded: IconRecoveryMailSolidRounded,
  BulkRounded: IconRecoveryMailBulkRounded,
  StrokeSharp: IconRecoveryMailStrokeSharp,
  SolidSharp: IconRecoveryMailSolidSharp,
};