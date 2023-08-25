# Phoenix
<img src="https://github.com/Dubsado/phoenix/assets/3623016/5d064a97-8550-4a1f-a62f-d93845ffb79a" width="300" />

This project is the guts of everything you'd need to build a full stack application in Typescript. 
It has superficial support for the trendy "micro-frontend" idea, but really most clients are separate. 
Which is find because we mostly have distinct lines between our different front end views. 

The backend consists of a few different API's which all live at the top level. This allows 
us to leverage Yarn workspaces to maintain a different set of dependencies per area of the code
whilst also enabling us to share types and other functions between the sub-sections of the codebase. 

## High level

-   Constants folder
    -   ie) a list of all the countries in the world
-   Styled components
    -   it's like Democracy, it's the best thing at all the terrible options
    -   acts like a mini-stylesheet for our component
    -   it's only going to work as well as the standards that we give it
-   Yarn workspaces
    -   does this work with PNPM?
    -   "some weird TS changes were need to get running, but it wasn't much"

## Questions

- [ ]   System components vs. Local components
    -   separate folders?

## Conventions

-   All components live within the `components` folder
    -   A component is a reusable 'piece' of the app (ex: button, video player)
-   All views live within the `views` folder
    -   A view typically denotes a page (ex: sign up, register, feed)
-   All types live within the `types` folder
-   Each component is within a folder with the same name as the component (use CamelCase!)
-   Each component folder contains at least three files:
    -   index.tsx (used to export the component/styled component)
    -   ComponentName.tsx (used for the actual component)
    -   ComponentName.Styled.tsx (used for the styled component)

## Contributors

Daniel             |  Jake             |  Pauline             |  Joe           | Erick
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
<img src="https://user-images.githubusercontent.com/3623016/235787578-413126fe-eb8f-4350-b11b-31cf653c8436.jpg" width="250" /> | <img src="https://user-images.githubusercontent.com/3623016/235787581-66153bff-d2f5-4a33-ba0a-627bc0dd6392.jpg" width="250" /> | <img width="250" src="https://github.com/Dubsado/phoenix/assets/3623016/7ed81a8d-40d9-4bab-9fc8-220763a0d898" />| <img width="250" src="https://github.com/Dubsado/phoenix/assets/3623016/7e3d72ba-b128-4ec0-9b8c-f096f4b93293" /> | <img width="250" src="https://github.com/Dubsado/phoenix/assets/3623016/6003be39-fbe9-4ee3-a56a-eb3aade13add" /> 



