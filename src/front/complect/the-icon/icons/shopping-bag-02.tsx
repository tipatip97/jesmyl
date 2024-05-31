import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.06164 15.1933L3.42688 13.1219C3.85856 10.6736 4.0744 9.44952 4.92914 8.72476C5.78389 8 7.01171 8 9.46734 8H14.5327C16.9883 8 18.2161 8 19.0709 8.72476C19.9256 9.44952 20.1414 10.6736 20.5731 13.1219L20.9384 15.1933C21.5357 18.5811 21.8344 20.275 20.9147 21.3875C19.995 22.5 18.2959 22.5 14.8979 22.5H9.1021C5.70406 22.5 4.00504 22.5 3.08533 21.3875C2.16562 20.275 2.4643 18.5811 3.06164 15.1933Z',
  d2: 'M7.5 8L7.66782 5.98618C7.85558 3.73306 9.73907 2 12 2C14.2609 2 16.1444 3.73306 16.3322 5.98618L16.5 8',
  d3: 'M15 11C14.87 12.4131 13.5657 13.5 12 13.5C10.4343 13.5 9.13002 12.4131 9 11',
  d4: 'M12 2.87499C10.3383 2.87499 8.95401 4.12598 8.81602 5.75237L8.65583 7.64031C8.61205 8.15628 8.15067 8.53971 7.62532 8.49671C7.09996 8.45371 6.70957 8.00057 6.75335 7.4846L6.91354 5.59666C7.13399 2.99848 9.34542 1 12 1C14.6546 1 16.866 2.99848 17.0865 5.59666L17.2466 7.4846C17.2904 8.00057 16.9 8.45371 16.3747 8.49671C15.8493 8.53971 15.388 8.15628 15.3442 7.64031L15.184 5.75237C15.046 4.12598 13.6617 2.87499 12 2.87499Z',
  d5: 'M14.5824 7H14.5824H14.5824H9.41757H9.41756H9.41754C8.23202 6.99998 7.27196 6.99997 6.50436 7.09645C5.70461 7.19698 5.02391 7.41108 4.44408 7.90272C3.86527 8.39351 3.53928 9.03179 3.3021 9.80779C3.07386 10.5545 2.90536 11.5103 2.69674 12.6935L2.31266 14.8719C2.02276 16.5158 1.79124 17.8288 1.75503 18.8675C1.7177 19.9384 1.88015 20.8568 2.50727 21.6154C3.13596 22.3759 4.00487 22.7015 5.0573 22.8533C6.07529 23 7.39387 23 9.04111 23H14.9589C16.6061 23 17.9247 23 18.9427 22.8533C19.9951 22.7015 20.864 22.3759 21.4927 21.6154C22.1198 20.8568 22.2823 19.9384 22.2449 18.8675C22.2087 17.8288 21.9772 16.5159 21.6873 14.8719L21.3032 12.6935C21.0946 11.5103 20.9261 10.5545 20.6979 9.80779C20.4607 9.03179 20.1347 8.39351 19.5559 7.90272C18.9761 7.41108 18.2954 7.19698 17.4956 7.09645C16.728 6.99997 15.768 6.99998 14.5824 7ZM14.0041 10.6584C13.9287 11.4784 13.1316 12.25 11.9999 12.25C10.8683 12.25 10.0712 11.4784 9.99573 10.6584C9.94512 10.1084 9.45827 9.7036 8.90831 9.75421C8.35835 9.80481 7.95354 10.2917 8.00414 10.8416C8.18874 12.8478 10.0003 14.25 11.9999 14.25C13.9996 14.25 15.8111 12.8478 15.9957 10.8416C16.0463 10.2917 15.6415 9.80481 15.0916 9.75421C14.5416 9.7036 14.0547 10.1084 14.0041 10.6584Z',
  d6: 'M14.5824 7C15.7679 6.99998 16.728 6.99997 17.4956 7.09645C18.2954 7.19698 18.9761 7.41108 19.5559 7.90272C20.1347 8.39351 20.4607 9.03179 20.6979 9.80779C20.9261 10.5545 21.0946 11.5103 21.3032 12.6935L21.6873 14.8719C21.9772 16.5159 22.2087 17.8288 22.2449 18.8675C22.2823 19.9384 22.1198 20.8568 21.4927 21.6154C20.864 22.3759 19.9951 22.7015 18.9427 22.8533C17.9247 23 16.6061 23 14.9589 23H9.04111C7.39387 23 6.07529 23 5.0573 22.8533C4.00487 22.7015 3.13596 22.3759 2.50727 21.6154C1.88015 20.8568 1.7177 19.9384 1.75503 18.8675C1.79124 17.8288 2.02276 16.5158 2.31266 14.8719L2.69674 12.6935C2.90536 11.5103 3.07386 10.5545 3.3021 9.80779C3.53928 9.03179 3.86527 8.39351 4.44408 7.90272C5.02391 7.41108 5.70461 7.19698 6.50436 7.09645C7.27197 6.99997 8.23203 6.99998 9.41756 7H9.41757H14.5824H14.5824Z',
  d7: 'M11.9999 12.25C13.1316 12.25 13.9287 11.4784 14.0041 10.6584C14.0547 10.1084 14.5416 9.7036 15.0916 9.75421C15.6415 9.80481 16.0463 10.2917 15.9957 10.8416C15.8111 12.8478 13.9996 14.25 11.9999 14.25C10.0003 14.25 8.18874 12.8478 8.00414 10.8416C7.95354 10.2917 8.35835 9.80481 8.90831 9.75421C9.45827 9.7036 9.94512 10.1084 9.99573 10.6584C10.0712 11.4784 10.8683 12.25 11.9999 12.25Z',
  d8: 'M8.81619 5.75237C8.95418 4.12598 10.3385 2.87499 12.0002 2.87499C13.6619 2.87499 15.0462 4.12598 15.1842 5.75237L15.2901 7.00084C16.0262 7.00362 16.6632 7.01544 17.2113 7.06574L17.0866 5.59666C16.8662 2.99848 14.6548 1 12.0002 1C9.34559 1 7.13416 2.99848 6.91371 5.59666L6.78906 7.06574C7.33712 7.01544 7.97416 7.00362 8.71026 7.00084L8.81619 5.75237Z',
  d9: 'M7.5 8V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V8',
  d10: 'M15 11C15 12.5 13.5657 13.5 12 13.5C10.4343 13.5 9 12.5 9 11',
  d11: 'M20.0318 8H4.00672L2.00105 21.8857C1.99233 21.946 2.03916 22 2.10015 22H21.8998C21.9607 22 22.0075 21.9462 21.999 21.8859L20.0318 8Z',
  d12: 'M12 3.25C10.067 3.25 8.5 4.817 8.5 6.75V8.25H6.5V6.75C6.5 3.71243 8.96243 1.25 12 1.25C15.0376 1.25 17.5 3.71243 17.5 6.75V8.25H15.5V6.75C15.5 4.817 13.933 3.25 12 3.25Z',
  d13: 'M22.5666 22.4914C22.709 22.3272 22.7732 22.1092 22.7425 21.8939L20.6505 7.25H3.34953L1.25754 21.8939C1.2268 22.1092 1.29096 22.3272 1.43341 22.4914C1.57587 22.6557 1.78259 22.75 2 22.75H22C22.2174 22.75 22.4241 22.6557 22.5666 22.4914ZM14 11C14 11.7401 13.2469 12.5 12 12.5C10.7531 12.5 10 11.7401 10 11L8 11C8 13.2599 10.1155 14.5 12 14.5C13.8845 14.5 16 13.2599 16 11L14 11Z',
} as const;

export const IconShoppingBag02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-02-stroke-rounded IconShoppingBag02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBag02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-02-duotone-rounded IconShoppingBag02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBag02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-02-twotone-rounded IconShoppingBag02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBag02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-02-solid-rounded IconShoppingBag02SolidRounded"
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

export const IconShoppingBag02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-02-bulk-rounded IconShoppingBag02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconShoppingBag02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-02-stroke-sharp IconShoppingBag02StrokeSharp"
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
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBag02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-02-solid-sharp IconShoppingBag02SolidSharp"
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

export const iconPackOfShoppingBag02: TheIconSelfPack = {
  name: 'ShoppingBag02',
  StrokeRounded: IconShoppingBag02StrokeRounded,
  DuotoneRounded: IconShoppingBag02DuotoneRounded,
  TwotoneRounded: IconShoppingBag02TwotoneRounded,
  SolidRounded: IconShoppingBag02SolidRounded,
  BulkRounded: IconShoppingBag02BulkRounded,
  StrokeSharp: IconShoppingBag02StrokeSharp,
  SolidSharp: IconShoppingBag02SolidSharp,
};