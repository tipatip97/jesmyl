import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.3457 16.1976L16.1747 3.36866M18.6316 11.0556L16.4321 13.2551M14.5549 15.1099L13.5762 16.0886',
  d2: 'M3.17467 16.1411C1.60844 14.5749 1.60844 12.0355 3.17467 10.4693L10.4693 3.17467C12.0355 1.60844 14.5749 1.60844 16.1411 3.17467L20.8253 7.85891C22.3916 9.42514 22.3916 11.9645 20.8253 13.5307L13.5307 20.8253C11.9645 22.3916 9.42514 22.3916 7.85891 20.8253L3.17467 16.1411Z',
  d3: 'M4 22H20',
  d4: 'M16.2096 18.1511L18.1521 16.2087C20.5857 13.775 21.8025 12.5582 21.9733 11.1043C22.0006 10.8717 22.0077 10.6384 21.9945 10.4071C21.9115 8.96084 20.7663 7.81561 18.4758 5.52513C17.655 4.70427 16.9812 4.0305 16.3879 3.5L3.34375 16.2087C3.89611 16.8449 4.62185 17.5706 5.52607 18.4749C7.81655 20.7653 8.96179 21.9106 10.4081 21.9935C10.6394 22.0068 10.8727 21.9997 11.1052 21.9724C12.5592 21.8016 13.776 20.5848 16.2096 18.1511Z',
  d5: 'M3.3457 16.1981L16.1747 3.36914M18.6316 11.0561L16.4321 13.2556M14.5549 15.1104L13.5762 16.0891',
  d6: 'M3.99829 21.8867H19.9983',
  d7: 'M3.33646 16.2055L15.8481 3.75351M13.529 20.7187L20.8236 13.4646C22.4287 11.4886 22.359 9.64003 20.8236 7.82437L16.1394 3.16618C14.5732 1.60867 12.0338 1.60867 10.4676 3.16618L3.17296 10.4202C1.60673 11.9777 1.60673 14.503 3.17296 16.0605L7.64939 20.512C7.78775 20.6496 7.93576 20.778 8.09522 20.8908C10.3396 22.4781 11.598 22.3165 13.529 20.7187Z',
  d8: 'M18.6188 10.999L16.4193 13.1863M14.5483 15.0469L13.5696 16.0201',
  d9: 'M3 21.75C3 21.1977 3.44772 20.75 4 20.75H20C20.5523 20.75 21 21.1977 21 21.75C21 22.3023 20.5523 22.75 20 22.75H4C3.44772 22.75 3 22.3023 3 21.75Z',
  d10: 'M15.5375 2.99C15.8451 2.68234 15.999 2.52852 15.9741 2.33381C15.9492 2.1391 15.7765 2.03754 15.4309 1.8344C14.8634 1.50082 14.2828 1.29482 13.6358 1.25772C13.3605 1.24194 13.0836 1.25039 12.8082 1.28274C11.8838 1.39135 11.0853 1.83222 10.2435 2.50318C9.42016 3.15936 8.4829 4.09663 7.2944 5.28515L5.28516 7.29439C4.09664 8.4829 3.15936 9.42016 2.50318 10.2435C1.83222 11.0853 1.39135 11.8838 1.28274 12.8082C1.25039 13.0836 1.24194 13.3605 1.25772 13.6358C1.29482 14.2828 1.50082 14.8634 1.83441 15.4309C2.03754 15.7765 2.13911 15.9492 2.33382 15.9741C2.52852 15.999 2.68235 15.8451 2.99001 15.5375L15.5375 2.99Z',
  d11: 'M3.88257 16.7662C3.62269 17.0261 3.49275 17.1561 3.49181 17.3204C3.49087 17.4847 3.61771 17.6145 3.87139 17.8741C4.20421 18.2146 4.56702 18.5774 4.95777 18.9682L5.03184 19.0422C6.1456 20.156 7.0325 21.0429 7.82372 21.6552C8.64024 22.287 9.43135 22.6888 10.3642 22.7423C10.6395 22.7581 10.9164 22.7496 11.1918 22.7173C12.1162 22.6087 12.9147 22.1678 13.7565 21.4968C14.5798 20.8407 15.5171 19.9034 16.7055 18.7149L18.7149 16.7056C19.9034 15.5171 20.8407 14.5798 21.4968 13.7565C22.1678 12.9147 22.6087 12.1162 22.7173 11.1918C22.7496 10.9164 22.7581 10.6395 22.7423 10.3642C22.6888 9.43135 22.287 8.64024 21.6552 7.82372C21.0429 7.03248 20.1561 6.14565 19.0422 5.03184L18.9682 4.95778C18.5775 4.56705 18.2146 4.20422 17.8741 3.87138C17.6145 3.6177 17.4847 3.49086 17.3204 3.4918C17.156 3.49275 17.0261 3.62269 16.7662 3.88256L3.88257 16.7662ZM19.1489 10.5244C19.4418 10.8173 19.4418 11.2921 19.1489 11.585L16.9426 13.7913C16.6497 14.0842 16.1749 14.0842 15.882 13.7913C15.5891 13.4984 15.5891 13.0235 15.882 12.7306L18.0882 10.5244C18.3811 10.2315 18.856 10.2315 19.1489 10.5244ZM15.0516 14.6217C15.3444 14.9146 15.3444 15.3895 15.0516 15.6824L14.106 16.6279C13.8131 16.9208 13.3382 16.9208 13.0454 16.6279C12.7525 16.335 12.7525 15.8601 13.0454 15.5672L13.9909 14.6217C14.2838 14.3288 14.7587 14.3288 15.0516 14.6217Z',
  d12: 'M17.8741 3.87138C17.6145 3.6177 17.4847 3.49086 17.3204 3.4918C17.156 3.49275 17.0261 3.62269 16.7662 3.88256L3.88257 16.7662C3.62269 17.0261 3.49275 17.1561 3.49181 17.3204C3.49087 17.4847 3.61771 17.6145 3.87139 17.8741C4.20421 18.2146 4.56702 18.5774 4.95777 18.9682L5.03184 19.0422C6.14561 20.156 7.0325 21.0429 7.82372 21.6552C8.64024 22.287 9.43135 22.6888 10.3642 22.7423C10.6395 22.7581 10.9164 22.7496 11.1918 22.7173C12.1162 22.6087 12.9147 22.1678 13.7565 21.4968C14.5798 20.8407 15.5171 19.9034 16.7055 18.7149L18.7149 16.7056C19.9034 15.5171 20.8407 14.5798 21.4968 13.7565C22.1678 12.9147 22.6087 12.1162 22.7173 11.1918C22.7496 10.9164 22.7581 10.6395 22.7423 10.3642C22.6888 9.43135 22.287 8.64024 21.6552 7.82372C21.0429 7.03248 20.1561 6.14565 19.0422 5.03184L18.9682 4.95778C18.5775 4.56705 18.2146 4.20422 17.8741 3.87138Z',
  d13: 'M2.99001 15.5372C2.68236 15.845 2.52853 15.9989 2.33379 15.974C2.13905 15.9492 2.03747 15.7764 1.8343 15.4307C1.50078 14.8633 1.29482 14.2828 1.25772 13.6358C1.24194 13.3605 1.25039 13.0836 1.28274 12.8082C1.39135 11.8838 1.83222 11.0853 2.50318 10.2435C3.15936 9.42016 4.09664 8.4829 5.28516 7.29439L7.2944 5.28515C8.4829 4.09663 9.42016 3.15936 10.2435 2.50318C11.0853 1.83222 11.8838 1.39135 12.8082 1.28274C13.0836 1.25039 13.3605 1.24194 13.6358 1.25772C14.2826 1.29481 14.8612 1.49932 15.4274 1.83184C15.7729 2.03476 15.9457 2.13622 15.9706 2.33094C15.9955 2.52566 15.8418 2.67952 15.5342 2.98723L2.99001 15.5372Z',
  d14: 'M19.1494 10.5244C19.4423 10.8173 19.4423 11.2921 19.1494 11.585L16.9431 13.7913C16.6502 14.0842 16.1754 14.0842 15.8825 13.7913C15.5896 13.4984 15.5896 13.0235 15.8825 12.7306L18.0887 10.5244C18.3816 10.2315 18.8565 10.2315 19.1494 10.5244ZM15.052 14.6217C15.3449 14.9146 15.3449 15.3895 15.052 15.6824L14.1065 16.6279C13.8136 16.9208 13.3387 16.9208 13.0458 16.6279C12.7529 16.335 12.7529 15.8601 13.0458 15.5672L13.9914 14.6217C14.2843 14.3288 14.7591 14.3288 15.052 14.6217Z',
  d15: 'M12.4869 16.6274L14.0301 15.0842L12.9694 14.0235L11.4262 15.5667L12.4869 16.6274ZM15.3235 13.7908L17.5298 11.5845L16.4691 10.5239L14.2628 12.7301L15.3235 13.7908ZM6.0302 16.4424L16.5301 5.94242L15.4694 4.88177L4.96953 15.3818L6.0302 16.4424Z',
  d16: 'M13 2L22 11L11 22L2 13L13 2Z',
  d17: 'M13 1.25C13.1989 1.25 13.3897 1.32902 13.5303 1.46967L16.2052 4.14456L4.14426 16.2049L1.46967 13.5303C1.17678 13.2374 1.17678 12.7626 1.46967 12.4697L12.4697 1.46967C12.6103 1.32902 12.8011 1.25 13 1.25ZM5.20492 17.2656L17.2659 5.20522L22.5303 10.4697C22.8232 10.7626 22.8232 11.2374 22.5303 11.5303L11.5303 22.5303C11.3897 22.671 11.1989 22.75 11 22.75C10.8011 22.75 10.6103 22.671 10.4697 22.5303L5.20492 17.2656ZM15.3231 13.7909L17.5293 11.5846L16.4687 10.524L14.2624 12.7302L15.3231 13.7909ZM12.4864 16.6275L14.0296 15.0843L12.969 14.0237L11.4258 15.5669L12.4864 16.6275Z',
  d18: 'M20 22.75H4V20.75H20V22.75Z',
};

export const IconCreditCardPosStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-pos-stroke-rounded IconCreditCardPosStrokeRounded"
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

export const IconCreditCardPosDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-pos-duotone-rounded IconCreditCardPosDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCreditCardPosTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-pos-twotone-rounded IconCreditCardPosTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardPosSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-pos-solid-rounded IconCreditCardPosSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardPosBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-pos-bulk-rounded IconCreditCardPosBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      </g>
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
    </TheIconWrapper>
  );
};

export const IconCreditCardPosStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-pos-stroke-sharp IconCreditCardPosStrokeSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardPosSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-pos-solid-sharp IconCreditCardPosSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCreditCardPos: TheIconSelfPack = {
  name: 'CreditCardPos',
  StrokeRounded: IconCreditCardPosStrokeRounded,
  DuotoneRounded: IconCreditCardPosDuotoneRounded,
  TwotoneRounded: IconCreditCardPosTwotoneRounded,
  SolidRounded: IconCreditCardPosSolidRounded,
  BulkRounded: IconCreditCardPosBulkRounded,
  StrokeSharp: IconCreditCardPosStrokeSharp,
  SolidSharp: IconCreditCardPosSolidSharp,
};