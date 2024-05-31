import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z',
  d2: 'M11.9328 2.00023C13.3137 1.95947 16.5608 7.34458 15.9163 7.8518C15.1855 8.42696 13.0137 7.05181 12.3221 6.74208C11.9062 6.55582 11.7259 6.56093 11.3104 6.77271C9.42898 7.73186 8.49159 8.20766 8.08638 7.91196C7.44046 7.44063 10.5851 2.04001 11.9328 2.00023Z',
  d3: 'M12.0672 21.9998C10.6863 22.0403 7.43916 16.6805 8.08367 16.1756C8.81453 15.6032 10.9863 16.9719 11.6779 17.2801C12.0938 17.4655 12.2741 17.4604 12.6896 17.2497C13.2694 16.9554 15.1991 15.6005 15.9136 16.1157C16.5595 16.5849 13.4149 21.9602 12.0672 21.9998Z',
  d4: 'M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12Z',
  d5: 'M16.7326 7.82608C16.7031 8.00222 16.6176 8.25431 16.3802 8.44118C15.9411 8.78669 15.3954 8.76693 15.0203 8.7044C14.6148 8.63679 14.1883 8.4816 13.8077 8.31754C13.4202 8.15056 12.1536 7.5243 11.8379 7.35903C10.9234 7.82526 9.9761 8.29479 9.41617 8.5121C9.13384 8.62167 8.84676 8.71138 8.57361 8.73961C8.29517 8.76839 7.94978 8.74075 7.64427 8.51781C7.39536 8.33618 7.3035 8.08118 7.27086 7.90489C7.2384 7.72958 7.24891 7.55881 7.26807 7.42101C7.30678 7.14243 7.40625 6.82912 7.52724 6.52093C7.77361 5.89339 8.17178 5.13171 8.624 4.39998C9.07644 3.66787 9.60312 2.93311 10.1186 2.36867C10.3754 2.0875 10.6461 1.83003 10.9186 1.63571C11.1729 1.4544 11.5187 1.26213 11.9106 1.25056C12.3126 1.2387 12.6727 1.41757 12.9387 1.59235C13.222 1.77852 13.5029 2.03002 13.7685 2.30564C14.3017 2.85899 14.8464 3.58686 15.3148 4.31467C15.7831 5.04244 16.1964 5.80347 16.4542 6.43389C16.5809 6.74376 16.6855 7.05883 16.7283 7.34015C16.7495 7.47958 16.7621 7.65047 16.7326 7.82608Z',
  d6: 'M16.7326 16.1739C16.7031 15.9978 16.6176 15.7457 16.3802 15.5588C15.9411 15.2133 15.3954 15.2331 15.0203 15.2956C14.6148 15.3632 14.1883 15.5184 13.8077 15.6825C13.4202 15.8494 12.1536 16.4757 11.8379 16.641C10.9234 16.1747 9.9761 15.7052 9.41617 15.4879C9.13384 15.3783 8.84676 15.2886 8.57361 15.2604C8.29517 15.2316 7.94978 15.2593 7.64427 15.4822C7.39536 15.6638 7.3035 15.9188 7.27086 16.0951C7.2384 16.2704 7.24891 16.4412 7.26807 16.579C7.30678 16.8576 7.40625 17.1709 7.52724 17.4791C7.77361 18.1066 8.17178 18.8683 8.624 19.6C9.07644 20.3321 9.60312 21.0669 10.1186 21.6313C10.3754 21.9125 10.6461 22.17 10.9186 22.3643C11.1729 22.5456 11.5187 22.7379 11.9106 22.7494C12.3126 22.7613 12.6727 22.5824 12.9387 22.4077C13.222 22.2215 13.5029 21.97 13.7685 21.6944C14.3017 21.141 14.8464 20.4131 15.3148 19.6853C15.7831 18.9576 16.1964 18.1965 16.4542 17.5661C16.5809 17.2562 16.6855 16.9412 16.7283 16.6599C16.7495 16.5204 16.7621 16.3495 16.7326 16.1739Z',
  d7: 'M12.0072 6.51343L15.9835 7.99646C15.9945 7.99978 16.0042 7.98891 15.9981 7.97998L11.9647 2.01647C11.9598 2.00923 11.9481 2.00933 11.9433 2.01665L8.00273 7.97283C7.9969 7.98178 8.00656 7.99243 8.01751 7.98911L12.0072 6.51343Z',
  d8: 'M12.0072 17.4905L15.9835 16.0074C15.9945 16.0041 16.0042 16.015 15.9981 16.0239L11.9647 21.9874C11.9598 21.9947 11.9481 21.9946 11.9433 21.9873L8.00273 16.0311C7.9969 16.0221 8.00656 16.0115 8.01751 16.0148L12.0072 17.4905Z',
  d9: 'M11.9449 1.25001C12.1956 1.24854 12.4305 1.3725 12.5709 1.58034L16.6216 7.58034C16.8042 7.8508 16.791 8.20828 16.5889 8.46448C16.3868 8.72069 16.0422 8.81683 15.7367 8.70225L12 7.301L8.26334 8.70225C7.95932 8.81626 7.61645 8.72168 7.41387 8.46792C7.21129 8.21417 7.19501 7.85887 7.37353 7.58765L11.3228 1.58765C11.4607 1.37818 11.6941 1.25148 11.9449 1.25001Z',
  d10: 'M16.5889 15.5356C16.791 15.7918 16.8042 16.1492 16.6216 16.4197L12.5709 22.4197C12.4305 22.6275 12.1956 22.7515 11.9449 22.75C11.6941 22.7486 11.4607 22.6219 11.3228 22.4124L7.37353 16.4124C7.19501 16.1412 7.21129 15.7859 7.41387 15.5321C7.61645 15.2784 7.95932 15.1838 8.26334 15.2978L12 16.699L15.7367 15.2978C16.0422 15.1832 16.3868 15.2794 16.5889 15.5356Z',
} as const;

export const IconScrollVerticalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-vertical-stroke-rounded IconScrollVerticalStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconScrollVerticalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-vertical-duotone-rounded IconScrollVerticalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconScrollVerticalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-vertical-twotone-rounded IconScrollVerticalTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconScrollVerticalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-vertical-solid-rounded IconScrollVerticalSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconScrollVerticalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-vertical-bulk-rounded IconScrollVerticalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconScrollVerticalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-vertical-stroke-sharp IconScrollVerticalStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconScrollVerticalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-vertical-solid-sharp IconScrollVerticalSolidSharp"
    >
      <path 
        d={d.d4} 
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

export const iconPackOfScrollVertical: TheIconSelfPack = {
  name: 'ScrollVertical',
  StrokeRounded: IconScrollVerticalStrokeRounded,
  DuotoneRounded: IconScrollVerticalDuotoneRounded,
  TwotoneRounded: IconScrollVerticalTwotoneRounded,
  SolidRounded: IconScrollVerticalSolidRounded,
  BulkRounded: IconScrollVerticalBulkRounded,
  StrokeSharp: IconScrollVerticalStrokeSharp,
  SolidSharp: IconScrollVerticalSolidSharp,
};