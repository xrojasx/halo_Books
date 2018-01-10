// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDfT9P-NRon_tsy99oVPeLnetW_X76hYC8",
    authDomain: "halo-book.firebaseapp.com",
    databaseURL: "https://halo-book.firebaseio.com",
    projectId: "halo-book",
    storageBucket: "halo-book.appspot.com",
    messagingSenderId: "923039976747"
  }
};
