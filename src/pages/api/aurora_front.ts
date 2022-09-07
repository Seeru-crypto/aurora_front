import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const responseBody = {
        id: 511476619,
        node_id: 'R_kgDOHnyDiw',
        name: 'aurora_front',
        full_name: 'Seeru-crypto/aurora_front',
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
        html_url: 'https://github.com/Seeru-crypto/aurora_front',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non vehicula arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam.',
        fork: false,
        url: 'https://api.github.com/repos/Seeru-crypto/aurora_front',
        forks_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/forks',
        keys_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/keys{/key_id}',
        collaborators_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/collaborators{/collaborator}',
        teams_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/teams',
        hooks_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/hooks',
        issue_events_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/issues/events{/number}',
        events_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/events',
        assignees_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/assignees{/user}',
        branches_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Seeru-crypto/aurora_front/tags',
        blobs_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/git/blobs{/sha}',
        git_tags_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/git/tags{/sha}',
        git_refs_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/git/refs{/sha}',
        trees_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/git/trees{/sha}',
        statuses_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/statuses/{sha}',
        languages_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/languages',
        stargazers_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/stargazers',
        contributors_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/contributors',
        subscribers_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/subscribers',
        subscription_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/subscription',
        commits_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/commits{/sha}',
        git_commits_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/git/commits{/sha}',
        comments_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/comments{/number}',
        issue_comment_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/issues/comments{/number}',
        contents_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/contents/{+path}',
        compare_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/compare/{base}...{head}',
        merges_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/merges',
        archive_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/{archive_format}{/ref}',
        downloads_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/downloads',
        issues_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/issues{/number}',
        pulls_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/pulls{/number}',
        milestones_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/milestones{/number}',
        notifications_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/notifications{?since,all,participating}',
        labels_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/labels{/name}',
        releases_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/releases{/id}',
        deployments_url:
            'https://api.github.com/repos/Seeru-crypto/aurora_front/deployments',
        created_at: '2022-07-07T10:07:43Z',
        updated_at: '2022-08-04T16:42:46Z',
        pushed_at: '2022-08-04T16:39:17Z',
        git_url: 'git://github.com/Seeru-crypto/aurora_front.git',
        ssh_url: 'git@github.com:Seeru-crypto/aurora_front.git',
        clone_url: 'https://github.com/Seeru-crypto/aurora_front.git',
        svn_url: 'https://github.com/Seeru-crypto/aurora_front',
        homepage: '',
        size: 860,
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
        open_issues_count: 1,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ['docker-compose', 'github-api', 'mongodb', 'nextjs', 'prisma'],
        visibility: 'public',
        forks: 0,
        open_issues: 1,
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
        network_count: 0,
        subscribers_count: 1,
    };

    res.status(200).json(responseBody);
}
