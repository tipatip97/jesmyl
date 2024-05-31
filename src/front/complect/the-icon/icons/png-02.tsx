import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10',
  d2: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d3: 'M7 18V13.5C7 13.2239 7.22386 13 7.5 13H8.698C9.1991 13 9.71288 13.2342 9.8629 13.7123C9.96376 14.0338 9.95885 14.3357 9.85863 14.6783C9.70342 15.2089 9.15501 15.5 8.6022 15.5H7.5M12 18L12.1003 13.3694C12.1003 13.2717 12.2261 13.232 12.2822 13.3121L15.2248 17.7113C15.2809 17.7914 15.4067 17.7517 15.4067 17.6539L15.5 13M21 13.8729C20.8796 13.1545 20.7475 13 20 13H18.5C17.9477 13 17.6987 13.4477 17.6987 14V17C17.6987 17.5523 17.9477 18 18.5 18H20.2C20.6418 18 21 17.6418 21 17.2V16.4C21 16.1791 20.8209 16 20.6 16H19.8501',
  d4: 'M3.00238 10.9896C3.34277 10.1536 4.91096 8.49792 8.49903 8.49792C8.80044 8.49792 9.5911 8.19468 9.55018 6.55168C9.5335 5.06667 10.0748 2.12886 12.3455 2.00216C12.7955 2 13.2846 2 13.8192 2C15.6183 2 16.5178 2 17.2362 2.2522C18.3912 2.65765 19.3022 3.5151 19.733 4.60214C20.001 5.27832 20.001 6.12494 20.001 7.81818V17C20.001 17.9293 20.001 18.394 19.9241 18.7804C19.6085 20.3671 18.3681 21.6075 16.7814 21.9231C16.395 22 15.9303 22 15.001 22H10.7283C7.46705 22 5.83644 22 4.70405 21.2022C4.3796 20.9736 4.09156 20.7025 3.84868 20.3971C3.00098 19.3313 3.00098 17.7966 3.00098 14.7273V12.1818C3.00098 11.7548 3.00098 11.3586 3.00238 10.9896Z',
  d5: 'M7.00098 18V13.5C7.00098 13.2239 7.22484 13 7.50098 13H8.69898C9.20008 13 9.71386 13.2342 9.86388 13.7123C9.96474 14.0338 9.95983 14.3357 9.85961 14.6783C9.7044 15.2089 9.15599 15.5 8.60318 15.5H7.50098M12.001 18L12.1013 13.3694C12.1013 13.2717 12.2271 13.232 12.2832 13.3121L15.2258 17.7113C15.2819 17.7914 15.4077 17.7517 15.4077 17.6539L15.501 13M21.001 13.8729C20.8806 13.1545 20.7485 13 20.001 13H18.501C17.9487 13 17.6997 13.4477 17.6997 14V17C17.6997 17.5523 17.9487 18 18.501 18H20.201C20.6428 18 21.001 17.6418 21.001 17.2V16.4C21.001 16.1791 20.8219 16 20.601 16H19.8511',
  d6: 'M15.001 22H10.7283C7.46705 22 5.83644 22 4.70405 21.2022C4.3796 20.9736 4.09156 20.7025 3.84868 20.3971C3.00098 19.3313 3.00098 17.7966 3.00098 14.7273V12.1818C3.00098 9.21865 3.00098 7.73706 3.46992 6.55375C4.22379 4.65142 5.81812 3.15088 7.83934 2.44135C9.09661 2 10.6708 2 13.8192 2C15.6183 2 16.5178 2 17.2362 2.2522C18.3912 2.65765 19.3022 3.5151 19.733 4.60214C20.001 5.27832 20.001 6.12494 20.001 7.81818V10',
  d7: 'M3.00098 12C3.00098 10.1591 4.49336 8.66667 6.33431 8.66667C7.0001 8.66667 7.78502 8.78333 8.43235 8.60988C9.0075 8.45576 9.45674 8.00652 9.61086 7.43136C9.78431 6.78404 9.66765 5.99912 9.66765 5.33333C9.66765 3.49238 11.1601 2 13.001 2',
  d8: 'M7 18V13.5C7 13.2239 7.22386 13 7.5 13H8.698C9.1991 13 9.71288 13.2342 9.8629 13.7123C9.96376 14.0338 9.95885 14.3357 9.85863 14.6783C9.70342 15.2089 9.15501 15.5 8.6022 15.5H7.5M12.0466 17.9961L12 13.326C12 13.2282 12.3893 13.175 12.4454 13.2551L15.157 17.7479C15.2131 17.828 15.5 17.7571 15.5 17.6593V13M21 13.8729C20.8796 13.1545 20.7475 13 20 13H18.5C17.9477 13 17.6987 13.4477 17.6987 14V17C17.6987 17.5523 17.9477 18 18.5 18H20.2C20.6418 18 21 17.6418 21 17.2V16.4C21 16.1791 20.7597 15.9166 20.5388 15.9166H19.7889',
  d9: 'M7.9733 12.25C7.98484 12.25 7.99632 12.25 8.00775 12.25H8.67956C9.78399 12.25 10.6892 13.14 10.6892 14.25C10.6892 15.36 9.78399 16.2499 8.67956 16.2499H7.75002V17.9998C7.75002 18.414 7.41423 18.7498 7.00002 18.7498C6.58581 18.7498 6.25002 18.414 6.25002 17.9998V14C6.25002 13.9885 6.25001 13.977 6.25001 13.9654C6.24993 13.7604 6.24984 13.5383 6.27526 13.3507C6.30512 13.1303 6.38193 12.8496 6.61932 12.6141C6.85591 12.3793 7.13637 12.3042 7.35569 12.2749C7.54356 12.2498 7.76633 12.2499 7.9733 12.25ZM7.75002 14.7499H8.67956C8.96652 14.7499 9.18922 14.5206 9.18922 14.25C9.18922 13.9793 8.96652 13.75 8.67956 13.75H8.00775C7.90527 13.75 7.82259 13.7501 7.75118 13.7513C7.75005 13.8206 7.75002 13.9009 7.75002 14V14.7499Z',
  d10: 'M15.5068 12.25C15.921 12.25 16.2568 12.5858 16.2568 13V16.5182C16.2568 16.5324 16.2568 16.5466 16.2568 16.5607C16.2568 16.9284 16.2569 17.2666 16.229 17.5187C16.2146 17.6486 16.1872 17.8201 16.1152 17.9842C16.037 18.1625 15.8745 18.3979 15.5666 18.5047C15.2438 18.6166 14.9549 18.521 14.7671 18.3986C14.6061 18.2937 14.4892 18.1532 14.413 18.0525C14.264 17.8555 14.0979 17.5699 13.9219 17.2673C13.9143 17.2543 13.9068 17.2413 13.8991 17.2282L12.7656 15.2802V17.9998C12.7656 18.414 12.4298 18.7498 12.0156 18.7498C11.6014 18.7498 11.2656 18.414 11.2656 17.9998V14.4816C11.2656 14.4674 11.2656 14.4532 11.2656 14.4391C11.2656 14.0714 11.2655 13.7332 11.2934 13.4811C11.3078 13.3512 11.3353 13.1797 11.4072 13.0156C11.4854 12.8373 11.6479 12.6019 11.9558 12.4951C12.2786 12.3832 12.5675 12.4787 12.7553 12.6012C12.9163 12.7061 13.0332 12.8466 13.1094 12.9473C13.2584 13.1443 13.4245 13.4299 13.6005 13.7324C13.6081 13.7455 13.6157 13.7585 13.6233 13.7716L14.7568 15.7196V13C14.7568 12.5858 15.0926 12.25 15.5068 12.25Z',
  d11: 'M19.3473 13.7507C18.9357 13.7507 18.7029 13.7524 18.5394 13.7745C18.5177 13.7721 18.4724 13.7845 18.4651 13.8523C18.443 14.018 18.4414 14.2534 18.4414 14.6673V16.3339C18.4414 16.7478 18.443 16.9833 18.4651 17.149C18.4675 17.1724 18.4856 17.2207 18.5394 17.2268C18.7029 17.2489 18.9357 17.2505 19.3473 17.2505C19.7589 17.2505 19.9917 17.2489 20.1552 17.2268C20.2107 17.2206 20.2278 17.1723 20.2295 17.149C20.2453 17.0306 20.2506 16.8767 20.2523 16.6477C20.1684 16.6426 19.9524 16.6552 19.8694 16.66L19.8628 16.6604C19.4525 16.7163 19.0742 16.4291 19.0182 16.0188C18.9621 15.6084 19.2493 15.2303 19.6597 15.1742L19.6613 15.174C19.8914 15.1216 20.2481 15.1387 20.4564 15.1594C20.6498 15.1786 20.929 15.2261 21.1813 15.3703C21.471 15.5359 21.7532 15.8552 21.7532 16.3339C21.7532 16.6902 21.7533 17.0704 21.7163 17.3476C21.675 17.6568 21.5757 18.0003 21.2927 18.2851C21.0091 18.5705 20.6659 18.6714 20.3563 18.7132C20.0799 18.7507 19.7432 18.7506 19.3897 18.7505C19.0362 18.7506 18.6147 18.7507 18.3382 18.7132C18.0287 18.6714 17.6855 18.5705 17.4019 18.2851C17.1189 18.0003 17.0196 17.6568 16.9783 17.3476C16.9413 17.0704 16.9414 16.7324 16.9414 16.3761L16.9414 14.6252C16.9414 14.2689 16.9413 13.9309 16.9783 13.6537C17.0196 13.3445 17.1189 13.001 17.4019 12.7162C17.6855 12.4307 18.0287 12.3299 18.3382 12.288C18.6147 12.2506 19.0917 12.2503 19.4452 12.2504C19.7726 12.2487 20.251 12.2463 20.6541 12.3791C20.9029 12.4611 21.1681 12.6055 21.3781 12.8614C21.5891 13.1185 21.6962 13.4293 21.7286 13.7611C21.7689 14.1733 21.4674 14.5402 21.0551 14.5805C20.6429 14.6208 20.276 14.3192 20.2357 13.907C20.2273 13.8492 20.1982 13.8141 20.1848 13.8038C20.1235 13.7836 20.0255 13.7662 19.8712 13.7575C19.74 13.7502 19.3473 13.7507 19.3473 13.7507Z',
  d12: 'M7.13841 20.7033C8.00786 20.7942 9.13899 20.7955 10.7476 20.7955H14.9079C15.4456 20.7955 15.8816 21.233 15.8816 21.7727C15.8816 22.3125 15.4456 22.75 14.9079 22.75H10.6927C9.15159 22.75 7.91879 22.75 6.93654 22.6473C5.92712 22.5417 5.0659 22.3186 4.32113 21.7919C3.93077 21.5159 3.58222 21.1871 3.28704 20.8146C2.71721 20.0956 2.47396 19.2577 2.35985 18.2843C2.24996 17.3469 2.24998 16.1743 2.25 14.7262V12.1428V12.1427C2.25 10.7244 2.24999 9.61179 2.30919 8.71107C2.36944 7.79422 2.49398 7.02952 2.77509 6.31755C3.61848 4.1815 5.39221 2.51875 7.61221 1.73658C8.99465 1.2495 10.6813 1.24971 13.5209 1.25007L13.7572 1.25009L13.9605 1.25004L13.9606 1.25004C15.5156 1.2495 16.548 1.24914 17.4068 1.55172C18.7834 2.03673 19.8918 3.071 20.4206 4.41031C20.6039 4.87447 20.6795 5.36014 20.7153 5.90477C20.75 6.43335 20.75 7.08083 20.75 7.87999V7.88006V10.0455C20.75 10.5852 20.3141 11.0228 19.7763 11.0228C19.2386 11.0228 18.8026 10.5852 18.8026 10.0455V7.91329C18.8026 7.07303 18.8021 6.49008 18.7721 6.03341C18.7427 5.58546 18.6879 5.32704 18.6102 5.1304C18.3001 4.34503 17.6344 3.70339 16.7618 3.39593C16.2584 3.21858 15.5913 3.20463 13.7572 3.20463C13.4591 3.20463 13.1023 3.2058 12.7641 3.20732C12.426 3.20885 11.8726 3.21134 11.4104 3.48025C11.1057 3.65756 10.8849 3.85945 10.7582 4.08004C10.5409 4.45845 10.4166 4.89711 10.4166 5.3648C10.4166 5.51193 10.4262 5.70446 10.4344 5.88206L10.4344 5.88212C10.4417 6.03696 10.4496 6.20566 10.4531 6.3737C10.461 6.75379 10.449 7.19733 10.3343 7.62548C10.1108 8.45945 9.4594 9.11086 8.62543 9.33432C8.19728 9.44904 7.75374 9.46105 7.37365 9.45315C7.20551 9.44966 7.03693 9.44174 6.88201 9.43446C6.70441 9.42622 6.48041 9.41667 6.33328 9.41667C5.88661 9.41667 5.46642 9.53003 5.09991 9.72955C4.87246 9.85337 4.65104 10.0965 4.47811 10.3875C4.19749 10.8596 4.19732 11.4982 4.19734 11.7652L4.19737 14.6653C4.19737 16.1888 4.19894 17.2461 4.29387 18.0559C4.38611 18.8427 4.55555 19.2754 4.81111 19.5979C4.9889 19.8223 5.20128 20.0234 5.44274 20.1941C5.80057 20.4472 6.28449 20.6139 7.13841 20.7033Z',
  d13: 'M20.001 10.0157V2.08424C20.001 2.02909 19.9562 1.98438 19.901 1.98438H9.99881L2.99805 8.9798V21.9883H19.9946M9.99881 2.57672V8.9681L3.6262 8.97875',
  d14: 'M7.01296 15.4854L6.99617 12.98L8.80249 12.9985C9.17094 13.0023 9.54693 13.1279 9.74264 13.4396C10.0384 13.9108 10.1006 14.4798 9.74838 15.0322C9.54914 15.3447 9.16929 15.47 8.79833 15.4726L7.01296 15.4854ZM7.01296 15.4854L6.99609 18.4706M12.005 18.4882V13.2287C12.005 13.1303 12.1325 13.0912 12.1878 13.1727L15.331 17.8058C15.3863 17.8872 15.5138 17.8482 15.5138 17.7497V12.4819M20.9932 14.2137V13.073C20.9932 13.0179 20.9484 12.9731 20.8932 12.9731H17.6025C17.5473 12.9731 17.5025 13.0179 17.5025 13.073V17.8621C17.5025 17.9173 17.5473 17.962 17.6025 17.962H20.899C20.9543 17.962 20.9991 17.9173 20.9991 17.8621V15.9791H19.3402',
  d15: 'M11.7745 12.2848C12.0867 12.1863 12.4267 12.3018 12.6144 12.57L14.75 15.6208V12.2501H16.25V18C16.25 18.3274 16.0377 18.6169 15.7255 18.7153C15.4133 18.8137 15.0733 18.6983 14.8856 18.4301L12.75 15.3793V18.75H11.25V13.0001C11.25 12.6727 11.4623 12.3832 11.7745 12.2848ZM6.25 12.25L8.81444 12.2501C8.81444 12.2501 8.81444 12.2501 8.81444 12.2501C9.92032 12.2501 10.75 13.1834 10.75 14.25C10.75 15.3167 9.92033 16.25 8.81444 16.25H7.75V18.75H6.25V12.25ZM7.75 14.75H8.81444C9.01809 14.75 9.25 14.5641 9.25 14.25C9.25 13.936 9.01809 13.7501 8.81444 13.7501L7.75 13.75V14.75ZM16.75 13C16.75 12.5858 17.0858 12.25 17.5 12.25H21C21.4142 12.25 21.75 12.5858 21.75 13V14.25H20.25V13.75H18.25V17.25H20.25V16.75H19.3529V15.25H21.75V18C21.75 18.4142 21.4142 18.75 21 18.75H17.5C17.0858 18.75 16.75 18.4142 16.75 18V13Z',
  d16: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H20.75V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V10H20.75V2.22727Z',
} as const;

export const IconPng02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="png-02-stroke-rounded IconPng02StrokeRounded"
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

export const IconPng02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="png-02-duotone-rounded IconPng02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconPng02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="png-02-twotone-rounded IconPng02TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPng02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="png-02-solid-rounded IconPng02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPng02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="png-02-bulk-rounded IconPng02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPng02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="png-02-stroke-sharp IconPng02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPng02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="png-02-solid-sharp IconPng02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPng02: TheIconSelfPack = {
  name: 'Png02',
  StrokeRounded: IconPng02StrokeRounded,
  DuotoneRounded: IconPng02DuotoneRounded,
  TwotoneRounded: IconPng02TwotoneRounded,
  SolidRounded: IconPng02SolidRounded,
  BulkRounded: IconPng02BulkRounded,
  StrokeSharp: IconPng02StrokeSharp,
  SolidSharp: IconPng02SolidSharp,
};