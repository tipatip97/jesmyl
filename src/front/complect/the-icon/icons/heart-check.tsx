import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221721 13.2749 1.01807 6.15294 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801C11.5422 4.50096 11.8304 4.71743 12 4.71743C12.1696 4.71743 12.4578 4.50096 13.0344 4.06801C14.4404 3.01211 16.7809 2.34923 19.4626 3.99415C21.1812 5.04838 22.2505 7.28623 21.9494 10',
  d2: 'M14 18C14 18 15 18 16 20C16 20 19.1765 15 22 14',
  d3: 'M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12 5 12 5L9.5 3.28788C8.15537 2.82181 6.43149 2.83234 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z',
  d4: 'M22.6917 14.4164C22.876 14.937 22.6035 15.5085 22.0829 15.6929C21.5492 15.8819 20.9328 16.2888 20.2797 16.8615C19.637 17.4251 19.0118 18.1021 18.4581 18.7659C17.9062 19.4274 17.4375 20.0611 17.1064 20.5301C16.9413 20.7641 16.6811 21.1544 16.5931 21.2865C16.3998 21.5906 16.0577 21.7674 15.6979 21.749C15.3379 21.7305 15.0158 21.5198 14.8546 21.1975C14.4139 20.3161 14.0186 19.9652 13.8193 19.8323C13.735 19.7761 13.678 19.7536 13.6554 19.7459C13.147 19.6987 12.749 19.271 12.749 18.7503C12.749 18.198 13.1967 17.7503 13.749 17.7503C13.9745 17.7538 14.5261 17.8422 14.9287 18.1682C15.203 18.3511 15.4907 18.6038 15.7794 18.9497C16.0946 18.5189 16.483 18.0113 16.9223 17.4847C17.5156 16.7735 18.214 16.0129 18.961 15.3578C19.6976 14.7118 20.5371 14.1186 21.4152 13.8076C21.9358 13.6233 22.5073 13.8958 22.6917 14.4164Z',
  d5: 'M11.4161 3.46861C9.80059 2.25537 7.12636 1.52662 4.14538 3.35515C2.08414 4.61952 0.924312 7.2606 1.3313 10.2951C1.74024 13.3443 3.71383 16.7929 7.89343 19.8865C9.34482 20.9614 10.41 21.7503 12.0001 21.7503C12.4858 21.7503 12.9225 21.6767 13.3362 21.5438C13.2178 21.3457 13.1215 21.2234 13.0586 21.1533C12.0132 20.8534 11.249 19.8917 11.249 18.7502C11.249 17.3695 12.3683 16.2502 13.749 16.2502C14.1078 16.2557 14.8742 16.3553 15.5592 16.78C16.1822 16.0333 17.1468 14.9537 17.972 14.23C18.7715 13.5288 19.7781 12.7961 20.9144 12.3936C21.3384 12.2435 21.7759 12.2145 22.1891 12.2888C22.424 11.611 22.5819 10.944 22.6689 10.2951C23.0759 7.2606 21.9161 4.61952 19.8548 3.35515C16.8738 1.52662 14.1996 2.25537 12.5841 3.46861C12.3183 3.6682 12.1359 3.8048 12.0001 3.89704C11.8643 3.8048 11.6819 3.6682 11.4161 3.46861Z',
  d6: 'M13.5 17.5L16 20L22 14',
  d7: 'M11.9991 21C-0.0407534 16.492 0.306417 6.33768 5.14113 3.74468C9.13283 1.60382 11.9991 4.7597 11.9991 4.7597C11.9991 4.7597 14.8652 1.60383 18.8569 3.74469C21.1196 4.95825 22.3994 7.82799 21.8865 11',
  d8: 'M22.7487 14.7072L16.0416 21.4143L12.8345 18.2072L14.2487 16.793L16.0416 18.5859L21.3345 13.293L22.7487 14.7072Z',
  d9: 'M11.9998 3.74382C11.6304 3.45175 11.0463 3.0509 10.3634 2.75876C8.97763 2.16592 7.01942 1.88758 4.7874 3.08156C2.00488 4.57003 0.639297 8.13312 1.51321 11.8026C2.39718 15.5144 5.53805 19.3369 11.7368 21.6518L11.9998 21.75L12.2628 21.6518C12.7292 21.4776 13.1783 21.2949 13.6103 21.1044L10.7134 18.2074L14.2489 14.6719L16.0418 16.4648L21.3347 11.1719L22.3787 12.2159C22.4177 12.078 22.4536 11.9403 22.4864 11.8026C23.3602 8.13312 21.9946 4.57004 19.2121 3.08157C16.9801 1.88759 15.0219 2.16593 13.6362 2.75876C12.9533 3.05091 12.3693 3.45175 11.9998 3.74382Z',
};

export const IconHeartCheckStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-check-stroke-rounded IconHeartCheckStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconHeartCheckDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-check-duotone-rounded IconHeartCheckDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconHeartCheckTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-check-twotone-rounded IconHeartCheckTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconHeartCheckSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-check-solid-rounded IconHeartCheckSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHeartCheckBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-check-bulk-rounded IconHeartCheckBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHeartCheckStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-check-stroke-sharp IconHeartCheckStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHeartCheckSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-check-solid-sharp IconHeartCheckSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfHeartCheck: TheIconSelfPack = {
  name: 'HeartCheck',
  StrokeRounded: IconHeartCheckStrokeRounded,
  DuotoneRounded: IconHeartCheckDuotoneRounded,
  TwotoneRounded: IconHeartCheckTwotoneRounded,
  SolidRounded: IconHeartCheckSolidRounded,
  BulkRounded: IconHeartCheckBulkRounded,
  StrokeSharp: IconHeartCheckStrokeSharp,
  SolidSharp: IconHeartCheckSolidSharp,
};