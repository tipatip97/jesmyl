import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.00098 4.0127L17.9985 4.01272',
  d2: 'M11.9957 12.5105L12.3663 12.5081C15.3383 12.5289 16.3698 12.3871 15.8822 11.1398L15.6982 10.833L15.5237 10.5855L15.1071 10.0531L14.2309 9.05859L13.3602 8.04151L12.9037 7.54456L12.6756 7.32342L12.2948 7.06379L11.9581 7.01221L11.6243 7.06825L11.2469 7.33292L11.0218 7.55707L10.5719 8.06005L9.71483 9.08861L8.85198 10.0947L8.44248 10.6326L8.27132 10.8824L8.09141 11.1916C7.62041 12.4453 8.65374 12.5733 11.6252 12.513L11.9957 12.5105ZM11.9957 12.5105L12.0456 20.013',
  d3: 'M13.6026 8.2963L14.3639 9.1822C15.5974 10.6175 16.2141 11.3352 15.9328 11.9176C15.6515 12.5 14.6881 12.5 12.7613 12.5H11.2387C9.31191 12.5 8.34853 12.5 8.06721 11.9176C7.7859 11.3352 8.40264 10.6175 9.63612 9.1822L10.3974 8.29631C11.1401 7.4321 11.5115 7 12 7C12.4885 7 12.8599 7.4321 13.6026 8.2963Z',
  d4: 'M6.00098 4H17.9985',
  d5: 'M11.9957 12.4841L12.3663 12.4821C15.3382 12.5021 16.3698 12.3611 15.8821 11.1151L15.6981 10.8091L15.5237 10.5621L15.1071 10.0302L14.2309 9.03815L13.3602 8.02209L12.9037 7.52612L12.6756 7.30511L12.2947 7.04614L11.958 6.99414L11.6243 7.05011L11.2469 7.31512L11.0218 7.53815L10.5719 8.04114L9.71484 9.06714L8.85194 10.0721L8.44244 10.6091L8.27134 10.8581L8.09141 11.1671C7.62041 12.4191 8.65374 12.5471 11.6251 12.4861L11.9957 12.4841ZM11.9957 12.4841L12.0456 19.9751',
  d6: 'M18 4.75C18.4142 4.75 18.75 4.41421 18.75 4C18.75 3.58579 18.4142 3.25 18 3.25L18 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM18 3.25L6 3.25L6 4.75L18 4.75L18 3.25Z',
  d7: 'M14.3639 9.1822L14.9327 8.69337L14.9327 8.69337L14.3639 9.1822ZM13.6026 8.2963L13.0337 8.78513L13.0337 8.78513L13.6026 8.2963ZM10.3974 8.29631L9.82864 7.80748V7.80748L10.3974 8.29631ZM9.63612 9.1822L9.06731 8.69338L9.63612 9.1822ZM11.2387 12.5V13.25V12.5ZM12.7613 12.5V11.75V12.5ZM8.06721 11.9176L8.74256 11.5914L8.74256 11.5914L8.06721 11.9176ZM15.9328 11.9176L15.2574 11.5914V11.5914L15.9328 11.9176ZM12.75 12.5C12.75 12.0858 12.4142 11.75 12 11.75C11.5858 11.75 11.25 12.0858 11.25 12.5H12.75ZM11.25 20C11.25 20.4142 11.5858 20.75 12 20.75C12.4142 20.75 12.75 20.4142 12.75 20H11.25ZM14.9327 8.69337L14.1714 7.80748L13.0337 8.78513L13.7951 9.67103L14.9327 8.69337ZM9.82864 7.80748L9.06731 8.69338L10.2049 9.67103L10.9663 8.78513L9.82864 7.80748ZM9.06731 8.69338C8.46742 9.39142 7.95966 9.97923 7.6499 10.4686C7.3482 10.9453 7.07131 11.5801 7.39187 12.2438L8.74256 11.5914C8.7818 11.6726 8.67263 11.6575 8.91734 11.2709C9.15399 10.897 9.57134 10.4083 10.2049 9.67103L9.06731 8.69338ZM11.2387 11.75C10.2506 11.75 9.59237 11.7482 9.14051 11.6845C8.66977 11.6182 8.70856 11.521 8.74256 11.5914L7.39187 12.2438C7.70719 12.8966 8.36832 13.0906 8.93129 13.1699C9.51315 13.2518 10.3 13.25 11.2387 13.25V11.75ZM14.1714 7.80748C13.815 7.39277 13.4964 7.01935 13.2 6.75982C12.8868 6.48551 12.5016 6.25 12 6.25V7.75C12.0039 7.75 12.0105 7.7492 12.0335 7.76C12.0639 7.77427 12.1204 7.80818 12.2119 7.88833C12.409 8.0609 12.6474 8.33564 13.0337 8.78513L14.1714 7.80748ZM10.9663 8.78513C11.3526 8.33564 11.591 8.0609 11.7881 7.88833C11.8796 7.80818 11.9361 7.77427 11.9665 7.76C11.9895 7.7492 11.9961 7.75 12 7.75V6.25C11.4984 6.25 11.1132 6.48551 10.8 6.75982C10.5036 7.01935 10.185 7.39277 9.82864 7.80748L10.9663 8.78513ZM13.7951 9.67103C14.4287 10.4083 14.846 10.897 15.0827 11.2709C15.3274 11.6575 15.2182 11.6726 15.2574 11.5914L16.6081 12.2438C16.9287 11.5801 16.6518 10.9453 16.3501 10.4686C16.0403 9.97923 15.5326 9.39142 14.9327 8.69337L13.7951 9.67103ZM12.7613 13.25C13.7 13.25 14.4868 13.2518 15.0687 13.1699C15.6317 13.0906 16.2928 12.8966 16.6081 12.2438L15.2574 11.5914C15.2914 11.521 15.3302 11.6182 14.8595 11.6845C14.4076 11.7482 13.7494 11.75 12.7613 11.75V13.25ZM11.2387 13.25H12.7613V11.75H11.2387V13.25ZM11.25 12.5L11.25 20H12.75L12.75 12.5H11.25Z',
  d8: 'M19 4C19 4.55228 18.5523 5 18 5L6 5C5.44771 5 5 4.55228 5 4C5 3.44771 5.44771 3 6 3L18 3C18.5523 3 19 3.44772 19 4Z',
  d9: 'M12.9996 20.0001C12.9996 20.5524 12.5519 21.0001 11.9996 21.0001C11.4473 21.0001 10.9996 20.5524 10.9996 20.0001L10.9996 13L9.91273 13C9.53339 13.0002 9.14007 13.0003 8.82834 12.9523C8.49501 12.901 7.91555 12.7447 7.62998 12.136C7.34739 11.5337 7.58804 10.995 7.76331 10.7026C7.92373 10.4349 8.1724 10.1375 8.40962 9.85386L8.44893 9.80684C8.92783 9.2337 9.50141 8.58598 10.0471 8.07369C10.3183 7.81903 10.6065 7.57512 10.8907 7.38867C11.1365 7.22743 11.5379 7 12 7C12.4621 7 12.8634 7.22743 13.1092 7.38867C13.3934 7.57511 13.6816 7.81902 13.9529 8.07367C14.4985 8.58596 15.0721 9.23367 15.551 9.8068L15.5904 9.85382C15.8276 10.1375 16.0762 10.4348 16.2367 10.7025C16.412 10.995 16.6526 11.5337 16.37 12.136C16.0845 12.7447 15.505 12.901 15.1717 12.9523C14.8599 13.0003 14.4666 13.0001 14.0873 13L12.9996 13L12.9996 20.0001Z',
  d10: 'M6 4H18',
  d11: 'M12 12V20',
  d12: 'M12 7L16 12L8 12L12 7Z',
  d13: 'M18 3.5H6V5.5H18V3.5Z',
  d14: 'M11 13.4506V20.5H13V13.4506L17.5 13.4505L11.9999 7.5L6.5 13.4506L11 13.4506Z',
} as const;

export const IconArrowUp05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-05-stroke-rounded IconArrowUp05StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowUp05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-05-duotone-rounded IconArrowUp05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUp05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-05-twotone-rounded IconArrowUp05TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowUp05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-05-solid-rounded IconArrowUp05SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUp05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-05-bulk-rounded IconArrowUp05BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUp05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-05-stroke-sharp IconArrowUp05StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUp05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-05-solid-sharp IconArrowUp05SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowUp05: TheIconSelfPack = {
  name: 'ArrowUp05',
  StrokeRounded: IconArrowUp05StrokeRounded,
  DuotoneRounded: IconArrowUp05DuotoneRounded,
  TwotoneRounded: IconArrowUp05TwotoneRounded,
  SolidRounded: IconArrowUp05SolidRounded,
  BulkRounded: IconArrowUp05BulkRounded,
  StrokeSharp: IconArrowUp05StrokeSharp,
  SolidSharp: IconArrowUp05SolidSharp,
};