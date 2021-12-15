import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                email
                linkedin
                gitlab
                github
                medium
                phone
              }
            }
            menu {
              label
              path
              isNotGatsbyPage
            }
            url
            title
            subtitle
            disclaimer
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
