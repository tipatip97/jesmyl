import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d2: 'M12 7H12.8571C13.2612 7 13.4632 7 13.5888 7.12204C13.7143 7.24408 13.7143 7.4405 13.7143 7.83333C13.7143 8.61901 13.7143 9.01184 13.4632 9.25592C13.2723 9.44155 12.9929 9.486 12.5145 9.49665C12.2692 9.50211 12.1465 9.50484 12.0732 9.5777C12 9.65056 12 9.76704 12 10V11.1667C12 11.5595 12 11.7559 12.1255 11.878C12.2511 12 12.4531 12 12.8571 12H13.7143M18 7V9.5M18 9.5H16.5429C16.2196 9.5 16.058 9.5 15.9576 9.40237C15.8571 9.30474 15.8571 9.1476 15.8571 8.83333V7M18 9.5V12',
  d3: 'M10 4.30518C10.089 4.20518 10.1815 4.10717 10.2774 4.01129C12.9591 1.32957 17.307 1.32957 19.9887 4.01129C22.6704 6.693 22.6704 11.0409 19.9887 13.7226C19.8928 13.8185 19.7948 13.911 19.6948 14',
  d4: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424Z',
  d5: 'M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d6: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d7: 'M12.9643 7.75012L12.8572 7.75002H12C11.5858 7.75002 11.25 7.41423 11.25 7.00002C11.25 6.58581 11.5858 6.25002 12 6.25002H12.8572L12.8886 6.25001C13.0625 6.24993 13.2581 6.24984 13.4246 6.2716C13.6207 6.29723 13.8855 6.36451 14.1116 6.58431C14.3406 6.80698 14.4138 7.07286 14.4416 7.27342C14.4645 7.43959 14.4644 7.63385 14.4643 7.80162L14.4643 7.83335L14.4643 7.87643V7.87644C14.4644 8.23189 14.4645 8.57151 14.4259 8.85048C14.3824 9.1645 14.2779 9.51 13.9861 9.79369C13.6247 10.145 13.157 10.2187 12.75 10.2392V11.1667L12.7501 11.2499L12.8572 11.25H13.7143C14.1285 11.25 14.4643 11.5858 14.4643 12C14.4643 12.4142 14.1285 12.75 13.7143 12.75H12.8572L12.8257 12.75C12.6519 12.7501 12.4562 12.7502 12.2897 12.7284C12.0936 12.7028 11.8288 12.6355 11.6028 12.4157C11.3737 12.1931 11.3005 11.9272 11.2728 11.7266C11.2498 11.5604 11.2499 11.3662 11.25 11.1984L11.25 11.1667V10L11.25 9.97772C11.2499 9.88287 11.2497 9.74766 11.266 9.6278C11.2867 9.47549 11.3452 9.24408 11.5444 9.04599C11.7432 8.84822 11.9752 8.79145 12.1192 8.77006C12.2381 8.7524 12.374 8.7495 12.475 8.74735H12.475L12.4978 8.74685C12.7289 8.74171 12.8532 8.7285 12.9271 8.71136L12.9285 8.71102C12.9321 8.69507 12.9361 8.67351 12.94 8.64501C12.9626 8.48138 12.9643 8.24798 12.9643 7.83335L12.9643 7.75012Z',
  d8: 'M15.8572 6.25002C16.2714 6.25002 16.6072 6.58581 16.6072 7.00002V8.75002H17.25V7.00002C17.25 6.58581 17.5858 6.25002 18 6.25002C18.4143 6.25002 18.75 6.58581 18.75 7.00002V12C18.75 12.4142 18.4143 12.75 18 12.75C17.5858 12.75 17.25 12.4142 17.25 12V10.25H16.5429L16.5152 10.25C16.3789 10.2501 16.2129 10.2502 16.0695 10.2315C15.8967 10.2089 15.6483 10.1477 15.4348 9.94013C15.2183 9.72967 15.1514 9.47971 15.1268 9.30185C15.1069 9.15809 15.1071 8.99256 15.1072 8.8611L15.1072 8.83335V7.00002C15.1072 6.58581 15.443 6.25002 15.8572 6.25002Z',
  d9: 'M19.4584 4.54162C17.0696 2.15279 13.1965 2.15279 10.8077 4.54162C10.7221 4.62725 10.6396 4.71473 10.5602 4.8039C10.2847 5.11327 9.81064 5.14077 9.50128 4.86533C9.19192 4.58989 9.16442 4.11581 9.43986 3.80645C9.53851 3.69564 9.64091 3.58709 9.74704 3.48096C12.7217 0.506348 17.5444 0.506348 20.5191 3.48096C23.4937 6.45556 23.4937 11.2784 20.5191 14.253C20.4129 14.3591 20.3044 14.4615 20.1936 14.5601C19.8842 14.8356 19.4101 14.8081 19.1347 14.4987C18.8592 14.1894 18.8867 13.7153 19.1961 13.4399C19.2853 13.3604 19.3728 13.2779 19.4584 13.1923C21.8472 10.8035 21.8472 6.93044 19.4584 4.54162Z',
  d10: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L20.1109 16.4919L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d11: 'M11.5 7H13.5V9.5H11.5V12H13.5M18 7V9.5M18 9.5H15.8571V7M18 9.5V12',
  d12: 'M3.77551 11.9832L7.99024 8.01441L5.00484 2.0055C5.00201 1.99982 4.99459 1.99824 4.98961 2.00218C2.82316 3.71756 1.79712 5.5557 2.02962 7.16988C2.33279 9.27469 3.52744 12.594 6.66397 15.8717C7.79248 17.2235 9.78441 19.0206 12.0883 20.2635M12.0883 20.2635C14.5028 21.5662 17.2636 22.8078 19.6006 21.3409C20.1154 21.0177 21.5143 19.7651 21.9984 19.0459C22.0017 19.0409 21.9997 19.0343 21.9944 19.0317L16.0044 16.0208L12.0883 20.2635Z',
  d13: 'M5.08213 11.7457C5.94718 13.1708 7.02459 14.5303 8.2473 15.7521C9.46896 16.9746 10.8284 18.0523 12.2531 18.9174L15.831 15.0788L22.7492 19.0189C21.7451 20.8831 19.337 23.2672 16.2776 22.6508C14.8318 22.3591 13.4051 21.8729 11.6798 20.8831C9.94318 19.8868 8.30353 18.6143 6.84677 17.1565C5.38892 15.6997 4.11239 14.056 3.11606 12.3194C2.1262 10.5941 1.64007 9.16735 1.3483 7.72156C0.731986 4.66214 3.11606 2.25408 4.98024 1.25L8.92032 8.16817L5.08213 11.7457Z',
  d14: 'M10.75 6.25H14.25V10.25H12.25V11.25H14.25V12.75H10.75V8.75H12.75V7.75H10.75V6.25ZM16.6071 6.25V8.75H17.25V6.25H18.75V12.75H17.25V10.25H15.1071V6.25H16.6071Z',
  d15: 'M19.4584 4.54162C17.0695 2.15279 13.1965 2.15279 10.8077 4.54162C10.722 4.62725 10.6395 4.71473 10.5601 4.8039L9.43982 3.80645C9.53847 3.69564 9.64087 3.58709 9.74701 3.48096C12.7216 0.506348 17.5444 0.506348 20.519 3.48096C23.4936 6.45556 23.4936 11.2784 20.519 14.253C20.4129 14.3591 20.3043 14.4615 20.1935 14.5601L19.1961 13.4399C19.2852 13.3604 19.3727 13.2779 19.4584 13.1923C21.8472 10.8035 21.8472 6.93044 19.4584 4.54162Z',
} as const;

export const IconCustomerServiceStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-stroke-rounded IconCustomerServiceStrokeRounded"
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

export const IconCustomerServiceDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-duotone-rounded IconCustomerServiceDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
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

export const IconCustomerServiceTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-twotone-rounded IconCustomerServiceTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCustomerServiceSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-solid-rounded IconCustomerServiceSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomerServiceBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-bulk-rounded IconCustomerServiceBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomerServiceStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-stroke-sharp IconCustomerServiceStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
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

export const IconCustomerServiceSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-solid-sharp IconCustomerServiceSolidSharp"
    >
      <path 
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

export const iconPackOfCustomerService: TheIconSelfPack = {
  name: 'CustomerService',
  StrokeRounded: IconCustomerServiceStrokeRounded,
  DuotoneRounded: IconCustomerServiceDuotoneRounded,
  TwotoneRounded: IconCustomerServiceTwotoneRounded,
  SolidRounded: IconCustomerServiceSolidRounded,
  BulkRounded: IconCustomerServiceBulkRounded,
  StrokeSharp: IconCustomerServiceStrokeSharp,
  SolidSharp: IconCustomerServiceSolidSharp,
};