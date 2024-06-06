import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z',
  d2: 'M12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221721 13.2749 1.01807 6.15293 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801C11.5422 4.50096 11.8304 4.71743 12 4.71743',
  d3: 'M4.1449 3.35515C7.12587 1.52662 9.8001 2.25537 11.4156 3.46861C11.6814 3.6682 11.8638 3.8048 11.9996 3.89704C12.1354 3.8048 12.3178 3.6682 12.5836 3.46861C14.1991 2.25537 16.8734 1.52662 19.8543 3.35515C21.9156 4.61952 23.0754 7.2606 22.6684 10.2951C22.2595 13.3443 20.2859 16.7929 16.1063 19.8865C14.6549 20.9614 13.5897 21.7503 11.9996 21.7503C10.4095 21.7503 9.34433 20.9614 7.89294 19.8865C3.71334 16.7929 1.73976 13.3443 1.33081 10.2951C0.923824 7.2606 2.08365 4.61952 4.1449 3.35515Z',
  d4: 'M4.1449 3.35515C7.12587 1.52662 9.8001 2.25537 11.4156 3.46861C11.6814 3.6682 11.8638 3.8048 11.9996 3.89704L11.9996 21.7503C10.4095 21.7503 9.34433 20.9614 7.89294 19.8865C3.71334 16.7929 1.73976 13.3443 1.33081 10.2951C0.923824 7.2606 2.08365 4.61952 4.1449 3.35515Z',
  d5: 'M18.8569 3.74469C14.8652 1.60383 11.9991 4.7597 11.9991 4.7597C11.9991 4.7597 9.13283 1.60382 5.14113 3.74468C0.306417 6.33768 -0.0407534 16.492 11.9991 21C24.0389 16.492 23.6916 6.33769 18.8569 3.74469Z',
  d6: 'M11.9555 3.70846L11.9998 3.74382L12.0442 3.70847C12.4136 3.41641 12.9533 3.05091 13.6362 2.75876C15.0219 2.16593 16.9801 1.88759 19.2121 3.08157C21.9946 4.57004 23.3602 8.13312 22.4864 11.8026C21.6024 15.5144 18.4616 19.3369 12.2628 21.6518L11.9998 21.75L11.7368 21.6518C5.53805 19.3369 2.39718 15.5144 1.51321 11.8026C0.639297 8.13312 2.00488 4.57003 4.7874 3.08156C7.01942 1.88758 8.97763 2.16592 10.3634 2.75876C11.0463 3.0509 11.586 3.4164 11.9555 3.70846Z',
};

export const IconFavouriteStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="favourite-stroke-rounded IconFavouriteStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFavouriteDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="favourite-duotone-rounded IconFavouriteDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFavouriteTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="favourite-twotone-rounded IconFavouriteTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFavouriteSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="favourite-solid-rounded IconFavouriteSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFavouriteBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="favourite-bulk-rounded IconFavouriteBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFavouriteStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="favourite-stroke-sharp IconFavouriteStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFavouriteSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="favourite-solid-sharp IconFavouriteSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFavourite: TheIconSelfPack = {
  name: 'Favourite',
  StrokeRounded: IconFavouriteStrokeRounded,
  DuotoneRounded: IconFavouriteDuotoneRounded,
  TwotoneRounded: IconFavouriteTwotoneRounded,
  SolidRounded: IconFavouriteSolidRounded,
  BulkRounded: IconFavouriteBulkRounded,
  StrokeSharp: IconFavouriteStrokeSharp,
  SolidSharp: IconFavouriteSolidSharp,
};