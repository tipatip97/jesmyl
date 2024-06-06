import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d2: 'M15.5312 6.35997V4.95232C15.5312 3.87408 16.4127 3 17.5 3C17.9887 3 18.4359 3.1766 18.7801 3.46895M16.8437 12H18.1563C19.1777 12 19.6884 12 20.0749 11.7951C20.3802 11.6333 20.6302 11.3854 20.7934 11.0827C21 10.6993 21 10.1929 21 9.17998C21 8.16711 21 7.66067 20.7934 7.2773C20.6302 6.9746 20.3802 6.72668 20.0749 6.56488C19.6884 6.35997 19.1777 6.35997 18.1563 6.35997H16.8437C15.8223 6.35997 15.3116 6.35997 14.9251 6.56488C14.6198 6.72668 14.3698 6.9746 14.2066 7.2773C14 7.66067 14 8.16711 14 9.17998C14 10.1929 14 10.6993 14.2066 11.0827C14.3698 11.3854 14.6198 11.6333 14.9251 11.7951C15.3116 12 15.8223 12 16.8437 12Z',
  d3: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424Z',
  d4: 'M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d5: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d6: 'M14.7813 4.95232C14.7813 3.45396 16.0044 2.25 17.5 2.25C18.1725 2.25 18.7904 2.49372 19.2656 2.89733C19.5813 3.16548 19.6198 3.63879 19.3517 3.95449C19.0835 4.27019 18.6102 4.30873 18.2945 4.04058C18.0813 3.85948 17.8049 3.75 17.5 3.75C16.821 3.75 16.2813 4.29421 16.2813 4.95232V5.61162C16.4472 5.60996 16.6244 5.60996 16.8129 5.60997H18.1871C18.6715 5.60996 19.0813 5.60994 19.4167 5.63824C19.7683 5.66789 20.1063 5.73264 20.4262 5.90222C20.8618 6.13313 21.2197 6.48753 21.4536 6.92145C21.6257 7.24083 21.6914 7.57833 21.7214 7.92848C21.75 8.2619 21.75 8.66893 21.75 9.14877V9.2112C21.75 9.69104 21.75 10.0981 21.7214 10.4315C21.6914 10.7816 21.6257 11.1191 21.4536 11.4385C21.2197 11.8724 20.8618 12.2268 20.4262 12.4578C20.1063 12.6273 19.7683 12.6921 19.4167 12.7217C19.0813 12.75 18.6715 12.75 18.1871 12.75H18.1871H16.8129H16.8129C16.3285 12.75 15.9187 12.75 15.5833 12.7217C15.2317 12.6921 14.8937 12.6273 14.5738 12.4578C14.1382 12.2268 13.7803 11.8724 13.5464 11.4385C13.3743 11.1191 13.3086 10.7816 13.2786 10.4315C13.25 10.0981 13.25 9.69105 13.25 9.21122V9.21119V9.14878V9.14875C13.25 8.66892 13.25 8.2619 13.2786 7.92848C13.3086 7.57833 13.3743 7.24083 13.5464 6.92145C13.7803 6.48753 14.1382 6.13313 14.5738 5.90222C14.6421 5.86599 14.7113 5.83455 14.7813 5.80722V4.95232Z',
  d7: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L20.1109 16.4919L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d8: 'M15.5006 5.5V4C15.5006 2.89543 16.396 2 17.5006 2C18.0979 2 18.6341 2.26188 19.0006 2.67709M14.0006 5.5H21.0006V11H14.0006V5.5Z',
  d9: 'M3.77685 11.9812L7.99158 8.01246L5.00618 2.00355C5.00336 1.99786 4.99593 1.99629 4.99095 2.00023C2.8245 3.71561 1.79846 5.55375 2.03096 7.16793C2.33413 9.27274 3.52878 12.5921 6.66532 15.8698C7.79383 17.2216 9.78575 19.0186 12.0897 20.2616M12.0897 20.2616C14.5042 21.5642 17.2649 22.8058 19.6019 21.3389C20.1167 21.0158 21.5157 19.7631 21.9997 19.0439C22.003 19.0389 22.0011 19.0324 21.9957 19.0297L16.0058 16.0189L12.0897 20.2616Z',
  d10: 'M5.08213 11.7457C5.94718 13.1708 7.02459 14.5303 8.2473 15.7521C9.46896 16.9746 10.8284 18.0523 12.2531 18.9174L15.831 15.0788L22.7492 19.0189C21.7451 20.8831 19.337 23.2672 16.2776 22.6508C14.8318 22.3591 13.4051 21.8729 11.6798 20.8831C9.94318 19.8868 8.30353 18.6143 6.84677 17.1565C5.38892 15.6997 4.11239 14.056 3.11606 12.3194C2.1262 10.5941 1.64007 9.16735 1.3483 7.72156C0.731986 4.66214 3.11606 2.25408 4.98024 1.25L8.92032 8.16817L5.08213 11.7457Z',
  d11: 'M14.75 4C14.75 2.48122 15.9812 1.25 17.5 1.25C18.3215 1.25 19.0595 1.61112 19.5623 2.18079L18.4377 3.17339C18.2076 2.91264 17.8732 2.75 17.5 2.75C16.8096 2.75 16.25 3.30964 16.25 4V4.75H21.75V11.75H13.25V4.75H14.75V4Z',
} as const;

export const IconCallUnlockedStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-unlocked-stroke-rounded IconCallUnlockedStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCallUnlockedDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-unlocked-duotone-rounded IconCallUnlockedDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconCallUnlockedTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-unlocked-twotone-rounded IconCallUnlockedTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCallUnlockedSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-unlocked-solid-rounded IconCallUnlockedSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallUnlockedBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-unlocked-bulk-rounded IconCallUnlockedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallUnlockedStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-unlocked-stroke-sharp IconCallUnlockedStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallUnlockedSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-unlocked-solid-sharp IconCallUnlockedSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCallUnlocked: TheIconSelfPack = {
  name: 'CallUnlocked',
  StrokeRounded: IconCallUnlockedStrokeRounded,
  DuotoneRounded: IconCallUnlockedDuotoneRounded,
  TwotoneRounded: IconCallUnlockedTwotoneRounded,
  SolidRounded: IconCallUnlockedSolidRounded,
  BulkRounded: IconCallUnlockedBulkRounded,
  StrokeSharp: IconCallUnlockedStrokeSharp,
  SolidSharp: IconCallUnlockedSolidSharp,
};