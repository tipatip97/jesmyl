import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 12.5C19.9751 12.4136 19.9499 12.326 19.9244 12.2373C18.8875 8.63723 17.4956 7.5 13.4291 7.5H9.65019C5.74529 7.5 4.23479 8.48796 3.1549 12.2373C2.18223 15.6144 1.6959 17.3029 2.20436 18.6124C2.51576 19.4143 3.06862 20.1097 3.79294 20.6104C5.17171 21.5636 8.63187 22.0381 12 21.9976',
  d2: 'M7 8V6.36364C7 3.95367 9.01472 2 11.5 2C13.9853 2 16 3.95367 16 6.36364V8',
  d3: 'M14 19C14 19 15 19 16 21C16 21 19.1765 16 22 15',
  d4: 'M10.5 11H12.5',
  d5: 'M13.3816 7.5H9.61841C5.72973 7.5 4.2255 8.48796 3.1501 12.2373C2.18147 15.6144 1.69716 17.3029 2.20352 18.6124C2.51361 19.4143 3.06418 20.1097 3.78549 20.6104C6.3944 22.4216 16.4865 22.5043 19.2145 20.6104C19.9358 20.1097 20.4864 19.4143 20.7965 18.6124C21.3028 17.3029 20.8185 15.6144 19.8499 12.2373C18.8173 8.63723 17.4313 7.5 13.3816 7.5Z',
  d6: 'M11.375 3.25C9.41277 3.25 7.875 4.78473 7.875 6.61364V8.25C7.875 8.80228 7.42728 9.25 6.875 9.25C6.32272 9.25 5.875 8.80228 5.875 8.25V6.61364C5.875 3.6226 8.36666 1.25 11.375 1.25C14.3833 1.25 16.875 3.6226 16.875 6.61364V8.25C16.875 8.80228 16.4273 9.25 15.875 9.25C15.3227 9.25 14.875 8.80228 14.875 8.25V6.61364C14.875 4.78473 13.3372 3.25 11.375 3.25Z',
  d7: 'M4.76681 7.85346C5.96283 6.99457 7.51333 6.75 9.49342 6.75H13.2566C15.326 6.75 16.8899 7.03438 18.0714 7.91803C19.2558 8.80389 19.9175 10.1886 20.4458 12.0305L20.4581 12.0731L20.5179 12.2819C20.5861 12.5197 20.6202 12.6386 20.5777 12.737C20.5352 12.8355 20.4185 12.8958 20.185 13.0163C19.3966 13.4233 18.6904 13.9602 18.0979 14.4798C17.2727 15.2035 16.5194 16.0268 15.8965 16.7735C15.8482 16.8314 15.8241 16.8603 15.802 16.8784C15.7197 16.9457 15.6302 16.964 15.5281 16.9342C15.5007 16.9263 15.4625 16.9067 15.3862 16.8676C15.0239 16.6821 14.5181 16.5 13.875 16.5C12.4943 16.5 11.375 17.6193 11.375 19C11.375 20.0758 12.0537 20.9918 13.0068 21.3448L13.0068 21.3448C13.1028 21.3804 13.1508 21.3982 13.1857 21.4243C13.2205 21.4504 13.2428 21.4804 13.2875 21.5404L13.2875 21.5404C13.3961 21.6865 13.5205 21.8813 13.6389 22.118C13.6878 22.2158 13.7122 22.2647 13.7165 22.275C13.8016 22.4825 13.7011 22.6563 13.4788 22.6862C13.4678 22.6876 13.4304 22.6899 13.3557 22.6943C12.6886 22.7337 12.007 22.752 11.3279 22.7498C9.70017 22.7446 8.06616 22.6213 6.66133 22.38C5.2866 22.1439 4.02766 21.7783 3.23279 21.2265C2.39118 20.6422 1.74436 19.8277 1.379 18.8829C1.05359 18.0413 1.07165 17.1319 1.26024 16.0691C1.44592 15.0227 1.81799 13.7256 2.29194 12.0732L2.30418 12.0305C2.85657 10.1046 3.56216 8.71854 4.76681 7.85346ZM10.375 10C9.82271 10 9.375 10.4477 9.375 11C9.375 11.5523 9.82271 12 10.375 12H12.375C12.9273 12 13.375 11.5523 13.375 11C13.375 10.4477 12.9273 10 12.375 10H10.375Z',
  d8: 'M22.8176 14.6664C23.002 15.187 22.7294 15.7585 22.2088 15.9429C21.6752 16.1319 21.0587 16.5388 20.4057 17.1115C19.763 17.6751 19.1378 18.3521 18.5841 19.0159C18.0322 19.6774 17.5635 20.3111 17.2324 20.7801C17.0672 21.0141 16.7191 21.5365 16.7191 21.5365C16.5258 21.8406 16.1837 22.0174 15.8239 21.999C15.4639 21.9805 15.1418 21.7698 14.9806 21.4475C14.5399 20.5661 13.9854 20.0149 13.7814 19.9959C13.273 19.9487 12.875 19.521 12.875 19.0003C12.875 18.448 13.3227 18.0003 13.875 18.0003C14.4273 18.0003 14.7803 18.2353 15.0547 18.4182C15.329 18.6011 15.6166 18.8538 15.9054 19.1997C16.2206 18.7689 16.609 18.2613 17.0483 17.7347C17.6416 17.0235 18.34 16.2629 19.087 15.6078C19.8236 14.9618 20.663 14.3686 21.5412 14.0576C22.0618 13.8733 22.6332 14.1458 22.8176 14.6664Z',
  d9: 'M9.49342 6.75C7.51333 6.75 5.96283 6.99457 4.76681 7.85346C3.56216 8.71854 2.85657 10.1046 2.30418 12.0305L2.29194 12.0732C1.81799 13.7256 1.44592 15.0227 1.26024 16.0691C1.07165 17.1319 1.05359 18.0413 1.379 18.8829C1.74436 19.8277 2.39118 20.6422 3.23279 21.2265C4.02766 21.7783 5.2866 22.1439 6.66133 22.38C8.06616 22.6213 9.70017 22.7446 11.3279 22.7498C12.007 22.752 12.6886 22.7337 13.3557 22.6943C13.4304 22.6899 13.4678 22.6876 13.4788 22.6862C13.7011 22.6563 13.8016 22.4825 13.7165 22.275C13.7122 22.2647 13.6878 22.2158 13.6389 22.118C13.5205 21.8813 13.3961 21.6865 13.2875 21.5404C13.2428 21.4804 13.2205 21.4504 13.1857 21.4243C13.1508 21.3982 13.1028 21.3804 13.0068 21.3448C12.0537 20.9918 11.375 20.0758 11.375 19C11.375 17.6193 12.4943 16.5 13.875 16.5C14.5181 16.5 15.0239 16.6821 15.3862 16.8676C15.4625 16.9067 15.5007 16.9263 15.5281 16.9342C15.6302 16.964 15.7197 16.9457 15.802 16.8784C15.8241 16.8603 15.8482 16.8314 15.8965 16.7735C16.5194 16.0268 17.2727 15.2035 18.0979 14.4798C18.6904 13.9602 19.3966 13.4233 20.185 13.0163C20.4185 12.8958 20.5352 12.8355 20.5777 12.737C20.6202 12.6386 20.5861 12.5197 20.5179 12.2819C20.4982 12.213 20.4782 12.1434 20.4581 12.0731L20.4458 12.0305C19.9175 10.1886 19.2558 8.80389 18.0714 7.91803C16.8899 7.03438 15.326 6.75 13.2566 6.75H9.49342Z',
  d10: 'M9.375 11C9.375 10.4477 9.82272 10 10.375 10H12.375C12.9273 10 13.375 10.4477 13.375 11C13.375 11.5523 12.9273 12 12.375 12H10.375C9.82272 12 9.375 11.5523 9.375 11Z',
  d11: 'M7.875 6.61364C7.875 4.78473 9.41277 3.25 11.375 3.25C13.3372 3.25 14.875 4.78473 14.875 6.61364V6.82342C15.6197 6.89945 16.2834 7.03945 16.875 7.26584V6.61364C16.875 3.6226 14.3833 1.25 11.375 1.25C8.36666 1.25 5.875 3.6226 5.875 6.61364V7.26121C6.47181 7.03189 7.13655 6.89461 7.875 6.82095V6.61364Z',
  d12: 'M7 7.5V6.36364C7 3.95367 9.01472 2 11.5 2C13.9853 2 16 3.95367 16 6.36364V7.5',
  d13: 'M20.0682 13C19.9986 12.7557 19.9257 12.5017 19.8499 12.2373L18.5 7.5H4.5L3.1501 12.2373C2.18147 15.6144 1.69716 17.3029 2.20352 18.6124C2.51361 19.4143 3.06418 20.1097 3.78549 20.6104C5.16421 21.5676 8.63281 22.042 12 21.9971',
  d14: 'M9.5 11H13.5',
  d15: 'M14 19L16 21L22 15',
  d16: 'M11.5 3.25C9.53777 3.25 8 4.78473 8 6.61364V7.75H6V6.61364C6 3.6226 8.49166 1.25 11.5 1.25C14.5083 1.25 17 3.6226 17 6.61364V7.75H15V6.61364C15 4.78473 13.4622 3.25 11.5 3.25Z',
  d17: 'M22.7502 16.0431L16.043 22.7502L13.3359 20.0431L14.7502 18.6289L16.043 19.9218L21.3359 14.6289L22.7502 16.0431Z',
  d18: 'M20.5712 12.0318L20.5831 12.0731C20.6751 12.394 20.7633 12.7015 20.8471 12.9964L16.0433 17.8002L14.7504 16.5073L11.2148 20.0429L13.8427 22.6707C13.0614 22.7264 12.2554 22.7524 11.4529 22.7498C9.82517 22.7446 8.19116 22.6213 6.78633 22.38C5.4116 22.1439 4.15266 21.7783 3.35779 21.2265C2.51618 20.6422 1.86936 19.8277 1.504 18.8829C1.17859 18.0413 1.19665 17.1319 1.38524 16.0691C1.57092 15.0227 1.94299 13.7256 2.41694 12.0732L3.93387 6.75H19.0662L20.5712 12.0318ZM13.5 12H9.5V10H13.5V12Z',
} as const;

export const IconShoppingBagCheckStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-check-stroke-rounded IconShoppingBagCheckStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagCheckDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-check-duotone-rounded IconShoppingBagCheckDuotoneRounded"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagCheckTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-check-twotone-rounded IconShoppingBagCheckTwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagCheckSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-check-solid-rounded IconShoppingBagCheckSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagCheckBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-check-bulk-rounded IconShoppingBagCheckBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagCheckStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-check-stroke-sharp IconShoppingBagCheckStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagCheckSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-check-solid-sharp IconShoppingBagCheckSolidSharp"
    >
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

export const iconPackOfShoppingBagCheck: TheIconSelfPack = {
  name: 'ShoppingBagCheck',
  StrokeRounded: IconShoppingBagCheckStrokeRounded,
  DuotoneRounded: IconShoppingBagCheckDuotoneRounded,
  TwotoneRounded: IconShoppingBagCheckTwotoneRounded,
  SolidRounded: IconShoppingBagCheckSolidRounded,
  BulkRounded: IconShoppingBagCheckBulkRounded,
  StrokeSharp: IconShoppingBagCheckStrokeSharp,
  SolidSharp: IconShoppingBagCheckSolidSharp,
};