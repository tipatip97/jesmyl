import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 6C11.5 5.17157 10.8284 4.5 10 4.5C9.17157 4.5 8.5 5.17157 8.5 6V13.9623L6.8797 12.3369C6.16877 11.6237 4.99772 11.6888 4.36965 12.4763C3.88907 13.0789 3.8758 13.9314 4.33738 14.5487L7.34137 18.5667C8.02311 19.4785 8.36398 19.9344 8.77419 20.2888C9.40001 20.8294 10.1499 21.2056 10.9566 21.3834C11.4853 21.5 12.0534 21.5 13.1896 21.5C15.3562 21.5 16.4395 21.5 17.3019 21.1679C18.6207 20.6601 19.6627 19.6148 20.1689 18.2918C20.5 17.4267 20.5 16.34 20.5 14.1667V11.5C20.5 10.3954 19.6046 9.5 18.5 9.5C17.9477 9.5 17.5 9.94772 17.5 10.5M11.5 6V4C11.5 3.17157 12.1716 2.5 13 2.5C13.8284 2.5 14.5 3.17157 14.5 4V9M11.5 6V10.5M14.5 9V10.5M14.5 9L15.0777 8.71115C15.3554 8.57229 15.666 8.48266 15.9679 8.55504C16.8468 8.76572 17.5 9.55657 17.5 10.5M17.5 10.5V11.5',
  d2: 'M7.34137 18.5667L4.33738 14.5487C3.8758 13.9314 3.88907 13.0789 4.36965 12.4763C4.99772 11.6888 6.16877 11.6237 6.8797 12.3369L8.5 13.9623V6C8.5 5.17157 9.17157 4.5 10 4.5C10.8284 4.5 11.5 5.17157 11.5 6V4C11.5 3.17157 12.1716 2.5 13 2.5C13.8284 2.5 14.5 3.17157 14.5 4V9L15.0777 8.71115C15.3554 8.57229 15.666 8.48266 15.9679 8.55504C16.8468 8.76572 17.5 9.55657 17.5 10.5C17.5 9.94772 17.9477 9.5 18.5 9.5C19.6046 9.5 20.5 10.3954 20.5 11.5V14.1667C20.5 16.34 20.5 17.4267 20.1689 18.2918C19.6627 19.6148 18.6207 20.6601 17.3019 21.1679C16.4395 21.5 15.3562 21.5 13.1896 21.5C12.0534 21.5 11.4853 21.5 10.9566 21.3834C10.1499 21.2056 9.40001 20.8294 8.77419 20.2888C8.36398 19.9344 8.02311 19.4785 7.34137 18.5667Z',
  d3: 'M11.5 6C11.5 5.17157 10.8284 4.5 10 4.5C9.17157 4.5 8.5 5.17157 8.5 6V13.9623L6.8797 12.3369C6.16877 11.6237 4.99772 11.6888 4.36965 12.4763C3.88907 13.0789 3.8758 13.9314 4.33738 14.5487L7.34137 18.5667C8.02311 19.4785 8.36398 19.9344 8.77419 20.2888C9.40001 20.8294 10.1499 21.2056 10.9566 21.3834C11.4853 21.5 12.0534 21.5 13.1896 21.5C15.1115 21.5 16.181 21.5 17 21.2682M11.5 6V4C11.5 3.17157 12.1716 2.5 13 2.5C13.8284 2.5 14.5 3.17157 14.5 4V9V10.5M11.5 6V10.5',
  d4: 'M11.1425 10.7364C11.3792 10.7364 11.5711 10.5478 11.5711 10.3152V3.03592C11.5711 2.32573 12.1468 1.75 12.857 1.75C13.5672 1.75 14.143 2.32577 14.1429 3.03599L14.1425 10.3152C14.1425 10.5478 14.3344 10.7364 14.5711 10.7364C14.8078 10.7364 14.9997 10.5478 14.9997 10.3152V8.30873C14.9997 8.07684 14.9997 7.96089 15.0852 7.87343C15.1708 7.78598 15.2662 7.7839 15.4569 7.77976C15.597 7.77671 15.7429 7.79001 15.8924 7.82584C16.4891 7.96888 17.0688 8.28006 17.4548 8.73622C17.5079 8.799 17.5345 8.83039 17.5528 8.88036C17.5711 8.93033 17.5711 8.97911 17.5711 9.07666V11.4385C17.5711 11.6711 17.763 11.8597 17.9997 11.8597C18.2363 11.8597 18.4282 11.6711 18.4282 11.4385V9.39553C18.4282 9.08673 18.4282 8.93233 18.5498 8.84239C18.6715 8.75245 18.7997 8.79174 19.0562 8.87032C20.1814 9.21501 20.9996 10.262 20.9996 11.5001V14.1926C20.9996 15.2573 20.9996 16.0922 20.9567 16.7675C20.9131 17.4544 20.823 18.0271 20.619 18.56C20.037 20.0809 18.8387 21.2835 17.321 21.8679C16.789 22.0728 16.2174 22.1633 15.5323 22.2071C14.8589 22.2501 14.0005 22.2501 12.9393 22.2501C11.8921 22.2502 11.1541 22.2503 10.5447 22.116C9.61634 21.9112 8.75345 21.4784 8.03353 20.8565C7.56103 20.4483 7.17452 19.9312 6.54612 19.0905L3.2999 14.6108C3.23432 14.5246 3.17951 14.4332 3.13544 14.3382C3.05671 14.112 3.01225 13.8768 3.00195 13.6406C3.01878 13.3407 3.1279 13.0452 3.32861 12.7978C3.88691 12.1097 4.92698 12.0531 5.55864 12.6759L7.41042 14.5017C7.53288 14.6224 7.71732 14.6587 7.87764 14.5936C8.03795 14.5285 8.14251 14.3748 8.14251 14.2043V5.03584C8.14251 4.32576 8.71814 3.75013 9.42822 3.75013C10.1383 3.75013 10.7139 4.32576 10.7139 5.03584V10.3152C10.7139 10.5478 10.9058 10.7364 11.1425 10.7364Z',
  d5: 'M11.2273 5.57895C11.2273 4.70692 10.5353 4 9.68182 4C8.82829 4 8.13636 4.70692 8.13636 5.57895V14.0655L6.46696 12.3546C5.73449 11.6039 4.52795 11.6724 3.88085 12.5014C3.38571 13.1357 3.37204 14.033 3.8476 14.6829L8.13636 22H17.5C19.1569 22 20.5 20.6569 20.5 19V12.5C20.5 11.6716 19.8284 11 19 11H17.3237M11.2273 5.57895V9V11.4211M11.2273 5.57895V3.54545C11.2273 2.69192 11.9192 2 12.7727 2C13.6263 2 14.3182 2.69192 14.3182 3.54545V10M14.3182 12.4211V10M17.4091 12.9737V11.5C17.4091 11.3247 17.379 11.1564 17.3237 11M17.3237 11C17.1178 10.4174 16.5622 10 15.9091 10H14.3182',
  d6: 'M12.877 1.25C12.1277 1.25 11.5202 1.84623 11.5202 2.58172V11.3551H10.7257V4.84701C10.7257 4.08299 10.1103 3.47798 9.36893 3.47798C8.62758 3.47798 8.01213 4.08299 8.01213 4.84701V15.2589L5.43585 12.6673C4.77342 12.001 3.6853 12.0602 3.09815 12.7985C2.64562 13.3675 2.63291 14.1751 3.06785 14.7585L3.07978 14.7745L7.8425 22.75H18.2423C19.9034 22.75 21.25 21.4283 21.25 19.7979V12.557C21.25 11.8495 20.6656 11.2759 19.9448 11.2759H18.5364V13.0847H17.7419V11.443C17.7419 11.2926 17.7157 11.149 17.6677 11.0159C17.4884 10.5178 17.0044 10.1619 16.4367 10.1619H15.0283V12.4691H14.2338V2.58172C14.2338 1.84623 13.6264 1.25 12.877 1.25Z',
} as const;

export const IconTwoFinger03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-03-stroke-rounded IconTwoFinger03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-03-duotone-rounded IconTwoFinger03DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-03-twotone-rounded IconTwoFinger03TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-03-solid-rounded IconTwoFinger03SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-03-bulk-rounded IconTwoFinger03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-03-stroke-sharp IconTwoFinger03StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-03-solid-sharp IconTwoFinger03SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTwoFinger03: TheIconSelfPack = {
  name: 'TwoFinger03',
  StrokeRounded: IconTwoFinger03StrokeRounded,
  DuotoneRounded: IconTwoFinger03DuotoneRounded,
  TwotoneRounded: IconTwoFinger03TwotoneRounded,
  SolidRounded: IconTwoFinger03SolidRounded,
  BulkRounded: IconTwoFinger03BulkRounded,
  StrokeSharp: IconTwoFinger03StrokeSharp,
  SolidSharp: IconTwoFinger03SolidSharp,
};