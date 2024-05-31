import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 11.8045C17 11.4588 17 11.286 17.052 11.132C17.2032 10.6844 17.6018 10.5108 18.0011 10.3289C18.45 10.1244 18.6744 10.0222 18.8968 10.0042C19.1493 9.98378 19.4022 10.0382 19.618 10.1593C19.9041 10.3198 20.1036 10.6249 20.3079 10.873C21.2513 12.0188 21.7229 12.5918 21.8955 13.2236C22.0348 13.7334 22.0348 14.2666 21.8955 14.7764C21.6438 15.6979 20.8485 16.4704 20.2598 17.1854C19.9587 17.5511 19.8081 17.734 19.618 17.8407C19.4022 17.9618 19.1493 18.0162 18.8968 17.9958C18.6744 17.9778 18.45 17.8756 18.0011 17.6711C17.6018 17.4892 17.2032 17.3156 17.052 16.868C17 16.714 17 16.5412 17 16.1955V11.8045Z',
  d2: 'M7 11.8046C7 11.3694 6.98778 10.9782 6.63591 10.6722C6.50793 10.5609 6.33825 10.4836 5.99891 10.329C5.55001 10.1246 5.32556 10.0224 5.10316 10.0044C4.43591 9.9504 4.07692 10.4058 3.69213 10.8732C2.74875 12.019 2.27706 12.5919 2.10446 13.2237C1.96518 13.7336 1.96518 14.2668 2.10446 14.7766C2.3562 15.6981 3.15152 16.4705 3.74021 17.1856C4.11129 17.6363 4.46577 18.0475 5.10316 17.996C5.32556 17.978 5.55001 17.8757 5.99891 17.6713C6.33825 17.5167 6.50793 17.4394 6.63591 17.3281C6.98778 17.0221 7 16.631 7 16.1957V11.8046Z',
  d3: 'M20 10.5V9C20 5.13401 16.4183 2 12 2C7.58172 2 4 5.13401 4 9V10.5',
  d4: 'M20 17.5C20 22 16 22 12 22',
  d5: 'M3.17189 10.3245C3.51251 9.90525 4.10868 9.17152 5.16362 9.25684C5.52133 9.28576 5.86284 9.44206 6.22574 9.60814C6.49844 9.73178 6.915 9.921 7.12808 10.1063C7.75096 10.648 7.75036 11.363 7.75002 11.7764V16.224C7.75036 16.6374 7.75096 17.3524 7.12808 17.8941C6.915 18.0794 6.64788 18.2005 6.37519 18.3242C6.01228 18.4902 5.52133 18.7146 5.16362 18.7436C4.11854 18.8281 3.53316 18.1152 3.18925 17.6964C3.10208 17.5905 2.96671 17.432 2.85082 17.2977L2.85081 17.2977C2.63893 17.0522 2.39841 16.7735 2.20005 16.5139C1.8724 16.0851 1.54407 15.5713 1.38098 14.9743C1.20634 14.335 1.20634 13.6654 1.38098 13.0261C1.49932 12.5929 1.71345 12.2106 1.99611 11.8093C2.26984 11.4207 2.71587 10.8783 3.17189 10.3245Z',
  d6: 'M20.8281 10.3245C20.4875 9.90525 19.8914 9.17152 18.8364 9.25684C18.4787 9.28576 18.1372 9.44206 17.7743 9.60814C17.5016 9.73178 17.085 9.921 16.872 10.1063C16.2491 10.648 16.2497 11.363 16.25 11.7764V16.224C16.2497 16.6374 16.2491 17.3524 16.872 17.8941C17.085 18.0794 17.3522 18.2005 17.6248 18.3242C17.9878 18.4902 18.4787 18.7146 18.8364 18.7436C19.8815 18.8281 20.4669 18.1152 20.8108 17.6964C20.8979 17.5905 21.0333 17.432 21.1492 17.2977C21.3611 17.0522 21.6016 16.7735 21.8 16.5139C22.1276 16.0851 22.456 15.5713 22.6191 14.9743C22.7937 14.335 22.7937 13.6654 22.6191 13.0261C22.5007 12.5929 22.2866 12.2106 22.0039 11.8093C21.7302 11.4207 21.2842 10.8783 20.8281 10.3245Z',
  d7: 'M12 3.15476C8.11539 3.15476 5.19444 5.82861 5.19444 8.86905V10.2976C5.19444 10.8236 4.75917 11.25 4.22222 11.25C3.68528 11.25 3.25 10.8236 3.25 10.2976V8.86905C3.25 4.54569 7.29351 1.25 12 1.25C16.7065 1.25 20.75 4.54569 20.75 8.86905V10.2976C20.75 10.8236 20.3147 11.25 19.7778 11.25C19.2408 11.25 18.8056 10.8236 18.8056 10.2976V8.86905C18.8056 5.82861 15.8846 3.15476 12 3.15476Z',
  d8: 'M17.0914 20.4434C15.8626 20.8911 14.1591 20.9038 12.2 20.9038C11.6753 20.9038 11.25 21.3171 11.25 21.8269C11.25 22.3367 11.6753 22.75 12.2 22.75C12.2378 22.75 12.2758 22.75 12.3138 22.75C14.1268 22.7502 16.1707 22.7505 17.7586 22.172C18.603 21.8643 19.3759 21.3759 19.9283 20.5994C20.4798 19.8243 20.75 18.8489 20.75 17.6731C20.75 17.1633 20.3247 16.75 19.8 16.75C19.2753 16.75 18.85 17.1633 18.85 17.6731C18.85 18.5742 18.6452 19.1564 18.3654 19.5496C18.0866 19.9414 17.672 20.2318 17.0914 20.4434Z',
  d9: 'M5.19444 8.86905C5.19444 5.82861 8.11539 3.15476 12 3.15476C15.8846 3.15476 18.8056 5.82861 18.8056 8.86905V9.25965C18.8158 9.25861 18.8261 9.25767 18.8364 9.25683C19.8149 9.1777 20.3987 9.80322 20.75 10.2288V8.86905C20.75 4.54569 16.7065 1.25 12 1.25C7.29351 1.25 3.25 4.54569 3.25 8.86905V10.2289C3.60128 9.80326 4.18509 9.1777 5.16362 9.25683C5.17391 9.25767 5.18418 9.25861 5.19444 9.25964V8.86905Z',
  d10: 'M18.7317 18.7303C18.7677 18.7363 18.8026 18.7408 18.8364 18.7436C19.8217 18.8232 20.3984 18.1941 20.7494 17.7709C20.7347 18.9031 20.4644 19.8459 19.9283 20.5994C19.3759 21.3759 18.603 21.8643 17.7586 22.172C16.1707 22.7505 14.1269 22.7502 12.3138 22.75L12.2 22.75C11.6753 22.75 11.25 22.3367 11.25 21.8269C11.25 21.3171 11.6753 20.9038 12.2 20.9038C14.1591 20.9038 15.8626 20.8911 17.0914 20.4434C17.672 20.2318 18.0866 19.9414 18.3654 19.5496C18.516 19.338 18.6448 19.0717 18.7317 18.7303Z',
  d11: 'M7 11V17L5 18C3.32748 16.5478 2.49121 15.8217 2.18521 15.021C2.05713 14.6859 1.99548 14.3428 2.00026 14C1.99548 13.6572 2.05713 13.3141 2.18521 12.979C2.49121 12.1783 3.32748 11.4522 5 10L7 11Z',
  d12: 'M17 17L17 11L19 10C20.6725 11.4522 21.5088 12.1783 21.8148 12.979C21.9429 13.3141 22.0045 13.6572 21.9997 14C22.0045 14.3428 21.9429 14.6859 21.8148 15.021C21.5088 15.8217 20.6725 16.5478 19 18L17 17Z',
  d13: 'M20 11V9C20 5.13401 16.4183 2 12 2C7.58172 2 4 5.13401 4 9V11',
  d14: 'M20 17C20 22 16 22 12 22',
  d15: 'M4.88692 18.8956C4.0714 18.1875 3.02289 17.2772 2.54595 16.7932C2.0625 16.3026 1.69235 15.8329 1.48462 15.2893C1.3251 14.8719 1.24544 14.4381 1.2502 14.0005C1.24544 13.5629 1.3251 13.1292 1.48462 12.7118C1.69235 12.1682 2.0625 11.6985 2.54595 11.2079C3.02289 10.7239 4.0714 9.81353 4.88692 9.10547L7.75 10.537V17.4641L4.88692 18.8956Z',
  d16: 'M19.1131 9.10547C19.9286 9.81353 20.9771 10.7239 21.4541 11.2079C21.9375 11.6985 22.3077 12.1682 22.5154 12.7118C22.6749 13.1292 22.7546 13.5629 22.7498 14.0005C22.7546 14.4381 22.6749 14.8719 22.5154 15.2893C22.3077 15.8329 21.9375 16.3026 21.4541 16.7932C20.9771 17.2772 19.9286 18.1875 19.1131 18.8956L16.25 17.4641V10.537L19.1131 9.10547Z',
  d17: 'M12 3.25C8.0044 3.25 5 6.05754 5 9.25V11.25H3V9.25C3 4.71047 7.15904 1.25 12 1.25C16.841 1.25 21 4.71047 21 9.25V11.25H19V9.25C19 6.05754 15.9956 3.25 12 3.25Z',
  d18: 'M17.1154 20.2019C15.8394 20.7335 14.0673 20.75 12 20.75V22.75C12.0421 22.75 12.0844 22.75 12.1268 22.75C14.0296 22.7503 16.1982 22.7507 17.8846 22.048C18.7876 21.6718 19.5936 21.0816 20.1616 20.1689C20.7238 19.2653 21 18.1303 21 16.75H19C19 17.8696 18.7762 18.6096 18.4634 19.1123C18.1564 19.6058 17.7124 19.9531 17.1154 20.2019Z',
} as const;

export const IconCustomerService01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-01-stroke-rounded IconCustomerService01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconCustomerService01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-01-duotone-rounded IconCustomerService01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconCustomerService01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-01-twotone-rounded IconCustomerService01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconCustomerService01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-01-solid-rounded IconCustomerService01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomerService01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-01-bulk-rounded IconCustomerService01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomerService01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-01-stroke-sharp IconCustomerService01StrokeSharp"
    >
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomerService01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-01-solid-sharp IconCustomerService01SolidSharp"
    >
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

export const iconPackOfCustomerService01: TheIconSelfPack = {
  name: 'CustomerService01',
  StrokeRounded: IconCustomerService01StrokeRounded,
  DuotoneRounded: IconCustomerService01DuotoneRounded,
  TwotoneRounded: IconCustomerService01TwotoneRounded,
  SolidRounded: IconCustomerService01SolidRounded,
  BulkRounded: IconCustomerService01BulkRounded,
  StrokeSharp: IconCustomerService01StrokeSharp,
  SolidSharp: IconCustomerService01SolidSharp,
};