This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run a development


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run a production server

```bash
npm run build
# or
yarn build
# or
pnpm build
```

then

```bash
npm run start
# or
yarn start
# or
pnpm start
```


## Other API

Form config change can be done by a POST request to `/api/config` with JSON body, like
```json
{
    "id": 1,
    "formName": "Code Assessment",
    "fields": [
        {
            "id": 1,
            "name": "Product Name",
            "type": "text"
        },
        {
            "id": 2,
            "name": "Procedure",
            "type": "text"
        },
        {
            "id": 3,
            "name": "Creation Date",
            "type": "date"
        },
        {
            "id": 4,
            "name": "Units",
            "type": "number"
        },
        {
            "id": 5,
            "name": "location",
            "type": "select",
            "options": [
                {
                    "name": "Ho Chi Minh",
                    "value": 1
                },
                {
                    "name": "Ha Noi",
                    "value": 2
                },
                {
                    "name": "New York",
                    "value": 3
                },
                {
                    "name": "Paris",
                    "value": 4
                }
            ]
        }
    ]
}
```
