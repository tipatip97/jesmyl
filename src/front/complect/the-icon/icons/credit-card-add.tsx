import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C21.8394 6.51358 21.9755 7.93642 21.9963 10.5',
  d2: 'M18.5 20L18.5 13M15 16.5H22',
  d3: 'M2 9H22',
  d4: 'M10.5 20H13.5C17.2586 20 19.1379 20 20.3925 19.0091C20.5932 18.8506 20.7788 18.676 20.9472 18.4871C22 17.3062 22 15.5375 22 12C22 10.8169 22 9.8316 21.9606 9H2.03939C2 9.8316 2 10.8169 2 12C2 15.5375 2 17.3062 3.0528 18.4871C3.22119 18.676 3.40678 18.8506 3.60746 19.0091C4.86213 20 6.74142 20 10.5 20Z',
  d5: 'M18.375 11.875C18.9273 11.875 19.375 12.3227 19.375 12.875V15.375H21.875C22.4273 15.375 22.875 15.8227 22.875 16.375C22.875 16.9273 22.4273 17.375 21.875 17.375H19.375V19.875C19.375 20.4273 18.9273 20.875 18.375 20.875C17.8227 20.875 17.375 20.4273 17.375 19.875L17.375 17.375H14.875C14.3227 17.375 13.875 16.9273 13.875 16.375C13.875 15.8227 14.3227 15.375 14.875 15.375H17.375L17.375 12.875C17.375 12.3227 17.8227 11.875 18.375 11.875Z',
  d6: 'M17.8444 3.2536C16.7058 3.12498 15.2616 3.12499 13.4226 3.125H10.3275C8.48847 3.12499 7.04418 3.12498 5.90559 3.2536C4.74343 3.38488 3.80102 3.65862 3.01764 4.27729C2.78312 4.46249 2.56569 4.66705 2.36799 4.8888C1.70182 5.63601 1.40433 6.54169 1.26264 7.65285C1.24633 7.7807 1.23818 7.84463 1.25284 7.90079C1.27628 7.99054 1.34515 8.06875 1.43122 8.10335C1.48507 8.125 1.55246 8.125 1.68724 8.125H22.0628C22.1976 8.125 22.265 8.125 22.3188 8.10335C22.4049 8.06875 22.4737 7.99053 22.4972 7.90079C22.5118 7.84463 22.5037 7.7807 22.4874 7.65285C22.3457 6.54169 22.0482 5.63601 21.382 4.8888C21.1843 4.66705 20.9669 4.46249 20.7324 4.27729C19.949 3.65862 19.0066 3.38488 17.8444 3.2536Z',
  d7: 'M21.875 13.875C22.2434 13.875 22.4276 13.875 22.5107 13.8068C22.5279 13.7926 22.5365 13.7841 22.5508 13.7669C22.6195 13.6844 22.6205 13.535 22.6224 13.2363C22.625 12.8249 22.625 12.3891 22.625 11.9278V11.8223C22.625 11.2465 22.625 10.7106 22.6199 10.2121C22.6171 9.9364 22.6156 9.79856 22.528 9.71178C22.4403 9.625 22.3014 9.625 22.0236 9.625H1.72639C1.44861 9.625 1.30972 9.625 1.22204 9.71178C1.13437 9.79856 1.13295 9.9364 1.13012 10.2121C1.12499 10.7106 1.125 11.2465 1.125 11.8222V11.9277C1.12499 13.6517 1.12498 15.0177 1.26263 16.0972C1.40432 17.2083 1.70181 18.114 2.36798 18.8612C2.56568 19.0829 2.78311 19.2875 3.01763 19.4727C3.801 20.0914 4.74342 20.3651 5.90558 20.4964C7.04417 20.625 8.48845 20.625 10.3275 20.625H13.4225C14.0775 20.625 14.6824 20.625 15.2413 20.6192C15.5372 20.6161 15.6851 20.6146 15.7672 20.546C15.7845 20.5316 15.7931 20.523 15.8073 20.5056C15.875 20.4227 15.875 20.2401 15.875 19.875V19.475C15.875 19.1922 15.875 19.0507 15.7871 18.9629C15.6993 18.875 15.5578 18.875 15.275 18.875H14.875C13.4943 18.875 12.375 17.7557 12.375 16.375C12.375 14.9943 13.4943 13.875 14.875 13.875H15.275C15.5578 13.875 15.6993 13.875 15.7871 13.7871C15.875 13.6993 15.875 13.5578 15.875 13.275V12.875C15.875 11.4943 16.9943 10.375 18.375 10.375C19.7557 10.375 20.875 11.4943 20.875 12.875V13.275C20.875 13.5578 20.875 13.6993 20.9629 13.7871C21.0507 13.875 21.1922 13.875 21.475 13.875H21.875Z',
  d8: 'M17.8453 3.2536C16.7067 3.12498 15.2625 3.12499 13.4235 3.125H10.3284C8.48937 3.12499 7.04508 3.12498 5.90649 3.2536C4.74433 3.38488 3.80192 3.65862 3.01854 4.27729C2.78402 4.46249 2.56659 4.66705 2.36889 4.8888C1.70272 5.63601 1.40523 6.54169 1.26354 7.65285C1.24723 7.7807 1.23908 7.84463 1.25374 7.90079C1.27718 7.99054 1.34605 8.06875 1.43212 8.10335C1.48597 8.125 1.55336 8.125 1.68814 8.125H22.0637C22.1985 8.125 22.2659 8.125 22.3197 8.10335C22.4058 8.06875 22.4746 7.99053 22.4981 7.90079C22.5127 7.84463 22.5046 7.7807 22.4883 7.65285C22.3466 6.54169 22.0491 5.63601 21.3829 4.8888C21.1852 4.66705 20.9678 4.46249 20.7333 4.27729C19.9499 3.65862 19.0075 3.38488 17.8453 3.2536Z',
  d9: 'M22 11V4H2V20H13',
  d10: 'M19.5 17.5V20L17.5 20L17.5 17.5H15V15.5H17.5L17.5 13H19.5V15.5H22V17.5H19.5Z',
  d11: 'M1.25 4C1.25 3.58579 1.58579 3.25 2 3.25H22C22.4142 3.25 22.75 3.58579 22.75 4V8.25H1.25V4Z',
  d12: 'M1.25 9.75H22.75V14H21V11.5H16V14H13.5V19H16V20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V9.75Z',
};

