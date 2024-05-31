import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C21.8957 6.57684 21.9897 8.11799 21.999 11',
  d2: 'M2 9H22',
  d3: 'M14 18C14 18 15 18 16 20C16 20 19.1765 15 22 14',
  d4: 'M10.5 20H13.5C17.2586 20 19.1379 20 20.3925 19.0091C20.5932 18.8506 20.7788 18.676 20.9472 18.4871C22 17.3062 22 15.5375 22 12C22 10.8169 22 9.8316 21.9606 9H2.03939C2 9.8316 2 10.8169 2 12C2 15.5375 2 17.3062 3.0528 18.4871C3.22119 18.676 3.40678 18.8506 3.60746 19.0091C4.86213 20 6.74142 20 10.5 20Z',
  d5: 'M22.8174 13.5414C23.0018 14.062 22.7292 14.6335 22.2086 14.8179C21.675 15.0069 21.0585 15.4138 20.4054 15.9865C19.7627 16.5501 19.1376 17.2271 18.5838 17.8909C18.032 18.5524 17.5632 19.1861 17.2322 19.6551C17.067 19.8891 16.937 20.0808 16.849 20.2129L16.7188 20.4115C16.5255 20.7156 16.1835 20.8924 15.8236 20.874C15.4637 20.8555 15.1415 20.6448 14.9803 20.3225C14.5396 19.4411 14.1443 19.0902 13.9451 18.9573C13.8607 18.9011 13.8038 18.8786 13.7811 18.8709C13.2727 18.8237 12.8748 18.396 12.8748 17.8753C12.8748 17.323 13.3225 16.8753 13.8748 16.8753C13.9572 16.8761 14.1618 16.8911 14.3214 16.945C14.5292 17.0044 14.7801 17.1103 15.0545 17.2932C15.3287 17.4761 15.6164 17.7288 15.9052 18.0747C16.2203 17.6439 16.6088 17.1363 17.048 16.6097C17.6413 15.8985 18.3397 15.1379 19.0867 14.4828C19.8234 13.8368 20.6628 13.2436 21.5409 12.9326C22.0615 12.7483 22.633 13.0208 22.8174 13.5414Z',
  d6: 'M10.3272 20.625C8.4882 20.625 7.04393 20.625 5.90534 20.4964C4.74317 20.3651 3.80076 20.0914 3.01738 19.4727C2.78287 19.2875 2.56544 19.0829 2.36774 18.8612C1.70156 18.114 1.40408 17.2083 1.26238 16.0972C1.12473 15.0177 1.12474 13.6517 1.12476 11.9277V11.8223C1.12475 11.2465 1.12475 10.7106 1.12987 10.2121C1.1327 9.9364 1.13412 9.79856 1.2218 9.71178C1.30948 9.625 1.44837 9.625 1.72615 9.625H22.0234C22.3011 9.625 22.44 9.625 22.5277 9.71178C22.6154 9.79856 22.6168 9.93642 22.6196 10.2121C22.6212 10.3618 22.6223 10.5149 22.623 10.6714C22.6247 11.0135 22.6255 11.1846 22.5399 11.2725C22.4544 11.3604 22.2423 11.3653 21.818 11.375C21.5594 11.3809 21.2973 11.4274 21.0401 11.5185C19.9038 11.9209 18.8972 12.6536 18.0977 13.3548C17.2725 14.0785 16.5192 14.9018 15.8962 15.6486C15.8418 15.7138 15.8145 15.7465 15.7884 15.7666C15.7114 15.8259 15.6298 15.8433 15.5353 15.8207C15.5032 15.8129 15.4606 15.7921 15.3756 15.7505C15.1633 15.6467 14.9578 15.5685 14.763 15.5111C14.4014 15.3959 14.0382 15.3765 13.8894 15.3751L13.8748 15.375C12.494 15.375 11.3748 16.4943 11.3748 17.875C11.3748 18.9957 12.1113 19.9431 13.1275 20.2611L13.132 20.2625C13.1662 20.2732 13.186 20.2794 13.2101 20.3077C13.3147 20.4307 13.2275 20.625 13.066 20.625H10.3272Z',
  d7: 'M13.4223 3.125C15.2613 3.12499 16.7056 3.12498 17.8442 3.2536C19.0064 3.38488 19.9488 3.65862 20.7321 4.27729C20.9667 4.46249 21.1841 4.66705 21.3818 4.8888C22.048 5.63601 22.3454 6.54169 22.4871 7.65285C22.5034 7.7807 22.5116 7.84463 22.4969 7.90079C22.4735 7.99053 22.4046 8.06875 22.3186 8.10335C22.2647 8.125 22.1973 8.125 22.0625 8.125H1.68699C1.55222 8.125 1.48483 8.125 1.43097 8.10335C1.34491 8.06875 1.27603 7.99054 1.2526 7.90079C1.23794 7.84463 1.24609 7.7807 1.26239 7.65285C1.40409 6.54169 1.70158 5.63601 2.36775 4.8888C2.56545 4.66705 2.78288 4.46249 3.01739 4.27729C3.80077 3.65862 4.74318 3.38488 5.90535 3.2536C7.04394 3.12498 8.48822 3.12499 10.3272 3.125H13.4223Z',
  d8: 'M10.327 20.625C8.48796 20.625 7.04368 20.625 5.90509 20.4964C4.74293 20.3651 3.80052 20.0914 3.01714 19.4727C2.78262 19.2875 2.56519 19.0829 2.36749 18.8612C1.70132 18.114 1.40383 17.2083 1.26214 16.0972C1.12449 15.0177 1.1245 13.6517 1.12451 11.9277V11.8223C1.12451 11.2465 1.1245 10.7106 1.12963 10.2121C1.13246 9.9364 1.13388 9.79856 1.22155 9.71178C1.30923 9.625 1.44812 9.625 1.7259 9.625H22.0231C22.3009 9.625 22.4398 9.625 22.5275 9.71178C22.6151 9.79856 22.6166 9.93642 22.6194 10.2121C22.6209 10.3618 22.622 10.5149 22.6228 10.6714C22.6244 11.0135 22.6252 11.1846 22.5397 11.2725C22.4542 11.3604 22.242 11.3653 21.8177 11.375C21.5591 11.3809 21.297 11.4274 21.0399 11.5185C19.9036 11.9209 18.897 12.6536 18.0975 13.3548C17.2723 14.0785 16.5189 14.9018 15.896 15.6486C15.8415 15.7138 15.8143 15.7465 15.7881 15.7666C15.7112 15.8259 15.6295 15.8433 15.5351 15.8207C15.503 15.8129 15.4604 15.7921 15.3753 15.7505C15.163 15.6467 14.9575 15.5685 14.7628 15.5111C14.4012 15.3959 14.0379 15.3765 13.8891 15.3751L13.8745 15.375C12.4938 15.375 11.3745 16.4943 11.3745 17.875C11.3745 18.9957 12.1111 19.9431 13.1272 20.2611L13.1318 20.2625C13.1659 20.2732 13.1858 20.2794 13.2098 20.3077C13.3145 20.4307 13.2273 20.625 13.0658 20.625H10.327Z',
  d9: 'M13.4232 3.125C15.2622 3.12499 16.7065 3.12498 17.8451 3.2536C19.0073 3.38488 19.9497 3.65862 20.733 4.27729C20.9676 4.46249 21.185 4.66705 21.3827 4.8888C22.0489 5.63601 22.3463 6.54169 22.488 7.65285C22.5043 7.7807 22.5125 7.84463 22.4978 7.90079C22.4744 7.99053 22.4055 8.06875 22.3195 8.10335C22.2656 8.125 22.1982 8.125 22.0634 8.125H1.68789C1.55312 8.125 1.48573 8.125 1.43187 8.10335C1.34581 8.06875 1.27693 7.99054 1.2535 7.90079C1.23884 7.84463 1.24699 7.7807 1.26329 7.65285C1.40499 6.54169 1.70247 5.63601 2.36865 4.8888C2.56635 4.66705 2.78378 4.46249 3.01829 4.27729C3.80167 3.65862 4.74408 3.38488 5.90625 3.2536C7.04484 3.12498 8.48913 3.12499 10.3281 3.125H13.4232Z',
  d10: 'M22 11V4H2V20H11',
  d11: 'M14 18L16 20L22 14',
  d12: 'M16.043 18.4218L21.3359 13.1289L22.7502 14.5431L16.043 21.2502L13.3359 18.5431L14.7502 17.1289L16.043 18.4218Z',
  d13: 'M1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H22C22.4142 2.75 22.75 3.08579 22.75 3.5V7.75H1.25V3.5Z',
  d14: 'M1.25 9.25H22.75V12.4212L21.3362 11.0073L16.0433 16.3002L14.7504 15.0073L11.2148 18.5429L12.922 20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V9.25Z',
} as const;

