import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 13L4.5 14',
  d2: 'M21.5 13.5L19.5 14',
  d3: 'M8 18.5L8.24567 17.8858C8.61101 16.9725 8.79368 16.5158 9.17461 16.2579C9.55553 16 10.0474 16 11.0311 16H12.9689C13.9526 16 14.4445 16 14.8254 16.2579C15.2063 16.5158 15.389 16.9725 15.7543 17.8858L16 18.5',
  d4: 'M2 18V20.882C2 21.2607 2.24075 21.607 2.62188 21.7764C2.86918 21.8863 3.10538 22 3.39058 22H5.10942C5.39462 22 5.63082 21.8863 5.87812 21.7764C6.25925 21.607 6.5 21.2607 6.5 20.882V19',
  d5: 'M17.5 19V20.882C17.5 21.2607 17.7408 21.607 18.1219 21.7764C18.3692 21.8863 18.6054 22 18.8906 22H20.6094C20.8946 22 21.1308 21.8863 21.3781 21.7764C21.7592 21.607 22 21.2607 22 20.882V18',
  d6: 'M20 9.5L21 9',
  d7: 'M4 9.5L3 9',
  d8: 'M4.5 10.5L5.5883 7.23509C6.02832 5.91505 6.24832 5.25503 6.7721 4.87752C7.29587 4.5 7.99159 4.5 9.38304 4.5H14.617C16.0084 4.5 16.7041 4.5 17.2279 4.87752C17.7517 5.25503 17.9717 5.91505 18.4117 7.23509L19.5 10.5',
  d9: 'M15.5 4.5C15.2598 3.29343 15.1397 2.69013 14.8538 2.34507C14.5679 2 14.1881 2 13.4285 2H10.5715C9.8119 2 9.43212 2 9.14621 2.34507C8.86029 2.69013 8.74019 3.29342 8.5 4.5',
  d10: 'M4.5 10.5H19.5C20.4572 11.4572 22 12.7902 22 14.2774V17.5552C22 18.094 21.6205 18.5474 21.1168 18.6104L18 19H6L2.88316 18.6104C2.37955 18.5474 2 18.094 2 17.5552V14.2774C2 12.7902 3.54279 11.4572 4.5 10.5Z',
  d11: 'M2 20.882V14.2774C2 12.9477 3.23332 11.7413 4.17872 10.8165C4.29069 10.707 4.39863 10.6014 4.5 10.5H19.5C19.6014 10.6014 19.7093 10.707 19.8213 10.8165C20.7667 11.7413 22 12.9477 22 14.2774V20.882C22 21.2607 21.7592 21.607 21.3781 21.7764L21.3333 21.7964C21.102 21.8997 20.8773 22 20.6094 22H18.8906C18.6227 22 18.398 21.8997 18.1667 21.7964L18.1219 21.7764C17.7408 21.607 17.5 21.2607 17.5 20.882V19H6.5V20.882C6.5 21.2607 6.25925 21.607 5.87812 21.7764L5.83329 21.7964C5.60203 21.8997 5.37734 22 5.10942 22H3.39058C3.12266 22 2.89798 21.8997 2.66672 21.7964L2.62188 21.7764C2.24075 21.607 2 21.2607 2 20.882ZM8 18.5L8.24567 17.8858C8.61101 16.9725 8.79368 16.5158 9.17461 16.2579C9.55553 16 10.0474 16 11.0311 16H12.9689C13.9526 16 14.4445 16 14.8254 16.2579C15.2063 16.5158 15.389 16.9725 15.7543 17.8858L16 18.5H8Z',
  d12: 'M13.4285 2H10.5715C9.8119 2 9.43212 2 9.14621 2.34507C8.39754 3.24862 9.59402 4.5 10.7674 4.5H13.2326C14.406 4.5 15.6025 3.24862 14.8538 2.34507C14.5679 2 14.1881 2 13.4285 2Z',
  d13: 'M3.96967 9.96967C4.11032 9.82902 4.30109 9.75 4.5 9.75L19.5 9.75C19.6989 9.75 19.8897 9.82902 20.0303 9.96967C20.1208 10.0602 20.221 10.158 20.3276 10.2623L20.3276 10.2623C20.7465 10.6718 21.2658 11.1793 21.6972 11.7247C22.2371 12.4072 22.75 13.2788 22.75 14.2774V17.5552C22.75 18.4365 22.1232 19.2404 21.2099 19.3546L18.093 19.7442C18.0622 19.7481 18.0311 19.75 18 19.75L6 19.75C5.9689 19.75 5.93783 19.7481 5.90697 19.7442L2.79013 19.3546C1.87684 19.2404 1.25 18.4365 1.25 17.5552L1.25 14.2774C1.25 13.2788 1.76286 12.4072 2.30284 11.7247C2.73425 11.1793 3.25346 10.6718 3.6724 10.2623L3.67245 10.2622C3.77905 10.158 3.87915 10.0602 3.96967 9.96967ZM21.7278 13.3183C21.8282 13.7201 21.5839 14.1273 21.1821 14.2278L19.6821 14.6028C19.2802 14.7032 18.873 14.4589 18.7726 14.0571C18.6721 13.6552 18.9164 13.248 19.3183 13.1476L20.8183 12.7726C21.2201 12.6721 21.6273 12.9164 21.7278 13.3183ZM2.32934 13.1648C2.51459 12.7943 2.96509 12.6441 3.33557 12.8294L4.83557 13.5794C5.20606 13.7646 5.35623 14.2151 5.17098 14.5856C4.98574 14.9561 4.53524 15.1062 4.16475 14.921L2.66475 14.171C2.29427 13.9858 2.1441 13.5353 2.32934 13.1648ZM11.0314 16H12.9692C13.9529 16 14.4448 16 14.8257 16.2579C15.1214 16.4581 15.2976 16.778 15.5325 17.3382C15.6357 17.5843 15.6873 17.7073 15.6279 17.7966C15.5686 17.8858 15.4337 17.8858 15.1639 17.8858H8.83682C8.56701 17.8858 8.4321 17.8858 8.37275 17.7966C8.3134 17.7073 8.36499 17.5843 8.46817 17.3382C8.70306 16.778 8.87929 16.4581 9.17494 16.2579C9.55587 16 10.0477 16 11.0314 16Z',
  d14: 'M20.6094 22.7514H18.8906C18.6054 22.7514 18.3692 22.6377 18.1219 22.5278C17.7408 22.3584 17.5 22.0122 17.5 21.6334V21.1514C17.5 20.9666 17.5 20.8742 17.5582 20.8157C17.6164 20.7572 17.7109 20.7567 17.9 20.7557C18.0063 20.7552 18.1123 20.751 18.2171 20.7379L21.3339 20.3483C21.3676 20.3441 21.4009 20.3393 21.434 20.334C21.7176 20.2882 21.8593 20.2653 21.9297 20.3252C22 20.3851 22 20.5124 22 20.767V21.6334C22 22.0122 21.7592 22.3584 21.3781 22.5278C21.1308 22.6377 20.8946 22.7514 20.6094 22.7514Z',
  d15: 'M3.39058 22.7514H5.10942C5.39461 22.7514 5.63082 22.6377 5.87811 22.5278C6.25925 22.3584 6.5 22.0122 6.5 21.6334V21.1514C6.5 20.9666 6.5 20.8742 6.44179 20.8157C6.38358 20.7572 6.28906 20.7567 6.10003 20.7557C5.99374 20.7552 5.88769 20.751 5.78292 20.7379L2.6661 20.3483C2.63245 20.3441 2.59906 20.3393 2.56595 20.334C2.28245 20.2882 2.14069 20.2653 2.07035 20.3252C2 20.3851 2 20.5124 2 20.767V21.6334C2 22.0122 2.24075 22.3584 2.62189 22.5278C2.86918 22.6377 3.10539 22.7514 3.39058 22.7514Z',
  d16: 'M2.10579 8.55301C2.35278 8.05903 2.95345 7.8588 3.44743 8.10579L4.44743 8.60579C4.94141 8.85278 5.14164 9.45345 4.89465 9.94743C4.64766 10.4414 4.04698 10.6416 3.55301 10.3946L2.55301 9.89465C2.05903 9.64766 1.8588 9.04698 2.10579 8.55301ZM21.8946 8.55301C22.1416 9.04698 21.9414 9.64766 21.4474 9.89465L20.4474 10.3946C19.9535 10.6416 19.3528 10.4414 19.1058 9.94743C18.8588 9.45345 19.059 8.85278 19.553 8.60579L20.553 8.10579C21.047 7.8588 21.6477 8.05903 21.8946 8.55301Z',
  d17: 'M16.224 4.29547C16.7073 4.34413 17.175 4.45188 17.609 4.72758C18.0497 5.00757 18.3276 5.37921 18.5444 5.79001C18.7416 6.1637 18.919 6.63293 19.1173 7.15745L20.1913 9.9975C20.3745 10.4819 20.1146 11.0174 19.6109 11.1936C19.1071 11.3697 18.5502 11.1198 18.3671 10.6354L17.3108 7.84219C17.0892 7.25629 16.951 6.89536 16.8135 6.63474C16.6896 6.40014 16.6066 6.32795 16.539 6.28497C16.4646 6.23774 16.3406 6.184 16.0217 6.1519C15.6827 6.11779 15.2357 6.1166 14.5399 6.1166H9.46009C8.76433 6.1166 8.31727 6.11779 7.97828 6.1519C7.65937 6.184 7.53537 6.23774 7.46104 6.28497C7.39338 6.32795 7.31036 6.40014 7.18655 6.63474C7.049 6.89536 6.91076 7.25629 6.68921 7.84218L5.63294 10.6354C5.44976 11.1198 4.89289 11.3697 4.38914 11.1936C3.88539 11.0174 3.62552 10.4819 3.8087 9.9975L4.86496 7.20429L4.88267 7.15745C5.08097 6.63293 5.25836 6.1637 5.45558 5.79001C5.67239 5.37921 5.95031 5.00757 6.39101 4.72758C6.82496 4.45188 7.29268 4.34413 7.77601 4.29547C7.88857 3.73004 7.98174 3.2644 8.08333 2.89873C8.18786 2.52249 8.32365 2.16232 8.5687 1.86658C8.84131 1.53757 9.17445 1.37646 9.5404 1.3065C9.83736 1.24973 10.1856 1.24987 10.5218 1.25001L10.5715 1.25003L13.4285 1.25003L13.4783 1.25001C13.8144 1.24987 14.1626 1.24973 14.4596 1.3065C14.8256 1.37646 15.1587 1.53757 15.4313 1.86658C15.6764 2.16232 15.8122 2.52249 15.9167 2.89873C16.0183 3.2644 16.1114 3.73004 16.224 4.29547Z',
  d18: 'M21.6972 11.7247C21.2658 11.1793 20.7465 10.6718 20.3276 10.2623C20.24 10.1767 20.2342 10.111 20.1913 9.9975L19.1173 7.15745C18.919 6.63293 18.7416 6.1637 18.5444 5.79001C18.3276 5.37921 18.0497 5.00758 17.609 4.72759C17.175 4.45184 16.7072 4.34409 16.2238 4.29544C15.7717 4.24995 15.2221 4.24997 14.5875 4.25H14.5875H9.41244H9.4124C8.77787 4.24997 8.22829 4.24995 7.77624 4.29544C7.29283 4.34409 6.82503 4.45184 6.39101 4.72759C5.95031 5.00758 5.67239 5.37921 5.45558 5.79001C5.25837 6.1637 5.08097 6.63293 4.88267 7.15745L3.8087 9.9975C3.76578 10.111 3.75999 10.1767 3.6724 10.2623C3.25346 10.6718 2.73425 11.1793 2.30284 11.7247C1.76286 12.4072 1.25 13.2788 1.25 14.2774V17.5552C1.25 18.4365 1.87684 19.2404 2.79013 19.3546L5.90697 19.7442C5.93783 19.7481 5.9689 19.75 6 19.75H18C18.0311 19.75 18.0622 19.7481 18.093 19.7442L21.2099 19.3546C22.1232 19.2404 22.75 18.4365 22.75 17.5552V14.2774C22.75 13.2788 22.2371 12.4072 21.6972 11.7247Z',
  d19: 'M6.1729 9.2091L6.68958 7.84277C6.91114 7.25687 7.04938 6.89595 7.18693 6.63533C7.3715 6.2856 7.58951 6.19165 7.97866 6.15249C8.31765 6.11837 8.7647 6.11719 9.46046 6.11719H14.5403C15.2361 6.11719 15.6831 6.11837 16.0221 6.15249C16.4113 6.19165 16.6293 6.2856 16.8138 6.63533C16.9514 6.89595 17.0896 7.25687 17.3112 7.84277L17.8279 9.2091C17.9208 9.45501 17.9673 9.57797 17.9077 9.66428C17.8481 9.75059 17.7166 9.75059 17.4537 9.75059H6.54704H6.54704C6.28414 9.75059 6.15268 9.75059 6.09305 9.66428C6.03341 9.57797 6.07991 9.45501 6.1729 9.2091Z',
  d20: 'M11.0314 16H12.9692C13.9529 16 14.4448 16 14.8257 16.2735C15.1214 16.4858 15.2976 16.8251 15.5325 17.4192C15.6357 17.6802 15.6873 17.8107 15.6279 17.9054C15.5686 18 15.4337 18 15.1639 18H8.83682C8.56701 18 8.4321 18 8.37275 17.9054C8.3134 17.8107 8.36499 17.6802 8.46817 17.4192C8.70306 16.8251 8.87929 16.4858 9.17494 16.2735C9.55587 16 10.0477 16 11.0314 16ZM21.1821 14.2278C21.5839 14.1273 21.8282 13.7201 21.7278 13.3183C21.6273 12.9164 21.2201 12.6721 20.8183 12.7726L19.3183 13.1476C18.9164 13.248 18.6721 13.6552 18.7726 14.0571C18.873 14.4589 19.2802 14.7032 19.6821 14.6028L21.1821 14.2278ZM3.33557 12.8294C2.96509 12.6441 2.51459 12.7943 2.32934 13.1648C2.1441 13.5353 2.29427 13.9858 2.66475 14.171L4.16475 14.921C4.53524 15.1062 4.98574 14.9561 5.17098 14.5856C5.35623 14.2151 5.20606 13.7646 4.83557 13.5794L3.33557 12.8294Z',
  d21: 'M3.54194 10.3846L2.55301 9.89015C2.05903 9.64316 1.8588 9.04249 2.10579 8.54851C2.35278 8.05453 2.95345 7.85431 3.44743 8.1013L4.35259 8.55388L3.8087 9.99218C3.79933 10.017 3.79172 10.0395 3.78465 10.0604C3.75935 10.1353 3.74086 10.19 3.6724 10.257C3.62988 10.2985 3.58633 10.3411 3.54194 10.3846ZM7.77618 4.29013C7.88866 3.72509 7.98179 3.25972 8.08333 2.89424C8.18786 2.518 8.32365 2.15783 8.5687 1.86209C8.84131 1.53308 9.17445 1.37197 9.5404 1.30201C9.83736 1.24524 10.1856 1.24538 10.5218 1.24552L10.5715 1.24554H13.4285L13.4783 1.24552C13.8144 1.24538 14.1626 1.24524 14.4596 1.30201C14.8256 1.37197 15.1587 1.53308 15.4313 1.86209C15.6764 2.15783 15.8122 2.518 15.9167 2.89424C16.0182 3.25972 16.1114 3.72509 16.2238 4.29013C16.2238 4.29013 16.2238 4.29013 16.2238 4.29012C15.7717 4.24463 15.2221 4.24465 14.5875 4.24468H14.5875L9.41244 4.24468H9.4124C8.77787 4.24465 8.22829 4.24463 7.77624 4.29012C7.77622 4.29013 7.7762 4.29013 7.77618 4.29013ZM19.6475 8.55406L20.553 8.1013C21.047 7.85431 21.6477 8.05453 21.8946 8.54851C22.1416 9.04249 21.9414 9.64316 21.4474 9.89015L20.4582 10.3848C20.4138 10.3412 20.3701 10.2986 20.3276 10.2569C20.2591 10.19 20.2406 10.1353 20.2154 10.0604C20.2083 10.0395 20.2007 10.017 20.1913 9.99218L19.6475 8.55406Z',
  d22: 'M2 14.5H5',
  d23: 'M22 14.5H19',
  d24: 'M8 18.5L9.5 15.5H14.5L16 18.5',
  d25: 'M2 18.5V21.5H6.5V18.5',
  d26: 'M17.5 18.5V21.5H22V18.5',
  d27: 'M8.5 5.5V2.5H15.5V5.5',
  d28: 'M19.5 11.5L22 9.5',
  d29: 'M4.5 11.5L2 9.5',
  d30: 'M4.5 11.5L6 5.5H18L19.5 11.5',
  d31: 'M2 18.5V14.4996L4.5 11.5H19.5L22 14.4996V18.5H2Z',
  d32: 'M8.5 2V5.25H15.5V2H8.5Z',
  d33: 'M2.5 22V20H6.5V22H2.5Z',
  d34: 'M17.5 22V20H21.5V22H17.5Z',
  d35: 'M6.13636 4.5C5.68793 4.5 5.29703 4.80189 5.18827 5.23222L3.77659 10.8177L1.47655 13.5474C1.33017 13.7211 1.25 13.9401 1.25 14.1663V18.0333C1.25 18.5672 1.68754 19 2.22727 19H21.7727C22.3125 19 22.75 18.5672 22.75 18.0333V14.1663C22.75 13.9401 22.6698 13.7211 22.5235 13.5474L20.2234 10.8177L18.8117 5.23222C18.703 4.80189 18.3121 4.5 17.8636 4.5H6.13636ZM17.1004 6.43359L18.0776 10.3003L5.92188 10.3003L6.89915 6.43359H17.1004ZM5 15.5H3V14H5V15.5ZM19 15.5H21V14H19V15.5ZM9.5 15H14.5L15.375 17H8.625L9.5 15Z',
  d36: 'M22.6244 10.0305L20.1244 12.0305L18.875 10.4688L21.375 8.46875L22.6244 10.0305Z',
  d37: 'M2.62439 8.46875L5.12439 10.4688L3.875 12.0305L1.375 10.0305L2.62439 8.46875Z',
} as const;

export const IconTaxiStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taxi-stroke-rounded IconTaxiStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaxiDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taxi-duotone-rounded IconTaxiDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaxiTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taxi-twotone-rounded IconTaxiTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaxiSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taxi-solid-rounded IconTaxiSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTaxiBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taxi-bulk-rounded IconTaxiBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTaxiStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taxi-stroke-sharp IconTaxiStrokeSharp"
    >
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d31} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaxiSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taxi-solid-sharp IconTaxiSolidSharp"
    >
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d37} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTaxi: TheIconSelfPack = {
  name: 'Taxi',
  StrokeRounded: IconTaxiStrokeRounded,
  DuotoneRounded: IconTaxiDuotoneRounded,
  TwotoneRounded: IconTaxiTwotoneRounded,
  SolidRounded: IconTaxiSolidRounded,
  BulkRounded: IconTaxiBulkRounded,
  StrokeSharp: IconTaxiStrokeSharp,
  SolidSharp: IconTaxiSolidSharp,
};