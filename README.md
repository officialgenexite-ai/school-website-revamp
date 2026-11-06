# School Website Revamp

Is Next.js (App Router) project mein humein wahi folder structure strictly follow karna hai jo humari di gayi directory images mein maujood hai (jisme root level par `app/` aur `src/` ki mukammal separation di gayi).

Website ka sara content, text, aur data pehle se provide ki gayi file aur prompt ke andar mojood hai. Aapko naye structure ke mutabiq project ko setup karna hai:

1. **Folder Structure Compliance:**

   - Frontend routing aur UI pages `app/` directory ke andar rakhe jayein (jaise `app/page.tsx`, `app/admin/`, aur API routes ke liye `app/api/`).

   - Saari backend logic, models, controllers, services, lib (dbConnect), aur constants `src/` directory ke andar configure kiye jayein taake clean architecture maintain rahe.

2. **Data & Content Integration:**

   - Website ke andar jitna bhi text, data, aur sections hain (jo pehli file aur prompt mein diye gaye hain), unhe is naye Next.js structure ke components aur pages ke andar systematically integrate kiya jaye.

3. **Images Adjustment (Home Page):**

   - Jo do images upload ki gayi hain (pehli image jo school ke owner/professor ki hai, aur dusri image jo school ki hai), un dono ko home page par number wise aik ke baad dusri (sequential order mein) behtareen tarike se adjust kiya jaye taake layout professional aur attractive lage.

4. **Tech Stack:**

   - Next.js (App Router), TypeScript, aur Tailwind CSS ko use karte hue responsive aur professional layout banaya jaye.?

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a720a4b8-0ecb-4b98-b7c9-2fb7bf79ddcb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
