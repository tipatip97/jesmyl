import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 5C18.3284 5 19 5.67157 19 6.5C19 7.32843 18.3284 8 17.5 8C16.6716 8 16 7.32843 16 6.5C16 5.67157 16.6716 5 17.5 5Z',
  d2: 'M2.77423 11.1439C1.77108 12.2643 1.7495 13.9546 2.67016 15.1437C4.49711 17.5033 6.49674 19.5029 8.85633 21.3298C10.0454 22.2505 11.7357 22.2289 12.8561 21.2258C15.8979 18.5022 18.6835 15.6559 21.3719 12.5279C21.6377 12.2187 21.8039 11.8397 21.8412 11.4336C22.0062 9.63798 22.3452 4.46467 20.9403 3.05974C19.5353 1.65481 14.362 1.99377 12.5664 2.15876C12.1603 2.19608 11.7813 2.36233 11.472 2.62811C8.34412 5.31646 5.49781 8.10211 2.77423 11.1439Z',
  d3: 'M13.7884 12.3665C13.8097 11.9655 13.9222 11.232 13.3125 10.6744M13.3125 10.6744C13.1238 10.5019 12.866 10.3462 12.5149 10.2225C11.2583 9.77958 9.71484 11.2619 10.8067 12.6188C11.3936 13.3482 11.8461 13.5725 11.8035 14.4008C11.7735 14.9834 11.2012 15.5922 10.4469 15.824C9.7916 16.0255 9.06876 15.7588 8.61156 15.2479C8.05332 14.6241 8.1097 14.0361 8.10492 13.7798M13.3125 10.6744L14.0006 9.98633M8.66131 15.3256L8.00781 15.9791',
  d4: 'M2.86059 15.1437C1.93993 13.9546 1.96151 12.2643 2.96466 11.1439C5.68824 8.10211 8.53455 5.31646 11.6624 2.62811C11.9717 2.36233 12.3507 2.19608 12.7568 2.15876C14.5524 1.99377 19.7257 1.65481 21.1307 3.05974C22.5356 4.46467 22.1966 9.63798 22.0316 11.4336C21.9943 11.8397 21.8281 12.2187 21.5623 12.5279C18.8739 15.6559 16.0883 18.5022 13.0465 21.2258C11.9261 22.2289 10.2358 22.2505 9.04676 21.3298C6.68717 19.5029 4.68754 17.5033 2.86059 15.1437ZM17.6904 5C18.5188 5 19.1904 5.67157 19.1904 6.5C19.1904 7.32843 18.5188 8 17.6904 8C16.862 8 16.1904 7.32843 16.1904 6.5C16.1904 5.67157 16.862 5 17.6904 5Z',
  d5: 'M17.6904 5C18.5189 5 19.1904 5.67157 19.1904 6.5C19.1904 7.32843 18.5189 8 17.6904 8C16.862 8 16.1904 7.32843 16.1904 6.5C16.1904 5.67157 16.862 5 17.6904 5Z',
  d6: 'M2.96466 11.1439C1.96151 12.2643 1.93993 13.9546 2.86059 15.1437C4.68754 17.5033 6.68717 19.5029 9.04676 21.3298C10.2358 22.2505 11.9261 22.2289 13.0465 21.2258C16.0883 18.5022 18.8739 15.6559 21.5623 12.5279C21.8281 12.2187 21.9943 11.8397 22.0316 11.4336C22.1966 9.63798 22.5356 4.46467 21.1307 3.05974C19.7257 1.65481 14.5524 1.99377 12.7568 2.15876C12.3507 2.19608 11.9717 2.36233 11.6624 2.62811C8.53455 5.31646 5.68824 8.10211 2.96466 11.1439Z',
  d7: 'M13.9749 12.3841C13.9962 11.9831 14.1087 11.2496 13.499 10.692M13.499 10.692C13.3103 10.5195 13.0525 10.3638 12.7014 10.2401C11.4448 9.79716 9.90137 11.2795 10.9932 12.6364C11.5801 13.3658 12.0326 13.5901 11.99 14.4184C11.96 15.001 11.3877 15.6098 10.6334 15.8416C9.97813 16.0431 9.25529 15.7764 8.79809 15.2655C8.23985 14.6417 8.29623 14.0537 8.29145 13.7974M13.499 10.692L14.1871 10.0039M8.84784 15.3432L8.19434 15.9967',
  d8: 'M11.0863 12.9089L11.6162 12.3782L11.0863 12.9089ZM13.3332 10.6657L12.8033 11.1965L13.3332 10.6657ZM11.218 15.4562L11.7479 15.987L11.218 15.4562ZM8.66654 15.3247L9.19643 14.7939L8.66654 15.3247ZM14.5299 10.5308C14.823 10.2381 14.8234 9.76324 14.5308 9.47011C14.2381 9.17697 13.7632 9.17658 13.4701 9.46923L14.5299 10.5308ZM7.47011 15.4594C7.17697 15.752 7.17658 16.2269 7.46923 16.52C7.76189 16.8132 8.23676 16.8136 8.52989 16.5209L7.47011 15.4594ZM13.0644 12.1568C12.9548 12.5563 13.1898 12.9689 13.5893 13.0785C13.9887 13.1881 14.4014 12.9531 14.511 12.5536L13.0644 12.1568ZM8.82372 13.8411C8.86014 13.4285 8.55518 13.0645 8.14257 13.0281C7.72996 12.9916 7.36595 13.2966 7.32953 13.7092L8.82372 13.8411ZM11.6162 12.3782C11.2265 11.9891 11.1584 11.7557 11.1528 11.6524C11.1486 11.5741 11.1725 11.427 11.4234 11.1766L10.3636 10.115C9.9463 10.5317 9.61938 11.0697 9.655 11.7329C9.68929 12.3712 10.0517 12.9358 10.5564 13.4397L11.6162 12.3782ZM11.4234 11.1766C11.7907 10.8099 12.4087 10.8025 12.8033 11.1965L13.8631 10.1349C12.8993 9.17271 11.3327 9.14751 10.3636 10.115L11.4234 11.1766ZM10.6881 14.9255C10.3909 15.2222 10.1553 15.2655 9.97835 15.2459C9.76713 15.2226 9.49422 15.0912 9.19643 14.7939L8.13664 15.8555C8.57981 16.2979 9.15055 16.6637 9.81378 16.7369C10.5113 16.8139 11.181 16.553 11.7479 15.987L10.6881 14.9255ZM10.5564 13.4397C10.9524 13.835 11.0529 14.0944 11.0635 14.2462C11.0719 14.3673 11.0336 14.5806 10.6881 14.9255L11.7479 15.987C12.2667 15.4691 12.6097 14.8552 12.5598 14.1416C12.5121 13.4587 12.1146 12.8757 11.6162 12.3782L10.5564 13.4397ZM13.8631 11.1965L14.5299 10.5308L13.4701 9.46923L12.8033 10.1349L13.8631 11.1965ZM8.13664 14.7939L7.47011 15.4594L8.52989 16.5209L9.19643 15.8555L8.13664 14.7939ZM12.8033 11.1965C13.0689 11.4616 13.1535 11.8318 13.0644 12.1568L14.511 12.5536C14.7394 11.7208 14.5196 10.7903 13.8631 10.1349L12.8033 11.1965ZM9.19643 14.7939C8.91097 14.509 8.79655 14.149 8.82372 13.8411L7.32953 13.7092C7.26204 14.4739 7.54709 15.2669 8.13664 15.8555L9.19643 14.7939Z',
  d9: 'M19.4595 1.57208C20.2081 1.74401 20.9663 2.0252 21.4705 2.5294C21.9747 3.0336 22.2559 3.79184 22.4279 4.54046C22.6055 5.3138 22.6927 6.19907 22.7288 7.06907C22.8011 8.81159 22.6717 10.5921 22.588 11.5022C22.5359 12.0702 22.3035 12.5946 21.9406 13.0168C19.2313 16.1691 16.4228 19.0388 13.3563 21.7845C11.9532 23.0408 9.85825 23.0541 8.39712 21.9228C5.98744 20.0571 3.94283 18.0125 2.07709 15.6028C0.945789 14.1417 0.959114 12.0467 2.21543 10.6436C4.9611 7.57712 7.83082 4.76863 10.9831 2.05931C11.4053 1.69644 11.9298 1.46408 12.4977 1.4119C13.4078 1.32827 15.1884 1.19887 16.9309 1.27116C17.8009 1.30725 18.6861 1.39446 19.4595 1.57208ZM19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8C18.3284 8 19 7.32843 19 6.5ZM14.5299 10.5308C14.823 10.2381 14.8234 9.76324 14.5308 9.47011C14.2381 9.17697 13.7632 9.17658 13.4701 9.46923L13.2527 9.68625C12.3222 9.19934 11.1475 9.33245 10.3636 10.115C9.9463 10.5317 9.61938 11.0697 9.655 11.7329C9.68929 12.3712 10.0517 12.9358 10.5564 13.4397C10.9524 13.835 11.0529 14.0944 11.0635 14.2462C11.0719 14.3673 11.0336 14.5806 10.6881 14.9255C10.3909 15.2222 10.1553 15.2655 9.97835 15.2459C9.76713 15.2226 9.49422 15.0912 9.19643 14.7939C8.91097 14.509 8.79655 14.149 8.82372 13.8411C8.86014 13.4285 8.55518 13.0645 8.14257 13.0281C7.72996 12.9916 7.36595 13.2966 7.32953 13.7092C7.28304 14.2359 7.40382 14.7761 7.67618 15.2536L7.47011 15.4594C7.17697 15.752 7.17658 16.2269 7.46923 16.52C7.76189 16.8132 8.23676 16.8136 8.52989 16.5209L8.72008 16.331C9.04567 16.5414 9.41282 16.6926 9.81378 16.7369C10.5113 16.8139 11.181 16.553 11.7479 15.987C12.2667 15.4691 12.6097 14.8552 12.5598 14.1416C12.5121 13.4587 12.1146 12.8757 11.6162 12.3782C11.2265 11.9891 11.1584 11.7557 11.1528 11.6524C11.1486 11.5741 11.1725 11.427 11.4234 11.1766C11.7907 10.8099 12.4087 10.8025 12.8033 11.1965C13.0689 11.4616 13.1535 11.8318 13.0644 12.1568C12.9548 12.5563 13.1898 12.9689 13.5893 13.0785C13.9887 13.1881 14.4014 12.9531 14.511 12.5536C14.675 11.9555 14.6079 11.3071 14.3139 10.7464L14.5299 10.5308Z',
  d10: 'M21.4705 2.5294C20.9663 2.0252 20.2081 1.74401 19.4595 1.57208C18.6861 1.39446 17.8009 1.30725 16.9309 1.27116C15.1884 1.19887 13.4078 1.32827 12.4977 1.4119C11.9298 1.46408 11.4053 1.69644 10.9831 2.05931C7.83082 4.76863 4.9611 7.57712 2.21543 10.6436C0.959114 12.0467 0.945789 14.1417 2.07709 15.6028C3.94283 18.0125 5.98744 20.0571 8.39712 21.9228C9.85825 23.0541 11.9532 23.0408 13.3563 21.7845C16.4228 19.0388 19.2313 16.1691 21.9406 13.0168C22.3035 12.5946 22.5359 12.0702 22.588 11.5022C22.6717 10.5921 22.8011 8.81159 22.7288 7.06907C22.6927 6.19907 22.6055 5.3138 22.4279 4.54046C22.2559 3.79184 21.9747 3.0336 21.4705 2.5294ZM17.5 5C18.3284 5 19 5.67157 19 6.5C19 7.32843 18.3284 8 17.5 8C16.6716 8 16 7.32843 16 6.5C16 5.67157 16.6716 5 17.5 5Z',
  d11: 'M14.5308 9.47011C14.8234 9.76324 14.823 10.2381 14.5299 10.5308L14.3139 10.7464C14.6079 11.3071 14.675 11.9555 14.511 12.5536C14.4014 12.9531 13.9887 13.1881 13.5893 13.0785C13.1898 12.9689 12.9548 12.5563 13.0644 12.1568C13.1535 11.8318 13.0689 11.4616 12.8033 11.1965C12.4087 10.8025 11.7907 10.8099 11.4234 11.1766C11.1725 11.427 11.1486 11.5741 11.1528 11.6524C11.1584 11.7557 11.2265 11.9891 11.6162 12.3782C12.1146 12.8757 12.5121 13.4587 12.5598 14.1416C12.6097 14.8552 12.2667 15.4691 11.7479 15.987C11.181 16.553 10.5113 16.8139 9.81378 16.7369C9.41283 16.6926 9.04567 16.5414 8.72008 16.331L8.52989 16.5209C8.23676 16.8136 7.76189 16.8132 7.46923 16.52C7.17658 16.2269 7.17697 15.752 7.47011 15.4594L7.67618 15.2536C7.40382 14.7761 7.28304 14.2359 7.32953 13.7092C7.36595 13.2966 7.72996 12.9916 8.14257 13.0281C8.55518 13.0645 8.86014 13.4285 8.82372 13.8411C8.79655 14.149 8.91097 14.509 9.19643 14.7939C9.49422 15.0912 9.76713 15.2226 9.97835 15.2459C10.1553 15.2655 10.3909 15.2222 10.6881 14.9255C11.0336 14.5806 11.0719 14.3673 11.0635 14.2462C11.0529 14.0944 10.9524 13.835 10.5564 13.4397C10.0517 12.9358 9.68929 12.3712 9.655 11.7329C9.61938 11.0697 9.9463 10.5317 10.3636 10.115C11.1475 9.33245 12.3222 9.19934 13.2527 9.68625L13.4701 9.46923C13.7632 9.17658 14.2381 9.17697 14.5308 9.47011Z',
  d12: 'M18.999 6.5C18.999 5.67157 18.3275 5 17.499 5C16.6706 5 15.999 5.67157 15.999 6.5C15.999 7.32843 16.6706 8 17.499 8C18.3275 8 18.999 7.32843 18.999 6.5Z',
  d13: 'M13.9999 9.99917C13.4177 9.41795 12.4815 9.41031 11.9087 9.98211C11.336 10.5539 11.3073 11.1566 12.074 11.9219C12.8406 12.6873 12.9276 13.3658 12.1869 14.1053C11.4461 14.8449 10.635 14.6267 9.99989 13.9926M13.9999 9.99917L15 9M13.9999 9.99917C14.3951 10.3937 14.5255 10.9511 14.3894 11.4473M9.99989 13.9926L9 15M9.99989 13.9926C9.62488 13.6182 9.45368 13.1241 9.49425 12.6644',
  d14: 'M22 2H11.9936C11.9671 2 11.9417 2.01055 11.923 2.02934L2.02926 11.9495C1.9902 11.9887 1.99025 12.0522 2.02939 12.0913L11.9177 21.9708C11.9568 22.0098 12.0199 22.0097 12.0589 21.9707L21.9707 12.0316C21.9895 12.0128 22 11.9873 22 11.9608V2Z',
  d15: 'M11.4697 1.46967C11.6103 1.32902 11.8011 1.25 12 1.25H22.75V12C22.75 12.1989 22.671 12.3897 22.5303 12.5304L12.5304 22.5303C12.2375 22.8232 11.7626 22.8232 11.4697 22.5303L1.46967 12.5303C1.32902 12.3896 1.25 12.1989 1.25 12C1.25 11.8011 1.32902 11.6103 1.46967 11.4696L11.4697 1.46967ZM20 5.5C20 4.67157 19.3284 4 18.5 4C17.6716 4 17 4.67157 17 5.5C17 6.32843 17.6716 7 18.5 7C19.3284 7 20 6.32843 20 5.5ZM15.5311 9.53064L14.9719 10.0893C15.2062 10.5773 15.2547 11.1321 15.1138 11.6458L13.6672 11.249C13.7337 11.0067 13.6708 10.7294 13.4711 10.53C13.1735 10.2329 12.7115 10.2416 12.4397 10.5129C12.2365 10.7158 12.2377 10.8139 12.2391 10.8393C12.2418 10.8895 12.2791 11.0659 12.6049 11.3912C13.0394 11.825 13.4014 12.3478 13.4449 12.9711C13.4906 13.6251 13.1749 14.1799 12.7178 14.6362C12.2126 15.1406 11.6076 15.3797 10.9725 15.3096C10.6408 15.273 10.3366 15.1559 10.065 14.9928L9.53337 15.5284L8.46875 14.4717L9.02088 13.9154C8.80383 13.5051 8.70863 13.047 8.74822 12.5985L10.2424 12.7304C10.222 12.9617 10.3079 13.2393 10.5308 13.4619C10.7757 13.7064 10.9884 13.8022 11.1371 13.8187C11.2516 13.8313 11.4225 13.8098 11.658 13.5746C11.9417 13.2914 11.9529 13.1372 11.9486 13.0757C11.9421 12.9835 11.8772 12.7843 11.5451 12.4528C11.1043 12.0127 10.7727 11.5051 10.7412 10.9197C10.7084 10.3094 11.0103 9.82039 11.3799 9.45141C12.0667 8.76572 13.0853 8.63387 13.9107 9.02925L14.471 8.46948L15.5311 9.53064Z',
};

export const IconSaleTag02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-02-stroke-rounded IconSaleTag02StrokeRounded"
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

export const IconSaleTag02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-02-duotone-rounded IconSaleTag02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSaleTag02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-02-twotone-rounded IconSaleTag02TwotoneRounded"
    >
      <circle 
        cx="1.5" 
        cy="1.5" 
        r="1.5" 
        transform="matrix(1 0 0 1 16 8)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSaleTag02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-02-solid-rounded IconSaleTag02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSaleTag02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-02-bulk-rounded IconSaleTag02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSaleTag02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-02-stroke-sharp IconSaleTag02StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSaleTag02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sale-tag-02-solid-sharp IconSaleTag02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSaleTag02: TheIconSelfPack = {
  name: 'SaleTag02',
  StrokeRounded: IconSaleTag02StrokeRounded,
  DuotoneRounded: IconSaleTag02DuotoneRounded,
  TwotoneRounded: IconSaleTag02TwotoneRounded,
  SolidRounded: IconSaleTag02SolidRounded,
  BulkRounded: IconSaleTag02BulkRounded,
  StrokeSharp: IconSaleTag02StrokeSharp,
  SolidSharp: IconSaleTag02SolidSharp,
};