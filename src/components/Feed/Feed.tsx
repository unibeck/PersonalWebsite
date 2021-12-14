import * as React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
// import { feed as feedStyle, feed__item, feed__item_meta, feed__item_meta_time, feed__item_meta_divider, feed__item_meta_category,
//   feed__item_meta_category_link, feed__item_title, feed__item_title_link, feed__item_description, feed__item_readmore }
// // @ts-ignore
//   from '../../styles/Feed.scss';

// @ts-ignore
// import * as styles from './Feed.scss';
// import { feed as feedStyle } from './Feed.css';
import { feed as feedStyle } from './Feed.module.scss';
// import { feed as feedStyle } from './Feeds.module.css';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  // <div className={styles.feed}>
  <div className={feedStyle}>
    {/*{edges.map((edge) => (*/}
    {/*  <div className={feed__item} key={edge.node.fields.slug}>*/}
    {/*    <div className={feed__item_meta}>*/}
    {/*      <time className={feed__item_meta_time} dateTime={moment(edge.node.fields.date).format('MMMM Do, YYYY')}>*/}
    {/*        {moment(edge.node.fields.date).format('MMMM YYYY')}*/}
    {/*      </time>*/}
    {/*      <span className={feed__item_meta_divider} />*/}
    {/*      <span className={feed__item_meta_category}>*/}
    {/*        <Link to={edge.node.fields.categorySlug} className={feed__item_meta_category_link}>{edge.node.frontmatter.category}</Link>*/}
    {/*      </span>*/}
    {/*    </div>*/}
    {/*    <h2 className={feed__item_title}>*/}
    {/*      <Link className={feed__item_title_link} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>*/}
    {/*    </h2>*/}
    {/*    <p className={feed__item_description}>{edge.node.frontmatter.description}</p>*/}
    {/*    <Link className={feed__item_readmore} to={edge.node.fields.slug}>Read</Link>*/}
    {/*  </div>*/}
    {/*))}*/}
  </div>
);

export default Feed;
