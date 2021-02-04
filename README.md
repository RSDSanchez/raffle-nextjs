#Raffle microsite developed in Next.js

##Description

Small microsite to join footwear raffles developed using Next.js to ensure Server Side Rendering for SEO optimization, Recoil and Bootstrap (react-bootstrap).

##Instalation

- Download or clone the repository
- Rename `.env.local.example` to `.env-local`
- Rename `data.example.json` to `data.json`
- Install dependencies

```
npm install
```

- Run the environment `npm start` or for development `npm run dev`

##Usage

###Add more Raffles

- Edit `data.json` and add new objects with the structure:
- `id:` unique product id
- `name:` product name
- `start_date:` raffle start date
- `finish_date:` raffle end date
- `description_es` product description in the main language
- `description_en` product description in the secondary language
- `pic_main:` main product picture filename
- `pic_left:` left side product picture filename
- `pic_right:` right side product picture filename
- `formID:` Sales Manago form id

- Copy images in `/images/products/[product_id]/`
