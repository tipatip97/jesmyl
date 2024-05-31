import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 14L20.7578 11.5776C20.6326 10.3263 20.5701 9.70067 20.201 9.239C19.832 8.77732 19.2355 8.5785 18.0425 8.18084C17.6735 8.05784 17.4234 7.93745 17.187 7.62499C16.4318 6.62664 15.3436 4.68636 14.5275 4.2579C14.0362 4 13.4568 4 12.2979 4H11C10.0572 4 9.58579 4 9.29289 4.29289C9 4.58579 9 5.05719 9 6V13.5',
  d2: 'M9 9.5H3V14',
  d3: 'M17.5 8H14C13.0572 8 12.5858 8 12.2929 7.70711C12 7.41421 12 6.94281 12 6V4',
  d4: 'M9 5H8',
  d5: 'M12 10.5H13',
  d6: 'M13.5 17H10.5M9.5 14H14.5M4.5 14H3.5C3.03406 14 2.80109 14 2.61732 14.0761C2.00228 14.3309 2 14.9298 2 15.5C2 16.0702 2.00228 16.6691 2.61732 16.9239C2.80109 17 3.03406 17 3.5 17M19.5 14H20.5C20.9659 14 21.1989 14 21.3827 14.0761C21.9977 14.3309 22 14.9298 22 15.5C22 16.0702 21.9977 16.6691 21.3827 16.9239C21.1989 17 20.9659 17 20.5 17',
  d7: 'M10.5 16.5C10.5 18.433 8.933 20 7 20C5.067 20 3.5 18.433 3.5 16.5C3.5 14.567 5.067 13 7 13C8.933 13 10.5 14.567 10.5 16.5Z',
  d8: 'M17 20C18.933 20 20.5 18.433 20.5 16.5C20.5 14.567 18.933 13 17 13C15.067 13 13.5 14.567 13.5 16.5C13.5 18.433 15.067 20 17 20Z',
  d9: 'M11 4H12V6C12 6.94281 12 7.41421 12.2929 7.70711C12.5858 8 13.0572 8 14 8H17.6094C17.7363 8.07136 17.8775 8.12584 18.0425 8.18084C19.2355 8.5785 19.832 8.77732 20.201 9.239C20.5701 9.70067 20.6326 10.3263 20.7578 11.5776L21 14C21.615 14.2548 22 14.9298 22 15.5C22 16.0702 21.9977 16.6691 21.3827 16.9239C21.1989 17 20.9659 17 20.5 17H20.4646C20.4879 16.8367 20.5 16.6698 20.5 16.5C20.5 14.567 18.933 13 17 13C15.067 13 13.5 14.567 13.5 16.5C13.5 16.6698 13.5121 16.8367 13.5354 17H10.4646C10.4879 16.8367 10.5 16.6698 10.5 16.5C10.5 14.567 8.933 13 7 13C5.067 13 3.5 14.567 3.5 16.5C3.5 16.6698 3.51209 16.8367 3.53544 17H3.5C3.03406 17 2.80109 17 2.61732 16.9239C2.00228 16.6691 2 16.0702 2 15.5C2 14.9298 2.38496 14.2548 3 14V9.5H9V6C9 5.05719 9 4.58579 9.29289 4.29289C9.58579 4 10.0572 4 11 4Z',
  d10: 'M7 5C7 4.44772 7.44772 4 8 4H9C9.55228 4 10 4.44772 10 5C10 5.55228 9.55228 6 9 6H8C7.44772 6 7 5.55228 7 5Z',
  d11: 'M12.5992 3.24626C12.5119 3.24675 12.4251 3.24725 12.339 3.24725C12.1101 3.24725 11.8786 3.24213 11.6461 3.23698C11.0296 3.22333 10.4055 3.20952 9.80276 3.29056C9.44728 3.33835 9.07156 3.4508 8.76253 3.75982C8.45351 4.06884 8.34106 4.44457 8.29327 4.80005C8.24987 5.12286 8.24992 5.51969 8.24997 5.95251L8.24997 8.29725C8.24997 8.40771 8.16042 8.49725 8.04997 8.49725L3.11324 8.49725C2.84803 8.49725 2.59367 8.60261 2.40614 8.79014C2.2186 8.97768 2.11324 9.23203 2.11324 9.49725L2.11324 13.3717C2.11324 13.4432 2.07455 13.5084 2.01525 13.5483C1.66991 13.7802 1.46601 14.1043 1.36091 14.4474C1.25672 14.7875 1.2498 15.1446 1.25 15.4973C1.2498 15.8499 1.25672 16.207 1.36091 16.5471C1.49468 16.9838 1.7885 17.3896 2.33031 17.614C2.52881 17.6963 2.72415 17.7239 2.9018 17.736C3.06712 17.7473 3.26397 17.7473 3.47824 17.7473H4.83287C4.62114 17.3802 4.5 16.9542 4.5 16.5C4.5 15.1193 5.61929 14 7 14C8.38071 14 9.5 15.1193 9.5 16.5C9.5 16.9542 9.37886 17.3802 9.16713 17.7473L14.8329 17.7473C14.6211 17.3802 14.5 16.9542 14.5 16.5C14.5 15.1193 15.6193 14 17 14C18.3807 14 19.5 15.1193 19.5 16.5C19.5 16.9542 19.3789 17.3802 19.1671 17.7473L20.5218 17.7473C20.736 17.7473 20.9329 17.7473 21.0982 17.736C21.2759 17.7239 21.4712 17.6963 21.6697 17.614C22.2115 17.3896 22.5053 16.9838 22.6391 16.5471C22.7465 16.1964 22.7498 15.8271 22.75 15.4636C22.7503 15.2035 22.7506 14.8114 22.6391 14.4474C22.5212 14.0624 22.2789 13.7015 21.8521 13.4677C21.7564 13.4152 21.6863 13.3229 21.6754 13.2143L21.5002 11.4621C21.4409 10.8689 21.3906 10.366 21.305 9.95605C21.2138 9.51978 21.0709 9.12332 20.7868 8.76796C20.5028 8.41259 20.1475 8.18584 19.742 8.00084C19.4283 7.85768 18.8642 7.69522 18.4892 7.59448C18.1101 7.49263 18.1092 7.49123 17.8996 7.17819L17.8972 7.17451C17.7182 6.9072 17.4709 6.5377 17.3278 6.32372L17.2338 6.18293C16.8266 5.57265 16.416 4.9574 15.9289 4.40811C15.6783 4.12561 15.3601 3.81305 14.9919 3.61975C14.2625 3.23684 13.4093 3.24167 12.5992 3.24626ZM4.31324 10.4973L8.24997 10.4973L8.24997 13.2473L4.11324 13.2473L4.11324 10.6972C4.11324 10.5868 4.20279 10.4973 4.31324 10.4973ZM15.1992 6.70687C14.7835 6.07228 14.3055 5.34272 13.5712 5.2753C13.2202 5.24308 12.8664 5.24285 12.5132 5.24515C12.3241 5.24638 12.2295 5.247 12.1714 5.3055C12.1132 5.364 12.1132 5.45842 12.1132 5.64725L12.1132 7.59465C12.1132 7.78427 12.1132 7.87908 12.1721 7.93771C12.231 7.99633 12.3258 7.99595 12.5155 7.99519C13.4596 7.99138 14.7576 7.99225 15.7314 7.99388C15.899 7.99415 15.9828 7.99429 16.0107 7.93975C16.0386 7.8852 15.9898 7.81774 15.8921 7.68282C15.7692 7.51299 15.6395 7.33813 15.5132 7.16782C15.4105 7.02933 15.3069 6.8713 15.1992 6.7069L15.1992 6.70688L15.1992 6.70687ZM12.8633 9.75C12.4491 9.75 12.1133 10.0858 12.1133 10.5C12.1133 10.9142 12.4491 11.25 12.8633 11.25H13.8633C14.2775 11.25 14.6133 10.9142 14.6133 10.5C14.6133 10.0858 14.2775 9.75 13.8633 9.75H12.8633Z',
  d12: 'M7 14C5.61929 14 4.5 15.1193 4.5 16.5C4.5 17.8807 5.61929 19 7 19C8.38071 19 9.5 17.8807 9.5 16.5C9.5 15.1193 8.38071 14 7 14ZM2.5 16.5C2.5 14.0147 4.51472 12 7 12C9.48528 12 11.5 14.0147 11.5 16.5C11.5 18.9853 9.48528 21 7 21C4.51472 21 2.5 18.9853 2.5 16.5Z',
  d13: 'M17 14C15.6193 14 14.5 15.1193 14.5 16.5C14.5 17.8807 15.6193 19 17 19C18.3807 19 19.5 17.8807 19.5 16.5C19.5 15.1193 18.3807 14 17 14ZM12.5 16.5C12.5 14.0147 14.5147 12 17 12C19.4853 12 21.5 14.0147 21.5 16.5C21.5 18.9853 19.4853 21 17 21C14.5147 21 12.5 18.9853 12.5 16.5Z',
  d14: 'M12.339 3.24725C12.4251 3.24725 12.5119 3.24675 12.5992 3.24626C13.4093 3.24167 14.2625 3.23684 14.9919 3.61975C15.3601 3.81305 15.6783 4.12561 15.9289 4.40811C16.416 4.9574 16.8266 5.57265 17.2338 6.18293L17.3278 6.32372C17.4709 6.5377 17.7182 6.9072 17.8972 7.17451L17.8996 7.17819C18.1092 7.49123 18.1101 7.49263 18.4892 7.59448C18.8642 7.69522 19.4283 7.85768 19.742 8.00084C20.1475 8.18584 20.5028 8.41259 20.7868 8.76796C21.0709 9.12332 21.2138 9.51978 21.305 9.95605C21.3906 10.366 21.4409 10.8689 21.5002 11.4621L21.6754 13.2143C21.6863 13.3229 21.7564 13.4152 21.8521 13.4677C22.2789 13.7015 22.5212 14.0624 22.6391 14.4474C22.7506 14.8114 22.7503 15.2035 22.75 15.4636C22.7498 15.8271 22.7465 16.1964 22.6391 16.5471C22.5053 16.9838 22.2115 17.3896 21.6697 17.614C21.4712 17.6963 21.2759 17.7239 21.0982 17.736C20.9329 17.7473 20.736 17.7473 20.5218 17.7473H19.1661C19.3787 17.3796 19.5004 16.9528 19.5004 16.4976C19.5004 15.1169 18.3811 13.9976 17.0004 13.9976C15.6197 13.9976 14.5004 15.1169 14.5004 16.4976C14.5004 16.9528 14.622 17.3796 14.8346 17.7473H9.16614C9.37872 17.3796 9.50038 16.9528 9.50038 16.4976C9.50038 15.1169 8.38109 13.9976 7.00038 13.9976C5.61966 13.9976 4.50038 15.1169 4.50038 16.4976C4.50038 16.9528 4.62203 17.3796 4.83461 17.7473H3.47824C3.26397 17.7473 3.06712 17.7473 2.9018 17.736C2.72415 17.7239 2.52881 17.6963 2.33031 17.614C1.7885 17.3896 1.49468 16.9838 1.36091 16.5471C1.25672 16.207 1.2498 15.8499 1.25 15.4973C1.2498 15.1446 1.25672 14.7875 1.36091 14.4474C1.46601 14.1043 1.66991 13.7802 2.01525 13.5483C2.07455 13.5084 2.11324 13.4432 2.11324 13.3717V9.49725C2.11324 9.23203 2.2186 8.97768 2.40614 8.79014C2.59367 8.60261 2.84803 8.49725 3.11324 8.49725H8.04997C8.16042 8.49725 8.24997 8.40771 8.24997 8.29725L8.24997 5.95251C8.24992 5.51969 8.24987 5.12286 8.29327 4.80005C8.34106 4.44457 8.45351 4.06884 8.76253 3.75982C9.07156 3.4508 9.44728 3.33835 9.80276 3.29056C10.4055 3.20952 11.0296 3.22333 11.6461 3.23698C11.8786 3.24213 12.1101 3.24725 12.339 3.24725ZM8.24997 10.4973H4.31324C4.20279 10.4973 4.11324 10.5868 4.11324 10.6972V13.2473H8.24997L8.24997 10.4973ZM13.5712 5.2753C14.3055 5.34272 14.7835 6.07228 15.1992 6.70687C15.3069 6.87127 15.4104 7.02933 15.5132 7.16782C15.6395 7.33813 15.7692 7.51299 15.8921 7.68282C15.9898 7.81774 16.0386 7.8852 16.0107 7.93975C15.9828 7.99429 15.899 7.99415 15.7314 7.99388C14.7576 7.99225 13.4596 7.99138 12.5155 7.99519C12.3258 7.99595 12.231 7.99633 12.1721 7.93771C12.1132 7.87908 12.1132 7.78427 12.1132 7.59465V5.64725C12.1132 5.45842 12.1132 5.364 12.1714 5.3055C12.2295 5.247 12.3241 5.24638 12.5132 5.24515C12.8664 5.24285 13.2202 5.24308 13.5712 5.2753Z',
  d15: 'M13.5712 5.27318C14.4958 5.35807 15.014 6.49265 15.5132 7.16569C15.6396 7.336 15.7693 7.51087 15.8922 7.6807C15.9898 7.81562 16.0387 7.88308 16.0107 7.93762C15.9828 7.99217 15.899 7.99203 15.7314 7.99175C14.7576 7.99013 13.4596 7.98926 12.5156 7.99306C12.3259 7.99383 12.231 7.99421 12.1721 7.93558C12.1133 7.87696 12.1133 7.78215 12.1133 7.59253V5.64513C12.1133 5.45629 12.1133 5.36188 12.1714 5.30338C12.2295 5.24488 12.3241 5.24426 12.5133 5.24303C12.8664 5.24073 13.2203 5.24096 13.5712 5.27318Z',
  d16: 'M8.56797 3.99609H8C7.44772 3.99609 7 4.44381 7 4.99609C7 5.54838 7.44772 5.99609 8 5.99609H8.24899V5.95104C8.24894 5.51823 8.24889 5.1214 8.29229 4.79858C8.32838 4.53015 8.40134 4.25018 8.56797 3.99609Z',
  d17: 'M12.1133 10.5C12.1133 10.0858 12.4491 9.75 12.8633 9.75H13.8633C14.2775 9.75 14.6133 10.0858 14.6133 10.5C14.6133 10.9142 14.2775 11.25 13.8633 11.25H12.8633C12.4491 11.25 12.1133 10.9142 12.1133 10.5Z',
  d18: 'M21 15V10L18 9L15 4.00012L9 4V14.5',
  d19: 'M9 10.5H3V15',
  d20: 'M18 9H12V4',
  d21: 'M9 6H6',
  d22: 'M12 12H14',
  d23: 'M13.5 18H10.5M9.5 15H14.5M5 15H2V18H4.5M19 15H22V18H19.5',
  d24: 'M10.5 17C10.5 18.6569 9.15685 20 7.5 20C5.84315 20 4.5 18.6569 4.5 17C4.5 15.3431 5.84315 14 7.5 14C9.15685 14 10.5 15.3431 10.5 17Z',
  d25: 'M16.5 20C18.1569 20 19.5 18.6569 19.5 17C19.5 15.3431 18.1569 14 16.5 14C14.8431 14 13.5 15.3431 13.5 17C13.5 18.6569 14.8431 20 16.5 20Z',
  d26: 'M6 5.25H9V6.75H6V5.25Z',
  d27: 'M9.00002 3.25C8.8011 3.25 8.61033 3.32901 8.46968 3.46966C8.32902 3.61032 8.25 3.80108 8.25 4V9.75H3C2.58579 9.75 2.25 10.0858 2.25 10.5V14.25H2C1.58579 14.25 1.25 14.5858 1.25 15V18C1.25 18.4142 1.58579 18.75 2 18.75H4.92672C4.59414 17.5488 4.43608 14.9671 6.46449 14.25H3.75V11.25H8.25V13.8196C10.3867 14.8262 10.4663 17.5259 10.239 18.75H13.734C13.3922 17.25 13.3612 14.25 15.9707 14.25C19.2327 14.25 19.6398 16.1779 19.0463 18.75H22C22.4142 18.75 22.75 18.4142 22.75 18V15C22.75 14.5858 22.4142 14.25 22 14.25H21.75V10C21.75 9.67718 21.5434 9.39057 21.2372 9.28849L18.5004 8.37622L15.6431 3.61424C15.5076 3.38835 15.2635 3.25013 15 3.25012L9.00002 3.25ZM12.75 8.24992V4.75L14.5754 4.75004L16.6753 8.24992H12.75ZM12 12.75H14V11.25H12V12.75Z',
  d28: 'M7.5 14.75C6.25736 14.75 5.25 15.7574 5.25 17C5.25 18.2426 6.25736 19.25 7.5 19.25C8.74264 19.25 9.75 18.2426 9.75 17C9.75 15.7574 8.74264 14.75 7.5 14.75ZM3.75 17C3.75 14.9289 5.42893 13.25 7.5 13.25C9.57107 13.25 11.25 14.9289 11.25 17C11.25 19.0711 9.57107 20.75 7.5 20.75C5.42893 20.75 3.75 19.0711 3.75 17Z',
  d29: 'M16.5 14.75C15.2574 14.75 14.25 15.7574 14.25 17C14.25 18.2426 15.2574 19.25 16.5 19.25C17.7426 19.25 18.75 18.2426 18.75 17C18.75 15.7574 17.7426 14.75 16.5 14.75ZM12.75 17C12.75 14.9289 14.4289 13.25 16.5 13.25C18.5711 13.25 20.25 14.9289 20.25 17C20.25 19.0711 18.5711 20.75 16.5 20.75C14.4289 20.75 12.75 19.0711 12.75 17Z',
} as const;

export const IconTruckMonsterStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-monster-stroke-rounded IconTruckMonsterStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckMonsterDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-monster-duotone-rounded IconTruckMonsterDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckMonsterTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-monster-twotone-rounded IconTruckMonsterTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckMonsterSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-monster-solid-rounded IconTruckMonsterSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckMonsterBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-monster-bulk-rounded IconTruckMonsterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckMonsterStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-monster-stroke-sharp IconTruckMonsterStrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckMonsterSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-monster-solid-sharp IconTruckMonsterSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTruckMonster: TheIconSelfPack = {
  name: 'TruckMonster',
  StrokeRounded: IconTruckMonsterStrokeRounded,
  DuotoneRounded: IconTruckMonsterDuotoneRounded,
  TwotoneRounded: IconTruckMonsterTwotoneRounded,
  SolidRounded: IconTruckMonsterSolidRounded,
  BulkRounded: IconTruckMonsterBulkRounded,
  StrokeSharp: IconTruckMonsterStrokeSharp,
  SolidSharp: IconTruckMonsterSolidSharp,
};