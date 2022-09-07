import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const responseBody = {
        id: 384622923,
        node_id: 'MDEwOlJlcG9zaXRvcnkzODQ2MjI5MjM=',
        name: 'Dater_FE',
        full_name: 'Seeru-crypto/Dater_FE',
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
        html_url: 'https://github.com/Seeru-crypto/Dater_FE',
        description:
            'Dater is a event manager, which will send out an email or sms if a date is nearing',
        fork: false,
        url: 'https://api.github.com/repos/Seeru-crypto/Dater_FE',
        forks_url: 'https://api.github.com/repos/Seeru-crypto/Dater_FE/forks',
        keys_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/keys{/key_id}',
        collaborators_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/Seeru-crypto/Dater_FE/teams',
        hooks_url: 'https://api.github.com/repos/Seeru-crypto/Dater_FE/hooks',
        issue_events_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/issues/events{/number}',
        events_url: 'https://api.github.com/repos/Seeru-crypto/Dater_FE/events',
        assignees_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/assignees{/user}',
        branches_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Seeru-crypto/Dater_FE/tags',
        blobs_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/git/blobs{/sha}',
        git_tags_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/git/tags{/sha}',
        git_refs_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/git/refs{/sha}',
        trees_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/git/trees{/sha}',
        statuses_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/statuses/{sha}',
        languages_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/languages',
        stargazers_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/stargazers',
        contributors_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/contributors',
        subscribers_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/subscribers',
        subscription_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/subscription',
        commits_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/commits{/sha}',
        git_commits_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/git/commits{/sha}',
        comments_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/comments{/number}',
        issue_comment_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/issues/comments{/number}',
        contents_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/contents/{+path}',
        compare_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/Seeru-crypto/Dater_FE/merges',
        archive_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/{archive_format}{/ref}',
        downloads_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/downloads',
        issues_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/issues{/number}',
        pulls_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/pulls{/number}',
        milestones_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/milestones{/number}',
        notifications_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/notifications{?since,all,participating}',
        labels_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/labels{/name}',
        releases_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/releases{/id}',
        deployments_url:
            'https://api.github.com/repos/Seeru-crypto/Dater_FE/deployments',
        created_at: '2021-07-10T05:59:57Z',
        updated_at: '2022-08-04T07:45:50Z',
        pushed_at: '2022-07-02T12:38:36Z',
        git_url: 'git://github.com/Seeru-crypto/Dater_FE.git',
        ssh_url: 'git@github.com:Seeru-crypto/Dater_FE.git',
        clone_url: 'https://github.com/Seeru-crypto/Dater_FE.git',
        svn_url: 'https://github.com/Seeru-crypto/Dater_FE',
        homepage: 'https://date-manager-front.herokuapp.com/',
        size: 3794,
        stargazers_count: 1,
        watchers_count: 1,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 8,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
            'dockerz',
            'heroku',
            'mongodb',
            'ngnix',
            'primereact',
            'react',
            'redux',
            'spring-boot',
            'styled-components',
            'twilio',
        ],
        visibility: 'public',
        forks: 0,
        open_issues: 8,
        watchers: 1,
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
