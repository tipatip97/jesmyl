import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d2: 'M19.9643 10.8847C19.9643 8.16939 20.0323 7.43003 18.3826 6.25657C17.5717 5.67983 15.9405 5.29988 13.7377 5.50501M15.479 2.98291L13.173 5.12812C12.9781 5.3216 12.9767 5.63579 13.1697 5.83106L15.479 8.01055',
  d3: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424Z',
  d4: 'M12.0576 20.2226C13.7107 21.1706 15.0605 21.6284 16.4288 21.9044C18.4524 22.3126 20.4292 21.3784 21.6905 19.8308C22.2236 19.1768 22.0415 18.427 21.3476 18.0402L19.7811 17.167C18.5394 16.4749 17.9186 16.1289 17.2604 16.1975C16.6022 16.2661 16.0661 16.7328 14.994 17.6662L12.0576 20.2226Z',
  d5: 'M19.9687 10.9223C19.9687 8.20699 20.0367 7.46763 18.387 6.29417C17.5761 5.71743 15.9449 5.33748 13.7421 5.54261M15.4834 3.02051L13.1774 5.16572C12.9825 5.3592 12.9811 5.67339 13.1741 5.86866L15.4834 8.04815',
  d6: 'M19.9638 10.8842C19.9638 8.1689 20.0318 7.42954 18.3821 6.25608C17.5713 5.67934 15.94 5.2994 13.7372 5.50453M15.4785 2.98242L13.1725 5.12763C12.9776 5.32111 12.9762 5.6353 13.1692 5.83057L15.4785 8.01006',
  d7: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d8: 'M15.8764 2.10734C15.3446 1.8484 14.8882 2.13341 14.8145 2.17939L14.8103 2.18201C14.705 2.24726 14.5952 2.33665 14.5323 2.38793L14.5155 2.40155C14.4362 2.46586 14.3437 2.53941 14.2425 2.61986C13.9075 2.88616 13.4774 3.2281 13.1154 3.56092C12.8768 3.78023 12.6288 4.02998 12.4332 4.2898C12.2676 4.50982 12 4.91403 12 5.41489C12 5.91576 12.2676 6.31996 12.4332 6.53999C12.6288 6.7998 12.8768 7.04956 13.1154 7.26887C13.4774 7.60168 13.9075 7.94361 14.2425 8.20991C14.3435 8.29028 14.4363 8.36399 14.5155 8.42824L14.5323 8.44186C14.5953 8.49314 14.705 8.58253 14.8103 8.64777L14.8145 8.6504C14.8882 8.69638 15.3446 8.98138 15.8764 8.72245C16.406 8.46466 16.4729 7.93015 16.4842 7.84034L16.4847 7.83622C16.5005 7.7119 16.5002 7.56939 16.5 7.48941L16.5 7.46811V6.47006C17.9189 6.71121 19 7.96134 19 9.46729V10.9869C19 11.5464 19.4477 12 20 12C20.5523 12 21 11.5464 21 10.9869V9.46729C21 6.84069 19.0267 4.68102 16.5 4.42688L16.5 3.36168L16.5 3.34039C16.5002 3.26041 16.5005 3.11789 16.4847 2.99357L16.4842 2.98945C16.4729 2.89964 16.406 2.36513 15.8764 2.10734Z',
  d9: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L20.1109 16.4919L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d10: 'M19.9996 10.999V9.49902C19.9996 7.28988 18.2088 5.49902 15.9996 5.49902H13.5955M15.4996 2.99902L12.9996 5.49902L15.4996 7.99902',
  d11: 'M3.77685 11.9812L7.99158 8.01246L5.00618 2.00355C5.00336 1.99786 4.99593 1.99629 4.99095 2.00023C2.8245 3.71561 1.79846 5.55375 2.03096 7.16793C2.33413 9.27274 3.52878 12.5921 6.66532 15.8698C7.79383 17.2216 9.78575 19.0186 12.0897 20.2616M12.0897 20.2616C14.5042 21.5642 17.2649 22.8058 19.6019 21.3389C20.1167 21.0158 21.5157 19.7631 21.9997 19.0439C22.003 19.0389 22.0011 19.0324 21.9957 19.0297L16.0058 16.0189L12.0897 20.2616Z',
  d12: 'M5.08213 11.7457C5.94718 13.1708 7.02459 14.5303 8.2473 15.7521C9.46896 16.9746 10.8284 18.0523 12.2531 18.9174L15.831 15.0788L22.7492 19.0189C21.7451 20.8831 19.337 23.2672 16.2776 22.6508C14.8318 22.3591 13.4051 21.8729 11.6798 20.8831C9.94318 19.8868 8.30353 18.6143 6.84677 17.1565C5.38892 15.6997 4.11239 14.056 3.11606 12.3194C2.1262 10.5941 1.64007 9.16735 1.3483 7.72156C0.731986 4.66214 3.11606 2.25408 4.98024 1.25L8.92032 8.16817L5.08213 11.7457Z',
  d13: 'M14.7929 2.29297L16.2071 3.70718L15.4142 4.50008H16C18.7615 4.50008 21 6.73865 21 9.50008V11.0001H19V9.50008C19 7.84322 17.6569 6.50008 16 6.50008H15.4142L16.2071 7.29297L14.7929 8.70718L11.5858 5.50008L14.7929 2.29297Z',
};

export const IconCallReceivedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-received-stroke-rounded IconCallReceivedStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCallReceivedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-received-duotone-rounded IconCallReceivedDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallReceivedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-received-twotone-rounded IconCallReceivedTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallReceivedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-received-solid-rounded IconCallReceivedSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallReceivedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-received-bulk-rounded IconCallReceivedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallReceivedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-received-stroke-sharp IconCallReceivedStrokeSharp"
    >
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

export const IconCallReceivedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-received-solid-sharp IconCallReceivedSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCallReceived: TheIconSelfPack = {
  name: 'CallReceived',
  StrokeRounded: IconCallReceivedStrokeRounded,
  DuotoneRounded: IconCallReceivedDuotoneRounded,
  TwotoneRounded: IconCallReceivedTwotoneRounded,
  SolidRounded: IconCallReceivedSolidRounded,
  BulkRounded: IconCallReceivedBulkRounded,
  StrokeSharp: IconCallReceivedStrokeSharp,
  SolidSharp: IconCallReceivedSolidSharp,
};