import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z',
  d2: 'M2.00023 12.0672C1.95947 10.6863 7.34458 7.43916 7.8518 8.08367C8.42696 8.81452 7.05181 10.9863 6.74208 11.6779C6.55582 12.0938 6.56093 12.2741 6.77271 12.6896C7.73186 14.571 8.20766 15.5084 7.91196 15.9136C7.44063 16.5595 2.04001 13.4149 2.00023 12.0672Z',
  d3: 'M21.9989 12.0672C22.0396 10.6863 16.6545 7.43916 16.1473 8.08367C15.5721 8.81452 16.9473 10.9863 17.257 11.6779C17.4433 12.0938 17.4382 12.2741 17.2264 12.6896C16.2672 14.571 15.7915 15.5084 16.0871 15.9136C16.5585 16.5595 21.9591 13.4149 21.9989 12.0672Z',
  d4: 'M12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25Z',
  d5: 'M16.1739 16.7326C15.9978 16.7031 15.7457 16.6176 15.5588 16.3802C15.2133 15.9411 15.2331 15.3954 15.2956 15.0203C15.3632 14.6148 15.5184 14.1883 15.6825 13.8077C15.8494 13.4202 16.4757 12.1536 16.641 11.8379C16.1747 10.9234 15.7052 9.9761 15.4879 9.41617C15.3783 9.13384 15.2886 8.84676 15.2604 8.57361C15.2316 8.29517 15.2593 7.94978 15.4822 7.64427C15.6638 7.39536 15.9188 7.3035 16.0951 7.27086C16.2704 7.2384 16.4412 7.24892 16.579 7.26807C16.8576 7.30678 17.1709 7.40625 17.4791 7.52724C18.1066 7.77361 18.8683 8.17178 19.6 8.624C20.3321 9.07644 21.0669 9.60312 21.6313 10.1186C21.9125 10.3754 22.17 10.6461 22.3643 10.9186C22.5456 11.1729 22.7379 11.5187 22.7494 11.9106C22.7613 12.3126 22.5824 12.6727 22.4077 12.9387C22.2215 13.222 21.97 13.5029 21.6944 13.7685C21.141 14.3017 20.4131 14.8464 19.6853 15.3148C18.9576 15.7831 18.1965 16.1964 17.5661 16.4542C17.2562 16.5809 16.9412 16.6855 16.6599 16.7283C16.5204 16.7495 16.3495 16.7621 16.1739 16.7326Z',
  d6: 'M7.82608 16.7326C8.00223 16.7031 8.25431 16.6176 8.44118 16.3802C8.78669 15.9411 8.76693 15.3954 8.7044 15.0203C8.63679 14.6148 8.4816 14.1883 8.31754 13.8077C8.15056 13.4202 7.5243 12.1536 7.35903 11.8379C7.82526 10.9234 8.29479 9.9761 8.5121 9.41617C8.62167 9.13384 8.71138 8.84676 8.73961 8.57361C8.76839 8.29517 8.74075 7.94978 8.51781 7.64427C8.33618 7.39536 8.08118 7.3035 7.90489 7.27086C7.72958 7.2384 7.55881 7.24891 7.42101 7.26807C7.14243 7.30678 6.82912 7.40625 6.52093 7.52724C5.89339 7.77361 5.13171 8.17178 4.39998 8.624C3.66787 9.07644 2.93311 9.60312 2.36867 10.1186C2.0875 10.3754 1.83003 10.6461 1.63572 10.9186C1.4544 11.1729 1.26213 11.5187 1.25056 11.9106C1.2387 12.3126 1.41757 12.6727 1.59235 12.9387C1.77852 13.222 2.03002 13.5029 2.30564 13.7685C2.85899 14.3017 3.58686 14.8464 4.31468 15.3148C5.04244 15.7831 5.80347 16.1964 6.43389 16.4542C6.74376 16.5809 7.05883 16.6855 7.34015 16.7283C7.47958 16.7495 7.65047 16.7621 7.82608 16.7326Z',
  d7: 'M11.998 9.25C13.5168 9.25 14.748 10.4812 14.748 12C14.748 13.5188 13.5168 14.75 11.998 14.75C10.4793 14.75 9.24805 13.5188 9.24805 12C9.24805 10.4812 10.4793 9.25 11.998 9.25Z',
  d8: 'M16.172 16.7326C15.9958 16.7031 15.7437 16.6176 15.5569 16.3802C15.2114 15.9411 15.2311 15.3954 15.2936 15.0203C15.3613 14.6148 15.5164 14.1883 15.6805 13.8077C15.8475 13.4202 16.4738 12.1536 16.639 11.8379C16.1728 10.9234 15.7033 9.9761 15.486 9.41617C15.3764 9.13384 15.2867 8.84676 15.2584 8.57361C15.2297 8.29517 15.2573 7.94978 15.4802 7.64427C15.6619 7.39536 15.9169 7.3035 16.0932 7.27086C16.2685 7.2384 16.4392 7.24892 16.577 7.26807C16.8556 7.30678 17.1689 7.40625 17.4771 7.52724C18.1047 7.77361 18.8663 8.17178 19.5981 8.624C20.3302 9.07644 21.0649 9.60312 21.6294 10.1186C21.9105 10.3754 22.168 10.6461 22.3623 10.9186C22.5436 11.1729 22.7359 11.5187 22.7475 11.9106C22.7594 12.3126 22.5805 12.6727 22.4057 12.9387C22.2195 13.222 21.968 13.5029 21.6924 13.7685C21.1391 14.3017 20.4112 14.8464 19.6834 15.3148C18.9556 15.7831 18.1946 16.1964 17.5642 16.4542C17.2543 16.5809 16.9392 16.6855 16.6579 16.7283C16.5185 16.7495 16.3476 16.7621 16.172 16.7326Z',
  d9: 'M14.0031 11.9959C14.0031 13.0993 13.1081 13.9937 12.004 13.9937C10.8999 13.9937 10.0049 13.0993 10.0049 11.9959C10.0049 10.8925 10.8999 9.99805 12.004 9.99805C13.1081 9.99805 14.0031 10.8925 14.0031 11.9959Z',
  d10: 'M17.541 11.9926L16.0114 8.00382C16.008 7.99276 16.0189 7.98311 16.0278 7.98919L21.9986 11.9473C22.0058 11.9522 22.0057 11.964 21.9984 11.9687L16.035 15.9846C16.026 15.9904 16.0154 15.9807 16.0187 15.9698L17.541 11.9926Z',
  d11: 'M6.51441 11.9801L7.99743 8.00382C8.00076 7.99276 7.98989 7.98311 7.98096 7.98919L2.01021 11.9473C2.00297 11.9522 2.00307 11.964 2.01039 11.9687L7.97381 15.9846C7.98275 15.9904 7.9934 15.9807 7.99009 15.9698L6.51441 11.9801Z',
  d12: 'M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12Z',
  d13: 'M15.5321 7.41387C15.7859 7.21129 16.1412 7.19501 16.4124 7.37353L22.4124 11.3228C22.6219 11.4607 22.7486 11.6941 22.75 11.9449C22.7515 12.1956 22.6275 12.4305 22.4197 12.5709L16.4197 16.6216C16.1492 16.8042 15.7918 16.791 15.5356 16.5889C15.2794 16.3868 15.1832 16.0422 15.2978 15.7367L16.699 12L15.2978 8.26334C15.1838 7.95932 15.2784 7.61645 15.5321 7.41387Z',
  d14: 'M8.46792 7.41387C8.72168 7.61645 8.81626 7.95932 8.70225 8.26334L7.301 12L8.70225 15.7367C8.81683 16.0422 8.72069 16.3868 8.46448 16.5889C8.20828 16.791 7.8508 16.8042 7.58034 16.6216L1.58034 12.5709C1.3725 12.4305 1.24854 12.1956 1.25001 11.9449C1.25148 11.6941 1.37818 11.4607 1.58765 11.3228L7.58765 7.37353C7.85887 7.19501 8.21417 7.21129 8.46792 7.41387Z',
};

