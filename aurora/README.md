This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Project setup

1. navigate to ./aurora
2. Run `docker compose up`
   ~~2. run `docker build -t aurora . && docker run --rm --name aurora -p 5000:3000 aurora`~~

Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

`npx prisma migrate dev --name init`
This command does two things:

It creates a new SQL migration file for this migration
It runs the SQL migration file against the database

npx prisma generate


# Risto's notes

*Due to using Apple Silicon, some nuiances and trade-offs have to be made; please test on your hardware*

## `package.json` commands
- run `replicakey:generate` for generating a key for MongoDB (required for replica set)
- run `prisma:connect` to validate MongoDB connection

## Environment file (examples)
```
DATABASE_URL=mongodb://nextjs:aurora@localhost:27017/aurora
MONGO_INITDB_DATABASE=aurora
MONGO_INITDB_ROOT_USERNAME=nextjs
MONGO_INITDB_ROOT_PASSWORD=aurora
```

## VS Code extensions
[Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)