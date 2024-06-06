import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 3.00366C10.9383 3.01202 10.3789 3.03449 9.8294 3.07102C5.64639 3.34908 2.31441 6.72832 2.04024 10.9707C1.98659 11.8009 1.98659 12.6606 2.04024 13.4908C2.1401 15.0359 2.82343 16.4665 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1625 2.77401 21.4949 2.91484 21.735C3.05568 21.9752 3.37026 21.9828 3.99943 21.9981C5.24367 22.0284 6.08268 21.6757 6.74868 21.1846C7.1264 20.906 7.31527 20.7668 7.44544 20.7508C7.5756 20.7347 7.83177 20.8403 8.34401 21.0512C8.8044 21.2408 9.33896 21.3579 9.8294 21.3905C11.2536 21.4851 12.7435 21.4853 14.1706 21.3905C18.3536 21.1124 21.6856 17.7332 21.9598 13.4908C22.0134 12.6606 22.0134 11.8009 21.9598 10.9707C21.9038 10.1048 21.7205 9.27487 21.4285 8.49994',
  d2: 'M14 6C14 6 15 6 16 8C16 8 19.1765 3 22 2',
  d3: 'M8.5 15H15.5M8.5 10H12',
  d4: 'M14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0134 12.6607 22.0134 11.8009 21.9598 10.9707C21.6856 6.72838 18.3536 3.34913 14.1706 3.07107C12.7435 2.97621 11.2536 2.97641 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905Z',
  d5: 'M11.5 3C10.9383 3.00836 10.3789 3.03083 9.8294 3.06736C5.64639 3.34541 2.31441 6.72466 2.04024 10.967C1.98659 11.7972 1.98659 12.657 2.04024 13.4872C2.1401 15.0323 2.82343 16.4629 3.62791 17.6709C4.09501 18.5166 3.78674 19.5721 3.30021 20.4941C2.94941 21.1589 2.77401 21.4913 2.91484 21.7314C3.05568 21.9715 3.37026 21.9792 3.99943 21.9945C5.24367 22.0248 6.08268 21.672 6.74868 21.1809C7.1264 20.9024 7.31527 20.7631 7.44544 20.7471C7.5756 20.7311 7.83177 20.8366 8.34401 21.0476C8.8044 21.2372 9.33896 21.3542 9.8294 21.3868C11.2536 21.4815 12.7435 21.4817 14.1706 21.3868C18.3536 21.1087 21.6856 17.7295 21.9598 13.4872C22.0134 12.657 22.0134 11.7972 21.9598 10.967C21.9038 10.1011 21.7205 9.27121 21.4285 8.49628',
  d6: 'M22.8176 1.79143C23.002 2.31202 22.7294 2.88352 22.2088 3.0679C21.6752 3.2569 21.0587 3.66376 20.4057 4.23648C19.763 4.80013 19.1378 5.47705 18.5841 6.14086C18.0322 6.80236 17.5635 7.43609 17.2324 7.90508C17.0672 8.13907 16.9372 8.33079 16.8493 8.46286L16.7191 8.66151C16.5258 8.96559 16.1837 9.14239 15.8239 9.12396C15.4639 9.10553 15.1418 8.89485 14.9806 8.57249C14.5399 7.69112 14.1446 7.34017 13.9453 7.20732C13.861 7.15111 13.804 7.12859 13.7814 7.12095C13.273 7.07374 12.875 6.64599 12.875 6.12527C12.875 5.57299 13.3227 5.12527 13.875 5.12527C13.9574 5.12607 14.1621 5.14114 14.3216 5.195C14.5295 5.25439 14.7803 5.36029 15.0547 5.54322C15.329 5.72607 15.6166 5.97884 15.9054 6.3247C16.2206 5.89395 16.609 5.38628 17.0483 4.85968C17.6416 4.14849 18.34 3.38792 19.087 2.73281C19.8236 2.08679 20.663 1.49365 21.5412 1.18265C22.0618 0.998267 22.6332 1.27083 22.8176 1.79143Z',
  d7: 'M16.4433 3.03926C16.4924 3.1972 16.3586 3.35404 16.0909 3.66774C16.0248 3.74524 15.9599 3.82213 15.8965 3.89823L15.8965 3.89824C15.842 3.96351 15.8148 3.99615 15.7886 4.0163C15.7116 4.07558 15.63 4.09301 15.5356 4.07033C15.5034 4.06262 15.4609 4.04182 15.3758 4.00022L15.3758 4.00021C15.1635 3.8964 14.958 3.81816 14.7633 3.76073C14.4016 3.64561 14.0384 3.62622 13.8896 3.62478L13.875 3.6247C12.4943 3.6247 11.375 4.74399 11.375 6.1247C11.375 7.20563 12.0602 8.12532 13.0206 8.47458C13.1137 8.50842 13.1602 8.52534 13.1956 8.55178C13.231 8.57822 13.2516 8.60608 13.2928 8.66179C13.384 8.78498 13.503 8.97081 13.6389 9.24274C14.0419 10.0486 14.8473 10.5754 15.7472 10.6214C16.6429 10.6673 17.4939 10.2296 17.9781 9.47635L18.1007 9.28929C18.1821 9.16721 18.3033 8.98847 18.4579 8.76954C18.7726 8.32363 19.2166 7.72368 19.7359 7.10118C19.8984 6.90641 20.0653 6.71299 20.2351 6.52406C20.45 6.28492 20.5574 6.16535 20.7051 6.17693C20.8527 6.18851 20.9384 6.3206 21.1098 6.58478C21.9503 7.88029 22.4772 9.40342 22.5832 11.0434C22.6389 11.9059 22.6389 12.7979 22.5832 13.6603C22.2853 18.2701 18.662 21.9564 14.0954 22.26C12.6351 22.357 11.1119 22.3568 9.65465 22.26C9.08972 22.2224 8.47478 22.0888 7.93339 21.8659C7.84733 21.8304 7.77126 21.7991 7.70361 21.7715C7.56703 21.7159 7.49873 21.688 7.42104 21.6977C7.34335 21.7073 7.28359 21.7513 7.16407 21.8392L7.0688 21.9093C6.27636 22.4937 5.27592 22.9036 3.85617 22.8691L3.81044 22.868C3.53655 22.8614 3.24461 22.8544 3.00652 22.8084C2.71975 22.7529 2.36496 22.6142 2.14291 22.2356C1.90123 21.8236 1.99813 21.4069 2.09188 21.1445C2.18036 20.8968 2.33374 20.6063 2.49042 20.3096L2.5119 20.2689C2.97823 19.3852 3.10814 18.663 2.85881 18.1815C2.02648 16.9251 1.27772 15.3767 1.1668 13.6603C1.11107 12.7979 1.11107 11.9059 1.1668 11.0434C1.46472 6.43367 5.088 2.74738 9.65465 2.44382C11.1119 2.34695 12.6351 2.34675 14.0954 2.44382C14.6929 2.48354 15.2744 2.58119 15.8343 2.73126C16.2076 2.8313 16.3943 2.88132 16.4433 3.03926ZM8.375 15.875C7.96079 15.875 7.625 15.5393 7.625 15.125C7.625 14.7108 7.96079 14.375 8.375 14.375H15.375C15.7892 14.375 16.125 14.7108 16.125 15.125C16.125 15.5393 15.7892 15.875 15.375 15.875H8.375ZM8.375 10.875C7.96079 10.875 7.625 10.5393 7.625 10.125C7.625 9.71082 7.96079 9.37504 8.375 9.37504H11.875C12.2892 9.37504 12.625 9.71082 12.625 10.125C12.625 10.5393 12.2892 10.875 11.875 10.875H8.375Z',
  d8: 'M16.0909 3.66774C16.3586 3.35404 16.4924 3.1972 16.4433 3.03926C16.3943 2.88132 16.2076 2.8313 15.8343 2.73126C15.2744 2.58119 14.6929 2.48354 14.0954 2.44382C12.6351 2.34675 11.1119 2.34695 9.65465 2.44382C5.088 2.74738 1.46472 6.43367 1.1668 11.0434C1.11107 11.9059 1.11107 12.7979 1.1668 13.6603C1.27772 15.3767 2.02648 16.9251 2.85881 18.1815C3.10814 18.663 2.97823 19.3852 2.5119 20.2689L2.49042 20.3096C2.33374 20.6063 2.18036 20.8968 2.09188 21.1445C1.99813 21.4069 1.90123 21.8236 2.14291 22.2356C2.36496 22.6142 2.71975 22.7529 3.00652 22.8084C3.24461 22.8544 3.53655 22.8614 3.81044 22.868L3.85617 22.8691C5.27592 22.9036 6.27636 22.4937 7.0688 21.9093C7.10278 21.8843 7.13446 21.8609 7.16407 21.8392C7.28359 21.7513 7.34335 21.7073 7.42104 21.6977C7.49873 21.688 7.56703 21.7159 7.70361 21.7715C7.77126 21.7991 7.84733 21.8304 7.93339 21.8659C8.47478 22.0888 9.08972 22.2224 9.65465 22.26C11.1119 22.3568 12.6351 22.357 14.0954 22.26C18.662 21.9564 22.2853 18.2701 22.5832 13.6603C22.6389 12.7979 22.6389 11.9059 22.5832 11.0434C22.4772 9.40342 21.9503 7.88029 21.1098 6.58478C20.9384 6.3206 20.8527 6.18851 20.7051 6.17693C20.5574 6.16535 20.45 6.28492 20.2351 6.52406C20.0653 6.71299 19.8984 6.90641 19.7359 7.10118C19.2166 7.72368 18.7726 8.32363 18.4579 8.76954C18.3033 8.98847 18.1821 9.16721 18.1007 9.28929L17.9781 9.47635C17.4939 10.2296 16.6429 10.6673 15.7472 10.6214C14.8473 10.5754 14.0419 10.0486 13.6389 9.24274C13.503 8.97081 13.384 8.78498 13.2928 8.66179C13.2516 8.60608 13.231 8.57822 13.1956 8.55178C13.1602 8.52534 13.1137 8.50842 13.0206 8.47458C12.0602 8.12532 11.375 7.20563 11.375 6.1247C11.375 4.74399 12.4943 3.6247 13.875 3.6247L13.8896 3.62478C14.0384 3.62622 14.4016 3.64561 14.7633 3.76073C14.958 3.81816 15.1635 3.8964 15.3758 4.00021C15.4609 4.04182 15.5034 4.06262 15.5356 4.07033C15.63 4.09301 15.7116 4.07558 15.7886 4.0163C15.8148 3.99615 15.842 3.96351 15.8965 3.89823C15.9599 3.82213 16.0248 3.74524 16.0909 3.66774Z',
  d9: 'M7.625 15.125C7.625 15.5392 7.96079 15.875 8.375 15.875H15.375C15.7892 15.875 16.125 15.5392 16.125 15.125C16.125 14.7108 15.7892 14.375 15.375 14.375H8.375C7.96079 14.375 7.625 14.7108 7.625 15.125ZM7.625 10.125C7.625 10.5392 7.96079 10.875 8.375 10.875H11.875C12.2892 10.875 12.625 10.5392 12.625 10.125C12.625 9.71079 12.2892 9.375 11.875 9.375H8.375C7.96079 9.375 7.625 9.71079 7.625 10.125Z',
  d10: 'M7.45276 14.9065H16.3773M7.45276 9.94238H12.9067',
  d11: 'M13.8981 5.97127L15.8814 7.9569L21.8311 2',
  d12: 'M9.99774 3.00387C2.474 3.43597 -0.258874 12.3807 3.61983 17.875L2.00691 21.7906C1.97374 21.8711 2.05224 21.9526 2.13396 21.9225L6.47089 20.3238C8.74673 21.8062 15.05 21.8446 17.3041 20.3238C19.5785 19.0673 23.0288 16.5602 21.4839 9.00019M9.99774 3.00387C10.1553 2.99482 10.3146 2.99023 10.4756 2.99023M9.99774 3.00387L11.3919 2.9989L12.6797 2.99023',
  d13: 'M14.1405 2.2722C15.38 2.35824 16.5514 2.68669 17.6077 3.21064L16.0432 4.77507L14.7503 3.48218L11.5684 6.66416L16.0432 11.139L21.0406 6.1417C21.9994 7.48948 22.6061 9.10634 22.7278 10.8595C22.75 11.1796 22.75 11.5514 22.75 12.2105V12.2895C22.75 12.9486 22.75 13.3204 22.7278 13.6405C22.4082 18.2443 18.7443 21.9082 14.1405 22.2278C13.8204 22.25 13.4486 22.25 12.7895 22.25H11.2105C10.5514 22.25 10.1796 22.25 9.85949 22.2278C8.63831 22.143 7.48219 21.8226 6.43709 21.3113L1.47483 22.75L2.77921 18.0954C1.92471 16.8022 1.38603 15.2804 1.2722 13.6405C1.24999 13.3205 1.24999 12.9486 1.25 12.2895V12.2895V12.2105V12.2104C1.24999 11.5514 1.24999 11.1795 1.2722 10.8595C1.59176 6.25571 5.25571 2.59176 9.85949 2.2722C10.1795 2.24999 10.5514 2.24999 11.2105 2.25H11.2105H12.7895H12.7896C13.4486 2.24999 13.8204 2.24999 14.1405 2.2722ZM7.5 15.7501V14.2501H16.5V15.7501H7.5ZM7.5 9.25012H12V10.7501H7.5V9.25012Z',
  d14: 'M22.7502 2.66421L16.043 9.37132L13.3359 6.66421L14.7502 5.25L16.043 6.54289L21.3359 1.25L22.7502 2.66421Z',
};

export const IconMessageDone01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-done-01-stroke-rounded IconMessageDone01StrokeRounded"
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

export const IconMessageDone01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-done-01-duotone-rounded IconMessageDone01DuotoneRounded"
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

export const IconMessageDone01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-done-01-twotone-rounded IconMessageDone01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMessageDone01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-done-01-solid-rounded IconMessageDone01SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageDone01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-done-01-bulk-rounded IconMessageDone01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageDone01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-done-01-stroke-sharp IconMessageDone01StrokeSharp"
    >
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
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageDone01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-done-01-solid-sharp IconMessageDone01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMessageDone01: TheIconSelfPack = {
  name: 'MessageDone01',
  StrokeRounded: IconMessageDone01StrokeRounded,
  DuotoneRounded: IconMessageDone01DuotoneRounded,
  TwotoneRounded: IconMessageDone01TwotoneRounded,
  SolidRounded: IconMessageDone01SolidRounded,
  BulkRounded: IconMessageDone01BulkRounded,
  StrokeSharp: IconMessageDone01StrokeSharp,
  SolidSharp: IconMessageDone01SolidSharp,
};