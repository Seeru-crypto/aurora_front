import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const responseBody = {
    id: 503343277,
    node_id: 'R_kgDOHgBorQ',
    name: 'user-registration',
    full_name: 'Seeru-crypto/user-registration',
    private: false,
    owner: {
      login: 'Seeru-crypto',
      id: 76745760,
      node_id: 'MDQ6VXNlcjc2NzQ1NzYw',
      avatar_url: 'https://avatars.githubusercontent.com/u/76745760?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Seeru-crypto',
      html_url: 'https://github.com/Seeru-crypto',
      followers_url: 'https://api.github.com/users/Seeru-crypto/followers',
      following_url: 'https://api.github.com/users/Seeru-crypto/following{/other_user}',
      gists_url: 'https://api.github.com/users/Seeru-crypto/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Seeru-crypto/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Seeru-crypto/subscriptions',
      organizations_url: 'https://api.github.com/users/Seeru-crypto/orgs',
      repos_url: 'https://api.github.com/users/Seeru-crypto/repos',
      events_url: 'https://api.github.com/users/Seeru-crypto/events{/privacy}',
      received_events_url: 'https://api.github.com/users/Seeru-crypto/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/Seeru-crypto/user-registration',
    description:
      'Lightweight web-app which allows users to create a new account, with roles and change their data during it, during the session.',
    fork: false,
    url: 'https://api.github.com/repos/Seeru-crypto/user-registration',
    forks_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/forks',
    keys_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/teams',
    hooks_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/hooks',
    issue_events_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/issues/events{/number}',
    events_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/events',
    assignees_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/assignees{/user}',
    branches_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/branches{/branch}',
    tags_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/tags',
    blobs_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/languages',
    stargazers_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/stargazers',
    contributors_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/contributors',
    subscribers_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/subscribers',
    subscription_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/subscription',
    commits_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/contents/{+path}',
    compare_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/merges',
    archive_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/downloads',
    issues_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/issues{/number}',
    pulls_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Seeru-crypto/user-registration/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/labels{/name}',
    releases_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/releases{/id}',
    deployments_url: 'https://api.github.com/repos/Seeru-crypto/user-registration/deployments',
    created_at: '2022-06-14T12:09:13Z',
    updated_at: '2022-08-29T19:15:15Z',
    pushed_at: '2022-08-29T19:14:25Z',
    git_url: 'git://github.com/Seeru-crypto/user-registration.git',
    ssh_url: 'git@github.com:Seeru-crypto/user-registration.git',
    clone_url: 'https://github.com/Seeru-crypto/user-registration.git',
    svn_url: 'https://github.com/Seeru-crypto/user-registration',
    homepage: '',
    size: 403,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Java',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['axios', 'postgresql', 'prime-react', 'react', 'spring-boot', 'styled-components'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
    temp_clone_token: '',
    allow_squash_merge: true,
    allow_merge_commit: true,
    allow_rebase_merge: true,
    allow_auto_merge: false,
    delete_branch_on_merge: false,
    allow_update_branch: false,
    use_squash_pr_title_as_default: false,
    squash_merge_commit_message: 'COMMIT_MESSAGES',
    squash_merge_commit_title: 'COMMIT_OR_PR_TITLE',
    merge_commit_message: 'PR_TITLE',
    merge_commit_title: 'MERGE_MESSAGE',
    network_count: 0,
    subscribers_count: 1,
  };

  res.status(200).json(responseBody);
}