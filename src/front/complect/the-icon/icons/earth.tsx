import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C6.47715 22 2 17.5228 2 12C2 9.20746 3.14465 6.68227 4.99037 4.86802M12 22C11.037 21.2864 11.1907 20.4555 11.6738 19.6247C12.4166 18.3474 12.4166 18.3474 12.4166 16.6444C12.4166 14.9414 13.4286 14.1429 17 14.8571C18.6047 15.1781 19.7741 12.9609 21.8573 13.693M12 22C16.9458 22 21.053 18.4096 21.8573 13.693M21.8573 13.693C21.9511 13.1427 22 12.5771 22 12C22 7.11857 18.5024 3.05405 13.8766 2.17579M13.8766 2.17579C14.3872 3.11599 14.1816 4.23551 13.1027 4.66298C11.3429 5.3603 12.6029 6.64343 11.1035 7.4356C10.1038 7.96372 8.6044 7.83152 7.10496 6.24716C6.31517 5.41264 5.83966 4.95765 4.99037 4.86802M13.8766 2.17579C13.2687 2.06039 12.6414 2 12 2C9.26969 2 6.79495 3.09421 4.99037 4.86802',
  d2: 'M12 22C6.47715 22 2 17.5228 2 12C2 9.20745 3.14465 6.68226 4.99037 4.86801C5.83966 4.95764 6.31517 5.41263 7.10496 6.24715C8.6044 7.83151 10.1038 7.96371 11.1035 7.43559C12.6029 6.64342 11.3429 5.36029 13.1027 4.66297C14.1816 4.2355 14.3872 3.11598 13.8766 2.17578C18.5024 3.05404 22 7.11856 22 12C22 12.577 21.9511 13.1427 21.8573 13.693C19.7741 12.9609 18.6047 15.1781 17 14.8571C13.4286 14.1428 12.4166 14.9413 12.4166 16.6444C12.4166 18.3474 12.4166 18.3474 11.6738 19.6247C11.1907 20.4555 11.037 21.2863 12 22Z',
  d3: 'M12 22C6.47715 22 2 17.5228 2 12C2 9.20746 3.14465 6.68227 4.99037 4.86802C6.79495 3.09421 9.26969 2 12 2C12.6414 2 13.2687 2.06039 13.8766 2.17579C18.5024 3.05405 22 7.11857 22 12C22 12.5771 21.9511 13.1427 21.8573 13.693C21.053 18.4096 16.9458 22 12 22Z',
  d4: 'M11.9999 22C11.0368 21.2863 11.1906 20.4555 11.6737 19.6247C12.4165 18.3474 12.4165 18.3474 12.4165 16.6444C12.4165 14.9413 13.4284 14.1428 16.9999 14.8571C18.6046 15.1781 19.774 12.9609 21.8571 13.693M13.8764 2.17578C14.387 3.11598 14.1814 4.2355 13.1026 4.66297C11.3427 5.36029 12.6028 6.64342 11.1033 7.43559C10.1037 7.96371 8.60427 7.83151 7.10483 6.24715C6.31503 5.41263 5.83952 4.95764 4.99023 4.86801',
  d5: 'M14.3818 1.51678C14.4521 1.63467 14.5099 1.74947 14.5557 1.85917C14.8718 2.46147 14.9856 3.15817 14.8086 3.81017C14.6221 4.49683 14.1297 5.0644 13.3781 5.3622C13.0448 5.49424 12.9322 5.62091 12.8832 5.69502C12.8226 5.78642 12.7878 5.90074 12.7424 6.15016L12.73 6.2196C12.6913 6.44 12.6319 6.77865 12.472 7.10125C12.2755 7.49775 11.9537 7.83611 11.4529 8.10071C10.0792 8.82644 8.22486 8.52451 6.55932 6.76466C5.75334 5.91303 5.45165 5.67293 4.91074 5.61584C4.90064 5.61478 4.89056 5.61351 4.88051 5.61203C4.54258 5.56242 3.86155 5.60554 3.09474 5.9786C1.93058 7.69668 1.25 9.77016 1.25 12.0018C1.25 17.8514 5.92204 22.6097 11.7381 22.7487C11.6633 22.6932 11.5963 22.6411 11.5377 22.5935C10.925 22.1344 10.5804 21.5615 10.5448 20.8985C10.5115 20.2801 10.7568 19.7102 11.0246 19.2497C11.4151 18.5782 11.5337 18.3611 11.5951 18.1148C11.6603 17.8533 11.6657 17.5393 11.6657 16.6464C11.6657 16.1541 11.7376 15.6579 11.958 15.2144C12.1872 14.7532 12.554 14.3963 13.0535 14.1654C13.988 13.7336 15.3453 13.7635 17.1462 14.1237C17.353 14.165 17.5705 14.1338 17.8568 14.016C18.0947 13.9182 18.322 13.788 18.6019 13.6276C18.6893 13.5776 18.7818 13.5246 18.8813 13.4688C19.6649 13.0291 20.736 12.5063 22.105 12.9874C22.1378 12.9989 22.1696 13.0127 22.2005 13.0286C22.3303 13.0956 22.4902 13.1945 22.6692 13.3256C22.7226 12.8916 22.75 12.4498 22.75 12.0018C22.75 6.88278 19.1726 2.60078 14.3818 1.51678Z',
  d6: 'M11.9514 1.25195C12.7214 1.68974 13.0828 2.21084 13.1777 2.45218C13.1889 2.48079 13.2019 2.50867 13.2166 2.53569C13.3952 2.8647 13.4249 3.18164 13.361 3.41707C13.3026 3.63208 13.1528 3.83802 12.8255 3.96768C12.2788 4.1843 11.889 4.47952 11.6325 4.86687C11.3875 5.23693 11.3136 5.62366 11.2667 5.8812L11.2595 5.92038C11.2111 6.18666 11.1878 6.3145 11.128 6.43516C11.0841 6.52383 11.0011 6.64293 10.7522 6.77442C10.1266 7.10492 8.98212 7.14244 7.64877 5.73359C6.87847 4.91967 6.23139 4.25203 5.083 4.12573C4.9707 4.10991 4.84747 4.0998 4.71497 4.09666C6.61874 2.34146 9.16001 1.26433 11.9514 1.25195Z',
  d7: 'M22.3244 15.0062C22.0022 14.6825 21.7167 14.4772 21.5554 14.3849C20.8662 14.1624 20.3206 14.3812 19.6153 14.7769C19.5475 14.815 19.4757 14.8562 19.401 14.8991C19.1067 15.0682 18.7651 15.2644 18.4274 15.4033C17.978 15.5881 17.4475 15.7136 16.852 15.5945C15.0814 15.2404 14.1471 15.3125 13.6827 15.5271C13.4828 15.6194 13.3734 15.7368 13.3013 15.882C13.2203 16.0448 13.1657 16.2871 13.1657 16.6464L13.1657 16.7466C13.1659 17.5014 13.1661 18.0142 13.0506 18.4776C12.9315 18.9552 12.6948 19.362 12.3656 19.9276L12.3213 20.0037C12.106 20.374 12.0328 20.6349 12.0426 20.818C12.0498 20.9512 12.1046 21.1466 12.4456 21.3994C12.4554 21.4066 12.465 21.4141 12.4744 21.4218C12.8016 21.6899 13.4892 22.1475 14.3176 22.5014C18.1625 21.6566 21.2356 18.7537 22.3244 15.0062Z',
  d8: 'M14.3818 1.51758C14.4521 1.63547 14.5099 1.75027 14.5557 1.85997C14.8718 2.46227 14.9856 3.15897 14.8086 3.81096C14.6221 4.49763 14.1297 5.06519 13.3781 5.363C13.0448 5.49504 12.9322 5.62171 12.8832 5.69582C12.8226 5.78722 12.7878 5.90153 12.7424 6.15096L12.73 6.2204C12.6913 6.4408 12.6319 6.77945 12.472 7.10204C12.2755 7.49855 11.9537 7.83691 11.4529 8.1015C10.0792 8.82724 8.22486 8.52531 6.55932 6.76545C5.75334 5.91383 5.45165 5.67373 4.91074 5.61664C4.90064 5.61557 4.89056 5.6143 4.88051 5.61283C4.54258 5.56322 3.86155 5.60633 3.09474 5.97939C1.93058 7.69747 1.25 9.77096 1.25 12.0026C1.25 17.8522 5.92204 22.6105 11.7381 22.7495C11.6633 22.694 11.5963 22.6419 11.5377 22.5943C10.925 22.1352 10.5804 21.5623 10.5448 20.8993C10.5115 20.2809 10.7568 19.711 11.0246 19.2505C11.4151 18.579 11.5337 18.3619 11.5951 18.1156C11.6603 17.8541 11.6657 17.5401 11.6657 16.6472C11.6657 16.1549 11.7376 15.6587 11.958 15.2152C12.1872 14.754 12.554 14.3971 13.0535 14.1662C13.988 13.7344 15.3453 13.7643 17.1462 14.1245C17.353 14.1658 17.5705 14.1346 17.8568 14.0168C18.0947 13.919 18.322 13.7888 18.6019 13.6284C18.6893 13.5784 18.7818 13.5254 18.8813 13.4696C19.6649 13.0299 20.736 12.5071 22.105 12.9882C22.1378 12.9997 22.1696 13.0135 22.2005 13.0294C22.3303 13.0964 22.4902 13.1953 22.6692 13.3264C22.7226 12.8924 22.75 12.4506 22.75 12.0026C22.75 6.88357 19.1726 2.60158 14.3818 1.51758Z',
  d9: 'M11.9513 1.25195C12.7213 1.68974 13.0826 2.21084 13.1775 2.45218C13.1888 2.48079 13.2018 2.50867 13.2164 2.53569C13.3951 2.8647 13.4248 3.18164 13.3609 3.41707C13.3025 3.63208 13.1527 3.83802 12.8254 3.96768C12.2787 4.1843 11.8889 4.47952 11.6324 4.86687C11.3873 5.23693 11.3135 5.62366 11.2665 5.8812L11.2594 5.92038C11.211 6.18666 11.1877 6.3145 11.1279 6.43516C11.084 6.52383 11.001 6.64293 10.7521 6.77442C10.1265 7.10492 8.98199 7.14244 7.64865 5.73359C6.87835 4.91967 6.23126 4.25203 5.08288 4.12573C4.97057 4.10991 4.84734 4.0998 4.71484 4.09666C6.61862 2.34146 9.15988 1.26433 11.9513 1.25195Z',
  d10: 'M22.3242 15.0062C22.0021 14.6825 21.7166 14.4772 21.5552 14.3849C20.866 14.1624 20.3205 14.3812 19.6152 14.7769C19.5473 14.815 19.4756 14.8562 19.4009 14.8991C19.1066 15.0682 18.765 15.2644 18.4272 15.4033C17.9779 15.5881 17.4474 15.7136 16.8519 15.5945C15.0813 15.2404 14.1469 15.3125 13.6826 15.5271C13.4827 15.6194 13.3733 15.7368 13.3011 15.882C13.2202 16.0448 13.1656 16.2871 13.1656 16.6464L13.1656 16.7466C13.1658 17.5014 13.1659 18.0142 13.0505 18.4776C12.9314 18.9552 12.6946 19.362 12.3655 19.9276L12.3211 20.0037C12.1058 20.374 12.0326 20.6349 12.0425 20.818C12.0497 20.9512 12.1044 21.1466 12.4455 21.3994C12.4553 21.4066 12.4648 21.4141 12.4742 21.4218C12.8015 21.6899 13.4891 22.1475 14.3175 22.5014C18.1624 21.6566 21.2354 18.7537 22.3242 15.0062Z',
} as const;

export const IconEarthStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="earth-stroke-rounded IconEarthStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEarthDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="earth-duotone-rounded IconEarthDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEarthTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="earth-twotone-rounded IconEarthTwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEarthSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="earth-solid-rounded IconEarthSolidRounded"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEarthBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="earth-bulk-rounded IconEarthBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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

export const IconEarthStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="earth-stroke-sharp IconEarthStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconEarthSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="earth-solid-sharp IconEarthSolidSharp"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEarth: TheIconSelfPack = {
  name: 'Earth',
  StrokeRounded: IconEarthStrokeRounded,
  DuotoneRounded: IconEarthDuotoneRounded,
  TwotoneRounded: IconEarthTwotoneRounded,
  SolidRounded: IconEarthSolidRounded,
  BulkRounded: IconEarthBulkRounded,
  StrokeSharp: IconEarthStrokeSharp,
  SolidSharp: IconEarthSolidSharp,
};