export const IconScrollHorizontalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-horizontal-stroke-rounded IconScrollHorizontalStrokeRounded"
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

export const IconScrollHorizontalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-horizontal-duotone-rounded IconScrollHorizontalDuotoneRounded"
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

export const IconScrollHorizontalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-horizontal-twotone-rounded IconScrollHorizontalTwotoneRounded"
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

export const IconScrollHorizontalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-horizontal-solid-rounded IconScrollHorizontalSolidRounded"
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

export const IconScrollHorizontalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-horizontal-bulk-rounded IconScrollHorizontalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconScrollHorizontalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-horizontal-stroke-sharp IconScrollHorizontalStrokeSharp"
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

export const IconScrollHorizontalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scroll-horizontal-solid-sharp IconScrollHorizontalSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfScrollHorizontal: TheIconSelfPack = {
  name: 'ScrollHorizontal',
  StrokeRounded: IconScrollHorizontalStrokeRounded,
  DuotoneRounded: IconScrollHorizontalDuotoneRounded,
  TwotoneRounded: IconScrollHorizontalTwotoneRounded,
  SolidRounded: IconScrollHorizontalSolidRounded,
  BulkRounded: IconScrollHorizontalBulkRounded,
  StrokeSharp: IconScrollHorizontalStrokeSharp,
  SolidSharp: IconScrollHorizontalSolidSharp,
};