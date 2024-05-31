import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 10V13.7113C22 16.3939 22 17.7352 21.2244 18.6262C20.5311 19.4225 19.4318 19.6137 17.3727 19.836C17.1241 19.8628 16.9 19.6972 16.7922 19.4716C16.4649 18.7869 15.7853 18.3164 15 18.3164C14.0712 18.3164 13.2902 18.9746 13.0652 19.8668C13.0048 20.1064 12.8209 20.3101 12.5751 20.3357L8.59703 20.7492C5.515 21.0696 3.97397 21.2298 2.98698 20.3013C2 19.3727 2 17.7628 2 14.5429V11.0395',
  d2: 'M6.92976 11.9175L18.469 11.4342C21.2105 11.3194 22.8695 10.5154 21.5235 7.65944C20.5882 5.67494 18.9063 4.08622 16.823 3.22601C15.4742 2.66906 14.4121 3.23705 13.2962 3.89603C12.9147 4.12127 13.0788 4.55791 13.0788 4.91045C13.0788 6.02915 12.1759 6.93603 11.0621 6.93603C10.5717 6.93603 10.1223 6.76028 9.7727 6.46807C8.82025 5.67186 1.67251 10.3221 2.01169 11.3933C2.23981 12.1138 3.80313 12.0484 6.92976 11.9175Z',
  d3: 'M16.0078 8.20947L15.9988 8.20947',
  d4: 'M17.0078 15.2095L16.9988 15.2095',
  d5: 'M7 16.2095C7 17.0379 7.67157 17.7095 8.5 17.7095C9.32843 17.7095 10 17.0379 10 16.2095C10 15.381 9.32843 14.7095 8.5 14.7095C7.67157 14.7095 7 15.381 7 16.2095Z',
  d6: 'M22 13.7097V9.99847L21.9985 9.47656C21.9452 10.8817 20.5058 11.3474 18.469 11.4327L6.92976 11.9159H6.92975C3.80312 12.0468 2.23981 12.1123 2.01169 11.3918L2 14.5414C2 17.7613 2 19.3712 2.98698 20.2997C3.97397 21.2283 5.515 21.0681 8.59703 20.7477L12.5751 20.3341C12.8209 20.3086 13.0048 20.1049 13.0652 19.8653C13.2902 18.9731 14.0712 18.3148 15 18.3148C15.7853 18.3148 16.4649 18.7854 16.7922 19.47C16.9 19.6956 17.1241 19.8613 17.3727 19.8344C19.4318 19.6122 20.5311 19.421 21.2244 18.6247C22 17.7337 22 16.3924 22 13.7097Z',
  d7: 'M16.0078 8.21094L15.9988 8.21094',
  d8: 'M17.0078 15.2109L16.9988 15.2109',
  d9: 'M7 16.2109C7 17.0394 7.67157 17.7109 8.5 17.7109C9.32843 17.7109 10 17.0394 10 16.2109C10 15.3825 9.32843 14.7109 8.5 14.7109C7.67157 14.7109 7 15.3825 7 16.2109Z',
  d10: 'M16.0078 8.20898L15.9988 8.20898',
  d11: 'M17.0078 15.209L16.9988 15.209',
  d12: 'M7 16.209C7 17.0374 7.67157 17.709 8.5 17.709C9.32843 17.709 10 17.0374 10 16.209C10 15.3806 9.32843 14.709 8.5 14.709C7.67157 14.709 7 15.3806 7 16.209Z',
  d13: 'M17.0078 8.21069C17.0078 8.76298 16.5621 9.21069 16.0123 9.21069L16.0033 9.21069C15.4535 9.21069 15.0078 8.76298 15.0078 8.21069C15.0078 7.65841 15.4535 7.21069 16.0033 7.21069L16.0123 7.21069C16.5621 7.21069 17.0078 7.65841 17.0078 8.21069Z',
  d14: 'M22.1897 9.27446C22.5198 9.36075 22.75 9.65892 22.75 10.0001V13.7615C22.75 15.0602 22.75 16.1047 22.6473 16.933C22.541 17.7906 22.3149 18.5158 21.79 19.1187C21.3194 19.6593 20.7258 19.967 20.0149 20.1681C19.3261 20.363 18.4751 20.4714 17.4532 20.5817C16.8031 20.6519 16.3196 20.2221 16.1155 19.7951C15.9028 19.3501 15.474 19.0664 15 19.0664C14.4409 19.0664 13.94 19.4652 13.7925 20.0503C13.6772 20.5075 13.2929 21.0152 12.6527 21.0817L8.61488 21.5015C7.1246 21.6564 5.92437 21.7812 4.97621 21.7431C3.99059 21.7034 3.15088 21.4853 2.47308 20.8476C1.80021 20.2146 1.51402 19.3814 1.38001 18.381C1.24997 17.4101 1.24998 16.1614 1.25 14.5992V14.5992V14.5992V11.0396C1.25 10.7363 1.43273 10.4628 1.71299 10.3467C1.99324 10.2306 2.31583 10.2948 2.53033 10.5093C2.66892 10.6479 3.03397 10.8174 3.81012 10.9149C4.5478 11.0076 5.50428 11.0194 6.65362 10.9886C7.46641 10.9668 8.37837 10.923 9.35778 10.876C11.0865 10.7929 13.0254 10.6998 15 10.6998C17.4308 10.6998 19.0419 10.4619 20.0552 10.183C20.5622 10.0435 20.9047 9.89777 21.1205 9.77654C21.302 9.67463 21.3579 9.6124 21.3579 9.6124C21.5291 9.32873 21.8673 9.19019 22.1897 9.27446ZM18.0078 15.2109C18.0078 15.7632 17.5601 16.2109 17.0078 16.2109H16.9988C16.4465 16.2109 15.9988 15.7632 15.9988 15.2109C15.9988 14.6587 16.4465 14.2109 16.9988 14.2109H17.0078C17.5601 14.2109 18.0078 14.6587 18.0078 15.2109ZM8.5 13.9609C9.74264 13.9609 10.75 14.9683 10.75 16.2109C10.75 17.4536 9.74264 18.4609 8.5 18.4609C7.25736 18.4609 6.25 17.4536 6.25 16.2109C6.25 14.9683 7.25736 13.9609 8.5 13.9609Z',
  d15: 'M14.0146 4.73907C14.0172 4.76527 14.0199 4.79364 14.0223 4.82154C14.0271 4.87931 14.0316 4.95062 14.0316 5.02813C14.0316 6.61921 12.7157 7.91616 11.0834 7.91616C10.4557 7.91616 9.87247 7.72308 9.39441 7.39541C9.21652 7.42771 8.94388 7.51249 8.58246 7.66308C7.86899 7.96036 6.969 8.44628 6.08587 9.00029C5.20316 9.55405 4.3784 10.15 3.8073 10.6526C3.74176 10.7103 3.68125 10.7653 3.62566 10.8174C3.63326 10.818 3.64093 10.8185 3.64869 10.819C4.37158 10.869 5.4491 10.8265 7.00419 10.7629L18.2811 10.3016C18.9149 10.2757 19.4418 10.212 19.8561 10.106C20.277 9.99843 20.5106 9.86507 20.6316 9.75027C20.725 9.66165 20.791 9.55058 20.7953 9.33171C20.8002 9.07736 20.7178 8.66984 20.4231 8.05907C19.6156 6.38557 18.1573 5.03533 16.3405 4.30255C15.5778 3.99496 14.9766 4.20147 14.0146 4.73907ZM12.7699 3.2379C13.8382 2.62174 15.277 1.80822 17.0864 2.538C19.3413 3.44742 21.1706 5.13017 22.1911 7.24521C22.5541 7.99752 22.7623 8.70824 22.7494 9.36795C22.7359 10.0631 22.4758 10.6619 21.9934 11.1196C21.5386 11.5512 20.9467 11.8006 20.3512 11.9529C19.7491 12.1068 19.0687 12.1802 18.3629 12.209L7.0152 12.6732C5.54729 12.7332 4.35778 12.7819 3.51072 12.7233C3.08306 12.6938 2.65164 12.6326 2.28387 12.4855C1.89098 12.3284 1.47786 12.0312 1.30712 11.5044C1.19596 11.1615 1.2689 10.8519 1.34147 10.6584C1.41687 10.4573 1.53003 10.2781 1.63926 10.1304C1.85898 9.83344 2.1662 9.52715 2.49903 9.23426C3.17353 8.6407 4.09111 7.98276 5.02962 7.394C5.96772 6.80549 6.96785 6.26031 7.81555 5.90711C8.23436 5.7326 8.65739 5.58732 9.03839 5.51828C9.22879 5.48378 9.44686 5.46105 9.66881 5.48056C9.88626 5.49969 10.1858 5.56672 10.4502 5.78259C10.6229 5.92359 10.8422 6.00709 11.0834 6.00709C11.6282 6.00709 12.0771 5.57273 12.0771 5.02813C12.0771 5.00304 12.074 4.96993 12.0627 4.86028L12.0624 4.85684C12.0535 4.77069 12.0382 4.62152 12.0442 4.4634C12.0504 4.29772 12.0806 4.07019 12.1986 3.83469C12.3237 3.5852 12.5197 3.38218 12.7699 3.2379Z',
  d16: 'M22.1897 9.27446C22.5198 9.36075 22.75 9.65892 22.75 10.0001V13.7615C22.75 15.0602 22.75 16.1047 22.6473 16.933C22.541 17.7906 22.3149 18.5158 21.79 19.1187C21.3194 19.6593 20.7258 19.967 20.0149 20.1681C19.3261 20.363 18.4751 20.4714 17.4532 20.5817C16.8031 20.6519 16.3196 20.2221 16.1155 19.7951C15.9028 19.3501 15.474 19.0664 15 19.0664C14.4409 19.0664 13.94 19.4652 13.7925 20.0503C13.6772 20.5075 13.2929 21.0152 12.6527 21.0817L8.61488 21.5015C7.1246 21.6564 5.92437 21.7812 4.97621 21.7431C3.99059 21.7034 3.15087 21.4853 2.47308 20.8476C1.80021 20.2146 1.51402 19.3814 1.38001 18.381C1.24997 17.4101 1.24998 16.1614 1.25 14.5992V14.5992V11.0396C1.25 10.7363 1.43273 10.4628 1.71299 10.3467C1.99324 10.2306 2.31583 10.2948 2.53033 10.5093C2.66892 10.6479 3.03397 10.8174 3.81012 10.9149C4.5478 11.0076 5.50428 11.0194 6.65362 10.9886C7.46641 10.9668 8.37837 10.923 9.35778 10.876C11.0865 10.7929 13.0254 10.6998 15 10.6998C17.4308 10.6998 19.0419 10.4619 20.0552 10.183C20.5622 10.0435 20.9047 9.89777 21.1205 9.77654C21.302 9.67463 21.3579 9.6124 21.3579 9.6124C21.5291 9.32873 21.8673 9.19018 22.1897 9.27446Z',
  d17: 'M18.0078 15.2107C18.0078 15.763 17.5601 16.2107 17.0078 16.2107L16.9988 16.2107C16.4465 16.2107 15.9988 15.763 15.9988 15.2107C15.9988 14.6584 16.4465 14.2107 16.9988 14.2107L17.0078 14.2107C17.5601 14.2107 18.0078 14.6584 18.0078 15.2107Z',
  d18: 'M10.75 16.2107C10.75 14.9681 9.74264 13.9607 8.5 13.9607C7.25736 13.9607 6.25 14.9681 6.25 16.2107C6.25 17.4533 7.25736 18.4607 8.5 18.4607C9.74264 18.4607 10.75 17.4533 10.75 16.2107Z',
  d19: 'M14.009 7.99878H14',
  d20: 'M17.007 14.2087H16.998',
  d21: 'M6.99902 15.2087C6.99902 16.0371 7.67059 16.7087 8.49902 16.7087C9.32745 16.7087 9.99902 16.0371 9.99902 15.2087C9.99902 14.3802 9.32745 13.7087 8.49902 13.7087C7.67059 13.7087 6.99902 14.3802 6.99902 15.2087Z',
  d22: 'M21.9987 10.9988H2.00293L15.9987 3.99878L21.9987 10.9988Z',
  d23: 'M2.00098 10.9836V20.0011L13.0042 20.0015C13.0042 18.7465 13.9598 18.0341 14.942 18.0013C15.8633 18.0013 16.992 18.5825 16.992 19.9992H21.9949V11.071',
  d24: 'M15.6638 3.32922C15.9716 3.17531 16.3447 3.25065 16.5687 3.51194L22.3442 10.25H1.82227L15.6638 3.32922ZM14.0098 9C14.5621 9 15.0098 8.55228 15.0098 8C15.0098 7.44772 14.5621 7 14.0098 7H14.0008C13.4485 7 13.0008 7.44771 13.0008 8C13.0008 8.55228 13.4485 9 14.0008 9H14.0098Z',
  d25: 'M1.25 11.75V20.75H13.75V20C13.75 19.3096 14.3096 18.75 15 18.75C15.6904 18.75 16.25 19.3096 16.25 20V20.75H22.75V11.75H1.25ZM19.0078 15.2095C19.0078 15.7618 18.5601 16.2095 18.0078 16.2095H17.9988C17.4465 16.2095 16.9988 15.7618 16.9988 15.2095C16.9988 14.6572 17.4465 14.2095 17.9988 14.2095H18.0078C18.5601 14.2095 19.0078 14.6572 19.0078 15.2095ZM8 13.9595C8.9665 13.9595 9.75 14.743 9.75 15.7095C9.75 16.676 8.9665 17.4595 8 17.4595C7.0335 17.4595 6.25 16.676 6.25 15.7095C6.25 14.743 7.0335 13.9595 8 13.9595Z',
} as const;

export const IconCheeseStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-stroke-rounded IconCheeseStrokeRounded"
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
        strokeLinejoin="round" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-duotone-rounded IconCheeseDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-twotone-rounded IconCheeseTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-solid-rounded IconCheeseSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-bulk-rounded IconCheeseBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-stroke-sharp IconCheeseStrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-solid-sharp IconCheeseSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCheese: TheIconSelfPack = {
  name: 'Cheese',
  StrokeRounded: IconCheeseStrokeRounded,
  DuotoneRounded: IconCheeseDuotoneRounded,
  TwotoneRounded: IconCheeseTwotoneRounded,
  SolidRounded: IconCheeseSolidRounded,
  BulkRounded: IconCheeseBulkRounded,
  StrokeSharp: IconCheeseStrokeSharp,
  SolidSharp: IconCheeseSolidSharp,
};