export const IconCreditCardAcceptStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-accept-stroke-rounded IconCreditCardAcceptStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCreditCardAcceptDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-accept-duotone-rounded IconCreditCardAcceptDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardAcceptTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-accept-twotone-rounded IconCreditCardAcceptTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardAcceptSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-accept-solid-rounded IconCreditCardAcceptSolidRounded"
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

export const IconCreditCardAcceptBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-accept-bulk-rounded IconCreditCardAcceptBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCreditCardAcceptStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-accept-stroke-sharp IconCreditCardAcceptStrokeSharp"
    >
      <path 
        d={d.d10} 
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardAcceptSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-accept-solid-sharp IconCreditCardAcceptSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCreditCardAccept: TheIconSelfPack = {
  name: 'CreditCardAccept',
  StrokeRounded: IconCreditCardAcceptStrokeRounded,
  DuotoneRounded: IconCreditCardAcceptDuotoneRounded,
  TwotoneRounded: IconCreditCardAcceptTwotoneRounded,
  SolidRounded: IconCreditCardAcceptSolidRounded,
  BulkRounded: IconCreditCardAcceptBulkRounded,
  StrokeSharp: IconCreditCardAcceptStrokeSharp,
  SolidSharp: IconCreditCardAcceptSolidSharp,
};