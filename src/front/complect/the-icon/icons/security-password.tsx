import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 9C2.53045 8.19543 2.6201 7.37669 2.76932 6.55013C2.8806 5.93375 2.93623 5.62556 3.12624 5.41465C3.31624 5.20374 3.78574 5.05413 4.72473 4.7549C7.03407 4.01899 8.98673 2 11.9982 2C15.0099 2 16.9647 4.01915 19.275 4.75499C20.2139 5.05405 20.6834 5.20358 20.8734 5.41449C21.0635 5.6254 21.1191 5.93364 21.2305 6.55013C21.3797 7.37669 21.4695 8.19543 21.5 9M19.4451 17C18.125 19.0226 16.1772 20.6375 13.6147 21.6175C12.9478 21.8725 12.6143 22 12.0015 22C11.3887 22 11.0553 21.8725 10.3883 21.6175C7.82558 20.6375 5.87726 19.0227 4.55666 17',
  d2: 'M8.5 12L9.5 13M9.5 13L10.5 14M9.5 13L10.5 12M9.5 13L8.5 14',
  d3: 'M3.5 12L4.5 13M4.5 13L5.5 14M4.5 13L5.5 12M4.5 13L3.5 14',
  d4: 'M13.5 12L14.5 13M14.5 13L15.5 14M14.5 13L15.5 12M14.5 13L13.5 14',
  d5: 'M18.5 12L19.5 13M19.5 13L20.5 14M19.5 13L20.5 12M19.5 13L18.5 14',
  d6: 'M11.9982 2C8.99043 2 7.04018 4.01899 4.73371 4.7549C3.79589 5.05413 3.32697 5.20374 3.1372 5.41465C2.94743 5.62556 2.89186 5.93375 2.78072 6.55013C1.59143 13.146 4.1909 19.244 10.3903 21.6175C11.0564 21.8725 11.3894 22 12.0015 22C12.6135 22 12.9466 21.8725 13.6126 21.6175C19.8116 19.2439 22.4086 13.146 21.219 6.55013C21.1078 5.93364 21.0522 5.6254 20.8624 5.41449C20.6726 5.20358 20.2037 5.05405 19.2659 4.75499C16.9585 4.01915 15.0061 2 11.9982 2Z',
  d7: 'M7.75693 2.43555C8.94906 1.81794 10.3159 1.25 11.9972 1.25C13.6785 1.25 15.0458 1.81795 16.2386 2.43554C16.5989 2.62212 16.9337 2.80669 17.2536 2.98308C18.0367 3.41478 18.7308 3.79744 19.4928 4.04044C19.94 4.18307 20.3362 4.30941 20.6172 4.41946C20.8816 4.52304 21.1958 4.66499 21.4188 4.91278C21.6192 5.13537 21.7221 5.38529 21.7903 5.62434C21.8523 5.84133 21.9052 6.13515 21.956 6.417C22.1383 7.42758 22.2351 8.43033 22.2467 9.41374C22.2499 9.68576 22.2515 9.82177 22.1634 9.91088C22.0753 10 21.9359 10 21.6571 10H2.34082C2.06203 10 1.92264 10 1.83457 9.9109C1.74649 9.8218 1.74807 9.68581 1.75122 9.41382C1.76263 8.43041 1.85938 7.42764 2.04159 6.41705C2.09238 6.13523 2.14531 5.84148 2.20724 5.6245C2.27547 5.38547 2.37836 5.13558 2.57864 4.91299C2.8016 4.6652 3.11585 4.52321 3.38027 4.4196C3.6612 4.30951 4.05742 4.1831 4.50471 4.04039C5.26628 3.7974 5.95974 3.41486 6.7422 2.98322C7.062 2.80681 7.39668 2.62218 7.75693 2.43555Z',
  d8: 'M13.8798 22.3179C13.23 22.5667 12.7515 22.75 12.0005 22.75C11.2494 22.75 10.7709 22.5667 10.1211 22.3179C7.15782 21.1834 4.97894 19.2504 3.58817 16.8444C3.37845 16.4815 3.27359 16.3001 3.36018 16.1501C3.44677 16 3.6635 16 4.09696 16H19.9025C20.3358 16 20.5525 16 20.6391 16.15C20.7257 16.3001 20.6209 16.4815 20.4113 16.8443C19.0212 19.2503 16.8429 21.1833 13.8798 22.3179Z',
  d9: 'M7.96979 11.4697C8.26269 11.1768 8.73756 11.1768 9.03045 11.4697L9.50012 11.9393L9.96979 11.4697C10.2627 11.1768 10.7376 11.1768 11.0305 11.4697C11.3233 11.7626 11.3233 12.2374 11.0305 12.5303L10.5608 13L11.0305 13.4697C11.3233 13.7626 11.3233 14.2374 11.0305 14.5303C10.7376 14.8232 10.2627 14.8232 9.96979 14.5303L9.50012 14.0607L9.03045 14.5303C8.73756 14.8232 8.26269 14.8232 7.96979 14.5303C7.6769 14.2374 7.6769 13.7626 7.96979 13.4697L8.43946 13L7.96979 12.5303C7.6769 12.2374 7.6769 11.7626 7.96979 11.4697Z',
  d10: 'M2.96979 11.4697C3.26269 11.1768 3.73756 11.1768 4.03045 11.4697L4.50012 11.9393L4.96979 11.4697C5.26269 11.1768 5.73756 11.1768 6.03045 11.4697C6.32335 11.7626 6.32335 12.2374 6.03045 12.5303L5.56078 13L6.03045 13.4697C6.32335 13.7626 6.32335 14.2374 6.03045 14.5303C5.73756 14.8232 5.26269 14.8232 4.96979 14.5303L4.50012 14.0607L4.03045 14.5303C3.73756 14.8232 3.26269 14.8232 2.96979 14.5303C2.6769 14.2374 2.6769 13.7626 2.96979 13.4697L3.43946 13L2.96979 12.5303C2.6769 12.2374 2.6769 11.7626 2.96979 11.4697Z',
  d11: 'M12.9698 11.4697C13.2627 11.1768 13.7376 11.1768 14.0305 11.4697L14.5001 11.9393L14.9698 11.4697C15.2627 11.1768 15.7376 11.1768 16.0305 11.4697C16.3233 11.7626 16.3233 12.2374 16.0305 12.5303L15.5608 13L16.0305 13.4697C16.3233 13.7626 16.3233 14.2374 16.0305 14.5303C15.7376 14.8232 15.2627 14.8232 14.9698 14.5303L14.5001 14.0607L14.0305 14.5303C13.7376 14.8232 13.2627 14.8232 12.9698 14.5303C12.6769 14.2374 12.6769 13.7626 12.9698 13.4697L13.4395 13L12.9698 12.5303C12.6769 12.2374 12.6769 11.7626 12.9698 11.4697Z',
  d12: 'M17.9698 11.4697C18.2627 11.1768 18.7376 11.1768 19.0305 11.4697L19.5001 11.9393L19.9698 11.4697C20.2627 11.1768 20.7376 11.1768 21.0305 11.4697C21.3233 11.7626 21.3233 12.2374 21.0305 12.5303L20.5608 13L21.0305 13.4697C21.3233 13.7626 21.3233 14.2374 21.0305 14.5303C20.7376 14.8232 20.2627 14.8232 19.9698 14.5303L19.5001 14.0607L19.0305 14.5303C18.7376 14.8232 18.2627 14.8232 17.9698 14.5303C17.6769 14.2374 17.6769 13.7626 17.9698 13.4697L18.4395 13L17.9698 12.5303C17.6769 12.2374 17.6769 11.7626 17.9698 11.4697Z',
  d13: 'M7.75895 2.43555C8.95108 1.81794 10.3179 1.25 11.9992 1.25C13.6805 1.25 15.0479 1.81795 16.2406 2.43554C16.6009 2.62212 16.9357 2.80669 17.2557 2.98308C18.0387 3.41478 18.7328 3.79744 19.4948 4.04044C19.9421 4.18307 20.3382 4.30941 20.6192 4.41946C20.8836 4.52304 21.1978 4.66499 21.4208 4.91278C21.6212 5.13537 21.7241 5.38529 21.7923 5.62434C21.8543 5.84133 21.9072 6.13515 21.958 6.417C22.1403 7.42758 22.2372 8.43033 22.2487 9.41374C22.2519 9.68576 22.2535 9.82177 22.1654 9.91088C22.0773 10 21.9379 10 21.6591 10H2.34283C2.06405 10 1.92465 10 1.83658 9.9109C1.7485 9.8218 1.75008 9.68581 1.75324 9.41382C1.76464 8.43041 1.86139 7.42764 2.04361 6.41705C2.09439 6.13523 2.14733 5.84148 2.20926 5.6245C2.27748 5.38547 2.38037 5.13558 2.58065 4.91299C2.80362 4.6652 3.11787 4.52321 3.38228 4.4196C3.66321 4.30951 4.05944 4.1831 4.50672 4.04039C5.26829 3.7974 5.96176 3.41486 6.74422 2.98322C7.06401 2.80681 7.3987 2.62218 7.75895 2.43555Z',
  d14: 'M13.8818 22.3179C13.232 22.5667 12.7536 22.75 12.0025 22.75C11.2514 22.75 10.7729 22.5667 10.1231 22.3179C7.15984 21.1834 4.98095 19.2504 3.59019 16.8444C3.38046 16.4815 3.2756 16.3001 3.36219 16.1501C3.44878 16 3.66551 16 4.09898 16H19.9045C20.3379 16 20.5545 16 20.6411 16.15C20.7277 16.3001 20.6229 16.4815 20.4133 16.8443C19.0232 19.2503 16.8449 21.1833 13.8818 22.3179Z',
  d15: 'M7.97162 11.4697C8.26452 11.1768 8.73939 11.1768 9.03228 11.4697L9.50195 11.9393L9.97162 11.4697C10.2645 11.1768 10.7394 11.1768 11.0323 11.4697C11.3252 11.7626 11.3252 12.2374 11.0323 12.5303L10.5626 13L11.0323 13.4697C11.3252 13.7626 11.3252 14.2374 11.0323 14.5303C10.7394 14.8232 10.2645 14.8232 9.97162 14.5303L9.50195 14.0607L9.03228 14.5303C8.73939 14.8232 8.26452 14.8232 7.97162 14.5303C7.67873 14.2374 7.67873 13.7626 7.97162 13.4697L8.44129 13L7.97162 12.5303C7.67873 12.2374 7.67873 11.7626 7.97162 11.4697Z',
  d16: 'M2.97162 11.4697C3.26452 11.1768 3.73939 11.1768 4.03228 11.4697L4.50195 11.9393L4.97162 11.4697C5.26452 11.1768 5.73939 11.1768 6.03228 11.4697C6.32518 11.7626 6.32518 12.2374 6.03228 12.5303L5.56261 13L6.03228 13.4697C6.32518 13.7626 6.32518 14.2374 6.03228 14.5303C5.73939 14.8232 5.26452 14.8232 4.97162 14.5303L4.50195 14.0607L4.03228 14.5303C3.73939 14.8232 3.26452 14.8232 2.97162 14.5303C2.67873 14.2374 2.67873 13.7626 2.97162 13.4697L3.44129 13L2.97162 12.5303C2.67873 12.2374 2.67873 11.7626 2.97162 11.4697Z',
  d17: 'M12.9716 11.4697C13.2645 11.1768 13.7394 11.1768 14.0323 11.4697L14.502 11.9393L14.9716 11.4697C15.2645 11.1768 15.7394 11.1768 16.0323 11.4697C16.3252 11.7626 16.3252 12.2374 16.0323 12.5303L15.5626 13L16.0323 13.4697C16.3252 13.7626 16.3252 14.2374 16.0323 14.5303C15.7394 14.8232 15.2645 14.8232 14.9716 14.5303L14.502 14.0607L14.0323 14.5303C13.7394 14.8232 13.2645 14.8232 12.9716 14.5303C12.6787 14.2374 12.6787 13.7626 12.9716 13.4697L13.4413 13L12.9716 12.5303C12.6787 12.2374 12.6787 11.7626 12.9716 11.4697Z',
  d18: 'M17.9716 11.4697C18.2645 11.1768 18.7394 11.1768 19.0323 11.4697L19.502 11.9393L19.9716 11.4697C20.2645 11.1768 20.7394 11.1768 21.0323 11.4697C21.3252 11.7626 21.3252 12.2374 21.0323 12.5303L20.5626 13L21.0323 13.4697C21.3252 13.7626 21.3252 14.2374 21.0323 14.5303C20.7394 14.8232 20.2645 14.8232 19.9716 14.5303L19.502 14.0607L19.0323 14.5303C18.7394 14.8232 18.2645 14.8232 17.9716 14.5303C17.6787 14.2374 17.6787 13.7626 17.9716 13.4697L18.4413 13L17.9716 12.5303C17.6787 12.2374 17.6787 11.7626 17.9716 11.4697Z',
  d19: 'M18.0042 12L19.5046 13.5M19.5046 13.5L21.005 15M19.5046 13.5L21.005 12M19.5046 13.5L18.0042 15M13.0028 12L14.5032 13.5M14.5032 13.5L16.0036 15M14.5032 13.5L16.0036 12M14.5032 13.5L13.0028 15M8.00146 12L9.50187 13.5M9.50187 13.5L11.0023 15M9.50187 13.5L11.0023 12M9.50187 13.5L8.00146 15M3.00012 12L4.50052 13.5M4.50052 13.5L6.00093 15M4.50052 13.5L6.00093 12M4.50052 13.5L3.00012 15',
  d20: 'M18.6257 18.0985C16.9915 20.0168 14.7366 21.3317 12.0598 22.001C9.44209 21.415 7.09352 20.0504 5.37923 17.9668M21.4971 9.06122C21.4689 7.78397 21.3101 6.42166 21.0087 4.97683C17.3479 4.97683 15.6007 1.93401 12.0299 2.00109C8.4048 2.00109 6.26803 5.16047 2.95419 4.93463C2.65522 6.39564 2.50974 7.77213 2.5 9.06122',
  d21: 'M3.43818 13.4991L2.46851 12.5294L3.52917 11.4688L4.49884 12.4384L5.46851 11.4688L6.52917 12.5294L5.5595 13.4991L6.52917 14.4688L5.46851 15.5294L4.49884 14.5597L3.52917 15.5294L2.46851 14.4688L3.43818 13.4991ZM8.43818 13.4991L7.46851 12.5294L8.52917 11.4688L9.49884 12.4384L10.4685 11.4688L11.5292 12.5294L10.5595 13.4991L11.5292 14.4688L10.4685 15.5294L9.49884 14.5597L8.52917 15.5294L7.46851 14.4688L8.43818 13.4991ZM13.4382 13.4991L12.4685 12.5294L13.5292 11.4688L14.4988 12.4384L15.4685 11.4688L16.5292 12.5294L15.5595 13.4991L16.5292 14.4688L15.4685 15.5294L14.4988 14.5597L13.5292 15.5294L12.4685 14.4688L13.4382 13.4991ZM18.4382 13.4991L17.4685 12.5294L18.5292 11.4688L19.4988 12.4384L20.4685 11.4688L21.5292 12.5294L20.5595 13.4991L21.5292 14.4688L20.4685 15.5294L19.4988 14.5597L18.5292 15.5294L17.4685 14.4688L18.4382 13.4991Z',
  d22: 'M7.19451 2.8128C8.53688 2.08008 10.0576 1.25 12 1.25C13.9517 1.25 15.4744 2.08191 16.8178 2.81581L16.8633 2.84064C18.2549 3.60075 19.4626 4.2476 20.986 4.2476H21.5802L21.7161 4.82563C22.1423 6.63829 22.3053 8.39488 22.2302 10.0557H1.76988C1.69473 8.39488 1.8578 6.63829 2.28395 4.82563L2.41984 4.2476H3.01407C4.53979 4.2476 5.75131 3.60038 7.14376 2.8405L7.19451 2.8128Z',
  d23: 'M3.74668 16.9448C5.48582 19.8675 8.28595 21.9536 11.8426 22.7163L12 22.75L12.1573 22.7163C15.714 21.9536 18.5142 19.8675 20.2533 16.9448H3.74668Z',
};

export const IconSecurityPasswordStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-password-stroke-rounded IconSecurityPasswordStrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityPasswordDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-password-duotone-rounded IconSecurityPasswordDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityPasswordTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-password-twotone-rounded IconSecurityPasswordTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityPasswordSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-password-solid-rounded IconSecurityPasswordSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSecurityPasswordBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-password-bulk-rounded IconSecurityPasswordBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityPasswordStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-password-stroke-sharp IconSecurityPasswordStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconSecurityPasswordSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-password-solid-sharp IconSecurityPasswordSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSecurityPassword: TheIconSelfPack = {
  name: 'SecurityPassword',
  StrokeRounded: IconSecurityPasswordStrokeRounded,
  DuotoneRounded: IconSecurityPasswordDuotoneRounded,
  TwotoneRounded: IconSecurityPasswordTwotoneRounded,
  SolidRounded: IconSecurityPasswordSolidRounded,
  BulkRounded: IconSecurityPasswordBulkRounded,
  StrokeSharp: IconSecurityPasswordStrokeSharp,
  SolidSharp: IconSecurityPasswordSolidSharp,
};