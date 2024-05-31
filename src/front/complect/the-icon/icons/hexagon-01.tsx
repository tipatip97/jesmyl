import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.88231 3.32966C10.4038 2.44322 11.1646 2 12 2C12.8354 2 13.5962 2.44322 15.1177 3.32966L17.8823 4.94031C19.4038 5.82675 20.1646 6.26997 20.5823 7C21 7.73003 21 8.61647 21 10.3894V13.6106C21 15.3835 21 16.27 20.5823 17C20.1646 17.73 19.4038 18.1733 17.8823 19.0597L15.1177 20.6703C13.5962 21.5568 12.8354 22 12 22C11.1646 22 10.4038 21.5568 8.88231 20.6703L6.11769 19.0597C4.59615 18.1733 3.83538 17.73 3.41769 17C3 16.27 3 15.3835 3 13.6106V10.3894C3 8.61647 3 7.73003 3.41769 7C3.83538 6.26997 4.59615 5.82675 6.11769 4.94031L8.88231 3.32966Z',
  d2: 'M12 22C11.1646 22 10.4038 21.5568 8.88231 20.6703L6.11769 19.0597C4.59615 18.1733 3.83538 17.73 3.41769 17C3 16.27 3 15.3835 3 13.6107V10.3894C3 8.61647 3 7.73003 3.41769 7C3.83538 6.26997 4.59615 5.82675 6.11769 4.94031L8.88231 3.32966C10.4038 2.44322 11.1646 2 12 2',
  d3: 'M10.3867 1.6503C10.928 1.40283 11.4371 1.25 12 1.25C12.5629 1.25 13.072 1.40283 13.6133 1.6503C14.1321 1.88741 14.7296 2.23554 15.4628 2.66274L18.2921 4.31107C19.0255 4.73832 19.623 5.0864 20.0858 5.42109C20.5689 5.77048 20.9532 6.13799 21.2333 6.62754C21.5132 7.11674 21.6361 7.63527 21.6942 8.23069C21.75 8.80176 21.75 9.49732 21.75 10.3523V13.6477C21.75 14.5027 21.75 15.1982 21.6942 15.7693C21.6361 16.3647 21.5132 16.8833 21.2333 17.3725C20.9532 17.862 20.5689 18.2295 20.0858 18.5789C19.623 18.9136 19.0255 19.2617 18.2922 19.6889L15.4629 21.3372C14.7296 21.7644 14.1321 22.1126 13.6133 22.3497C13.072 22.5972 12.5629 22.75 12 22.75C11.4371 22.75 10.928 22.5972 10.3867 22.3497C9.86792 22.1126 9.27039 21.7644 8.53711 21.3372L5.70784 19.6889L5.70777 19.6889C4.97445 19.2617 4.37698 18.9136 3.91423 18.5789C3.43112 18.2295 3.04681 17.862 2.76671 17.3725C2.48682 16.8833 2.36393 16.3647 2.30577 15.7693C2.24998 15.1982 2.24999 14.5027 2.25 13.6477V13.6477V10.3523V10.3523C2.24999 9.49731 2.24998 8.80175 2.30577 8.23069C2.36393 7.63527 2.48682 7.11674 2.76671 6.62754C3.04681 6.13799 3.43112 5.77048 3.91423 5.42109C4.377 5.0864 4.9745 4.73831 5.70787 4.31107L8.53715 2.66275C9.27041 2.23554 9.86793 1.88742 10.3867 1.6503Z',
  d4: 'M10.3867 1.6503C10.928 1.40283 11.4371 1.25 12 1.25C12.5629 1.25 13.072 1.40283 13.6133 1.6503C14.1321 1.88741 14.7296 2.23554 15.4628 2.66274L18.2921 4.31107L18.5428 4.4572L4.21413 18.7859C4.10855 18.716 4.00859 18.6472 3.91423 18.5789C3.43112 18.2295 3.04681 17.862 2.76671 17.3725C2.48682 16.8833 2.36393 16.3647 2.30577 15.7693C2.24998 15.1982 2.24999 14.5027 2.25 13.6477V13.6477V10.3523V10.3523C2.24999 9.49731 2.24998 8.80175 2.30577 8.23069C2.36393 7.63527 2.48682 7.11674 2.76671 6.62754C3.04681 6.13799 3.43112 5.77048 3.91423 5.42109C4.377 5.0864 4.9745 4.73831 5.70787 4.31107L8.53715 2.66275C9.27041 2.23554 9.86793 1.88742 10.3867 1.6503Z',
  d5: 'M20.0865 5.42091C20.5696 5.77031 20.9539 6.13781 21.234 6.62737C21.5139 7.11656 21.6368 7.6351 21.695 8.23052C21.7507 8.80158 21.7507 9.49715 21.7507 10.3522V13.6475C21.7507 14.5025 21.7507 15.1981 21.695 15.7691C21.6368 16.3646 21.5139 16.8831 21.234 17.3723C20.9539 17.8618 20.5696 18.2293 20.0865 18.5787C19.6237 18.9134 19.0262 19.2615 18.2929 19.6887L15.4636 21.337C14.7303 21.7643 14.1328 22.1124 13.6141 22.3495C13.0727 22.597 12.5637 22.7498 12.0007 22.7498C11.4378 22.7498 10.9288 22.597 10.3874 22.3495C9.86864 22.1124 9.2711 21.7643 8.53783 21.3371L5.70856 19.6887L5.70848 19.6887C5.12469 19.3486 4.62701 19.0587 4.21484 18.7857L18.5435 4.45703C19.1635 4.81902 19.6776 5.1252 20.0865 5.42091Z',
  d6: 'M21 7L12.0001 2L3 7L3.00009 17L12.0001 22L21 17V7Z',
  d7: 'M12.0001 1.25L21.75 6.61281V17.3872L12.0001 22.75L2.2501 17.3872L2.25 6.6128L12.0001 1.25Z',
} as const;

export const IconHexagon01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-01-stroke-rounded IconHexagon01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHexagon01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-01-duotone-rounded IconHexagon01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconHexagon01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-01-twotone-rounded IconHexagon01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconHexagon01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-01-solid-rounded IconHexagon01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHexagon01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-01-bulk-rounded IconHexagon01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconHexagon01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-01-stroke-sharp IconHexagon01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHexagon01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-01-solid-sharp IconHexagon01SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHexagon01: TheIconSelfPack = {
  name: 'Hexagon01',
  StrokeRounded: IconHexagon01StrokeRounded,
  DuotoneRounded: IconHexagon01DuotoneRounded,
  TwotoneRounded: IconHexagon01TwotoneRounded,
  SolidRounded: IconHexagon01SolidRounded,
  BulkRounded: IconHexagon01BulkRounded,
  StrokeSharp: IconHexagon01StrokeSharp,
  SolidSharp: IconHexagon01SolidSharp,
};