import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.5457 4.95548C14.6207 5.26464 14.6405 5.59372 14.5947 5.93067L13.7727 11.975M14.5457 4.95548C13.9137 2.34817 10.0863 2.34817 9.45425 4.95548M14.5457 4.95548C16.113 3.34704 18.9261 4.94832 19 6.95915M19 6.95915C20 7.12691 22 8.0641 22 10.4708C22 12.6443 19.3928 14.94 16.8169 16.7647C16.2348 17.1771 15.9437 17.3833 15.7575 17.5326C15.1829 17.9935 14.8201 18.3672 14.3765 18.9552C14.2328 19.1457 14.0838 19.3697 13.786 19.8177L13.5536 20.1673C13.2078 20.6874 12.6246 21 12 21C11.3754 21 10.7922 20.6874 10.4464 20.1673L10.214 19.8177C9.91617 19.3697 9.76725 19.1457 9.62352 18.9552C9.1799 18.3672 8.81709 17.9935 8.2425 17.5326C8.05634 17.3833 7.76522 17.1771 7.18308 16.7647C4.60719 14.94 2 12.6443 2 10.4708C2 8.0641 4 7.12691 5 6.95915M19 6.95915C19.0676 8.79881 17.8104 11.2684 16.6976 12.9777M9.45425 4.95548C9.37931 5.26464 9.35952 5.59372 9.40534 5.93067L10.2273 11.975M9.45425 4.95548C7.88696 3.34704 5.07389 4.94832 5 6.95915M5 6.95915C4.93239 8.79881 6.18965 11.2684 7.30238 12.9777',
  d2: 'M18 16L17.2412 19.7942C17.1009 20.4953 16.4853 21 15.7703 21H8.22971C7.51468 21 6.89906 20.4953 6.75883 19.7942L6 16',
  d3: 'M22 10.4708C22 8.0641 20 7.12691 19 6.95915C18.9261 4.94832 16.113 3.34704 14.5457 4.95548C13.9137 2.34817 10.0863 2.34817 9.45425 4.95548C7.88696 3.34704 5.07389 4.94832 5 6.95915C4 7.12691 2 8.0641 2 10.4708C2 12.6443 4.60719 14.94 7.18308 16.7647C7.76522 17.1771 8.05634 17.3833 8.2425 17.5326C8.81709 17.9935 9.1799 18.3672 9.62352 18.9552C9.76725 19.1457 9.91617 19.3697 10.214 19.8177L10.4464 20.1673C10.7922 20.6874 11.3754 21 12 21C12.6246 21 13.2078 20.6874 13.5536 20.1673L13.786 19.8177C14.0838 19.3697 14.2328 19.1457 14.3765 18.9552C14.8201 18.3672 15.1829 17.9935 15.7575 17.5326C15.9437 17.3833 16.2348 17.1771 16.8169 16.7647C19.3928 14.94 22 12.6443 22 10.4708Z',
  d4: 'M10.4619 5.36127C10.8381 3.81291 13.1619 3.81291 13.5381 5.36127C13.5831 5.54624 13.5955 5.74465 13.5673 5.95103L12.7641 11.8442C12.6913 12.3778 13.0659 12.8691 13.6008 12.9417C14.1356 13.0142 14.6281 12.6405 14.7008 12.107L15.504 6.21378C15.5338 5.99582 15.5429 5.7796 15.533 5.56714C15.8844 5.40652 16.3179 5.43113 16.7774 5.65853C17.4275 5.98028 17.8444 6.58212 17.8643 7.12098C17.8896 7.80896 17.6613 8.70462 17.2472 9.6898C16.841 10.6562 16.2932 11.6224 15.7718 12.4214C15.4774 12.8727 15.6054 13.4766 16.0577 13.7704C16.51 14.0642 17.1154 13.9365 17.4099 13.4852C17.976 12.6176 18.5862 11.5465 19.0497 10.4439C19.3173 9.80728 19.5495 9.12878 19.6873 8.45317C19.8023 8.52688 19.9159 8.6112 20.0237 8.70689C20.4484 9.08389 20.7955 9.64256 20.7955 10.509C20.7955 11.1955 20.3662 12.0532 19.4602 13.0498C18.5792 14.019 17.3801 14.9754 16.1426 15.85L16.0953 15.8834L16.0952 15.8835C15.5703 16.2544 15.2656 16.4698 15.0607 16.6337C14.4359 17.1336 14.0247 17.5562 13.5424 18.1941C13.3842 18.4032 13.2237 18.6441 12.953 19.0503L12.9529 19.0505L12.7045 19.4233C12.5477 19.6586 12.2832 19.8 12 19.8C11.7168 19.8 11.4524 19.6586 11.2956 19.4233L11.047 19.0503C10.7763 18.644 10.6159 18.4032 10.4577 18.1941C9.97532 17.5562 9.56409 17.1336 8.93933 16.6337C8.7344 16.4697 8.42966 16.2544 7.90469 15.8834L7.9045 15.8833L7.85746 15.85C6.61989 14.9754 5.42078 14.019 4.53981 13.0498C3.6338 12.0532 3.20455 11.1955 3.20455 10.509C3.20455 9.64256 3.55164 9.08389 3.97633 8.70689C4.08412 8.6112 4.19768 8.52688 4.31268 8.45317C4.45048 9.12878 4.6827 9.80728 4.95032 10.4439C5.41378 11.5465 6.02401 12.6176 6.59012 13.4852C6.88457 13.9365 7.48997 14.0642 7.9423 13.7704C8.39464 13.4766 8.52263 12.8727 8.22818 12.4214C7.70683 11.6224 7.15901 10.6562 6.75278 9.6898C6.33867 8.70462 6.11036 7.80896 6.1357 7.12098C6.15555 6.58212 6.57245 5.98028 7.22259 5.65853C7.68208 5.43113 8.11556 5.40652 8.46696 5.56714C8.45705 5.7796 8.46625 5.99583 8.49595 6.21378L9.2992 12.107C9.37193 12.6405 9.86444 13.0142 10.3992 12.9417C10.9341 12.8691 11.3087 12.3778 11.2359 11.8442L10.4327 5.95103C10.4045 5.74465 10.4169 5.54624 10.4619 5.36127ZM9.09085 3.71016C10.4449 1.76328 13.5551 1.76328 14.9092 3.71016C15.8335 3.36301 16.8409 3.5132 17.646 3.91165C18.5679 4.36789 19.4014 5.22816 19.7015 6.30586C20.2228 6.48747 20.8052 6.7905 21.3229 7.25008C22.1198 7.95749 22.75 9.02895 22.75 10.509C22.75 11.9416 21.9053 13.2628 20.908 14.3598C20.2615 15.071 19.4906 15.7533 18.6875 16.3875L17.9767 19.9413C17.7664 20.993 16.843 21.75 15.7704 21.75H8.22985C7.15732 21.75 6.23388 20.993 6.02354 19.9413L5.31284 16.3878C4.50964 15.7535 3.73858 15.0711 3.09201 14.3598C2.09471 13.2628 1.25 11.9416 1.25 10.509C1.25 9.02895 1.88018 7.95749 2.67708 7.25008C3.1948 6.7905 3.77719 6.48747 4.29845 6.30585C4.59857 5.22816 5.43213 4.36789 6.35402 3.91165C7.15914 3.5132 8.16652 3.36301 9.09085 3.71016Z',
  d5: 'M5.85306 15.2646C6.25923 15.1834 6.65435 15.4468 6.73558 15.8529C7.93618 17.3186 10.6699 20.25 12.0001 20.25C13.9356 20.7324 16.3163 17.5196 17.2647 15.8529C17.3459 15.4468 17.7411 15.1834 18.1472 15.2646C18.5534 15.3458 18.8168 15.7409 18.7356 16.1471L17.9767 19.9413C17.7664 20.993 16.843 21.75 15.7704 21.75H8.22985C7.15732 21.75 6.23388 20.993 6.02354 19.9413L5.26471 16.1471C5.18348 15.7409 5.44689 15.3458 5.85306 15.2646Z',
  d6: 'M13.5381 5.36127C13.1619 3.81291 10.8381 3.81291 10.4619 5.36127C10.4169 5.54624 10.4045 5.74465 10.4327 5.95103L11.2359 11.8442C11.3087 12.3778 10.9341 12.8691 10.3992 12.9417C9.86444 13.0142 9.37193 12.6405 9.2992 12.107L8.49595 6.21378C8.46625 5.99583 8.45705 5.7796 8.46696 5.56714C8.11556 5.40652 7.68208 5.43113 7.22259 5.65853C6.57245 5.98028 6.15555 6.58212 6.1357 7.12098C6.11036 7.80896 6.33867 8.70462 6.75278 9.6898C7.15901 10.6562 7.70683 11.6224 8.22818 12.4214C8.52263 12.8727 8.39464 13.4766 7.9423 13.7704C7.48997 14.0642 6.88457 13.9365 6.59012 13.4852C6.02401 12.6176 5.41378 11.5465 4.95032 10.4439C4.6827 9.80728 4.45048 9.12878 4.31268 8.45317C4.19768 8.52688 4.08412 8.6112 3.97633 8.70689C3.55164 9.08389 3.20455 9.64256 3.20455 10.509C3.20455 11.1955 3.6338 12.0532 4.53981 13.0498C5.42078 14.019 6.61989 14.9754 7.85746 15.85L7.9045 15.8833C8.42959 16.2543 8.73437 16.4697 8.93933 16.6337C9.56409 17.1336 9.97532 17.5562 10.4577 18.1941C10.6159 18.4032 10.7763 18.644 11.047 19.0503L11.2956 19.4233C11.4524 19.6586 11.7168 19.8 12 19.8C12.2832 19.8 12.5477 19.6586 12.7045 19.4233L12.9529 19.0505C13.2236 18.6441 13.3841 18.4033 13.5424 18.1941C14.0247 17.5562 14.4359 17.1336 15.0607 16.6337C15.2656 16.4698 15.5704 16.2544 16.0953 15.8834L16.1426 15.85C17.3801 14.9754 18.5792 14.019 19.4602 13.0498C20.3662 12.0532 20.7955 11.1955 20.7955 10.509C20.7955 9.64256 20.4484 9.08389 20.0237 8.70689C19.9159 8.6112 19.8023 8.52688 19.6873 8.45317C19.5495 9.12878 19.3173 9.80728 19.0497 10.4439C18.5862 11.5465 17.976 12.6176 17.4099 13.4852C17.1154 13.9365 16.51 14.0642 16.0577 13.7704C15.6054 13.4766 15.4774 12.8727 15.7718 12.4214C16.2932 11.6224 16.841 10.6562 17.2472 9.6898C17.6613 8.70462 17.8896 7.80896 17.8643 7.12098C17.8444 6.58212 17.4275 5.98028 16.7774 5.65853C16.3179 5.43113 15.8844 5.40652 15.533 5.56714C15.5429 5.7796 15.5338 5.99582 15.504 6.21378L14.7008 12.107C14.6281 12.6405 14.1356 13.0142 13.6008 12.9417C13.0659 12.8691 12.6913 12.3778 12.7641 11.8442L13.5673 5.95103C13.5955 5.74465 13.5831 5.54624 13.5381 5.36127ZM14.9092 3.71016C13.5551 1.76328 10.4449 1.76328 9.09085 3.71016C8.16652 3.36301 7.15914 3.5132 6.35402 3.91165C5.43213 4.36789 4.59857 5.22816 4.29845 6.30585C3.77719 6.48747 3.1948 6.7905 2.67708 7.25008C1.88018 7.95749 1.25 9.02895 1.25 10.509C1.25 11.9416 2.09471 13.2628 3.09201 14.3598C4.11435 15.4845 5.44788 16.5368 6.72766 17.4412C7.31141 17.8538 7.56362 18.0326 7.71647 18.1549C8.21477 18.5536 8.51267 18.8598 8.89739 19.3685C9.01599 19.5253 9.14238 19.7142 9.44078 20.162L9.6679 20.5029C10.187 21.2819 11.0624 21.75 12 21.75C12.9376 21.75 13.813 21.2819 14.3321 20.5029L14.5592 20.162C14.8576 19.7143 14.984 19.5253 15.1026 19.3685C15.4874 18.8598 15.7852 18.5536 16.2835 18.1549C16.4364 18.0326 16.6886 17.8538 17.2724 17.4412C18.5521 16.5368 19.8857 15.4845 20.908 14.3598C21.9053 13.2628 22.75 11.9416 22.75 10.509C22.75 9.02895 22.1198 7.95749 21.3229 7.25008C20.8052 6.7905 20.2228 6.48747 19.7015 6.30586C19.4014 5.22816 18.5679 4.36789 17.646 3.91165C16.8409 3.5132 15.8335 3.36301 14.9092 3.71016Z',
  d7: 'M18 16L17 21H7L6 16',
  d8: 'M14.1115 3.88346C13.5923 1.70551 10.4077 1.70551 9.88852 3.88346C9.82667 4.14296 9.80986 4.42055 9.84826 4.70773L10.6884 10.9906C10.7521 11.4664 10.4192 11.9041 9.94368 11.9699C9.46518 12.036 9.02408 11.7006 8.96005 11.2218L8.12092 4.94659C8.07955 4.63721 8.07408 4.33118 8.10135 4.03295C7.55907 3.68801 6.87047 3.70525 6.18964 4.04869C5.34586 4.47433 4.76433 5.28826 4.73589 6.07518C4.70347 6.97239 4.99351 8.10492 5.49213 9.31402C5.86628 10.2213 6.33842 11.1256 6.81892 11.9375C7.06264 12.3493 6.95083 12.884 6.55181 13.1481C6.14404 13.418 5.593 13.3026 5.34337 12.8821C4.82212 12.004 4.30192 11.0117 3.88453 9.9996C3.5162 9.10646 3.21142 8.15891 3.07197 7.23888C2.80076 7.3755 2.52087 7.55629 2.2652 7.78763C1.70484 8.29465 1.25 9.04952 1.25 10.1927C1.25 11.1379 1.82222 12.2477 2.91321 13.471C3.60328 14.2448 4.45066 15.0083 5.36241 15.7389L6.25977 21.1231C6.32004 21.4847 6.63293 21.7498 6.99956 21.7498H11.9754L12 21.75L12.0246 21.7498H16.9996C17.3662 21.7498 17.6791 21.4847 17.7394 21.1231L18.6366 15.7397C19.5487 15.0089 20.3965 14.2451 21.0868 13.471C22.1778 12.2477 22.75 11.1379 22.75 10.1927C22.75 9.04952 22.2952 8.29465 21.7348 7.78763C21.4791 7.55629 21.1992 7.3755 20.928 7.23888C20.7886 8.15891 20.4838 9.10646 20.1155 9.9996C19.6981 11.0117 19.1779 12.004 18.6566 12.8821C18.407 13.3026 17.856 13.418 17.4482 13.1481C17.0492 12.884 16.9374 12.3493 17.1811 11.9375C17.6616 11.1256 18.1337 10.2213 18.5079 9.31402C19.0065 8.10492 19.2965 6.97239 19.2641 6.07518C19.2357 5.28826 18.6541 4.47433 17.8104 4.04869C17.1295 3.70525 16.4409 3.68801 15.8986 4.03295C15.9259 4.33118 15.9205 4.63721 15.8791 4.94659L15.0399 11.2218C14.9759 11.7006 14.5348 12.036 14.0563 11.9699C13.5808 11.9041 13.2479 11.4664 13.3116 10.9906L14.1517 4.70773C14.1901 4.42055 14.1733 4.14296 14.1115 3.88346ZM7.63507 20.2499L7.10156 17.0488C7.64352 17.4394 7.96134 17.67 8.17868 17.8473C8.90283 18.4379 9.37502 18.9325 9.93411 19.686C10.0506 19.8431 10.1686 20.0158 10.3234 20.2499H7.63507ZM16.3644 20.2499H13.6769C13.8318 20.0158 13.9497 19.8431 14.0663 19.686C14.6253 18.9325 15.0975 18.4379 15.8217 17.8473C16.0389 17.6701 16.3565 17.4396 16.8978 17.0496L16.3644 20.2499Z',
} as const;

export const IconShellfishStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shellfish-stroke-rounded IconShellfishStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconShellfishDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shellfish-duotone-rounded IconShellfishDuotoneRounded"
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

export const IconShellfishTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shellfish-twotone-rounded IconShellfishTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShellfishSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shellfish-solid-rounded IconShellfishSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShellfishBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shellfish-bulk-rounded IconShellfishBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShellfishStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shellfish-stroke-sharp IconShellfishStrokeSharp"
    >
      <path 
        d={d.d1} 
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

export const IconShellfishSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shellfish-solid-sharp IconShellfishSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShellfish: TheIconSelfPack = {
  name: 'Shellfish',
  StrokeRounded: IconShellfishStrokeRounded,
  DuotoneRounded: IconShellfishDuotoneRounded,
  TwotoneRounded: IconShellfishTwotoneRounded,
  SolidRounded: IconShellfishSolidRounded,
  BulkRounded: IconShellfishBulkRounded,
  StrokeSharp: IconShellfishStrokeSharp,
  SolidSharp: IconShellfishSolidSharp,
};