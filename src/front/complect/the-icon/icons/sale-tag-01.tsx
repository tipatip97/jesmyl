import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.98633 3.70018C9.78335 6.79475 14.3961 0.115888 17.1255 2.53972C18.696 3.93438 18.1995 7.01371 16.1607 9.01998',
  d2: 'M13.7897 13.9839C13.8075 13.6494 13.9014 13.0373 13.3927 12.5722M13.3927 12.5722C13.2353 12.4282 13.0201 12.2983 12.7272 12.1951C11.6788 11.8256 10.391 13.0623 11.302 14.1944C11.7917 14.803 12.1692 14.9901 12.1337 15.6812C12.1087 16.1673 11.6311 16.6752 11.0018 16.8686C10.4551 17.0367 9.85198 16.8142 9.47052 16.3879C9.00476 15.8675 9.0518 15.3769 9.04782 15.163M13.3927 12.5722L13.9668 11.998M9.51204 16.4528L8.9668 16.998',
  d3: 'M18.2726 6.63297C19.1981 6.81072 19.4057 7.39517 19.682 9.01695C19.9309 10.4776 20.0007 12.2303 20.0007 12.9765C19.9753 13.2514 19.8625 13.508 19.682 13.7174C17.7469 15.7454 13.9064 19.5752 11.9681 21.4777C11.2074 22.1569 10.0597 22.1715 9.25241 21.5481C7.59928 20.0612 6.01095 18.3803 4.45501 16.8624C3.82993 16.0573 3.84458 14.9129 4.52567 14.1543C6.57621 12.0271 10.2867 8.38595 12.3813 6.37442C12.5913 6.19447 12.8486 6.08191 13.1243 6.05664C13.5943 6.05652 14.4005 6.11969 15.1859 6.16523',
  d4: 'M20.0863 11.2709L19.9386 9.94186C19.7617 8.34944 19.6732 7.55322 19.1552 7.03521C18.9 6.77998 18.5772 6.62903 18.125 6.52039L15.3086 6.14735L14.9195 6.10411C13.9391 5.99518 13.4489 5.94072 12.9999 6.09822C12.5509 6.25572 12.2022 6.60446 11.5047 7.30195L6.27887 12.5278C4.88658 13.9201 4.19043 14.6162 4.19043 15.4813C4.19043 16.3464 4.88658 17.0425 6.27887 18.4348L7.75562 19.9116C9.14791 21.3039 9.84407 22 10.7091 22C11.5742 22 12.2703 21.3039 13.6626 19.9116L18.8885 14.6857C19.5859 13.9882 19.9347 13.6395 20.0922 13.1905C20.2497 12.7415 20.1952 12.2512 20.0863 11.2709Z',
  d5: 'M18.463 6.57633C19.3885 6.75408 19.5961 7.33853 19.8724 8.96031C20.1213 10.421 20.1911 12.1737 20.1911 12.9199C20.1657 13.1948 20.0529 13.4514 19.8724 13.6608C17.9373 15.6888 14.0968 19.5186 12.1585 21.4211C11.3978 22.1003 10.2501 22.1149 9.44284 21.4915C7.78971 20.0046 6.20138 18.3237 4.64544 16.8058C4.02036 16.0007 4.03501 14.8563 4.7161 14.0977C6.76664 11.9705 10.4771 8.32931 12.5717 6.31778C12.7817 6.13783 13.039 6.02527 13.3147 6C13.7847 5.99988 14.5909 6.06305 15.3763 6.10859',
  d6: 'M7.19043 3.69682C9.97097 6.78172 14.5565 0.123719 17.2698 2.53998C18.8311 3.93028 18.3375 7 16.3107 9',
  d7: 'M14.0133 13.9859C14.0311 13.6514 14.125 13.0393 13.6163 12.5742M13.6163 12.5742C13.4589 12.4302 13.2437 12.3003 12.9508 12.1971C11.9024 11.8276 10.6146 13.0643 11.5256 14.1964C12.0153 14.805 12.3928 14.9921 12.3573 15.6832C12.3323 16.1693 11.8547 16.6772 11.2254 16.8706C10.6787 17.0387 10.0756 16.8162 9.69415 16.3899C9.22839 15.8695 9.27543 15.3789 9.27145 15.165M13.6163 12.5742L14.1904 12M9.73567 16.4548L9.19043 17',
  d8: 'M18.2726 6.61759C19.1981 6.79534 19.4057 7.37979 19.682 9.00157C19.9309 10.4622 20.0007 12.2149 20.0007 12.9611C19.9753 13.236 19.8625 13.4926 19.682 13.702C17.7469 15.73 13.9064 19.5598 11.9681 21.4623C11.2074 22.1415 10.0597 22.1561 9.25241 21.5327C7.59928 20.0458 6.01095 18.3649 4.45501 16.847C3.82993 16.0419 3.84458 14.8975 4.52567 14.1389C6.57621 12.0117 10.2867 8.37057 12.3813 6.35904C12.5913 6.17909 12.8486 6.06653 13.1243 6.04126C13.5943 6.04114 14.4005 6.10431 15.1859 6.14984',
  d9: 'M13.8229 13.9993C13.8407 13.6648 13.9346 13.0527 13.4259 12.5875M13.4259 12.5875C13.2685 12.4436 13.0533 12.3137 12.7604 12.2104C11.712 11.8409 10.4242 13.0777 11.3352 14.2098C11.8249 14.8183 12.2024 15.0055 12.1669 15.6966C12.1419 16.1827 11.6643 16.6906 11.035 16.884C10.4883 17.0521 9.88518 16.8296 9.50373 16.4033C9.03797 15.8829 9.08501 15.3923 9.08102 15.1784M13.4259 12.5875L14 12.0134M9.54524 16.4682L9 17.0134',
  d10: 'M7 3.71025C9.78054 6.79515 14.3661 0.137147 17.0794 2.55341C18.6407 3.94371 18.1471 7.01343 16.1203 9.01343',
  d11: 'M14.4845 1.42051C15.5267 1.13257 16.7206 1.13058 17.7445 2.04238C18.8593 3.03512 19.1476 4.53968 18.934 5.94126C18.7184 7.35569 17.9819 8.81711 16.8227 9.96099C16.4296 10.3489 15.7965 10.3447 15.4086 9.9516C15.0206 9.55849 15.0248 8.92534 15.4179 8.53742C16.2855 7.68129 16.8093 6.60786 16.9568 5.63985C17.1063 4.659 16.8609 3.93355 16.4144 3.536C16.0816 3.23966 15.6848 3.16382 15.0172 3.34828C14.3468 3.53349 13.6117 3.92606 12.7385 4.39236C12.6716 4.42811 12.6038 4.4643 12.5352 4.50086C11.6427 4.97648 10.5858 5.52685 9.54048 5.71165C8.99747 5.80765 8.41675 5.81425 7.83531 5.64149C7.24612 5.46642 6.71622 5.12479 6.25721 4.61554C5.88745 4.2053 5.92026 3.57299 6.33049 3.20322C6.74073 2.83346 7.37305 2.86627 7.74281 3.27651C7.97894 3.53848 8.20058 3.6636 8.40496 3.72433C8.61711 3.78737 8.87202 3.79881 9.19231 3.74219C9.8736 3.62175 10.654 3.23706 11.5946 2.73583C11.6741 2.69349 11.7549 2.65019 11.8369 2.60625C12.6526 2.16915 13.5867 1.66856 14.4845 1.42051Z',
  d12: 'M19.4951 6.50439C19.1067 6.11595 18.6375 5.91743 18.1097 5.79065L14.6696 5.3423C13.8299 5.24814 13.1751 5.17471 12.5613 5.39001C11.9475 5.60531 11.482 6.07175 10.8852 6.66979L10.784 6.77113L5.52109 12.034L5.52109 12.034C4.85647 12.6986 4.3046 13.2504 3.92584 13.7468C3.52687 14.2698 3.25 14.8184 3.25 15.4808C3.25 16.1433 3.52687 16.6919 3.92584 17.2148C4.3046 17.7112 4.85645 18.263 5.52105 18.9276L5.52107 18.9276L5.52109 18.9276L7.07187 20.4784L7.0719 20.4784L7.07191 20.4784C7.73648 21.1431 8.2883 21.6949 8.78472 22.0737C9.30764 22.4726 9.85625 22.7495 10.5187 22.7495C11.1811 22.7495 11.7298 22.4726 12.2527 22.0737C12.7491 21.6949 13.3009 21.143 13.9655 20.4784L13.9655 20.4784L19.3297 15.1143C19.9278 14.5175 20.3942 14.052 20.6095 13.4382C20.8248 12.8245 20.7514 12.1696 20.6572 11.3299L20.4886 9.81359C20.4044 9.05569 20.3339 8.42055 20.2144 7.91325C20.088 7.37607 19.8894 6.89868 19.4951 6.50439ZM14.5299 12.5307C14.823 12.238 14.8234 11.7631 14.5308 11.47C14.2381 11.1769 13.7632 11.1765 13.4701 11.4691L13.3525 11.5866C12.5447 11.2062 11.552 11.3377 10.8814 12.0073C10.5197 12.3684 10.222 12.8492 10.2543 13.4507C10.2853 14.0272 10.6119 14.5253 11.042 14.9548C11.3635 15.2757 11.4224 15.4649 11.4282 15.5471C11.4318 15.5986 11.4252 15.743 11.1518 16.016C10.9266 16.2408 10.7664 16.2588 10.6623 16.2473C10.524 16.232 10.3214 16.1421 10.0853 15.9064C9.8728 15.6942 9.79167 15.4303 9.81095 15.2118C9.84737 14.7992 9.54241 14.4352 9.1298 14.3988C8.71719 14.3624 8.35318 14.6673 8.31676 15.0799C8.27843 15.5141 8.36885 15.9573 8.57566 16.3556L8.47011 16.4609C8.17697 16.7536 8.17658 17.2285 8.46923 17.5216C8.76189 17.8147 9.23676 17.8151 9.52989 17.5225L9.61836 17.4341C9.88173 17.5905 10.1764 17.7028 10.4978 17.7382C11.1224 17.8072 11.7166 17.5717 12.2116 17.0775C12.6583 16.6315 12.9695 16.0866 12.9245 15.4425C12.8817 14.8292 12.5257 14.3164 12.1018 13.8932C11.7866 13.5786 11.7544 13.4117 11.7522 13.3702L11.7522 13.3701C11.7513 13.3533 11.7464 13.2632 11.9412 13.0688C12.1971 12.8133 12.633 12.8045 12.9144 13.0854C13.1032 13.2739 13.1624 13.5357 13.0998 13.7642C12.9902 14.1637 13.2252 14.5763 13.6247 14.6859C14.0241 14.7954 14.4368 14.5604 14.5463 14.161C14.6833 13.6615 14.6379 13.1225 14.4136 12.6468L14.5299 12.5307Z',
  d13: 'M18.1097 5.79074C18.6375 5.91753 19.1067 6.11604 19.4951 6.50448C19.8894 6.89877 20.088 7.37616 20.2144 7.91334C20.3339 8.42064 20.4044 9.05579 20.4886 9.81368L20.6572 11.33C20.7514 12.1697 20.8248 12.8245 20.6095 13.4383C20.3942 14.0521 19.9278 14.5176 19.3297 15.1144L13.9655 20.4785L13.9655 20.4785C13.3009 21.1431 12.7491 21.695 12.2527 22.0738C11.7298 22.4727 11.1811 22.7496 10.5187 22.7496C9.85625 22.7496 9.30764 22.4727 8.78472 22.0738C8.2883 21.695 7.73648 21.1431 7.0719 20.4785L7.07187 20.4785L5.52109 18.9277L5.52107 18.9277C4.85645 18.2631 4.3046 17.7113 3.92584 17.2149C3.52687 16.692 3.25 16.1434 3.25 15.4809C3.25 14.8185 3.52687 14.2699 3.92584 13.7469C4.3046 13.2505 4.85647 12.6987 5.52109 12.0341L10.784 6.77122L10.8852 6.66988C11.482 6.07184 11.9475 5.60541 12.5613 5.3901C13.1751 5.1748 13.8299 5.24823 14.6696 5.34239L18.1097 5.79074Z',
  d14: 'M14.5308 11.4701C14.8234 11.7632 14.823 12.2381 14.5299 12.5308L14.4136 12.6469C14.6379 13.1226 14.6833 13.6615 14.5463 14.1611C14.4368 14.5605 14.0241 14.7955 13.6247 14.686C13.2252 14.5764 12.9902 14.1638 13.0998 13.7643C13.1624 13.5358 13.1032 13.274 12.9144 13.0855C12.633 12.8046 12.1971 12.8134 11.9412 13.0689C11.7464 13.2633 11.7513 13.3534 11.7522 13.3702L11.7522 13.3703C11.7544 13.4118 11.7866 13.5787 12.1018 13.8933C12.5257 14.3165 12.8817 14.8293 12.9245 15.4426C12.9695 16.0867 12.6583 16.6316 12.2116 17.0776C11.7166 17.5718 11.1224 17.8073 10.4978 17.7383C10.1764 17.7028 9.88173 17.5906 9.61836 17.4342L9.52989 17.5226C9.23676 17.8152 8.76189 17.8148 8.46923 17.5217C8.17658 17.2286 8.17697 16.7537 8.47011 16.461L8.57566 16.3556C8.36885 15.9574 8.27843 15.5142 8.31676 15.08C8.35318 14.6674 8.71719 14.3624 9.1298 14.3989C9.54241 14.4353 9.84737 14.7993 9.81095 15.2119C9.79166 15.4304 9.8728 15.6943 10.0853 15.9065C10.3214 16.1421 10.524 16.2321 10.6623 16.2474C10.7664 16.2589 10.9266 16.2409 11.1518 16.0161C11.4252 15.7431 11.4318 15.5987 11.4282 15.5472C11.4224 15.4649 11.3635 15.2758 11.042 14.9549C10.6119 14.5254 10.2853 14.0273 10.2543 13.4508C10.222 12.8493 10.5197 12.3684 10.8814 12.0074C11.552 11.3378 12.5447 11.2063 13.3525 11.5867L13.4701 11.4692C13.7632 11.1766 14.2381 11.177 14.5308 11.4701Z',
  d15: 'M7 3.69682C9.78054 6.78172 14.3661 0.123719 17.0794 2.53998C18.6407 3.93028 19.0267 7 17 9',
  d16: 'M14.4442 11.5547C13.8782 10.9897 12.9679 10.9822 12.4111 11.5382C11.8543 12.0941 11.8264 12.68 12.5718 13.4241C13.3171 14.1682 13.4017 14.8279 12.6815 15.5469C11.9614 16.2658 11.1728 16.0537 10.5553 15.4373M14.4442 11.5547L15.4989 10.5M14.4442 11.5547C14.8284 11.9383 14.9552 12.4802 14.8229 12.9627M10.5553 15.4373L9.49316 16.5M10.5553 15.4373C10.1907 15.0733 10.0243 14.5928 10.0637 14.146',
  d17: 'M18.0165 6.79236L18.9629 7.01218L20 12.9933L11.0708 21.9704C11.0317 22.0097 10.9682 22.0099 10.929 21.9708L4.02948 15.0941C3.99022 15.0549 3.99017 14.9914 4.02936 14.9522L12.9799 6L15.4867 6.43656',
  d18: 'M14.4765 1.41256C15.4671 1.13886 16.6019 1.13698 17.5752 2.00366C19.4601 3.68222 19.8611 7.23528 17.5352 9.53049L16.1999 8.17735C17.7269 6.67047 17.394 4.38785 16.3109 3.42338C15.9946 3.14171 15.6174 3.06962 14.9828 3.24495C14.3456 3.421 13.6469 3.79414 12.8169 4.23738C12.7533 4.27136 12.6888 4.30575 12.6236 4.3405C11.7753 4.79259 10.7707 5.31574 9.77708 5.49139C9.26093 5.58264 8.70894 5.58892 8.15628 5.42471C7.59623 5.2583 7.09255 4.93356 6.65625 4.44951L8.06835 3.17673C8.29279 3.42575 8.50347 3.54468 8.69774 3.6024C8.89939 3.66232 9.14169 3.6732 9.44613 3.61937C10.0937 3.50489 10.8355 3.13924 11.7296 2.6628C11.8051 2.62256 11.8819 2.5814 11.9599 2.53964C12.7352 2.12417 13.6231 1.64834 14.4765 1.41256Z',
  d19: 'M11 22.7498C11.1989 22.7498 11.3897 22.6708 11.5303 22.5302L20.75 13.255L19.6134 6.3864L12.7448 5.19434L3.46967 14.4695C3.17678 14.7624 3.17678 15.2373 3.46967 15.5302L10.4697 22.5302C10.6103 22.6708 10.8011 22.7498 11 22.7498ZM16.0275 11.0301L15.4115 11.6462C15.636 12.122 15.6815 12.6612 15.5444 13.1609L14.0979 12.7641C14.1606 12.5356 14.1013 12.2738 13.9125 12.0853C13.6311 11.8044 13.1952 11.8132 12.9393 12.0687C12.7445 12.2631 12.7494 12.3532 12.7503 12.37C12.7525 12.4114 12.7847 12.5785 13.0999 12.8932C13.5238 13.3163 13.8798 13.8291 13.9226 14.4424C13.9676 15.0865 13.6564 15.6314 13.2097 16.0774C12.7147 16.5716 12.1205 16.8071 11.4959 16.7381C11.1748 16.7027 10.8803 16.5906 10.6171 16.4344L10.0219 17.03L8.96094 15.9696L9.5741 15.3561C9.36705 14.9577 9.27651 14.5143 9.31486 14.0798L10.8091 14.2117C10.7898 14.4302 10.8709 14.6941 11.0834 14.9063C11.3195 15.142 11.5221 15.2319 11.6604 15.2472C11.7645 15.2587 11.9247 15.2407 12.1499 15.0159C12.4233 14.7429 12.4299 14.5986 12.4263 14.547C12.4205 14.4648 12.3616 14.2756 12.0401 13.9547C11.61 13.5252 11.2834 13.0271 11.2525 12.4506C11.2201 11.8492 11.5178 11.3683 11.8795 11.0072C12.55 10.3378 13.5424 10.2062 14.3501 10.5863L14.9669 9.96948L16.0275 11.0301Z',
} as const;

export const IconSaleTag01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-01-stroke-rounded IconSaleTag01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconSaleTag01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-01-duotone-rounded IconSaleTag01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSaleTag01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-01-twotone-rounded IconSaleTag01TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSaleTag01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-01-solid-rounded IconSaleTag01SolidRounded"
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

export const IconSaleTag01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-01-bulk-rounded IconSaleTag01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSaleTag01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-01-stroke-sharp IconSaleTag01StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSaleTag01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-01-solid-sharp IconSaleTag01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSaleTag01: TheIconSelfPack = {
  name: 'SaleTag01',
  StrokeRounded: IconSaleTag01StrokeRounded,
  DuotoneRounded: IconSaleTag01DuotoneRounded,
  TwotoneRounded: IconSaleTag01TwotoneRounded,
  SolidRounded: IconSaleTag01SolidRounded,
  BulkRounded: IconSaleTag01BulkRounded,
  StrokeSharp: IconSaleTag01StrokeSharp,
  SolidSharp: IconSaleTag01SolidSharp,
};