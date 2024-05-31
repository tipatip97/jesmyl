import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z',
  d2: 'M22 11.7221L21.5602 12.3098C20.8329 13.2817 19.8571 13.222 19.1639 12.1633L18.95 11.8367C18.2821 10.8167 17.3484 10.7203 16.6269 11.5969L16 12.3585',
  d3: 'M8 11.7221L7.56022 12.3098C6.83294 13.2817 5.85712 13.222 5.1639 12.1633L4.95001 11.8367C4.28214 10.8167 3.34844 10.7203 2.62686 11.5969L2 12.3585',
  d4: 'M12 22C17.5228 22 22 17.5228 22 12C22 10.8096 21.8191 9.64788 21.4514 8.57874C21.1518 7.70761 20.8018 7.813 19.9222 7.92582C18.627 8.09196 17.297 7.17566 17.0437 5.90395C16.8672 5.01746 16.8411 5.04121 15.9359 4.97652C15.0631 4.91415 14.2552 4.26218 14.0492 3.40443C13.7224 2.04285 13.4091 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d5: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.4091 2 13.7224 2.04285 14.0492 3.40443C14.2552 4.26218 15.0631 4.91415 15.9359 4.97652C15.9616 4.97836 15.9866 4.98012 16.011 4.98184C16.8427 5.04059 16.8722 5.04267 17.0437 5.90395C17.297 7.17566 18.627 8.09196 19.9222 7.92582C19.9757 7.91896 20.0273 7.91213 20.077 7.90554C20.8442 7.80379 21.17 7.76059 21.4514 8.57874C21.8191 9.64788 22 10.8096 22 12ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z',
  d6: 'M12 9C10.4185 9 9.12197 10.2245 9.00816 11.7764C9.00276 11.85 9 11.9246 9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.8758 7.00455 11.7524 7.01352 11.6301C7.2034 9.0409 9.3629 7 12 7C14.7614 7 17 9.23858 17 12C17 12.1366 16.9945 12.2721 16.9837 12.4064C16.9393 12.9569 16.457 13.3671 15.9065 13.3227C15.356 13.2783 14.9457 12.7961 14.9901 12.2456C14.9967 12.1648 15 12.0829 15 12C15 10.3431 13.6569 9 12 9Z',
  d7: 'M5.78662 11.2892C5.35512 10.6302 4.72174 10.0948 3.91123 10.0111C3.0746 9.9248 2.35874 10.3495 1.85479 10.9617L1.22793 11.7232C1.07303 11.9114 0.99219 12.1497 1.0006 12.3932C1.20414 18.2919 6.0557 23.0003 12 23.0003C18.0751 23.0003 23 18.0754 23 12.0003C23 11.9836 23.0002 11.9622 23.0004 11.9376C23.0011 11.8712 23.0019 11.7813 22.9996 11.6959C22.9884 11.2703 22.7089 10.8985 22.3031 10.7695C21.8974 10.6404 21.4544 10.7824 21.1994 11.1233L20.7596 11.711C20.6431 11.8666 20.5462 11.9409 20.488 11.9735C20.4368 12.0022 20.414 12.0005 20.4106 12.0002C20.4062 11.9999 20.3697 11.9977 20.2994 11.9488C20.2253 11.8973 20.1191 11.797 20.0005 11.6158L19.7866 11.2892C19.3551 10.6302 18.7217 10.0948 17.9112 10.0111C17.0807 9.92543 16.3691 10.3433 15.8658 10.9484L15.2354 11.6666C15.0934 11.8283 15.0074 12.0314 14.9901 12.2459C14.8658 13.7873 13.5741 15.0003 12 15.0003C10.3431 15.0003 9 13.6571 9 12.0003C9 11.9249 9.00276 11.8503 9.00816 11.7767C9.04069 11.3331 8.77633 10.9213 8.35944 10.7662C7.94255 10.6112 7.47336 10.7501 7.20812 11.1072L6.75957 11.711L6.75864 11.7122C6.64256 11.867 6.54608 11.941 6.48796 11.9735C6.43681 12.0022 6.41404 12.0005 6.41057 12.0002C6.40621 11.9999 6.36971 11.9977 6.29936 11.9488C6.22534 11.8973 6.11912 11.797 6.00051 11.6158L5.78662 11.2892Z',
  d8: 'M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 10.9096 20.8341 9.85877 20.5057 8.90394C20.4719 8.80553 20.1396 8.90614 20.0495 8.9177C18.2582 9.14746 16.4238 7.91094 16.063 6.09928C16.0362 5.96482 16.0002 5.98367 15.8646 5.97397C14.579 5.88211 13.3896 4.94052 13.0769 3.63786C13.0265 3.42807 13.0134 3.0496 12.7606 3.02211C12.5912 3.00369 12.3623 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C12.3422 1 12.681 1.00167 12.9768 1.03383C13.278 1.06658 13.626 1.13868 13.9528 1.33891C14.6371 1.75811 14.8633 2.5114 15.0216 3.17099C15.1207 3.58384 15.5471 3.94619 16.0071 3.97906C16.4891 4.0135 16.9907 4.03472 17.3863 4.35003C17.8092 4.68704 17.9244 5.20616 18.0245 5.70862C18.1702 6.44038 18.9958 7.03646 19.795 6.93395C20.2553 6.87492 20.728 6.79034 21.1841 6.92322C21.8991 7.13157 22.2156 7.72599 22.397 8.25354C22.804 9.437 23 10.7097 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z',
  d9: 'M5.78662 11.2892C5.35512 10.6302 4.72174 10.0948 3.91123 10.0111C3.0746 9.9248 2.35874 10.3495 1.85479 10.9617L1.22793 11.7232C1.07303 11.9114 0.99219 12.1497 1.0006 12.3932C1.20414 18.2919 6.0557 23.0003 12 23.0003C18.0751 23.0003 23 18.0754 23 12.0003C23 11.9386 23.0028 11.8131 22.9996 11.6959C22.9884 11.2703 22.7089 10.8985 22.3031 10.7695C21.8974 10.6404 21.4544 10.7824 21.1994 11.1233L20.7596 11.711C20.6561 11.8492 20.4846 12.0776 20.2994 11.9488C20.2253 11.8973 20.1191 11.797 20.0005 11.6158L19.7866 11.2892C19.3551 10.6302 18.7217 10.0948 17.9112 10.0111C17.0807 9.92543 16.3691 10.3433 15.8658 10.9484L15.2354 11.6666C15.0934 11.8283 15.0074 12.0314 14.9901 12.2459C14.8658 13.7873 13.5741 15.0003 12 15.0003C10.3431 15.0003 9 13.6571 9 12.0003C9 11.9249 9.00276 11.8503 9.00816 11.7767C9.04069 11.3331 8.77633 10.9213 8.35944 10.7662C7.94255 10.6112 7.47336 10.7501 7.20812 11.1072L6.75957 11.711L6.75864 11.7122C6.65519 11.8502 6.48423 12.0773 6.29936 11.9488C6.07208 11.7907 5.93517 11.516 5.78662 11.2892Z',
  d10: 'M12 22C17.5228 22 22 17.5228 22 12C22 10.5001 21.6698 9.07736 21.0781 7.80046C20.7435 7.92934 20.38 8 20 8C18.3431 8 17 6.65685 17 5C15.4108 5 14.1102 3.76434 14.0067 2.20139C13.3584 2.06933 12.6873 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d11: 'M1.30149 10.7462C2.64568 9.91864 4.28396 10.1389 5.44302 11.3093L5.7665 11.636C6.42618 12.3022 7.26561 12.4238 7.99043 12.0125C7.99042 12.0083 7.99041 12.0042 7.99041 12C7.99041 9.79086 9.78429 8 11.9972 8C13.6916 8 15.1403 9.05001 15.7262 10.5338C16.9844 9.97066 18.4206 10.253 19.4666 11.3093L19.7901 11.636C20.565 12.4186 21.588 12.4496 22.3819 11.7481L22.75 11.4229C22.6758 10.0235 22.3332 8.69375 21.7722 7.48513L21.4766 6.84827L20.8205 7.10059C20.5702 7.19686 20.2975 7.25 20.0106 7.25C18.7659 7.25 17.7568 6.24264 17.7568 5V4.25H17.0056C15.812 4.25 14.8346 3.32328 14.7568 2.15179L14.7189 1.58072L14.1571 1.46648C13.4587 1.32445 12.7362 1.25 11.9972 1.25C6.47492 1.25 1.92357 5.39986 1.30149 10.7462Z',
  d12: 'M8.29278 13.5271C7.07665 14.0036 5.70961 13.7122 4.69796 12.6906L4.37448 12.3639C3.62437 11.6064 2.64552 11.5553 1.86641 12.1812L1.25 12.6764C1.59961 18.2983 6.27763 22.75 11.9972 22.75C17.4831 22.75 22.0109 18.6545 22.68 13.3591C21.3803 14.055 19.8355 13.8154 18.7216 12.6906L18.3981 12.3639C17.6837 11.6425 16.7619 11.5618 16.0028 12.0963C15.9515 14.2609 14.1778 16 11.9972 16C10.326 16 8.89386 14.9787 8.29278 13.5271Z',
} as const;

export const IconDoughnutStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doughnut-stroke-rounded IconDoughnutStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconDoughnutDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doughnut-duotone-rounded IconDoughnutDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconDoughnutTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doughnut-twotone-rounded IconDoughnutTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
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

export const IconDoughnutSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doughnut-solid-rounded IconDoughnutSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDoughnutBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doughnut-bulk-rounded IconDoughnutBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDoughnutStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doughnut-stroke-sharp IconDoughnutStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconDoughnutSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doughnut-solid-sharp IconDoughnutSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDoughnut: TheIconSelfPack = {
  name: 'Doughnut',
  StrokeRounded: IconDoughnutStrokeRounded,
  DuotoneRounded: IconDoughnutDuotoneRounded,
  TwotoneRounded: IconDoughnutTwotoneRounded,
  SolidRounded: IconDoughnutSolidRounded,
  BulkRounded: IconDoughnutBulkRounded,
  StrokeSharp: IconDoughnutStrokeSharp,
  SolidSharp: IconDoughnutSolidSharp,
};