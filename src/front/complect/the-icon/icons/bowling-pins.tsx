import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 10.544C13.2611 10.1947 14.1078 10 15 10C18.3137 10 21 12.6863 21 16C21 19.3137 18.3137 22 15 22C14.4821 22 13.9794 21.9344 13.5 21.811',
  d2: 'M17.991 15H18M15 15H15.009M16.4955 13L16.5045 13',
  d3: 'M5.88423 6.56062L5.45498 4.45142C5.19688 3.18322 6.18394 2 7.5 2C8.81606 2 9.80312 3.18322 9.54502 4.45142L9.11577 6.56062C8.47015 9.73293 10.2277 11.6357 11.4499 14.2704C11.9824 15.4182 12.1332 16.7017 11.8809 17.9385C11.6648 18.998 11.3245 20.6686 10.6053 21.4829C10.1239 22.0281 9.44033 21.9997 8.76023 21.9997H6.23977C5.55967 21.9997 4.87609 22.0281 4.39466 21.4829C3.67546 20.6686 3.33521 18.998 3.11909 17.9385C2.86681 16.7017 3.01761 15.4182 3.55006 14.2704C4.77234 11.6357 6.52985 9.73293 5.88423 6.56062Z',
  d4: 'M6 9H9',
  d5: 'M8.76023 21.9997H6.23977C5.55967 21.9997 4.87609 22.0281 4.39466 21.4829C3.67611 20.6693 3.33582 19.0011 3.11968 17.9414L3.11909 17.9385C2.86681 16.7017 3.01761 15.4182 3.55006 14.2704C4.42553 12.3832 5.57561 10.8716 5.92051 9H6H9H9.07949C9.42439 10.8716 10.5745 12.3832 11.4499 14.2704C11.9824 15.4182 12.1332 16.7017 11.8809 17.9385L11.8803 17.9414C11.6642 19.0011 11.3239 20.6693 10.6053 21.4829C10.1239 22.0281 9.44033 21.9997 8.76023 21.9997Z',
  d6: 'M5.92051 9C6.05714 8.2586 6.06742 7.46071 5.88423 6.56062L5.45498 4.45142C5.19688 3.18322 6.18394 2 7.5 2C8.81606 2 9.80312 3.18322 9.54502 4.45142L9.11577 6.56062C8.93258 7.46071 8.94286 8.2586 9.07949 9M5.92051 9C5.57561 10.8716 4.42553 12.3832 3.55006 14.2704C3.01761 15.4182 2.86681 16.7017 3.11909 17.9385C3.33521 18.998 3.67546 20.6686 4.39466 21.4829C4.87609 22.0281 5.55967 21.9997 6.23977 21.9997H8.76023C9.44033 21.9997 10.1239 22.0281 10.6053 21.4829C11.3245 20.6686 11.6648 18.998 11.8809 17.9385C12.1332 16.7017 11.9824 15.4182 11.4499 14.2704C10.5745 12.3832 9.42439 10.8716 9.07949 9M5.92051 9H6H9H9.07949',
  d7: 'M5.88453 6.56062L5.45527 4.45142C5.19717 3.18322 6.18423 2 7.50029 2C8.81636 2 9.80342 3.18322 9.54532 4.45142L9.11606 6.56062C8.93288 7.46071 8.94316 8.2586 9.07978 9H9.00029H6.00029H5.9208C6.05743 8.2586 6.06771 7.46071 5.88453 6.56062Z',
  d8: 'M12.6857 22.2533C12.6277 22.1252 12.7066 21.9624 12.8643 21.6367C13.0756 21.2 13.2287 20.7643 13.3432 20.3948C13.5744 19.6489 13.7362 18.8555 13.8416 18.3385C14.1786 16.6866 13.9782 14.9732 13.2713 13.4421L13.2653 13.4293L13.2593 13.4176C13.1643 13.2362 11.9697 10.9543 11.8419 10.7081L11.8225 10.6707C11.7037 10.4406 11.6443 10.3256 11.6843 10.2056C11.7243 10.0856 11.8368 10.0311 12.0617 9.92207C12.9503 9.49159 13.9475 9.25021 15.0011 9.25021C18.729 9.25021 21.7511 12.2723 21.7511 16.0002C21.7511 19.7281 18.729 22.7502 15.0011 22.7502C14.3774 22.7502 13.7736 22.6656 13.2003 22.5073C12.8959 22.4233 12.7437 22.3813 12.6857 22.2533ZM17.4955 12.25C17.0813 12.25 16.7455 12.5858 16.7455 13C16.7455 13.4142 17.0813 13.75 17.4955 13.75H17.5045C17.9187 13.75 18.2545 13.4142 18.2545 13C18.2545 12.5858 17.9187 12.25 17.5045 12.25H17.4955ZM16 14.25C15.5858 14.25 15.25 14.5858 15.25 15C15.25 15.4142 15.5858 15.75 16 15.75H16.009C16.4232 15.75 16.759 15.4142 16.759 15C16.759 14.5858 16.4232 14.25 16.009 14.25H16ZM18.991 14.25C18.5768 14.25 18.241 14.5858 18.241 15C18.241 15.4142 18.5768 15.75 18.991 15.75H19C19.4142 15.75 19.75 15.4142 19.75 15C19.75 14.5858 19.4142 14.25 19 14.25H18.991Z',
  d9: 'M7.5 2.75024C6.64199 2.75024 6.02962 3.51449 6.18991 4.30209L6.61917 6.41129C6.72007 6.90708 6.76827 7.37791 6.77223 7.82878C6.77402 8.03248 6.77492 8.13433 6.83339 8.19229C6.89186 8.25024 6.98946 8.25024 7.18467 8.25024H7.81534C8.01054 8.25024 8.10814 8.25024 8.16661 8.19229C8.22508 8.13433 8.22598 8.03248 8.22777 7.82878C8.23173 7.37791 8.27993 6.90708 8.38083 6.41129L8.81009 4.30209C8.97038 3.51449 8.35801 2.75024 7.5 2.75024ZM4.72004 4.60124C4.36413 2.85243 5.72589 1.25024 7.5 1.25024C9.27411 1.25024 10.6359 2.85243 10.28 4.60124L9.8507 6.71043C9.68692 7.51518 9.69762 8.21613 9.81707 8.86432C9.96938 9.69084 10.303 10.4587 10.7314 11.2841C10.8716 11.5541 11.0274 11.8396 11.1894 12.1365C11.5019 12.7091 11.8378 13.3246 12.1303 13.9551C12.73 15.2478 12.9002 16.6945 12.6158 18.0887L12.6128 18.1035C12.5059 18.6272 12.3609 19.3385 12.1482 20.0249C11.9391 20.6997 11.6366 21.4485 11.1675 21.9796C10.4738 22.7651 9.49189 22.7562 8.89327 22.7508C8.84647 22.7504 8.80202 22.75 8.76023 22.75H6.23977C6.19798 22.75 6.15353 22.7504 6.10673 22.7508C5.50811 22.7562 4.52619 22.7651 3.8325 21.9796C3.36339 21.4485 3.06092 20.6997 2.85182 20.0249C2.63914 19.3385 2.49406 18.6272 2.38724 18.1035L2.38423 18.0887C2.09983 16.6945 2.26999 15.2478 2.86971 13.9551C3.16219 13.3246 3.49808 12.7091 3.81058 12.1365C3.97264 11.8395 4.12842 11.5541 4.26859 11.2841C4.69705 10.4587 5.03062 9.69084 5.18293 8.86432C5.30238 8.21613 5.31308 7.51518 5.1493 6.71043L4.72004 4.60124Z',
  d10: 'M12.8643 21.6365C12.7066 21.9622 12.6277 22.125 12.6857 22.253C12.7437 22.3811 12.8959 22.4231 13.2003 22.5071C13.7736 22.6654 14.3774 22.75 15.0011 22.75C18.729 22.75 21.7511 19.7279 21.7511 16C21.7511 12.2721 18.729 9.25 15.0011 9.25C13.9475 9.25 12.9503 9.49138 12.0617 9.92186C11.8368 10.0309 11.7243 10.0854 11.6843 10.2054C11.6443 10.3254 11.7037 10.4404 11.8225 10.6705C11.8289 10.6829 11.8354 10.6954 11.8419 10.7079C11.9697 10.9541 13.1643 13.236 13.2593 13.4174C13.2622 13.4229 13.2637 13.4257 13.2653 13.4291C13.267 13.4324 13.2684 13.4356 13.2713 13.4419C13.9782 14.973 14.1786 16.6864 13.8416 18.3382C13.7362 18.8553 13.5744 19.6487 13.3432 20.3946C13.2287 20.7641 13.0756 21.1998 12.8643 21.6365Z',
  d11: 'M16.7455 13C16.7455 12.5858 17.0813 12.25 17.4955 12.25H17.5045C17.9187 12.25 18.2545 12.5858 18.2545 13C18.2545 13.4142 17.9187 13.75 17.5045 13.75H17.4955C17.0813 13.75 16.7455 13.4142 16.7455 13ZM15.25 15C15.25 14.5858 15.5858 14.25 16 14.25H16.009C16.4232 14.25 16.759 14.5858 16.759 15C16.759 15.4142 16.4232 15.75 16.009 15.75H16C15.5858 15.75 15.25 15.4142 15.25 15ZM18.241 15C18.241 14.5858 18.5768 14.25 18.991 14.25H19C19.4142 14.25 19.75 14.5858 19.75 15C19.75 15.4142 19.4142 15.75 19 15.75H18.991C18.5768 15.75 18.241 15.4142 18.241 15Z',
  d12: 'M5.88423 6.68165L5.45498 4.51648C5.19688 3.21462 6.18394 2 7.5 2C8.81606 2 9.80312 3.21462 9.54502 4.51648L9.11577 6.68165C8.47015 9.93816 10.2277 11.8914 11.4499 14.5961C11.9824 15.7743 12.1332 17.0919 11.8809 18.3615L11.8803 18.3645C11.6642 19.4523 11.3239 21.1648 10.6053 22H4.39466C3.67611 21.1648 3.33582 19.4522 3.11968 18.3645L3.11909 18.3615C2.86681 17.0919 3.01761 15.7743 3.55006 14.5961C4.77234 11.8914 6.52985 9.93816 5.88423 6.68165Z',
  d13: 'M15.0001 22.75C14.2105 22.75 13.4525 22.6144 12.7482 22.3652C13.023 21.8411 13.2116 21.3004 13.3466 20.8531C13.5764 20.0918 13.7308 19.3143 13.8363 18.7832L13.8427 18.7513C14.1761 17.0731 13.977 15.3313 13.2726 13.7725C12.962 13.0852 12.5435 12.2987 12.2449 11.7376C11.9475 11.1781 11.6976 10.699 11.4941 10.2308C12.516 9.60847 13.7162 9.25 15.0001 9.25C18.728 9.25 21.7501 12.2721 21.7501 16C21.7501 19.7279 18.728 22.75 15.0001 22.75ZM17.4955 12.25C17.0813 12.25 16.7455 12.5858 16.7455 13C16.7455 13.4142 17.0813 13.75 17.4955 13.75H17.5045C17.9187 13.75 18.2545 13.4142 18.2545 13C18.2545 12.5858 17.9187 12.25 17.5045 12.25H17.4955ZM16 14.25C15.5858 14.25 15.25 14.5858 15.25 15C15.25 15.4142 15.5858 15.75 16 15.75H16.009C16.4232 15.75 16.759 15.4142 16.759 15C16.759 14.5858 16.4232 14.25 16.009 14.25H16ZM18.991 14.25C18.5768 14.25 18.241 14.5858 18.241 15C18.241 15.4142 18.5768 15.75 18.991 15.75H19C19.4142 15.75 19.75 15.4142 19.75 15C19.75 14.5858 19.4142 14.25 19 14.25H18.991Z',
  d14: 'M7.5 1.25C5.7031 1.25 4.37083 2.90467 4.71929 4.66233L5.14855 6.8275C5.24899 7.33414 5.28482 7.80426 5.2688 8.25H9.7312C9.71518 7.80426 9.75101 7.33414 9.85145 6.8275L10.2807 4.66233C10.6292 2.90467 9.2969 1.25 7.5 1.25Z',
  d15: 'M9.98477 9.75H5.01523C4.9338 10.0228 4.83569 10.2911 4.72481 10.5585C4.48458 11.1379 4.18657 11.708 3.85896 12.3243L3.78637 12.4608C3.48373 13.0295 3.16053 13.6368 2.86661 14.2872C2.26966 15.6082 2.10074 17.0849 2.38347 18.5077L2.38639 18.5224C2.49326 19.0602 2.63804 19.7889 2.85022 20.4919C3.05874 21.1827 3.35972 21.947 3.82611 22.4891L4.05054 22.75H10.9495L11.1739 22.4891C11.6403 21.947 11.9413 21.1827 12.1498 20.4919C12.362 19.7889 12.5067 19.0602 12.6136 18.5224L12.6165 18.5077C12.8993 17.0849 12.7303 15.6082 12.1334 14.2872C11.8395 13.6368 11.5163 13.0295 11.2136 12.4608L11.141 12.3243C10.8134 11.708 10.5154 11.1379 10.2752 10.5585C10.1643 10.2911 10.0662 10.0228 9.98477 9.75Z',
} as const;

export const IconBowlingPinsStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bowling-pins-stroke-rounded IconBowlingPinsStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBowlingPinsDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bowling-pins-duotone-rounded IconBowlingPinsDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconBowlingPinsTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bowling-pins-twotone-rounded IconBowlingPinsTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBowlingPinsSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bowling-pins-solid-rounded IconBowlingPinsSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBowlingPinsBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bowling-pins-bulk-rounded IconBowlingPinsBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
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

export const IconBowlingPinsStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bowling-pins-stroke-sharp IconBowlingPinsStrokeSharp"
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBowlingPinsSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bowling-pins-solid-sharp IconBowlingPinsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBowlingPins: TheIconSelfPack = {
  name: 'BowlingPins',
  StrokeRounded: IconBowlingPinsStrokeRounded,
  DuotoneRounded: IconBowlingPinsDuotoneRounded,
  TwotoneRounded: IconBowlingPinsTwotoneRounded,
  SolidRounded: IconBowlingPinsSolidRounded,
  BulkRounded: IconBowlingPinsBulkRounded,
  StrokeSharp: IconBowlingPinsStrokeSharp,
  SolidSharp: IconBowlingPinsSolidSharp,
};