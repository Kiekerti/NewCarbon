import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Grid, Column } from "gatsby-theme-carbon/src/components/Grid";
import {
  footer,
  grid,
  nav,
  listItem,
  logo,
  content,
} from "gatsby-theme-carbon/src/components/Footer/Footer.module.scss";

const Footer = ({ Content, links, Logo }) => {
  const { firstCol, secondCol } = links;
  const { site } = useStaticQuery(graphql`
    query BUILD_TIME_QUERY_SHADOWED {
      site {
        buildTime(formatString: "YYYY年MM月DD日")
      }
    }
  `);
  return (
    <footer className={footer}>
      <Grid className={grid}>
        <Row>
          <Column colLg={2} colMd={2}>
            <ul className={nav}>
              {firstCol &&
                firstCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
              <li data-autoid="dds--privacy-cp" className={listItem} />
            </ul>
          </Column>
          <Column colLg={2} colMd={2}>
            <ul className={nav}>
              {secondCol &&
                secondCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
            </ul>
          </Column>
          <Column
            className={content}
            colLg={4}
            colMd={4}
            colSm={3}
            offsetLg={2}
          >
            <Content buildTime={site.buildTime} />
          </Column>
        </Row>
        <Row>
          <Column colLg={3}>
            <Logo />
          </Column>
        </Row>
      </Grid>
    </footer>
  );
};

const IBMLogo = () => (
  <svg className={logo} width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4403 137.532C33.0681 138.486 34.3028 138.339 34.8329 137.601C40.8693 139.008 47.0578 138.453 53.1781 138.108C70.4248 137.406 87.769 139.607 104.946 137.304C106.768 136.94 108.889 137.114 110.38 135.85C112.764 133.054 112.251 128.81 111.871 125.405C108.826 106.211 104.497 86.8417 102.338 67.5246C102.218 65.6843 102.975 63.3982 103.655 61.6683C103.823 61.3465 104.883 61.0315 105.434 60.6602C107.123 59.447 106.849 57.273 105.385 55.9973C100.643 52.6535 94.0424 53.8222 89.0121 55.0557C88.048 51.4336 86.9644 49.0517 85.1291 48.8156C81.636 48.3665 73.1616 46.9944 70.551 48.8156C69.3023 49.6867 68.501 52.7566 67.6022 54.2522C61.0465 54.1361 47.7414 45.3619 45.006 55.2422C42.7836 55.3955 40.5824 57.3367 41.0075 59.6662C38.1253 62.2137 40.3986 66.0342 40.3587 69.2055C39.9799 75.9342 36.3403 81.9517 34.8262 88.4516C31.3651 101.059 27.4477 123.99 31.7404 136.295C31.6481 136.247 31.4463 136.32 31.5769 136.422C32.063 136.559 32.1262 137.172 32.4403 137.532Z" fill="white" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M107.246 133.732C106.441 127.266 105.881 119.46 105.875 112.941C105.875 112.326 106.827 112.328 106.827 112.941C106.834 119.46 107.394 127.266 108.198 133.732C108.275 134.34 107.321 134.332 107.246 133.732ZM101.282 93.6399C100.038 94.4012 98.4044 93.8732 97.1732 93.3688C96.6125 93.1395 96.8593 92.2182 97.4262 92.4504C98.3633 92.8341 99.7331 93.3987 100.722 92.8634C101.709 92.3298 101.753 90.8607 101.761 89.8915C101.766 89.2779 102.717 89.2779 102.713 89.8915C102.703 91.2101 102.527 92.878 101.282 93.6399ZM98.9797 123.229C97.7243 122.586 96.6536 121.706 95.7915 120.589C95.4168 120.104 96.2445 119.63 96.6136 120.108C97.3727 121.092 98.361 121.843 99.4604 122.407C100.006 122.687 99.5241 123.509 98.9797 123.229ZM92.9464 89.9783C90.7928 98.6116 89.348 107.399 88.6397 116.27C88.4954 118.07 88.394 119.869 88.3371 121.668C88.2801 122.137 88.2249 122.608 88.1742 123.078C87.9798 124.857 87.831 126.666 87.844 128.456C87.8502 129.26 87.875 130.061 87.9297 130.862C87.8344 130.594 87.7465 130.325 87.6609 130.057C87.4856 129.508 87.3701 128.939 87.192 128.393C87.0444 127.942 86.8539 127.51 86.6764 127.072V127.071C86.73 125.282 86.6083 123.475 86.5468 121.693C86.4668 119.385 86.3682 117.079 86.3169 114.77C86.2144 110.152 86.2657 105.53 86.4325 100.913C86.7666 91.6124 87.6118 82.3554 88.4644 73.0922C88.7011 70.5159 88.9563 67.9413 89.1321 65.3605C89.3096 62.7521 89.3812 60.1392 89.4015 57.524C89.4026 57.3358 89.1169 57.2862 89.0645 57.4682C89.0178 56.8478 88.9361 56.2285 88.7991 55.629C90.8525 56.9391 93.018 58.0717 95.1407 59.2629C96.2586 59.8907 97.3715 60.5285 98.5239 61.0909C99.1572 61.4003 99.7968 61.6854 100.449 61.9542C101.125 62.2331 101.772 62.6163 102.516 62.4224C102.58 62.4055 102.641 62.3819 102.699 62.3509C102.614 62.5115 102.53 62.6715 102.449 62.8332C102.168 63.3916 101.9 63.9529 101.641 64.5186C101.572 64.5693 101.511 64.6398 101.463 64.7316C101.337 64.9779 101.215 65.2269 101.096 65.4794C101.071 65.4568 101.048 65.4343 101.024 65.4118C100.924 65.3177 100.786 65.4591 100.874 65.5616C100.914 65.6079 100.954 65.6535 100.993 65.6997C100.217 67.3705 99.5861 69.1274 98.9358 70.8427C98.1373 72.9502 97.38 75.074 96.6666 77.2113C95.2607 81.4166 94.0204 85.6766 92.9464 89.9783ZM62.1572 121.309C58.1882 123.436 54.4791 125.977 50.9118 128.718C50.4254 129.091 49.9516 128.263 50.4311 127.895C53.9984 125.154 57.7076 122.613 61.6766 120.486C62.2175 120.197 62.6982 121.019 62.1572 121.309ZM48.7513 96.4044C48.5451 96.3892 48.3446 96.2691 48.2922 96.0545C47.9706 94.7376 47.7189 93.3029 48.0179 91.9601C48.1512 91.3606 49.0692 91.6158 48.9362 92.2131C48.7004 93.2725 48.8878 94.4175 49.1327 95.4735C52.5944 95.6251 56.0098 94.3826 59.3218 93.548C59.9174 93.3976 60.1689 94.3172 59.575 94.4665C56.0617 95.3518 52.4276 96.6765 48.7513 96.4044ZM117.668 131.532C117.671 131.525 117.675 131.515 117.678 131.507C117.881 130.89 117.886 130.173 117.909 129.526C117.948 128.376 117.906 127.223 117.803 126.076C117.583 123.662 117.112 121.287 116.549 118.932C115.434 114.269 113.857 109.732 113.001 105.004C111.321 95.7259 111.72 86.0649 108.424 77.1149C107.053 73.3947 105.096 69.8183 102.437 66.8622C102.631 66.2716 102.821 65.6794 103.005 65.0855C103.328 64.0515 103.657 62.9842 103.856 61.9198C103.861 61.8911 103.867 61.8612 103.87 61.8319C105.002 61.3433 106.032 60.4226 106.208 59.1987C106.285 58.6696 106.196 58.0835 105.968 57.573C106.435 57.1419 106.735 56.5818 106.663 55.8318C106.53 54.4191 104.881 54.0557 103.733 53.7796C102.429 53.4663 101.075 53.3795 99.7404 53.5271C99.0671 53.601 98.3999 53.7249 97.7491 53.9109C97.1833 54.0715 96.568 54.2371 96.1144 54.6254C96.0608 54.6705 96.1048 54.7584 96.169 54.7584C97.087 54.755 98.0015 54.418 98.9285 54.3741C99.8999 54.3284 100.869 54.4084 101.821 54.6085C102.752 54.804 103.681 55.0897 104.527 55.5315C104.766 55.6566 105.114 55.7411 104.834 55.9935C104.63 56.1784 104.228 56.1936 103.964 56.2212C103.382 56.2821 102.88 56.6224 102.806 57.2439C102.74 57.7933 103.068 58.4149 103.651 58.5388C103.683 58.5462 103.713 58.5541 103.74 58.5648C103.755 58.5946 103.778 58.6194 103.776 58.5794C103.776 58.5794 103.777 58.5777 103.777 58.5794C103.792 58.6662 103.796 58.7006 103.796 58.7068C103.793 58.6994 103.787 58.6696 103.782 58.6459C103.786 58.6673 103.793 58.7017 103.803 58.753C103.789 58.6972 103.8 58.8341 103.789 58.8555C103.48 59.4269 102.565 59.5881 102.031 59.8343C101.927 59.8822 101.838 59.938 101.762 60.0011C101.636 59.9571 101.507 59.9132 101.377 59.8642C100.738 59.6247 100.1 59.3925 99.4525 59.1767C98.2027 58.7592 96.9371 58.3861 95.6873 57.9669C93.3206 57.1741 91.0322 56.1722 88.7095 55.2649C88.6357 54.9911 88.5501 54.7229 88.4492 54.462C88.4289 54.4073 88.3309 54.3893 88.3202 54.462C88.2847 54.693 88.2559 54.9252 88.2323 55.159C88.2227 55.1804 88.2204 55.2041 88.2249 55.2266C88.0908 56.5841 88.1263 57.9742 88.057 59.3305C87.9714 61.0216 87.7324 62.7008 87.6642 64.3935V64.4245C87.4146 65.8687 87.1881 67.318 86.9836 68.7724C86.7536 68.7009 86.4905 68.7155 86.2217 68.8592C84.3194 69.8752 82.1809 70.4409 80.0301 70.5671C78.9465 70.6303 77.8741 70.5948 76.7967 70.4697C76.0884 70.3885 75.3908 70.2409 74.6915 70.1006C75.0595 68.5583 75.4551 67.0228 75.9014 65.5036C76.2693 64.2538 76.679 63.0107 77.1844 61.8088C77.6955 60.5956 78.3311 59.4365 78.9228 58.2599C79.1955 57.7156 78.8738 56.8833 78.1655 56.9402C77.9558 56.9571 77.7468 56.9701 77.536 56.9797C75.4861 57.0777 73.3538 56.8489 71.3297 56.6449C69.0262 56.4117 66.6916 56.1699 64.4084 55.7901C64.2393 55.7625 64.1706 55.9924 64.3368 56.0482C65.4204 56.4128 66.4905 56.8247 67.6011 57.0974C68.7444 57.3797 69.894 57.6373 71.0536 57.8384C72.1643 58.03 73.28 58.1912 74.3991 58.327C75.1288 58.416 75.867 58.4611 76.6012 58.5208C75.6123 60.1025 74.9299 61.8865 74.336 63.6429C73.573 65.8986 73.0118 68.2196 72.4635 70.5361C71.2892 75.5011 70.3217 80.5162 69.5643 85.5622C69.0217 89.1804 68.5822 92.8127 68.2525 96.4545C68.155 95.3484 68.0356 94.2456 67.9015 93.144C67.4512 89.4864 66.7942 85.853 65.9157 82.2743C65.994 82.1362 66.0312 81.9705 66.0047 81.8099C65.8464 80.8261 65.43 79.9696 65.0643 79.0573C64.7014 77.7832 64.3098 76.5171 63.8883 75.2605C63.4099 73.5491 62.8729 71.8643 62.186 70.2183C61.6608 68.964 61.0618 67.7424 60.3953 66.5573C59.5989 64.9007 58.7239 63.2801 57.7632 61.7305C57.7132 61.5862 57.6323 61.4515 57.5168 61.3388C57.3418 61.0622 57.1644 60.7894 56.9835 60.519C56.8656 60.3431 56.5275 60.4502 56.6168 60.6739C56.6584 60.7787 56.7001 60.8835 56.743 60.9872C52.8299 60.0084 48.993 61.5051 45.2656 62.6106C44.3251 62.8901 43.3751 63.1431 42.4108 63.3251C41.6525 63.4683 40.7691 63.6418 40.0132 63.4846C39.5073 63.3798 39.2834 63.1499 39.5299 62.6095C39.7847 62.05 40.4799 61.6814 41.0835 61.4341C41.3108 61.385 41.5347 61.2983 41.7501 61.167C42.2525 60.8621 42.4728 60.2265 42.2359 59.6844C42.0204 59.1947 41.3918 58.7733 40.8359 58.997C40.7561 59.0291 40.6775 59.0601 40.5989 59.0911C40.5906 59.0792 40.5811 59.0629 40.5728 59.0387C40.493 58.8212 40.4584 59.082 40.493 58.7699C40.5501 58.2599 41.0894 57.7967 41.4585 57.5048C42.3763 56.7774 43.7025 56.2392 44.887 56.5142C44.9763 56.5345 45.0656 56.5593 45.1537 56.5903C46.3739 57.0129 46.968 55.2554 45.993 54.6C45.9334 54.5612 45.8584 54.511 45.7763 54.4524C45.3703 54.1701 44.7763 53.6951 44.9382 53.2662C45.1382 52.7343 46.318 52.4278 46.7644 52.2469C48.3787 51.5921 50.1227 51.2202 51.8632 51.1441C53.6144 51.0681 55.3882 51.2608 57.0775 51.7335C57.9061 51.9646 58.7573 52.3162 59.5406 52.6712C60.2442 52.989 61.7752 53.4094 61.8727 54.3003C61.8941 54.4969 62.1741 54.5634 62.2344 54.3487C62.7145 52.6385 60.8527 51.5346 59.6239 50.8286C58.818 50.3637 57.9037 50.0746 57.0192 49.7901C56.1716 49.5162 55.3061 49.315 54.4227 49.1933C52.5263 48.9336 50.6073 48.9668 48.7263 49.3314C47.0132 49.6638 45.1072 50.2307 43.7227 51.3335C42.8727 52.0097 42.4882 53.0865 42.8299 54.1368C42.8418 54.1712 42.8537 54.2073 42.8656 54.2417C41.3358 54.5155 39.8882 55.3923 38.9204 56.6139C38.1251 57.6181 37.7085 59.015 38.4203 60.1837C38.3906 60.2051 38.3608 60.2276 38.3323 60.2513C37.6537 60.7945 37.1489 61.5828 36.9989 62.445C36.7049 64.1456 37.7323 65.3351 39.1692 65.7904C38.8132 66.1381 38.4716 66.5072 38.137 66.8763C37.3882 67.704 36.6727 68.6056 36.0418 69.5252C34.7632 71.3876 33.6704 73.4162 32.7144 75.4594C30.749 79.6563 29.5097 84.1738 28.8525 88.7538C28.5215 91.0619 28.3001 93.3818 28.2156 95.7113C28.118 98.3676 28.2168 101.024 28.1656 103.681C28.1156 106.234 27.8335 108.726 27.2632 111.215C26.7168 113.596 25.9882 115.929 25.3287 118.279C24.5846 120.925 23.7656 123.56 23.3727 126.288C23.1739 127.677 23.0311 129.069 23.1418 130.473C23.2537 131.903 23.7728 133.126 24.2513 134.456C24.3728 134.796 24.743 134.933 25.0394 134.86C25.1061 135.497 25.3465 136.119 25.7049 136.657C26.4656 137.799 27.637 138.526 28.9787 138.79C30.4906 139.087 32.0489 139.017 33.5799 138.962C35.2406 138.902 36.9025 138.849 38.5632 138.78C40.3019 138.708 42.0405 138.634 43.7792 138.56C43.7217 136.777 43.6531 134.995 43.5756 133.213C43.1564 123.58 42.4963 113.942 42.4788 104.296C42.4451 104.276 42.412 104.253 42.3803 104.222C41.5976 103.465 40.6367 102.968 39.7338 102.376C39.2229 102.04 39.7005 101.216 40.2146 101.554C40.9757 102.053 41.769 102.496 42.4823 103.056C42.4864 102.052 42.4952 101.048 42.5151 100.044C42.5272 99.4309 43.4797 99.4309 43.4675 100.044C43.4078 103.07 43.4278 106.097 43.4962 109.123C43.7177 118.929 44.4141 128.717 44.7313 138.519C49.398 138.32 54.0649 138.119 58.7323 137.948C62.5286 137.81 66.3254 137.672 70.1216 137.534C70.9178 137.505 71.3658 136.936 71.4633 136.191C71.6419 134.822 71.3061 133.406 70.5465 132.254C70.4682 132.135 70.3752 132.029 70.2715 131.939C70.2895 131.118 70.3228 130.296 70.2766 129.476C70.2073 128.223 70.1036 126.97 70.0134 125.718C69.8297 123.211 69.6883 120.7 69.6325 118.187C69.5181 113.162 69.6015 108.131 69.8861 103.112C70.4563 93.0854 71.7834 83.1234 73.9562 73.3159C74.1145 72.6013 74.274 71.8868 74.4397 71.1735C76.1284 72.0514 78.1835 72.3664 80.0301 72.3788C82.3443 72.3929 84.6073 71.8604 86.6979 70.8923C86.6832 71.0005 86.6691 71.1081 86.6562 71.2163C86.073 75.8611 85.581 80.515 85.1528 85.1751C84.2979 94.466 83.7739 103.795 83.8466 113.127C83.8669 115.712 83.9655 118.289 84.0883 120.871C84.2134 123.498 84.405 126.272 85.1359 128.806C85.217 129.085 85.3968 129.246 85.6036 129.304C85.6143 129.674 85.6385 130.044 85.6644 130.408C85.7489 131.593 85.9907 134.055 86.5074 135.129C87.0106 136.177 87.8502 137.008 88.9203 137.466C90.28 138.046 91.7501 137.879 93.1859 137.786C99.4288 137.379 105.667 136.834 111.906 136.355C112.775 136.288 113.644 136.222 114.512 136.155C115.284 136.095 116.083 136.043 116.769 135.641C117.549 135.186 118.157 132.945 117.888 132.019C117.839 131.85 117.765 131.683 117.668 131.532Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.8809 4.29874C80.2109 4.29874 86.6054 6.88359 87.1492 6.93532L87.1639 6.93611C87.4501 6.93611 88.5681 7.78799 90.5172 9.49182L88.4058 13.6117L88.5765 13.775C89.3947 14.5593 90.0923 15.2741 90.6434 15.8376C95.1424 20.4387 95.951 38.5041 94.891 44.8039C93.8305 51.1043 91.8668 57.2689 82.7241 57.2689C73.5815 57.2689 63.4099 51.7692 61.8434 50.0568C60.7986 48.9151 59.6255 48.368 58.3232 48.4159C58.2697 48.3483 58.2167 48.2806 58.1637 48.2136L57.9722 48.1865C56.1704 47.9256 54.8792 47.574 54.0989 47.1322C52.5747 46.2695 50.8994 41.7346 50.8994 40.7355C50.8994 39.7466 48.3979 32.5519 48.3479 31.7905L48.3471 31.7694C48.3471 31.133 45.0791 28.2071 45.0791 27.2779C45.0791 26.3487 44.4204 26.4051 45.0791 23.1308L45.2705 22.1688C45.9715 18.6827 47.3435 12.91 52.5747 10.4016C58.3232 7.64515 69.4973 4.29874 74.8809 4.29874Z" fill="white" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6876 10.2722C54.5546 7.22789 70.831 2.51912 79.0659 3.51729L79.3127 3.5493C79.9698 3.63264 80.6172 3.75892 81.2568 3.93039C83.3225 4.41308 85.4565 5.14398 87.1639 6.36479C88.5889 7.36352 93.0845 8.99449 91.7591 11.6072C92.2505 12.5384 92.4342 13.6888 92.1017 14.606C92.06 14.9228 91.9626 15.2145 91.8375 15.5171C92.8872 17.0666 93.7184 18.8189 94.3912 20.4857C95.5667 24.6803 96.2981 29.0456 96.4057 33.325C96.7618 41.4562 95.8709 51.1685 88.7918 56.4259C84.5154 59.7579 77.8172 59.8694 73.0112 55.7385C72.7385 55.4162 71.456 54.5444 71.8842 54.3917C72.0116 54.5264 72.1423 54.6571 72.2758 54.7862C72.2696 54.7715 72.2685 54.7574 72.2713 54.7416L72.1457 54.6284C71.9096 54.4098 71.6036 54.0925 71.9518 54.155C71.9676 54.1725 71.9839 54.1883 72.0009 54.2058C72.0747 54.2503 72.1305 54.2886 72.1738 54.3224L72.1958 54.3404L72.1891 54.3331C71.9885 54.119 71.8679 53.9009 72.1682 54.0401L72.2077 54.0593C72.3412 54.2001 72.477 54.3348 72.6151 54.4655C72.6128 54.4503 72.6151 54.4345 72.6235 54.4182L72.4945 54.2937C72.3688 54.1703 72.388 54.1697 72.4494 54.07C72.1823 53.6958 72.681 53.9184 72.7159 54.0643C73.0281 53.9905 73.302 54.5765 73.5031 54.6481C82.3128 61.423 95.0967 55.4111 94.8899 36.5318L94.8865 36.1628C94.8257 30.1257 94.318 23.921 91.8223 18.4563C91.5794 17.9299 91.3078 17.4178 91.0091 16.9224C90.8035 16.5508 90.5831 16.1888 90.3459 15.8362C89.6827 15.7827 89.0279 15.6612 88.3827 15.473C88.1612 15.417 87.9426 15.3551 87.7234 15.2824C84.5233 15.457 81.3948 15.647 78.1857 15.8271L77.1833 15.8895C74.465 16.0643 71.6537 16.3443 69.4601 18.0264C67.3081 19.5577 67.2979 22.5773 65.4553 24.2586C62.8283 26.0425 62.8092 27.6511 62.3032 30.28C62.3403 32.2617 63.7141 35.1411 61.1936 35.9751C61.6191 36.5814 61.0263 36.2901 60.9795 36.0777C60.9744 36.0788 60.9699 36.0799 60.9665 36.0799C61.3452 36.7843 60.7879 36.3408 60.7389 36.1143C60.709 36.1058 60.6792 36.0844 60.6499 36.0551C61.0314 36.6722 60.4143 36.24 60.451 36.1273C59.7133 34.9929 58.1947 34.8171 57.1245 35.1175C57.1114 35.158 57.0639 35.1614 57.0342 35.14C52.4833 36.1267 53.6575 45.5517 58.321 44.6405C58.5204 44.5994 58.5159 44.6957 58.5554 44.7047C58.4477 44.4219 58.7515 44.5368 58.7481 44.5965L58.7667 44.5954C58.7813 44.5943 58.7757 44.5926 58.7864 44.5965C58.6822 44.0178 59.2682 44.8563 59.222 44.8907C59.24 44.88 59.2603 44.8738 59.2783 44.8715L59.258 44.8163C59.1606 44.5571 59.169 44.6647 59.1696 44.5165C59.0969 44.3328 59.0912 44.4134 59.1087 44.2939C59.3651 44.0945 59.4412 44.6985 59.5268 44.743C59.3798 44.5379 59.497 44.3706 59.6356 44.4816C60.6859 46.6922 62.0423 48.7686 63.7958 50.4045C63.988 50.556 64.1818 50.7048 64.383 50.8451C65.1285 51.4948 66.273 51.9129 66.9711 52.4888C66.9711 52.4984 66.9661 52.5102 66.9593 52.5221L66.9751 52.5367L66.9914 52.5519L67.2343 52.6686C67.3058 52.7294 67.3701 52.797 67.427 52.872C67.4878 52.9424 67.5414 53.0196 67.5865 53.1019C67.609 53.2022 67.5594 53.2439 67.4642 53.2011C67.4219 53.1864 67.3808 53.1701 67.3391 53.1543C67.3413 53.1582 67.3425 53.1605 67.3447 53.1627C67.3588 53.1836 67.4512 53.3977 67.3447 53.3628L67.3318 53.3583C67.2732 53.3369 67.2151 53.3126 67.1582 53.2901C67.2258 53.3746 67.2878 53.4665 67.3425 53.5437C67.4011 53.6045 67.4366 53.6761 67.4507 53.7572C67.4484 53.8023 67.4236 53.8215 67.378 53.8153C67.3092 53.7927 67.241 53.7691 67.1734 53.7437L67.1926 53.7809C67.2405 53.8756 67.3087 54.0339 67.1875 53.9809C67.0838 53.9488 66.9841 53.9116 66.8843 53.8716C66.8759 53.888 66.859 53.8942 66.8257 53.8784C66.5079 53.7651 66.2008 53.6271 65.9067 53.4642C65.6486 53.276 65.3877 53.0912 65.1279 52.9041C64.8839 52.7576 64.6484 52.5947 64.4236 52.411C62.9179 51.4385 61.5999 50.2027 60.5546 48.8267C58.8056 50.3413 55.3094 48.8943 53.1466 47.7081C51.2337 46.6482 50.4818 44.6884 50.2874 42.5753C49.8832 39.7308 47.5594 38.7571 47.7211 32.5153C47.7175 32.5164 47.7138 32.5164 47.709 32.5164C47.6245 32.4916 47.5425 32.4584 47.4651 32.4155C47.3853 32.3772 47.3103 32.3321 47.24 32.2769L47.1531 32.1569C47.108 32.1319 47.0675 32.1057 47.0365 32.0795L47.0205 32.1002C46.9697 32.1616 47.0038 32.0693 47.0068 32.0509L46.8558 31.8455C46.4978 31.3566 46.1051 30.808 45.7852 30.3693L45.7751 30.3871C45.7679 30.4006 45.7641 30.4103 45.7675 30.4146C45.0062 29.3203 44.2902 27.9986 44.0913 26.7191C43.8564 25.7334 43.9482 24.7178 44.1531 23.8048C45.0316 20.6077 47.9091 13.373 51.6876 10.2722ZM72.348 54.4864L72.3001 54.4436L72.3423 54.4965C72.3643 54.5236 72.3868 54.5478 72.4235 54.5726C72.4212 54.5647 72.4212 54.5563 72.4223 54.5467C72.3976 54.5281 72.3728 54.5078 72.348 54.4864ZM79.0293 5.12369C73.4451 4.64337 67.9527 5.8741 62.6238 7.36386L62.2558 7.46957C59.2259 8.33447 56.0221 9.11277 53.4616 10.9641C49.8841 13.7053 48.0367 18.066 46.4245 22.0922C45.0168 25.0837 45.7364 28.4568 47.8579 30.5455C48.0786 28.4698 48.4549 26.4549 49.043 24.4562C49.1657 24.1439 49.0729 24.0416 49.3374 24.0008C49.7369 29.3872 47.7692 33.3667 51.6632 39.7505C53.3529 42.7629 51.3969 44.9668 56.1684 46.5519L56.2975 46.6009C57.2915 46.9762 58.3773 47.2726 59.3505 47.0629L59.2637 46.9209C59.1746 46.7744 59.1476 46.7034 59.2766 46.6409C59.2733 46.6341 59.2688 46.6268 59.2637 46.6183C59.1594 46.4206 59.058 46.2205 58.9616 46.0182C58.9222 46.0312 58.8828 46.0408 58.8422 46.0515C58.8687 46.1005 58.872 46.1495 58.7982 46.1659C58.5362 46.256 58.2669 46.2921 57.9907 46.2752L57.9316 46.2707C57.6203 46.2515 57.4239 46.1946 57.2483 46.1422C57.1901 46.1326 57.1318 46.123 57.0745 46.1112C56.5097 45.9861 55.9117 45.6672 55.5247 45.3516C51.113 42.8446 51.569 34.3117 57.0068 33.5048C57.1183 28.1325 59.6728 19.0684 63.9119 13.9489C67.7437 9.23984 78.2049 7.19881 85.483 7.9185C85.5895 7.95361 85.6954 7.98911 85.8013 8.02495C86.9244 8.12474 87.9945 8.62518 89.1181 8.85767C88.3111 8.25277 87.396 7.84987 86.4533 7.50749C84.5752 6.35814 82.4215 5.73621 80.3411 5.29759C79.9106 5.1916 79.4733 5.13322 79.0293 5.12369ZM56.7578 37.8211C57.0502 37.6622 57.0167 37.8155 57.084 37.771C59.187 37.5991 61.4545 39.4411 62.6305 40.9772C62.5376 41.0736 62.2862 40.7879 62.2423 40.7423C62.2361 40.7485 62.2293 40.753 62.222 40.7552L62.2547 40.802C62.7314 41.4855 61.7864 40.6808 61.6985 40.5152C61.6827 40.5231 61.6675 40.5281 61.6495 40.5242C61.7244 40.598 61.9532 40.7896 61.9921 40.9259L62.053 40.9761C62.6249 41.4658 62.577 41.8343 61.9279 41.139C61.9436 41.1711 61.9493 41.2009 61.9386 41.2246L61.9611 41.2398C62.2801 41.463 62.5426 42.0845 61.8755 41.4461C61.9448 41.9126 61.2145 41.011 61.1914 41.0172C59.9269 40.0249 58.0663 39.0597 56.4804 38.9295L56.4258 38.9233C56.1349 38.8861 55.9973 38.7999 56.0994 38.6094C55.7411 38.5243 55.825 38.3474 55.9947 38.3536C55.742 38.1874 55.9694 38.0279 56.1161 38.0899C56.0153 37.811 56.4197 37.9969 56.4566 37.958C56.6665 37.634 56.723 37.9045 56.7578 37.8211ZM52.3495 20.5107C53.3596 20.1405 56.3433 21.2486 56.1046 22.716C55.9625 23.053 55.4941 23.246 55.1649 23.0558L54.7353 22.7672C53.9876 22.2663 53.3134 21.8271 52.5107 21.3902C52.0737 21.1733 51.8857 20.7129 52.3495 20.5107ZM58.0967 18.3299L57.7064 18.076C55.6011 16.6976 52.6251 14.6091 57.9028 16.7699C58.5047 17.028 59.3037 17.1807 59.6322 17.7537C60.1478 18.81 58.7909 18.881 58.0967 18.3299ZM58.3328 12.1455C58.1643 11.5042 60.2661 12.2567 60.8781 12.4551L60.9711 12.4903C61.5667 12.7122 62.2491 12.918 62.6046 13.4319C63.0222 14.142 62.1775 14.2891 61.6546 13.9683C60.5822 13.2673 59.4068 12.7384 58.3328 12.1455ZM63.6786 9.15802C62.4953 7.86542 65.6616 9.1037 66.136 9.44737L66.1496 9.45751C66.5034 9.7068 66.4319 10.2437 66.0994 10.4014C65.1533 10.4193 64.4568 9.63045 63.6786 9.15802ZM69.0628 7.74185C67.1819 6.38952 69.6595 7.03275 70.52 7.56271C71.1066 8.08017 70.5025 8.95375 69.0628 7.74185Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M81.0142 50.6746C80.214 50.3483 79.5 49.8034 78.9777 49.1075C78.7962 48.8652 78.7495 48.6099 78.7872 48.3761C78.8301 48.1135 78.9856 47.8752 79.1975 47.7157C79.4099 47.5557 79.6759 47.4762 79.9328 47.5168C80.1565 47.5517 80.3785 47.674 80.5549 47.9276L80.5915 47.9783C80.902 48.3986 81.306 48.7429 81.767 48.9655C82.211 49.1796 82.708 49.2794 83.2219 49.2213C84.2013 49.1109 84.8758 48.5812 85.5931 47.8616C85.6821 47.7709 85.7712 47.6774 85.8602 47.5821C85.9165 47.4959 85.9954 47.4401 86.0822 47.4114C86.1786 47.3787 86.2879 47.381 86.3882 47.4159C86.4845 47.4491 86.5707 47.5134 86.6288 47.5985C86.6834 47.6791 86.715 47.7788 86.7049 47.8937C86.6389 48.6387 86.2496 49.3042 85.6962 49.8265C85.0814 50.4069 84.2666 50.8081 83.4997 50.949C82.655 51.104 81.794 50.993 81.0142 50.6746ZM83.8987 39.1748C84.7974 39.7214 86.1673 40.996 85.2003 42.3512C84.0615 43.5464 82.4229 42.1766 81.6154 41.5567C80.8665 41.0766 80.0247 42.3118 80.7194 42.8725C86.5555 47.195 88.9245 39.318 84.3534 38.5325C83.8496 38.4457 83.6631 39.0058 83.8987 39.1748ZM73.4403 34.1467C73.5394 32.9134 75.417 32.6333 75.6041 33.8538C75.7709 34.947 75.5742 35.9511 75.0817 36.9355C74.6118 37.876 73.4296 37.4376 73.34 36.5811C73.2199 35.4332 73.3783 34.9137 73.4403 34.1467ZM87.7332 33.6007C87.9953 33.2577 88.3734 33.0235 88.8258 33.1559C90.2408 33.5695 89.8238 35.5792 89.3268 36.5569C89.0569 37.0882 88.184 37.2229 87.7896 36.7552C87.1466 35.9928 86.839 34.4695 87.656 33.7183C87.6786 33.6794 87.7034 33.6402 87.7332 33.6007ZM75.062 28.7499L75.2857 28.7107C75.9771 28.5911 76.8364 28.4761 77.3255 29.0323C77.5853 29.3271 77.6743 29.8752 77.3255 30.1574C76.7125 30.654 76.034 30.4616 75.2992 30.5036C74.6935 30.5384 74.1114 30.6387 73.5282 30.8056C72.2479 31.1716 71.2049 31.8396 70.1117 32.5733C69.9686 32.6695 69.8221 32.486 69.8903 32.3517C70.5214 31.1152 71.7441 30.0995 72.9692 29.4803C73.6234 29.1498 74.3385 28.8756 75.062 28.7499ZM86.4434 28.1959L86.6147 28.231C88.4765 28.6202 90.895 29.3979 91.7763 31.2271C91.8101 31.4857 91.7746 31.5412 91.7459 31.5774L91.7363 31.5894C91.712 31.6204 91.6935 31.663 91.5813 31.6982C91.5503 31.6908 91.5188 31.6829 91.4872 31.6746C91.0826 31.5686 90.7631 31.4227 90.4538 31.2713L90.1179 31.1059C89.7286 30.9149 89.3358 30.7309 88.9194 30.595C88.0313 30.3051 87.1173 30.101 86.1898 29.9919C85.9887 29.9683 85.7948 29.9004 85.6421 29.784C85.4973 29.6736 85.3863 29.5206 85.3356 29.3173C85.2702 29.0543 85.2894 28.8551 85.4302 28.6178C85.5362 28.4395 85.6883 28.3159 85.8624 28.245C86.0399 28.1727 86.2422 28.1556 86.4434 28.1959Z" fill="black" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M92.0535 40.9559C90.2667 41.8169 87.7743 40.5468 86.573 39.2169C86.1357 38.7329 85.7982 37.3473 85.9667 36.4688C86.422 34.0891 88.1339 32.6609 89.9415 32.1732C92.4468 31.497 94.9679 33.2101 94.6737 35.2314C94.3954 37.1472 93.9728 39.9264 92.0535 40.9559ZM79.8928 36.3848C79.7497 38.978 77.6681 41.2478 75.1797 41.9206C71.1711 43.0397 69.1898 40.2205 68.2922 37.1833C68.2031 36.8818 67.9935 35.9605 68.5559 35.1705C70.7682 32.0627 76.1506 32.5925 78.8391 33.4457C79.6263 34.1984 79.948 35.2849 79.8928 36.3848ZM93.9947 31.9121C93.9936 31.9136 93.9925 31.9149 93.9914 31.9165C93.9818 31.9109 93.9728 31.9052 93.9637 31.8997C93.9739 31.904 93.9846 31.9077 93.9947 31.9121ZM97.3492 32.2118C97.1159 29.5715 88.8348 30.5825 87.8668 30.7989C85.224 31.5763 82.9418 33.6915 79.9874 32.7617C76.9266 29.3481 66.6186 30.327 64.4576 32.0659C64.0485 31.9054 63.551 31.9915 63.0241 32.143C60.3176 32.0452 47.9623 32.9785 50.4895 36.4339C50.8731 36.7004 51.2562 36.4294 51.2669 35.8811C64.4413 31.1236 63.1638 35.5796 64.7264 35.0595C64.9648 35.1282 65.2138 35.1716 65.4319 35.2173C66.6411 35.6067 67.0514 35.4861 67.2108 36.8441C68.3051 47.3307 82.264 43.7114 81.1195 35.1097C82.2527 35.0477 83.2444 34.5569 84.443 35.0358C85.2753 43.1389 91.7932 43.4657 93.7547 40.6567C95.2339 38.7075 94.6473 35.765 96.6809 34.2315C97.4833 34.9034 97.5352 32.6356 97.3492 32.2118Z" fill="black" />
  </svg>
);

const DefaultContent = () => (
  <p>
    Shadow this content by importing the theme Footer and supplying your own
    props.
  </p>
);

Footer.defaultProps = {
  links: {
    firstCol: [
      { href: "https://www.ibm.com/design", linkText: "Sample" },
      { href: "https://www.ibm.com/design", linkText: "Links" },
      {
        href: "https://www.ibm.com/design",
        linkText: "Column",
      },
      { href: "https://www.ibm.com/design", linkText: "One" },
    ],
    secondCol: [
      {
        href: "https://www.ibm.com/design",
        linkText: "Dribbble",
      },
      {
        href: "https://www.ibm.com/design",
        linkText: "Medium",
      },
      {
        href: "https://www.ibm.com/design",
        linkText: "Twitter",
      },
    ],
  },
  Content: DefaultContent,
  Logo: IBMLogo,
};

Footer.propTypes = {
  /**
   * Specify the first and second columns of your links
   */
  links: PropTypes.exact({
    firstCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
    secondCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
  }),

  /**
   * Specify the first and second columns of your links
   */
  Content: PropTypes.elementType,

  /**
   * Provide a logo to be rendered in the bottom left corner
   */
  Logo: PropTypes.elementType,
};

const currentYear = new Date().getFullYear();

const Content = ({ buildTime }) => {
  return (
    <>
      <p>
        有疑问？发送 <a href="mailto:sample@gmail.com">邮件</a> 咨询
      </p>
      <p>
        上次更新于{buildTime}
        <br />
        Copyright © {currentYear} 泸州邻萌社区服务中心
      </p>
    </>
  )
}



const links = {
  firstCol: [
    {
      href: '/',
      linkText: '回到首页',
    },
    {
      href: '/',
      linkText: '关于我们',
    },
  ],
  secondCol: [
    {
      href: 'https://weibo.com/menggongyi?nick=%E9%82%BB%E8%90%8C%E7%A4%BE%E5%8C%BA%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83&is_all=1',
      linkText: '↗ 微博',
    },
    {
      href: 'https://www.yuque.com/linmengshequ',
      linkText: '↗ 语雀社区',
    },
    { href: 'https://www.instagram.com/ibm/?hl=en', linkText: '↗ Instagram' },
  ],
};

const CustomFooter = props => (
  <Footer {...props} links={links} Content={Content} />
);

export default CustomFooter;
