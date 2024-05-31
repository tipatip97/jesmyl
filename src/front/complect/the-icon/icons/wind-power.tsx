import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 11C13.5 11.8284 12.8284 12.5 12 12.5C11.1716 12.5 10.5 11.8284 10.5 11C10.5 10.1716 11.1716 9.5 12 9.5C12.8284 9.5 13.5 10.1716 13.5 11Z',
  d2: 'M21 10.5C20.9883 10.3076 20.9708 10.1167 20.9476 9.92766C20.6197 7.25804 19.1604 4.94528 17.0722 3.5M6.92775 3.5C4.83963 4.94528 3.38027 7.25804 3.05244 9.92766C3.02923 10.1167 3.01169 10.3076 3 10.5',
  d3: 'M12 9.5V7',
  d4: 'M10.5 11.5L8.5 13',
  d5: 'M13.498 11.5L15.498 13',
  d6: 'M12 12.5V22',
  d7: 'M18 22H6',
  d8: 'M10.0802 3.99008L10.2419 5.50744C10.2997 6.04904 10.3277 6.61809 10.8701 6.88532C11.1028 7 11.4019 7 12 7C12.5981 7 12.8972 7 13.1299 6.88532C13.6723 6.61809 13.7003 6.04904 13.7581 5.50744L13.9198 3.99007C13.9822 3.40518 14.165 2.62965 13.6214 2.22024C13.329 2 12.886 2 12 2C11.114 2 10.671 2 10.3786 2.22024C9.83502 2.62965 10.0178 3.40518 10.0802 3.99008Z',
  d9: 'M19.0913 12.9345L17.6767 12.3093C17.1718 12.0861 16.6579 11.8231 16.1482 12.1627C15.9294 12.3085 15.7778 12.5703 15.4745 13.0938C15.1713 13.6174 15.0197 13.8791 15.0024 14.1408C14.962 14.7506 15.4476 15.0627 15.8939 15.3869L17.1445 16.2953C17.6265 16.6455 18.2149 17.1974 18.85 16.9286C19.1917 16.7839 19.4163 16.3962 19.8656 15.6206C20.3148 14.8451 20.5395 14.4573 20.4943 14.0901C20.4104 13.4074 19.6366 13.1755 19.0913 12.9345Z',
  d10: 'M4.9087 12.9345L6.32328 12.3093C6.82819 12.0861 7.34214 11.8231 7.85182 12.1627C8.07055 12.3085 8.22219 12.5703 8.52545 13.0938C8.82872 13.6174 8.98035 13.8791 8.99765 14.1408C9.03796 14.7506 8.55244 15.0627 8.10607 15.3869L6.85552 16.2953C6.37347 16.6455 5.78508 17.1974 5.14995 16.9286C4.80828 16.7839 4.58365 16.3962 4.13441 15.6206C3.68516 14.8451 3.46053 14.4573 3.5057 14.0901C3.58965 13.4074 4.36343 13.1755 4.9087 12.9345Z',
  d11: 'M10.199 3.99008L10.3507 5.50744C10.4066 6.06576 10.4345 6.34492 10.5703 6.55077C10.6633 6.69171 10.7905 6.8068 10.94 6.88532C11.1584 7 11.4389 7 12 7C12.5611 7 12.8416 7 13.06 6.88532C13.2095 6.8068 13.3367 6.69171 13.4297 6.55077C13.5655 6.34492 13.5934 6.06576 13.6493 5.50744L13.801 3.99007C13.8837 3.16301 13.9251 2.74947 13.7332 2.45461C13.6754 2.36574 13.6038 2.28663 13.5211 2.22024C13.2468 2 12.8312 2 12 2C11.1688 2 10.7532 2 10.4789 2.22024C10.3962 2.28663 10.3246 2.36574 10.2668 2.45461C10.0749 2.74947 10.1163 3.16301 10.199 3.99008Z',
  d12: 'M6.83097 16.0658L8.06918 15.1757C8.52478 14.8482 8.75258 14.6844 8.86293 14.4638C8.93849 14.3128 8.97457 14.1451 8.96782 13.9764C8.95797 13.73 8.81769 13.487 8.53714 13.0011C8.25659 12.5152 8.11632 12.2722 7.90782 12.1404C7.76508 12.0502 7.60182 11.9977 7.43326 11.9876C7.18707 11.9729 6.93135 12.0883 6.41992 12.3191L5.02997 12.9464C4.27236 13.2883 3.89355 13.4592 3.73412 13.7728C3.68607 13.8673 3.65335 13.9689 3.6372 14.0737C3.58362 14.4213 3.79142 14.7813 4.20701 15.5011C4.62261 16.2209 4.83041 16.5808 5.1583 16.7083C5.25713 16.7467 5.36144 16.7691 5.46732 16.7748C5.8186 16.7935 6.15606 16.5509 6.83097 16.0658Z',
  d13: 'M18.9699 12.9444L17.58 12.3171C17.0685 12.0863 16.8128 11.9709 16.5666 11.9856C16.3981 11.9957 16.2348 12.0483 16.092 12.1385C15.8836 12.2703 15.7433 12.5132 15.4627 12.9991C15.1822 13.4851 15.0419 13.728 15.032 13.9745C15.0253 14.1432 15.0614 14.3109 15.1369 14.4619C15.2473 14.6825 15.4751 14.8462 15.9307 15.1737L17.1689 16.0638C17.8438 16.549 18.1813 16.7916 18.5326 16.7728C18.6384 16.7672 18.7427 16.7447 18.8416 16.7063C19.1695 16.5789 19.3773 16.219 19.7929 15.4991C20.2085 14.7793 20.4163 14.4194 20.3627 14.0717C20.3465 13.9669 20.3138 13.8654 20.2657 13.7708C20.1063 13.4573 19.7275 13.2863 18.9699 12.9444Z',
  d14: 'M10.7002 11.75L8.53516 13',
  d15: 'M13.2998 11.75L15.4648 13',
  d16: 'M18.9699 12.9444L17.58 12.3171C17.0685 12.0863 16.8128 11.9709 16.5666 11.9856C16.3981 11.9957 16.2348 12.0483 16.092 12.1385C15.8836 12.2703 15.7433 12.5132 15.4627 12.9991C15.1822 13.4851 15.0419 13.728 15.032 13.9745C15.0253 14.1432 15.0614 14.3109 15.1369 14.4619C15.2473 14.6825 15.4751 14.8462 15.9307 15.1737L17.1689 16.0638C17.8438 16.549 18.1813 16.7915 18.5326 16.7728C18.6384 16.7672 18.7427 16.7447 18.8416 16.7063C19.1695 16.5789 19.3773 16.219 19.7929 15.4991C20.2085 14.7793 20.4163 14.4194 20.3627 14.0717C20.3465 13.9669 20.3138 13.8654 20.2657 13.7708C20.1063 13.4573 19.7275 13.2863 18.9699 12.9444Z',
  d17: 'M7.85627 3.15702C8.16273 3.58591 8.05223 4.17423 7.60947 4.47108C5.79731 5.68604 4.52888 7.63202 4.24389 9.88011C4.22369 10.0395 4.20841 10.2004 4.19823 10.3628C4.16559 10.8834 3.70341 11.2799 3.16593 11.2482C2.62844 11.2166 2.21918 10.7689 2.25182 10.2483C2.26443 10.0472 2.28336 9.84764 2.30843 9.64989C2.66269 6.85543 4.24002 4.43294 6.49968 2.91795C6.94245 2.6211 7.54981 2.72814 7.85627 3.15702ZM16.1437 3.15702C16.4502 2.72814 17.0576 2.6211 17.5003 2.91795C19.76 4.43294 21.3373 6.85543 21.6916 9.64989C21.7166 9.84763 21.7356 10.0472 21.7482 10.2483C21.7808 10.7689 21.3716 11.2166 20.8341 11.2482C20.2966 11.2799 19.8344 10.8834 19.8018 10.3628C19.7916 10.2004 19.7763 10.0395 19.7561 9.88011C19.4711 7.63202 18.2027 5.68604 16.3905 4.47108C15.9478 4.17423 15.8373 3.58591 16.1437 3.15702Z',
  d18: 'M12 6C12.5523 6 13 6.44772 13 7V8.98389C13.6864 9.32499 14.1738 10.0063 14.2418 10.8071L16.0991 12.2C16.5409 12.5314 16.6304 13.1582 16.2991 13.6C15.9677 14.0418 15.3409 14.1314 14.8991 13.8L13.4546 12.7166C13.3164 12.8339 13.1639 12.9347 13 13.0161V21.75C13 22.3023 12.5523 22.75 12 22.75C11.4477 22.75 11 22.3023 11 21.75V13.0161C10.836 12.9346 10.6833 12.8337 10.545 12.7163L9.10006 13.8C8.65823 14.1314 8.03143 14.0418 7.70006 13.6C7.36869 13.1582 7.45823 12.5314 7.90006 12.2L9.75821 10.8064C9.82644 10.0058 10.3139 9.32486 11 8.98387V7C11 6.44772 11.4477 6 12 6Z',
  d19: 'M5 21.75C5 21.1977 5.44772 20.75 6 20.75H18C18.5523 20.75 19 21.1977 19 21.75C19 22.3023 18.5523 22.75 18 22.75H6C5.44772 22.75 5 22.3023 5 21.75Z',
  d20: 'M11.9997 1.25C12.4111 1.24998 12.8144 1.24995 13.1126 1.28177C13.4302 1.31565 13.7702 1.3935 14.0724 1.62117C14.5939 2.01396 14.7271 2.57137 14.7468 3.00534C14.761 3.31761 14.7159 3.66876 14.6852 3.90771L14.4949 5.67168C14.4717 5.90273 14.4381 6.23652 14.3362 6.5388C14.2059 6.92543 13.9505 7.31696 13.4612 7.55809C13.2251 7.67441 12.9864 7.71523 12.7617 7.73326C12.5527 7.75004 12.25 7.75002 11.9735 7.75H11.9735C11.697 7.75002 11.4468 7.75004 11.2378 7.73326C11.0131 7.71523 10.7744 7.67441 10.5383 7.55809C10.0489 7.31696 9.79359 6.92543 9.66329 6.5388C9.56141 6.23652 9.52783 5.90273 9.50459 5.67168L9.31434 3.90771C9.28363 3.66876 9.23851 3.31761 9.25268 3.00534C9.27238 2.57137 9.40559 2.01396 9.92706 1.62117C10.2293 1.3935 10.5692 1.31565 10.8868 1.28177C11.1851 1.24995 11.5884 1.24998 11.9997 1.25Z',
  d21: 'M17.901 11.5878L19.5476 12.3131C19.7731 12.4071 20.1029 12.5444 20.369 12.714C20.7383 12.9495 21.1585 13.3458 21.2387 13.9983C21.2852 14.3765 21.1817 14.7123 21.0507 15.0069C20.9275 15.2836 20.7233 15.6362 20.5146 15.9964C20.306 16.3566 20.1018 16.7091 19.9229 16.9537C19.7324 17.2142 19.4929 17.4707 19.1425 17.6191C18.538 17.8749 17.9852 17.7115 17.5956 17.5102C17.3152 17.3653 17.0309 17.1493 16.8366 17.0016L15.3831 15.9431L15.3831 15.9431C15.1919 15.8059 14.9167 15.6085 14.7037 15.3674C14.4314 15.0594 14.2178 14.6397 14.254 14.0912C14.2715 13.8267 14.3563 13.598 14.4542 13.3926C14.5453 13.2015 14.6853 12.9599 14.8256 12.7177C14.9659 12.4755 15.1058 12.2339 15.2263 12.0597C15.3558 11.8725 15.5119 11.6853 15.7323 11.5385C16.1891 11.234 16.6588 11.2086 17.0617 11.2894C17.3773 11.3527 17.6861 11.4913 17.901 11.5878Z',
  d22: 'M8.26778 11.5385C8.4881 11.6853 8.64421 11.8725 8.77373 12.0597C8.89423 12.2339 9.04738 12.4983 9.18767 12.7405C9.32798 12.9827 9.45472 13.2015 9.54582 13.3926C9.6437 13.598 9.72855 13.8267 9.74603 14.0912C9.78229 14.6397 9.5686 15.0594 9.29636 15.3674C9.08331 15.6085 8.80819 15.8059 8.61698 15.9431L7.1635 17.0016L7.16349 17.0016C6.96914 17.1493 6.68484 17.3653 6.40442 17.5102C6.01486 17.7115 5.46208 17.8749 4.85759 17.6191C4.50713 17.4707 4.26767 17.2142 4.07715 16.9537C3.89825 16.7091 3.6941 16.3566 3.48544 15.9964C3.27675 15.6362 3.07252 15.2836 2.9494 15.0069C2.81836 14.7123 2.71481 14.3765 2.76132 13.9983C2.84156 13.3458 3.26173 12.9495 3.6311 12.714C3.89719 12.5444 4.22696 12.4071 4.45245 12.3131L4.45245 12.3131L6.09906 11.5878C6.31392 11.4913 6.62271 11.3527 6.93832 11.2894C7.34126 11.2086 7.81097 11.234 8.26778 11.5385Z',
  d23: 'M10.9991 7.70322C11.0795 7.71712 11.159 7.7261 11.2368 7.73234C11.4458 7.74911 11.696 7.7491 11.9725 7.74908C12.2491 7.7491 12.5518 7.74911 12.7608 7.73234C12.8387 7.72608 12.9184 7.71708 12.9991 7.70312V8.98297C13.6854 9.32407 14.1729 10.0053 14.2409 10.8062L15.486 11.74C15.3852 11.841 15.3008 11.95 15.2254 12.059C15.1049 12.2332 14.9649 12.4748 14.8246 12.717C14.6843 12.9592 14.5444 13.2008 14.4533 13.3919C14.4447 13.4099 14.4362 13.4281 14.4279 13.4464L13.4536 12.7157C13.3154 12.8329 13.1629 12.9338 12.999 13.0152V21.7491C12.999 22.3014 12.5513 22.7491 11.999 22.7491C11.4468 22.7491 10.999 22.3014 10.999 21.7491V13.0152C10.835 12.9337 10.6823 12.8327 10.544 12.7154L9.57002 13.4459C9.56175 13.4277 9.55336 13.4097 9.54486 13.3919C9.45376 13.2008 9.32702 12.982 9.18671 12.7398C9.04642 12.4976 8.89327 12.2332 8.77277 12.059C8.69727 11.9499 8.61274 11.8407 8.51172 11.7396L9.75726 10.8055C9.82549 10.0049 10.3129 9.32393 10.9991 8.98294V7.70322Z',
  d24: 'M8.5 13L10.25 12M15.5 13L13.75 12',
  d25: 'M9.5 2L10.5 7H13.5L14.5 2H9.5Z',
  d26: 'M5.5 17.8303L9.33013 14.4643L7.83013 11.8662L3 13.5002L5.5 17.8303Z',
  d27: 'M18.5 17.8303L14.6699 14.4643L16.1699 11.8662L21 13.5002L18.5 17.8303Z',
  d28: 'M6.00195 20.75H18.002V22.75H6.00195V20.75Z',
  d29: 'M9.75195 11C9.75195 9.75736 10.7593 8.75 12.002 8.75C13.2446 8.75 14.252 9.75736 14.252 11C14.252 12.2426 13.2446 13.25 12.002 13.25C10.7593 13.25 9.75195 12.2426 9.75195 11Z',
  d30: 'M7.49699 4.32224C5.63836 5.60868 4.3374 7.66917 4.0451 10.0495C4.02438 10.2183 4.00872 10.3887 3.99828 10.5606L2.00195 10.4394C2.01489 10.2264 2.0343 10.0151 2.06001 9.80577C2.42336 6.84689 4.04113 4.28186 6.35875 2.67773L7.49699 4.32224ZM19.9551 10.0495C19.6628 7.66917 18.3619 5.60868 16.5032 4.32224L17.6415 2.67773C19.9591 4.28186 21.5769 6.84689 21.9402 9.80577C21.9659 10.0151 21.9853 10.2264 21.9983 10.4394L20.002 10.5606C19.9915 10.3887 19.9758 10.2183 19.9551 10.0495Z',
  d31: 'M13.002 7V9.5H11.002V7H13.002Z',
  d32: 'M8.00586 12.1318L9.75586 11.1318L10.7481 12.8683L8.99814 13.8683L8.00586 12.1318ZM15.0059 13.8683L13.2559 12.8683L14.2481 11.1318L15.9981 12.1318L15.0059 13.8683Z',
  d33: 'M11.002 22V12.5H13.002V22H11.002Z',
  d34: 'M8.92195 1.52451C9.06441 1.35074 9.27726 1.25 9.50196 1.25H14.502C14.7267 1.25 14.9395 1.35074 15.082 1.52451C15.2244 1.69827 15.2815 1.92676 15.2374 2.14709L14.2374 7.14709C14.1673 7.49766 13.8595 7.75 13.502 7.75H10.502C10.1444 7.75 9.83664 7.49766 9.76652 7.14709L8.76652 2.14709C8.72246 1.92676 8.7795 1.69827 8.92195 1.52451Z',
  d35: 'M7.59174 11.1559C7.9304 11.0413 8.30285 11.1817 8.4816 11.4913L9.9816 14.0894C10.1604 14.399 10.0957 14.7917 9.82718 15.0277L5.99705 18.3938C5.82827 18.5421 5.60188 18.6069 5.38017 18.5704C5.15846 18.534 4.96478 18.4 4.85244 18.2054L2.35244 13.8753C2.24009 13.6807 2.2209 13.446 2.30016 13.2357C2.37942 13.0255 2.54877 12.8618 2.76162 12.7898L7.59174 11.1559Z',
  d36: 'M16.4122 11.1559C16.0735 11.0413 15.7011 11.1817 15.5223 11.4913L14.0223 14.0894C13.8436 14.399 13.9082 14.7917 14.1767 15.0277L18.0069 18.3938C18.1756 18.5421 18.402 18.6069 18.6237 18.5704C18.8454 18.534 19.0391 18.4 19.1515 18.2054L21.6515 13.8753C21.7638 13.6807 21.783 13.446 21.7037 13.2357C21.6245 13.0255 21.4551 12.8618 21.2423 12.7898L16.4122 11.1559Z',
} as const;

export const IconWindPowerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-stroke-rounded IconWindPowerStrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconWindPowerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-duotone-rounded IconWindPowerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d16} 
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
      />
    </TheIconWrapper>
  );
};

export const IconWindPowerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-twotone-rounded IconWindPowerTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconWindPowerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-solid-rounded IconWindPowerSolidRounded"
    >
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
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWindPowerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-bulk-rounded IconWindPowerBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWindPowerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-stroke-sharp IconWindPowerStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWindPowerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-solid-sharp IconWindPowerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWindPower: TheIconSelfPack = {
  name: 'WindPower',
  StrokeRounded: IconWindPowerStrokeRounded,
  DuotoneRounded: IconWindPowerDuotoneRounded,
  TwotoneRounded: IconWindPowerTwotoneRounded,
  SolidRounded: IconWindPowerSolidRounded,
  BulkRounded: IconWindPowerBulkRounded,
  StrokeSharp: IconWindPowerStrokeSharp,
  SolidSharp: IconWindPowerSolidSharp,
};