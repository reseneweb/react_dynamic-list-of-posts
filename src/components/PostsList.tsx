import React from 'react';
import cn from 'classnames';
import { Post } from '../types/Post';

type Props = {
  userPosts: Post[];
  selectedPost: Post | null;
  handleButtonClick: (post: Post) => void;
};

export const PostsList: React.FC<Props> = ({
  userPosts,
  selectedPost,
  handleButtonClick,
}) => {
  return (
    <div data-cy="PostsList">
      <p className="title">Posts:</p>

      <table className="table is-fullwidth is-striped is-hoverable is-narrow">
        <thead>
          <tr className="has-background-link-light">
            <th>#</th>
            <th>Title</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {userPosts.map(post => (
            <tr data-cy="Post" key={post.id}>
              <td data-cy="PostId">{post.id}</td>
              <td data-cy="PostTitle">
                {post.title}
              </td>

              <td className="has-text-right is-vcentered">
                <button
                  type="button"
                  data-cy="PostButton"
                  className={cn('button is-link',
                    { 'is-light': selectedPost?.id !== post.id })}
                  onClick={() => handleButtonClick(post)}
                >
                  {selectedPost?.id !== post.id ? 'Open' : 'Close'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
