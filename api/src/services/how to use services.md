# When should I use a service file?

Service files are reserved for frequently used functions that are universal to most of our app. A function should only be extracted into a service file if it is needed in 2 or more **distinct** places.

For example, if I need to get a user's first name but I only have the full name stored in my database, maybe I would use a `splitName` function and make that accessible in a user service file because it will be used in many places.

However, if I need a function like `logoutOfGoogleSSO` or `getGoogleSSOUserData`, that function **should not** use a service file. This function is not useful to the rest of the app and is mostly related to auth. In this case, it should reside in `auth/services/{nameOfFunction}.ts`