export const IconCreditCardAddStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-add-stroke-rounded IconCreditCardAddStrokeRounded"
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

export const IconCreditCardAddDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-add-duotone-rounded IconCreditCardAddDuotoneRounded"
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
        strokeLinecap="round" 
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

export const IconCreditCardAddTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-add-twotone-rounded IconCreditCardAddTwotoneRounded"
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

export const IconCreditCardAddSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-add-solid-rounded IconCreditCardAddSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconCreditCardAddBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-add-bulk-rounded IconCreditCardAddBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCreditCardAddStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-add-stroke-sharp IconCreditCardAddStrokeSharp"
    >
      <path 
        d={d.d2} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardAddSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-add-solid-sharp IconCreditCardAddSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCreditCardAdd: TheIconSelfPack = {
  name: 'CreditCardAdd',
  StrokeRounded: IconCreditCardAddStrokeRounded,
  DuotoneRounded: IconCreditCardAddDuotoneRounded,
  TwotoneRounded: IconCreditCardAddTwotoneRounded,
  SolidRounded: IconCreditCardAddSolidRounded,
  BulkRounded: IconCreditCardAddBulkRounded,
  StrokeSharp: IconCreditCardAddStrokeSharp,
  SolidSharp: IconCreditCardAddSolidSharp,
};