export default class AppPage {
  constructor() {
    console.log("Hello world!");
  }
}

window["page"] = new AppPage();
