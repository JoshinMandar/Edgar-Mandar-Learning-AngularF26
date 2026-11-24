# EdgarMandarLearningAngularF26

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## API

This project uses the [NHTSA vPIC API](https://vpic.nhtsa.dot.gov/api/), a free US government vehicle API that needs no API key.

Example request:
https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json

I chose Option B, httpResource. It gives me loading and error states
as signals, so I don't need subscribe
code. Its value is a writable signal, so my add, edit and delete methods 
still work on the same list.66

Local changes disappear on refresh because edits and deletes only
change data in the browser's memory. 


## Lazy loading

#Before

Initial chunk files | Names         |  Raw size | Estimated transfer size
main-2VWYL26S.js    | main          | 332.55 kB |                88.90 kB
styles-J7R24434.css | styles        |   1.19 kB |               403 bytes

                    | Initial total | 333.74 kB |                89.30 kB

#After

Initial chunk files | Names         |  Raw size | Estimated transfer size
main-VXQGPOKG.js    | main          | 300.61 kB |                82.59 kB
styles-J7R24434.css | styles        |   1.19 kB |               403 bytes

                    | Initial total | 301.80 kB |                82.99 kB

Lazy chunk files    | Names         |  Raw size | Estimated transfer size
chunk-CSMF3oOQ.js   | car-form      |  46.03 kB |                10.46 kB
chunk-4y5S_R9u.js   | car-detail    |   2.17 kB |               961 bytes
chunk-CUYLP8Hl.js   | not-found     | 303 bytes |               303 bytes

Application bundle generation complete. [8.989 seconds] - 2026-11-17T19:12:41.780Z

▲ [WARNING] NG8113: MakeCountryPipe is not used within the template of CarDetail [plugin angular-compiler]

    src/app/car-detail/car-detail.ts:8:54:
      8 │ ...ports: [RouterLink, TitleCasePipe, UpperCasePipe, MakeCountryPipe],
        ╵                                                      ~~~~~~~~~~~~~~~

## localStorage

I store only data the user creates: the list of saved car ids (`car-explorer.saved`, e.g. `[1863,1861]`) and the car list's sort order (`car-explorer.sortOrder`, e.g. `"az"`). The car data itself is not stored because it comes from the NHTSA API on every page load, so saving it would only waste space and go out of date. Secrets such as passwords or auth tokens must never be stored in localStorage, because any script running on the page can read it.
