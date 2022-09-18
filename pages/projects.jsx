import Container from '@/components/Container';
import Meta from '@/components/Meta';
import PageTitle from '@/components/PageTitle';
import styles from '@/components/styles';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
const projects = [
    {
        name: 'Parsinta Exclusive',
        icon: '/images/projects/parsinta-exclusive.svg',
        description: 'Vscode theme for free.',
        url: 'https://parsinta.com/s/psnth',
    },
    {
        name: 'React starter',
        icon: '/images/projects/react.svg',
        description: "It's a react starter project with tailwind css.",
        url: 'https://github.com/teamparsinta/react-starter',
    },
    {
        name: 'Laravel Ebook',
        icon: '/images/projects/books.svg',
        description: 'Learn laravel from scracth.',
        url: 'https://parsinta.com/s/elrvl',
    },
    {
        name: 'irsyadadl/libr',
        icon: '/images/projects/github.svg',
        description: 'Laravel with Bootstrap & React',
        url: 'https://github.com/irsyadadl/libr',
    },
    {
        name: 'irsyadadl/fence',
        icon: '/images/projects/github.svg',
        description:
            'Fence is a package for authentication views using Laravel fortify.',
        url: 'https://github.com/irsyadadl/fence',
    },
    {
        name: 'Irsyad Notes',
        icon: '/images/projects/nextjs.svg',
        description: 'The site you are currently visiting.',
        url: 'https://github.com/irsyadadl/irsyadnotes.com',
    },
    {
        name: 'Github Parsinta',
        icon: '/images/projects/parsinta.svg',
        description: 'Repo for free.',
        url: 'https://github.com/teamparsinta',
    },
];
export default function Projects() {
    return (
        <>
            <Meta
                title="Projects / Irsyad Notes"
                url={`https://irsyadnotes.com/projects`}
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div className="mb-4">
                        <PageTitle>My Projects</PageTitle>
                        <p className={clsx(styles.textMuted, 'mt-2 text-xl')}>
                            Apart from making video tutorials, I also create
                            projects on github.
                        </p>
                    </div>
                    <ol className="mt-6 max-w-xl space-y-4 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50">
                        {projects.map((project, i) => (
                            <li className="flex gap-4" key={i}>
                                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0">
                                    <Image
                                        alt=""
                                        src={project.icon}
                                        decoding="async"
                                        data-nimg="future"
                                        className="h-8 w-8 rounded-full"
                                        loading="lazy"
                                        style={{ color: 'transparent' }}
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <dl className="flex flex-auto flex-wrap gap-x-2">
                                    <dt className="sr-only">Company</dt>
                                    <dd
                                        className={clsx(
                                            styles.textInvert,
                                            'w-full flex-none text-sm font-medium'
                                        )}
                                    >
                                        {project.name}
                                    </dd>
                                    <dt className="sr-only">Role</dt>
                                    <dd
                                        className={clsx(
                                            styles.textMuted,
                                            'text-xs'
                                        )}
                                    >
                                        {project.description}
                                    </dd>
                                </dl>
                            </li>
                        ))}
                    </ol>
                </Container>
            </div>
        </>
    );
}
