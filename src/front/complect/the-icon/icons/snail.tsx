import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.57687 14C9.57687 16.5 11.5 20 15.5399 20C19.5798 20 21.9999 16.866 21.9999 13C21.9999 8.02944 17.7699 4 12.0615 4C6.41519 4 1.41338 8.25529 2.0558 15.3865C2.08969 15.7628 2.34812 16.0843 2.71438 16.1769C5.41315 16.8591 8.18768 15.8637 9.57687 14ZM9.57687 14C9.57687 8.87223 17.5276 7.79116 17.5276 13C17.5276 14.4689 16.4999 15.7264 15.043 16.2456',
  d2: 'M15.5399 20C19.5798 20 21.9999 16.866 21.9999 13C21.9999 8.02944 17.7699 4 12.0615 4C6.41519 4 1.41338 8.25529 2.0558 15.3865C2.08969 15.7628 2.34812 16.0843 2.71438 16.1769C5.41315 16.8591 8.18768 15.8637 9.57687 14C9.57687 16.5 11.5 20 15.5399 20Z',
  d3: 'M15.043 16.2456C16.4999 15.7264 17.5276 14.4689 17.5276 13C17.5276 7.79116 9.57687 8.87223 9.57687 14C9.57687 16.5 11.5 20 15.5399 20C19.5798 20 21.9999 16.866 21.9999 13C21.9999 8.02944 17.7699 4 12.0615 4C6.41519 4 1.41338 8.25529 2.0558 15.3865',
  d4: 'M8.99051 15.658C7.29355 16.9631 4.87138 17.5099 2.53052 16.9175C1.8357 16.7417 1.36937 16.1393 1.30877 15.4659C0.969703 11.6983 2.12107 8.62935 4.15913 6.50303C6.18849 4.3858 9.05196 3.25 12.0614 3.25C18.1236 3.25 22.7498 7.56156 22.7498 13.0097C22.7498 15.0974 22.0967 17.0337 20.8489 18.4591C19.6947 19.7776 18.0633 20.6208 16.0787 20.75C13.4552 20.75 12.2757 19.8583 11.4275 18.713C10.3743 17.2909 10.3271 15.1475 10.3271 14.0107C10.3271 11.9082 11.9425 10.5982 13.6498 10.3745C14.4962 10.2637 15.2834 10.4367 15.8397 10.8484C16.3721 11.2423 16.7779 11.916 16.7779 13.0097C16.7779 14.1056 16.0071 15.1177 14.7915 15.5513C14.4013 15.6905 14.1978 16.12 14.3368 16.5106C14.4759 16.9011 14.9049 17.1049 15.2951 16.9657C16.9933 16.3599 18.2779 14.8545 18.2779 13.0097C18.2779 11.4965 17.6898 10.3501 16.7314 9.64096C15.797 8.94952 14.5966 8.73623 13.4552 8.88575C11.1872 9.18286 8.82715 10.9804 8.82715 14.0107C8.82715 14.4885 8.87408 15.0522 8.99051 15.658Z',
  d5: 'M10.3281 14.0101C10.3281 11.9076 11.9435 10.5976 13.6508 10.3739C14.4971 10.263 15.2844 10.436 15.8407 10.8477C16.3731 11.2417 16.7789 11.9153 16.7789 13.0091C16.7789 14.1049 16.008 15.1171 14.7925 15.5507C14.4023 15.6899 14.1987 16.1193 14.3378 16.5099C14.4768 16.9005 14.9059 17.1042 15.296 16.965C16.9942 16.3592 18.2789 14.8538 18.2789 13.0091C18.2789 11.4958 17.6908 10.3495 16.7324 9.64031C15.798 8.94887 14.5975 8.73557 13.4562 8.8851C11.1882 9.18221 8.82812 10.9797 8.82812 14.0101C8.82812 14.4878 8.87506 15.0515 8.99149 15.6574L10.3354 14.6159C10.3293 14.3935 10.3281 14.1893 10.3281 14.0101Z',
  d6: 'M9.61035 14C9.61035 16.5 11.5282 20 15.5569 20C19.5857 20 21.999 16.866 21.999 13C21.999 8.02944 17.7807 4 12.0881 4C6.45742 4 1.41348 8.86874 2.05412 16C4.74543 16.6822 8.22501 15.8637 9.61035 14ZM9.61035 14C9.61035 8.87223 17.5391 7.79116 17.5391 13C17.5391 14.4689 16.5142 15.7264 15.0614 16.2456',
  d7: 'M9.05817 15.5511C9.3042 16.5432 9.78172 17.5529 10.4961 18.4158C11.609 19.7602 13.301 20.75 15.5578 20.75C17.7819 20.75 19.6007 19.878 20.8544 18.4433C22.0988 17.0192 22.75 15.0851 22.75 13C22.75 7.55916 18.1375 3.25 12.089 3.25C6.00112 3.25 0.629479 8.51353 1.30806 16.0671L1.35561 16.5964L1.87076 16.727C3.35025 17.102 5.02076 17.0614 6.50849 16.6814C6.91632 16.5772 7.31819 16.4455 7.7038 16.2857C7.47527 15.5131 7.36133 14.7355 7.36133 14.0003C7.36133 10.0452 10.4614 7.76347 13.2829 7.39318C14.7173 7.20493 16.3299 7.4584 17.6411 8.43043C19.0237 9.45532 19.7901 11.0728 19.7901 13.0003C19.7901 14.2357 19.3819 15.336 18.7188 16.2334L17.6411 15.1558C18.0504 14.5307 18.29 13.797 18.29 13.0002C18.29 11.4893 17.704 10.3442 16.7478 9.63539C15.8153 8.94417 14.6172 8.73087 13.4781 8.88037C11.2139 9.1775 8.86128 10.9745 8.86128 14.0002C8.86128 14.4955 8.92667 15.0208 9.05817 15.5511C9.05819 15.5511 9.05816 15.5511 9.05817 15.5511Z',
} as const;

export const IconSnailStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="snail-stroke-rounded IconSnailStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSnailDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="snail-duotone-rounded IconSnailDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSnailTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="snail-twotone-rounded IconSnailTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconSnailSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="snail-solid-rounded IconSnailSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSnailBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="snail-bulk-rounded IconSnailBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconSnailStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="snail-stroke-sharp IconSnailStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSnailSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="snail-solid-sharp IconSnailSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSnail: TheIconSelfPack = {
  name: 'Snail',
  StrokeRounded: IconSnailStrokeRounded,
  DuotoneRounded: IconSnailDuotoneRounded,
  TwotoneRounded: IconSnailTwotoneRounded,
  SolidRounded: IconSnailSolidRounded,
  BulkRounded: IconSnailBulkRounded,
  StrokeSharp: IconSnailStrokeSharp,
  SolidSharp: IconSnailSolidSharp,
};