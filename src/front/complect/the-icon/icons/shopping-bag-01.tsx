import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.5 8V6.36364C7.5 3.95367 9.51472 2 12 2C14.4853 2 16.5 3.95367 16.5 6.36364V8',
  d2: 'M13.8816 7.5H10.1184C6.22973 7.5 4.7255 8.48796 3.6501 12.2373C2.68147 15.6144 2.19716 17.3029 2.70352 18.6124C3.01361 19.4143 3.56418 20.1097 4.28549 20.6104C6.8944 22.4216 16.9865 22.5043 19.7145 20.6104C20.4358 20.1097 20.9864 19.4143 21.2965 18.6124C21.8028 17.3029 21.3185 15.6144 20.3499 12.2373C19.3173 8.63723 17.9313 7.5 13.8816 7.5Z',
  d3: 'M11 11H13',
  d4: 'M8.5 6.61364C8.5 4.78473 10.0378 3.25 12 3.25C13.9622 3.25 15.5 4.78473 15.5 6.61364V6.82342C14.9982 6.77219 14.4596 6.75 13.8816 6.75H10.1184C9.54332 6.75 9.00446 6.77063 8.5 6.82095V6.61364ZM6.5 7.26121V6.61364C6.5 3.6226 8.99166 1.25 12 1.25C15.0083 1.25 17.5 3.6226 17.5 6.61364V7.26584C17.937 7.43308 18.3346 7.64746 18.6964 7.91803C19.8808 8.80389 20.5425 10.1886 21.0708 12.0305L21.0831 12.0731C21.557 13.7255 21.9291 15.0227 22.1148 16.0691C22.3034 17.1319 22.3214 18.0413 21.996 18.8829C21.6307 19.8277 20.9838 20.6422 20.1422 21.2265C19.3177 21.7989 18.0369 22.1697 16.644 22.4037C15.2229 22.6425 13.5806 22.7551 11.9529 22.7498C10.3252 22.7446 8.69116 22.6213 7.28633 22.38C5.9116 22.1439 4.65266 21.7783 3.85779 21.2265C3.01618 20.6422 2.36936 19.8277 2.004 18.8829C1.67859 18.0413 1.69665 17.1319 1.88524 16.0691C2.07092 15.0227 2.44298 13.7256 2.91694 12.0732L2.91694 12.0732L2.91694 12.0732L2.92918 12.0305C3.48157 10.1046 4.18716 8.71854 5.39181 7.85346C5.73196 7.60919 6.10078 7.41461 6.5 7.26121ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11C10.4477 12 10 11.5523 10 11Z',
  d5: 'M5.39181 7.85346C6.58783 6.99457 8.13833 6.75 10.1184 6.75H13.8816C15.951 6.75 17.5149 7.03438 18.6964 7.91803C19.8808 8.80389 20.5425 10.1886 21.0708 12.0305L21.0831 12.0731C21.557 13.7255 21.9291 15.0227 22.1148 16.0691C22.3034 17.1319 22.3214 18.0413 21.996 18.8829C21.6307 19.8277 20.9838 20.6422 20.1422 21.2265C19.3177 21.7989 18.0369 22.1697 16.644 22.4037C15.2229 22.6425 13.5806 22.7551 11.9529 22.7498C10.3252 22.7446 8.69116 22.6213 7.28633 22.38C5.9116 22.1439 4.65266 21.7783 3.85779 21.2265C3.01618 20.6422 2.36936 19.8277 2.004 18.8829C1.67859 18.0413 1.69665 17.1319 1.88524 16.0691C2.07092 15.0227 2.44298 13.7256 2.91694 12.0732L2.91694 12.0732L2.92918 12.0305C3.48157 10.1046 4.18716 8.71854 5.39181 7.85346Z',
  d6: 'M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11C10.4477 12 10 11.5523 10 11Z',
  d7: 'M8.5 6.61364C8.5 4.78473 10.0378 3.25 12 3.25C13.9622 3.25 15.5 4.78473 15.5 6.61364V6.82342C16.2447 6.89945 16.9084 7.03945 17.5 7.26584V6.61364C17.5 3.6226 15.0083 1.25 12 1.25C8.99166 1.25 6.5 3.6226 6.5 6.61364V7.26121C7.09681 7.03189 7.76155 6.89461 8.5 6.82095V6.61364Z',
  d8: 'M7.5 7.5V6.36364C7.5 3.95367 9.51472 2 12 2C14.4853 2 16.5 3.95367 16.5 6.36364V7.5',
  d9: 'M2.70352 18.6124C2.19716 17.3029 2.68147 15.6144 3.6501 12.2373L5 7.5H19L20.3499 12.2373C21.3185 15.6144 21.8028 17.3029 21.2965 18.6124C20.9864 19.4143 20.4358 20.1097 19.7145 20.6104C16.9865 22.5043 6.8944 22.4216 4.28549 20.6104C3.56418 20.1097 3.01361 19.4143 2.70352 18.6124Z',
  d10: 'M10 11H14',
  d11: 'M12 3.25C10.0378 3.25 8.5 4.78473 8.5 6.61364V7.75H6.5V6.61364C6.5 3.6226 8.99166 1.25 12 1.25C15.0083 1.25 17.5 3.6226 17.5 6.61364V7.75H15.5V6.61364C15.5 4.78473 13.9622 3.25 12 3.25Z',
  d12: 'M21.0831 12.0731L21.0712 12.0318L19.5662 6.75H4.43387L2.91694 12.0732C2.44299 13.7256 2.07092 15.0227 1.88524 16.0691C1.69665 17.1319 1.67859 18.0413 2.004 18.8829C2.36936 19.8277 3.01618 20.6422 3.85779 21.2265C4.65266 21.7783 5.9116 22.1439 7.28633 22.38C8.69116 22.6213 10.3252 22.7446 11.9529 22.7498C13.5806 22.7551 15.2229 22.6425 16.644 22.4037C18.0369 22.1697 19.3177 21.7989 20.1422 21.2265C20.9838 20.6422 21.6307 19.8277 21.996 18.8829C22.3214 18.0413 22.3034 17.1319 22.1148 16.0691C21.9291 15.0227 21.557 13.7255 21.0831 12.0731ZM10 12H14V10H10V12Z',
} as const;

export const IconShoppingBag01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-01-stroke-rounded IconShoppingBag01StrokeRounded"
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

export const IconShoppingBag01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-01-duotone-rounded IconShoppingBag01DuotoneRounded"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBag01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-01-twotone-rounded IconShoppingBag01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconShoppingBag01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-01-solid-rounded IconShoppingBag01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBag01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-01-bulk-rounded IconShoppingBag01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconShoppingBag01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-01-stroke-sharp IconShoppingBag01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconShoppingBag01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-01-solid-sharp IconShoppingBag01SolidSharp"
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

export const iconPackOfShoppingBag01: TheIconSelfPack = {
  name: 'ShoppingBag01',
  StrokeRounded: IconShoppingBag01StrokeRounded,
  DuotoneRounded: IconShoppingBag01DuotoneRounded,
  TwotoneRounded: IconShoppingBag01TwotoneRounded,
  SolidRounded: IconShoppingBag01SolidRounded,
  BulkRounded: IconShoppingBag01BulkRounded,
  StrokeSharp: IconShoppingBag01StrokeSharp,
  SolidSharp: IconShoppingBag01SolidSharp,
};