import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221721 13.2749 1.01807 6.15294 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801C11.5422 4.50096 11.8304 4.71743 12 4.71743C12.1696 4.71743 12.4578 4.50096 13.0344 4.06801C14.4404 3.01211 16.7809 2.34923 19.4626 3.99415C21.1812 5.04838 22.2505 7.28623 21.9494 10',
  d2: 'M16 14L19 17M19 17L22 20M19 17L22 14M19 17L16 20',
  d3: 'M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12 5 12 5L9.5 3.28788C8.15537 2.82181 6.43149 2.83234 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z',
  d4: 'M15.0424 13.2934C15.4329 12.9029 16.0661 12.9029 16.4566 13.2934L18.7495 15.5863L21.0424 13.2934C21.4329 12.9029 22.0661 12.9029 22.4566 13.2934C22.8471 13.6839 22.8471 14.3171 22.4566 14.7076L20.1637 17.0005L22.4566 19.2934C22.8471 19.6839 22.8471 20.3171 22.4566 20.7076C22.0661 21.0981 21.4329 21.0981 21.0424 20.7076L18.7495 18.4147L16.4566 20.7076C16.0661 21.0981 15.4329 21.0981 15.0424 20.7076C14.6519 20.3171 14.6519 19.6839 15.0424 19.2934L17.3353 17.0005L15.0424 14.7076C14.6519 14.3171 14.6519 13.6839 15.0424 13.2934Z',
  d5: 'M11.4161 3.46861C9.80059 2.25537 7.12636 1.52662 4.14538 3.35515C2.08414 4.61952 0.924312 7.2606 1.3313 10.2951C1.74024 13.3443 3.71383 16.7929 7.89343 19.8865C9.34482 20.9614 10.41 21.7503 12.0001 21.7503C12.6253 21.7503 13.1693 21.6284 13.6876 21.415C13.018 20.4412 13.116 19.0985 13.9817 18.2327L15.214 17.0005L13.9817 15.7683C13.0054 14.7919 13.0054 13.209 13.9817 12.2327C14.9581 11.2564 16.541 11.2564 17.5173 12.2327L18.7495 13.465L19.9817 12.2327C20.6384 11.576 21.5696 11.361 22.4059 11.5878C22.525 11.1505 22.6121 10.719 22.6689 10.2951C23.0759 7.2606 21.9161 4.61952 19.8548 3.35515C16.8738 1.52662 14.1996 2.25537 12.5841 3.46861C12.3183 3.6682 12.1359 3.8048 12.0001 3.89704C11.8643 3.8048 11.6819 3.6682 11.4161 3.46861Z',
  d6: 'M11.9991 21C-0.0407534 16.492 0.306417 6.33768 5.14113 3.74468C9.13283 1.60382 11.9991 4.7597 11.9991 4.7597C11.9991 4.7597 14.8652 1.60383 18.8569 3.74469C21.1196 4.95825 22.3994 7.82799 21.8865 11',
  d7: 'M17.5864 16.9156L15.2935 14.6227L16.7077 13.2085L19.0006 15.5014L21.2935 13.2085L22.7077 14.6227L20.4148 16.9156L22.7077 19.2085L21.2935 20.6227L19.0006 18.3298L16.7077 20.6227L15.2935 19.2085L17.5864 16.9156Z',
  d8: 'M11.9998 3.74382C11.6304 3.45175 11.0463 3.0509 10.3634 2.75876C8.97763 2.16592 7.01942 1.88758 4.7874 3.08156C2.00488 4.57003 0.639297 8.13312 1.51321 11.8026C2.39718 15.5144 5.53805 19.3369 11.7368 21.6518L11.9998 21.75L12.2628 21.6518C13.0976 21.3401 13.8769 21.001 14.6026 20.6385L13.1724 19.2082L15.4653 16.9153L13.1724 14.6224L16.7079 11.0869L19.0008 13.3798L21.2937 11.0869L22.3883 12.1816C22.4237 12.0552 22.4563 11.9288 22.4864 11.8026C23.3602 8.13312 21.9946 4.57004 19.2121 3.08157C16.9801 1.88759 15.0219 2.16593 13.6362 2.75876C12.9533 3.05091 12.3693 3.45175 11.9998 3.74382Z',
} as const;

export const IconHeartRemoveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-remove-stroke-rounded IconHeartRemoveStrokeRounded"
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

export const IconHeartRemoveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-remove-duotone-rounded IconHeartRemoveDuotoneRounded"
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

export const IconHeartRemoveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-remove-twotone-rounded IconHeartRemoveTwotoneRounded"
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

export const IconHeartRemoveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-remove-solid-rounded IconHeartRemoveSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHeartRemoveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-remove-bulk-rounded IconHeartRemoveBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHeartRemoveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-remove-stroke-sharp IconHeartRemoveStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHeartRemoveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="heart-remove-solid-sharp IconHeartRemoveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfHeartRemove: TheIconSelfPack = {
  name: 'HeartRemove',
  StrokeRounded: IconHeartRemoveStrokeRounded,
  DuotoneRounded: IconHeartRemoveDuotoneRounded,
  TwotoneRounded: IconHeartRemoveTwotoneRounded,
  SolidRounded: IconHeartRemoveSolidRounded,
  BulkRounded: IconHeartRemoveBulkRounded,
  StrokeSharp: IconHeartRemoveStrokeSharp,
  SolidSharp: IconHeartRemoveSolidSharp,
};