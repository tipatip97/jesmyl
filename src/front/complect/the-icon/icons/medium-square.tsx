import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM18 15C18.5523 15 19 13.8807 19 12.5C19 11.1193 18.5523 10 18 10C17.4477 10 17 11.1193 17 12.5C17 13.8807 17.4477 15 18 15ZM15 12.5C15 13.8807 14.3284 15 13.5 15C12.6716 15 12 13.8807 12 12.5C12 11.1193 12.6716 10 13.5 10C14.3284 10 15 11.1193 15 12.5ZM7.5 15C8.88071 15 10 13.8807 10 12.5C10 11.1193 8.88071 10 7.5 10C6.11929 10 5 11.1193 5 12.5C5 13.8807 6.11929 15 7.5 15Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM7.5 9.25C5.70507 9.25 4.25 10.7051 4.25 12.5C4.25 14.2949 5.70507 15.75 7.5 15.75C9.29493 15.75 10.75 14.2949 10.75 12.5C10.75 10.7051 9.29493 9.25 7.5 9.25ZM12.1359 10.3464C12.4413 9.77379 12.956 9.25 13.6504 9.25C14.3448 9.25 14.8595 9.77379 15.1649 10.3464C15.4782 10.9339 15.6504 11.6971 15.6504 12.5C15.6504 13.3029 15.4782 14.0661 15.1649 14.6536C14.8595 15.2262 14.3448 15.75 13.6504 15.75C12.956 15.75 12.4413 15.2262 12.1359 14.6536C11.8226 14.0661 11.6504 13.3029 11.6504 12.5C11.6504 11.6971 11.8226 10.9339 12.1359 10.3464ZM18.2358 9.25C17.8807 9.25 17.6079 9.4612 17.4281 9.68113C17.2495 9.89948 17.1186 10.1752 17.0223 10.4537C16.8282 11.0149 16.7227 11.7387 16.7227 12.5C16.7227 13.2613 16.8282 13.9851 17.0223 14.5463C17.1186 14.8248 17.2495 15.1005 17.4281 15.3189C17.6079 15.5388 17.8807 15.75 18.2358 15.75C18.591 15.75 18.8637 15.5388 19.0436 15.3189C19.2221 15.1005 19.3531 14.8248 19.4494 14.5463C19.6435 13.9851 19.749 13.2613 19.749 12.5C19.749 11.7387 19.6435 11.0149 19.4494 10.4537C19.3531 10.1752 19.2221 9.89948 19.0436 9.68113C18.8637 9.4612 18.591 9.25 18.2358 9.25Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M4.25 12.5C4.25 10.7051 5.70507 9.25 7.5 9.25C9.29493 9.25 10.75 10.7051 10.75 12.5C10.75 14.2949 9.29493 15.75 7.5 15.75C5.70507 15.75 4.25 14.2949 4.25 12.5Z',
  d6: 'M12.1359 10.3464C12.4413 9.77379 12.956 9.25 13.6504 9.25C14.3448 9.25 14.8595 9.77379 15.1649 10.3464C15.4782 10.9339 15.6504 11.6971 15.6504 12.5C15.6504 13.3029 15.4782 14.0661 15.1649 14.6536C14.8595 15.2262 14.3448 15.75 13.6504 15.75C12.956 15.75 12.4413 15.2262 12.1359 14.6536C11.8226 14.0661 11.6504 13.3029 11.6504 12.5C11.6504 11.6971 11.8226 10.9339 12.1359 10.3464Z',
  d7: 'M17.4281 9.68113C17.6079 9.4612 17.8807 9.25 18.2358 9.25C18.591 9.25 18.8637 9.4612 19.0436 9.68113C19.2221 9.89948 19.3531 10.1752 19.4494 10.4537C19.6435 11.0149 19.749 11.7387 19.749 12.5C19.749 13.2613 19.6435 13.9851 19.4494 14.5463C19.3531 14.8248 19.2221 15.1005 19.0436 15.3189C18.8637 15.5388 18.591 15.75 18.2358 15.75C17.8807 15.75 17.6079 15.5388 17.4281 15.3189C17.2495 15.1005 17.1186 14.8248 17.0223 14.5463C16.8282 13.9851 16.7227 13.2613 16.7227 12.5C16.7227 11.7387 16.8282 11.0149 17.0223 10.4537C17.1186 10.1752 17.2495 9.89948 17.4281 9.68113Z',
  d8: 'M21 3V21H3V3H21Z',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM8.5 14.5C9.88071 14.5 11 13.3807 11 12C11 10.6193 9.88071 9.5 8.5 9.5C7.11929 9.5 6 10.6193 6 12C6 13.3807 7.11929 14.5 8.5 14.5ZM15 12C15 13.3807 14.3284 14.5 13.5 14.5C12.6716 14.5 12 13.3807 12 12C12 10.6193 12.6716 9.5 13.5 9.5C14.3284 9.5 15 10.6193 15 12ZM17 14.5C17.5523 14.5 18 13.3807 18 12C18 10.6193 17.5523 9.5 17 9.5C16.4477 9.5 16 10.6193 16 12C16 13.3807 16.4477 14.5 17 14.5Z',
} as const;

export const IconMediumSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medium-square-stroke-rounded IconMediumSquareStrokeRounded"
    >
      <circle 
        cx="7.5" 
        cy="12.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <ellipse 
        cx="13.5" 
        cy="12.5" 
        rx="1.5" 
        ry="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <ellipse 
        cx="18" 
        cy="12.5" 
        rx="1" 
        ry="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMediumSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medium-square-duotone-rounded IconMediumSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="7.5" 
        cy="12.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <ellipse 
        cx="13.5" 
        cy="12.5" 
        rx="1.5" 
        ry="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <ellipse 
        cx="18" 
        cy="12.5" 
        rx="1" 
        ry="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMediumSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medium-square-twotone-rounded IconMediumSquareTwotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="7.5" 
        cy="12.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <ellipse 
        opacity="var(--icon-opacity)" 
        cx="13.5" 
        cy="12.5" 
        rx="1.5" 
        ry="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <ellipse 
        opacity="var(--icon-opacity)" 
        cx="18" 
        cy="12.5" 
        rx="1" 
        ry="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMediumSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medium-square-solid-rounded IconMediumSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMediumSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medium-square-bulk-rounded IconMediumSquareBulkRounded"
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

export const IconMediumSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medium-square-stroke-sharp IconMediumSquareStrokeSharp"
    >
      <circle 
        cx="7.5" 
        cy="12.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <ellipse 
        cx="13.5" 
        cy="12.5" 
        rx="1.5" 
        ry="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <ellipse 
        cx="18" 
        cy="12.5" 
        rx="1" 
        ry="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMediumSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medium-square-solid-sharp IconMediumSquareSolidSharp"
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

export const iconPackOfMediumSquare: TheIconSelfPack = {
  name: 'MediumSquare',
  StrokeRounded: IconMediumSquareStrokeRounded,
  DuotoneRounded: IconMediumSquareDuotoneRounded,
  TwotoneRounded: IconMediumSquareTwotoneRounded,
  SolidRounded: IconMediumSquareSolidRounded,
  BulkRounded: IconMediumSquareBulkRounded,
  StrokeSharp: IconMediumSquareStrokeSharp,
  SolidSharp: IconMediumSquareSolidSharp,
};