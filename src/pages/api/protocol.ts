import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const responseBody = {
        id: 529833144,
        node_id: 'R_kgDOH5ScuA',
        name: 'protocol',
        full_name: 'Seeru-crypto/protocol',
        private: false,
        owner: {
            login: 'Seeru-crypto',
            id: 76745760,
            node_id: 'MDQ6VXNlcjc2NzQ1NzYw',
            avatar_url: 'https://avatars.githubusercontent.com/u/76745760?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/Seeru-crypto',
            html_url: 'https://github.com/Seeru-crypto',
            followers_url:
                'https://api.github.com/users/Seeru-crypto/followers',
            following_url:
                'https://api.github.com/users/Seeru-crypto/following{/other_user}',
            gists_url:
                'https://api.github.com/users/Seeru-crypto/gists{/gist_id}',
            starred_url:
                'https://api.github.com/users/Seeru-crypto/starred{/owner}{/repo}',
            subscriptions_url:
                'https://api.github.com/users/Seeru-crypto/subscriptions',
            organizations_url: 'https://api.github.com/users/Seeru-crypto/orgs',
            repos_url: 'https://api.github.com/users/Seeru-crypto/repos',
            events_url:
                'https://api.github.com/users/Seeru-crypto/events{/privacy}',
            received_events_url:
                'https://api.github.com/users/Seeru-crypto/received_events',
            type: 'User',
            site_admin: false,
        },
        html_url: 'https://github.com/Seeru-crypto/protocol',
        description:
            'A Small web-app for transcribing audio files to text and measuring WER value',
        fork: false,
        url: 'https://api.github.com/repos/Seeru-crypto/protocol',
        forks_url: 'https://api.github.com/repos/Seeru-crypto/protocol/forks',
        keys_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/keys{/key_id}',
        collaborators_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/Seeru-crypto/protocol/teams',
        hooks_url: 'https://api.github.com/repos/Seeru-crypto/protocol/hooks',
        issue_events_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/issues/events{/number}',
        events_url: 'https://api.github.com/repos/Seeru-crypto/protocol/events',
        assignees_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/assignees{/user}',
        branches_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Seeru-crypto/protocol/tags',
        blobs_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/git/blobs{/sha}',
        git_tags_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/git/tags{/sha}',
        git_refs_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/git/refs{/sha}',
        trees_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/git/trees{/sha}',
        statuses_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/statuses/{sha}',
        languages_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/languages',
        stargazers_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/stargazers',
        contributors_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/contributors',
        subscribers_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/subscribers',
        subscription_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/subscription',
        commits_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/commits{/sha}',
        git_commits_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/git/commits{/sha}',
        comments_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/comments{/number}',
        issue_comment_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/issues/comments{/number}',
        contents_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/contents/{+path}',
        compare_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/Seeru-crypto/protocol/merges',
        archive_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/{archive_format}{/ref}',
        downloads_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/downloads',
        issues_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/issues{/number}',
        pulls_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/pulls{/number}',
        milestones_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/milestones{/number}',
        notifications_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/notifications{?since,all,participating}',
        labels_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/labels{/name}',
        releases_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/releases{/id}',
        deployments_url:
            'https://api.github.com/repos/Seeru-crypto/protocol/deployments',
        created_at: '2022-08-28T10:46:31Z',
        updated_at: '2022-08-29T13:09:06Z',
        pushed_at: '2022-08-28T20:49:47Z',
        git_url: 'git://github.com/Seeru-crypto/protocol.git',
        ssh_url: 'git@github.com:Seeru-crypto/protocol.git',
        clone_url: 'https://github.com/Seeru-crypto/protocol.git',
        svn_url: 'https://github.com/Seeru-crypto/protocol',
        homepage: '',
        size: 88,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'TypeScript',
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
        topics: [
            'azurespeechservices',
            'nextauth',
            'nextjs',
            'tailwind-css',
            'vercel-deployment',
        ],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
        temp_clone_token: null,
        network_count: 0,
        subscribers_count: 1,
    };

    res.status(200).json(responseBody);
}
